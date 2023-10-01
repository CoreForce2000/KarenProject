import pandas as pd
import os
import json

# Function to read an Excel file and convert to JSON
def excel_to_json(excel_file):
    try:
        # Read the Excel file
        df = pd.read_excel(excel_file)

        # Convert DataFrame to a list of dictionaries
        data = df.set_index("Item").to_dict(orient="index")


        return data
    except Exception as e:
        print(f"Error reading {excel_file}: {str(e)}")
        return None


# Main function
if __name__ == "__main__":
    output_file = "output.json"

    all_data = {}

    categories = ["BBQ", "Yoga"]

    for c in categories:
        all_data[c] = excel_to_json(f"C:/Users/Maxime/Documents/GitHub/ShoppingTask/KarenProject/app/public/assets/categories/{c}/{c} costs.xlsx")



    # Write the JSON data to a text file
    with open(output_file, 'w') as json_file:
        json.dump(all_data, json_file, indent=4)

    print(f"Data from {len(all_data)} Excel files has been stored in {output_file}.")
