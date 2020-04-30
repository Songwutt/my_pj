import React, { useState } from 'react';
import axios from 'axios'
import NavLink from './NavLink';
import InputForm from './InputForm';
import MemberCard from './MemberCard'

const Table = () => {
    const [page] = useState('Admin')
    return (
        <div >
            <div className="container" style={{ marginTop: "10px" }}>
                <div className="container-fluid">
                    <br />
                    <InputForm />
                </div>
            </div>
        </div>
    )
}
export default Table