import React, { useEffect } from 'react';
import './MemberCard.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

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

  const deleteMember = async (member_id)=>{
    await axios.delete(`https://backend-minipj.herokuapp.com/api/members/${member_id}`)
    dispatch({type:'DELETE_MEMBER',id: member_id })
    getMembers()
      
}
const updateMember = async (member_id) => {
  await axios.put(`https://backend-minipj.herokuapp.com/api/members/${member_id}`,form)
   dispatch(
       {type:'UPDATE_MEMBER',
      id: member_id,
       member:{...form,id:  member_id}
   })
   getMembers();

  }

  const printMembers = () => {
    if (members && members.length) {
      return members.map((member, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{member.name}</td>
            <td>{member.surname}</td>
            <td>{member.id}</td>
            <td>{member.tel}</td>
            <button onClick={deleteMember}>Delete</button>
            <button onClick={updateMember}>Update</button>
          </tr>

        )
      })
    }
    else {
      return (<h1>No data</h1>)
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