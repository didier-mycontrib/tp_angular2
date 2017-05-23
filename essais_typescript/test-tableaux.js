var tableau = new Array();
//tableau.push("abc");
//tableau.push("def");
tableau[0] = "abc";
tableau[1] = "def";
var n = tableau.length;
for (var i = 0; i < n; i++) {
    console.log(">> at index " + i + " value = " + tableau[i]);
}
for (var i in tableau) {
    console.log("** at index " + i + " value = " + tableau[i]);
}
for (var _i = 0, tableau_1 = tableau; _i < tableau_1.length; _i++) {
    var s = tableau_1[_i];
    console.log("## val = " + s);
}
//# sourceMappingURL=test-tableaux.js.map