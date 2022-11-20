import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
const GetData = () => {
    const [data, setData] = useState([])//
    useEffect(() =>{
        axios({
            method: "GET",
            url: "http://localhost:3006/user/getdata",
            
        }).then((userData) => {
            console.log(userData.data)
            setData(userData.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div style={{color:"green"}}>
        {/* this is fetching */}
        <div style={{color:"purple"}}>Average of marks subjectwise corresponding to each student</div>
        { 
           data
        }
    </div>
  )
}

export default GetData