import React, { useState } from "react";

function Products() {
  const [view, setview] = useState("listview");
  return (
    <div>
      <div class="kenne-content_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="shop-toolbar">
                <div class="product-view-mode">
                  <a
                    class="active grid-3"
                    data-target="gridview-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Grid View"
                    // onClick={() => setview("grid gridview-3")}
                  >
                    <i class="fa fa-th"></i>
                  </a>
                  <a
                    class="list"
                    data-target="listview"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="List View"
                    // onClick={() => setview("listview")}
                  >
                    <i class="fa fa-th-list"></i>
                  </a>
                </div>
                <div class="product-page_count">
                  <p>Showing 1–9 of 40 results</p>
                </div>
                <div class="product-item-selection_area">
                  <div class="product-short">
                    <label class="select-label">Short By:</label>
                    <select class="nice-select myniceselect">
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
              <div class={`shop-product-wrap row ${view}`}>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/1-2.jpg"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/1-2.jpg"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/1-2.jpg"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/1-2.jpg"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/1-2.jpg"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/1-2.jpg"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/1-2.jpg"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="product-item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            class="primary-img"
                            src="../assets/css/images/shirt-1.webp"
                            alt="product "
                          />
                          <img
                            class="secondary-img"
                            src="../assets/css/images/shirt-2.webp"
                            alt="product "
                          />
                        </a>
                        <span class="sticker">-15%</span>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="right"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <h3 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h3>
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-product_item">
                    <div class="single-product">
                      <div class="product-img">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/1-2.jpg"
                            alt="product "
                          />
                        </a>
                      </div>
                      <div class="product-content">
                        <div class="product-desc_info">
                          <div class="price-box">
                            <span class="new-price">$46.91</span>
                            <span class="old-price">$50.99</span>
                          </div>
                          <h6 class="product-name">
                            <a href="single-product.html">Quibusdam ratione</a>
                          </h6>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li>
                                <i class="ion-ios-star"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-half"></i>
                              </li>
                              <li class="silver-color">
                                <i class="ion-ios-star-outline"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="product-short_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,Proin
                              lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus
                            </p>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul>
                            <li
                              class="quick-view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <a
                                href="/"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i class="ion-ios-search"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Wishlist"
                              >
                                <i class="ion-ios-heart-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To Compare"
                              >
                                <i class="ion-ios-reload"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add To cart"
                              >
                                <i class="ion-bag"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="kenne-paginatoin-area">
                    <div class="row">
                      <div class="col-lg-12">
                        <ul class="kenne-pagination-box primary-color">
                          <li class="active">
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
                            <a class="Next" href="/">
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
