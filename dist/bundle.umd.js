(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}));
})(this, (function (exports) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var D = /** @class */ (function () {
        function D() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.tempDate = new (Date.bind.apply(Date, __spreadArray([void 0], args, false)))();
            this.months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ];
            this.days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];
            this.suffix = [
                'st',
                'nd',
                'rd',
                'th',
            ];
        }
        Object.defineProperty(D.prototype, "year", {
            //Year
            get: function () {
                return this.tempDate.getFullYear();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "yr", {
            get: function () {
                return this.tempDate.getFullYear().toString().slice(-2);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "month", {
            //Months
            get: function () {
                var monthString = this.months[this.tempDate.getMonth()];
                return monthString;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "mon", {
            get: function () {
                var monthThree = this.months[this.tempDate.getMonth()].substring(0, 3);
                return monthThree;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "day", {
            //Days
            get: function () {
                var dayString = this.days[this.tempDate.getDay()];
                return dayString;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "dy", {
            get: function () {
                var dayThree = this.days[this.tempDate.getDay()].substring(0, 3);
                return dayThree;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "date", {
            //Date
            get: function () {
                return this.tempDate.getDate();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "paddedDate", {
            get: function () {
                var copyDate = this.tempDate.getDate();
                var padDate = copyDate.toString().padStart(2, '0');
                return padDate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "hrs", {
            //Time
            get: function () {
                return this.tempDate.getHours();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "paddedHours", {
            get: function () {
                var copyHours = this.tempDate.getHours();
                var padHours = copyHours.toString().padStart(2, '0');
                return padHours;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "mins", {
            get: function () {
                return this.tempDate.getMinutes();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "paddedMins", {
            get: function () {
                var copyMins = this.tempDate.getMinutes();
                var padMins = copyMins.toString().padStart(2, '0');
                return padMins;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "secs", {
            get: function () {
                return this.tempDate.getSeconds();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(D.prototype, "paddedSecs", {
            get: function () {
                var copySecs = this.tempDate.getSeconds();
                var padSecs = copySecs.toString().padStart(2, '0');
                return padSecs;
            },
            enumerable: false,
            configurable: true
        });
        //Mask Formatting
        D.prototype.format = function (mask) {
            var replace = {
                'Y': this.year, // Year full
                'y': this.yr, // Year short
                'M': this.month, // Month full
                'm': this.mon, // Month short
                'D': this.date, // Date 
                'd': this.paddedDate, // Date padded
                'L': this.day, // Day of Week full
                'l': this.dy, // Day of Week short
                'h': this.hrs,
                'H': this.paddedHours,
                'i': this.mins,
                'I': this.paddedMins,
                's': this.secs,
                'S': this.paddedSecs
            };
            return mask.replace(/Y|y|M|m|D|d|L|l|h|H|I|S|i|s/g, function (match) { return replace[match].toString(); });
        };
        return D;
    }());

    exports.D = D;

}));
//# sourceMappingURL=bundle.umd.js.map
