$(document).ready(function () {
    console.log('Ready...');

    $("form > input").last().click(function (e) {
        e.preventDefault();
        var $form = $("form input").val()

        console.log($form)

        var $content = $("ul").append('<li>' + $form + '<a class="v" href="#">✓</a>' + '<a class="x" href="#">x</a></li>');

        $("form").trigger("reset");

        var id = 

        $("a").click(function () {
            if ($("a").val() == 'x') {
                $(this).closest("li").remove();
            } else if($("a").val() == '✓') {
                $(this).closest("li").css('text-decoration', 'line-through');
            }
        }

        )

    })
})