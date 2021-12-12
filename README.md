# <img src="https://github.com/katerina-tziala/my-angular-store/blob/master/docs/logo.png" alt="app logo" width="44" height="44" align="left">My Store
A Single Page Application that reflects the same user experience as that of a real-world e-commerce website utilizing the [fakestoreapi](https://fakestoreapi.com/).

## Features

- Products Page: It displays the available products for the user to choose and add to their cart (in various quantities)
  
- Product Page: It displays more information about any particular product for the user who can choose and add to their cart (in various quantities)
  
- Shopping Cart Page: It includes the products that the user has added to their cart. A user can empty the cart, update the ordered products and proceed with the checkout
  
- Checkout Form: Collects information about the user (first name, last name, email, phone and delivery address details).
   
- Order Confirmation: It displays the outcome after the user completes the checkout process 
 
- Item amount “badge” next to the link for the shopping cart that indicates the number of the ordered items

- Users can share the link of any page, with a different user. The link navigates the receiving user to the page with correct results displayed, preserving the state of the page

- Responsive Design


## Prerequisites

- Angular CLI: 13.0.4
- Node: 14.18.1
- Package Manager: npm 6.14.15

## Technologies

Here’s a high level list of the technologies used for this app:

- **Angular CLI v13.0.44**: [Angular CLI](https://angular.io/cli) for the development

- **[Tailwind](https://tailwindcss.com/)**: A utility-first CSS framework to create a user friendly and eye appealing interface

- **[Fontawesome](https://fontawesome.com/)**: An icon library for the UI infographics

- **[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)**: For Code Styling

## Running the App Locally

1. Fork and clone this repository

2. To install the dependencies of the app, run in this directory: ``` npm install ```  or  ``` npm i  ```

3. To start the app, run in the project directory: ``` ng serve ``` or  ``` npm run start  ```

4. Access the app locally at: http://localhost:4200/

## Code Quality

The commands to check the code quality and test the api must be run in the project directory.

The preferred settings for the coding style of the app can be fount in the [.prettierrc](https://github.com/katerina-tziala/my-angular-store/blob/master/.prettierrc) and [.eslintrc](https://github.com/katerina-tziala/my-angular-store/blob/master/.eslintrc.json) files.

To check the code consistensy to the chosen coding style run `npm run prettier:check`.

To apply the chosen coding style run `npm run prettier`.

To lint the app run `npm run lint` or `ng lint`.

## Testing

### Running Unit Tests

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. The production build of the app is included in the `dist/app` directory.

To run the app that is ready for production run: ``` npm start ```

## Future Improvements
- Enable a signup/login flow.
- Implementation of filtering based on the categories of the products.
- Implementation of search field to search for products.
- Implementation of auto complete feature for the search.
- Implementation of sorting options (most popular, price asc to desc, etc) for products.
- Implementation of wishlists for logged in users, where they can create lists of favorite products.
- Implementation of a Service Worker Offline-First capability.
- Implementation of data caching (IndexDB) in order to return results for products faster.
- Improve Unit Test Coverage by implementing more tests.
- Implementation of End to End Testing.





