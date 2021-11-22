import React, { useState } from 'react'
import Cards from '../components/Cards/Cards'
import { useFetch } from '../hooks/useFetch'
import Leaflet from '../components/Leaflet/Leaflet'

const LeftContent = ({dataCountries}) => {

    const [isCountry, setIsCountry] = useState('global')
    const [isCases, setIsCases] = useState('todayCases')

    const { data } = useFetch(isCountry === 'global' ? 'all' : `countries/${isCountry}`)

    const coordinateCenter = dataCountries?.map(({countryInfo: {long, lat}}) => ({ longitude:long, latitude: lat}) )

    const dataColor = {
        todayCases: '#F90716',
        todayRecovered: '#116530',
        todayDeaths: '#000',
    }

    return (
        <div className="w-full lg:w-3/4 mb-10 lg:mr-5">
            <div className="flex items-start space-y-3 md:space-y-0 md:items-center justify-between flex-col md:flex-row mb-5">
                <h1 className="text-red-400 text-2xl font-bold uppercase">COVID-19 Tracker</h1>
                <select 
                    className="border border-gray-400 outline-none rounded-lg p-3" 
                    value={isCountry} 
                    onChange={(e) => setIsCountry(e.target.value)}>

                    <option value="global">Global</option>
                    {dataCountries?.map(ctry => (
                        <option value={ctry?.country} key={ctry?.country}>{ctry?.country}</option>
                    ))}
                </select>
            </div>

            <Cards 
                data={data}
                isCases={isCases}
                setIsCases={setIsCases}/>
            <div className="mt-10">
                <Leaflet 
                    coordinateCenter={coordinateCenter}
                    dataCountries={dataCountries}
                    dataColor={dataColor}
                    isCases={isCases}/>
            </div>
        </div>
    )
}

export default LeftContent
