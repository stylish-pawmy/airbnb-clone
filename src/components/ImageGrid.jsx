import "../App.css";
import {default as image_1} from "../assets/grid-images/image_1.jpg";
import {default as image_2} from "../assets/grid-images/image_2.jpg";
import {default as image_3} from "../assets/grid-images/image_3.jpg";
import {default as image_4} from "../assets/grid-images/image_4.jpg";
import {default as image_5} from "../assets/grid-images/image_5.jpg";
import {default as image_6} from "../assets/grid-images/image_6.jpg";
import {default as image_7} from "../assets/grid-images/image_7.jpg";
import {default as image_8} from "../assets/grid-images/image_8.jpg";
import {default as image_9} from "../assets/grid-images/image_9.jpg";



export default function ImageGrid() {
    return(
        <div className="imgages-grid">
            <img src={image_1} />
            <img src={image_2} />
            <img src={image_3} />
            <img src={image_4} />
            <img src={image_5} />
            <img src={image_6} />
            <img src={image_7} />
            <img src={image_8} />
            <img src={image_9} />
        </div>
    );
}