import React from 'react';
import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const InputForm = props => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const members = useSelector(state => state.member)

    const addMember = async () => {
        await axios.post(`http://localhost/api/members`, form)
        dispatch({
            type: 'ADD_MEMBER', member: {
                no: members.length > 0 ? members[members.length-1].no+1 : 0,
                ...form
            }
        })
    }

    
    return (
        
        
        <div className='form-container'>
           
           {form.name} {form.surname} {form.id} {form.tel} {form.GPA} 
           <form action="/action_page.php">
                
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
                            
                                
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Surname</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
                        />  
                        </td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_ID', id: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td>Tel</td>
                        <td>
                        <input className='inpt'
                                type="number"
                                onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })}
                        />   
                        </td>
                    </tr>
                    

                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick ={addMember}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
                </form>
            
        </div>
       
        
    );
}

export default InputForm