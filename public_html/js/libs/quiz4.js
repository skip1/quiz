function init() {
    var myArray = [];
    var allQuestions = [{
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer: 'a'
    }, {
        question: "Who is the Prime Minister of Canada?",
        choices: ["Jean Chretien", "Pierre Trudeau", "Stephen Harper", "Wendel Clark"],
        correctAnswer: 'c'
    }];
    var score = 0;
    var questionCount = 0;
    $("#start").click(function() {
        alert("hello");
        $(".welcome").empty();
        question();
    });

    function question() {
        var num = Math.floor(Math.random() * 5) + 1;
        var data = [];
        questionCount++;
        $.getJSON('questions.json', function(data) {
            $.each(data, function(k, v) {
                myArray.push(data);
            });
        });
                var quest = Math.floor(Math.random() * 2);
                console.log(JSON.stringify(myArray.questions[0].question));
                console.log(quest);
                console.log(JSON.stringify(myArray[0].questions[0].choices));
                console.log(data.questions[1].choices[0]);
            
                
                    console.log(JSON.stringify(myArray.data));
                    $(".welcome").append("<h1>" + "<div align = center>" + myArray[0].questions[1].question + "<br>" + "<br>" + myArray.questions[1].choices[0] + "<input type = 'radio' id = 'a' name = 'radio'>A" +
                        "<br>" + "<br>" + myArray.questions[1].choices[1] + "<input type = 'radio' name = 'radio' id = 'b'>B" + "<br>" + "<br>" + myArray.questions[1].choices[2] + "<input type = 'radio' id = 'c' name = 'radio'>C" +
                        "<br>" + "<br>" + myArray.questions[1].choices[3] + "<input type = 'radio' id = 'd' name = 'radio' >D" + "<br>" + "<br>" 

                        + "<input type = 'submit'  class = 'btn-lg btn-info' id = 'huh'  value = 'next question'>").hide().fadeIn(2000);


$("#huh").click (function () {

     var checkedBox = $('input[type="radio"]:checked').attr('id');
            alert("You clicked " + checkedBox);
     var rightAnswer = (myArray[0].questions[quest].correctAnswer);
            alert ("right answer is " + rightAnswer);
            alert (questionCount);
            if (checkedBox == rightAnswer) {
                alert ("Right");
                score++;
            }       else {
                alert ("wrong");
            }
            questionCount++;
            alert (questionCount);
});
                   $(".welcome").empty();
                   if (questionCount > 5) {
                    end();
                   } else {
                   question();
               }

            
        

        
            /*   var answer = checkedBox.attr('id');
            if (myArray[0].questions[quest].correctAnswer === checkedBox) {
                alert("right");
                score++;

            } else {
                alert("wrong");

            }


            $(".welcome").empty();

            question();
        });
   */ 

}
    function end() {
        $(".welcome").empty();
        $(".welcome").append("You're score is " + score + "<br>" + "Would you like to play again" + "<input type = 'submit' id = 'restart' class = 'btn-lg btn-danger' value = 'yes'>");

        $("#restart").click(function() {
            location.reload();
        });
    }



}



window.onload = init;
