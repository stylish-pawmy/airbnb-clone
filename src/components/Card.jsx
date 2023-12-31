import "../App.css";
import { default as Rating } from "./Rating.jsx";
import { default as Pricing } from "./Pricing.jsx";


export default function Card(props) {
    
    let badgeText;
    if (props.item.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online")
    {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            <img src={props.item.coverImg} />
            {badgeText && <div className="state-tag">
                {badgeText}
            </div>}
            <Rating rating={props.item.stats.rating} reviewCount={props.item.stats.reviewCount} location={props.item.location} />
            <h5 className="card-title">{props.item.title}</h5>
            <Pricing price={props.item.price} />
        </div>
    );
}