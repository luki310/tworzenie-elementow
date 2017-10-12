(function($) {
    $(document).ready(function() {
        var button = $("button"),
            input = $("#inputUser, .error-mess"),
            divUl = $(".col-6.list"),
            ul = $("<ul></ul>", {
                    "class": "list-group"
                });

        button.on("click", function(e){
            e.stopPropagation();

            var user = $.trim(input.val());

            if (user === "") {
                input.toggleClass("error");
            } else {
                var li = $("<li></li>", {
                    "text": user,
                    "class": "list-group-item"
                });
                if (divUl.children().length == 0) ul.appendTo(divUl);
                li.appendTo("ul.list-group");
                input.val("");
            }
        })
    });
})(jQuery);