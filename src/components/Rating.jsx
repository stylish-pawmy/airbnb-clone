import "../App.css";
import { default as starImage } from "../assets/star.png";

export default function Rating(props) {
    return(
        <div className="rating">
            <img src={starImage} /> {props.rating}
            <span className="rating-info"> ({props.reviewCount}) <i className="comma"></i> {props.location}</span>
        </div>
    );
}