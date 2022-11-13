import { createSlice } from '@reduxjs/toolkit'

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState: {
    theme: 'light',
  },
  reducers: {
    changeTheme: (state, action) => {
      // Make sure theme is set to a known value
      function validateTheme(themeValue) {
        if (themeValue === "dark") {
          return "dark";
        } else {
          return "light";
        }
      }

      state.theme = validateTheme(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = toolbarSlice.actions

export default toolbarSlice.reducer