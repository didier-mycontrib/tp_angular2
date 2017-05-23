var tableau : string[] = new Array<string>();

//tableau.push("abc");
//tableau.push("def");

tableau[0] = "abc";
tableau[1] = "def";

var n : number = tableau.length;
for(let i = 0;i<n;i++) {
     console.log(">> at index " + i  + " value = " + tableau[i] ) ;
}

for(let i in tableau) {
     console.log("** at index " + i  + " value = " + tableau[i] ) ;
}

for( let s  of tableau){
    console.log("## val = " + s) ;
}
