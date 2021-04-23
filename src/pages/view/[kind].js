import Head from "next/head";
import Footer from "../../components/Footer";
import { newTiltClient } from "../../lib/client";
import { ObjectSerializer } from "../../gen/model/models";

export async function getServerSideProps(context) {
  const { kind } = context.params;
  let client = newTiltClient();
  let resourceList = await client.getAPIResources();
  let resource = resourceList.body.resources.find((item) => {
    return kind.toLowerCase() == item.kind.toLowerCase();
  });
  if (!resource) {
    return { notFound: true };
  }

  let objList = await client["list" + resource.kind]();
  let data = JSON.parse(JSON.stringify(objList)).body;
  return { props: { data } };
}

// List all the objects of the given kind
export default function List(props) {
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
      <main>{children}</main>
      <Footer />
    </div>
  );
}
