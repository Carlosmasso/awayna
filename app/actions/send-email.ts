"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(1),
  apellidos: z.string().min(1),
  email: z.string().email(),
  telefono: z.string().optional(),
  destino: z.string().optional(),
  mensaje: z.string().min(1),
});

const bookingSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  participants: z.string(),
  specialRequests: z.string().optional(),
  destinationName: z.string(),
  destinationDuration: z.string(),
  tripStartDate: z.string(),
  tripEndDate: z.string(),
  tripPrice: z.number(),
  tripOriginalPrice: z.number().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "invalid_data" };
  }

  const { nombre, apellidos, email, telefono, destino, mensaje } = parsed.data;

  try {
    await resend.emails.send({
      from: "Awayna Contacto <no-reply@awayna.es>",
      to: ["info@awayna.com"],
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

export async function sendBookingEmail(formData: unknown) {
  const parsed = bookingSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "invalid_data" };
  }

  const {
    fullName, email, phone, participants, specialRequests,
    destinationName, destinationDuration,
    tripStartDate, tripEndDate, tripPrice, tripOriginalPrice,
  } = parsed.data;

  try {
    await resend.emails.send({
      from: "Awayna Reservas <no-reply@awayna.es>",
      to: ["info@awayna.com"],
      replyTo: email,
      subject: `Nueva solicitud de reserva — ${destinationName} — ${fullName}`,
      html: `
        <h2 style="color:#A61D2D;">Nueva solicitud de reserva</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;">Nombre</td><td style="padding:8px 12px;">${fullName}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;">Teléfono</td><td style="padding:8px 12px;">${phone}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;">Destino</td><td style="padding:8px 12px;">${destinationName}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;">Duración</td><td style="padding:8px 12px;">${destinationDuration}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;">Fecha</td><td style="padding:8px 12px;">${tripStartDate} → ${tripEndDate}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;">Precio</td><td style="padding:8px 12px;">${tripPrice}€${tripOriginalPrice ? ` <span style="text-decoration:line-through;opacity:0.6;">${tripOriginalPrice}€</span>` : ""}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;">Participantes</td><td style="padding:8px 12px;">${participants}</td></tr>
          ${specialRequests ? `<tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Solicitudes</td><td style="padding:8px 12px;white-space:pre-wrap;">${specialRequests}</td></tr>` : ""}
        </table>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "send_failed" };
  }
}
