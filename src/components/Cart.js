import React,{useState,useEffect} from "react";
import Breadcrumb from "../Pages/Breadcrumb";

function Cart() {
  const [products,setProducts]=useState([]);
  const getData=()=>{
    fetch('./Products.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setProducts(myJson.products)
      }).catch(
        (err)=>{
          console.log(err)
        }
      )
  }

  useEffect(()=>{
    getData()
  },[])

  const [total,setTotal]=useState(0)
  //whenever products details changes total changes
  useEffect(()=>{
    let total1=0;
    
    products.map((Product,key)=>{
      total1+= Product.price * Product.quantity;
      console.log(total1)
    })
    total1=total1.toFixed(2);
    setTotal(total1);
    
  },[products])

  return (
    <div>
      <Breadcrumb name={"cart"} />
      <div class="kenne-cart-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              { products.length?
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
                      {products.map((product,key)=>(
                        product.quantity&&(
                        <tr key={key}>
                        <td class="kenne-product-remove">
                          <a href="javascript:void(0)">
                            <i class="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td class="kenne-product-thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src={product.image}
                              alt="Uren's Cart Thumbnail"
                              style={{ maxWidth: "160px" }}
                            />
                          </a>
                        </td>
                        <td class="kenne-product-name">
                          <a href="javascript:void(0)">{product.title}</a>
                        </td>
                        <td class="kenne-product-price">
                          <span class="amount">₹{product.price}</span>
                        </td>
                        <td class="quantity">
                          <label>Quantity</label>
                          <div class="cart-plus-minus">
                            <input
                              class="cart-plus-minus-box"
                              value={product.quantity}
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
                          <span class="amount">₹{(product.quantity*product.price).toFixed(2)}</span>
                        </td>
                      </tr>)
                      ))
                      }
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
                          Subtotal <span>₹{total}</span>
                        </li>
                        <li>
                          Total <span>₹{total}</span>
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
              </form>:(
                <div className="text-center fs-4">Add items to your cart</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
