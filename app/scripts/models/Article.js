HMH = window.HMH || {};
HMH.Models = HMH.Models || {};

HMH.Models.Article = Backbone.Model.extend({

  url: 'data/Content.json',

  // normalize the response structure
  parse: function(response) {
  	// viewable is returned as a string, need to convert to bool
  	response.content.resource.viewable = response.content.resource.viewable === "true";

  	// restructure the standards property into an array
  	var standards = response.content.resource.standards;
  	if (standards && standards.standard) {
  		if (_.isArray(standards.standard)) {
  			response.content.resource.standards = standards.standard;
  		} else {
  			var standard = standards.standard;
  			response.content.resource.standards = [];
  			response.content.resource.standards.push(standard);
  		}
  	} else {
  		response.content.resource.standards = [];
  	}

    return response.content.resource;
  }

});