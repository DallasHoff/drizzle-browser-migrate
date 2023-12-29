import { SQLocalDrizzle } from 'sqlocal/drizzle';
import { drizzle } from 'drizzle-orm/sqlite-proxy';

// Initialize Drizzle with SQLocal driver
const { driver } = new SQLocalDrizzle('migrations-test.sqlite3');
export const db = drizzle(driver);
