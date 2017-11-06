/* eslint arrow-parens: 0 */

const serverMiddleware = store => next => action => {
  const { server } = action;

  if (typeof server === 'undefined') {
    return next(action);
  }

  const { type, message, params } = server;

  console.log('Server params:', server);

  // return serverRequest.send(type, message, params)
  //   .then((response) => {
  //     if (action.done && typeof action.done === 'function') {
  //       return action.done();
  //     }
  //      
  //     return next({
  //       ...action,
  //       server: undefined,
  //       payload: response,
  //     });
  //   })
  //   .catch((error) => {
  //     return next({
  //       ...action,
  //       server: undefined,
  //       error,
  //     });
  //   });

  if (action.done && typeof action.done === 'function') {
    action.done();
  }

  return next({
    ...action,
    server: undefined,
  });
};

export default serverMiddleware;
