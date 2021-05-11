set -ex

# Truncate the package prefix on all api names
sed 's/com.github.tilt-dev.tilt.pkg.apis.core.//g' src/gen/swagger.json.original > src/gen/swagger.json.unprocessed

# Run the Kubernetes codegen
genpath="../gen"
if [ ! -d "$genpath" ]; then
  echo "Kubernetes client generator not found at $genpath"
  echo "In the directory above this one, run:"
  echo "\tgit clone https://github.com/kubernetes-client/gen.git"
  exit 1
fi

../gen/openapi/typescript.sh src/gen settings

# Make all the imports consistent with how our typescript/nextjs config
# wants them.
find src/gen -name "*.ts" | xargs sed -i 's/import \(.*\) = require(\(.*\))/import \1 from \2/g'
