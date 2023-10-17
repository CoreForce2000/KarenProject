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

const pathToCategories = 'assets/categories/'


const existingCategories = [
    "Yoga",
    "BBQ"
]

const nonDrugCategories = [
        "Aftershaves",
        "Kettles",
        "Alarm\nClocks",
        "Kitchen\nAids",
        "Badminton",
        "Knife\nSets",
        "Bags\nMen",
        "Lego\nAdults",
        "Barbie",
        "Lego\nKids",
        "Baskets",
        "Lighters",
        "Bathrobes",
        "Make\nUp",
        "Bbq",
        "Miniature\nCars",
        "Binoculars",
        "Mugs",
        "Board\nGames",
        "Navigators",
        "Books\nBaking",
        "Party\nAccessories",
        "Books\nBiographies",
        "Penknives",
        "Books\nCooking",
        "Perfumes",
        "Books\nNon-fiction",
        "Plants",
        "Books\nTravel",
        "Playmobil",
        "Boxing",
        "Puzzles",
        "Camping\nEquipment",
        "Rucksacks",
        "Car\nAccessories",
        "Rugby",
        "Cat\nAccessories",
        "Running",
        "Chocolates",
        "Saucepan\nSets",
        "Cleaning",
        "Shavers",
        "Coffee\nMachines",
        "Sport\nBags",
        "Coffee\nPots",
        "Stationary",
        "Computing\nAccessories",
        "Storage",
        "Cricket",
        "Sunglasses\nMen",
        "Cuddly\nToys",
        "Sunglasses\nWomen",
        "Cushions",
        "Swatch\nWatches",
        "Dinner\nSets",
        "Swimming",
        "Diq",
        "Teapots",
        "Dog\nAccessories",
        "Tennis",
        "Fishing",
        "Toaster",
        "Fitness",
        "Tooth\nBrush",
        "Flowers",
        "Towels",
        "Football\nMerchandise",
        "Toys\nBoys",
        "Gaming",
        "Toys\nGirls",
        "Garden",
        "Travel\nBags",
        "Gift-Sets\nMen",
        "Travel\nMugs",
        "Gift-Sets\nWomen",
        "Trimmers",
        "Glassware",
        "Umbrellas",
        "Golf",
        "Vases",
        "Hair\nDryer",
        "Video\nGames",
        "Handbags",
        "Wallets\nMen",
        "Harley\nDavidson",
        "Wallets\nWomen",
        "Headphones",
        "Water\nBottles",
        "Jewellery",
        "Webcams",
        "Yoga"
];

const drugCategories = [
    "Cannabis",
    "Cannabis\nProducts",
    "Cigarettes",
    "Cigars",
    "Ecstasy",
    "Hashish",
    "Hookah",
    "Pipers",
    "Rolling\nTobacco",
    "Vapin"
]

const alcoholCategories = [
    "Alcopops",
    "Beer",
    "Brandy",
    "Champagne",
    "Cider",
    "Cocktails",
    "Gin",
    "Prosecco",
    "Red\nWine",
    "Vodka",
    "Rum",
    "Whisky",
    "White Wine",
]

