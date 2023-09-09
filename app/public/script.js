const colorPalette = [
    
    "#FF6F61", 
    "#6B5B95", 
    "#88B04B", 
    "#F7CAC9", 
    "#92A8D1", 
    "#955251", 
    "#B565A7",
    "#F7CAC9",
    "#92A8D1",
    "#E6B89C",
    "#C4C3D0",
    "#E6D4A3",
    "#B5D3CC",
    "#D5A6BD",
    "#AFC1BB",
    "#F0DC82",
    "#D1B993",
    "#E3A857",
    "#C1A7A7",
    "#C2B280",
    "#B2BEB5",
    "#D3B683",
    "#C9A8A8",
    "#E7C697",
    "#B4A8B6",
    "#C9B1C9",
    "#C8C8A9",
    "#D6C1A7",
    "#A9C0C4",
    "#D1B6E1",
    "#C3B091",
    "#C7BAA7",
    "#B8B8B8",
    "#C2C2A3",
    "#B5AEBF",
    "#D0C8B0",
    "#B7B7B7",
    "#C9C9C9",
    "#B6B6B6",
    "#C8C8C8",
    "#B5B5B5",
    "#C7C7C7",
    "#B4B4B4",
    "#C6C6C6",
    "#B3B3B3",
    "#C5C5C5",
    "#B2B2B2",
    "#C4C4C4",
    "#B1B1B1",
    "#C3C3C3",
    "#B0B0B0",
    "#C2C2C2",
    "#AFAFAF",
    "#C1C1C1",
    "#ACACAC",
    "#C0C0C0",
    "#A9A9A9",
    "#BFBFBF",
    "#A8A8A8",
    "#BEBEBE",
    "#A7A7A7",
    "#BDBDBD",
    "#A6A6A6",
    "#BCBCBC", ]


const govColors = {
    green:"#00703C",
    lightgrey:"#F3F2F1",
    blue:"#1D70B8",
    black:"#0B0C0C"
}

const amazonColors = {
    darkblue:"#131921",
    orange:"#FEBD69"
}



