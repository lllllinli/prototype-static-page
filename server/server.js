// utile
import open from 'open';
// koa & koa middleware plugins
import Koa from 'Koa';
import serve from 'koa-static';
import logger from 'koa-logger';
import Pug from 'koa-pug';
import router from './router';

const app = new Koa();
const port = '3000';

const pug = new Pug({
  viewPath: __dirname + '/views',
  debug: false,
  pretty: false,
  compileDebug: false
});

pug.use(app);

app
.use(serve(__dirname + '/'))
.use(router.routes())
.use(router.allowedMethods())
.use(logger())
.listen(port, () => {
  console.info(`server start -- port:${port}`);
  open(`http://localhost:${port}/`);
});
