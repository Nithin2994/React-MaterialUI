import React from 'react'

export default function DownloadAppComponent(props) {
    return <section class="full_width mobile-app">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6  col-sm-6 col-xs-12 downlon-grid">
                    <h3 class="title pt-5 text-right mt-5">Download the Medeaz app</h3>
                    <div class="app-text text-right">
                        <p>Book appointments and health checkups;
                        <br />Order medicines and consult doctors online</p>
                        <p>Get the link to download the app</p>
                    </div>
                    <div class="m-applink m-margin--15__top text-right">
                        <div class="m-applink__input ">
                            <div class="m-d__flex">
                                <div class="country-code"> +91</div>
                                <input class="texts" placeholder="Enter phone number" type="tel" value="" />
                            </div>
                            <div class="m-t-c--green_2 link-sent">
                            </div>
                        </div>
                        <button class="btn btn-primary send-btn" type="button">Send app link</button>
                    </div>
                    <div class="clearfix"></div>
                    <div class="app-store pt-3 text-right">
                        <ul>
                            <li><img src="images/app-store.png" /></li>
                            <li><img src="images/google-play.png" /></li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-lg-6 col-md-6  col-sm-6 col-xs-12 downlon-grid2">
                        <img src="images/app.png" class="img-fluid" />
                    </div>
                </div>
            </div>
    </section>
}