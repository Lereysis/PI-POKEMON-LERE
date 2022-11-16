import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import FilterByType from '../Filters/FilterByType'
import FilterByAttack from '../Filters/FilterByAttack'
import FilterByAlphabet from '../Filters/FilterByAlphabet'
import FilterByApiOrCreated from '../Filters/FilterByApiOrCreated'
import style from "./ContainerFilter.module.css"

const ContainerFilter = () => {
  return (
    <>
        <section className={style.containerFilter}>
            <div>
              <h4>Search</h4>
              <div>
                <SearchBar/>
              </div>
            </div>
            <div>
              <h4>Filter</h4>
              <div>
                <FilterByType/>
                <FilterByApiOrCreated/>
              </div>
            </div>
            <div>
              <h4>Sort</h4>
              <div>
                <FilterByAttack/>
                <FilterByAlphabet/>
              </div>
            </div>
        </section>
    </>
  )
}

export default ContainerFilter