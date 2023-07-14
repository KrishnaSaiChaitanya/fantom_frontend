import React, { useEffect, useState } from "react";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Product from "./Product";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [is_mini_cart, setis_mini_cart] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      setIsVisible(currentPosition > 220);
      let quantity2 = 0;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

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

  //whenever products details changes total changes
  useEffect(() => {
    let total1 = 0;
    let quantity1 = 0;
    products.map((Product, key) => {
      total1 += Product.price * Product.quantity;
      quantity1 += Product.quantity;
      console.log(total1);
    });
    total1 = total1.toFixed(2);
    setTotal(total1);
    setQuantity(quantity1);
  }, [products]);
  let records;
  if (products.length > 3) {
    records = products.slice(0, 3);
  } else {
    records = products;
  }

  return (
    <header class="main-header_area">
      <div class="header-top_area d-none d-lg-block">
        <div class="container">
          <div class="header-top_nav">
            <div class="row">
              <div class="col-lg-6">
                <div class="ht-menu">
                  <ul>
                    <li>
                      <a href="/">
                        Currency<i class="ion-chevron-down"></i>
                      </a>
                      <ul class="ht-dropdown ht-currency">
                        <li>
                          <a href="/">€ EUR</a>
                        </li>
                        <li class="active">
                          <a href="/">£ Pound Sterling</a>
                        </li>
                        <li>
                          <a href="/">$ Us Dollar</a>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <a href="/">
                        Language <i class="ion-chevron-down"></i>
                      </a>
                      <ul class="ht-dropdown">
                        <li class="active">
                          <a href="/">
                            <img
                              src="assets/images/menu/icon/1.jpg"
                              alt="Kenne Language Icon"
                            />
                            English
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src="assets/images/menu/icon/2.jpg"
                              alt="Kenne Language Icon"
                            />
                            Français
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="header-top_right " style={{ height: "100%" }}>
                  <ul
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <li>
                      <a href="my-account.html">My Account</a>
                    </li> */}
                    <li>
                      <span className="px-4">
                        <Link to={"/wishlist"}>Wishlist</Link>
                      </span>
                      {/* <a href="wishlist.html">Wishlist</a> */}
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                      >
                        Sign in
                      </span>
                    </li>
                    <li>
                      <span className="px-4">
                        <Link to={"/checkout"}>Checkout</Link>
                      </span>
                      {/* <a href="checkout.html">Checkout</a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-middle_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-middle_nav row">
                <div className="col-4"></div>
                <div class="header-logo_area col-4 d-flex justify-content-center">
                  <a href="index.html">
                    <img
                      alt="logo"
                      src="../images/logo.png"
                      style={{ maxWidth: "280px" }}
                    />
                  </a>
                </div>
                {/* <div class="header-search_area d-none d-lg-block">
                  <form class="search-form" action="#">
                    <input type="text" placeholder="Search" />
                    <button class="search-button">
                      <i class="ion-ios-search"></i>
                    </button>
                  </form>
                </div> */}
                <div className="col-4 justify-content-end d-flex">
                  <div class="header-right_area d-none d-lg-block">
                    <ul>
                      <li class="minicart-wrap">
                        <a
                          class="minicart-btn toolbar-btn"
                          onClick={() => setis_mini_cart(!is_mini_cart)}
                        >
                          <div
                            class="minicart-count_area"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas"
                            role="button"
                          >
                            <span class="item-count">{quantity}</span>
                            <i class="ion-bag"></i>
                          </div>
                          <div class="minicart-front_text">
                            <span>Cart:</span>
                            <span class="total-price">{total}</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="header-right_area header-right_area-2 d-block d-lg-none">
                    <ul>
                      <li class="mobile-menu_wrap d-inline-block d-lg-none">
                        <a
                          href="#mobileMenu"
                          class="mobile-menu_btn toolbar-btn color--white"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          <i class="ion-android-menu"></i>
                        </a>
                      </li>
                      <li class="minicart-wrap">
                        <a
                          href="#miniCart"
                          class="minicart-btn toolbar-btn"
                          onClick={() => setis_mini_cart(!is_mini_cart)}
                        >
                          <div
                            class="minicart-count_area"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas"
                          >
                            <span class="item-count">{quantity}</span>
                            <i class="ion-bag"></i>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#searchBar" class="search-btn toolbar-btn">
                          <i class="ion-android-search"></i>
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
      <div class="header-bottom_area d-none d-lg-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="main-menu_area position-relative">
                <nav class="main-nav d-flex justify-content-center">
                  <ul>
                    <li class="dropdown-holder">
                      <span className="px-2" style={{ fontSize: "16px" }}>
                        <Link to={"/"}>Home</Link>
                      </span>
                    </li>
                    <li class="megamenu-holder position-static">
                      <span style={{ fontSize: "16px" }}>
                        <Link to={"/products"}>
                          Shop <i class="ion-chevron-down"></i>
                        </Link>
                      </span>
                      <ul class="kenne-megamenu">
                        <li>
                          <span class="megamenu-title">Shop Page Layout</span>
                          <ul>
                            <li>
                              <a href="shop-fullwidth.html">Grid Fullwidth</a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-fullwidth.html">
                                List Fullwidth
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-left-sidebar.html">
                                List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-right-sidebar.html">
                                List Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">
                            Single Product Style
                          </span>
                          <ul>
                            <li>
                              <a href="single-product-gallery-left.html">
                                Gallery Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-gallery-right.html">
                                Gallery Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-left.html">
                                Tab Style Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-right.html">
                                Tab Style Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-left.html">
                                Sticky Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-right.html">
                                Sticky Right
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">
                            Single Product Type
                          </span>
                          <ul>
                            <li>
                              <a href="single-product.html">Single Product</a>
                            </li>
                            <li>
                              <a href="single-product-sale.html">
                                Single Product Sale
                              </a>
                            </li>
                            <li>
                              <a href="single-product-group.html">
                                Single Product Group
                              </a>
                            </li>
                            <li>
                              <a href="single-product-variable.html">
                                Single Product Variable
                              </a>
                            </li>
                            <li>
                              <a href="single-product-affiliate.html">
                                Single Product Affiliate
                              </a>
                            </li>
                            <li>
                              <a href="single-product-slider.html">
                                Single Product Slider
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">Shop Related Pages</span>
                          <ul>
                            {/* <li>
                              <a href="my-account.html">My Account</a>
                            </li> */}
                            <li>
                              <a href="login-register.html">Login | Register</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/test">Pages</a>
                      {/* <ul class="kenne-dropdown">
                        <li>
                          <a href="coming-soon_page.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li>
                      <a href="/">
                        Blog <i class="ion-chevron-down"></i>
                      </a>
                      <ul class="kenne-dropdown">
                        <li>
                          <a href="blog-grid_view.html">Grid View</a>
                        </li>
                        <li>
                          <a href="blog-list_view.html">List View</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <a>
                        <Link to={"/contact"}>Contact Us</Link>
                      </a>
                      {/* <a href="contact-us.html">Contact Us</a> */}
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <div class="header-sticky sticky">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="sticky-header_nav position-relative">
                  <div class="row align-items-center justify-content-between">
                    <div class="col-lg-3 col-sm-6">
                      <div class="header-logo_area">
                        <a href="index.html">
                          <img
                            src="../images/logo.png"
                            style={{ maxWidth: "200px" }}
                            alt="Header Logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-7 d-none d-lg-block position-static">
                      <div class="main-menu_area">
                        <nav class="main-nav d-flex justify-content-center">
                          <ul>
                            <li class="dropdown-holder">
                              <a href="/">Home</a>
                              {/* <ul class="kenne-dropdown">
                                <li>
                                  <a href="index.html">Home One</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Home Two</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Home Three</a>
                                </li>
                              </ul> */}
                            </li>
                            <li class="megamenu-holder position-static">
                              <a href="shop-left-sidebar.html">
                                Shop <i class="ion-chevron-down"></i>
                              </a>
                              <ul class="kenne-megamenu">
                                <li>
                                  <span class="megamenu-title">
                                    Men's Clothing
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="shop-fullwidth.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-right-sidebar.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-fullwidth.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-left-sidebar.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-right-sidebar.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span class="megamenu-title">
                                    Women's Clothing
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="single-product-gallery-left.html">
                                        Gallery Left
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-gallery-right.html">
                                        Gallery Right
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-tab-style-left.html">
                                        Tab Style Left
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-tab-style-right.html">
                                        Tab Style Right
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-sticky-left.html">
                                        Sticky Left
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-sticky-right.html">
                                        Sticky Right
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span class="megamenu-title">
                                    Girl's Clothing
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="single-product.html">Category</a>
                                    </li>
                                    <li>
                                      <a href="single-product-sale.html">
                                        Category Sale
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-group.html">
                                        Category Group
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-variable.html">
                                        Category Variable
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-affiliate.html">
                                        Category Affiliate
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-slider.html">
                                        Category Slider
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span class="megamenu-title">
                                    Boy's Clothing
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="my-account.html">Shirts</a>
                                    </li>
                                    <li>
                                      <a href="/">Pants</a>
                                    </li>
                                    <li>
                                      <a href="wishlist.html">T-Shirts</a>
                                    </li>
                                    <li>
                                      <a href="cart.html">Shorts</a>
                                    </li>
                                    <li>
                                      <a href="checkout.html">Pants</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            {/* <li>
                              <a href="javascript:void(0)">
                                Pages <i class="ion-chevron-down"></i>
                              </a>
                              <ul class="kenne-dropdown">
                                <li>
                                  <a href="coming-soon_page.html">
                                    Coming Soon
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html">Error 404</a>
                                </li>
                                <li>
                                  <a href="faq.html">FAQ</a>
                                </li>
                              </ul>
                            </li> */}
                            <li>
                              <a href="javascript:void(0)">Sign In</a>
                              {/* <ul class="kenne-dropdown">
                                <li>
                                  <a href="blog-grid_view.html">Grid View</a>
                                </li>
                                <li>
                                  <a href="blog-list_view.html">List View</a>
                                </li>
                                <li>
                                  <a href="blog-details.html">Blog Details</a>
                                </li>
                              </ul> */}
                            </li>
                            <li>
                              <a href="/contact">Contact Us</a>
                            </li>
                            <li>
                              <a href="/about">About Us</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <div class="header-right_area header-right_area-2">
                        <ul>
                          <li class="mobile-menu_wrap d-inline-block d-lg-none">
                            <a
                              href="."
                              class="mobile-menu_btn toolbar-btn color--white"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
                              aria-controls="offcanvasRight"
                            >
                              <i class="ion-android-menu"></i>
                            </a>
                          </li>
                          <li class="minicart-wrap">
                            <a
                              href="#miniCart"
                              class="minicart-btn toolbar-btn"
                              onClick={() => setis_mini_cart(true)}
                            >
                              <div
                                class="minicart-count_area"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas"
                              >
                                <span class="item-count">{quantity}</span>
                                <i class="ion-bag"></i>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#searchBar" class="search-btn toolbar-btn">
                              <i class="ion-android-search"></i>
                            </a>
                          </li>
                          <li class="d-none d-lg-inline-block">
                            <a
                              href="."
                              class="menu-btn toolbar-btn color--white"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
                              aria-controls="offcanvasRight"
                            >
                              <i class="ion-android-menu"></i>
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
      )}
      {/* Menu */}

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        {/* <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div> */}
        <div class="offcanvas-body p-4">
          {/* <div class="mobile-menu_wrapper" id="mobileMenu"> */}
          <div class="offcanvas-menu-inner">
            <div class="container">
              <a
                href="#"
                class="btn-close white-close_btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
              >
                <i class="ion-android-close"></i>
              </a>
              <div class="offcanvas-inner_logo">
                <a href="index.html">
                  <img
                    src="../images/logo-1.png"
                    alt="Header Logo"
                    style={{ maxWidth: "200px" }}
                  />
                </a>
              </div>
              <nav class="offcanvas-navigation p-3">
                <ul class="mobile-menu">
                  <li class="menu-item-has-children active p-2">
                    <a href="#">
                      <span class="mm-text">Home</span>
                    </a>
                  </li>
                  <li class="menu-item-has-children active p-2">
                    <a href="#">
                      <span class="mm-text">Products</span>
                    </a>
                  </li>
                  <li class="menu-item-has-children active p-2">
                    <a href="#">
                      <span class="mm-text">Contact us</span>
                    </a>
                  </li>
                  <li class="menu-item-has-children active p-2">
                    <a href="#">
                      <span class="mm-text">About Us</span>
                    </a>
                  </li>
                  <li class="menu-item-has-children active p-2">
                    <a href="#">
                      <span class="mm-text">Home</span>
                    </a>
                  </li>
                  <li class="menu-item-has-children active p-2">
                    <a href="#">
                      <span class="mm-text">Home</span>
                    </a>
                  </li>
                  {/* <li class="menu-item-has-children">
                    <a href="#">
                      <span class="mm-text">Shop</span>
                    </a>
                    <ul class="sub-menu">
                      <li class="menu-item-has-children">
                        <a href="#">
                          <span class="mm-text">Grid View</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="shop-fullwidth.html">
                              <span class="mm-text">Grid Fullwidth</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              <span class="mm-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                              <span class="mm-text">Right Sidebar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item-has-children">
                        <a href="#">
                          <span class="mm-text">Shop List</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="shop-list-fullwidth.html">
                              <span class="mm-text">Full Width</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-left-sidebar.html">
                              <span class="mm-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right-sidebar.html">
                              <span class="mm-text">Right Sidebar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item-has-children">
                        <a href="#">
                          <span class="mm-text">Single Product Style</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="single-product-gallery-left.html">
                              <span class="mm-text">Gallery Left</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-gallery-right.html">
                              <span class="mm-text">Gallery Right</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-tab-style-left.html">
                              <span class="mm-text">Tab Style Left</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-tab-style-right.html">
                              <span class="mm-text">Tab Style Right</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sticky-left.html">
                              <span class="mm-text">Sticky Left</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sticky-right.html">
                              <span class="mm-text">Sticky Right</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item-has-children">
                        <a href="#">
                          <span class="mm-text">Single Product Type</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="single-product.html">
                              <span class="mm-text">Single Product</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sale.html">
                              <span class="mm-text">Single Product Sale</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-group.html">
                              <span class="mm-text">Single Product Group</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-variable.html">
                              <span class="mm-text">
                                Single Product Variable
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-affiliate.html">
                              <span class="mm-text">
                                Single Product Affiliate
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-slider.html">
                              <span class="mm-text">Single Product Slider</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      <span class="mm-text">Blog</span>
                    </a>
                    <ul class="sub-menu">
                      <li class="menu-item-has-children has-children">
                        <a href="blog-grid_view.html">
                          <span class="mm-text">Grid View</span>
                        </a>
                      </li>
                      <li class="menu-item-has-children has-children">
                        <a href="blog-list_view.html">
                          <span class="mm-text">List View</span>
                        </a>
                      </li>
                      <li class="menu-item-has-children has-children">
                        <a href="blog-details.html">
                          <span class="mm-text">Blog Details</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      <span class="mm-text">Pages</span>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href="my-account.html">
                          <span class="mm-text">About Us</span>
                        </a>
                      </li>
                      <li>
                        <a href="my-account.html">
                          <span class="mm-text">Contact</span>
                        </a>
                      </li>
                      <li>
                        <a href="my-account.html">
                          <span class="mm-text">My Account</span>
                        </a>
                      </li>
                      <li>
                        <a href="login-register.html">
                          <span class="mm-text">Login | Register</span>
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html">
                          <span class="mm-text">Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <span class="mm-text">Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="checkout.html">
                          <span class="mm-text">Checkout</span>
                        </a>
                      </li>
                      <li>
                        <a href="compare.html">
                          <span class="mm-text">Compare</span>
                        </a>
                      </li>
                      <li>
                        <a href="faq.html">
                          <span class="mm-text">FAQ</span>
                        </a>
                      </li>
                      <li>
                        <a href="404.html">
                          <span class="mm-text">Error 404</span>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div class="offcanvas-search_wrapper" id="searchBar">
        <div class="offcanvas-menu-inner">
          <div class="container">
            <a href="#" class="btn-close">
              <i class="ion-android-close"></i>
            </a>
            {/* <!-- Begin Offcanvas Search Area --> */}
            <div class="offcanvas-search">
              <form action="#" class="hm-searchbox">
                <input type="text" placeholder="Search for item..." />
                <button class="search_btn" type="submit">
                  <i class="ion-ios-search-strong"></i>
                </button>
              </form>
            </div>
            {/* <!-- Offcanvas Search Area End Here --> */}
          </div>
        </div>
      </div>
      {/* <div class="global-overlay"></div> */}
      {is_mini_cart && <div class="global-overlay overlay-open"></div>}
      {/* Mini cart Imp ---------- */}
      <div
        style={{ width: "400px" }}
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div class="offcanvas-body px-0 d-flex justify-content-center">
          <div
            class="offcanvas-minicart_wrapper1 d-flex justify-content-center"
            id="miniCart1"
            style={{ width: "400px" }}
          >
            <div class="offcanvas-menu-inner p-1" style={{ width: "90%" }}>
              <div class="minicart-content d-flex flex-column justify-content-between">
                <div class="minicart-heading  d-flex flex-row justify-content-between">
                  <h4 className="d-flex align-items-end">Shopping Cart</h4>
                  {/* <button
                    type="button"
                    id="btn-close"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i class="ion-android-close"></i>
                  </button> */}
                  {/* <a href="#" class="btn-close">
                    <i class="ion-android-close"></i>
                  </a> */}
                  <i
                    onClick={() => setis_mini_cart(!is_mini_cart)}
                    class="ion-android-close "
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ fontSize: "38px", height: "60px", width: "60px" }}
                  ></i>
                </div>
                <ul class="minicart-list p-3 justify-content-center">
                  {products.length ? (
                    records.map((Product, key) => (
                      <li class="minicart-product d-flex flex-row" key={key}>
                        <div class="product-item_img">
                          <img
                            src={Product.image}
                            alt="Kenne's Product Image"
                            style={{ maxWidth: "120px" }}
                          />
                        </div>
                        <div
                          class="product-item_content d-flex flex-column px-3"
                          style={{ justifyContent: "center" }}
                        >
                          <a
                            class="product-item_title"
                            href="shop-left-sidebar.html"
                          >
                            {Product.title}
                          </a>
                          <span class="product-item_quantity">
                            {Product.quantity} x ₹{Product.price}
                          </span>
                        </div>
                        <a class="product-item_remove" href="/">
                          <i class="ion-android-close"></i>
                        </a>
                      </li>
                    ))
                  ) : (
                    <li className="text-center">No items in your cart</li>
                  )}
                </ul>
              </div>
              {products.length ? (
                <div class="minicart-btn_area p-1">
                  <a href="/cart" class="kenne-btn kenne-btn_fullwidth">
                    View More
                  </a>
                </div>
              ) : (
                <div></div>
              )}
              <div class="minicart-item_total d-flex flex-row justify-content-between p-2">
                <span>Subtotal</span>
                <span class="ammount">₹{total}</span>
              </div>
              <div class="minicart-btn_area p-1">
                <a href="/cart" class="kenne-btn kenne-btn_fullwidth">
                  Minicart
                </a>
              </div>
              <div class="minicart-btn_area p-1">
                <a href="/checkout" class="kenne-btn kenne-btn_fullwidth">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login */}
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <button
              type="button"
              id="btn-close"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ion-android-close"></i>
            </button>

            <div class="modal-body">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <button
                type="button"
                id="btn-close"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="ion-android-close"></i>
              </button>
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
