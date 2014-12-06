'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.neighborhoodsData.js
 * @description # neighborhoodsData.js Constant in the
 *              arkhamHelperApp.
 */
angular.module('arkhamHelperApp').constant(
    'neighborhoodsData',
    { "Backwoods Country" :{
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
          movement: {
            white: "Easttown",
            black: "Northside"
          }
        }, 
        "Easttown" : {
          locations: ["Hibb's Roadhouse","Velma's Diner","Police Station"],
          movement: {
            white: "Rivertown",
            black: "Downtown"
          }
        }, 
        "Factory District" : {expansion: "Innsmouth Horror"}, 
        "French Hill" : {
          locations: ["The Witch House", "Silver Twilight Lodge"],
          movement: {
            white: "Southside",
            black: "Rivertown",
            other: ["Miskatonic University"]
          }
        },
        "Harborside" : {expansion: "Kingsport Horror"}, 
        "Innsmouth Shore" : {expansion: "Innsmouth Horror"}, 
        "Kingsport Head" : {expansion: "Kingsport Horror"},
        "Merchant District" : {
          locations: ["Unvisited Isle","River Docks","The Unnamable"],
          movement: {
            white: "Northside",
            black: "Miskatonic University",
            other: ["Rivertown"]
            }
          },
        "Miskatonic University" : {
          locations: ["Science Building","Administration Building","Library"],
          movement: {
            white: "Merchant District",
            black: "Uptown",
            other: ["French Hill"]
          }
        }, 
        "Northside" : {
          locations: ["Train Station", "Newspaper" , "Curiositie Shoppe"],
          movement: {
            white: "Downtown",
            black: "Merchant District"
          }
        }, 
        "Rivertown" :{
          locations: ["Graveyard","Black Cave","General Store"],
          movement: {
            white: "French Hill",
            black: "Easttown",
            other: ["Merchant Distrcit"]
          }
        },
        "South Shore" : {expansion: "Kingsport Horror"},
        "Southside" : {
          locations: ["Ma's Boarding House","South Church","Historical Society"],
          movement: {
            white: "Uptown",
            black: "French Hill"
          }
        }, 
        "Uptown" : {
          locations: ["Woods","Ye Olde Magick Shoppe","St. Mary's Hospital"],
          movement: {
            white: "Miskatonic University",
            black: "Southside"
          }
        }, 
        "Village Commons" : {expansion: "Dunwich Horror"} });
