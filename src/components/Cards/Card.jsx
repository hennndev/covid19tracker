import React from 'react'
import millify from 'millify'
import { HiPlus } from 'react-icons/hi'

const Card = ({title, total = 0, active = 0, totalToday = 0, classes, handleClick}) => {
    return (
        <div className={`${classes} rounded-md shadow-md p-5 space-y-3 bg-white cursor-pointer`} onClick={handleClick}>
            <h3 className="text-md text-gray-400">{title}</h3>
            <h1 className="text-3xl flex items-center font-medium">
                {totalToday !== 0 && <HiPlus className="text-xl"/>}
                {millify(totalToday)}
            </h1>
            <div className="flex items-center space-x-2">
                {title === 'Coronavirus Cases' && <p className="text-sm">
                    {millify(active)} Active |
                </p> }
                <p className="text-gray-500 text-sm">
                    {millify(total)} Total
                </p>
            </div>
        </div>
    )
}

export default Card
