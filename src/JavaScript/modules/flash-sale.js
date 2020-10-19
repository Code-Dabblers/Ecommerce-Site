import { html } from 'lit-html';

const flashSale = () => {
    const sale1 = require("../../assets/landing-page/sale-1.png");
    const sale2 = require("../../assets/landing-page/sale-2.png");
    const sale3 = require("../../assets/landing-page/sale-3.png");
    return html`
        <div class="homepage__main-sale-card homepage__main-sale-card--1"> 
            <h3 class="homepage__main-sale-card--title"> FS - Quality Maxi Cross Bag</h3>
            <div class="homepage__main-sale-card--text">
                <span class="homepage__main-sale-card--text-1">$534,33</span>
                <span class="homepage__main-sale-card--text-2">24% Off</span>
            </div>
            <div class="homepage__main-sale-card--pic">
            <img class="homepage__main-sale-card--img" src="${sale1.default}" alt="purse sale" />
            </div>
            <h4 class="homepage__main-sale-card--price"> $299.43</h4>

        </div>

        <div class="homepage__main-sale-card homepage__main-sale-card--1"> 
            <h3 class="homepage__main-sale-card--title"> FS - Nike Air Max 270 React...</h3>
            <div class="homepage__main-sale-card--text">
                <span class="homepage__main-sale-card--text-1">$534,33</span>
                <span class="homepage__main-sale-card--text-2">24% Off</span>
            </div>
            <div class="homepage__main-sale-card--pic">
            <img class="homepage__main-sale-card--img" src="${sale2.default}" alt="purse sale" />
            </div>
            <h4 class="homepage__main-sale-card--price"> $299.43</h4>

        </div>

        <div class="homepage__main-sale-card homepage__main-sale-card--1"> 
            <h3 class="homepage__main-sale-card--title"> FS - Nike Air Max 270 React...</h3>
            <div class="homepage__main-sale-card--text">
                <span class="homepage__main-sale-card--text-1">$534,33</span>
                <span class="homepage__main-sale-card--text-2">24% Off</span>
            </div>
            <div class="homepage__main-sale-card--pic">
            <img class="homepage__main-sale-card--img" src="${sale3.default}" alt="purse sale" />
            </div>
            <h4 class="homepage__main-sale-card--price"> $299.43</h4>

        </div>
        `;

};

export default flashSale;