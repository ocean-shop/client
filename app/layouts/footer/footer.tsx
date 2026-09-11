import Link from "next/link";
import {
  FOOTER_BRAND_DESCRIPTION,
  FOOTER_COPYRIGHT,
  FOOTER_LINK_COLUMNS,
  FOOTER_PAYMENT_METHODS,
  FOOTER_SUPPORT,
} from "./constants/footer.constants";

export function Footer() {
  return (
    <footer className="hidden lg:block border-t border-footer-border bg-footer">
      <div className="mx-auto grid max-w-page grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 px-10 py-11">
        <div className="flex flex-col gap-2.5">
          <span className="font-heading text-lg font-semibold">Ocean</span>
          <p className="max-w-[300px] text-pretty text-[13.5px] leading-[1.6] text-muted">
            {FOOTER_BRAND_DESCRIPTION}
          </p>
        </div>

        {FOOTER_LINK_COLUMNS.map((column) => (
          <div key={column.title} className="flex flex-col gap-[9px] text-[13.5px] text-muted">
            <h3 className="pb-0.5 font-semibold text-foreground">{column.title}</h3>
            <ul className="flex flex-col gap-[9px]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-[9px] text-[13.5px] text-muted">
          <h3 className="pb-0.5 font-semibold text-foreground">{FOOTER_SUPPORT.title}</h3>
          <span className="text-[15px] font-semibold text-foreground">{FOOTER_SUPPORT.phone}</span>
          <span>{FOOTER_SUPPORT.email}</span>
          <span>{FOOTER_SUPPORT.hours}</span>
        </div>
      </div>

      <div className="border-t border-footer-border">
        <div className="mx-auto flex max-w-page items-center justify-between px-10 py-4 text-[12.5px] text-muted">
          <span>{FOOTER_COPYRIGHT}</span>
          <span>{FOOTER_PAYMENT_METHODS.join(" · ")}</span>
        </div>
      </div>
    </footer>
  );
}
