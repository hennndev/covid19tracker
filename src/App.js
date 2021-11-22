import React from 'react'
import LeftContent from './containers/LeftContent'
import RightContent from './containers/RightContent'
import { useFetch } from './hooks/useFetch'

const App = () => {

	const { data } = useFetch('countries')
	

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row py-10 px-12">
			<LeftContent dataCountries={data}/>
			<RightContent dataCountries={data}/>
    	</div>
 	)
}

export default App
