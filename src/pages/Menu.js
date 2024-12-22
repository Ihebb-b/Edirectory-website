import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Menu() {
    return (
        <div>
            <div class="container-xxl bg-white p-0">

                <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary" style={{ width: "12px", height: "12px" }} role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>




                <div class="container-xxl position-relative p-0">
                    <Navbar />

                    <div class="container-xxl py-5 bg-dark hero-header mb-5">
                        <div class="container text-center my-5 pt-5 pb-4">
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center text-uppercase">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Menu</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>




                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                            <h1 class="mb-5">Most Popular Items</h1>
                        </div>
                        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                                <li class="nav-item">
                                    <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                        <i class="fa fa-coffee fa-2x text-primary"></i>
                                        <div class="ps-3">
                                            <small class="text-body">Popular</small>
                                            <h6 class="mt-n1 mb-0">Breakfast</h6>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                        <i class="fa fa-hamburger fa-2x text-primary"></i>
                                        <div class="ps-3">
                                            <small class="text-body">Special</small>
                                            <h6 class="mt-n1 mb-0">Launch</h6>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                        <i class="fa fa-utensils fa-2x text-primary"></i>
                                        <div class="ps-3">
                                            <small class="text-body">Lovely</small>
                                            <h6 class="mt-n1 mb-0">Dinner</h6>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="tab-1" class="tab-pane fade show p-0 active">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" class="tab-pane fade show p-0">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-3" class="tab-pane fade show p-0">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{ width: "80px;" }} />
                                                <div class="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span class="text-primary">$115</span>
                                                    </h5>
                                                    <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer />


            </div>
        </div>
    )
}

export default Menu