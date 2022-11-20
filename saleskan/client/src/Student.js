import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
// import GetData from './getData'
const Student = () => {
const[formstate,setFormstate]=useState({})
const[state,setState]=useState([])
 const navigate=useNavigate()
const studentFormData=[{attr:"studentname",type:"text",id:"studentname",label:"studentname:"},{attr:"semister",type:"text",id:"semister",label:"Semister:"},
    {attr:"subject-1",type:"text",id:"English",label:"English:"},
    {attr:"subject-2",type:"text",id:"Maths",label:"Maths:"},
    {attr:"subject-3",type:"text",id:"Science",label:"Science:"}]
    
    const handleUseradd=()=>{
        console.log(formstate)
        axios({
            url:"http://localhost:3006/user/add",
            method:"POST",
            headers:{

            },
            data:formstate
        }).then((res)=>{
// window.alert(res.data)

// window.alert( added successfully`)
window.alert("student added successfully")
// navigate("/login")
navigate("/get")
        }).catch((err)=>{
        window.alert(err.response.data)
        })
}
    const handleInputChange=(e,id)=>{
        if(id!=="studentname"){
            e.target.value=parseInt(e.target.value)
        }
setFormstate({...formstate,[id]:e.target.value})
    }
  return (
    <div>
         <div>
            <form>
{studentFormData.map((formKey)=>{
return (<div>
<div>
    <label for={formKey.id}>{formKey.label}</label>
</div>
<div>
    <input type={formKey.type} id={formKey.id} onChange={(e)=>{handleInputChange(e,formKey.id)}}/>
</div>
</div>)
})}
            </form>
            <button type="button" onClick={handleUseradd}>Submit</button>
            {/* navigate("/get") */}
        </div>
        
        {/* navigate("/get") */}
        {/* <GetData handleUseradd={handleUseradd}/> */}
    </div>
  )
}

export default Student