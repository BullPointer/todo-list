import { getApi, setPosition } from "../../database/api";
import '../../css-folder/content.css';
import content from "../content";

export default function(title) {
    const catArr = ['athome', 'work', 'school', 'playground'];
    const state = [
        ...getApi()[catArr[0]],
        ...getApi()[catArr[1]],
        ...getApi()[catArr[2]],
        ...getApi()[catArr[3]],
    ];

    const contentcontainer = document.querySelector('.content');
    const container = document.querySelector('.container');
    if(container) {
        contentcontainer.removeChild(container);
    }
    contentcontainer.appendChild(content(state));
    setPosition('home');
} 
 