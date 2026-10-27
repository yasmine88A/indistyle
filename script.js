
// === CART MANAGEMENT ===
function addToCart(productId, name, price, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.id === productId);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ id: productId, name, price, image, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to cart!");
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function updateCartQuantity(productId, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1 && quantity > 0) {
    cart[index].quantity = quantity;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  if (!container) return;

  container.innerHTML = '';
  let subtotalTotal = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    subtotalTotal += subtotal;

    container.innerHTML += `
      <tr>
<td><button class="btn-remove" onclick="removeFromCart('${item.id}')"><i class='bx bx-x-circle'></i></button></td>

        <td><img src="${item.image}" width="70px"></td>
        <td>${item.name}</td>
        <td>${item.price} $</td>
        <td>
          <input type="number" value="${item.quantity}" min="1"
                 onchange="updateCartQuantity('${item.id}', this.value)">
        </td>
        <td>${subtotal} $</td>
      </tr>
    `;
  });

  const subtotalTable = document.querySelector("#subtotal table");
  if (subtotalTable) {
    subtotalTable.innerHTML = `
      <tr>
        <td>Cart Subtotal</td>
        <td>${subtotalTotal} $</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>Free</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>${subtotalTotal} $</strong></td>
      </tr>
    `;
  }
}







// === LOGIN: Passer de username à password ===
document.getElementById("login-username").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("login-password").focus();
  }
});

// === REGISTER: username → email → password ===
document.getElementById("register-username").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("register-email").focus();
  }
});

document.getElementById("register-email").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("register-password").focus();
  }
});



  
function addCurrentProductToCart() {
  const quantityInput = document.querySelector('input[type="number"]');
  let quantity = quantityInput ? parseInt(quantityInput.value) : 1;

  if (isNaN(quantity) || quantity <= 0) {
    quantity = 1; // sécurité
  }

  const productId = document.getElementById('product-id').value;
  const productName = document.getElementById('product-name').value;
  const productPrice = parseFloat(document.getElementById('product-price').value);
  const productImage = document.getElementById('product-image').value;

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.id === productId);

  if (index !== -1) {
    cart[index].quantity += quantity;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, image: productImage, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(quantity + " " + productName + "(s) added to cart!");
}






