import { ArtGrid } from "@/components/art-grid";
import { premaking } from "@/data/premaking";

export default function PremakingPage() {
    return (
        <>
            <div className="section-head reveal-in delay-1">
                <h2>Premaking</h2>
                <p>Recent pieces and ongoing visual explorations.</p>
            </div>

            <ArtGrid items={premaking} />
        </>
    );
}
