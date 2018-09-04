import {Territory} from './territory/territory.model';

export const current_user_conquered_territory_id = 1;
export const territories:Territory[]=[
  {id:1,title:"Territory 1",reaching_min_points:1000,image_url:"/assets/images/map/Territory 1.png",starting_date:new Date(2018, 8, 11),ending_date:null,lock_state:false,clan_info:{'color':"red","avatar_image_url":"hoho"}},
  new Territory(2,'Territory 2',1000, '../assets/images/map/Territory 2.png', new Date(2018, 9, 20),null, false ),
  new Territory(3,'Territory 3',1000, '../assets/images/map/Territory 3.png', new Date(2018, 8, 5),null, false ),
  new Territory(4,'Territory 4',1000, '../assets/images/map/Territory 4.png', new Date(2018, 10, 13), null,false ),
  new Territory(5,'Territory 5',1000, '../assets/images/map/Territory 5.png', new Date(2018, 6, 5), null,true),
  new Territory(6,'Territory 6',1000, '../assets/images/map/Territory 6.png', new Date(2018, 5, 18),null, true),
  new Territory(7,'Territory 7',1000, '../assets/images/map/Territory 2.png', new Date(2018, 9, 20),null, false ),
  new Territory(8,'Territory 8',1000, '../assets/images/map/Territory 3.png', new Date(2018, 8, 5),null, false ),
  new Territory(9,'Territory 9',1000, '../assets/images/map/Territory 4.png', new Date(2018, 10, 13), null,false ),
  new Territory(10,'Territory 10',1000, '../assets/images/map/Territory 5.png', new Date(2018, 6, 5), null,true),
  new Territory(11,'Territory 11',1000, '../assets/images/map/Territory 6.png', new Date(2018, 5, 18),null, true),
  new Territory(12,'Territory 12',1000, '../assets/images/map/Territory 6.png', new Date(2018, 5, 18),null, true),
]