import React from 'react'
import Logo from '../../img/logo.png'
import './Sidebar.css'
import { SidebarData } from '../../../data/Data'
import { useState } from 'react'
// import  {useNavigate} from "react-router-dom"

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    
    <div className='Sidebar'>
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt="" />
            <span>
                Ch<span>a</span><span>m</span>a
            </span>
        </div>

        {/* {menu} */}
        <div className='menu'>
        {SidebarData.map((item, index) =>{
          return(
            <menu className={selected===index?'menuItem active':'menuItem'}
              key={index}
              onClick={(item)=>{setSelected(index)
                
              }}
              
            >     
                  <item.icon/>
                  <span>
                    {item.heading}
                  </span>
            </menu>
          )
        })}
        </div>
    </div>
  )
}



export default Sidebar
