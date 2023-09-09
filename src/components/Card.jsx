import "../App.css";
import { default as Rating } from "./Rating.jsx";
import { default as Pricing } from "./Pricing.jsx";


export default function Card(props) {
    
    let badgeText;
    if (props.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online")
    {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            <img src={props.coverImg} />
            {badgeText && <div className="state-tag">
                {badgeText}
            </div>}
            <Rating rating={props.rating} reviewCount={props.reviewCount} location={props.location} />
            <h5 className="card-title">{props.title}</h5>
            <Pricing price={props.price} />
        </div>
    );
}