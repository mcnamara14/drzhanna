import { graphql } from "gatsby"

export const ByTheNumbers = graphql`
  fragment ByTheNumbers on ContentfulByTheNumbers {
    featuredRecipe {
      ...Recipe
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
    ingredients
    directions
    servings
    calories
  }
`