Player1_name = localStorage.getItem("player1_name");
Player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = Player1_name + ":";
document.getElementById("player2_name").innerHTML = Player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + Player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + Player2_name;

function send()
{
    number1 = document.getElementById("1_input").value;
    number2 = document.getElementById("2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h4 id = 'word_display'>" + "Q." + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("1_input").value = "";
    document.getElementById("2_input").value = "";
}

question_turn = "player1";

answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer = actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2" 
        document.getElementById("player_question").innerHTML = "Question Turn -" + Player2_name;
    }
    else
    {
        question_turn = "player1" 
        document.getElementById("player_question").innerHTML = "Question Turn -" + Player1_name;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2" 
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + Player2_name;
    }
    else
    {
        answer_turn = "player1" 
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + Player1_name;
    }
    document.getElementById("output").innerHTML = "";  
}