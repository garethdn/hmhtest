_.mixin({
  queryStringToObj: function(queryString) {
    var query = (queryString || window.location.hash).substring(2); // delete "?" and "#"

    if (!query) 
      return {};

    return _.chain(query.split('&')).map(function(params) {
      var p = params.split('=');
      return [p[0], decodeURIComponent(p[1]).replace(/\+/g, ' ')];
    }).object().value();
  }
});