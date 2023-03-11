import { Link } from "react-router-dom";

const TopNavbarSection = () => {
    const title = "SkumarLko";
    const facebook_url = "https://www.facebook.com/profile.php?id=100088691079311";
    const instagram_url = "https://www.instagram.com/skumarlko_2023/";
    const twitter_url = "https://twitter.com/skumarlko2023";
    const linkedin_url = "https://www.linkedin.com/in/suraj-kumar-9298a625a/";
    const youtube_url = "https://www.youtube.com/@skumarlko2023";
    return (
        <div className="container-fluid bg-light px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-6 px-5 text-start">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link className="small text-secondary" to="/">{title}</Link></li>
                        {/* <li className="breadcrumb-item"><a className="small text-secondary" href="#">Career</a></li>
                    <li className="breadcrumb-item"><a className="small text-secondary" href="#">Terms</a></li>
                    <li className="breadcrumb-item"><a className="small text-secondary" href="#">Privacy</a></li> */}
                    </ol>
                </div>
                <div className="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <div className="h-100 d-inline-flex align-items-center">
                        <a className="btn-square text-primary border-end rounded-0" target="_blank" href={facebook_url}><i className="fab fa-facebook-f"></i></a>
                        <a className="btn-square text-primary pe-0" target="_blank" href={instagram_url}><i className="fab fa-instagram"></i></a>
                        <a className="btn-square text-primary border-end rounded-0" target="_blank" href={twitter_url}><i className="fab fa-twitter"></i></a>
                        <a className="btn-square text-primary border-end rounded-0" target="_blank" href={linkedin_url}><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn-square text-primary border-end rounded-0" target="_blank" href={youtube_url}><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopNavbarSection;