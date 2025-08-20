import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { TouchTarget } from './button'
import { Link } from './link'

export function Sidebar({ className, ...props }) {
  return (
    <nav {...props} className={clsx(className, 'flex h-full min-h-0 flex-col')}>
      {/* Logo area */}
      <div className="flex items-center px-4 py-3 lg:px-6">
        <div className="flex lg:flex-1">
          <div className="flex shrink-0 items-center">
            <div className="size-8 rounded-lg bg-indigo-600" />
            <div className="ml-4 text-sm/6 font-medium text-zinc-950 dark:text-white">
              Catalyst
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-8 px-4 py-6 lg:px-6">
          {props.children}
        </nav>
      </div>
    </nav>
  )
}

export function SidebarHeader({ className, ...props }) {
  return <div {...props} className={clsx(className, 'flex items-center px-4 py-3 lg:px-6')} />
}

export function SidebarSection({ className, ...props }) {
  return <div {...props} className={clsx(className, 'space-y-1')} />
}

export function SidebarHeading({ className, ...props }) {
  return (
    <h3
      {...props}
      className={clsx(
        className,
        'text-xs/6 font-medium text-zinc-500 dark:text-zinc-400'
      )}
    />
  )
}

export function SidebarItem({ current, className, children, ...props }) {
  let classes = clsx(
    // Base
    'relative flex w-full items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium',
    // Text color
    'text-zinc-950 dark:text-white',
    // Hover
    'data-hover:bg-zinc-950/5 dark:data-hover:bg-white/5',
    // Current
    current && 'bg-zinc-950/5 dark:bg-white/5',
    // Focus
    'data-focus:outline-hidden data-focus:ring-2 data-focus:ring-blue-500',
    // Leading icon/logo slot
    '*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-zinc-500 sm:*:data-[slot=icon]:size-5 dark:*:data-[slot=icon]:text-zinc-400',
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

export function SidebarLabel({ className, ...props }) {
  return <span {...props} className={clsx(className, 'truncate')} />
}