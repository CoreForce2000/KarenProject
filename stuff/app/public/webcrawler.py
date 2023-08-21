
# Define the category you want to download images for
path = "assets/products/"
category = "cats"

directory = path + category

import os
import requests
from bs4 import BeautifulSoup


categories = {
    "Apparel": [
        "T-shirts",
        "Jeans",
        "Dresses",
        "Sweaters",
        "Jackets",
        "Hoodies",
        "Pants",
        "Shorts",
        "Skirts",
        "Swimwear",
        "Underwear",
        "Socks",
        "Hats",
        "Scarves",
        "Gloves",
        "Belts",
        "Shoes",
        "Boots",
        "Sandals",
        "Sneakers"
    ],
    "Beauty": [
        "Skincare",
        "Makeup",
        "Haircare",
        "Fragrance",
        "Bath and Body",
        "Nail Care",
        "Tools and Accessories",
        "Men's Grooming",
        "Sun Care",
        "Self-Tanners",
        "Lip Care",
        "Eye Care",
        "Serums and Treatments",
        "Cleansers",
        "Toners",
        "Moisturizers",
        "Masks",
        "Exfoliators",
        "Body Lotions",
        "Hand Creams"
    ],
    "Books": [
        "Fiction",
        "Non-fiction",
        "Children's Books",
        "Young Adult",
        "Mystery and Thrillers",
        "Romance",
        "Science Fiction and Fantasy",
        "Biographies and Memoirs",
        "History",
        "Politics and Social Sciences",
        "Art and Photography",
        "Cookbooks",
        "Travel",
        "Religion and Spirituality",
        "Self-Help",
        "Business and Money",
        "Science",
        "Health and Fitness",
        "Parenting and Relationships",
        "Education and Teaching"
    ],
    "Electronics": [
        "Smartphones",
        "Laptops",
        "Tablets",
        "Desktops",
        "TVs",
        "Headphones",
        "Speakers",
        "Cameras",
        "Gaming Consoles",
        "Smart Home Devices",
        "Wearables",
        "Printers",
        "Monitors",
        "External Hard Drives",
        "Keyboards",
        "Mice",
        "Routers",
        "Modems"],

     "Furniture": ["Sofa", "Bed", "Dining Table", "Coffee Table", "Bookshelf", "TV Stand", "Armchair", "Ottoman", "Recliner", "End Table", "Wardrobe", "Chest of Drawers", "Desk", "Futon", "Sectional Sofa", "Bean Bag Chair", "Bunk Bed", "Rocking Chair", "Bar Stool", "Accent Chair"],
    "Games and Toys": ["Board Games", "Puzzles", "Action Figures", "Dolls", "Building Blocks", "Remote Control Cars", "Video Games", "Card Games", "Stuffed Animals", "Outdoor Games", "Bikes", "Scooters", "Trampolines", "Play Tents", "Ride-On Toys", "Educational Toys", "Musical Instruments", "Dress-Up Clothes", "Art Supplies", "Science Kits"],
    "Jewelry": ["Necklace", "Earrings", "Bracelet", "Ring", "Anklet", "Brooch", "Charm", "Cufflinks", "Pendant", "Bangle", "Watch", "Body Jewelry", "Toe Rings", "Hair Accessories", "Tie Clips", "Money Clips", "Keychains", "Cuff Bracelet", "Collar Necklace", "Choker"],
    "Sports": ["Basketball", "Football", "Soccer Ball", "Tennis Racket", "Golf Clubs", "Baseball Bat", "Hockey Stick", "Skateboard", "Snowboard", "Skiis", "Roller Skates", "Inline Skates", "Yoga Mat", "Resistance Bands", "Jump Rope", "Weight Set", "Treadmill", "Exercise Bike", "Punching Bag", "Boxing Gloves"],
    "Tools and Hardware": ["Drill", "Screwdriver Set", "Hammer", "Wrench Set", "Pliers", "Tape Measure", "Level", "Circular Saw", "Jigsaw", "Table Saw", "Power Sander", "Air Compressor", "Ladder", "Work Gloves", "Safety Glasses", "Flashlight", "Utility Knife", "Toolbox", "Hacksaw", "Chains"]
}


def download_image(image_url, image_name):
    response = requests.get(image_url, stream=True)
    if response.status_code == 200:
        with open(image_name, 'wb') as out_file:
            out_file.write(response.content)
    else:
        print("Unable to download image")

def scrape_images(category, item, num_images):
    # url = f'https://unsplash.com/s/photos/{item}'
    url = f'https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&tab=all&SearchText={item}&spm=a2700.product_home_l0.fixedSearch.search'

    dir = f'images/{category}'

    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    images = soup.find_all('img')

    print([i["src"] for i in images])

    if not os.path.exists(dir):
        os.makedirs(dir)

    i = 0
    for image in images[:num_images]:

        try:
            image_url = image['src']

            download_image(image_url, f'{dir}/Image_{item}' + str(i) + '.jpg')
            i += 1
        except Exception as e:
            print(f"Error - {e}")

# for category, item_list in categories.items():
#     for item in item_list:
#         scrape_images(category,item+" foto", 10)
        # print(category, item)