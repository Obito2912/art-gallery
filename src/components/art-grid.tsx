import Image from "next/image";
import type { Artwork } from "@/data/artworks";

type ArtGridProps = {
    items: Artwork[];
};

export function ArtGrid({ items }: ArtGridProps) {
    return (
        <section className="gallery-grid reveal-in delay-2" aria-label="Artwork gallery">
            {items.map((item) => (
                <article className="art-card" key={item.src}>
                    <div className="art-image-wrap">
                        <Image
                            className="art-image"
                            src={item.src}
                            alt={item.title}
                            fill
                            sizes="(max-width: 760px) 100vw, (max-width: 1020px) 50vw, 33vw"
                        />
                    </div>
                    <div className="art-meta">
                        <h3>{item.title}</h3>
                        <p>
                            {item.medium} • {item.year}
                        </p>
                    </div>
                </article>
            ))}
        </section>
    );
}