import React, { useState } from "react";
import "./App.css";
import Dept from "./deptDetails";
import Details from "./employeeDetails";

const employees = [
  {
    id: 1,
    name: "Rahul",
    phoneNo: 9456721834,
    email: "rahul@gmail.com",
    salary: 25000,
    deptId: 1,
    designation: "Testing Engineer",
  },
  {
    id: 2,
    name: "Ranjith",
    phoneNo: 8425631795,
    email: "ranjith@gmail.com",
    salary: 30000,
    deptId: 1,
    designation: "Trainee Software Engineer",
  },
  {
    id: 3,
    name: "Sanjay",
    phoneNo: 9245836711,
    email: "sanjay@gmail.com",
    salary: 40000,
    deptId: 1,
    designation: "Software Engineer",
  },
  {
    id: 4,
    name: "Surya",
    phoneNo: 9455728816,
    email: "surya@gmail.com",
    salary: 28000,
    deptId: 1,
    designation: "Programmer Analyst",
  },
  {
    id: 5,
    name: "Ramya",
    phoneNo: 9684555723,
    email: "ramya@gmail.com",
    salary: 20000,
    deptId: 1,
    designation: "Quality Analyst",
  },
  {
    id: 6,
    name: "Roshini",
    phoneNo: 9164852937,
    email: "roshini@gmail.com",
    salary: 35000,
    deptId: 2,
    designation: "Accounting Supervisor",
  },
  {
    id: 7,
    name: "Suresh",
    phoneNo: 9647552255,
    email: "suresh@gmail.com",
    salary: 32000,
    deptId: 2,
    designation: "Business Analyst ",
  },
  {
    id: 8,
    name: "Mahesh",
    phoneNo: 9215668834,
    email: "mahi@gmail.com",
    salary: 20000,
    deptId: 2,
    designation: "General Accountant",
  },
  {
    id: 9,
    name: "Sujay",
    phoneNo: 9647859242,
    email: "sujay@gmail.com",
    salary: 22000,
    deptId: 2,
    designation: "Staff Accountant",
  },
  {
    id: 10,
    name: "Rashmi",
    phoneNo: 8164593277,
    email: "rashmi@gmail.com",
    salary: 41000,
    deptId: 2,
    designation: "Project Accountant",
  },
  {
    id: 11,
    name: "Shilpa",
    phoneNo: 8549671253,
    email: "shilpa@gmail.com",
    salary: 23000,
    deptId: 3,
    designation: "Production Assistant",
  },
  {
    id: 12,
    name: "Prithvi",
    phoneNo: 9586447782,
    email: "prithvi@gmail.com",
    salary: 34000,
    deptId: 3,
    designation: "Unit Manager",
  },
  {
    id: 13,
    name: "Shourya",
    phoneNo: 9130225547,
    email: "shourya@gmail.com",
    salary: 44000,
    deptId: 3,
    designation: "Production Co-ordinator",
  },
  {
    id: 14,
    name: "Punith",
    phoneNo: 9660157842,
    email: "punith@gmail.com",
    salary: 50000,
    deptId: 3,
    designation: "Production Manager",
  },
  {
    id: 15,
    name: "Prajwal",
    phoneNo: 9862451758,
    email: "prajwal@gmail.com",
    salary: 28000,
    deptId: 3,
    designation: "Location Manager",
  },
  {
    id: 16,
    name: "Cherith",
    phoneNo: 9006412202,
    email: "cherry@gmail.com",
    salary: 45000,
    deptId: 4,
    designation: "Marketing Manager",
  },
  {
    id: 17,
    name: "Sanjana",
    phoneNo: 9080600201,
    email: "sanjana@gmail.com",
    salary: 37000,
    deptId: 4,
    designation: "Communications Manager",
  },
  {
    id: 18,
    name: "Tejasvi",
    phoneNo: 9006020121,
    email: "teju@gmail.com",
    salary: 50000,
    deptId: 4,
    designation: "Content Marketing Specialist",
  },
  {
    id: 19,
    name: "Navya",
    phoneNo: 9901704070,
    email: "navya@gmail.com",
    salary: 40000,
    deptId: 4,
    designation: "Digital Marketing Manager",
  },
  {
    id: 20,
    name: "Ajay",
    phoneNo: 9010845484,
    email: "ajay@gmail.com",
    salary: 35000,
    deptId: 4,
    designation: "Product Marketing Manager",
  },
];
const DeptList = [
  {
    id: 1,
    name: "IT",
    employees: 5,
    parentId: "IT Department",
    deptId: 1,
  },
  {
    id: 2,
    name: "Accounts",
    employees: 5,
    parentId: "Accounts Department",
    deptId: 2,
  },
  {
    id: 3,
    name: "Production",
    employees: 5,
    parentId: "Production Department",
    deptId: 3,
  },
  {
    id: 4,
    name: "Marketing",
    employees: 5,
    parentId: "Marketing Department",
    deptId: 4,
  },
];

function App() {
  const [selectedDeptId, setDeptId] = useState(0);
  const [selectedEmplId, setEmplId] = useState(0);
  const [showModal, setShow] = useState(false);
  const [employeeList, setEmployeeList] = useState(employees)

  function handleClick(dept) {
    setDeptId(dept.id);
  }

  function handleList(data) {
    setEmplId(data.id);
  }  
  
  function handleClose() {
    setShow(false)
  };

  function handleShow() {
    setShow(true)
  };



  return (
    <div className="App">
      <div className="row no-gutters  d-flex fit-content justify-content-center">
        <div className="col-lg-4 no-gutters">
          <div className="rightSide justify-content-center align-items-center">
            <br /> <br />
            <br /> <br />
            <h1> List of Departments </h1>
            <br /> <br />
            <ul>
              {DeptList.map((dept) => {
                return (
                  <div key={dept.id}>
                    <button className="btn" onClick={() => handleClick(dept)}>
                      {dept.parentId}
                    </button>
                    <br /> <br />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 no-gutters">
          <Dept
            DeptList={DeptList}
            handleList={handleList}
            employeeList={employeeList}
            selectedDeptId={selectedDeptId}
          />
        </div>
        <div className="col-lg-4 no-gutters">
          <Details 
            employeeList = {employeeList}
            selectedEmplId = {selectedEmplId}
            showModal = {showModal}
            handleClose= {handleClose}
            handleShow = {handleShow}
            setEmployeeList={setEmployeeList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
