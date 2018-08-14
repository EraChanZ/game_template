function correctShow() {
    var widthTable = getElementById('table.main').width();
    if (widthTable < 810) {
        $('main').width('810')
    }
}
correctShow();
$(window).resize(function() {
    correctShow()
});