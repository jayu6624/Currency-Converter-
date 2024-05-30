//  import React from "react";
// import { useId } from "react";

// function Inputbox({
//   label,
//   amount,
//   onAmountChange,
//   oncurrencyChange,
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencyDisable = false,
// }) {
//   const amountInputId = useId();

//   return (
//     <div className="w-full">
//       <label className="text-black mb-2 inline-block" htmlFor={amountInputId}>
//         {label}
//       </label>
//       <div className="flex items-center space-x-2">
//         <input
//           id={amountInputId}
//           className="bg-gray-200 outline-none w-full py-1.5 px-2"
//           type="number"
//           placeholder="Amount"
          
          
//           value={amount}
//           onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//         />
//         <select
//           className="bg-gray-200 py-1.5 px-2"
//           value={selectCurrency}
//           onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
//           disabled={currencyDisable}
//         >
//           {currencyOptions.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency.toUpperCase()}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Inputbox;
import React from "react";
import { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountChange,
  oncurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="w-full">
      <label className="text-black mb-2 inline-block float-left m-2 relative top-2  justify-center" htmlFor={amountInputId}>
        {label}
      </label>
      <div className="flex items-center space-x-2">
        <input
          id={amountInputId}
          className="bg-gray-200 outline-none w-full py-1.5 px-2 h-14 rounded-lg"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <select
          className="bg-gray-200 py-1 px-1 h-10 rounded-lg text-xs"
          value={selectCurrency}
          onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
