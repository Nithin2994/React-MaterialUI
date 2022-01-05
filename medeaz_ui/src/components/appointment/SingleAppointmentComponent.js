
import React from 'react'
import SecondMenuComponent from '../SecondMenuComponent'
import ThirdMenuComponent from '../ThirdMenuComponent'

export default function SingleAppointmentComponent() {
    return (
        <React.Fragment>
            <ThirdMenuComponent />
            <section class="appointment_result">
                <div class="body-wrapper">
                    <div class="container">
                        <div class="doctorprofile_left2">
                            <div class="row px-3">
                                <div class="col-md-3 filters__mobile">
                                    <div class="doctorprofile_left1">
                                        <div class="doctor_image_block">
                                            <img src="images/Dr._Pradeep_K._kims_bibi_hospital.jpg" class="img-fluid"/>
</div>
                                            <div class="detail-bottom">
                                                <h3>Dr. Pradeep Keshri</h3>
                                                <ul class="list-bdr list-unstyled"><li class="hidden-xss"><label>Speciality </label> :<span>Surgical Oncologist,</span></li><li class="ng-star-inserted">
                                                    <label>Yrs Of Exp </label> : <span>15</span><span class="visible-xs-inline-block"><span></span></span></li><li class="hidden-xss"><label>Language Know</label> :
                                <span>Hindi,&nbsp;</span><span>English,&nbsp;</span><span>Telugu,&nbsp;</span></li></ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 about_doctor">
                                        <div class="p-3 bg-white">
                                            <h4>Doctor Description</h4>
                                            <p>Dr. Pradeep Keshri is a Surgical Oncologist, and Head and Neck Surgeon, practicing at Kims BiBi Hospital. He has 15 years of experience. He has completed his MBBS from Sambalpur University in 1996 and has also done his MS in ENT from Sambalpur University in 2002 and has SRSOG from NIMS in 2006. He is an excellent surgeon who is well-versed in his specialty. He is very approachable and is has a calm and caring nature. To visit him you can avail the hassle-free appointment booking system on Medeaz’s website among other specialized health care services provided by the health care portal</p>
                                        </div>
                                        <div class="mt-3">
                                            <ul class="nav nav-tabs" id="maps" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Location</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Info</button>
                                                </li>
                                            </ul>
                                            <div class="tab-content p-0" id="maps_details">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15220.274219311234!2d78.39559795!3d17.5042406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1633252640481!5m2!1sen!2sin" width="100%" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                                                </div>
                                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                            </div>
                                        </div>

                                        <div class="hospital_details bg-white p-3">
                                            <img src="images/logo-global.png" class="img-fluid" width="90"/>
                                                KIMS BiBi Hospital

                        <p class="mt-3"><i class="fas fa-map-marker-alt map me-2"></i>6-3-991/1/C, 6-3-991/1/C, Government Printing Press Rd, Chanchalguda, Hyderabad, Telangana 500024, India</p>

                                                <div class="row mt-3">
                                                    <div class="col-md-8">
                                                        <div class="row">
                                                            <div class="col-12 timings_hospital">
                                                                From 2019-04-03 to 2021-01-08
                                    </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-6 timings_hospital">
                                                                Mon : 12:00 - 17:00
                                </div>
                                                            <div class="col-6 timings_hospital">
                                                                Tue : 12:00 - 17:00
                                </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="row">
                                                                    <div class="col-6 timings_hospital">
                                                                        Wed : 12:00 - 17:00
                                          </div>
                                                                    <div class="col-6 timings_hospital">
                                                                        Thu : 12:00 - 17:00
                                          </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-6 timings_hospital">
                                                                Fri : 12:00 - 17:00
                                    </div>
                                                            <div class="col-6 timings_hospital">
                                                                Sat : 12:00 - 17:00
                                    </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4 d-flex align-items-center justify-content-end">
                                                        <a href="#" class="book_app">Book Appointment</a>
                                                    </div>
                                                </div>
                    </div>
                                        </div>
                                        <div class="col-md-3 filters__mobile filter-mobile">
                                            <div class="full_width sidebar_man">
                                                <div class="srch-results-lbl fly-in">
                                                    <span> Surgical Oncologist in top Localities</span>
                                                </div>


                                                <div class="">
                                                    <div class="srch-results-lbl fly-in mt-4">
                                                        <span> Health articles</span>
                                                    </div>
                                                    <div class="p-2 articles">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <img src="images/1.jpeg" class="img-fluid"/>
                                    </div>
                                                                <div class="col-md-8 ps-0">
                                                                    <a href=""> Pranayama Art of Breathing</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="p-2 articles">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <img src="images/2.jpeg" class="img-fluid"/>
                                    </div>
                                                                    <div class="col-md-8 ps-0">
                                                                        <a href=""> Quench Your Thirst With Watermelon</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="p-2 articles">
                                                                <div class="row">
                                                                    <div class="col-md-4">
                                                                        <img src="images/3.jpeg" class="img-fluid"/>
                                    </div>
                                                                        <div class="col-md-8 ps-0">
                                                                            <a href="">
                                                                                Coconut Oil The Perfect Moisturizer For Skin</a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
</section>
        </React.Fragment>
    )
}