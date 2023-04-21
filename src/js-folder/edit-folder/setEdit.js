import { getApi, setApi } from "../../database/api";

export default function(elem, title, items, txtContent, value ) {
    elem.addEventListener('click', () => {
        const api = [getApi()];
        let index = api[0][title].findIndex((obj) => {
            return obj['_id'] == items['_id']
        });

        api[0][title][index][value] = elem[txtContent];
        setApi(api);

    });
} 