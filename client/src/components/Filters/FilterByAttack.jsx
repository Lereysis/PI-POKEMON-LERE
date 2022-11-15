import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByAttack } from '../../redux/actions'
import style from "./Filters.module.css"

export default function FilterByAttack() {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(filterByAttack(e.target.value))
    console.log(e.target.value)
  } 
  return (
    <div className={style.select}>
        <select onChange={handleChange} name="pokemon-type" id="pokemon-type">
            <option value="">Order by attack</option>
            <option value="minAttack">Min Attack</option>
            <option value="maxAttack">Max Attack</option>
        </select>
    </div>
  )
}
