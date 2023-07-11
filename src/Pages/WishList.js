import React from "react";
import Breadcrumb from "./Breadcrumb";

function WishList() {
  return (
    <div>
      <Breadcrumb name={"Wishlist"} />
      <div class="kenne-wishlist_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form action="j/">
                <div class="table-content table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="kenne-product_remove">remove</th>
                        <th class="kenne-product-thumbnail">images</th>
                        <th class="cart-product-name">Product</th>
                        <th class="kenne-product-price">Unit Price</th>
                        <th class="kenne-product-stock-status">Stock Status</th>
                        <th class="kenne-cart_btn">add to cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="kenne-product_remove">
                          <a href="j/">
                            <i class="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td class="kenne-product-thumbnail">
                          <a href="j/">
                            <img
                              src="../images/shirt-1.webp"
                              alt="Kenne's Wishlist Thumbnail"
                              style={{ maxWidth: "12vw" }}
                            />
                          </a>
                        </td>
                        <td class="kenne-product-name">
                          <a href="j/">Juma rema pola</a>
                        </td>
                        <td class="kenne-product-price">
                          <span class="amount">₹23</span>
                        </td>
                        <td class="kenne-product-stock-status">
                          <span class="in-stock">in stock</span>
                        </td>
                        <td class="kenne-cart_btn">
                          <a href="j/">add to cart</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="kenne-product_remove">
                          <a href="j/">
                            <i class="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td class="kenne-product-thumbnail">
                          <a href="j/">
                            <img
                              src="../images/shirt-1.webp"
                              alt="Kenne's Wishlist Thumbnail"
                              style={{ maxWidth: "12vw" }}
                            />
                          </a>
                        </td>
                        <td class="kenne-product-name">
                          <a href="j/">Suretin mipen ruma</a>
                        </td>
                        <td class="kenne-product-price">
                          <span class="amount">₹30</span>
                        </td>
                        <td class="kenne-product-stock-status">
                          <span class="in-stock">in stock</span>
                        </td>
                        <td class="kenne-cart_btn">
                          <a href="j/">add to cart</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="kenne-product_remove">
                          <a href="j/">
                            <i class="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td class="kenne-product-thumbnail">
                          <a href="j/">
                            <img
                              src="../images/shirt-1.webp"
                              alt="Kenne's Wishlist Thumbnail"
                              style={{ maxWidth: "12vw" }}
                            />
                          </a>
                        </td>
                        <td class="kenne-product-name">
                          <a href="j/">Bag Goodscol model</a>
                        </td>
                        <td class="kenne-product-price">
                          <span class="amount">₹40</span>
                        </td>
                        <td class="kenne-product-stock-status">
                          <span class="out-stock">out stock</span>
                        </td>
                        <td class="kenne-cart_btn">
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
