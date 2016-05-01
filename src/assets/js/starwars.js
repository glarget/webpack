(function(STARWARS, $) { //dependancies objects. We secure with an anonymous function
	"use strict";
	
	STARWARS =  {} || STARWARS;

	STARWARS = {
		
		/**
		*	name 		: getJsonFile
		*	description : load an external json file to draw the menu
		*
		*	@param options (object) : return nameFile, typeContainer, containerWrapper
		*/
		getJsonFile : function(options) {
				
			var tempItems = []; //temporary array
		
			$.ajax({
				url: options.nameFile,
				dataType:'json'
			}).done(function(data) {

				for( var i = 0; i < data.menu.length; i++ ){ 
				
					tempItems.push("<li><a target='_blank' href='" +  data.menu[i].action + "'>" + data.menu[i].title + "</a></li>");
					
				}
				
				$( options.typeContainer, 
				{
					html: tempItems.join("")
				}
				).appendTo(options.containerWrapper);
				
				
			}).fail(function() {

				console.log("The menu.json has failed to load");
				
			});
			
		},
		
		/**
		*	name 		: showParallax
		*	description : launch the parallax effect
		*
		*	@param options (object) : return nameContainer
		*/

		showParallax : function(options) {
		
			$(options.nameContainer).mousemove(function(e){
			
				var x = -(e.pageX + $(this).offset().left) / options.numberDivideX;
				var y = -(e.pageY + $(this).offset().top) / options.numberDivideY;
				$(this).css('background-position', x + 'px ' + y + 'px');
				
			});    
	
		},
		
		/**
		*	name 					: launchMobMenu
		*	description 			: launch mobile menu
		*/
		
		launchMobMenu : function() {

			STARWARS.getJsonFile(
			{
				nameFile : "http://localhost/test-stars-wars/src/assets/js/menu.json", //@todo : changer d'url en fonction du serveur. J'ai été en local 
				typeContainer : "<ul/>",
				containerWrapper : ".nav-bar-mobile"
			});

			$(".nav-mob-button").off("click").on("click", function() {
				
				$(".nav-bar-mobile").slideToggle(); 

			});
			
		},
		
		/**
		*	name 		: hideMobMenuOnResize
		*	description : hide the mob menu when whe window width is superior to 768px
		*/
		
		hideMobMenuOnResize : function() {

			$(window).resize(function() {
				
				if ($(window).width() > 768) {
				
					$(".nav-bar-mobile").hide("slow");
					
				}
			});
			
		},
		
		/**
		*	name 		: init
		*	description : load all the necessaries methods to init the page
		*/
		
		init : function() {
		
			STARWARS.getJsonFile(
			{
				nameFile : "http://localhost/test-stars-wars/src/assets/js/menu.json", //@todo : changer d'url en fonction du serveur. J'ai été en local 
				typeContainer : "<ul/>",
				containerWrapper : ".nav-bar"
			});
			
			// we load the parallax for the header
			STARWARS.showParallax({
				nameContainer : ".box-header",
				numberDivideX : 10,
				numberDivideY : 10
			});
			
			// we load the parallax for the footer widh different parameters
			STARWARS.showParallax({
				nameContainer : ".box-footer",
				numberDivideX : 2,
				numberDivideY : 2
			});
			
			// we initialize the mobile menu
			STARWARS.launchMobMenu();
			
			// hide the mobile menu when the window size is superior to 768
			STARWARS.hideMobMenuOnResize();
		}
	
	}
	
	STARWARS.init();
	
	// NB : if necessary, we can activate the line below to make the object global 
	
	//window.STARWARS = STARWARS;
	
})(window.STARWARS, window.jQuery);

