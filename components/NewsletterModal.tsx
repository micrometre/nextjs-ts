import React, { useState } from 'react';
import styled from 'styled-components';

export interface NewsletterModalProps {
  onClose: () => void;
}

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');

  useEscClose({ onClose });

  function onSubmit(event: React.FormEvent<HTMLFormElement>, enrollNewsletter: (props: DefaultFormFields) => void) {
    event.preventDefault();
    console.log({ email });
    if (email) {
      enrollNewsletter({ EMAIL: email });
    }
  }

  return (
    <MailchimpSubscribe
      url={EnvVars.MAILCHIMP_SUBSCRIBE_URL}
      render={({ subscribe, status, message }) => {
        const hasSignedUp = status === 'success';
        return (
          <Overlay>
            <Container>
              <Card onSubmit={(event: React.FormEvent<HTMLFormElement>) => onSubmit(event, subscribe)}>
                <CloseIconContainer>
                  <CloseIcon onClick={onClose} />
                </CloseIconContainer>
                {hasSignedUp && <MailSentState />}
                {!hasSignedUp && (
                  <>
                    <Title>Are you ready to enroll to the best newsletter ever?</Title>
                    <Row>
                      <CustomInput
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder="Enter your email..."
                        required
                      />
                      <CustomButton as="button" type="submit" disabled={hasSignedUp}>
                        Submit
                      </CustomButton>
                    </Row>
                    {message && <ErrorMessage dangerouslySetInnerHTML={{ __html: message as string }} />}
                  </>
                )}
              </Card>
            </Container>
          </Overlay>
        );
      }}
    />
  );
}

const Card = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 10rem 5rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 3rem;
`;

