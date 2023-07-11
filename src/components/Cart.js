import React from "react";
import Breadcrumb from "../Pages/Breadcrumb";

function Cart() {
  return (
    <div>
      <Breadcrumb name={"cart"} />
      <div class="kenne-cart-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <form action="javascript:void(0)">
                <div class="table-content table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="kenne-product-remove">remove</th>
                        <th class="kenne-product-thumbnail">images</th>
                        <th class="cart-product-name">Product</th>
                        <th class="kenne-product-price">Unit Price</th>
                        <th class="kenne-product-quantity">Quantity</th>
                        <th class="kenne-product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="kenne-product-remove">
                          <a href="javascript:void(0)">
                            <i class="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td class="kenne-product-thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src="..images/shirt-1.webp"
                              alt="Uren's Cart Thumbnail"
                              style={{ maxWidth: "160px" }}
                            />
                          </a>
                        </td>
                        <td class="kenne-product-name">
                          <a href="javascript:void(0)">Juma rema pola</a>
                        </td>
                        <td class="kenne-product-price">
                          <span class="amount">₹46</span>
                        </td>
                        <td class="quantity">
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
                        </td>
                        <td class="product-subtotal">
                          <span class="amount">₹46</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="kenne-product-remove">
                          <a href="javascript:void(0)">
                            <i class="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td class="kenne-product-thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src="../images/shirt-1.webp"
                              alt="Uren's Cart Thumbnail"
                              style={{ maxWidth: "160px" }}
                            />
                          </a>
                        </td>
                        <td class="kenne-product-name">
                          <a href="javascript:void(0)">Bag Goodscol model</a>
                        </td>
                        <td class="kenne-product-price">
                          <span class="amount">₹71</span>
                        </td>
                        <td class="quantity">
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
                        </td>
                        <td class="product-subtotal">
                          <span class="amount">₹71</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="coupon-all">
                      <div class="coupon">
                        <input
                          id="coupon_code"
                          class="input-text"
                          name="coupon_code"
                          value=""
                          placeholder="Coupon code"
                          type="text"
                        />
                        <input
                          class="button"
                          name="apply_coupon"
                          value="Apply coupon"
                          type="submit"
                        />
                      </div>
                      <div class="coupon2">
                        <input
                          class="button"
                          name="update_cart"
                          value="Update cart"
                          type="submit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-5 ml-auto">
                    <div class="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul>
                        <li>
                          Subtotal <span>₹118.60</span>
                        </li>
                        <li>
                          Total <span>₹118.60</span>
                        </li>
                      </ul>
                      <input
                        class="button"
                        name="Proceed to checkout"
                        value="Proceed to checkout"
                        type="submit"
                      />
                      {/* <button>Proceed to checkout</button> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;