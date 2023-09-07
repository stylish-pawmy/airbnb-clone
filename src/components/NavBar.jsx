import "../App.css";
import { default as airbnbLogo } from "../assets/airbnb-logo.png";

export default function NavBar() {
    return (
        <header>
            <nav>
                <img src={airbnbLogo} />
            </nav>
        </header>
    );
}
