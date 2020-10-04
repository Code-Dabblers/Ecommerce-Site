// get the span for copyright
const copyrightSpan = document.getElementById('copyright');

// define the date object 
const date = new Date();

// get the year
const year = date.getFullYear();

// update the copyright div

copyrightSpan.innerHTML = `Ecomm &copy; ${year} All Rights Reserved.`;