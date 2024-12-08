import React from 'react';
import style from "./TextYellow.module.scss"

const TextYellow = ({title, ...props}) => {
  return (
    <div {...props}>
        <span className={style.yellow_text}>{title}</span>
    </div>
  )
}

export default TextYellow