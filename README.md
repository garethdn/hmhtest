# HMH TEST

### Installation

Install npm dependencies:

```
npm install
```

Install bower dependencies:

```
bower install
```

Start npm http server:

```
http-server
```

If the server fails to start you may need to install the http-server globally:

```
npm install http-server -g
```

Navigate to http://localhost:8080/app to use the app


If you try to open the index.html file without running the server you will get an error like:

```
Cross origin requests are only supported for protocol schemes: http, data, chrome-extension, https, chrome-extension-resource. 
```

...due to trying to fetch the json file

### TODO

* Refactor pagination
* Move templates to separate folder and compile to templates.js using grunt watch
* Copy dependencies from bower_components to a dist folder
* Add option to change sort order (asc / desc)
* Add option to reset search
* Expand search to look for more than just title

