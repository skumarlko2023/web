const CopyRightSection = () => {
    const title = "skumarlko"
    return (
        <>
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-12 text-center mb-3 mb-md-0">
                            &copy; <a className="fw-medium text-light" href="#">{title}</a>, All Right Reserved.
                        </div>
                        {/* <div className="col-md-6 text-center text-md-end">
                            <a className="fw-medium text-light" href="https://htmlcodex.com">HTML Codex</a>
                            Distributed By <a className="fw-medium text-light" href="https://themewagon.com">ThemeWagon</a>
                        </div> */}
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
                className="bi bi-arrow-up"></i></a>
        </>
    )
}
export default CopyRightSection;