import { gql } from "@apollo/client";

const featuredQuery = gql`
    query FeaturedProjects {
    caseStudies(first: 3) {
        edges {
        node {
            slug
            title
            excerpt
            id: databaseId
            CaseStudiesGraphql {
            featuredImage {
                altText
                mediaItemUrl
            }
            }
        }
        }
    }
    }

`;


export default featuredQuery
