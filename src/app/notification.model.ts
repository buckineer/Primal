export class Notification {
    clan_id: number;
    message: string;

    constructor(clan_id?:number, message?: string) {
        this.clan_id = clan_id;
        this.message = message;
    }
}