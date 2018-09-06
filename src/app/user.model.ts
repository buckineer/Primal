export class User {
    id: number;
    first_name:string;
    last_name:string;
    email:string;
    phone:string;
    points:number;  
    coins: number;
    image_url:string;
    joined_clan_id : number;
    level:string;
    constructor(id?: number,
    			first_name?: string,
    			last_name?:string,
    			points?:number,
    			coins?:number,
    			image_url?:string,
    			joined_clan_id:number =0,
                level:string = "1",
                email:string = "default@default.com",
                phone:string = "000-000-000",
                ){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.points = points;
        this.coins = coins;
        this.image_url = image_url;
        this.joined_clan_id = joined_clan_id;
        this.level = level;
        this.email = email;
        this.phone = phone;
    }
}