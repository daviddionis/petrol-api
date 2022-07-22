import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { normalizeJSONKey } from './utils/strings.utils';
import { getStationsNormalized } from './helpers/rawStations.helpers';

const app = express();

const PORT = process.env.PORT || 4000;

const dev = true;

app.use(cors());

if (dev) app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function main() {
    const stations = await getStationsNormalized();
    console.log(stations[0]);
    console.log(stations[0].toJSON());

}
main();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
