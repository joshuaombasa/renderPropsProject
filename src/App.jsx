import React from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Toggle from './Toggle'

function App(props) {


  return (

    <div className="container">
      <Toggle>
        {({on, toggle}) => <Header on={on} toggle={toggle} />}
      </Toggle>

      <Toggle>
        {({on, toggle}) => <Hero on={on} toggle={toggle}/>}
      </Toggle>
      </div>

    // <div className='container'>
    //   <Toggle render={({on, toggle}) => <Header on={on} toggle={toggle} /> }/>
    //   <Toggle render={({on, toggle}) => <Hero on={on} toggle={toggle}/>} />
    // </div>
  )
}

export default App
