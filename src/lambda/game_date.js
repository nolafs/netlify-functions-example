import moment from "moment";

exports.handler = async (event, context) => {
 const date = moment().unix();

 return {
  statusCode: 200,
  body: `<html><head></head><body>${date}</body></html>`
 };
};
