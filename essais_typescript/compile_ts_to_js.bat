REM npm run tsc hello_world.ts > res_tsc.txt 2> err_tsc.txt
REM les alias tsc:w pour tsc -w et tsc:tES5 pour tsc -t ES5
REM           tsc:m pour tsc --module commonjs sont d�finis dans packages.json

REM avec option :w signifiant "watch mode" (npm run tsc:w) , recompilation des que modif detectee sur fichier .ts engregistre
REM npm run tsc:w hello_world.ts

REM npm run tsc essai_interface.ts  > res_tsc.txt 2> err_tsc.txt
npm run tsc:tES5 test_classes.ts > res_tsc.txt 2> err_tsc.txt
REM npm run tsc:tES5 validateurs-internal-module.ts > res_tsc.txt 2> err_tsc.txt
REM npm run tsc:m validateurs.ts test-validateurs.ts > res_tsc.txt 2> err_tsc.txt
REM npm run tsc test-fonctions.ts > res_tsc.txt 2> err_tsc.txt
REM npm run tsc web/svg-fig.ts > res_tsc.txt 2> err_tsc.txt
REM npm run tsc test-tableaux.ts > res_tsc.txt 2> err_tsc.txt
REM pause
