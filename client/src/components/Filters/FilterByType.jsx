import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getPokemonsTypes } from '../../redux/actions'
import style from "./Filters.module.css"
import { filterByType } from '../../redux/actions'

export default function FilterByType() {

    const dispatch = useDispatch()

    const types =  useSelector(state => state.pokemonsTypes )


    useEffect(()=>{
        dispatch(getPokemonsTypes())
      },[dispatch])


      const handleChange = event => {
        dispatch(filterByType(event.target.value))
    }

  return (
    <div className={style.select}>
        <select onChange={handleChange} name="pokemon-type" id="pokemon-type">
            <option value="">All</option>
            {
                types.map( e => {
                    return (
                        
                        <option key={e.id} value={e.name}>{e.name}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

