export class Clan {
    id: number;
    clan_name:string;
    max_members:number;
    joined_members:number;  
    image_url: string;
    clan_color:string;
    constructor(id?:number,title?: string, 
                clan_name?:string,
                max_members?: number, 
                joined_members?: number,
                image_url?: string,
                clan_color?: string){
        this.id = id;
        this.clan_name = clan_name;
        this.max_members = max_members;
        this.joined_members = joined_members;
        this.image_url = image_url;
        this.clan_color = clan_color;
    }
}