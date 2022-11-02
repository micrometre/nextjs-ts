import styled from 'styled-components';
import ArticleCard from '../../components/ArticleCard';
import Container from '../../components/Container';
import { media } from '../../utils/media';


export default function ScrollableBlogPosts() {


  return (
    <Section>
          <>
            <ArticleCard
              title="yyy"
              description="ttt"
              imageUrl="/logo.webp"
            />
            <ArticleCard
              title="yyy"
              description="ttt"
              imageUrl="/logo.webp"
            />
            <ArticleCard
              title="yyy"
              description="ttt"
              imageUrl="/logo.webp"
            />
          </>
    </Section>
  );
}


const Section = styled.section`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 250em;
  height: 50rem;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;