import React, { type ReactChildren, type ReactChild } from 'react'
import 'app/styles/index.scss'

interface StyleProps {
  children: ReactChild | ReactChildren
}

export const StyleDecorator = (props: StyleProps): JSX.Element => {
  return (
      <>
          {props.children}
      </>
  )
}
