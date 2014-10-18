HMH = window.HMH || {};
HMH.Views = HMH.Views || {};
HMH.Views.Articles = HMH.Views.Articles || {};

HMH.Views.Articles.ResultsLayout = HMH.Views.BaseView.extend({

  template: '#ResultsLayoutTemplate',

  initialize: function(options){
    this.on('render', this.onRender);
    this.viewData.query = _.queryStringToObj();
  },

  events: {
    'click [data-action="search"]'  : 'search'
  },

  search: function(e){
    e.preventDefault();

    var data = this.parseForm();

    // trigger route change
    return !_.isEmpty(data) ?
      window.location = "#?" + $.param(data) :
      window.location = "#";
  },

  // parse values from form
  parseForm: function(){
    var data = {};

    _.each(this.$('form').serializeArray(), function (attr) {
      if (attr.name && attr.value) {
        data[attr.name] = $.trim(attr.value);
      }
    }, this);

    return data;
  },

  onRender: function(){
    this.renderCollection();
    this.renderPagination();
  },

  renderCollection: function(){
    this.collectionView = new HMH.Views.Articles.CollectionView({
      filteredCollection  : this.getFilteredCollection(),
      el                  : this.$('.region-results')
    }).render();
  },

  renderPagination: function(){
    this.paginationView = new HMH.Views.Pagination({
      el                  : this.$('.region-pagination'),
      filteredCollection  : this.getFilteredCollection(),
      totalResults        : this.searchCollection().length
    }).render();
  },

  getFilteredCollection: function(){
    var filteredCollection = this.searchCollection();

    return this.paginateCollection(filteredCollection);
  },

  searchCollection: function(){
    var queryObj = _.queryStringToObj();

    // sort
    if (queryObj.sort_by) {
      this.collection.setComparator(queryObj.sort_by);
      this.collection.sort();
    }

    var filteredCollection = this.collection.models;

    // search by display title
    if (queryObj.display_title) {
      // filteredCollection = this.collection.filter(function(model) {
      //   return (model.get('display_title').toLowerCase()).indexOf(queryObj.display_title.toLowerCase()) > -1;
      // });

      filteredCollection = this.collection.filter(function(model) {
        return _.any(model.attributes, function(val, attr) {
          return _.isString(val) && val.toLowerCase().indexOf(queryObj.display_title.toLowerCase()) > -1;
        });
      });
    }

    return filteredCollection;
  },

  paginateCollection: function(filteredCollection){
    var queryObj = _.queryStringToObj();

    if (queryObj.page > 1) {
      filteredCollection = filteredCollection.slice( (queryObj.page - 1) * HMH.Resources.APP_SETTINGS.PerPage, (queryObj.page * HMH.Resources.APP_SETTINGS.PerPage - 1) + HMH.Resources.APP_SETTINGS.PerPage);
    }

    return _.first(filteredCollection, HMH.Resources.APP_SETTINGS.PerPage);
  }

});