import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import db from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration - allow all origins since we're serving frontend too
app.use(cors());
app.use(express.json());

// API Routes
// Get all AR cards
app.get('/api/cards', (req, res) => {
  try {
    const cards = db.prepare('SELECT * FROM ar_cards ORDER BY id').all();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific AR card
app.get('/api/cards/:id', (req, res) => {
  try {
    const card = db.prepare('SELECT * FROM ar_cards WHERE id = ?').get(req.params.id);
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Track card view
app.post('/api/cards/:id/track', (req, res) => {
  try {
    const { id } = req.params;
    const userAgent = req.headers['user-agent'];
    
    // Insert view record
    db.prepare('INSERT INTO card_views (card_id, user_agent) VALUES (?, ?)').run(id, userAgent);
    
    // Increment views count
    db.prepare('UPDATE ar_cards SET views_count = views_count + 1 WHERE id = ?').run(id);
    
    const card = db.prepare('SELECT * FROM ar_cards WHERE id = ?').get(id);
    res.json({ success: true, views: card.views_count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get analytics
app.get('/api/analytics', (req, res) => {
  try {
    const stats = db.prepare(`
      SELECT 
        c.id,
        c.name,
        c.emoji,
        c.views_count,
        COUNT(v.id) as total_scans
      FROM ar_cards c
      LEFT JOIN card_views v ON c.id = v.card_id
      GROUP BY c.id
      ORDER BY c.views_count DESC
    `).all();
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from public directory (markers, models, sounds, demo.html)
app.use(express.static(join(__dirname, '../public')));

// Serve React frontend build (must be after API routes)
app.use(express.static(join(__dirname, '../dist')));

// SPA fallback - send all other requests to React app
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🇨🇦 Discover Canada AR - Full Stack Server`);
  console.log(`Port: ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Database: ${db.name}`);
  console.log(`Serving: API + Frontend`);
});