const categoryItemDict = {
    'Apparel': ['Image_Belt foto9.jpg',
  'Image_Boots foto2.jpg',
  'Image_Boots foto8.jpg',
  'Image_Dresses foto1.jpg',
  'Image_Dresses foto4.jpg',
  'Image_Hoodie1.jpg',
  'Image_Hoodie3.jpg',
  'Image_Hoodie9.jpg',
  'Image_Jeans3.jpg',
  'Image_Sandals foto4.jpg',
  'Image_Sandals foto6.jpg',
  'Image_Sneakers foto8.jpg',
  'Image_Socks foto9.jpg'],

 'Beauty': ['Image_Eyeliner foto6.jpg',
  'Image_Lip Care foto2.jpg',
  'Image_Lip Care foto7.jpg',
  'Image_Lipstick4.jpg',
  'Image_Mascara foto4.jpg',
  'Image_Self-Tanners foto5.jpg',
  'Image_Sun Care foto4.jpg',
  'Image_Sun Care foto5.jpg',
  'Image_Toners foto1.jpg'],

 'Electronics': ['Image_Bluetooth Speaker foto1.jpg',
  'Image_Bluetooth Speaker foto7.jpg',
  'Image_Bluetooth Speaker8.jpg',
  'Image_Cameras foto4.jpg',
  'Image_External Hard Drives foto3.jpg',
  'Image_Gaming Consoles foto2.jpg',
  'Image_Headphones foto6.jpg',
  'Image_Headphones8.jpg',
  'Image_Keyboard foto6.jpg',
  'Image_Modems foto5.jpg',
  'Image_Mouse foto3.jpg',
  'Image_Portable Charger foto8.jpg',
  'Image_Smartphones foto2.jpg',
  'Image_Speakers foto7.jpg'],

  'Games & Toys':['Image_Art Supplies foto3.jpg',
 'Image_Art Supplies foto4.jpg',
 'Image_Art Supplies foto8.jpg',
 'Image_Board Games foto2.jpg',
 'Image_Doll4.jpg',
 'Image_Puzzle5.jpg',
 'Image_Remote Control Cars foto5.jpg',
 'Image_Remote Control Cars foto9.jpg',
 'Image_Stuffed Animals foto7.jpg',
 'Image_Stuffed Animals foto8.jpg'],

 'Jewlery':['Image_Earring4.jpg',
 'Image_Earring6.jpg',
 'Image_Necklace4.jpg',
 'Image_Ring9.jpg',
 'Image_Tie Clips foto3.jpg',
 'Image_Tie Clips foto4.jpg',
 'Image_Watch6.jpg'],

 'Sports':['Image_Baseball Bat foto3.jpg',
 'Image_Basketball foto8.jpg',
 'Image_Basketball1.jpg',
 'Image_Dumbbell2.jpg',
 'Image_Dumbbell3.jpg',
 'Image_Fitness Tracker6.jpg',
 'Image_Football6.jpg',
 'Image_Jump Rope foto5.jpg',
 'Image_Jump Rope foto6.jpg',
 'Image_Running Shoes1.jpg',
 'Image_Running Shoes6.jpg',
 'Image_Running Shoes8.jpg',
 'Image_Swimming Goggles1.jpg',
 'Image_Swimming Goggles3.jpg',
 'Image_Tennis Racket1.jpg',
 'Image_Tennis Racket4.jpg',
 'Image_Yoga Mat foto9.jpg'],

 'Tools':['Image_Circular Saw foto2.jpg',
 'Image_Drill foto2.jpg',
 'Image_Drill foto3.jpg',
 'Image_Drill foto7.jpg',
 'Image_Drill1.jpg',
 'Image_Flashlight foto3.jpg',
 'Image_Hacksaw foto8.jpg',
 'Image_Hammer2.jpg',
 'Image_Hammer7.jpg',
 'Image_Pliers foto7.jpg',
 'Image_Power Sander foto4.jpg',
 'Image_Screwdriver1.jpg',
 'Image_Screwdriver8.jpg'],

 'Flowers':[],
 'Plants':[],
 'Gifts':[],
 'Books':[],
 'Music':[],
 'Sport':[],
 'Stationary':[],
 'Household':[],
 'Cooking':[],
 'Tobacco':[],
 'Event Tickets':[],
 'Ciggars':[],
 'Alcohol':[],
 'Vapes':[],

 "Apparel": [],
 "Beauty": [],
 "Books": [],
 "Electronics": [],
 "Furniture": [],
 "Grocery": [],
 "Health": [],
 "Home": [],
 "Jewelry": [],
 "Kids": [],
 "Kitchen": [],
 "Music": [],
 "Office": [],
 "Outdoor": [],
 "Pet Supplies": [],
 "Shoes": [],
 "Sports": [],
 "Toys": [],
 "Automotive": [],
 "Baby": [],
 "Bags": [],
 "Cameras": [],
 "Computers": [],
 "Crafts": [],
 "Food": [],
 "Garden": [],
 "Musical Instruments": []
 


}

const itemPrice = [
    "10£",
    "20£",
    "30£",
    "40£",
    "50£",
    "30£",
    "20£",
    "10£",
    "50£",
    "10£",
    "20£",
    "30£",
    "40£",
    "50£",
    "30£",
    "20£",
    "10£",
    "50£",
    "10£",
    "20£",
    "30£",
    "40£",
    "50£",
    "30£",
    "20£",
    "10£",
    "50£",
    "10£",
    "20£",
    "30£",
    "40£",
    "50£",
    "30£",
    "20£",
    "10£",
    "50£",
    "30£"
]


box_style =  ""
                +"box-shadow:1px 1px 5px 1px lightgrey;"
                +"border:solid 0px black;"
                // +"opacity:0.3;"
                // +"border-radius: 20px;"
                +"margin: 10px;"
                +"width: 10vw;"
                +"height: 10vw;"
                +"font-size: 1.5vw;"
                +"background-color:"+govColors.lightgrey+";"
  

    
window.onload = function() {
    switchToSlides()

    goToIndex()
    fillCategoryTable()

    init_event_logger()
};


function init_event_logger() {
    var allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].addEventListener('click', logElementInteraction);
    }
}

behavior_log = [];
last_interaction = "0"
function logElementInteraction(event) {
    var timestamp = new Date().toLocaleString();
    var element = event.target;

    if (timestamp != last_interaction) {

        logEntry = timestamp + ' - Element Interacted: ' + element.id;
        behavior_log.push(logEntry);
        console.log(logEntry);
        last_interaction = timestamp
    }
    }

// Navigate 

function switchToSlides() {
    document.getElementById('slideshow').style.display='flex'
}

