import { configureStore } from '@reduxjs/toolkit'
import { updateUserData } from './actions'

export const reduxValues = {
    isSigned: false,
    id: 1,
    first_name: "",
    last_name: "",
    email: "costinve@gmail.com",
    gender: "",
    birthday: ""
}

const handleState = (state = reduxValues, action) => {
    switch (action.type)
    {
        case 'SET_USER_DATA' :
            return {
                ...state,
                id: action.payload.id,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email,
                gender: action.payload.gender,
                birthday: action.payload.birthday
            }
            case 'SET_IS_SIGNED':
            return {
                ...state,
                isSigned: action.payload.isSigned
            };
            default:
              return state
    }
}



const store = configureStore({
    reducer: handleState
})

export default store