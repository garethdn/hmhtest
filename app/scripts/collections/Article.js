HMH = window.HMH || {};
HMH.Collections = HMH.Collections || {};

HMH.Collections.Article = Backbone.Collection.extend({

  url: 'data/Content.json',

  model: HMH.Models.Article,

  parse: function(response) {
    return response.response.results.result;
  }

});