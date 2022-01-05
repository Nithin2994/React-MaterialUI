import React from 'react'

export default function TopArticlesComponent(props){
    return <section class="blog-section pt-5 pb-5 pt-lg-0 pb-lg-0">
    <div class="container pb-4">
        <div class="discounts blog-section">
            <h3 class="about pb-2 py-4">Read Top Articles From Health Experts</h3>
        </div>
        <div class="row">
            <div class="col-lg-4  col-md-4 col-sm-6 blogimage">
                <div class="blog-imgs">
                    <a target="_blank" href="">
                        <img class="img-fluid" height="1100" width="1760" src="images/1.jpeg" title="" alt=""/>
                        <div class="short_description"><h5 >
                            <span >Pranayama Art of Breathing </span>
                        </h5></div>
                    </a>
                </div>
            </div>

            <div class="col-lg-4  col-md-4 col-sm-6 blogimage">
                <div class="blog-imgs">
                    <a target="_blank" href="">
                        <img class="img-fluid" height="1100" width="1760" src="images/2.jpeg" title="" alt=""/>
                        <div class="short_description"><h5 >
                            <span >Quench Your Thirst With Watermelon </span>
                        </h5></div>
                    </a>
                </div>
            </div>

            <div class="col-lg-4  col-md-4 col-sm-6 blogimage">
                <div class="blog-imgs">
                    <a target="_blank" href="">
                        <img class="img-fluid" height="1100" width="1760" src="images/3.jpeg" title="" alt=""/>
                        <div class="short_description"><h5 >
                            <span>Coconut Oil The Perfect Moisturizer For Skin </span>
                        </h5></div>
                    </a>
                </div>
            </div>

            <div class="text-center mt-4">
                <a href="/blog-category" class="btn_serch">See all Articles</a>
            </div>

        </div>
    </div>
</section>
}