import Link from 'next/link'

export default function KsiegaGlowna() {
    return (
        <>
        <div className="container">
          <h1>Księga Głowna</h1>
          <img src="/kskowronski/images/balance/balance01.png" width="100%" height="auto"></img>
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