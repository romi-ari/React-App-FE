import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCars } from '../../actions/ListCarsAction'

function ListCars() {
    const {getListCarsResult, getListCarsLoading, getListCarsError } = useSelector((state) => state.CarsReducer)
    
    const dispatch = useDispatch()

  useEffect(() => {
    //panggil action getListCars
    console.log('1. Use effect component did mount')
    dispatch(getListCars())
  }, [dispatch])

    return (
    <div>
        <hr/>
        <h4>List Cars</h4>
        <hr/>
        {getListCarsResult ? (
          getListCarsResult.map((cars) => {
            return (
              <p key={cars.id}>{cars.type} - {cars.capacity} - {cars.manufacture}</p>
            )
          })
        ) : getListCarsLoading ? (
          <p>Loading . . .</p>
        ) : (
          <p>{getListCarsError ? getListCarsError : 'Data Kosong'}</p>
        )}
    </div>
  )
}

export default ListCars