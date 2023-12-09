import React, { useState } from 'react'
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

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

    const updateItem = (e, index) => {
        e.preventDefault();
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
                <InputField
                    value={data.firstName}
                    name='firstName'
                    placeholder='firstName'
                    onChange={handles}
                />

                <InputField
                    value={data.lastName}
                    name='lastName'
                    placeholder='lastName'
                    onChange={handles}
                />
                <Button value="Submit" onClick={handleSubmit} />
                <Button value="Update" onClick={updateItem} />
                <Button value="Clear" onClick={clearInput} />





            </div>
            {todo.map((item, index) => {
                return (
                    <div key={index}>
                        <table key={index}>
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td><button onClick={handleDelete(index)}>Delete</button></td>
                                <td><button onClick={handleEdit(index)}>Edit</button></td>


                            </tr>

                        </table>

                    </div>
                )
            })}
        </>
    )
}

export default Crud
