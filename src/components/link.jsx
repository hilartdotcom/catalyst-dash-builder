import * as Headless from '@headlessui/react'
import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const Link = forwardRef(function Link({ href, to, ...props }, ref) {
  // If href is provided, use external link; if to is provided, use router link
  const linkTo = to || href
  
  return (
    <Headless.DataInteractive>
      {href && !to ? (
        <a href={href} {...props} ref={ref} />
      ) : (
        <RouterLink to={linkTo} {...props} ref={ref} />
      )}
    </Headless.DataInteractive>
  )
})