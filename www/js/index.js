/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var beer = new Beer('111', 'Corona', 'extra 5.7%', 'bla bla', 'corona.png');
        var beer2 = new Beer('112', 'Winesethphen', '6.6%', 'bla bla', 'weihenstephaner.jpg');
        var beers_arr = {};
        beers_arr[beer.getId()] = beer;
        beers_arr[beer2.getId()] = beer2;

        var beers = document.getElementsByClassName('beers')[0];
        for (var i = 0; i < 5; ++i) {
            for (var key in beers_arr) {
                beers.append(beers_arr[key].getObject());
            }
        }
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function searchLineChanged(text) {
    var beers = document.getElementsByClassName('beers')[0];
    for (var i = 0; i < beers.children.length; ++i) {
        var current_beer_brand = beers.children[i].children[0].innerHTML;
        if (current_beer_brand.toLowerCase().includes(text.toLowerCase()) === false) {
            beers.children[i].style.display = 'none';
        } else {
            beers.children[i].style.display = '';
        }
    }
}

function showSearchLine() {
    let search_bar_nav = document.getElementById('search_bar_nav');
    search_bar_nav.style.display = '';

    let top_nav = document.getElementById('top_nav');
    top_nav.style.display = 'none';
}

function hideSearchLine() {
    let search_bar_nav = document.getElementById('search_bar_nav');
    search_bar_nav.style.display = 'none';

    let top_nav = document.getElementById('top_nav');
    top_nav.style.display = '';
}

function showMenu() {
    let shadow_screen = document.getElementById('shadow_screen');
    shadow_screen.style.display = '';

    let menu = document.getElementById('menu');
    menu.style.width = '80%';
}

function hideMenu() {
    let shadow_screen = document.getElementById('shadow_screen');
    shadow_screen.style.display = 'none';

    let menu = document.getElementById('menu');
    menu.style.width = '0';
}

function beer_clicked(object){
    console.log(object.getAttribute('beer-id'))

}

//
// window.onscroll = function () {
//     var a = window.scrollY;
//     console.log(a);
// };