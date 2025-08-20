import clsx from 'clsx'
import { Link } from './link'

export function Table({ dense = false, grid = false, striped = false, className, children, ...props }) {
  return (
    <div className="flow-root">
      <div className={clsx(className, 'inline-block min-w-full align-middle')}>
        <table
          {...props}
          className={clsx([
            'min-w-full text-left text-sm/6',
            striped && '[--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]',
            !striped && '[--gutter:--spacing(4)] lg:[--gutter:--spacing(8)]',
            !grid && 'text-zinc-950 dark:text-white',
          ])}
        >
          {children}
        </table>
      </div>
    </div>
  )
}

export function TableHead({ className, ...props }) {
  return <thead className={clsx(className, 'text-zinc-500 dark:text-zinc-400')} {...props} />
}

export function TableBody(props) {
  return <tbody {...props} />
}

export function TableRow({ href, target, className, children, ...props }) {
  return (
    <tr
      {...props}
      className={clsx(
        className,
        href && 'has-href:hover:bg-zinc-950/2.5 has-href:focus-within:bg-zinc-950/2.5 dark:has-href:hover:bg-white/2.5 dark:has-href:focus-within:bg-white/2.5'
      )}
    >
      {href && (
        <td className="relative">
          <Link href={href} target={target} tabIndex={0} className="absolute inset-0 rounded-lg focus:ring-inset" />
        </td>
      )}
      {children}
    </tr>
  )
}

export function TableHeader({ className, ...props }) {
  return (
    <th
      {...props}
      className={clsx(
        className,
        'border-b border-b-zinc-950/10 px-4 py-3 font-medium first:pl-[var(--gutter)] last:pr-[var(--gutter)] sm:px-3 dark:border-b-white/10'
      )}
    />
  )
}

export function TableCell({ className, children, ...props }) {
  return (
    <td
      {...props}
      className={clsx(
        className,
        'relative px-4 first:pl-[var(--gutter)] last:pr-[var(--gutter)] sm:px-3',
        // Padding is moved to child elements for mobile
        'py-0 *:border-y *:border-y-zinc-950/5 *:py-4 *:first:border-t-0 *:last:border-b-0 dark:*:border-y-white/5',
        // For tables with `href` on rows
        'has-[.href]:*:border-y-0 has-[.href]:*:py-3'
      )}
    >
      {children}
    </td>
  )
}