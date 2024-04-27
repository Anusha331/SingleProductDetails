let productDetailsContainer = document.getElementById("product-details");

function displaySize(option) {
    let arr = option[1].values;

    let sizeContainer = document.createElement("div");
    sizeContainer.classList.add("size-container");
    productDetailsContainer.appendChild(sizeContainer);

    for (let i = 0; i < 5; i++) {
        let eachSize = document.createElement("div");
        eachSize.classList.add("each-size");
        sizeContainer.appendChild(eachSize);

        let radio = document.createElement("INPUT");
        radio.type = 'radio';
        radio.name = "size";
        radio.value = arr[i];
        eachSize.appendChild(radio);

        let sizeOption = document.createElement("label");
        sizeOption.htmlFor = arr[i];
        sizeOption.textContent = arr[i];
        sizeOption.classList.add("sizes-text");
        eachSize.appendChild(sizeOption);

    }
}

function displayColor(option) {
    let colors = option[0].values;

    let colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    productDetailsContainer.appendChild(colorContainer);

    let colorSelected1 = document.createElement("div");
    colorContainer.appendChild(colorSelected1);

    let color1 = document.createElement("button");
    color1.classList.add("color");
    color1.style.backgroundColor = colors[0].Yellow;
    colorSelected1.appendChild(color1);

    let color2 = document.createElement("button");
    color2.classList.add("color");
    color2.style.backgroundColor = colors[1].Green;
    colorContainer.appendChild(color2);

    let color3 = document.createElement("button");
    color3.classList.add("color");
    color3.style.backgroundColor = colors[2].Blue;
    colorContainer.appendChild(color3);

    let color4 = document.createElement("button");
    color4.classList.add("color");
    color4.style.backgroundColor = colors[3].Pink;
    colorContainer.appendChild(color4);

    color1.addEventListener("click", () => {
        colorSelected1.classList.add("color-selected");
        colorSelected1.style.border = '3px solid #ECDECC';
        selectedTick = document.createElement("img");
        selectedTick.src = "https://res.cloudinary.com/dnoih6kpd/image/upload/v1714205121/Vector_Stroke_bw0gm8.png";
        selectedTick.style.width = "20px";
        color1.appendChild(selectedTick);
    });
}

function displayResult(product) {
    let productVendor = document.createElement("p");
    productVendor.textContent = product.vendor;
    productVendor.classList.add("side-headings");
    productDetailsContainer.appendChild(productVendor);

    let productTitle = document.createElement("h1");
    productTitle.textContent = product.title;
    productTitle.classList.add("title");
    productDetailsContainer.appendChild(productTitle);

    let line1 = document.createElement("hr");
    productDetailsContainer.appendChild(line1);

    let priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");
    productDetailsContainer.appendChild(priceContainer);

    let productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    productPrice.classList.add("product-price");
    priceContainer.appendChild(productPrice);

    let productComparePrice = document.createElement("p");
    productComparePrice.textContent = product.compare_at_price;
    productComparePrice.classList.add("actual-price");
    priceContainer.appendChild(productComparePrice);

    let productPercentageOff = document.createElement("span");
    productPercentageOff.textContent = "35% off";
    productPrice.appendChild(productPercentageOff);

    let line2 = document.createElement("hr");
    productDetailsContainer.appendChild(line2);

    let productChooseColor = document.createElement("p");
    productChooseColor.textContent = "Choose a color";
    productChooseColor.classList.add("side-headings");
    productDetailsContainer.appendChild(productChooseColor);

    let option = product.options;
    displayColor(option);

    let line3 = document.createElement("hr");
    productDetailsContainer.appendChild(line3);

    let productChooseSize = document.createElement("p");
    productChooseSize.textContent = "Choose a size";
    productChooseSize.classList.add("side-headings");
    productDetailsContainer.appendChild(productChooseSize);

    displaySize(option);

    let quantityAddToCart = document.createElement("div");
    quantityAddToCart.classList.add("quantity-addtocart-container");
    productDetailsContainer.appendChild(quantityAddToCart);

    let quantity = document.createElement("div");
    quantity.classList.add("quantity");
    quantityAddToCart.appendChild(quantity);

    let buttonMinus = document.createElement("button");
    buttonMinus.textContent = "-";
    buttonMinus.classList.add("button-minus-plus");
    quantity.appendChild(buttonMinus);

    let productQuantity = document.createElement("p");
    productQuantity.textContent = "0";
    productQuantity.classList.add("product-quantity");
    quantity.appendChild(productQuantity);

    let buttonPlus = document.createElement("button");
    buttonPlus.textContent = "+";
    buttonPlus.classList.add("button-minus-plus");
    quantity.appendChild(buttonPlus);

    let buttonCart = document.createElement("button");
    buttonCart.classList.add("button-cart");
    quantityAddToCart.appendChild(buttonCart);

    let cartImg = document.createElement("img");
    cartImg.src = "https://res.cloudinary.com/dnoih6kpd/image/upload/v1714163556/Vector_lfwesp.png";
    cartImg.classList.add("cart-icon");
    buttonCart.appendChild(cartImg);

    let addToCart = document.createElement("p");
    addToCart.textContent = "Add To Cart";
    addToCart.classList.add("add-to-cart-text");
    buttonCart.appendChild(addToCart);

    let message = document.createElement("div");
    message.classList.add("message-container")
    productDetailsContainer.appendChild(message);
    message.style.display = "none";

    let messageText = document.createElement("p");
    messageText.textContent = "Embrace Sideboard with color Yellow and Size Small added to cart "
    messageText.classList.add("message-text");
    message.appendChild(messageText)

    let line4 = document.createElement("hr");
    productDetailsContainer.appendChild(line4);

    let productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDescription.classList.add("product-description")
    productDetailsContainer.appendChild(productDescription);

    buttonCart.onclick = function() {
        if (message.style.display === "none") {
            message.style.display = "block";
        } else {
            message.style.display = "none";
        }
    }

    let a = 0
    buttonPlus.addEventListener("click", () => {
        a++;
        productQuantity.textContent = a;
        console.log(a)
    })
    buttonMinus.addEventListener("click", () => {
        if (a > 0) {
            a--;
        }
        productQuantity.textContent = a;
    })
}

let options = {
    method: "GET",
};
fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let {
            product
        } = jsonData;
        displayResult(product);

    });