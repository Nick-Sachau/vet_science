export const reducer =  (state, dispatch) => {
    switch(dispatch.type) {
        case 'SET_LOADING': {
            return { ...state, loading: true}
        }
        case 'SET_PAGE': {
            return { ...state, activePage: dispatch.payload }
        }
        default :{
            console.error(`dispatch is not defined\n \t maybe you spelt it wrong or you havent declared it yet`)
        }
    }
}