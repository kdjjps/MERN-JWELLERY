import React,{useState} from 'react'
import {SearchBox} from './style'
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {

    const history = useHistory()
    const [searchInput, setSearchInput] = useState('')

    const goToSearchPage = () => {
        window.location = `/search?q=${searchInput}`
    }

    return (
        <SearchBox>
            <input type="text" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <div onClick={goToSearchPage}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </SearchBox>
    )
}
