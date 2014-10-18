HMH = window.HMH || {};
HMH.Views = HMH.Views || {};
HMH.Views.Articles = HMH.Views.Articles || {};

HMH.Views.Articles.Detail = HMH.Views.BaseView.extend({

  template: '#ArticleDetailTemplate',

  events: {
    'click [data-action="navigate-back"]' : 'goBack',
  },

  initialize: function(options){
    Handlebars.registerPartial({
      'standards': $('#StandardsPartialTemplate').html()
    });
  },

  goBack: function(){
    window.history.back();
  }

});