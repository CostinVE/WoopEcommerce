export const SET_USER_DATA = 'SET_USER_DATA'

export const updateUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: userData
})

export const SET_IS_SIGNED = 'SET_IS_SIGNED';

export const updateIsSigned = (isSigned) => ({
    type: SET_IS_SIGNED,
    payload: isSigned
});
