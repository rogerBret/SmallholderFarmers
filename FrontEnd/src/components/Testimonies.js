import Carousel from 'react-bootstrap/Carousel';

function Testimonies() {
  return (
    <div className="container my-10 row ">
            <h2 className='mt-3 d-flex justify-content-center align-items-center'><b>Testimonies<span className='green'>.</span></b></h2>    
            <div id="myCarousel" className="carousel carousel-dark slide text-center" data-bs-ride="carousel"> 
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                       <h3>"It's a pleasure to work with you! Your Services are so smart!"</h3>
                       <h5>CEO AGRIWEB</h5>
                    </div>
                    <div className="carousel-item">
                        <h3>"It's very diffucult to see person who are very young, very creative and adhere easily to our vision"</h3>
                        <h5>CEO BIXTERPRISE</h5>
                    </div>
                    <div className="carousel-item">
                        <h3>"It's very diffucult to see young man who are very engaged in work as you christophe"</h3>
                        <h5>CO CEO Centrale informatique</h5>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>    
    );
}

export default Testimonies;