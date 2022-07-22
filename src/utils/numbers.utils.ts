
export const spanishNumberToFloat = (number: string) =>
    parseFloat((number || "0").replace(/\./g, '').replace(/,/g, '.'));


export const strToFloat = (number: string) =>
    parseFloat(number || '0');