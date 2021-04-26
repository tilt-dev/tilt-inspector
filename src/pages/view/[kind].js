import Head from "next/head";
import Header from "../../components/Header";
import {
  newTiltClientFromConfig,
  newTiltConfig,
  getHeaderProps,
  setContextFromCookies,
} from "../../lib/client";
import { ObjectSerializer } from "../../gen/model/models";
import { useRouter } from "next/router";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
import ArrowUp from "@material-ui/icons/KeyboardArrowUp";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";

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
  return { props: { data, ...getHeaderProps(config) } };
}

function Row(props) {
  const { item } = props;
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowUp /> : <ArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{item.metadata.name}</TableCell>
        <TableCell align="right">{item.metadata.creationTimestamp}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <pre style={{ "white-space": "no-wrap" }}>
              {JSON.stringify(item, null, "  ")}
            </pre>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// List all the objects of the given kind
export default function List(props) {
  const { kind } = useRouter().query;
  let { data } = props;
  let children = data.items.map((item) => {
    return <Row key={item.metadata.name} item={item} />
  });

  return (
    <div className="container">
      <Header currentContext={props.currentContext} contexts={props.contexts} />

      <main>
        <h1>{kind} List</h1>
        <Table style={{maxWidth: '1000px', width: '75vw'}}>

                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Creation Timestamp</TableCell>
                  </TableRow>
</TableHead>
          {children}
        </Table>
      </main>
    </div>
  );
}
