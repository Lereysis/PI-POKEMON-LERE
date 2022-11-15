import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardPokemon from '../../components/CardPokemon/CardPokemon'
import { getAllPokemons } from '../../redux/actions';
import Nav from '../../components/Nav/Nav';
import style from "./Home.module.css"
import Loading from '../../components/Loading/Loading';
import ContainerFilter from '../../components/ContainerFilter/ContainerFilter';
import PokemonsNotFound from '../../components/PokemonsNotFound/PokemonsNotFoun';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector( state => state.pokemons)
  const pokemonsFilters =  useSelector(state => state.filterPokemons )
  console.log(pokemonsFilters)
  useEffect(()=>{
    dispatch(getAllPokemons())
    // dispatch(filterByType())
  },[dispatch])

  //Logic Pagination
  const [cardsPerView, setCardsPerView] = useState([])
  const [currentPage,setCurrentPage] = useState(0)
  const [pagesTotal, setTotalPages] = useState(0)

  useEffect(()=>{
      setCardsPerView([...pokemonsFilters].splice(0,12))
      setCurrentPage(0)
      setTotalPages(Math.ceil(pokemonsFilters.length/12))
  },[pokemonsFilters])

  function HandleForwad () {
      const totalElementos = pokemonsFilters.length;
      const nextPage = currentPage + 1;
      const firstIndex = nextPage * 12;
      if(firstIndex > totalElementos) return;
      setCurrentPage(nextPage)
      setCardsPerView([...pokemonsFilters].splice(firstIndex,12));
  }
  function HandleBack () {
      const prevPage = currentPage - 1;
      if(prevPage < 0 ) return;
      const firstIndex = prevPage * 12;
      setCurrentPage(prevPage)
      setCardsPerView([...pokemonsFilters].splice(firstIndex,12));
  }

  return (
    <>
      <Nav />
      <ContainerFilter/>
      <div>
        {!data.length 
            ? (
                <Loading/>
              ) 
            : (
                <div >
                  <div className='container'>
                    <div className={style.pagination }>
                        <button className={style.buttonPrev} onClick={HandleBack}>Prev</button>
                        <span >{currentPage + 1} of {pagesTotal} </span>
                        <button className={style.buttonNext} onClick={HandleForwad}>next</button>
                    </div>
                  </div>
                  <div className={style.wrapper}>
                    {
                      cardsPerView.length === 0 
                      ?  (<PokemonsNotFound/>) 
                      : cardsPerView.map(e => (
                          <CardPokemon
                          key={e.id}
                          id={e.id}
                          name={e.name}
                          image={e.image}
                          type={e.types}
                          />
                        ))
                      }
                    </div>
                  </div>
              )
          }
      </div>
    </>
  )
}


export default Home;