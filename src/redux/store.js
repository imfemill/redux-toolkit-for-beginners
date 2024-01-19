// Import the `configureStore` function from the "@reduxjs/toolkit" library
import { configureStore } from "@reduxjs/toolkit";

// Import the individual reducers for the "auth" and "theme" slices
import authReducer from "./reducers/authSlice";
import themeReducer from "./reducers/themeSlice";

// Create the Redux store by configuring it with the reducers
const store = configureStore({
  // Combine the reducers for different slices
  reducer: {
    auth: authReducer, // Reducer for managing authentication-related state
    theme: themeReducer, // Reducer for managing theme-related state
  },
});

// Export the created Redux store for use in the application
export default store;
