import { useState } from "react"
import Input from "./components/Input"
import useCurrecyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedamount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrecyInfo(from)

  const object = Object.keys(currencyinfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedamount)
  }

  const convert = () => {
  setConvertedAmount(amount * currencyinfo[to])
  }
  return (
    <>
     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/002/151/433/original/global-currency-exchange-network-and-technology-on-blue-background-vector.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault(); 
                            convert()                          
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount = {amount}
                                currencyoptions={object}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency= {from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount = {convertedamount}
                                currencyoptions={object}
                                onCurrencyChange={(currency) => setTo(currency)}
                                amountDisable
                                selectCurrency={to}  
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
