/* eslint-disable no-unused-vars */
import React from "react";

// import img here.
import bannerImg from "../../Images/wBannerImge.png";
import disImg1 from "../../Images/wdproduct1.png";
import disImg2 from "../../Images/wbproduct2.png";
import disImg3 from "../../Images/wdproduct3.png";
import aboutImage from "../../Images/infoImg.jpg";
import aboutImage1 from "../../Images/wabout1.jpg";
import aboutImage2 from "../../Images/wabout2.png";
import aboutImage3 from "../../Images/wabout3.jpg";
import trucksvg from '../../../images/truck.svg';
import bagsvg from '../../../images/bag.svg';
import supportsvg from '../../../images/support.svg';
import returnsvg from '../../../images/return.svg';

// import components here.
import Carousel from "./Carousel/Carousel";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      {/* This main img section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 className="text-3xl">
                  Modern Infrared Cooktop{" "}
                  <span className="d-block">Design Hub</span>
                </h1>
                <p className="mb-4">
                  The Modern Infrared Cooktop Design Hub focuses on innovative,
                  stylish infrared cooktop designs that enhance both performance
                  and aesthetics.
                </p>
                <p>
                  <a  className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a  className="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img
                  src={bannerImg}
                  className="w-full h-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title text-3xl">
                Designed with excellent material.
              </h2>
              <p className="mb-4 text-lg">
                Designed with Excellence in Mind suggests that careful
                consideration has been given to every aspect of the products
                design process. It implies that the materials used, the
                engineering, and the overall aesthetics have been thoughtfully
                chosen and implemented to ensure high quality and functionality.
              </p>
              <p className="btn">
                  Explore
              </p>
            </div>
            {/* End Column 1 */}

            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" >
                <img src={disImg1} className="img-fluid product-thumbnail" />
                <h3 className="product-title">infrared cooktop</h3>
                <strong className="product-price">RS 50.00</strong> 
              </a>
            </div>
            {/* End Column 2 */}

            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" >
                <img src={disImg2} className="img-fluid product-thumbnail" />
                <h3 className="product-title">infrared cooktop</h3>
                <strong className="product-price">RS 78.00</strong>
              </a>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" >
                <img src={disImg3} className="img-fluid product-thumbnail" />
                <h3 className="product-title">infrared cooktop</h3>
                <strong className="product-price">RS 43.00</strong> 
              </a>
            </div>
            {/* End Column 4 */}
          </div>
        </div>
      </div>
      {/* End Product Section */}

      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title text-3xl">Why Choose Us</h2>
              <p>
                Our policies are designed to prioritize your satisfaction,
                ensuring a seamless experience from purchase to use. Our
                policies are designed to prioritize your satisfaction, ensuring
                a seamless experience from purchase to use.
              </p>
              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={trucksvg}
                        alt="Image"
                        className="trucksvg"
                      />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Get your products swiftly and at no additional cost,
                      ensuring prompt delivery to your doorstep.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={bagsvg}
                        alt="Image"
                        className="bagsvg"
                      />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Enjoy a user-friendly shopping experience with intuitive
                      navigation and a wide selection of products.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={supportsvg}
                        alt="Image"
                        className="supportsvg"
                      />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Receive assistance round-the-clock from our dedicated
                      customer service team, ensuring help is always available
                      when you need it.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={returnsvg}
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Enjoy peace of mind with our straightforward return
                      process, making it easy to return or exchange items if
                      needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img src={aboutImage} alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}

      {/* Start We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src={aboutImage1} alt="aboutimg" />
                </div>
                <div className="grid grid-2">
                  <img src={aboutImage2} alt="aboutimg" />
                </div>
                <div className="grid grid-3">
                  <img src={aboutImage3} alt="aboutimg" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4 text-3xl">
                We Help You Make Modern Kitchen Design
              </h2>
              <p>
                we assist customers in achieving contemporary and stylish
                kitchen layouts. It implies that our expertise and products
                contribute to creating modern aesthetics, functionality, and
                efficiency in kitchen spaces. We offer guidance, solutions, and
                products that align with current design trends and cater to
                individual preferences, ensuring a seamless and satisfying
                experience in achieving a modern kitchen design.

                we assist customers in achieving contemporary and stylish 
                kitchen layouts. It imlies that our expertise and product contrubute to 
                creating modern aesthetics functionality and efficiency in kitchen spaces 
                we offer guidance 
              </p>

              <ul className="list-unstyled custom-list my-4">
                <li>
                  Expert Guidance: This includes insights into current trends,
                  optimal layouts, efficient use of space, and selection of
                  materials and appliances.
                </li>
                <li>
                  Personalized Solutions: Receive customized recommendations and
                  solutions tailored to your specific space and preferences.
                </li>
                <li>
                  Quality Products: Access high-quality appliances and materials
                  that enhance your kitchens functionality and aesthetics.
                </li>
                <li>
                  Effortless Experience: Enjoy a seamless process from concept
                  to completion, making modernizing your kitchen straightforward
                  and rewarding.
                </li>
              </ul>
              <p>
                <a  className="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End We Help Section */}

      {/* this is the product section */}
      <div className="untree_co-section product-section py-10">
        <div className="container mx-auto px-4">
          <div className="mb-5">
            <h2 className="text-3xl text-dark flex items-center">
              <i className="bi bi-arrow-bar-right mr-2"></i> Our Trending
              Products
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Column 1 */}
            <div className="mb-5">
              <a className="product-item block">
                <img
                  src={disImg1}
                  className="img-fluid product-thumbnail w-full"
                  alt="Product"
                />
                <h3 className="product-title mt-2 text-lg font-medium">
                Infrared cooktop
                </h3>
                <span className="icon-cross block mt-2 text-blue-500 cursor-pointer">
                  Enquiry Now
                </span>
              </a>
            </div>
            {/* Column 2 */}
            <div className="mb-5">
              <a className="product-item block">
                <img
                  src={disImg2}
                  className="img-fluid product-thumbnail w-full"
                  alt="Product"
                />
                <h3 className="product-title mt-2 text-lg font-medium">
                Infrared cooktop
                </h3>
                <span className="icon-cross block mt-2 text-blue-500 cursor-pointer">
                  Enquiry Now
                </span>
              </a>
            </div>
            {/* Column 3 */}
            <div className="mb-5">
              <a className="product-item block">
                <img
                  src={disImg3}
                  className="img-fluid product-thumbnail w-full"
                  alt="Product"
                />
                <h3 className="product-title mt-2 text-lg font-medium">
                Infrared cooktop
                </h3>
                <span className="icon-cross block mt-2 text-blue-500 cursor-pointer">
                  Enquiry Now
                </span>
              </a>
            </div>
            {/* Column 4 */}
            <div className="mb-5">
              <a className="product-item block">
                <img
                  src={disImg1}
                  className="img-fluid product-thumbnail w-full"
                  alt="Product"
                />
                <h3 className="product-title mt-2 text-lg font-medium">
                Infrared cooktop
                </h3>
                <span className="icon-cross block mt-2 text-blue-500 cursor-pointer">
                  Enquiry Now
                </span>
              </a>
            </div>
            {/* Additional Columns */}
            <div className="mb-5">
              <a className="product-item block">
                <img
                  src={disImg2}
                  className="img-fluid product-thumbnail w-full"
                  alt="Product"
                />
                <h3 className="product-title mt-2 text-lg font-medium">
                Infrared cooktop
                </h3>
                <span className="icon-cross block mt-2 text-blue-500 cursor-pointer">
                  Enquiry Now
                </span>
              </a>
            </div>
            <div className="mb-5">
              <a className="product-item block">
                <img
                  src={disImg3}
                  className="img-fluid product-thumbnail w-full"
                  alt="Product"
                />
                <h3 className="product-title mt-2 text-lg font-medium">
                Infrared cooktop
                </h3>
                <span className="icon-cross block mt-2 text-blue-500 cursor-pointer">
                  Enquiry Now
                </span>
              </a>
            </div>
            <div className="mb-5">
              <a className="product-item block">
                <img
                  src={disImg1}
                  className="img-fluid product-thumbnail w-full"
                  alt="Product"
                />
                <h3 className="product-title mt-2 text-lg font-medium">
                Infrared cooktop
                </h3>
                <span className="icon-cross block mt-2 text-blue-500 cursor-pointer">
                  Enquiry Now
                </span>
              </a>
            </div>
            <div className="mb-5">
              <a className="product-item block">
                <img
                  src={disImg2}
                  className="img-fluid product-thumbnail w-full"
                  alt="Product"
                />
                <h3 className="product-title mt-2 text-lg font-medium">
                Infrared cooktop
                </h3>
                <span className="icon-cross block mt-2 text-blue-500 cursor-pointer">
                  Enquiry Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="mt-20 bg-[#EFF2F1] py-16 relative">
        <h1 className=" text-black text-center font-bold text-4xl mb-32 flex items-center justify-center relative">
          Happy Clients
        </h1>
        <Carousel />
      </div>

      {/* This is footer  */}
      <Footer />

    </>
  );
};

export default HomePage;
