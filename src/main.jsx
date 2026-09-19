import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(error) { return { error } }
  componentDidCatch(error, info) { console.error('Akshat EBooks render error:', error, info) }
  render() {
    if (this.state.error) return <main style={{maxWidth:720,margin:'4rem auto',padding:'2rem',fontFamily:'system-ui',color:'#202938'}}><h1>We hit a display problem</h1><p>Please refresh the preview. If this message stays, share the error below:</p><pre style={{whiteSpace:'pre-wrap',background:'#f1f4f8',padding:'1rem',borderRadius:10}}>{String(this.state.error?.stack || this.state.error)}</pre></main>
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(<ErrorBoundary><App /></ErrorBoundary>)
