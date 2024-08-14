import axios from "axios"
import { CryptoCurrencyResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import { Pair } from "../types"

export async function getCryptos(){
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const {data: {Data}} = await axios.get(url)
    const result = CryptoCurrencyResponseSchema.safeParse(Data)
    if(result.success){
        return result.data
    }
}


export async function fetchCurrentCryptoPrice(pair:Pair){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const {data: {DISPLAY}} = await axios.get(url)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    if(result.success){
        return result.data
    }
    
}