// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;

    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top
    }, 2300, 'swing', function () {
      window.location.hash = target;
    });
  });

});

function magos(){
	document.getElementById("magos").style.display = "block";
	document.getElementById("guerreiros").style.display = "none";
	document.getElementById("assassinos").style.display = "none";
	document.getElementById("paladinos").style.display = "none";
	document.getElementById("necromancers").style.display = "none";
}

function guerreiros(){
	document.getElementById("magos").style.display = "none";
	document.getElementById("guerreiros").style.display = "block";
	document.getElementById("assassinos").style.display = "none";
	document.getElementById("paladinos").style.display = "none";
	document.getElementById("necromancers").style.display = "none";
}

function assassinos(){
	document.getElementById("magos").style.display = "none";
	document.getElementById("guerreiros").style.display = "none";
	document.getElementById("assassinos").style.display = "block";
	document.getElementById("paladinos").style.display = "none";
	document.getElementById("necromancers").style.display = "none";
}

function paladinos(){
	document.getElementById("magos").style.display = "none";
	document.getElementById("guerreiros").style.display = "none";
	document.getElementById("assassinos").style.display = "none";
	document.getElementById("paladinos").style.display = "block";
	document.getElementById("necromancers").style.display = "none";
}

function necromancers(){
	document.getElementById("magos").style.display = "none";
	document.getElementById("guerreiros").style.display = "none";
	document.getElementById("assassinos").style.display = "none";
	document.getElementById("paladinos").style.display = "none";
	document.getElementById("necromancers").style.display = "block";
}