import Link from "next/link";
import { PixelCollie } from "./PixelCollie";
import { SiteNav, type NavItem } from "./SiteNav";

// The frame every page shares: one centred column with the header on top and
// the footer at the bottom. Subsites pass their own name, which is shown after
// the wordmark as "avery.pet / kawaba".
export function SitePage({
  subsite,
  tagline,
  nav = [],
  collie = false,
  lastFetched,
  children,
}: {
  subsite?: { name: string; href: string };
  tagline: string;
  nav?: NavItem[];
  /** Only the home page has the collie in its header. */
  collie?: boolean;
  /** YYYY-MM-DD, the date this part of the site last changed. */
  lastFetched: string;
  children: React.ReactNode;
}) {
  return (
    <div className="site">
      <header className="ap-header">
        <div className="ap-header__main">
          <Link className="ap-wordmark" href="/">
            avery.pet
          </Link>
          {subsite && (
            <>
              <span className="ap-wordmark-slash"> / </span>
              <Link className="ap-wordmark is-sub" href={subsite.href}>
                {subsite.name}
              </Link>
            </>
          )}
          <p className="ap-tagline">{tagline}</p>
        </div>
        {nav.length > 0 && <SiteNav items={nav} />}
        {collie && <PixelCollie />}
      </header>

      <main className="mt-6">{children}</main>

      <footer className="ap-footer">
        <span>
          last fetched <time dateTime={lastFetched}>{lastFetched}</time>
        </span>
        <span>made by hand, by a dog</span>
        <a href="#top">↑ top</a>
      </footer>
    </div>
  );
}
