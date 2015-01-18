function init() {

    var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer: 'a'},
        {question: "Who is the Prime Minister of Canada?", choices: ["Jean Chretien", "Pierre Trudeau", "Stephen Harper", "Wendel Clark"], correctAnswer: 'c'}];
    var score = 0;
    var questionCount = 0;
    $("#start").click(function() {
        alert("hello");
        $(".welcome").empty();
        question();
    });
    function question() {
        var num = Math.floor(Math.random() * 5) + 1;
        questionCount++;
        var quest = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        if (questionCount < num + 1) {
           $.getJSON('questions.json', function (result) {
               $.each(result.questions, function () {
                   
               
           
                    $(".welcome").append("<h1>" + "<div align = center>" + this.question + "<br>" + "<br>" + this.choices[0] + "<input type = 'radio' id = 'a' name = 'radio'>A" +
                            "<br>" + "<br>" + this.choices[1] + "<input type = 'radio' name = 'radio' id = 'b'>B" + "<br>" + "<br>" + this.choices[2] + "<input type = 'radio' id = 'c' name = 'radio'>C" +
                            "<br>" + "<br>" + this.choices[3] + "<input type = 'radio' id = 'd' name = 'radio' >D" + "<br>" + "<br>"

                            + "<input type = 'submit'  class = 'btn-lg btn-info' id = 'next' value = 'next question'>").hide().fadeIn(2000);

                
            
            $("#counter").append("there will be " + num + "questions");
        } else {
            end();
        }


        $("#next").click(function() {
            var checkedBox = $('input[type="radio"]:checked').attr('id');
            console.log(checkedBox);
            //   var answer = checkedBox.attr('id');
            if (quest.correctAnswer === checkedBox) {
                alert("right");
                score++;

            } else {
                alert("wrong");

            }


            $(".welcome").empty();

            question();
        });
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


