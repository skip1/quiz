function init() {
    var myArray = [];
    var score = 0;
    var questionCount = 0;
    $("#start").click(function() {
        alert("hello");
        $(".welcome").empty();
        question();
    });
    function question() {
        var num = Math.floor((Math.random() * 2) );
        $.getJSON('questions.json', function (data) {
            $.each (data, function (k,v) {
                var num = Math.floor((Math.random() * 2) );
                myArray.push(data);
                console.log(JSON.stringify(myArray[0].questions[num].choices[0]));
                console.log(JSON.stringify(data.questions[0]));
        questionCount++;
       
        if (questionCount < 5) {
          var quest = (myArray[0].questions[num]);
          console.log(JSON.stringify(quest.question));
                    $(".welcome").append("<h1>" + "<div align = center>" + quest.question + "<br>" + "<br>" + quest.choices[0] + "<input type = 'radio' id = 'a' name = 'radio'>A" +
                            "<br>" + "<br>" + quest.choices[1] + "<input type = 'radio' name = 'radio' id = 'b'>B" + "<br>" + "<br>" + quest.choices[2] + "<input type = 'radio' id = 'c' name = 'radio'>C" +
                            "<br>" + "<br>" + quest.choices[3] + "<input type = 'radio' id = 'd' name = 'radio' >D" + "<br>" + "<br>"

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
    });
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