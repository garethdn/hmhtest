HMH = window.HMH || {};
HMH.Routers = HMH.Routers || {};

HMH.Routers.Article = Backbone.Router.extend({

  initialize: function(options){
    this.layout = options.layout;
  },

  routes: {
    ''            : 'search',
    'detail/:id'  : 'detail'
  },

  search: function(query){
    this.layout.renderResults(query);
  },

  detail: function(id){
    this.layout.renderDetail(id);
  }

});