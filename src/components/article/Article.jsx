import React from 'react'
import './article.css'
const Article = ({img,title,date}) => {
  return (
    <div className='app__article'>
        <div className='app__article-img'>
            <img src={img} alt="img" />
        </div>
        <div className='app__article-content'>
            <div className='app__article-content_main'>
                <p>{date}</p>
                <h4>{title}</h4>
            </div>
            <a href="#home"className='app__article-content_read'>Read Full Article</a>
        </div>
    </div>
  )
}

export default Article