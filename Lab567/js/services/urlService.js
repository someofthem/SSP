var myApp=angular.module('myApp');

myApp.service("urlService", function(){
    return{
        multimedia:[
            {
                url: "img/hacker.png",
                format: "Standard Thumbnail",
                height: 75,
                width: 75,
                type: "image",
                subtype: "photo",
                caption: "Russian hackers terror.",
                copyright: "Ivan Bakunovich for The New York Times"
            },
            {
                url: "img/hacker.png",
                format: "thumbLarge",
                height: 150,
                width: 150,
                type: "image",
                subtype: "photo",
                caption: "Russian hackers terror.",
                copyright: "Ivan Bakunovich for The New York Times"
            },
            {
                url: "img/hacker.png",
                format: "mediumThreeByTwo210",
                height: 140,
                width: 210,
                type: "image",
                subtype: "photo",
                caption: "Russian hackers terror.",
                copyright: "Ivan Bakunovich for The New York Times"
            }
        ]
    };
})