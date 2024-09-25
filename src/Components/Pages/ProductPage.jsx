/* eslint-disable no-unused-vars */
import React from 'react'


import disImg1 from "../../Images/wdproduct1.png";
import disImg2 from "../../Images/wbproduct2.png";
import disImg3 from "../../Images/wdproduct3.png";
import Footer from './Footer';

const ProductPage = () => {
  return (
    <>
      
    {/* This is the main image */}
    <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
          <h1 className="text-3xl">
                 Our Products
                </h1>
          </div>
        </div>
      </div>
    
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

    {/* This is the Footer section. */}
    <Footer/>
    
    </>
  )
}

export default ProductPage