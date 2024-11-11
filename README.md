# Etch-A-Sketch Project

## Overview

This project is a **digital Etch-A-Sketch** application built using **HTML**, **CSS**, and **JavaScript**. It allows users to create a customizable drawing grid and draw by simply hovering over the cells. The application features dynamic grid generation and a unique coloring effect that changes color and fades with each stroke, making it a fun and interactive drawing experience.

## Features

- **Dynamic Grid Generation**: Users can specify the number of squares per side (up to 100) to create a custom-sized grid.
- **Hover Drawing**: Drawing occurs when the user hovers over the grid cells.
- **Random Color Effect**: Each hover generates a random color for the cell.
- **Opacity Fading**: Repeated strokes over a cell gradually reduce its opacity, creating a fading effect.
- **Responsive Design**: The grid adjusts to fit the container while maintaining equal-sized cells.

## Technologies Used

- **HTML**: Provides the structure of the application.
- **CSS**: Adds styling and layout for a polished appearance.
- **JavaScript**: Implements grid creation, hover drawing effects, and user interaction.

## Project Structure

```
.
├── index.html          # Main HTML file
├── style.css           # CSS file for styling
├── script.js           # JavaScript file for grid and drawing logic
```

## What I Learned

This project was an excellent opportunity to practice **DOM manipulation** in JavaScript. Key takeaways include:

- Using JavaScript to **dynamically generate and update HTML elements**.
- Handling **user input** for grid customization with validation checks.
- Implementing **event listeners** for hover effects and user interactions.
- Working with **CSS properties** in JavaScript to create dynamic styles (e.g., random colors and opacity changes).

## How to Use

1. Open `index.html` in your browser.
2. Click the **"Generate grid"** button and enter the number of squares per side (between 1 and 100).
3. Hover over the grid cells to start drawing.
   - Each hover changes the color of the cell.
   - Repeated hovers over the same cell will decrease its opacity, creating a fading effect.

## Screenshots

![image](https://github.com/user-attachments/assets/26bfb639-bdda-4c9c-a46c-b7e54d2c575e)


## Future Improvements

- Add a **clear button** to reset the grid without refreshing the page.
- Implement a **color picker** to allow users to select their own colors.
- Add a **toggle option** for different drawing modes (e.g., rainbow, grayscale, eraser).
- Improve mobile responsiveness for better usability on touch devices.

## Author

Kacper Smaga
