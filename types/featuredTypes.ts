export interface FeaturedInterface {
    node: {
        id: number;
        slug: string;
        title: string;
        excerpt: string;
        CaseStudiesGraphql: {
            featuredImage: {
                altText: string;
                mediaItemUrl: string;
            };
        };
    }
}