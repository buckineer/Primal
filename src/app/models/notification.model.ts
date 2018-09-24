import { Clan } from './clan.model';

export class Notification {
    id: number;
    clan_id: number;
    clan_name: string;
    clan_image: string;

    constructor(id?: number, clan_id?: number, clan_name?: string, clan_image?: string) {
        this.id = id;
        this.clan_id = clan_id;
        this.clan_name = clan_name;
        this.clan_image = clan_image;        
    }
}
// export class Notification_info{
//       notifications:Notification[];
//       last_id:0;
// }