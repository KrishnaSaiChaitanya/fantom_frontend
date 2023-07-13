import React,{useState,useEffect} from "react";
import Breadcrumb from "./Breadcrumb";

function WishList() {
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

 

  return (
    <div>
      <Breadcrumb name={"Wishlist"} />
      <div class="kenne-wishlist_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              
                { products.length ? (
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
                  { products.map((product,key)=>(
                      <tr key={key}>
                        <td class="kenne-product_remove">
                          <a href="j/">
                            <i class="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td class="kenne-product-thumbnail">
                          <a href="j/">
                            <img
                              src={product.image}
                              alt="Kenne's Wishlist Thumbnail"
                              style={{ maxWidth: "12vw" }}
                            />
                          </a>
                        </td>
                        <td class="kenne-product-name">
                          <a href="j/">{product.title}</a>
                        </td>
                        <td class="kenne-product-price">
                          <span class="amount">₹{product.price}</span>
                        </td>
                        <td class="kenne-product-stock-status">
                          {
                            product.inStock?(
                          <span class="in-stock">In Stock</span>
                            ):(
                              <span className="in-stock">Out of Stock</span>
                            )
                          }
                        </td>
                        <td class="kenne-cart_btn">
                          {
                            product.inStock?(
                              <a href="j/">Add to Cart</a>
                            ):(
                              <a href="j/">Notify Me</a>
                            )
                          }                          
                        </td>
                      </tr>
                      ))
                
                  }
                    </tbody>
                  </table>
                </div>
              </form>):(
                    <div className="text-center fs-3">Add Items to your wishlist</div>
                  )
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
