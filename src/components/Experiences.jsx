import "../App.css";
import { default as ExperiencesText } from "./ExperiencesText.jsx";
import { default as Card } from "./Card.jsx";

export default function Experiences() {
    return (
        <>
            <ExperiencesText />
            <div className="card-container">
                <Card />
            </div>
        </>
    );
}