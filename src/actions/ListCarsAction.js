import axios from 'axios'
// import { useEffect, useState } from 'react';
export const GET_LIST_CARS = 'GET_LIST_CARS'

export const getListCars = () => {
    return (dispatch) => {
       
        //Loading
        dispatch({
            type: GET_LIST_CARS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanz',
            timeout: 120000
        })

            .then((response) => {
                //berhasil get API
                dispatch({
                    type: GET_LIST_CARS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) =>{
                //gagal get API
                dispatch({
                    type: GET_LIST_CARS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.data
                    }
                })
            })
    }
}