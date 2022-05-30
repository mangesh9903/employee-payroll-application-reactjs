import React, { useState } from 'react'
import './PayrollForm.css'

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import AddEmployeeComp from './AddEmployeeComp';

export default function PayrollForm() {

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [department, setDepartment] = useState("")
    const [salary, setSalary] = React.useState('');
    const [value, setValue] = React.useState(null);
    const [note, setNote] = useState("")

    const [nameRegex, setNameRegexError] = useState("");

    let jsonArray = [];
    let jsonArrayString = "";


    function updateData(event) {

        console.log(name, gender, department, salary, value, note)
        event.preventDefault()

        if (localStorage.getItem('jsonItem') == null) {
            jsonArray = [];
            jsonArray.push([name, gender, department, salary, value, note]);
            localStorage.setItem('jsonItem', JSON.stringify(jsonArray));
        } else {
            jsonArrayString = localStorage.getItem('jsonItem');
            jsonArray = [];
            jsonArray = JSON.parse(jsonArrayString);
            jsonArray.push([name, gender, department, salary, value, note]);
            localStorage.setItem('jsonItem', JSON.stringify(jsonArray));
        }

        alert("Form Submitted   " + name + "  " + gender + "  " + department + "  " + salary + "  " + value + "  " + note)
    }

    function nameValidationHandler(event){
        let nameRegex =RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
        if(nameRegex.test(event.target.value)){
          setNameRegexError("");
        }else{
          setNameRegexError("Name is incorrect")
        }
    }

    return (
        <div>
            <header className="header">
                <div className="logo-content">
                    <img src="\images\logo.png" alt="logo" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>

            {/* FORM */}
            <div className="form-content">

                <form className="form" onSubmit={updateData}>

                    <div className="form-head">Employee Payroll form</div>

                    {/* NAME */}
                    <div className="row-content">
                        <label className="label text">Name</label>
                        <input className="input" type="text" id="name" name="name" placeholder="Your name" required onChange={(event) => { nameValidationHandler(event); setName(event.target.value);}} />{nameRegex}
                    </div>

                    {/* PROFILE */}
                    <div className="row-content">
                        <label className="label text">Profile image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" name="profile" id="profile1" required />
                                <img className="profile" id="image1" src="\images\Ellipse 1.png" />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile2" required />
                                <img className="profile" id="image2" src="\images\Ellipse -3.png" />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile3" required />
                                <img className="profile" id="image3" src="\images\Ellipse -7.png" />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile4" required />
                                <img className="profile" id="image4" src="\images\Ellipse -8.png" />
                            </label>
                        </div>
                    </div>

                    {/* GENDER*/}
                    <div className="row-content">
                        <label className="label text">Gender</label>
                        <div>
                            <input type="radio" name="gender" id="male" defaultValue="male" onChange={(event) => {
                                setGender(event.target.value);
                            }} />
                            <label className="text" htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" defaultValue="female" onChange={(event) => {
                                setGender(event.target.value);
                            }} />
                            <label className="text" htmlFor="female">Female</label>
                        </div>
                    </div>

                    {/* DEPARTMENT */}
                    <div className="row-content">
                        <label className="label text">Department</label>
                        <div>
                            <input className="checkbox" type="checkbox" name="hr" id="hr" defaultValue="HR" onChange={(event) => {
                                setDepartment(event.target.value);
                            }} />
                            <label className="text" htmlFor="hr">HR</label>
                            <input className="checkbox" type="checkbox" name="sales" id="sales" defaultValue="Sales" onChange={(event) => {
                                setDepartment(event.target.value);
                            }} />
                            <label className="text" htmlFor="hr">Sales</label>
                            <input className="checkbox" type="checkbox" name="finance" id="finance" defaultValue="Finance" onChange={(event) => {
                                setDepartment(event.target.value);
                            }} />
                            <label className="text" htmlFor="hr">Finance</label>
                            <input className="checkbox" type="checkbox" name="engineer" id="engineer" defaultValue="Engineer" onChange={(event) => {
                                setDepartment(event.target.value);
                            }} />
                            <label className="text" htmlFor="hr">Engineer</label>
                            <input className="checkbox" type="checkbox" name="others" id="others" defaultValue="Others" onChange={(event) => {
                                setDepartment(event.target.value);
                            }} />
                            <label className="text" htmlFor="hr">Others</label>
                        </div>
                    </div>

                    {/* SALARY */}
                    <div className="row-content">
                        <label className="label text" htmlFor="salary">Salary </label>
                        <input className="input" type="range" name="salary" id="salary" min={300000} max={500000} step={100} defaultValue={400000} onChange={(event) => {
                            setSalary(event.target.value)
                        }} />{salary}
                        <output className="salary-output" htmlFor="salary"></output>
                    </div>

                    {/* DATE */}
                    <div className="row-content">
                        <label className="label text">Start Date</label>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>

                    {/* NOTES */}
                    <div className="row-content">
                        <label className="label text">Notes</label>
                        <textarea className="input" name="Notes" id="notes" placeholder style={{ height: '100px' }} defaultValue={""} onChange={(event) => {
                            setNote(event.target.value);
                        }} />
                    </div>

                    {/* BUTTONS */}
                    <div class="buttonParent">
                        <Link to={<AddEmployeeComp></AddEmployeeComp>} class="resetButton button cancelButton">Cancel</Link>
                        <div class="submit-reset">
                            <button type="submit" class="button submitButton" id="submitButton">
                                Submit
                            </button>
                            <button type="reset" class="resetButton button" id="resetButton">Reset</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
