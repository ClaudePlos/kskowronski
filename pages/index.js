import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anfix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        Anfix{' '}
          <Link href="/posts/first-post">
            <a>Klaudiusz Skowronski</a>
          </Link>
        </h1>

        <p className="description">
          Posty: <code>kilknij w poniższy temat</code>
        </p>

        <div className="grid">

          <a href="/kskowronski/posts/portal-pracowniczy" className="card">
            <h3>Portal Pracowniczy &rarr;</h3>
            <p>Portal Pracowniczy jest dedykowany dla każdej organizacji i jej pracowników, niezależnie od stanowiska w strukturze.</p>
            <p>Głównym zadaniem jest ułatwienie czynności związanych z zarządzaniem procesami HR w organizacji.</p>
          </a>

          <a href="/kskowronski/posts/raporty-kasowe" className="card">
            <h3>Raporty Kasowe &rarr;</h3>
            <p>Program prowadzi ewidencję dokumentów kasowych KP/KW i drukuje raport kasowy.</p>
            <p>Możliwość wprowadzania wielu kas. Funkcjonalna, prosta i wygodna w użyciu aplikacja. Prosty i łatwy w obsłudze.</p>
          </a>

          <a href="/kskowronski/posts/ksiega-glowna" className="card">
            <h3>Księga Główna &rarr;</h3>
            <p>Aplikacja Księga główna służy do definiowania rekordów finansowych dla firmy i zarządzania nimi. Księga główna to rejestr zapisów debetowych i kredytowych. Te wpisy są sklasyfikowane przy użyciu kont wymienionych w planie kont.</p>
            <p>Obroty i salda wielofirmowo. Kopiowanie kont pomiędzy spółkam. Umożliwia dostęp przez komputer, tablet, smartphone.</p>
          </a>

          <a href="/kskowronski/posts/agencje" className="card">
            <h3>Grafiki - Agencje pracy &rarr;</h3>
            <p>Aplikacja integrująca się z systemem ERP i prezentująca dane pracownicze wybranym agencjom pracy.</p>
            <p>Możliwość drukowania zestawień, raportów. Z aplikacji można korzystać również z tabletów lub poprzez smartphone.</p>
          </a>

          <a href="https://dataworkshop.eu/free-webinar?utm_source=youtube&utm_medium=description&utm_campaign=nlp2&utm_term=channel&utm_content=dataworkshop#joinwebinar" target="_blank" className="card">
            <h3>NLP &rarr;</h3>
            <p>How bulid AI code and develop.</p>
            <p>2021-04-20</p>
          </a>

          <a href="https://github.com/ClaudePlos/pattern_ractive_dev" target="_blank" className="card">
            <h3>Reactive in java &rarr;</h3>
            <p>How write reactive code in java!</p>
            <p>2021-04-19</p>
          </a>

          <a href="https://github.com/ClaudePlos/rusic" target="_blank" className="card">
            <h3>Rust language &rarr;</h3>
            <p>Fast project in RUST language.</p>
            <p>2021-04-15</p>
          </a>

          <a href="https://github.com/ClaudePlos" target="_blank" className="card">
            <h3>My github &rarr;</h3>
            <p>See my project.</p>
            <p>2021-03-19</p>
          </a>

         
        </div>
      </main>

      <footer>
        <a
          href="https://cash.rekeep.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}k.skowronski
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
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
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
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

        .logo {
          height: 1em;
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
