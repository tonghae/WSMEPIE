import { resolve } from 'path';

const projectRoot = resolve(process.cwd());
const source = resolve(projectRoot, 'src');
const dist = resolve(projectRoot, 'dist');
const client = resolve(source, 'client');
const server = resolve(source, 'server');
const clientDist = resolve(dist, 'client');
const distAssetSubdirName = 'assets';
const clientDistWithAssetSubdir = resolve(clientDist, distAssetSubdirName);
const serverDist = resolve(dist, 'server');
const tools = resolve(projectRoot, 'tools');

const paths = {
    projectRoot,
    source, dist,
    client, server,
    clientDist, serverDist, clientDistWithAssetSubdir,
    distAssetSubdirName,
    tools,
};

export default paths;