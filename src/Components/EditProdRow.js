import React from 'react'

function EditProdRow({index}) {
  return (
    <div key={index}>
        <input  type="text"
                placeholder="Edit item..." />
        <input  type="text"
                placeholder="Edit comment..."/>
    </div>
  )
}

export default EditProdRow