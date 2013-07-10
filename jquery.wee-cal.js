(function ($) {

    $.weeCal = function (element, options) {
        var defaults = {
            daysSelector: '.days',
            dayEventsSelector: '.day-events',
            activeClass: "active"
        };

        this.settings = {};

        var weeCal = $(element);

        var plugin = this;

        this.init = function () {
            plugin.settings = $.extend(defaults, options);

            var days = weeCal.find(plugin.settings.daysSelector);
            plugin.dayLinks = days.find("a");

            plugin.dayLinks.click($.proxy(onDayClick, plugin));

            var dayWidth = days.find("li:first").outerWidth();

            days.addClass("flexslider");
            days.flexslider({
                animation: 'slide',
                slideshow: false,
                selector: "ul > li",
                itemWidth: dayWidth,
                minItems: 1,
                controlNav: false,
                directionNav: true
            });

        };

        var onDayClick = function (e) {
            var link = $(e.currentTarget);
            var listId = link[0].hash.replace("#", "");

            plugin.dayLinks.filter("." + plugin.settings.activeClass).removeClass("active");
            link.addClass(plugin.settings.activeClass);

            showList(listId);

            return false;
        };

        var showList = function (listId) {
            plugin.listIdToShow = listId;

            if (plugin.isAnimating)
                return;

            var listToHide = weeCal.find(plugin.settings.dayEventsSelector + "." + plugin.settings.activeClass);

            if (listToHide.length) {
                plugin.isAnimating = true;
                listToHide.fadeOut(250, function () {
                    listToHide.removeClass(plugin.settings.activeClass);
                    plugin.isAnimating = false;
                    fadeInList(plugin.listIdToShow);
                });
            } else 
                fadeInList(plugin.listIdToShow);
        };

        var fadeInList = function (listId) {
            var listToShow = weeCal.find("#" + listId);
            listToShow.addClass(plugin.settings.activeClass);
            listToShow.fadeIn(250);
        };

        plugin.init();

    };




    $.fn.weeCal = function (options) {
        return this.each(function () {

            if (undefined == $(this).data('weeCal')) {

                var plugin = new $.weeCal(this, options);

                $(this).data('weeCal', plugin);

            }

        });
    };

})(jQuery);
