import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { FaQuoteRight } from "react-icons/fa"

const Review = (props) => {
    const [idx, setIdx] = useState(0);
    const { people } = props;
    const { id, image, name, job, text } = people[idx];

    const prev = () => {
        if (idx > 0) {
            setIdx(idx - 1)
        } else {
            setIdx(people.length - 1)
        }
    }
    const next = () => {
        if (idx >= people.length - 1) {
            setIdx(0);
        } else {
            setIdx(idx + 1);
        }
    };

    const random = () => {
        setIdx(Math.floor(Math.random() * people.length))
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img className='person-img' src={image} alt="no image" />
                <span className='quote-icon'> <FaQuoteRight /> </span>
            </div>
            <h4 className='author' >{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button onClick={prev} className='prev-btn' >
                    <BsChevronLeft />
                </button>
                <button onClick={next} className='next-btn'>
                    <BsChevronRight />
                </button>
            </div>
            <button onClick={random} className='random-btn'>surprise me</button>

        </article>
    )
}

export default Review
