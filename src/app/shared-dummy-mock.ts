import { Territory } from './models/territory.model';
import { Clan } from './models/clan.model';
import { Notification } from './models/notification.model';
import { User } from './models/user.model';
import { Progress } from './models/progress.model';
import { Info } from './models/info.model';
import { Gift } from './models/gift.model';

export const current_user_conquered_territory_id = 6;
export const color_list=['red','aqua','orange','salmon','coral',];

export const clan_avatar_list=['/images/clans/object1.png',
                                '/images/clans/object2.png',
                                '/images/clans/object3.png',
                                '/images/clans/object4.png',
                                '/images/clans/object5.png',
                                '/images/clans/object6.png',
                              ];
export const user_avatar_list=[
  { 'value': 'T1',
    'image':'/images/avatars Final/T1h Sapiens Head.png'},
  { 'value': 'T2',
    'image':'/images/avatars Final/T2h Sapiens Head.png'},
  { 'value': 'T3',
    'image':'/images/avatars Final/T3h Sapiens Head.png'},
  { 'value': 'T4',
    'image':'/images/avatars Final/T4h Sapiens Head.png'},
]
export const territories:Territory[]=[
  // {id:1,title:"Bosque Impenetrable",reaching_min_points:1000,image_url:"/assets/images/map/Costa Pesca.png",starting_date:new Date(2018, 8, 11),ending_date:null,lock_state:true,clan_info:"orange",badge_url:"/assets/images/clans/object6.png",badge_text:"This is test"},
  // new Territory(2,'Cascada Encantada',1000, '../assets/images/map/Cascada Encantada.png', new Date(2018, 9, 20),null, true, "red", "/assets/images/clans/object2.png" ),
  // new Territory(3,'Costa Pesca',1000, '../assets/images/map/Hielo Polar.png', new Date(2018, 8, 5),null, true, 'salmon', "/assets/images/clans/object3.png" ),
  // new Territory(4,'Delat de los Manglares',1000, '../assets/images/map/Delat de los Manglares.png', new Date(2018, 10, 13), null,true, "cyan", "/assets/images/clans/object4.png" ),
  // new Territory(5,'Hielo Polar',1000, '../assets/images/map/Isla del Volcán.png', new Date(2018, 6, 5), null,true, "coral", "/assets/images/clans/object5.png"),
  // new Territory(6,'Isla del Volcán',1000, '../assets/images/map/Bosque Impenetrable.png', new Date(2018, 5, 18),null, false),
  // new Territory(7,'Nieves Eternas',1000, '../assets/images/map/Nieves Eternas.png', new Date(2018, 9, 20),null, true ),
  // new Territory(8,'Páramo Árido',1000, '../assets/images/map/Páramo Árido.png', new Date(2018, 8, 5),null, true ),
  // new Territory(9,'Ribera Rica',1000, '../assets/images/map/Ribera Rica.png', new Date(2018, 10, 13), null,true ),
  // new Territory(10,'Sabana Grande',1000, '../assets/images/map/Sabana Grande.png', new Date(2018, 6, 5), null,true),
  // new Territory(11,'Sierra Rocosa',1000, '../assets/images/map/Sierra Rocosa.png', new Date(2018, 5, 18),null, true),
  // new Territory(12,'Tunadr Helada',1000, '../assets/images/map/Tunadr Helada.png', new Date(2018, 5, 18),null, true),
];

