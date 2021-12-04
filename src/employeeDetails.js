import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
function Details({
    employeeList,
    selectedEmplId,
    showModal,
    handleClose,
    handleShow,
    setEmployeeList,
}) {
    const [emplDetails, setEmployeeDetails] = useState({});
    const [udpateEmployeeDetails, setUpdatedEmployeeDetails] = useState({});

    useEffect(() => {
        const selectedEmployee = employeeList.find(
        (empl) => empl.id === selectedEmplId
        );
    setEmployeeDetails(selectedEmployee);
    setUpdatedEmployeeDetails(selectedEmployee);
    }, [selectedEmplId]);

    function handleEdit() {

        setEmployeeDetails(udpateEmployeeDetails);

        const newEmployeeList = []
        employeeList.forEach((empl) => {
        if (empl.id === selectedEmplId) {
            newEmployeeList.push(udpateEmployeeDetails);
        }
        else {
            newEmployeeList.push(empl);
        }
        });
        setEmployeeList(newEmployeeList)
    }

    return (
    <div className="left justify-content-center align-items-center">
        <br /> <br />
        <br /> <br />
        <h1>Employee Details</h1>
        <br />
        <br />
        {emplDetails && Object.keys(emplDetails) !== 0 && (
        <div>
            <br />
            <p>Id : {emplDetails.id}</p>
            <p>Name : {emplDetails.name}</p>
            <p>Designation: {emplDetails.designation}</p>
            <p>Salary : {emplDetails.salary}</p>
            <p>emailId : {emplDetails.email}</p>
            <p>phoneNo: {emplDetails.phoneNo}</p>
            <br />
            <button class="btn-1" onClick={handleShow}>
            Edit
            </button>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Edit Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                <p>
                Name : {emplDetails.name}
                <br />
                <input
                    className="input"
                    type="text"
                    value={udpateEmployeeDetails.name}
                    onChange={(e) =>
                    setUpdatedEmployeeDetails((prevState) => {
                        return {
                        ...prevState,
                        name: e.target.value,
                        };
                    })
                    }
                />
                </p>
                <p>
                Designation: {emplDetails.designation}
                <br />
                <input
                    className="input"
                    type="text"
                    value={udpateEmployeeDetails.designation}
                    onChange={(e) =>
                    setUpdatedEmployeeDetails((prevState) => {
                        return {
                        ...prevState,
                        designation: e.target.value,
                        };
                    })
                    }
                />
                </p>
                <p>
                Salary : {emplDetails.salary}
                <br />
                <input
                    className="input"
                    type="text"
                    value={udpateEmployeeDetails.salary}
                    onChange={(e) =>
                    setUpdatedEmployeeDetails((prevState) => {
                        return {
                        ...prevState,
                        salary: e.target.value,
                        };
                    })
                    }
                />
                </p>
                <p>
                emailId : {emplDetails.email}
                <br />
                <input
                    className="input"
                    type="text"
                    value={udpateEmployeeDetails.email}
                    onChange={(e) =>
                    setUpdatedEmployeeDetails((prevState) => {
                        return {
                        ...prevState,
                        email: e.target.value,
                        };
                    })
                    }
                />
                </p>
                <p>
                phoneNo: {emplDetails.phoneNo}
                <br />
                <input
                    className="input"
                    type="text"
                    value={udpateEmployeeDetails.phoneNo}
                    onChange={(e) =>
                    setUpdatedEmployeeDetails((prevState) => {
                        return {
                        ...prevState,
                        phoneNo: e.target.value,
                        };
                    })
                    }
                />
                </p>
            </ul>
            </Modal.Body>
            <Modal.Footer>
            <button className="btn-1" onClick={handleClose}>
                Close
            </button>
            <button className="btn-1" onClick={handleEdit}>
                Save
            </button>
            </Modal.Footer>
        </Modal>
        </div>
    )}
    </div>
    );
}

export default Details;
