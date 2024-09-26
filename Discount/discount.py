def calculate_discount(price, discount_percent):
    """
    Calculates the final price after applying a discount.
    
    Parameters:
    price (float): The original price of the item.
    discount_percent (float): The discount percentage to be applied.

    Returns:
    float: The final price after applying the discount, or the original price if the discount is less than 20%.
    """
    if discount_percent >= 20:
        return price - (price * discount_percent / 100)
    else:
        return price

# Prompt the user to enter the original price and discount percentage
try:
    original_price = float(input("Enter the original price of the item: "))
    discount_percentage = float(input("Enter the discount percentage: "))

    # Calculate the final price using the calculate_discount function
    final_price = calculate_discount(original_price, discount_percentage)

    # Print the final price or the original price
    if final_price == original_price:
        print(f"No discount applied. The price remains: ${original_price:.2f}")
    else:
        print(f"The final price after applying the discount is: ${final_price:.2f}")

except ValueError:
    print("Invalid input! Please enter numerical values for price and discount percentage.")
