import { normalizeJSONKey } from "./strings.utils";


export const normalizeJSON = (json: any) => {
    let newJSON = [];

    for (let i = 0; i < json.length; i++) {
        let newObj: any = {};
        for (let j = 0; j < Object.keys(json[i]).length; j++) {
            let key = Object.keys(json[i])[j];
            let value = json[i][key];
            newObj[normalizeJSONKey(key)] = value;
        }
        newJSON.push(newObj);
    }
    return newJSON;
}

