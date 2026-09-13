function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 }
    })),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return (
        (_setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
            }),
        _setPrototypeOf(t, e)
    );
}
function _callSuper(t, o, e) {
    return (
        (o = _getPrototypeOf(o)),
        _possibleConstructorReturn(
            t,
            _isNativeReflectConstruct()
                ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
                : o.apply(t, e)
        )
    );
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e)
        throw new TypeError(
            "Derived constructors may only return object or undefined"
        );
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () { })
        );
    } catch (t) { }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return (
        (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            }),
        _getPrototypeOf(t)
    );
}
function _toConsumableArray(r) {
    return (
        _arrayWithoutHoles(r) ||
        _iterableToArray(r) ||
        _unsupportedIterableToArray(r) ||
        _nonIterableSpread()
    );
}
function _nonIterableSpread() {
    throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _iterableToArray(r) {
    if (
        ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
        null != r["@@iterator"]
    )
        return Array.from(r);
}
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                }
                : function (o) {
                    return o &&
                        "function" == typeof Symbol &&
                        o.constructor === Symbol &&
                        o !== Symbol.prototype
                        ? "symbol"
                        : typeof o;
                }),
        _typeof(o)
    );
}
function _slicedToArray(r, e) {
    return (
        _arrayWithHoles(r) ||
        _iterableToArrayLimit(r, e) ||
        _unsupportedIterableToArray(r, e) ||
        _nonIterableRest()
    );
}
function _nonIterableRest() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _iterableToArrayLimit(r, l) {
    var t =
        null == r
            ? null
            : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
    if (null != t) {
        var e,
            n,
            i,
            u,
            a = [],
            f = !0,
            o = !1;
        try {
            if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
            } else
                for (
                    ;
                    !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
                    f = !0
                );
        } catch (r) {
            (o = !0), (n = r);
        } finally {
            try {
                if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
                    return;
            } finally {
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper(r, e) {
    var t =
        ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
    if (!t) {
        if (
            Array.isArray(r) ||
            (t = _unsupportedIterableToArray(r)) ||
            (e && r && "number" == typeof r.length)
        ) {
            t && (r = t);
            var _n = 0,
                F = function F() { };
            return {
                s: F,
                n: function n() {
                    return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
                },
                e: function e(r) {
                    throw r;
                },
                f: F
            };
        }
        throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
    }
    var o,
        a = !0,
        u = !1;
    return {
        s: function s() {
            t = t.call(r);
        },
        n: function n() {
            var r = t.next();
            return (a = r.done), r;
        },
        e: function e(r) {
            (u = !0), (o = r);
        },
        f: function f() {
            try {
                a || null == t.return || t.return();
            } finally {
                if (u) throw o;
            }
        }
    };
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return (
            "Object" === t && r.constructor && (t = r.constructor.name),
            "Map" === t || "Set" === t
                ? Array.from(r)
                : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? _arrayLikeToArray(r, a)
                    : void 0
        );
    }
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return (
        r && _defineProperties(e.prototype, r),
        t && _defineProperties(e, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
    );
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/*!
 * Mvc.Grid 8.0.0
 *
 * Copyright © NonFactors
 *
 * Licensed under the terms of the MIT License
 * https://www.opensource.org/licenses/mit-license.php
 */
var MvcGrid = /*#__PURE__*/ (function () {
    "use strict";

    function MvcGrid(container) {
        var options =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, MvcGrid);
        var grid = this;
        var element = grid.findGrid(container);
        if (element.dataset.id) {
            return MvcGrid.instances[parseInt(element.dataset.id)].set(options);
        }
        grid.columns = [];
        grid.element = element;
        grid.loadingDelay = 300;
        grid.loadingTimerId = 0;
        grid.name = element.dataset.name;
        grid.controller = new AbortController();
        grid.isAjax = Boolean(element.dataset.url);
        grid.prefix = grid.name ? "".concat(grid.name, "-") : "";
        grid.filterMode = (element.dataset.filterMode || "").toLowerCase();
        element.dataset.id = options.id || MvcGrid.instances.length.toString();
        grid.url = element.dataset.url
            ? new URL(element.dataset.url, location.href)
            : new URL(location.href);
        grid.url = options.url
            ? new URL(options.url.toString(), location.href)
            : grid.url;
        grid.url = options.query
            ? new URL("?".concat(options.query), grid.url.href)
            : grid.url;
        grid.sort = grid.buildSort();
        grid.filters = {
            default: MvcGridFilter,
            date: MvcGridDateFilter,
            "date-only": MvcGridDateOnlyFilter,
            "time-only": MvcGridTimeOnlyFilter,
            guid: MvcGridGuidFilter,
            text: MvcGridTextFilter,
            number: MvcGridNumberFilter
        };
        var headers = element.querySelector(".mvc-grid-headers");
        var rowFilters = element.querySelectorAll(".mvc-grid-row-filters th");
        if (headers) {
            var _iterator = _createForOfIteratorHelper(
                headers.querySelectorAll("th").entries()
            ),
                _step;
            try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        i = _step$value[0],
                        header = _step$value[1];
                    grid.columns.push(new MvcGridColumn(grid, header, rowFilters[i]));
                }
            } catch (err) {
                _iterator.e(err);
            } finally {
                _iterator.f();
            }
        }
        var pager = element.querySelector(".mvc-grid-pager");
        if (pager) {
            grid.pager = new MvcGridPager(grid, pager);
        }
        grid.set(options);
        grid.cleanUp();
        grid.bind();
        if (options.id) {
            MvcGrid.instances[parseInt(options.id)] = grid;
        } else {
            MvcGrid.instances.push(grid);
        }
        if (!element.children.length) {
            grid.reload();
        }
        return this;
    }
    return _createClass(MvcGrid, [
        {
            key: "set",
            value: function set(options) {
                var grid = this;
                grid.loadingDelay =
                    typeof options.loadingDelay === "undefined"
                        ? grid.loadingDelay
                        : options.loadingDelay;
                grid.url = options.url
                    ? new URL(options.url.toString(), location.href)
                    : grid.url;
                grid.url = options.query
                    ? new URL("?".concat(options.query), grid.url.href)
                    : grid.url;
                grid.isAjax =
                    typeof options.isAjax === "boolean" ? options.isAjax : grid.isAjax;
                grid.filters = Object.assign(grid.filters, options.filters);
                var _iterator2 = _createForOfIteratorHelper(grid.columns),
                    _step2;
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var column = _step2.value;
                        if (column.filter && grid.filters[column.filter.name]) {
                            column.filter.instance = new grid.filters[column.filter.name](
                                column
                            );
                            column.filter.instance.init();
                        }
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
                return grid;
            }
        },
        {
            key: "showConfiguration",
            value: function showConfiguration(anchor) {
                MvcGridPopup.showConfiguration(this, anchor);
            }
        },
        {
            key: "getConfiguration",
            value: function getConfiguration() {
                return {
                    name: this.name,
                    columns: this.columns.map(function (column) {
                        return {
                            name: column.name,
                            hidden: column.isHidden,
                            width: column.header.style.width
                        };
                    })
                };
            }
        },
        {
            key: "configure",
            value: function configure(configuration) {
                var _this = this;
                configuration.columns.forEach(function (column, index) {
                    var rows = _this.element.querySelectorAll("tr");
                    var i = _this.columns.findIndex(function (col) {
                        return col.name.toLowerCase() === column.name.toLowerCase();
                    });
                    if (i >= 0) {
                        _this.columns[i].isHidden = column.hidden;
                        if (column.width.trim()) {
                            _this.columns[i].header.style.width = column.width.split(
                                ";",
                                2
                            )[0];
                        }
                        var _iterator3 = _createForOfIteratorHelper(rows),
                            _step3;
                        try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                var tr = _step3.value;
                                if (column.hidden) {
                                    tr.children[i].classList.add("mvc-grid-hidden");
                                } else {
                                    tr.children[i].classList.remove("mvc-grid-hidden");
                                }
                                if (i !== index) {
                                    tr.insertBefore(tr.children[i], tr.children[index]);
                                }
                            }
                        } catch (err) {
                            _iterator3.e(err);
                        } finally {
                            _iterator3.f();
                        }
                        _this.columns.splice(
                            i - (index < i ? 1 : 0),
                            0,
                            _this.columns.splice(index, 1)[0]
                        );
                    }
                });
            }
        },
        {
            key: "reload",
            value: function reload() {
                var grid = this;
                grid.element.dispatchEvent(
                    new CustomEvent("reloadstart", {
                        detail: {
                            grid: grid
                        },
                        bubbles: true
                    })
                );
                if (grid.isAjax) {
                    var url = new URL(grid.url.href);
                    grid.controller.abort();
                    MvcGridPopup.lastActiveElement = null;
                    grid.controller = new AbortController();
                    if (grid.loadingDelay !== null) {
                        var loader = '<td colspan="'.concat(
                            grid.columns.length,
                            '"><div class="mvc-grid-loader"><div class="mvc-grid-spinner"></div></div></td>'
                        );
                        clearTimeout(grid.loadingTimerId);
                        grid.loadingTimerId = setTimeout(function () {
                            var _iterator4 = _createForOfIteratorHelper(
                                grid.element.querySelectorAll("tbody > tr")
                            ),
                                _step4;
                            try {
                                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                                    var row = _step4.value;
                                    row.innerHTML = loader;
                                }
                            } catch (err) {
                                _iterator4.e(err);
                            } finally {
                                _iterator4.f();
                            }
                        }, grid.loadingDelay);
                    }
                    MvcGridPopup.hide();
                    fetch(url.href, {
                        signal: grid.controller.signal,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                        .then(function (response) {
                            if (!response.ok) {
                                throw new Error(
                                    "Invalid response status: ".concat(response.status)
                                );
                            }
                            return response.text();
                        })
                        .then(function (response) {
                            var parent = grid.element.parentElement;
                            var template = document.createElement("template");
                            var i = Array.from(parent.children).indexOf(grid.element);
                            template.innerHTML = response.trim();
                            if (
                                template.content.firstElementChild.classList.contains(
                                    "mvc-grid"
                                )
                            ) {
                                grid.element.outerHTML = response;
                            } else {
                                throw new Error(
                                    "Grid partial should only include grid declaration."
                                );
                            }
                            var newGrid = new MvcGrid(parent.children[i], {
                                loadingDelay: grid.loadingDelay,
                                id: grid.element.dataset.id,
                                filters: grid.filters,
                                isAjax: grid.isAjax,
                                url: grid.url
                            });
                            newGrid.element.dispatchEvent(
                                new CustomEvent("reloadend", {
                                    detail: {
                                        grid: newGrid
                                    },
                                    bubbles: true
                                })
                            );
                        })
                        .catch(function (reason) {
                            if (reason.name === "AbortError") {
                                return Promise.resolve();
                            }
                            var cancelled = !grid.element.dispatchEvent(
                                new CustomEvent("reloadfail", {
                                    detail: {
                                        grid: grid,
                                        reason: reason
                                    },
                                    cancelable: true,
                                    bubbles: true
                                })
                            );
                            return cancelled ? Promise.resolve() : Promise.reject(reason);
                        });
                } else {
                    location.href = grid.url.href;
                }
            }
        },
        {
            key: "buildSort",
            value: function buildSort() {
                var map = new Map();
                var definitions = /(^|,)(.*?) (asc|desc)(?=$|,)/g;
                var sort =
                    this.url.searchParams.get("".concat(this.prefix, "sort")) || "";
                var match = definitions.exec(sort);
                while (match) {
                    map.set(match[2], match[3]);
                    match = definitions.exec(sort);
                }
                return map;
            }
        },
        {
            key: "findGrid",
            value: function findGrid(element) {
                var grid = element.closest(".mvc-grid");
                if (!grid) {
                    throw new Error(
                        "Grid can only be created from within mvc-grid structure."
                    );
                }
                return grid;
            }
        },
        {
            key: "cleanUp",
            value: function cleanUp() {
                delete this.element.dataset.filterMode;
                delete this.element.dataset.url;
            }
        },
        {
            key: "bind",
            value: function bind() {
                var grid = this;
                var _iterator5 = _createForOfIteratorHelper(
                    grid.element.querySelectorAll("tbody > tr:not(.mvc-grid-empty-row)")
                ),
                    _step5;
                try {
                    var _loop = function _loop() {
                        var row = _step5.value;
                        row.addEventListener("click", function (e) {
                            var data = {};
                            var _iterator6 = _createForOfIteratorHelper(
                                grid.columns.entries()
                            ),
                                _step6;
                            try {
                                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                                    var _step6$value = _slicedToArray(_step6.value, 2),
                                        i = _step6$value[0],
                                        column = _step6$value[1];
                                    if (row.cells.length <= i) {
                                        return;
                                    }
                                    data[column.name] = row.cells[i].innerText;
                                }
                            } catch (err) {
                                _iterator6.e(err);
                            } finally {
                                _iterator6.f();
                            }
                            this.dispatchEvent(
                                new CustomEvent("rowclick", {
                                    detail: {
                                        grid: grid,
                                        data: data,
                                        originalEvent: e
                                    },
                                    bubbles: true
                                })
                            );
                        });
                    };
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        _loop();
                    }
                } catch (err) {
                    _iterator5.e(err);
                } finally {
                    _iterator5.f();
                }
            }
        }
    ]);
})();
MvcGrid.instances = [];
MvcGrid.lang = {
    default: {
        equals: "Equals",
        "not-equals": "Not equals"
    },
    text: {
        contains: "Contains",
        "consists-of": "Consists of",
        equals: "Equals",
        "not-equals": "Not equals",
        "starts-with": "Starts with",
        "ends-with": "Ends with"
    },
    number: {
        equals: "Equals",
        "not-equals": "Not equals",
        "less-than": "Less than",
        "greater-than": "Greater than",
        "less-than-or-equal": "Less than or equal",
        "greater-than-or-equal": "Greater than or equal"
    },
    date: {
        equals: "Equals",
        "not-equals": "Not equals",
        "earlier-than": "Earlier than",
        "later-than": "Later than",
        "earlier-than-or-equal": "Earlier than or equal",
        "later-than-or-equal": "Later than or equal"
    },
    guid: {
        equals: "Equals",
        "not-equals": "Not equals"
    },
    filter: {
        apply: "&#10003;",
        remove: "&#10008;"
    },
    operator: {
        select: "",
        and: "and",
        or: "or"
    }
};
var MvcGridColumn = /*#__PURE__*/ (function () {
    "use strict";

    function MvcGridColumn(grid, header, rowFilter) {
        _classCallCheck(this, MvcGridColumn);
        var column = this;
        var data = header.dataset;
        column.grid = grid;
        column.header = header;
        column.name = data.name || "";
        column.isHidden = header.classList.contains("mvc-grid-hidden");
        column.filter = data.filter
            ? new MvcGridColumnFilter(column, rowFilter)
            : null;
        column.sort = header.classList.contains("sortable")
            ? new MvcGridColumnSort(column)
            : null;
        column.cleanUp();
    }
    return _createClass(MvcGridColumn, [
        {
            key: "cleanUp",
            value: function cleanUp() {
                var data = this.header.dataset;
                delete data.filterDefaultMethod;
                delete data.filterApplied;
                delete data.filterType;
                delete data.filter;
                delete data.sortFirst;
                delete data.sort;
                delete data.name;
            }
        }
    ]);
})();
var MvcGridColumnSort = /*#__PURE__*/ (function () {
    "use strict";

    function MvcGridColumnSort(column) {
        _classCallCheck(this, MvcGridColumnSort);
        var sort = this;
        sort.column = column;
        sort.button = column.header.querySelector(".mvc-grid-sort");
        sort.order = (column.header.dataset.sort || "").toLowerCase();
        sort.first = (column.header.dataset.sortFirst || "asc").toLowerCase();
        sort.bind();
    }
    return _createClass(MvcGridColumnSort, [
        {
            key: "toggle",
            value: function toggle(multi) {
                var sort = this;
                var grid = sort.column.grid;
                var map = sort.column.grid.sort;
                var query = grid.url.searchParams;
                if (sort.order === sort.first) {
                    sort.order = sort.order === "asc" ? "desc" : "asc";
                } else if (sort.order) {
                    sort.order = "";
                } else {
                    sort.order = sort.first;
                }
                if (!multi) {
                    map.clear();
                }
                if (sort.order) {
                    map.set(sort.column.name, sort.order);
                } else {
                    map.delete(sort.column.name);
                }
                var order = Array.from(map)
                    .map(function (value) {
                        return value.join(" ");
                    })
                    .join(",");
                query.delete("".concat(grid.prefix, "sort"));
                if (order) {
                    query.set("".concat(grid.prefix, "sort"), order);
                }
                grid.reload();
            }
        },
        {
            key: "bind",
            value: function bind() {
                var sort = this;
                var column = sort.column;
                column.header.addEventListener("click", function (e) {
                    if (!column.filter || column.grid.filterMode !== "header") {
                        if (!/mvc-grid-(sort|filter)/.test(e.target.className)) {
                            sort.toggle(e.ctrlKey || e.shiftKey);
                        }
                    }
                });
                sort.button.addEventListener("click", function (e) {
                    sort.toggle(e.ctrlKey || e.shiftKey);
                });
            }
        }
    ]);
})();
var MvcGridColumnFilter = /*#__PURE__*/ (function () {
    "use strict";

    function MvcGridColumnFilter(column, rowFilter) {
        _classCallCheck(this, MvcGridColumnFilter);
        var values = [];
        var methods = [];
        var filter = this;
        var data = column.header.dataset;
        var query = column.grid.url.searchParams;
        var name = "".concat(column.grid.prefix + column.name, "-");
        var options = column.header.querySelector(".mvc-grid-options");
        if (column.grid.filterMode === "row") {
            options = rowFilter.querySelector("select");
        }
        if (options && options.classList.contains("mvc-grid-options")) {
            options.parentElement.removeChild(options);
        }
        var _iterator7 = _createForOfIteratorHelper(query.entries()),
            _step7;
        try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var parameter = _step7.value;
                if (
                    parameter[0] !== "".concat(name, "op") &&
                    parameter[0].startsWith(name)
                ) {
                    methods.push(parameter[0].substring(name.length));
                    values.push(parameter[1]);
                }
            }
        } catch (err) {
            _iterator7.e(err);
        } finally {
            _iterator7.f();
        }
        filter.column = column;
        filter.rowFilter = rowFilter;
        filter.name = data.filter || "default";
        filter.isApplied = data.filterApplied === "True";
        filter.defaultMethod = data.filterDefaultMethod || "";
        filter.type = (data.filterType || "single").toLowerCase();
        filter.options = options && options.children.length > 0 ? options : null;
        filter.button = (rowFilter || column.header).querySelector(
            ".mvc-grid-filter"
        );
        filter.inlineInput = rowFilter
            ? rowFilter.querySelector(".mvc-grid-value")
            : null;
        filter.first = {
            method: methods[0] || "",
            values: filter.type === "multi" ? values : values.slice(0, 1)
        };
        filter.operator =
            filter.type === "double" ? query.get("".concat(name, "op")) || "" : "";
        filter.second = {
            method: filter.type === "double" ? methods[1] || "" : "",
            values: filter.type === "double" ? values.slice(1, 2) : []
        };
        this.bind();
    }
    return _createClass(MvcGridColumnFilter, [
        {
            key: "apply",
            value: function apply() {
                var _this2 = this;
                var grid = this.column.grid;
                var query = grid.url.searchParams;
                var prefix = this.column.grid.prefix;
                var order = query.get("".concat(prefix, "sort"));
                var _iterator8 = _createForOfIteratorHelper(grid.columns),
                    _step8;
                try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                        var column = _step8.value;
                        for (
                            var _i = 0, _arr = _toConsumableArray(query.keys());
                            _i < _arr.length;
                            _i++
                        ) {
                            var key = _arr[_i];
                            if (key.startsWith("".concat(prefix + column.name, "-"))) {
                                query.delete(key);
                            }
                        }
                    }
                } catch (err) {
                    _iterator8.e(err);
                } finally {
                    _iterator8.f();
                }
                query.delete("".concat(prefix, "sort"));
                query.delete("".concat(prefix, "page"));
                query.delete("".concat(prefix, "rows"));
                var _iterator9 = _createForOfIteratorHelper(
                    grid.columns.filter(function (col) {
                        return (
                            col.filter &&
                            (col === _this2.column ||
                                col.filter.isApplied ||
                                col.filter.first.values[0])
                        );
                    })
                ),
                    _step9;
                try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        var _column = _step9.value;
                        var filter = _column.filter;
                        query.set(
                            "".concat(prefix + _column.name, "-").concat(filter.first.method),
                            filter.first.values[0] || ""
                        );
                        for (
                            var i = 1;
                            filter.type === "multi" && i < filter.first.values.length;
                            i++
                        ) {
                            query.append(
                                ""
                                    .concat(prefix + _column.name, "-")
                                    .concat(filter.first.method),
                                filter.first.values[i] || ""
                            );
                        }
                        if (grid.filterMode === "excel" && filter.type === "double") {
                            query.set(
                                "".concat(prefix + _column.name, "-op"),
                                filter.operator || ""
                            );
                            query.append(
                                ""
                                    .concat(prefix + _column.name, "-")
                                    .concat(filter.second.method),
                                filter.second.values[0] || ""
                            );
                        }
                    }
                } catch (err) {
                    _iterator9.e(err);
                } finally {
                    _iterator9.f();
                }
                if (order) {
                    query.set("".concat(prefix, "sort"), order);
                }
                if (grid.pager && grid.pager.showPageSizes) {
                    query.set("".concat(prefix, "rows"), grid.pager.rowsPerPage.value);
                }
                grid.reload();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var filter = this;
                var column = filter.column;
                var grid = filter.column.grid;
                var query = grid.url.searchParams;
                if (filter.isApplied) {
                    query.delete("".concat(grid.prefix, "page"));
                    query.delete("".concat(grid.prefix, "rows"));
                    for (
                        var _i2 = 0, _arr2 = _toConsumableArray(query.keys());
                        _i2 < _arr2.length;
                        _i2++
                    ) {
                        var key = _arr2[_i2];
                        if (key.startsWith("".concat(grid.prefix + column.name, "-"))) {
                            query.delete(key);
                        }
                    }
                    grid.reload();
                } else {
                    filter.first.values = [];
                    filter.second.values = [];
                    if (column.grid.filterMode !== "excel") {
                        filter.inlineInput.value = "";
                    }
                    MvcGridPopup.hide();
                }
            }
        },
        {
            key: "bind",
            value: function bind() {
                var filter = this;
                var column = filter.column;
                var mode = column.grid.filterMode;
                filter.button.addEventListener("click", function () {
                    MvcGridPopup.show(filter);
                });
                if (filter.options) {
                    if (mode === "row" && filter.type !== "multi") {
                        filter.inlineInput.addEventListener("change", function () {
                            filter.first.values = [this.value];
                            column.filter.apply();
                        });
                    } else if (mode === "header" || mode === "row") {
                        filter.inlineInput.addEventListener("click", function () {
                            if (this.selectionStart === this.selectionEnd) {
                                MvcGridPopup.show(filter);
                            }
                        });
                    }
                } else if (mode !== "excel") {
                    filter.inlineInput.addEventListener("input", function () {
                        filter.first.values = [this.value];
                        filter.instance.validate(this);
                    });
                    filter.inlineInput.addEventListener("keyup", function (e) {
                        if (e.key === "Enter" && filter.instance.isValid(this.value)) {
                            column.filter.apply();
                        }
                    });
                }
            }
        }
    ]);
})();
var MvcGridPager = /*#__PURE__*/ (function () {
    "use strict";

    function MvcGridPager(grid, element) {
        _classCallCheck(this, MvcGridPager);
        var pager = this;
        pager.grid = grid;
        pager.element = element;
        pager.totalRows = parseInt(element.dataset.totalRows);
        pager.pages = grid.element.querySelectorAll("[data-page]");
        pager.showPageSizes = element.dataset.showPageSizes === "True";
        pager.rowsPerPage = element.querySelector(".mvc-grid-pager-rows");
        pager.currentPage = pager.pages.length
            ? parseInt(element.querySelector(".active").dataset.page)
            : 1;
        pager.cleanUp();
        pager.bind();
    }
    return _createClass(MvcGridPager, [
        {
            key: "apply",
            value: function apply(page, rows) {
                var grid = this.grid;
                var query = grid.url.searchParams;
                query.delete("".concat(grid.prefix, "page"));
                query.delete("".concat(grid.prefix, "rows"));
                query.set("".concat(grid.prefix, "page"), page);
                if (this.showPageSizes) {
                    query.set(
                        "".concat(grid.prefix, "rows"),
                        typeof rows === "string" ? rows : this.rowsPerPage.value
                    );
                }
                grid.reload();
            }
        },
        {
            key: "cleanUp",
            value: function cleanUp() {
                delete this.element.dataset.showPageSizes;
                delete this.element.dataset.totalPages;
                delete this.element.dataset.totalRows;
            }
        },
        {
            key: "bind",
            value: function bind() {
                var pager = this;
                var _iterator0 = _createForOfIteratorHelper(pager.pages),
                    _step0;
                try {
                    for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                        var page = _step0.value;
                        page.addEventListener("click", function () {
                            pager.apply(this.dataset.page);
                        });
                    }
                } catch (err) {
                    _iterator0.e(err);
                } finally {
                    _iterator0.f();
                }
                pager.grid.element
                    .querySelectorAll(".mvc-grid-pager-rows")
                    .forEach(function (rowsPerPage) {
                        rowsPerPage.addEventListener("change", function () {
                            var rows = parseInt(this.value);
                            if (!isNaN(rows) && rows >= 0) {
                                var totalPages =
                                    rows === 0 ? 1 : Math.ceil(pager.totalRows / rows);
                                pager.apply(
                                    Math.min(pager.currentPage, totalPages).toString(),
                                    rows.toString()
                                );
                            }
                        });
                    });
            }
        }
    ]);
})();
var MvcGridPopup = /*#__PURE__*/ (function () {
    "use strict";

    function MvcGridPopup() {
        _classCallCheck(this, MvcGridPopup);
    }
    return _createClass(MvcGridPopup, null, [
        {
            key: "showConfiguration",
            value: function showConfiguration(grid, anchor) {
                var popup = this;
                popup.lastActiveElement = document.activeElement;
                popup.element.className = "mvc-grid-popup mvc-grid-configuration";
                popup.element.innerHTML =
                    '<div class="popup-arrow"></div><div class="popup-content"></div>';
                var content = popup.element.querySelector(".popup-content");
                content.appendChild(popup.createDropzone());
                var _iterator1 = _createForOfIteratorHelper(grid.columns),
                    _step1;
                try {
                    for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                        var column = _step1.value;
                        content.appendChild(popup.createPreference(column));
                        content.appendChild(popup.createDropzone());
                    }
                } catch (err) {
                    _iterator1.e(err);
                } finally {
                    _iterator1.f();
                }
                if (grid.columns.length) {
                    document.body.appendChild(popup.element);
                }
                popup.reposition(grid, anchor);
                popup.bind();
            }
        },
        {
            key: "show",
            value: function show(filter) {
                if (!filter.instance) {
                    return;
                }
                var popup = this;
                var filterer = filter.instance;
                popup.lastActiveElement = document.activeElement;
                popup.element.className = "mvc-grid-popup "
                    .concat(filterer.cssClasses)
                    .trim();
                popup.element.innerHTML =
                    '<div class="popup-arrow"></div><div class="popup-content">'.concat(
                        filterer.render(),
                        "</div>"
                    );
                document.body.appendChild(popup.element);
                popup.bind();
                popup.setValues(filter);
                popup.reposition(filter.column.grid, filter.button);
                filterer.bindOperator();
                filterer.bindMethods();
                filterer.bindValues();
                filterer.bindActions();
                popup.element.querySelector(".mvc-grid-value").focus();
            }
        },
        {
            key: "hide",
            value: function hide(e) {
                var popup = MvcGridPopup;
                var initiator = e && e.target;
                var visible = popup.element.parentNode;
                var outside = !(
                    initiator && initiator.closest(".mvc-grid-popup,.mvc-grid-filter")
                );
                if (visible && outside) {
                    document.body.removeChild(popup.element);
                    if (popup.lastActiveElement) {
                        popup.lastActiveElement.focus();
                        popup.lastActiveElement = null;
                    }
                }
            }
        },
        {
            key: "setValues",
            value: function setValues(filter) {
                var popup = this;
                popup.setValue(".mvc-grid-operator", [filter.operator]);
                popup.setValue(
                    '.mvc-grid-value[data-filter="first"]',
                    filter.first.values
                );
                popup.setValue(
                    '.mvc-grid-value[data-filter="second"]',
                    filter.second.values
                );
                popup.setValue('.mvc-grid-method[data-filter="first"]', [
                    filter.first.method
                ]);
                popup.setValue('.mvc-grid-method[data-filter="second"]', [
                    filter.second.method
                ]);
            }
        },
        {
            key: "setValue",
            value: function setValue(selector, values) {
                var input = this.element.querySelector(selector);
                if (input) {
                    if (input.tagName === "SELECT" && input.multiple) {
                        for (
                            var _i3 = 0, _Array$from = Array.from(input.options);
                            _i3 < _Array$from.length;
                            _i3++
                        ) {
                            var option = _Array$from[_i3];
                            option.selected = values.indexOf(option.value) >= 0;
                        }
                    } else {
                        input.value = values[0] || "";
                    }
                }
            }
        },
        {
            key: "createPreference",
            value: function createPreference(column) {
                var popup = this;
                var name = document.createElement("span");
                var checkbox = document.createElement("input");
                var preference = document.createElement("label");
                checkbox.type = "checkbox";
                preference.draggable = true;
                preference.className = "mvc-grid-column";
                if (column.filter && column.filter.inlineInput) {
                    name.innerText = column.filter.inlineInput.placeholder;
                } else {
                    name.innerText = column.header.innerText.trim();
                }
                checkbox.checked = !column.isHidden;
                checkbox.addEventListener("change", function () {
                    var i = column.grid.columns.indexOf(column);
                    var _iterator10 = _createForOfIteratorHelper(
                        column.grid.element.querySelectorAll("tr")
                    ),
                        _step10;
                    try {
                        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                            var tr = _step10.value;
                            if (checkbox.checked) {
                                tr.children[i].classList.remove("mvc-grid-hidden");
                            } else {
                                tr.children[i].classList.add("mvc-grid-hidden");
                            }
                        }
                    } catch (err) {
                        _iterator10.e(err);
                    } finally {
                        _iterator10.f();
                    }
                    column.isHidden = !checkbox.checked;
                    column.grid.element.dispatchEvent(
                        new CustomEvent("gridconfigure", {
                            detail: {
                                grid: column.grid
                            },
                            bubbles: true
                        })
                    );
                });
                preference.addEventListener("dragstart", function () {
                    popup.draggedColumn = column;
                    popup.draggedElement = preference;
                    preference.style.opacity = "0.4";
                    preference.parentElement.classList.add("mvc-grid-dragging");
                });
                preference.addEventListener("dragend", function () {
                    popup.draggedColumn = null;
                    popup.draggedElement = null;
                    preference.style.opacity = "";
                    preference.parentElement.classList.remove("mvc-grid-dragging");
                });
                preference.appendChild(checkbox);
                preference.appendChild(name);
                return preference;
            }
        },
        {
            key: "createDropzone",
            value: function createDropzone() {
                var _this3 = this;
                var dropzone = document.createElement("div");
                dropzone.className = "mvc-grid-dropzone";
                dropzone.addEventListener("dragenter", function () {
                    dropzone.classList.add("hover");
                });
                dropzone.addEventListener("dragover", function (e) {
                    e.preventDefault();
                });
                dropzone.addEventListener("dragleave", function () {
                    dropzone.classList.remove("hover");
                });
                dropzone.addEventListener("drop", function () {
                    var popup = _this3;
                    var dragged = popup.draggedElement;
                    var grid = popup.draggedColumn.grid;
                    if (
                        dropzone !== dragged.previousElementSibling &&
                        dropzone !== dragged.nextElementSibling
                    ) {
                        var index = Array.from(
                            popup.element.querySelectorAll(".mvc-grid-dropzone")
                        ).indexOf(dropzone);
                        var i = grid.columns.indexOf(popup.draggedColumn);
                        dropzone.parentElement.insertBefore(
                            dragged.previousElementSibling,
                            dropzone
                        );
                        dropzone.parentElement.insertBefore(dragged, dropzone);
                        var _iterator11 = _createForOfIteratorHelper(
                            grid.element.querySelectorAll("tr")
                        ),
                            _step11;
                        try {
                            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                                var tr = _step11.value;
                                tr.insertBefore(tr.children[i], tr.children[index]);
                            }
                        } catch (err) {
                            _iterator11.e(err);
                        } finally {
                            _iterator11.f();
                        }
                        grid.columns.splice(
                            index - (i < index ? 1 : 0),
                            0,
                            grid.columns.splice(i, 1)[0]
                        );
                        grid.element.dispatchEvent(
                            new CustomEvent("gridconfigure", {
                                detail: {
                                    grid: grid
                                },
                                bubbles: true
                            })
                        );
                    }
                    dropzone.classList.remove("hover");
                });
                return dropzone;
            }
        },
        {
            key: "reposition",
            value: function reposition(grid, anchor) {
                var element = this.element;
                var style = getComputedStyle(element);
                var arrow = element.querySelector(".popup-arrow");
                var _getBoundingClientRec = (
                    anchor || grid.element
                ).getBoundingClientRect(),
                    top = _getBoundingClientRec.top,
                    left = _getBoundingClientRec.left;
                top += window.scrollY - parseFloat(style.borderTopWidth);
                left += window.scrollX - parseFloat(style.borderLeftWidth);
                if (anchor) {
                    left -= parseFloat(style.marginLeft) - anchor.offsetWidth / 2 + 26;
                    var arrowLeft =
                        26 - parseFloat(getComputedStyle(arrow).borderLeftWidth);
                    var width =
                        parseFloat(style.marginLeft) +
                        element.offsetWidth +
                        parseFloat(style.marginRight);
                    var offset = Math.max(
                        0,
                        left + width - window.scrollX - document.documentElement.clientWidth
                    );
                    top +=
                        (anchor.offsetHeight / 3) * 2 +
                        arrow.offsetHeight -
                        parseFloat(style.marginTop);
                    arrow.style.left = "".concat(Math.max(0, arrowLeft + offset), "px");
                    left -= offset;
                }
                element.style.left = "".concat(Math.max(0, left), "px");
                element.style.top = "".concat(Math.max(0, top), "px");
                arrow.style.display = anchor ? "" : "none";
            }
        },
        {
            key: "bind",
            value: function bind() {
                var popup = this;
                window.addEventListener("mousedown", popup.hide);
                window.addEventListener("touchstart", popup.hide);
            }
        }
    ]);
})();
MvcGridPopup.element = document.createElement("div");
var MvcGridFilter = /*#__PURE__*/ (function () {
    "use strict";

    function MvcGridFilter(column) {
        _classCallCheck(this, MvcGridFilter);
        var filter = this;
        filter.column = column;
        filter.type = column.filter.type;
        filter.mode = column.grid.filterMode;
        filter.methods = ["equals", "not-equals"];
        filter.cssClasses = "mvc-grid-default-filter";
    }
    return _createClass(MvcGridFilter, [
        {
            key: "init",
            value: function init() {
                var filter = this;
                var column = filter.column;
                var columnFilter = column.filter;
                if (!columnFilter.options && filter.mode !== "excel") {
                    filter.validate(columnFilter.inlineInput);
                }
                if (!columnFilter.first.method) {
                    columnFilter.first.method = columnFilter.defaultMethod;
                }
                if (!columnFilter.second.method) {
                    columnFilter.second.method = columnFilter.defaultMethod;
                }
                if (filter.methods.indexOf(columnFilter.first.method) < 0) {
                    columnFilter.first.method = filter.methods[0];
                }
                if (filter.methods.indexOf(columnFilter.second.method) < 0) {
                    columnFilter.second.method = filter.methods[0];
                }
            }
        },
        {
            key: "lang",
            value: function lang() {
                if (this.column.filter.name == "date-only") {
                    return MvcGrid.lang["date-only"] || MvcGrid.lang["date"] || {};
                } else if (this.column.filter.name == "time-only") {
                    return MvcGrid.lang["time-only"] || MvcGrid.lang["date"] || {};
                }
                return MvcGrid.lang[this.column.filter.name] || {};
            }
        },
        {
            key: "isValid",
            value: function isValid(value) {
                return !value || true;
            }
        },
        {
            key: "validate",
            value: function validate(input) {
                if (this.isValid(input.value)) {
                    input.classList.remove("invalid");
                } else {
                    input.classList.add("invalid");
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var filter = this;
                return '<div class="popup-filter">\n                    '
                    .concat(
                        filter.renderFilter("first"),
                        "\n                </div>\n                "
                    )
                    .concat(
                        filter.mode === "excel" && filter.type === "double"
                            ? ""
                                .concat(
                                    filter.renderOperator(),
                                    '\n                    <div class="popup-filter">\n                        '
                                )
                                .concat(
                                    filter.renderFilter("second"),
                                    "\n                    </div>"
                                )
                            : "",
                        "\n                "
                    )
                    .concat(filter.renderActions());
            }
        },
        {
            key: "renderFilter",
            value: function renderFilter(name) {
                var filter = this;
                var lang = filter.lang();
                var options = filter.column.filter.options;
                var multiple = filter.type === "multi" ? " multiple" : "";
                var methods = filter.methods
                    .map(function (method) {
                        return '<option value="'
                            .concat(method, '">')
                            .concat(lang[method] || "", "</option>");
                    })
                    .join("");
                return '<div class="popup-group">\n                    <select class="mvc-grid-method" data-filter="'
                    .concat(name, '">\n                        ')
                    .concat(
                        methods,
                        '\n                    </select>\n                </div>\n                <div class="popup-group">'
                    )
                    .concat(
                        options
                            ? '<select class="mvc-grid-value" data-filter="'
                                .concat(name, '"')
                                .concat(multiple, ">\n                          ")
                                .concat(
                                    options.innerHTML,
                                    "\n                       </select>"
                                )
                            : '<input class="mvc-grid-value" data-filter="'.concat(
                                name,
                                '">'
                            ),
                        "\n                </div>"
                    );
            }
        },
        {
            key: "renderOperator",
            value: function renderOperator() {
                var lang = MvcGrid.lang.operator;
                return '<div class="popup-operator">\n                    <div class="popup-group">\n                        <select class="mvc-grid-operator">\n                            <option value="">'
                    .concat(
                        lang.select,
                        '</option>\n                            <option value="and">'
                    )
                    .concat(
                        lang.and,
                        '</option>\n                            <option value="or">'
                    )
                    .concat(
                        lang.or,
                        "</option>\n                        </select>\n                    </div>\n                </div>"
                    );
            }
        },
        {
            key: "renderActions",
            value: function renderActions() {
                var lang = MvcGrid.lang.filter;
                return '<div class="popup-actions">\n                    <button type="button" class="mvc-grid-apply" type="button">'
                    .concat(
                        lang.apply,
                        '</button>\n                    <button type="button" class="mvc-grid-cancel" type="button">'
                    )
                    .concat(lang.remove, "</button>\n                </div>");
            }
        },
        {
            key: "bindOperator",
            value: function bindOperator() {
                var filter = this.column.filter;
                var operator = MvcGridPopup.element.querySelector(".mvc-grid-operator");
                if (operator) {
                    operator.addEventListener("change", function () {
                        filter.operator = this.value;
                    });
                }
            }
        },
        {
            key: "bindMethods",
            value: function bindMethods() {
                var filter = this.column.filter;
                var _iterator12 = _createForOfIteratorHelper(
                    MvcGridPopup.element.querySelectorAll(".mvc-grid-method")
                ),
                    _step12;
                try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                        var method = _step12.value;
                        method.addEventListener("change", function () {
                            filter[this.dataset.filter].method = this.value;
                        });
                    }
                } catch (err) {
                    _iterator12.e(err);
                } finally {
                    _iterator12.f();
                }
            }
        },
        {
            key: "bindValues",
            value: function bindValues() {
                var filter = this;
                var _iterator13 = _createForOfIteratorHelper(
                    MvcGridPopup.element.querySelectorAll(".mvc-grid-value")
                ),
                    _step13;
                try {
                    var _loop2 = function _loop2() {
                        var input = _step13.value;
                        if (input.tagName === "SELECT") {
                            input.addEventListener("change", function () {
                                var options = Array.from(input.options).filter(function (
                                    option
                                ) {
                                    return option.selected;
                                });
                                filter.column.filter[input.dataset.filter].values = options.map(
                                    function (option) {
                                        return option.value;
                                    }
                                );
                                if (filter.mode !== "excel") {
                                    var inlineInput = filter.column.filter.inlineInput;
                                    if (filter.mode === "header" || filter.type === "multi") {
                                        inlineInput.value = options
                                            .map(function (option) {
                                                return option.text;
                                            })
                                            .join(", ");
                                    } else {
                                        inlineInput.value = input.value;
                                    }
                                    filter.validate(inlineInput);
                                }
                            });
                        } else {
                            input.addEventListener("input", function () {
                                filter.column.filter[input.dataset.filter].values = [
                                    input.value
                                ];
                                if (filter.mode !== "excel") {
                                    var inlineInput = filter.column.filter.inlineInput;
                                    inlineInput.value =
                                        filter.column.filter[input.dataset.filter].values.join(
                                            ", "
                                        );
                                    filter.validate(inlineInput);
                                }
                                filter.validate(input);
                            });
                            input.addEventListener("keyup", function (e) {
                                if (e.key === "Enter" && filter.isValid(this.value)) {
                                    filter.column.filter.apply();
                                }
                            });
                            filter.validate(input);
                        }
                    };
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                        _loop2();
                    }
                } catch (err) {
                    _iterator13.e(err);
                } finally {
                    _iterator13.f();
                }
            }
        },
        {
            key: "bindActions",
            value: function bindActions() {
                var filter = this.column.filter;
                var popup = MvcGridPopup.element;
                popup
                    .querySelector(".mvc-grid-apply")
                    .addEventListener("click", filter.apply.bind(filter));
                popup
                    .querySelector(".mvc-grid-cancel")
                    .addEventListener("click", filter.cancel.bind(filter));
            }
        }
    ]);
})();
var MvcGridTextFilter = /*#__PURE__*/ (function (_MvcGridFilter) {
    "use strict";

    function MvcGridTextFilter(column) {
        var _this4;
        _classCallCheck(this, MvcGridTextFilter);
        _this4 = _callSuper(this, MvcGridTextFilter, [column]);
        _this4.cssClasses = "mvc-grid-text-filter";
        _this4.methods = [
            "contains",
            "consists-of",
            "equals",
            "not-equals",
            "starts-with",
            "ends-with"
        ];
        return _this4;
    }
    _inherits(MvcGridTextFilter, _MvcGridFilter);
    return _createClass(MvcGridTextFilter);
})(MvcGridFilter);
var MvcGridNumberFilter = /*#__PURE__*/ (function (_MvcGridFilter2) {
    "use strict";

    function MvcGridNumberFilter(column) {
        var _this5;
        _classCallCheck(this, MvcGridNumberFilter);
        _this5 = _callSuper(this, MvcGridNumberFilter, [column]);
        _this5.cssClasses = "mvc-grid-number-filter";
        _this5.methods = [
            "equals",
            "not-equals",
            "less-than",
            "greater-than",
            "less-than-or-equal",
            "greater-than-or-equal"
        ];
        return _this5;
    }
    _inherits(MvcGridNumberFilter, _MvcGridFilter2);
    return _createClass(MvcGridNumberFilter, [
        {
            key: "isValid",
            value: function isValid(value) {
                return !value || /^(?=.*\d+.*)[-+]?\d*[.,]?\d*$/.test(value);
            }
        }
    ]);
})(MvcGridFilter);
var MvcGridDateFilter = /*#__PURE__*/ (function (_MvcGridFilter3) {
    "use strict";

    function MvcGridDateFilter(column) {
        var _this6;
        _classCallCheck(this, MvcGridDateFilter);
        _this6 = _callSuper(this, MvcGridDateFilter, [column]);
        _this6.cssClasses = "mvc-grid-date-filter";
        _this6.methods = [
            "equals",
            "not-equals",
            "earlier-than",
            "later-than",
            "earlier-than-or-equal",
            "later-than-or-equal"
        ];
        return _this6;
    }
    _inherits(MvcGridDateFilter, _MvcGridFilter3);
    return _createClass(MvcGridDateFilter);
})(MvcGridFilter);
var MvcGridDateOnlyFilter = /*#__PURE__*/ (function (_MvcGridDateFilter) {
    "use strict";

    function MvcGridDateOnlyFilter(column) {
        var _this7;
        _classCallCheck(this, MvcGridDateOnlyFilter);
        _this7 = _callSuper(this, MvcGridDateOnlyFilter, [column]);
        _this7.cssClasses = "mvc-grid-date-only-filter";
        return _this7;
    }
    _inherits(MvcGridDateOnlyFilter, _MvcGridDateFilter);
    return _createClass(MvcGridDateOnlyFilter);
})(MvcGridDateFilter);
var MvcGridTimeOnlyFilter = /*#__PURE__*/ (function (_MvcGridDateFilter2) {
    "use strict";

    function MvcGridTimeOnlyFilter(column) {
        var _this8;
        _classCallCheck(this, MvcGridTimeOnlyFilter);
        _this8 = _callSuper(this, MvcGridTimeOnlyFilter, [column]);
        _this8.cssClasses = "mvc-grid-time-only-filter";
        return _this8;
    }
    _inherits(MvcGridTimeOnlyFilter, _MvcGridDateFilter2);
    return _createClass(MvcGridTimeOnlyFilter);
})(MvcGridDateFilter);
var MvcGridGuidFilter = /*#__PURE__*/ (function (_MvcGridFilter4) {
    "use strict";

    function MvcGridGuidFilter(column) {
        var _this9;
        _classCallCheck(this, MvcGridGuidFilter);
        _this9 = _callSuper(this, MvcGridGuidFilter, [column]);
        _this9.cssClasses = "mvc-grid-guid-filter";
        return _this9;
    }
    _inherits(MvcGridGuidFilter, _MvcGridFilter4);
    return _createClass(MvcGridGuidFilter, [
        {
            key: "isValid",
            value: function isValid(value) {
                return (
                    !value || /^[0-9A-F]{8}-?([0-9A-F]{4}-?){3}[0-9A-F]{12}$/i.test(value)
                );
            }
        }
    ]);
})(MvcGridFilter);
