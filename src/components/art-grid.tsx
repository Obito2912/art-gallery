"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { ChildrenIllustration } from "@/data/childrenIllustrations";

type ArtGridProps = {
    items: ChildrenIllustration[];
};

export function ArtGrid({ items }: ArtGridProps) {
    const [isWide, setIsWide] = useState(false);

    useEffect(() => {
        const check = () => setIsWide(window.innerWidth > 760);
        check(); // run on mount
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const filteredItems = isWide
        ? items.filter(item => item.src !== "/art-gallery/images/art-3.webp")
        : items;

    return (
        <section className="gallery-grid reveal-in delay-2" aria-label="Artwork gallery">
            {filteredItems.map((item) => (
                <article className="art-card" key={item.src}>
                    <div className="art-image-wrap">
                        <Image
                            className="art-image"
                            src={item.src}
                            alt={item.title}
                            fill
                            loading={items.indexOf(item) < 3 ? "eager" : "lazy"}
                            sizes="(max-width: 760px) 100vw, (max-width: 1020px) 50vw, 33vw"
                        />
                    </div>
                    <div className="art-meta">
                        <h3>{item.title}</h3>
                        <p>{item.medium} • {item.year}</p>
                    </div>
                </article>
            ))}
        </section>
    );
}