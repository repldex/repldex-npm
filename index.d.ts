export class Client {
	// Native
	public entry(entry_name: string): Promise<unknown>;
	public fetchEntries(sort: String, page: Number, limit: Number, search_query: String): Promise<unknown>;
	public selfentry(owner_id: string): Promise<unknown>;
}