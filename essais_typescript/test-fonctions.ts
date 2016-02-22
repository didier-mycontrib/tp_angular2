
//function type:
var myAdd : (a:number, b:number) => number 
 = function(x, y) { return x+y; };

console.log("res="+myAdd(5,6));

//optional parameter:
function buildNameV1(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//default parameter:
function buildNameV2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
//optional last parameters:
function buildNameV3(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
}

var employeeName1 = buildNameV1("Joseph");
var employeeName2 = buildNameV2("Joseph");
var employeeName3 = buildNameV3("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("employeeName1="+employeeName1);
console.log("employeeName2="+employeeName2);
console.log("employeeName3="+employeeName3);

//lambda expressions:

var myFct : ( tabNum : number[]) => number ;
// myFct = (tab) => { var taille = tab.length; return taille; }
//myFct = (tab) => { return tab.length; }
//myFct = (tab) => tab.length; 
myFct = tab => tab.length; 

var numRes = myFct([12,58,69]);
console.log("numRes=" + numRes);

var myFct2 : ( x : number , y:number ) => number ;
//myFct2 = (x,y) => { return (x+y) / 2; }
myFct2 = (x,y) => (x+y) / 2; 

var numRes2 = myFct2(5.5 , 3.3);
console.log("numRes2=" + numRes2);

//basic overload:

function displayColor( tabRgb : number[] ) : void;
function displayColor(c: string) : void;

function displayColor(p:any) : void{
  if(typeof p == "string" ){
   console.log("c:" + p);
   }
   else if(typeof p == "object" ){
   console.log("r:" + p[0] + ",g:" +p[1] + ",b="+p[1]);
   }
   else{
   console.log("unknown color , typeof =" + (typeof p));
   }
}

displayColor([125,250,30]);
displayColor("red");
