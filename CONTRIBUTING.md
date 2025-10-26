# Contributing to Discover Canada AR

Thank you for your interest in contributing! 🇨🇦

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Device/browser info
   - Screenshots if applicable

### Suggesting Features

1. Check existing issues and discussions
2. Create a new issue with:
   - Clear description of feature
   - Use case and benefits
   - Any implementation ideas

### Code Contributions

1. **Fork the repository**

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test on mobile device

4. **Test thoroughly**
   - Run `npm run dev` and test locally
   - Test AR features on real mobile device
   - Check responsive design

5. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of changes"
   ```
   
   Commit message prefixes:
   - `Add:` New feature
   - `Fix:` Bug fix
   - `Update:` Improvements
   - `Docs:` Documentation
   - `Style:` Formatting

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Clear title and description
   - Reference any related issues
   - Include screenshots/videos for UI changes

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/ar-canada.git
cd ar-canada

# Install dependencies
npm install

# Initialize database
node backend/database.js

# Start development
npm run dev
```

## Code Style

- **JavaScript**: Use modern ES6+ syntax
- **React**: Functional components with hooks
- **Naming**: camelCase for variables, PascalCase for components
- **Formatting**: 2 spaces indentation
- **Comments**: Explain why, not what

## Testing Checklist

Before submitting PR:

- [ ] Code runs without errors
- [ ] AR features work on mobile
- [ ] Responsive on different screen sizes
- [ ] No console errors
- [ ] Database migrations work
- [ ] README updated if needed
- [ ] Comments added for complex code

## Areas for Contribution

### Easy (Good First Issues)
- Add new Canadian icon cards
- Improve styling/CSS
- Add sound effects
- Create marker designs
- Documentation improvements

### Medium
- Optimize 3D model loading
- Add animations to AR scenes
- Improve analytics dashboard
- Add social sharing features
- Create printable card templates

### Advanced
- Implement marker-less AR
- Add multiplayer features
- Optimize AR tracking
- Add WebXR support
- Performance improvements

## Adding New AR Cards

1. **Create marker image**
   - See `docs/MARKER_CREATION.md`
   - Save to `public/markers/`

2. **Add 3D model**
   - Find or create GLTF model
   - Optimize (< 5MB)
   - Save to `public/models/`

3. **Update database**
   - Edit `backend/database.js`
   - Add new card entry
   - Run initialization

4. **Create AR scene**
   - Update `src/pages/ARViewer.jsx`
   - Add custom animations/effects
   - Test on mobile

5. **Update docs**
   - Add card to README
   - Update card count

## Finding Assets

### 3D Models
- [Sketchfab](https://sketchfab.com) - Filter: Free, Downloadable
- [Poly Pizza](https://poly.pizza) - Google Poly archive
- [Kenney](https://kenney.nl) - Game assets

### Sounds
- [Freesound](https://freesound.org) - CC0 and CC BY
- [Zapsplat](https://www.zapsplat.com) - Free with attribution
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk)

### Images
- [Unsplash](https://unsplash.com) - Free photos
- [Pixabay](https://pixabay.com) - CC0 images
- [Pexels](https://www.pexels.com) - Free stock

Always check licenses and provide attribution!

## Questions?

- Open an issue for technical questions
- Check existing documentation first
- Be respectful and constructive

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Respect different skill levels
- Have fun! 🍁

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make Discover Canada AR better! 🇨🇦
