const k8s = require("@kubernetes/client-node");
const TiltApi = require("../gen/api").TiltDevV1alpha1Api;
const homedir = require("os").homedir();
const path = require("path");
const Cookie = require("universal-cookie");

// Load the current tilt config.
export let newTiltConfig = () => {
  const kc = new k8s.KubeConfig();
  let loaded = false;
  try {
    kc.loadFromFile(path.join(homedir, ".windmill", "config"));
    loaded = true;
  } catch (e) {}

  if (!loaded) {
    try {
      kc.loadFromFile(path.join(homedir, ".tilt-dev", "config"));
      loaded = true;
    } catch (e) {}
  }

  if (!loaded) {
    throw new Error("Could not connect to running Tilt instance");
  }
  return kc;
};

// Create a tilt client from the default context.
export let newTiltClient = () => {
  return newTiltClientFromConfig(newTiltConfig());
};

// Create a tilt client from the given context.
export let newTiltClientFromConfig = (kc) => {
  if (!kc.getCurrentCluster()) {
    throw new Error("Could not connect to running Tilt instance");
  }
  return kc.makeApiClient(TiltApi);
};

// Set the current context from the request context cookie.
export function setContextFromCookies(config, context) {
  let cookie = new Cookie(context.req.headers.cookie);
  let desiredContext = cookie.get("tilt-context");
  config.getContexts().forEach((c) => {
    if (c.name == desiredContext) {
      config.setCurrentContext(c.name);
    }
  });
}

// Fetch the props for the footer.
export function getHeaderProps(config) {
  return {
    currentContext: config.getCurrentContext(),
    contexts: config.getContexts().map((c) => c.name),
  };
}
