import React , {useState}from 'react';
import axios from 'axios'
import NavLink from './NavLink';
import InputForm from './InputForm';
import MemberList from './MemberList';
import MemberCard from './MemberCard'

const ApplyJob=()=>{
  const [page] = useState('Admin')
    return(
        <div >
            {<NavLink/>}
            <div className="container" style={{marginTop:"20px"}}>
            <MemberCard/>
           
            <br/>
            <InputForm/>
            </div>
        </div>
    )
}
export default ApplyJob