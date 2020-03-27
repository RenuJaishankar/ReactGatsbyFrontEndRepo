import React, { useState } from 'react'
import { Link } from "gatsby"
/*import { jsx, IconButton } from 'theme-ui'
import { Flex, Button, Box, Card, Image, Text } from 'theme-ui' */
import { graphql } from 'gatsby'
import { useMutation } from '@apollo/react-hooks'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

//note that gql is a function //
const ADD_GAME = gql`

mutation ($name: String, $amountOfPlayers: Int) {
createArcadeGame(name: $name, amountOfPlayers: $amountOfPlayers) {
    name
    amountOfPlayers
}
}
`

const APOLLO_QUERY = gql`
{
arcadeGames{
    id
    name
    amountOfPlayers
}
}

`

const ArcadePage = () => {
    // this is a react hook
  // react hook gives you implementation that you wouldn't have access to in a typical functional component
  // this particular hook comes from our ApolloProvider
    const [ addGame, {data} ] = useMutation(ADD_GAME)
    const handleClick = () => {
        console.log("this works!")
        let n = prompt("please enter arcade game name")
        let a = prompt("please enter amount of players")
        addGame({variables: {name: n, amountOfPlayers: a}})
        window.location.reload(false)
    }

    return (
        <div
        style={{
            maxWidth: 512,
            margin: 'auto',
            padding: 3,
            
        }}>
            <button onClick={handleClick}>
            Hello there
            </button>
          {/* this is a custom component from Apollo, note how we're passing our query */}
            <Query query={APOLLO_QUERY}>
                {/* imperative code to handle loading, error, and our data  */}
            {({data, loading, error}) => {
                if (loading) return <span>Loading...</span>
                if (error) return <p>{error.message}</p>
    
                return <div>
                    {/* simple map higher order function that will render all of our games */}
                    {data.arcadeGames.map(el =>
                    <div style={{ padding: 3 }}>{el.name}<br></br>
                    Amount of players: {el.amountOfPlayers}
                    </div>
                )}
                </div>
                }}
            </Query>
        </div>
    )
}
export default ArcadePage