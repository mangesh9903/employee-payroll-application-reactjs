import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class AddEmployeeComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            profilePic: "",
            department: "",
            salary: "",
            gender: "",
            startDate: "",
            note: ""


        }
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeProfilePicHandler = this.changeProfilePicHandler.bind(this);
        this.changeSalarycHandler = this.changeSalarycHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changestartDateHandler = this.changestartDateHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this)

    }

    saveEmployee = (e) => {



        e.preventDefault();
        let employee = {
            id: this.state.id,
            name: this.state.name,
            profilePic: this.state.profilePic,
            department: this.state.department,
            salary: this.state.salary,
            gender: this.state.gender,
            startDate: this.state.startDate,
            note: this.state.note
        };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.addEmployee(employee).then(res => {
            this.props.history.push("/employees");
        });
    }

    cancel() {
        this.props.history.push("/employees");
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    changeProfilePicHandler = (event) => {
        this.setState({ profilePic: event.target.value })
    }
    changeSalarycHandler = (event) => {
        this.setState({ salary: event.target.value })
    }
    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value })
    }
    changestartDateHandler = (event) => {
        this.setState({ startDate: event.target.value })
    }
    changeNoteHandler = (event) => {
        this.setState({ note: event.target.value })
    }

    changeDepartmentHandler = (event) => {
        this.setState({ department: event.target.value })
    }

    render() {
        return (
            <div className='container'>
                <header className="header">
                    <div className="logo-content">
                        <img src="/images/logo.png" alt="logo" />
                        <div>
                            <span className="emp-text">EMPLOYEE</span><br />
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
                <div>


                    <div className="form-content">
                        <form className="form">

                            <div className="form-head">Employee Payroll form</div>

                            {/* <div className='row-content'>
                                    <label >Name</label>
                                    <input placeholder='enter name' name="name"
                                        className='form-control' value={this.state.name}
                                        onChange={this.changeNameHandler} />
                                </div> */}

                            <div className="row-content">
                                <label className="label text">Name</label>
                                <input className="input" type="text" id="name" name="name" placeholder="Your name" required onChange={this.changeNameHandler} />
                            </div>


                            <div className='form-group'>
                                <label >profilePic</label>
                                <input placeholder='enter name' name="profilePic"
                                    className='form-control' value={this.state.profilePic}
                                    onChange={this.changeProfilePicHandler} />
                            </div>

                            {/* <div className="row-content">
                                <label className="label text" value={this.state.profilePic} onChange={this.changeProfilePicHandler}>Profile image</label>
                                <div className="profile-radio-content" >
                                    <label  value={this.state.profilePic} onChange={this.changeProfilePicHandler} >
                                        <input type="radio" name="profile" id="profile1" required />
                                        <img className="profile" id="image1" src="\images\Ellipse 1.png" />
                                    </label>
                                    <label value={this.state.profilePic}   onChange={this.changeProfilePicHandler} > 
                                        <input type="radio" name="profile" id="profile2" required />
                                        <img className="profile" id="image2" src="\images\Ellipse -3.png" />
                                    </label>
                                    <label value={this.state.profilePic}  onChange={this.changeProfilePicHandler} >
                                        <input type="radio" name="profile" id="profile3" required />
                                        <img className="profile" id="image3" src="\images\Ellipse -7.png" />
                                    </label>
                                    <label value={this.state.profilePic}   onChange={this.changeProfilePicHandler} >
                                        <input type="radio" name="profile" id="profile4" required />
                                        <img className="profile" id="image4" src="\images\Ellipse -8.png" />
                                    </label>
                                </div>
                            </div>
 */}


                            <div className='form-group'>
                                <label >Department</label>
                                <input placeholder='enter name' name="department"
                                    className='form-control' value={this.state.department}
                                    onChange={this.changeDepartmentHandler} />
                                    
                            </div>



                            <div className='form-group'>
                                <label >Salary</label>
                                <input placeholder='enter name' name="salary"
                                    className='form-control' value={this.state.salary}
                                    onChange={this.changeSalarycHandler} />
                            </div>

                            <div className='form-group'>
                                <label >Gender</label>
                                <input placeholder='enter name' name="gender"
                                    className='form-control' value={this.state.gender}
                                    onChange={this.changeGenderHandler} />
                            </div>

                            <div className='form-group'>
                                <label >Start Date</label>
                                <input placeholder='enter name' name="startDate"
                                    className='form-control' value={this.state.startDate}
                                    onChange={this.changestartDateHandler} />
                            </div>

                            <div className='form-group'>
                                <label >Note</label>
                                <input placeholder='enter name' name="note"
                                    className='form-control' value={this.state.note}
                                    onChange={this.changeNoteHandler} />
                            </div>

                            <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddEmployeeComp;