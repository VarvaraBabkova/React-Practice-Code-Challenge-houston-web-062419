import React, { Fragment } from 'react'

const Sushi = (props) => {

  console.log(props.sushi)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.sushiClick(props.sushi.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.sushi.eaten ?
            null
          :
            <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        [{props.sushi.id}] + {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi