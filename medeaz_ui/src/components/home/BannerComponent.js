import React from 'react'

export default function BannerComponent(props){
    return <div class="banner">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="images/my-health-manager.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="images/discounts.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="images/hassel-free-appointments.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="images/health-checks.jpg" alt="First slide"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
}