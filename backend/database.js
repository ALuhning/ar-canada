import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use Railway volume path if available, otherwise use local path
const dbPath = process.env.DATABASE_PATH || join(__dirname, 'discover-canada.db');
const db = new Database(dbPath);

console.log(`📁 Database path: ${dbPath}`);

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS ar_cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    emoji TEXT NOT NULL,
    image_target_url TEXT NOT NULL,
    model_url TEXT,
    caption TEXT NOT NULL,
    sound_url TEXT,
    views_count INTEGER DEFAULT 0,
    ar_type TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS card_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    card_id INTEGER NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    FOREIGN KEY (card_id) REFERENCES ar_cards(id)
  );
`);

// Seed data
const cards = [
  {
    name: 'Beaver',
    emoji: '🦫',
    image_target_url: '/markers/beaver-marker.png',
    model_url: '/models/beaver.gltf',
    caption: 'Our national animal—industrious and iconic.',
    sound_url: '/sounds/beaver-gnaw.mp3',
    ar_type: '3d-model'
  },
  {
    name: 'Maple Leaf',
    emoji: '🍁',
    image_target_url: '/markers/maple-marker.png',
    model_url: '/models/maple-leaves.gltf',
    caption: 'A symbol of unity since 1868.',
    sound_url: '/sounds/wind-rustle.mp3',
    ar_type: 'animation'
  },
  {
    name: 'Hockey',
    emoji: '🏒',
    image_target_url: '/markers/hockey-marker.png',
    model_url: '/models/hockey-rink.gltf',
    caption: 'The heart of Canadian winters.',
    sound_url: '/sounds/goal-horn.mp3',
    ar_type: '3d-scene'
  },
  {
    name: 'Canadarm',
    emoji: '🚀',
    image_target_url: '/markers/canadarm-marker.png',
    model_url: '/models/canadarm.gltf',
    caption: 'Built in Canada. Used in space.',
    sound_url: '/sounds/space-ambient.mp3',
    ar_type: '3d-model'
  },
  {
    name: 'Poutine',
    emoji: '🍔',
    image_target_url: '/markers/poutine-marker.png',
    model_url: '/models/poutine.gltf',
    caption: 'Quebec comfort food gone worldwide.',
    sound_url: '/sounds/sizzle.mp3',
    ar_type: '3d-model'
  }
];

const insertCard = db.prepare(`
  INSERT OR IGNORE INTO ar_cards (name, emoji, image_target_url, model_url, caption, sound_url, ar_type)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

for (const card of cards) {
  insertCard.run(
    card.name,
    card.emoji,
    card.image_target_url,
    card.model_url,
    card.caption,
    card.sound_url,
    card.ar_type
  );
}

console.log('✅ Database initialized and seeded successfully!');

export default db;
