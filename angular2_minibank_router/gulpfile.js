const gulp = require("gulp");
const tsc = require('gulp-typescript');
//const babel = require('gulp-babel'); // pour conversion es2015 vers es5 : ok mais lent sur gros fichier , utilisation de tsc plus rapide
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint'); //tslint / jslint analyse le code source et genere des warnings selon les regles de tslint.json (un peu comme checkstyle en java)
const del = require("del");
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');
//const concat = require('gulp-concat'); //not applicable for modules , use roller instead
const ignore = require('gulp-ignore');
const tscProject = tsc.createProject("tsconfig.json");//prend  en compte les principales options depuis la v3 de gulp-typescript
const tscProjectEs2015 = tsc.createProject("tsconfig-es2015.json");//version -es2015 pour rollup avec conversion es5 
const gulpUtil = require('gulp-util');
const rollup = require('rollup-stream'); //pour creer des bundles js au format cjs ou umd ou autres
const html = require('rollup-plugin-html'); //pour intégrer les .html au rollup/bundle
const nodeResolve = require('rollup-plugin-node-resolve'); //for rollup config
const source = require('vinyl-source-stream');
//const run = require('gulp-run'); //pour lancer npm run ou autre depuis gulp
const rename = require("gulp-rename");

//clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});


//Lint all custom TypeScript files (==> generate warning) .
gulp.task('tslint', function () {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report({
            emitError: false  //just warning !!!
        }));
});

// TypeScript compile (mode "dev" avec sourcemaps et dist-dev)
gulp.task('compile', [/*'tslint'*/], function () {
    var tsResult = 
    gulp.src('src/**/*.ts')
    //tscProject.src() //prend en compte l'option "rootDir" de tsconfig.json
    .pipe(sourcemaps.init())   
    .pipe(tscProject(/*tsc.reporter.defaultReporter()*/)) ; 
    //.pipe(gulp.dest('dist')); //si pas suite avec sourcemaps.write
    
    return tsResult.js //.js en plus depuis la v3
        .pipe(sourcemaps.write(".", {sourceRoot: '/src'}))
        .pipe(gulp.dest('dist')); 
});



gulp.task('compile-es2015', [], function () {
return gulp.src('src/**/*.ts')
      .pipe(tscProjectEs2015(/*tsc.reporter.defaultReporter()*/))
      .pipe(gulp.dest('dist')); 
});

function RollupNG2(){
	
}

RollupNG2.prototype.resolveId = function resolveId(id, from) {
    if (id.startsWith('rxjs/')) {
	      return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
	    }
	    return undefined;
	  }

function rollupNG2() { 
	return new RollupNG2(); 
}




gulp.task('rollup-app', [ 'compile-es2015'], function () {
	return rollup({
	      entry: './dist/app/main.js',
	      sourceMap: true,
	      treeshake: true,
	      format: 'iife',
	      moduleName: 'app' , // equivalent to --name
	    plugins: [
                 rollupNG2(),
	    	    nodeResolve({jsnext: true, main: true }) 
	    	    ],
	    	external: [
	    	           '@angular/core',
	    	           '@angular/common',
	    	           '@angular/compiler',
	    	           '@angular/http',
	    	           '@angular/platform-browser',
	    	           '@angular/platform-browser-dynamic',
	    	           '@angular/router',
	    	           '@angular/forms',
	    	           '@angular/upgrade'
	    	          ],
	    	  globals: {
	    	        	    '@angular/core': 'vendor._angular_core',
	    	        	    '@angular/common':'vendor._angular_common',
	    	        	    '@angular/compiler':'vendor._angular_compiler',
	    	        	    '@angular/http': 'vendor._angular_http',
	    	        	    '@angular/platform-browser': 'vendor._angular_platformBrowser',
	    	        	    '@angular/platform-browser-dynamic': 'vendor._angular_platformBrowserDynamic',
	    	        	    '@angular/router' : 'vendor._angular_router',
	    	        	    '@angular/forms': 'vendor._angular_forms',
	    	        	    '@angular/upgrade' : 'vendor._angular_upgrade',
	    	      }
	    })
	    .pipe(source('app-bundle.js'))
	    .pipe(gulp.dest('./dist/build-es2015')); 
});


gulp.task('rollup-vendor', [], function () {
	return rollup({
		 entry: 'src/vendor-entry-for-rollup.js',
		 //dest: 'dist/vendor.es2015.js',
		 format: 'iife',
		 moduleName: 'vendor',
	     plugins: [
                //typescript(),
                 rollupNG2(),
	    	    nodeResolve({jsnext: true, main: true })
	    	    ]
	    })
	   .pipe(source('vendor-bundle.js'))
       .pipe(gulp.dest('./dist/build-es2015'));
});

