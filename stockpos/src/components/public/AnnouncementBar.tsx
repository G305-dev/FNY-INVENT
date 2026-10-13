import Link from "next/link";
import { Fragment } from "react";

const ticker = [
  "Early access open for shops in Lagos",
  "14-day free trial · no card required",
  "₦120,000 a year after trial",
  "Scan. Sell. Stock falls.",
];

/** Site-wide scrolling marquee strip above the header. */
export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-ink py-2">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-xs text-paper/75 sm:text-sm">
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {ticker.map((t) => (
              <span key={t} className="flex items-center gap-10">
                <span>
                  <span className="mr-2 text-gold">✦</span>
                  {t}
                </span>
              </span>
            ))}
            <Link
              href="/signup"
              className="flex items-center font-medium text-white underline underline-offset-4 hover:text-mist"
            >
              Start free trial →
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
