# Quiz Card Component

This project is a `QuizCard` component built in React using the Framer Motion library to provide smooth animations for answer selection. It presents a quiz question with multiple answers, highlighting the selected answer as correct or incorrect with visually engaging animations.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Component Explanation](#component-explanation)
  - [Props](#props)
  - [State](#state)
  - [Animations](#animations)
- [Customization](#customization)

## Overview

The `QuizCard` component is a reusable and interactive quiz card designed to enhance user experience with smooth transitions and color-coded answer feedback. This project is ideal for integrating a polished, animated quiz interface into a React application.

## Features

- **Randomized Answers**: The answers are randomized on each render to provide a dynamic experience.
- **Visual Feedback**: Correct answers turn green, incorrect answers turn red, and unselected answers retain a neutral color.
- **Smooth Animations**: Button animations on selection help to visually distinguish between correct and incorrect answers.

## Technologies Used

- **React**: For building the component-based user interface.
- **Framer Motion**: For implementing smooth animations.
- **Tailwind CSS**: For streamlined styling with utility classes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Josekariz/quiz.git
   ```

2. Navigate to the project folder:

   ```bash
   cd quiz
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Usage

To use the `QuizCard` component, you can simply pass in a question object with a `question`, `correct_answer`, and an array of `incorrect_answers`. Below is an example of integrating it in your React app.

```javascript
import QuizCard from './QuizCard';

function App() {
    const question = {
        question: "What is the capital of France?",
        correct_answer: "Paris",
        incorrect_answers: ["London", "Rome", "Berlin"]
    };

    const handleAnswer = (isCorrect) => {
        alert(isCorrect ? "Correct!" : "Incorrect.");
    };

    return (
        <div className="App">
            <QuizCard question={question} onAnswer={handleAnswer} />
        </div>
    );
}

export default App;
```

## Component Explanation

### Props

- **`question`**: An object containing:
  - `question` (string): The question text to be displayed.
  - `correct_answer` (string): The correct answer to the question.
  - `incorrect_answers` (array of strings): List of incorrect answers for the question.
- **`onAnswer`**: Function that receives a boolean indicating whether the selected answer is correct.

### State

- **`selectedAnswer`**: Tracks the answer chosen by the user.
- **`shuffledAnswers`**: Holds a randomized list of the possible answers.

### Animations

The `QuizCard` component uses Framer Motion for animations:
- **Fade In/Out Animation**: The card smoothly appears on load and exits with a fade effect.
- **Answer Selection Animation**: Buttons scale up or down based on whether the answer is correct or incorrect, providing visual feedback.
  
## Customization

- **Styling**: You can customize colors, spacing, and borders by editing the Tailwind CSS classes in the component.
- **Animations**: Adjust Framer Motion properties, like `duration` or `easing`, for custom animations.