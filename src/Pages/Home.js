// import React,{ useState , useEffect } from "react";

// function Home() {

//   const [products,setProducts]=useState([]);
//   const getData=()=>{
//     fetch('./Products.json'
//     ,{
//       headers : {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setProducts(myJson.products)
//       }).catch(
//         (err)=>{
//           console.log(err)
//         }
//       )
//   }

//   useEffect(()=>{
//     getData()
//   },[])
//   return (
//     <div>
//       <div className="main-wrapper">
//         <div className="banner-area-5">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="banner-item img-hover_effect">
//                   <div className="banner-img"></div>
//                   <div className="banner-content">
//                     <span>In-Store & Online</span>
//                     <h3>
//                       Men's Shirt's
//                       <br />
//                       T-shirt's & More!
//                     </h3>
//                     <div className="kenne-btn-ps_center">
//                       <a
//                         className="kenne-btn transparent-btn black-color square-btn"
//                         href="/products"
//                       >
//                         Discover Now
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="service-area">
//           <div className="container">
//             <div className="service-nav">
//               <div className="row">
//                 <div className="col-lg-4 col-md-4">
//                   <div className="service-item">
//                     <div className="content">
//                       <h4>Free Shipping</h4>
//                       <p>Free shipping on all order</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-4">
//                   <div className="service-item">
//                     <div className="content">
//                       <h4>Money Return</h4>
//                       <p>30 days for free return</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-4">
//                   <div className="service-item">
//                     <div className="content">
//                       <h4>Online Support</h4>
//                       <p>Support 24 hours a day</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="banner-area">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4 col-6 custom-xxs-col">
//                 <div className="banner-item img-hover_effect">
//                   <div className="banner-img">
//                     <a href="javascrip:void(0)">
//                       <img src="../images/banner-1.webp" alt="Banner" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-4 col-6 custom-xxs-col">
//                 <div className="banner-item img-hover_effect">
//                   <div className="banner-img">
//                     <a href="javascrip:void(0)">
//                       <img src="../images/bannner-2.webp" alt="Banner" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-4 col-6 custom-xxs-col">
//                 <div className="banner-item img-hover_effect">
//                   <div className="banner-img">
//                     <a href="javascrip:void(0)">
//                       <img src="../images/banner-1.webp" alt="Banner" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="product-area ">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="section-title">
//                   <h3>New Product</h3>
//                   <div className="product-arrow"></div>
//                 </div>
//               </div>
//               <div className="col-lg-12 container ">
//                 <div className="row">
//                 {products.slice(0, 8).map((product) => (
//                 <div className="product-item col-lg-3 col-md-4" key={product.id}>
//                   <div className="single-product">
//                     <div className="product-img">
//                       <a href="single-product.html">
//                         <img
//                           className="primary-img"
//                           src={product.image}
//                           alt="Product"
//                           style={{ maxWidth: "100%" }}
//                         />
//                         <img
//                           className="secondary-img"
//                           src={product.image2}
//                           alt="Product"
//                           style={{ maxWidth: "100%" }}
//                         />
//                       </a>
//                       <span className="sticker-2">Hot</span>
//                       <div className="add-actions">
//                         <ul>
//                           <li
//                             className="quick-view-btn"
//                             data-bs-toggle="modal"
//                             data-bs-target="#exampleModalCenter"
//                           >
//                             <a
//                               href="javascript:void(0)"
//                               data-bs-toggle="tooltip"
//                               data-placement="right"
//                               title="Quick View"
//                             >
//                               <i className="ion-ios-search"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a
//                               href="wishlist.html"
//                               data-bs-toggle="tooltip"
//                               data-placement="right"
//                               title="Add To Wishlist"
//                             >
//                               <i className="ion-ios-heart-outline"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a
//                               href="compare.html"
//                               data-bs-toggle="tooltip"
//                               data-placement="right"
//                               title="Add To Compare"
//                             >
//                               <i className="ion-ios-reload"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a
//                               href="cart.html"
//                               data-bs-toggle="tooltip"
//                               data-placement="right"
//                               title="Add To cart"
//                             >
//                               <i className="ion-bag"></i>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="product-content">
//                       <div className="product-desc_info">
//                         <h3 className="product-name">
//                           <a href="single-product.html">{product.title}</a>
//                         </h3>
//                         <div className="price-box">
//                           <span className="new-price">₹{product.price}</span>
//                           <span className="old-price">₹{product.actualprice}</span>
//                         </div>
//                         <div className="rating-box">
//                           <ul>
//                             {[...Array(Math.floor(product.rating))].map((_, index) => (
//                               <li key={index}>
//                                 <i className="ion-ios-star"></i>
//                               </li>
//                             ))}
//                             {product.rating % 1 !== 0 && (
//                               <li className="silver-color">
//                                 <i className="ion-ios-star-half"></i>
//                               </li>
//                             )}
//                             {[...Array(Math.floor(5 - product.rating))].map((_, index) => (
//                               <li className="silver-color" key={index}>
//                                 <i className="ion-ios-star-outline"></i>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="banner-area banner-area-2">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="banner-item img-hover_effect">
//                   <div className="banner-img">
//                     <a href="javascrip:void(0)">
//                       <img
//                         className="img-full"
//                         src="../images/banner_area-1.webp"
//                         alt="Banner"
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="banner-item img-hover_effect">
//                   <div className="banner-img">
//                     <a href="javascrip:void(0)">
//                       <img
//                         className="img-full"
//                         src="../images/bannner_area-2.webp"
//                         alt="Banner"
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="kenne-banner_area kenne-banner_area-4 my-4">
//           <div className="banner-img"></div>
//           <div className="banner-content">
//             <h3>Get exclusive Products.</h3>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text{" "}
//             </p>
//             <div className="contact-us">
//               <a href="callto://+123123321345">(+123) 123 321 345</a>
//             </div>
//             <div className="kenne-btn-ps_center" id="banner-5">
//               <a
//                 className="kenne-btn transparent-btn"
//                 href="shop-left-sidebar.html"
//               >
//                 Shop Now
//               </a>
//             </div>
//           </div>
//         </div>

