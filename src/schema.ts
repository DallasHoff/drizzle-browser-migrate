import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';

export const groceries = sqliteTable('groceries', {
	id: int('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	quantity: int('quantity').default(1),
});
