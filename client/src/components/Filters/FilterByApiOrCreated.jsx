import React from 'react'
import style from "./Filters.module.css"
import {useDispatch} from "react-redux"
import { filterByApiOrCreated } from '../../redux/actions'
const FilterByApiOrCreated = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(filterByApiOrCreated(e.target.value))
  }
  return (
    <div className={style.select}>
        <select onChange={handleChange} name="pokemon-type" id="pokemon-type">
            <option value="">All</option>
            <option value="Api">Api</option>
            <option value="Created">Created</option>
        </select>
    </div>
  )
}

export default FilterByApiOrCreated