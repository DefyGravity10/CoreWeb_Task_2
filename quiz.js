document.getElementById("page2").style.display="none";
var score=0;

var q1={
    question: "Dummy question 1",
    options: ["A","B","C","D"],
    correctAnswer: "C",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q2={
    question: "Dummy question 2",
    options: ["A","B","C","D"],
    correctAnswer: "A",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined

};

var q3={
    question: "Dummy question 3",
    options: ["A","B","C","D"],
    correctAnswer: "B",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined

};

var q4={
    question: "Dummy question 4",
    options: ["A","B","C","D"],
    correctAnswer: "C",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined

};

var q5={
    question: "Dummy question 5",
    options: ["A","B","C","D"],
    correctAnswer: "C",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q6={
    question: "Dummy question 6",
    options: ["A","B","C","D"],
    correctAnswer: "D",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q7={
    question: "Dummy question 7",
    options: ["A","B","C","D"],
    correctAnswer: "A",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q8={
    question: "Dummy question 8",
    options: ["A","B","C","D"],
    correctAnswer: "C",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q9={
    question: "Dummy question 9",
    options: ["A","B","C","D"],
    correctAnswer: "C",
    status: undefined,
    answerSelected: undefined,
    correct: undefined,
    button: undefined
};

var q10={
    question: "Dummy question 10",
    options: ["A","B","C","D"],
    correctAnswer: "B",
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
    document.getElementById("page1").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("page2").style.display="block";

    randomSerial();

    tempIndex=0;
    tempObject=QueArray[tempIndex];

    display();
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
        }
        else{
            tempObject.correct="n";
        }
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

function next()
{
    if(tempIndex<9)
    {
        tempIndex++;
        tempObject=QueArray[tempIndex];
        display();
    }
}

function back(){
    if(tempIndex>=1)
    {
        tempIndex--;
        tempObject=QueArray[tempIndex];
        display();
    }
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