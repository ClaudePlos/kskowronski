import Link from 'next/link'

export default function Agencje() {
    return (
        <>
        <div className="container">
          <h1>Agencje pracy. Grafiki, składniki płacowe.</h1>
          <img src="/kskowronski/images/agency/agency01.png" width="100%" height="auto"></img>
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