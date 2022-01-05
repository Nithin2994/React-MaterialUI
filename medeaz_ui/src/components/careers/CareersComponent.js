import React from 'react'
import SecondMenuComponent from '../SecondMenuComponent'

export default function CareersComponent(props) {
    return (
        <React.Fragment>
            <SecondMenuComponent />
            <section class="careers">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="careers_inner_div">
                                <h3>Current Openings</h3>
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>

                                            <tr><th>No Vacancies Available</th>

                                            </tr></thead></table>
                                </div>
                            </div>


                            <div class="jobs_list">
                                <div class="row">
                                    <div class="col-12 jobs_list_inner p-3">
                                        <h3>Job Openings</h3>
                                        <p>We are passionate about attracting and retaining talented, skilled, and motivated team-members to join us in delivering quality products to our customers. If you are looking for a challenging, stimulating, high energy working environment with ample opportunities for multifarious learning, knowledge augmentation and expertise sharing, talk to us! Drop your updated CV at <b>support@medeaz.com</b></p>

                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Medical Officer
                                        </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <h5>Job Description :</h5>
                                                        <p>(Only Female Candidates Preferred) Basic knowledge in Anatomy and Physiology Should have minimum experience in allopathic hospitals with good medical back ground. Promoting health education in conjunction with other health professionals. Should have Patient screening and Clinical management skills Should have sound knowledge on using computer tools in using patient management system and related software Should be able to identify the complaints of health seekers and route them to the relevant specialty whenever required Should be open to give community talks or health talks whenever required To be well groomed, punctual and adhere to company policies and practices</p>

                                                        <ul class="list-unstyled">
                                                            <li>

                                                                <span>Job Title :</span>Medical Officer</li>

                                                            <li> <span>Qualification :</span>MBBS</li>

                                                            <li> <span>Experience : </span>4 to 6</li>

                                                            <li> <span>Department : </span>Operations</li>

                                                            <li> <span>No. of Positions :</span>01</li>

                                                            <li>  <span>Job Location : </span>Hyderabad.</li>
                                                        </ul>


                                                        <div class="text-right w-100">
                                                            <button class="submit_btn">Apply</button>
                                                        </div>
                                                        <div class="clearfix">

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
                </div>
            </section>


        </React.Fragment>
    )
}