REM npm run tsc hello_world.ts > res_tsc.txt 2> err_tsc.txt
REM les alias tsc:w pour tsc -w et tsc:tES5 pour tsc -t ES5 sont définis dans packages.json

REM avec option :w signifiant "watch mode" (npm run tsc:w) , recompilation des que modif detectee sur fichier .ts engregistre 
REM npm run tsc:w hello_world.ts

REM npm run tsc essai_interface.ts  > res_tsc.txt 2> err_tsc.txt
npm run tsc:t ES5 test_classes.ts > res_tsc.txt 2> err_tsc.txt
REM pause

