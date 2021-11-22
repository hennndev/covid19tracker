import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Cards from '../components/Cards/Cards'
import Header from '../components/Header/Header'
import Leaflet from '../components/Leaflet/Leaflet'

const LeftContent = () => {

    const [isCountry, setIsCountry] = useState('global')
    const [isCases, setIsCases] = useState('todayCases')

    const { data } = useFetch('all')
    const { data: dataCountries } = useFetch('countries')

    const coordinateCenter = dataCountries?.map(({countryInfo: {long, lat}}) => ({ longitude:long, latitude: lat}) )

    const dataColor = {
        todayCases: '#F90716',
        todayRecovered: '#116530',
        todayDeaths: '#000',
    }

    
    return (
        <div className="w-full lg:w-3/4 mb-10 lg:mr-5">
            <Header dataCountries={dataCountries} isCountry={isCountry} setIsCountry={setIsCountry}/>

            <Cards 
                data={isCountry === 'global' ? data : dataCountries?.find(ctry => ctry.country === isCountry)}
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
