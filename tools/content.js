export const serializeSuccessBody = ({ msg, data }) =>
  JSON.stringify({
    code: 200,
    msg,
    data,
  });

export const serializeErrorBody = ({ msg, code }) =>
  JSON.stringify({
    code,
    msg,
  });
