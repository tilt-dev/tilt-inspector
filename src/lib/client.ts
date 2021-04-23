const k8s = require("@kubernetes/client-node");
const TiltApi = require("../gen/api").TiltDevV1alpha1Api;
const homedir = require("os").homedir();
const path = require("path");

export let newTiltClient = (): number => {
  const kc = new k8s.KubeConfig();
  let loaded = false;
  try {
    kc.loadFromFile(path.join(homedir, ".windmill", "config"), {
      context: "tilt-default",
    });

    loaded = !!kc.getCurrentCluster();
  } catch (e) {}

  if (!loaded) {
    try {
      kc.loadFromFile(path.join(homedir, ".tilt-dev", "config"), {
        context: "tilt-default",
      });
      loaded = !!kc.getCurrentCluster();
    } catch (e) {}
  }

  if (!loaded) {
    throw new Error("Could not connect to running Tilt instance");
  }

  return kc.makeApiClient(TiltApi);
};
