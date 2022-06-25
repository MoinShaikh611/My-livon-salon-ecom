import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import $ from 'jquery';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login() {

    const [loader, setLoader] = useState(false);
    const history = useHistory();

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address.';
        }

        if (!values.password) {
            errors.password = 'Password is required.';
        }

        return errors;
    };

    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            setLoader(true);

            const payload = {
                ...values
            };
            axios
                .post(
                    "https://backend.livon-demo.in/api/user/auth/loginOnly",
                    JSON.stringify(payload),
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    
                            
                    setLoader(false);

                     if(response.data.code == 200){
                            history.push("/dashboard");
                      }else{
                        alert(response.data.message);      
                      }

                    sessionStorage.setItem("userSessionData", JSON.stringify(response.data.results));

                })
                .catch((error) => {
                    console.log("sign up error");
                    console.log(error.response);
                    setLoader(false);
                    alert(error.response.data.message);
                });


        },
    });

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={formikLogin.handleSubmit}>
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fa fa-user-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <input onChange={formikLogin.handleChange} value={formikLogin.values.email} id="email" type="text" class="form-control" placeholder="Username / Email"  />
                                </div>
                                {formikLogin.errors.email ? <p className="error-msg">{formikLogin.errors.email}</p> : null}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">    
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fa fa-key" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <input onChange={formikLogin.handleChange} value={formikLogin.values.password}  id="password" type="password" class="form-control" placeholder="Password" />
                                </div>
                                {formikLogin.errors.password ? <p className="error-msg">{formikLogin.errors.password}</p> : null}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group mt-2">
                                <div class="form-group mb-0 mt-2">
                                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login