import { graphql } from 'gatsby'

export const ByTheNumbers = graphql`
    fragment ByTheNumbers on ContentfulByTheNumbers {
        featuredRecipe {
            ...Recipe
        }
    }
`

export const SpiritAndMind = graphql`
    fragment SpiritAndMind on ContentfulSpiritAndMind {
        internalName
        heroImage {
            file {
                url
            }
        }
        heroText {
            heroText
        }
        bioImage {
            fluid {
                ...GatsbyContentfulFluid_noBase64
            }
        }
        bioText {
            bioText
        }
    }
`

export const Bio = graphql`
    fragment Bio on ContentfulBio {
        image {
            fluid {
                ...GatsbyContentfulFluid_noBase64
            }
        }
        bio {
            bio
        }
        bioCopy {
            json
        }
    }
`

export const ThisDocMakesHouseCalls = graphql`
    fragment ThisDocMakesHouseCalls on ContentfulThisDocMakesHouseCalls {
        heroImage {
            fluid {
                ...GatsbyContentfulFluid_noBase64
            }
        }
        heroText {
            json
        }
    }
`

export const Homepage = graphql`
    fragment Homepage on ContentfulHomepage {
        heroTitle
        heroImage {
            fluid {
                ...GatsbyContentfulFluid_noBase64
            }
        }
        heroText {
            json
        }
        houseCallsText {
            json
        }
        houseCallsImage {
            file {
                url
            }
        }
    }
`

export const Recipe = graphql`
    fragment Recipe on ContentfulRecipe {
        title
        description {
            description
        }
        image {
            fluid {
                ...GatsbyContentfulFluid_noBase64
            }
            file {
                url
            }
        }
        path
        ingredients
        directions
        servings
        calories
    }
`
