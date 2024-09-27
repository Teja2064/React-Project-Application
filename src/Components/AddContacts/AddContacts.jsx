import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import SubHeader from "../SubHeader/SubHeader"
import axios from "axios"
import {useNavigate, useLocation} from "react-router-dom"
const AddContacts=()=>{
    let initialContact={
        name:"",
        id:"",
        phone:""
    }
    
    
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    if(location.state?.id){
        initialContact=location.state
        
    }
    const[contact, setContact]=useState(initialContact)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(location.state?.id){
            axios.put(`http://localhost:8000/contacts/${location.state.id}`,contact)
        .then(()=>{
            console.log("contact updated successfully")
            navigate('/')
        })
        .catch((err)=>{
            console.log('Please try again')
        })
        return
        }
        axios.post('http://localhost:8000/contacts',contact)
        .then(()=>{
            console.log("contact added successfully")
            navigate('/')
        })
        .catch((err)=>{
            console.log('Please try again')
        })

    }
    const handleChange=(e)=>{
        e.preventDefault()
        setContact((prevProps)=>({
            ...prevProps,
            [e.target.name]:e.target.value

        }))
    }
    return(
        <div>
            <SubHeader pageType='add'/>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="grid grid-cols-5 grid-flow-rows gap-4">
                    <label className="col-span-2 text-right" htmlFor="name"> Full Name:</label>
                    <input type='text'value={contact.name} name="name"
                    onChange={(e)=>handleChange(e)}
                    className=" col-span-3 w-2/3 shadow appearance-none border border-red-500 rounded   py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>

                </div>
                <div className="grid grid-cols-5 grid-flow-rows gap-4">
                    <label className="col-span-2 text-right" htmlFor="id"> Email:</label>
                    <input type='email' value={contact.id} name="id" onChange={(e)=>handleChange(e)} className=" col-span-3 w-2/3 shadow appearance-none border border-red-500 rounded   py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>

                </div>
                <div className="grid grid-cols-5 grid-flow-rows gap-4" >
                    <label className="col-span-2 text-right" htmlFor="phone" > Telephone Number:</label>
                    <input type='number'  name="phone" id="phone" value={contact.phone} onChange={(e)=>handleChange(e)} className="  col-span-3 w-2/3 shadow appearance-none border border-red-500 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>



                    

                </div>
                <div className="grid grid-cols-5 grid-flow-rows gap-4">
                    <div className="col-start-3 col-span-3 space-y-3">
                        <button 
                            className="w-60 p-1 rounded border-blue-900 border hover:bg-blue-900 hover:text-white">
                            {location.state?.id?"Update":'Add'}
                        </button>
                        <Link to='/'>
                        <button 
                            className="w-60 p-1 rounded border-blue-900 border hover:bg-blue-900 hover:text-white">
                            Cancel
                        </button>
                        </Link>
                    </div>
                </div>
               
            </form>

            
        
        </div>
    )
}

export default AddContacts