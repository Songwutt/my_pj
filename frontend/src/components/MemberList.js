import React, { useEffect }  from 'react';
//import MemberCard from './MemberCard'
import './MemberList.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const MemberList =()=>{
  const members = useSelector(state=> state.member);
  const dispatch = useDispatch()
   useEffect(()=>{
      getMembers();
   },[])
   const getMembers = async () => {
      const result = await axios.get(`https://backend-minipj.herokuapp.com/api/members`)
      console.log(result.data)
      dispatch({type:'GET_MEMBERS',member: result.data})
    }

    const printMembers = ()=>{
      if(members && members.length){
          return members.map((member,index)=>{
              return(
               <tr>
                <td>{index+1}</td>
                <td>{member.name}</td>
                <td>{member.surname}</td>
                <td>{member.id}</td>
                <td>{member.tel}</td>
             
               </tr>

                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    }
    return (
    <div className="container-fluid">
         <table className="table table-bordered"  >
                <tr >
                  <th>NO.</th>
                  <th>Firstname</th>
                  <th>Lastname</th> 
                  <th>Id</th>
                  <th>Telephone Number</th>
                 
                </tr>
                    {printMembers()}  
            </table>
                
     
    </div>
  );
}
export default MemberList