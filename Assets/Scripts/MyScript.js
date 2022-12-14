function _Multiply(Number1,Number2){
    return Number1*Number2;
}

function _ToCelsius(FahrenheitTemp){
    return (5/9) * (FahrenheitTemp-32);
}

function _ObjectExample(){
    const Person={
        FirstName: "Amir",
        Lastname : "Ekramian",
        Age: "23",
        //"this" is a keyword access to current object
        FullName: function(){
            return this.FirstName +" "+this.Lastname;
        }
        
    };

    //two way to access the object properties
    let Name = Person.FirstName;
    let Family = Person["Lastname"];

    //access to an property that is a method
    let full = Person.FullName();

    let x = new String("Amir");
    let y = new String("Amir");

    x==y;    //False : two objects can't be compared
    x===y; //False : two objects can't be compared
}

function _StringMethodes(){
    //length
    let Text = "My Name Is Amir";
    let length = Text.length;  //return text Length

    //slice
    let Part = Text.slice(11,15); //return Amir: start,End
    let part2 = Text.slice(3); //return Name Is Amir: start,End
    let part3 = Text.substr(0,7); //return My Name: start,length
    let part4 = Text.slice(-5,-14);//return My Name Is : from end

    //replace
    let newtext = Text.replace("Amir","Saeed"); //return My Name Is Saeed (replace only first nmatch case)
    let newtext2 = Text.replace(/aMiR/i,"Saeed"); //return My Name Is Saeed(insensitive source)
    let newtext3 = Text.replace(/Amir/g,"Saeed"); //return My Name Is Saeed (replace All Match Cases)
    let newtext4 = Text.replace(/aMiR/ig,"Saeed"); //return My Name Is Saeed (replace All Match Cases and insensitive)
    let newtext5 = Text.replaceAll(/Amir/g,"Saeed") //return similar newtext3

    //Convert Cases
    let ConvertedText = Text.toUpperCase();//return MY NAME IS AMIR
    let ConvertedText2 = Text.toLowerCase();//return my name is amir
    
    //concats
    let SecondText = "And I'm Fine";
    let concatedText = Text.concat("" , SecondText); //return My Name Is Amir And I'm Fine

    //trim
    let TrimedText = Text.trim(); //return MyNameIsAmir
    let TrimedText2 = Text.trimEnd()//Delete spaces from end
    let TrimedText3 = Text.trimStart()//Delete spaces from start

    //Padding Text
    let PaddedText = Text.padStart(5,"X")//return XXXXXMy Name Is Amir
    let PaddedText2 = Text.padEnd(5,"-") //return My Name Is Amir-----

    //Seprate String
    let CharText = Text.charAt(5); //return m
    let CharTextCode = Text.charCodeAt(5); // return m Ascii Code
    let SpecificCharacter = Text[5]; //return m

    //Split
    const SplitedWords =[];
    SplitedWords = Text.split(" "); 
}
function _StringSearches(){
    //index of
    let source = "My Name Is Amir And I'm Fine";
    let indexOf = source.indexOf("Amir"); //return 7 and return -1 if text not exist
    let indexOf2 = source.lastIndexOf("Amir"); // return 7 from end and return -1 if text not exist
    let index3 = source.matchAll(/m/ig); //return array [M,m,m,m]

    //includes
    let index4 = source.includes("Amir"); //return true
    let index5 = source.includes("Amir",3); //return false: if Amir is exists on 3 return true

    //startwith
    let index6 = source.startsWith("My"); //return true
    let index7 = source.startsWith("Amir"); //return False
    let index8 = source.startsWith("Name",3) //return true

    //EndWith
    let index9 = source.endsWith("Fine"); //return true
    let index10 = source.endsWith("And"); //return false
    let index11 = source.endsWith("Name",7)//return true
}

function _Interpolation(){
    let FirstName = "Amir";
    let Lastname = "Ekramian";
    let Age = 23;

    let text = 'welcome ${Amir} ${LastName}';
    let hisAge = '${FirstName}: ${hisAge+1}';
}

function _IsNan(){
    let number =100;
    let String = "Apple";

    isNaN(number/String);
}

function _Numbers(){
    let x = 123e5; //12300000
    let y = 123e-5 //0.00123

//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
    let a = 9999999999999999; //will be 10000000000000000

let A = "10";
let B = "100";
let result1 = A*B; //1000
let result2 = B/A; //10
let result3 = B-A; //90
let result4 = A+B; //10100

let hex = 0xFF; //255

//bigger than 15 digits
let bigint = 99999999999999999999999n;
//or 
let bigint2 = bigint(84563215385465432514);
}
function _Array(){

    const Cars=["pride","405","206"];

    const Cars2 = [];
    Cars2[0] = "Pride";
    Cars2[1] = "Volvo";
    Cars2[2] = "BMW";

    const Cars3 = new Array("pride","405","206");

    let Pride = Cars[0];

    //Multitype Array
    const ComplexArray = ["Amir","Saeed",45];

    //Indexes can be Diffrent object
    const MyArray = [];
    const PersonEx = {firstName:"Amir",LastName:"Ekramian"}
    MyArray[0] = Date.now; //datetime
    MyArray[1] = _Interpolation; //Method
    MyArray[2] = Cars3; //another array 
    MyArray[3] = PersonEx; //an object

    //Arrays Property and Methodes
    const GlobalArray = ["Amir","Saeed","gholam"];
    let L = GlobalArray.length; //3

    GlobalArray.push("Mina"); //Add a new element to array

    //Very Import ****
    const A1 = new Array(40); // create an array with 40 undifined index
    const A2 = [40]; //create an array with one index with "40" value

    //array recognizer
    Array.isArray(GlobalArray); //true
    let type = typeof GlobalArray; //array
    GlobalArray instanceof Array; //true

    //convert to array
    let sGlobal = GlobalArray.toString(); //Amir,Saeed,gholam
    let Joined = GlobalArray.join(" # "); //Amir # Saeed # gholam

    //delete Last Index
    GlobalArray.pop(); //return gholam

    //Delete First Element
    GlobalArray.shift(); //firs index deleted return Amir
    
    //Add New Elemwet to Begining
    GlobalArray.unshift("Sepehr"); //return Sepehr

    //Delete an element and no change for indexes(Create a Hole in Array)
    delete GlobalArray[0];

    //Concat two array and assign it to new array
    const DArray = GlobalArray.concat(Cars,Cars2,Cars3);

    //add some values to array
    GlobalArray.splice(2,0,"ali");

    //slice array
    const SlicedArray = GlobalArray.slice(1); //slice array=saeed,gholam

    //reverse array
    GlobalArray.reverse();

    

}