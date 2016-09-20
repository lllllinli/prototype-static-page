##Environment

  1. NodeJs -
      - koajs
      - babel

##Download

  * NodeJs -
    [source] (https://nodejs.org/en/)。

##Install

  * Mac -
    open [Terminal]

    ```
    $cd [folder path]
    $npm install
    ```

  * windows -
    open [CMD]
    ```
    /** if you save folder in disk d :
    *   $d:
    **/
    $cd [folder path]

    $npm install
    ```


##Run application

```
$npm start
```

##javascript MVC

##file and path explanation

 1.sever entry: ```./server/server.js```

 use nodejs web framework build local server.
 [koajs] (http://koajs.com/)

 2.node entry: ```./server/node-use-babel.js```

 use babel to transforms javascript es5 to up version.
 [babel] (https://babeljs.io/)

 3.router : ```./server/router.js```

 4.view(pug) template: ```./server/views/```

 server side render .
 [pug] (https://github.com/pugjs)

 5.staatic source: ```./server/static-pages/```
