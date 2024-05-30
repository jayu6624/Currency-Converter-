// import { useState } from "react";
// import { Inputbox } from "./components";
// import useCurrencyinfo from "./hooks/useCurrencyinfo";


// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [converted, setConverted] = useState(0);
//   const currencyInfo = useCurrencyinfo('from');
//   const options = Object.keys('currencyInfo');

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConverted(amount);
//     setAmount(converted);
//   };

//   const convert = () => {
//     setConverted(amount * currencyInfo[to]);
//   };

//   return (
//     <>
//     <div className="border border-gray-900 rounded-lg bg-slate-500 text-white">Currency converter</div>
//       <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//           backgroundImage:`url('assets/images/back.jpg')`,
//         }}
//       >
//         <div className="w-full">
//           <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 convert();
//               }}
//             >
//               <div className="w-full mb-1">
//                 <Inputbox
//                   label={from.toUpperCase()}
//                   amount={amount}
//                   currencyOptions={options}
//                   onAmountChange={setAmount}
//                   oncurrencyChange={setFrom}
//                   selectCurrency={from}
//                 />
//               </div>
//               <div className="relative w-full h-0.5 my-4">
//                 <button
//                   type="button"
//                   className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
//                   onClick={swap}
//                 >
//                   Swap
//                 </button>
//               </div>
//               <div className="w-full mt-1 mb-4">
//                 <Inputbox
//                   label={to.toUpperCase()}
//                   amount={converted}
//                   currencyOptions={options}
//                   oncurrencyChange={setTo}
//                   selectCurrency={to}
//                   amountDisable
//                   onAmountChange={()=>setAmount(amount)}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//               >
//                 Convert {from.toUpperCase()} to {to.toUpperCase()}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import { Inputbox } from "./components";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [converted, setConverted] = useState(0);
  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConverted(amount);
    setAmount(converted);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConverted(amount * currencyInfo[to]);
    }
  };

  return (
    <>
      <div className=" items-center w-[46.5%] p-3 my-4 m-auto borderborder-gray-600 rounded-lg text-black backdrop-blur-sm bg-white/30">Currency converter</div>
      <div
        className="w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/back.jpg)`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full">
                <Inputbox
                  label={from.toUpperCase()}
                  amount={amount}
                  currencyOptions={options}
                  onAmountChange={setAmount}
                  oncurrencyChange={setFrom}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full  box-border ">
                <button
                  type="button"
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-3 border-white rounded-md bg-blue-500 text-white px-3 py-2.5 mb-3 top-1"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-6 ">
                <Inputbox
                  label={to.toUpperCase()}
                  amount={converted}
                  currencyOptions={options}
                  oncurrencyChange={setTo} 
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-[40%] bg-blue-600 text-white px-4 py-3 rounded-lg text-xs border-2  hover:border-black transition-colors"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
