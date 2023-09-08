import "../App.css";
import { default as ExperiencesText } from "./ExperiencesText.jsx";
import { default as Card } from "./Card.jsx";

// Card Images
import { default as image_1 } from "../assets/japanese.jpg";

export default function Experiences() {
    return (
        <>
            <ExperiencesText />
            <div className="card-container">
                <Card
                    img={image_1}
                    rating="5.0"
                    reviewCount={6}
                    country="USA"
                    title="Japan's century of wisdom"
                    price={136}
                />
            </div>
        </>
    );
}