import React from 'react'
import millify from 'millify'
import { HiPlus } from 'react-icons/hi'

const Card = ({title, total = 0, totalToday = 0, classes, handleClick}) => {
    return (
        <div className={`${classes} rounded-md shadow-md p-5 space-y-3 bg-white cursor-pointer`} onClick={handleClick}>
            <h3 className="text-md text-gray-400">{title}</h3>
            <h1 className="text-3xl flex items-center font-medium">
                <HiPlus className="text-xl"/>
                {millify(totalToday)}
            </h1>
            <p className="text-gray-500 text-sm">{millify(total)} Total</p>
        </div>
    )
}

export default Card
