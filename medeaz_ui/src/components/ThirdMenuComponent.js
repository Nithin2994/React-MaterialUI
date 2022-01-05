import React from 'react'

export default function ThirdMenuComponent(props) {

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return <div>
    <div class="top_bar">
        <div class="container d-flex align-items-center flex-wrap justify-content-between py-2">
            <div class="d-flex flex-wrap">
                <span style={{fontSize:"30px",cursor:"pointer"}} onClick={() => openNav()}>&#9776;</span>
                <a class="navbar-brand" href="#">
                    <div class="ms-lg-4 ms-2"><img src="images/logo.png" class="img-fluid" width="130" /></div>
                </a>
            </div>

            <div class="ms-lg-auto">
            <div class="d-none d-md-block">
                <ul class="d-flex align-items-center justify-content-center list-unstyled mb-0">
                    <li><a href="https://api.whatsapp.com/send?phone=916305827170"><img src="images/whatsapp.png"
                                                                                        class="img-fluid" width="43"/></a>
                    </li>
                    <li class="call"><i class="fas fa-phone-alt"></i></li>
                    <li class="phone_number me-3"><a href="tel:+91 6305827170">+ 91- 6305827170</a></li>
                    <li>
                        <div class="dropdown">
                            <a class="btn btn-secondary btn-sm dropdown-toggle" href="/login" role="button" id="dropdownMenuLink"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Login
                            </a>

                            <ul class="dropdown-menu login_drop" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="/login">Health Seekers</a></li>
                                <li><a class="dropdown-item" href="/login">Health Provider</a></li>
                                <li><a class="dropdown-item" href="/login">Clinician</a></li>
                                <li><a class="dropdown-item" href="/login">Sponsor</a></li>

                            </ul>
                        </div>
                    </li>

                </ul>
            </div>


        </div>


            </div>
    </div>
    <div class="container-fluid container-inner">
        <div id="mySidenav" class="sidenav">
            <div class="d-block d-md-none border-bottom">
                <a href="#"><i class="fas fa-chevron-right"></i>Health Seekers</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Health Provider</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Clinician</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Sponsor</a>


            </div>
            <a href="javascript:void(0)" class="closebtn" onClick={()=>closeNav()}>&times;</a>
            <a href="#"><i class="fas fa-chevron-right"></i>Avail Teleconsultation</a>
            <a href="#"><i class="fas fa-chevron-right"></i>Health Blog</a>
            <a href="/bolg-category"><i class="fas fa-chevron-right"></i>Health Discussions (Q&A)</a>
            <a href="/about"><i class="fas fa-chevron-right"></i>About Us</a>
            <a href="/careers"><i class="fas fa-chevron-right"></i>Career</a>
            <a href="/contactus"><i class="fas fa-chevron-right"></i>Contact</a>
        </div>
    </div>
    </div>
}