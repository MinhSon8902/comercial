import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'filter',
  initialState: { search: '' },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload
    },
  },
})
