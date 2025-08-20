import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { SidebarLayout } from './components/sidebar-layout.jsx'
import { Navbar } from './components/navbar.jsx'
import { Sidebar, SidebarSection, SidebarItem, SidebarHeading } from './components/sidebar.jsx'

function DashboardHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-950 dark:text-white">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl p-6 ring-1 ring-zinc-950/10 dark:ring-white/10">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">Tailwind</div>
          <div className="mt-2 text-lg font-medium">v4 styles are loading ✅</div>
        </div>
        <div className="rounded-xl p-6 ring-1 ring-zinc-950/10 dark:ring-white/10">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">Catalyst</div>
          <div className="mt-2 text-lg font-medium">Navbar/Sidebar rendered ✅</div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const navbar = <Navbar />
  const sidebar = (
    <Sidebar>
      <SidebarSection>
        <SidebarHeading>Navigation</SidebarHeading>
        <SidebarItem href="/dashboard" current>Dashboard</SidebarItem>
      </SidebarSection>
    </Sidebar>
  )

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<SidebarLayout navbar={navbar} sidebar={sidebar}><DashboardHome /></SidebarLayout>} />
      <Route path="*" element={<div className="p-6">Not found</div>} />
    </Routes>
  )
}