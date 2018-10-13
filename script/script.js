class Locations {
    constructor(classy, name, city, zipcode, address, img, postdate, postyear) {
        this.classy = classy;
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.img = img;
        this.postdate = postdate;
        this.postyear = postyear;
    }
    render() {
        document.getElementById("places").innerHTML += /*` <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div class="${this.classy}  jumbotron jumbotron-fluid">
                <div>
                    <img class="hidden-sm hidden-xs" src="${this.img}" width="100%" height="150">
                </div>
                <div>
                    <h2>${this.name}</h2>
                </div>
                <div>
                    <p><small>${this.zipcode} ${this.city} <br>
                    ${this.address} </small></p>
                    <p><small><cite>Posted on:${this.postdate}</cite></small></p>
                </div>
                
            </div>
        </div>`;*/
            `<div>
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12"> 
			<div class="${this.classy} our-team-main">
			<div class="team-front">
			<img src="${this.img}" class="img-fluid hidden-sm hidden-xs" width="232" height="160">
			<h3>${this.name}</h3>
			<h4>${this.zipcode} ${this.city} <br>${this.address}</h4>
			<p> Created: ${this.postdate}</p>
			</div>
			<div class="team-back">
			<span><b>Nice place</b><br><br>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. 
			</span>
			</div>
			</div>
			</div>
		</div>`;
    }
}
;
let dateloc1 = (new Date(2017, 5, 4, 10, 5, 32)).toLocaleString();
let dateloc2 = (new Date(2014, 8, 10, 9, 26, 45)).toLocaleString();
let dateloc3 = (new Date(2018, 10, 14, 20, 9, 10)).toLocaleString();
let dateloc4 = (new Date(2016, 5, 21, 19, 47, 18)).toLocaleString();
let loc1 = new Locations("location", "St. Charles Church", "Vienna", 1010, "Karlsplatz 1.", "img/church.jpg", dateloc1, 20170504);
let loc2 = new Locations("location", "Zoo Schönbrunn", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg", dateloc2, 20140810);
let loc3 = new Locations("location", "Museum der Illusionen", "Vienna", 1010, "Wallnerstraße 4.", "img/illu.jpg", dateloc3, 20181014);
let loc4 = new Locations("location", "Dürer Kert", "Budapest", 1146, "Ajtósi Dürer sor 19-21", "img/durer.jpg", dateloc4, 20160521);
let locations = [loc1, loc2, loc3, loc4];
for (let location of locations) {
    location.render();
}
class Restaurant extends Locations {
    constructor(classy, name, city, zipcode, address, img, postdate, postyear, tel, type, webaddress) {
        super(classy, name, city, zipcode, address, img, postdate, postyear);
        this.tel = tel;
        this.type = type;
        this.webaddress = webaddress;
    }
    render() {
        document.getElementById("places").innerHTML +=
            `<div >
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12"> 
			<div class="${this.classy} our-team-main">
			<div class="team-front">
			<img src="${this.img}" class="img-fluid hidden-sm hidden-xs" width="232" height="160">
			<h3>${this.name}  </h3>
			<h4>${this.zipcode} ${this.city} <br>${this.address} </h4>
			<p> Created: ${this.postdate}</p>
			</div>
			<div class="team-back">
			<span><b>${this.type} Restaurant <br><br><a>${this.webaddress}</a><br>${this.tel}</b><br><br>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. 
			</span>
			</div>
			</div>
			</div>
		</div>`;
    }
}
let daterest1 = (new Date(2009, 10, 1, 20, 45, 5)).toLocaleString();
let daterest2 = (new Date(2016, 10, 2, 20, 55, 23)).toLocaleString();
let daterest3 = (new Date(2013, 10, 2, 16, 39, 0)).toLocaleString();
let daterest4 = (new Date(2014, 7, 22, 12, 30, 12)).toLocaleString();
let daterest5 = (new Date(2010, 8, 29, 19, 50, 56)).toLocaleString();
let rest1 = new Restaurant("restaurant", "Lemon Leaf", "Vienna", 1250, "Kettenbrückengasse 19.", "img/lemon.png", daterest1, 20091001, "+43(1)5812308", "Thai", "www.lemonleaf.at");
let rest2 = new Restaurant("restaurant", "SIXTA", "Vienna", 1350, "Schönbrunner Straße 21.", "img/sixta.png", daterest2, 20161002, "+43 1 58 528 56 l +43 1 58 528 56", "Classic", "http://www.sixta-restaurant.at/");
let rest3 = new Restaurant("restaurant", "Mochi", "Vienna", 1110, "Praterstraße 15.", "img/mochi.jpg", daterest3, 20131002, "01 9251380", "Japanese", "http://www.mochi.at/");
let rest4 = new Restaurant("restaurant", "My Mother said", "Encs", 3860, "Petőfi Sándor utca 57.", "img/mother.jpg", daterest4, 20140722, "+36 30 5671 3456", "Hungarian", "http://www.anyukammondta.hu/");
let rest5 = new Restaurant("restaurant", "Better than home", "Pécs", 7622, "Zsolnay Vilmos utca 15.", "img/bett.jpg", daterest5, 20100829, "+36 30 491 1212", "Hungarian Pub and ", "http://www.jmo.hu/");
let restaurants = [rest1, rest2, rest3, rest4, rest5];
for (let restaurant of restaurants) {
    restaurant.render();
}
class Events extends Locations {
    constructor(classy, name, city, zipcode, address, img, postdate, postyear, date, time, price, webaddress) {
        super(classy, name, city, zipcode, address, img, postdate, postyear);
        this.date = date;
        this.time = time;
        this.price = price;
        this.webaddress = webaddress;
    }
    render() {
        document.getElementById("places").innerHTML +=
            `<div>
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12"> 
			<div class="${this.classy} our-team-main">
			<div class="team-front">
			<img src="${this.img}" class="img-fluid hidden-sm hidden-xs" width="232" height="160">
			<h3>${this.name}  </h3>
			<h4>${this.zipcode} ${this.city} <br>${this.address} </h4>
			<p> Created: ${this.postdate}</p>
			</div>
			<div class="team-back">
			<span><b>${this.price}  <br><br>${this.date}<br>${this.time}<br><a>${this.webaddress}</a></b><br><br>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. 
			</span>
			</div>
			</div>
			</div>
		</div>`;
    }
}
let dateev1 = (new Date(2010, 10, 1, 20, 45, 0)).toLocaleString();
let dateev2 = (new Date(2011, 10, 2, 3, 0, 0)).toLocaleString();
let dateev3 = (new Date(2017, 10, 30, 13, 4)).toLocaleString();
let dateev4 = (new Date(2017, 12, 20, 3, 0, 0)).toLocaleString();
let ev1 = new Events("event", "Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/kris.jpg", dateev1, 20101001, "Fr., 15.11.2018.", "20.00", "58,50 EUR", "http://kriskristofferson.com/");
let ev2 = new Events("event", "Lenny Kravitz", "Vienna", 1050, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/lenny.jpg", dateev2, 20111002, "Sat, 09.12.2019", "19.30", "47,80 EUR", "www.lennykravitz.com/");
let ev3 = new Events("event", "Anathema", "Vienna", 1110, "Gasometer Guglgasse 6.", "img/ana.jpeg", dateev3, 20171030, "Sat, 21.10.2017", "19.00", "39,90 EUR", "www.anathema.com/");
let ev4 = new Events("event", "In Flames", "Vienna", 1050, "Wiener Stadthalle, Hall D", "img/infl.jpg", dateev4, 20171220, "Sat, 08.12.2017", "19.30", "50,99 EUR", "www.inflames.com/");
let evs = [ev1, ev2, ev3, ev4];
for (let ev of evs) {
    ev.render();
}
////ASCENDING
$(document).ready(function () {
    $('#alla').click(function () {
        $("#places").empty(); //prevent multiplying
        let everythings = [loc1, loc2, loc3, loc4, rest1, rest2, rest3, rest4, rest5, ev1, ev2, ev3, ev4];
        everythings.sort(function (a, b) {
            //the date type is not working in Typescript...var dateA:any=new Date(a.postdate), dateB:any=new Date(b.postdate)
            var dateA = a.postyear, dateB = b.postyear;
            return dateA + -dateB; //sort by date ascending
        });
        for (let everything of everythings) {
            everything.render();
        }
        $(".location,.event,.restaurant").show(1000);
    });
    $('#locationsa').click(function () {
        $("#places").empty(); //prevent multiplying
        locations.sort(function (a, b) {
            //the date type is not working in Typescript...var dateA:any=new Date(a.postdate), dateB:any=new Date(b.postdate)
            var dateA = a.postyear, dateB = b.postyear;
            return dateA + -dateB; //sort by date ascending
        });
        for (let location of locations) {
            location.render();
        }
        $(".restaurant,.event").hide(1000);
        $(".location").show(1000);
    });
    $('#restaurantsa').click(function () {
        $("#places").empty();
        restaurants.sort(function (a, b) {
            var dateA = a.postyear, dateB = b.postyear;
            return dateA + -dateB;
        });
        for (let restaurant of restaurants) {
            restaurant.render();
        }
        $(".location,.event").hide(1000);
        $(".restaurant").show(1000);
    });
    $('#eventsa').click(function () {
        evs.sort(function (a, b) {
            $("#places").empty();
            var dateA = a.postyear, dateB = b.postyear;
            return dateA + -dateB;
        });
        for (let ev of evs) {
            ev.render();
        }
        $(".location,.restaurant").hide(1000);
        $(".event").show(1000);
    });
});
////DESCENDING
$(document).ready(function () {
    $('#alld').click(function () {
        $("#places").empty();
        let everythings = [loc1, loc2, loc3, loc4, rest1, rest2, rest3, rest4, rest5, ev1, ev2, ev3, ev4];
        everythings.sort(function (a, b) {
            //the date type is not working in Typescript...var dateA:any=new Date(a.postdate), dateB:any=new Date(b.postdate)
            var dateA = a.postyear, dateB = b.postyear;
            return dateB + -dateA; //sort by date ascending
        });
        for (let everything of everythings) {
            everything.render();
        }
        $(".location,.event,.restaurant").show(1000);
    });
    $('#locationsd').click(function () {
        $("#places").empty();
        locations.sort(function (a, b) {
            var dateA = a.postyear, dateB = b.postyear;
            return dateB + -dateA;
        });
        for (let location of locations) {
            location.render();
        }
        $(".restaurant,.event").hide(1000);
        $(".location").show(1000);
    });
    $('#restaurantsd').click(function () {
        $("#places").empty();
        restaurants.sort(function (a, b) {
            var dateA = a.postyear, dateB = b.postyear;
            return dateB + -dateA;
        });
        for (let restaurant of restaurants) {
            restaurant.render();
        }
        $(".location,.event").hide(1000);
        $(".restaurant").show(1000);
    });
    $('#eventsd').click(function () {
        evs.sort(function (a, b) {
            $("#places").empty();
            var dateA = a.postyear, dateB = b.postyear;
            return dateB + -dateA;
        });
        for (let ev of evs) {
            ev.render();
        }
        $(".location,.restaurant").hide(1000);
        $(".event").show(1000);
    });
});
let ndate = (new Date()).toDateString();
let olddate = (new Date("Fri Oct 10 2018")).toDateString();
console.log(ndate);
console.log(olddate);
