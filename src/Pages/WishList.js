import React from "react";
import Breadcrumb from "./Breadcrumb";

function WishList() {
  return (
    <div>
      <Breadcrumb name={"Wishlist"} />
      <div className="kenne-wishlist_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form action="j/">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="kenne-product_remove">remove</th>
                        <th className="kenne-product-thumbnail">images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="kenne-product-price">Unit Price</th>
                        <th className="kenne-product-stock-status">Stock Status</th>
                        <th className="kenne-cart_btn">add to cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="kenne-product_remove">
                          <a href="j/">
                            <i className="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td className="kenne-product-thumbnail">
                          <a href="j/">
                            <img
                              src="../images/shirt-1.webp"
                              alt="Kenne's Wishlist Thumbnail"
                              style={{ maxWidth: "12vw" }}
                            />
                          </a>
                        </td>
                        <td className="kenne-product-name">
                          <a href="j/">Juma rema pola</a>
                        </td>
                        <td className="kenne-product-price">
                          <span className="amount">₹23</span>
                        </td>
                        <td className="kenne-product-stock-status">
                          <span className="in-stock">in stock</span>
                        </td>
                        <td className="kenne-cart_btn">
                          <a href="j/">add to cart</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="kenne-product_remove">
                          <a href="j/">
                            <i className="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td className="kenne-product-thumbnail">
                          <a href="j/">
                            <img
                              src="../images/shirt-1.webp"
                              alt="Kenne's Wishlist Thumbnail"
                              style={{ maxWidth: "12vw" }}
                            />
                          </a>
                        </td>
                        <td className="kenne-product-name">
                          <a href="j/">Suretin mipen ruma</a>
                        </td>
                        <td className="kenne-product-price">
                          <span className="amount">₹30</span>
                        </td>
                        <td className="kenne-product-stock-status">
                          <span className="in-stock">in stock</span>
                        </td>
                        <td className="kenne-cart_btn">
                          <a href="j/">add to cart</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="kenne-product_remove">
                          <a href="j/">
                            <i className="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td className="kenne-product-thumbnail">
                          <a href="j/">
                            <img
                              src="../images/shirt-1.webp"
                              alt="Kenne's Wishlist Thumbnail"
                              style={{ maxWidth: "12vw" }}
                            />
                          </a>
                        </td>
                        <td className="kenne-product-name">
                          <a href="j/">Bag Goodscol model</a>
                        </td>
                        <td className="kenne-product-price">
                          <span className="amount">₹40</span>
                        </td>
                        <td className="kenne-product-stock-status">
                          <span className="out-stock">out stock</span>
                        </td>
                        <td className="kenne-cart_btn">
                          <a href="j/">add to cart</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
