HMH = window.HMH || {};
HMH.Views = HMH.Views || {};
HMH.Views.Articles = HMH.Views.Articles || {};

HMH.Views.Articles.ItemView = HMH.Views.BaseView.extend({

  template: '#ArticleItemTemplate',

  events: {
    'click [data-action="toggle-more-info"]' : 'toggleMoreInfo'
  },

  initialize: function(options){
    Handlebars.registerPartial({
      'standards': $('#StandardsPartialTemplate').html()
    });
  },

  toggleMoreInfo: function(e){
    e.preventDefault();

    $(e.currentTarget).find('.glyphicon')
      .toggleClass('glyphicon-chevron-right')
      .toggleClass('glyphicon-chevron-down');

    this.$('.more-info').toggleClass('hide');
  }

});