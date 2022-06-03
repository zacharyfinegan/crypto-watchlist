export interface Coin {
    id: string;
    rank: number;
    symbol: string;
    name: string;
    supply:number;
    maxSupply:number;
    marketCapUsd:number;
    priceUsd:number;
    changePercent24Hr:number;
    vwap24Hr:number;
    explorer:string;
    timestamp:number;
}
