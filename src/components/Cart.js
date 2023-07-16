import React, { useState, useEffect } from "react";
import Breadcrumb from "../Pages/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT, REMOVE } from "../redux/actions/action";
import { Link } from "react-router-dom";

function Cart() {
  // const [products,setProducts]=useState([]);

  // const getData=()=>{
  //   fetch('./Products.json'
  //   ,{
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setProducts(myJson.products)
  //     }).catch(
  //       (err)=>{
  //         console.log(err)
  //       }
  //     )
  // }

  // useEffect(()=>{
  //   getData()
  // },[])

  // const [total,setTotal]=useState(0)
  // //whenever products details changes total changes
  // useEffect(()=>{
  //   let total1=0;

  //   products.map((Product,key)=>{
  //     total1+= Product.price * Product.quantity;
  //     console.log(total1)
  //   })
  //   total1=total1.toFixed(2);
  //   setTotal(total1);

  // },[products])

  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartreducer.carts);

  const send = (p) => {
    // console.log(p);
    dispatch(ADD(p));
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  const [price, setPrice] = useState(0);
  console.log(price);

  const total = () => {
    let price = 0;
    getData.map((ele, k) => {
      price = ele.price * ele.quantity + price;
    });
    setPrice(price.toFixed(2));
  };

  useEffect(() => {
    total();
  }, [total]);

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  return (
    <div>
      <Breadcrumb name={"cart"} />
      <div className="kenne-cart-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {getData.length ? (
                <form action="javascript:void(0)">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="kenne-product-remove">remove</th>
                          <th className="kenne-product-thumbnail">images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="kenne-product-price">Unit Price</th>
                          <th className="kenne-product-quantity">Quantity</th>
                          <th className="kenne-product-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getData.map((product) => {
                          return (
                            <>
                              <tr>
                                <td className="kenne-product-remove">
                                  <a
                                    href="javascript:void(0)"
                                    onClick={() => dlt(product.id)}
                                  >
                                    <i
                                      className="fa fa-trash"
                                      title="Remove"
                                    ></i>
                                  </a>
                                </td>
                                <td className="kenne-product-thumbnail">
                                  <a href="javascript:void(0)">
                                    <img
                                      src={product.image}
                                      alt="Uren's Cart Thumbnail"
                                      style={{ maxWidth: "160px" }}
                                    />
                                  </a>
                                </td>
                                <td className="kenne-product-name">
                                  <a href="javascript:void(0)">
                                    {product.title}
                                  </a>
                                </td>
                                <td className="kenne-product-price">
                                  <span className="amount">
                                    ₹{product.price}
                                  </span>
                                </td>
                                <td className="quantity">
                                  <label>Quantity</label>
                                  <div className="cart-plus-minus">
                                    <input
                                      className="cart-plus-minus-box"
                                      value={`${product.quantity}`}
                                      type="text"
                                    />
                                    <div className="dec qtybutton">
                                      <i
                                        onClick={() => remove(product)}
                                        className="fa fa-angle-down"
                                      ></i>
                                    </div>
                                    <div className="inc qtybutton">
                                      <i
                                        onClick={() => send(product)}
                                        className="fa fa-angle-up"
                                      ></i>
                                    </div>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  <span className="amount">
                                    ₹
                                    {(product.quantity * product.price).toFixed(
                                      2
                                    )}
                                  </span>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon">
                          <input
                            id="coupon_code"
                            className="input-text"
                            name="coupon_code"
                            value=""
                            placeholder="Coupon code"
                            type="text"
                          />
                          <input
                            className="button"
                            name="apply_coupon"
                            value="Apply coupon"
                            type="submit"
                          />
                        </div>
                        <div className="coupon2">
                          <input
                            className="button"
                            name="update_cart"
                            value="Update cart"
                            type="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul>
                          <li>
                            Subtotal <span>₹{price}</span>
                          </li>
                          <li>
                            Total <span>₹{price}</span>
                          </li>
                        </ul>
                        <Link to={"/checkout"}>
                        <input
                          className="button"
                          name="Proceed to checkout"
                          value="Proceed to checkout"
                          type="submit"
                        />
                        </Link>
                        {/* <button>Proceed to checkout</button> */}
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
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
