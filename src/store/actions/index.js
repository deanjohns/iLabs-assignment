export const updateCartList = (newCartList) => {
    return {
        type: 'UPDATE_CARTLIST',
        payload: newCartList,
    }
}
