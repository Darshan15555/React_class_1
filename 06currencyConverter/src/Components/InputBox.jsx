// import React,{useId} from "react";

// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencyDisable = false,
//   className = "",
// }) {

//   const amountInputId=useId();
//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       <div className="w-1/2">
//         <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//           {label}
//         </label>
//         <input
//           id={amountInputId  }
//           type="number"
//           className="outline-none w-full bg-transparent py-1.5"
//           placeholder="amount"
//           disabled={amountDisable}
//           value={amount}
//           onChange={(e) =>
//             onAmountChange && onAmountChange(Number(e.target.value))
//           }
//         />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select
//           className="rounded-md px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//           value={selectCurrency}
//           onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//           disabled={currencyDisable}
//           name=""
//           id=""
//         >
//           {currencyOptions.map((currency) => (
//             <option value={currency} key={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default InputBox;


import React, { useId } from "react";

function InputBox({
  label = "Amount",
  amount = "",
  onAmountChange = () => {},
  onCurrencyChange = () => {},
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white shadow-md rounded-xl p-4 flex gap-4 items-end transition-all duration-200 hover:shadow-lg ${className}`}
    >
      {/* Amount Section */}
      <div className="flex-1">
        <label
          htmlFor={amountInputId}
          className="block text-sm font-medium text-gray-500 mb-1"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          type="number"
          min="0"
          step="any"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Currency Section */}
      <div className="w-40">
        <label className="block text-sm font-medium text-gray-500 mb-1">
          Currency
        </label>

        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currencyOptions.length === 0 ? (
            <option value="">No currencies</option>
          ) : (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
