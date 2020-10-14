import { html } from "lit-html";
import shoeee from '../../assets/product-search/shoe-1.png'

  const shoe=[
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
    {name:'Nike Air Max 270 React',price : 299.43 , rating : 4},
  ]


  
const productList = () => {
  return html`
    
    <div class="product-header">
    <div>
      <i class="icon-search"></i>
      <input />
    </div>
    
    <i class="icon-sort-by-attributes-alt"></i>
    <i class="icon-filter"></i>
    </div>
    <p class="result-no">${shoe.length} Product Results</p>
    
    <div class="main-product-box" id="myUL">
    ${shoe.map((item)=>html`
    <ul>
    <img src='${shoeee}' />
    <li><a href="#">${item.name}</a></li>
    <li class="star"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></li>
    <li class="price"> Price : ${item.price}</li>
    </ul>
    `).splice(-10)}
    </div>
    
  `;
}; 



export default productList;
