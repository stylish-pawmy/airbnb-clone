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
        <div className="images-grid">
            <div class="grid-item" id="grid-item-1">
                <img id="grid-item-1" src={image_1} />
            </div>
            <div class="grid-item" id="grid-item-2">
                <img src={image_2} />
                <img src={image_3} />
            </div>
            <div class="grid-item" id="grid-item-3">
                <img src={image_4} />
                <img src={image_5} />
            </div>
            <div class="grid-item" id="grid-item-4">
                <img src={image_6} />
                <img src={image_7} />
            </div>
            <div class="grid-item" id="grid-item-5">
                <img src={image_8} />
                <img src={image_9} />
            </div>
        </div>
    );
}