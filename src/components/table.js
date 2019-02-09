import React from 'react';


export default (props) => {
    const tableRows = props.data.map((items, index) =>{
        console.log(items);
        return(
            <tr key={index}>
                <td>{items.name}</td>
                <td>{items.grade}</td>
                <td>{items.course}</td>
            </tr>

        )

    });
    
    return (
        
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>

                </tr>
            </thead>
            <tbody>
                {tableRows}
                
                {/* <tr>
                    <td>Sean Jaw</td>
                    <td>Biology</td>
                    <td>69</td>
                </tr>
                <tr>
                    <td>Christine Than</td>
                    <td>Chemistry</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>William Darnall</td>
                    <td>Math</td>
                    <td>100</td>
                </tr> */}
            </tbody>

        </table>
    );
}