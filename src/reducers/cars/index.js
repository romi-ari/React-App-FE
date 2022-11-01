import { GET_LIST_CARS } from "../../actions/ListCarsAction"

const initialState = {
    getListCarsResult : false,
    getListCarsLoading : false,
    getListCarsError : false
}

const cars = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_CARS:
                console.log('4. Masuk reducer', action)
                return {
                    ...state,
                    getListCarsResult: action.payload.data,
                    getListCarsLoading: action.payload.loading,
                    getListCarsError: action.payload.errorMessage
                }
        default:
            return state
    }
}

export default cars