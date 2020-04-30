import React, { useState } from 'react';
import axios from 'axios'
import NavLink from './NavLink';
import InputForm from './InputForm';
import MemberCard from './MemberCard'
import MemberList from './MemberList';

const Table = () => {
    
    return (
        <div >
            <div className="container" style={{ marginTop: "10px" }}>
                <div className="container-fluid">
                    <br />
                    <InputForm />
                    <MemberList/>
                </div>
            </div>
        </div>
    )
}
export default Table