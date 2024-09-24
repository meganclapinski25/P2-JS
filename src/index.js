"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = void 0;
var D = /** @class */ (function () {
    function D() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._date = new (Date.bind.apply(Date, __spreadArray([void 0], args, false)))();
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
            return this._date.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "yr", {
        get: function () {
            return this._date.getFullYear().toString().slice(-2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "month", {
        //Months
        get: function () {
            var monthString = this.months[this._date.getMonth()];
            return monthString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mon", {
        get: function () {
            var monthThree = this.months[this._date.getMonth()].substring(0, 3);
            return monthThree;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "day", {
        //Days
        get: function () {
            var dayString = this.days[this._date.getDay()];
            return dayString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "dy", {
        get: function () {
            var dayThree = this.days[this._date.getDay()].substring(0, 3);
            return dayThree;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "date", {
        //Date
        get: function () {
            return this._date.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "paddedDate", {
        get: function () {
            var copyDate = this._date.getDate();
            var padDate = copyDate.toString().padStart(2, '0');
            return padDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "hrs", {
        //Time
        get: function () {
            return this._date.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "paddedHours", {
        get: function () {
            var copyHours = this._date.getHours();
            var padHours = copyHours.toString().padStart(2, '0');
            return padHours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mins", {
        get: function () {
            return this._date.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "paddedMins", {
        get: function () {
            var copyMins = this._date.getMinutes();
            var padMins = copyMins.toString().padStart(2, '0');
            return padMins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "secs", {
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "paddedSecs", {
        get: function () {
            var copySecs = this._date.getSeconds();
            var padSecs = copySecs.toString().padStart(2, '0');
            return padSecs;
        },
        enumerable: false,
        configurable: true
    });
    //Mask Formatting
    D.prototype.format = function (mask) {
        var replace = {
            'Y': this.year, //Year full
            'y': this.yr, //Year short
            'M': this.month, //Month full
            'm': this.mon, //Month short
            'D': this.date, //Date 
            'd': this.paddedDate, // Date padded
            'L': this.day, // Day of Week full
            'l': this.dy, // Day of Week short 
            'h': this.hrs,
            'H': this.paddedHours,
            'i': this.mins,
            'I': this.paddedMins,
            's': this.secs,
            'S': this.paddedSecs
            //# suffix
        };
        return mask.replace(/Y|y|M|m|D|d|L|l|h|H|I|S|i|s/g, function (match) { return replace[match]; });
    };
    return D;
}());
exports.D = D;
//-----Working------// 
var d = new D(2017, 0, 2, 3, 4, 5);
console.log(d.year);
console.log(d.yr);
console.log(d.month);
console.log(d.mon);
console.log(d.day);
console.log(d.dy);
console.log(d.date);
console.log(d.hrs);
console.log(d.mins);
console.log(d.secs);
// console.log(d.format('Y / m / D'));       // 17/Jan/2
console.log(d.format('h:i:s')); // 03:04:05
console.log(d.format('H:I:S'));
