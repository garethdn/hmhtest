HMH = window.HMH || {};
HMH.Views = HMH.Views || {};
HMH.Views.Articles = HMH.Views.Articles || {};

HMH.Views.Articles.CollectionView = HMH.Views.BaseView.extend({

  itemView: HMH.Views.Articles.ItemView,

  initialize: function(options){
    this.filteredCollection = options.filteredCollection;
  },

  render: function(){
    this.$el.html('');
    this.renderCollection();
  },

  renderCollection: function(){
    _.each(this.filteredCollection, function(model){
      this.renderItemView(model);
    }, this);
  },

  renderItemView: function(model){
    var itemView = new HMH.Views.Articles.ItemView({
      model: model
    }).render();

    this.$el.append(itemView.el);
  }
  
});