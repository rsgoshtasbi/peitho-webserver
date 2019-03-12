module.exports = {
  Query: {
    me: () => {
      console.log("here");
      return {
        username: "Derrick Ung"
      };
    }
  },
  Mutation: {
    signup: (_, args, context) => {
      console.log(_, args, context);
      return "hi";
    }
  }
};
