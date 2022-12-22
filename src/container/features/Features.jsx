import React from 'react'
import { Feature } from '../../components'
import './feature.css'


const featuresData = [
  {
    id:1,
    title:'Improving end distrusts instantly',
    text:'From they fine john he give of rich he.They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    id:2,
    title:'Become the tended active',
    text:'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    id:3,
    title:'Message or am nothing',
    text:'Led ask possible mistress relation elegance eat likewise debating'
  },
  {
    id:4,
    title:'Really boy law',
    text:'Really boy law county she unable her sister.Feet you off its like like six. Among sex are leave law built now. In built table in rapid blush.'
  }

]
const Features = () => {
  return (
    <div className='app__features section__padding' id='features'>
      <div className='app__features-heading'>
        <h2>The Future is Now and You Just Need to Realize it.Step into Future Today & Make it Happen</h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='app__features-container'>
        <div>
          {featuresData.map((item)=> (
            <Feature title={item.title} text={item.text} key={item.id}/>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Features