import Link from 'next/link'

export default function PortalPracowniczy() {
    return (
        <>
        <div className="container">
          <h1>Portal Pracowniczy</h1>
          <h1>1. Strona Głównym</h1>
          <img src="/kskowronski/images/main_page.png" width="531" height="300"></img>
          <h2>
            <Link href="/">
              <a>Powrót do strony głównej</a>
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