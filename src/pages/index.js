import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️
          <br />
          Welcome to the Tilt Inspector
          <br />
          🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️🕵️
        </h1>

        <p className="description">
          Inspect the current state of any running&nbsp;
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

      <Footer />
    </div>
  );
}