//         <a className="scroll-to-top" href="/">
//           <i className="ion-chevron-up"></i>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ADD, LIKE } from "../redux/actions/action";

function Home() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("./Products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setProducts(myJson.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();

  const send = (p) => {
    // console.log(p);
    dispatch(ADD(p));
  };

  const like = (p) => {
    // console.log(p);
    dispatch(LIKE(p));
  };



  //Function for Rating 
  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className="ion-ios-star" key={i}></i>);
    }

    if (hasHalfStar) {
      stars.push(<i className="ion-ios-star-half" key={fullStars}></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i className="ion-ios-star-outline" key={fullStars + i + 1}></i>
      );
    }

    return <ul className="rating-box">{stars}</ul>;
  };

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
                      <Link
                        className="kenne-btn transparent-btn black-color square-btn"
                        to="/products"
                      >
                        Discover Now
                      </Link>
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
        <div className="product-area">
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
                  {products.slice(0, 8).map((product) => (
                    <div
                      className="product-item col-lg-3 col-md-4"
                      key={product.id}
                    >
                      <div className="single-product">
                        <div className="product-img">
                          <NavLink to={`/product/${product.id}`}>
                            <img
                              className="primary-img"
                              src={product.image}
                              alt="Product"
                              style={{ maxWidth: "100%" }}
                            />
                            <img
                              className="secondary-img"
                              src={product.image2}
                              alt="Product"
                              style={{ maxWidth: "100%" }}
                            />
                          </NavLink>
                          <span className="sticker-2">Hot</span>
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
                                <Link
                                  onClick={()=>like(product)}
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Add To Wishlist"
                                >
                                  <i className="ion-ios-heart-outline"></i>
                                </Link>
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
                                <Link
                                  onClick={()=>send(product)}
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Add To cart"
                                >
                                  <i className="ion-bag"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        <div className="product-content">
                          <div className="product-desc_info">
                            <h3 className="product-name">
                              <a href="single-product.html">{product.title}</a>
                            </h3>
                            <div className="price-box">
                              <span className="new-price">
                                ₹{product.price}
                              </span>
                              <span className="old-price">
                                ₹{product.actualprice}
                              </span>
                            </div>
                            <div className="rating-box">
                            {renderStarRating(product.rating)}
                            </div>
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
