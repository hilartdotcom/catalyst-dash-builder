import React from 'react'
import { SidebarLayout } from '@/components/sidebar-layout.jsx'
import { 
  Navbar, 
  NavbarItem, 
  NavbarSection, 
  NavbarSpacer 
} from '@/components/navbar.jsx'
import { 
  Sidebar, 
  SidebarBody,
  SidebarHeader,
  SidebarItem, 
  SidebarLabel, 
  SidebarSection,
  SidebarHeading
} from '@/components/sidebar.jsx'
import { Avatar } from '@/components/avatar.jsx'
import { 
  Dropdown, 
  DropdownButton, 
  DropdownItem, 
  DropdownMenu 
} from '@/components/dropdown.jsx'
import { Heading } from '@/components/heading.jsx'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/table.jsx'
import { Badge } from '@/components/badge.jsx'
import { Button } from '@/components/button.jsx'
import { ThemeToggle } from '@/components/theme-toggle.jsx'
import { 
  HomeIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

// Mock data matching Catalyst demo
const stats = [
  { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up' },
  { name: 'Subscriptions', value: '+2350', change: '+180.1%', trend: 'up' },
  { name: 'Sales', value: '+12,234', change: '+19%', trend: 'up' },
  { name: 'Active Now', value: '+573', change: '+201 since last hour', trend: 'up' },
]

const recentEvents = [
  { id: 1, type: 'Order placed', user: 'Leslie Alexander', time: '1 hour ago', amount: '$49.00' },
  { id: 2, type: 'Payment processed', user: 'Michael Foster', time: '2 hours ago', amount: '$199.00' },
  { id: 3, type: 'Account created', user: 'Dries Vincent', time: '3 hours ago', amount: null },
  { id: 4, type: 'Order placed', user: 'Lindsay Walton', time: '4 hours ago', amount: '$89.00' },
  { id: 5, type: 'Payment failed', user: 'Courtney Henry', time: '5 hours ago', amount: '$299.00' },
]

const recentOrders = [
  { id: '3000', customer: 'Leslie Alexander', date: 'Jan 6, 2024', status: 'Paid', amount: '$49.00' },
  { id: '3001', customer: 'Michael Foster', date: 'Jan 5, 2024', status: 'Paid', amount: '$199.00' },
  { id: '3002', customer: 'Dries Vincent', date: 'Jan 4, 2024', status: 'Pending', amount: '$89.00' },
  { id: '3003', customer: 'Lindsay Walton', date: 'Jan 3, 2024', status: 'Paid', amount: '$299.00' },
  { id: '3004', customer: 'Courtney Henry', date: 'Jan 2, 2024', status: 'Failed', amount: '$99.00' },
]

function getStatusColor(status) {
  switch (status) {
    case 'Paid':
      return 'green'
    case 'Pending':
      return 'amber'
    case 'Failed':
      return 'red'
    default:
      return 'zinc'
  }
}

export default function Dashboard() {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSection>
            <NavbarItem>
              <MagnifyingGlassIcon data-slot="icon" />
              Search
            </NavbarItem>
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
            <ThemeToggle />
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/placeholder.svg" />
                Erica
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <PencilIcon data-slot="icon" />
                  My profile
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog6ToothIcon data-slot="icon" />
                  Settings
                </DropdownItem>
                <DropdownItem>
                  <ArrowRightOnRectangleIcon data-slot="icon" />
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Catalyst
            </h2>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/" current>
                <HomeIcon data-slot="icon" />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/events">
                <CalendarIcon data-slot="icon" />
                <SidebarLabel>Events</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                <ClipboardDocumentListIcon data-slot="icon" />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                <Cog6ToothIcon data-slot="icon" />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSection className="mt-8">
              <SidebarHeading>Support</SidebarHeading>
              <SidebarItem href="/support">
                <LifebuoyIcon data-slot="icon" />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <DocumentTextIcon data-slot="icon" />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
        {/* Page header */}
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <Heading>Good afternoon, Erica</Heading>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Here's what's happening with your store today.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button color="indigo">Add product</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg dark:bg-zinc-800"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 text-zinc-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-zinc-500 truncate dark:text-zinc-400">
                        {stat.name}
                      </dt>
                      <dd className="text-lg font-medium text-zinc-900 dark:text-white">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm">
                    <span className="text-green-600 dark:text-green-400">
                      {stat.change}
                    </span>
                    <span className="ml-1 text-zinc-500 dark:text-zinc-400">
                      from last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Events */}
        <div className="mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-white">
                Recent events
              </h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                A list of your recent account activity.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <Button plain>View all</Button>
            </div>
          </div>
          <div className="mt-6">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Event</TableHeader>
                  <TableHeader>User</TableHeader>
                  <TableHeader>Time</TableHeader>
                  <TableHeader>Amount</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>
                      <div className="font-medium text-zinc-900 dark:text-white">
                        {event.type}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-zinc-500 dark:text-zinc-400">
                        {event.user}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-zinc-500 dark:text-zinc-400">
                        {event.time}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-zinc-900 dark:text-white">
                        {event.amount || '—'}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-white">
                Recent orders
              </h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Your most recent orders across all channels.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <Button plain>View all</Button>
            </div>
          </div>
          <div className="mt-6">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Order</TableHeader>
                  <TableHeader>Customer</TableHeader>
                  <TableHeader>Date</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Amount</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="font-medium text-zinc-900 dark:text-white">
                        #{order.id}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-zinc-500 dark:text-zinc-400">
                        {order.customer}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-zinc-500 dark:text-zinc-400">
                        {order.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge color={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-zinc-900 dark:text-white">
                        {order.amount}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}