const initialScreenCategories = [
    "Cocaine",
    "Crack",
    "Heroin",
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap elements at i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function pseudorandomize(nonDrugCategories, drugCategories, alcoholCategories, initialScreenCategories) {
    let mixedList = [];
    let totalLength = 300; // or any other number depending on how long you want the mixedList to be
    
    // combine arrays initialScreenCategoriesRand and drugCategoriesRand

    let drugCounter = 0;
    let alcoholCounter = 0;
    let nonDrugCounter = 0;

    
    let drugAndInitialScreenCategoriesRand = shuffleArray(initialScreenCategories).concat(shuffleArray(drugCategories));
    let alcoholCategoriesRand = shuffleArray(alcoholCategories);
    let nonDrugCategoriesRand = shuffleArray(nonDrugCategories);
    
    for (let i = 0; i < totalLength; i++) {


        if (i % 6 === 0) {
            if (drugCounter < drugAndInitialScreenCategoriesRand.length) {
                mixedList.push(drugAndInitialScreenCategoriesRand[drugCounter++]);
            }
        }
        
        if (i % 6 === 2) {
            if (alcoholCounter < alcoholCategoriesRand.length) {
                mixedList.push(alcoholCategoriesRand[alcoholCounter++]);
            }
        }
                
        if (nonDrugCounter < nonDrugCategoriesRand.length) {
            mixedList.push(nonDrugCategoriesRand[nonDrugCounter++]);
        }
        
        // Reset counters when we've gone through all items in each category
        if (drugCounter === drugAndInitialScreenCategoriesRand.length) {
            
            drugAndInitialScreenCategoriesRand = shuffleArray(initialScreenCategories).concat(shuffleArray(drugCategories));
            drugCounter = 0;
        }
        if (alcoholCounter === alcoholCategoriesRand.length){

            alcoholCategoriesRand = shuffleArray(alcoholCategories);
            alcoholCounter = 0;

        } 
        if (nonDrugCounter === nonDrugCategoriesRand.length){

            nonDrugCategoriesRand = shuffleArray(nonDrugCategories);
            nonDrugCounter = 0;

        } 
    }
    
    return mixedList;
}

// Example usage:

let mixedList = pseudorandomize(nonDrugCategories, drugCategories, alcoholCategories, initialScreenCategories);
console.log(mixedList);




// function to read excel file from directory and store in json (not using XLSX)


//////////////////////////////////////////////////////////////////////////////////////// 
// 
// LOGGER AND INITIALIZATION
// 
//////////////////////////////////////////////////////////////////////////////////////// 


document.getElementById('vas').addEventListener('click', function(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;

    let indicator = document.querySelector('.indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.id ='indicator';

        e.target.appendChild(indicator);
    }
    indicator.style.left = `${x}px`;
});


window.onload = function () {

    goToIndex()
    fillCategoryTable()
    initEventLogger()
};



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


//////////////////////////////////////////////////////////////////////////////////////// 
// 
// SLIDES AND QUESTIONS
// 
//////////////////////////////////////////////////////////////////////////////////////// 

function submitInput() {
    document.getElementById("input-box").style.display = "none";
    document.getElementById("white-slide").style.display = "none";
    switchToSlides();
}


var currentSlide = 0;

function switchToSlides() {
    document.getElementById('slideshow').style.display = 'flex'
    document.getElementById('slideshow').style.backgroundColor = 'black'
    document.getElementById('next-button').style.display = 'block'
    document.getElementById('slide').style.display = 'flex'
    document.getElementById('shop-content').style.display = 'none'
    nextSlide()
}


const slideImageOrder = [
    "assets/slides/phase1/Slide1.png",
    "assets/slides/phase1/Slide2.png",
    "assets/slides/phase1/Slide3.png",
    "assets/slides/phase1/Slide4.png",
    "assets/slides/Cover.png",
    "assets/slides/phase1/Slide5.png",
    "assets/slides/phase1/Slide6.png",
    "assets/slides/phase1/Slide7.png",
    "assets/slides/phase1/Slide8.png",
    "assets/slides/Cover.png",
    "assets/slides/phase2/Slide1.png"
]


data = {}

function showInput(inputID) {
    document.getElementById(inputID).style.display = "block"
    document.getElementById("input-container").style.visibility = "visible"
}
function hideInput(inputID) {
    document.getElementById(inputID).style.display = "none";    
    document.getElementById("input-container").style.visibility = "hidden"
}
function saveInput(inputID, varName) {
    data[varName] = document.getElementById(inputID).value;
}



function nextSlide() {
    console.log(currentSlide)
    console.log(slideImageOrder[currentSlide])
    document.getElementById('slide').style.backgroundImage = `url(${slideImageOrder[currentSlide]})`

    let indicator = document.querySelector('.indicator');
    if (indicator) {
        indicator.remove()
    }

    currentSlide = currentSlide + 1;

    if (currentSlide == 1) {
        showInput("q1_checkboxes")
    }

    if (currentSlide == 2) {        
        saveInput("q1_checkboxes", "question1_store")
        hideInput("q1_checkboxes")
        showInput("text-input")
    }
    if (currentSlide == 3) {
        saveInput("text-input", "question2_drug")
        hideInput("text-input")
        showInput("range-slider")
    }
    if (currentSlide == 4) {
        saveInput("range-slider", "question2_craving")
    }
    if (currentSlide == 5) {
        saveInput("range-slider", "question3_craving_group")
        hideInput("range-slider")
    }
    if (currentSlide == 10) {
        document.getElementById("white-slide").style.display = "none";
        switchToShop()
    }

    if (currentSlide == 11) {
        document.getElementById("next-button").style.display = "none";
    }


}




var runtimeVariables = {
    timerPaused : false,
    uncovered : [],
    categoriesClicked: []
}




//////////////////////////////////////////////////////////////////////////////////////// 
// 
// SHOP
// 
//////////////////////////////////////////////////////////////////////////////////////// 

shop_display_property = 'inline-flex'


function switchToShop() {
    document.getElementById('shop-content').style.display = shop_display_property
    document.getElementById('slideshow').style.display = 'none'
    document.getElementById('next-button').style.display = 'none'

    startTimer(60 * 15);
}

if (sessionStorage.getItem("counter") === null) {
    sessionStorage.setItem("counter", 500);
}

function pauseTimer() {
    if (!runtimeVariables.timerPaused) {
        runtimeVariables.timerPaused = true;
    }
}

function resumeTimer() {
    if (runtimeVariables.timerPaused) {
        runtimeVariables.timerPaused = false;
    }

}

function startTimer(duration) {
    timerDiv = document.getElementById('timer');

    var timer = duration, minutes, seconds;

    var interval = setInterval(function () {

        console.log(`Timer: ${runtimeVariables.timerPaused}`)

        if(!runtimeVariables.timerPaused) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            timerDiv.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                clearInterval(interval);
                switchToSlides()
            }
        }
    }, 1000);
}


