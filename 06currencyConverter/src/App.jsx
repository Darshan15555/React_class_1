import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox  from './Components/InputBox' 
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")

  const[convertedAmount,setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from);

  const options=Object.keys(currencyInfo)
  // console.log(options)

  const swap =()=>{
    setFrom(to);
    setTo(from)
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
    
  }


  return (
    <>
      <h1 className='text-center'>Currency Converter </h1>
      <div className="container self-center justify-center w-screen h-screen flex ">
        <form  action=""
          onSubmit={(e)=>{
            e.preventDefault();
            convert();
          }}
          className='w-1/2 mt-9'
        >
          <InputBox 
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount)=>setAmount(amount)}
            className='mt-5'
          />
          <button onClick={swap} className='text-white bg-blue-600 w-10 justify-self-center'>swap</button>
          <InputBox 
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            selectCurrency={to}
            amountDisable
            className='mt-5'
          />

          <button className='w-4/5 bg-blue-400 rounded-lg justify-self-center '>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

        </form>
      </div>
    </>
  )
}

export default App
