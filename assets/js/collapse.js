$(".header").click(function () {
    // Cache the jQuery object for better performance
    const $header = $(this);
    const $content = $header.next();

    // Slide toggle with added animations for a smoother experience
    $content.slideToggle(500, function () {
        // Change the header text based on the content visibility
        $header.text($content.is(":visible") ? "Collapse ▲" : "Expand ▼");

        // Optionally, add a class to change background color when expanded
        $header.toggleClass("active", $content.is(":visible"));
    });

    // Add a slight visual effect when the header is clicked
    $header.css("transform", "scale(1.05)").delay(100).queue(function(next) {
        $(this).css("transform", "scale(1)");
        next();
    });
});
