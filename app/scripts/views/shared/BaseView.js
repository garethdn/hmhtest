HMH = window.HMH || {};
HMH.Views = HMH.Views || {};

HMH.Views.BaseView = Backbone.View.extend({

  viewData: {},

  render: function(){
    var template = Handlebars.compile( $(this.template).html() );
    this.beforeRender();

    this.$el.html(template( this.model ? _.extend({}, this.viewData, this.model.toJSON()) : this.viewData ));
    this.trigger('render');

    return this;
  },

  beforeRender: function(){}
  
});