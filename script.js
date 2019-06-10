$(document).ready(function() {

    // generate 10 cards
    var cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var shuffledArray = [];

    function generateCards(array) {
        var cloneArray = array.slice(0);
        for (let i = 0; i < 10; i++) {
            var randomNum = Math.random() * (9 - i);
            var cardIndex = Math.round(randomNum);
            shuffledArray.push(cloneArray.splice(cardIndex, 1));
        }
        return shuffledArray;
    }
    generateCards(cardsArray);
    // print player cards
    for (i = 0; i < cardsArray.length; i++) {
        var player = $(".player");
        var pCard = cardsArray[i];
        $(player[i]).text(pCard);
    }
    // print computer cards
    for (i = 0; i < shuffledArray.length; i++) {
        var computer = $(".computer");
        var cCard = shuffledArray[i];
        $(computer[i]).text(cCard);
    }



     // drag function
    $(function() {
        $(".draggable").draggable();
        $(".droppable").droppable({
            drop: function(event, ui) {
            	var playerCard = $(ui.draggable).text();
            	var computerCard = $(this).text();
            	console.log(playerCard);
            	console.log(computerCard);
                if (playerCard == computerCard) {
                    $(this).removeClass("white").addClass("alert-success").find("p").removeClass("hidden");
                    $(ui.draggable).removeClass("alert-dark").removeClass("white").addClass("alert-success");
                    $(this).css({"position":"relative"});
                    $(ui.draggable).css({"position":"absolute"});
                    $("#output").removeClass("title").removeClass("alert-danger").addClass("alert-success").find("p").text("Success!");
                } else {
                	// $(this).addClass("alert-danger").find("p").removeClass("hidden");
                    $(ui.draggable).removeClass("white").addClass("alert-dark");
                    $(ui.draggable).css({"top":"0", "left":"0"});
                    $("#output").removeClass("title").addClass("alert-danger").find("p").text("Try again!");
                }

            }
        });
    });
});