const config = {
}

const itemPriceRanges = {
    "BBQ": {
        "BBQ1": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ2": {
            "minimum": 30,
            "maximum": 35
        },
        "BBQ3": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ4": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ5": {
            "minimum": 60,
            "maximum": 70
        },
        "BBQ6": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ7": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ8": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ9": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ10": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ11": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ12": {
            "minimum": 35,
            "maximum": 40
        },
        "BBQ13": {
            "minimum": 70,
            "maximum": 80
        },
        "BBQ14": {
            "minimum": 30,
            "maximum": 35
        },
        "BBQ15": {
            "minimum": 20,
            "maximum": 25
        },
        "BBQ16": {
            "minimum": 70,
            "maximum": 80
        },
        "BBQ17": {
            "minimum": 70,
            "maximum": 80
        },
        "BBQ18": {
            "minimum": 70,
            "maximum": 80
        },
        "BBQ19": {
            "minimum": 70,
            "maximum": 80
        },
        "BBQ20": {
            "minimum": 20,
            "maximum": 30
        },
        "BBQ21": {
            "minimum": 70,
            "maximum": 80
        },
        "BBQ22": {
            "minimum": 30,
            "maximum": 40
        },
        "BBQ23": {
            "minimum": 30,
            "maximum": 40
        },
        "BBQ24": {
            "minimum": 70,
            "maximum": 80
        },
        "BBQ25": {
            "minimum": 30,
            "maximum": 40
        },
        "BBQ26": {
            "minimum": 30,
            "maximum": 40
        },
        "BBQ27": {
            "minimum": 50,
            "maximum": 60
        },
        "BBQ28": {
            "minimum": 30,
            "maximum": 35
        },
        "BBQ29": {
            "minimum": 70,
            "maximum": 80
        }
    },
    "Yoga": {
        "Yoga1": {
            "minimum": 15,
            "maximum": 20
        },
        "Yoga2": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga3": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga4": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga5": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga6": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga7": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga8": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga9": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga10": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga11": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga12": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga13": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga14": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga15": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga16": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga17": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga18": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga19": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga20": {
            "minimum": 30,
            "maximum": 40
        },
        "Yoga21": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga22": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga23": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga24": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga25": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga26": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga27": {
            "minimum": 10,
            "maximum": 15
        },
        "Yoga28": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga29": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga30": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga31": {
            "minimum": 20,
            "maximum": 25
        },
        "Yoga32": {
            "minimum": 10,
            "maximum": 15
        }
    }
}

const pathToCategories = './assets/categories/'


const existingCategories = [
    "Yoga",
    "BBQ"
]

const nonDrugCategories = [
    "Aftershaves",
    "Kettles",
    "Alarm clocks",
    "Kitchen Aids",
    "Badminton",
    "Knife Sets",
    "Bags Men",
    "Lego adults",
    "Barbie",
    "Lego kids",
    "Baskets",
    "Lighters",
    "Bathrobes",
    "Make up",
    "BBQ",
    "Miniature cars",
    "Binoculars",
    "Mugs",
    "Board Games",
    "Navigators",
    "Books Baking",
    "Party Accessories",
    "Books Biographies",
    "Penknives",
    "Books Cooking",
    "Perfumes",
    "Books Non-Fiction",
    "Plants",
    "Books Travel",
    "Playmobil",
    "Boxing",
    "Puzzles",
    "Camping Equipment",
    "Rucksacks",
    "Car Accessories",
    "Rugby",
    "Cat Accessories",
    "Running",
    "Chocolates",
    "Saucepan Sets",
    "Cleaning",
    "Shavers",
    "Coffee Machines",
    "Sport Bags",
    "Coffee Pots",
    "Stationary",
    "Computing Accessories",
    "Storage",
    "Cricket",
    "Sunglasses Men",
    "Cuddly Toys",
    "Sunglasses Women",
    "Cushions",
    "Swatch Watches",
    "Dinner Sets",
    "Swimming",
    "DIQ",
    "Teapots",
    "Dog Accessories",
    "Tennis",
    "Fishing",
    "Toaster",
    "Fitness",
    "Tooth brush",
    "Flowers",
    "Towels",
    "Football Merchandise",
    "Toys Boys",
    "Gaming",
    "Toys Girls",
    "Garden",
    "Travel Bags",
    "Gift Sets Men",
    "Travel Mugs",
    "Gift Sets Women",
    "Trimmers",
    "Glassware",
    "Umbrellas",
    "Golf",
    "Vases",
    "Hair Dryer",
    "Video Games",
    "Handbags",
    "Wallets Men",
    "Harley Davidson",
    "Wallets Women",
    "Headphones",
    "Water Bottles",
    "Jewellery",
    "Webcams",
    "Yoga"
];

const drugCategories = [
    "Cannabis",
    "Cannabis products",
    "Cigarettes",
    "Cigars",
    "Cocaine",
    "Crack",
    "Ecstasy",
    "Hashish",
    "Alcopops",
    "Beer",
    "Brandy",
    "Champagne",
    "Cider",
    "Cocktails",
    "Gin",
    "Prosecco",
    "Red wine",
    "Rum",
    "Heroin",
    "Hookah",
    "Pipers",
    "Vodka",
    "Rolling Tobacco",
    "Whisky",
    "White wine",
    "Vapin"
]

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
    "#BCBCBC"]



