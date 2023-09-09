import "../App.css";
import { default as ExperiencesText } from "./ExperiencesText.jsx";
import { default as Card } from "./Card.jsx";

// Data
import { default as experiencesData } from "../data/experiencesData.js";

export default function Experiences() {
    const experiencesCards = experiencesData.map(
        (experience) => (
            <Card
                    coverImg={experience.coverImg}
                    rating={experience.stats.rating}
                    reviewCount={experience.stats.reviewCount}
                    location={experience.location}
                    title={experience.title}
                    price={experience.price}
            />)
    );

    return (
        <>
            <ExperiencesText />
            <div className="card-container">
                {experiencesCards}
            </div>
        </>
    );
}