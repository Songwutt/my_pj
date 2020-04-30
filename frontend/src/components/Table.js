import React, { useState } from 'react';
import axios from 'axios'
import NavLink from './NavLink';
import InputForm from './InputForm';
import MemberCard from './MemberCard'
import MemberList from './MemberList';

const Table = () => {
    
    return (
        <div >
            <img
            src={'https://cdn3.iconfinder.com/data/icons/basic-ui-1-regular/64/1_1_add_friend_member_people_plus_person_human-512.png'}
            alt="Cinque Terre" width="300" height="200"
          />
          <br></br>
          <h1>Add Member</h1>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="container" style={{ marginright: "100" }}>
                    <br />
                    <InputForm />
                  
                </div>
            </div>
        </div>
    )
}
export default Table