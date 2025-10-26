# AR Marker Images

This directory contains the marker images used for AR tracking.

## Files

- `hiro.png` - Built-in AR.js Hiro marker (for testing)
- `beaver-marker.png` - Beaver card marker
- `maple-marker.png` - Maple leaf card marker
- `hockey-marker.png` - Hockey card marker
- `canadarm-marker.png` - Canadarm card marker
- `poutine-marker.png` - Poutine card marker

## Pattern Files

- `*.patt` files contain the marker training data
- Generated using [AR.js Marker Generator](https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)

## Usage

1. Create custom marker image (black & white, 512x512px)
2. Upload to AR.js Marker Generator
3. Download `.patt` file
4. Save both image and pattern file here
5. Update database with marker URL

## Quick Start with Built-in Markers

For testing, you can use the Hiro marker:

```bash
wget https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png
```

Then update your AR viewer to use:
```html
<a-marker preset="hiro">
```

## Creating Custom Markers

See `/docs/MARKER_CREATION.md` for detailed instructions.

## Requirements

- **Size**: 512x512px minimum
- **Format**: PNG
- **Colors**: Black and white only
- **Border**: Thick black border required
- **Design**: Asymmetric for better tracking
