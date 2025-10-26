import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CardGallery() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCards()
  }, [])

  const fetchCards = async () => {
    try {
      const response = await fetch('/api/cards')
      const data = await response.json()
      setCards(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching cards:', error)
      setLoading(false)
    }
  }

  const generateQRCodeURL = (cardId) => {
    // Use the actual deployment URL for QR codes
    const baseURL = window.location.origin
    const arURL = `${baseURL}/ar/${cardId}`
    // Add error correction and larger size for better scanning
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&data=${encodeURIComponent(arURL)}`
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading AR cards...</p>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🇨🇦 AR Card Gallery</h1>
        <p>Select a card to view its AR experience</p>
      </header>

      <div className="container">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>

        <div className="card-grid">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <span className="card-emoji">{card.emoji}</span>
              <h3>{card.name}</h3>
              <p>{card.caption}</p>
              
              <div style={{ margin: '1rem 0' }}>
                <img 
                  src={generateQRCodeURL(card.id)} 
                  alt={`QR Code for ${card.name}`}
                  style={{ width: '200px', height: '200px', borderRadius: '8px' }}
                />
              </div>

              <div className="card-stats">
                <span>👁️ {card.views_count} views</span>
              </div>

              <Link 
                to={`/ar/${card.id}`} 
                className="btn" 
                style={{ marginTop: '1rem', fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              >
                Launch AR Experience
              </Link>
            </div>
          ))}
        </div>

        <div className="instructions" style={{ marginTop: '3rem' }}>
          <h3>📲 How to Use</h3>
          <p><strong>Option 1:</strong> Click "Launch AR Experience" on any card above</p>
          <p><strong>Option 2:</strong> Scan the QR code with your phone camera to open the AR experience</p>
          <p><strong>Option 3:</strong> Print the physical cards (see documentation) and scan them with the AR viewer</p>
        </div>
      </div>
    </div>
  )
}

export default CardGallery
