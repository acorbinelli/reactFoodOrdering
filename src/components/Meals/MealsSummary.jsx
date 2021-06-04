import React from "react"

import classes from "./MealsSummary.module.css"

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food... Delivered!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        aperiam, consequuntur laudantium quo odio, soluta, dolores voluptatibus
        eveniet laboriosam provident vitae eligendi! Nulla dolore illo sit
        laudantium hic iure exercitationem saepe consequuntur minima ducimus,
        quibusdam ipsa odit magni magnam laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        aspernatur suscipit fuga nisi, modi aliquid molestias saepe provident
        optio adipisci.
      </p>
    </section>
  )
}

export default MealsSummary
