import React from 'react'
import Card from './Card'

const Cards = ({data, isCases, setIsCases}) => {

    return (
        <div className="grid grid-cols-cards gap-5">
            <Card
                title="Coronavirus Cases"
                totalToday={data?.todayCases} 
                total={data?.cases} 
                active={data?.active}
                classes={`text-red-700 border-red-700 ${isCases === 'todayCases' && 'border-t-4 border-red-600'}`}
                handleClick={() => setIsCases('todayCases')}/>
            <Card
                title="Recovered"
                totalToday={data?.todayRecovered}  
                total={data?.recovered} 
                classes={`text-green-700 border-green-700 ${isCases === 'todayRecovered' && 'border-t-4 border-green-600'}`}
                handleClick={() => setIsCases('todayRecovered')}/>
            <Card 
                title="Deaths"
                totalToday={data?.todayDeaths} 
                total={data?.deaths} 
                classes={`text-gray-700 ${isCases === 'todayDeaths' && 'border-t-4 border-gray-600'}`}
                handleClick={() => setIsCases('todayDeaths')}/>
        </div>
    )
}

export default Cards
