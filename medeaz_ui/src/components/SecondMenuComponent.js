import React from 'react'

export default function SecondMenuComponent(){
    return (
        <React.Fragment>
            <div class="top_bar shadow-sm">
                <div class="container d-flex align-items-center flex-wrap justify-content-between py-2">
                    <img src="images/logo.png" class="img-fluid" width="180" />
                    <ul class="nav navbar-nav navbar-right custom_nav nav_inner">
                        <li class="call_li_menu" style={{ marginRight: "20px" }}><a href="#"><span class="call_span me-2"><i class="fas fa-phone-alt" aria-hidden="true"></i></span>Call Us : 6305827170, 6305829694</a></li>
                        <li><a href="/contactus">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="nav_second">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul>
                                <li class=""><a href="/appointment"><span class="fas fa-calendar-alt"></span>Appointments</a></li>
                                <li><a href=""><span class="fa fa-heartbeat"></span>Health Checks</a></li>
                                <li><a href=""><span class="fa fa-credit-card"></span>Discount Cards</a></li>
                                <li><a href=""><span class="fas fa-phone-alt"></span>Service Providers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}