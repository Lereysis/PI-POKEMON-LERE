import React,{useState} from 'react'
import style from "./SearchBar.module.css"
import { useDispatch} from "react-redux"
import { getPokemonByName } from '../../redux/actions';

function SearchBar() {

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const handlechange = (e) => {
    setName(e.target.value)
  }
  const handleClick = () => {
    dispatch(getPokemonByName(name))
  }
  return (
    <div className={style.searchBar}>
        <input onChange={handlechange} type="tex" placeholder="Search your pokemon"/>
        <button onClick={handleClick} className={style.btnPrimary}>Search</button>
    </div>
  )
}

export default SearchBar;