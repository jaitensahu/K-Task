## 1. UI Design
Hosted Link: 
https://jaitensahu.github.io/K-Task/ <br>
![Screenshot (513)](https://github.com/jaitensahu/Task/assets/127736781/256d037f-6f2e-4c8b-9a7b-1912282e9faa)

## 2. Function to get value of parameter
![Screenshot (511)](https://github.com/jaitensahu/Task/assets/127736781/485c89eb-ee86-4791-baca-c2547f1f3e04)


## 3. Function reverse any number <br>
![Screenshot (511)](https://github.com/jaitensahu/Task/assets/127736781/7ac9213d-c24a-4921-adb7-3e3a6806aed9)

## 4. Best project I have worked on <br>
![Screenshot (512)](https://github.com/jaitensahu/Task/assets/127736781/2c4c786a-38fc-4fa1-8509-3a21a5f1fdfb)

# Recipe Finder Application
GitHub Link: https://github.com/jaitensahu/FoodBlog <br>
Hosted Link: https://food-blog-jaiten-sahu.vercel.app/

## Overview
This is a Recipe Finder Application built with ReactJS, allowing users to search for recipes and view detailed information about each recipe. The application utilizes the Meal API to fetch recipe data dynamically.<br>
I leveraged React's component-based architecture to design and implement reusable UI components, ensuring a consistent and responsive user experience across different devices and screen sizes.<br>
Used context API to centralise and manage the application's state in a scalable and maintainable manner. By creating a context provider, I encapsulated the application's state logic and made it accessible to all components that needed access to global state.

## Features
- **Search Functionality**: Users can search for recipes by entering keywords or ingredients.
- **Recipe Details**: Detailed information about each recipe, including ingredients, instructions, and nutritional information, is displayed.
- **Favorite Recipes**: Users can save their favorite recipes for future reference.
- **Responsive Design**: The application is responsive and works well on desktop and mobile devices.

## Technologies Used
- **ReactJS**: Frontend development framework for building user interfaces.
- **Meal API**: API for fetching recipe data.
- **CSS**: Styling the user interface.
- **React Router**: Client-side routing for navigation within the application.

## API Reference
The Recipe Finder Application utilizes the Meal API to fetch recipe data. Below are some key endpoints provided by the Meal API:

- **Search Recipes by Name**: `GET /search.php?s={name}`
  - Description: Search for recipes by name.
  - Example: `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`

- **Lookup Full Recipe Details by ID**: `GET /lookup.php?i={id}`
  - Description: Lookup full recipe details by recipe ID.
  - Example: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`

- **List Categories**: `GET /categories.php`
  - Description: Retrieve a list of recipe categories.
  - Example: `https://www.themealdb.com/api/json/v1/1/categories.php`

For more information on available endpoints and how to use them, refer to the [Meal API Documentation](https://www.themealdb.com/api.php).

## Installation
To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Access the application in your web browser at `http://localhost:3000`.

## Usage
- **Search for Recipes**: Enter keywords or ingredients in the search bar and press Enter to search for recipes.
- **View Recipe Details**: Click on a recipe card to view detailed information about the selected recipe.
- **Save Favorite Recipes**: Click on the heart icon to save a recipe to your favorites.

 

 





