# Coin Flip Game 🪙

A sleek, interactive coin-flipping game built with HTML, CSS, and JavaScript. This project showcases modern web development skills including responsive design, CSS animations, and vanilla JavaScript DOM manipulation.

![Coin Flip Game](img/showcase.png)

## 🎯 Project Overview

This is a fully functional coin-flipping simulator featuring smooth 3D animations, real-time score tracking, and a responsive design that works seamlessly across all devices. Built as a portfolio piece to demonstrate proficiency in front-end web development fundamentals.

## ✨ Features

### Core Functionality

- **Interactive Coin Flipping**: Click either the coin or the "Random" button to flip
- **3D Flip Animation**: Smooth CSS3 transforms with realistic coin spinning (1800° rotation)
- **Real-time Score Tracking**: Live counters for both heads and tails results
- **Visual Feedback**: Dynamic result display showing "Flipping..." and final outcome
- **Reset Capability**: Clear button to reset all counters and coin position
- **SEO Optimized**: Comprehensive meta tags including description and Open Graph protocol
- **Semantic HTML**: Proper structure for search engine crawlers and accessibility

### User Experience

- **Click Prevention**: Disables interactions during flip animation to prevent conflicts
- **Cursor States**: Visual feedback with cursor changes (pointer/not-allowed)
- **Status Messages**: Clear instructions and result announcements
- **Button States**: Disabled state during flipping for better UX
- **Mobile-First Design**: Fully responsive across all device sizes
- **Fast Loading**: Optimized assets and minimal dependencies
- **Favicon Support**: Custom SVG icon for browser tabs and bookmarks

## 🛠️ Technologies Used

### HTML5

- Semantic HTML structure
- SEO-optimized meta tags
- Open Graph protocol implementation
- Accessibility-friendly markup

### CSS3

- **Modern Layout**: Flexbox for responsive positioning
- **3D Transforms**: `perspective`, `transform-style: preserve-3d`, and `backface-visibility`
- **Custom Animations**: Cubic-bezier timing functions for realistic motion
- **Radial Gradients**: Authentic coin appearance
- **Box Shadows**: Depth and visual hierarchy
- **Media Queries**: Responsive breakpoints for mobile optimization

### JavaScript (Vanilla)

- **DOM Manipulation**: Direct element selection and content updates
- **Event Handling**: Click event listeners with proper state management
- **Animation Control**: CSS class toggling for animation triggering
- **State Management**: Tracking flip state, counters, and button states
- **Timing Control**: `setTimeout()` for animation synchronization

### External Libraries

- **Bootstrap 5.3.8**: Grid system and utility classes
- **Bootstrap Icons**: Icon integration
- **Google Fonts (Galindo)**: Custom typography

## 🎨 Design Highlights

### Visual Design

- **Color Scheme**: Dark theme (`#0f1319`, `#3f4e65`) with accent borders (`#9ec5fe`)
- **Typography**: Galindo font family for playful, engaging appearance
- **Text Effects**: Text shadows and strokes for depth (`-webkit-text-stroke`)
- **Button Design**: Elevated buttons with shadow effects for tactile feel

### Responsive Design

- **Desktop**: 50% width container with border and border-radius
- **Mobile** (< 950px): Full-width layout, optimized sizing, background color adjustment
- **Scalable Elements**: Reduced header sizes and coin dimensions for mobile

### Animation Details

- **Heads**: 1800° rotation (5 full spins)
- **Tails**: 1980° rotation (5.5 spins to show reverse side)
- **Duration**: 1.2s with cubic-bezier easing
- **Timing**: 1.4s total wait for complete animation cycle

## 📁 Project Structure

```
coin-flip/
├── index.html          # Main HTML structure
├── style.css           # Custom styles and animations
├── script.js           # Game logic and interactivity
└── img/
    ├── favicon.svg     # Browser tab icon
    ├── heads.svg       # Heads side image
    └── tails.svg       # Tails side image
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AbdulazizBaHaj/coin-flip-game-js.git
```

2. Navigate to the project directory:

```bash
cd coin-flip-game-js
```

3. Open `index.html` in your browser:

```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

Or simply drag and drop `index.html` into your browser.

## 💻 Code Highlights

### 3D Coin Animation

```css
.coin {
  transform-style: preserve-3d;
  transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.4, 1.2);
}

.coin.flipping-to-heads {
  transform: rotateY(1800deg);
}
```

### State Management

```javascript
let isFlipping = false;

function randomFlip() {
  if (isFlipping) return;
  isFlipping = true;
  // Prevent multiple simultaneous flips
}
```

### Responsive Breakpoint

```css
@media (max-width: 950px) {
  #app-container {
    width: 100%;
    border: 0;
  }
}
```

## 🎓 Skills Demonstrated

- ✅ **HTML5**: Semantic markup, SEO optimization, meta tags
- ✅ **CSS3**: Flexbox, 3D transforms, animations, responsive design
- ✅ **JavaScript**: DOM manipulation, event handling, state management
- ✅ **UX Design**: User feedback, disabled states, clear messaging
- ✅ **Responsive Design**: Mobile-first approach, media queries
- ✅ **Best Practices**: Code organization, comments, accessibility considerations
- ✅ **Performance**: Vanilla JS (no framework overhead), CSS animations (GPU-accelerated)

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔮 Future Enhancements

- [ ] Sound effects for coin flip
- [ ] Animation speed control
- [ ] Statistics tracking (win streaks, percentages)
- [ ] Betting/prediction mode
- [ ] Multiple coin designs
- [ ] localStorage for persistent scores
- [ ] Dark/light theme toggle

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abdulaziz Ba Haj**

- GitHub: [@AbdulazizBaHaj](https://github.com/AbdulazizBaHaj)

## 🙏 Acknowledgments

- Bootstrap for responsive utilities
- Google Fonts for typography
- Inspired by classic coin flip mechanics

---

⭐ If you found this project helpful or interesting, please consider giving it a star!
