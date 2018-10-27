import { Gift } from './gift.model';

export class GiftTrack {
	id:number;
    gift: Gift;
    player: number;
    bought_date: string;
}