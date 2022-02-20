import { useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'

const KeyFactorCard = (props) => {
  const [isFlipped, setisFlipped] = useState(false)

  const handleClick = () => {
    setisFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip role='button' isFlipped={isFlipped}>
      {/* vue du front de la card */}
      <Card className='  fs-3 styleCard' role='button' onMouseEnter={handleClick}>
        <img alt={props.textFront} className='d-flex justify-content-center cardIcon ' src={props.imageUrl} />
        {props.textFront}
      </Card>
      {/* vue du back de la card */}
      <Card className='text-center text-white font-weight-bold styleCard' role='button' onMouseLeave={handleClick}>
        {props.textBack}
      </Card>
    </ReactCardFlip>
  )
}

export default KeyFactorCard
