import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/** Toggle router type:
 *  - Use BrowserRouter for clean URLs.
 *  - If you still get a blank page on preview/static hosting, switch to HashRouter.
 */
import { BrowserRouter /*, HashRouter as BrowserRouter */ } from 'react-router-dom'
import App from './App.jsx'

function RootErrorBoundary({ error }) {
  return (
    <div className="p-6 m-4 rounded-xl ring-1 ring-red-200 bg-red-50 text-red-800">
      <h2 className="font-semibold">Runtime error</h2>
      <pre className="mt-2 whitespace-pre-wrap text-xs">{String(error?.stack || error?.message || error)}</pre>
    </div>
  )
}

function Root() {
  const [err, setErr] = React.useState(null)
  React.useEffect(() => {
    const onError = (e) => setErr(e.reason || e.error || e)
    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onError)
    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onError)
    }
  }, [])
  if (err) return <RootErrorBoundary error={err} />
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
)
