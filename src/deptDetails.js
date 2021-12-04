import React from "react";

function Dept({ DeptList, handleList, selectedDeptId, employeeList }) {

    const filterData = DeptList.filter((dept) => dept.id === selectedDeptId);

    let filterList = [];

    (filterData || []).forEach((data) => {
    filterList = employeeList.filter((empl) => empl.deptId === data.deptId);
    });

    return (
        <div className="leftSide justify-content-center align-items-center">
        <br /> <br />
        <br /> <br />
        <h1>Department Details</h1>
        <br />
        {filterData.length !== 0 && (
        <div>
            <h2>{filterData[0].parentId}</h2>
            <br />
            <p>Name : {filterData[0].name}</p>
            <p>DepartmentId : {filterData[0].deptId}</p>
            <p>Employees : {filterData[0].employees}</p>
            <br />
            <h3>Employees List</h3>
            <br />
            <table className="table justify-content-center">
            <thead>
                <tr>
                <th>id</th>
                <th>name</th>
                </tr>
            </thead>
            <tbody>
                {filterList.map((data) => {
                return (
                    <tr key={data.id} onClick={() => handleList(data)}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        )}
    </div>
    );
}

export default Dept;
