import React, { useEffect }  from 'react';
import MemberCard from './MemberCard'
import './MemberList.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const MemberList = ()=>{
    const members = useSelector(state => state.member);
    const dispatch = useDispatch();
    const getMembers = async () => {
        const result = await axios.get(`https://backend-minipj.herokuapp.com/api/members`)
       
        const action = {type:'GET_MEMBERS',member: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getMembers()
      }, [])
       console.log("data",members)
      if (!members || !members.length)
        return (<h2>No data</h2>)

    return(
        <div >
            {
                members.map((member, index) => (
                    <ul key={index} style={{ margin: 5 }}>
                        <MemberCard  {...member}  />
                    </ul>
                ))
            }
        </div>
    )


}
export default MemberList
