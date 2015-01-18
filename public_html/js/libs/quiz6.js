$(function() {
    var quest, num;
    var data = {
        myArray: [],
        score: 0,
        questionCount: 0
    }
    $("#start").click(function() {
        alert("hello");
        $(".welcome").empty();
        controller.question();
    });



    var controller = {
        question: function() {
            var num = Math.floor((Math.random() * 2));
            $.getJSON('questions.json', function(mydata) {
                $.each(mydata, function(k, v) {
                    var num = Math.floor((Math.random() * 2));
                    data.myArray.push(mydata);
                    console.log(JSON.stringify(data.myArray[0].questions[num].choices[0]));

                    data.questionCount++;

                    if (data.questionCount < 5) {
                        var quest = (data.myArray[0].questions[num]);
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
                            data.score++;

                        } else {
                            alert("wrong");

                        }



                        $(".welcome").empty();

                        controller.question();
                    });
                });
            });
        }
    }

    function end() {
        $(".welcome").empty();
        $(".welcome").append("You're score is " + data.score + "<br>" + "Would you like to play again" + "<input type = 'submit' id = 'restart' class = 'btn-lg btn-danger' value = 'yes'>");
        var myForm = '<form id="localStorageTest' + 'method="post"' + 'action="">' +
            '<label>Name:</label>' +
            '<input type="text"' + 'name="name"' + 'id="myName"' + 'class="stored"' + 'value="" />' +
            '<input type="submit"' + 'class="btn btn-lg btn-info"' + 'id = sub' + 'value="Submit" />' +
            '</form>' + "<h1>" + "Please enter your name before first question";
        $(".welcome").append(myForm);
        $("#sub").click(function() {
            alert("saved");
            var my = $("#myName").val();
            window.localStorage.setItem("name", my);
            window.localStorage.setItem("score", score);
            window.localStorage.setItem("timestamp", (new Date()).getTime());
            alert("saved");

        });
        $("#restart").click(function() {
            location.reload();
        });

    }

});
