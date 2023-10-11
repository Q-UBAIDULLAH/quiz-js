// function additem()
// {
//     //input ke value list me add hojae
//     var inputElement=document.getElementById('input')
//     var ulElement=document.getElementById('list')
//     var liElement=document.createElement('li')
//     liElement.innerHTML=inputElement.value
//     ulElement.append(liElement)
// }



// function additem()
// {
//     //input ke value list me add hojae
//     //input
//     //list
//     var inputElement=document.getElementById('input')
//     var liElement=document.getElementById('list')
//     var liElement=document.createElement('li')
//     liElement.innerHTML=inputElement.value
//     ulElement.append(liElement)
// }

// ****************************************************************************

//global variable bna ya he hmne 
/*var currentedititem

function additem()
{
    var inputElement=document.getElementById('input')
    var ulElement=document.getElementById('list')
    var liElement=document.createElement('li')
    var editbtn='<button onclick="edititem(event)">EDIT</button>'
    var deletebtn='<button onclick="deleteitem(event)">Delete</button>'
    liElement.innerHTML='<span>'+inputElement.value+'</span>'+editbtn+deletebtn
    // liElement.innerHTML=inputElement.value 
    ulElement.append(liElement)
     inputElement.value=""

}


function deleteitem(event)
{
//jis item ke delete button pr click ho os item ko orana he 
var liElement=event.target.parentElement

liElement.remove()

}

function edititem(event)
{
    //item ke value input me lani he
    var inputElement=document.getElementById('input')
    var Element=event.target.previousSibling
    inputElement.value=Element.innerHTML
    //ADD ke button ke bjae update ka button ajae
    var addbtn=document.getElementById('add-btn')
    var updatebtn=document.getElementById('update-btn')
    updatebtn.className=""
    addbtn.className='hide'
}

function updateItem()
{
    //update ka button add me dubara change hojae
    var updatebtn=document.getElementById('add-btn')
    var addbtn=document.getElementById('add-btn')
    updatebtn.className='hide'
    addbtn.className="" 
//input me jo be value he wo oshi jaga ja kr change jha se oth kr aye thi

}*/

// *******************************************


// function additem()
// {
//     var inputElement=document.getElementById('input')
//     var ulElement=document.getElementById('list')
//     var liElement=document.createElement('li')
//      var editbtn='<button onclick="edititem(event)">Edit</button>'
//     var deletebtn='<button onclick="deleteitem(event)">Delete</button>'
//     liElement.innerHTML=  '<span>'+inputElement.value+'</span>'+editbtn+deletebtn
//     ulElement.append(liElement)
//     inputElement.value=""

// }

// function deleteitem(event)
// {
//     //jis delete button pr click huwa wo delete button mjhe miljae oski madad se li pr pohnch kr ose delete krdo jha se button click huwa he wo kese milega
// var liElement=event.target.parentElement
// liElement.remove()
// }

// function edititem(event)
// {
//     var inputElement=document.getElementById('input')
//     var Element=event.target.previousSibling
//     inputElement.value=Element.innerHTML 
//     var updatebtn=document.getElementById('update-btn')
//     updatebtn.className=""
//     var addbtn=document.getElementById('add-btn')
//     addbtn.className="hide"

// }
// function updateitem()
// {
//     var updatebtn=document.getElementById('update-btn')
//     updatebtn.className="hide"
//     var addbtn=document.getElementById('add-btn')
//     addbtn.className=""
// }

var questions = [
    {
        title: 'What is HTML',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Markup Language'
    },
    {
        title: 'What is CSS',
        options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
        correctAnswer: 'Styling Language'
    },
    {
        title: 'What is JS',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    },
    {
        title: 'What is React',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    }
]
var currentquestion=0
function startquiz(event)
{
    var btn=event.target
    btn.className="hide"
    var questionContainer=document.getElementById("question-container")
    questionContainer.className=""
    var questiontitle=document.getElementById('title')
    questiontitle.innerHTML=questions[currentquestion].title
var options=questions[currentquestion].options
    for (var i=0;i<options.length;i++)
    {//creat kra he input
        var inputElement=document.createElement('input')
        inputElement.type="radio"
        //input ke andr value be tw deni he 
        inputElement.value=options[i] 
        //option ke div me dalna he
var optionElement=document.getElementById('options')
optionElement.append(inputElement)
optionElement.append(options[i])
    }


}
function next()
{
    currentquestion++
    // var questiontitle=document.getElementById('title')
    // questiontitle.innerHTML=questions[currentquestion].title

    if(currentquestion<questions.length)
    {
        var questiontitle=document.getElementById('title')
        questiontitle.innerHTML=questions[currentquestion].title
        // ****************
        var optionElement=document.getElementById('options')
optionElement.innerHTML=""
        var options=questions[currentquestion].options
    for (var i=0;i<options.length;i++)
    {//creat kra he input
        var inputElement=document.createElement('input')
        inputElement.type="radio"
        //input ke andr value be tw deni he 
        inputElement.value=options[i] 
        //option ke div me dalna he

optionElement.append(inputElement)
optionElement.append(options[i])

    }
    
    }
    else{
        var questionContainer=document.getElementById("question-container")
        questionContainer.className="hide"
        var resultElement=document.getElementById('result')
        resultElement.className=""
    }
}


function restart()
 {
   
     var resultElement=document.getElementById('result')
         resultElement.className="hide"
         var questionContainer=document.getElementById("question-container")
         questionContainer.className=""
         currentquestion=0
 }