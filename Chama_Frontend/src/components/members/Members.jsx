import { useEffect } from 'react'
// import React, {useState} from 'react'
import CustomizedTables from './TableMembers/TableMembers'
import Search from 'antd/es/input/Search'
import axios from "axios"


const Members = () => {

  // const [users,setUsers] = useState([])

  useEffect(() =>{
      loadUsers();
  },[]);

  const  loadUsers = async() =>{
    const results = await axios.get(" ")
    console.log(results)
  }
  return (
    <div className='Member'>
        <Search/>
        <CustomizedTables/>
    </div>
  )
}

export default Members