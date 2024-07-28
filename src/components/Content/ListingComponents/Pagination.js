import React from 'react'
import {PaginationBox} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination({nextPage, prevPage, currentPage, length, postsPerPage}) {

    const totalPages = length % postsPerPage === 0 ? length/postsPerPage : Math.floor(length/postsPerPage) + 1

    return (
        <PaginationBox>
            <button onClick={prevPage} disabled={currentPage === 1 ? true : false}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <h3>Page {currentPage} of {totalPages}</h3>
            <button onClick={nextPage}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </PaginationBox>  
    )
}
