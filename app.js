$(function() {
    $('.team-name-button').click(teamNameHandler);
    $('.nick-name-button').click(nickNameHandler);
});

function teamNameHandler(e){
    console.log('GENERATING NAME');
    e.preventDefault();
    var teamName = getTeamName();
    console.log(teamName);
    $('.team-name').text(teamName);
}

function nickNameHandler(e){
    e.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var nickName = getNickname();

    var fullName = firstName + ' "' + nickName + '" ' + lastName;
    $('.nick-name').text(fullName);
}