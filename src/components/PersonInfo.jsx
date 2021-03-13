import React, { useState } from 'react';

const PersonInfo = props => {
    // const { firstName, lastName, email, password, confirmpassword } = props
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")

    return (
        <>
        <form className="col-6 mx-auto">
            <div className="form-group row">
                <label htmlFor="">First Name</label>
                    <input className="form-control" type="text" name="firstName" id="" onChange={(e) => setfirstName(e.target.value)} />
                    {firstName.length < 2 && firstName.length>0 ? <p className="text-danger">First Name Must Be At Least 2 Characters!</p>: ""}
                </div>
            <div className="form-group row">
                <label htmlFor="">Last Name</label>
                    <input className="form-control" type="text" name="lastName" id="" onChange={(e) => setlastName(e.target.value)} />
                    {lastName.length<2 && lastName.length>0 ? <p className="text-danger">Last Name Must Be At Least 2 Characters!</p>: ""}
                </div>
            <div className="form-group row">
                <label htmlFor="">Email</label>
                    <input className="form-control" type="text" name="email" id="" onChange={(e) => setemail(e.target.value)} />
                    {email.length < 5 && email.length>0 ? <p className="text-danger">Email Must Be At Least 5 Characters!</p> : ""}
                </div>
            <div className="form-group row">
                <label htmlFor="">Password</label>
                    <input className="form-control" type="text" name="password" id="" onChange={(e) => setpassword(e.target.value)} />
                    {password.length < 2 && password.length > 0 ? <p className="text-danger">Password Must Match And Be At Least 2 Characters!</p> : ""}
                </div>
            <div className="form-group row">
                <label htmlFor="">Confirm Password</label>
                    <input className="form-control" type="text" name="confirmpassword" id="" onChange={(e) => setconfirmpassword(e.target.value)} />
                    {confirmpassword.length < 2 && confirmpassword.length > 0 ? <p className="text-danger">Password Must Match And Be At Least 2 Characters!</p> : ""}
                    {confirmpassword !== password ? <p className="text-danger">Passwords Must Match!</p> : ""}
                </div>
            <button type="submit" class="btn btn-outline-success" >Create User</button>
            <br />
            </form>
            <hr />
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </>
    );
}
export default PersonInfo;
