import {defineConfig} from "vite";
import path from 'path'

let inputs = [path.resolve(__dirname, 'index.html')];

for (let i = 1; i <= 14; i++) {
    inputs.push(path.resolve(__dirname, `1.${i}/index.html`));
}

export default defineConfig({
    base:'./',
    assetsInclude: [
        '**/*.glb'
    ],
    build: {
        rollupOptions: {
            input: inputs,
        }
    }
});