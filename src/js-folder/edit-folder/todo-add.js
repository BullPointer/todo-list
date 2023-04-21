import { getApi, getPosition, setPosition } from "../../database/api";
import content from "../content";

export default function(title) {
    const contentcontainer = document.querySelector('.content');
    const container = document.querySelector('.container');
    if(container) {
        contentcontainer.removeChild(container);
    }
    contentcontainer.appendChild(content(getApi()[title]));
    setPosition(title);
}