import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { TouchTarget } from './button'
import { Link } from './link'

export function Navbar({ className, ...props }) {
  return (
    <nav
      {...props}
      className={clsx(
        className,
        'flex flex-1 items-center gap-4 py-2.5',
        // Control horizontal spacing
        'px-4 lg:px-8'
      )}
    />
  )
}

export function NavbarItem({ current, className, children, ...props }) {
  let classes = clsx(
    // Base
    'relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 dark:text-white',
    // Leading icon/logo slot
    '*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 dark:*:data-[slot=icon]:fill-zinc-400',
    // Avatar slot
    '*:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5'
  )

  return 'href' in props ? (
    <Link {...props} className={clsx(className, classes)} data-current={current ? 'true' : undefined}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <Headless.Button {...props} className={clsx(className, classes)} data-current={current ? 'true' : undefined}>
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  )
}

export function NavbarSection({ className, ...props }) {
  return <div {...props} className={clsx(className, 'flex items-center gap-3')} />
}

export function NavbarSpacer({ className, ...props }) {
  return <div {...props} className={clsx(className, 'flex-1')} />
}