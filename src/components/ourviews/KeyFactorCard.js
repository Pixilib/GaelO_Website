import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'

const OurviewsCard = (props) => {
  const [isFlipped, setisFlipped] = useState(false)

  const handleClick = () => {
    setisFlipped(!isFlipped)
  }


  return (
    <ReactCardFlip className='justify-content-center' role='button' isFlipped={isFlipped}>
      {/* vue du front de la card */}
      <Card className=' text-center mt-3 fs-3 styleCard' role='button' onMouseEnter={handleClick}>
        <img className='justify-content-center cardIcon ' src={props.imageUrl} />
        {props.textFront}
      </Card>
      {/* vue du back de la card */}
      <Card className='text-center text-white mt-3 font-weight-bold styleCard' role='button' onMouseLeave={handleClick}>
        {props.textBack}
      </Card>
    </ReactCardFlip>
  )
}

export default OurviewsCard
