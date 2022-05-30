import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'


export default function HomePage() {
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
            </header>


            <div className="main-content">
                <div className="header-content">
                    <div className="emp-detail-text">Employee Details <div className="emp-count">10</div>
                    </div>
                    <span>
                          <Link to="/payrollForm">Add User</Link>
                    </span>
                </div>
            </div>


            <table id="display" className="table-main">
                <tbody><tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                    <tr>
                        <td><img className="profile" alt="" src="/images/Ellipse -3.png" />
                        </td>
                        <td>Mangesh Bhujang</td>
                        <td>male</td>
                        <td>
                            <div className="dept-label">Sales</div>
                            <div className="dept-label">Finance</div>
                        </td>
                        <td>900000</td>
                        <td>21 Jan 2020</td>
                        <td>
                            <img id={1} onclick="remove(this)" alt="delete" src="" />
                            <img id={1} alt="edit" onclick="update(this)" src="" />
                        </td>
                    </tr>
                </tbody></table>
        </div>
    )
}
