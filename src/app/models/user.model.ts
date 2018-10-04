export class User {
    id: number;
    first_name:string;
    last_name:string;
    email:string;
    phone_number:string;
    points:number;  
    coins: number;
    avatar:string;
    joined_clan : number;        //clan id
    level:number;
    level_name:string;
    admin_clan:number;
    badge_list:any[];
    image_url:string;
    constructor(id: number=0,
    			first_name: string="",
    			last_name:string="",
    			points:number=0,
    			coins:number=0,
    			image_url:string="",    // avatar_type
    			joined_clan:number =-1,        //not joined to any clan
                level:number = 1,
                level_name:string = "Unknown",
                email:string = "default@default.com",
                phone:string = "000-000-000",
                admin_clan:number =-1,
                badge_list:any[] = []
                ){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.points = points;
        this.coins = coins;
        this.avatar = image_url;
        this.joined_clan = joined_clan;
        this.level = level;
        this.level_name = level_name
        this.email = email;
        this.phone_number = phone;
        this.admin_clan = admin_clan
        this.badge_list = badge_list
    }

}