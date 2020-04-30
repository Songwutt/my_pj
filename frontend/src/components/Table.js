import React , {useState}from 'react';
import axios from 'axios'
import NavLink from './NavLink';
import InputForm from './InputForm';
import MemberList from './MemberList';
import MemberCard from './MemberCard'

const Table=()=>{
  const [page] = useState('Admin')
    return(
        <div >
            {<NavLink/>}
            <div className="container" style={{marginTop:"20px"}}>
            
            <div className="container-fluid">
         <table className="table table-bordered"  >
        <MemberCard/>
        </table>
           
            <br/>
            <InputForm/>
            </div>
            </div>
        </div>
    )
}
export default Table