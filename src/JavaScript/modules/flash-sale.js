import {html} from 'lit-html';

const flashSale = () =>{
    const sale1 = require("../../assets/landing-page/sale-1.png");
    const sale2 = require("../../assets/landing-page/sale-2.png");
    const sale3 = require("../../assets/landing-page/sale-3.png");

    return html`
      
        <div classs = "homepage__main-sale-card homepage__main-sale-card--1">
            <h3 class="homepage__main-sale-card--title"> FS - QUILTED MAXI CROSS BAGt</h3>
            <div class="homepage__main-sale-card--text">
                <span class="homepage__main-sale-card--text-1"></span>>$534,33</span>
                <span class="homepage__main-sale-card--text-2"></span>>24% Off</span>
            </div>
            <div class="homepage__main-sale-card--pic">
            <img src="${sale1.default}" alt="purse sale" />
            </div>
            <h4 class="homepage__main-sale-card--text"> $299.43</h4>

        </div>

        <div classs = "homepage__main-sale-card homepage__main-sale-card--2">
            <h3 class="homepage__main-sale-card--title"> FS - Nike Air Max 270 React...</h3>
            <div class="homepage__main-sale-card--text">
                <span class="homepage__main-sale-card--text-1"></span>>$534,33</span>
                <span class="homepage__main-sale-card--text-2"></span>>24% Off</span>
            </div>
            <div class="homepage__main-sale-card--pic">
            <img src="${sale2.default}" alt="purse sale" />
            </div>
            <h4 class="homepage__main-sale-card--text"> $299.43</h4>

        </div>

        <div classs = "homepage__main-sale-card homepage__main-sale-card--3">
            <h3 class="homepage__main-sale-card--title"> FS - Nike Air Max 270 React...</h3>
            <div class="homepage__main-sale-card--text">
                <span class="homepage__main-sale-card--text-1"></span>>$534,33</span>
                <span class="homepage__main-sale-card--text-2"></span>>24% Off</span>
            </div>
            <div class="homepage__main-sale-card--pic">
            <img src="${sale3.default}" alt="purse sale" />
            </div>
            <h4 class="homepage__main-sale-card--text"> $299.43</h4>

        </div>
        

    `;

};

export default flashSale;