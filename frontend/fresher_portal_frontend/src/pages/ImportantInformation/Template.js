import React from 'react'

const Template = (props) => {
  return (
    <div>
        <div>
            {props.title}
        </div>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default Template