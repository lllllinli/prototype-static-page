
import Router from 'koa-router';

const router = Router();

router.get('/', (ctx, next) => {
  ctx.render('index',{pageTitle:'prototype'});
});

module.exports = router;
