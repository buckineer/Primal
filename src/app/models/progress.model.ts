export class Progress {
    territory_name: string;
    territory_image_url:string;

    constructor(territory?: string,
                territory_image_url?: string){
        this.territory_name = territory;
        this.territory_image_url = territory_image_url;
    }
}