import axios from 'axios';
import { URLs } from '../constants/urls.constants';

export const getRawStationsData = (): Promise<any> =>
    new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get(URLs.SpainEndpoint);
            return resolve(data);
        } catch (err) {
            return reject(err);
        }
    });