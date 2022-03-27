import React from 'react'

export const Brief = ({total}) => {
  return (
    <div>
        {total > 0 && <b className="float-right mr-20">Total: {total}</b>}
    </div>
  )
}
