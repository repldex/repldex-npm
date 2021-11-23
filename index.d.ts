export class Client {
  constructor(token?: string);

  // Native
  public getEntry(name: string): Promise<unknown>;
}
