const SliderSection = () => {
    const title = "skumarlko"
    return (
        <div className="container-fluid px-0 mb-5">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7 text-start">
                                            <p className="fs-4 text-white animated slideInRight">Welcome to 
                                                <strong> {title}</strong>
                                            </p>
                                            <h1 className="display-1 text-white mb-4 animated slideInRight">Unlock Your Business
                                                Growth</h1>
                                            <a href=""
                                                className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">Explore
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-7 text-end">
                                            <p className="fs-4 text-white animated slideInLeft">Welcome to <strong>{title}</strong>
                                            </p>
                                            <h1 className="display-1 text-white mb-5 animated slideInLeft">Ready to Grow Your
                                                Business</h1>
                                            <a href=""
                                                className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Explore
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default SliderSection;