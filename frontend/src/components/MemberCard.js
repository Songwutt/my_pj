import React, { useEffect }  from 'react';
import './MemberList.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const MemberCard = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const getMembers = async () => {
        const result = await axios.get(`http://localhost/api/members`)
       
        const action = {type:'GET_MEMBERS',member: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getMembers()
      }, [])

    const deleteMember = async ()=>{
        await axios.delete(`http://localhost/api/members/${props.no}`)
        dispatch({type:'DELETE_MEMBER',no: props.no })
        getMembers()
          
    }
    const updateMember = async () => {
        await axios.put(`http://localhost/api/members/${props.no}`,form)
         dispatch(
             {type:'UPDATE_MEMBER',
             no: props.no,
             member:{...form, no:  props.no}
         })
         getMembers()
         
       }
         
       
    
       return(
         
        <div >
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>ID nunber</th>
              <th>Tel.</th>
              <th>Edit</th>
            </tr>
            <tr>
              <td>{props.name}</td>
              <td>{props.surname}</td>
              <td>{props.id}</td>
              <td>{props.tel}</td>
              
              <button onClick={deleteMember}>Delete</button>
              <button onClick={updateMember}>Update</button>
            </tr>
          </table>
        </div>
    
    )
   


}
export default MemberCard
