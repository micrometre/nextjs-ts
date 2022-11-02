import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from './BasicSection';
import Link from './Link';
import { EnvVars } from '../env';
import Cta from '../views/HomePage/Cta';
import Hero from '../views/HomePage/Hero';
import Partners from '../views/HomePage/Partners';
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
      <Hero />
          <Partners />
        <WhiteBackgroundContainer>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta?
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Lorem ipsum dolor sit." overTitle="lorem ipsum" reversed>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore{' '}
              <strong>voluptate quo deleniti animi laboriosam</strong>. Possimus ullam velit rem itaque consectetur, in distinctio?
            </p>
            <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
        <Cta />
        </DarkerBackgroundContainer>
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
