// rollup.config.vendor.js
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';

// Custom Rollup Plugin to resolve rxjs deps

class RollupNG2 {
 constructor(options){
 this.options = options;
 }
 resolveId(id, from){
 if(id.startsWith('rxjs/')){
 return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
 }
 }
}
const rollupNG2 = (config) => new RollupNG2(config);

export default {
 entry: 'src/vendor-entry-for-rollup.js',
 dest: 'dist/build-es2015/vendor-bundle.js',
 format: 'iife',
 moduleName: 'vendor',
 plugins: [
   //typescript(),
   rollupNG2(),
   nodeResolve({ jsnext: true, main: true }),
 ]
}