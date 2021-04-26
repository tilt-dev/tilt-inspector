#!/usr/bin/env node

let port = Number(process.env['TILT_INSPECTOR_PORT']) || 3000
let dir = require('@tilt.dev/tilt-inspector').dirname
let cp = require('child_process')

cp.execSync('next start -p ' + port, {cwd: dir, stdio: ['pipe', process.stdout, process.stderr]})
