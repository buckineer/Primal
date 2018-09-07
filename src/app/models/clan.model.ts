import { Progress } from './progress.model';

export class Clan {
    id: number;
    clan_name:string;
    max_members:number;
    joined_members:number;  
    image_url: string;
    clan_color:string;
    members:  number[];
    points: number;
    territory_info: Progress[];
    description: string;
    motto: string;
    admin_user_id: number;
    
    constructor(admin_user_id:number,
                id?:number,
                clan_name?:string,
                max_members?: number, 
                joined_members?: number,
                image_url?: string,
                clan_color?: string,
                members?:number[],
                points?: number,
                territory_info: Progress[] = null,
                description?: string,
                motto?: string,

                ){
        this.id = id;
        this.clan_name = clan_name;
        this.max_members = max_members;
        this.joined_members = joined_members;
        this.image_url = image_url;
        this.clan_color = clan_color;
        this.members = members;
        this.points = points;
        this.territory_info = territory_info;
        this.description = description;
        this.motto = motto;
    }
}