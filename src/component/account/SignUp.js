import React from 'react'
import logo from './../../assets/images/tech-mind.svg'
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="signup_full">
            <section class="form_signup_one">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-lg-5 ml-auto">
                            <div class="item_group">
                                <form action="" class="row">
                                    <div class="col-12">
                                        <div className="text-center">
                                            <img src={logo} alt="" width="150" />
                                        </div>
                                        <div class="title_sign">
                                            <h2>Create an account</h2>
                                            <p>Already have an account? <a href="signin-2.html">Sign in</a></p>
                                        </div>

                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <input type="email" class="form-control" placeholder="email address" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input type="text" class="form-control" placeholder="first name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Last Name</label>
                                            <input type="text" class="form-control" placeholder="last Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group --password" id="show_hide_password">
                                            <label>Password</label>
                                            <div class="input-group">
                                                <input type="password" class="form-control" data-toggle="password" placeholder="+6 Characters"
                                                    required="" />
                                                <div class="input-group-prepend hide_show">
                                                    <a href=""><span class="input-group-text tio hidden_outlined"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p class="font-s-13 mb-0">
                                            By clicking on the Sign Up button, you agree to Rakon.
                                            <a href="#" target="_blank" class="c-orange-red">
                                                terms and conditions of use.
                                            </a>
                                        </p>

                                        <a href="#" class="btn w-100 margin-t-3 btn_account bg-lightgreen c-white rounded-8">
                                            Create
                                            account
                                        </a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
