set -ex

sed 's/com.github.tilt-dev.tilt.pkg.apis.core.//g' src/gen/swagger.json.original > src/gen/swagger.json.unprocessed
../gen/openapi/typescript.sh src/gen settings
