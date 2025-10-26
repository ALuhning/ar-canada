# Audio Files

## ⚠️ Status: PLACEHOLDER DIRECTORY

This directory is **ready for sound effects** but they're currently **optional**.

**The AR experience works great without sounds!** Add them later for extra polish.

## 🔊 Planned Sound Files (Optional)

When you're ready to add audio:
- `beaver-gnaw.mp3` - Beaver gnawing wood sound
- `wind-rustle.mp3` - Wind through maple leaves
- `goal-horn.mp3` - Hockey goal horn
- `space-ambient.mp3` - Space ambient sound
- `sizzle.mp3` - Poutine sizzling sound

## Format Requirements

- **Format**: MP3 or OGG (for browser compatibility)
- **Size**: < 500 KB per file
- **Quality**: 128 kbps (good enough for AR)
- **Duration**: 2-10 seconds (short loops)

## Finding Free Sounds

### Recommended Sources

1. **Freesound.org** - https://freesound.org
   - Huge library
   - CC0 and CC BY licenses
   - High quality recordings

2. **Zapsplat** - https://www.zapsplat.com
   - Free with attribution
   - Game and UI sounds
   - Easy download

3. **BBC Sound Effects** - https://sound-effects.bbcrewind.co.uk
   - 16,000+ effects
   - Free for personal/educational
   - High quality

4. **OpenGameArt** - https://opengameart.org
   - Game-focused
   - Various licenses
   - Good for effects

## Creating Your Own

Use Audacity (free):
1. Record with phone/mic
2. Edit in Audacity
3. Export as MP3 (128 kbps)
4. Keep under 500 KB

## Usage in AR

```html
<a-scene>
  <a-assets>
    <audio id="beaver-sound" src="/sounds/beaver-gnaw.mp3"></audio>
  </a-assets>
  
  <a-marker preset="hiro">
    <a-box sound="src: #beaver-sound; autoplay: true; loop: true"></a-box>
  </a-marker>
</a-scene>
```

## Optimization

Compress audio files:
```bash
# Using ffmpeg
ffmpeg -i input.wav -b:a 128k -ar 44100 output.mp3
```

## Volume Levels

Keep volumes reasonable:
- Background: 0.3-0.5
- Effects: 0.5-0.7
- Important: 0.7-1.0

```html
<a-entity sound="src: #sound; volume: 0.5"></a-entity>
```

## Auto-play Policy

Many browsers block auto-play. User must interact first:

```javascript
// Wait for user interaction
document.addEventListener('click', function() {
  const audio = document.querySelector('[sound]');
  audio.components.sound.playSound();
});
```

## License

Always check audio licenses:
- ✅ CC0 (Public Domain)
- ✅ CC BY (Attribution required)
- ⚠️ Freesound License (read terms)
- ❌ Copyrighted (do not use)

## Attribution

For CC BY sounds:
```
Sound: "Beaver Gnaw" by Artist
License: CC BY 4.0
Source: https://freesound.org/s/123456/
```
