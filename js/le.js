function generateText() {
    // Array of possible texts
    var texts = [
    
  "Their group name is just a jumbled word for Im Fearless",
  "A five-member girl group ",
  "Their fandom is called FEARNOT",

  
    ];
    // Select a random text from the array
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    // Display the random text
    document.getElementById("text").innerHTML = randomText;
  }

  // Define a global array variable to store the cart items
var cart = [];

// Function to add a product to the cart
function addToCart(productId) {
  // Get the product details based on the productId (you can modify this as per your actual implementation)
  var product = getProductDetails(productId);
  
  // Add the product to the cart
  cart.push(product);
  
  // Optional: Display a confirmation message
  alert("Product added to cart!");
}

// Function to get the product details based on the productId (replace this with your actual implementation)
function getProductDetails(productId) {
  // Implement your logic to retrieve the product details based on the productId
  // For example, you can use an API call or fetch data from a database
  
  // Return the product object (replace this with your actual implementation)
  return {
    id: productId,
    name: "Product Name",
    price: 0.00,
    // Add other relevant product details here
  };
}