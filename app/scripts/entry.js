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

	});


// const basicView = Backbone.View.extend({
  // initialize: function(url, linkName) {
  //   this.url = url;
  //   this.linkName = linkName;
  // },
  // template: function() {
  //   return `<a class="linkme" href="${this.url}">${this.linkName}</a>
  
  // `
  // },
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