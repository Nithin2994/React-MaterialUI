import React from 'react'
import SecondMenuComponent from '../SecondMenuComponent'

export default function ContactusComponent(props) {
    return (
        <React.Fragment>
            <SecondMenuComponent />
            <section class="contactus_cont p-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="heading_header-small"><h2>Contact us</h2></div>
                            <p>Medeaz Healthcare Systems (A unit of Ishaanyu Private Limited)</p>
                            <p>Namratha Estates, Country Oven Lane, Ameerpet</p>
                            <p>Road, Greenlands, Hyderabad -16. Contact : +91 6305827170, 6305829694</p>
                            <p>E-mail : support@medeaz.com</p>
                            <p>Web-URL : www.medeaz.com</p>

                            <a href="https://www.google.com/maps/?daddr=Namratha%20Estates,%20Country%20Oven%20Lane,%20Ameerpet" class="mt-2 get_directions">Get Directions</a>

                            <div class="mt-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60893.63570669434!2d78.38789408665076!3d17.466785310814902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91243b87e989%3A0x9e668c8a6989a0e0!2sMedeaz%20Healthcare%20Systems%20-%20India&#39;s%201st%20Integrated%20Health%20Assistance%20System!5e0!3m2!1sen!2sin!4v1633838622971!5m2!1sen!2sin" width="100%" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <form>
                                <div class="form-group position-relative pb-4">
                                    <label>Name</label>
                                    <input class="form-control" placeholder="Your Name" required="" type="text" />
                                </div>

                                <div class="form-group position-relative pb-4">
                                    <label>Mobile Number</label>
                                    <input class="form-control" placeholder="Mobile Number" required="" type="text" />
                                </div>


                                <div class="form-group position-relative pb-4">
                                    <label>Email</label>
                                    <input class="form-control" placeholder="Email" required="" type="email" />
                                </div>

                                <div class="form-group position-relative pb-4">
                                    <label>Message</label>
                                    <textarea class="form-control txt-area" placeholder="What's on your mind?" rows="3"></textarea>
                                </div>

                                <button class="submit_btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}