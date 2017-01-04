var PartLoad = function ($) {
    var template =
        "<div class='partload-overlay'>" +
        "   <div class='partload-icon'></div>" +
        "</div>";

    var defaults = {
        iconUrl: "/Images/partload.gif",
        animationDuration: 400
    };

    var prepareTemplate = function (settings) {
        var $template = $(template);

        // Styling loading icon
        var $icon = $template.children(".partload-icon");
        $icon.css("background-image", "url('" + settings.iconUrl + "')");

        // Styling overlay
        $template
            .css("display", "none")
            .fadeIn(settings.animationDuration);

        return $template;
    };

    var show = function ($target, options) {
        $target.css("position", "relative");

        var settings = $.extend({}, defaults, options);
        var $template = prepareTemplate(settings);
        $target.append($template);
    };

    var hide = function ($target, options) {
        var settings = $.extend({}, defaults, options);

        $target.children(".partload-overlay")
            .fadeOut(settings.animationDuration,
                function () {
                    $(this).remove();
                });
    };

    return {
        show: show,
        hide: hide
    };

}(jQuery);

(function ($) {
    $.fn.showPartLoad = function (options) {
        this.each(function () {
            PartLoad.show($(this), options);
        });
        return this;
    };

    $.fn.hidePartLoad = function (options) {
        this.each(function () {
            PartLoad.hide($(this), options);
        });
        return this;
    };

}(jQuery));