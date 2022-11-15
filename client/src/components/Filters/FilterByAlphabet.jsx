import React from 'react'
import style from "./Filters.module.css"
import { useDispatch } from 'react-redux'
import { filterByAphabet } from '../../redux/actions'

const FilterByAlphabet = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(filterByAphabet(e.target.value))

  } 
  return (
    <div className={style.select}>
        <select onChange={handleChange} name="pokemon-type" id="pokemon-type">
            <option value="">Order by Alphabet</option>
            <option value="AZ">A - Z</option>
            <option value="ZA">Z - A</option>
        </select>
    </div>
  )
}

export default FilterByAlphabet