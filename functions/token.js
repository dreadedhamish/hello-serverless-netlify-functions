exports.handler = async (event, context) => {
  const name = event.queryStringParameters.token || "No token";

  return {
    statusCode: 200,
    body: `Hello, ${name}`,
  };
};