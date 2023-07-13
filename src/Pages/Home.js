import React,{useState} from "react";
import products from "./ProductData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { Link, NavLink } from "react-router-dom";

function Home() {
  const [is_mini_cart, setis_mini_cart] = useState(false);
  const [data, setData] = useState(products);

  const dispatch = useDispatch()

  const send = (p) => {
    // console.log(p);
    dispatch(ADD(p));
  }

  return (
    <div>
      <div className="main-wrapper">
        <div className="banner-area-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img"></div>
                  <div className="banner-content">
                    <span>In-Store & Online</span>
                    <h3>
                      Men's Shirt's
                      <br />
                      T-shirt's & More!
                    </h3>
                    <div className="kenne-btn-ps_center">
                      <a
                        className="kenne-btn transparent-btn black-color square-btn"
                        href="/products"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-area">
          <div className="container">
            <div className="service-nav">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="service-item">
                    <div className="content">
                      <h4>Free Shipping</h4>
                      <p>Free shipping on all order</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="service-item">
                    <div className="content">
                      <h4>Money Return</h4>
                      <p>30 days for free return</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="service-item">
                    <div className="content">
                      <h4>Online Support</h4>
                      <p>Support 24 hours a day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-6 custom-xxs-col">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img src="../images/banner-1.webp" alt="Banner" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6 custom-xxs-col">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img src="../images/bannner-2.webp" alt="Banner" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6 custom-xxs-col">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img src="../images/banner-1.webp" alt="Banner" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-area ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h3>New Product</h3>
                  <div className="product-arrow"></div>
                </div>
              </div>
              <div className="col-lg-12 container">
                <div className="row">
                  {products.map((product) => (
                    <div className="product-item col-lg-3 col-md-4" key={product.id}>
                      <div className="single-product">
                        <div className="product-img">
                          <NavLink to={`/product/${product.id}`}>
                            <img
                              className="primary-img"
                              src={product.primaryImg}
                              alt="Product"
                              style={{ maxWidth: "200px" }}
                            />
                            <img
                              className="secondary-img"
                              src={product.secondaryImg}
                              alt="Product"
                              style={{ maxWidth: "200px" }}
                            />
                          </NavLink>
                          {product.isHot && <span className="sticker-2">Hot</span>}
                          <div className="add-actions">
                            <ul>
                              <li
                                className="quick-view-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCenter"
                              >
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Quick View"
                                >
                                  <i className="ion-ios-search"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Add To Wishlist"
                                >
                                  <i className="ion-ios-heart-outline"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="compare.html"
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Add To Compare"
                                >
                                  <i className="ion-ios-reload"></i>
                                </a>
                              </li>
                              <li>
                          
                                <Link to={"/cart"}
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Add To cart"
                                  onClick={() => send(product)}
                                >
                                  <i className="ion-bag"></i>
                                </Link>
                                
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="product-desc_info">
                            <h3 className="product-name">
                              <a href="single-product.html">{product.name}</a>
                            </h3>
                            <div className="price-box">
                              <span className="new-price">₹{product.price}</span>₹
                              <span className="old-price">₹{product.oldPrice}</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                {[...Array(Math.floor(product.rating))].map((_, index) => (
                                  <li key={index}>
                                    <i className="ion-ios-star"></i>
                                  </li>
                                ))}
                                {product.rating % 1 !== 0 && (
                                  <li className="silver-color">
                                    <i className="ion-ios-star-half"></i>
                                  </li>
                                )}
                                {[...Array(Math.floor(5 - product.rating))].map((_, index) => (
                                  <li className="silver-color" key={index}>
                                    <i className="ion-ios-star-outline"></i>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-area banner-area-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img
                        className="img-full"
                        src="../images/banner_area-1.webp"
                        alt="Banner"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img
                        className="img-full"
                        src="../images/bannner_area-2.webp"
                        alt="Banner"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="kenne-banner_area kenne-banner_area-4 my-4">
          <div className="banner-img"></div>
          <div className="banner-content">
            <h3>Get exclusive Products.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text{" "}
            </p>
            <div className="contact-us">
              <a href="callto://+123123321345">(+123) 123 321 345</a>
            </div>
            <div className="kenne-btn-ps_center" id="banner-5">
              <a
                className="kenne-btn transparent-btn"
                href="shop-left-sidebar.html"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <a className="scroll-to-top" href="/">
          <i className="ion-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
