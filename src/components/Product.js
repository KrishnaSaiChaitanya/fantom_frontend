// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Product() {
//   // const settings = {
//   //   slidesToShow: 1,
//   //   arrows: false,
//   //   fade: true,
//   //   draggable: false,
//   //   swipe: false,
//   //   asNavFor: ".sp-img_slider-nav",
//   // };
//   var settings = {
//     dots: true,
//     fade: true,
//     arrows: true,
//   };
//   return (
//     <div>
//       <div className="sp-area">
//         <div className="container">
//           <div className="sp-nav">
//             <div className="row">
//               <div className="col-lg-6 px-4 pt-1 mb-3 justify-content-center">
//                 <div className="sp-img_area">
//                   {/* <div
//                     className="sp-img_slider slick-img-slider kenne-element-carousel"
//                     data-slick-options='{
//                                 "slidesToShow": 1,
//                                 "arrows": false,
//                                 "fade": true,
//                                 "draggable": false,
//                                 "swipe": false,
//                                 "asNavFor": ".sp-img_slider-nav"
//                                 }'
//                   >
//                     <div className="single-slide red zoom">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Image"
//                       />
//                     </div>
//                     <div className="single-slide orange zoom">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Image"
//                       />
//                     </div>
//                     <div className="single-slide brown zoom">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Image"
//                       />
//                     </div>
//                     <div className="single-slide umber zoom">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Image"
//                       />
//                     </div>
//                     <div className="single-slide black zoom">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Image"
//                       />
//                     </div>
//                     <div className="single-slide green zoom">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Image"
//                       />
//                     </div>
//                   </div> */}
//                   <div className="m-3">
//                     <Slider className="p-3" {...settings}>
//                       <div className="single-slide">
//                         <img
//                           src="../images/shirt-1.webp"
//                           alt="Kenne's Product Image"
//                           // style={{ maxWidth: "200px" }}
//                         />
//                       </div>
//                       <div className="single-slide">
//                         <img
//                           src="../images/shirt-1.webp"
//                           alt="Kenne's Product Image"
//                         />
//                       </div>
//                       <div className="single-slide">
//                         <img
//                           src="../images/shirt-1.webp"
//                           alt="Kenne's Product Image"
//                         />
//                       </div>
//                       <div className="single-slide">
//                         <img
//                           src="../images/shirt-1.webp"
//                           alt="Kenne's Product Image"
//                         />
//                       </div>
//                       <div className="single-slide">
//                         <img
//                           src="../images/shirt-1.webp"
//                           alt="Kenne's Product Image"
//                         />
//                       </div>
//                       <div className="single-slide">
//                         <img
//                           src="../images/shirt-1.webp"
//                           alt="Kenne's Product Image"
//                         />
//                       </div>
//                     </Slider>
//                   </div>
//                   {/* <div
//                     className="sp-img_slider-nav slick-slider-nav kenne-element-carousel arrow-style-2 arrow-style-3"
//                     data-slick-options='{
//                                 "slidesToShow": 3,
//                                 "asNavFor": ".sp-img_slider",
//                                 "focusOnSelect": true,
//                                 "arrows" : true,
//                                 "spaceBetween": 30
//                                 }'
//                     data-slick-responsive='[
//                                         {"breakpoint":1501, "settings": {"slidesToShow": 3}},
//                                         {"breakpoint":1200, "settings": {"slidesToShow": 2}},
//                                         {"breakpoint":992, "settings": {"slidesToShow": 4}},
//                                         {"breakpoint":768, "settings": {"slidesToShow": 3}},
//                                         {"breakpoint":575, "settings": {"slidesToShow": 2}}
//                                     ]'
//                   >
//                     <div className="single-slide red">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Thumnail"
//                       />
//                     </div>
//                     <div className="single-slide orange">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Thumnail"
//                       />
//                     </div>
//                     <div className="single-slide brown">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Thumnail"
//                       />
//                     </div>
//                     <div className="single-slide umber">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Thumnail"
//                       />
//                     </div>
//                     <div className="single-slide red">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Thumnail"
//                       />
//                     </div>
//                     <div className="single-slide orange">
//                       <img
//                         src="../images/shirt-1.webp"
//                         alt="Kenne's Product Thumnail"
//                       />
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
//               <div className="col-lg-6 d-flex justify-content-center align-items-center">
//                 <div className="sp-content">
//                   <div className="sp-heading">
//                     <h5>
//                       <a href="#">Test Product</a>
//                     </h5>
//                   </div>
//                   {/* <span className="reference">Reference: demo_1</span> */}
//                   <div className="rating-box">
//                     <ul>
//                       <li>
//                         <i className="ion-android-star"></i>
//                       </li>
//                       <li>
//                         <i className="ion-android-star"></i>
//                       </li>
//                       <li>
//                         <i className="ion-android-star"></i>
//                       </li>
//                       <li className="silver-color">
//                         <i className="ion-android-star"></i>
//                       </li>
//                       <li className="silver-color">
//                         <i className="ion-android-star"></i>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="sp-essential_stuff">
//                     <ul>
//                       {/* <li>
//                         Brands <a href="javascript:void(0)">Buxton</a>
//                       </li>
//                       <li>
//                         Product Code:{" "}
//                         <a href="javascript:void(0)">Product 16</a>
//                       </li> */}
//                       {/* <li>
//                         Reward Points: <a href="javascript:void(0)">100</a>
//                       </li> */}
//                       <li>
//                         Availability: <a href="javascript:void(0)">In Stock</a>
//                       </li>
//                       <li>
//                         EX Tax:{" "}
//                         <a href="javascript:void(0)">
//                           <span>₹453</span>
//                         </a>
//                       </li>
//                       <li>
//                         Price in reward points:{" "}
//                         <a href="javascript:void(0)">400</a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="product-size_box">
//                     <span>Size</span>
//                     <select className="myniceselect nice-select">
//                       <option value="1">S</option>
//                       <option value="2">M</option>
//                       <option value="3">L</option>
//                       <option value="4">XL</option>
//                     </select>
//                   </div>
//                   {/* <div className="color-list_area">
//                     <div className="color-list_heading">
//                       <h4>Available Options</h4>
//                     </div>
//                     <span className="sub-title">Color</span>
//                     <div className="color-list">
//                       <a
//                         href="javascript:void(0)"
//                         className="single-color active"
//                         data-swatch-color="red"
//                       >
//                         <span className="bg-red_color"></span>
//                         <span className="color-text">Red (+₹150)</span>
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="single-color"
//                         data-swatch-color="orange"
//                       >
//                         <span className="burnt-orange_color"></span>
//                         <span className="color-text">Orange (+₹170)</span>
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="single-color"
//                         data-swatch-color="brown"
//                       >
//                         <span className="brown_color"></span>
//                         <span className="color-text">Brown (+₹120)</span>
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="single-color"
//                         data-swatch-color="umber"
//                       >
//                         <span className="raw-umber_color"></span>
//                         <span className="color-text">Umber (+₹125)</span>
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="single-color"
//                         data-swatch-color="black"
//                       >
//                         <span className="black_color"></span>
//                         <span className="color-text">Black (+₹125)</span>
//                       </a>
//                     </div>
//                   </div> */}
//                   <div className="quantity">
//                     <label>Quantity</label>
//                     <div className="cart-plus-minus">
//                       <input
//                         className="cart-plus-minus-box"
//                         value="1"
//                         type="text"
//                       />
//                       <div className="dec qtybutton">
//                         <i className="fa fa-angle-down"></i>
//                       </div>
//                       <div className="inc qtybutton">
//                         <i className="fa fa-angle-up"></i>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="qty-btn_area">
//                     <ul>
//                       <li>
//                         <a className="qty-cart_btn" href="cart.html">
//                           Add To Cart
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           className="qty-wishlist_btn"
//                           href="wishlist.html"
//                           data-bs-toggle="tooltip"
//                           title="Add To Wishlist"
//                         >
//                           <i className="ion-android-favorite-outline"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           className="qty-compare_btn"
//                           href="compare.html"
//                           data-bs-toggle="tooltip"
//                           title="Compare This Product"
//                         >
//                           <i className="ion-ios-shuffle-strong"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="kenne-tag-line">
//                     <h6>Tags:</h6>
//                     <a href="javascript:void(0)">scarf</a>,
//                     <a href="javascript:void(0)">jacket</a>,
//                     <a href="javascript:void(0)">shirt</a>
//                   </div>
//                   <div className="kenne-social_link">
//                     <ul>
//                       <li className="facebook">
//                         <a
//                           href="https://www.facebook.com"
//                           data-bs-toggle="tooltip"
//                           target="_blank"
//                           title="Facebook"
//                         >
//                           <i className="fab fa-facebook"></i>
//                         </a>
//                       </li>
//                       <li className="twitter">
//                         <a
//                           href="https://twitter.com"
//                           data-bs-toggle="tooltip"
//                           target="_blank"
//                           title="Twitter"
//                         >
//                           <i className="fab fa-twitter-square"></i>
//                         </a>
//                       </li>
//                       <li className="youtube">
//                         <a
//                           href="https://www.youtube.com"
//                           data-bs-toggle="tooltip"
//                           target="_blank"
//                           title="Youtube"
//                         >
//                           <i className="fab fa-youtube"></i>
//                         </a>
//                       </li>
//                       <li className="google-plus">
//                         <a
//                           href="https://www.plus.google.com/discover"
//                           data-bs-toggle="tooltip"
//                           target="_blank"
//                           title="Google Plus"
//                         >
//                           <i className="fab fa-google-plus"></i>
//                         </a>
//                       </li>
//                       <li className="instagram">
//                         <a
//                           href="https://rss.com"
//                           data-bs-toggle="tooltip"
//                           target="_blank"
//                           title="Instagram"
//                         >
//                           <i className="fab fa-instagram"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DLT,ADD,REMOVE } from '../redux/actions/action'
import products from "./ProductsData";


