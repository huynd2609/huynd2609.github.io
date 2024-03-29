"use strict";
function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
	for (var i = 0; i < t.length; i++) {
		var n = t[i];
		(n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
	}
}
function _createClass(e, t, i) {
	return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
}
var Timeline = (function() {
	function i(e, t) {
		_classCallCheck(this, i),
			(this.data = t),
			(this.wrapperId = e),
			(this.wrapper = document.getElementById(e)),
			(this.slidesWidth = 0),
			(this.docWidth = window.innerWidth),
			(this.timelineInner = null),
			(this.nodes = null);
	}
	return (
		_createClass(i, [
			{
				key: "init",
				value: function() {
					if (
						this.data &&
						((this.data = this.data.sort(this.sortNodesByDate("year"))),
						this.injectHTML(),
						(this.timelineInner = document.querySelector("#".concat(this.wrapperId, " .timeline"))),
						(this.nodes = document.querySelectorAll("#".concat(this.wrapperId, " .tl-node"))),
						this.checkScreenSize())
					) {
						this.slidesWidth = 200 * this.nodes.length;
						this.slidesWidth, this.docWidth;
						this.wrapper.addEventListener("mousemove", this.mouseListen.bind(this)), window.addEventListener("resize", this.windowSizeChange.bind(this)), this.initNodeListen();
					}
				}
			},
			{
				key: "sortNodesByDate",
				value: function(i) {
					var n = 1;
					return (
						"-" === i[0] && ((n = -1), (i = i.substr(1))),
						function(e, t) {
							return (e[i] < t[i] ? -1 : e[i] > t[i] ? 1 : 0) * n;
						}
					);
				}
			},
			{
				key: "initNodeListen",
				value: function() {
					for (var e = 0; e < this.nodes.length; e++) this.nodes[e].addEventListener("mouseenter", this.nodeListen);
				}
			},
			{
				key: "mouseListen",
				value: function(e) {
					if (this.checkScreenSize()) {
						var t = (110 * e.pageX) / this.docWidth,
							i = (t / 110) * this.slidesWidth - (t / 400) * this.docWidth;
						this.timelineInner.style.transform = "translate3d(" + -i + "px,0,0)";
					}
				}
			},
			{
				key: "nodeListen",
				value: function() {
					var e = this.getBoundingClientRect().left,
						t = this.children[2];
					e > window.innerWidth / 2
						? ((t.style.left = "auto"), (t.style.right = "-20px"), t.classList.remove("left-triangle"), t.classList.add("right-triangle"))
						: ((t.style.left = "-20px"), (t.style.right = "auto"), t.classList.add("left-triangle"), t.classList.remove("right-triangle"));
				}
			},
			{
				key: "windowSizeChange",
				value: function() {
					this.checkScreenSize() || (this.timelineInner.style.transform = "translate3d(0,0,0)");
				}
			},
			{
				key: "checkScreenSize",
				value: function() {
					return 800 < window.innerWidth;
				}
			},
			{
				key: "injectHTML",
				value: function() {
					var e = document.createElement("section");
					e.classList.add("timeline-wrapper"), this.wrapper.appendChild(e);
					var t = document.createElement("div");
					t.classList.add("timeline"), e.appendChild(t);
					var i = document.createElement("div");
					i.classList.add("line"), e.appendChild(i);
					var n = document.createElement("div");
					n.classList.add("node-wrapper"), t.appendChild(n);
					for (var s = 0; s < this.data.length; s++) {
						var a = document.createElement("div");
						a.classList.add("tl-node"),
							(a.innerHTML = '\n        <p class="above-year">'
								.concat(
									this.data[s].title,
									'</p>\n        <div class="dot"></div>\n        <div class="data left-triangle" style="left: -20px; right: auto;">\n          <div class="upper">\n            <h5>'
								)
								.concat(this.data[s].title, "</h5>\n            <span>")
								.concat(this.data[s].desc, '</span>\n          </div>\n          <img src="')
								.concat(this.data[s].image, '" alt="" />\n        </div>')),
							n.appendChild(a);
					}
				}
			}
		]),
		i
	);
})();
