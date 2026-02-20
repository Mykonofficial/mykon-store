# Product Images

## Required Images

Add your product images to this folder. The website is currently expecting:

### DROP 01 - Biotech Hybrid Jacket
- **Filename:** `mykon-jacket-front.jpg`
- **Used in:** Shop page and product detail page

### DROP 02 - Engineered Cargo Pants
- **Filename:** `mykon-pants-front.jpg`
- **Used in:** Shop page and product detail page

## Image Specifications

### Recommended Settings
- **Format:** JPG or PNG
- **Aspect Ratio:** 1:1 (square) for best results
- **Minimum Size:** 800x800px
- **Recommended Size:** 1200x1200px or higher
- **File Size:** Keep under 500KB for optimal loading

### Quality Tips
- Use high-quality product photography
- Ensure good lighting and clear background
- Keep consistent styling across all product images
- Consider white, black, or neutral backgrounds

## Adding Multiple Images

To add additional product images (back view, detail shots, etc.):

1. **Add images to this folder** with descriptive names:
   ```
   mykon-jacket-front.jpg
   mykon-jacket-back.jpg
   mykon-jacket-detail.jpg
   ```

2. **Update the product in** `lib/products.ts`:
   ```typescript
   images: [
     "/images/mykon-jacket-front.jpg",
     "/images/mykon-jacket-back.jpg",
     "/images/mykon-jacket-detail.jpg"
   ]
   ```

The product detail page will automatically display all images in a gallery format.

## Current Status

✅ Code is ready to display images
⏳ Waiting for product images to be added to this folder

Once you add the images, refresh your browser to see them on the website!
