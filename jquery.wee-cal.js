(function ($) {

    $.weeCal = function(element, options) {
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

        var onDayClick = function(e) {
            var link = $(e.currentTarget);
            var listId = link[0].hash.replace("#", "");

            plugin.dayLinks.filter("." + plugin.settings.activeClass).removeClass("active");
            link.addClass(plugin.settings.activeClass);

            showList(listId);

            return false;
        };

        var showList = function(listId) {
            var activeList = weeCal.find(plugin.settings.dayEventsSelector + "." + plugin.settings.activeClass);
            var listToShow = weeCal.find("#" + listId);

            if (activeList.length) {
                activeList.fadeOut(250, function () {
                    activeList.removeClass(plugin.settings.activeClass);
                    fadeInList(listToShow);
                });
            } else
                fadeInList(listToShow);
        };

        var fadeInList = function(list) {
            list.fadeIn(250, function() {
                list.addClass(plugin.settings.activeClass);
            });
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
