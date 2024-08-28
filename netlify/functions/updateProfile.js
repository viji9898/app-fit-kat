const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  });

  const body = JSON.parse(event.body);
  const programData = body.data.object.metadata;
  const { programName, programRef, ref } = programData;

  const updateProgram = [{ ref: programRef, title: programName }];

  return client
    .query(
      q.Update(q.Ref(q.Collection("Profiles"), ref), {
        data: {
          purchases: q.Append(
            ...updateProgram,
            q.Select(
              ["data", "purchases"],
              q.Get(q.Ref(q.Collection("Profiles"), ref))
            )
          ),
        },
      })
    )
    .then((response) => {
      console.log("success", response);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
