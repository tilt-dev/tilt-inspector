import Head from "next/head";
import Footer from "../../../components/Footer";
import { newTiltClient } from "../../../lib/client";
import { ObjectSerializer } from "../../../gen/model/models";

export async function getServerSideProps(context) {
  const { kind, name } = context.params;
  let client = newTiltClient();
  let resourceList = await client.getAPIResources();
  let resource = resourceList.body.resources.find((item) => {
    return kind.toLowerCase() == item.kind.toLowerCase();
  });
  if (!resource) {
    return { notFound: true };
  }

  let objList = await client["read" + resource.kind](name);
  let data = JSON.parse(JSON.stringify(objList)).body;
  return { props: { data } };
}

// Read one object of the given kind.
export default function List(props) {
  let { data } = props;
  let child = (
    <div>
      <pre style={{ "white-space": "no-wrap" }}>
        {JSON.stringify(data, null, "  ")}
      </pre>
    </div>
  );

  return (
    <div className="container">
      <main>{child}</main>
      <Footer />
    </div>
  );
}
