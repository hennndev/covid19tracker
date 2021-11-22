import React from 'react'
import { MdOutlineUpdate } from 'react-icons/md'

const Header = ({dataCountries, setIsCountry, isCountry}) => {
    return (
        <div className="flex items-start justify-between flex-col space-y-3 md:space-y-0 md:items-center md:flex-row mb-5">
            <h1 className="text-red-600 text-2xl font-bold uppercase">
                COVID-19 Tracker <br />
                <span className="flex items-center text-sm text-gray-500 mt-2 lowercase font-normal">
                    <MdOutlineUpdate className="text-xl mr-2"/>
                    update every 10 minutes
                </span>
            </h1>
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
    )
}

export default Header
