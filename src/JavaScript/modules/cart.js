import { html } from "lit-html";
import shoe4 from "../../assets/landing-page/shoe-4.png";
import shoe2 from "../../assets/landing-page/shoe-2.png";
const cart = () => {
    return html`

    <div class="cartHeader">
      <div class="cartHeader__mobile">
        <h3>Your Cart</h3>
      </div>
      <ul>
        <li class="cartHeader__product">Product</li>
        <li class="cartHeader__price">Price</li>
        <li class="cartHeader__qty">Qty</li>
        <li class="cartHeader__unit-price">Unit Price</li>
      </ul>
    </div>
    
    <div class="item">
      <div class="item__mobile">
        <div class="img-wrapper">
         <a href=""><img src="${shoe4}" alt="" /></a>
        </div>

        <div class="item__mobile__details">
          <h3 class="itemName">Nike Air Zoom Pegasus 36 Miami</h3>
          <h5>$299.43</h5>
        </div>
         <div class="item__icons__list"> 
          <div class="item__icons1">
            <a href=""><i class='fas fa-heart fa-2x'></i></a>
            <a href=""><i class='fas fa-trash fa-2x'></i></a>
          </div>
          <div class="item__icons2">
            <form action=">
              <label for="quantity></label>
              <input type="button" value="-" class="minus">
              <input type="number" value="1" id="quantity" name="quantity" min="1" max="10">
              <input type="button" value="+" class="plus">
            </form>
          </div>
        </div>  
      </div>
  
      <div class="item__mobile">
        <div class="img-wrapper">
         <a href=""><img src="${shoe4}" alt="" /></a>
        </div>

        <div class="item__mobile__details">
          <h3 class="itemName">Nike Air Zoom Pegasus 36 Miami</h3>
          <h5>$299.43</h5>
        </div>
         <div class="item__icons__list"> 
          <div class="item__icons1">
            <a href=""><i class='fas fa-heart fa-2x'></i></a>
            <a href=""><i class='fas fa-trash fa-2x'></i></a>
          </div>
          <div class="item__icons2">
            <form action=">
              <label for="quantity></label>
              <input type="button" value="-" class="minus">
              <input type="number" value="1" id="quantity" name="quantity" min="1" max="10">
              <input type="button" value="+" class="plus">
            </form>
          </div>
        </div>  
      </div>

      <div class="item__desktop">
        <div class="item__desktop__left">
          <div class="item__desktop__img-wrapper">
            <a href=""><img src="${shoe4}" alt="" /></a>
            <h3 class="itemName">Nike Air Zoom Pegasus 36 Miami</h3>
          </div>
        </div>

        <div class="item__desktop__right">
          <h3>$998</h3>
        </div>
        <div class="item__desktop__right">
          <form action=">
            <label for="quantity></label>
              <input type="button" value="-" class="minus">
              <input type="number" value="1" id="quantity" name="quantity" min="1" max="10">
              <input type="button" value="+" class="plus">
          </form>
        </div>
        <div class="item__desktop__right">
          <h3>$499</h3>
          <div class="item__desktop__icon">
            <a href=""><i class="fas fa-times fa-2x"></i></a>
          </div>
        </div>
      </div>
      
      <div class="item__desktop">
        <div class="item__desktop__left">
          <div class="item__desktop__img-wrapper">
            <a href=""><img src="${shoe4}" alt="" /></a>
            <h3 class="itemName">Nike Air Zoom Pegasus 36 Miami</h3>
          </div>
        </div>

        <div class="item__desktop__right">
          <h3>$998</h3>
        </div>
        <div class="item__desktop__right">
          <form action=">
            <label for="quantity></label>
              <input type="button" value="-" class="minus">
              <input type="number" value="1" id="quantity" name="quantity" min="1" max="10">
              <input type="button" value="+" class="plus">
          </form>
        </div>
        <div class="item__desktop__right">
          <h3>$499</h3>
          <div class="item__desktop__icon">
            <a href=""><i class="fas fa-times fa-2x"></i></a>
          </div>
        </div>
      </div>

      <div class="checkout__container">
        <div class="checkout__container__mobile"> 
          <div class="checkout__section__mobile-1">
            <ul class="checkout-row-1">
              <li>Items (2)</li>
              <li class="right">$598.86</li>
            </ul>
            <ul class="checkout-row-2">
              <li>Shipping</li>
              <li class="right">$40.00</li>
            </ul>
            <ul class="checkout-row-3">
              <li>Import Charges</li>
              <li class="right">$128.00</li>
            </ul>
          </div>

          <div class="checkout__section__mobile-2">
            <ul class="checkout-row-4">
              <li id="total">Total Price</li>
              <li id="amtTotal">$786.86</li>
            </ul>
          </div>

          <div class="checkout__mobile__btn">
              <a href="" class="btn">Check Out</a>
             </div>
          </div>
        </div>

        <div class="checkout__container__desktop">
          <div class="checkout__section__desktop-1">
            <ul class="checkout-row-1">
              <li>Subtotal</li>
              <li class="right">$998.00</li>
            </ul>
            <ul class="checkout-row-2">
              <li>Shipping Fee</li>
              <li class="right">$20.00</li>
            </ul>
          </div>
          
          <div class="checkout__section__desktop-2">
            <ul class="checkout-row-3">
              <li>Total</li>
              <li class="right">$118.00</li>
            </ul>
          </div>

          <div class="checkout__desktop__btn">
             <a href="" class="btn">Check Out</a>
          </div>
        </div>

      </div>
    </div>
    

      <script>
        const userIcon = document.getElementById('user-icon');
        const userInfo = document.getElementById("user-info");

          userIcon.addEventListener("click",(e)=>{

          userInfo.classList.toggle("d-block");
        });

          window.addEventListener('click', function(event) {
          if (event.target.parentNode !== userIcon || event.target === userIcon) {
          userInfo.classList.remove("d-block");
          }
        })
      </script>
  `;
};

export default cart;
