import "../App.css";
import { default as cardImage } from "../assets/japanese.jpg"
import { default as Rating } from "./Rating.jsx";
import { default as Pricing } from "./Pricing.jsx";


export default function Card() {
    return(
        <div className="card">
            <img src={ cardImage } />
            <div className="state-tag">
                Sold Out
            </div>
            <Rating />
            <h5 className="card-title">Japan's century of wisdom</h5>
            <Pricing />
        </div>
    );
}