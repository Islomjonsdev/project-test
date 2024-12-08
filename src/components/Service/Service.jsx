import React from 'react';
import TextYellow from '../ui/TextYellow/TextYellow';
import style from "./Service.module.scss"

const Service = () => {
  return (
    <section className={style.service}>
        <div className={style.container}>
            <div className={style.service_blog}>
                <div>
                    <TextYellow title={"Service"}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service