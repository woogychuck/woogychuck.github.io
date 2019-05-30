$(function() {
    $('.team-name-button').click(teamNameHandler);
    $('.nick-name-button').click(nickNameHandler);
});

function teamNameHandler(e){
    e.preventDefault();
    var teamName = getTeamName();
    console.log(teamName);
    $('.generated-name').html("<em>" + teamName + "</em>");
    $('.generated-lead').text("Your new team is");
    $('.generated-name-container').show();
}

function nickNameHandler(e){
    e.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var nickName = getNickname();
    var valid = true;

    if(firstName == ''){
        $('#firstNameError').show();
        valid = false;
    }
    if(lastName == ''){
        $('#lastNameError').show();
        valid = false;
    }

    if(valid){
        var fullName = firstName + ' <em>"' + nickName + '"</em> ' + lastName;
        $('.generated-name').html(fullName);
        $('.generated-lead').text("You will now be known as");
        $('.generated-name-container').show();
    }
}