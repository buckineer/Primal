import { Url } from "url";

export class Territory {
    id: number;
    title: string;
    image_url: string;
    starting_date: Date;
    ending_date: Date;
    reaching_min_points: number;
    lock_state: boolean;    // if the territory locked or not
    badge_url:string;
    badge_text:string;
    clan_info:{'color':string,'avatar_image_url':string};

    constructor(id?:number,
                title?: string, 
                reaching_min_points?:number,
                image_url?: string, 
                starting_date?: Date,
                ending_date?: Date,
                lock_state?: boolean, 
                clan_info:{'color':string,'avatar_image_url':string}=null,
                badge_url="/assets/images/map/badge1.png",
                badge_text="Isigna Land"){
        this.id = id;
        this.title=title;
        this.image_url=image_url;
        this.starting_date=starting_date;
        this.ending_date = ending_date;
        this.lock_state=lock_state;
        this.clan_info = clan_info;
        this.reaching_min_points = reaching_min_points;
        this.badge_url = badge_url;
        this.badge_text = badge_text;
    }

}