import React from 'react';

function SectionAbout() {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          {/* Video Box */}
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              className="glightbox play-btn mb-4"
            ></a>
          </div>

          {/* Icon Boxes Section */}
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>
              Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus.
              Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere
              corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur.
              Suscipit aut voluptate.
            </p>

            {/* Icon Box 1 */}
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-fingerprint"></i>
              </div>
              <h4 className="title">
                <a href="#">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident.
              </p>
            </div>

            {/* Icon Box 2 */}
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-gift"></i>
              </div>
              <h4 className="title">
                <a href="#">Nemo Enim</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque.
              </p>
            </div>

            {/* Icon Box 3 */}
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-atom"></i>
              </div>
              <h4 className="title">
                <a href="#">Dine Pad</a>
              </h4>
              <p className="description">
                Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut
                deserunt minus aut eligendi omnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
