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