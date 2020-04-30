import React, { useEffect } from 'react';
import './MemberCard.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import InputForm from './InputForm'

const MemberList = () => {

  const members = useSelector(state => state.member);
  const form = useSelector(state => state.form)
  const dispatch = useDispatch()
  useEffect(() => {
    getMembers();
  }, [])
  const getMembers = async () => {
    const result = await axios.get(`https://backend-minipj.herokuapp.com/api/members`)
    console.log(result.data)
    dispatch({ type: 'GET_MEMBERS', member: result.data })
  }

  const deleteMember = async (member_id) => {
    await axios.delete(`https://backend-minipj.herokuapp.com/api/members/${member_id}`)
    dispatch({ type: 'DELETE_MEMBER', id: member_id })
    getMembers()

  }
  const updateMember = async (member_id) => {
    await axios.put(`https://backend-minipj.herokuapp.com/api/members/${member_id}`, form)
    dispatch(
      {
        type: 'UPDATE_MEMBER',
        id: member_id,
        member: { ...form, id: member_id }
      })
    getMembers();
  }
  const printMembers = ()=>{
    if(members && members.length){
        return members.map((member,index)=>{
            return(
                <li key={index}>
                        
                        {member.name}  {member.surname  } : 
                        {member.id}  {member.tel} 
                        <br/>
                        <button style={{marginLeft:"6px" }} className="btn btn-info btn-sm"
                        onClick={updateMember}>Update</button>

                        <button style={{marginLeft:"6px"}} className="btn btn-danger btn-sm"
                        onClick={()=>deleteMember(member._id)}>Delete</button>
                        
                </li> 
            )
        })
    }
    else{
        return(<h1>No data</h1>)
    }
}
return (
<div>
    <div className="jumbotron">
      
    <h1 style={{marginTop:"-30px",color:"red"}}>Edit and Delete Member</h1>
    <ul>
            {printMembers()}
    </ul>

    </div>

    
</div>
);
}
export default MemberList

