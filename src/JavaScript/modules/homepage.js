import { html } from "lit-html";
import flashSale from "./flash-sale.js";

const homepage = () => {
  const mainBannaerShoe = require("../../assets/landing-page/main-banner-shoe-img.png");
  const heroImage = require("../../assets/landing-page/Promotion-Image.png");
  const img1 = require("../../assets/landing-page/purse-3.png");
  const img2 = require("../../assets/landing-page/purse-2.png");
  const img3 = require("../../assets/landing-page/shoe-1.png");
  const img4 = require("../../assets/landing-page/shoe-2.png");
  const img5 = require("../../assets/landing-page/shoe-5.png");
  const img6 = require("../../assets/landing-page/shoe-6.png");
  const img7 = require("../../assets/landing-page/shoe-7.png");
  const img8 = require("../../assets/landing-page/shoe-4.png");
  const testimonialImage = require("../../assets/landing-page/bg-shapes.svg");
  const girl = require("../../assets/landing-page/girl.png");
  return html`
    <div class="homepage">
      <!---------------------------- MAIN ------------------------------------------------>
      <div class="homepage__wrapper">
        <div class="homepage__main">
          <div class="homepage__main__img-wrapper">
            <img src="${heroImage.default}" alt="main-banner-shoe" />
          </div>

          <div class="homepage__main-title">
            <h1 class="homepage__main-text"> Super Flash Sale 50% Off</h1>
          </div>

          <div class="homepage__main-sale">
             ${flashSale}
          </div>
      </div>

      <!---------------------------- BEST SELLERS ----------------------------------------->
      <div class="best-sellers">
          <div class="best-sellers__header">
              <h3>Best Sellers</h3>
              <a class="best-sellers__header--link" href="#">See more</a>
          </div>
     
          <div class="best-sellers__list">
               <div class="best-sellers__list__item best-sellers__list__item--1">
                  <div>
                    <img src="${img6.default}" alt="" />
                  </div>
                 
                  <ul class="best-sellers__list__item__inner">
                     <li class="best-sellers__list__item__name"><a href="#">Nike Air Max 270 React ENG</a></li>
                     <li class="best-sellers__list__item__rating">
                        <div class="star star-1"></div>
                        <div class="star star-2"></div>
                        <div class="star star-3"></div>
                        <div class="star star-4"></div>
                        <div class="star star-5"></div>
                     </li>
                     <li class="best-sellers__list__item__price">100$</li>
                  </ul>
               </div>

              <div class="best-sellers__list__item best-sellers__list__item--2">
                <div>
                  <img src="${img5.default}" alt="" />
                </div>

                <ul class="best-sellers__list__item__inner">
                    <li class="best-sellers__list__item__name"><a href="#">Nike Air Max 270 React ENG</a></li>
                    <li class="best-sellers__list__item__rating">
                      <span class="star"></span>
                      <span class="star"></span>
                      <span class="star"></span>
                      <span class="star"></span>
                      <span class="star star--5"></span>
                    </li>
                    <li class="best-sellers__list__item__price">100$</li>
                </ul>
             </div>

              <div class="best-sellers__list__item best-sellers__list__item--3">
                  <div>
                    <img src="${img3.default}" alt="" />
                  </div>

                  <ul class="best-sellers__list__item__inner">
                    <li class="best-sellers__list__item__name"><a href="#">Nike Air Max 270 React ENG</a></li>
                    <li class="best-sellers__list__item__rating">
                        <div class="star star-1"></div>
                        <div class="star star-2"></div>
                        <div class="star star-3"></div>
                        <div class="star star-4"></div>
                        <div class="star star-5"></div>
                    </li>
                    <li class="best-sellers__list__item__price">100$</li>
                  </ul>
                </div>

                <div class="best-sellers__list__item best-sellers__list__item--4">
                    <div>
                      <img src="${img4.default}" alt="" />
                    </div>

                    <ul class="best-sellers__list__item__inner">
                      <li class="best-sellers__list__item__name"><a href="#">Nike Air Max 270 React ENG</a></li>
                      <li class="best-sellers__list__item__rating">
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star star--5"></div>
                      </li>
                      <li class="best-sellers__list__item__price">100$</li>
                    </ul>
                </div>


                <div class="best-sellers__list__item best-sellers__list__item--5">
                  <div>
                    <img src="${img5.default}" alt="" />
                  </div>

                  <ul class="best-sellers__list__item__inner">
                    <li class="best-sellers__list__item__name"><a href="#">Nike Air Max 270 React ENG</a></li>
                    <li class="best-sellers__list__item__rating">
                        <div class="star star-1"></div>
                        <div class="star star-2"></div>
                        <div class="star star-3"></div>
                        <div class="star star-4"></div>
                        <div class="star star-5"></div>
                    </li>
                    <li class="best-sellers__list__item__price">100$</li>
                  </ul>
                </div>

                <div class="best-sellers__list__item best-sellers__list__item--6">
                    <div>
                      <img src="${img6.default}" alt="" />
                    </div>

                    <ul class="best-sellers__list__item__inner">
                      <li class="best-sellers__list__item__name"><a href="#">Nike Air Max 270 React ENG</a></li>
                      <li class="best-sellers__list__item__rating">
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star star--5"></div>
                      </li>
                      <li class="best-sellers__list__item__price">100$</li>
                    </ul>
                </div>

                <div class="best-sellers__list__item best-sellers__list__item--7">
                  <div>
                    <img src="${img7.default}" alt="" />
                  </div>

                  <ul class="best-sellers__list__item__inner">
                    <li class="best-sellers__list__item__name"><a href="#">Nike Air Max 270 React ENG</a></li>
                    <li class="best-sellers__list__item__rating">
                        <div class="star star-1"></div>
                        <div class="star star-2"></div>
                        <div class="star star-3"></div>
                        <div class="star star-4"></div>
                        <div class="star star-5"></div>
                    </li>
                    <li class="best-sellers__list__item__price">100$</li>
                  </ul>
                </div>

                <div class="best-sellers__list__item best-sellers__list__item--8">
                    <div>
                      <img src="${img8.default}" alt="" />
                    </div>

                    <ul class="best-sellers__list__item__inner">
                      <li class="best-sellers__list__item__name"><a href="#">Nike Air Max 270 React ENG</a></li>
                      <li class="best-sellers__list__item__rating">
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star star--5"></div>
                      </li>
                      <li class="best-sellers__list__item__price">100$</li>
                    </ul>
                </div>
          </div>

          <h3 class="best-sellers__load">
            <a class="best-sellers__load-link" href="#">Load more</a>
          </h3>
      </div>
      
      <!---------------------------- WHY CHOOSE US ----------------------------------------->
      <div class="why-choose-us">
            <h3>WHY CHOOSE US ?</h3>
            <div class="why-choose-us__reasons">
            <div class="why-choose-us__reason">
                <svg width="79" height="52" viewBox="0 0 79 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M79 26.7824C79 26.7675 79 26.7526 79 26.7377C78.9933 26.2578 78.7988 25.8 78.4588 25.4636C78.1189 25.1272 77.6609 24.9395 77.1843 24.9411H76.7072L69.3279 10.5878C69.1744 10.29 68.9422 10.0406 68.657 9.86702C68.3718 9.69347 68.0446 9.60249 67.7113 9.6041H55.1205L55.6005 5.7696C55.6792 5.03641 55.6023 4.29475 55.3751 3.59369C55.1479 2.89262 54.7755 2.24812 54.2824 1.70279C53.7894 1.15746 53.1871 0.723721 52.5152 0.430268C51.8434 0.136815 51.1173 -0.00966781 50.385 0.000494819H11.3064C10.829 0.00306493 10.3694 0.18364 10.0164 0.50737C9.66346 0.831099 9.44209 1.27503 9.39506 1.75346L9.00076 4.91198H31.2686C31.6097 4.9102 31.9477 4.97771 32.2623 5.11046C32.5769 5.2432 32.8617 5.43846 33.0996 5.68457C33.3376 5.93068 33.5238 6.22258 33.6472 6.54282C33.7706 6.86305 33.8286 7.20506 33.8177 7.54838C33.796 8.25251 33.504 8.92073 33.003 9.41244C32.502 9.90414 31.8311 10.181 31.1316 10.1848H23.705V10.1957H1.90049C1.40629 10.1983 0.932304 10.3936 0.578099 10.7406C0.223894 11.0877 0.0170352 11.5595 0.000976121 12.0569C-0.00698598 12.2998 0.033828 12.5419 0.120974 12.7686C0.208119 12.9953 0.339804 13.202 0.508141 13.3762C0.676479 13.5504 0.878006 13.6887 1.10065 13.7826C1.3233 13.8766 1.56249 13.9243 1.80389 13.923H30.6762C31.3325 14.0234 31.9295 14.3627 32.3542 14.8765C32.7789 15.3903 33.0019 16.0431 32.9808 16.7113C32.9573 17.462 32.6468 18.1747 32.1142 18.7006C31.5817 19.2265 30.8681 19.5252 30.1222 19.5343H10.2211C9.72085 19.5369 9.24115 19.735 8.88311 20.0868C8.52508 20.4386 8.31669 20.9167 8.30188 21.4202C8.29364 21.6657 8.33472 21.9103 8.42264 22.1394C8.51055 22.3685 8.6435 22.5774 8.81351 22.7535C8.98353 22.9296 9.1871 23.0694 9.41203 23.1643C9.63697 23.2593 9.87863 23.3076 10.1225 23.3062H29.7939C30.4566 23.3982 31.0622 23.7334 31.4944 24.2474C31.9267 24.7615 32.1552 25.4182 32.136 26.0915C32.1126 26.8459 31.7995 27.5617 31.2627 28.0883C30.7259 28.615 30.0072 28.9115 29.2577 28.9155H6.69315H4.79659C4.29634 28.9181 3.81663 29.1162 3.45859 29.4681C3.10056 29.8199 2.89217 30.298 2.87736 30.8015C2.86913 31.047 2.9102 31.2916 2.99812 31.5207C3.08604 31.7498 3.21898 31.9587 3.389 32.1348C3.55901 32.3109 3.76258 32.4506 3.98752 32.5456C4.21245 32.6406 4.45411 32.6888 4.69802 32.6875H6.33434L5.6946 39.4314C5.61613 40.1645 5.69308 40.906 5.92037 41.607C6.14766 42.3079 6.52011 42.9523 7.0131 43.4975C7.50609 44.0427 8.10839 44.4764 8.78018 44.7698C9.45197 45.0632 10.178 45.2096 10.9101 45.1995H12.3227C12.6542 47.1103 13.6465 48.8413 15.124 50.086C16.6014 51.3307 18.4686 52.0087 20.3949 51.9999C22.3542 51.9862 24.2517 51.3074 25.7805 50.0734C27.3094 48.8393 28.3802 47.1222 28.82 45.1995H46.4361C47.8423 45.1868 49.1989 44.6747 50.2667 43.7532C51.2489 44.6954 52.5575 45.2143 53.914 45.1995H54.2038C54.5352 47.1103 55.5276 48.8413 57.005 50.086C58.4825 51.3307 60.3497 52.0087 62.276 51.9999C64.2353 51.9862 66.1327 51.3074 67.6616 50.0734C69.1904 48.8393 70.2613 47.1222 70.7011 45.1995H71.8613C73.3568 45.1705 74.7903 44.5929 75.8929 43.5751C76.9954 42.5573 77.6912 41.1693 77.8496 39.6716L78.9892 26.966C78.9892 26.9491 78.9892 26.9323 78.9892 26.9144C78.9892 26.8965 78.9941 26.8628 78.9951 26.836C78.9961 26.8092 79 26.7973 79 26.7824ZM20.4925 48.2309C19.8836 48.2336 19.2804 48.1128 18.7188 47.8756C18.1573 47.6385 17.6489 47.2898 17.2241 46.8506C16.7993 46.4113 16.4667 45.8903 16.2461 45.3188C16.0255 44.7472 15.9216 44.1368 15.9404 43.5239C15.9806 42.2672 16.5026 41.0749 17.3969 40.1973C18.2912 39.3197 19.4883 38.825 20.737 38.8169C21.3459 38.8142 21.9491 38.9351 22.5106 39.1722C23.0722 39.4094 23.5805 39.758 24.0054 40.1973C24.4302 40.6366 24.7628 41.1575 24.9834 41.7291C25.2039 42.3006 25.3079 42.911 25.2891 43.5239C25.2489 44.7807 24.7268 45.973 23.8325 46.8505C22.9382 47.7281 21.7412 48.2229 20.4925 48.2309V48.2309ZM62.3755 48.2309C61.7666 48.2336 61.1634 48.1128 60.6018 47.8756C60.0403 47.6385 59.532 47.2898 59.1071 46.8506C58.6823 46.4113 58.3497 45.8903 58.1291 45.3188C57.9086 44.7472 57.8046 44.1368 57.8234 43.5239C57.8636 42.2672 58.3857 41.0749 59.2799 40.1973C60.1742 39.3197 61.3713 38.825 62.62 38.8169C63.2289 38.8142 63.8321 38.9351 64.3937 39.1722C64.9552 39.4094 65.4636 39.758 65.8884 40.1973C66.3132 40.6366 66.6458 41.1575 66.8664 41.7291C67.087 42.3006 67.1909 42.911 67.1721 43.5239C67.1319 44.7807 66.6099 45.973 65.7156 46.8505C64.8213 47.7281 63.6242 48.2229 62.3755 48.2309V48.2309ZM74.1285 39.4274C74.0658 39.9677 73.8123 40.4674 73.4142 40.8351C73.016 41.2028 72.4999 41.4142 71.9599 41.4305H70.706C70.2921 39.6123 69.2761 37.99 67.8249 36.8305C66.3738 35.671 64.574 35.0434 62.7215 35.0509C60.8359 35.0641 59.0054 35.6931 57.5052 36.8435C56.0049 37.9939 54.916 39.6036 54.4019 41.4305H54.0165C53.7932 41.4356 53.5715 41.3932 53.3656 41.3062C53.1597 41.2191 52.9744 41.0893 52.8218 40.9252C52.6723 40.7553 52.5599 40.5556 52.492 40.3391C52.424 40.1226 52.4021 39.8942 52.4275 39.6686L54.7853 13.3641H60.2L59.3424 22.9429C59.2638 23.6761 59.3406 24.4178 59.5679 25.1188C59.7951 25.8199 60.1675 26.4644 60.6605 27.0097C61.1535 27.5551 61.7559 27.9888 62.4277 28.2823C63.0996 28.5757 63.8257 28.7222 64.5579 28.712H75.0886L74.1285 39.4274Z" fill="#D893D1"/>
                </svg>
                <h4 class="why-choose-us__reason--text">FREE SHIPPING</h4>
            </div>

            <div class="why-choose-us__reason">
              <div>
                <svg width="53" height="49" style="margin-bottom:-5px" viewBox="0 0 53 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.4019 40.4278H44.4748V36.3853H46.4961C48.1036 36.3832 49.6448 35.7437 50.7815 34.607C51.9183 33.4702 52.5578 31.9291 52.5599 30.3215V26.279C52.5596 19.3091 49.7906 12.6248 44.862 7.69652C39.9333 2.76826 33.2488 -0.000258955 26.279 1.8167e-08C19.3091 0.000258991 12.6248 2.76928 7.69652 7.6979C2.76826 12.6265 -0.000258955 19.311 1.8167e-08 26.2809L1.8167e-08 30.3234C0.00206699 31.931 0.641595 33.4722 1.77833 34.6089C2.91507 35.7457 4.45622 36.3852 6.06381 36.3873H9.12599C10.2502 39.5711 12.2385 42.3791 14.8683 44.4968C17.4981 46.6145 20.6655 47.9583 24.0158 48.3777C27.3661 48.7972 30.767 48.2756 33.8377 46.8715C36.9083 45.4675 39.5275 43.2363 41.4019 40.4278ZM46.4961 32.3418H44.3576C44.4329 31.6707 44.4707 30.9959 44.4709 30.3205V26.278C44.4707 25.6026 44.4329 24.9278 44.3576 24.2567H46.4921C47.028 24.2575 47.5416 24.4707 47.9205 24.8496C48.2994 25.2285 48.5126 25.7421 48.5134 26.278V30.3205C48.5137 30.857 48.3009 31.3717 47.9219 31.7514C47.5429 32.1312 47.0287 32.3449 46.4921 32.3457L46.4961 32.3418ZM26.2785 4.04498C31.1388 4.05123 35.8637 5.64699 39.7325 8.58887C43.6014 11.5308 46.4019 15.6573 47.7069 20.3392C47.3074 20.2578 46.9008 20.2169 46.4931 20.2171H43.43C42.1759 16.6701 39.8531 13.5992 36.7814 11.4271C33.7097 9.25509 30.0401 8.08875 26.278 8.08875C22.5159 8.08875 18.8463 9.25509 15.7746 11.4271C12.7028 13.5992 10.38 16.6701 9.12599 20.2171H6.06381C5.65616 20.2169 5.24952 20.2578 4.85007 20.3392C6.15506 15.6573 8.95554 11.5308 12.8244 8.58887C16.6933 5.64699 21.4181 4.05123 26.2785 4.04498ZM37.8866 18.1997C36.5796 20.0668 34.8427 21.5921 32.8223 22.6468C30.802 23.7015 28.5575 24.2547 26.2785 24.2596H12.2731C12.6778 21.4492 13.919 18.8255 15.8352 16.7301C17.7514 14.6347 20.2538 13.1644 23.017 12.5107C25.7802 11.8569 28.6762 12.0499 31.3282 13.0646C33.9802 14.0792 36.2654 15.8685 37.8866 18.1997ZM6.06381 32.3457C5.52797 32.3449 5.01431 32.1317 4.63541 31.7528C4.25652 31.3739 4.04331 30.8603 4.04254 30.3244V26.2819C4.04331 25.746 4.25652 25.2324 4.63541 24.8535C5.01431 24.4746 5.52797 24.2614 6.06381 24.2606H8.20226C8.12699 24.9317 8.08918 25.6065 8.08899 26.2819V30.3244C8.08918 30.9998 8.12699 31.6746 8.20226 32.3457H6.06381ZM12.1276 30.3244V28.3032H26.2785C28.838 28.2984 31.368 27.7556 33.7042 26.7099C36.0405 25.6643 38.1308 24.1392 39.8395 22.2335C40.2323 23.5467 40.4314 24.9102 40.4303 26.2809V30.3234C40.4325 32.4214 39.9654 34.4932 39.0632 36.3873H32.3423L30.5632 34.6121C29.4258 35.7492 27.8834 36.3881 26.275 36.3881C24.6667 36.3881 23.1243 35.7492 21.9869 34.6121L19.1288 37.4701C20.8491 39.1904 23.1321 40.2324 25.5588 40.405C27.9855 40.5775 30.393 39.869 32.3393 38.4095V40.4278H36.1671C34.1777 42.3766 31.6573 43.6947 28.9219 44.2167C26.1865 44.7388 23.3578 44.4417 20.7906 43.3626C18.2234 42.2834 16.0319 40.4704 14.4909 38.1508C12.95 35.8312 12.1282 33.1082 12.1286 30.3234L12.1276 30.3244Z" fill="#D893D1"/>
                </svg>
              </div>
              <div>
                <svg width="53" height="21" viewBox="0 0 53 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.58138V21.0007H26.2785H52.5569V6.58138C52.5549 4.97379 51.9153 3.43264 50.7786 2.2959C49.6419 1.15917 48.1007 0.519645 46.4931 0.517578H6.06381C4.45622 0.519645 2.91507 1.15917 1.77833 2.2959C0.641595 3.43264 0.00206698 4.97379 0 6.58138ZM4.04254 6.58138C4.04332 6.04554 4.25652 5.53188 4.63541 5.15299C5.01431 4.77409 5.52797 4.56091 6.06381 4.56013H8.08508V16.9611H4.04254V6.58138ZM12.1286 4.56013H17.3556L26.2785 13.483L35.2014 4.56013H40.4254V16.9611H12.1286V4.56013ZM48.5144 6.58138V16.9582H44.4719V4.55718H46.4931C47.0295 4.55796 47.5436 4.77158 47.9226 5.15111C48.3015 5.53064 48.5144 6.04504 48.5144 6.58138ZM29.4842 4.56013L26.2785 7.76584L23.0728 4.56013H29.4842Z" fill="#D893D1"/>
                </svg>
              </div>
              <h4 class="why-choose-us__reason--text">SUPPORT 24/7</h4>
            </div>

            <div class="why-choose-us__reason">
              <div>
                <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.7468 11.2755L35.1821 14.5695C38.8175 17.3873 41.3228 21.4146 42.2438 25.9211C43.1648 30.4276 42.4404 35.1149 40.2021 39.1332C37.9638 43.1515 34.3597 46.2347 30.0433 47.8238C25.7268 49.4129 20.9839 49.4027 16.6744 47.795C12.3648 46.1873 8.77407 43.0885 6.55312 39.0606C4.33217 35.0327 3.62807 30.3423 4.56849 25.8398C5.50892 21.3373 8.0316 17.3209 11.6791 14.5187C15.3267 11.7166 19.8576 10.3142 24.4503 10.5659L20.8417 14.3514L23.5185 16.9059L29.2148 10.9215L31.7667 8.24138L29.0942 5.69715L23.1141 0L20.5605 2.68016L24.4554 6.39049C18.4812 6.11843 12.6297 8.14498 8.10332 12.0537C3.57697 15.9623 0.719648 21.4563 0.118525 27.4064C-0.482597 33.3566 1.21814 39.311 4.87125 44.046C8.52435 48.781 13.8523 51.937 19.7603 52.8653C20.9793 53.058 22.2116 53.1549 23.4458 53.1552C28.3182 53.143 33.0653 51.6103 37.0248 48.7709C40.9844 45.9315 43.9589 41.927 45.5335 37.316C47.108 32.7051 47.204 27.7176 45.8082 23.0494C44.4123 18.3813 41.5941 14.2652 37.7468 11.2755Z" fill="#D893D1"/>
                <path d="M25.6884 41.6876V39.2853C28.537 38.9673 31.3078 37.1686 31.3078 33.7523C31.3078 29.111 26.9922 28.5792 23.8401 28.1911C21.8251 27.95 20.282 27.6705 20.282 26.4496C20.282 24.7518 22.6757 24.5688 23.7016 24.5688C25.2285 24.5688 26.858 25.2869 27.4119 26.2026L27.5727 26.4693L30.7359 25.004L30.5794 24.6851C30.1099 23.7569 29.4162 22.9605 28.5611 22.3683C27.7059 21.7761 26.7165 21.4067 25.6825 21.2936V19.1777H21.9807V21.2834C18.5294 21.7963 16.4793 23.7079 16.4793 26.4488C16.4793 30.9174 20.5367 31.3705 23.4973 31.7031C26.1356 32.0143 27.3632 32.6657 27.3632 33.7549C27.3632 35.8298 24.4898 35.9913 23.6093 35.9913C21.649 35.9913 19.7622 35.0133 19.2116 33.7138L19.0757 33.3933L15.6406 34.8492L15.7774 35.1698C16.7956 37.5541 18.9936 39.0477 21.9849 39.4007V41.6876H25.6884Z" fill="#D893D1"/>
                </svg>
              </div>
              <h4 class="why-choose-us__reason--text">100% REFUND</h4>
            </div>
            </div>
      </div>

      <!---------------------------- TESTIMONIALS ----------------------------------------->
      <div class="testimonials">
        <div class="testimonials__img">
          <img src="${testimonialImage.default}" class="testimonials__img--1" alt="Testimonial background" />
          <img src="${girl.default}" class="testimonials__img--2" alt="Testimonial girl" />

        </div>
        <div class="testimonials__text">
            <h4>Testimonials</h4>
            <div class="testimonials__p-wrapper">
              <p class="testimonials__p">
              Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.
              </p>
              <div>Gita Savitri</div>
            </div>
            <div class="testimonials__arrows">
                <i class="fa fa-long-arrow-alt-left arrow-left active-arrow"></i>
                <i class="fa fa-long-arrow-alt-right arrow-right"></i>
            </div>
        </div>
      </div>
    </div>
    </div>
  `;
};

export default homepage;
