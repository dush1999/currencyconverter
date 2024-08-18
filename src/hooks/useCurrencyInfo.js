import {useEffect, useState} from 'react'


function useCurrecyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/27f06681ceb7fc15dda9de26/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res['conversion_rates']))
    
    }, [currency])

    return data
}
export default useCurrecyInfo;