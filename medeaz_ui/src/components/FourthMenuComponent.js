import React from 'react'

export default function FourthMenuComponent() {
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
            <div class="nav_blog">
                <div class="container">
                    <div class="row">
                        <ul class="d-inline-block m-0">
                            <li>
                                <a href="#"><i class="fas fa-home"></i></a>
                            </li>
                            <li>
                                <a href="">Medeaz</a>
                            </li>
                            <li>
                                <a href="">Health Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}