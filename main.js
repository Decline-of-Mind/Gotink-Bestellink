    $('.accordion').click(function() {
        var panel = $(this).closest('.card-title').children('.panel');
        if ($(panel).css('display') == 'flex') {
                $(panel).css('display', 'none');
                $(this).text("Maaltijden lijst");
            } else {
                $(panel).css('display', 'flex');
                $(this).text("Ik wil deze dag geen maaltijden");
        }
    });