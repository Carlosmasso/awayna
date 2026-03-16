import { Link } from "@/i18n/navigation";
import { getLocalizedDestinations } from "@/lib/destinations-data";
import { phones } from "@/lib/info";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const destinations = getLocalizedDestinations(locale);

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logos/awayna-peach.svg"
                alt="Awayna"
                width={160}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              {t("tagline")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@awayna.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  info@awayna.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {phones.map(({ number }) => (
                  <a
                    key={number}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${number.replace(/\s/g, "")}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {number}
                  </a>
                ))}
                {/* <span>{phones.map(({ number }) => number).join(", ")}</span> */}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-background mb-4">
              {t("destinationsCol")}
            </h3>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/destinos/${dest.slug}`}
                    className="text-background/70 hover:text-background transition-colors flex items-center gap-1.5"
                  >
                    {dest.name}
                    {dest.comingSoon && (
                      <span className="text-xs text-primary/80">
                        {t("comingSoon")}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">
              {t("companyCol")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t("aboutLink")}
                </Link>
              </li>
              <li>
                <Link
                  href="/como-funciona"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t("howItWorksLink")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">
              {t("supportCol")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t("contactLink")}
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-cancelacion"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t("cancellationLink")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">{t("copyright")}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <Link
              href="/cookies"
              className="hover:text-background transition-colors"
            >
              {t("cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