function goToCategory(categoryName, color) {
    resumeTimer()
    fillItemTable(categoryName, color)
    document.getElementById('item-page').style.display = shop_display_property
    document.getElementById('checkout-page').style.display = 'none'
    document.getElementById('category-page').style.visibility = 'hidden'

    document.getElementById('back-arrow-button').style.visibility = 'visible'
}

function goToIndex() {
    resumeTimer()
    hideImage()
    document.getElementById('category-page').style.visibility = "visible"
    document.getElementById('checkout-page').style.display = 'none'
    document.getElementById('item-page').style.display = 'none'

    document.getElementById('back-arrow-button').style.visibility = 'hidden'
}

function goToCheckout(showBackButton = true) {
    pauseTimer()
    hideImage()
    document.getElementById('checkout-page').style.display = 'block'
    document.getElementById('item-page').style.display = 'none'
    document.getElementById('category-page').style.visibility = 'hidden'
    if(showBackButton) {
        document.getElementById('back-arrow-button').style.visibility = 'visible'
    }


}


// Fill tables

function fillCategoryTable() {


    // Get the table body
    var tableBody = document.querySelector("#category-table");

    // Loop through the lists and add rows to the table

    var randomizedCategories = pseudorandomize(nonDrugCategories, drugCategories, alcoholCategories, initialScreenCategories);

    for (var m = 0; m < 10; m++) {

        i = 0

        for (var f = 0; i < randomizedCategories.length; f++) {
            var row = tableBody.insertRow();

            for (var g = 0; g < 7 && i < randomizedCategories.length; g++, i++) {

                var color = colorPalette[8]
                var categoryTileNumber = i * 7 - 6 + g;
                var categoryTileID = "category-box-"+categoryTileNumber;

                var categoryCell = row.insertCell();
                categoryCell.setAttribute("id", categoryTileID)
                categoryCell.textContent = randomizedCategories[i]
                categoryCell.className = "box-style"
                categoryCell.id = categoryTileID;
                categoryCell.style.backgroundColor = color //`border-bottom:solid 7px ${color};` //
                

                // var beenClicked = ()=> categoryCell.style.backgroundColor = govColors.blue;


                categoryCell.onclick = function (categoryName, color, categoryCell) {

                    return () => {

                        categoryCell
                            .style.backgroundColor = "rgb(227, 110, 150)"

                        categoryCell
                            .style.textDecoration = "underline"

                        categoryCell.value = "rgb(227, 110, 150)"


                        goToCategory(categoryName, color);
                    }
                
                }(randomizedCategories[i], color, categoryCell)

                categoryCell.onmouseover = function () {
                    this.value = this.style.backgroundColor;
                    this.style.backgroundColor = govColors.blue;

                }
                categoryCell.onmouseout = function () {
                    console.log(this.value)
                    this.style.backgroundColor = this.value;
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
    return category_color_dict[categoryName]
}



function setDivImage(div, pathToImage) {
    url =`url("${pathToImage}")`
    div.style.backgroundImage = url;

    div.style.backgroundSize = "contain";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundColor = "white";
    div.style.backgroundPosition = "center center";
}


function fillItemTable(categoryName, color) {
    //get divs
    var table = document.querySelector("#item-table");

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


    // Loop through the lists and add rows to the table

    for (var i = 1; i < 70; i++) {
        var row = table.insertRow();

        for (var g = 0; g < 7; g++) {

            try {
                var imgNumber = (i * 7 - 6 + g) % (Object.keys(itemPriceRanges[categoryNameTemp]).length-1) +1;
                // var imgNumberFull = (i * 7 - 6 + g) 

                var squareUniquePath = pathTemp + i + g;

                var pathToImage = pathTemp + getImageName(categoryNameTemp, imgNumber);
                var price = itemPriceRanges[categoryNameTemp][getImageExcelName(categoryNameTemp, imgNumber)]["maximum"];

                var itemCell = row.insertCell();
                itemCell.className = "box-style";
                itemCell.id = "item-box-" + imgNumber

                itemCell.style.backgroundColor = backgroundColor

                itemCell.onclick = function (pathToImage_arg, squareID_arg, price_arg, itemCell_arg) {
                    return () => showItem(pathToImage_arg, squareID_arg, price_arg, itemCell_arg);
                }(pathToImage, squareUniquePath, price, itemCell);

                if (runtimeVariables.uncovered.includes(squareUniquePath)) {
                    setDivImage(itemCell, pathToImage)
                }
                itemCell.onmouseover = function () {
                    if(this.style.backgroundColor != "white") { 
                        this.style.backgroundColor = govColors.blue;
                    }
                }
                itemCell.onmouseout = function () {
                    if(this.style.backgroundColor != "white") {
                        this.style.backgroundColor = backgroundColor;
                    }
                }


            }
            catch (err) {
                console.log(err)
            }

        }
    
    }

    table.style.overflow = "auto";

}


// Show / Hide Item


function showItem(pathToImage, squareUniquePath, priceVal, itemCell) {

    var popup = document.querySelector('.popup');
    var popupImage = document.querySelector('#popup-image');
    var purchaseButton = document.querySelector('#purchase-button');
    var overlay = document.querySelector('.overlay');
    var overlay = document.querySelector('.overlay');

    if (!(squareUniquePath in runtimeVariables.uncovered)) {
        setDivImage(itemCell, pathToImage)
        runtimeVariables.uncovered.push(squareUniquePath);
    }

    priceValString = toPoundString(priceVal);

    popupImage.src = pathToImage;

    popup.style.display = 'block';
    overlay.style.display = 'block';

    purchaseButton.onclick = function (pathToImage_arg, price_arg) {
        return () => purchase(pathToImage_arg, price_arg);
    }(pathToImage, priceVal);

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
    var row_id = `checkout_row_${i}`;

    var newItem = document.createElement("div");
    cell.setAttribute("id", id);
    row.setAttribute("id", row_id);
    newItem.className = "cart-item";
    // cell.id = "category-box";
    newItem.style.display = "flex"; // Set display property to flex
    // newItem.style.justifyContent = "space-between"; // Space items evenly along the horizontal axis
    // newItem.style.alignItems = "center"; // Align items vertically in the center
    // newItem.style.padding = "10px";
    // newItem.style.backgroundColor = "azure";
    // newItem.style.border = "1px solid black";

    newItem.appendChild(cartItemImage);
    newItem.appendChild(cartItemPrice);
    newItem.appendChild(cartButton);


    cartButton.onclick = function (cartItem, price, row_id) {
        return () => removeItemFromCart(cartItem, price, row_id);
    }(newItem, priceVal, row_id);

    newItem.appendChild(cartButton);
    cell.appendChild(newItem);

    i++;
}

function removeItemFromCart(cartItem, price, id) {

    changeTotalPriceBy(price)

    // cartItem.display="none"
    document.getElementById(id).remove();
}



function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