export const clans: Clan[]=[
  // {admin_user_id:1,id:1,name:'Elefantes', max_members:5, joined_members:3,clan_color:"red",image:'/assets/images/clans/object6.png',
  //   members: [1,2,3],
  //   points: 115,
  //   territory_info: [{territory_name: 'Cascada Encantada', territory_image_url: '../assets/images/map/Cascada Encantada.png'},
  //                    {territory_name: 'Costa Pesca', territory_image_url: '../assets/images/map/Costa Pesca.png'}],
  //                   description: 'El clan de norte con mucha gente',
  //                 motto: 'A POR ELLOS!'},
  // {admin_user_id:2,id:2,name:'CLAN B', max_members:5, joined_members:5,clan_color:"coral",image:'/assets/images/clans/object10.png', 
  // members: [1,2,3,4,5],
  // points: 175,
  // territory_info: [{territory_name: 'Cascada Encantada', territory_image_url: '../assets/images/map/Cascada Encantada.png'},
  //                   {territory_name: 'Costa Pesca', territory_image_url: '../assets/images/map/Costa Pesca.png'},
  //                   {territory_name: 'Sierra Rocosa', territory_image_url: '../assets/images/map/Sierra Rocosa.png'},
  //                   {territory_name: 'Tunadr Helada', territory_image_url: '../assets/images/map/Tunadr Helada.png'}],
  //                   description: 'El clan de norte con mucha gente',
  //                   motto: 'A POR ELLOS!'},
  // {admin_user_id:3,id:3,name:'CLAN C', max_members:5, joined_members:4,clan_color:"orangered",image:'/assets/images/clans/object9.png',
  // members: [1,2,3,4],
  // points: 225,
  // territory_info: [{territory_name: 'Cascada Encantada', territory_image_url: '../assets/images/map/Cascada Encantada.png'},
  //                   {territory_name: 'Costa Pesca', territory_image_url: '../assets/images/map/Costa Pesca.png'}],
  //                   description: 'El clan de norte con mucha gente',
  //                   motto: 'A POR ELLOS!'},
  // {admin_user_id:1,id:4,name:'CLAN D', max_members:5, joined_members:4,clan_color:"orange",image:'/assets/images/clans/object7.png',
  // members: [1,2,3,4],
  // points: 335,
  // territory_info: [{territory_name: 'Cascada Encantada', territory_image_url: '../assets/images/map/Cascada Encantada.png'},
  //                   {territory_name: 'Costa Pesca', territory_image_url: '../assets/images/map/Costa Pesca.png'}],
  //                   description: 'El clan de norte con mucha gente',
  //                   motto: 'A POR ELLOS!'},
];

export const notification: Notification[] = [
  { id: 1, clan_id: 1, clan_name: 'CLAN A', clan_image: '/images/clans/object6.png'},
  { id: 2, clan_id: 2, clan_name: 'CLAN B', clan_image: '/images/clans/object10.png'},
  { id: 3, clan_id: 3, clan_name: 'CLAN C', clan_image: '/images/clans/object9.png'},
];

export const info: Info[] = [
  {item: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."},
  {item: "Lorem ipsum", description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."},
  {item: "Lorem ipsum", description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."},
  {item: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."},
  {item: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
]

export const gift: Gift[] = [
  // { item: "REGALO 1", description: "500 monedas", purchasable: true},
  // { item: "REGALO 2", description: "750 monedas", purchasable: false},
  // { item: "REGALO 3", description: "1.000 monedas", purchasable: false},
  // { item: "REGALO 4", description: "2.500 monedas", purchasable: false},
]
export const users:User[]=[
  // {id:1,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,avatar:"/assets/images/avatars Final/T1h Sapiens Head.png",joined_clan:-1,level:"1",email:"test@test.com",phone_number:"111-111-111"},
  // {id:2,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,avatar:"/assets/images/avatars Final/T2h Sapiens Head.png",joined_clan:1,level:"1",email:"test@test.com",phone_number:"111-111-111"},
  // {id:3,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,avatar:"/assets/images/avatars Final/T3h Sapiens Head.png",joined_clan:0,level:"1",email:"test@test.com",phone_number:"111-111-111"},
  // {id:4,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,avatar:"/assets/images/avatars Final/T4h Sapiens Head.png",joined_clan:-1,level:"1",email:"test@test.com",phone_number:"111-111-111"},
  // {id:5,first_name:"Cristina",last_name:"Rodriguez",points:1658,coins:1658,avatar:"/assets/images/avatars Final/T5h Sapiens Head.png",joined_clan:-1,level:"1",email:"test@test.com",phone_number:"111-111-111"},
]