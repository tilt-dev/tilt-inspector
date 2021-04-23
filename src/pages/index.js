import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tilt Inspector</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Montserrat:400,600" rel="stylesheet" />
      </Head>

      <main>
        <div>
        </div>

        <h1 className="title">
          🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️<br/>
          Welcome to the Tilt Inspector<br/>
          🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️
        </h1>

        <p className="description">
          Inspect the current state of a running&nbsp;
          <img src="/wordmark.svg" alt="Tilt" className="logo" />
          &nbsp;instance.
        </p>

        <div className="grid">
          <a href="/view/cmd" className="card">
            <h3>Commands &rarr;</h3>
            <p>Local commands currently running</p>
          </a>

          <a href="/view/filewatch" className="card">
            <h3>File Watches &rarr;</h3>
            <p>Directories and files that trigger changes</p>
          </a>

          <a href="/view/session" className="card">
            <h3>Session &rarr;</h3>
            <p>Resources and a summary of their statuses</p>
          </a>

          <a href="/view/podlogstreams" className="card">
            <h3>Pod Log Streams &rarr;</h3>
            <p>Pod logs available for reading</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
      `}</style>
    </div>
  )
}
