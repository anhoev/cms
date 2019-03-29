# Gigaorder - CMS

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Gigaorder CMS service include 2 section 
  - Backend **cms**
  - Frontend **backoffice**

# How to install!
  Environment required: nodejs
  Global module required: 
* [Nodemon] - Package watch in project
* [VueCLI] - Standard Tooling for Vue.js Development

### How to update project with submodule
  ```
  yarn submodule-update or npm run submodule-update
  ```

### Start backend project
You can launch applications with many different environment modes like:
  - **Development**: application mode running in port: **8888**
    ```
    yarn start:dev or npm run start:dev
    ```
  - **Local**: environment run at local machine dev. Application mode running in port: **8888**
    ```
    yarn start, yarn start:local, npm start or npm run start:local
    ```
  - **Custom environment**: You can start the project with some flags as shown below
    * *env*: name environment config => eg: development, local or staging ...
    ```
        => eg node ./backend/mobile --env=staging
    ```
    * *config*: config environment from static file. The entire environment variable will be recognized through the static config file
    ```
        => eg node ./backend/mobile --config=./config/digital-signage.json
    ```
    * *url*: config environment form url, endpoint API. The file config will be retrieved via a static file on the server and must be supported in json format, the configuration information will then be recognized through this download file.
    ```
        => eg node ./backend/mobile --url=https://raw.githubusercontent.com/anhoev/cms_configs/master/staging.json
    ```
    * *export PATH_ENV=<url_config>*: config only apply from development or production. Config is sample config *url* but environment is detect url from *machine environment* 
    * **Note**: config environment **from file** is **higher** priority **from url**

### Start frontend project
  ```
   cd backoffice && npm run serve
  ```
  * 
### Build project
  - Build front-end project => project access url http://localhost:8080
  ```
    cd backoffice && npm run build:production
  ```
  - Build from docker => project access url http://localhost:8888
  ```
    cd scripts && ./staging.sh
  ```

License
----
MIT

**Gigaorder International**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [Gulp]: <http://gulpjs.com>
   [Nodemon]: <https://nodemon.io/>
   [VueCLI]: <https://cli.vuejs.org/>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
