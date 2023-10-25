import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '../')

const fromRoot = (...segments) => resolve(root, ...segments)

await esbuild.build({
    outdir: fromRoot('dist'),
    entryPoints: [fromRoot('src/index.tsx')],
    assetNames: 'assets/[ext]/[name]-[hash]',
    entryNames: '[ext]/[name]',
    bundle: true,
    jsx: 'automatic',
    loader: {
        '.woff': 'dataurl'
    },
    plugins: [
        sassPlugin({
            type: 'style',
        })
    ]
})