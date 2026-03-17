"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendContactEmail } from "@/app/actions/send-email";

const schema = z.object({
  nombre: z.string().min(1),
  apellidos: z.string().min(1),
  email: z.string().email(),
  telefono: z.string().optional(),
  destino: z.string().optional(),
  mensaje: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

interface ContactFormProps {
  destinations: { slug: string; name: string }[];
}

export function ContactForm({ destinations }: ContactFormProps) {
  const t = useTranslations("pages.contact");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormValues) {
    const result = await sendContactEmail(data);
    if (result.success) {
      toast.success(t("successTitle"), { description: t("successMessage") });
      reset();
    } else {
      toast.error(t("errorTitle"), { description: t("errorMessage") });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm"
    >
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("nameLabel")}
            </label>
            <Input
              id="nombre"
              type="text"
              placeholder={t("namePlaceholder")}
              className="w-full"
              {...register("nombre")}
            />
          </div>
          <div>
            <label
              htmlFor="apellidos"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("surnameLabel")}
            </label>
            <Input
              id="apellidos"
              type="text"
              placeholder={t("surnamePlaceholder")}
              className="w-full"
              {...register("apellidos")}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t("emailInputLabel")}
          </label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="w-full"
            {...register("email")}
          />
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t("phoneLabel")}
          </label>
          <Input
            id="telefono"
            type="tel"
            placeholder={t("phonePlaceholder")}
            className="w-full"
            {...register("telefono")}
          />
        </div>

        <div>
          <label
            htmlFor="destino"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t("destinationLabel")}
          </label>
          <select
            id="destino"
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            {...register("destino")}
          >
            <option value="">{t("destinationPlaceholder")}</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t("messageLabel")}
          </label>
          <textarea
            id="mensaje"
            rows={6}
            placeholder={t("messagePlaceholder")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            {...register("mensaje")}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isSubmitting ? t("sendingButton") : t("sendButton")}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          {t("privacyNote")}
        </p>
      </div>
    </form>
  );
}
