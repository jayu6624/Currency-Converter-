// import { useEffect,useState } from "react";

// function useCurrencyinfo(currency){
//     const [data,setdata] = useState({})
//     useEffect(()=>{
//         fetch(`https://v6.exchangerate-api.com/v6/13c67255d1a9e744df50ce4b/latest/${currency}`)
//         .then((res)=>res.json()) 
//         .then((res)=>res.setdata())
//         console.log(data);
//     },[currency])
//     return data;
                       
// }

// export default useCurrencyinfo;
import { useState, useEffect } from "react";

const useCurrencyinfo = (base) => {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/13c67255d1a9e744df50ce4b/latest/${base}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCurrencyInfo(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    if (base) {
      fetchCurrencyInfo();
    }
  }, [base]);

  return currencyInfo;
};

export default useCurrencyinfo;
