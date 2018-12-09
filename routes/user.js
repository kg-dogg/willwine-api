import Router from 'koa-router';

const router = Router({ prefix: '/user' });

router.get('/', function (ctx, next) {
  connection.connect();
  connection.query('SELECT * from nideshop_user', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
  connection.end();
  ctx.body = 'this is a users response!'
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

export default router;
