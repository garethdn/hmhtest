HMH = window.HMH || {};
HMH.Views = HMH.Views || {};

HMH.Views.Pagination = HMH.Views.BaseView.extend({

  template: '#PaginationTemplate',

  initialize: function(options){
    this.totalResults = options.totalResults;
    this.viewData = this.getPaginationData();
  },

  getPaginationData: function(){
    var totalResults = this.totalResults,
      queryStringObj = _.queryStringToObj(),
      totalPages = Math.ceil( totalResults / HMH.Resources.APP_SETTINGS.PerPage ),
      currentPage = queryStringObj.page ? parseInt(queryStringObj.page) : 1,
      nextPage = currentPage + 1 > totalPages ? currentPage : currentPage + 1,
      prevPage = currentPage - 1 < 1 ? currentPage : currentPage - 1,
      maxPages = (HMH.Resources.APP_SETTINGS.PageRange * 2) + 1,
      pagesToDisplay = (totalPages <= maxPages) ? totalPages : maxPages,
      firstPage = 0,
      pages = [];

    if( currentPage <= HMH.Resources.APP_SETTINGS.PageRange + 1 ){
      firstPage = 0;
    } else if ( currentPage > (totalPages - HMH.Resources.APP_SETTINGS.PageRange) ) {
      firstPage = totalPages - pagesToDisplay;
    } else {
      firstPage = currentPage - HMH.Resources.APP_SETTINGS.PageRange - 1;
    }

    _.times(pagesToDisplay, function (i) {
      var page = i + 1 + firstPage;
      if(page >= currentPage - maxPages && page <= currentPage + maxPages ){
        queryStringObj.page = page;

        pages.push({
          Page: page,
          Selected: (page == currentPage),
          Url: $.param( queryStringObj )
        });
      }
    }, this);

    console.log($.param( queryStringObj ));

    return { 
      Pages         : pages.length > 1 ? pages : [],
      TotalResults  : totalResults,
      NextPageUrl   : $.param( _.extend({}, queryStringObj, { page: nextPage }) ),
      PrevPageUrl   : $.param( _.extend({}, queryStringObj, { page: prevPage }) ),
      query         : queryStringObj
    };
  }

});