import app from './src/app.js';
import 'dotenv/config';
import { db } from './src/prisma/db.ts';

const port = process.env.PORT || 3001;

try {
  await db.connect();
  console.log('MongoDB connected through Prisma!!');

  app.listen(port, '127.0.0.1', () => {
    console.log(`API running at http://localhost:${port}`);
  });
} catch (error) {
  console.error('Startup failed:', error.message);
  await db.close();
  process.exit(1); // Exit the process with an error code
}
