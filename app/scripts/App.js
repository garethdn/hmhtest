HMH = window.HMH || {};
HMH.App = HMH.App || {};
HMH.App.Entities = HMH.App.Entities || {};

(function(){

	HMH.App.Entities = {
		'Articles'	: new HMH.Collections.Article()
	};

	HMH.App.Entities.Articles.fetch();

})();