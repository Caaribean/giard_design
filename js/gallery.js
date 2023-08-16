$(window).on('load', function () {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        gutter: 40,
        percentPosition: true,
        columnWidth: '.grid-sizer',
    });
});