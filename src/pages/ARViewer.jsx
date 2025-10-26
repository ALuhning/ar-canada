import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ARViewer() {
  const { cardId } = useParams()
  const [card, setCard] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCard()
  }, [cardId])

  const fetchCard = async () => {
    try {
      const response = await fetch(`/api/cards/${cardId}`)
      const data = await response.json()
      setCard(data)
      
      // Track view
      await fetch(`/api/cards/${cardId}/track`, { method: 'POST' })
      
      setLoading(false)
      
      // Redirect to WebXR AR page (markerless AR)
      setTimeout(() => {
        window.location.href = `/ar-mindar.html?card=${cardId}&emoji=${encodeURIComponent(data.emoji)}&name=${encodeURIComponent(data.name)}`
      }, 500)
    } catch (error) {
      console.error('Error fetching card:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading AR experience...</p>
      </div>
    )
  }

  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Launching AR...</p>
    </div>
  )
}

export default ARViewer
