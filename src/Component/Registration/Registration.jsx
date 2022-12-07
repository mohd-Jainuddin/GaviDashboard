import { useState, useEffect } from "react";

import '../Registration/Registration.css'

function Registration() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
        <div className="myRegistration">
            <div className="Login-container">
                <form onSubmit={handleSubmit}>
                    <h1>Registration Form</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="f">{formErrors.username}</p>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="f">{formErrors.email}</p>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="f">{formErrors.password}</p>
                        <button id="submitbtn" className="fluid ui button blue">Submit</button>
                    </div>
                </form>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <>
                        <div id="message" className="ui message success">Registered successfully!</div>
                        <div className="displayBox">
                            <h3 id="msgUsername">Name: {formValues.username}</h3>
                            <h3 id="msgEmail"> email: {formValues.email}</h3>
                        </div>
                    </>
                ) : (
                    <pre>{JSON.stringify()}</pre>
                )}


            </div>
        </div>
    );
}

export default Registration;