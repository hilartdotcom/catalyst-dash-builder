import * as Headless from '@headlessui/react'
import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const Link = forwardRef(function Link({ href, to, ...props }, ref) {
  return (
    <Headless.DataInteractive>
      {href && !to ? (
        <a href={href} {...props} ref={ref} />
      ) : (
        <RouterLink to={to || href} {...props} ref={ref} />
      )}
    </Headless.DataInteractive>
  )
})