HMH = window.HMH || {};
HMH.App = HMH.App || {};
HMH.App.Entities = HMH.App.Entities || {};

(function(){

	HMH.App.Entities = {
		'Articles'	: new HMH.Collections.Article()
	};

	// making the assumption that we only want to go to the server once??
	HMH.App.Entities.Articles.fetch({
		success: function(){
			HMH.App.layoutView = new HMH.Views.Articles.Layout({
		    el        	: $('.app-container'),
		    collection  : HMH.App.Entities.Articles
		  }).render();

			HMH.App.router = new HMH.Routers.Article({
				layout    	: HMH.App.layoutView
			});

			Backbone.history.start();
		}
	});

})();