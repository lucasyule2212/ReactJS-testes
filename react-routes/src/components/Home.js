import React from 'react';
import '../styles/Home.scss'


function Home(props) {
    return(
     
    <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">              
                <img src="/assets/alex-irimia-ueAfziO4nfI-unsplash.jpg" className="d-block w-50" alt="image1"></img>
            </div>
            <div className="carousel-item">
                <img src="/assets/annie-spratt-yG5EuA5dwhE-unsplash.jpg" className="d-block w-50" alt="image1"></img>
            </div>
            <div className="carousel-item">
                <img src="/assets/steve-harvey-oq1FXy1NpPI-unsplash.jpg" className="d-block w-50" alt="image1"></img>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    
    );
}

export default Home;