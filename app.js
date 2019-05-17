$(function() {
    $('.team-name-button').click(teamNameHandler);
    $('.nick-name-button').click(nickNameHandler);
});

function teamNameHandler(e){
    console.log('GENERATING NAME');
    e.preventDefault();
    var teamName = getTeamName();
    console.log(teamName);
    $('.generated-name').text(teamName);
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
        var fullName = firstName + ' "' + nickName + '" ' + lastName;
        $('.generated-name').text(fullName);
        $('.generated-name-container').show();
    }
}