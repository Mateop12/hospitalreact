import React from 'react'
import doctor1 from "/src/assets/img/doctors/doctors-1.jpg"
import doctor2 from "/src/assets/img/doctors/doctors-2.jpg"
import doctor3 from "/src/assets/img/doctors/doctors-3.jpg"
import doctor4 from "/src/assets/img/doctors/doctors-4.jpg"

function DoctorsSection() {
  return (
    <>
        <section id="doctors" className="doctors">
            <div className="container">

                <div className="section-title">
                <h2>Doctors</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">

                <div className="col-lg-6">
                    <div className="member d-flex align-items-start">
                    <div className="pic"><img src={doctor1} className="img-fluid" alt=""/></div>
                    <div className="member-info">
                        <h4>Walter White</h4>
                        <span>Chief Medical Officer</span>
                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        <div className="social">
                        <a href=""><i className="ri-twitter-fill"></i></a>
                        <a href=""><i className="ri-facebook-fill"></i></a>
                        <a href=""><i className="ri-instagram-fill"></i></a>
                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="member d-flex align-items-start">
                    <div className="pic"><img src={doctor2} className="img-fluid" alt=""/></div>
                    <div className="member-info">
                        <h4>Sarah Jhonson</h4>
                        <span>Anesthesiologist</span>
                        <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                        <div className="social">
                        <a href=""><i className="ri-twitter-fill"></i></a>
                        <a href=""><i className="ri-facebook-fill"></i></a>
                        <a href=""><i className="ri-instagram-fill"></i></a>
                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-6 mt-4">
                    <div className="member d-flex align-items-start">
                    <div className="pic"><img src={doctor3} className="img-fluid" alt=""/></div>
                    <div className="member-info">
                        <h4>William Anderson</h4>
                        <span>Cardiology</span>
                        <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                        <div className="social">
                        <a href=""><i className="ri-twitter-fill"></i></a>
                        <a href=""><i className="ri-facebook-fill"></i></a>
                        <a href=""><i className="ri-instagram-fill"></i></a>
                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-6 mt-4">
                    <div className="member d-flex align-items-start">
                    <div className="pic"><img src={doctor4} className="img-fluid" alt=""/></div>
                    <div className="member-info">
                        <h4>Amanda Jepson</h4>
                        <span>Neurosurgeon</span>
                        <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                        <div className="social">
                        <a href=""><i className="ri-twitter-fill"></i></a>
                        <a href=""><i className="ri-facebook-fill"></i></a>
                        <a href=""><i className="ri-instagram-fill"></i></a>
                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                        </div>
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default DoctorsSection