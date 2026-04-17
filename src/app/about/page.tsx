import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="page-wrap">
            <div className="about-grid reveal-in">
                <article className="about-card">
                    <h2>About Me</h2>
                    <p>
                        I am an art student focused on visual storytelling, cultural memory,
                        and movement. My practice combines painting, drawing, and textured
                        surfaces to create pieces that feel both personal and communal.
                    </p>
                    <p>
                        I am currently exploring Caribbean-inspired forms and domestic scenes,
                        especially how color and composition can communicate warmth, nostalgia,
                        and identity.
                    </p>
                    <p>
                        This portfolio is an evolving archive of my process, experiments, and
                        finished artworks.
                    </p>
                </article>

                <aside className="accent-frame">
                    <Image
                        src="images/laura-duran-taino-roots-la-casita-where-rain-sings.jpg"
                        alt="Featured artwork from the Taino Roots series"
                        width={800}
                        height={1000}
                        style={{ width: "100%", height: "auto" }}
                        loading="lazy"
                    />
                </aside>
            </div>
        </section>
    );
}