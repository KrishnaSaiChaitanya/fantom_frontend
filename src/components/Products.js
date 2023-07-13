import React, { useState } from "react";
import products from "./ProductData";
// import { products } from "./Products.json";
import { ADD } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const send = (p) => {
    // console.log(p);
    dispatch(ADD(p));
  }
  const [view, setview] = useState("grid gridview-3");
  return (
    <div>
      <div className="kenne-content_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-toolbar">
                <div className="product-view-mode">
                  <a
                    className="active grid-3"
                    data-target="gridview-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Grid View"
                    // onClick={() => setview("grid gridview-3")}
                  >
                    <i className="fa fa-th"></i>
                  </a>
                  <a
                    className="list"
                    data-target="listview"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="List View"
                    onClick={() => setview("listview")}
                  >
                    <i className="fa fa-th-list"></i>
                  </a>
                </div>
                <div className="product-page_count">
                  <p>Showing 1-9 of 40 results</p>
                </div>
                <div className="product-item-selection_area">
                  <div className="product-short">
                    <label className="select-label">Short By:</label>
                    <select className="nice-select myniceselect">
                      <option value="1">Default sorting</option>
                      <option value="2">Name, A to Z</option>
                      <option value="3">Name, Z to A</option>
                      <option value="4">Price, low to high</option>
                      <option value="5">Price, high to low</option>
                      <option value="5">Rating (Highest)</option>
                      <option value="5">Rating (Lowest)</option>
                      <option value="5">Model (A - Z)</option>
                      <option value="5">Model (Z - A)</option>
                    </select>
                  </div>
                </div>
              </div>
                <div className={`shop-product-wrap row ${view}`}>
                  {products.map(product => (
                    <div className="col-lg-4 col-md-4 col-sm-6" key={product.id}>
                      <div className="product-item">
                        <div className="single-product">
                          <div className="product-img">
                            <Link to={`/product/${product.id}`}>
                              <img
                                className="primary-img"
                                src={product.primaryImg}
                                alt="product"
                              />
                              {product.secondaryImg && (
                                <img
                                  className="secondary-img"
                                  src={product.secondaryImg}
                                  alt="product"
                                />
                              )}
                            </Link>
                            {product.discount && (
                              <span className="sticker">-{product.discount}%</span>
                            )}
                            <div className="add-actions">
                              <ul>
                                <li
                                  className="quick-view-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                >
                                  <a
                                    href="/"
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
                                  <a
                                    // href="/cart"
                                    data-bs-toggle="tooltip"
                                    data-placement="right"
                                    title="Add To cart"
                                    onClick={() => send(product)}
                                  >
                                    <i className="ion-bag"></i>
                                  </a>
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
                                <span className="new-price">₹{product.price}</span>
                                <span className="old-price">₹{product.oldPrice}</span>
                              </div>
                              <div className="rating-box">
                                <ul>
                                  {Array.from({ length: 5 }, (_, index) => (
                                    <li
                                      key={index}
                                      className={
                                        index + 1 <= product.rating
                                          ? ""
                                          : "silver-color"
                                      }
                                    >
                                      <i className="ion-ios-star"></i>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-product_item">
                        <div className="single-product">
                          <div className="product-img">
                            <Link to={`/product/${product.id}`}>
                              <img src={product.primaryImg} alt="product" />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="product-desc_info">
                              <div className="price-box">
                                <span className="new-price">₹{product.price}</span>
                                <span className="old-price">₹{product.oldPrice}</span>
                              </div>
                              <h6 className="product-name">
                                <a href="single-product.html">{product.name}</a>
                              </h6>
                              <div className="rating-box">
                                <ul>
                                  {Array.from({ length: 5 }, (_, index) => (
                                    <li
                                      key={index}
                                      className={
                                        index + 1 <= product.rating
                                          ? ""
                                          : "silver-color"
                                      }
                                    >
                                      <i className="ion-ios-star"></i>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="product-short_desc">
                                <p>{product.description}</p>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul>
                                <li
                                  className="quick-view-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                >
                                  <a
                                    href="/"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="Quick View"
                                  >
                                    <i className="ion-ios-search"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="Add To Wishlist"
                                  >
                                    <i className="ion-ios-heart-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="compare.html"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="Add To Compare"
                                  >
                                    <i className="ion-ios-reload"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="Add To cart"
                                  >
                                    <i className="ion-bag"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="kenne-paginatoin-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="kenne-pagination-box primary-color">
                          <li className="active">
                            <a href="/">1</a>
                          </li>
                          <li>
                            <a href="/">2</a>
                          </li>
                          <li>
                            <a href="/">3</a>
                          </li>
                          <li>
                            <a href="/">4</a>
                          </li>
                          <li>
                            <a href="/">5</a>
                          </li>
                          <li>
                            <a className="Next" href="/">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Kenne's Content Wrapper Area End Here --> */}
    </div>
  );
}

export default Products;
