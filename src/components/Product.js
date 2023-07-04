import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Product() {
  // const settings = {
  //   slidesToShow: 1,
  //   arrows: false,
  //   fade: true,
  //   draggable: false,
  //   swipe: false,
  //   asNavFor: ".sp-img_slider-nav",
  // };
  var settings = {
    dots: true,
    fade: true,
    arrows: true,
  };
  return (
    <div>
      <div class="sp-area">
        <div class="container">
          <div class="sp-nav">
            <div class="row">
              <div class="col-lg-6 px-4 pt-1 mb-3 justify-content-center">
                <div class="sp-img_area">
                  {/* <div
                    class="sp-img_slider slick-img-slider kenne-element-carousel"
                    data-slick-options='{
                                "slidesToShow": 1,
                                "arrows": false,
                                "fade": true,
                                "draggable": false,
                                "swipe": false,
                                "asNavFor": ".sp-img_slider-nav"
                                }'
                  >
                    <div class="single-slide red zoom">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Image"
                      />
                    </div>
                    <div class="single-slide orange zoom">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Image"
                      />
                    </div>
                    <div class="single-slide brown zoom">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Image"
                      />
                    </div>
                    <div class="single-slide umber zoom">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Image"
                      />
                    </div>
                    <div class="single-slide black zoom">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Image"
                      />
                    </div>
                    <div class="single-slide green zoom">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Image"
                      />
                    </div>
                  </div> */}
                  <div className="m-3">
                    <Slider className="p-3" {...settings}>
                      <div className="single-slide">
                        <img
                          src="../assets/css/images/shirt-1.webp"
                          alt="Kenne's Product Image"
                          // style={{ maxWidth: "200px" }}
                        />
                      </div>
                      <div className="single-slide">
                        <img
                          src="../assets/css/images/shirt-1.webp"
                          alt="Kenne's Product Image"
                        />
                      </div>
                      <div className="single-slide">
                        <img
                          src="../assets/css/images/shirt-1.webp"
                          alt="Kenne's Product Image"
                        />
                      </div>
                      <div className="single-slide">
                        <img
                          src="../assets/css/images/shirt-1.webp"
                          alt="Kenne's Product Image"
                        />
                      </div>
                      <div className="single-slide">
                        <img
                          src="../assets/css/images/shirt-1.webp"
                          alt="Kenne's Product Image"
                        />
                      </div>
                      <div className="single-slide">
                        <img
                          src="../assets/css/images/shirt-1.webp"
                          alt="Kenne's Product Image"
                        />
                      </div>
                    </Slider>
                  </div>
                  {/* <div
                    class="sp-img_slider-nav slick-slider-nav kenne-element-carousel arrow-style-2 arrow-style-3"
                    data-slick-options='{
                                "slidesToShow": 3,
                                "asNavFor": ".sp-img_slider",
                                "focusOnSelect": true,
                                "arrows" : true,
                                "spaceBetween": 30
                                }'
                    data-slick-responsive='[
                                        {"breakpoint":1501, "settings": {"slidesToShow": 3}},
                                        {"breakpoint":1200, "settings": {"slidesToShow": 2}},
                                        {"breakpoint":992, "settings": {"slidesToShow": 4}},
                                        {"breakpoint":768, "settings": {"slidesToShow": 3}},
                                        {"breakpoint":575, "settings": {"slidesToShow": 2}}
                                    ]'
                  >
                    <div class="single-slide red">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div class="single-slide orange">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div class="single-slide brown">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div class="single-slide umber">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div class="single-slide red">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div class="single-slide orange">
                      <img
                        src="../assets/css/images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div class="col-lg-6 d-flex justify-content-center align-items-center">
                <div class="sp-content">
                  <div class="sp-heading">
                    <h5>
                      <a href="#">Aliquid rerum ipsam maxime</a>
                    </h5>
                  </div>
                  {/* <span class="reference">Reference: demo_1</span> */}
                  <div class="rating-box">
                    <ul>
                      <li>
                        <i class="ion-android-star"></i>
                      </li>
                      <li>
                        <i class="ion-android-star"></i>
                      </li>
                      <li>
                        <i class="ion-android-star"></i>
                      </li>
                      <li class="silver-color">
                        <i class="ion-android-star"></i>
                      </li>
                      <li class="silver-color">
                        <i class="ion-android-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="sp-essential_stuff">
                    <ul>
                      {/* <li>
                        Brands <a href="javascript:void(0)">Buxton</a>
                      </li>
                      <li>
                        Product Code:{" "}
                        <a href="javascript:void(0)">Product 16</a>
                      </li> */}
                      {/* <li>
                        Reward Points: <a href="javascript:void(0)">100</a>
                      </li> */}
                      <li>
                        Availability: <a href="javascript:void(0)">In Stock</a>
                      </li>
                      <li>
                        EX Tax:{" "}
                        <a href="javascript:void(0)">
                          <span>$453.35</span>
                        </a>
                      </li>
                      <li>
                        Price in reward points:{" "}
                        <a href="javascript:void(0)">400</a>
                      </li>
                    </ul>
                  </div>
                  <div class="product-size_box">
                    <span>Size</span>
                    <select class="myniceselect nice-select">
                      <option value="1">S</option>
                      <option value="2">M</option>
                      <option value="3">L</option>
                      <option value="4">XL</option>
                    </select>
                  </div>
                  {/* <div class="color-list_area">
                    <div class="color-list_heading">
                      <h4>Available Options</h4>
                    </div>
                    <span class="sub-title">Color</span>
                    <div class="color-list">
                      <a
                        href="javascript:void(0)"
                        class="single-color active"
                        data-swatch-color="red"
                      >
                        <span class="bg-red_color"></span>
                        <span class="color-text">Red (+$150)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="single-color"
                        data-swatch-color="orange"
                      >
                        <span class="burnt-orange_color"></span>
                        <span class="color-text">Orange (+$170)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="single-color"
                        data-swatch-color="brown"
                      >
                        <span class="brown_color"></span>
                        <span class="color-text">Brown (+$120)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="single-color"
                        data-swatch-color="umber"
                      >
                        <span class="raw-umber_color"></span>
                        <span class="color-text">Umber (+$125)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="single-color"
                        data-swatch-color="black"
                      >
                        <span class="black_color"></span>
                        <span class="color-text">Black (+$125)</span>
                      </a>
                    </div>
                  </div> */}
                  <div class="quantity">
                    <label>Quantity</label>
                    <div class="cart-plus-minus">
                      <input
                        class="cart-plus-minus-box"
                        value="1"
                        type="text"
                      />
                      <div class="dec qtybutton">
                        <i class="fa fa-angle-down"></i>
                      </div>
                      <div class="inc qtybutton">
                        <i class="fa fa-angle-up"></i>
                      </div>
                    </div>
                  </div>
                  <div class="qty-btn_area">
                    <ul>
                      <li>
                        <a class="qty-cart_btn" href="cart.html">
                          Add To Cart
                        </a>
                      </li>
                      <li>
                        <a
                          class="qty-wishlist_btn"
                          href="wishlist.html"
                          data-bs-toggle="tooltip"
                          title="Add To Wishlist"
                        >
                          <i class="ion-android-favorite-outline"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="qty-compare_btn"
                          href="compare.html"
                          data-bs-toggle="tooltip"
                          title="Compare This Product"
                        >
                          <i class="ion-ios-shuffle-strong"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="kenne-tag-line">
                    <h6>Tags:</h6>
                    <a href="javascript:void(0)">scarf</a>,
                    <a href="javascript:void(0)">jacket</a>,
                    <a href="javascript:void(0)">shirt</a>
                  </div>
                  <div class="kenne-social_link">
                    <ul>
                      <li class="facebook">
                        <a
                          href="https://www.facebook.com"
                          data-bs-toggle="tooltip"
                          target="_blank"
                          title="Facebook"
                        >
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li class="twitter">
                        <a
                          href="https://twitter.com"
                          data-bs-toggle="tooltip"
                          target="_blank"
                          title="Twitter"
                        >
                          <i class="fab fa-twitter-square"></i>
                        </a>
                      </li>
                      <li class="youtube">
                        <a
                          href="https://www.youtube.com"
                          data-bs-toggle="tooltip"
                          target="_blank"
                          title="Youtube"
                        >
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li class="google-plus">
                        <a
                          href="https://www.plus.google.com/discover"
                          data-bs-toggle="tooltip"
                          target="_blank"
                          title="Google Plus"
                        >
                          <i class="fab fa-google-plus"></i>
                        </a>
                      </li>
                      <li class="instagram">
                        <a
                          href="https://rss.com"
                          data-bs-toggle="tooltip"
                          target="_blank"
                          title="Instagram"
                        >
                          <i class="fab fa-instagram"></i>
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
  );
}

export default Product;