gulp.task('bundle-vendor', ['rollup-vendor'], function () {
	   return  gulp.src('dist/build-es2015/vendor-bundle.js')
	   //.pipe(babel({presets: ['es2015'] })) //tres lent avec gros fichier
	   .pipe(tsc({ noImplicitAny: true,  allowJs: true , target : "es5" }))
	   .pipe(gulp.dest('./dist/build-es5')); 
	   
        //return run("npm run es2015-to-es5-vendor").exec();  //plan b necessitant 
        //"es2015-to-es5-vendor": "tsc --out ./dist/prod/build-es5/vendor-bundle.js --target es5  --allowJs dist/prod/build-es2015/vendor-bundle.js",
        //dans scipts { } de package.json 
});

gulp.task('bundle-vendor-min', ['bundle-vendor'], function () {
     return  gulp.src('dist/build-es5/vendor-bundle.js')
     .pipe(uglify().on('error', gulpUtil.log))
     .pipe(gulp.dest("dist/bundle-min")); //good results if dest dir different of src dir
});

gulp.task('bundle-vendor-min-gz', ['bundle-vendor-min'], function () {
    return  gulp.src('dist/bundle-min/vendor-bundle.js')
    .pipe(gzip())
    .pipe(gulp.dest("dist/bundle-min-gz"));
});

gulp.task('bundle-app', ['rollup-app'], function () {
	return  gulp.src('dist/build-es2015/app-bundle.js')
    //.pipe(babel({presets: ['es2015'] })) //tres lent avec gros fichier
	.pipe(tsc({ noImplicitAny: true, allowJs: true ,target : "es5" }))
   .pipe(gulp.dest('./dist/build-es5')); 
	
	//return run("npm run es2015-to-es5-app").exec();  //plan b necessitant 
	// "es2015-to-es5-app": "tsc --out ./dist/prod/build-es5/app-bundle.js --target es5  --allowJs dist/prod/build-es2015/app-bundle.js", 
	//dans scipts { } de package.json
	
});

gulp.task('bundle-app-min', ['bundle-app'], function () {
     return  gulp.src('dist/build-es5/app-bundle.js')
     .pipe(uglify().on('error', gulpUtil.log))
     .pipe(gulp.dest("dist/bundle-min")); //good results if dest dir different of src dir
});

gulp.task('bundle-app-min-gz', ['bundle-app-min'], function () {
    return  gulp.src('dist/bundle-min/app-bundle.js')
    .pipe(gzip())
    .pipe(gulp.dest("dist/bundle-min-gz"));
});


//Copy all resources that are not TypeScript files into build/dist-dev directory (.html , .css , .json, ...)
gulp.task('copy_resources', function (){
    return gulp.src(["src/**/*", "!**/*.ts"])
          .pipe(ignore.exclude([ "vendor-entry-for-rollup.js" ]))
          .pipe(gulp.dest("dist"));
});



//Copy all required libraries into build/dist directory.
gulp.task("copy-libs-prod",  function (){
    return gulp.src([
            'reflect-metadata/Reflect.js',
            'zone.js/dist/zone.js',
            
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(uglify().on('error', gulpUtil.log))
        .pipe(gulp.dest("dist/lib"));
});

gulp.task("copy-libs-dev",[ 'copy-libs-prod' ] ,  function (){
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'rxjs/**',
            '@angular/core/bundles/core.umd.js',
            '@angular/common/bundles/common.umd.js',
            '@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http/bundles/http.umd.js',
            '@angular/router/bundles/router.umd.js',
            '@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade/bundles/upgrade.umd.js',
            'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(ignore.exclude([ "**/*.map" , "**/*.ts" , "**/*.txt" , "**/*.md" , "**/*.json"]))
        .pipe(uglify().on('error', gulpUtil.log))
        .pipe(gulp.dest("dist/lib-dev"));
});







//Watch for changes in TypeScript, HTML and CSS files:

gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});


gulp.task('build', ['copy_resources','compile','copy-libs-dev' ], function(){
    console.log("Building the project ...");
});

gulp.task('build-prod', ['copy_resources','copy-libs-prod','bundle-app-min-gz','bundle-vendor-min-gz' ], function(){
    console.log("Building the project for prod (bundle , uglify , zgip) ...");
 // rename indexProd.html to index.html
    gulp.src("./dist/indexProd.html")
      .pipe(rename("index.html"))
      .pipe(gulp.dest("./dist")); 
     del(["dist/indexProd.html" , "dist/systemjs.config.js" , "dist/build-es5" , "dist/build-es2015" , "dist/app" ]);
});

gulp.task('default', ['build']);