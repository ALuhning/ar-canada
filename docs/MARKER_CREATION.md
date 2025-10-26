# Creating Custom AR Markers

This guide shows you how to create custom AR markers for the Discover Canada AR experience.

## 🎯 What is an AR Marker?

An AR marker is a high-contrast image that AR.js uses to track and overlay 3D content. Think of it as a QR code for augmented reality.

## 🎨 Marker Design Principles

### 1. High Contrast
- Use **pure black (#000000)** and **pure white (#FFFFFF)**
- No gradients or grayscale
- Clear, sharp edges

### 2. Asymmetry
- Avoid perfectly symmetrical designs
- AR.js needs unique orientation points
- Each corner should be distinguishable

### 3. Border
- Thick black border (20% of total size)
- Creates clear boundary for detection
- Improves tracking stability

### 4. Complexity Level
- **Too simple**: Hard to track uniquely
- **Too complex**: Poor recognition
- **Just right**: 3-7 distinct features

## ✅ Good Marker Examples

```
████████████████████
█                  █
█   ██      ████   █
█   ██        ██   █
█              ██  █
█   ████           █
█      ██      ██  █
█                  █
████████████████████
```

## ❌ Bad Marker Examples

**Too Simple:**
```
████████████████████
█                  █
█                  █
█       ██         █
█                  █
████████████████████
```

**Symmetrical:**
```
████████████████████
█                  █
█   ██      ██     █
█   ██      ██     █
█   ██      ██     █
████████████████████
```

## 🛠️ Method 1: Using AR.js Marker Generator

### Step-by-Step

1. **Create Your Image**
   - Use any graphics software
   - Export as PNG (512x512px minimum)
   - Black and white only

2. **Visit Marker Generator**
   - Go to: https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html

3. **Upload Image**
   - Click "Choose File"
   - Select your B&W image
   - Wait for processing

4. **Download Pattern File**
   - Download the `.patt` file
   - Rename it (e.g., `beaver-marker.patt`)
   - Save to `/public/markers/`

5. **Save Marker Image**
   - Right-click the generated marker
   - "Save Image As..."
   - Save as PNG (e.g., `beaver-marker.png`)

## 🎨 Method 2: Using Hiro/Kanji Markers

AR.js includes built-in markers you can use:

### Hiro Marker
- Most common AR marker
- Excellent tracking
- Good for testing

Download: https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png

### Kanji Marker
- Alternative built-in marker
- Different design
- Also excellent tracking

Download: https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/kanji.png

### Using Built-in Markers

In your A-Frame code:
```html
<a-marker preset="hiro">
  <!-- Your 3D content -->
</a-marker>
```

Or:
```html
<a-marker preset="kanji">
  <!-- Your 3D content -->
</a-marker>
```

## 🖌️ Method 3: Custom Design in Inkscape (Free)

### Tools Needed
- [Inkscape](https://inkscape.org/) (free, open-source)

### Steps

1. **Create New Document**
   - File → New
   - Size: 512 x 512 px
   - White background

2. **Add Black Border**
   - Rectangle tool
   - Full size (512x512)
   - Fill: Black
   - No stroke

3. **Add White Inner Square**
   - Another rectangle
   - Size: 410x410 (80% of total)
   - Center it
   - Fill: White

4. **Add Your Design**
   - Use simple shapes
   - Stay within white area
   - Only black color
   - Make it asymmetric

5. **Export**
   - File → Export PNG
   - 512x512 resolution
   - Export

6. **Generate Pattern**
   - Upload to AR.js generator
   - Download .patt file

## 🎯 Specific Marker Designs for Cards

### Beaver Marker
```
Design Elements:
- Beaver tail shape (asymmetric)
- Tree stump outline
- Wood chip details
- All in black silhouette
```

### Maple Leaf Marker
```
Design Elements:
- Single maple leaf outline
- Distinct veins
- Stem at bottom (breaks symmetry)
- Rotate slightly off-axis
```

### Hockey Marker
```
Design Elements:
- Hockey stick
- Puck
- Goal net pattern
- Arrange asymmetrically
```

### Canadarm Marker
```
Design Elements:
- Robotic arm segments
- Joint circles
- Gripper hand
- Angled position
```

### Poutine Marker
```
Design Elements:
- Bowl outline
- Fries pattern
- Gravy drips
- Steam wisps
```

## 📏 Size Guidelines

### Digital Display
- Minimum: 3cm x 3cm on phone screen
- Recommended: 5cm x 5cm
- Maximum: As large as screen

### Printed
- Minimum: 5cm x 5cm
- Recommended: 8cm x 8cm
- Optimal: 10cm x 10cm

### Distance
- Works from 10cm to 2 meters
- Best: 30-60cm from camera
- Depends on marker size

## 🔍 Testing Your Marker

### Quick Test

1. **Print or Display Marker**
   - Print on white paper
   - Or display on another screen

2. **Open AR Viewer**
   - Visit your deployed app
   - Allow camera access

3. **Point Camera at Marker**
   - Should detect within 1-2 seconds
   - 3D content should appear
   - Try different angles

### Troubleshooting

**Marker Not Detected:**
- Increase contrast
- Add more border
- Make less symmetric
- Improve lighting

**Jittery Tracking:**
- Simplify design
- Increase marker size
- Better lighting
- Reduce complexity

**Slow Recognition:**
- Reduce detail
- Increase contrast
- Better camera quality

## 🎨 Design Templates

### Template 1: Simple Icon
```
Border: 20% black
Center: 60% white
Icon: 40% black silhouette
Asymmetry: Rotate icon 15°
```

### Template 2: Pattern
```
Border: 20% black
Grid: 3x3 of black squares
Random: Remove 2-3 squares
Creates: Unique pattern
```

### Template 3: Text
```
Border: 20% black
Text: Bold sans-serif
Content: "CA" or "AR"
Style: Black, thick strokes
```

## 📱 Mobile Optimization

### Image Resolution
- Source: 1024x1024px (high quality)
- Deployed: 512x512px (optimized)
- Format: PNG-8 (small file size)

### File Size
- Target: < 50 KB per marker
- Use: PNG optimization tools
- Compress: With ImageOptim or TinyPNG

### Loading Performance
```javascript
// Preload markers
const markers = [
  '/markers/beaver-marker.png',
  '/markers/maple-marker.png'
];

markers.forEach(src => {
  const img = new Image();
  img.src = src;
});
```

## 🔄 Updating Markers

### In Your Code

```javascript
// Before
<a-marker type="pattern" url="/markers/old-marker.patt">

// After  
<a-marker type="pattern" url="/markers/new-marker.patt">
```

### Clear Browser Cache
- Users need to refresh
- Or change filename
- Version in URL: `marker-v2.patt`

## 🎓 Advanced Techniques

### Multi-Marker Tracking
```html
<a-marker preset="hiro" id="marker1">
  <a-box color="red"></a-box>
</a-marker>

<a-marker preset="kanji" id="marker2">
  <a-box color="blue"></a-box>
</a-marker>
```

### Barcode Markers
```html
<a-marker type="barcode" value="0">
  <!-- Content for barcode 0 -->
</a-marker>

<a-marker type="barcode" value="1">
  <!-- Content for barcode 1 -->
</a-marker>
```

### Custom Training
For best results, train custom markers:
```bash
# Clone AR.js tools
git clone https://github.com/AR-js-org/AR.js.git
cd AR.js/three.js/examples/marker-training/

# Follow training instructions
# Generates optimized .patt files
```

## 📚 Resources

### Tools
- [AR.js Marker Generator](https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
- [Inkscape](https://inkscape.org/) - Vector graphics
- [GIMP](https://www.gimp.org/) - Image editing
- [TinyPNG](https://tinypng.com/) - Compression

### Reference Markers
- [Hiro Marker](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)
- [Kanji Marker](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/kanji.png)
- [Barcode Markers](https://github.com/AR-js-org/AR.js/tree/master/data/images)

### Learning
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [Marker-based Tracking](https://ar-js-org.github.io/AR.js-Docs/marker-based/)

## ✨ Pro Tips

1. **Test Early**: Create markers first, test immediately
2. **Print Quality**: Use laser printer for sharpest edges
3. **Lighting**: Good lighting = better tracking
4. **Size Matters**: Bigger markers = better detection
5. **Keep Simple**: Start simple, add complexity slowly
6. **Backup**: Save both .patt and source image
7. **Version Control**: Track marker files in git
8. **User Testing**: Test with real users, real devices

---

**Ready to create?** Start with Method 1 (AR.js Generator) for fastest results!
