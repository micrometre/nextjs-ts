import Head from 'next/head';
import styled from 'styled-components';
import { EnvVars } from '../env';
import Cta from '../views/HomePage/Cta';
import Hero from '../views/HomePage/Hero';
import Partners from '../views/HomePage/Partners';
import BasicSection from '../components/BasicSection';
import Testimonials from '../views/HomePage/Testimonials';
import Features from '../views/HomePage/Features';
import ScrollableBlogPosts from '../views/HomePage/ScrollableBlogPosts';
import NavBar from '../components/Navbar';
export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <NavBar />
      <Cta />
      <ScrollableBlogPosts />
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
