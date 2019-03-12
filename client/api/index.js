import axios from "axios";
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "/graphql"
});

export default ({ method = "get", headers = {}, url = "", data }) =>
  axios({
    url,
    method,
    headers: { "Content-Type": "application/json", ...headers },
    data
  });
