import React from 'react';
import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const InputForm = props => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const members = useSelector(state => state.member)

    const addMember = async () => {
        await axios.post(`https://backend-minipj.herokuapp.com/api/members`, form)
        dispatch({
            type: 'ADD_MEMBER', member: {
                no: members.length > 0 ? members[members.length - 1].no + 1 : 0,
                ...form
            }
        })
    }

    return (
        <div className="jumbotron">
            <h2>Add member</h2>
            {form.name} {form.surname} {form.id} {form.tel}
            <table>
                <tbody>
                    <tr>

                        <td>
                            <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
                                placeholder="Name" />

                        </td>
                    </tr>
                    <tr>

                        <td>
                            <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
                                placeholder="Surname" />
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_ID', id: e.target.value })}
                                placeholder="ID" />
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <input className='inpt'
                                type="number"
                                onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })}
                                placeholder="Tel" />
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick={addMember}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm