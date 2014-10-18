HMH = window.HMH || {};
HMH.Collections = HMH.Collections || {};

HMH.Collections.Article = Backbone.Collection.extend({

  url: 'data/Content.json',

  model: HMH.Models.Article,

  parse: function(response) {
    return response.response.results.result;
  },

  setComparator: function(sortBy){
    this.comparator = function(model){
      return model.get( HMH.Resources.ARTICLE_PROPERTIES[sortBy] ).toLowerCase();
    };
  }

});