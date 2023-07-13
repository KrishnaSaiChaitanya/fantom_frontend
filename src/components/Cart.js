import React,{ useState, useEffect } from "react";
import Breadcrumb from "../Pages/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ADD,DLT,REMOVE } from "../redux/actions/action";

function Cart() {
  const dispatch = useDispatch();
  const getData = useSelector((state)=> state.cartreducer.carts);

  const send = (p) => {
    // console.log(p);
    dispatch(ADD(p));
  }

  // remove one
  const remove = (item)=>{
    dispatch(REMOVE(item))
  }
  const [price, setPrice] = useState(0);
  console.log(price)

  const total = ()=>{
    let price = 0;
    getData.map((ele,k)=>{
        price = ele.price * ele.quantity + price
    });
    setPrice(price);
  };


  useEffect(() => {
    total();
 }, [total])

  const dlt = (id) => {
    dispatch(DLT(id));
  }
  // console.log(getData)
  return (
    <div>
      <Breadcrumb name={"cart"} />
      <div className="kenne-cart-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                      {
                        getData.map((e)=>{
                          return (<>
                          <tr>
                            <td className="kenne-product-remove">
                              <a href="javascript:void(0)" onClick={()=>dlt(e.id)}>
                                <i className="fa fa-trash" title="Remove"></i>
                              </a>
                            </td>
                            <td className="kenne-product-thumbnail">
                              <NavLink to={`/product/${e.id}`}>
                                <img
                                  src={e.primaryImg}
                                  alt="Uren's Cart Thumbnail"
                                  style={{ maxWidth: "160px" }}
                                />
                              </NavLink>
                            </td>
                            <td className="kenne-product-name">
                              <a href="javascript:void(0)">{e.name}</a>
                            </td>
                            <td className="kenne-product-price">
                              <span className="amount">₹{e.price}</span>
                            </td>
                            <td className="quantity">
                              <label>Quantity</label>
                              <div className="cart-plus-minus">
                                <input
                                  className="cart-plus-minus-box"
                                  value={`${e.quantity}`}
                                  type="text"
                                />
                                <div className="dec qtybutton">
                                  <i onClick={()=>remove(e)} className="fa fa-angle-down"></i>
                                </div>
                                <div className="inc qtybutton">
                                <button  onClick={()=> send(e)}>
                                  <i className="fa fa-angle-up"></i></button>
                                </div>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">₹ {`${e.quantity * e.price}`}</span>
                            </td>
                          </tr>
                          </>)
                        })
                      }
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
                      <input
                        className="button"
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
