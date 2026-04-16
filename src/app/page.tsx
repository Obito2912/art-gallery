import Link from "next/link";
import { ArtGrid } from "@/components/art-grid";
import { artworks } from "@/data/artworks";

export default function Home() {
  return (
    <section className="page-wrap">
      <div className="hero-card reveal-in">
        <p className="eyebrow">Art Portfolio</p>
        <h1 className="hero-title">Fragments of memory, movement, and home.</h1>
        <p className="hero-copy">
          I am Laura Duran, an art student building visual stories through color,
          texture, and Caribbean-inspired narratives.
        </p>
        <div className="hero-actions">
          <Link href="/about" className="button-primary">
            Read my story
          </Link>
          <Link href="/contact" className="button-ghost">
            Contact me
          </Link>
        </div>
      </div>

      <div className="section-head reveal-in delay-1">
        <h2>Selected Works</h2>
        <p>Recent pieces and ongoing visual explorations.</p>
      </div>

      <ArtGrid items={artworks} />
    </section>
  );
}
