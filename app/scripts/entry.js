// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import Backbone from 'backbone';
import $ from 'jquery';


const tshirts = [
  {
    id: 1,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Save my Trees",
    price: 19

  },
  {
    id: 2,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Nature Lover",
    price: 19

  },
  {
    id: 3,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Forrest Walk",
    price: 19

  }
]

	const basicView = Backbone.View.extend({
	initialize:function(urlFront){	
		this.urlFront = urlFront;
	},
	template: function() {
		return `<div><div class="menu">
		<i class="fa fa-repeat"></i></div><img class="imgstyle" src="${this.urlFront}"></div>`
		 // return `<a class="linkme" href="${this.url}">${this.linkName}</a>`
	},
	tagName:'div',
	render:function(){
		this.$el.append(this.template());
		$('body').append(this.el)	
	}
});

// 	const basicView = Backbone.View.extend({
// 	initialize:function(title){	
// 		this.title = title;
// 	},
// 	template: function() {
// 		return `<div><img class="imgstyle" src="${this.title}"></div>`
// 		 // return `<a class="linkme" href="${this.url}">${this.linkName}</a>`
// 	},
// 	tagName:'div',
// 	render:function(){
// 		this.$el.append(this.template());
// 		$('body').append(this.el)	
// 	}
// });


// 	var title1 = new basicView(title[0].title);

	var firstShirt = new basicView(tshirts[0].imageUrlFront);
	var secondShirt = new basicView(tshirts[1].imageUrlBack);
	var thirdShirt = new basicView(tshirts[2].imageUrlBack)
	firstShirt.render();
	// secondShirt.render();
	// title1.render();



// const basicView = Backbone.View.extend({
//   initialize: function(url, linkName) {
//     this.url = url;
//     this.linkName = linkName;
//   },
//   template: function() {
//     return `<a class="linkme" href="${this.url}">${this.linkName}</a>`
//   },
//   tagName: 'div',
//   render: function() {
//     this.$el.html(this.template());
//     $('body').append(this.el)
//   }
// });

// var googleLink = new basicView('http://google.com', 'google');
// var tiyLink = new basicView('http://theironyard.com', 'tiy');
// var nfl = new basicView('http://nfl.com', 'nfl');

// googleLink.render();
// tiyLink.render();
// nfl.render();