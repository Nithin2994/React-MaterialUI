import React from 'react'

export default function ServiceProviderComponent(props){
    return <div class="service_providers">
    <div class="container mt-6">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center main_tabs">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                <i class="far fa-calendar-check"></i>
                                Appointments</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fas fa-heartbeat"></i>
                                Health Checks</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                <i class="far fa-credit-card"></i>
                                Subscription</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="serviceproviders-tab" data-bs-toggle="tab" data-bs-target="#providers" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                <i class="far fa-hospital"></i>
                                Service Providers</button>
                        </li>

                    </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="form d-flex flex-wrap align-items-center justify-content-between">
                                <div class="custom_md_3"><i class="fas fa-search"></i><input type="text" placeholder="Symptoms, Speciality, Clinician.."/></div>
                                <div class="custom_md_3"><i class="fas fa-map-marker-alt"></i><input type="text" placeholder="Booking Date"/></div>
                                <div class="custom_md_3"><i class="far fa-calendar-alt"></i><input type="text" placeholder="Hyderabad"/></div>
                                <div class="custom_md_3"><button class="btn_serch">Search</button></div>
                        </div>
                        <div class="text-center mt-3 Specialists">
                            <h6 class="mb-lg-5">Top Search Specialists</h6>
                            <div class="owl-carousel slider" id="top-search-specialists">
                                <div>
                                    <img src="images/plasticsurgery.jpg"/>
                                    <span>Plastic Surgeon</span></div>

                                <div> <img src="images/oncology-surgical.jpg"/>
                                    <span>Surgical - Oncologist </span></div>

                                <div> <img src="images/neurosurgery.jpg"/>
                                    <span>Neuro Surgeon </span></div>

                                <div> <img src="images/radiology.jpg"/>
                                    <span>Radiologist </span></div>

                                <div> <img src="images/nutritionhealthydiet.jpg"/>
                                    <span>Nutritionist </span></div>

                                <div> <img src="images/dental_and_maxillofacial.jpg"/>
                                    <span>Dental and Maxillofacial Surgeon </span></div>

                                <div> <img src="images/dermatology_-_Skincare.jpg"/>
                                    <span>Dermatologist </span></div>

                                <div> <img src="images/ent.jpg"/>
                                    <span>ENT Surgeon </span></div>

                                <div> <img src="images/psychology_L5yUZvP.jpg"/>
                                    <span>Psychologist </span></div>

                                <div> <img src="images/orthopedics_Gi1XE53.jpg"/>
                                    <span>Orthopedist </span></div>

                                <div> <img src="images/gastroenterology-medical.jpg"/>
                                    <span>Gastroenterologist </span></div>

                                <div> <img src="images/familymedicine.jpg"/>
                                    <span>Family Physician  </span></div>

                                <div> <img src="images/cosmetology_-_beauty_care.jpg"/>
                                    <span>Cosmetologist </span></div>

                                <div> <img src="images/gynaecology__obstetrics.jpg"/>
                                    <span>Gynaecologist </span></div>

                                <div> <img src="images/endocrinology_2EYWjdD.jpg"/>
                                    <span>Endocrinologist </span></div>

                                <div> <img src="images/oncology-medical.jpg"/>
                                    <span>Medical Oncologist </span></div>

                                <div> <img src="images/pediatricsurgery.jpg"/>
                                    <span>Pediatric Surgeon</span></div>

                                <div> <img src="images/nephrology.jpg"/>
                                    <span> Nephrologist</span></div>

                                <div> <img src="images/pediatrics.jpg"/>
                                    <span>Pediatrician </span></div>

                                <div> <img src="images/cardiologist.png"/>
                                    <span>Cardiologist </span></div>

                                <div> <img src="images/rheumatology_8R5MBH7.jpg"/>
                                    <span>Rheumatologist </span></div>

                                <div> <img src="images/physiotherapy.jpg"/>
                                    <span>Physiotherapist </span></div>

                                <div> <img src="images/general_surgery.jpg"/>
                                    <span>General Surgeon </span></div>

                                <div> <img src="images/generalmedicine.jpg"/>
                                    <span>General Physician </span></div>

                                <div> <img src="images/neurology_hOJephP.jpg"/>
                                    <span>Neurologist </span></div>

                                <div> <img src="images/ophthalmology.jpg"/>
                                    <span>Ophthalmologist </span></div>

                                <div> <img src="images/cardiothoracic__vascular_Surgery_RGMZ8KW.jpg"/>
                                    <span>Cardiothoracic Surgeon </span></div>

                                <div> <img src="images/gastroenterologist_hAWKcXV.png"/>
                                    <span>Surgical Gastroenterologist </span></div>

                                <div> <img src="images/pulmonology.jpg"/>
                                    <span>Pulmonologist </span></div>

                                <div> <img src="images/urology_genito_urinary_surgery.jpg"/>
                                    <span>Urologist </span></div>

                                <div> <img src="images/oncology_-_radiation.jpg"/>
                                    <span>Radiation Oncologist </span></div>

                                <div> <img src="images/Neuro-Psychiatrist .jpg"/>
                                    <span>Neuro-Psychiatrist </span></div>

                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="form d-flex flex-wrap align-items-center justify-content-between">
                            <div class="custom_md_3"><i class="fas fa-user"></i><input type="text" placeholder="General/Specific"/></div>
                            <div class="custom_md_3"><i class="fas fa-users"></i><input type="text" placeholder="Age Group"/></div>
                            <div class="custom_md_3"><i class="fas fa-user"></i><input type="text" placeholder="Gender"/></div>
                            <div class="custom_md_3"><button class="btn_serch">Search</button></div>
                        </div>
                        <div class="text-center mt-3 Specialists">
                            <h6 class="mb-lg-4">Top Search Preventive Health Checks</h6>
                            <div class="owl-carousel" id="preventive-health">
                                <div>
                                    <img src="images/health5.png"/>
                                    <div class="doct_caption_hc"><span>Complete Body Check-Up</span></div>
                                    </div>
                                <div>
                                    <img src="images/health6.png"/>
                                    <div class="doct_caption_hc"><span>Well Woman Check-Up</span></div>
                                </div>
                                <div>
                                    <img src="images/health7.png"/>
                                    <div class="doct_caption_hc"><span>Basic Health Check-Up</span></div>
                                </div>
                                <div>
                                    <img src="images/health8.png"/>
                                    <div class="doct_caption_hc"><span>Basic Health Check-Up</span></div>
                                </div>
                                <div>
                                    <img src="images/health9.png"/>
                                    <div class="doct_caption_hc"><span>Comprehensive Heart Check-Up</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="health-top">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2 class="title">"My Health Manager" </h2>
                                    <h3 class="title"> INTRODUCING INDIA'S 1<sup _ngcontent-c4="">ST</sup> DEDICATED HEALTH MANAGER SUPPORT</h3>
                                    <p>Medeaz offers an exclusive Health assistance program for health seekers. With this assistance program, Medeaz promises all its health seekers "Affordable, complete family health management". This gift of health from Medeaz comes with loaded benefits ranging from healthcare concessions to personalized health assistance. We strive to promote healthy wellbeing of you and your family. "With Medeaz your family is at ease"</p>
                                </div>
                                <div class="col-md-4">
                                    <img src="images/MY_HEALTH_MANAGER_ZyXx4m1.jpg" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 col-sm-12 health-icon-grid">
<ul class="list-unstyled position-relative">
    <li>
        <i class="fas fa-rupee-sign"></i>
        <span>1199/-</span>
    </li>

    <li>
        <i class="far fa-calendar-alt"></i>
        <span>365 Days</span>
    </li>
</ul>
                                </div>

                                <div class="col-md-4 col-sm-12 health-icon-grid">
                                    <div class="icons-bounce">
                                        <div class="icons-grids">
                                            <div  class="icon-imgs"><img src="images/icon1.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon4.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon3.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon2.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon6.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon5.png"/></div>
                                            <div class="clearfix"></div>
                                </div>


                        </div>
                    </div>
                                <div class="col-md-4 col-sm-12 health-icon-grid2">
                                    <ul class="list-unstyled position-relative">
                                        <li>
                                            <i class="fas fa-shopping-cart"></i>
                                            <span>Buy Now</span>
                                        </li>
                                        <li>
                                            <i class="fas fa-gift"></i>
                                            <span>Gift Now</span>
                                        </li>
                                    </ul>
                                </div>

            </div>
                            <div class="row">
                                    <div class="col-md-8 col-sm-12">
                                        <h2 _ngcontent-c4="" class="title" tabIndex="0">"FPVC" </h2>
                                        <h3 _ngcontent-c4="" class="title"> INTRODUCING INDIA'S 1<sup _ngcontent-c4="">ST</sup> DEDICATED HEALTH MANAGER SUPPORT</h3>
                                        <p _ngcontent-c4="">3 Family Physician Virtual Consultations </p>
                                    </div>

                                <div class="col-md-4 col-sm-12">
                                    <img src="images/Savio_Logo_big_Big.jpg" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 col-sm-12 health-icon-grid">
                                    <ul class="list-unstyled position-relative">
                                        <li>
                                            <i class="fas fa-rupee-sign"></i>
                                            <span>900/-</span>
                                        </li>

                                        <li>
                                            <i class="far fa-calendar-alt"></i>
                                            <span>90 Days</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-md-4 col-sm-12 health-icon-grid">
                                    <div class="icons-bounce">
                                        <div class="icons-grids">
                                            <div  class="icon-imgs"><img src="images/icon1.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon4.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon3.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon2.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon6.png"/></div>
                                            <div class="icon-imgs"><img src="images/icon5.png"/></div>
                                            <div class="clearfix"></div>
                                        </div>


                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-12 health-icon-grid2">
                                    <ul class="list-unstyled position-relative">
                                        <li>
                                            <i class="fas fa-shopping-cart"></i>
                                            <span>Buy Now</span>
                                        </li>
                                        <li>
                                            <i class="fas fa-gift"></i>
                                            <span>Gift Now</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>


        </div>
    </div>
                    <div class="tab-pane fade" id="providers" role="tabpanel" aria-labelledby="serviceproviders-tab">
                        <div class="text-center">
                            <h6 class="mb-lg-4">Over 500+ Network Service Providers Around India</h6>
                        </div>

                        <div class="row">
                            <div class="col-md-4 col-sm-12 mx-auto position-relative locations">
                                <input type="text" placeholder="Enter City"/>
                                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="locations_tab">


                               <div class="cities_image">
                                   <a href="">
                                <img src="images/hyderabad.png" class="img-fluid"/>
                                <span>Hyderabad</span>
                                   </a>
                            </div>

                            <div class="cities_image">
                                <a href="">
                                    <img src="images/amaravathi.png" class="img-fluid"/>
                                    <span>Amaravathi</span>
                                </a>
                            </div>

                            <div class="cities_image">
                                <a href="">
                                    <img src="images/bangalore.png" class="img-fluid"/>
                                    <span>Bangalore</span>
                                </a>
                            </div>


                            <div class="cities_image">
                                <a href="">
                                    <img src="images/chennai.png" class="img-fluid"/>
                                    <span>Chennai</span>
                                </a>
                            </div>

                            <div class="cities_image">
                                <a href="">
                                    <img src="images/delhi.png" class="img-fluid"/>
                                    <span>Delhi</span>
                                </a>
                            </div>

                        </div>

                    </div>
</div>



            </div>
        </div>
    </div>
</div>
}