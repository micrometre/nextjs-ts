import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Container from '../../components/Container';
import OverTitle from '../../components/OverTitle';
import SectionTitle from '../../components/SectionTitle';
import { media } from '../../utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <SectionTitle>
Electrical specialists serving surrey and surrounding areas.
            </SectionTitle>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Stack = styled.div`
  display: flex;
  flex-direction: column;
    margin-top: 4rem;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