function Product() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const history = useNavigate();

  const dispatch = useDispatch();

  // const getData = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = products.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };


  useEffect(()=>{
    compare();
  },[id])


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
            <div className="sp-area">
              <div className="container">
                <div className="sp-nav">
                  {data.map((ele) => {
                    return (                    
                  <div className="row">
                    <div className="col-lg-6 px-4 pt-1 mb-3 justify-content-center">
                      <div className="sp-img_area">
                      
                        <div className="m-3">
                          <Slider className="p-3" {...settings}>
                            <div className="single-slide">
                              <img
                                src={ele.image}
                                alt="Kenne's Product Image"
                                // style={{ maxWidth: "200px" }}
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                src={ele.image2}
                                alt="Kenne's Product Image"
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                src="../images/shirt-1.webp"
                                alt="Kenne's Product Image"
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                src="../images/shirt-1.webp"
                                alt="Kenne's Product Image"
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                src="../images/shirt-1.webp"
                                alt="Kenne's Product Image"
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                src="../images/shirt-1.webp"
                                alt="Kenne's Product Image"
                              />
                            </div>
                          </Slider>
                        </div>
                        {/* <div
                    className="sp-img_slider-nav slick-slider-nav kenne-element-carousel arrow-style-2 arrow-style-3"
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
                    <div className="single-slide red">
                      <img
                        src="../images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div className="single-slide orange">
                      <img
                        src="../images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div className="single-slide brown">
                      <img
                        src="../images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div className="single-slide umber">
                      <img
                        src="../images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div className="single-slide red">
                      <img
                        src="../images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                    <div className="single-slide orange">
                      <img
                        src="../images/shirt-1.webp"
                        alt="Kenne's Product Thumnail"
                      />
                    </div>
                  </div> */}
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                      <div className="sp-content">
                        <div className="sp-heading">
                          <h5>
                            <a href="#">{ele.title}</a>
                          </h5>
                        </div>
                        {/* <span className="reference">Reference: demo_1</span> */}
                        <div className="rating-box">
                          <ul>
                            <li>
                              <i className="ion-android-star"></i>
                            </li>
                            <li>
                              <i className="ion-android-star"></i>
                            </li>
                            <li>
                              <i className="ion-android-star"></i>
                            </li>
                            <li className="silver-color">
                              <i className="ion-android-star"></i>
                            </li>
                            <li className="silver-color">
                              <i className="ion-android-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="sp-essential_stuff">
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
                              Availability:{" "}
                              <a href="javascript:void(0)">In Stock</a>
                            </li>
                            <li>
                              EX Tax:₹
                              <a href="javascript:void(0)">
                                <span>{ele.price}</span>
                              </a>
                            </li>
                            <li>
                              Price in reward points:{" "}
                              <a href="javascript:void(0)">400</a>
                            </li>
                          </ul>
                        </div>
                        <div className="product-size_box">
                          <span>Size</span>
                          <select className="myniceselect nice-select">
                            <option value="1">S</option>
                            <option value="2">M</option>
                            <option value="3">L</option>
                            <option value="4">XL</option>
                          </select>
                        </div>
                        {/* <div className="color-list_area">
                    <div className="color-list_heading">
                      <h4>Available Options</h4>
                    </div>
                    <span className="sub-title">Color</span>
                    <div className="color-list">
                      <a
                        href="javascript:void(0)"
                        className="single-color active"
                        data-swatch-color="red"
                      >
                        <span className="bg-red_color"></span>
                        <span className="color-text">Red (+₹150)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="single-color"
                        data-swatch-color="orange"
                      >
                        <span className="burnt-orange_color"></span>
                        <span className="color-text">Orange (+₹170)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="single-color"
                        data-swatch-color="brown"
                      >
                        <span className="brown_color"></span>
                        <span className="color-text">Brown (+₹120)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="single-color"
                        data-swatch-color="umber"
                      >
                        <span className="raw-umber_color"></span>
                        <span className="color-text">Umber (+₹125)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="single-color"
                        data-swatch-color="black"
                      >
                        <span className="black_color"></span>
                        <span className="color-text">Black (+₹125)</span>
                      </a>
                    </div>
                  </div> */}
                        <div className="quantity">
                          <label>Quantity</label>
                          <div className="cart-plus-minus">
                            <input
                              className="cart-plus-minus-box"
                              value="1"
                              type="text"
                            />
                            <div className="dec qtybutton">
                              <i className="fa fa-angle-down"></i>
                            </div>
                            <div className="inc qtybutton">
                              <i className="fa fa-angle-up"></i>
                            </div>
                          </div>
                        </div>
                        <div className="qty-btn_area">
                          <ul>
                            <li>
                              <Link onClick={() => send(ele)}
                                 className="qty-cart_btn" to="/cart">
                                Add To Cart
                              </Link>
                            </li>
                            <li>
                              <a
                                className="qty-wishlist_btn"
                                href="wishlist.html"
                                data-bs-toggle="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="ion-android-favorite-outline"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="qty-compare_btn"
                                href="compare.html"
                                data-bs-toggle="tooltip"
                                title="Compare This Product"
                              >
                                <i className="ion-ios-shuffle-strong"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="kenne-tag-line">
                          <h6>Tags:</h6>
                          <a href="javascript:void(0)">scarf</a>,
                          <a href="javascript:void(0)">jacket</a>,
                          <a href="javascript:void(0)">shirt</a>
                        </div>
                        <div className="kenne-social_link">
                          <ul>
                            <li className="facebook">
                              <a
                                href="https://www.facebook.com"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                title="Facebook"
                              >
                                <i className="fab fa-facebook"></i>
                              </a>
                            </li>
                            <li className="twitter">
                              <a
                                href="https://twitter.com"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                title="Twitter"
                              >
                                <i className="fab fa-twitter-square"></i>
                              </a>
                            </li>
                            <li className="youtube">
                              <a
                                href="https://www.youtube.com"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                title="Youtube"
                              >
                                <i className="fab fa-youtube"></i>
                              </a>
                            </li>
                            <li className="google-plus">
                              <a
                                href="https://www.plus.google.com/discover"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                title="Google Plus"
                              >
                                <i className="fab fa-google-plus"></i>
                              </a>
                            </li>
                            <li className="instagram">
                              <a
                                href="https://rss.com"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                title="Instagram"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                    );
                  })}
                </div>
              </div>
            </div>
    </div>
  );
}

export default Product;
