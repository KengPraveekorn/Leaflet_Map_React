// rafce
import React,{ useEffect,useState } from 'react'
import Papa from 'papaparse'

const CSVFileLocal = () => {
    const [data, setData] = useState(null)

    // แวะมาทำนี่ก่อน ก่อนจะ return render
    useEffect(()=>{
        // code
        fetchData();

    },[]) // [] กัน infinity loop

    // async การทำงานแบบรอฉันด้วย ให้ฉันทำให้เสร็จก่อนแล้วค่อยไป
    const fetchData = async ()=>{
        const file = process.env.PUBLIC_URL+ '\asset\Airport.csv'
        const res = await fetch(file)
        const text  = await res.text();

        const json = Papa.parse(text,{header:true}).data

        // console.log('res', res);
        console.log('res', json);
    }

  return null
}

export default CSVFileLocal
