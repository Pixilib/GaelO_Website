import React, { Fragment,useState } from "react";
import { CSSTransition } from "react-transition-group";



const CardFade = (props) => {

    const [isFront, setIsFront] = useState(true);
    
 

    return (

        <Fragment>
            <CSSTransition in={isFront} 
                classNames="fade">
                    <div onMouseEnter={() => setIsFront(false)} onMouseLeave={() => setIsFront(true)}>{isFront ? props.children[0] : props.children[1]}</div>
            </CSSTransition>
        </Fragment>
    )
}


export default CardFade