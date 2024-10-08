const { Thought} = require('../models');

const resolvers = {
    Query: {

        thoughts: async () => {

            return Thought.find().sort({ createdAt: -1});
        },

        thoughts: async (parent, { thoughtId}) => {

            return Thought.findOne({_id: thoughtId});
        },
    },
    
     {
        addThought: async (parent, { thoughtText, thoughtAuthor}) => {
          
            return Thought.create({ thoughtText, thoughtAuthor});
    },
        addComment: async (parent, { thoughtId, commentText}) => {
          
            return Thought.findOneAndUpdate(
                (
                  {_id: thoughtId},
                  {
                    $addToSet: { comments: { commentText}},
                  },
                  {
                    new: true,
                    runValidators: true,
                  }
                )
            );
        },
        removeThough: async (parent, { thoughtId}) => {
           
            return Thought.findOneAndDelete({_id: thoughtId});
        },
        removeComment: async(parent, { thoughtId, commentId}) => {
            return Thought.findOneAndUpdate(
           
                { _id: thoughtId},
                { $pull: { comments: { _id, commentId}}},
                {new: true}
            );
        },
    },
};

module.exports = resolvers;