les fichiers src/**/*.html et src/**/*.css doivent être (regulierement) recopiés
dans dist/**

ceci peut s'effectuer via:
 sudo npm install copyfiles -g
 ajouter
   "cp-html-css" : "copyfiles -u 1 src/**/*.html dist ; copyfiles -u 1 src/**/*.css dist ; copyfiles -u 1 src/**/*.json dist", 
   "prestart" : "npm run cp-html-css"
   
    dans packages.json
 et lancer 
   npm run cp-html-css 
   ou bien npm start (apres prestart automatiquement lance avant)
=======
dans systemjs.config.js 

  map: {
      // our app is within the app folder
      app: 'dist/app',
======
dans tsconfig.json

 "outDir": "./dist",
 "rootDir" : "./src",
