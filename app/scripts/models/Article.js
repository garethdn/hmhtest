HMH = window.HMH || {};
HMH.Models = HMH.Models || {};

HMH.Models.Article = Backbone.Model.extend({

  url: 'data/Content.json',

  parse: function(response) {
    return response.content.resource;
  }

});