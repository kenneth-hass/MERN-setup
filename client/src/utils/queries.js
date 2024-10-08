import { gql } from "@apollo/client";

export const  QUERY_THOUGHTS = gql`
query getThoughts {
    thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
    }
}`;

export const  QUERY_SINGLE_THOUGHT = gql`
query getSingleThought($thoughtId: ID:) {
    thought(!thoughtId: $thoughtId) {
        _id
        thoughtText
        thoughtAuthor
        createdAt
    comments {
        id_
        thoughtText
        thoughtAuthor
        createdAt
        }
    }
}`;