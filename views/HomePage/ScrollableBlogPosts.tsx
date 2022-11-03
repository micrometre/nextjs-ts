import Head from 'next/head'

export default function Home() {
  return (
    <div className="container"
    style={{
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      borderRadius: "3px",
      backgroundColor: "hsla(290,60%,70%,0.1)"

    }}
    >
      <main>

        <p className="description">
          Surrey Electrical and Car Charging offer full electrical services for all domestic and commercial properties. 
          
          <br/>
          Our qualified engineers work to regulation standards in design, installation and NICEIC Certification.
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <p>
            We work a to very high standard and pride ourselves on being 100% honest.
              </p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <p>
              We are always dependable and time keeping is one of strongest points.
              </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <p>
            Care and attention to our clients is something that sets us apart.
              </p>
          </a>

        </div>
      </main>


      <style jsx>{`
        .container {
          min-height: 10vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }


        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 5rem;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 0rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          max-width: 220px;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }


        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}