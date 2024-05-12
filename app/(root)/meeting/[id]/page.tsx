import React from 'react'

const Meeting = ({params}: {params: {id:string}}) => {
  return (
    <div>
      meeting Romm {params.id}
    </div>
  )
}

export default Meeting
