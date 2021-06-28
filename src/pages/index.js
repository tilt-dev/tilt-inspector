import Header from "../components/Header";
import {
  newTiltConfig,
  getHeaderProps,
  setContextFromCookies,
} from "../lib/client";
import cookie from "cookie";

export async function getServerSideProps(context) {
  let config = newTiltConfig();
  setContextFromCookies(config, context);
  return {
    props: { ...getHeaderProps(config) },
  };
}

export default function Home(props) {
  return (
    <div className="container">
      <Header currentContext={props.currentContext} contexts={props.contexts} />

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

          <a href="/view/podlogstream" className="card">
            <h3>Pod Log Streams &rarr;</h3>
            <p>Pod logs available for reading</p>
          </a>

          <a href="/view/portforward" className="card">
            <h3>Port Forwards &rarr;</h3>
            <p>Local ports bound to a Kubernetes Pod</p>
          </a>

          <a href="/view/imagemap" className="card">
            <h3>Image Map &rarr;</h3>
            <p>Image references built by Tilt</p>
          </a>

          <a href="/view/kubernetesapply" className="card">
            <h3>Kubernetes Apply &rarr;</h3>
            <p>Kubernetes objects applied to the cluster</p>
          </a>

          <a href="/view/kubernetesdiscovery" className="card">
            <h3>Kubernetes Discovery &rarr;</h3>
            <p>Pods inferred from deployed Kubernetes objects</p>
          </a>

          <a href="/view/uisession" className="card">
            <h3>UI Session &rarr;</h3>
            <p>Global info for the Tilt web UI</p>
          </a>

          <a href="/view/uiresource" className="card">
            <h3>UI Resource &rarr;</h3>
            <p>Per-resource info for the Tilt web UI</p>
          </a>

          <a href="/view/uibutton" className="card">
            <h3>UI Button &rarr;</h3>
            <p>Custom buttons for the Tilt web UI</p>
          </a>
        </div>
      </main>
    </div>
  );
}
