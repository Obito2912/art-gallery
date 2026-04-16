import Link from "next/link";

export function SiteHeader() {
    return (
        <header className="site-header">
            <Link className="brand" href="/">
                Laura Duran Studio
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}