import React from 'react'

export default function layout({children}) {
  return (
    <div>This is a layout which gonna used by all segments within this segment
        {children}
    </div>
  )
}
