import React, { useState, useEffect } from "react";

function Products() {
  const [view, setview] = useState("grid gridview-3");
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

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
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
                    onClick={() => setview("grid gridview-3")}
                  >
                    <i class="fa fa-th"></i>
                  </a>
                  <a
                    class="list"
                    data-target="listview"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="List View"
                    onClick={() => setview("listview")}
                  >
                    <i class="fa fa-th-list"></i>
                  </a>
                </div>
                <div class="product-page_count">
                  <p>
                    Showing {products.length === 0 ? 0 : firstIndex + 1}–
                    {lastIndex <= products.length ? lastIndex : products.length}{" "}
                    of {products.length} results
                  </p>
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
                {records.length > 0 ? (
                  records.map((product, i) => (
                    <div class="col-lg-4 col-md-4 col-sm-6" key={i}>
                      <div class="product-item">
                        <div class="single-product">
                          <div class="product-img">
                            <a href="single-product.html">
                              <img
                                class="primary-img"
                                src={product.image}
                                alt="product "
                              />
                              <img
                                class="secondary-img"
                                src={product.image2}
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
                                <a href="single-product.html">
                                  {product.title}
                                </a>
                              </h3>
                              <div class="price-box">
                                <span class="new-price">₹{product.price}</span>
                                <span class="old-price">
                                  ₹{product.actualprice}
                                </span>
                              </div>
                              <div className="pt-1">
                                {product.quantity > 0 ? (
                                  <h6 className="text-success text-center">
                                    In Stock
                                  </h6>
                                ) : (
                                  <h6 className="text-danger text-center">
                                    Out of Stock
                                  </h6>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-product_item">
                        <div class="single-product">
                          <div class="product-img">
                            <a href="single-product.html">
                              <img src={product.image} alt="product " />
                            </a>
                          </div>
                          <div class="product-content">
                            <div class="product-desc_info">
                              <div class="price-box">
                                <span class="new-price">₹{product.price}</span>
                                <span class="old-price">
                                  ₹{product.actualprice}
                                </span>
                              </div>
                              <h6 class="product-name">
                                <a href="single-product.html">
                                  {product.title}
                                </a>
                              </h6>
                              <div class="product-short_desc">
                                <p>{product.description}</p>
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
                  ))
                ) : (
                  <div className="text-center">Loading...</div>
                )}
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="kenne-paginatoin-area">
                    <div class="row">
                      <div class="col-lg-12">
                        <ul class="kenne-pagination-box primary-color">
                          <li>
                            <a className="Prev" href="#" onClick={prePage}>
                              Prev
                            </a>
                          </li>
                          {/* <li class="active">
                            <a href="#">1</a>
                          </li> */}
                          {numbers.map((n, i) => (
                            <li
                              class={`${currentPage === n ? "active " : ""}`}
                              key={i}
                            >
                              <a href="#" onClick={() => changeCPage(n)}>
                                {n}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a className="Next" href="#" onClick={nextPage}>
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
