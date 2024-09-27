const SubHeader=({pageType})=>{
    return(
        <div className=' font-bold text-xl text-center my-6 border-gray-200 border-b-4 pd-4'> 
        { pageType ==='contacts'   ? 'List of Contacts' : 'Create Contact'}</div>


    )
}

export default SubHeader