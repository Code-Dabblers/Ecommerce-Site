import { html } from "lit-html";
import shoe4 from "../../assets/landing-page/shoe-4.png";
import shoe2 from "../../assets/landing-page/shoe-2.png";
const cart = () => {
  return html`
    <div class="cartHeadermobile">
      <li>Your Cart</li>
    </div>

    <div class="cartHeader">
      <ul>
        <li class="product">Product</li>
        <li id="price">Price</li>
        <li id="qty">Qty</li>
        <li id="unitPrice">Unit Price</li>
      </ul>
    </div>

    
    <div class="item-box-1">
      <div class="img-wrapper">
        <a href=""><img src="${shoe2}" alt="" /></a>
      </div>

      <div class="item-details-mobile">
        <h3 class="itemName">Nike Air Zoom Pegasus 36 Miami</h3>
        <h5>$299.43</h5>
      </div>
        
      <div class="item-details">
        <ul>
          <h3 class="itemName">Nike Airmax 270 React</h3>
          <li>$998</li>
          <li>$499</li>
        </ul>
      </div>

      <div class="item-icons-list"> 
        <div class="item-icons-1">
          <a href=""><i class='far fa-heart fa-2x'></i></a>
        </div>
        <div class="item-icons-2">
          <a href=""><i class='fas fa-trash fa-2x'></i></a>
        </div>
        <div class="item-icons-3">
          <form action=">
            <label for="quantity></label>
            <input type="button" value="-" class="minus">
            <input type="number" id="quantity" name="quantity" min="1" max="10">
            <input type="button" value="+" class="plus">
          </form>
        </div>
      </div>  
    </div>

    <div class="item-box-1">
      <div class="img-wrapper">
        <a href=""><img src="${shoe4}" alt="" /></a>
      </div>

      <div class="item-details-mobile">
        <h3 class="itemName">Nike Air Zoom Pegasus 36 Miami</h3>
        <h5>$299.43</h5>
      </div>
        
      <div class="item-details">
        <ul>
          <h3 class="itemName">Nike Airmax 270 React</h3>
          <li>$998</li>
          <li>$499</li>
        </ul>
      </div>

      <div class="item-icons-list"> 
        <div class="item-icons-1">
          <a href=""><i class='far fa-heart fa-2x'></i></a>
        </div>
        <div class="item-icons-2">
          <a href=""><i class='fas fa-trash fa-2x'></i></a>
        </div>
        <div class="item-icons-3">
          <form action=">
            <label for="quantity></label>
            <input type="button" value="-" class="minus">
            <input type="number" id="quantity" name="quantity" min="1" max="10">
            <input type="button" value="+" class="plus">
          </form>
        </div>
      </div>  
    </div>

      <div class="checkout-container">
        <div class="checkout-container-1">
          <ul class="checkout-1>
            <li >Subtotal</li>
            <li >Shipping Fee</li>
          </ul>
          <ul class="checkout-2">
            <li>$998</li>
            <li>$20</li>
          </ul>
        </div>

        <div class="checkout-container-1">
          <ul class="checkout-3">
            <li id="total">Total</li>
          </ul>
          <ul class="checkout-4">
          <li id="amtTotal">$118</li>
          </ul>
        </div>

        <div class="checkout-container-2">
          <ul class="checkout-1">
           <li>Items (2)</li>
           <li>Shipping</li>
           <li>Import Charges</li>
          </ul>
          <ul class="checkout-2">
            <li>$598.86</li>
            <li>$40.00</li>
            <li>$128.00</li>
          </ul>
        </div>

        <div class="checkout-container-2">
          <ul class="checkout-3">
            <li id="total">Total Price</li>
          </ul>
          <ul class="checkout-4">
            <li id="amtTotal">$786.86</li>
          </ul>
        </div>
      </div>
        
      <div class="checkout-btn">
        <a href="" class="btn">Check Out</a>
      </div>
  `;
};

export default cart;
