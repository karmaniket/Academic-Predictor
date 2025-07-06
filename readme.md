<h1 align="center">Academic Journey Predictor</h1>

**Academic Predictor** is a simple web application that estimates a student's academic grade or program level (Bachelor's/Master's) in a specified target year based on their current age and years spent in kindergarten. If you are thinking what grade you were or will be in, Just pick a year and try the [app](https://academicpredictor.pages.dev) now!

## Demo

[![Demo](https://img.youtube.com/vi/RUwyvUAB8Ns/maxresdefault.jpg)](https://youtu.be/RUwyvUAB8Ns)

---

## Features

- Predicts school grade or higher education level for any target year
- Allows customization of kindergarten years
- Includes support for program type selection (Bachelor's or Master's)
- Clean, responsive UI designed with accessibility in mind
- Validates user input and provides helpful error messages

---

## Setup

### 1. Clone the repository

    git clone https://github.com/karmaniket/Academic-Predictor.git
    cd Academic-Predictor

### 2. Deploy on Cloudflare

- Push your code to GitHub repository
- Create a new page under `Worker & Pages` on Cloudflare
- Connect your repository and deploy

### 3. How it works

- Simply enter your current age, target year, years spent in kindergarten (default 5)
- Select your higher education, master's or bachelor's

### 4. Prediction Logic

- Grade = (Target Year - Birth Year) - Kindergarten Years

### 5. Validation Rules

- Handling unrealistic ages, must be between 1–50
- Target years before birth, kindergarten years between 0–15
- Long spans that suggest unlikely academic paths, target year must be in the range 1950–2099

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it with attribution.
