export class Singleton {
    static captain: Singleton;
    private name: string | null = 'Captain';

    private constructor(private _name: string) { this.name = _name}

    static getCaptain(name: string | null): Singleton {
        if (!Singleton.captain) {
            Singleton.captain = new Singleton(name);
        }
        return Singleton.captain;
    }

    static isCaptain(captain: Singleton): boolean {
        return Singleton.captain === captain;
    }

    public toString(): string {
        return 'I am the captain';
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}