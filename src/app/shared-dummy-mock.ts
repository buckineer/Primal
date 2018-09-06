import { Territory } from './territory/territory.model';
import { Clan } from './clan.model';
import { Notification } from './notification.model';
import { User } from './user.model';
import { Progress } from './progress.model';

export const current_user_conquered_territory_id = 1;
export const color_list=['red','orange','salmon','coral','cyan'];
export const clan_avatar_list=['/assets/images/clans/object1.png',
                                '/assets/images/clans/object2.png',
                                '/assets/images/clans/object3.png',
                                '/assets/images/clans/object4.png',
                                '/assets/images/clans/object5.png',
                                '/assets/images/clans/object6.png',
                              ];
export const territories:Territory[]=[
  {id:1,title:"Bosque Impenetrable",reaching_min_points:1000,image_url:"/assets/images/map/Bosque Impenetrable.png",starting_date:new Date(2018, 8, 11),ending_date:null,lock_state:false,clan_info:{'color':"red","avatar_image_url":"hoho"}},
  new Territory(2,'Cascada Encantada',1000, '../assets/images/map/Cascada Encantada.png', new Date(2018, 9, 20),null, false ),
  new Territory(3,'Costa Pesca',1000, '../assets/images/map/Costa Pesca.png', new Date(2018, 8, 5),null, false ),
  new Territory(4,'Delat de los Manglares',1000, '../assets/images/map/Delat de los Manglares.png', new Date(2018, 10, 13), null,false ),
  new Territory(5,'Hielo Polar',1000, '../assets/images/map/Hielo Polar.png', new Date(2018, 6, 5), null,true),
  new Territory(6,'Isla del Volcán',1000, '../assets/images/map/Isla del Volcán.png', new Date(2018, 5, 18),null, true),
  new Territory(7,'Nieves Eternas',1000, '../assets/images/map/Nieves Eternas.png', new Date(2018, 9, 20),null, false ),
  new Territory(8,'Páramo Árido',1000, '../assets/images/map/Páramo Árido.png', new Date(2018, 8, 5),null, false ),
  new Territory(9,'Ribera Rica',1000, '../assets/images/map/Ribera Rica.png', new Date(2018, 10, 13), null,false ),
  new Territory(10,'Sabana Grande',1000, '../assets/images/map/Sabana Grande.png', new Date(2018, 6, 5), null,true),
  new Territory(11,'Sierra Rocosa',1000, '../assets/images/map/Sierra Rocosa.png', new Date(2018, 5, 18),null, true),
  new Territory(12,'Tunadr Helada',1000, '../assets/images/map/Tunadr Helada.png', new Date(2018, 5, 18),null, true),
];

export const clans: Clan[]=[
  {id:1,clan_name:'CLAN A', max_members:5, joined_members:3,clan_color:"red",image_url:'/assets/images/clans/object6.png', members: ['Cristina Rodriguez', 'Amelian Rose'],
    points: 115,
    territory_info: [{territory_name: 'Cascada Encantada', territory_image_url: '../assets/images/map/Cascada Encantada.png'},
                     {territory_name: 'Costa Pesca', territory_image_url: '../assets/images/map/Costa Pesca.png'}]},
  {id:2,clan_name:'CLAN B', max_members:5, joined_members:5,clan_color:"coral",image_url:'/assets/images/clans/object10.png', members: ['Cristina Rodriguez', 'Amelian Rose'],
  points: 175,
  territory_info: [{territory_name: 'Cascada Encantada', territory_image_url: '../assets/images/map/Cascada Encantada.png'},
                    {territory_name: 'Costa Pesca', territory_image_url: '../assets/images/map/Costa Pesca.png'}]},
  {id:3,clan_name:'CLAN C', max_members:5, joined_members:4,clan_color:"orangered",image_url:'/assets/images/clans/object9.png', members: ['Cristina Rodriguez', 'Amelian Rose'],
  points: 225,
  territory_info: [{territory_name: 'Cascada Encantada', territory_image_url: '../assets/images/map/Cascada Encantada.png'},
                    {territory_name: 'Costa Pesca', territory_image_url: '../assets/images/map/Costa Pesca.png'}]},
  {id:4,clan_name:'CLAN D', max_members:5, joined_members:4,clan_color:"orange",image_url:'/assets/images/clans/object7.png', members: ['Cristina Rodriguez', 'Amelian Rose'],
  points: 335,
  territory_info: [{territory_name: 'Cascada Encantada', territory_image_url: '../assets/images/map/Cascada Encantada.png'},
                    {territory_name: 'Costa Pesca', territory_image_url: '../assets/images/map/Costa Pesca.png'}]},
];

export const notification: Notification[] = [
  { id: 1, clan_id: 1, clan_name: 'CLAN A', clan_image: '/assets/images/clans/object6.png'},
  { id: 2, clan_id: 2, clan_name: 'CLAN B', clan_image: '/assets/images/clans/object10.png'},
  { id: 3, clan_id: 3, clan_name: 'CLAN C', clan_image: '/assets/images/clans/object9.png'},
];


export const users:User[]=[
  {id:1,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,image_url:"/assets/images/avatars Final/T1h Sapiens Head.png"},
  {id:2,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,image_url:"/assets/images/avatars Final/T2h Sapiens Head.png"},
  {id:3,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,image_url:"/assets/images/avatars Final/T3h Sapiens Head.png"},
  {id:4,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,image_url:"/assets/images/avatars Final/T4h Sapiens Head.png"},
  {id:5,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,image_url:"/assets/images/avatars Final/T5h Sapiens Head.png"},
]