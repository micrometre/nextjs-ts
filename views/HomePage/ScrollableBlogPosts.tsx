import styled from 'styled-components';
import ArticleCard from '../../components/ArticleCard';
import Container from '../../components/Container';
import { media } from '../../utils/media';
import AutofitGrid from '../../components/AutofitGrid';

export default function ScrollableBlogPosts() {


  return (
    <>
          <CustomAutofitGrid>
            <ArticleCard
              title="We work a to very high standard and pride ourselves on being 100% honest."
              imageUrl="/3.webp"
            />
            <ArticleCard
              title="We are always dependable and time keeping is one of strongest points."
              imageUrl="/4.webp"
            />
            <ArticleCard
              title="Care and attention to our clients is something that sets us apart."
              imageUrl="/5.webp"
            />
      </CustomAutofitGrid>
    </>
  );
}





const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  margin-left: 14rem;
  justify-content: space-between;
  align-items: center;




  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
