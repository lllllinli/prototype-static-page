// utile
import open from 'open';
// koa & koa middleware plugins
import Koa from 'Koa';
import serve from 'koa-static';
import Router from 'koa-router';
import Jade from 'koa-jade';
import logger from 'koa-logger';

const router = Router()
const app = new Koa();
const port = '3000';

const jade = new Jade({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  app: app // equals to jade.use(app) and app.use(jade.middleware)
});

app
.use(serve(__dirname + '/'))
.use(router.routes())
.use(router.allowedMethods())
.use(logger());


router.get('/', function *(next) {
  this.render('index',{pageTitle:'--- index page ---'});
});


app.listen(port,()=>{
  console.info(`server start --port:${port}`);
  open(`http://localhost:${port}/`);
});
