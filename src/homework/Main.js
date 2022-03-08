import "./Main.css";
import "./bootstrap.min.css";
import {Link} from "react-router-dom";

const Main = () => {

    return (

        <div>
            <div className="container-xxl bg-white p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
                    <Link to="" className="navbar-brand">
                        <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3"/>Wings</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to="" className="nav-item nav-link active">Home</Link>
                            <Link to="" className="nav-item nav-link">About Us</Link>
                            <Link to="" className="nav-item nav-link">Classes</Link>
                            <div className="nav-item dropdown">
                                <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                                    <Link to="" className="dropdown-item">School Facilities</Link>
                                    <Link to="" className="dropdown-item">Popular Teachers</Link>
                                    <Link to="" className="dropdown-item">Become A Teachers</Link>
                                    <Link to="" className="dropdown-item">Make Appointment</Link>
                                    <Link to="" className="dropdown-item">Testimonial</Link>
                                    <Link to="" className="dropdown-item">404 Error</Link>
                                </div>
                            </div>
                            <Link to="" className="nav-item nav-link">Contact Us</Link>
                        </div>
                        <Link to="/" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Logout<i className="fa fa-arrow-right ms-3"/></Link>
                    </div>
                </nav>

                <div className="container-fluid p-0 mb-5">
                    <div className="owl-carousel header-carousel position-relative">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="homework/carousel-1.jpg" alt=""/>
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background:"rgba(0, 0, 0, .2)"}}>
                                    <div className="container">
                                        <div className="row justify-content-start">
                                            <div className="col-10 col-lg-8">
                                                <h1 className="display-2 text-white animated slideInDown mb-4">The Best
                                                    Kindergarten School For Your Child</h1>
                                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo
                                                    clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum
                                                    et diam justo clita et kasd rebum sea elitr.</p>
                                                <Link to=""
                                                   className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn
                                                    More</Link>
                                                <Link to=""
                                                   className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our
                                                    Classes</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="homework/carousel-2.jpg" alt=""/>
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background:"rgba(0, 0, 0, .2)"}}>
                                    <div className="container">
                                        <div className="row justify-content-start">
                                            <div className="col-10 col-lg-8">
                                                <h1 className="display-2 text-white animated slideInDown mb-4">Make A
                                                    Brighter Future For Your Child</h1>
                                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo
                                                    clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum
                                                    et diam justo clita et kasd rebum sea elitr.</p>
                                                <Link to="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                                                <Link to="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                            <h1 className="mb-3">School Facilities</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero
                                ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="facility-item">
                                    <div className="facility-icon bg-primary">
                                        <span className="bg-primary"/>
                                        <i className="fa fa-bus-alt fa-3x text-primary"/>
                                        <span className="bg-primary"/>
                                    </div>
                                    <div className="facility-text bg-primary">
                                        <h3 className="text-primary mb-3">School Bus</h3>
                                        <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                                            ipsum sit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="facility-item">
                                    <div className="facility-icon bg-success">
                                        <span className="bg-success"/>
                                        <i className="fa fa-futbol fa-3x text-success"/>
                                        <span className="bg-success"/>
                                    </div>
                                    <div className="facility-text bg-success">
                                        <h3 className="text-success mb-3">Playground</h3>
                                        <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                                            ipsum sit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="facility-item">
                                    <div className="facility-icon bg-warning">
                                        <span className="bg-warning"/>
                                        <i className="fa fa-home fa-3x text-warning"/>
                                        <span className="bg-warning"/>
                                    </div>
                                    <div className="facility-text bg-warning">
                                        <h3 className="text-warning mb-3">Healthy Canteen</h3>
                                        <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                                            ipsum sit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="facility-item">
                                    <div className="facility-icon bg-info">
                                        <span className="bg-info"/>
                                        <i className="fa fa-chalkboard-teacher fa-3x text-info"/>
                                        <span className="bg-info"/>
                                    </div>
                                    <div className="facility-text bg-info">
                                        <h3 className="text-info mb-3">Positive Learning</h3>
                                        <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                                            ipsum sit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <h1 className="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                    eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                    dolore erat amet</p>
                                <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
                                    est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at,
                                    sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd
                                    ea. Eirmod diam at dolor est vero nonumy magna.</p>
                                <div className="row g-4 align-items-center">
                                    <div className="col-sm-6">
                                        <Link to="" className="btn btn-primary rounded-pill py-3 px-5">Read More</Link>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle flex-shrink-0" src="homework/user.jpg" alt="" style={{width:"45px",height:"45px"}}/>
                                                <div className="ms-3">
                                                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                                                    <small>CEO & Founder</small>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <img className="img-fluid w-75 rounded-circle bg-light p-3"
                                             src="homework/about-1.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 text-start" style={{marginTop:"-150px"}}>
                                        <img className="img-fluid w-100 rounded-circle bg-light p-3"
                                             src="homework/about-2.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 text-end" style={{marginTop:"-150px"}}>
                                        <img className="img-fluid w-100 rounded-circle bg-light p-3"
                                             src="homework/about-3.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="bg-light rounded">
                            <div className="row g-0">
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{minHeight:"400px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute w-100 h-100 rounded" alt=""
                                             src="homework/call-to-action.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="h-100 d-flex flex-column justify-content-center p-5">
                                        <h1 className="mb-4">Become A Teacher</h1>
                                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                            Aliqu diam amet diam et eos.
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                            dolore erat amet
                                        </p>
                                        <Link to="" className="btn btn-primary py-3 px-5">Get Started Now<i className="fa fa-arrow-right ms-2"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                            <h1 className="mb-3">School Classes</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero
                                ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="classes-item">
                                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="homework/classes-1.jpg" alt=""/>
                                    </div>
                                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                                        <Link to="" className="d-block text-center h3 mt-3 mb-4">Art & Drawing</Link>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle flex-shrink-0" src="homework/user.jpg" alt="" style={{width:"45px", height:"45px"}}/>
                                                    <div className="ms-3">
                                                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                                                        <small>Teacher</small>
                                                    </div>
                                            </div>
                                            <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                                        </div>
                                        <div className="row g-1">
                                            <div className="col-4">
                                                <div className="border-top border-3 border-primary pt-2">
                                                    <h6 className="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-success pt-2">
                                                    <h6 className="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-warning pt-2">
                                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="classes-item">
                                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="homework/classes-2.jpg" alt=""/>
                                    </div>
                                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                                        <Link to="" className="d-block text-center h3 mt-3 mb-4">Color Management</Link>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle flex-shrink-0" src="homework/user.jpg" alt="" style={{width:"45px", height:"45px"}}/>
                                                    <div className="ms-3">
                                                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                                                        <small>Teacher</small>
                                                    </div>
                                            </div>
                                            <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                                        </div>
                                        <div className="row g-1">
                                            <div className="col-4">
                                                <div className="border-top border-3 border-primary pt-2">
                                                    <h6 className="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-success pt-2">
                                                    <h6 className="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-warning pt-2">
                                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="classes-item">
                                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="../../public/homework/classes-3.jpg" alt=""/>
                                    </div>
                                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                                        <Link to="" className="d-block text-center h3 mt-3 mb-4">Athletic & Dance</Link>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle flex-shrink-0" src="homework/user.jpg" alt="" style={{width:"45px", height:"45px"}}/>
                                                    <div className="ms-3">
                                                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                                                        <small>Teacher</small>
                                                    </div>
                                            </div>
                                            <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                                        </div>
                                        <div className="row g-1">
                                            <div className="col-4">
                                                <div className="border-top border-3 border-primary pt-2">
                                                    <h6 className="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-success pt-2">
                                                    <h6 className="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-warning pt-2">
                                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="classes-item">
                                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="homework/classes-4.jpg" alt=""/>
                                    </div>
                                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                                        <Link to="" className="d-block text-center h3 mt-3 mb-4">Language & Speaking</Link>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle flex-shrink-0" src="homework/user.jpg" alt="" style={{width:"45px", height:"45px"}}/>
                                                    <div className="ms-3">
                                                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                                                        <small>Teacher</small>
                                                    </div>
                                            </div>
                                            <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                                        </div>
                                        <div className="row g-1">
                                            <div className="col-4">
                                                <div className="border-top border-3 border-primary pt-2">
                                                    <h6 className="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-success pt-2">
                                                    <h6 className="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-warning pt-2">
                                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="classes-item">
                                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="../../public/homework/classes-5.jpg" alt=""/>
                                    </div>
                                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                                        <Link to="" className="d-block text-center h3 mt-3 mb-4">Religion & History</Link>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle flex-shrink-0" src="homework/user.jpg" alt="" style={{width:"45px", height:"45px"}}/>
                                                    <div className="ms-3">
                                                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                                                        <small>Teacher</small>
                                                    </div>
                                            </div>
                                            <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                                        </div>
                                        <div className="row g-1">
                                            <div className="col-4">
                                                <div className="border-top border-3 border-primary pt-2">
                                                    <h6 className="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-success pt-2">
                                                    <h6 className="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-warning pt-2">
                                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="classes-item">
                                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="homework/classes-6.jpg" alt=""/>
                                    </div>
                                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                                        <Link to="" className="d-block text-center h3 mt-3 mb-4">General Knowledge</Link>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle flex-shrink-0" src="homework/user.jpg" alt="" style={{width:"45px", height:"45px"}}/>
                                                    <div className="ms-3">
                                                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                                                        <small>Teacher</small>
                                                    </div>
                                            </div>
                                            <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                                        </div>
                                        <div className="row g-1">
                                            <div className="col-4">
                                                <div className="border-top border-3 border-primary pt-2">
                                                    <h6 className="text-primary mb-1">Age:</h6>
                                                    <small>3-5 Years</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-success pt-2">
                                                    <h6 className="text-success mb-1">Time:</h6>
                                                    <small>9-10 AM</small>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="border-top border-3 border-warning pt-2">
                                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                                    <small>30 Kids</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="bg-light rounded">
                            <div className="row g-0">
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="h-100 d-flex flex-column justify-content-center p-5">
                                        <h1 className="mb-4">Make Appointment</h1>
                                        <form>
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control border-0" id="gname"
                                                               placeholder="Gurdian Name"/>
                                                            <label htmlFor="gname">Gurdian Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-floating">
                                                        <input type="email" className="form-control border-0" id="gmail"
                                                               placeholder="Gurdian Email"/>
                                                            <label htmlFor="gmail">Gurdian Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control border-0" id="cname"
                                                               placeholder="Child Name"/>
                                                            <label htmlFor="cname">Child Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control border-0" id="cage"
                                                               placeholder="Child Age"/>
                                                            <label htmlFor="cage">Child Age</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea className="form-control border-0"
                                                                  placeholder="Leave a message here" id="message" style={{height:"100px"}}/>
                                                        <label htmlFor="message">Message</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100 py-3"
                                                            type="submit">Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight:"400px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute w-100 h-100 rounded" src="homework/appointment.jpg" alt="" style={{objectFit:"cover"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                            <h1 className="mb-3">Popular Teachers</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero
                                ipsum sit
                                eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item position-relative">
                                    <img className="img-fluid rounded-circle w-75" src="homework/team-1.jpg" alt=""/>
                                        <div className="team-text">
                                            <h3>Full Name</h3>
                                            <p>Designation</p>
                                            <div className="d-flex align-items-center">
                                                <Link to="" className="btn btn-square btn-primary mx-1"><i
                                                    className="fab fa-facebook-f"/></Link>
                                                <Link to="" className="btn btn-square btn-primary  mx-1"><i
                                                    className="fab fa-twitter"/></Link>
                                                <Link to="" className="btn btn-square btn-primary  mx-1"><i
                                                    className="fab fa-instagram"/></Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item position-relative">
                                    <img className="img-fluid rounded-circle w-75" src="homework/team-2.jpg" alt=""/>
                                        <div className="team-text">
                                            <h3>Full Name</h3>
                                            <p>Designation</p>
                                            <div className="d-flex align-items-center">
                                                <Link to="" className="btn btn-square btn-primary mx-1"><i className="fab fa-facebook-f"/></Link>
                                                <Link to="" className="btn btn-square btn-primary mx-1"><i className="fab fa-twitter"/></Link>
                                                <Link to="" className="btn btn-square btn-primary mx-1"><i className="fab fa-instagram"/></Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item position-relative">
                                    <img className="img-fluid rounded-circle w-75" src="homework/team-3.jpg" alt=""/>
                                        <div className="team-text">
                                            <h3>Full Name</h3>
                                            <p>Designation</p>
                                            <div className="d-flex align-items-center">
                                                <Link to="" className="btn btn-square btn-primary mx-1"><i
                                                    className="fab fa-facebook-f"/></Link>
                                                <Link to="" className="btn btn-square btn-primary  mx-1"><i
                                                    className="fab fa-twitter"/></Link>
                                                <Link to="" className="btn btn-square btn-primary  mx-1"><i
                                                    className="fab fa-instagram"/></Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                            <h1 className="mb-3">Our Clients Say!</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero
                                ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                            <div className="testimonial-item bg-light rounded p-5">
                                <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                    rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius:"50px 0 0 50px"}}>
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="homework/testimonial-1.jpg" style={{width:"90px", height:"90px"}} alt=""/>
                                        <div className="ps-3">
                                            <h3 className="mb-1">Client Name</h3>
                                            <span>Profession</span>
                                        </div>
                                        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"/>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-5">
                                <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                    rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius:"50px 0 0 50px"}}>
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="homework/testimonial-2.jpg" style={{width:"90px", height:"90px"}} alt=""/>
                                        <div className="ps-3">
                                            <h3 className="mb-1">Client Name</h3>
                                            <span>Profession</span>
                                        </div>
                                        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"/>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-5">
                                <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
                                    rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius:"50px 0 0 50px"}}>
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="homework/testimonial-3.jpg" style={{width:"90px", height:"90px"}} alt=""/>
                                        <div className="ps-3">
                                            <h3 className="mb-1">Client Name</h3>
                                            <span>Profession</span>
                                        </div>
                                        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
                     data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h3 className="text-white mb-4">Get In Touch</h3>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"/>123 Street, New York,
                                    USA</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"/>+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"/>info@example.com</p>
                                <div className="d-flex pt-2">
                                    <Link to="" className="btn btn-outline-light btn-social"><i
                                        className="fab fa-twitter"/></Link>
                                    <Link to="" className="btn btn-outline-light btn-social"><i
                                        className="fab fa-facebook-f"/></Link>
                                    <Link to="" className="btn btn-outline-light btn-social"><i
                                        className="fab fa-youtube"/></Link>
                                    <Link to="" className="btn btn-outline-light btn-social"><i
                                        className="fab fa-linkedin-in"/></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3 className="text-white mb-4">Quick Links</h3>
                                <Link to="" className="btn btn-link text-white-50">About Us</Link>
                                <Link to="" className="btn btn-link text-white-50">Contact Us</Link>
                                <Link to="" className="btn btn-link text-white-50">Our Services</Link>
                                <Link to="" className="btn btn-link text-white-50">Privacy Policy</Link>
                                <Link to="" className="btn btn-link text-white-50">Terms & Condition</Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3 className="text-white mb-4">Photo Gallery</h3>
                                <div className="row g-2 pt-2">
                                    <div className="col-4">
                                        <img className="img-fluid rounded bg-light p-1" src="homework/classes-1.jpg" alt=""/>
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid rounded bg-light p-1" src="homework/classes-2.jpg" alt=""/>
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid rounded bg-light p-1" src="homework/classes-3.jpg" alt=""/>
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid rounded bg-light p-1" src="homework/classes-4.jpg" alt=""/>
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid rounded bg-light p-1" src="homework/classes-5.jpg" alt=""/>
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid rounded bg-light p-1" src="homework/classes-6.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3 className="text-white mb-4">Newsletter</h3>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="position-relative mx-auto" style={{maxWidth:"400px"}}>
                                    <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                                           placeholder="Your email"/>
                                        <button type="button"
                                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    <Link to="" className="border-bottom">Your Site Name</Link>, All Right Reserved.

                                    Designed By <Link to="" className="border-bottom">HTML Codex</Link>
                                    <br/>Distributed By: <Link to="" className="border-bottom" target="_blank">ThemeWagon</Link>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <Link to="">Home</Link>
                                        <Link to="">Cookies</Link>
                                        <Link to="">Help</Link>
                                        <Link to="">FQAs</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"/></Link>
            </div>
        </div>

    )

}

export default Main;