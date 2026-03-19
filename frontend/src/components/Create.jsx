import { React, useState, useEffect } from "react"
import AxiosInstance from "./Axios"

const Create = () => {

    const [country, setCountry] = useState([])
    const [league, setLeague] = useState([])
    const [charateristic, setcharateristic] = useState([])


    console.log("Country", country)
    console.log("League", league)
    console.log("Characteristic", charateristic)

    const GetData = () => {
        AxiosInstance.get('country/').then((res) => {
            setCountry(res.data)

        })

        AxiosInstance.get('league/').then((res) => {
            setLeague(res.data)

        })

        AxiosInstance.get('characteristic/').then((res) => {
            setcharateristic(res.data)

        })
    }
    useEffect(() => {
        GetData()
    }, [])
    return (
        <div>
            this is Create page
        </div>
    )
}

export default Create
