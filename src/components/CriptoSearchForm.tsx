import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import Error from "./Error";

export default function CriptoSearchForm() {
  const { cryptoCurrencies , fetchData } = useCryptoStore();

  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocurrency: "",
  });

  const [error,setError]= useState('')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(Object.values(pair).includes('')){
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')
    fetchData(pair)
  }
  return (
    <form className="form"
      onSubmit={handleSubmit}
    >

      {error && <Error children={error} />}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
          value={pair.criptocurrency}
        >
          <option value="">-- Seleccione --</option>
          {cryptoCurrencies.map((cryptoCurrencie) => (
            <option
              key={cryptoCurrencie.CoinInfo.Name}
              value={cryptoCurrencie.CoinInfo.Name}
            >
              {cryptoCurrencie.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
