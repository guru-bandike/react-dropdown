# React Dropdown Component

A **React Dropdown Component** that provides an interactive dropdown menu with a smooth flip animation for the dropdown arrow. This component dynamically renders dropdown options and allows users to select an option from a list.

---

## Project Description

The **React Dropdown Component** is designed to provide a reusable and customizable dropdown menu for React applications. It supports the following features:

### Key Features

- **Dynamic Options:** Accepts an array of items to render in the dropdown.
- **Hover to Open:** Opens the dropdown on hover and closes it when the mouse leaves.
- **Option Selection:** Clicking an option updates the selected value and closes the dropdown.
- **Flip Animation:** Provides a visually appealing flip effect for the dropdown arrow when toggling between open and closed states.
- **Customizable Styling:** Easily adaptable styling through the CSS file.

---

## Tech Stack

This project is built using the following technologies:

### Frontend

- **React.js**: For building the interactive UI components.
- **CSS3**: For styling and animations.

### Development Tools

- **Node.js & npm**: For managing project dependencies and running the development server.
- **VS Code**: For writing and managing the source code.

---

## Folder Structure

```
react-dropdown/
├── node_modules/
├── public/
│   ├── down_arrow.png
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   └── dropdown/
│   │       ├── Dropdown.css
│   │       └── Dropdown.jsx
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## Installation and Setup

Follow the steps below to set up the project locally:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: Ensure Node.js is installed. If not, download it from [Node.js official website](https://nodejs.org/).
- **npm**: Comes bundled with Node.js.

### Clone the Repository

Clone the project repository from GitHub to your local machine:

```bash
git clone https://github.com/guru-bandike/react-dropdown.git
cd react-dropdown
```

### Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

### Run the Application

Start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

### Props

The `Dropdown` component accepts the following props:

| Prop Name | Type  | Description                               |
| --------- | ----- | ----------------------------------------- |
| `items`   | Array | An array of strings for dropdown options. |

### Example Usage

```jsx
import React from 'react';
import Dropdown from './components/dropdown/Dropdown';

const App = () => {
  const items = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <h1>Interactive Dropdown</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
```

---

## Customization

### Arrow Flip Effect

The arrow flip effect is handled via the `transform: scaleY(-1)` property in `Dropdown.css`. You can customize the animation duration or effect in the CSS file.

### Styling

Modify the `Dropdown.css` file to customize the button, list, or hover effects.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

**Happy Coding!** 😊
