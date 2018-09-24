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
    clan_color: string;
    clan_img: string;

    constructor(id?:number,
                title?: string, 
                reaching_min_points?:number,
                image_url?: string, 
                starting_date?: Date,
                ending_date?: Date,
                lock_state?: boolean, 
                clan_info: string = null,
                badge_url: string = null,
                badge_text="Isigna Land",
                clan_img:string = null){
        this.id = id;
        this.title=title;
        this.image_url=image_url;
        this.starting_date=starting_date;
        this.ending_date = ending_date;
        this.lock_state=lock_state;
        this.clan_color = clan_info;
        this.reaching_min_points = reaching_min_points;
        this.badge_url =  badge_url;
        this.badge_text = badge_text;
    }

}