const govColors = {
    green: "#00703C",
    lightgrey: "#F3F2F1",
    blue: "#1D70B8",
    black: "#0B0C0C"
}

const amazonColors = {
    darkblue: "#131921",
    orange: "#FEBD69"
}


box_style = ""
    + "box-shadow:1px 1px 5px 1px lightgrey;"
    + "border:solid 0px black;"
    + "margin: 10px;"
    + "width: 10vw;"
    + "height: 10vw;"
    + "font-size: 1.5vw;"
    + "background-color:" + govColors.lightgrey + ";"


//////////////////////////////////////////////////////////////////////////////////////// 
// 
// HELPER FUNCTIONS
// 
//////////////////////////////////////////////////////////////////////////////////////// 

// use config imageNameFormat string and replace category and number with actual values
function getImageName(category, number) {
    return category + " (" + number + ").jpg"
}

// use config imageExcelFormat string and replace category and number with actual values

function getImageExcelName(category, number) {
    return `${category}${number}`
}

// use config excelNameFormat string and replace category with actual value

function getExcelName(category) {
    return `${category} costs.xlsx`
}


function toPoundString(number) {
    return "£" + number.toString();
}



// function to read excel file from directory and store in json (not using XLSX)


//////////////////////////////////////////////////////////////////////////////////////// 
// 
// LOGGER AND INITIALIZATION
// 
//////////////////////////////////////////////////////////////////////////////////////// 



window.onload = function () {
    switchToSlides()

    goToIndex()
    fillCategoryTable()
    initEventLogger()
};

function submitInput() {
    document.getElementById("input-box").style.display = "none";
    document.getElementById("white-slide").style.display = "none";
}


function initEventLogger() {
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
    document.getElementById('slideshow').style.display = 'flex'
}

var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var nextButton = document.getElementById('next-button');


//////////////////////////////////////////////////////////////////////////////////////// 
// 
// SLIDES AND QUESTIONS
// 
//////////////////////////////////////////////////////////////////////////////////////// 


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) { // 13 is the key code for enter
        var image = document.getElementById("cover-slide");
        image.parentNode.removeChild(image);
        nextSlide();
    }
})


function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}


data = {}

function showInput(inputID) {
    document.getElementById(inputID).style.display = "block"
}
function hideInput(inputID) {
    document.getElementById(inputID).style.display = "none";
}
function saveInput(inputID, varName) {
    data[varName] = document.getElementById(inputID).value;
}



function nextSlide() {
    showSlide(currentSlide + 1);

    console.log(currentSlide)
    if (currentSlide == 1) {
        showInput("text-input")
    }
    if (currentSlide == 2) {
        saveInput("text-input", "question1_drug")
        hideInput("text-input")
        showInput("range-slider")
    }
    if (currentSlide == 3) {
        saveInput("range-slider", "question2_craving")
    }
    if (currentSlide == 4) {
        saveInput("range-slider", "question3_craving_group")
        hideInput("range-slider")
    }
    if (currentSlide == 7) {
        switchToShop()
    }
}





//////////////////////////////////////////////////////////////////////////////////////// 
// 
// SHOP
// 
//////////////////////////////////////////////////////////////////////////////////////// 


function switchToShop() {
    document.getElementById('slideshow').style.display = 'none'
    document.getElementById('next-button').style.display = 'none'

    var tenMinutes = 60 * 15,
        display = document.getElementById('timer');
    startTimer(tenMinutes, display);
}

if (sessionStorage.getItem("counter") === null) {
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
    document.getElementById('item-page').style.display = 'flex'
    document.getElementById('checkout-page').style.display = 'none'
    document.getElementById('category-page').style.display = 'none'

    document.getElementById('back-arrow-button').style.visibility = 'visible'
}

function goToIndex() {
    hideImage()
    document.getElementById('category-page').style.display = 'flex'
    document.getElementById('checkout-page').style.display = 'none'
    document.getElementById('item-page').style.display = 'none'

    document.getElementById('back-arrow-button').style.visibility = 'hidden'
}

function goToCheckout() {
    hideImage()
    document.getElementById('checkout-page').style.display = 'flex'
    document.getElementById('item-page').style.display = 'none'
    document.getElementById('category-page').style.display = 'none'
    document.getElementById('back-arrow-button').style.visibility = 'visible'
}


// Fill tables

