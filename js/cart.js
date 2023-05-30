function addToCart(productIndex) {
    var products = [
      //gidle
      { name: "Neverbong", price: 2600.00},
      { name: "IDLE 1st Mini Album", price: 700.00},
      { name: "IDLE 2nd Mini Album", price: 2350.00},
      { name: "IDLE 3rd Mini Album", price: 2350.00},
      { name: "IDLE 4th Mini Album", price: 2350.00},
      { name: "IDLE 5th Mini Album", price: 2350.00},

      //lightsum
      { name: "Lightsum Lightstick", price: 2600.00},
      { name: "Lightsum 1st Mini Album", price: 2600.00},
      { name: "Lightsum 2nd Mini Album", price: 2350.00},
      { name: "Lightsum Season's Greetings 2022", price: 2350.00},

      //btob
      { name: "Btob Lightstick", price: 2600.00},
      { name: "Btob Mini Album Vol.12", price: 700.00},
      { name: "Btob 3rd Studio Album", price: 2350.00},
      { name: "Btob 3rd Mini Album", price: 2350.00},
      { name: "Btob 4U Special Album", price: 2350.00},
      { name: "Btob 4U 1st Mini Album", price: 2350.00},

      //bts
      { name: "Armybong", price: 2600.00},
      { name: "Jimin First Album", price: 700.00},
      { name: "Agust D First Album", price: 2350.00},
      { name: "BTS 1st Anthology Album", price: 2350.00},
      { name: "BTS 4th Studio Album", price: 2350.00},
      { name: "BTS 2nd Studio Album", price: 2350.00},

      //le
      { name: "Le Sserafim Lightstick", price: 2600.00},
      { name: "Le Sserafim 1st Studio Album", price: 2600.00},
      { name: "Le Sserafim 2nd Mini Album", price: 2350.00},
      { name: "Le Sserafim 1st Mini Album", price: 2350.00},

      //seventeen
      { name: "Caratbong", price: 2600.00},
      { name: "Sub-unit Album", price: 700.00},
      { name: "Seventeen 4th Studio Album", price: 2350.00},
      { name: "Seventeen 4th Album Repackage", price: 2350.00},
      { name: "Seventeen 10th Mini Album", price: 2350.00},
      { name: "Seventeen 8th Mini Album", price: 2350.00},

      //twice
      { name: "Candybong Infinity", price: 2600.00},
      { name: "Twice 12th Mini Album", price: 700.00},
      { name: "Yes I Am Chaeyoung! First Photobook", price: 2350.00},
      { name: "Twice 11th Mini Album", price: 2350.00},
      { name: "Twice Season's Greetings 2023", price: 2350.00},
      { name: "Im Nayeon 1st Mini Album", price: 2350.00},

      //itzy
      { name: "Itzy Lightring", price: 2600.00},
      { name: "Itzy 6th Mini Album", price: 700.00},
      { name: "Itzy The First Album", price: 2350.00},
      { name: "Itzy 3rd Mini Album", price: 2350.00},
      { name: "Itzy 1st Mini Album", price: 2350.00},
      { name: "Itzy 4th Mini Album", price: 2350.00},

      //sk
      { name: "Stray Kids Lightstick", price: 2600.00},
      { name: "Stray Kids 6th Mini Album", price: 700.00},
      { name: "Stray Kids 7th Mini Album", price: 2350.00},
      { name: "Stray Kids 3rd Mini Album", price: 2350.00},
      { name: "Stray Kids The Second Album", price: 2350.00},
      { name: "Stray Kids 1st Album Repackage", price: 2350.00},

      //red velvet
      { name: "RedVelvet LightStick", price: 2600.00},
      { name: "The Reve Festival 2022", price: 700.00},
      { name: "Feel My Rhythm Special Mini Album", price: 2350.00},
      { name: "Reve Festival Finale", price: 2350.00},
      { name: "RedVelvet 6th Mini Album", price: 2350.00},
      { name: "Wendy First Album", price: 2350.00},

      //aespa
      { name: "Aespa Lightstick", price: 2600.00},
      { name: "Aespa 3rd Mini Album", price: 700.00},
      { name: "Aespa 2nd Mini Album", price: 2350.00},
      { name: "Aespa 1st Mini Album", price: 2350.00},
      { name: "Aespa Debut Single", price: 2350.00},
      { name: "Aespa Season's Greeting 2022", price: 2350.00},

      //exo
      { name: "EXO Lightstick", price: 2600.00},
      { name: "Kai 1st Solo Album", price: 700.00},
      { name: "EXO 6th Mini Album", price: 2350.00},
      { name: "EXO 2nd Mini Album", price: 2350.00},
      { name: "EXO 1st Mini Album", price: 2350.00},
      { name: "EXO Seasons Greetings 2022", price: 2350.00}
    ];

    var selectedProduct = products[productIndex];

    var cartItem = {
      item: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1,
      image: selectedProduct.image,
      checked: false
    };

    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var existingItem = cartItems.find(function(item) {
      return item.item === cartItem.item && item.price === cartItem.price;
    });

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push(cartItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Dispatch a custom event to notify other pages about the cart update
    var cartUpdateEvent = new CustomEvent("cartUpdate");
    window.dispatchEvent(cartUpdateEvent);
  }
  function renderCart() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartTable = document.getElementById("cartTable");
    var totalElement = document.getElementById("total");

    while (cartTable.rows.length > 1) {
      cartTable.deleteRow(1);
    }

    var totalPrice = 0;
    cartItems.forEach(function (cartItem, index) {
      var row = cartTable.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);

      var productInfoContainer = document.createElement("div");
      productInfoContainer.className = "product-info";

      var productName = document.createElement("span");
      productName.textContent = cartItem.item;

      productInfoContainer.appendChild(productName);


      cell1.appendChild(productInfoContainer);
      cell2.textContent = "₱ " + cartItem.price.toFixed(2);
      cell3.style.textAlign = "center";
      cell2.style.fontSize="1.5em";
      cell2.style.letterSpacing=".2em";

      var quantityContainer = document.createElement("div");
      quantityContainer.className = "quantity-container";

      var minusButton = document.createElement("button");
      minusButton.textContent = "-";
      minusButton.className = "quantity-button";
      minusButton.addEventListener("click", function () {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          quantityValue.textContent = cartItem.quantity; // Update the displayed quantity
          saveCartItems(cartItems);
          updateTotal();
        } else {
          cartItems.splice(index, 1);
          saveCartItems(cartItems);
          renderCart();
          updateTotal();
        }
      });

      var quantityValue = document.createElement("span");
      quantityValue.textContent = cartItem.quantity;

      var plusButton = document.createElement("button");
      plusButton.textContent = "+";
      plusButton.className = "quantity-button";
      plusButton.addEventListener("click", function () {
        cartItem.quantity++;
        quantityValue.textContent = cartItem.quantity; // Update the displayed quantity
        saveCartItems(cartItems);
        updateTotal();
      });

      quantityContainer.appendChild(minusButton);
      quantityContainer.appendChild(quantityValue);
      quantityContainer.appendChild(plusButton);

      cell3.appendChild(quantityContainer);

      var removeButton = document.createElement("button");
      removeButton.textContent = "Trash";
      removeButton.className = "remove-button";
      removeButton.addEventListener("click", function () {
        cartItems.splice(index, 1);
        saveCartItems(cartItems);
        renderCart(); // Render the cart after removing the item
        updateTotal(); // Call the function to update the total after removing the item
      });

      cell4.appendChild(removeButton);

      totalPrice += cartItem.price * cartItem.quantity; // Update the total price
    });

    totalElement.textContent = totalPrice.toFixed(2); // Set the total price in the totalElement
  }

  function updateTotal() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var totalElement = document.getElementById("total");

    var totalPrice = 0;

    // Loop through the cart items and calculate the total price
    cartItems.forEach(function (cartItem) {
      totalPrice += cartItem.price * cartItem.quantity;
    });

    totalElement.textContent = totalPrice.toFixed(2);
  }

  function saveCartItems(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  function clearCart() {
    localStorage.removeItem("cartItems");
    renderCart();
    updateTotal();
  }

  renderCart();