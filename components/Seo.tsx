import _config from "_config";
import ogImage from "@/images/ogImage.png"
import logo from "@/images/vn.png"
import { NextSeo } from 'next-seo';

interface Props {
  description?: string;
  image?: string;
  imageAlt?: string;
  lang?: string;
  title?: string;
  type?: string;
  url: string;
  date?: string;
  section?: string;
  tags?: any;
}
const SEO = ({
  description,
  image,
  imageAlt,
  lang,
  tags,
  date,
  section,
  title,
  type = "website",
  url,
}: Props) => {
    const {siteTitle, siteLanguage, siteDescription } = _config;

    return (
        <NextSeo />
    )
};

export default SEO;
