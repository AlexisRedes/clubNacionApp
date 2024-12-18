import React from 'react'
import Home from './component/ComponentHome';

const App = (props) => {

    return <Home serverData={props.serverData}/>
}

export default App