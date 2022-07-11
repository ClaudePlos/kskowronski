import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
        <div className="container">
          <div className="card">
            <h1>Kontakt:</h1>
            <h3><a href = "mailto:skowronki.klaudiusz@gmail.com?subject = Feedback&body = Message">mail: skowronki.klaudiusz@gmail.com</a></h3>
            <h3><a href="tel:607-039-259">phone: 607 039 259</a></h3>
          </div>
          <h2>
            <Link href="/">
              <a>Back to main page</a>
            </Link>
          </h2>
          <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .card {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
              width: 100%
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
        </>
      )
  }