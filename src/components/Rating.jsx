import "../App.css";
import { default as startImage } from "../assets/star.png";

export default function Rating() {
    return(
        <div className="rating">
            <img src={startImage} /> 5.0
            <span className="rating-info"> (6) <i className="comma"></i> USA</span>
        </div>
    );
}