import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>{
                // console.log(res.json);
                
                return res.json()})
            .then((res)=>{
                console.log(res[currency])
                return setData(res[currency])})

            
            
    },[currency])
    
    return data;
}

export default useCurrencyInfo;

// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!currency) return;

//     setLoading(true);
//     setError(null);

//     fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
//     )
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res[currency]);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [currency]);

//   return { data, loading, error };
// }

// export default useCurrencyInfo;
