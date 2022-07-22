import { NormalizedStation } from "../models/NormalizedStation";
import { getRawStationsData } from "../providers/rawStations.providers";
import { normalizeJSON } from "../utils/json.utils";


export const getStationsNormalized = () =>
    new Promise<NormalizedStation[]>(async (resolve, reject) => {
        try {
            const data = await getRawStationsData();
            const normalizedJSON = normalizeJSON(data["ListaEESSPrecio"]);
            let normalizedStations: NormalizedStation[] = [];

            for (let i = 0; i < normalizedJSON.length; i++)
                normalizedStations.push(NormalizedStation.fromRawData(normalizedJSON[i]));

            return resolve(normalizedStations);

        } catch (err) {
            return reject(err);
        }
    });