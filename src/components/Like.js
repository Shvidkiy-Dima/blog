import Link from "next/link";
import React from 'react'
import { useState } from "react";
import axios from 'axios'
import config from '../configs/api.json'


const LikeMap = {
    0: '/static/assets/like/0.png',
    1: '/static/assets/like/1.png',
    2: '/static/assets/like/2.png',
    3: '/static/assets/like/3.png',
    4: '/static/assets/like/4.png',
}


export default function Like({slug}) {

const [LikeCounter, setLikeCounter] = React.useState(null)
const [Index, setIndex] = useState(0)

React.useEffect(async ()=>{
      let data = (await axios.get(`${config.base_url}/api/post/${slug}/info/`)).data
      setLikeCounter(data['summary'])
      setIndex(data['for_user'])
}, [])
  

async function MakeLike(){
    let data = (await axios.post(`${config.base_url}/api/post/${slug}/like/`, data={post: slug})).data
    setLikeCounter(1+LikeCounter)
    setIndex(1+Index)
}

if (LikeCounter === null){
    return null
}


return (
    <div style={{textAlign: 'center'}}>
    <img src={LikeMap[Index]} style={{maxHeight: '50px'}} onClick={MakeLike} />
    <p style={{marginTop: '0%', fontWeight: 'bold', alignSelf: 'center'}}>{LikeCounter}</p>
    </div>
  );
}
