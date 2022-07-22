import { spanishNumberToFloat } from "../utils/numbers.utils";


export interface RawPriceModel {
    precio_bioetanol: string;
    precio_gas_natural_comprimido: string;
    precio_gas_natural_licuado: string;
    precio_gases_licuados_del_petroleo: string;
    precio_gasoleo_a: string;
    precio_gasoleo_b: string;
    precio_gasoleo_premium: string;
    precio_gasolina_95_e10: string;
    precio_gasolina_95_e5: string;
    precio_gasolina_95_e5_premium: string;
    precio_gasolina_98_e10: string;
    precio_gasolina_98_e5: string;
    precio_hidrogeno: string;
}


export interface NormalizedPriceModel {
    // transalte names of raw prices from spanish to english
    bioethanol: number;
    compressedNaturalGas: number;
    liquifiedNaturalGas: number;
    liquifiedPetroleumGases: number;
    dieselA: number;
    dieselB: number;
    premiumDiesel: number;
    gasoline95E10: number;
    gasoline95E5: number;
    premiumGasoline95E5: number;
    gasoline98E10: number;
    gasoline98E5: number;
    hydrogen: number;
}

export class NormalizedPrice implements NormalizedPriceModel {
    constructor(
        public bioethanol: number,
        public compressedNaturalGas: number,
        public liquifiedNaturalGas: number,
        public liquifiedPetroleumGases: number,
        public dieselA: number,
        public dieselB: number,
        public premiumDiesel: number,
        public gasoline95E10: number,
        public gasoline95E5: number,
        public premiumGasoline95E5: number,
        public gasoline98E10: number,
        public gasoline98E5: number,
        public hydrogen: number
    ) { }

    public static fromRawPrice(rawPrice: RawPriceModel) {
        return new NormalizedPrice(
            spanishNumberToFloat(rawPrice.precio_bioetanol),
            spanishNumberToFloat(rawPrice.precio_gas_natural_comprimido),
            spanishNumberToFloat(rawPrice.precio_gas_natural_licuado),
            spanishNumberToFloat(rawPrice.precio_gases_licuados_del_petroleo),
            spanishNumberToFloat(rawPrice.precio_gasoleo_a),
            spanishNumberToFloat(rawPrice.precio_gasoleo_b),
            spanishNumberToFloat(rawPrice.precio_gasoleo_premium),
            spanishNumberToFloat(rawPrice.precio_gasolina_95_e10),
            spanishNumberToFloat(rawPrice.precio_gasolina_95_e5),
            spanishNumberToFloat(rawPrice.precio_gasolina_95_e5_premium),
            spanishNumberToFloat(rawPrice.precio_gasolina_98_e10),
            spanishNumberToFloat(rawPrice.precio_gasolina_98_e5),
            spanishNumberToFloat(rawPrice.precio_hidrogeno)
        );
    }

    public toJSON(): any {
        return {
            bioethanol: this.bioethanol,
            compressed_natural_gas: this.compressedNaturalGas,
            liquified_natural_gas: this.liquifiedNaturalGas,
            liquified_petroleum_gases: this.liquifiedPetroleumGases,
            diesel_a: this.dieselA,
            diesel_b: this.dieselB,
            premium_diesel: this.premiumDiesel,
            gasoline_95_e10: this.gasoline95E10,
            gasoline_95_e5: this.gasoline95E5,
            premium_gasoline_95_e5: this.premiumGasoline95E5,
            gasoline_98_e10: this.gasoline98E10,
            gasoline_98_e5: this.gasoline98E5,
            hydrogen: this.hydrogen
        };
    }

}
