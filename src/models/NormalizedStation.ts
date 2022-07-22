import { spanishNumberToFloat } from "../utils/numbers.utils";
import { NormalizedPrice, RawPriceModel } from "./NormalizedPrice";

export interface RawStationModel {
    cp: string;
    direccion: string;
    horario: string;
    latitud: string;
    localidad: string;
    longitud_wgs84: string;
    margen: string,
    municipio: string;
    provincia: string;
    remision: string;
    rotulo: string;
    tipo_venta: string;
    ideess: string;
    idmunicipio: string;
    idprovincia: string;
    idccaa: string;
}

export interface NormalizedStationModel {
    id: number;
    idCity: number;
    idProvince: number;
    idAutonomousCommunity: number;
    schedule: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    margin: string;
    remission: string;
    label: string;
    typeOfSale: string;
    prices: NormalizedPrice;
}

export class NormalizedStation implements NormalizedStationModel {

    constructor(
        public id: number,
        public idCity: number,
        public idProvince: number,
        public idAutonomousCommunity: number,
        public schedule: string,
        public address: string,
        public city: string,
        public province: string,
        public postalCode: string,
        public latitude: number,
        public longitude: number,
        public margin: string,
        public remission: string,
        public label: string,
        public typeOfSale: string,
        public prices: NormalizedPrice
    ) { }

    public static fromRawData(rawStation: RawStationModel & RawPriceModel) {
        return new NormalizedStation(
            parseInt(rawStation.ideess),
            parseInt(rawStation.idmunicipio),
            parseInt(rawStation.idprovincia),
            parseInt(rawStation.idccaa),
            rawStation.horario,
            rawStation.direccion,
            rawStation.localidad,
            rawStation.provincia,
            rawStation.cp,
            spanishNumberToFloat(rawStation.latitud),
            spanishNumberToFloat(rawStation.longitud_wgs84),
            rawStation.margen,
            rawStation.remision,
            rawStation.rotulo,
            rawStation.tipo_venta,
            NormalizedPrice.fromRawPrice(rawStation)
        );
    }

    public toJSON(): any {
        return {
            id: this.id,
            id_city: this.idCity,
            id_province: this.idProvince,
            id_autonomous_community: this.idAutonomousCommunity,
            schedule: this.schedule,
            address: this.address,
            city: this.city,
            province: this.province,
            postal_code: this.postalCode,
            latitude: this.latitude,
            longitude: this.longitude,
            margin: this.margin,
            remission: this.remission,
            label: this.label,
            type_of_sale: this.typeOfSale,
            prices: this.prices.toJSON()
        };
    }
}