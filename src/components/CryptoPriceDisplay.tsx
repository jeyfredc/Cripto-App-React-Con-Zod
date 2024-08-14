import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  const { result, loading } = useCryptoStore();
    console.log(Object.values(result));
    
  const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);
  return (
    <div className="result-wrapper">
  
      {loading ? <Spinner /> : hasResult && 
        <>
          <h2>Cotización</h2>
          <div className="result">
            <img
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt="image Crypto"
            />
            <div>
              <p>
                El precio es de: <span>{result.PRICE}</span>
              </p>
              <p>
                Precio más alto del dia: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                Precio más bajo del dia: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Variación ultimas 24 horas:{" "}
                <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Última actualización: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      }
    </div>
  );
}
