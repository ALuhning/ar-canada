import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Analytics() {
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics')
      const data = await response.json()
      setStats(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching analytics:', error)
      setLoading(false)
    }
  }

  const totalViews = stats.reduce((sum, card) => sum + card.views_count, 0)

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading analytics...</p>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>📊 AR Analytics</h1>
        <p>Track engagement with your AR cards</p>
      </header>

      <div className="container">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>

        <div style={{ 
          textAlign: 'center', 
          background: 'rgba(255, 0, 0, 0.1)', 
          padding: '2rem',
          borderRadius: '12px',
          margin: '2rem 0'
        }}>
          <h2 style={{ fontSize: '3rem', color: '#FF0000' }}>{totalViews}</h2>
          <p style={{ fontSize: '1.2rem' }}>Total AR Views</p>
        </div>

        <h2 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Card Performance</h2>
        <div className="analytics-grid">
          {stats.map((card, index) => (
            <div key={card.id} className="analytics-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{card.emoji}</span>
                <div>
                  <div className="name">{card.name}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                    Rank #{index + 1}
                  </div>
                </div>
              </div>
              <div className="stats">
                <div className="views">{card.views_count}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>views</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px'
        }}>
          <h3>📈 Insights</h3>
          <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
            <li>Most popular: <strong>{stats[0]?.name || 'N/A'}</strong> with {stats[0]?.views_count || 0} views</li>
            <li>Average views per card: <strong>{Math.round(totalViews / stats.length) || 0}</strong></li>
            <li>Total unique cards: <strong>{stats.length}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Analytics
