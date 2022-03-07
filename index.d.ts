export class Client {
	// Native
	public entry(entry_name: string): Promise<unknown>;
	public selfentry(owner_id: string): Promise<unknown>;
}