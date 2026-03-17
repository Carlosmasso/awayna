"use server";

import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(1),
  apellidos: z.string().min(1),
  email: z.string().email(),
  telefono: z.string().optional(),
  destino: z.string().optional(),
  mensaje: z.string().min(1),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  const parsed = schema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "invalid_data" };
  }

  const { nombre, apellidos, email, telefono, destino, mensaje } = parsed.data;

  try {
    await resend.emails.send({
      from: "Awayna Contacto <no-reply@awayna.es>",
      to: ["info@awayna.com", "carlos.masso@hotmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${nombre} ${apellidos}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <table style="border-collapse:collapse;width:100%;">
          <tr><td style="padding:8px;font-weight:bold;">Nombre</td><td style="padding:8px;">${nombre} ${apellidos}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${telefono ? `<tr><td style="padding:8px;font-weight:bold;">Teléfono</td><td style="padding:8px;">${telefono}</td></tr>` : ""}
          ${destino ? `<tr><td style="padding:8px;font-weight:bold;">Destino</td><td style="padding:8px;">${destino}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Mensaje</td><td style="padding:8px;white-space:pre-wrap;">${mensaje}</td></tr>
        </table>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "send_failed" };
  }
}
