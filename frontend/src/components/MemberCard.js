import React, { useEffect }  from 'react';
import './MemberList.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const MemberCard = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const getMembers = async () => {
        const result = await axios.get(`https://backend-minipj.herokuapp.com/api/members`)
       
        const action = {type:'GET_MEMBERS',member: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getMembers()
      }, [])

    const deleteMember = async ()=>{
        await axios.delete(`https://backend-minipj.herokuapp.com/api/members/${props.no}`)
        dispatch({type:'DELETE_MEMBER',no: props.no })
        getMembers()
          
    }
    const updateMember = async () => {
        await axios.put(`https://backend-minipj.herokuapp.com/api/members/${props.no}`,form)
         dispatch(
             {type:'UPDATE_MEMBER',
             no: props.no,
             member:{...form, no:  props.no}
         })
         getMembers()
         
       }
         
       
    
    return(
        <div >
          <h3>{props.name} {props.surname} : {props.id} : {props.Tel} 
          <button onClick={deleteMember}>Delete</button>
          <button onClick={updateMember}>Update</button>
          </h3>
    </div>
    )


}
export default MemberCard