var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var nextButton = document.getElementById('next-button');


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) { // 32 is the key code for spacebar
        var image = document.getElementById("cover-slide");
        image.parentNode.removeChild(image);
        nextSlide()
    }})
   

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}


data = {}

function showInput(inputID) {
    document.getElementById(inputID).style.display = "block"
}
function saveAndHideInput(inputID, varName) {
    data[varName] = document.getElementById(inputID).value;
    document.getElementById(inputID).style.display = "none";
}

function nextSlide() {
  showSlide(currentSlide + 1);

  console.log(currentSlide)
  if (currentSlide == 1) {
    showInput("text-input")
  }
  if (currentSlide == 2) {
    saveAndHideInput("text-input", "question1_drug")
    showInput("range-slider")
  }
  if (currentSlide == 3) {
    saveAndHideInput("range-slider", "question2_craving")
    console.log(data)
    switchToShop()
  }
}



function switchToShop() {
    document.getElementById('slideshow').style.display='none'
    document.getElementById('next-button').style.display='none'
    
    var tenMinutes = 60 * 10,
    display = document.getElementById('timer');
    startTimer(tenMinutes, display);
}

if(sessionStorage.getItem("counter") === null) {
    sessionStorage.setItem("counter", 500);
  }

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
  
    var interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        clearInterval(interval);
        display.textContent = "Time's up!";
      }

      console.log(duration);
  
    }, 1000);
  }
  

function goToCategory(categoryName, color) {
    fillItemTable(categoryName, color)
    document.getElementById('item-page').style.display='flex'
    document.getElementById('checkout-page').style.display='none'
    document.getElementById('category-page').style.display='none'

    document.getElementById('back-arrow-button').style.visibility='visible'  
}

function goToIndex() {
    hideImage()
    document.getElementById('category-page').style.display='flex'
    document.getElementById('checkout-page').style.display='none'
    document.getElementById('item-page').style.display='none'
 
    document.getElementById('back-arrow-button').style.visibility='hidden'   
}

function goToCheckout() {
    hideImage()
    document.getElementById('checkout-page').style.display='flex'
    document.getElementById('item-page').style.display='none'
    document.getElementById('category-page').style.display='none'
 
    document.getElementById('back-arrow-button').style.visibility='visible'   
}


// Fill tables

function fillCategoryTable() {
    
    categoryNames = Object.keys(categoryItemDict)

    // Get the table body
    var tableBody = document.querySelector("#category-table");

    // Loop through the lists and add rows to the table

    for (var m = 0; m<10; m++) {

        i = 0

        for (var f = 0; i < categoryNames.length; f++) {
            var row = tableBody.insertRow();
    
            for (var g = 0; g < 7 && i < categoryNames.length; g++,i++) {
    
                var color = colorPalette[8]
    
                var categoryCell = row.insertCell();
                // categoryCell.setAttribute("class", "box")
                categoryCell.textContent = categoryNames[i]
                categoryCell.className = "category-box"
                categoryCell.id = "category-box"
                categoryCell.style = box_style + `background-color:${color};` //`border-bottom:solid 7px ${color};` //
                categoryCell.onclick = function(categoryName, color) {
                    return ()=> goToCategory(categoryName, color)
                }(categoryNames[i], color)
            }
        }

    }
}

color_counter = 0;
category_color_dict = {}
function colorBasedOnOrder(categoryName) {
    if (!(categoryName in category_color_dict)) {
        category_color_dict[categoryName] = colorPalette[color_counter];
      }
    color_counter++;
    console.log(category_color_dict)
    return category_color_dict[categoryName]
}


uncovered = []

