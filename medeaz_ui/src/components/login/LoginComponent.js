import React from 'react'

export default function LoginComponent(props) {
    return (
        <section class="login_section m-0 page-background container-login100">
            <div class="login-box ">
                <div class="log-login text-center"><img src="images/logo.svg" style={{cursor:"pointer"}} /></div>
                <h4 class="auth-header">Health Seekers Login </h4>
                <div class="lb-header"><a id="login-box-link" style={{ cursor: "pointer" }} class="active">Login</a><a id="signup-box-link" style={{ cursor: "pointer" }} href="">Sign Up</a></div>
                <form class="email-login">
                    <div class="u-form-group u-form-grp">
                        <label class="text-whites">Email</label><input placeholder="Enter your mobile number or email id" type="email" class="" />
                    </div>
                    <div class="u-form-group u-form-grp">
                        <label class="text-whites">Password</label><input placeholder="Password" type="password" class="" />
                    </div>
                    <div class="u-form-group"><a class="forgot-password" href="/forgot">Forgot password?</a></div>
                    <button class="loginBtn btn btn-theme btn-lg" disabled="">Log in</button>
                </form>
            </div>
        </section>
    )
}