import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import StudentService from "../services/StudentService";

const AddOrUpdateStudentComponent = () => {


    const [fullName, setFullName] = useState('');
    const [groupId, setGroupId] = useState('');
    const [handle, setHandle] = useState('');
    const [emailID, setEmailID] = useState('');

    const [handleError, setHandleError] = useState(false);

    const navigate = useNavigate();

    const {id} = useParams();

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        const student = {
            fullName,
            groupId,
            handle,
            emailID
        }

        if (id){
            StudentService.updateStudentById(id,student).then((response) => {
                console.log(response.data)
                navigate('/students')
            }).catch(error => {
                console.log(error)
            })
        } else {
            StudentService.createStudent(student).then((response) => {
                console.log(response.data)
                navigate('/students')
            }).catch(error => {
                console.log(error)
                setHandleError(true);
            })
        }
    }

    const handleErrorHandler = () => {
        if (handleError){
            return <p style={{color:"red"}}>
                        Пользователя с таким Хендлом не существует.
                    </p>
        }
    }

    useEffect(() => {
        if (id) {
            StudentService.getStudentById(id).then((response) => {
                setFullName(response.data.fullName)
                setGroupId(response.data.groupId)
                setHandle(response.data.handle)
                setEmailID(response.data.emailID)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [])

    const title = () =>{
        if(id)
            return <h2 className="text-center">Обновить данные</h2>
        else
            return <h2 className="text-center mt-3">Добавление студента</h2>
    };

    return (
        <div>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form onSubmit={(e) => saveOrUpdateStudent(e)}>
                                <div className="form-group mb-2">
                                    <label className="form-label">Имя:</label>
                                    <input
                                        type="text"
                                        placeholder="Введите ФИО"
                                        name="firstName"
                                        className="form-control"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Группа:</label>
                                    <input
                                        type="text"
                                        placeholder="Введите группу"
                                        name="groupId"
                                        className="form-control"
                                        value={groupId}
                                        onChange={(e) => setGroupId(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Хендл:</label>
                                    <input
                                        type="text"
                                        placeholder="Введите хендл с codeforces"
                                        name="handle"
                                        className="form-control"
                                        value={handle}
                                        onChange={(e) => setHandle(e.target.value)}
                                    />
                                    {
                                        handleErrorHandler()
                                    }
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="validationFormCheck2" className="form-label">Email:</label>
                                    <input
                                        id="validationFormCheck2"
                                        required
                                        type="email"
                                        placeholder="Введите Email"
                                        name="emailID"
                                        className="form-control"
                                        value={emailID}
                                        onChange={(e) => setEmailID(e.target.value)}
                                    />
                                </div>

                                <button className="btn btn-success m-1" type="submit">Сохранить</button>
                                <Link to="/students" className="btn btn-danger">Отмена</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOrUpdateStudentComponent;