import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ARViewer() {
  const { cardId } = useParams()
  const [card, setCard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [arReady, setArReady] = useState(false)

  useEffect(() => {
    fetchCard()
    loadARLibraries()
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

  const loadARLibraries = () => {
    // Load A-Frame
    if (!document.querySelector('script[src*="aframe"]')) {
      const aframeScript = document.createElement('script')
      aframeScript.src = 'https://aframe.io/releases/1.5.0/aframe.min.js'
      document.head.appendChild(aframeScript)
      
      aframeScript.onload = () => {
        // Load AR.js after a small delay to ensure A-Frame is ready
        setTimeout(() => {
          const arScript = document.createElement('script')
          arScript.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js'
          document.head.appendChild(arScript)
          
          arScript.onload = () => {
            setTimeout(() => setArReady(true), 500)
          }
          
          arScript.onerror = () => {
            console.error('Failed to load AR.js')
            setArReady(true) // Continue anyway
          }
        }, 100)
      }
      
      aframeScript.onerror = () => {
        console.error('Failed to load A-Frame')
        setArReady(true) // Continue anyway
      }
    } else {
      setArReady(true)
    }
  }

  if (loading || !arReady) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading AR experience...</p>
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
          {/* Default 3D Box - Replace with actual models */}
          <a-box
            position="0 0.5 0"
            material="color: #FF0000;"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"
          >
            <a-text
              value={card.emoji}
              align="center"
              position="0 1.5 0"
              scale="2 2 2"
            />
          </a-box>
          
          {/* Add specific effects based on card type */}
          {card.name === 'Maple Leaf' && (
            <a-entity>
              <a-plane
                position="0 2 0"
                rotation="-90 0 0"
                width="2"
                height="2"
                material="color: #FF0000; opacity: 0.8"
                animation="property: position; to: 0 0 0; dur: 3000; loop: true"
              />
            </a-entity>
          )}
          
          {card.name === 'Poutine' && (
            <a-entity>
              <a-cylinder
                position="0 0.5 0"
                radius="0.5"
                height="0.5"
                material="color: #8B4513"
              />
              {/* Particle effect simulation */}
              <a-sphere
                position="0 1 0"
                radius="0.1"
                material="color: white; opacity: 0.6"
                animation="property: position; to: 0 2 0; dur: 2000; loop: true"
              />
            </a-entity>
          )}
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>

      <div className="ar-caption">
        <h2>{card.emoji} {card.name}</h2>
        <p>{card.caption}</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7 }}>
          👁️ {card.views_count} views
        </p>
      </div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0,0,0,0.8)',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        maxWidth: '90%',
        zIndex: 5
      }}>
        <h3>📷 Point your camera at the Hiro marker</h3>
        <p style={{ marginTop: '1rem', opacity: 0.8 }}>
          Download the Hiro marker at: <a href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" target="_blank" style={{ color: '#ff3333' }}>Get Marker</a>
        </p>
        <p style={{ fontSize: '0.85rem', marginTop: '1rem', opacity: 0.6 }}>
          Make sure to allow camera access when prompted
        </p>
      </div>
    </div>
  )
}

export default ARViewer
