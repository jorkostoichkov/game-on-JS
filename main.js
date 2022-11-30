$(document).ready(function(){
    const $guessInput = $('#guessInput');
    const $historyBox = $('#history');
    const $historyCount = $('#historyCount');
    const $directionBox = $('#direction');

    const randomNumber = Math.round(Math.random() * 100);
    const history = [];

    function renderHistory () {
        $historyBox.text(`Предишни преположения: ${history.join(', ')}`);
        $historyCount.text(`Общ брой: ${history.length}`);
    }

    function guessNumber (userNumber) {
        if (userNumber > randomNumber) {
            $directionBox.text('🔼 Твърде голямо');
        } else if (userNumber < randomNumber) {
            $directionBox.text('🔽 Твърде малко');
        } else {
            $directionBox.text(`✅ Позна, числото е ${randomNumber}`);
        }
    }
    
    function submitGuess(userNumber) {
        if (userNumber < 0 ) return;
        // check guess
        guessNumber(userNumber);
        // update history
        history.push(userNumber);
        renderHistory();
    }

    $guessInput.keydown(function(event){
        if (event.originalEvent.code === 'Enter') {
            const inputValue = parseInt($guessInput.val());
            submitGuess(inputValue);
            $guessInput.val('');
        }
    });

});