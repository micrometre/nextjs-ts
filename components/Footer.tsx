import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from './Container';
import { media } from '../utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    title: 'Services',
    items: [
      { title: 'Domestic', href: '/domestic' },
      { title: 'Commercial', href: '/commercial' },
    ],
  },
  {
    title: 'Location',
    items: [
      { title: 'Contact', href: '/contact' },
    ],
  },
];

export function CopyRight(): JSX.Element {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const year = `${current.getFullYear()}`;
  return (
    <div className="copyright-container">
      <div className="copyright-main">
        <div className="copyright-grid">
          <div  className="copyright-card">
            <p className="copyright-description">
              Copyright ©{year}
              <code>Electricalsurrey Ltd.</code>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .copyright-container {
          padding:  0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .copyright-main {
          padding:  0.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom:  2.0rem;
        }
        .copyright-description {
          text-align: center;
          text-decoration: none;
          color: #fff;
          line-height: 1.3;
          font-size: 0.9rem;
        }
        code {
          border-radius: 5px;
          padding: 0.75rem;
          color: #fff;
          font-size: 0.8rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .copyright-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin:  0.5rem;
        }
        .copyright-card {
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .copyright-grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}


export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Seminole tax hike"
              >
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/my-saas-startup" passHref>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Seminole tax hike"
              >
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/my-saas-startup" passHref>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Seminole tax hike"
              >
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
         <CopyRight/> 
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem 
        
        
        key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a
          target="_blank"
          rel="noreferrer"
          aria-label="Read more about Seminole tax hike"

        >{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
