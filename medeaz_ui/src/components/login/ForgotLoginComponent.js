import React from 'react'

export default function ForgotLoginComponent(props) {
    return (
        <React.Fragment>
            <div class="top_bar shadow-sm">
    <div class="container d-flex align-items-center flex-wrap justify-content-between py-2">
        <img src="images/logo.png" class="img-fluid" width="180"/>
        <ul class="nav navbar-nav navbar-right custom_nav nav_inner">
            <li class="call_li_menu" style={{marginRight: "20px"}}><a href="#"><span class="call_span me-2"><i class="fas fa-phone-alt" aria-hidden="true"></i></span>Call Us : 6305827170, 6305829694</a></li>
            <li><a href="/contactus">Contact</a></li>
        </ul>
    </div>
</div>

<section class="login_section">
    <div class="container">
<div class="row">
    <div class="col-md-12">
<div class="login-box">
    <div class="text-center">
        <h3><i class="fa fa-lock fa-4x"></i></h3>
        <h3 class="text-center forgot_pass">Forgot Password?</h3>
        <p>You can reset your password here.</p>
    </div>
    <div class="form-group">
        <input type="text" placeholder="Mobile/Email" class="form-control login_bg"/>
    </div>

    <div class="mt-4">
        <a href="/login" class="back_btn">Back</a>
        <a href="" class="submit_btn">Sumbit</a>
    </div>

</div>

    </div>
</div>
    </div>
</section>

        </React.Fragment>
    )
}