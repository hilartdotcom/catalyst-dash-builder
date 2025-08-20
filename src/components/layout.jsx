import { useState } from 'react'
import clsx from 'clsx'

export function ApplicationLayout({ 
  navbar, 
  sidebar, 
  children,
  className,
  ...props 
}) {
  let [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className={clsx(className, 'isolate flex min-h-svh w-full bg-white dark:bg-zinc-900')} {...props}>
      {/* Sidebar for mobile */}
      <div className={clsx('fixed inset-0 z-20 lg:hidden', showSidebar ? 'block' : 'hidden')}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/80" onClick={() => setShowSidebar(false)} />
        <div className="fixed inset-y-0 left-0 w-full max-w-80 bg-white dark:bg-zinc-900">
          {sidebar}
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-80 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-950/5 dark:border-white/5">
          {sidebar}
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-80 w-full">
        <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-zinc-950/5 bg-white/75 px-4 shadow-sm backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8 dark:border-white/5 dark:bg-zinc-900/75">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-zinc-700 lg:hidden dark:text-zinc-300"
            onClick={() => setShowSidebar(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {navbar}
        </div>

        <main>
          {children}
        </main>
      </div>
    </div>
  )
}