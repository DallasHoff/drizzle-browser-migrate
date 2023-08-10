// Based on https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/migrator.ts

export interface MigrationConfig {
	journal: MigrationJournal;
	migrations: Record<string, string>;
	migrationsTable?: string;
}

export interface MigrationJournal {
	version: string;
	dialect: string;
	entries: {
		idx: number;
		version: string;
		when: number;
		tag: string;
		breakpoints: boolean;
	}[];
}

export interface MigrationMeta {
	sql: string[];
	folderMillis: number;
	hash: string;
	bps: boolean;
}