function fillCategoryTable() {


    // Get the table body
    var tableBody = document.querySelector("#category-table");

    // Loop through the lists and add rows to the table

    for (var m = 0; m < 10; m++) {

        i = 0

        for (var f = 0; i < nonDrugCategories.length; f++) {
            var row = tableBody.insertRow();

            for (var g = 0; g < 7 && i < nonDrugCategories.length; g++, i++) {

                var color = colorPalette[8]

                var categoryCell = row.insertCell();
                // categoryCell.setAttribute("class", "box")
                categoryCell.textContent = nonDrugCategories[i]
                categoryCell.className = "category-box"
                categoryCell.id = "category-box"
                categoryCell.style = box_style + `background-color:${color};` //`border-bottom:solid 7px ${color};` //
                categoryCell.onclick = function (categoryName, color) {
                    return () => goToCategory(categoryName, color)
                }(nonDrugCategories[i], color)

                categoryCell.onmouseover = function () {
                    this.style.backgroundColor = govColors.blue;
                }
                categoryCell.onmouseout = function () {
                    this.style.backgroundColor = color;
                }
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
    //get divs
    var table = document.querySelector("#item-table");
    var stripe = document.querySelector('#item-page')

    while (table.firstChild) {
        table.removeChild(table.firstChild); // remove all child elements 
    }

    //get Images from Category - with temp
    var categoryNameTemp ="Yoga"
    if (existingCategories.includes(categoryName)) {
        categoryNameTemp = categoryName
    }
    var path = pathToCategories + categoryName + "/"
    var pathTemp = pathToCategories + categoryNameTemp + "/"

    //get correct colors
    backgroundColor = colorBasedOnOrder(categoryName)
    stripe.style.backgroundColor = `linear-gradient(to bottom right, ${color}, #000000);`


    // Loop through the lists and add rows to the table

    for (var i = 1; i < 7; i++) {
        var row = table.insertRow();

        for (var g = 0; g < 7; g++) {

            try {
                var imgNumber = i * 7 - 6 + g;
                var img = pathTemp + getImageName(categoryNameTemp, imgNumber);

                var squareID = pathTemp + i + g;
                var price = itemPriceRanges[categoryNameTemp][getImageExcelName(categoryNameTemp, imgNumber)]["maximum"];

                var itemCell = row.insertCell();
                itemCell.className = "item-box";
                itemCell.id = "item-box"

                itemCell.style = box_style + `background-color:${backgroundColor};` + "font-size:30px;";

                var imageElement = document.createElement("img");
                itemCell.onclick = function (img_arg, squareID_arg, price_arg, imageElement_arg) {
                    return () => showItem(img_arg, squareID_arg, price_arg, imageElement_arg);
                }(img, squareID, price, imageElement);

                if (uncovered.includes(squareID)) {
                    imageElement.src = img;
                }
                itemCell.onmouseover = function () {
                    this.style.backgroundColor = govColors.blue;
                }
                itemCell.onmouseout = function () {
                    this.style.backgroundColor = backgroundColor;
                }

                // imageElement.src = img;
                imageElement.style.width = "100%";
                imageElement.style.height = "100%";
                imageElement.style.display = "block";
                imageElement.style.margin = "auto";


                // imageElement.style.filter = "blur(7px)";

                itemCell.appendChild(imageElement);
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    table.style.overflow = "auto";

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

    priceValString = toPoundString(priceVal);

    popupImage.src = imageSrc;
    price.innerHTML = priceValString;

    popup.style.display = 'block';
    overlay.style.display = 'block';

    purchaseButton.onclick = function (img_arg, price_arg) {
        return () => purchase(img_arg, price_arg);
    }(imageSrc, priceVal);

    overlay.onclick = function () {
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

    changeTotalPriceBy(-priceVal)

    addItemToCart(imageSrc, priceVal)
    hideImage()
}

function changeTotalPriceBy(price) {

    total_price = document.getElementById("total-price").innerHTML
    total_price = parseInt(total_price) + price
    document.getElementById("total-price").innerHTML = total_price
}

var i = 0
function addItemToCart(imageSrc, priceVal) {

    var tableBody = document.querySelector("#checkout-table");

    var row = tableBody.insertRow(0); // Add row at index 0 to insert at the top
    var cell = row.insertCell(0); // Add cell at index 0 to insert at the beginning

    var cartItemImage = document.querySelector('#cart-item-image').cloneNode(true);
    var cartItemPrice = document.querySelector('#cart-item-price').cloneNode(true);
    var cartButton = document.querySelector('#remove-button').cloneNode(true);

    priceValString = toPoundString(priceVal);


    cartItemImage.src = imageSrc;
    cartItemPrice.innerHTML = priceValString;


    var id = `item_${i}`;

    var newItem = document.createElement("div");
    cell.setAttribute("id", id);
    newItem.style.display = "flex"; // Set display property to flex
    newItem.style.justifyContent = "space-between"; // Space items evenly along the horizontal axis
    newItem.style.alignItems = "center"; // Align items vertically in the center
    newItem.style.padding = "10px";
    newItem.style.backgroundColor = "azure";
    newItem.style.border = "1px solid black";

    newItem.appendChild(cartItemImage);
    newItem.appendChild(cartItemPrice);
    newItem.appendChild(cartButton);


    cartButton.onclick = function (cartItem, price, id) {
        return () => removeItemFromCart(cartItem, price, id);
    }(newItem, priceVal, id);

    newItem.appendChild(cartButton);
    cell.appendChild(newItem);

    i++;
}

function removeItemFromCart(cartItem, price, id) {

    changeTotalPriceBy(price)

    // cartItem.display="none"
    document.getElementById(id).style.display = "none"
}



