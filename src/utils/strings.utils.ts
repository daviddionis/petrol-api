
export const normalizeJSONKey = (text: string) =>
    text.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // remove accents
        // remove non-alphanumeric or non-space characters
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .replace(/\s+/g, ' ').trim() // extra spaces
        .replace(/\s/g, '_')
        .toLowerCase(); // to lowercase
