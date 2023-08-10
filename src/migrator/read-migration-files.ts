import { sha256 } from './sha256';
import { MigrationConfig, MigrationMeta } from './types';

// Based on https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/migrator.ts
export async function readMigrationFiles(
	config: MigrationConfig
): Promise<MigrationMeta[]> {
	const { journal, migrations } = config;
	const migrationQueries: MigrationMeta[] = [];

	for (const journalEntry of journal.entries) {
		const migration = migrations[journalEntry.tag];
		const sql = migration.split('--> statement-breakpoint');

		migrationQueries.push({
			sql: sql,
			bps: journalEntry.breakpoints,
			folderMillis: journalEntry.when,
			hash: await sha256(migration),
		});
	}

	return migrationQueries;
}
