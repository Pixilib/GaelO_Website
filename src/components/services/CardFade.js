import React from "react";

import { Fragment, useState } from "react";
import { CSSTransition } from "react-transition-group";

const CardFade = (props) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <Fragment>
      <CSSTransition in={isFront} timeout={0}>
        <div
          onMouseEnter={() => setIsFront(false)}
          onMouseLeave={() => setIsFront(true)}
        >
          {isFront ? props.children[0] : props.children[1]}
        </div>
      </CSSTransition>
    </Fragment>
  );
};

export default CardFade;
