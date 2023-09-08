import "../App.css";
import { default as Rating } from "./Rating.jsx";
import { default as Pricing } from "./Pricing.jsx";


export default function Card(props) {
    return(
        <div className="card">
            <img src={props.img} />
            <div className="state-tag">
                {props.state}
            </div>
            <Rating rating={props.rating} reviewCount={props.reviewCount} country={props.country} />
            <h5 className="card-title">{props.title}</h5>
            <Pricing price={props.price} />
        </div>
    );
}