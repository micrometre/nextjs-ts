import styled from 'styled-components';
import Page from '../components/Page';
import RichText from '../components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>

          This page informs you of our policies regarding the collection, use, and disclosure of personal data.

This Web site does not collect any type of information about you.

No cookies, adsense or any other tracking technologies are being used

You are advised to review this Privacy Policy periodically for any changes.

Changes to this Privacy Policy are effective when they are posted on this page

          </p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
