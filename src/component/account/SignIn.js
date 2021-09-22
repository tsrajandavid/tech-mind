import React from 'react'
import logo from './../../assets/images/tech-mind.svg'
import { Link } from "react-router-dom";
export default function SignIn() {
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
                                            <h2>Sign in</h2>
                                            <p>New user? <Link to="/sign-up" >Create an account</Link></p>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <input type="email" class="form-control" placeholder="email address" />
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
                                        <a href="forgot-2.html" class="d-flex justify-content-end font-s-13 c-orange-red">Forgot Password?</a>
                                    </div>
                                    <div class="col-12">
                                        <Link to="/post" class="btn w-100 margin-t-3 btn_account bg-lightgreen c-white rounded-8">
                                            Sign in
                                        </Link>
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
