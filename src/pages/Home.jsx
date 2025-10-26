import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="app">
      <header className="header">
        <h1>🇨🇦 Discover Canada in AR</h1>
        <p>Experience Canadian icons through augmented reality</p>
      </header>

      <div className="container">
        <section className="hero">
          <h2>🍁 Explore Canada Like Never Before</h2>
          <p>
            Scan collectible AR cards with your phone and watch Canadian icons come to life
            in stunning 3D augmented reality!
          </p>
          <div>
            <Link to="/gallery" className="btn">
              View AR Cards
            </Link>
            <Link to="/analytics" className="btn btn-secondary">
              View Stats
            </Link>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <div style={{ fontSize: '3rem' }}>📱</div>
            <h3>No App Required</h3>
            <p>Works directly in your mobile browser using WebAR technology</p>
          </div>
          <div className="feature">
            <div style={{ fontSize: '3rem' }}>🎨</div>
            <h3>Interactive 3D</h3>
            <p>See 3D models, animations, and effects overlaid on physical cards</p>
          </div>
          <div className="feature">
            <div style={{ fontSize: '3rem' }}>🎯</div>
            <h3>Collect Them All</h3>
            <p>5 unique Canadian icons to discover and experience</p>
          </div>
        </section>

        <div className="instructions">
          <h3>🧠 How It Works</h3>
          <ol>
            <li>Pick up or print one of our AR cards</li>
            <li>Scan the QR code with your phone camera</li>
            <li>Allow camera access when prompted</li>
            <li>Point your camera at the card image</li>
            <li>Watch as the AR experience comes to life!</li>
          </ol>
        </div>

        <section style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h2>Featured Cards</h2>
          <div className="card-grid" style={{ marginTop: '2rem' }}>
            <div className="card">
              <span className="card-emoji">🦫</span>
              <h3>Beaver</h3>
              <p>Our national animal—industrious and iconic</p>
            </div>
            <div className="card">
              <span className="card-emoji">🍁</span>
              <h3>Maple Leaf</h3>
              <p>A symbol of unity since 1868</p>
            </div>
            <div className="card">
              <span className="card-emoji">🏒</span>
              <h3>Hockey</h3>
              <p>The heart of Canadian winters</p>
            </div>
            <div className="card">
              <span className="card-emoji">🚀</span>
              <h3>Canadarm</h3>
              <p>Built in Canada. Used in space</p>
            </div>
            <div className="card">
              <span className="card-emoji">🍔</span>
              <h3>Poutine</h3>
              <p>Quebec comfort food gone worldwide</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
