import React from 'react';
import Table from './table';

const students = [
    {
        name: 'Kevin Love',
        course: 'Health',
        grade: 10
    },

    {
        name: 'Billy Chen',
        course: 'Physics',
        grade: 100
    },

    {
        name: 'Reggie Hill',
        course: 'Computer Science',
        grade: 23
    },
    
];


export default () => {
    return (<div>
        <h1>Student Grade Table</h1>
        <Table data= {students}/>
    </div>
    );
}