import "../App.css";
import { default as ExperiencesText } from "./ExperiencesText.jsx";
import { default as Card } from "./Card.jsx";

// Data
import { default as experiencesData } from "../data/experiencesData.js";

export default function Experiences() {
    const experiencesCards = experiencesData.map(
        (experience) => (
            <Card
                    key={experience.id}
                    item={experience}
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