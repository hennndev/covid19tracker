import React, { useState } from 'react'
import { BsSortNumericDown, BsSortNumericUpAlt } from 'react-icons/bs'
import { useFetch } from '../hooks/useFetch'

const RightContent = () => {

    const [isSort, setIsSort] = useState(false)
    const { data } = useFetch('countries')

    const handleSort = () => setIsSort(!isSort)

    let sortingData = data?.sort((a, b) => {
        if(isSort) {
            return a.cases - b.cases
        } else {
            return b.cases - a.cases
        }
    })



    return (
        <div className="w-full lg:w-1/4 bg-white shadow-md rounded-md h-750 overflow-y-scroll p-5">
            <div className="flex items-center justify-between mb-10 text-xl">
                <h1 className="text-gray-500 font-medium">Live cases by country</h1>
                {!isSort ? 
                    <BsSortNumericDown className="cursor-pointer" onClick={handleSort}/> : 
                    <BsSortNumericUpAlt className="cursor-pointer" onClick={handleSort}/>
                }
            </div>
            {sortingData?.map((ctry, idx) => (
                <div className={`flex items-center justify-between mb-1 px-2 ${idx % 2 === 0 && 'bg-gray-100'}`} key={ctry.country}>
                    <p>{ctry?.country}</p>
                    <p>{ctry?.cases.toLocaleString().replaceAll('.', ',')}</p>
                </div>
            ))}
        </div>
    )
}

export default RightContent
