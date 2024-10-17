<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend Code Test

In this test, I was asked to:

- Make a simple React app that follows the design in `design.jpg`
- Consume the API
- Ensure the front-end tests pass
- Make the app responsive

### Task Requirements

The task is to build an app that passes the following tests:

- Should be able to increase and decrease product quantity ✅
- Should be able to add items to the basket ✅

### Additional Features

The initial task was only to create a product detail, but I also added:

- A homepage with product cards 💡 where users can add or remove products from the basket. (I've added some fake products 😅 to the db.js to show you the cards and how to navigate to the products using their IDs)
  - The logic for adding/removing products in the homepage cards differs from the product detail. While this might not be ideal for UX/UI consistency, I wanted to show different ways to handle cart interactions.
- A shoping basket 🧺 component that displays product cards, calculates the total number of items, and computes the total price.
- I also added a popover when the user updates/adds products to let them know the current basket items.

  ![Popover](https://github.com/user-attachments/assets/5c2edc06-20f3-485f-affc-dfc4ffbf5d8c)

### Steps Taken

1. **Styled Components**: I used Styled Components for styling. I saw that Octopus Energy uses Styled Components in their public conventions, so I took this opportunity to learn and apply them 🙃🕵️‍♀️ (I had previously worked with JSS and Emotion).
2. **Design**:

   - I created a theme with the colors and properties needed for easy access.
   - The design from the test was for mobile, so I adapted it for larger screens.

     ![responsive](https://github.com/user-attachments/assets/6d978fb4-a3a9-497d-b5f4-ffca0adaea29)

   - I examined the Octopus Energy website for color and style guidance. For example, I noticed the borders used in the cards and applied similar styling to my product cards.

     ![borders](https://github.com/user-attachments/assets/36531018-bcf4-40b9-befc-ceec0c192b84)

3. **Apollo**: I had never used Apollo before, but the documentation helped me a lot. I used Apollo GraphQL to manage data fetching.

4. **Server-Side Rendering**:

   - To maintain good SEO, I used `getServerSideProps` to ensure the product is fetched server-side. This improves indexation for search engines and enhances online visibility.
   - For title and meta tags, I aligned the descriptions with Octopus conventions. 🐙

5. **LocalStorage**: I used `localStorage` to persist the cart data across page refreshes.

### Code Optimization

To follow the DRY 😉 (Don't Repeat Yourself) principle, I made several optimizations:

- **Mixins**: I created style mixins for repeated styles.
- **useBasket**: I created a custom hook for basket calculations. To manage the global state, I used React's Context API. I wrapped the app in a context provider to share necessary values across components.
- **Utils**:
  - I created a `formattedPrice` utility function to handle price formatting across the app. 💸🪙
  - I also created a utility for custom rendering in the tests. Since my app was more complex than initially proposed, I modified the test to use a custom render method that wraps the product component with its necessary providers.

### Accessibility

I followed accessibility best practices in my design and implementation. I used the Chrome tool Lighthouse to audit the accessibility.

![lichthouse](https://github.com/user-attachments/assets/acc1be7f-780a-45b1-a2b3-a0cc84933e1c)

### Comments

If I had had more time, I would have liked to:

- Add more tests, I have only tested the hook I created: useBasket, which I believe was the most important.
- Add a clearBasket button to remove all products from the basket and a remove product button for each product, so that you don't have to decrease the quantity one by one.

I had a great time doing this task, I learned new things, and it was fun. 😊✨
Thank you very much, and I hope you like it.
