/*!
 * loading box -- jquery
 * version - v0.1.0
 * https://github.com/anxu1212/jquery-loading
 */

(function ($, window) {
    'use strict';


    var loadingBox = function (ele) {
        this.$element = ele;
    };

    /**
     * show loading box
     */
    loadingBox.prototype.showBox = function () {
        this.createBox();
        this.$element.append(this.$container);
    }
    /**
     * create  box
     */
    loadingBox.prototype.createBox = function () {
        let container = $("<div></div>").addClass('loading-box').css({
            "z-index": 999
        });
        let box = $("<div class='animated'></div>").css({
            'animation-duration': '.5s',
            'background': "#2b2a2a",
            'opacity': 0.9,
            'font-size': "24px",
            'padding': "10px 20px",
            'border-radius': "6px"
        }).appendTo(container);

        $("<i></i>").addClass("icon-loading").css({
            "margin-right": 0
        }).appendTo(box);

        this.$container = container;
    }
    /**
     * remove loading box
     */
    loadingBox.prototype.remove = function () {
        this.$container.remove();
    }


    // Plugin definition.
    $.fn.loadingBox = function () {
        var box = new loadingBox(this);
        box.showBox();
        return box;
    };


})(jQuery, window)