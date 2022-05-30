import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import './ListEmployeeComponent.css'
class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
    }
    
    addEmployee(){
        this.props.history.push("/add-employee");
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
                this.setState({employees: res.data});
        });
    }
    render() {
        return (
            <div>
                <header className="header">
                <div className="logo-content">
                    <img src="/images/logo.png" alt="logo" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
                <div className="main-content">
                <div className="header-content">
                    <div className="emp-detail-text">Employee Details <div className="emp-count"></div>
                    </div>
                  
                    <span>
                        <a href className="add-button" onClick={this.addEmployee}> + Add User</a>
                    </span>

                </div>
            </div>
            </header>
            <table id="display" className="table-main">
                
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>ProfilePic</th>
                            <th>Salary</th>
                            <th>Gender</th>
                            <th>StartDate</th>
                            <th>Department</th>
                            <th>Note</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key={employee.id}>
                                     
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td><img src="{employee.profilePic}"></img></td>
                                       
                                        <td>{employee.salary}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.startDate}</td>
                                        <div className="dept-label"><td>{employee.department}</td></div>
                                        <td>{employee.note}</td>
                                        
                                        <td>
                                            <button  className="btn btn-warning">Update</button>
                                            <button style = {{marginLeft : "10px"}} className="btn btn-danger">Delete</button>
                                        </td>
                                        
                                </tr>
                            )
                        }
                    </tbody>
                
                </table>
            </div>
        );
    }
}

export default ListEmployeeComponent;