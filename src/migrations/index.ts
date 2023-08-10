import { MigrationJournal } from '../migrator/types';
import _journal from './meta/_journal.json';
import Migration0000 from './0000_broad_cardiac.sql?raw';
import Migration0001 from './0001_silly_sumo.sql?raw';

export const journal: MigrationJournal = _journal;

export const migrations: Record<string, string> = {
	'0000_broad_cardiac': Migration0000,
	'0001_silly_sumo': Migration0001,
};
