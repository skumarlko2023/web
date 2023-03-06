import { Link } from "react-router-dom";

const FooterSection = () => {
    const contact = '+918840514204';
    const email = 'skumarlko2023@gmail.com';
    const address = 'Lucknow, Uttar Pradesh!';

    const facebook_url = "https://www.facebook.com/profile.php?id=100088691079311";
    const instagram_url = "https://www.instagram.com/skumarlko_2023/";
    const twitter_url = "https://twitter.com/skumarlko2023";
    const linkedin_url = "https://www.linkedin.com/in/suraj-kumar-9298a625a/";
    const youtube_url = "https://www.youtube.com/@skumarlko2023";

    return (
        <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Our Office</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{address}</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{contact}</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>{email}</p>
                        <div className="d-flex pt-3">
                            <a className="btn btn-square btn-light rounded-circle me-2" target="_blank" href={facebook_url}><i
                                className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-light rounded-circle me-2" target="_blank" href={instagram_url}><i
                                className="fab fa-instagram"></i></a>
                            <a className="btn btn-square btn-light rounded-circle me-2" target="_blank" href={twitter_url}><i
                                className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-light rounded-circle me-2" target="_blank" href={linkedin_url}><i
                                className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-square btn-light rounded-circle me-2" target="_blank" href={youtube_url}><i
                                className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <Link className="btn btn-link" to="/about">About Us</Link>
                        <Link className="btn btn-link" to="/contact">Contact Us</Link>
                        <Link className="btn btn-link" to="/service">Our Services</Link>
                        {/* <Link className="btn btn-link" to="/terms-condition">Terms & Condition</Link>
                        <Link className="btn btn-link" to="/support">Support</Link> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Business Hours</h4>
                        <p className="mb-1">Monday - Friday</p>
                        <h6 className="text-light">09:00 am - 11:00 pm</h6>
                        <p className="mb-1">Saturday</p>
                        <h6 className="text-light">09:00 am - 12:00 pm</h6>
                        <p className="mb-1">Sunday</p>
                        <h6 className="text-light">Closed</h6>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative w-100">
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                                placeholder="Your email" />
                            <button type="button"
                                className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterSection;