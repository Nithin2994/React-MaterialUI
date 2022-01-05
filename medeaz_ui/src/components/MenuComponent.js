import React from 'react'

export default function MenuComponent(props) {

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
                            <li>
                                <button class="video_cons">
                                    Video Consultation
                        </button>
                            </li>
                </ul>
            </div>

                    <div class="ms-lg-auto d-block d-md-none">
                        <ul class="d-flex align-items-center justify-content-center list-unstyled mb-0">
                            <li>
                                <button class="video_cons">
                                    Video Consultation
                        </button>
                            </li>
                        </ul>
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
                    <a href="/blog-category"><i class="fas fa-chevron-right"></i>Health Blog</a>
                    <a href="/blog-category"><i class="fas fa-chevron-right"></i>Health Discussions (Q&A)</a>
                    <a href="/about"><i class="fas fa-chevron-right"></i>About Us</a>
                    <a href="/careers"><i class="fas fa-chevron-right"></i>Career</a>
                    <a href="/contactus"><i class="fas fa-chevron-right"></i>Contact</a>
                </div>
            </div>
        </div>
        <div class="header-bottom d-none d-md-block">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light p-0 w-100">
                <button class="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="menu-wrapper" class="text-center m-auto w-100">
    
                    <ul class="nav">
                        <li>
                            <a href="#">Speciality</a>
                            <div>
                                <div class="nav-column w-100">
                                    <ul class="row">
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Plastic Surgeon</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Surgical - Oncologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Neuro Surgeon</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Radiologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Nutritionist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Dental and Maxillofacial Surgeon</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Dermatologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> ENT Surgeon</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Psychologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Orthopedist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Gastroenterologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Family Physician</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Cosmetologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Gynaecologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Endocrinologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Medical Oncologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Pediatric Surgeon</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Nephrologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Pediatrician</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Cardiologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Rheumatologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Physiotherapist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> General Surgeon</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> General Physician</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Neurologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Ophthalmologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Cardiothoracic Surgeon</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Surgical Gastroenterologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Pulmonologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Urologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Radiation Oncologist</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Neuro-Psychiatrist</a></li>
    
    
                                    </ul>
                                </div>
    
    
                            </div>
                        </li>
                        <li>
                            <a href="#">Health Providers</a>
                            <div>
                                <div class="nav-column w-100">
                                    <ul class="row">
    
    
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Kakatiya Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Leela Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Prathima Hospitals</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Nikhil Hospitals</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Prolife Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> People's Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Kalyani Dental Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Shreya Hospitals</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Swetha Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Dharani Hospitals</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Konark Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Tanvi Eye Center</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Kishan Rao Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Sri Santosh Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Anantha Lakshmi Kidney And Multi Specialty
                                            Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> GoodLife Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Onus Hospitals</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Sri Balaji Superspeciality Dental Hospital</a>
                                        </li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Aditya Hospital</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Nakshatra Hospitals</a></li>
                                        <li class="col-lg-4 col-md-4 col-sm-6"><a href="#"><i
                                                class="fas fa-chevron-right"></i> Spark Hospital</a></li>
    
    
                                    </ul>
                                </div>
    
    
                            </div>
                        </li>
                        <li>
                            <a href="#">Health Checks</a>
                        </li>
                        <li><a href="#">Health Manager</a></li>
    
                    </ul>
    
                </div>
            </nav>
        </div>
    </div>
    </div>
}