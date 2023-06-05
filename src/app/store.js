import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
  })

// export const store = configureStore({
//     reducer: {},
// })  