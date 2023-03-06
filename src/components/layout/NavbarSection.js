import { Link } from "react-router-dom";
const NavbarSection = () => {
    const title = "skumarlko";
    return (
        <div className="container-fluid bg-white sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                    <a href="index.html" className="navbar-brand d-lg-none">
                        <h1 className="fw-bold m-0">{title}</h1>
                    </a>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/index" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Services</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="ms-auto d-none d-lg-block">
                            <a href="" className="btn btn-primary rounded-pill py-2 px-3">Get A Quote</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavbarSection;