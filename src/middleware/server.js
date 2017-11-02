const serverMiddleware = store => next => action => {
  const { server } = action;

  if (typeof server === 'undefined') {
    return next(action);
  }

  return next(action);
};

export default serverMiddleware;
