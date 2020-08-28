document.getElementById("page2").style.display="none";
document.getElementById("page3").style.display="none";
var score=0;
var playerName;
var temp;
var seconds=100;

var q1={
    question: "What are the common symptoms of COVID-19?",
    options: ["Sore Throat","Fever","Tiredness","All of these"],
    correctAnswer: "All of these",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q2={
    question: "How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
    options: ["More than 50","More than 100","More than 150","More than 200"],
    correctAnswer: "More than 200",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined

};

var q3={
    question: "Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
    options: ["Plasma Therapy","Solidarity","Remdesivir","Hydroxychloroquine"],
    correctAnswer: "Plasma Therapy",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q4={
    question: "The first case of novel coronavirus was identified in .....",
    options: ["Beijing","Shanghai","Wuhan","Tianjin"],
    correctAnswer: "Wuhan",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined

};

var q5={
    question: " Which of the following diseases are related to coronavirus?",
    options: ["MERS","SARS","Both A & B","Neither A & B"],
    correctAnswer: "Both A & B",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q6={
    question: "Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",
    options: ["Monkeys","Lizards","Hens","Kites"],
    correctAnswer: "Monkeys",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q7={
    question: "Where was the first case of Covid-19 seen outside of China?",
    options: ["Italy","USA","Spain","Thailand"],
    correctAnswer: "Thailand",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q8={
    question: "When was the first case of Covid-19 seen in India",
    options: ["20 Jan 2020","25 Jan 2020","30 Jan 2020","1 Feb 2020"],
    correctAnswer: "30 Jan 2020",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q9={
    question: "Which test is done for detection of Covid-19?",
    options: ["Patch Test","Antibody Test","RT-PCR","Both B & C"],
    correctAnswer: "Antibody Test",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q10={
    question: "There are currently vaccines for the following corona viruses",
    options: ["SARS","MERS","SARS & MERS","None of these"],
    correctAnswer: "None of these",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var store=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var unique_array=[1,2,3,4,5,6,7,8,9,10];
var QueArray=[];

var tempIndex, tempObject;

function start()
{
    playerName=document.getElementById("name").value;
    document.getElementById("page1").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("page2").style.display="block";

    randomSerial();

    tempIndex=0;
    tempObject=QueArray[tempIndex];

    display();
    timing();
}

function timing()                                                           
{
    myvar=setInterval(ttiming, 1000);
}

function ttiming(){                                                         
    seconds--;
    document.getElementById("time").innerHTML=seconds;
    
    if(seconds==0)                                                             
    {
        finished();                                                           
    }       
}

function stop_timing()                                                       
{
    clearInterval(myvar);
}

function randomSerial()
{
    while(QueArray.length<10)
    {
        var index = Math.floor(Math.random()*10);
        if(unique_array[index]!=0)
        {
            unique_array[index]=0;
            QueArray.push(store[index]);
        }
        else{
            randomSerial();
        }
    }
}

function checkAnswer(s)
{
    if(tempObject.status==undefined)
    {
        tempObject.status="Answered";
        tempObject.answerSelected=tempObject.options[s];
        tempObject.button=assignButton();
        if(tempObject.answerSelected==tempObject.correctAnswer)
        {
            score++;
            tempObject.correct="y";
            document.getElementById("scorE").innerHTML=score;
        }
        else{
            tempObject.correct="n";
        }

        document.getElementById(tempIndex+1+""+0).style.backgroundColor="lightgreen";

        display();
    }
}

function assignButton()
{
    for(var i=0;i<4;i++)
    {
        if(tempObject.answerSelected==tempObject.options[i])
        {
            return i+1;
        }
    }
}

function navigate(num)
{
    temp=num;
    tempIndex=temp;
    tempObject=QueArray[tempIndex];
    display();
}

function next()
{
    if(tempIndex<9)
    {
        tempIndex++;
        tempObject=QueArray[tempIndex];
        display(); 
    }

    document.getElementById("score").innerHTML=score;
    
}

function back(){
    if(tempIndex>=1)
    {
        tempIndex--;
        tempObject=QueArray[tempIndex];
        display();
    }
}

function finished(){
    stop_timing();
    score+=0.01*seconds;
    document.getElementById("pname").innerHTML=playerName;
    document.getElementById("page2").style.display="none";
    document.getElementById("score").innerHTML=score;
    document.getElementById("page3").style.display="block";
}

function checkArray()
{
    return tempObject.answerSelected;
}

function display(){
    document.getElementById("no").innerHTML=tempIndex+1;
    document.getElementById("que").innerHTML=tempObject.question;
    for(var j=0; j<4; j++)
    {
        document.getElementById(j+1+"").innerHTML=tempObject.options[j];
    }
    if(tempObject.status=="Answered")
    {
        for(j=0; j<4; j++)
        {
            document.getElementById(j+1+"").style.backgroundColor="white";
        }
        if(tempObject.correct=="y")
            document.getElementById(tempObject.button+"").style.backgroundColor="lightgreen";

        else if(tempObject.correct=="n")
            document.getElementById(tempObject.button+"").style.backgroundColor="orangered";
    
    }   
    else if(tempObject.status==undefined)
    {
        for(j=0; j<4; j++)
        {
            document.getElementById(j+1+"").style.backgroundColor="white";
        }
    }
}