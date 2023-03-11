import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const NavbarSection = () => {
    const title = "skumarlko";
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmithandel = (e) => {
        console.log('Hello',e);
    }
    const contact_form = <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={onSubmithandel}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Please Enter Name"
                        autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contact Number: </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="0123456789"
                        autoFocus
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Discretion: </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary">Send</Button>
        </Modal.Footer>
    </Modal>
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
                            {/* <a href="" className="btn btn-primary rounded-pill py-2 px-3">Get A Quote</a> */}
                            <Button variant="primary" onClick={handleShow}> Get A Quote</Button>
                            {contact_form}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavbarSection;