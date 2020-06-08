exports.handler = async (event, context) => {
 const date = Date.now()

 return {
  statusCode: 200,
  body: `${date}`
 };
};
