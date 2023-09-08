import "../App.css";

export default function Pricing(props) {
    return(
        <div className="pricing">
            From ${props.price} <span className="pricing-unit"> / person</span>
        </div>
    );
}