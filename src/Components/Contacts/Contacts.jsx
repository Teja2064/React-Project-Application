import {Link}  from 'react-router-dom'
import SubHeader from '../SubHeader/SubHeader'
import axios from "axios"
import {useState,useEffect} from "react"
import Contact from '../Contact/Contact'

const Contacts =()=>{
    const [contacts, setContacts]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/contacts")
        .then((res)=>{
            console.log(res)
            setContacts(res.data)
        })

    },[])

    const deleteContact=(contact)=>
        {
            contacts.forEach((value,index)=>{
                let tempContacts = contacts
                if(value.id === contact.id){
                    tempContacts.splice(index,1)
                    setContacts(tempContacts)
                    return
                }
            })
            

        }

    return(
        <>
        <SubHeader pageType='contacts'/>
        <div className='flex justify-center'>
            <Link to='/add'>
        <button className='border-blue-900 border p-4 rounded hover:bg-blue-900 hover:text-white' >Add Contact</button>
        </Link>
        </div>
        <div className='flex flex-wrap justify-ceneter m-6'>
            {contacts.map((contact)=>{
                return(
                <Contact  contact={contact} updateContactsAfterDel={deleteContact} key={contact.id}/>
                )
            })}
            </div>
            
        
        </>
    )

}
export default Contacts