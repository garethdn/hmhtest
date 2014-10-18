HMH = window.HMH || {};
HMH.Views = HMH.Views || {};
HMH.Views.Articles = HMH.Views.Articles || {};

HMH.Views.Articles.Layout = HMH.Views.BaseView.extend({

  template: '#AppLayoutTemplate',

  renderResults: function(queryString){
    this.resultsView = new HMH.Views.Articles.ResultsLayout({
      collection  : this.collection,
      el          : this.$('.region-main'),
      query       : queryString
    }).render();
  },

  renderDetail: function(id){
    this.detailView = new HMH.Views.Articles.Detail({
      model     : this.collection.findWhere({ id: id }),
      el        : this.$('.region-main')
    }).render();
  }

});