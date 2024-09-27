import { MdEditNote } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios"
import { useNavigate } from "react-router-dom";
 export const Contact=({contact,updateContactsAfterDel})=>{

    const navigate= useNavigate()
    const deleteContact=()=>{
    axios.delete(`http://localhost:8000/contacts/${contact.id}`)
    .then(()=>{
        
        
        console.log('contact deleted successfully')
        updateContactsAfterDel(contact)
    })
    .catch(()=>{
        console.log("delete unsuceesfull pls try again")
    })}

    const editContact=()=>{
        navigate('/edit',{state:contact})
        

    }

  
    
    return(
        <div className='flex flex-col flex-wrap w-60 m-8 '>
            <div className="flex flex-wrap">
                <span className='text-xl font-bold text-blue-900 '>{contact.name}</span>
                    <span className="mt-2 flex">
                    <MdEditNote onClick={editContact} className="cursor-pointer text-blue-900" />
                    <RiDeleteBin5Fill onClick={deleteContact} className="cursor-pointer text-red-600 "/>
                    </span>
                </div>
                <label className='font-bold'>Email Address:</label>
                <div>{contact.id}</div>
                <label className='font-bold'>Phone NUmber:</label>
                <div>{contact.phone}</div>
        </div>
    )

}
export default Contact