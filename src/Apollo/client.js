import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
// uri: 'http://localhost:8080/graphql',
uri:'https://intense-brook-67705.herokuapp.com/graphql',
fetch,
})
