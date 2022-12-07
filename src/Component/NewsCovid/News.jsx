import { useState, useEffect } from 'react'
import axios from "axios"

import '../NewsCovid/News.css'

export  function News() {
const [newsi,setNews] = useState({})

useEffect(()=>{
     axios.get(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0`,{
      headers: {
        'X-RapidAPI-Key': '8c0c5645f4msh17b4e89de7b874ap10eb20jsn3e95f4dad049',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
     }).then(res=>{
         
          setNews({...res.data})
     })
},[])
  
  

  return (
    <div className='all_news'>
    
           {
            newsi.news?.map(({news_id,title,urlToImage,pubDate,link})=>{
              return(
                <div className='n_container' key={news_id}>
                  <p className='title'>{title}</p>
                  <img className='news_img' src={urlToImage} alt="" />
                  <p>{pubDate}</p>
                  <a href="link" className='link'>Link</a>
                </div>
              )
            })
           } 
    </div>
  )
}
