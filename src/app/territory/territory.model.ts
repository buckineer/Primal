import { Url } from "url";

export class Territory {
    id: number;
    title: string;
    image_url: string;
    starting_date: Date;
    ending_date: Date;
    conquerred_clan: string;
    badge_state: string;
    reaching_min_points: number;
    lock_state: boolean;
    conquerring_state: boolean;

    constructor(title: string, image_url: string, starting_date: Date, lock_state: boolean, conquerring_state: boolean){
        this.title=title;
        this.image_url=image_url;
        this.starting_date=starting_date;
        this.lock_state=lock_state;
        this.conquerring_state=conquerring_state;
    }
}