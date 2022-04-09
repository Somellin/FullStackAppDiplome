import React, {useEffect, useState} from 'react';
import StudentService from "../services/StudentService";


const StudentListConmponent = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const renderTable = () => {
        return students.map(
            students =>
                <tr key={students.id}>
                    <td>{students.id}</td>
                    <td>{students.firstName}</td>
                    <td>{students.lastName}</td>
                    <td>{students.groupId}</td>
                    <td>{students.nickname}</td>
                    <td>{students.emailID}</td>
                </tr>
        )
    }

    return (
        <div className="container">
            <h2 className="text-center">List Students</h2>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Student Id</th>
                    <th>Student First Name</th>
                    <th>Student Last Name</th>
                    <th>Student Group</th>
                    <th>Student Nickname</th>
                    <th>Student Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {renderTable()}
                </tbody>
            </table>
        </div>
    );
};

export default StudentListConmponent;