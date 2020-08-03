import { graphql } from "gatsby"

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