function fillItemTable(categoryName, color) {
    var path = `images_chosen/${"Jewlery"}/`
    var pathTemp = `images_chosen/${categoryName}/`
    // var path = "assets/images"

    backgroundColor = colorBasedOnOrder(categoryName)
    

    const table = document.querySelector('#item-table'); // select the table element

    var stripe = document.getElementById('item-page')
    
    stripe.style.backgroundColor = `linear-gradient(to bottom right, ${color}, #000000);`


    while (table.firstChild) {
        table.removeChild(table.firstChild); // remove all child elements
    }

    var itemImage = categoryItemDict["Jewlery"]

    // Get the table body
    var tableBody = document.querySelector("#item-table");

    // Loop through the lists and add rows to the table
    for (var f,i = 0; i < 7; f++, i++) {
        var row = tableBody.insertRow();

        for (var g = 0; g < 3; g++) {

            var img = path + itemImage[g % (itemImage.length - 1)];
            var squareID = pathTemp + i + g; 
            var price = itemPrice[g % (itemImage.length - 1)];

            var itemCell = row.insertCell();
            itemCell.className = "item-box";
            itemCell.id = "item-box"
            
            // itemCell.style = box_style + `background-color:${color};` + "font-size:30px;";
            itemCell.style = box_style + `background-color:${backgroundColor};` + "font-size:30px;";

            
            var imageElement = document.createElement("img");
            itemCell.onclick = function (img_arg,squareID_arg, price_arg, imageElement_arg) {
            return () => showItem(img_arg, squareID_arg, price_arg, imageElement_arg);
            }(img,squareID, price, imageElement);  

            console.log(squareID, uncovered);
            if (squareID in uncovered) {
                console.log("Found!")
                imageElement.src = img;
            }

            // imageElement.src = img;
            imageElement.style.width = "100%";
            imageElement.style.height = "100%";
            imageElement.style.display = "block";
            imageElement.style.margin = "auto";
            // imageElement.style.filter = "blur(3px)";

            itemCell.appendChild(imageElement);
        }
    }

    tableBody.style.overflow = "auto";

}


// Show / Hide Item

function showItem(imageSrc, squareID, priceVal, imageElement) {

    var popup = document.querySelector('.popup');
    var popupImage = document.querySelector('#popup-image');
    var price = document.querySelector('#item-price');
    var purchaseButton = document.querySelector('#purchase-button');
    var overlay = document.querySelector('.overlay');

    if (!(squareID in uncovered)) {
        imageElement.src = imageSrc;
        uncovered.push(squareID);
    }

    popupImage.src = imageSrc;
    price.innerHTML = priceVal;

    popup.style.display = 'block';
    overlay.style.display = 'block';

    purchaseButton.onclick = function(img_arg, price_arg) {
    return () => purchase(img_arg, price_arg);
    }(imageSrc, priceVal);

    overlay.onclick = function() {
        hideImage()
        };
}

function hideImage() {
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.overlay');

    popup.style.display = 'none';
    overlay.style.display = 'none';
}




// Purchase Item

function purchase(imageSrc, priceVal) {

    changeTotalPriceBy(-priceVal.slice(0,-1))

    addItemToCart(imageSrc, priceVal)
    hideImage()
}

function changeTotalPriceBy(price) {

    total_price = document.getElementById("total-price").innerHTML
    total_price = parseInt(total_price) + parseInt(price)
    document.getElementById("total-price").innerHTML = total_price
}

var i=0
function addItemToCart(imageSrc, priceVal) {

    var tableBody = document.querySelector("#checkout-table");

    var row = tableBody.insertRow(0); // Add row at index 0 to insert at the top
    var cell = row.insertCell(0); // Add cell at index 0 to insert at the beginning

    var cartItemImage = document.querySelector('#cart-item-image').cloneNode(true);
    var cartItemPrice = document.querySelector('#cart-item-price').cloneNode(true);
    var cartButton = document.querySelector('#remove-button').cloneNode(true);

    cartItemImage.src = imageSrc;
    cartItemPrice.innerHTML = priceVal;

    var id = `item_${i}`;

    var newItem = document.createElement("div");
    cell.setAttribute("id", id);
    newItem.style.display = "flex"; // Set display property to flex
    newItem.style.justifyContent = "space-between"; // Space items evenly along the horizontal axis
    newItem.style.alignItems = "center"; // Align items vertically in the center
    newItem.style.padding = "10px";
    newItem.style.backgroundColor = "azure";
    newItem.appendChild(cartItemImage);
    newItem.appendChild(cartItemPrice);
    newItem.appendChild(cartButton);


    cartButton.onclick = function(cartItem, price, id) {
        return () => removeItemFromCart(cartItem, price, id);
    }(newItem, priceVal, id);

    newItem.appendChild(cartButton);
    cell.appendChild(newItem);

    i++;


}


function removeItemFromCart(cartItem, price, id) {

    changeTotalPriceBy(price)

    // cartItem.display="none"
    document.getElementById(id).style.display="none"
}


function getStyle(oElm, strCssRule){
    var strValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle){
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    }
    else if(oElm.currentStyle){
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
}

    

