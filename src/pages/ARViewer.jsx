import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ARViewer() {
  const { cardId } = useParams()
  const [card, setCard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [arReady, setArReady] = useState(false)

  useEffect(() => {
    fetchCard()
    // Check if AR libraries are loaded (they're in index.html now)
    const checkLibraries = setInterval(() => {
      if (window.AFRAME && window.AFRAME.components['arjs']) {
        setArReady(true)
        clearInterval(checkLibraries)
      }
    }, 100)
    
    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkLibraries)
      setArReady(true)
    }, 5000)
    
    return () => clearInterval(checkLibraries)
  }, [cardId])

  const fetchCard = async () => {
    try {
      const response = await fetch(`/api/cards/${cardId}`)
      const data = await response.json()
      setCard(data)
      
      // Track view
      await fetch(`/api/cards/${cardId}/track`, { method: 'POST' })
      
      setLoading(false)
    } catch (error) {
      console.error('Error fetching card:', error)
      setLoading(false)
    }
  }

  if (loading || !arReady) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading AR experience...</p>
        <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
          Allow camera access when prompted
        </p>
      </div>
    )
  }

  if (!card) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h2>Card not found</h2>
        <Link to="/gallery" className="btn" style={{ marginTop: '2rem' }}>
          Back to Gallery
        </Link>
      </div>
    )
  }

  return (
    <div className="ar-container">
      <div className="ar-overlay">
        <Link to="/gallery" className="back-btn">
          ← Back
        </Link>
      </div>

      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true;"
      >
        <a-marker preset="hiro">
          <a-box
            position="0 0.5 0"
            scale="1 1 1"
            material="color: red;"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"
          >
          </a-box>
          <a-text
            value={card.emoji}
            align="center"
            position="0 1.5 0"
            scale="3 3 3"
          />
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>

      <div className="ar-caption">
        <h2>{card.emoji} {card.name}</h2>
        <p>{card.caption}</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7 }}>
          👁️ {card.views_count} views
        </p>
        <p style={{ fontSize: '0.85rem', marginTop: '1rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '4px' }}>
          📷 Point camera at the <a href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b6b', textDecoration: 'underline' }}>Hiro marker</a>
        </p>
      </div>
    </div>
  )
}

export default ARViewer
