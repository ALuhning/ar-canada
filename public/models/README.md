# 3D Models

This directory contains GLTF/GLB 3D models for AR experiences.

## Files

Place your 3D model files here:
- `beaver.gltf` - Animated beaver model
- `maple-leaves.gltf` - Falling maple leaves
- `hockey-rink.gltf` - Mini hockey rink
- `canadarm.gltf` - Robotic arm
- `poutine.gltf` - Poutine dish with steam

## Format Requirements

- **Format**: GLTF 2.0 (.gltf) or GLB (.glb)
- **Size**: < 5 MB per model (for mobile performance)
- **Optimization**: Use compressed textures
- **Animation**: Embedded animations supported

## Finding Free Models

### Recommended Sources

1. **Sketchfab** - https://sketchfab.com
   - Filter: "Downloadable" + "Free"
   - License: CC BY or CC0
   - Format: GLTF

2. **Google Poly** (Archive) - https://poly.pizza
   - Free low-poly models
   - Easy to optimize

3. **Kenney.nl** - https://kenney.nl
   - Free game assets
   - Some 3D models available

4. **Smithsonian Open Access** - https://3d.si.edu
   - Museum quality models
   - Public domain

## Creating Your Own

Use Blender (free):
1. Model in Blender
2. Export as GLTF 2.0
3. Check "Include Animations" if needed
4. Optimize with gltf-pipeline

## Optimization

Install gltf-pipeline:
```bash
npm install -g gltf-pipeline
```

Optimize your models:
```bash
gltf-pipeline -i model.gltf -o model-optimized.gltf -d
```

This will:
- Compress textures
- Remove unused data
- Reduce file size
- Improve load times

## Testing

Test models before deploying:
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
</head>
<body>
  <a-scene>
    <a-assets>
      <a-asset-item id="model" src="beaver.gltf"></a-asset-item>
    </a-assets>
    <a-entity gltf-model="#model"></a-entity>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
</body>
</html>
```

## Placeholder Models

Until you have custom models, you can use simple shapes:

```html
<!-- Beaver -->
<a-box color="#8B4513" width="0.5" height="0.5" depth="0.3"></a-box>

<!-- Maple Leaf -->
<a-plane color="#FF0000" width="0.5" height="0.5"></a-plane>

<!-- Hockey Puck -->
<a-cylinder color="#000000" radius="0.25" height="0.1"></a-cylinder>
```

## License

Make sure all models have appropriate licenses for your use case:
- ✅ CC0 (Public Domain)
- ✅ CC BY (Attribution required)
- ⚠️ CC BY-SA (Share-alike)
- ❌ Copyrighted (do not use)

## Attribution

If using CC BY models, credit the author:
```
Model: "Beaver" by Artist Name
License: CC BY 4.0
Source: https://sketchfab.com/3d-models/...
```
