import { useContext, useEffect, useState } from "react";
import { Sidemenu } from "../App";

export default function Sidebar() {
  const menu = useContext(Sidemenu);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1800);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`sidebar ${menu.showSidebar ? "visible" : ""}`}>
      <div className="logo">
        {isMobile && (
          <div className="flex" style={{ justifyContent: "flex-end" }}>
            <span
              id="boot-icon"
              class="bi bi-x-lg"
              onClick={() => menu.setshowSidebar(!menu.showSidebar)}
              style={{
                fontSize: "20px",
                padding: "10px",
                color: "rgb(255, 255, 255)",
                justifyContent: "end",
              }}
            ></span>
          </div>
        )}
        <div className="text-center" style={{ padding: "30px" }}>
          <h2>Smartlauf</h2>
        </div>
      </div>
      <div class="offcanvas-minicart_wrapper" id="miniCart">
        <div class="offcanvas-menu-inner">
          <a href="#" class="btn-close">
            <i class="ion-android-close"></i>
          </a>
          <div class="minicart-content">
            <div class="minicart-heading">
              <h4>Shopping Cart</h4>
            </div>
            <ul class="minicart-list">
              <li class="minicart-product">
                <a class="product-item_remove" href="/">
                  <i class="ion-android-close"></i>
                </a>
                <div class="product-item_img">
                  <img
                    src="https://res.cloudinary.com/dsfems7vy/image/upload/v1688273744/3-1_nsgqfk.webp"
                    alt="Kenne's Product Image"
                    height={150}
                  />
                </div>
                <div class="product-item_content">
                  <a class="product-item_title" href="shop-left-sidebar.html">
                    Autem ipsa ad
                  </a>
                  <span class="product-item_quantity">1 x $145.80</span>
                </div>
              </li>
              <li class="minicart-product">
                <a class="product-item_remove" href="/">
                  <i class="ion-android-close"></i>
                </a>
                <div class="product-item_img">
                  <img
                    src="https://res.cloudinary.com/dsfems7vy/image/upload/v1688273744/3-1_nsgqfk.webp"
                    alt="Kenne's Product Image"
                    height={150}
                  />
                </div>
                <div class="product-item_content">
                  <a class="product-item_title" href="shop-left-sidebar.html">
                    Tenetur illum amet
                  </a>
                  <span class="product-item_quantity">1 x $150.80</span>
                </div>
              </li>
              <li class="minicart-product">
                <a class="product-item_remove" href="/">
                  <i class="ion-android-close"></i>
                </a>
                <div class="product-item_img">
                  <img
                    src="https://res.cloudinary.com/dsfems7vy/image/upload/v1688273744/3-1_nsgqfk.webp"
                    alt="Kenne's Product Image"
                    height={150}
                  />
                </div>
                <div class="product-item_content">
                  <a class="product-item_title" href="shop-left-sidebar.html">
                    Non doloremque placeat
                  </a>
                  <span class="product-item_quantity">1 x $165.80</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="minicart-item_total">
            <span>Subtotal</span>
            <span class="ammount">$462.4‬0</span>
          </div>
          <div class="minicart-btn_area">
            <a href="cart.html" class="kenne-btn kenne-btn_fullwidth">
              Minicart
            </a>
          </div>
          <div class="minicart-btn_area">
            <a href="checkout.html" class="kenne-btn kenne-btn_fullwidth">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
