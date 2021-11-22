import React from 'react'
import LeftContent from './containers/LeftContent'
import RightContent from './containers/RightContent'


const App = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row py-10 px-6 lg:px-12">
			<LeftContent/>
			<RightContent/>
    	</div>
 	)
}

export default App
