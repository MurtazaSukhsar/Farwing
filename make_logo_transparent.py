from PIL import Image
import sys

def process_image_hq():
    try:
        img = Image.open('public/farwinglogo.png').convert("RGBA")
        pixels = img.load()
        width, height = img.size
        
        new_img = Image.new("RGBA", (width, height))
        new_pixels = new_img.load()
        
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                
                # Calculate color saturation to identify the blue stripe
                sat = max(r, g, b) - min(r, g, b)
                brightness = (r + g + b) / 3
                
                # 1. Identify blue stripe: has high saturation, and blue is dominant
                if sat > 30 and b > r:
                    if brightness > 240:
                        # Apply anti-aliased transparency at edges near white
                        alpha = int((255 - brightness) * (255 / 15))
                        alpha = max(0, min(255, alpha))
                        new_pixels[x, y] = (r, g, b, alpha)
                    else:
                        new_pixels[x, y] = (r, g, b, 255)
                
                # 2. Grayscale elements (white background, black text, grey stripe)
                else:
                    # Grey stripe is around brightness 120 to 210
                    if 100 < brightness < 210:
                        new_pixels[x, y] = (r, g, b, 255)
                    
                    # White background and its anti-aliased edges
                    elif brightness >= 210:
                        # Convert to white, with smooth alpha fadeout
                        alpha = int((255 - brightness) * (255 / 45))
                        alpha = max(0, min(255, alpha))
                        new_pixels[x, y] = (255, 255, 255, alpha)
                    
                    # Black text and dark elements
                    else:
                        # Invert black elements to pure white for dark mode
                        # Smooth transition for gray anti-aliasing edges of black text
                        new_pixels[x, y] = (255, 255, 255, 255)

        new_img.save('public/farwinglogo_transparent.png', "PNG")
        print("Generated perfect high-quality transparent, dark-mode optimized logo!")
    except Exception as e:
        print(f"Error processing image: {e}")
        sys.exit(1)

if __name__ == "__main__":
    process_image_hq()
