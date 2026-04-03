from PIL import Image, ImageDraw, ImageFont
import os

# Define image size
width, height = 200, 200

# Create logo.png
logo_img = Image.new('RGB', (width, height), color='lightblue')
draw = ImageDraw.Draw(logo_img)
try:
    font = ImageFont.truetype("arial.ttf", 40)
except:
    font = ImageFont.load_default()
draw.text((50, 80), "LOGO", fill="white", font=font)
logo_img.save('src/logo.png')

# Create signin.png
signin_img = Image.new('RGB', (width, height), color='green')
draw = ImageDraw.Draw(signin_img)
draw.text((30, 80), "Sign In", fill="white", font=font)
signin_img.save('src/signin.png')

# Create signup.png
signup_img = Image.new('RGB', (width, height), color='blue')
draw = ImageDraw.Draw(signup_img)
draw.text((30, 80), "Sign Up", fill="white", font=font)
signup_img.save('src/signup.png')

print("Images created successfully!")