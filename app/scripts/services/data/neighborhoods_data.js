'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.neighborhoodsData.js
 * @description # neighborhoodsData.js Constant in the
 *              arkhamHelperApp.
 */
angular.module('arkhamHelperApp').constant(
    'neighborhoodsData.js',
    [ "Backwoods Country" :{
      expansion: "Dunwich Horror"
    }, "Blasted Heath": {
      expansion: "Dunwich Horror"
    }, "Central Hill": {
      expansion: "Kingsport Horror"
    }, "Church Green" : {
      expansion: "Innsmouth Horror"
    },
        "Downtown" : {
          locations: ["Bank of Arkham", "Arkham Asylum","Independence Square"],
          white: "Easttown",
          black: "Northside"
        }, 
        "Easttown" : {
          locations: ["Hibb's Roadhouse","Velma's Dinner","Police Station"],
          white: "Rivertown",
          black: "Downtown"
        }, 
        "Factory District" : {expansion: "Innsmouth Horror"}, 
        "French Hill" : {
          locations: ["The Witch House", "Silver Twilight Lodge"],
          white: "Southside",
          black: "Rivertown"
        },
        "Harborside" : {expansion: "Kingsport Horror"}, 
        "Innsmouth Shore" : {expansion: "Innsmouth Horror"}, 
        "Kingsport Head" : {expansion: "Kingsport Horror"},
        "Merchant District" : {
          locations: ["Unvisited Isle","River Docks","The Unnamable"],
          white: "Northside",
          black: "Miskatonic University"},
        "Miskatonic University" : {
          locations: ["Science Building","Administration","Libary"],
          white: "Merchant District",
          black: "Uptown"
        }, 
        "Northside" : {
          locations: ["Train Station", "Newspaper" , "Curiositie Shoppe"],
          white: "Downtown",
          black: "Merchant District"
        }, 
        "Rivertown" :{
          locations: ["Graveyard","Black Cave","General Store"],
          white: "French Hill",
          black: "Easttown"},
        "South Shore" : {expansion: "Kingsport Horror"},
        "Southside" : {
          locations: ["Ma's Boarding House","South Church","Historical Society"],
          white: "Uptown",
          black: "French Hill"
        }, 
        "Uptown" : {
          locations: ["Woods","Ye Olde Magick Shoppe","St. Mary's Hospital"],
          white: "Miskatonic University",
          black: "Southside"
        }, 
        "Village Commons" : {expansion: "Dunwich Horror"} ]);
