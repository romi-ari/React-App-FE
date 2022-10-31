import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getListCars } from '../../actions/ListCarsAction'

function ListCars() {
  
    const dispatch = useDispatch()

  useEffect(() => {
    //panggil action getListCars
    dispatch(getListCars)
  })

    return (
    <div>
        <h4>List Cars</h4>
    </div>
  )
}

export default ListCars