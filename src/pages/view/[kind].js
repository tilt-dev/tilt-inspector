import Head from "next/head";
import Footer from "../../components/Footer";
import {
  newTiltClientFromConfig,
  newTiltConfig,
  getFooterProps,
  setContextFromCookies,
} from "../../lib/client";
import { ObjectSerializer } from "../../gen/model/models";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { kind } = context.params;
  let config = newTiltConfig();
  setContextFromCookies(config, context);
  let client = newTiltClientFromConfig(config);
  let resourceList = await client.getAPIResources();
  let resource = resourceList.body.resources.find((item) => {
    return kind.toLowerCase() == item.kind.toLowerCase();
  });
  if (!resource) {
    return { notFound: true };
  }

  let objList = await client["list" + resource.kind]();
  let data = JSON.parse(JSON.stringify(objList)).body;
  return { props: { data, ...getFooterProps(config) } };
}

// List all the objects of the given kind
export default function List(props) {
  const { kind } = useRouter().query;
  let { data } = props;
  let children = data.items.map((item) => {
    return (
      <div>
        <pre key={item.metadata.name} style={{ "white-space": "no-wrap" }}>
          {JSON.stringify(item, null, "  ")}
        </pre>
      </div>
    );
  });

  return (
    <div className="container">
      <main>
        <h1>{kind} List</h1>
        {children}
      </main>
      <Footer currentContext={props.currentContext} contexts={props.contexts} />
    </div>
  );
}
