import { products } from "./data.js";
console.log(products.find(item => item.name === "Laptop")) 
// {id: 1, name: 'Laptop', category: 'electronics', price: 1200, inStock: true} 

// If you want to see the data structure, open the data.js file. Do not modify the file!

// Easy Tasks are worth: 0.5 points
// Medium : 1 point
// Hard: 2 points
// Extra Hard: 3 points
// You can earn up to 16 points!


console.log("First product out of stock:",  products.find(item => item.inStock === false)) // Easy

console.log("First product with price over $40:", products.find(item => item.price > 40)) // Easy

console.log("Any product with price under $20? (true/false)", products.some(item => {return item.price > 20})) // Easy

console.log("Any books that cost more than $50? (true/false)", products.some(item =>{return item.category==="books".price > 50})) // Medium

console.log("Do all electronics cost more than $50? (true/false)", products.every(item => {return item.category==="electronics".price > 50})) // Medium

console.log("Are all products in stock? (true/false)", products.every(item => {return item.inStock===true})) // Easy

console.log("Get all clothing items that are in stock:", products.filter(item => (item.category==="clothing" && item.inStock===true))) // Medium

console.log("Get all books that are cheaper than $30:", products.filter(item => (item.category==="books" && item.price < 30))) // Medium

console.log("Create an array of all the product names:", products.map(item => {return item.name} )) // Medium

console.log("Create an array with items like this: {name, priceAFG} (conversion rate 70):", products.map(item => {return {name: item.name, price: item.price*70}})) // Hard

console.log("Total value of all items in stock:", products.reduce((accumulator,currentValue)=>{ 
    if (currentValue.inStock===true){
        return accumulator + currentValue.price
    }
    else return accumulator
},0)) // Medium

console.log("The number of items in each category:", products.reduce((acc, currentItem) => { 
    if (currentItem.category == "electronics"){
        acc.electronics++
    } else if (currentItem.category == "books") {
        acc.books++
    } else if (currentItem.category == "clothing") {
        acc.clothing++
    } 

 }, {electronics:0, books:0, clothing:0})) // Extra Hard


products.sort((a,b) => { return a.price - b.price})
console.log("Products sorted by price (low to high)", products) // Medium


products.sort((a,b) => { return a.name.charCodeAt(0) - b.name.charCodeAt(0)})
console.log("Products sorted alphabetically (A to Z)", products) // Hard



/* !!! Move this line down with (Alt + Arrow Down Key) as you complete each task !!!
You finished! GREAT JOB!! */