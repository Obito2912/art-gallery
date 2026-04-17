import Image from "next/image";
import type { ChildrenIllustration } from "@/data/childrenIllustrations";

type ArtGridProps = {
    items: ChildrenIllustration[];
};

export function ArtGrid({ items }: ArtGridProps) {
    return (
        <section className="gallery-grid reveal-in delay-2" aria-label="Artwork gallery">
            {items.
                filter(item => item.src !== "/art-gallery/images/art-3.jpeg").
                map((item) => (
                    <>
                        <article className="art-card" key={item.src}>
                            <div className="art-image-wrap">
                                <Image
                                    className="art-image"
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    loading="lazy"
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
                    </>)
                )}
        </section>
    );
}