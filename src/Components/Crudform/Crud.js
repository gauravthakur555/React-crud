import React, { useState } from 'react'
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import './Crud.css'

const Crud = () => {
    const [todo, setTodo] = useState([]);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
    });

    const handles = (e) => {
        e.preventDefault();
        const newval = e.target.value;
        setData({ ...data, [e.target.name]: newval });
    }

    const handleSubmit = (e) => {
        if (!data.firstName && !data.lastName) return;
        e.preventDefault();
        const newtodo = [...todo, data];
        setTodo(newtodo);
        setData({ firstName: '', lastName: '' });
    }

    const handleDelete = (index) => {
        todo.splice(index, 1);
        setTodo([...todo]);
    }

    const handleEdit = (index) => {
        setData(todo[index]);
    }

    const updateItem = (index) => {
        if (!data.firstName && !data.lastName) return;
        // e.preventDefault();
        todo.splice(index, 1, data);
        setTodo([...todo]);
        setData({ firstName: '', lastName: '' })
    }

    const clearInput = (e) => {
        e.preventDefault();
        setData({ firstName: '', lastName: '' });
    }



    return (
        <>
            <div className='container'>
                <h5>First Name:
                    <InputField
                        value={data.firstName}
                        name='firstName'
                        placeholder='firstName'
                        onChange={handles}
                    />
                </h5>
                <h5>Last Name:
                    <InputField
                        value={data.lastName}
                        name='lastName'
                        placeholder='lastName'
                        onChange={handles}
                    />
                </h5>
                <Button value="Submit" onClick={handleSubmit} />
                <Button value="Clear" onClick={clearInput} />

                





            </div>
            <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Action</th>
  </tr>
            {todo.map((item, index, value) => {
                return (
                    <div key={index}>
                        <table key={index}>
                            <tr>
                                <table>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td><Button value='del' onClick={() => handleDelete(index)} /></td>
                                    <td><Button value='edit' onClick={() => handleEdit(index)} /></td>
                                    <td><Button value='update' onClick={() => updateItem(index)} /></td>
                                </table>






                            </tr>

                        </table>

                    </div>
                )
            })}
        </>
    )
}

export default Crud
