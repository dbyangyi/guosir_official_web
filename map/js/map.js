// JavaScript Document
var BMapLib = window.BMapLib = BMapLib || {};
var BMAPLIB_TAB_SEARCH = 0,
	BMAPLIB_TAB_TO_HERE = 1,
	BMAPLIB_TAB_FROM_HERE = 2;
(function() {
	var f, e = f = e || {
		version: "1.5.0"
	};
	e.guid = "$BAIDU$";
	(function() {
		window[e.guid] = window[e.guid] || {};
		e.lang = e.lang || {};
		e.lang.isString = function(i) {
			return "[object String]" == Object.prototype.toString.call(i)
		};
		e.lang.Event = function(i, j) {
			this.type = i;
			this.returnValue = true;
			this.target = j || null;
			this.currentTarget = null
		};
		e.object = e.object || {};
		e.extend = e.object.extend = function(k, i) {
			for (var j in i) {
				if (i.hasOwnProperty(j)) {
					k[j] = i[j]
				}
			}
			return k
		};
		e.event = e.event || {};
		e.event._listeners = e.event._listeners || [];
		e.dom = e.dom || {};
		e.dom._g = function(i) {
			if (e.lang.isString(i)) {
				return document.getElementById(i)
			}
			return i
		};
		e._g = e.dom._g;
		e.event.on = function(j, m, o) {
			m = m.replace(/^on/i, "");
			j = e.dom._g(j);
			var n = function(q) {
					o.call(j, q)
				},
				i = e.event._listeners,
				l = e.event._eventFilter,
				p, k = m;
			m = m.toLowerCase();
			if (l && l[m]) {
				p = l[m](j, m, n);
				k = p.type;
				n = p.listener
			}
			if (j.addEventListener) {
				j.addEventListener(k, n, false)
			} else {
				if (j.attachEvent) {
					j.attachEvent("on" + k, n)
				}
			}
			i[i.length] = [j, m, o, n, k];
			return j
		};
		e.on = e.event.on;
		e.event.un = function(k, n, j) {
			k = e.dom._g(k);
			n = n.replace(/^on/i, "").toLowerCase();
			var q = e.event._listeners,
				l = q.length,
				m = !j,
				p, o, i;
			while (l--) {
				p = q[l];
				if (p[1] === n && p[0] === k && (m || p[2] === j)) {
					o = p[4];
					i = p[3];
					if (k.removeEventListener) {
						k.removeEventListener(o, i, false)
					} else {
						if (k.detachEvent) {
							k.detachEvent("on" + o, i)
						}
					}
					q.splice(l, 1)
				}
			}
			return k
		};
		e.un = e.event.un;
		e.dom.g = function(i) {
			if ("string" == typeof i || i instanceof String) {
				return document.getElementById(i)
			} else {
				if (i && i.nodeName && (i.nodeType == 1 || i.nodeType == 9)) {
					return i
				}
			}
			return null
		};
		e.g = e.G = e.dom.g;
		e.string = e.string || {};
		e.browser = e.browser || {};
		e.browser.ie = e.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp["\x241"]) : undefined;
		e.dom._NAME_ATTRS = (function() {
			var i = {
				cellpadding: "cellPadding",
				cellspacing: "cellSpacing",
				colspan: "colSpan",
				rowspan: "rowSpan",
				valign: "vAlign",
				usemap: "useMap",
				frameborder: "frameBorder"
			};
			if (e.browser.ie < 8) {
				i["for"] = "htmlFor";
				i["class"] = "className"
			} else {
				i.htmlFor = "for";
				i.className = "class"
			}
			return i
		})();
		e.dom.setAttr = function(j, i, k) {
			j = e.dom.g(j);
			if ("style" == i) {
				j.style.cssText = k
			} else {
				i = e.dom._NAME_ATTRS[i] || i;
				j.setAttribute(i, k)
			}
			return j
		};
		e.setAttr = e.dom.setAttr;
		e.dom.setAttrs = function(k, i) {
			k = e.dom.g(k);
			for (var j in i) {
				e.dom.setAttr(k, j, i[j])
			}
			return k
		};
		e.setAttrs = e.dom.setAttrs;
		e.dom.create = function(k, i) {
			var l = document.createElement(k),
				j = i || {};
			return e.dom.setAttrs(l, j)
		};
		e.cookie = e.cookie || {};
		e.cookie._isValidKey = function(i) {
			return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(i)
		};
		e.cookie.getRaw = function(j) {
			if (e.cookie._isValidKey(j)) {
				var k = new RegExp("(^| )" + j + "=([^;]*)(;|\x24)"),
					i = k.exec(document.cookie);
				if (i) {
					return i[2] || null
				}
			}
			return null
		};
		e.cookie.get = function(i) {
			var j = e.cookie.getRaw(i);
			if ("string" == typeof j) {
				j = decodeURIComponent(j);
				return j
			}
			return null
		};
		e.cookie.setRaw = function(k, l, j) {
			if (!e.cookie._isValidKey(k)) {
				return
			}
			j = j || {};
			var i = j.expires;
			if ("number" == typeof j.expires) {
				i = new Date();
				i.setTime(i.getTime() + j.expires)
			}
			document.cookie = k + "=" + l + (j.path ? "; path=" + j.path : "") + (i ? "; expires=" + i.toGMTString() : "") + (j.domain ? "; domain=" + j.domain : "") + (j.secure ? "; secure" : "")
		};
		e.cookie.set = function(j, k, i) {
			e.cookie.setRaw(j, encodeURIComponent(k), i)
		};
		e.cookie.remove = function(j, i) {
			i = i || {};
			i.expires = new Date(0);
			e.cookie.setRaw(j, "", i)
		};
		e.isPhone = function(i) {
			return /\d{11}/.test(i)
		};
		e.isActivateCode = function(i) {
			return /\d{4}/.test(i)
		};
		f.undope = true
	})();
	var a = BMapLib.SearchInfoWindow = function(k, j, i) {
		this.guid = c++;
		BMapLib.SearchInfoWindow.instance[this.guid] = this;
		this._isOpen = false;
		this._map = k;
		this._opts = i = i || {};
		this._content = j || "";
		this._opts.width = i.width;
		this._opts.height = i.height;
		this._opts._title = i.title || "";
		this._opts.offset = i.offset || new BMap.Size(0, 0);
		this._opts.enableAutoPan = i.enableAutoPan === false ? false : true;
		this._opts._panel = i.panel || null;
		this._opts._searchTypes = i.searchTypes;
		this._opts.enableSendToPhone = i.enableSendToPhone
	};
	a.prototype = new BMap.Overlay();
	a.prototype.initialize = function(j) {
		this._closeOtherSearchInfo();
		var i = this;
		var l = this._createSearchTemplate();
		var k = j.getPanes().floatPane;
		k.style.width = "auto";
		k.appendChild(l);
		this._initSearchTemplate();
		this._getSearchInfoWindowSize();
		this._boxWidth = parseInt(this.container.offsetWidth, 10);
		this._boxHeight = parseInt(this.container.offsetHeight, 10);
		e.event.on(l, "onmousedown", function(m) {
			i._stopBubble(m)
		});
		e.event.on(l, "onmouseover", function(m) {
			i._stopBubble(m)
		});
		e.event.on(l, "click", function(m) {
			i._stopBubble(m)
		});
		e.event.on(l, "dblclick", function(m) {
			i._stopBubble(m)
		});
		return l
	};
	a.prototype.draw = function() {
		this._isOpen && this._adjustPosition(this._point)
	};
	a.prototype.open = function(i) {
		this._map.closeInfoWindow();
		var j = this,
			k;
		if (!this._isOpen) {
			this._map.addOverlay(this);
			this._isOpen = true;
			setTimeout(function() {
				j._dispatchEvent(j, "open", {
					point: j._point
				})
			}, 10)
		}
		if (i instanceof BMap.Point) {
			k = i;
			this._removeMarkerEvt();
			this._marker = null
		} else {
			if (i instanceof BMap.Marker) {
				if (this._marker) {
					this._removeMarkerEvt()
				}
				k = i.getPosition();
				this._marker = i;
				!this._markerDragend && this._marker.addEventListener("dragend", this._markerDragend = function(l) {
					j._point = l.point;
					j._adjustPosition(j._point);
					j._panBox();
					j.show()
				});
				!this._markerDragging && this._marker.addEventListener("dragging", this._markerDragging = function() {
					j.hide();
					j._point = j._marker.getPosition();
					j._adjustPosition(j._point)
				})
			}
		}
		this.show();
		this._point = k;
		this._panBox();
		this._adjustPosition(this._point)
	};
	a.prototype.close = function() {
		if (this._isOpen) {
			this._map.removeOverlay(this);
			this._disposeAutoComplete();
			this._isOpen = false;
			this._dispatchEvent(this, "close", {
				point: this._point
			})
		}
	};
	a.prototype.enableAutoPan = function() {
		this._opts.enableAutoPan = true
	};
	a.prototype.disableAutoPan = function() {
		this._opts.enableAutoPan = false
	};
	a.prototype.setContent = function(i) {
		this._setContent(i);
		this._getSearchInfoWindowSize();
		this._adjustPosition(this._point)
	}, a.prototype.setTitle = function(i) {
		this.dom.title.innerHTML = i;
		this._opts._title = i
	};
	a.prototype.getContent = function() {
		return this.dom.content.innerHTML
	}, a.prototype.getTitle = function() {
		return this.dom.title.innerHTML
	};
	a.prototype.setPosition = function(i) {
		this._point = i;
		this._adjustPosition(i);
		this._panBox();
		this._removeMarkerEvt()
	};
	a.prototype.getPosition = function() {
		return this._point
	};
	a.prototype.getOffset = function() {
		return this._opts.offset
	}, e.object.extend(a.prototype, {
		_closeOtherSearchInfo: function() {
			var j = BMapLib.SearchInfoWindow.instance,
				i = j.length;
			while (i--) {
				if (j[i]._isOpen) {
					j[i].close()
				}
			}
		},
		_setContent: function(j) {
			if (!this.dom || !this.dom.content) {
				return
			}
			if (typeof j.nodeType === "undefined") {
				this.dom.content.innerHTML = j
			} else {
				this.dom.content.appendChild(j)
			}
			var i = this;
			i._adjustContainerWidth();
			this._content = j
		},
		_adjustPosition: function(k) {
			var i = this._getPointPosition(k);
			var j = this._marker && this._marker.getIcon();
			if (this._marker) {
				this.container.style.bottom = -(i.y - this._opts.offset.height - j.anchor.height + j.infoWindowAnchor.height) - this._marker.getOffset().height + 2 + 30 + "px";
				this.container.style.left = i.x - j.anchor.width + this._marker.getOffset().width + j.infoWindowAnchor.width - this._boxWidth / 2 + 28 + "px"
			} else {
				this.container.style.bottom = -(i.y - this._opts.offset.height) + 30 + "px";
				this.container.style.left = i.x - this._boxWidth / 2 + 25 + "px"
			}
		},
		_getPointPosition: function(i) {
			this._pointPosition = this._map.pointToOverlayPixel(i);
			return this._pointPosition
		},
		_getSearchInfoWindowSize: function() {
			this._boxWidth = parseInt(this.container.offsetWidth, 10);
			this._boxHeight = parseInt(this.container.offsetHeight, 10)
		},
		_stopBubble: function(i) {
			if (i && i.stopPropagation) {
				i.stopPropagation()
			} else {
				window.event.cancelBubble = true
			}
		},
		_panBox: function() {
			if (!this._opts.enableAutoPan) {
				return
			}
			var m = parseInt(this._map.getContainer().offsetHeight, 10),
				r = parseInt(this._map.getContainer().offsetWidth, 10),
				n = this._boxHeight,
				i = this._boxWidth;
			if (n >= m || i >= r) {
				return
			}
			if (!this._map.getBounds().containsPoint(this._point)) {
				this._map.setCenter(this._point)
			}
			var j = this._map.pointToPixel(this._point),
				s, p, l = i / 2 - 28 - j.x + 10,
				q = i / 2 + 28 + j.x - r + 10;
			if (this._marker) {
				var o = this._marker.getIcon()
			}
			var k = this._marker ? o.anchor.height + this._marker.getOffset().height - o.infoWindowAnchor.height : 0;
			s = n - j.y + this._opts.offset.height + k + 31 + 10;
			panX = l > 0 ? l : (q > 0 ? -q : 0);
			p = s > 0 ? s : 0;
			this._map.panBy(panX, p)
		},
		_removeMarkerEvt: function() {
			this._markerDragend && this._marker.removeEventListener("dragend", this._markerDragend);
			this._markerDragging && this._marker.removeEventListener("dragging", this._markerDragging);
			this._markerDragend = this._markerDragging = null
		},
		_dispatchEvent: function(i, j, l) {
			j.indexOf("on") != 0 && (j = "on" + j);
			var k = new e.lang.Event(j);
			if (!!l) {
				for (var m in l) {
					k[m] = l[m]
				}
			}
			i.dispatchEvent(k)
		},
		_initSearchTemplate: function() {
			this._initDom();
			this._initPanelTemplate();
			this.setTitle(this._opts._title);
			if (this._opts.height) {
				this.dom.content.style.height = parseInt(this._opts.height, 10) + "px"
			}
			this._setContent(this._content);
			this._initService();
			this._bind();
			if (this._opts._searchTypes) {
				this._setSearchTypes()
			}
			this._mendIE6()
		},
		_createSearchTemplate: function() {
			if (!this._div) {
				var j = e.dom.create("div", {
					"class": "BMapLib_SearchInfoWindow",
					id: "BMapLib_SearchInfoWindow" + this.guid
				});
				var i = ['<div class="BMapLib_bubble_top">', '<div class="BMapLib_bubble_title" id="BMapLib_bubble_title' + this.guid + '"></div>', '<div class="BMapLib_bubble_tools">', '<div class="BMapLib_bubble_close" title="关闭" id="BMapLib_bubble_close' + this.guid + '">', "</div>", '<div class="BMapLib_sendToPhone" title="发送到手机" id="BMapLib_sendToPhone' + this.guid + '">', "</div>", "</div>", "</div>", '<div class="BMapLib_bubble_center">', '<div class="BMapLib_bubble_content" id="BMapLib_bubble_content' + this.guid + '">', "</div>", '<div class="BMapLib_nav" id="BMapLib_nav' + this.guid + '">', '<ul class="BMapLib_nav_tab" id="BMapLib_nav_tab' + this.guid + '">', '<li class="BMapLib_first BMapLib_current" id="BMapLib_tab_search' + this.guid + '" style="display:block;">', '<span class="BMapLib_icon BMapLib_icon_nbs"></span>在附近找', "</li>", '<li class="" id="BMapLib_tab_tohere' + this.guid + '" style="display:block;">', '<span class="BMapLib_icon BMapLib_icon_tohere"></span>到这里去', "</li>", '<li class="" id="BMapLib_tab_fromhere' + this.guid + '" style="display:block;">', '<span class="BMapLib_icon BMapLib_icon_fromhere"></span>从这里出发', "</li>", "</ul>", '<ul class="BMapLib_nav_tab_content">', '<li id="BMapLib_searchBox' + this.guid + '">', '<table width="100%" align="center" border=0 cellpadding=0 cellspacing=0>', '<tr><td style="padding-left:8px;"><input id="BMapLib_search_text' + this.guid + '" class="BMapLib_search_text" type="text" maxlength="100" autocomplete="off"></td><td width="55" style="padding-left:7px;"><input id="BMapLib_search_nb_btn' + this.guid + '" type="submit" value="搜索" class="iw_bt"></td></tr>', "</table>", "</li>", '<li id="BMapLib_transBox' + this.guid + '" style="display:none">', '<table width="100%" align="center" border=0 cellpadding=0 cellspacing=0>', '<tr><td width="30" style="padding-left:8px;"><div id="BMapLib_stationText' + this.guid + '">起点</div></td><td><input id="BMapLib_trans_text' + this.guid + '" class="BMapLib_trans_text" type="text" maxlength="100" autocomplete="off"></td><td width="106" style="padding-left:7px;"><input id="BMapLib_search_bus_btn' + this.guid + '" type="button" value="公交" class="iw_bt" style="margin-right:5px;"><input id="BMapLib_search_drive_btn' + this.guid + '" type="button" class="iw_bt" value="驾车"></td></tr>', "</table>", "</li>", "</ul>", "</div>", "</div>", '<div class="BMapLib_bubble_bottom"></div>', '<img src="images/iw_tail.png" width="58" height="31" alt="" class="BMapLib_trans" id="BMapLib_trans' + this.guid + '" style="left:144px;"/>'];
				j.innerHTML = i.join("");
				this._div = j
			}
			return this._div
		},
		_initPanelTemplate: function() {
			var j = e.g(this._opts._panel);
			if (!this.dom.panel && j) {
				j.innerHTML = "";
				this.dom.panel = j;
				var i = e.dom.create("div");
				i.style.cssText = "display:none;background:#FD9;height:30px;line-height:30px;text-align:center;font-size:12px;color:#994C00;";
				j.appendChild(i);
				this.dom.panel.address = i;
				var k = e.dom.create("div");
				j.appendChild(k);
				this.dom.panel.localSearch = k
			}
		},
		_initDom: function() {
			if (!this.dom) {
				this.dom = {
					container: e.g("BMapLib_SearchInfoWindow" + this.guid),
					content: e.g("BMapLib_bubble_content" + this.guid),
					title: e.g("BMapLib_bubble_title" + this.guid),
					closeBtn: e.g("BMapLib_bubble_close" + this.guid),
					transIco: e.g("BMapLib_trans" + this.guid),
					navBox: e.g("BMapLib_nav" + this.guid),
					navTab: e.g("BMapLib_nav_tab" + this.guid),
					seartTab: e.g("BMapLib_tab_search" + this.guid),
					tohereTab: e.g("BMapLib_tab_tohere" + this.guid),
					fromhereTab: e.g("BMapLib_tab_fromhere" + this.guid),
					searchBox: e.g("BMapLib_searchBox" + this.guid),
					transBox: e.g("BMapLib_transBox" + this.guid),
					stationText: e.g("BMapLib_stationText" + this.guid),
					nbBtn: e.g("BMapLib_search_nb_btn" + this.guid),
					busBtn: e.g("BMapLib_search_bus_btn" + this.guid),
					driveBtn: e.g("BMapLib_search_drive_btn" + this.guid),
					searchText: e.g("BMapLib_search_text" + this.guid),
					transText: e.g("BMapLib_trans_text" + this.guid),
					sendToPhoneBtn: e.g("BMapLib_sendToPhone" + this.guid)
				};
				this.container = this.dom.container
			}
		},
		_adjustContainerWidth: function() {
			var j = 250,
				i = 0;
			if (this._opts.width) {
				j = parseInt(this._opts.width, 10);
				j += 10
			} else {
				j = parseInt(this.dom.content.offsetWidth, 10)
			} if (j < 250) {
				j = 250
			}
			this._width = j;
			this.container.style.width = this._width + "px";
			this._adjustTransPosition()
		},
		_adjustTransPosition: function() {
			this.dom.transIco.style.left = this.container.offsetWidth / 2 - 2 - 29 + "px";
			this.dom.transIco.style.top = this.container.offsetHeight - 2 + "px"
		},
		_initService: function() {
			var k = this._map;
			var j = this;
			var i = {};
			i.map = k;
			if (this.dom.panel) {
				i.panel = this.dom.panel.localSearch
			}
			if (!this.localSearch) {
				this.localSearch = new BMap.LocalSearch(k, {
					renderOptions: i,
					onSearchComplete: function(l) {
						j._clearAddress();
						j._drawCircleBound()
					}
				})
			}
			if (!this.transitRoute) {
				this.transitRoute = new BMap.TransitRoute(k, {
					renderOptions: i,
					onSearchComplete: function(l) {
						j._transitRouteComplete(j.transitRoute, l)
					}
				})
			}
			if (!this.drivingRoute) {
				this.drivingRoute = new BMap.DrivingRoute(k, {
					renderOptions: i,
					onSearchComplete: function(l) {
						j._transitRouteComplete(j.drivingRoute, l)
					}
				})
			}
		},
		_bind: function() {
			var i = this;
			e.on(this.dom.closeBtn, "click", function(j) {
				i.close()
			});
			e.on(this.dom.sendToPhoneBtn, "click", function(j) {
				i._sendToPhone()
			});
			e.on(this.dom.seartTab, "click", function(j) {
				i._showTabContent(BMAPLIB_TAB_SEARCH)
			});
			e.on(this.dom.tohereTab, "click", function(j) {
				i._showTabContent(BMAPLIB_TAB_TO_HERE)
			});
			e.on(this.dom.fromhereTab, "click", function(j) {
				i._showTabContent(BMAPLIB_TAB_FROM_HERE)
			});
			e.on(this.dom.nbBtn, "click", function(j) {
				i._localSearchAction()
			});
			e.on(this.dom.busBtn, "click", function(j) {
				i._transitRouteAction(i.transitRoute)
			});
			e.on(this.dom.driveBtn, "click", function(j) {
				i._transitRouteAction(i.drivingRoute)
			});
			this._autoCompleteIni();
			if (this._opts.enableSendToPhone === false) {
				this.dom.sendToPhoneBtn.style.display = "none"
			}
		},
		_showTabContent: function(m) {
			this._hideAutoComplete();
			var l = this.dom.navTab.getElementsByTagName("li"),
				j = l.length;
			for (var k = 0, j = l.length; k < j; k++) {
				l[k].className = ""
			}
			switch (m) {
				case BMAPLIB_TAB_SEARCH:
					this.dom.seartTab.className = "BMapLib_current";
					this.dom.searchBox.style.display = "block";
					this.dom.transBox.style.display = "none";
					break;
				case BMAPLIB_TAB_TO_HERE:
					this.dom.tohereTab.className = "BMapLib_current";
					this.dom.searchBox.style.display = "none";
					this.dom.transBox.style.display = "block";
					this.dom.stationText.innerHTML = "起点";
					this._pointType = "endPoint";
					break;
				case BMAPLIB_TAB_FROM_HERE:
					this.dom.fromhereTab.className = "BMapLib_current";
					this.dom.searchBox.style.display = "none";
					this.dom.transBox.style.display = "block";
					this.dom.stationText.innerHTML = "终点";
					this._pointType = "startPoint";
					break
			}
			this._firstTab.className += " BMapLib_first"
		},
		_autoCompleteIni: function() {
			this.searchAC = new BMap.Autocomplete({
				input: this.dom.searchText,
				location: this._map
			});
			this.transAC = new BMap.Autocomplete({
				input: this.dom.transText,
				location: this._map
			})
		},
		_hideAutoComplete: function() {
			this.searchAC.hide();
			this.transAC.hide()
		},
		_disposeAutoComplete: function() {
			this.searchAC.dispose();
			this.transAC.dispose()
		},
		_localSearchAction: function() {
			var j = this._kw = this.dom.searchText.value;
			if (j == "") {
				this.dom.searchText.focus()
			} else {
				this._reset();
				this.close();
				var i = this._radius = 1000;
				this.localSearch.searchNearby(j, this._point, i)
			}
		},
		_drawCircleBound: function() {
			this._closeCircleBound();
			var j = this._searchCircle = new BMap.Circle(this._point, this._radius, {
				strokeWeight: 3,
				strokeOpacity: 0.4,
				strokeColor: "#e00",
				filColor: "#00e",
				fillOpacity: 0.4
			});
			var i = this._searchLabel = new d(this._point, this.guid);
			this._map.addOverlay(j);
			this._map.addOverlay(i);
			this._hasCircle = true
		},
		_changeSearchRadius: function() {
			var i = parseInt(e.g("BMapLib_search_radius" + this.guid).value, 10);
			if (i > 0 && i != this._radius) {
				this._radius = i;
				this.localSearch.searchNearby(this._kw, this._point, i);
				this._closeCircleBound()
			}
		},
		_closeCircleBound: function(i) {
			if (this._searchCircle) {
				this._map.removeOverlay(this._searchCircle)
			}
			if (this._searchLabel) {
				this._map.removeOverlay(this._searchLabel)
			}
			this._hasCircle = false
		},
		_transitRouteAction: function(i) {
			var j = this.dom.transText.value;
			if (j == "") {
				this.dom.transText.focus()
			} else {
				this._reset();
				this.close();
				var k = this._getTransPoi(j);
				i.search(k.start, k.end)
			}
		},
		_transitRouteComplete: function(i, l) {
			this._clearAddress();
			var j = i.getStatus();
			if (j == BMAP_STATUS_UNKNOWN_ROUTE) {
				var k = l.getStartStatus(),
					m = l.getEndStatus(),
					n = "";
				n = "找不到相关的线路";
				if (k == BMAP_ROUTE_STATUS_EMPTY && m == BMAP_ROUTE_STATUS_EMPTY) {
					n = "找不到相关的起点和终点"
				} else {
					if (k == BMAP_ROUTE_STATUS_EMPTY) {
						n = "找不到相关的起点"
					}
					if (m == BMAP_ROUTE_STATUS_EMPTY) {
						n = "找不到相关的终点"
					}
				} if (this._pointType == "startPoint" && m == BMAP_ROUTE_STATUS_ADDRESS || this._pointType == "endPoint" && k == BMAP_ROUTE_STATUS_ADDRESS) {
					this._searchAddress(i)
				} else {
					this.dom.panel.address.style.display = "block";
					this.dom.panel.address.innerHTML = n
				}
			}
		},
		_searchAddress: function(i) {
			var m = this;
			var j = this.dom.panel;
			if (!this.lsAddress) {
				var k = {
					map: this._map
				};
				if (j) {
					k.panel = this.dom.panel.localSearch
				}
				this.lsAddress = new BMap.LocalSearch(this._map, {
					renderOptions: k
				})
			}
			var l = m._pointType == "startPoint" ? "终点" : "起点";
			if (j) {
				this.dom.panel.address.style.display = "block";
				this.dom.panel.address.innerHTML = "请选择准确的" + l
			}
			this.lsAddress.setInfoHtmlSetCallback(function(p, o) {
				var n = document.createElement("div");
				n.style.cssText = "position:relative;left:50%;margin:5px 0 0 -30px;width:60px;height:27px;line-height:27px;border:1px solid #E0C3A6;text-align:center;color:#B35900;cursor:pointer;background-color:#FFEECC;border-radius:2px; background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFDF8), to(#FFEECC))";
				n.innerHTML = "设为" + l;
				o.appendChild(n);
				e.on(n, "click", function() {
					m._clearAddress();
					var q = p.marker.getPosition();
					if (l == "起点") {
						i.search(q, m._point)
					} else {
						i.search(m._point, q)
					}
				})
			});
			this._reset();
			this.lsAddress.search(this.dom.transText.value)
		},
		_getTransPoi: function(j) {
			var k, i;
			if (this._pointType == "startPoint") {
				k = this._point;
				i = j
			} else {
				k = j;
				i = this._point
			}
			return {
				start: k,
				end: i
			}
		},
		_setSearchTypes: function() {
			var p = this._unique(this._opts._searchTypes),
				k = this.dom.navTab,
				o = [this.dom.seartTab, this.dom.tohereTab, this.dom.fromhereTab],
				n = 0,
				j = 0,
				m = 0,
				q;
			this.tabLength = p.length;
			tabWidth = Math.floor((this._width - this.tabLength + 1) / this.tabLength);
			if (p.length == 0) {
				this.dom.navBox.style.display = "none"
			} else {
				for (n = 0, j = o.length; n < j; n++) {
					o[n].className = "";
					o[n].style.display = "none"
				}
				for (n = 0; n < this.tabLength; n++) {
					q = o[p[n]];
					if (n == 0) {
						q.className = "BMapLib_first BMapLib_current";
						this._firstTab = q;
						m = p[n]
					}
					if (n == this.tabLength - 1) {
						var l = this._width - (this.tabLength - 1) * (tabWidth + 1);
						if (e.browser.ie == 6) {
							q.style.width = l - 3 + "px"
						} else {
							q.style.width = l + "px"
						}
					} else {
						q.style.width = tabWidth + "px"
					}
					q.style.display = "block"
				}
				if (p[1] != undefined) {
					k.appendChild(o[p[1]])
				}
				if (p[2] != undefined) {
					k.appendChild(o[p[2]])
				}
				this._showTabContent(m)
			}
			this._adjustTransPosition()
		},
		_unique: function(l) {
			var k = l.length,
				j = l.slice(0),
				n, m;
			while (--k >= 0) {
				m = j[k];
				if (m < 0 || m > 2) {
					j.splice(k, 1);
					continue
				}
				n = k;
				while (n--) {
					if (m == j[n]) {
						j.splice(k, 1);
						break
					}
				}
			}
			return j
		},
		_reset: function() {
			this.localSearch.clearResults();
			this.transitRoute.clearResults();
			this.drivingRoute.clearResults();
			this._closeCircleBound();
			this._hideAutoComplete()
		},
		_clearAddress: function() {
			if (this.lsAddress) {
				this.lsAddress.clearResults()
			}
			if (this.dom.panel) {
				this.dom.panel.address.style.display = "none"
			}
		},
		_mendIE6: function(l) {
			if (!e.browser.ie || e.browser.ie > 6) {
				return
			}
			var k = this.container.getElementsByTagName("IMG");
			for (var j = 0; j < k.length; j++) {
				if (k[j].src.indexOf(".png") < 0) {
					continue
				}
				k[j].style.cssText += ";FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + k[j].src + ",sizingMethod=crop)";
				k[j].src = "http://api.map.baidu.com/images/blank.gif"
			}
		},
		_sendToPhone: function() {
			this.showPopup()
		},
		showPopup: function() {
			if (!this.pop) {
				this.pop = new g(this)
			}
			this._map.addOverlay(this.pop)
		}
	});

	function d(i, j) {
		this._point = i;
		this.guid = j
	}
	d.prototype = new BMap.Overlay();
	d.prototype.initialize = function(k) {
		this._map = k;
		var l = this._div = document.createElement("div");

		function i(m) {
			if (m && m.stopPropagation) {
				m.stopPropagation()
			} else {
				window.event.cancelBubble = true
			}
		}
		e.on(l, "mousedown", i);
		e.on(l, "click", i);
		e.on(l, "dblclick", i);
		var j = BMapLib.SearchInfoWindow.instance[this.guid];
		l.style.cssText = "position:absolute;white-space:nowrap;background:#fff;padding:1px;border:1px solid red;z-index:99;";
		l.innerHTML = '<input type="text" value="' + j._radius + '" style="width:30px;" id="BMapLib_search_radius' + this.guid + '"/>m <a href="javascript:void(0)" title="修改" onclick="BMapLib.SearchInfoWindow.instance[' + this.guid + ']._changeSearchRadius()" style="font-size:12px;text-decoration:none;color:blue;">修改</a><img src="images/iw_close1d3.gif" alt="关闭" title="关闭" style="cursor:pointer;padding:0 5px;" onclick="BMapLib.SearchInfoWindow.instance[' + this.guid + ']._closeCircleBound()"/>';
		k.getPanes().labelPane.appendChild(l);
		return l
	};
	d.prototype.draw = function() {
		var j = this._map;
		var i = j.pointToOverlayPixel(this._point);
		this._div.style.left = i.x + 10 + "px";
		this._div.style.top = i.y - 25 + "px"
	};
	var h = "http://api.map.baidu.com";

	function g(i) {
		this.iw = i
	}
	g.prototype = new BMap.Overlay();
	e.extend(g.prototype, {
		initialize: function(j) {
			var i = this;
			this._map = j;
			this.container = this.generalDom();
			this._map.getContainer().appendChild(this.container);
			this.initDom();
			this.bind();
			this.getAddressByPoint();
			this.getRememberPhone();
			this.addPhoneNum = 0;
			return this.container
		},
		draw: function() {},
		generalDom: function() {
			var m = document.createElement("div"),
				j = this._map.getSize(),
				l = 0,
				k = 0;
			if (j.width > 450) {
				k = (j.width - 450) / 2
			}
			if (j.height > 260) {
				l = (j.height - 260) / 2
			}
			m.style.cssText = "position:absolute;background:#fff;width:480px;height:260px;top:" + l + "px;left:" + k + "px;ovflow:hidden;";
			var i = ['<div class="BMapLib_sms_tab_container">', "<span>发送到手机</span>", '<span id="BMapLib_sms_tip" style="display:none;">', "</span>", "</div>", '<div id="BMapLib_sms_pnl_phone" class="BMapLib_sms_pnl_phone" style="display: block;">', '<div class="BMapLib_ap" id="pnl_phone_left" style="display: block;">', "<table>", "<tr>", "<th>发送方手机号</th>", '<td><input type="text" bid="" id="BMapLib_phone_0" maxlength="11" class="BMapLib_sms_input BMapLib_sms_input_l" /><span id="BMapLib_activateTip"></span></td>', "</tr>", '<tr id="BMapLib_activateBox" style="display:none;">', "<th>激活码</th>", '<td><input type="text" id="BMapLib_activate" class="BMapLib_sms_input BMapLib_sms_input_s" maxlength="4"/><input type="button" value="获取" id="BMapLib_activate_btn" bid="activate" />', "</tr>", "<tr>", "<th></th>", "<td>", "</td>", "</tr>", "<tr>", '<th style="vertical-align:top;padding-top:7px;">接收方手机号</th>', '<td><div><input type="text" id="BMapLib_phone_1" class="BMapLib_sms_input BMapLib_sms_input_l" maxlength="11"/><input type="checkbox" id="BMapLib_is_remember_phone"/>记住此号</div>', '<div id="BMapLib_add_phone_con"></div>', '<div><a href="javascript:void(0)" id="BMapLib_add_phone_btn" bid="addPhone">新增</a></div>', "</td>", "</tr>", "<tr>", "<th></th>", '<td><input type="button" value="免费发送到手机" bid="sendToPhoneBtn"/></td>', "</tr>", "</table>", "</div>", '<div class="BMapLib_mp" id="pnl_phone_right" style="display: block;">', '<div class="BMapLib_mp_title">短信内容：</div>', '<div id="BMapLib_msgContent" class="BMapLib_msgContent"></div>', "</div>", '<div style="clear:both;"></div>', '<p id="BMapLib_sms_declare_phone" class="BMapLib_sms_declare_phone">百度保证不向任何第三方提供输入的手机号码</p>', '<div id="tipError" class="tip fail" style="display:none;">', '<span id="tipText"></span>', '<a href="javascript:void(0)" id="tipClose" class="cut"></a>', "</div>", '<div id="sms_lack_tip" style="display:none;">已达每日5次短信上限</div>', '<div id="sms_unlogin_tip" style="display:none;">', '<div style="padding-left:40px;">', '<ul class="login_ul"><li id="normal_login-2" class="login_hover"><a href="javascript:void(0)">手机登录</a></li></ul>', '<div id="loginBox_02" class="loginBox">', '<div id="pass_error_info-2" class="pass_error_style"></div>', '<div id="passports-2"></div>', '<div id="loginIframe_iph-2" style="display:none"></div>', "</div>", "</div>", '<div class="nopass" style="padding-left:128px;">没有百度帐号？<a href="https://passport.baidu.com/v2/?reg&amp;regType=1&amp;tpl=ma" target="_blank">立即注册</a></div>', "</div>", "</div>", '<button class="BMapLib_popup_close" bid="close"></button>', '<div id="BMapLib_success_tip" style="display:none;">您的短信已经发送到您的手机，请注意查收!</div>', ].join("");
			m.innerHTML = i;
			return m
		},
		initDom: function() {
			this.dom = {
				sms_tip: e.g("BMapLib_sms_tip"),
				activate_btn: e.g("BMapLib_activate_btn"),
				fromphone: e.g("BMapLib_phone_0"),
				tophone: e.g("BMapLib_phone_1"),
				isRememberPhone: e.g("BMapLib_is_remember_phone"),
				sms_container: e.g("BMapLib_sms_pnl_phone"),
				success_tip: e.g("BMapLib_success_tip"),
				add_phone_con: e.g("BMapLib_add_phone_con"),
				add_phone_btn: e.g("BMapLib_add_phone_btn"),
				activateBox: e.g("BMapLib_activateBox"),
				activateTip: e.g("BMapLib_activateTip"),
				activate_input: e.g("BMapLib_activate")
			}
		},
		showTip: function(i) {
			var j = i.error;
			var m = {
				PHONE_NUM_INVALID: "手机号码无效",
				SMS_SEND_SUCCESS: "发送到手机成功",
				AK_INVALID: "你所使用的key无效",
				INTERNAL_ERROR: "服务器错误",
				OVER_MAX_ACTIVATE_TIME: "今天已超过发送激活码最大次数",
				SMS_ACTIVATE_SUCCESS: "激活码已发送到您的手机，请注意查收！",
				ACTIVATE_FAIL: "手机激活码无效",
				SMS_LACK: "今天您还能往5个手机发送短信",
				PARAM_INVALID: "请填完所有选项",
				SEND_ACTIVATE_FAIL: "激活码发送失败"
			};
			var l = m[j];
			if (j == "SMS_LACK") {
				var k = i.res_sms;
				l = "今天您还能往" + k + "个手机发送短信";
				this.addPhoneNum = k - 1
			}
			if (l) {
				this.dom.sms_tip.innerHTML = l;
				this.dom.sms_tip.style.display = "inline"
			}
			if (j == "SMS_SEND_SUCCESS") {
				this.rememberPhone();
				this.sendSuccess()
			}
		},
		bind: function() {
			var k = this;
			e.on(this.container, "click", function(n) {
				var m = n.target || n.srcElement,
					l = m.getAttribute("bid");
				switch (l) {
					case "close":
						k.closeActon();
						break;
					case "sendToPhoneBtn":
						k.sendAction();
						break;
					case "activate":
						k.activateAction();
						break;
					case "addPhone":
						k.addPhoneAction();
						break;
					case "deletePhone":
						k.deletePhoneAction(m);
						break
				}
			});
			var j = e.g("BMapLib_phone_0");
			var i = e.g("BMapLib_phone_1");
			this.container.onkeypress = function(o) {
				var m = o || window.e,
					n = m.which || m.keyCode,
					l = false;
				if (n >= 48 && n <= 57 || n == 44 || n == 8) {
					l = true
				}
				return l
			};
			e.on(this.dom.fromphone, "blur", function() {
				if (e.isPhone(this.value)) {
					k.checkActivateAction()
				} else {
					k.dom.activateTip.innerHTML = "";
					k.dom.activateBox.style.display = "none"
				}
			});
			e.on(this.dom.activate_input, "blur", function() {
				if (e.isActivateCode(this.value)) {
					k.checkActivateAction()
				}
			})
		},
		checkActivateAction: function() {
			var j = {
				phone: this.dom.fromphone.value,
				activate: this.dom.activate_input.value,
				cbName: "callback"
			};
			var i = this;
			this.request(this.config.ckActivateURL, j, function(k) {
				if (!k || k.isactivate == false) {
					i.dom.activateBox.style.display = "table-row";
					i.dom.activateTip.style.color = "red";
					i.dom.activateTip.innerHTML = "未激活"
				} else {
					i.dom.activateBox.style.display = "none";
					i.dom.activateTip.style.color = "green";
					i.dom.activateTip.innerHTML = "已激活"
				}
			})
		},
		activateAction: function() {
			var i = this;
			var k = this._map.getKey();
			var j = {
				phone: this.dom.fromphone.value,
				ak: k,
				cbName: "callback"
			};
			if (e.isPhone(j.phone)) {
				this.request(this.config.activateURL, j, function(l) {
					if (l) {
						i.showTip(l)
					}
				})
			} else {
				this.showTip({
					error: "PHONE_NUM_INVALID"
				})
			}
		},
		closeActon: function() {
			this._map.removeOverlay(this)
		},
		getMessage: function() {},
		sendAction: function() {
			var m = this;
			if (this.validate()) {
				tophoneStr = e.g("BMapLib_phone_1").value;
				var k = this.dom.add_phone_con.getElementsByTagName("input");
				for (var l = 0, j = k.length; l < j; l++) {
					if (e.isPhone(k[l].value)) {
						tophoneStr += "," + k[l].value
					} else {
						this.showTip({
							error: "PHONE_NUM_INVALID"
						});
						return
					}
				}
				var o = this._map.getKey();
				var n = {
					fromphone: e.g("BMapLib_phone_0").value,
					tophone: tophoneStr,
					ak: o,
					activate: this.dom.activate_input.value,
					content: e.g("BMapLib_phone_0").value + "分享一个位置给您，" + this.messageContent,
					cbName: "callback"
				};
				this.request(this.config.sendURL, n, function(i) {
					if (i) {
						m.showTip(i)
					}
				})
			}
		},
		validate: function() {
			var i = true;
			if (!(e.isPhone(this.dom.fromphone.value) && e.isPhone(this.dom.tophone.value))) {
				i = false;
				this.showTip({
					error: "PHONE_NUM_INVALID"
				})
			}
			return i
		},
		getAddressByPoint: function() {
			var k = this.iw._point,
				i = this,
				j = new BMap.Geocoder();
			j.getLocation(k, function(l) {
				if (l && l.addressComponents) {
					var m = l.addressComponents;
					i.address = m.province + m.city + m.district + m.street + m.streetNumber;
					i.generalMessage()
				}
			})
		},
		generalMessage: function() {
			var o = e.g("BMapLib_msgContent");
			var n = "";
			var j = this.iw;
			var i = j.getPosition();
			if (this.userPhone) {
				n += this.userPhone + "分享一个位置给您，"
			}
			if (j.getTitle) {
				n += "名称为：" + j.getTitle() + "，"
			}
			if (this.address) {
				n += "大致位置在" + this.address + "，"
			}
			var l = "http://api.map.baidu.com/marker?location=" + i.lat + "," + i.lng + "&title=" + encodeURIComponent(j.getTitle()) + "&content=" + encodeURIComponent(j.getContent()) + "&output=html";
			var m = {
				url: encodeURIComponent(l),
				t: new Date().getTime(),
				cbName: "callback"
			};
			var k = this;
			this.request(this.config.shortURL, m, function(p) {
				n += "查看地图：" + p.url ? p.url : l;
				k.messageContent = n;
				o.innerHTML = n
			})
		},
		rememberPhone: function() {
			if (this.dom.isRememberPhone.checked) {
				var i = this.dom.tophone.value;
				e.cookie.set("BMapLib_phone", i, {
					path: "/",
					expires: 30 * 24 * 60 * 60 * 1000
				})
			}
		},
		getRememberPhone: function() {
			var i = e.cookie.get("BMapLib_phone");
			if (i) {
				this.dom.tophone.value = i;
				this.dom.isRememberPhone.checked = true
			}
		},
		sendSuccess: function() {
			this.dom.sms_container.style.display = "none";
			this.dom.success_tip.style.display = "block";
			var i = this;
			setTimeout(function() {
				i._map.removeOverlay(i)
			}, 1500)
		},
		addPhoneAction: function() {
			if (this.addPhoneNum >= 4) {} else {
				var i = document.createElement("div");
				i.innerHTML = '<input type="text" class="BMapLib_sms_input BMapLib_sms_input_l" maxlength="11"/><a href="javascript:void(0);" style="margin-left:5px;" bid="deletePhone">删除</a>';
				this.dom.add_phone_con.appendChild(i);
				this.addPhoneNum++
			}
		},
		deletePhoneAction: function(i) {
			i.parentNode.parentNode.removeChild(i.parentNode);
			this.addPhoneNum--
		},
		request: function(k, n, i) {
			var j = (Math.random() * 100000).toFixed(0);
			BMapLib["BMapLib_cbk" + j] = function(o) {
				i && i(o);
				delete BMapLib["BMapLib_cbk" + j]
			};
			for (var m in n) {
				if (m != "cbName") {
					k += "&" + m + "=" + n[m]
				}
			}
			var l = this;
			k += "&" + n.cbName + "=BMapLib.BMapLib_cbk" + j;
			b(k)
		},
		config: {
			sendURL: h + "/ws/message?method=send",
			activateURL: h + "/ws/message?method=activate",
			ckActivateURL: h + "/ws/message?method=ckActivate",
			shortURL: "http://j.map.baidu.com/?"
		}
	});

	function b(j) {
		var i = document.createElement("script");
		i.setAttribute("type", "text/javascript");
		i.setAttribute("src", j);
		if (i.addEventListener) {
			i.addEventListener("load", function(l) {
				var k = l.target || l.srcElement;
				k.parentNode.removeChild(k)
			}, false)
		} else {
			if (i.attachEvent) {
				i.attachEvent("onreadystatechange", function(l) {
					var k = window.event.srcElement;
					if (k && (k.readyState == "loaded" || k.readyState == "complete")) {
						k.parentNode.removeChild(k)
					}
				})
			}
		}
		setTimeout(function() {
			document.getElementsByTagName("head")[0].appendChild(i);
			i = null
		}, 1)
	}
	var c = 0;
	BMapLib.SearchInfoWindow.instance = []
})();