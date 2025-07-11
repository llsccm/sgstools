System.register("chunks:///_virtual/apiClient.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./apiService.ts",
    "./EnumCmdName.ts", "./httpClient.ts"], (function (t) {
    var e, r, n, u, i, s, a;
    return {
        setters: [function (t) {
            e = t.createClass, r = t.asyncToGenerator, n = t.regeneratorRuntime
        }, function (t) {
            u = t.cclegacy
        }, function (t) {
            i = t.ApiService
        }, function (t) {
            s = t.EnumCmdName
        }, function (t) {
            a = t.HttpMethod
        }],
        execute: function () {
            u._RF.push({}, "d16abeGW79CHrS4oiIvV+rb", "apiClient", void 0);
            var c = t("ApiClient", function () {
                function t() {}
                return t.login = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.POST,
                                            s.LOGIN, e)
                                    );
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getUserInfo = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.GET,
                                            s.GET_USER_INFO,
                                            e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getlevelList = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.GET,
                                            s.LEVEL_LIST,
                                            e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getlevelInfo = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.GET,
                                            s.LEVEL_START,
                                            e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getlevelSettle = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.POST,
                                            s.LEVEL_SUBMIT,
                                            e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getlevelReward = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.POST,
                                            s.LEVEL_SUBMIT_REWARD,
                                            e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getRewardList = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.GET,
                                            s.REWARD_LIST,
                                            e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getReward = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.GET,
                                            s.REWARD, e
                                        ));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getTaskList = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.GET,
                                            s.TASK_LIST,
                                            e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), t.getTaskReward = function () {
                    var t = r(n().mark((function t(e) {
                        return n().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt(
                                        "return", this.apiService
                                        .request(a.GET,
                                            s.TASK_DRAW,
                                            e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), e(t, null, [{
                    key: "instance",
                    get: function () {
                        return null == this._instance && (this._instance = new t),
                            this._instance
                    }
                }]), t
            }());
            c.apiService = i.instance, c._instance = null, u._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/apiService.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./constant.ts",
    "./uiManager.ts", "./md5.ts", "./httpClient.ts", "./EnumCmdName.ts"], (function (t) {
    var e, n, r, a, o, i, s, c;
    return {
        setters: [function (t) {
            e = t.extends, n = t.createClass
        }, function (t) {
            r = t.cclegacy
        }, function (t) {
            a = t.constant
        }, function (t) {
            o = t.uiManager
        }, function (t) {
            i = t.md5
        }, function (t) {
            s = t.HttpClient
        }, function (t) {
            c = t.EnumCmdName
        }],
        execute: function () {
            r._RF.push({}, "1e196Omg7hHfqlei7mRWVw2", "apiService", void 0), t("ApiService", function () {
                function t() {
                    this.httpClient = s.instance, this.init()
                }
                var r = t.prototype;
                return r.init = function () {
                    var t = this;
                    this.httpClient.setBaseUrl(a.domain).setTimeout(1e4), this.httpClient.addInterceptor({
                        request: function (n) {
                            console.log("请求拦截器:", n);
                            var r = localStorage.getItem("token");
                            r && n.url !== c.LOGIN && (n.headers = e({}, n.headers, {
                                Authorization: "Bearer " + r,
                                "X-Mse-Flag": "1"
                            }));
                            var a = Math.floor(Date.now() / 1e3),
                                o = e({}, n.data, {
                                    timestamp: a
                                }),
                                s = Object.keys(o).sort(),
                                u = "";
                            s.forEach((function (e) {
                                var n = t.valueToString(o[e]);
                                u += e + "=" + n
                            }));
                            var l = i(u + "fB4ENXcsKQHnSkJwE6CxlvguOOGXkola");
                            return n.data = e({}, n.data, {
                                timestamp: a,
                                sign: l
                            }), n
                        }
                    }), this.httpClient.addInterceptor({
                        response: function (e) {
                            var n = e.data,
                                r = n.code,
                                a = (n.data, n.msg);
                            if (401 === e.status && (localStorage.removeItem(
                                    "token"), t.redirect()), 0 != r) {
                                90001 === r && t.redirect();
                                var o = new Error(a);
                                throw o.code = r, o
                            }
                            return e.data
                        },
                        error: function (t) {
                            var e;
                            console.error("API请求错误:", t);
                            var n, r = "请求失败",
                                a = -1;
                            t instanceof Error ? (r = null == (n = t.message) ?
                                void 0 : n.replace(/^Error:\s*/, ""), a = t
                                .code) : "string" == typeof t ? r = t.replace(
                                /^Error:\s*/, "") : null != t && null != (e =
                                t.data) && e.msg && (r = t.data.msg, a = t.data
                                .code);
                            throw o.instance.showTips(r), {
                                code: a,
                                msg: r
                            }
                        }
                    })
                }, r.redirect = function () {
                    var t = location.href.replace(/([?&])(code|state)=[^&]*/g, "$1").replace(
                            /\?$/, "").replace(/[?&]+/g, "?").replace(/\?+$/, ""),
                        e = encodeURIComponent(t);
                    location.href =
                        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa18303ad360d1aa8&redirect_uri=" +
                        e +
                        "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"
                }, r.valueToString = function (t) {
                    return null == t ? "" : "object" == typeof t ? JSON.stringify(t) :
                        String(t)
                }, r.request = function (t, e, n, r) {
                    var a = t.toLowerCase();
                    return this.httpClient[a](e, n, r)
                }, n(t, null, [{
                    key: "instance",
                    get: function () {
                        return null == this._instance && (this._instance = new t),
                            this._instance
                    }
                }]), t
            }())._instance = null, r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/audioManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./resourceUtil.ts"],
    (function (o) {
        var n, i, u, e, t, a, s;
        return {
            setters: [function (o) {
                n = o.createClass
            }, function (o) {
                i = o.cclegacy, u = o.assert, e = o.AudioClip, t = o.warn, a = o.clamp01
            }, function (o) {
                s = o.resourceUtil
            }],
            execute: function () {
                i._RF.push({}, "59b85ZKCuFFPbaoPS7WvS8F", "audioManager", void 0);
                var c = o("audioManager", function () {
                    function o() {
                        this.soundVolume = 1
                    }
                    var i = o.prototype;
                    return i.init = function (n) {
                        this.soundVolume = 1, o._audioSource = n
                    }, i.playMusic = function (n) {
                        var i = o._audioSource;
                        u(!!i, "AudioManager not inited!"), i.loop = n, i.playing || i.play()
                    }, i.stopMusic = function () {
                        var n = o._audioSource;
                        u(!!n, "AudioManager not inited!"), n.stop()
                    }, i.toggleMusic = function () {
                        var n = o._audioSource;
                        u(!!n, "AudioManager not inited!"), n.playing ? n.pause() : n.play()
                    }, i.playSound = function (n) {
                        var i = o._audioSource;
                        u(!!i, "AudioManager not inited!");
                        s.loadRes("audio/sound/" + n, e, (function (o, n) {
                            o ? t("load audioClip failed: ", o) : i.playOneShot(n,
                                1)
                        }))
                    }, i.setMusicVolume = function (n) {
                        var i = o._audioSource;
                        u(!!i, "AudioManager not inited!"), n = a(n), i.volume = n
                    }, i.setSoundVolume = function (o) {
                        this.soundVolume = o
                    }, i.openMusic = function () {
                        this.setMusicVolume(1)
                    }, i.closeMusic = function () {
                        this.setMusicVolume(0)
                    }, i.toggleSetMusic = function () {
                        var n = o._audioSource;
                        u(!!n, "AudioManager not inited!"), n.volume ? this.closeMusic() : this
                            .openMusic()
                    }, i.openSound = function () {
                        this.setSoundVolume(1)
                    }, i.closeSound = function () {
                        this.setSoundVolume(0)
                    }, i.stopSound = function () {
                        var n = o._audioSource;
                        u(!!n, "AudioManager not inited!"), n.stop()
                    }, n(o, null, [{
                        key: "instance",
                        get: function () {
                            return this._instance || (this._instance = new o), this
                                ._instance
                        }
                    }]), o
                }());
                c._instance = void 0, c._audioSource = void 0, i._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/blockInputEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var o, n, i, s, e;
    return {
        setters: [function (t) {
            o = t.inheritsLoose
        }, function (t) {
            n = t.cclegacy, i = t._decorator, s = t.Node, e = t.Component
        }],
        execute: function () {
            var p;
            n._RF.push({}, "968ba6c9F9AupY/AbKjAj++", "blockInputEvent", void 0);
            var h = i.ccclass;
            i.property, t("blockInputEvent", h("blockInputEvent")(p = function (t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                o(n, t);
                var i = n.prototype;
                return i.start = function () {}, i.onEnable = function () {
                    this.node.on(s.EventType.TOUCH_START, this.stopPropagation, this),
                        this.node.on(s.EventType.TOUCH_END, this.stopPropagation, this),
                        this.node.on(s.EventType.TOUCH_MOVE, this.stopPropagation, this),
                        this.node.on(s.EventType.TOUCH_CANCEL, this.stopPropagation,
                            this), this.node.on(s.EventType.MOUSE_DOWN, this.stopPropagation,
                            this), this.node.on(s.EventType.MOUSE_ENTER, this.stopPropagation,
                            this), this.node.on(s.EventType.MOUSE_MOVE, this.stopPropagation,
                            this), this.node.on(s.EventType.MOUSE_LEAVE, this.stopPropagation,
                            this), this.node.on(s.EventType.MOUSE_UP, this.stopPropagation,
                            this), this.node.on(s.EventType.MOUSE_WHEEL, this.stopPropagation,
                            this)
                }, i.onDisable = function () {
                    this.node.off(s.EventType.TOUCH_START, this.stopPropagation, this),
                        this.node.off(s.EventType.TOUCH_END, this.stopPropagation, this),
                        this.node.off(s.EventType.TOUCH_MOVE, this.stopPropagation,
                            this), this.node.off(s.EventType.TOUCH_CANCEL, this.stopPropagation,
                            this), this.node.off(s.EventType.MOUSE_DOWN, this.stopPropagation,
                            this), this.node.off(s.EventType.MOUSE_ENTER, this.stopPropagation,
                            this), this.node.off(s.EventType.MOUSE_MOVE, this.stopPropagation,
                            this), this.node.off(s.EventType.MOUSE_LEAVE, this.stopPropagation,
                            this), this.node.off(s.EventType.MOUSE_UP, this.stopPropagation,
                            this), this.node.off(s.EventType.MOUSE_WHEEL, this.stopPropagation,
                            this)
                }, i.stopPropagation = function (t) {
                    t.propagationImmediateStopped = !0, t.propagationStopped = !0
                }, n
            }(e)) || p);
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/btnAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./audioManager.ts"],
    (function (e) {
        var t, n, i, r, o, a, c, l, u;
        return {
            setters: [function (e) {
                t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, r =
                    e.assertThisInitialized
            }, function (e) {
                o = e.cclegacy, a = e._decorator, c = e.Button, l = e.Component
            }, function (e) {
                u = e.audioManager
            }],
            execute: function () {
                var p, s, d, b, f, y, m, v, h, k, S, g, P;
                o._RF.push({}, "f130br9GwZGkJEkRGonhXxR", "btnAdapter", void 0);
                var w = a.ccclass,
                    C = a.property,
                    z = a.menu,
                    A = a.requireComponent,
                    M = a.disallowMultiple;
                e("btnAdapter", (p = w("btnAdapter"), s = z("自定义组件/btnAdapter"), d = A(c), b = C({
                    tooltip: "点击后是否播放点击音效"
                }), f = C({
                    tooltip: "点击音效名"
                }), y = C({
                    tooltip: "是否禁止快速二次点击"
                }), m = C({
                    tooltip: "点击后多久才能再次点击,仅isPreventSecondClick为true生效"
                }), p(v = s(v = d(v = M((k = t((h = function (e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(
                                n), a = 0; a < n; a++) o[a] =
                            arguments[a];
                        return t = e.call.apply(e, [this].concat(o)) ||
                            this, i(t, "isPlaySound", k, r(t)), i(t,
                                "clickSoundName", S, r(t)), i(t,
                                "isPreventSecondClick", g, r(t)), i(
                                t, "preventTime", P, r(t)), t
                    }
                    return n(t, e), t.prototype.start = function () {
                        var e = this,
                            t = this.node.getComponent(c);
                        this.node.on("click", (function () {
                            e.isPreventSecondClick &&
                                (t.interactable = !
                                    1, e.scheduleOnce(
                                        (function () {
                                            t.node &&
                                                (
                                                    t
                                                    .interactable = !
                                                    0
                                                )
                                        }), e.preventTime
                                    )), e.isPlaySound &&
                                u.instance.playSound(
                                    e.clickSoundName
                                )
                        }))
                    }, t
                }(l)).prototype, "isPlaySound", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return !0
                    }
                }), S = t(h.prototype, "clickSoundName", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return "click"
                    }
                }), g = t(h.prototype, "isPreventSecondClick", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return !1
                    }
                }), P = t(h.prototype, "preventTime", [m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 2
                    }
                }), v = h)) || v) || v) || v) || v));
                o._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/btnSahre.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var n, r, e, o;
    return {
        setters: [function (t) {
            n = t.inheritsLoose
        }, function (t) {
            r = t.cclegacy, e = t._decorator, o = t.Component
        }],
        execute: function () {
            var c;
            r._RF.push({}, "c2ad9SrNR5NOI4bylFuSlfi", "btnSahre", void 0);
            var u = e.ccclass;
            e.property, t("btnSahre", u("btnSahre")(c = function (t) {
                function r() {
                    return t.apply(this, arguments) || this
                }
                n(r, t);
                var e = r.prototype;
                return e.start = function () {}, e.update = function (t) {}, r
            }(o)) || c);
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CaptureImage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
    var t, i, a, n, r, o, s, c, h, l, u, p, g, d, m, v;
    return {
        setters: [function (e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, a = e.initializerDefineProperty, n =
                e.assertThisInitialized
        }, function (e) {
            r = e.cclegacy, o = e._decorator, s = e.Camera, c = e.Node, h = e.log, l = e.RenderTexture,
                u = e.view, p = e.NodeEventType, g = e.UITransform, d = e.screen, m = e.game, v = e
                .Component
        }],
        execute: function () {
            var f, _, y, C, b, w, x, B, N, D, I;
            r._RF.push({}, "efe71/K3XVIwZcD7nehBQdr", "CaptureImage", void 0);
            var z = o.ccclass,
                T = o.property;
            e("CaptureImage", (f = z("CaptureImage"), _ = T(s), y = T(c), C = T(c), b = T(c), f((B = t(
                (x = function (e) {
                    function t() {
                        for (var t, i = arguments.length, r = new Array(i), o =
                                0; o < i; o++) r[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(r)) || this, a(
                                t, "copyCamera", B, n(t)), a(t, "targetNode", N,
                                n(t)), a(t, "captureBtn", D, n(t)), a(t,
                                "closeBtn", I, n(t)), t.rt = void 0, t._image =
                            void 0, t._canvas = null, t._buffer = null, t
                    }
                    i(t, e);
                    var r = t.prototype;
                    return r.start = function () {
                        h(
                                "欢迎关注微信公众号【白玉无冰】 https://mp.weixin.qq.com/s/4WwCjWBtZNnONh8hZ7JVDA"
                            ), this.rt = new l, this.rt.reset({
                                width: u.getVisibleSize().width,
                                height: u.getVisibleSize().height
                            }), this.copyCamera.targetTexture = this.rt,
                            this.captureBtn.active = !0, this.closeBtn.active = !
                            1, this.captureBtn.on(p.TOUCH_END, this.copyRenderTex,
                                this), this.closeBtn.on(p.TOUCH_END, this.clearCapture,
                                this)
                    }, r.copyRenderTex = function () {
                        var e = this.targetNode.getComponent(g).width,
                            t = this.targetNode.getComponent(g).height,
                            i = this.targetNode.getComponent(g).anchorPoint,
                            a = this.targetNode.getWorldPosition();
                        (this._buffer = this.rt.readPixels(Math.round(a.x -
                                e * i.x), Math.round(a.y - t * i.y), e,
                            t), this._canvas) ? this._canvas.getContext(
                            "2d").clearRect(0, 0, this._canvas.width,
                            this._canvas.height): (this._canvas =
                            document.createElement("canvas"), this._canvas
                            .width = e, this._canvas.height = t);
                        for (var n = this._canvas.getContext("2d"), r = 4 *
                                e, o = 0; o < t; o++) {
                            for (var s = t - 1 - o, c = n.createImageData(e,
                                    1), h = s * e * 4, l = 0; l < r; l++) c
                                .data[l] = this._buffer[h + l];
                            n.putImageData(c, 0, o)
                        }
                        var p = u.getVisibleSizeInPixel().height / d.devicePixelRatio /
                            u.getDesignResolutionSize().height,
                            v = e * p,
                            f = t * p,
                            _ = new Image(v, f);
                        _.style.position = "absolute", _.style.marginTop = -
                            f / 2 + "px", _.style.marginLeft = -v / 2 +
                            "px", _.style.top = "50%", _.style.left = "50%",
                            _.src = this._canvas.toDataURL(), m.container.appendChild(
                                _), this._image && m.container.removeChild(
                                this._image), this._image = _, this.captureBtn
                            .active = !1, this.closeBtn.active = !0
                    }, r.clearCapture = function () {
                        this._image && m.container.removeChild(this._image),
                            this._image = null, this.captureBtn.active = !0,
                            this.closeBtn.active = !1
                    }, t
                }(v)).prototype, "copyCamera", [_], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), N = t(x.prototype, "targetNode", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), D = t(x.prototype, "captureBtn", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), I = t(x.prototype, "closeBtn", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), w = x)) || w));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/chapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TypewriterEffect.ts",
    "./chapterConfig.ts", "./uiManager.ts", "./page.ts", "./resourceUtil.ts", "./constant.ts"], (function (t) {
    var e, r, n, i, a, o, s, p, c, h, u, l, f, C, g, y, T, d;
    return {
        setters: [function (t) {
            e = t.applyDecoratedDescriptor, r = t.inheritsLoose, n = t.initializerDefineProperty, i =
                t.assertThisInitialized
        }, function (t) {
            a = t.cclegacy, o = t._decorator, s = t.Node, p = t.Sprite, c = t.error, h = t.UIOpacity,
                u = t.tween, l = t.Component
        }, function (t) {
            f = t.TypewriterEffect
        }, function (t) {
            C = t.chapterConfig
        }, function (t) {
            g = t.uiManager
        }, function (t) {
            y = t.PagePath
        }, function (t) {
            T = t.resourceUtil
        }, function (t) {
            d = t.constant
        }],
        execute: function () {
            var b, v, m, w, x, B, I, D, E, S, _, k, z;
            a._RF.push({}, "13b1e8B6aFG1qdwsg4i6hL/", "chapter", void 0);
            var L = o.ccclass,
                N = o.property;
            t("chapter", (b = L("chapter"), v = N(f), m = N(s), w = N(s), x = N(s), B = N(p), b((E = e(
                (D = function (t) {
                    function e() {
                        for (var e, r = arguments.length, a = new Array(r), o =
                                0; o < r; o++) a[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(a)) || this, n(
                                e, "transitionTyper", E, i(e)), n(e,
                                "nextChapterButton", S, i(e)), n(e,
                                "skipButton", _, i(e)), n(e, "all", k, i(e)), n(
                                e, "bg", z, i(e)), e.currentChapterIndex = 0, e
                            .currentChapterBg = "", e.currentChapter = null, e.Chapter = [],
                            e.chapter = void 0, e
                    }
                    r(e, t);
                    var a = e.prototype;
                    return a.start = function () {
                        this.transitionTyper || c(
                            "ChapterManager: transitionTyper 未指定!")
                    }, a.show = function (t) {
                        console.log("show chapter:", t), this.setInitData(t)
                    }, a.init = function (t) {
                        this.setInitData(t)
                    }, a.setInitData = function (t) {
                        this.chapter = t;
                        var e = C[null != t ? t : d.NEED_CHAPTER_LEVEL2];
                        console.log(e), this.Chapter = e.chapters, this.currentChapter =
                            this.Chapter[this.currentChapterIndex], this.currentChapterBg =
                            this.currentChapter.sp, this.setCurrentChapter(),
                            this.all.on(s.EventType.TOUCH_START, this.operate,
                                this)
                    }, a.onLoad = function () {}, a.operate = function () {
                        console.log("operate"), this.nextChapterButton.active ?
                            this.onNextChapterButtonClicked() : this.skipTransition()
                    }, a.setCurrentChapter = function () {
                        var t = this.currentChapter,
                            e = t.sp,
                            r = t.chapter;
                        if (e) {
                            var n = this.bg.node.getComponent(h);
                            n || (n = this.bg.node.addComponent(h)), n.opacity =
                                0, T.setSpriteFrame("textures/UI/chapter/" +
                                    e, this.bg, (function () {
                                        u(n).to(.5, {
                                            opacity: 255
                                        }).start()
                                    }))
                        } else this.bg.spriteFrame = null;
                        this.showChapterTransition(r)
                    }, a.showChapterTransition = function (t) {
                        var e = this;
                        this.transitionTyper && (this.nextChapterButton.active = !
                            1, this.transitionTyper.startTyping(t, .02,
                                (function () {
                                    e.currentChapterIndex >= e.Chapter
                                        .length - 1 ? (console.log(
                                            "章节结束"), e.all.off(
                                            s.EventType.TOUCH_START,
                                            e.operate, e), e.scheduleOnce(
                                            (function () {
                                                g.instance.hideDialog(
                                                        y.Chapter
                                                    ), "0" ==
                                                    e.chapter ?
                                                    g.instance
                                                    .showDialog(
                                                        y.Main
                                                    ) : g.instance
                                                    .showDialog(
                                                        y.Level
                                                    );
                                                var t =
                                                    localStorage
                                                    .getItem(
                                                        "chapter"
                                                    ) ||
                                                    "[]",
                                                    r =
                                                    JSON.parse(
                                                        t);
                                                r.push(e.chapter),
                                                    localStorage
                                                    .setItem(
                                                        "chapter",
                                                        JSON
                                                        .stringify(
                                                            r
                                                        ))
                                            }), .3)) : e.nextChapterButton
                                        .active = !0
                                })))
                    }, a.skipTransition = function () {
                        this.transitionTyper && this.transitionTyper.isTyping() &&
                            this.transitionTyper.completeImmediate()
                    }, a.onNextChapterButtonClicked = function () {
                        console.log("进入下一章节..."), this.currentChapterIndex++,
                            this.currentChapter = this.Chapter[this.currentChapterIndex],
                            console.log(this.currentChapter), this.currentChapterBg =
                            this.currentChapter.sp, this.setCurrentChapter()
                    }, a.update = function (t) {}, e
                }(l)).prototype, "transitionTyper", [v], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), S = e(D.prototype, "nextChapterButton", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), _ = e(D.prototype, "skipButton", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), k = e(D.prototype, "all", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), z = e(D.prototype, "bg", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), I = D)) || I));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/chapterConfig.ts", ["cc", "./constant.ts"], (function (a) {
    var e, p;
    return {
        setters: [function (a) {
            e = a.cclegacy
        }, function (a) {
            p = a.constant
        }],
        execute: function () {
            var c;
            e._RF.push({}, "ead5fOlQ7RAr5BarD4Yp0pX", "chapterConfig", void 0);
            a("chapterConfig", ((c = {})[0] = {
                chapters: [{
                    sp: "diaochan",
                    name: "貂蝉",
                    chapter: "编织美梦与噩梦的魔貂蝉"
                }, {
                    sp: "lvbu",
                    name: "吕布",
                    chapter: "拥有魁梧的体魄和绝对的力量的魔吕布！"
                }, {
                    sp: "",
                    name: "主角",
                    chapter: "你是他们坚定的崇拜者"
                }, {
                    sp: "",
                    name: "主角",
                    chapter: "你踏上了拜访魔吕布和魔貂蝉的旅途"
                }, {
                    sp: "",
                    name: "主角",
                    chapter: "突然间，陷入一片迷雾"
                }]
            }, c[p.NEED_CHAPTER_LEVEL1] = {
                chapters: [{
                    sp: "diaochan",
                    name: "貂蝉",
                    chapter: "你竟然闯到了这里，真是少见的眼力侠"
                }, {
                    sp: "",
                    name: "主角",
                    chapter: "什么眼力侠？是你们把我困在这里的"
                }, {
                    sp: "lvbu",
                    name: "吕布",
                    chapter: "勇敢的少年啊，你不是要去找魔吕布和魔貂蝉吗？他们就在这片幻境的尽头。只有通过幻境的挑战，才能成为他们的伙伴。"
                }, {
                    sp: "lvbu",
                    name: "吕布",
                    chapter: "从此往后你遇到的幻境将越来越难以分辨，不过鉴于你是这么多年来第一个闯到这里的人，我们将给予你新的助力"
                }, {
                    sp: "lvbu",
                    name: "吕布",
                    chapter: "魔吕布额外考验突击！疯狂点击【赤兔马兵符】获得额外奖励！点击次数越多，奖励越多！"
                }, {
                    sp: "",
                    name: "主角",
                    chapter: "有没有点爆了直接破局的那种可能……"
                }, {
                    sp: "lvbu",
                    name: "吕布",
                    chapter: "……我直接判你赢算了"
                }]
            }, c[p.NEED_CHAPTER_LEVEL2] = {
                chapters: [{
                    sp: "",
                    name: "主角",
                    chapter: "你们，你们就是！魔吕布和魔貂蝉"
                }, {
                    sp: "lvbu",
                    name: "吕布",
                    chapter: "勇敢的少年啊，经过重重考验，走到这里！"
                }, {
                    sp: "diaochan",
                    name: "貂蝉",
                    chapter: "迷幻之境难辨真假，沉沦在美梦或者噩梦之中的人们最终向我交出ta宝贵的财富……"
                }, {
                    sp: "",
                    name: "主角",
                    chapter: "能不能快点，兵贵神速啊！"
                }, {
                    sp: "lvbu",
                    name: "吕布",
                    chapter: "不许打断貂蝉说话！"
                }, {
                    sp: "diaochan",
                    name: "貂蝉",
                    chapter: "……行走幻境之中，最重要的首先是把持本心，自己不被真真假假所迷惑，才能发挥迷幻之术的全部实力~这就是你必须通过的考验，现在我们认可了你的实力，这是送给你的奖励"
                }, {
                    sp: "",
                    name: "主角",
                    chapter: "哈哈哈哈，我们三个真是太强了！"
                }, {
                    sp: "diaochan",
                    name: "貂蝉",
                    chapter: "……"
                }, {
                    sp: "lvbu",
                    name: "吕布",
                    chapter: "……"
                }, {
                    sp: "diaochan",
                    name: "貂蝉",
                    chapter: "快去领取你的奖励吧！"
                }]
            }, c));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CommonDlg.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./uiManager.ts"], (
    function (n) {
        var i, t, e, o, r, l, a, c, s, u;
        return {
            setters: [function (n) {
                i = n.applyDecoratedDescriptor, t = n.inheritsLoose, e = n.initializerDefineProperty, o =
                    n.assertThisInitialized
            }, function (n) {
                r = n.cclegacy, l = n._decorator, a = n.Label, c = n.Sprite, s = n.Component
            }, function (n) {
                u = n.uiManager
            }],
            execute: function () {
                var h, f, p, b, C, m, g, d, v;
                r._RF.push({}, "59b73ab7JpHUa843zfqfVVW", "CommonDlg", void 0);
                var y = l.ccclass,
                    D = l.property;
                n("CommonDlg", (h = y("CommonDlg"), f = D(a), p = D(c), b = D(c), h((g = i((m = function (n) {
                    function i() {
                        for (var i, t = arguments.length, r = new Array(t), l =
                                0; l < t; l++) r[l] = arguments[l];
                        return i = n.call.apply(n, [this].concat(r)) || this, e(
                                i, "lbTips", g, o(i)), e(i, "btnCancel", d, o(i)),
                            e(i, "btnConfirm", v, o(i)), i.content = "", i.param =
                            null, i.sucCb = null, i.failCb = null, i.isShowCancel = !
                            0, i
                    }
                    t(i, n);
                    var r = i.prototype;
                    return r.start = function () {}, r.update = function (n) {},
                        r.show = function (n, i, t, e, o) {
                            this.lbTips.string = n, this.content = n, this.param =
                                i, this.isShowCancel = t, this.sucCb = e, this.failCb =
                                o, this.isShowCancel ? this.btnCancel.node.active = !
                                0 : this.btnCancel.node.active = !1
                        }, r.hide = function () {
                            this.content = "", this.param = null, this.sucCb =
                                null, this.failCb = null
                        }, r.onBtnCancelClick = function () {
                            var n = this;
                            this.failCb && this.failCb(this.param), u.instance.hideDialog(
                                "common/CommonDlg", (function () {
                                    return n.hide()
                                }))
                        }, r.onBtnConfirmClick = function () {
                            var n = this;
                            this.sucCb && this.sucCb(this.param), u.instance.hideDialog(
                                "common/CommonDlg", (function () {
                                    return n.hide()
                                }))
                        }, i
                }(s)).prototype, "lbTips", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), d = i(m.prototype, "btnCancel", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), v = i(m.prototype, "btnConfirm", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), C = m)) || C));
                r._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/configuration.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var a, s, i, n, e;
    return {
        setters: [function (t) {
            a = t.createClass
        }, function (t) {
            s = t.cclegacy, i = t._decorator, n = t.sys, e = t.log
        }],
        execute: function () {
            var o, r;
            s._RF.push({}, "9715ehZfwRJLriZJ04FJzzV", "configuration", void 0);
            var c = i.ccclass;
            t("configuration", c("configuration")(((r = function () {
                function t() {
                    this.jsonData = null, this.path = null, this.KEY_CONFIG =
                        "CarConfig", this.markSave = !1, this.saveTimer = -1
                }
                var s = t.prototype;
                return s.start = function () {
                    var t, a = this;
                    (this.jsonData = {
                        userId: ""
                    }, this.path = this.getConfigPath(), n.isNative) ? t = jsb.fileUtils
                        .getValueMapFromFile(this.path)[this.KEY_CONFIG]: t = n
                        .localStorage.getItem(this.KEY_CONFIG);
                    if (t && t.length) {
                        t.startsWith("@") && (t = t.substring(1));
                        try {
                            var s = JSON.parse(t);
                            this.jsonData = s
                        } catch (t) {}
                    }
                    this.saveTimer = setInterval((function () {
                        a.scheduleSave()
                    }), 500)
                }, s.setConfigDataWithoutSave = function (t, a) {
                    var s = this.jsonData.userId;
                    this.jsonData[s] ? this.jsonData[s][t] = a : console.error(
                        "no account can not save")
                }, s.setConfigData = function (t, a) {
                    this.setConfigDataWithoutSave(t, a), this.markSave = !0
                }, s.getConfigData = function (t) {
                    var a = this.jsonData.userId;
                    if (this.jsonData[a]) {
                        var s = this.jsonData[a][t];
                        return s || ""
                    }
                    return e("no account can not load"), ""
                }, s.setGlobalData = function (t, a) {
                    this.jsonData[t] = a, this.save()
                }, s.getGlobalData = function (t) {
                    return this.jsonData[t]
                }, s.setUserId = function (t) {
                    this.jsonData.userId = t, this.jsonData[t] || (this.jsonData[
                        t] = {}), this.save()
                }, s.getUserId = function () {
                    return this.jsonData.userId
                }, s.scheduleSave = function () {
                    this.markSave && this.save()
                }, s.markModified = function () {
                    this.markSave = !0
                }, s.save = function () {
                    var t = JSON.stringify(this.jsonData);
                    if (this.markSave = !1, n.isNative) {
                        var a = {};
                        a[this.KEY_CONFIG] = t, jsb.fileUtils.writeToFile(a,
                            this.path)
                    } else {
                        n.localStorage.setItem(this.KEY_CONFIG, t)
                    }
                }, s.getConfigPath = function () {
                    var t = n.platform,
                        a = "";
                    return t === n.OS.WINDOWS ? a = "src/conf" : t === n.OS.LINUX ?
                        a = "./conf" : n.isNative ? (a = jsb.fileUtils.getWritablePath(),
                            a += "conf") : a = "src/conf", a
                }, s.parseUrl = function (t) {
                    if (t && !("string" == typeof t && t.length <= 0)) {
                        var a = {};
                        if ("string" == typeof t)(t = t.split("?")[1]).split(
                            "&").forEach((function (t) {
                            var s = t.indexOf("=");
                            if (-1 !== s) {
                                var i = t.substring(0, s);
                                a[i] = t.substring(s + 1)
                            }
                        }));
                        else a = t;
                        a.action && this.setGlobalData("urlParams", a), a.source &&
                            this.setGlobalData("source", a.source), a.adchannelid &&
                            this.setGlobalData("adchannelid", a.adchannelid)
                    }
                }, t.generateGuestAccount = function () {
                    return "" + Date.now() + 10
                }, a(t, null, [{
                    key: "instance",
                    get: function () {
                        return this._instance || (this._instance =
                                new t, this._instance.start()),
                            this._instance
                    }
                }]), t
            }())._instance = void 0, o = r)) || o);
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/constant.ts", ["cc"], (function (i) {
    var I;
    return {
        setters: [function (i) {
            I = i.cclegacy
        }],
        execute: function () {
            I._RF.push({}, "172a0kEJWROvJ8wc5G+Tae+", "constant", void 0);
            var N = i("constant", (function () {}));
            N.domain = "https://olactfinddiff.sanguosha.com", N.gameServer = "ws://mwx.sanguosha.cn/ws",
                N.token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtd3guc2FuZ3Vvc2hhLmNuIiwiYXVkIjoibXd4LnNhbmd1b3NoYS5jbSIsImp0aSI6IjV0Nnk5NDAwNDUzIiwiaWF0IjoxNzIxOTc1NzI5LjY2MDA2MywiZXhwIjoxNzI5MTc1NzI5LjY2MDA2MywidXNlciI6eyJpZCI6MiwiZm9ydW1Vc2VySWQiOjEsImFjY291bnQiOiIxNTg1ODIzOTg0OCIsIm5pY2tuYW1lIjoiRmlvbkNoZXVuZyIsImRldmljZUlkIjoiOGVjOWE3NzNiNTMzY2ViNmQ5ZjYzMDE4MTQxNzBmNmMiLCJsaWZlIjozLCJpcCI6IjEyNy4wLjAuMSIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTE1IDE1OjMwOjE1In19.kRrNNcrOE7ZMi2FvNzJQKbXjloXdngw-NE03tvC5brI",
                N.GAME_NAME = "眼力大考验", N.BIND_URL = "https://wx.sanguosha.com/mall/index.html#/bind", N
                .debug_log = !0, N.isOffline = !1, N.isTest = !1, N.IS_AUTO_MARK = !0, N.NEED_CHAPTER_LEVEL1 =
                25, N.NEED_CHAPTER_LEVEL2 = 50, N.SBP_USER_INFO = "SBP_USER_INFO_SF", N.AUDIO_SOUND = {
                    BACKGROUND: "background",
                    ERROR: "error",
                    CORRECT: "right"
                }, I._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CreateMark.ts", ["cc"], (function (r) {
    var e, i, n, t, a, o, c;
    return {
        setters: [function (r) {
            e = r.cclegacy, i = r.resources, n = r.Prefab, t = r.instantiate, a = r.UIOpacity, o =
                r.tween, c = r.Node
        }],
        execute: function () {
            e._RF.push({}, "de26dlDZPxBKrz9DRYL59dx", "CreateMark", void 0);
            var l = r("MarkManager", function () {
                function r() {}
                return r.initialize = function (r) {
                    var e = this;
                    if (this.isInitialized) null == r || r(!0);
                    else {
                        var t = 0,
                            a = function () {
                                ++t >= 2 && (e.isInitialized = !0, null == r || r(null !==
                                    e.correctMarkPrefab && null !== e.errorMarkPrefab
                                ))
                            };
                        i.load(this.CORRECT_MARK_PATH, n, (function (r, i) {
                            if (r) return console.error("加载正确标记预制体失败: " + r),
                                void a();
                            e.correctMarkPrefab = i, a()
                        })), i.load(this.ERROR_MARK_PATH, n, (function (r, i) {
                            if (r) return console.error("加载错误标记预制体失败: " + r),
                                void a();
                            e.errorMarkPrefab = i, a()
                        }))
                    }
                }, r.isReady = function () {
                    return this.isInitialized && null !== this.correctMarkPrefab && null !==
                        this.errorMarkPrefab
                }, r.addCorrectMark = function (r, e) {
                    if (!this.isReady() && !e) return console.warn(
                        "MarkManager 尚未完成初始化，请先调用 initialize() 方法"), null;
                    var i = e || this.correctMarkPrefab;
                    if (!i || !r) return console.warn("无法添加正确标记：预制体或目标节点无效"), null;
                    for (var n = 0; n < r.children.length; n++) {
                        var a = r.children[n];
                        if ("correctMark" === a.name) return console.log(
                            "目标节点已存在正确标记，不再重复创建"), a
                    }
                    var o = t(i);
                    return o.name = "correctMark", r.addChild(o), o.setPosition(0, 0, 1),
                        this.addClickEvent(o, (function (r) {
                            console.log("点击了正确标记"), r.propagationStopped = !0
                        })), o
                }, r.addErrorMark = function (r, e, i, n) {
                    if (void 0 === i && (i = 1.5), void 0 === n && (n = .5), !this.isReady() &&
                        !e) return console.warn("MarkManager 尚未完成初始化，请先调用 initialize() 方法"),
                        null;
                    var c = e || this.errorMarkPrefab;
                    if (!c || !r) return console.warn("无法添加错误标记：预制体或目标节点无效"), null;
                    var l = t(c);
                    return l.name = "errorMark", r.addChild(l), l.setPosition(0, 0, 1),
                        this.addClickEvent(l, (function (r) {
                            console.log("点击了错误标记"), r.propagationStopped = !0
                        })), setTimeout((function () {
                            if (l.isValid) {
                                var r = l.getComponent(a);
                                r || (r = l.addComponent(a)), setTimeout((function () {
                                    l.isValid && o(r).to(n, {
                                        opacity: 0
                                    }).call((function () {
                                        l.isValid && l.removeFromParent()
                                    })).start()
                                }), 1e3 * i)
                            }
                        }), 0), l
                }, r.addCorrectMarkAtPosition = function (r, e, i) {
                    if (!this.isReady() && !i) return console.warn(
                        "MarkManager 尚未完成初始化，请先调用 initialize() 方法"), null;
                    var n = i || this.correctMarkPrefab;
                    if (!n || !r) return console.warn("无法添加正确标记：预制体或父节点无效"), null;
                    var a = t(n);
                    return a.name = "correctMark", r.addChild(a), a.setPosition(e.x, e.y,
                        void 0 !== e.z ? e.z : 1), this.addClickEvent(a, (function (r) {
                        console.log("点击了正确标记"), r.propagationStopped = !0
                    })), a
                }, r.addErrorMarkAtPosition = function (r, e, i, n, c) {
                    if (void 0 === n && (n = 1.5), void 0 === c && (c = .5), !this.isReady() &&
                        !i) return console.warn("MarkManager 尚未完成初始化，请先调用 initialize() 方法"),
                        null;
                    var l = i || this.errorMarkPrefab;
                    if (!l || !r) return console.warn("无法添加错误标记：预制体或父节点无效"), null;
                    var s = t(l);
                    return s.name = "errorMark", r.addChild(s), s.setPosition(e.x, e.y,
                        void 0 !== e.z ? e.z : 1), this.addClickEvent(s, (function (r) {
                        console.log("点击了错误标记"), r.propagationStopped = !0
                    })), setTimeout((function () {
                        if (s.isValid) {
                            var r = s.getComponent(a);
                            r || (r = s.addComponent(a)), setTimeout((function () {
                                s.isValid && o(r).to(c, {
                                    opacity: 0
                                }).call((function () {
                                    s.isValid && s.removeFromParent()
                                })).start()
                            }), 1e3 * n)
                        }
                    }), 0), s
                }, r.addMarkAtPosition = function (r, e, i) {
                    return i ? this.addCorrectMarkAtPosition(r, e) : this.addErrorMarkAtPosition(
                        r, e)
                }, r.addClickEvent = function (r, e) {
                    r.on(c.EventType.TOUCH_END, e)
                }, r.release = function () {
                    this.correctMarkPrefab && (i.release(this.CORRECT_MARK_PATH), this.correctMarkPrefab =
                        null), this.errorMarkPrefab && (i.release(this.ERROR_MARK_PATH),
                        this.errorMarkPrefab = null), this.isInitialized = !1
                }, r.clearMarksInNode = function (r, e) {
                    if (void 0 === e && (e = ["correctMark", "errorMark"]), r && r.isValid) {
                        ! function r(i) {
                            e.includes(i.name) ? i.removeFromParent() : [].concat(i.children)
                                .forEach((function (e) {
                                    r(e)
                                }))
                        }(r)
                    }
                }, r.clearCorrectMarks = function (r) {
                    this.clearMarksInNode(r, ["correctMark"])
                }, r
            }());
            l.correctMarkPrefab = null, l.errorMarkPrefab = null, l.isInitialized = !1, l.CORRECT_MARK_PATH =
                "prefab/game/correctMark", l.ERROR_MARK_PATH = "prefab/game/errorMark", e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (
    function (t) {
        var e, o, i, n, s, l, r, a, g, h, p, c, C, d, m, u, L;
        return {
            setters: [function (t) {
                e = t.applyDecoratedDescriptor, o = t.inheritsLoose, i = t.initializerDefineProperty, n =
                    t.assertThisInitialized
            }, function (t) {
                s = t.cclegacy, l = t._decorator, r = t.Node, a = t.Color, g = t.Canvas, h = t.UITransform,
                    p = t.instantiate, c = t.Label, C = t.RichText, d = t.Toggle, m = t.Button, u = t.director,
                    L = t.Component
            }],
            execute: function () {
                var f, M, b, v, T, S, x, E, I;
                s._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", void 0);
                var A = l.ccclass,
                    y = l.property;
                t("DebugViewRuntimeControl", (f = A("internal.DebugViewRuntimeControl"), M = y(r), b = y(r),
                    v = y(r), f((x = e((S = function (t) {
                        function e() {
                            for (var e, o = arguments.length, s = new Array(o), l =
                                    0; l < o; l++) s[l] = arguments[l];
                            return e = t.call.apply(t, [this].concat(s)) || this, i(
                                    e, "compositeModeToggle", x, n(e)), i(e,
                                    "singleModeToggle", E, n(e)), i(e,
                                    "EnableAllCompositeModeButton", I, n(e)), e._single =
                                0, e.strSingle = ["No Single Debug", "Vertex Color",
                                    "Vertex Normal", "Vertex Tangent",
                                    "World Position", "Vertex Mirror", "Face Side",
                                    "UV0", "UV1", "UV Lightmap", "Project Depth",
                                    "Linear Depth", "Fragment Normal",
                                    "Fragment Tangent", "Fragment Binormal",
                                    "Base Color", "Diffuse Color", "Specular Color",
                                    "Transparency", "Metallic", "Roughness",
                                    "Specular Intensity", "IOR", "Direct Diffuse",
                                    "Direct Specular", "Direct All", "Env Diffuse",
                                    "Env Specular", "Env All", "Emissive",
                                    "Light Map", "Shadow", "AO", "Fresnel",
                                    "Direct Transmit Diffuse",
                                    "Direct Transmit Specular",
                                    "Env Transmit Diffuse", "Env Transmit Specular",
                                    "Transmit All", "Direct Internal Specular",
                                    "Env Internal Specular", "Internal All", "Fog"],
                                e.strComposite = ["Direct Diffuse",
                                    "Direct Specular", "Env Diffuse",
                                    "Env Specular", "Emissive", "Light Map",
                                    "Shadow", "AO", "Normal Map", "Fog",
                                    "Tone Mapping", "Gamma Correction", "Fresnel",
                                    "Transmit Diffuse", "Transmit Specular",
                                    "Internal Specular", "TT"], e.strMisc = [
                                    "CSM Layer Coloration", "Lighting With Albedo"],
                                e.compositeModeToggleList = [], e.singleModeToggleList = [],
                                e.miscModeToggleList = [], e.textComponentList = [],
                                e.labelComponentList = [], e.textContentList = [],
                                e.hideButtonLabel = void 0, e._currentColorIndex =
                                0, e.strColor = ["<color=#ffffff>",
                                    "<color=#000000>", "<color=#ff0000>",
                                    "<color=#00ff00>", "<color=#0000ff>"], e.color = [
                                    a.WHITE, a.BLACK, a.RED, a.GREEN, a.BLUE], e
                        }
                        o(e, t);
                        var s = e.prototype;
                        return s.start = function () {
                                if (this.node.parent.getComponent(g)) {
                                    var t = this.node.parent.getComponent(h),
                                        e = .5 * t.width,
                                        o = .5 * t.height,
                                        i = .1 * e - e,
                                        n = o - .1 * o,
                                        s = this.node.getChildByName("MiscMode"),
                                        l = p(s);
                                    l.parent = this.node, l.name = "Buttons";
                                    var r = p(s);
                                    r.parent = this.node, r.name = "Titles";
                                    for (var u = 0; u < 2; u++) {
                                        var L = p(this.EnableAllCompositeModeButton
                                            .getChildByName("Label"));
                                        L.setPosition(i + (u > 0 ? 450 : 150), n, 0),
                                            L.setScale(.75, .75, .75), L.parent = r;
                                        var f = L.getComponent(c);
                                        f.string = u ?
                                            "----------Composite Mode----------" :
                                            "----------Single Mode----------", f.color =
                                            a.WHITE, f.overflow = 0, this.labelComponentList[
                                                this.labelComponentList.length] = f
                                    }
                                    n -= 20;
                                    for (var M = 0, b = 0; b < this.strSingle.length; b++,
                                        M++) {
                                        b === this.strSingle.length >> 1 && (i +=
                                            200, M = 0);
                                        var v = b ? p(this.singleModeToggle) : this
                                            .singleModeToggle;
                                        v.setPosition(i, n - 20 * M, 0), v.setScale(
                                                .5, .5, .5), v.parent = this.singleModeToggle
                                            .parent;
                                        var T = v.getComponentInChildren(C);
                                        T.string = this.strSingle[b], this.textComponentList[
                                                this.textComponentList.length] = T,
                                            this.textContentList[this.textContentList
                                                .length] = T.string, v.on(d.EventType
                                                .TOGGLE, this.toggleSingleMode,
                                                this), this.singleModeToggleList[b] =
                                            v
                                    }
                                    i += 200, this.EnableAllCompositeModeButton.setPosition(
                                            i + 15, n, 0), this.EnableAllCompositeModeButton
                                        .setScale(.5, .5, .5), this.EnableAllCompositeModeButton
                                        .on(m.EventType.CLICK, this.enableAllCompositeMode,
                                            this), this.EnableAllCompositeModeButton
                                        .parent = l;
                                    var S = this.EnableAllCompositeModeButton.getComponentInChildren(
                                        c);
                                    this.labelComponentList[this.labelComponentList
                                        .length] = S;
                                    var x = p(this.EnableAllCompositeModeButton);
                                    x.setPosition(i + 90, n, 0), x.setScale(.5, .5,
                                        .5), x.on(m.EventType.CLICK, this.changeTextColor,
                                        this), x.parent = l, (S = x.getComponentInChildren(
                                        c)).string = "TextColor", this.labelComponentList[
                                        this.labelComponentList.length] = S;
                                    var E = p(this.EnableAllCompositeModeButton);
                                    E.setPosition(i + 200, n, 0), E.setScale(.5, .5,
                                            .5), E.on(m.EventType.CLICK, this.hideUI,
                                            this), E.parent = this.node.parent, (S =
                                            E.getComponentInChildren(c)).string =
                                        "Hide UI", this.labelComponentList[this.labelComponentList
                                            .length] = S, this.hideButtonLabel = S,
                                        n -= 40;
                                    for (var I = 0; I < this.strMisc.length; I++) {
                                        var A = p(this.compositeModeToggle);
                                        A.setPosition(i, n - 20 * I, 0), A.setScale(
                                            .5, .5, .5), A.parent = s;
                                        var y = A.getComponentInChildren(C);
                                        y.string = this.strMisc[I], this.textComponentList[
                                                this.textComponentList.length] = y,
                                            this.textContentList[this.textContentList
                                                .length] = y.string, A.getComponent(
                                                d).isChecked = !!I, A.on(d.EventType
                                                .TOGGLE, I ? this.toggleLightingWithAlbedo :
                                                this.toggleCSMColoration, this),
                                            this.miscModeToggleList[I] = A
                                    }
                                    n -= 150;
                                    for (var D = 0; D < this.strComposite.length; D++) {
                                        var B = D ? p(this.compositeModeToggle) :
                                            this.compositeModeToggle;
                                        B.setPosition(i, n - 20 * D, 0), B.setScale(
                                                .5, .5, .5), B.parent = this.compositeModeToggle
                                            .parent;
                                        var w = B.getComponentInChildren(C);
                                        w.string = this.strComposite[D], this.textComponentList[
                                                this.textComponentList.length] = w,
                                            this.textContentList[this.textContentList
                                                .length] = w.string, B.on(d.EventType
                                                .TOGGLE, this.toggleCompositeMode,
                                                this), this.compositeModeToggleList[
                                                D] = B
                                    }
                                } else console.error(
                                    "debug-view-runtime-control should be child of Canvas"
                                )
                            }, s.isTextMatched = function (t, e) {
                                var o = new String(t),
                                    i = o.search(">");
                                return -1 === i ? t === e : (o = (o = o.substr(i +
                                    1)).substr(0, o.search("<"))) === e
                            }, s.toggleSingleMode = function (t) {
                                for (var e = u.root.debugView, o = t.getComponentInChildren(
                                        C), i = 0; i < this.strSingle.length; i++)
                                    this.isTextMatched(o.string, this.strSingle[i]) &&
                                    (e.singleMode = i)
                            }, s.toggleCompositeMode = function (t) {
                                for (var e = u.root.debugView, o = t.getComponentInChildren(
                                        C), i = 0; i < this.strComposite.length; i++)
                                    this.isTextMatched(o.string, this.strComposite[
                                        i]) && e.enableCompositeMode(i, t.isChecked)
                            }, s.toggleLightingWithAlbedo = function (t) {
                                u.root.debugView.lightingWithAlbedo = t.isChecked
                            }, s.toggleCSMColoration = function (t) {
                                u.root.debugView.csmLayerColoration = t.isChecked
                            }, s.enableAllCompositeMode = function (t) {
                                var e = u.root.debugView;
                                e.enableAllCompositeMode(!0);
                                for (var o = 0; o < this.compositeModeToggleList.length; o++) {
                                    this.compositeModeToggleList[o].getComponent(d)
                                        .isChecked = !0
                                }
                                var i = this.miscModeToggleList[0].getComponent(d);
                                i.isChecked = !1, e.csmLayerColoration = !1, (i =
                                        this.miscModeToggleList[1].getComponent(d))
                                    .isChecked = !0, e.lightingWithAlbedo = !0
                            }, s.hideUI = function (t) {
                                var e = this.node.getChildByName("Titles"),
                                    o = !e.active;
                                this.singleModeToggleList[0].parent.active = o,
                                    this.miscModeToggleList[0].parent.active = o,
                                    this.compositeModeToggleList[0].parent.active =
                                    o, this.EnableAllCompositeModeButton.parent.active =
                                    o, e.active = o, this.hideButtonLabel.string =
                                    o ? "Hide UI" : "Show UI"
                            }, s.changeTextColor = function (t) {
                                this._currentColorIndex++, this._currentColorIndex >=
                                    this.strColor.length && (this._currentColorIndex =
                                        0);
                                for (var e = 0; e < this.textComponentList.length; e++)
                                    this.textComponentList[e].string = this.strColor[
                                        this._currentColorIndex] + this.textContentList[
                                        e] + "</color>";
                                for (var o = 0; o < this.labelComponentList.length; o++)
                                    this.labelComponentList[o].color = this.color[
                                        this._currentColorIndex]
                            }, s.onLoad = function () {}, s.update = function (t) {},
                            e
                    }(L)).prototype, "compositeModeToggle", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null
                        }
                    }), E = e(S.prototype, "singleModeToggle", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null
                        }
                    }), I = e(S.prototype, "EnableAllCompositeModeButton", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null
                        }
                    }), T = S)) || T));
                s._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/EnumCmdName.ts", ["cc"], (function (e) {
    var r;
    return {
        setters: [function (e) {
            r = e.cclegacy
        }],
        execute: function () {
            r._RF.push({}, "54b89V+9gpGrZddOExnQSXA", "EnumCmdName", void 0);
            var t = e("EnumCmdName", (function () {}));
            t.LOGIN = "user/login", t.GET_USER_INFO = "/user/info", t.LEVEL_LIST = "/game/list", t.LEVEL_START =
                "/game/start", t.LEVEL_SUBMIT = "/game/submit", t.LEVEL_SUBMIT_REWARD = "/game/reward",
                t.REWARD_LIST = "/user/gift", t.REWARD = "/user/gift-draw", t.TASK_LIST = "/user/task",
                t.TASK_DRAW = "/user/share", r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/EventEmitter.ts", ["cc"], (function (t) {
    var n;
    return {
        setters: [function (t) {
            n = t.cclegacy
        }],
        execute: function () {
            n._RF.push({}, "fe68fvNfDlC0rsXyst5iasz", "EventEmitter", void 0);
            t("default", function () {
                function t() {
                    this.all = new Map
                }
                var n = t.prototype;
                return n.on = function (t, n) {
                    var e = this.all.get(t);
                    e ? e.push(n) : this.all.set(t, [n])
                }, n.once = function (t, n) {
                    var e = this;
                    this.on(t, (function i(s) {
                        e.off(t, i), n(s)
                    }))
                }, n.off = function (t, n) {
                    var e = this.all.get(t);
                    e && n && (e.splice(e.indexOf(n) >>> 0, 1), e.length > 0 || this.all.delete(
                        t))
                }, n.emit = function (t, n) {
                    var e = this.all.get(t);
                    e && e.slice().map((function (t) {
                        t(n)
                    }))
                }, t
            }());
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/EventHandler.ts", ["cc"], (function (t) {
    var e, n, c;
    return {
        setters: [function (t) {
            e = t.cclegacy, n = t._decorator, c = t.EventTarget
        }],
        execute: function () {
            var r, i;
            e._RF.push({}, "14ad3Z94FlOy58ihHOa6Gyo", "EventHandler", void 0);
            var a = n.ccclass;
            n.property, t("EventHandler", a("EventHandler")(((i = function () {
                function t() {}
                return t.on = function (t, e, n) {
                    this.eventDispatcher.on(t, e, n)
                }, t.off = function (t, e, n) {
                    this.eventDispatcher.off(t, e, n)
                }, t.dispatch = function (t, e) {
                    this.eventDispatcher.emit(t, e)
                }, t
            }()).eventDispatcher = new c, r = i)) || r);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/fail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./uiManager.ts",
    "./page.ts", "./EventHandler.ts", "./UserManager.ts", "./resultRandom.ts", "./resourceUtil.ts"], (function (
    n) {
    var t, e, i, a, o, r, l, s, c, u, h, f, g, p, b, m;
    return {
        setters: [function (n) {
            t = n.applyDecoratedDescriptor, e = n.inheritsLoose, i = n.initializerDefineProperty, a =
                n.assertThisInitialized
        }, function (n) {
            o = n.cclegacy, r = n._decorator, l = n.Label, s = n.Node, c = n.Sprite, u = n.Component
        }, function (n) {
            h = n.uiManager
        }, function (n) {
            f = n.PagePath
        }, function (n) {
            g = n.EventHandler
        }, function (n) {
            p = n.UserManager
        }, function (n) {
            b = n.resultRandom
        }, function (n) {
            m = n.resourceUtil
        }],
        execute: function () {
            var d, B, v, y, S, k, A, w, N, D, z, M, F;
            o._RF.push({}, "67004hc5EdLk51yo6izXCHw", "fail", void 0);
            var L = r.ccclass,
                R = r.property;
            n("fail", (d = L("fail"), B = R(l), v = R(l), y = R(s), S = R(s), k = R(s), d((N = t((w =
                function (n) {
                    function t() {
                        for (var t, e = arguments.length, o = new Array(e), r =
                                0; r < e; r++) o[r] = arguments[r];
                        return t = n.call.apply(n, [this].concat(o)) || this, i(
                                t, "message", N, a(t)), i(t, "shareNum", D, a(t)),
                            i(t, "btnBack", z, a(t)), i(t, "btnAgain", M, a(t)),
                            i(t, "btnShare", F, a(t)), t.level = void 0, t
                    }
                    e(t, n);
                    var o = t.prototype;
                    return o.onDestroy = function () {
                        this.btnBack.off("click", this.onBtnBack, this),
                            this.btnAgain.off("click", this.onBtnAgain,
                                this), this.btnShare.off("click", this.onBtnShare,
                                this)
                    }, o.start = function () {
                        this.btnBack.on("click", this.onBtnBack, this),
                            this.btnAgain.on("click", this.onBtnAgain, this),
                            this.btnShare.on("click", this.onBtnShare, this)
                    }, o.show = function (n) {
                        console.log("fail show"), this.level = n.level;
                        var t = b.getResult(1),
                            e = t.randomBg,
                            i = t.tip,
                            a = this.node.getChildByName("dialog").getComponent(
                                c);
                        m.setSpriteFrame(e, a, (function () {})), this.message
                            .string = i, this.updateShareNum()
                    }, o.updateShareNum = function () {
                        this.shareNum.string = "分享得1体力(每日" + p.instance.user
                            .shareNum + "/" + p.instance.user.totalShareNum +
                            "次)"
                    }, o.onBtnBack = function () {
                        h.instance.hideDialog(f.Fail), h.instance.hideDialog(
                            f.Game), h.instance.showDialog(f.Level)
                    }, o.onBtnAgain = function () {
                        console.log("onBtnAgain"), h.instance.hideDialog(f.Fail),
                            g.dispatch("GAME_AGAIN", {
                                level: this.level
                            })
                    }, o.onBtnShare = function () {
                        var n = this;
                        console.log("onBtnShare"), h.instance.hideDialog(f.Win),
                            h.instance.showDialog(f.Share, [{
                                level: this.level
                            }], (function () {
                                p.instance.shareGame().then((
                                    function () {
                                        n.updateShareNum()
                                    }))
                            }))
                    }, t
                }(u)).prototype, "message", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), D = t(w.prototype, "shareNum", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), z = t(w.prototype, "btnBack", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), M = t(w.prototype, "btnAgain", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), F = t(w.prototype, "btnShare", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), A = w)) || A));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/gameEnum.ts", ["cc"], (function (c) {
    var e;
    return {
        setters: [function (c) {
            e = c.cclegacy
        }],
        execute: function () {
            e._RF.push({}, "9d6c2s6/TJHf7gQc4icZpRy", "gameEnum", void 0);
            c("LoginEnum", function (c) {
                return c[c.default = 0] = "default", c[c.wx = 1] = "wx", c[c.microApp = 2] =
                    "microApp", c
            }({}));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/gameManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
    var t, i, n, r, o, a, s, l, u, c, f, h, m, d, g, v, p, L, y, C;
    return {
        setters: [function (e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, r =
                e.assertThisInitialized, o = e.createForOfIteratorHelperLoose
        }, function (e) {
            a = e.cclegacy, s = e._decorator, l = e.Sprite, u = e.Label, c = e.Prefab, f = e.Node,
                h = e.JsonAsset, m = e.UITransform, d = e.Vec2, g = e.instantiate, v = e.Color, p =
                e.resources, L = e.SpriteFrame, y = e.v3, C = e.Component
        }],
        execute: function () {
            var b, x, T, D, I, w, S, k, F, O, P, R, A, G, E, U, N;
            a._RF.push({}, "9bfc9yhRkZF2Yn0XjlkwM9j", "gameManager", void 0);
            var z = s.ccclass,
                J = s.property;
            e("GameManager", (b = z("GameManager"), x = J(l), T = J(l), D = J(u), I = J(u), w = J(c), S =
                J(f), k = J(h), b((P = t((O = function (e) {
                    function t() {
                        for (var t, i = arguments.length, o = new Array(i), a =
                                0; a < i; a++) o[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(o)) || this, n(
                                t, "imageLeftSprite", P, r(t)), n(t,
                                "imageRightSprite", R, r(t)), n(t, "timerLabel",
                                A, r(t)), n(t, "foundCountLabel", G, r(t)), n(t,
                                "markerPrefab", E, r(t)), n(t,
                                "differenceMarkersLayer", U, r(t)), n(t,
                                "levelsJsonAsset", N, r(t)), t.allLevelsData = [],
                            t.currentLevelData = null, t.currentLevelIndex = 0,
                            t.differencesRuntimeData = [], t.foundCount = 0, t.totalDifferences =
                            0, t.timeLeft = 0, t.isGameOver = !1, t.timerId = -
                            1, t
                    }
                    i(t, e);
                    var a = t.prototype;
                    return a.onLoad = function () {
                        var e, t;
                        this.levelsJsonAsset && this.levelsJsonAsset.json ?
                            (this.allLevelsData = this.levelsJsonAsset.json,
                                null == (e = this.imageLeftSprite.node.getComponent(
                                    m)) || e.setAnchorPoint(.5, .5), null ==
                                (t = this.imageRightSprite.node.getComponent(
                                    m)) || t.setAnchorPoint(.5, .5), this.loadLevel(
                                    0)) : console.error(
                                "Levels JSON asset is not loaded or is empty!"
                            )
                    }, a.markAllDifferencesForTest = function () {
                        console.log("标记所有差异点用于测试");
                        for (var e, t = o(this.differencesRuntimeData); !(e =
                                t()).done;) {
                            var i = e.value,
                                n = this.convertFromTopLeftToCenter(new d(i
                                    .x, i.y), this.imageLeftSprite.node);
                            console.log("差异点 " + i.id + ": 左上角(" + i.x +
                                ", " + i.y + ") -> 中心点(" + n.x.toFixed(
                                    2) + ", " + n.y.toFixed(2) + ")");
                            var r = g(this.markerPrefab);
                            this.imageLeftSprite.node.addChild(r), r.setPosition(
                                n.x, n.y);
                            var a = r.getComponent(l);
                            a && (a.color = new v(255, 0, 0, 128));
                            var s = r.getComponent(m);
                            s && (s.width = 2 * i.radius, s.height = 2 * i.radius)
                        }
                    }, a.convertFromTopLeftToCenter = function (e, t) {
                        var i = t.getComponent(m);
                        if (!i) return e;
                        var n = i.width,
                            r = i.height,
                            o = e.x - n / 2,
                            a = r / 2 - e.y;
                        return console.log("转换坐标: 左上角(" + e.x + ", " + e.y +
                            ") -> 中心点(" + o + ", " + a + "), 宽度=" + n +
                            ", 高度=" + r), new d(o, a)
                    }, a.convertFromCenterToTopLeft = function (e, t) {
                        var i = t.getComponent(m);
                        if (!i) return e;
                        var n = i.width,
                            r = i.height,
                            o = e.x + n / 2,
                            a = r / 2 - e.y;
                        return new d(o, a)
                    }, a.loadLevel = function (e) {
                        if (e < 0 || e >= this.allLevelsData.length) return console
                            .log(
                                "All levels completed or invalid level index!"
                            ), void this.showGameOverPopup(!0);
                        this.currentLevelIndex = e, this.currentLevelData =
                            this.allLevelsData[this.currentLevelIndex],
                            console.log(this.currentLevelData), this.isGameOver = !
                            1, this.foundCount = 0, this.timeLeft = this.currentLevelData
                            .timeLimit, this.totalDifferences = this.currentLevelData
                            .differences.length, this.differencesRuntimeData =
                            JSON.parse(JSON.stringify(this.currentLevelData
                                .differences)), this.differencesRuntimeData
                            .forEach((function (e) {
                                return e.found = !1
                            })), this.imageLeftSprite.node.removeAllChildren(),
                            this.imageRightSprite.node.removeAllChildren(),
                            this.loadImage(this.currentLevelData.imageA,
                                this.imageLeftSprite), this.loadImage(this.currentLevelData
                                .imageB, this.imageRightSprite), this.updateUI(),
                            this.startTimer(), this.registerTouchEvents(),
                            this.markAllDifferencesForTest()
                    }, a.loadImage = function (e, t) {
                        p.load(e + "/spriteFrame", L, (function (i, n) {
                            i ? console.error(
                                "Failed to load image: " +
                                e, i) : t && t.isValid && (
                                t.spriteFrame = n)
                        }))
                    }, a.registerTouchEvents = function () {
                        this.imageLeftSprite.node.on(f.EventType.TOUCH_END,
                                this.onImageClick, this), this.imageRightSprite
                            .node.on(f.EventType.TOUCH_END, this.onImageClick,
                                this)
                    }, a.unregisterTouchEvents = function () {
                        this.imageLeftSprite.node.off(f.EventType.TOUCH_END,
                                this.onImageClick, this), this.imageRightSprite
                            .node.off(f.EventType.TOUCH_END, this.onImageClick,
                                this)
                    }, a.onImageClick = function (e) {
                        if (!this.isGameOver) {
                            var t = e.target,
                                i = t.getComponent(m);
                            if (i) {
                                var n = e.getUILocation();
                                console.log("点击UI坐标: (" + n.x + ", " + n.y +
                                    ")");
                                var r = i.convertToNodeSpaceAR(y(n.x, n.y,
                                        0)),
                                    a = new d(r.x, r.y);
                                console.log("点击节点中心坐标: (" + a.x.toFixed(2) +
                                    ", " + a.y.toFixed(2) + ")");
                                var s = a.x + i.width / 2,
                                    l = i.height / 2 - a.y;
                                console.log("对应左上角坐标: (" + s.toFixed(2) +
                                    ", " + l.toFixed(2) + ")");
                                for (var u, c = o(this.differencesRuntimeData); !
                                    (u = c()).done;) {
                                    var f = u.value;
                                    if (!f.found) {
                                        var h = this.convertFromTopLeftToCenter(
                                            new d(f.x, f.y), t);
                                        console.log("差异点 " + f.id +
                                            ": 左上角(" + f.x + ", " + f.y +
                                            ") -> 中心点(" + h.x + ", " +
                                            h.y + ")");
                                        var g = d.distance(a, h);
                                        if (console.log("点击与差异点" + f.id +
                                                "距离: " + g + ", 允许半径: " + f
                                                .radius), g <= f.radius)
                                            return console.log("找到差异点 " + f
                                                .id + "!"), void this.markDifference(
                                                f, t)
                                    }
                                }
                                console.log("未找到任何差异点")
                            }
                        }
                    }, a.markDifference = function (e, t) {
                        e.found = !0, this.foundCount++, this.updateUI();
                        var i = this.convertFromTopLeftToCenter(new d(e.x,
                                e.y), this.imageLeftSprite.node),
                            n = this.convertFromTopLeftToCenter(new d(e.x,
                                e.y), this.imageRightSprite.node),
                            r = g(this.markerPrefab);
                        this.imageLeftSprite.node.addChild(r), r.setPosition(
                            i.x, i.y);
                        var o = g(this.markerPrefab);
                        this.imageRightSprite.node.addChild(o), o.setPosition(
                                n.x, n.y), this.foundCount >= this.totalDifferences &&
                            this.gameOver(!0)
                    }, a.startTimer = function () {
                        var e = this;
                        this.stopTimer(), this.timerId = window.setInterval(
                            (function () {
                                e.isGameOver ? e.stopTimer() : (e.timeLeft--,
                                    e.updateUI(), e.timeLeft <=
                                    0 && e.gameOver(!1))
                            }), 1e3)
                    }, a.stopTimer = function () {
                        -1 !== this.timerId && (window.clearInterval(this.timerId),
                            this.timerId = -1)
                    }, a.updateUI = function () {
                        this.timerLabel.string = "时间: " + this.timeLeft,
                            this.foundCountLabel.string = "找到: " + this.foundCount +
                            " / " + this.totalDifferences
                    }, a.gameOver = function (e) {
                        this.isGameOver = !0, this.stopTimer(), console.log(
                            e ? "You Win!" : "Game Over!"), this.showGameOverPopup(
                            e)
                    }, a.showGameOverPopup = function (e) {
                        e ? console.log("胜利弹窗！") : console.log("失败弹窗！")
                    }, a.onRestartButtonClick = function () {
                        console.log("Restarting level:", this.currentLevelIndex),
                            this.loadLevel(this.currentLevelIndex)
                    }, a.onNextLevelButtonClick = function () {
                        console.log("Loading next level from:", this.currentLevelIndex),
                            this.loadLevel(this.currentLevelIndex + 1)
                    }, a.onPauseButtonClick = function () {
                        this.isGameOver || console.log(
                            "Game Paused (Implement Pause Popup)")
                    }, t
                }(C)).prototype, "imageLeftSprite", [x], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), R = t(O.prototype, "imageRightSprite", [T], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), A = t(O.prototype, "timerLabel", [D], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), G = t(O.prototype, "foundCountLabel", [I], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), E = t(O.prototype, "markerPrefab", [w], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), U = t(O.prototype, "differenceMarkersLayer", [S], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), N = t(O.prototype, "levelsJsonAsset", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), F = O)) || F));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameRoot.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./audioManager.ts"], (
    function (o) {
        var t, e, r, i, n, a, c, u, s, l;
        return {
            setters: [function (o) {
                t = o.applyDecoratedDescriptor, e = o.inheritsLoose, r = o.initializerDefineProperty, i =
                    o.assertThisInitialized
            }, function (o) {
                n = o.cclegacy, a = o._decorator, c = o.AudioSource, u = o.director, s = o.Component
            }, function (o) {
                l = o.audioManager
            }],
            execute: function () {
                var p, d, f, h, y;
                n._RF.push({}, "8939f7ptCtCRrQVDRccEMi8", "GameRoot", void 0);
                var R = a.ccclass,
                    g = a.property;
                o("GameRoot", (p = R("GameRoot"), d = g(c), p((y = t((h = function (o) {
                    function t() {
                        for (var t, e = arguments.length, n = new Array(e), a =
                                0; a < e; a++) n[a] = arguments[a];
                        return t = o.call.apply(o, [this].concat(n)) || this, r(
                            t, "_audioSource", y, i(t)), t
                    }
                    e(t, o);
                    var n = t.prototype;
                    return n.onLoad = function () {
                            var o = this.getComponent(c);
                            this._audioSource = o, u.addPersistRootNode(this.node),
                                l.instance.init(this._audioSource)
                        }, n.onEnable = function () {}, n.start = function () {},
                        t
                }(s)).prototype, "_audioSource", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), f = h)) || f));
                n._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/gameUi.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./StarRatingSystem.ts",
    "./EventHandler.ts", "./lifeCtrl.ts", "./constant.ts", "./uiManager.ts", "./page.ts", "./RewardGame.ts",
    "./apiClient.ts", "./Log.ts", "./CreateMark.ts"], (function (e) {
    var i, t, n, a, r, o, s, l, c, u, h, f, m, g, d, p, b, T, y, v, G, C, w, D, I, R, S;
    return {
        setters: [function (e) {
            i = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, a =
                e.assertThisInitialized, r = e.createForOfIteratorHelperLoose
        }, function (e) {
            o = e.cclegacy, s = e._decorator, l = e.Button, c = e.Label, u = e.Node, h = e.Prefab,
                f = e.Toggle, m = e.instantiate, g = e.Color, d = e.Vec3, p = e.tween, b = e.Component
        }, function (e) {
            T = e.StarRatingSystem
        }, function (e) {
            y = e.EventHandler
        }, function (e) {
            v = e.lifeCtrl
        }, function (e) {
            G = e.constant
        }, function (e) {
            C = e.uiManager
        }, function (e) {
            w = e.PagePath
        }, function (e) {
            D = e.RewardGame
        }, function (e) {
            I = e.ApiClient
        }, function (e) {
            R = e.default
        }, function (e) {
            S = e.MarkManager
        }],
        execute: function () {
            var _, A, L, P, M, O, B, z, E, U, k, H, N, F, K, x, W, V, q, j, J, Y, Q, X, Z, $, ee, ie,
                te, ne, ae;
            o._RF.push({}, "0b833RuUG9MLau1OeCaqMCV", "gameUi", void 0);
            var re = s.ccclass,
                oe = s.property;
            e("gameUi", (_ = re("gameUi"), A = oe(l), L = oe(c), P = oe(c), M = oe(c), O = oe(u), B =
                oe(u), z = oe(h), E = oe(h), U = oe(h), k = oe(c), H = oe(f), _((K = i((F =
                    function (e) {
                        function i() {
                            for (var i, t = arguments.length, r = new Array(t), o =
                                    0; o < t; o++) r[o] = arguments[o];
                            return i = e.call.apply(e, [this].concat(r)) || this, n(
                                    i, "btnBack", K, a(i)), n(i, "lblChances", x, a(
                                    i)), n(i, "lblHint", W, a(i)), n(i, "lblTimer",
                                    V, a(i)), n(i, "container", q, a(i)), n(i,
                                    "lifeContainer", j, a(i)), n(i,
                                    "wordGamePrefab", J, a(i)), n(i,
                                    "imageGamePrefab", Y, a(i)), n(i,
                                    "rewardGamePrefab", Q, a(i)), n(i, "lblTest", X,
                                    a(i)), n(i, "toggleTest", Z, a(i)), n(i,
                                    "totalChances", $, a(i)), n(i,
                                    "defaultGameTime", ee, a(i)), n(i,
                                    "warningTimeThreshold", ie, a(i)), n(i,
                                    "totalDifferences", te, a(i)), n(i,
                                    "animationScaleRatio", ne, a(i)), n(i,
                                    "animationDuration", ae, a(i)), i.currentGameInstance =
                                null, i.currentChances = 0, i.currentDifferencesFound =
                                0, i.remainingTime = 0, i.isTimerRunning = !1, i.isPlaying = !
                                1, i.gameType = "reward", i.starRatingSystem = null,
                                i.level = 1, i.id = 1, i.info = null, i.submitResult =
                                null, i.test = !1, i
                        }
                        t(i, e);
                        var o = i.prototype;
                        return o.show = function (e) {
                            var i = this;
                            console.log("gameUi show", e), this.cleanupGameContainer(),
                                this.level = e.level || this.level, this.getLevelInfo(
                                    e.level || this.level, (function (e) {
                                        i.info = e, i.gameType = 1 == e.type ?
                                            "word" : 2 == e.type ? "image" :
                                            "reward", i.totalDifferences =
                                            e.min_difference || i.totalDifferences,
                                            i.defaultGameTime = e.total_time ||
                                            i.defaultGameTime, i.id = e.id ||
                                            i.id, i.beforeStart()
                                    }))
                        }, o.getLevelInfo = function (e, i) {
                            void 0 === i && (i = null), I.getlevelInfo({
                                seq: e,
                                debug_answer: 1
                            }).then((function (e) {
                                console.log("获取关卡数据", e), i && i(e)
                            })).catch((function (e) {
                                R.log("获取关卡数据获取失败", e), C.instance.hideDialog(
                                    w.Game), C.instance.showDialog(
                                    w.Level)
                            }))
                        }, o.start = function () {
                            console.log("gameUi start")
                        }, o.beforeStart = function () {
                            this.currentChances = this.totalChances, this.currentGameInstance =
                                null, this.currentDifferencesFound = 0, this.container
                                .removeAllChildren(), S.clearMarksInNode(this.container),
                                console.log("container的子节点数量：", this.container.children
                                    .length), this.setupTestInfo(), this.initStarRatingSystem(),
                                this.initUI(), this.setupListeners(), this.setGameType(
                                    this.gameType), this.startTimer()
                        }, o.onLoad = function () {
                            var e = this;
                            y.on("UPDATA_ALL", this.setGameOver, this), y.on(
                                "CLICKED_FILLER", this.onBeforeSubmit, this
                            ), y.on("CLICKED_TARGET", this.onBeforeSubmit,
                                this), y.on("CLICKED_RESULT", this.onBeforeSubmit,
                                this), y.on("GAME_AGAIN", (function (i) {
                                var t = i.level,
                                    n = i.rewardLevel;
                                console.log("GAME_AGAIN", t, n), e.cleanupGameContainer(),
                                    n ? (e.id = n, e.gameType =
                                        "reward", e.defaultGameTime =
                                        5, e.beforeStart()) : (e.level =
                                        t, e.show({
                                            level: t
                                        }))
                            }), this)
                        }, o.onDestroy = function () {
                            var e = this;
                            y.off("UPDATA_ALL", this.setGameOver, this), y.off(
                                "CLICKED_FILLER", this.onBeforeSubmit, this
                            ), y.off("CLICKED_TARGET", this.onBeforeSubmit,
                                this), y.off("CLICKED_RESULT", this.onBeforeSubmit,
                                this), y.off("GAME_AGAIN", (function () {
                                return e.show(e.level)
                            }), this)
                        }, o.cleanupGameContainer = function () {
                            this.currentGameInstance && ("function" == typeof this
                                .currentGameInstance.destroy && this.currentGameInstance
                                .destroy(), this.currentGameInstance = null
                            );
                            for (var e, i = [].concat(this.container.children),
                                    t = r(i); !(e = t()).done;) {
                                e.value.destroy()
                            }
                            this.container.removeAllChildren(), S.clearMarksInNode(
                                this.container)
                        }, o.onBeforeSubmit = function (e) {
                            var i = this,
                                t = e.x,
                                n = e.y,
                                a = e.clickedNode,
                                r = e.imageType,
                                o = {
                                    id: this.id,
                                    position: {
                                        x: t,
                                        y: n
                                    },
                                    left_time: parseInt(this.remainingTime.toString())
                                };
                            console.log("onBeforeSubmit", o), I.getlevelSettle(
                                o).then((function (e) {
                                R.log("提交关卡数据", e), i.submitResult =
                                    e;
                                var o = e.is_hit,
                                    s = e.duplicate_hit,
                                    l = (e.health_point, e.is_pass),
                                    c = e.is_fail,
                                    u = (e.star, e.reward_level);
                                s || (o ? (y.dispatch(
                                        "HIGHLIGHT_TARGET", {
                                            isTarget: !0,
                                            clickedNode: a,
                                            imageType: r,
                                            x: t,
                                            y: n
                                        }), i.foundOneDifference()) :
                                    (i.decreaseChance(), y.dispatch(
                                        "HIGHLIGHT_FILLER", {
                                            isTarget: !1,
                                            clickedNode: a,
                                            imageType: r,
                                            x: t,
                                            y: n
                                        })), l && i.gameOver(!0),
                                    c && i.gameOver(!1), u &&
                                    console.log("reward_level",
                                        u))
                            })).catch((function (e) {
                                R.log("提交关卡数据获取失败", e)
                            }))
                        }, o.setupTestInfo = function () {
                            var e = this;
                            this.lblTest.string = G.IS_AUTO_MARK ? "开启标记" :
                                "关闭标记", this.toggleTest.isChecked = G.IS_AUTO_MARK,
                                this.toggleTest.node.on("toggle", (function () {
                                    G.IS_AUTO_MARK = !G.IS_AUTO_MARK, e
                                        .lblTest.string = G.IS_AUTO_MARK ?
                                        "开启标记" : "关闭标记", y.dispatch(
                                            "TOGGLE_TARGET_VISIBILITY",
                                            G.IS_AUTO_MARK)
                                }), this)
                        }, o.initUI = function () {
                            console.log("初始化UI", this.gameType), "reward" ===
                                this.gameType ? (this.node.getChildByName(
                                        "header").getChildByName(
                                        "lifeContainer").active = !1, this.lblHint
                                    .node.active = !1, this.node.getChildByName(
                                        "test").active = !1) : (this.node.getChildByName(
                                        "header").getChildByName(
                                        "lifeContainer").active = !0, this.lblHint
                                    .node.active = !0, this.updateChances(),
                                    this.currentDifferencesFound = 0, this.lblHint
                                    .string = "已找出" + this.currentDifferencesFound +
                                    "/" + this.totalDifferences + "处不同"), this.updateTimerDisplay()
                        }, o.setupListeners = function () {
                            this.btnBack.node.on("click", this.onBackButtonClicked,
                                this)
                        }, o.updateChances = function () {
                            console.log("更新剩余机会", this.currentChances), this.lifeContainer
                                .getComponent(v).updateLife(this.currentChances)
                        }, o.initStarRatingSystem = function () {
                            this.starRatingSystem = new T, this.starRatingSystem
                                .init({})
                        }, o.setGameType = function (e) {
                            this.gameType !== e && this.cleanupGameContainer(),
                                this.gameType = e, this.node.active && this.loadGameContent()
                        }, o.isGamePlaying = function () {
                            return this.isPlaying
                        }, o.loadGameContent = function () {
                            this.isPlaying = !1, this.currentChances = this.totalChances,
                                this.updateChances(), this.container.removeAllChildren(),
                                this.isPlaying = !0, "word" === this.gameType ?
                                this.loadWordDifferenceGame() : "image" ===
                                this.gameType ? this.loadImageDifferenceGame() :
                                "reward" === this.gameType ? this.loadRewardGame() :
                                console.error("未知游戏类型:", this.gameType)
                        }, o.loadWordDifferenceGame = function () {
                            this.loadGamePrefab(this.wordGamePrefab, "文字",
                                "WordDifferenceGame")
                        }, o.loadImageDifferenceGame = function () {
                            this.loadGamePrefab(this.imageGamePrefab, "图片",
                                "ImageDifferenceGame")
                        }, o.loadRewardGame = function () {
                            this.loadGamePrefab(this.rewardGamePrefab, "奖励",
                                "RewardGame")
                        }, o.loadGamePrefab = function (e, i, t) {
                            var n = this;
                            console.log("加载" + i + "找不同关卡"), this.cleanupGameContainer();
                            var a = m(e);
                            if (a) {
                                this.container.addChild(a);
                                var r, o = a.getComponent(t);
                                if (o) this.currentGameInstance = o, o.init({
                                    answers: this.info && this.info.answers,
                                    content: this.info && JSON.parse(
                                        null == (r = this.info) ?
                                        void 0 : r.content),
                                    totalDifferences: this.totalDifferences,
                                    onFoundDifference: function (e) {
                                        return n.foundDifference(e)
                                    },
                                    onGameOver: function (e) {
                                        return n.gameOver(e)
                                    }
                                }), this.isPlaying = !0;
                                else console.error("未能获取" + t + "组件")
                            } else console.error("实例化" + i + "找不同预制体失败")
                        }, o.decreaseChance = function () {
                            this.currentChances > 0 && (this.currentChances--,
                                this.updateChances(), this.currentChances <=
                                0 && this.test && this.gameOver(!1))
                        }, o.foundOneDifference = function () {
                            console.log("发现一处不同"), this.currentDifferencesFound++,
                                this.foundDifference(this.currentDifferencesFound)
                        }, o.foundDifference = function (e) {
                            this.lblHint.string = "已找出" + e + "/" + this.totalDifferences +
                                "处不同", e >= this.totalDifferences && this.test &&
                                this.gameOver(!0)
                        }, o.gameOver = function (e) {
                            if (console.log("游戏结束", e), this.isTimerRunning = !
                                1, this.isPlaying = !1, e) {
                                var i, t = 0;
                                if (this.test) {
                                    var n = Math.floor(this.remainingTime);
                                    console.log("游戏胜利: " + this.remainingTime),
                                        t = this.starRatingSystem.calculateStars(
                                            n, 3), console.log("游戏胜利: " + n +
                                            ", 星级: " + t)
                                } else t = this.submitResult.star;
                                console.log("游戏胜利: " + this.remainingTime +
                                        ", 星级: " + t), this.lblHint.string =
                                    "恭喜通关！", C.instance.showDialog(w.Win, [{
                                        level: this.level,
                                        stars: t,
                                        rewardLevel: null == (i = this.submitResult) ?
                                            void 0 : i.reward_level
                                    }])
                            } else if ("reward" === this.gameType) {
                                var a = 0;
                                this.currentGameInstance && this.currentGameInstance instanceof D &&
                                    (a = this.currentGameInstance.getClickCount()),
                                    console.log("游戏失败: " + a), I.getlevelReward({
                                        id: this.id,
                                        num: a
                                    }).then((function (e) {
                                        console.log(e), C.instance.showDialog(
                                            w.Prize, [{
                                                star: e.star ||
                                                    0,
                                                level: e.next_level,
                                                count: a
                                            }])
                                    }))
                            } else this.lblHint.string = "挑战失败！", C.instance.showDialog(
                                w.Fail, [{
                                    level: this.level
                                }])
                        }, o.setGameOver = function () {
                            this.gameOver(!0)
                        }, o.onBackButtonClicked = function () {
                            this.isPlaying ? console.log("游戏正在进行中，显示退出确认对话框") :
                                console.log("返回按钮被点击"), this.isPlaying = !1,
                                this.isTimerRunning = !1, C.instance.showDialog(
                                    w.Level), C.instance.hideDialog(w.Game)
                        }, o.startTimer = function () {
                            this.isTimerRunning || (this.isTimerRunning = !0,
                                this.remainingTime = this.defaultGameTime,
                                this.updateTimerDisplay())
                        }, o.updateTimerDisplay = function () {
                            Math.floor(this.remainingTime / 60);
                            var e = Math.floor(this.remainingTime % 60);
                            this.remainingTime <= 0 ? (this.lblTimer.string =
                                    "时间到了！", this.lblTimer.fontSize = 70) :
                                this.lblTimer.string = e.toString() + "S", this
                                .remainingTime <= this.warningTimeThreshold ? (
                                    this.lblTimer.color = new g(233, 47, 22,
                                        255), this.playTimerAnimation()) : (
                                    this.lblTimer.color = new g(180, 102, 50,
                                        255), this.lblTimer.node.scale = new d(
                                        1, 1, 1))
                        }, o.playTimerAnimation = function () {
                            p(this.lblTimer.node).to(this.animationDuration, {
                                scale: new d(this.animationScaleRatio,
                                    this.animationScaleRatio, 1)
                            }).to(this.animationDuration, {
                                scale: new d(1, 1, 1)
                            }).start()
                        }, o.update = function (e) {
                            this.isTimerRunning && (this.remainingTime -= e,
                                this.remainingTime <= 0 && (this.remainingTime =
                                    0, this.isTimerRunning = !1, this.gameOver(
                                        !1)), Math.floor(this.remainingTime) !==
                                Math.floor(this.remainingTime + e) && this.updateTimerDisplay()
                            )
                        }, i
                    }(b)).prototype, "btnBack", [A], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), x = i(F.prototype, "lblChances", [L], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), W = i(F.prototype, "lblHint", [P], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), V = i(F.prototype, "lblTimer", [M], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), q = i(F.prototype, "container", [O], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), j = i(F.prototype, "lifeContainer", [B], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), J = i(F.prototype, "wordGamePrefab", [z], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), Y = i(F.prototype, "imageGamePrefab", [E], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), Q = i(F.prototype, "rewardGamePrefab", [U], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), X = i(F.prototype, "lblTest", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), Z = i(F.prototype, "toggleTest", [H], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), $ = i(F.prototype, "totalChances", [oe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 3
                    }
                }), ee = i(F.prototype, "defaultGameTime", [oe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 60
                    }
                }), ie = i(F.prototype, "warningTimeThreshold", [oe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 5
                    }
                }), te = i(F.prototype, "totalDifferences", [oe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 3
                    }
                }), ne = i(F.prototype, "animationScaleRatio", [oe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 1.3
                    }
                }), ae = i(F.prototype, "animationDuration", [oe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return .3
                    }
                }), N = F)) || N));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/gi.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
    var n, r, a, t, o, l, s, i, u, c, g, f, d, h, p, v, C, m, b, y, k, w, A;
    return {
        setters: [function (e) {
            n = e.asyncToGenerator, r = e.regeneratorRuntime
        }, function (e) {
            a = e.cclegacy, t = e.js, o = e.assetManager, l = e.JsonAsset, s = e.SpriteFrame, i = e
                .AudioClip, u = e.ParticleAsset, c = e.Prefab, g = e.sp, f = e.Node, d = e.instantiate,
                h = e.Widget, p = e.ParticleSystem2D, v = e.Sprite, C = e.sys, m = e.Label, b = e.director,
                y = e.Director, k = e.Canvas, w = e.ImageAsset, A = e.Texture2D
        }],
        execute: function () {
            a._RF.push({}, "b0adem+qbFMcpyVyMYR0w7a", "gi", void 0);
            var P = e("ChannelOf", function (e) {
                    return e.Resource = "Resource", e.Rms = "Rms", e.Language = "Language", e
                }({})),
                R = e("default", function () {
                    function e() {
                        var n;
                        return this.log = console.log, this.warn = console.warn, this.error =
                            console.error, this.rootNode = null, null != (n = e["instance"]) ? n :
                            e.instance = this
                    }
                    var a = e.prototype;
                    return a.alert = function () {
                        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[
                            a] = arguments[a];
                        (e = gi).log.apply(e, ["%c%s",
                            "background:#000;color: #ff0;font-weight:bold;"].concat(r))
                    }, a.findKey = function (e, n) {
                        for (var r in e)
                            if (e[r] === n) return r;
                        return null
                    }, a.scheduleOnce = function (e, n) {
                        return -setTimeout(e, 1e3 * n)
                    }, a.schedule = function (e, n, r) {
                        if (void 0 === r && (r = -1), e(--r), 0 === r) return 0;
                        var a = setInterval((function () {
                            e(--r), 0 === r && clearInterval(a)
                        }), 1e3 * n);
                        return a
                    }, a.unschedule = function (e) {
                        e > 0 ? clearInterval(e) : clearTimeout(-e)
                    }, a.setChannel = function (n, r) {
                        switch (void 0 === r && (r = P.Resource), null != n || (n = ""), r) {
                            case P.Resource:
                                e.resChannel = n, gi.alert("🎯资源Channel设置为👉👉👉" + n);
                                break;
                            case P.Rms:
                                e.rmsChannel = n, gi.alert("🎯当前存档用户设置为👉👉👉" + n);
                                break;
                            case P.Language:
                                e.langChannel = n, gi.langTranslate(gi.rootNode), gi.alert(
                                    "🎯当前语言设置为👉👉👉" + n)
                        }
                    }, a.getChannel = function (n) {
                        switch (void 0 === n && (n = P.Resource), n) {
                            case P.Resource:
                                return e.resChannel;
                            case P.Rms:
                                return e.rmsChannel;
                            case P.Language:
                                return e.langChannel
                        }
                    }, a.loadBundle = function (n, r) {
                        var a, f, d, h = null != (d = (a = e.resources)[f = e.resChannel]) ? d :
                            a[f] = t.createMap(!0);
                        gi.alert("⏳⌛⏳⌛⏳⌛开始加载资源包" + e.resChannel + n + "⏳⌛⏳⌛⏳⌛"), o.loadBundle(
                            "" + e.resChannel + n, (function (a, t) {
                                if (a) gi.error("gi.loadBundle加载bundle失败！(" + e.resChannel +
                                    n + ")");
                                else
                                    for (var o = t.getDirWithPath(""), f = 0, d = o.length,
                                            p = function () {
                                                var e = o[v].path,
                                                    a = o[v].ctor.prototype.constructor;
                                                if (a !== i && a !== s && a !== l && a !==
                                                    u && a !== c && a !== g.SkeletonData
                                                ) return r(++f / d, null, null), 1;
                                                t.load(e, a, (function (t, o) {
                                                    var i = n + "/" + (a ===
                                                        s && e.endsWith(
                                                            "spriteFrame"
                                                        ) ? e.substring(
                                                            0, e.lastIndexOf(
                                                                "/")) :
                                                        e);
                                                    if (t) return gi.error(
                                                            "gi.loadBundle加载资源失败！(" +
                                                            i + ")"),
                                                        void r(++f / d,
                                                            null, null);
                                                    h[i] = o, r(++f / d, i,
                                                        a === l ? o.json :
                                                        o)
                                                }))
                                            }, v = 0; v < d; ++v) p()
                            }))
                    }, a.load = function (n) {
                        var r = e.resources[e.resChannel];
                        if (void 0 === r) return gi.error("gi.load读取缓存资源失败！(" + e.resChannel +
                            n + ")"), null;
                        var a = r[n];
                        return a ? a.constructor === l ? a.json : a : (gi.error(
                            "gi.load读取缓存资源失败！(" + e.resChannel + n + ")"), null)
                    }, a.loadAsync = function (n) {
                        return new Promise((function (r) {
                            var a, f, d, h = null != (d = (a = e.resources)[f = e.resChannel]) ?
                                d : a[f] = t.createMap(!0),
                                p = h[n];
                            if (p) r(p.constructor === l ? p.json : p);
                            else {
                                var v = n.indexOf("/"),
                                    C = n.substring(0, v),
                                    m = n.substring(v + 1);
                                o.loadBundle("" + e.resChannel + C, (function (a, t) {
                                    if (a) return gi.error(
                                            "gi.loadAsync加载Bundle失败！(" +
                                            e.resChannel + C + ")"),
                                        void r(null);
                                    for (var o = t.getDirWithPath(""),
                                            f = null, d = o.length - 1; d >
                                        -1; --d) {
                                        var p = o[d].ctor.prototype.constructor;
                                        if (p === s) {
                                            if (m === o[d].path) {
                                                f = p;
                                                break
                                            }
                                            if (m + "/spriteFrame" ===
                                                o[d].path) {
                                                m += "/spriteFrame", f =
                                                    p;
                                                break
                                            }
                                        } else if ((p === i || p === l ||
                                                p === u || p === c || p ===
                                                g.SkeletonData) && m ===
                                            o[d].path) {
                                            f = p;
                                            break
                                        }
                                    }
                                    t.load(m, f, (function (a, t) {
                                        if (a) return gi.error(
                                            "gi.loadAsync加载资源失败！(" +
                                            e.resChannel +
                                            n + ")"
                                        ), void r(
                                            null);
                                        h[n] = t, r(t)
                                    }))
                                }))
                            }
                        }))
                    }, a.loadRemoteAsync = function (n, r) {
                        return void 0 === r && (r = w), new Promise((function (a) {
                            var i, u, c;
                            if (!n) return gi.error("gi.loadRemoteAsync加载远程资源失败！" +
                                n), void a(null);
                            var g = function (e, n) {
                                    switch (e) {
                                        case w:
                                        case s:
                                            var r = new A;
                                            r.image = n;
                                            var a = new s;
                                            return a.texture = r, a;
                                        case l:
                                            return n.json;
                                        default:
                                            return n
                                    }
                                },
                                f = null != (c = (i = e.resources)[u = e.resChannel]) ?
                                c : i[u] = t.createMap(!0);
                            void 0 === f[n] ? o.loadRemote(n, r, (function (t, o) {
                                if (t) return gi.error(
                                    "gi.loadRemoteAsync加载远程文件失败！(" +
                                    e.resChannel + "/" + n +
                                    ")"), void a(null);
                                f[n] = o, a(g(r, o))
                            })) : a(g(r, f[n]))
                        }))
                    }, a.releaseBundle = function (n) {
                        var r = e.resources[e.resChannel];
                        if (void 0 !== r && "internal" !== n && "main" !== n && "resources" !==
                            n) {
                            var a = o.bundles._map["" + e.resChannel + n];
                            if (a) {
                                var t = a._config.paths._map;
                                for (var l in t) l = n + "/" + l, o.releaseAsset(r[l]), delete r[
                                    l];
                                o.removeBundle(a)
                            }
                        }
                    }, a.releaseAsset = function (n) {
                        var r = e.resources[e.resChannel];
                        if (void 0 !== r)
                            if (void 0 === n) {
                                for (n in r) o.releaseAsset(r[n]);
                                delete e.resources[e.resChannel]
                            } else o.releaseAsset(r[n]), delete r[n]
                    }, a.create = function (n, r) {
                        var a = gi.load(n);
                        if (null === a) return gi.error("gi.create创建节点失败！(" + e.resChannel + n +
                            ")"), null;
                        var t = null,
                            o = n.replace(/\//g, "\\");
                        switch (a.constructor) {
                            case s:
                                (t = new f(o)).setParent(r), t.addComponent(v).spriteFrame = a;
                                break;
                            case u:
                                (t = new f(o)).setParent(r), t.addComponent(p).file = a;
                                break;
                            case c:
                                (t = d(a)).setParent(r), t.name = o;
                                for (var l = t.getComponentsInChildren(h), i = l.length - 1; i >
                                    -1; l[i--].updateAlignment());
                                break;
                            case g.SkeletonData:
                                (t = new f(o)).setParent(r), t.addComponent(g.Skeleton).skeletonData =
                                    a;
                                break;
                            default:
                                gi.error("gi.create创建节点失败！(" + e.resChannel + n + ")")
                        }
                        return t
                    }, a.createAsync = function (a, t) {
                        return new Promise(n(r().mark((function n(o) {
                            var l, i, C, m, b;
                            return r().wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2,
                                            gi.loadAsync(a);
                                    case 2:
                                        if (null !== (l = n
                                                .sent)) {
                                            n.next = 7;
                                            break
                                        }
                                        return gi.error(
                                            "gi.createAsync创建节点失败！(" +
                                            e.resChannel +
                                            a + ")"), o(
                                            null), n.abrupt(
                                            "return");
                                    case 7:
                                        i = null, C = a.replace(
                                                /\//g, "\\"
                                            ), n.t0 = l.constructor,
                                            n.next = n.t0 ===
                                            s ? 12 : n.t0 ===
                                            u ? 16 : n.t0 ===
                                            c ? 20 : n.t0 ===
                                            g.SkeletonData ?
                                            26 : 30;
                                        break;
                                    case 12:
                                        return (i = new f(C))
                                            .setParent(t),
                                            i.addComponent(
                                                v).spriteFrame =
                                            l, n.abrupt(
                                                "break", 32
                                            );
                                    case 16:
                                        return (i = new f(C))
                                            .setParent(t),
                                            i.addComponent(
                                                p).file = l,
                                            n.abrupt(
                                                "break", 32
                                            );
                                    case 20:
                                        for ((i = d(l)).setParent(
                                                t), i.name =
                                            C, m = i.getComponentsInChildren(
                                                h), b = m.length -
                                            1; b > -1; m[b--]
                                            .updateAlignment()
                                        );
                                        return n.abrupt(
                                            "break", 32
                                        );
                                    case 26:
                                        return (i = new f(C))
                                            .setParent(t),
                                            i.addComponent(
                                                g.Skeleton)
                                            .skeletonData =
                                            l, n.abrupt(
                                                "break", 32
                                            );
                                    case 30:
                                        return gi.error(
                                                "gi.create创建节点失败！(" +
                                                e.resChannel +
                                                a + ")"), n
                                            .abrupt("break",
                                                32);
                                    case 32:
                                        return o(i), n.abrupt(
                                            "return");
                                    case 34:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))))
                    }, a.poolGet = function (n, r) {
                        var a, o, l, s = null,
                            i = (null != (l = (a = e.poolLists)[o = e.resChannel]) ? l : a[o] =
                                t.createMap(!0))[n];
                        return (null == i ? void 0 : i.length) > 0 ? (s = i.pop()).setParent(r) :
                            s = gi.create(n, r), s
                    }, a.poolGetAsync = function (a, o) {
                        return new Promise(n(r().mark((function n(l) {
                            var s, i, u, c, g, f;
                            return r().wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (c = null, g =
                                            null != (u = (s =
                                                e.poolLists
                                            )[i = e.resChannel]) ?
                                            u : s[i] = t.createMap(
                                                !0), !((
                                                null ==
                                                (f = g[
                                                    a
                                                    ]) ?
                                                void 0 :
                                                f.length
                                            ) > 0)) {
                                            n.next = 8;
                                            break
                                        }(c = f.pop()).setParent
                                            (o), n.next =
                                            11;
                                        break;
                                    case 8:
                                        return n.next = 10,
                                            gi.createAsync(
                                                a, o);
                                    case 10:
                                        c = n.sent;
                                    case 11:
                                        return l(c), n.abrupt(
                                            "return");
                                    case 13:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))))
                    }, a.poolPut = function (n) {
                        var r, a, o, l = null != (o = (r = e.poolLists)[a = e.resChannel]) ? o :
                            r[a] = t.createMap(!0),
                            s = n.name.replace(/\\/g, "/");
                        null != l[s] || (l[s] = []), l[s].push(n), n.removeFromParent()
                    }, a.poolClear = function () {
                        var n = e.poolLists[e.resChannel];
                        if (void 0 !== n) {
                            for (var r in n)
                                for (var a = n[r], t = a.length - 1; t > -1; a[t--].destroy());
                            delete e.poolLists[e.resChannel]
                        }
                    }, a.rmsSet = function (n, r) {
                        "function" != typeof r ? C.localStorage.setItem("" + e.rmsChannel + n,
                            JSON.stringify(r)) : gi.error("gi.rmsSet写入数据失败！" + n + "：" + r)
                    }, a.rmsGet = function (n) {
                        var r = C.localStorage.getItem("" + e.rmsChannel + n);
                        if ("undefined" !== r) return JSON.parse(r)
                    }, a.rmsClear = function (e) {
                        var n = C.localStorage;
                        if (void 0 === e) C.localStorage.clear();
                        else
                            for (var r = Object.keys(n), a = n.length - 1; a > -1; --a) r[a].startsWith(
                                e) && n.removeItem(r[a])
                    }, a.langLoad = function (n, r) {
                        var a, o, l;
                        (null != (l = (a = e.languages)[o = e.resChannel]) ? l : a[o] = t.createMap(
                            !0))[n] = r
                    }, a.langTranslate = function (n, r, a) {
                        void 0 === r && (r = e.langChannel), void 0 === a && (a = !1);
                        var t = e.languages[e.resChannel];
                        if (t) {
                            var o = function (e, n) {
                                    for (var r in t) {
                                        var a = gi.findKey(t[r][n], e);
                                        if (a) return a
                                    }
                                    return null
                                },
                                l = t[r].Label;
                            if (l)
                                for (var s = n.getComponentsInChildren(m), i = s.length - 1; i >
                                    -1; --i) {
                                    var u = s[i];
                                    (void 0 === u.Key || a) && (u.Key = o(u.string, "Label"));
                                    var c = l[u.Key];
                                    c && (u.string = c)
                                }
                            var g = e.resources[e.resChannel];
                            if (g) {
                                if (l = t[r].Sprite)
                                    for (var f = n.getComponentsInChildren(v), d = f.length - 1; d >
                                        -1; --d) {
                                        var h = f[d];
                                        if (h.spriteFrame) {
                                            var p = gi.findKey(g, h.spriteFrame);
                                            (void 0 === h.Key || a) && (h.Key = o(p, "Sprite")),
                                            (p = l[h.Key]) && (h.spriteFrame = gi.load(p))
                                        }
                                    }
                            } else gi.error("gi.langTranslate翻译失败！" + e.resChannel + "/" + r)
                        } else gi.error("gi.langTranslate翻译失败！" + e.resChannel + "/" + r)
                    }, a.langRelease = function (n) {
                        var r = e.languages[e.resChannel];
                        void 0 !== r && (void 0 === n ? delete e.languages[e.resChannel] :
                            delete r[n])
                    }, e
                }());
            R.resChannel = "", R.resources = t.createMap(!0), R.poolLists = t.createMap(!0), R.rmsChannel =
                "", R.langChannel = "", R.languages = t.createMap(!0), window.gi = new R, b.once(y.EVENT_AFTER_DRAW,
                    (function () {
                        var e;
                        gi.rootNode = null == (e = b.getScene()) || null == (e = e.getComponentInChildren(
                            k)) ? void 0 : e.node
                    }), void 0), a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/httpClient.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var e, r, n, s, i, o;
    return {
        setters: [function (t) {
            e = t.extends, r = t.createClass, n = t.asyncToGenerator, s = t.regeneratorRuntime, i =
                t.createForOfIteratorHelperLoose
        }, function (t) {
            o = t.cclegacy
        }],
        execute: function () {
            o._RF.push({}, "38df6Wr18JKjL7i9Qt372/Z", "httpClient", void 0);
            var u = t("HttpMethod", function (t) {
                return t.GET = "GET", t.POST = "POST", t.PUT = "PUT", t.DELETE = "DELETE", t
            }({}));
            t("HttpClient", function () {
                function t() {
                    this.baseUrl = "", this.timeout = 3e4, this.headers = {
                        "Content-Type": "application/json"
                    }, this.interceptors = []
                }
                var o = t.prototype;
                return o.setBaseUrl = function (t) {
                    return this.baseUrl = t, this
                }, o.setTimeout = function (t) {
                    return this.timeout = t, this
                }, o.setHeaders = function (t) {
                    return this.headers = e({}, this.headers, t), this
                }, o.addInterceptor = function (t) {
                    return this.interceptors.push(t), this
                }, o.clearInterceptors = function () {
                    return this.interceptors = [], this
                }, o.get = function (t, r, n) {
                    return this.request(e({
                        url: t,
                        method: u.GET,
                        data: r
                    }, n))
                }, o.post = function (t, r, n) {
                    return this.request(e({
                        url: t,
                        method: u.POST,
                        data: r
                    }, n))
                }, o.put = function (t, r, n) {
                    return this.request(e({
                        url: t,
                        method: u.PUT,
                        data: r
                    }, n))
                }, o.delete = function (t, r) {
                    return this.request(e({
                        url: t,
                        method: u.DELETE
                    }, r))
                }, o.request = function () {
                    var t = n(s().mark((function t(r) {
                        var n, o, a, c, h, l, d, p, f, m, T, b, v, E, x, U,
                            g, y, w, C, k;
                        return s().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    for (n = e({}, r), o =
                                        i(this.interceptors); !
                                        (a = o()).done;)(c =
                                            a.value).request &&
                                        (n = c.request(n));
                                    return h = this.buildFullUrl(
                                            n.url), n.method ===
                                        u.GET && n.data &&
                                        (h = this.buildUrl(
                                            h, n.data)), l = {
                                            method: n.method,
                                            headers: e({},
                                                this.headers,
                                                n.headers
                                            ),
                                            credentials: n.withCredentials ?
                                                "include" :
                                                "same-origin"
                                        }, n.data && n.method !==
                                        u.GET && (l.body =
                                            JSON.stringify(
                                                n.data)), t
                                        .prev = 6, d = new AbortController,
                                        l.signal = d.signal,
                                        p = setTimeout((
                                                function () {
                                                    d.abort()
                                                }), n.timeout ||
                                            this.timeout),
                                        t.next = 12, fetch(
                                            h, l);
                                case 12:
                                    if (f = t.sent,
                                        clearTimeout(p), m = {},
                                        f.headers.forEach((
                                            function (t,
                                                e) {
                                                m[e] =
                                                    t
                                            })), !(b = f.headers
                                            .get(
                                                "content-type"
                                            )) || !b.includes(
                                            "application/json"
                                        )) {
                                        t.next = 23;
                                        break
                                    }
                                    return t.next = 20, f.json();
                                case 20:
                                    T = t.sent, t.next = 26;
                                    break;
                                case 23:
                                    return t.next = 25, f.text();
                                case 25:
                                    T = t.sent;
                                case 26:
                                    for (v = {
                                            data: T,
                                            status: f.status,
                                            statusText: f.statusText,
                                            headers: m
                                        }, E = v, x = i(
                                            this.interceptors
                                        ); !(U = x()).done;)
                                        (g = U.value).response &&
                                        (E = g.response(E));
                                    if (f.ok) {
                                        t.next = 31;
                                        break
                                    }
                                    throw new Error(
                                        "Request failed with status " +
                                        f.status + ": " +
                                        f.statusText);
                                case 31:
                                    return t.abrupt(
                                        "return", E.data
                                    );
                                case 34:
                                    for (t.prev = 34, t.t0 =
                                        t.catch(6), y = t.t0,
                                        w = i(this.interceptors); !
                                        (C = w()).done;)(k =
                                            C.value).error &&
                                        (y = k.error(y));
                                    throw y;
                                case 39:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [[6, 34]])
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), o.buildFullUrl = function (t) {
                    return t.startsWith("http://") || t.startsWith("https://") ? t : this.baseUrl +
                        (t.startsWith("/") ? "" : "/") + t
                }, o.buildUrl = function (t, e) {
                    var r = Object.keys(e).map((function (t) {
                        var r;
                        return encodeURIComponent(t) + "=" + encodeURIComponent(
                            null != (r = e[t]) ? r : "")
                    })).join("&");
                    return r ? t + (t.includes("?") ? "&" : "?") + r : t
                }, r(t, null, [{
                    key: "instance",
                    get: function () {
                        return this._instance || (this._instance = new t), this
                            ._instance
                    }
                }]), t
            }())._instance = void 0, o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ImageDifferenceGame.ts", ["./rollupPluginModLoBabelHelpers.js", "cc",
    "./CreateMark.ts", "./EventHandler.ts", "./audioManager.ts", "./constant.ts"], (function (e) {
    var i, t, o, n, a, r, s, l, c, d, f, h, g, u, m, p, v, I, C, D, F, y, w, T;
    return {
        setters: [function (e) {
            i = e.applyDecoratedDescriptor, t = e.inheritsLoose, o = e.initializerDefineProperty, n =
                e.assertThisInitialized
        }, function (e) {
            a = e.cclegacy, r = e._decorator, s = e.Node, l = e.SpriteFrame, c = e.Button, d = e.Vec3,
                f = e.Label, h = e.UITransform, g = e.Sprite, u = e.assetManager, m = e.resources,
                p = e.Color, v = e.Graphics, I = e.UIOpacity, C = e.tween, D = e.Component
        }, function (e) {
            F = e.MarkManager
        }, function (e) {
            y = e.EventHandler
        }, function (e) {
            w = e.audioManager
        }, function (e) {
            T = e.constant
        }],
        execute: function () {
            var N, k, E, M, b, x, S, B, L, A, H, O, R, W, _;
            a._RF.push({}, "786f5sKhbBBDrRoHqwSHfNF", "ImageDifferenceGame", void 0);
            var G = r.ccclass,
                z = r.property;
            e("ImageDifferenceGame", (N = G("ImageDifferenceGame"), k = z(s), E = z(s), M = z(s), b = z(
                l), x = z(c), S = z(c), N((A = i((L = function (e) {
                function i() {
                    for (var i, t = arguments.length, a = new Array(t), r =
                            0; r < t; r++) a[r] = arguments[r];
                    return i = e.call.apply(e, [this].concat(a)) || this, o(
                            i, "originalImageNode", A, n(i)), o(i,
                            "modifiedImageNode", H, n(i)), o(i,
                            "differencesContainer", O, n(i)), o(i,
                            "frameSpriteFrame", R, n(i)), o(i,
                            "testModeBtn", W, n(i)), o(i, "debugBtn", _, n(
                            i)), i.levelData = null, i.levelInfo = null, i.foundDifferences = [],
                        i.isTestMode = !1, i.scaleFactor = 1, i.FIXED_IMAGE_WIDTH =
                        690, i
                }
                t(i, e);
                var a = i.prototype;
                return a.onLoad = function () {}, a.onDestroy = function () {
                    F.release(), y.off("HIGHLIGHT_TARGET", this.highlightTarget,
                        this), y.off("HIGHLIGHT_FILLER", this.highlightTarget,
                        this)
                }, a.start = function () {
                    var e = this;
                    F.initialize((function (e) {
                            e || console.error(
                                "MarkManager 初始化失败，标记功能可能不可用"
                            )
                        })), y.on("HIGHLIGHT_TARGET", this.highlightTarget,
                            this), y.on("HIGHLIGHT_FILLER", this.highlightTarget,
                            this), this.testModeBtn && this.testModeBtn
                        .node.on(c.EventType.CLICK, this.toggleTestMode,
                            this), this.debugBtn && this.debugBtn.node.on(
                            c.EventType.CLICK, (function () {
                                e.ensureScaleFactor(), e.visualDebug()
                            }), this)
                }, a.highlightTarget = function (e) {
                    var i = e.isTarget,
                        t = (e.clickedNode, e.imageType),
                        o = e.x,
                        n = e.y;
                    console.log("highlightTarget", i, t, o, n), i ? (w.instance
                        .playSound(T.AUDIO_SOUND.CORRECT), this.showClickFeedbackOnBothImages(
                            new d(o / 2, n / 2, 0), t)) : (w.instance
                        .playSound(T.AUDIO_SOUND.ERROR), this.showErrorMarkOnImage(
                            new d(o / 2, n / 2, 0), t))
                }, a.init = function (e) {
                    console.log("init data", e), this.levelInfo = e,
                        this.loadPreviewDataByInfo()
                }, a.toggleTestMode = function () {
                    if (this.isTestMode = !this.isTestMode, this.isTestMode) {
                        this.showAllDifferences();
                        var e = this.testModeBtn.getComponentInChildren(
                            f);
                        e && (e.string = "关闭测试模式")
                    } else {
                        this.foundDifferences = [], this.displayDifferences();
                        var i = this.testModeBtn.getComponentInChildren(
                            f);
                        i && (i.string = "开启测试模式")
                    }
                }, a.setupDifferencesContainer = function () {
                    var e = this.originalImageNode.getComponent(h);
                    if (e) {
                        if (this.differencesContainer.parent !== this.originalImageNode
                            .parent) {
                            var i = this.originalImageNode.parent;
                            this.differencesContainer.parent = i
                        }
                        this.differencesContainer.position = this.originalImageNode
                            .position.clone();
                        var t = this.differencesContainer.getComponent(
                            h) || this.differencesContainer.addComponent(
                            h);
                        t.width = e.width, t.height = e.height, this.differencesContainer
                            .setSiblingIndex(this.originalImageNode.getSiblingIndex() +
                                1)
                    }
                }, a.loadPreviewData = function () {
                    var e = localStorage.getItem("differenceEditorData");
                    if (e) try {
                        this.levelData = JSON.parse(e), this.loadLevelImages(),
                            this.displayLevelData()
                    } catch (e) {
                        console.error("加载预览数据失败:", e)
                    }
                }, a.loadPreviewDataByInfo = function () {
                    var e = this,
                        i = this.levelInfo.content,
                        t = i[0],
                        o = i[1];
                    if (t && o) {
                        this.loadImageToNode(t, this.originalImageNode),
                            this.loadImageToNode(o, this.modifiedImageNode);
                        var n = this.levelInfo.answers;
                        console.log("answers", n), n && n.length > 0 &&
                            this.scheduleOnce((function () {
                                var i = e.modifiedImageNode.getChildByName(
                                    "DiffMarksContainer");
                                i || (i = new s(
                                    "DiffMarksContainer"
                                ), e.modifiedImageNode.addChild(
                                    i)), n.forEach((
                                    function (t) {
                                        e.createDifferenceMarkOnNode(
                                            i, t, e
                                            .scaleFactor
                                        )
                                    }))
                            }), 1), this.setupImageInteraction1()
                    } else console.warn("关卡图片路径不存在")
                }, a.addMarkToImage = function (e, i, t) {
                    console.log("addMarkToImage", e, i, t), F.addCorrectMarkAtPosition(
                        e, {
                            x: i,
                            y: t
                        })
                }, a.loadLevelImages = function () {
                    if (this.levelData) {
                        var e = this.levelData.originalImage,
                            i = this.levelData.modifiedImage;
                        e && i ? (this.loadImageToNode(e, this.originalImageNode),
                            this.loadImageToNode(i, this.modifiedImageNode)
                        ) : console.warn("关卡图片路径不存在")
                    }
                }, a.loadImageToNode = function (e, i) {
                    var t = this;
                    if (i && e) {
                        var o = i.getComponent(g) || i.addComponent(g);
                        e.startsWith("http") || e.startsWith("data:") ?
                            u.loadRemote(e, (function (e, n) {
                                if (e) console.error("加载图片失败:",
                                    e);
                                else {
                                    var a = l.createWithImage(n);
                                    o.spriteFrame = a, t.applyFixedWidthScaling(
                                        i, a), t.addFrameToImage(
                                        i)
                                }
                            })) : m.load(e + "/spriteFrame", l, (
                                function (n, a) {
                                    n ? console.error("加载图片资源失败:",
                                        n, e) : (o.spriteFrame =
                                        a, t.applyFixedWidthScaling(
                                            i, a), t.addFrameToImage(
                                            i))
                                }))
                    }
                }, a.applyFixedWidthScaling = function (e, i) {
                    var t = this;
                    if (e && i) {
                        var o = this.FIXED_IMAGE_WIDTH,
                            n = i.originalSize.width,
                            a = o / n * i.originalSize.height;
                        e === this.originalImageNode && (this.scaleFactor =
                            o / n, console.log("设置缩放因子: " + this.scaleFactor +
                                " (原始宽度: " + n + ", 显示宽度: " + o +
                                ")")), e.getComponent(h).setContentSize(
                            o, a), this.scheduleOnce((function () {
                            t.addFrameToImage(e)
                        }), .1)
                    }
                }, a.addFrameToImage = function (e) {
                    var i = e.getChildByName("ImageFrame");
                    i && i.destroy();
                    var t = new s("ImageFrame");
                    e.addChild(t);
                    var o = e.getComponent(h);
                    if (o) {
                        var n = t.addComponent(h);
                        n.width = o.width, n.height = o.height, t.setSiblingIndex(
                            e.children.length - 1);
                        var a = t.addComponent(g);
                        this.frameSpriteFrame ? (a.spriteFrame = this.frameSpriteFrame,
                            a.type = g.Type.SLICED, 0 === this.frameSpriteFrame
                            .insetLeft && (this.frameSpriteFrame.insetLeft =
                                10, this.frameSpriteFrame.insetRight =
                                10, this.frameSpriteFrame.insetTop =
                                10, this.frameSpriteFrame.insetBottom =
                                10)) : (a.color = new p(255, 215, 0),
                            a.type = g.Type.SIMPLE)
                    }
                }, a.displayLevelData = function () {
                    this.levelData && (this.scaleFactor = this.levelData
                        .scaleFactor, this.displayDifferences(),
                        this.isTestMode = !0, this.isTestMode &&
                        this.showAllDifferences(), this.setupImageInteraction()
                    )
                }, a.showAllDifferences = function () {
                    var e = this;
                    this.levelData && this.levelData.differences && (
                        this.foundDifferences = [], this.levelData.differences
                        .forEach((function (i) {
                            e.foundDifferences.push(i.id)
                        })), this.levelData.differences.forEach((
                            function (i) {
                                e.showFoundDifference(i.id)
                            })), console.log("测试模式：已显示全部 " + this.foundDifferences
                            .length + " 个不同点"))
                }, a.displayDifferences = function () {
                    var e = this;
                    this.differencesContainer.removeAllChildren(), this
                        .ensureScaleFactor(), console.log(
                            "显示差异点时使用的缩放因子: " + this.scaleFactor), this
                        .levelData && this.levelData.differences &&
                        this.levelData.differences.forEach((function (i) {
                            var t = new s("diff-" + i.id);
                            e.differencesContainer.addChild(t);
                            var o = i.position.x * e.scaleFactor,
                                n = i.position.y * e.scaleFactor;
                            t.position = new d(o, n, 0);
                            var a = t.addComponent(v);
                            if (t.active = -1 !== e.foundDifferences
                                .indexOf(i.id), "point" === i.type
                            ) a.circle(0, 0, 15), a.fillColor =
                                new p(0, 255, 0, 150), a.fill(),
                                a.fillColor = p.WHITE, a.strokeColor =
                                p.BLACK, a.lineWidth = 1, a.circle(
                                    0, 0, 4), a.fill(), a.stroke();
                            else if ("circle" === i.type) {
                                var r = i.radius * e.scaleFactor;
                                a.circle(0, 0, r), a.fillColor =
                                    new p(0, 255, 0, 150), a.fill(),
                                    a.strokeColor = new p(0,
                                        200, 0, 200), a.lineWidth =
                                    2, a.stroke(), a.fillColor =
                                    p.WHITE, a.strokeColor = p.BLACK,
                                    a.lineWidth = 1, a.circle(0,
                                        0, 4), a.fill(), a.stroke()
                            }
                        }))
                }, a.ensureScaleFactor = function () {
                    if (!this.scaleFactor || this.scaleFactor < .1) {
                        var e = this.originalImageNode.getComponent(h);
                        if (e && e.width > 0) {
                            this.scaleFactor = e.width / 1380
                        } else this.scaleFactor = this.FIXED_IMAGE_WIDTH /
                            1380;
                        console.warn("未设置缩放因子，使用估算值: " + this.scaleFactor)
                    }
                    return this.scaleFactor
                }, a.setupImageInteraction = function () {
                    this.addTouchEventToImage(this.originalImageNode,
                        "original"), this.addTouchEventToImage(this
                        .modifiedImageNode, "modified")
                }, a.setupImageInteraction1 = function () {
                    this.addTouchEventToImage1(this.originalImageNode,
                        "original"), this.addTouchEventToImage1(
                        this.modifiedImageNode, "modified")
                }, a.addTouchEventToImage = function (e, i) {
                    var t = this,
                        o = e.getComponent(h);
                    e.on(s.EventType.TOUCH_END, (function (e) {
                        console.log(i + "图像触摸结束", e);
                        var n = e.getUILocation(),
                            a = new d(n.x, n.y, 0),
                            r = o.convertToNodeSpaceAR(a),
                            s = t.checkDifference(r);
                        console.log(i + "图像点击结果:", s), s ?
                            t.showClickFeedbackOnBothImages(
                                r, i) : t.showErrorMarkOnImage(
                                r, i)
                    }))
                }, a.addTouchEventToImage1 = function (e, i) {
                    var t = e.getComponent(h);
                    e.on(s.EventType.TOUCH_END, (function (o) {
                        console.log(i + "图像触摸结束", o);
                        var n = o.getUILocation(),
                            a = new d(n.x, n.y, 0),
                            r = t.convertToNodeSpaceAR(a);
                        y.dispatch("CLICKED_RESULT", {
                            x: 2 * r.x,
                            y: 2 * r.y,
                            clickedNode: e,
                            imageType: i
                        })
                    }))
                }, a.checkDifference = function (e) {
                    var i = this;
                    if (this.levelData && this.levelData.differences) {
                        this.ensureScaleFactor();
                        var t = new d(e.x / this.scaleFactor, e.y /
                            this.scaleFactor, 0);
                        console.log("点击位置: 显示(" + e.x.toFixed(2) + ", " +
                            e.y.toFixed(2) + "), 原始(" + t.x.toFixed(
                                2) + ", " + t.y.toFixed(2) + ")");
                        var o = !1;
                        return this.levelData.differences.forEach((
                            function (e) {
                                if (-1 === i.foundDifferences.indexOf(
                                        e.id)) {
                                    var n = !1,
                                        a = new d(e.position.x,
                                            e.position.y, 0),
                                        r = d.distance(t, a);
                                    if ("point" === e.type) n =
                                        r <= 30 / i.scaleFactor;
                                    else "circle" === e.type &&
                                        (n = r <= e.radius);
                                    n && (o = !0, console.log(
                                            "找到差异点ID: " + e
                                            .id + ", 类型: " +
                                            e.type +
                                            ", 距离: " + r.toFixed(
                                                2)), i.foundDifferences
                                        .push(e.id), i.showFoundDifference(
                                            e.id), i.foundDifferences
                                        .length === i.levelData
                                        .differences.length &&
                                        i.onAllDifferencesFound()
                                    )
                                }
                            })), o
                    }
                }, a.showFoundDifference = function (e) {
                    var i = this.differencesContainer.getChildByName(
                        "diff-" + e);
                    if (i && (i.active = !0, this.playFoundAnimation(i),
                            this.modifiedImageNode)) {
                        var t = this.levelData.differences.find((
                            function (i) {
                                return i.id === e
                            }));
                        if (t) {
                            var o = this.modifiedImageNode.getChildByName(
                                "DiffMarksContainer");
                            o || (o = new s("DiffMarksContainer"), this
                                    .modifiedImageNode.addChild(o)),
                                this.createDifferenceMarkOnNode(o, t,
                                    this.scaleFactor)
                        }
                    }
                }, a.showClickFeedbackOnBothImages = function (e, i) {
                    this.showCorrectMarkOnImage(e, "original"), this.showCorrectMarkOnImage(
                        e, "modified")
                }, a.showClickFeedback = function (e) {
                    var i = new s("ClickFeedback");
                    this.differencesContainer.addChild(i), i.position =
                        e;
                    var t = i.addComponent(v);
                    t.circle(0, 0, 10), t.fillColor = new p(255, 255,
                        255, 200), t.fill();
                    var o = i.addComponent(I);
                    o.opacity = 255, C(i).to(.1, {
                        scale: new d(1.5, 1.5, 1.5)
                    }).to(.2, {
                        scale: new d(.2, .2, .2)
                    }).call((function () {
                        i.destroy()
                    })).start(), C(o).delay(.1).to(.2, {
                        opacity: 0
                    }).start()
                }, a.showErrorMarkOnImage = function (e, i) {
                    var t = "original" === i ? this.originalImageNode :
                        this.modifiedImageNode,
                        o = t.getChildByName("MarkContainer");
                    o || (o = new s("MarkContainer"), t.addChild(o)), F
                        .addErrorMarkAtPosition(o, e)
                }, a.showCorrectMarkOnImage = function (e, i) {
                    var t = "original" === i ? this.originalImageNode :
                        this.modifiedImageNode,
                        o = t.getChildByName("MarkContainer");
                    o || (o = new s("MarkContainer"), t.addChild(o)), F
                        .addCorrectMarkAtPosition(o, e)
                }, a.createDifferenceMarkOnNode = function (e, i, t) {
                    var o = new s("diff-" + i.id);
                    e.addChild(o);
                    var n = i.position.x * t,
                        a = i.position.y * t;
                    o.position = new d(n, a, 0);
                    var r = o.addComponent(v);
                    if ("point" === i.type) r.circle(0, 0, 15), r.fillColor =
                        new p(0, 255, 0, 150), r.fill(), r.fillColor =
                        p.WHITE, r.strokeColor = p.BLACK, r.lineWidth =
                        1, r.circle(0, 0, 4), r.fill(), r.stroke();
                    else if ("circle" === i.type) {
                        var l = i.radius * t;
                        r.circle(0, 0, l), r.fillColor = new p(0, 255,
                                0, 100), r.fill(), r.strokeColor = new p(
                                0, 200, 0, 100), r.lineWidth = 2, r.stroke(),
                            r.fillColor = p.WHITE, r.strokeColor = p.BLACK,
                            r.lineWidth = 1, r.circle(0, 0, 4), r.fill(),
                            r.stroke()
                    }
                    this.playFoundAnimation(o)
                }, a.visualDebug = function () {
                    var e = this,
                        i = this.node.getChildByName("DebugMarkers");
                    i && i.destroy();
                    var t = new s("DebugMarkers");
                    this.node.addChild(t);
                    var o = t.addComponent(I);
                    o.opacity = 255, this.debugCoordinates(), this.levelData &&
                        this.levelData.differences && this.levelData.differences
                        .forEach((function (i, o) {
                            var n = new s("DebugMarker-" + o);
                            t.addChild(n);
                            var a = i.position.x * e.scaleFactor,
                                r = i.position.y * e.scaleFactor;
                            n.position = new d(e.originalImageNode
                                .position.x + a, e.originalImageNode
                                .position.y + r, 0);
                            var l = n.addComponent(v);
                            l.circle(0, 0, 5), l.fillColor =
                                new p(255, 0, 0, 255), l.fill();
                            var c = new s("Label-" + o);
                            n.addChild(c), c.position = new d(0,
                                15, 0);
                            var h = c.addComponent(f);
                            h.string = "#" + (o + 1) + ": (" +
                                a.toFixed(0) + "," + r.toFixed(
                                    0) + ")", h.fontSize = 12,
                                h.color = p.RED
                        })), this.scheduleOnce((function () {
                            C(o).to(1, {
                                opacity: 0
                            }).call((function () {
                                t.isValid && t.destroy()
                            })).start()
                        }), 4)
                }, a.debugCoordinates = function () {
                    var e = this;
                    console.log("===== 预览坐标调试 ====="), console.log(
                            "缩放因子: " + this.scaleFactor), this.levelData &&
                        this.levelData.differences && (console.log(
                            "总共差异点数量: " + this.levelData.differences
                            .length), this.levelData.differences.forEach(
                            (function (i, t) {
                                var o = i.position.x * e.scaleFactor,
                                    n = i.position.y * e.scaleFactor;
                                console.log("差异点 " + (t + 1) +
                                        ":"), console.log(
                                        "  类型: " + i.type),
                                    console.log("  原始坐标: (" + i
                                        .position.x.toFixed(2) +
                                        ", " + i.position.y.toFixed(
                                            2) + ")"), console.log(
                                        "  显示坐标: (" + o.toFixed(
                                            2) + ", " + n.toFixed(
                                            2) + ")"), console.log(
                                        "  半径: 原始=" + i.radius.toFixed(
                                            2) + ", 显示=" + (i.radius *
                                            e.scaleFactor).toFixed(
                                            2))
                            })))
                }, a.playFoundAnimation = function (e) {
                    C(e).to(.15, {
                        scale: new d(1.5, 1.5, 1.5)
                    }).to(.15, {
                        scale: new d(1, 1, 1)
                    }).start()
                }, a.onAllDifferencesFound = function () {
                    console.log("恭喜！所有不同点都已找到！"), this.showCelebrationEffect()
                }, a.showCelebrationEffect = function () {
                    var e = new s("Celebration");
                    this.node.addChild(e);
                    var i = e.addComponent(h);
                    i.width = 1280, i.height = 720, e.addComponent(g).color =
                        new p(0, 0, 0, 150);
                    var t = e.addComponent(I);
                    t.opacity = 0;
                    var o = new s("CelebrationText");
                    e.addChild(o), o.position = new d(0, 50, 0);
                    var n = o.addComponent(f);
                    n.string = "恭喜！\n所有不同点都已找到！", n.fontSize = 40, n.lineHeight =
                        50, n.color = p.WHITE, n.horizontalAlign = f.HorizontalAlign
                        .CENTER, n.verticalAlign = f.VerticalAlign.CENTER,
                        e.scale = new d(.5, .5, 1), C(t).to(.3, {
                            opacity: 255
                        }).start(), C(e).to(.3, {
                            scale: new d(1, 1, 1)
                        }, {
                            easing: "bounceOut"
                        }).start(), this.scheduleOnce((function () {
                            C(t).to(.5, {
                                opacity: 0
                            }).call((function () {
                                e.destroy()
                            })).start()
                        }), 3)
                }, i
            }(D)).prototype, "originalImageNode", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), H = i(L.prototype, "modifiedImageNode", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), O = i(L.prototype, "differencesContainer", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), R = i(L.prototype, "frameSpriteFrame", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), W = i(L.prototype, "testModeBtn", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), _ = i(L.prototype, "debugBtn", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), B = L)) || B));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/JSBridge.ts", ["cc", "./ua-parser.min.mjs_cjs=&original=.js", "./EventEmitter.ts",
    "./ua-parser.min.js"], (function (e) {
    var n, i, t;
    return {
        setters: [function (e) {
            n = e.cclegacy
        }, null, function (e) {
            i = e.default
        }, function (e) {
            t = e.default
        }],
        execute: function () {
            n._RF.push({}, "c662cBImMRJwatRB6fbZ1+l", "JSBridge", void 0);
            e("default", new(function () {
                function e() {
                    var e = this;
                    this.emitter = void 0, this.os = void 0, this.emitter = new i;
                    var n = new t;
                    this.os = n.getOS(), "undefined" != typeof window && (window.onJSBridgeCallback =
                        function (n, i) {
                            console.log("JSBridge-output-[" + n + "]：", i);
                            var t = "string" == typeof i ? JSON.parse(i) : i;
                            e.emitter.emit(n, t)
                        })
                }
                var n = e.prototype;
                return n.invoke = function (e, n) {
                    var i = this;
                    if (console.log("JSBridge-input-[" + e + "]：", n), !0 === (null ==
                            n ? void 0 : n.callback)) return new Promise((function (t,
                        o) {
                        var r = function (e) {
                            t(e)
                        };
                        i.once(e, r);
                        var s = JSON.stringify({
                            name: e,
                            param: n
                        });
                        console.log("JSBridge-jsonString-[" + e + "]：",
                            s);
                        var l = i.core("takeNativeAction", s);
                        console.log(l, "bool"), l || (i.off(e, r), o(
                            "JSBridge Error"))
                    }));
                    var t = JSON.stringify({
                        name: e,
                        param: n
                    });
                    return console.log("JSBridge-jsonString-[" + e + "]：", t), void this
                        .core("takeNativeAction", t)
                }, n.on = function (e, n) {
                    this.emitter.on(e, n)
                }, n.once = function (e, n) {
                    this.emitter.once(e, n)
                }, n.off = function (e, n) {
                    this.emitter.off(e, n)
                }, n.core = function (e, n) {
                    try {
                        if (["iOS", "Mac OS"].includes(this.os.name || "")) {
                            var i, t;
                            if (null == (i = window.webkit) || !i.messageHandlers)
                                return !1;
                            null == (t = window.webkit) || null == (t = t.messageHandlers[
                                e]) || t.postMessage(null != n ? n : null)
                        } else {
                            if (!window.ykwebview) return !1;
                            var o, r;
                            if (void 0 === n) null == (o = window.ykwebview) || o[e]();
                            else null == (r = window.ykwebview) || r[e](n)
                        }
                        return !0
                    } catch (e) {
                        return console.log(e), !1
                    }
                }, e
            }()));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/levelItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./resourceUtil.ts",
    "./starLevel.ts", "./uiManager.ts", "./page.ts", "./UserManager.ts"], (function (t) {
    var e, i, n, r, o, s, l, a, c, u, h, p, f, v, d, g, b, _;
    return {
        setters: [function (t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, r =
                t.assertThisInitialized
        }, function (t) {
            o = t.cclegacy, s = t._decorator, l = t.Label, a = t.Prefab, c = t.Sprite, u = t.Color,
                h = t.Button, p = t.instantiate, f = t.Component
        }, function (t) {
            v = t.resourceUtil
        }, function (t) {
            d = t.starLevel
        }, function (t) {
            g = t.uiManager
        }, function (t) {
            b = t.PagePath
        }, function (t) {
            _ = t.UserManager
        }],
        execute: function () {
            var k, m, S, C, L, y, w, I, D;
            o._RF.push({}, "b45b8bSkJhOU6b+NLZuDqCb", "levelItem", void 0);
            var U = s.ccclass,
                z = s.property;
            t("levelItem", (k = U("levelItem"), m = z(l), S = z(a), C = z(c), k((w = e((y = function (t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), s =
                            0; s < i; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)) || this, n(
                            e, "title", w, r(e)), n(e, "starContainer", I,
                            r(e)), n(e, "lock", D, r(e)), e.level = 1, e.currentLevel =
                        1, e.star = 0, e._levelId = 0, e._isLocked = !0, e._isCompleted = !
                        1, e.bg = null, e
                }
                i(e, t);
                var o = e.prototype;
                return o.start = function () {
                    this.bg = this.node.getComponent(c)
                }, o.init = function (t) {
                    this._levelId = t.levelId, this._isLocked = t.isLocked,
                        this._isCompleted = t.isCompleted, this.currentLevel =
                        t.currentLevel, this.star = t.star || 2, this.bg =
                        this.node.getComponent(c), this.title.string =
                        "第" + t.levelId + "关", this.updateDisplay()
                }, o.updateDisplay = function () {
                    var t = this;
                    this._isLocked ? (this.title.color = new u(71, 57,
                            44), this.getComponent(h).interactable = !
                        1, this.lock.node.active = !0, v.setStarSprite(
                            "lock_disabled", this.lock, (function () {})
                        ), v.setStarSprite("level_item_bg_0", this.bg,
                            (function () {}))) : (this.getComponent(
                            h).interactable = !0, this._isCompleted ?
                        (this.title.color = new u(115, 52, 0), v.setStarSprite(
                            "level_item_bg_1", this.bg, (
                                function () {})), this.setStar(
                            this.star)) : (this.lock.node.active = !
                            0, this.title.color = new u(183, 113, 0),
                            v.setStarSprite("lock_active", this.lock,
                                (function () {})), v.setStarSprite(
                                "level_item_bg_2", this.bg, (
                                    function () {})))), this.node.on(
                        "click", (function () {
                            _.instance.getUserInfo((function () {
                                _.instance.user.life ?
                                    g.instance.showDialog(
                                        b.Game, [{
                                            level: t
                                                ._levelId
                                        }]) : g.instance
                                    .showTips(
                                        "点击首页【我的体力】完成任务领取体力哦！"
                                    )
                            }))
                        }))
                }, o.setTitle = function (t) {
                    this.title.string = "第" + t + "关", this.title.color =
                        t < this.currentLevel ? new u(115, 52, 0) : t ==
                        this.currentLevel ? new u(183, 113, 0) : new u(
                            71, 57, 44)
                }, o.setLock = function (t) {
                    this.level < t ? (this.lock.node.active = !1, this.setStar(
                        this.star)) : (this.lock.node.active = !0,
                        this.level == t ? v.setStarSprite(
                            "lock_active", this.lock, (function () {})
                        ) : v.setStarSprite("lock_disabled", this.lock,
                            (function () {})))
                }, o.setStar = function (t) {
                    if (this.starContainer) {
                        var e = p(this.starContainer);
                        e.parent = this.node;
                        var i = e.getComponent(d);
                        i && i.init(t)
                    }
                }, o.update = function (t) {}, e
            }(f)).prototype, "title", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), I = e(y.prototype, "starContainer", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), D = e(y.prototype, "lock", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), L = y)) || L));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/levelPage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./levelItem.ts"], (
    function (e) {
        var t, i, r, l, n, s, o, a, c, u;
        return {
            setters: [function (e) {
                t = e.applyDecoratedDescriptor, i = e.inheritsLoose, r = e.initializerDefineProperty, l =
                    e.assertThisInitialized
            }, function (e) {
                n = e.cclegacy, s = e._decorator, o = e.Prefab, a = e.instantiate, c = e.Component
            }, function (e) {
                u = e.levelItem
            }],
            execute: function () {
                var v, d, h, p, f, m, g, L;
                n._RF.push({}, "441acZhlaFAVaBaKkvHX/nS", "levelPage", void 0);
                var b = s.ccclass,
                    _ = s.property;
                e("LevelPage", (v = b("LevelPage"), d = _(o), v((f = t((p = function (e) {
                    function t() {
                        for (var t, i = arguments.length, n = new Array(i), s =
                                0; s < i; s++) n[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(n)) || this, r(
                                t, "levelItemPrefab", f, l(t)), r(t,
                                "gridColumns", m, l(t)), r(t, "gridRows", g, l(
                                t)), r(t, "itemSpacing", L, l(t)), t._levelItems = [],
                            t._startLevel = 0, t
                    }
                    i(t, e);
                    var n = t.prototype;
                    return n.init = function (e, t) {
                        this._startLevel = e, this.createGrid();
                        for (var i = 0; i < this.gridRows * this.gridColumns; i++) {
                            var r = e + i;
                            if (r <= t.length) this._levelItems[i].active = !
                                0, this._levelItems[i].getComponent(u).init({
                                    levelId: r,
                                    currentLevel: t[r - 1].currentLevel,
                                    isLocked: r > t[r - 1].currentLevel,
                                    isCompleted: t[r - 1].isCompleted,
                                    star: t[r - 1].star
                                }), this._levelItems[i].on("level-selected",
                                    this.onLevelSelected, this)
                        }
                    }, n.createGrid = function () {
                        for (var e = 0; e < this.gridRows; e++)
                            for (var t = 0; t < this.gridColumns; t++) {
                                var i = a(this.levelItemPrefab);
                                this.node.addChild(i), this._levelItems.push(
                                    i)
                            }
                    }, n.onLevelSelected = function (e) {
                        this.node.emit("level-selected", e)
                    }, n.updateLevelStatus = function (e, t, i, r, l) {
                        if (e >= this._startLevel && e < this._startLevel +
                            this.gridColumns * this.gridRows) {
                            var n = e - this._startLevel;
                            if (n >= 0 && n < this._levelItems.length) this
                                ._levelItems[n].getComponent(u).init({
                                    levelId: e,
                                    currentLevel: t,
                                    isLocked: i,
                                    isCompleted: r,
                                    star: l
                                })
                        }
                    }, t
                }(c)).prototype, "levelItemPrefab", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), m = t(p.prototype, "gridColumns", [_], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 5
                    }
                }), g = t(p.prototype, "gridRows", [_], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 5
                    }
                }), L = t(p.prototype, "itemSpacing", [_], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 10
                    }
                }), h = p)) || h));
                n._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/levelUi.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./uiManager.ts",
    "./page.ts", "./apiClient.ts", "./levelPage.ts"], (function (e) {
    var t, i, n, a, r, l, o, s, c, u, g, h, p, v, f, d, P, b;
    return {
        setters: [function (e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a =
                e.assertThisInitialized, r = e.asyncToGenerator, l = e.regeneratorRuntime
        }, function (e) {
            o = e.cclegacy, s = e._decorator, c = e.PageView, u = e.Prefab, g = e.Label, h = e.Node,
                p = e.instantiate, v = e.Component
        }, function (e) {
            f = e.uiManager
        }, function (e) {
            d = e.PagePath
        }, function (e) {
            P = e.ApiClient
        }, function (e) {
            b = e.LevelPage
        }],
        execute: function () {
            var L, w, m, C, y, D, k, V, _, I, z, B, R, x, S, T, M, N, A;
            o._RF.push({}, "5155eVGP4lDCLdrxSasN8CO", "levelUi", void 0);
            var F = s.ccclass,
                G = s.property;
            e("level", (L = F("level"), w = G(c), m = G(u), C = G(g), y = G(h), D = G(u), k = G(h), V =
                G(h), L((z = t((I = function (e) {
                    function t() {
                        for (var t, i = arguments.length, r = new Array(i), l =
                                0; l < i; l++) r[l] = arguments[l];
                        return t = e.call.apply(e, [this].concat(r)) || this, n(
                                t, "pageView", z, a(t)), n(t, "pageTemplate", B,
                                a(t)), n(t, "pageIndicator", R, a(t)), n(t,
                                "totalLevels", x, a(t)), n(t, "levelsPerPage",
                                S, a(t)), t._levelData = [], n(t, "container",
                                T, a(t)), n(t, "levelItemPrefab", M, a(t)), n(t,
                                "btnBack", N, a(t)), n(t, "btnReward", A, a(t)),
                            t.currentLevel = 1, t
                    }
                    i(t, e);
                    var o = t.prototype;
                    return o.onLoad = function () {
                        this.btnBack.on("click", this.onBtnBack, this),
                            this.btnReward.on("click", this.onBtnReward,
                                this)
                    }, o.start = function () {}, o.show = function () {
                        this.getLevelConfig()
                    }, o.createConfig = function (e) {
                        this.currentLevel = (50 == e.cur_level ? 51 : e.cur_level) ||
                            1, this.initLevelData(e.list), this.initPages(),
                            this.pageView.node.on("page-turning", this.onPageChanged,
                                this), this.node.on("level-selected", this.onLevelSelected,
                                this), this.updatePageIndicator()
                    }, o.onBtnBack = function () {
                        f.instance.showDialog(d.Main), f.instance.hideDialog(
                            d.Level)
                    }, o.onBtnReward = function () {
                        f.instance.hideDialog(d.Level), f.instance.showDialog(
                            d.Reward)
                    }, o.getLevelConfig = function () {
                        var e = r(l().mark((function e() {
                            var t = this;
                            return l().wrap((function (e) {
                                for (;;) switch (
                                    e.prev =
                                    e.next) {
                                    case 0:
                                        P.getlevelList()
                                            .then(
                                                (
                                                    function (
                                                        e
                                                    ) {
                                                        console
                                                            .log(
                                                                e
                                                            ),
                                                            t
                                                            .createConfig(
                                                                e
                                                            )
                                                    }
                                                )
                                            );
                                    case 1:
                                    case "end":
                                        return e
                                            .stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(), o.initLevelData = function (e) {
                        this._levelData = [];
                        for (var t = 1; t <= this.totalLevels; t++) {
                            var i;
                            if (e && 0 != e.length) this._levelData.push({
                                isLocked: t > this.currentLevel,
                                currentLevel: this.currentLevel,
                                isCompleted: t < this.currentLevel,
                                star: (null == (i = e[t - 1]) ?
                                    void 0 : i.star) || 0
                            });
                            else this._levelData.push({
                                isLocked: t > this.currentLevel,
                                currentLevel: this.currentLevel,
                                isCompleted: t < this.currentLevel,
                                star: 0
                            })
                        }
                    }, o.initPages = function () {
                        var e = Math.ceil(this.totalLevels / this.levelsPerPage);
                        this.pageView.removeAllPages();
                        for (var t = 0; t < e; t++) {
                            var i = p(this.pageTemplate),
                                n = i.getComponent(b),
                                a = t * this.levelsPerPage + 1;
                            n.init(a, this._levelData), this.pageView.addPage(
                                i)
                        }
                    }, o.updatePageIndicator = function () {
                        var e = this.pageView.getCurrentPageIndex(),
                            t = this.pageView.getPages().length;
                        this.pageIndicator.string = e + 1 + "/" + t
                    }, o.onPageChanged = function () {
                        this.updatePageIndicator()
                    }, o.onLevelSelected = function (e) {
                        console.log("选择了第 " + e + " 关")
                    }, o.updateLevelStatus = function (e, t, i) {
                        if (!(e < 1 || e > this.totalLevels)) {
                            this._levelData[e - 1].isLocked = t, this._levelData[
                                e - 1].isCompleted = i;
                            var n = Math.floor((e - 1) / this.levelsPerPage);
                            if (n >= 0 && n < this.pageView.getPages().length)
                                this.pageView.getPages()[n].getComponent(b)
                                .updateLevelStatus(e, this.currentLevel, t,
                                    i, 2)
                        }
                    }, o.onNextPageClicked = function () {
                        var e = this.pageView.getCurrentPageIndex();
                        e < this.pageView.getPages().length - 1 && this.pageView
                            .scrollToPage(e + 1)
                    }, o.onPrevPageClicked = function () {
                        var e = this.pageView.getCurrentPageIndex();
                        e > 0 && this.pageView.scrollToPage(e - 1)
                    }, o.unlockNextLevel = function () {
                        for (var e = 0; e < this._levelData.length; e++)
                            if (this._levelData[e].isLocked) {
                                this.updateLevelStatus(e + 1, !1, !1);
                                break
                            }
                    }, o.update = function (e) {}, t
                }(v)).prototype, "pageView", [w], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), B = t(I.prototype, "pageTemplate", [m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), R = t(I.prototype, "pageIndicator", [C], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), x = t(I.prototype, "totalLevels", [G], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 50
                    }
                }), S = t(I.prototype, "levelsPerPage", [G], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 25
                    }
                }), T = t(I.prototype, "container", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), M = t(I.prototype, "levelItemPrefab", [D], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), N = t(I.prototype, "btnBack", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), A = t(I.prototype, "btnReward", [V], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), _ = I)) || _));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/lifeCtrl.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./resourceUtil.ts"], (
    function (t) {
        var i, r, e, n, s, o, a, u, l, c, p;
        return {
            setters: [function (t) {
                i = t.applyDecoratedDescriptor, r = t.inheritsLoose, e = t.initializerDefineProperty, n =
                    t.assertThisInitialized
            }, function (t) {
                s = t.cclegacy, o = t._decorator, a = t.Sprite, u = t.tween, l = t.Vec3, c = t.Component
            }, function (t) {
                p = t.resourceUtil
            }],
            execute: function () {
                var f, h, S, m, y, d, b, w, z, g, v;
                s._RF.push({}, "a6a73RcCO1AuKZOICI83t5j", "lifeCtrl", void 0);
                var L = o.ccclass,
                    N = o.property;
                t("lifeCtrl", (f = L("lifeCtrl"), h = N(a), S = N(a), m = N(a), y = N(Number), f((w = i((b =
                    function (t) {
                        function i() {
                            for (var i, r = arguments.length, s = new Array(r), o =
                                    0; o < r; o++) s[o] = arguments[o];
                            return i = t.call.apply(t, [this].concat(s)) || this, e(
                                    i, "firstStar", w, n(i)), e(i, "secondStar", z,
                                    n(i)), e(i, "thirdStar", g, n(i)), e(i,
                                    "starNum", v, n(i)), i.starList = [], i.maxStarNum =
                                3, i
                        }
                        r(i, t);
                        var s = i.prototype;
                        return s.start = function () {
                            this.starList = [this.firstStar, this.secondStar,
                                this.thirdStar]
                        }, s.updateLife = function (t) {
                            if (console.log("updateLife", t), t < this.starNum)
                                for (var i = t; i < this.starNum; i++) i >= 0 &&
                                    i < this.starList.length && this.shakeStarSprite(
                                        this.starList[i]);
                            this.setStarNum(t)
                        }, s.setStarSprite = function (t, i) {
                            p.setGameSprite(t, i, (function () {}))
                        }, s.setStarNum = function (t) {
                            this.starNum = t < 0 ? 0 : t > this.maxStarNum ?
                                this.maxStarNum : t;
                            for (var i = 0; i < this.starList.length; i++) i <
                                t ? this.setStarSprite("life_active", this.starList[
                                    i]) : this.setStarSprite("life_disabled",
                                    this.starList[i])
                        }, s.shakeStarSprite = function (t) {
                            var i = t.node,
                                r = i.position.clone();
                            u(i).to(.05, {
                                position: new l(r.x - 5, r.y, r.z)
                            }).to(.05, {
                                position: new l(r.x + 5, r.y, r.z)
                            }).to(.05, {
                                position: new l(r.x - 4, r.y, r.z)
                            }).to(.05, {
                                position: new l(r.x + 4, r.y, r.z)
                            }).to(.05, {
                                position: new l(r.x - 3, r.y, r.z)
                            }).to(.05, {
                                position: new l(r.x + 3, r.y, r.z)
                            }).to(.05, {
                                position: r.clone()
                            }).start()
                        }, i
                    }(c)).prototype, "firstStar", [h], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), z = i(b.prototype, "secondStar", [S], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), g = i(b.prototype, "thirdStar", [m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), v = i(b.prototype, "starNum", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 0
                    }
                }), d = b)) || d));
                s._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/loading.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./updateValueLabel.ts"],
    (function (r) {
        var e, t, s, i, o, n, a, l, p, g, u, c;
        return {
            setters: [function (r) {
                e = r.applyDecoratedDescriptor, t = r.inheritsLoose, s = r.initializerDefineProperty, i =
                    r.assertThisInitialized
            }, function (r) {
                o = r.cclegacy, n = r._decorator, a = r.Label, l = r.ProgressBar, p = r.Node, g = r.Vec3,
                    u = r.Component
            }, function (r) {
                c = r.updateValueLabel
            }],
            execute: function () {
                var h, b, P, d, f, y, w, v, z, m, N;
                o._RF.push({}, "99c5fx0klFHq52oGPdZL7Z5", "loading", void 0);
                var L = n.ccclass,
                    B = n.property;
                r("loading", (h = L("loading"), b = B(c), P = B({
                    tooltip: "加载进度提示语",
                    type: a
                }), d = B({
                    tooltip: "加载进度条",
                    type: l
                }), f = B(p), h((v = e((w = function (r) {
                    function e() {
                        for (var e, t = arguments.length, o = new Array(t), n =
                                0; n < t; n++) o[n] = arguments[n];
                        return e = r.call.apply(r, [this].concat(o)) || this, s(
                                e, "lbProgress", v, i(e)), s(e, "lbTips", z, i(
                                e)), s(e, "progressBar", m, i(e)), s(e,
                                "pargressNode", N, i(e)), e.targetProgress = 0,
                            e.oriPos = new g, e
                    }
                    t(e, r);
                    var o = e.prototype;
                    return o.start = function () {
                        this.show(0)
                    }, o.show = function (r) {
                        this.targetProgress = r || 0, this.lbProgress.playUpdateValue(
                                this.targetProgress, this.targetProgress, 0
                            ), this.lbProgress.isPlaying = !1, this.lbTips.string =
                            "", this.oriPos.set(this.lbProgress.node.position)
                    }, o.updateProgress = function (r, e) {
                        this.targetProgress = r;
                        var t = Number(this.lbProgress.label.string);
                        this.lbProgress.playUpdateValue(t, this.targetProgress,
                                (this.targetProgress - t) / 100), this.progressBar
                            .progress = r / 100;
                        var s = r / 100 * 430 - 215;
                        this.pargressNode.position = new g(s, this.pargressNode
                                .position.y, this.pargressNode.position.z),
                            e && (this.lbTips.string = e), this.oriPos &&
                            this.lbProgress.node.setPosition(new g(this.oriPos
                                .x - 10, this.oriPos.y, this.oriPos.z))
                    }, e
                }(u)).prototype, "lbProgress", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), z = e(w.prototype, "lbTips", [P], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), m = e(w.prototype, "progressBar", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), N = e(w.prototype, "pargressNode", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), y = w)) || y));
                o._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/lodash.ts", ["cc"], (function (r) {
    var n, t;
    return {
        setters: [function (r) {
            n = r.cclegacy, t = r._decorator
        }],
        execute: function () {
            var e, i;
            n._RF.push({}, "c99f3Hc5AJKirdaoc6XjizU", "lodash", void 0);
            var u = t.ccclass;
            r("lodash", u("lodash")(((i = function () {
                function r() {}
                return r.find = function (r, n) {
                    var t;
                    if (Array.isArray(r) || (r = this.toArray(r)), (t = r.filter(
                            n)).length) return t[0]
                }, r.forEach = function (r, n) {
                    Array.isArray(r) ? r.forEach(n) : this.toArrayKey(r).forEach(
                        (function (t, e, i) {
                            var u = t.key,
                                o = t.value;
                            n(o, u, r)
                        }))
                }, r.cloneDeep = function (r) {
                    if (null === r || "object" != typeof r) return r;
                    var n = {};
                    for (var t in r.constructor === Array && (n = []), r) r.hasOwnProperty(
                        t) && (n[t] = this.cloneDeep(r[t]));
                    return n
                }, r.map = function (r, n) {
                    Array.isArray(r) || (r = this.toArray(r));
                    var t = [];
                    return r.forEach((function (r, e, i) {
                        t.push(n(r, e, i))
                    })), t
                }, r.random = function (r, n) {
                    var t = Math.random() * (n - r + 1) + r;
                    return Math.floor(t)
                }, r.toArrayKey = function (r) {
                    var n = [];
                    for (var t in r) r.hasOwnProperty(t) && n.push({
                        key: t,
                        value: r[t]
                    });
                    return n
                }, r.toArray = function (r) {
                    var n = [];
                    for (var t in r) r.hasOwnProperty(t) && n.push(r[t]);
                    return n
                }, r.filter = function (r, n) {
                    return Array.isArray(r) || (r = this.toArray(r)), r.filter(
                        n)
                }, r.isEqual = function (r, n) {
                    if (!(r instanceof Object) || !(n instanceof Object)) return r ===
                        n;
                    if (Object.keys(r).length !== Object.keys(n).length) return !
                        1;
                    for (var t in r) {
                        var e = r[t] instanceof Object,
                            i = n[t] instanceof Object;
                        if (e && i) return this.isEqual(r[t], n[t]);
                        if (r[t] !== n[t]) return !1
                    }
                    return !0
                }, r.pullAllWith = function (r, n, t) {
                    return n.forEach((function (n) {
                        r.filter((function (r) {
                            return t(r, n)
                        })).forEach((function (n) {
                            var t = r.indexOf(n); - 1
                                !== r.indexOf(n) && r.splice(
                                    t, 1)
                        }))
                    })), r
                }, r.now = function () {
                    return Date.now()
                }, r.pullAll = function (r, n) {
                    return n.forEach((function (n) {
                        var t = r.indexOf(n); - 1 !== r.indexOf(n) &&
                            r.splice(t, 1)
                    })), r
                }, r.forEachRight = function (r, n) {
                    Array.isArray(r) || (r = this.toArray(r));
                    for (var t = r.length - 1; t >= 0; t--) {
                        if (!n(r[t])) break
                    }
                }, r.startsWith = function (r, n, t) {
                    return (r = r.substr(t)).startsWith(n)
                }, r.endsWith = function (r, n, t) {
                    return (r = r.substr(t)).endsWith(n)
                }, r.remove = function (r, n) {
                    var t = [],
                        e = [];
                    return r.forEach((function (r, i) {
                        n(r) && (t.push(r), e.push(i))
                    })), this.basePullAt(r, e), t
                }, r.basePullAt = function (r, n) {
                    for (var t, e = r ? n.length : 0, i = e - 1; e--;) {
                        var u = n[e];
                        e !== i && u === t || (t = u, Array.prototype.splice.call(
                            r, u, 1))
                    }
                    return r
                }, r.findIndex = function (r, n, t) {
                    var e;
                    if (r = r.slice(t), "function" == typeof n) {
                        for (e = 0; e < r.length; e++)
                            if (n(r[e])) return e
                    } else if (Array.isArray(n))
                        for (e = 0; e < r.length; e++) {
                            var i = n[0],
                                u = !0;
                            if (n.length > 1 && (u = n[1]), r[e][i] === u)
                                return e
                        } else
                            for (e = 0; e < r.length; e++)
                                if (r[e] === n) return e;
                    return -1
                }, r.concat = function () {
                    var r = arguments.length;
                    if (!r) return [];
                    for (var n = arguments[0], t = 1; t < r;) n = n.concat(
                        arguments[t]), t++;
                    return n
                }, r.isNumber = function (r) {
                    return "number" == typeof r
                }, r.indexOf = function (r, n, t) {
                    return (r = r.slice(t)).indexOf(n)
                }, r.join = function (r, n) {
                    if (null === r) return "";
                    var t = "";
                    return r.forEach((function (r) {
                        t += r + n
                    })), t.substr(0, t.length - 1)
                }, r.split = function (r, n, t) {
                    return r.split(n, t)
                }, r.max = function (r) {
                    if (r && r.length) {
                        for (var n, t = 0; t < r.length; t++) 0 === t ? n = r[0] :
                            n < r[t] && (n = r[t]);
                        return n
                    }
                }, r.drop = function (r, n) {
                    return (null === r ? 0 : r.length) ? r.slice(n) : []
                }, r.flattenDeep = function (r) {
                    return r.reduce((function (r, n) {
                        return r.concat(n)
                    }))
                }, r.uniq = function (r) {
                    var n = [];
                    return r.forEach((function (r) {
                        -1 === n.indexOf(r) && n.push(r)
                    })), n
                }, r.isNaN = function (r) {
                    return this.isNumber(r) && r !== +r
                }, r.chunk = function (r, n) {
                    if (!(null === r ? 0 : r.length) || n < 1) return [];
                    for (var t = []; r.length > n;) t.push(r.slice(0, n)), r =
                        r.slice(n);
                    return t.push(r), t
                }, r.toFinite = function (r) {
                    var n = 1 / 0;
                    return r ? (r = Number(r)) === n || r === -1 / 0 ?
                        17976931348623157e292 * (r < 0 ? -1 : 1) : r == r ? r :
                        0 : 0 === r ? r : 0
                }, r.baseRange = function (r, n, t, e) {
                    for (var i = -1, u = (0, Math.max)((0, Math.ceil)((n - r) /
                            (t || 1)), 0), o = Array(u); u--;) o[e ? u : ++i] =
                        r, r += t;
                    return o
                }, r.isObject = function (r) {
                    var n = typeof r;
                    return null !== r && ("object" === n || "function" === n)
                }, r.isLength = function (n) {
                    return "number" == typeof n && n > -1 && n % 1 == 0 && n <=
                        r.MAX_SAFE_INTEGER
                }, r.isArrayLike = function (r) {
                    return null !== r && this.isLength(r.length)
                }, r.eq = function (r, n) {
                    return r === n || r != r && n != n
                }, r.isIndex = function (n, t) {
                    var e = typeof n;
                    return !!(t = null === t ? r.MAX_SAFE_INTEGER : t) && (
                            "number" === e || "symbol" !== e &&
                            /^(?:0|[1-9]\d*)$/.test(n)) && n > -1 && n % 1 == 0 &&
                        n < t
                }, r.isIterateeCall = function (r, n, t) {
                    if (!this.isObject(t)) return !1;
                    var e = typeof n;
                    return !!("number" === e ? this.isArrayLike(t) && this.isIndex(
                        n, t.length) : "string" === e && n in t) && this.eq(
                        t[n], r)
                }, r.createRange = function (r) {
                    var n = this;
                    return function (t, e, i) {
                        return i && "number" != typeof i && n.isIterateeCall(
                            t, e, i) && (e = i = void 0), t = n.toFinite(
                            t), void 0 === e ? (e = t, t = 0) : e = n.toFinite(
                            e), i = void 0 === i ? t < e ? 1 : -1 : n.toFinite(
                            i), n.baseRange(t, e, i, r)
                    }.bind(this)
                }, r.maxBy = function (r, n) {
                    if (r && r.length) {
                        for (var t = -1, e = -1, i = 0; i < r.length; i++) 0 ===
                            i ? (t = n(r[0]), e = r[0]) : t < r[i] && (t = r[i],
                                e = r[i]);
                        return e
                    }
                }, r.minBy = function (r, n) {
                    if (r && r.length) {
                        for (var t = -1, e = -1, i = 0; i < r.length; i++) 0 ===
                            i ? (t = n(r[0]), e = r[0]) : t > r[i] && (t = n(r[
                                i]), e = r[i]);
                        return e
                    }
                }, r.sumBy = function (r, n) {
                    var t = 0;
                    for (var e in r) t += n(r[e]);
                    return t
                }, r.countBy = function (r) {
                    var n = {};
                    for (var t in r) {
                        var e = r[t];
                        n.hasOwnProperty(e) ? n[e] += 1 : n[e] = 1
                    }
                    return n
                }, r
            }()).MAX_SAFE_INTEGER = 9007199254740991, e = i)) || e);
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Log.ts", ["cc", "./constant.ts"], (function (e) {
    var t, n;
    return {
        setters: [function (e) {
            t = e.cclegacy
        }, function (e) {
            n = e.constant
        }],
        execute: function () {
            var o;
            t._RF.push({}, "ab5a6vmHrBCeoEEYlEKq8/q", "Log", void 0);
            var c = e("default", (function () {}));
            o = c, c.log = function (e, t) {
                n.debug_log && (t || !1 === t ? console.log("[" + o.getTimeHMS() + "][" + e + "]",
                    t) : console.log("[" + o.getTimeHMS() + "][" + e + "]"))
            }, c.getTimeHMS = function () {
                var e = new Date;
                return e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + "--\x3e"
            }, t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/main", ["./debug-view-runtime-control.ts", "./PosterGenerator.ts",
    "./TypewriterEffect.ts", "./chapterConfig.ts", "./constant.ts", "./gameEnum.ts", "./page.ts",
    "./resultRandom.ts", "./GameRoot.ts", "./EnumCmdName.ts", "./apiClient.ts", "./apiService.ts",
    "./configuration.ts", "./httpClient.ts", "./resourceUtil.ts", "./NetGame.ts", "./ServerEventNames.ts",
    "./Socket.ts", "./SocketClient.ts", "./SocketService.ts", "./wxService.ts", "./CreateMark.ts",
    "./ImageDifferenceGame.ts", "./RewardGame.ts", "./StarRatingSystem.ts", "./WordDifferenceGame.ts",
    "./EventEmitter.ts", "./JSBridge.ts", "./qrcode.ecm.mjs_cjs=&original=.js",
    "./ua-parser.min.mjs_cjs=&original=.js", "./MainManager.ts", "./Marker.ts", "./UrlManager.ts",
    "./UserManager.ts", "./audioManager.ts", "./gameManager.ts", "./poolManager.ts", "./uiManager.ts",
    "./chapter.ts", "./CaptureImage.ts", "./CommonDlg.ts", "./MaskLayer.ts", "./blockInputEvent.ts",
    "./btnAdapter.ts", "./btnSahre.ts", "./loading.ts", "./tips.ts", "./updateValueLabel.ts", "./gameUi.ts",
    "./lifeCtrl.ts", "./fail.ts", "./levelItem.ts", "./levelPage.ts", "./levelUi.ts", "./starLevel.ts",
    "./main.ts", "./prize.ts", "./reward.ts", "./rewardItem.ts", "./rule.ts", "./success.ts", "./task.ts",
    "./taskItem.ts", "./share.ts", "./EventHandler.ts", "./Log.ts", "./gi.ts", "./lodash.ts", "./md5.ts",
    "./util.ts"], (function () {
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null],
        execute: function () {}
    }
}));

System.register("chunks:///_virtual/main.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./uiManager.ts", "./Log.ts",
    "./UserManager.ts", "./JSBridge.ts", "./page.ts", "./audioManager.ts", "./resourceUtil.ts"], (function (n) {
    var i, t, e, a, o, c, s, r, u, l, f, p, h, g, m, d, y;
    return {
        setters: [function (n) {
            i = n.applyDecoratedDescriptor, t = n.inheritsLoose, e = n.initializerDefineProperty, a =
                n.assertThisInitialized
        }, function (n) {
            o = n.cclegacy, c = n._decorator, s = n.RichText, r = n.Sprite, u = n.Animation, l = n.Component
        }, function (n) {
            f = n.uiManager
        }, function (n) {
            p = n.default
        }, function (n) {
            h = n.UserManager
        }, function (n) {
            g = n.default
        }, function (n) {
            m = n.PagePath
        }, function (n) {
            d = n.audioManager
        }, function (n) {
            y = n.resourceUtil
        }],
        execute: function () {
            var b, v, B, w, M, k, C, D, S;
            o._RF.push({}, "04bc8LC4BpEOq8FN3IttniP", "main", void 0);
            var N = c.ccclass,
                R = c.property;
            n("mainUI", (b = N("main"), v = R({
                type: s
            }), B = R({
                type: r
            }), w = R({
                type: u
            }), b((C = i((k = function (n) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), c =
                            0; c < t; c++) o[c] = arguments[c];
                    return i = n.call.apply(n, [this].concat(o)) || this, e(
                            i, "life", C, a(i)), e(i, "spMusic", D, a(i)),
                        e(i, "animation", S, a(i)), i
                }
                t(i, n);
                var o = i.prototype;
                return o.start = function () {}, o.onEnable = function () {},
                    o.onDisable = function () {}, o.show = function (n) {
                        var i = this;
                        (void 0 === n ? {
                            isNeed: !1
                        } : n).isNeed;
                        p.log("主界面启动..."), h.instance.getUserInfo((function () {
                            i.life.string = "我的体力: " + h.instance
                                .user.life
                        })), this.resetAnimation()
                    }, o.resetAnimation = function () {
                        if (this.node.getChildByName("btns").active = !0,
                            this.node.getChildByName("btns2").active = !0,
                            this.animation) {
                            this.animation.stop();
                            var n = this.animation.getState("home");
                            n.setTime(0), n.sample(), n.stop()
                        }
                    }, o.onBtnStartClick = function () {
                        h.instance.user.life ? (this.animation.play(), this
                            .node.getChildByName("btns").active = !1,
                            this.node.getChildByName("btns2").active = !
                            1, this.animation.once(u.EventType.FINISHED,
                                (function () {
                                    f.instance.showDialog(m.Level),
                                        f.instance.hideDialog(m.Main)
                                }))) : f.instance.showTips(
                            "当前体力值为0，无法开始游戏")
                    }, o.onBtnMusicClick = function () {
                        d.instance.toggleMusic();
                        var n = "textures/UI/home/";
                        d._audioSource.playing ? n += "icon_music" : n +=
                            "icon_music_off", y.setSpriteFrame(n, this.spMusic,
                                (function () {}))
                    }, o.onBtnShareClick = function () {
                        h.instance.shareGameMain().then((function () {
                            f.instance.showTips("链接已复制到剪切板~")
                        }))
                    }, o.onBtnRankClick = function () {
                        f.instance.showDialog(m.Task)
                    }, o.onBtnRewardClick = function () {
                        f.instance.showDialog(m.Reward)
                    }, o.onBtnRuleClick = function () {
                        f.instance.showDialog(m.Rule)
                    }, o.onBtnBackClick = function () {
                        g.invoke("closeWebView", {
                            callback: !0
                        }).then((function (n) {
                            console.log("返回app", n)
                        })).catch((function (n) {
                            console.log("返回app失败", n)
                        }))
                    }, i
            }(l)).prototype, "life", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), D = i(k.prototype, "spMusic", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), S = i(k.prototype, "animation", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), M = k)) || M));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MainManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./uiManager.ts",
    "./util.ts", "./UserManager.ts", "./Log.ts", "./constant.ts", "./EventHandler.ts", "./loading.ts",
    "./apiClient.ts", "./gameEnum.ts", "./page.ts", "./wxService.ts"], (function (n) {
    var e, t, o, i, a, r, c, s, l, u, g, d, p, f, h, m, I, M, v, w;
    return {
        setters: [function (n) {
            e = n.applyDecoratedDescriptor, t = n.inheritsLoose, o = n.initializerDefineProperty, i =
                n.assertThisInitialized
        }, function (n) {
            a = n.cclegacy, r = n._decorator, c = n.Label, s = n.Component
        }, function (n) {
            l = n.uiManager
        }, function (n) {
            u = n.isWeiXin, g = n.getUrlParam
        }, function (n) {
            d = n.UserManager
        }, function (n) {
            p = n.default
        }, function (n) {
            f = n.constant
        }, function (n) {
            h = n.EventHandler
        }, function (n) {
            m = n.loading
        }, function (n) {
            I = n.ApiClient
        }, function (n) {
            M = n.LoginEnum
        }, function (n) {
            v = n.PagePath
        }, function (n) {
            w = n.WxService
        }],
        execute: function () {
            var U, S, x, y, b, D, L;
            a._RF.push({}, "9a1d0MTd0JJnZ+4dwRxOFSw", "MainManager", void 0);
            var P = r.ccclass,
                T = r.property;
            n("MainManager", (U = P("MainManager"), S = T({
                tooltip: "版本号",
                type: c
            }), x = T({
                tooltip: "UI界面",
                type: m
            }), U((D = e((b = function (n) {
                function e() {
                    for (var e, t = arguments.length, a = new Array(t), r =
                            0; r < t; r++) a[r] = arguments[r];
                    return e = n.call.apply(n, [this].concat(a)) || this, o(
                            e, "lbVersion", D, i(e)), o(e, "loadingUI", L,
                            i(e)), e.curProgress = 0, e.isLoginFinished = !
                        1, e
                }
                t(e, n);
                var a = e.prototype;
                return a.onEnable = function () {
                    h.on("RESET_MAIN", this.restMainUI, this)
                }, a.start = function () {
                    f.isTest || (this.loadingUI || console.log(
                            "loadingUI is null, please check"),
                        this.loadingUI.show(), this.login())
                }, a.loadResources = function (n) {
                    var e = this,
                        t = !1;
                    gi.loadBundle("resources", (function (o, i, a) {
                        var r = Math.ceil(100 * o);
                        gi.alert("加载进度：", r, "当前加载的资源：", i),
                            e.curProgress = r, e.loadingUI.updateProgress(
                                e.curProgress, "资源加载中..."),
                            o >= .9 && !t && (t = !0, e.curProgress =
                                100, e.loadingUI.updateProgress(
                                    e.curProgress, "资源加载完成"
                                ), setTimeout((function () {
                                    n && n()
                                }), 100))
                    }))
                }, a.login = function () {
                    var n = this,
                        e = !1,
                        t = null;
                    if (localStorage.getItem("token")) return e = !0, d
                        .instance.sendLogDataWithNum(), void I.getUserInfo()
                        .then((function () {
                            console.log("token有效"), n.loadResources(
                                (function () {
                                    n.goToMain()
                                }))
                        })).catch((function (n) {}));
                    if (u()) {
                        var o = g("code");
                        if (!o) return void this.redirect();
                        d.instance.setUserInfo({
                            loginType: M.wx
                        }), e = !0, t = {
                            code: o
                        }, this.loadWxConfig()
                    }
                    e ? I.login(t).then((function (e) {
                        var t = e.token;
                        console.log("登录成功", t),
                            localStorage.setItem("token", t),
                            d.instance.setUserInfo({
                                token: t
                            }), d.instance.sendLogDataWithNum(),
                            n.loadResources((function () {
                                n.goToMain()
                            }))
                    })).catch((function (e) {
                        console.log("登录失败", e), 200007 ===
                            e.code && n.redirectBind(),
                            200009 === e.code && n.redirect()
                    })) : this.loadResources((function () {
                        n.goToMain()
                    }))
                }, a.goToMain = function () {
                    var n = localStorage.getItem("chapter") || "[]",
                        e = JSON.parse(n).includes("0");
                    this.loadingUI.node.active = !1, e ? l.instance.showDialog(
                        v.Main) : l.instance.showDialog(v.Chapter,
                        ["0"])
                }, a.redirectBind = function () {
                    location.href = f.BIND_URL
                }, a.redirect = function () {
                    var n = location.href.replace(
                            /([?&])(code|state)=[^&]*/g, "$1").replace(
                            /\?$/, "").replace(/[?&]+/g, "?").replace(
                            /\?+$/, ""),
                        e = encodeURIComponent(n);
                    location.href =
                        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa18303ad360d1aa8&redirect_uri=" +
                        e +
                        "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"
                }, a.loadWxScript = function () {
                    return new Promise((function (n, e) {
                        if (window.wx) n();
                        else {
                            var t = document.createElement(
                                "script");
                            t.type = "text/javascript", t.src =
                                "https://res.wx.qq.com/open/js/jweixin-1.6.0.js",
                                t.onload = function () {
                                    return n()
                                }, t.onerror = function () {
                                    return e(new Error(
                                        "Failed to load WeChat JSSDK"
                                    ))
                                }, document.head.appendChild(
                                    t)
                        }
                    }))
                }, a.loadWxConfig = function () {
                    this.loadWxScript().then((function () {
                        w.getJsConfig({
                            url: encodeURIComponent(
                                location.href)
                        }).then((function (n) {
                            console.log(
                                "获取JSSDK配置成功:",
                                n), wx.config({
                                debug:
                                    !1,
                                appId: n
                                    .appId,
                                timestamp: n
                                    .timestamp,
                                nonceStr: n
                                    .nonceStr,
                                signature: n
                                    .signature,
                                jsApiList: []
                                    .concat(
                                        n
                                        .jsApiList,
                                        [
                                            "updateAppMessageShareData"
                                            ]
                                    )
                            }), wx.ready((
                                function () {
                                    wx.updateAppMessageShareData({
                                        title: "《三国杀OL》千变万幻",
                                        desc: "我在《三国杀OL》眼力大考验里闯到" +
                                            d
                                            .instance
                                            .user
                                            .level +
                                            "关啦！你也来试试吧！",
                                        link: location
                                            .origin +
                                            location
                                            .pathname,
                                        imgUrl: "https://ygdmy25-static.sanguosha.com/zbt/sdk/shareImg.jpg",
                                        success: function () {
                                            console
                                                .log(
                                                    "分享给朋友设置成功"
                                                )
                                        }
                                    })
                                }))
                        }))
                    }))
                }, a.restMainUI = function () {
                    p.log("回到主界面"), d.instance.init(""), l.instance.hideDialog(
                        "game/game", (function () {
                            l.instance.showDialog("main/main",
                                [{
                                    isNeed: !0
                                }])
                        }))
                }, e
            }(s)).prototype, "lbVersion", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), L = e(b.prototype, "loadingUI", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), y = b)) || y));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Marker.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
    var t, r, n, o, c, s;
    return {
        setters: [function (e) {
            t = e.inheritsLoose
        }, function (e) {
            r = e.cclegacy, n = e._decorator, o = e.v3, c = e.tween, s = e.Component
        }],
        execute: function () {
            var a;
            r._RF.push({}, "eea59A1Q4lBMpkS2qlkISi7", "Marker", void 0);
            var i = n.ccclass;
            n.property, e("Marker", i("Marker")(a = function (e) {
                function r() {
                    return e.apply(this, arguments) || this
                }
                return t(r, e), r.prototype.onLoad = function () {
                    this.node.setScale(o(0, 0, 1)), c(this.node).to(.2, {
                        scale: o(1, 1, 1)
                    }, {
                        easing: "backOut"
                    }).start()
                }, r
            }(s)) || a);
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MaskLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var n, o, i, e, s, r, a, c;
    return {
        setters: [function (t) {
            n = t.inheritsLoose
        }, function (t) {
            o = t.cclegacy, i = t._decorator, e = t.Widget, s = t.Sprite, r = t.Color, a = t.Button,
                c = t.Component
        }],
        execute: function () {
            var h;
            o._RF.push({}, "5e3ec/V/ZtIdqNlEe6P9GdM", "MaskLayer", void 0);
            var u = i.ccclass;
            i.property, t("MaskLayer", u("MaskLayer")(h = function (t) {
                function o() {
                    for (var n, o = arguments.length, i = new Array(o), e = 0; e < o; e++) i[
                        e] = arguments[e];
                    return (n = t.call.apply(t, [this].concat(i)) || this)._isShowing = !1,
                        n
                }
                n(o, t);
                var i = o.prototype;
                return i.onLoad = function () {
                    this.setupMask(), this.node.active = !1
                }, i.setupMask = function () {
                    var t = this.getOrAddComponent(e);
                    t.isAlignTop = t.isAlignBottom = t.isAlignLeft = t.isAlignRight = !
                        0, t.top = t.bottom = t.left = t.right = 0, this.getOrAddComponent(
                            s).color = new r(0, 0, 0, 128), this.getOrAddComponent(a).transition =
                        a.Transition.NONE, t.updateAlignment()
                }, i.getOrAddComponent = function (t) {
                    return this.node.getComponent(t) || this.node.addComponent(t)
                }, i.show = function () {
                    this.node.active = !0, this._isShowing = !0
                }, i.hide = function () {
                    this.node.active = !1, this._isShowing = !1
                }, i.toggle = function () {
                    this._isShowing ? this.hide() : this.show()
                }, o
            }(c)) || h);
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/md5.ts", ["cc"], (function (r) {
    var n;
    return {
        setters: [function (r) {
            n = r.cclegacy
        }],
        execute: function () {
            r("md5", (function (r) {
                var n = function (r, n) {
                        return r << n | r >>> 32 - n
                    },
                    t = function (r, n) {
                        var t, e, o, u, i;
                        return o = 2147483648 & r, u = 2147483648 & n, i = (1073741823 & r) +
                            (1073741823 & n), (t = 1073741824 & r) & (e = 1073741824 & n) ?
                            2147483648 ^ i ^ o ^ u : t | e ? 1073741824 & i ? 3221225472 ^
                            i ^ o ^ u : 1073741824 ^ i ^ o ^ u : i ^ o ^ u
                    },
                    e = function (r, e, o, u, i, c, f) {
                        return r = t(r, t(t(function (r, n, t) {
                            return r & n | ~r & t
                        }(e, o, u), i), f)), t(n(r, c), e)
                    },
                    o = function (r, e, o, u, i, c, f) {
                        return r = t(r, t(t(function (r, n, t) {
                            return r & t | n & ~t
                        }(e, o, u), i), f)), t(n(r, c), e)
                    },
                    u = function (r, e, o, u, i, c, f) {
                        return r = t(r, t(t(function (r, n, t) {
                            return r ^ n ^ t
                        }(e, o, u), i), f)), t(n(r, c), e)
                    },
                    i = function (r, e, o, u, i, c, f) {
                        return r = t(r, t(t(function (r, n, t) {
                            return n ^ (r | ~t)
                        }(e, o, u), i), f)), t(n(r, c), e)
                    },
                    c = function (r) {
                        for (var n, t = r.length, e = t + 8, o = 16 * ((e - e % 64) / 64 +
                                1), u = Array(o - 1), i = 0, c = 0; c < t;) i = c % 4 * 8,
                            u[n = (c - c % 4) / 4] = u[n] | r.charCodeAt(c) << i, c++;
                        return i = c % 4 * 8, u[n = (c - c % 4) / 4] = u[n] | 128 << i, u[o -
                            2] = t << 3, u[o - 1] = t >>> 29, u
                    },
                    f = function (r) {
                        var n, t = "",
                            e = "";
                        for (n = 0; n <= 3; n++) t += (e = "0" + (r >>> 8 * n & 255).toString(
                            16)).substr(e.length - 2, 2);
                        return t
                    },
                    a = function (r) {
                        r = r.toString().replace(/\x0d\x0a/g, "\n");
                        for (var n = "", t = 0; t < r.length; t++) {
                            var e = r.charCodeAt(t);
                            e < 128 ? n += String.fromCharCode(e) : e > 127 && e < 2048 ? (
                                n += String.fromCharCode(e >> 6 | 192), n += String.fromCharCode(
                                    63 & e | 128)) : (n += String.fromCharCode(e >> 12 |
                                    224), n += String.fromCharCode(e >> 6 & 63 | 128),
                                n += String.fromCharCode(63 & e | 128))
                        }
                        return n
                    };
                return function (r) {
                    var n, d, g, h, C, m, s, v, S, l = Array();
                    for (r = a(r), l = c(r), m = 1732584193, s = 4023233417, v =
                        2562383102, S = 271733878, n = 0; n < l.length; n += 16) d = m,
                        g = s, h = v, C = S, m = e(m, s, v, S, l[n + 0], 7, 3614090360),
                        S = e(S, m, s, v, l[n + 1], 12, 3905402710), v = e(v, S, m, s,
                            l[n + 2], 17, 606105819), s = e(s, v, S, m, l[n + 3], 22,
                            3250441966), m = e(m, s, v, S, l[n + 4], 7, 4118548399), S =
                        e(S, m, s, v, l[n + 5], 12, 1200080426), v = e(v, S, m, s, l[n +
                            6], 17, 2821735955), s = e(s, v, S, m, l[n + 7], 22,
                            4249261313), m = e(m, s, v, S, l[n + 8], 7, 1770035416), S =
                        e(S, m, s, v, l[n + 9], 12, 2336552879), v = e(v, S, m, s, l[n +
                            10], 17, 4294925233), s = e(s, v, S, m, l[n + 11], 22,
                            2304563134), m = e(m, s, v, S, l[n + 12], 7, 1804603682), S =
                        e(S, m, s, v, l[n + 13], 12, 4254626195), v = e(v, S, m, s, l[n +
                            14], 17, 2792965006), s = e(s, v, S, m, l[n + 15], 22,
                            1236535329), m = o(m, s, v, S, l[n + 1], 5, 4129170786), S =
                        o(S, m, s, v, l[n + 6], 9, 3225465664), v = o(v, S, m, s, l[n +
                            11], 14, 643717713), s = o(s, v, S, m, l[n + 0], 20,
                            3921069994), m = o(m, s, v, S, l[n + 5], 5, 3593408605), S =
                        o(S, m, s, v, l[n + 10], 9, 38016083), v = o(v, S, m, s, l[n +
                            15], 14, 3634488961), s = o(s, v, S, m, l[n + 4], 20,
                            3889429448), m = o(m, s, v, S, l[n + 9], 5, 568446438), S =
                        o(S, m, s, v, l[n + 14], 9, 3275163606), v = o(v, S, m, s, l[n +
                            3], 14, 4107603335), s = o(s, v, S, m, l[n + 8], 20,
                            1163531501), m = o(m, s, v, S, l[n + 13], 5, 2850285829), S =
                        o(S, m, s, v, l[n + 2], 9, 4243563512), v = o(v, S, m, s, l[n +
                            7], 14, 1735328473), s = o(s, v, S, m, l[n + 12], 20,
                            2368359562), m = u(m, s, v, S, l[n + 5], 4, 4294588738), S =
                        u(S, m, s, v, l[n + 8], 11, 2272392833), v = u(v, S, m, s, l[n +
                            11], 16, 1839030562), s = u(s, v, S, m, l[n + 14], 23,
                            4259657740), m = u(m, s, v, S, l[n + 1], 4, 2763975236), S =
                        u(S, m, s, v, l[n + 4], 11, 1272893353), v = u(v, S, m, s, l[n +
                            7], 16, 4139469664), s = u(s, v, S, m, l[n + 10], 23,
                            3200236656), m = u(m, s, v, S, l[n + 13], 4, 681279174), S =
                        u(S, m, s, v, l[n + 0], 11, 3936430074), v = u(v, S, m, s, l[n +
                            3], 16, 3572445317), s = u(s, v, S, m, l[n + 6], 23,
                            76029189), m = u(m, s, v, S, l[n + 9], 4, 3654602809), S =
                        u(S, m, s, v, l[n + 12], 11, 3873151461), v = u(v, S, m, s, l[n +
                            15], 16, 530742520), s = u(s, v, S, m, l[n + 2], 23,
                            3299628645), m = i(m, s, v, S, l[n + 0], 6, 4096336452), S =
                        i(S, m, s, v, l[n + 7], 10, 1126891415), v = i(v, S, m, s, l[n +
                            14], 15, 2878612391), s = i(s, v, S, m, l[n + 5], 21,
                            4237533241), m = i(m, s, v, S, l[n + 12], 6, 1700485571), S =
                        i(S, m, s, v, l[n + 3], 10, 2399980690), v = i(v, S, m, s, l[n +
                            10], 15, 4293915773), s = i(s, v, S, m, l[n + 1], 21,
                            2240044497), m = i(m, s, v, S, l[n + 8], 6, 1873313359), S =
                        i(S, m, s, v, l[n + 15], 10, 4264355552), v = i(v, S, m, s, l[n +
                            6], 15, 2734768916), s = i(s, v, S, m, l[n + 13], 21,
                            1309151649), m = i(m, s, v, S, l[n + 4], 6, 4149444226), S =
                        i(S, m, s, v, l[n + 11], 10, 3174756917), v = i(v, S, m, s, l[n +
                            2], 15, 718787259), s = i(s, v, S, m, l[n + 9], 21,
                            3951481745), m = t(m, d), s = t(s, g), v = t(v, h), S = t(S,
                            C);
                    return (f(m) + f(s) + f(v) + f(S)).toLowerCase()
                }(r)
            })), n._RF.push({}, "bd9deAiXadOSJ3hlib09QTa", "md5", void 0), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/NetGame.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Log.ts", "./Socket.ts",
    "./constant.ts", "./uiManager.ts", "./UserManager.ts"], (function (e) {
    var t, n, s, r, o, i, a;
    return {
        setters: [function (e) {
            t = e.createClass
        }, function (e) {
            n = e.cclegacy
        }, function (e) {
            s = e.default
        }, function (e) {
            r = e.default
        }, function (e) {
            o = e.constant
        }, function (e) {
            i = e.uiManager
        }, function (e) {
            a = e.UserManager
        }],
        execute: function () {
            n._RF.push({}, "6a37edBt3hGapYioZwD5vj+", "NetGame", void 0);
            var c = e("default", function () {
                function e() {
                    this._server = null
                }
                var n = e.prototype;
                return n.destroy = function () {
                    this._server && (this._server.close(), this._server = null)
                }, n.disconnect = function () {
                    this._server && (o.isOffline || this._server.close())
                }, n.loginServer = function () {
                    var t = this;
                    s.log("ws开启"), o.isOffline || (this._server = new r({
                        url: o.gameServer,
                        token: localStorage.getItem("token"),
                        challengeID: a.instance.user.code,
                        onerror: function (e) {
                            s.log(e), i.instance.showTips(e, (function () {
                                t.destroy(), i.instance.showDialog(
                                    "main/main")
                            }))
                        },
                        gameOverCallback: function (t) {
                            s.log("gameOverCallback", t), e._gameId = t.id,
                                a.instance.user.life = t.life, localStorage
                                .setItem("historyScore", t.maxScore)
                        }
                    }))
                }, n.setGameOver = function (e) {
                    this._server.setGameOver(e)
                }, n.sendScore = function (e) {
                    var t = e.score,
                        n = e.totalScore,
                        s = e.id,
                        r = e.state;
                    this._server.send({
                        type: 100202,
                        score: t,
                        id: s,
                        state: r,
                        totalScore: n,
                        token: localStorage.getItem("token")
                    })
                }, t(e, null, [{
                    key: "instance",
                    get: function () {
                        return this._instance || (this._instance = new e), this
                            ._instance
                    }
                }, {
                    key: "gameId",
                    get: function () {
                        return this._gameId
                    }
                }]), e
            }());
            c._instance = void 0, c._gameId = "", n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/page.ts", ["cc"], (function (e) {
    var a;
    return {
        setters: [function (e) {
            a = e.cclegacy
        }],
        execute: function () {
            a._RF.push({}, "5d7d2eMqV1LZ7onNqP4DKui", "page", void 0);
            var r = e("PagePath", (function () {}));
            r.Loading = "loading/loading", r.Main = "main/main", r.Game = "game/gameUi", r.Task =
                "task/task", r.Rule = "rule/rule", r.Reward = "reward/reward", r.Fail = "fail/fail", r.Win =
                "success/success", r.Prize = "prize/prize", r.Level = "level/level", r.Chapter =
                "chapter/chapter", r.Share = "share/share", a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/poolManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var o, e, n, i, a;
    return {
        setters: [function (t) {
            o = t.createClass
        }, function (t) {
            e = t.cclegacy, n = t._decorator, i = t.instantiate, a = t.NodePool
        }],
        execute: function () {
            var r, c;
            e._RF.push({}, "a8783L4oGBDzpDICATfWuFN", "poolManager", void 0);
            var s = n.ccclass;
            n.property, t("poolManager", s("poolManager")(((c = function () {
                function t() {
                    this.dictPool = {}, this.dictPrefab = {}
                }
                var e = t.prototype;
                return e.getNode = function (t, o) {
                    var e, n = t.data.name;
                    if (this.dictPrefab[n] = t, this.dictPool.hasOwnProperty(n)) {
                        var r = this.dictPool[n];
                        e = r.size() > 0 ? r.get() : i(t)
                    } else {
                        var c = new a;
                        this.dictPool[n] = c, e = i(t)
                    }
                    return e.parent = o, e
                }, e.putNode = function (t) {
                    var o = t.name,
                        e = null;
                    this.dictPool.hasOwnProperty(o) ? e = this.dictPool[o] : (e =
                        new a, this.dictPool[o] = e), e.put(t)
                }, e.clearPool = function (t) {
                    this.dictPool.hasOwnProperty(t) && this.dictPool[t].clear()
                }, o(t, null, [{
                    key: "instance",
                    get: function () {
                        return this._instance || (this._instance =
                            new t), this._instance
                    }
                }]), t
            }())._instance = void 0, r = c)) || r);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PosterGenerator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
    var r, t, n, o, a, i, c, s, l, u, h, f, d;
    return {
        setters: [function (e) {
            r = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, o =
                e.assertThisInitialized
        }, function (e) {
            a = e.cclegacy, i = e._decorator, c = e.Node, s = e.Camera, l = e.Size, u = e.RenderTexture,
                h = e.sys, f = e.view, d = e.Component
        }],
        execute: function () {
            var p, g, m, w, v, x, y, T, b;
            a._RF.push({}, "d4324JYGm5NE6ERPFFIj6VD", "PosterGenerator", void 0);
            var P = i.ccclass,
                F = i.property;
            e("PosterGenerator", (p = P("PosterGenerator"), g = F(c), m = F(c), w = F(s), p((y = r((x =
                function (e) {
                    function r() {
                        for (var r, t = arguments.length, a = new Array(t), i =
                                0; i < t; i++) a[i] = arguments[i];
                        return r = e.call.apply(e, [this].concat(a)) || this, n(
                            r, "targetNode", y, o(r)), n(r,
                            "posterTemplateNode", T, o(r)), n(r, "camera",
                            b, o(r)), r.renderTexture = null, r
                    }
                    t(r, e);
                    var a = r.prototype;
                    return a.show = function () {
                        console.log("PosterGenerator show")
                    }, a.onEnable = function () {
                        console.log("PosterGenerator enabled")
                    }, a.generatePoster = function (e) {
                        var r = this;
                        if (this.targetNode && this.camera) {
                            var t = new l(750, 1624);
                            this.renderTexture = new u, this.renderTexture.reset({
                                    width: t.width,
                                    height: t.height
                                }), this.camera.targetTexture = this.renderTexture,
                                this.scheduleOnce((function () {
                                    var n = r.captureScreenBuffer();
                                    if (n) {
                                        var o = r.bufferToBase64Image(
                                            n, t.width, t.height
                                        );
                                        r.camera.targetTexture =
                                            null, r.renderTexture.destroy(),
                                            e(o)
                                    } else console.error(
                                            "Failed to capture screen buffer"
                                        ), r.camera.targetTexture =
                                        null, r.renderTexture && r.renderTexture
                                        .destroy()
                                }), 0)
                        } else console.error(
                            "Target node or camera not set")
                    }, a.captureScreenBuffer = function () {
                        if (!this.renderTexture) return null;
                        var e = this.renderTexture.width,
                            r = this.renderTexture.height,
                            t = new Uint8Array(e * r * 4);
                        try {
                            return this.renderTexture.readPixels(0, 0, e, r,
                                t), t
                        } catch (e) {
                            return console.error("Error reading pixels:", e),
                                null
                        }
                    }, a.captureByPlatform = function (e) {
                        h.platform === h.Platform.WECHAT_GAME ? this.captureForWechat(
                                e) : h.platform === h.Platform.BYTEDANCE_MINI_GAME ?
                            this.captureForByteDance(e) : h.isBrowser ?
                            this.generatePoster(e) : (console.warn(
                                "Screenshot not supported on current platform"
                            ), e(""))
                    }, a.captureForWechat = function (e) {
                        window.wx ? window.wx.createScreenshot({
                            success: function (r) {
                                e(r.tempFilePath)
                            },
                            fail: function (r) {
                                console.error(
                                    "Wechat screenshot failed",
                                    r), e("")
                            }
                        }) : e("")
                    }, a.captureForByteDance = function (e) {
                        window.tt ? window.tt.createScreenshot({
                            success: function (r) {
                                e(r.tempFilePath)
                            },
                            fail: function (r) {
                                console.error(
                                    "ByteDance screenshot failed",
                                    r), e("")
                            }
                        }) : e("")
                    }, a.bufferToBase64Image = function (e, r, t) {
                        if (!h.isBrowser) return console.warn(
                            "Canvas operations are only supported in browser environment"
                        ), "";
                        var n = document.createElement("canvas");
                        n.width = r, n.height = t;
                        var o = n.getContext("2d");
                        if (o) {
                            for (var a = o.createImageData(r, t), i = 0; i <
                                t; i++)
                                for (var c = 0; c < r; c++) {
                                    var s = 4 * (i * r + c),
                                        l = 4 * ((t - 1 - i) * r + c);
                                    a.data[l] = e[s], a.data[l + 1] = e[s +
                                            1], a.data[l + 2] = e[s + 2], a
                                        .data[l + 3] = e[s + 3]
                                }
                            o.putImageData(a, 0, 0);
                            try {
                                return n.toDataURL("image/png")
                            } catch (e) {
                                return console.error(
                                    "Failed to convert canvas to data URL",
                                    e), ""
                            }
                        }
                        return ""
                    }, a.composePoster = function (e, r) {
                        if (this.posterTemplateNode && h.isBrowser) {
                            var t = document.createElement("canvas"),
                                n = f.getVisibleSize();
                            t.width = n.width, t.height = n.height;
                            var o = t.getContext("2d");
                            if (o) {
                                var a = new Image;
                                a.crossOrigin = "anonymous", a.onload =
                                    function () {
                                        o.drawImage(a, 0, 0, t.width, t.height),
                                            o.fillStyle =
                                            "rgba(0, 0, 0, 0.5)", o.fillRect(
                                                0, t.height - 150, t.width,
                                                150), o.fillStyle =
                                            "#ffffff", o.font =
                                            "bold 40px Arial", o.textAlign =
                                            "center", o.fillText("找不同游戏", t
                                                .width / 2, t.height - 90),
                                            o.font = "30px Arial", o.fillText(
                                                "扫描二维码一起来玩吧!", t.width / 2,
                                                t.height - 40);
                                        try {
                                            var n = t.toDataURL("image/png");
                                            r(n)
                                        } catch (t) {
                                            console.error(
                                                "Failed to convert canvas to data URL",
                                                t), r(e)
                                        }
                                    }, a.onerror = function () {
                                        console.error(
                                            "Failed to load game screenshot"
                                        ), r(e)
                                    }, a.src = e
                            } else r(e)
                        } else r(e)
                    }, r
                }(d)).prototype, "targetNode", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), T = r(x.prototype, "posterTemplateNode", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), b = r(x.prototype, "camera", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), v = x)) || v));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/prize.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./resourceUtil.ts",
    "./uiManager.ts", "./page.ts", "./EventHandler.ts"], (function (t) {
    var i, e, r, n, a, s, o, u, l, c, p, h, f, b, d;
    return {
        setters: [function (t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, r = t.initializerDefineProperty, n =
                t.assertThisInitialized
        }, function (t) {
            a = t.cclegacy, s = t._decorator, o = t.Node, u = t.RichText, l = t.Sprite, c = t.Label,
                p = t.Component
        }, function (t) {
            h = t.resourceUtil
        }, function (t) {
            f = t.uiManager
        }, function (t) {
            b = t.PagePath
        }, function (t) {
            d = t.EventHandler
        }],
        execute: function () {
            var m, g, S, v, z, y, N, w, x, L, D, P, R, M, _, A, F;
            a._RF.push({}, "1d445+FgpxEMpM36th/gqYX", "prize", void 0);
            var E = s.ccclass,
                T = s.property;
            t("prize", (m = E("prize"), g = T(o), S = T(o), v = T(u), z = T(l), y = T(l), N = T(l), w =
                T(c), m((D = i((L = function (t) {
                    function i() {
                        for (var i, e = arguments.length, a = new Array(e), s =
                                0; s < e; s++) a[s] = arguments[s];
                        return i = t.call.apply(t, [this].concat(a)) || this, r(
                                i, "btnNext", D, n(i)), r(i, "btnReawrd", P, n(
                                i)), r(i, "tips", R, n(i)), r(i, "firstStar", M,
                                n(i)), r(i, "secondStar", _, n(i)), r(i,
                                "thirdStar", A, n(i)), r(i, "num", F, n(i)), i.starList = [],
                            i.starNum = 2, i.maxStarNum = 3, i.level = void 0,
                            i.count = void 0, i
                    }
                    e(i, t);
                    var a = i.prototype;
                    return a.start = function () {}, a.show = function (t) {
                        var i = t.star,
                            e = t.level,
                            r = t.count;
                        this.starList = [this.firstStar, this.secondStar,
                                this.thirdStar], this.starNum = i, this.level =
                            e, this.count = r, this.setTips(), this.setStarNum(
                                this.starNum), this.num.string = "" + r
                    }, a.setTips = function () {
                        var t = this.starNum,
                            i = 3 == t ? "90%" : 2 == t ? "50%" : "30%";
                        this.tips.string = "\n你已超越<color=#FFA624>" + i +
                            "</color>主公！\n获得魔吕布的额外奖励!"
                    }, a.setStarSprite = function (t, i) {
                        h.setPrizeStarSprite(t, i, (function () {}))
                    }, a.setStarNum = function (t) {
                        this.starNum = t < 0 ? 0 : t > this.maxStarNum ?
                            this.maxStarNum : t;
                        for (var i = 0; i < this.starList.length; i++) i <
                            t ? this.setStarSprite("star", this.starList[i]) :
                            this.setStarSprite("star_un", this.starList[i])
                    }, a.onNext = function () {
                        f.instance.hideDialog(b.Prize), d.dispatch(
                            "GAME_AGAIN", {
                                level: this.level
                            })
                    }, a.onReawrd = function () {
                        f.instance.hideDialog(b.Prize), f.instance.hideDialog(
                            b.Game), f.instance.showDialog(b.Reward)
                    }, a.update = function (t) {}, i
                }(p)).prototype, "btnNext", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), P = i(L.prototype, "btnReawrd", [S], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), R = i(L.prototype, "tips", [v], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), M = i(L.prototype, "firstStar", [z], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), _ = i(L.prototype, "secondStar", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), A = i(L.prototype, "thirdStar", [N], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), F = i(L.prototype, "num", [w], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), x = L)) || x));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/qrcode.ecm.js", ["./cjs-loader.mjs"], (function (t, e) {
    var r;
    return {
        setters: [function (t) {
            r = t.default
        }],
        execute: function () {
            t("default", void 0);
            var n = t("__cjsMetaURL", e.meta.url);
            r.define(n, (function (e, r, n, o, a) {
                var i, s;
                i = this, s = function (t) {
                        var e, r = function () {
                                return "function" == typeof Promise && Promise.prototype &&
                                    Promise.prototype.then
                            },
                            n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466,
                                532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364,
                                1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611,
                                2761, 2876, 3034, 3196, 3362, 3532, 3706],
                            o = function (t) {
                                if (!t) throw new Error(
                                    '"version" cannot be null or undefined');
                                if (t < 1 || t > 40) throw new Error(
                                    '"version" should be in range from 1 to 40');
                                return 4 * t + 17
                            },
                            a = function (t) {
                                return n[t]
                            },
                            i = function (t) {
                                for (var e = 0; 0 !== t;) e++, t >>>= 1;
                                return e
                            },
                            s = function (t) {
                                if ("function" != typeof t) throw new Error(
                                    '"toSJISFunc" is not a valid function.');
                                e = t
                            },
                            u = function () {
                                return void 0 !== e
                            },
                            f = function (t) {
                                return e(t)
                            };

                        function c(t, e) {
                            return t(e = {
                                exports: {}
                            }, e.exports), e.exports
                        }
                        var h = c((function (t, e) {
                            e.L = {
                                bit: 1
                            }, e.M = {
                                bit: 0
                            }, e.Q = {
                                bit: 3
                            }, e.H = {
                                bit: 2
                            }, e.isValid = function (t) {
                                return t && void 0 !== t.bit && t.bit >= 0 &&
                                    t.bit < 4
                            }, e.from = function (t, r) {
                                if (e.isValid(t)) return t;
                                try {
                                    return function (t) {
                                        if ("string" != typeof t) throw new Error(
                                            "Param is not a string"
                                        );
                                        switch (t.toLowerCase()) {
                                            case "l":
                                            case "low":
                                                return e.L;
                                            case "m":
                                            case "medium":
                                                return e.M;
                                            case "q":
                                            case "quartile":
                                                return e.Q;
                                            case "h":
                                            case "high":
                                                return e.H;
                                            default:
                                                throw new Error(
                                                    "Unknown EC Level: " +
                                                    t)
                                        }
                                    }(t)
                                } catch (t) {
                                    return r
                                }
                            }
                        }));

                        function g() {
                            this.buffer = [], this.length = 0
                        }
                        h.L, h.M, h.Q, h.H, h.isValid, g.prototype = {
                            get: function (t) {
                                var e = Math.floor(t / 8);
                                return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                            },
                            put: function (t, e) {
                                for (var r = 0; r < e; r++) this.putBit(1 == (t >>>
                                    e - r - 1 & 1))
                            },
                            getLengthInBits: function () {
                                return this.length
                            },
                            putBit: function (t) {
                                var e = Math.floor(this.length / 8);
                                this.buffer.length <= e && this.buffer.push(0), t &&
                                    (this.buffer[e] |= 128 >>> this.length % 8),
                                    this.length++
                            }
                        };
                        var d = g;

                        function l(t) {
                            if (!t || t < 1) throw new Error(
                                "BitMatrix size must be defined and greater than 0"
                            );
                            this.size = t, this.data = new Uint8Array(t * t), this.reservedBit =
                                new Uint8Array(t * t)
                        }
                        l.prototype.set = function (t, e, r, n) {
                            var o = t * this.size + e;
                            this.data[o] = r, n && (this.reservedBit[o] = !0)
                        }, l.prototype.get = function (t, e) {
                            return this.data[t * this.size + e]
                        }, l.prototype.xor = function (t, e, r) {
                            this.data[t * this.size + e] ^= r
                        }, l.prototype.isReserved = function (t, e) {
                            return this.reservedBit[t * this.size + e]
                        };
                        var p = l,
                            v = c((function (t, e) {
                                var r = o;
                                e.getRowColCoords = function (t) {
                                    if (1 === t) return [];
                                    for (var e = Math.floor(t / 7) + 2, n = r(t),
                                            o = 145 === n ? 26 : 2 * Math.ceil(
                                                (n - 13) / (2 * e - 2)), a = [n -
                                                7], i = 1; i < e - 1; i++) a[i] =
                                        a[i - 1] - o;
                                    return a.push(6), a.reverse()
                                }, e.getPositions = function (t) {
                                    for (var r = [], n = e.getRowColCoords(t),
                                            o = n.length, a = 0; a < o; a++)
                                        for (var i = 0; i < o; i++) 0 === a &&
                                            0 === i || 0 === a && i === o - 1 ||
                                            a === o - 1 && 0 === i || r.push([n[
                                                a], n[i]]);
                                    return r
                                }
                            }));
                        v.getRowColCoords, v.getPositions;
                        var m = o,
                            w = function (t) {
                                var e = m(t);
                                return [[0, 0], [e - 7, 0], [0, e - 7]]
                            },
                            y = c((function (t, e) {
                                e.Patterns = {
                                    PATTERN000: 0,
                                    PATTERN001: 1,
                                    PATTERN010: 2,
                                    PATTERN011: 3,
                                    PATTERN100: 4,
                                    PATTERN101: 5,
                                    PATTERN110: 6,
                                    PATTERN111: 7
                                };
                                var r = 3,
                                    n = 3,
                                    o = 40,
                                    a = 10;

                                function i(t, r, n) {
                                    switch (t) {
                                        case e.Patterns.PATTERN000:
                                            return (r + n) % 2 == 0;
                                        case e.Patterns.PATTERN001:
                                            return r % 2 == 0;
                                        case e.Patterns.PATTERN010:
                                            return n % 3 == 0;
                                        case e.Patterns.PATTERN011:
                                            return (r + n) % 3 == 0;
                                        case e.Patterns.PATTERN100:
                                            return (Math.floor(r / 2) + Math.floor(
                                                n / 3)) % 2 == 0;
                                        case e.Patterns.PATTERN101:
                                            return r * n % 2 + r * n % 3 == 0;
                                        case e.Patterns.PATTERN110:
                                            return (r * n % 2 + r * n % 3) % 2 == 0;
                                        case e.Patterns.PATTERN111:
                                            return (r * n % 3 + (r + n) % 2) % 2 ==
                                                0;
                                        default:
                                            throw new Error("bad maskPattern:" + t)
                                    }
                                }
                                e.isValid = function (t) {
                                    return null != t && "" !== t && !isNaN(t) &&
                                        t >= 0 && t <= 7
                                }, e.from = function (t) {
                                    return e.isValid(t) ? parseInt(t, 10) :
                                        void 0
                                }, e.getPenaltyN1 = function (t) {
                                    for (var e = t.size, n = 0, o = 0, a = 0, i =
                                            null, s = null, u = 0; u < e; u++) {
                                        o = a = 0, i = s = null;
                                        for (var f = 0; f < e; f++) {
                                            var c = t.get(u, f);
                                            c === i ? o++ : (o >= 5 && (n += r +
                                                    (o - 5)), i = c, o = 1), (c =
                                                    t.get(f, u)) === s ? a++ :
                                                (a >= 5 && (n += r + (a - 5)),
                                                    s = c, a = 1)
                                        }
                                        o >= 5 && (n += r + (o - 5)), a >= 5 &&
                                            (n += r + (a - 5))
                                    }
                                    return n
                                }, e.getPenaltyN2 = function (t) {
                                    for (var e = t.size, r = 0, o = 0; o < e -
                                        1; o++)
                                        for (var a = 0; a < e - 1; a++) {
                                            var i = t.get(o, a) + t.get(o, a +
                                                1) + t.get(o + 1, a) + t.get(
                                                o + 1, a + 1);
                                            4 !== i && 0 !== i || r++
                                        }
                                    return r * n
                                }, e.getPenaltyN3 = function (t) {
                                    for (var e = t.size, r = 0, n = 0, a = 0, i =
                                            0; i < e; i++) {
                                        n = a = 0;
                                        for (var s = 0; s < e; s++) n = n << 1 &
                                            2047 | t.get(i, s), s >= 10 && (
                                                1488 === n || 93 === n) && r++,
                                            a = a << 1 & 2047 | t.get(s, i), s >=
                                            10 && (1488 === a || 93 === a) && r++
                                    }
                                    return r * o
                                }, e.getPenaltyN4 = function (t) {
                                    for (var e = 0, r = t.data.length, n = 0; n <
                                        r; n++) e += t.data[n];
                                    return Math.abs(Math.ceil(100 * e / r / 5) -
                                        10) * a
                                }, e.applyMask = function (t, e) {
                                    for (var r = e.size, n = 0; n < r; n++)
                                        for (var o = 0; o < r; o++) e.isReserved(
                                            o, n) || e.xor(o, n, i(t, o, n))
                                }, e.getBestMask = function (t, r) {
                                    for (var n = Object.keys(e.Patterns).length,
                                            o = 0, a = 1 / 0, i = 0; i < n; i++) {
                                        r(i), e.applyMask(i, t);
                                        var s = e.getPenaltyN1(t) + e.getPenaltyN2(
                                            t) + e.getPenaltyN3(t) + e.getPenaltyN4(
                                            t);
                                        e.applyMask(i, t), s < a && (a = s, o =
                                            i)
                                    }
                                    return o
                                }
                            }));
                        y.Patterns, y.isValid, y.getPenaltyN1, y.getPenaltyN2, y.getPenaltyN3,
                            y.getPenaltyN4, y.applyMask, y.getBestMask;
                        var E = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4,
                                2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8,
                                4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6,
                                10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7,
                                14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9,
                                18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37,
                                12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40,
                                48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37,
                                51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22,
                                45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                            A = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52,
                                64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48,
                                88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150,
                                224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216,
                                320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308,
                                448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416,
                                600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
                                750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644,
                                952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420,
                                784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530,
                                510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
                                1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630,
                                1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950,
                                2310, 750, 1372, 2040, 2430],
                            x = function (t, e) {
                                switch (e) {
                                    case h.L:
                                        return E[4 * (t - 1) + 0];
                                    case h.M:
                                        return E[4 * (t - 1) + 1];
                                    case h.Q:
                                        return E[4 * (t - 1) + 2];
                                    case h.H:
                                        return E[4 * (t - 1) + 3];
                                    default:
                                        return
                                }
                            },
                            M = function (t, e) {
                                switch (e) {
                                    case h.L:
                                        return A[4 * (t - 1) + 0];
                                    case h.M:
                                        return A[4 * (t - 1) + 1];
                                    case h.Q:
                                        return A[4 * (t - 1) + 2];
                                    case h.H:
                                        return A[4 * (t - 1) + 3];
                                    default:
                                        return
                                }
                            },
                            I = new Uint8Array(512),
                            N = new Uint8Array(256);
                        ! function () {
                            for (var t = 1, e = 0; e < 255; e++) I[e] = t, N[t] = e, 256 &
                                (t <<= 1) && (t ^= 285);
                            for (var r = 255; r < 512; r++) I[r] = I[r - 255]
                        }();
                        var P = function (t) {
                                return I[t]
                            },
                            C = function (t, e) {
                                return 0 === t || 0 === e ? 0 : I[N[t] + N[e]]
                            },
                            B = c((function (t, e) {
                                e.mul = function (t, e) {
                                    for (var r = new Uint8Array(t.length + e.length -
                                            1), n = 0; n < t.length; n++)
                                        for (var o = 0; o < e.length; o++) r[n +
                                            o] ^= C(t[n], e[o]);
                                    return r
                                }, e.mod = function (t, e) {
                                    for (var r = new Uint8Array(t); r.length -
                                        e.length >= 0;) {
                                        for (var n = r[0], o = 0; o < e.length; o++)
                                            r[o] ^= C(e[o], n);
                                        for (var a = 0; a < r.length && 0 ===
                                            r[a];) a++;
                                        r = r.slice(a)
                                    }
                                    return r
                                }, e.generateECPolynomial = function (t) {
                                    for (var r = new Uint8Array([1]), n = 0; n <
                                        t; n++) r = e.mul(r, new Uint8Array([1,
                                        P(n)]));
                                    return r
                                }
                            }));

                        function R(t) {
                            this.genPoly = void 0, this.degree = t, this.degree && this.initialize(
                                this.degree)
                        }
                        B.mul, B.mod, B.generateECPolynomial, R.prototype.initialize =
                            function (t) {
                                this.degree = t, this.genPoly = B.generateECPolynomial(this
                                    .degree)
                            }, R.prototype.encode = function (t) {
                                if (!this.genPoly) throw new Error(
                                    "Encoder not initialized");
                                var e = new Uint8Array(t.length + this.degree);
                                e.set(t);
                                var r = B.mod(e, this.genPoly),
                                    n = this.degree - r.length;
                                if (n > 0) {
                                    var o = new Uint8Array(this.degree);
                                    return o.set(r, n), o
                                }
                                return r
                            };
                        var T = R,
                            L = function (t) {
                                return !isNaN(t) && t >= 1 && t <= 40
                            },
                            b = "[0-9]+",
                            U =
                            "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                            S = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (U = U.replace(/u/g, "\\u")) +
                            ")(?:.|[\r\n]))+",
                            k = new RegExp(U, "g"),
                            D = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"),
                            F = new RegExp(S, "g"),
                            _ = new RegExp(b, "g"),
                            Y = new RegExp("[A-Z $%*+\\-./:]+", "g"),
                            z = new RegExp("^" + U + "$"),
                            H = new RegExp("^[0-9]+$"),
                            J = new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),
                            K = {
                                KANJI: k,
                                BYTE_KANJI: D,
                                BYTE: F,
                                NUMERIC: _,
                                ALPHANUMERIC: Y,
                                testKanji: function (t) {
                                    return z.test(t)
                                },
                                testNumeric: function (t) {
                                    return H.test(t)
                                },
                                testAlphanumeric: function (t) {
                                    return J.test(t)
                                }
                            },
                            O = c((function (t, e) {
                                e.NUMERIC = {
                                    id: "Numeric",
                                    bit: 1,
                                    ccBits: [10, 12, 14]
                                }, e.ALPHANUMERIC = {
                                    id: "Alphanumeric",
                                    bit: 2,
                                    ccBits: [9, 11, 13]
                                }, e.BYTE = {
                                    id: "Byte",
                                    bit: 4,
                                    ccBits: [8, 16, 16]
                                }, e.KANJI = {
                                    id: "Kanji",
                                    bit: 8,
                                    ccBits: [8, 10, 12]
                                }, e.MIXED = {
                                    bit: -1
                                }, e.getCharCountIndicator = function (t, e) {
                                    if (!t.ccBits) throw new Error(
                                        "Invalid mode: " + t);
                                    if (!L(e)) throw new Error(
                                        "Invalid version: " + e);
                                    return e >= 1 && e < 10 ? t.ccBits[0] : e <
                                        27 ? t.ccBits[1] : t.ccBits[2]
                                }, e.getBestModeForData = function (t) {
                                    return K.testNumeric(t) ? e.NUMERIC : K.testAlphanumeric(
                                            t) ? e.ALPHANUMERIC : K.testKanji(t) ?
                                        e.KANJI : e.BYTE
                                }, e.toString = function (t) {
                                    if (t && t.id) return t.id;
                                    throw new Error("Invalid mode")
                                }, e.isValid = function (t) {
                                    return t && t.bit && t.ccBits
                                }, e.from = function (t, r) {
                                    if (e.isValid(t)) return t;
                                    try {
                                        return function (t) {
                                            if ("string" != typeof t) throw new Error(
                                                "Param is not a string"
                                            );
                                            switch (t.toLowerCase()) {
                                                case "numeric":
                                                    return e.NUMERIC;
                                                case "alphanumeric":
                                                    return e.ALPHANUMERIC;
                                                case "kanji":
                                                    return e.KANJI;
                                                case "byte":
                                                    return e.BYTE;
                                                default:
                                                    throw new Error(
                                                        "Unknown mode: " +
                                                        t)
                                            }
                                        }(t)
                                    } catch (t) {
                                        return r
                                    }
                                }
                            }));
                        O.NUMERIC, O.ALPHANUMERIC, O.BYTE, O.KANJI, O.MIXED, O.getCharCountIndicator,
                            O.getBestModeForData, O.isValid;
                        var V = c((function (t, e) {
                            var r = i(7973);

                            function n(t, e) {
                                return O.getCharCountIndicator(t, e) + 4
                            }

                            function o(t, e) {
                                var r = 0;
                                return t.forEach((function (t) {
                                    var o = n(t.mode, e);
                                    r += o + t.getBitsLength()
                                })), r
                            }
                            e.from = function (t, e) {
                                return L(t) ? parseInt(t, 10) : e
                            }, e.getCapacity = function (t, e, r) {
                                if (!L(t)) throw new Error(
                                    "Invalid QR Code version");
                                void 0 === r && (r = O.BYTE);
                                var o = 8 * (a(t) - M(t, e));
                                if (r === O.MIXED) return o;
                                var i = o - n(r, t);
                                switch (r) {
                                    case O.NUMERIC:
                                        return Math.floor(i / 10 * 3);
                                    case O.ALPHANUMERIC:
                                        return Math.floor(i / 11 * 2);
                                    case O.KANJI:
                                        return Math.floor(i / 13);
                                    case O.BYTE:
                                    default:
                                        return Math.floor(i / 8)
                                }
                            }, e.getBestVersionForData = function (t, r) {
                                var n, a = h.from(r, h.M);
                                if (Array.isArray(t)) {
                                    if (t.length > 1) return function (t, r) {
                                        for (var n = 1; n <= 40; n++)
                                            if (o(t, n) <= e.getCapacity(
                                                    n, r, O.MIXED))
                                                return n
                                    }(t, a);
                                    if (0 === t.length) return 1;
                                    n = t[0]
                                } else n = t;
                                return function (t, r, n) {
                                    for (var o = 1; o <= 40; o++)
                                        if (r <= e.getCapacity(o, n, t))
                                            return o
                                }(n.mode, n.getLength(), a)
                            }, e.getEncodedBits = function (t) {
                                if (!L(t) || t < 7) throw new Error(
                                    "Invalid QR Code version");
                                for (var e = t << 12; i(e) - r >= 0;) e ^=
                                    7973 << i(e) - r;
                                return t << 12 | e
                            }
                        }));
                        V.getCapacity, V.getBestVersionForData, V.getEncodedBits;
                        var q = i(1335),
                            Q = function (t, e) {
                                for (var r = t.bit << 3 | e, n = r << 10; i(n) - q >= 0;) n ^=
                                    1335 << i(n) - q;
                                return 21522 ^ (r << 10 | n)
                            };

                        function j(t) {
                            this.mode = O.NUMERIC, this.data = t.toString()
                        }
                        j.getBitsLength = function (t) {
                            return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
                        }, j.prototype.getLength = function () {
                            return this.data.length
                        }, j.prototype.getBitsLength = function () {
                            return j.getBitsLength(this.data.length)
                        }, j.prototype.write = function (t) {
                            var e, r, n;
                            for (e = 0; e + 3 <= this.data.length; e += 3) r = this.data
                                .substr(e, 3), n = parseInt(r, 10), t.put(n, 10);
                            var o = this.data.length - e;
                            o > 0 && (r = this.data.substr(e), n = parseInt(r, 10), t.put(
                                n, 3 * o + 1))
                        };
                        var $ = j,
                            X = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B",
                                "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
                                "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                                " ", "$", "%", "*", "+", "-", ".", "/", ":"];

                        function W(t) {
                            this.mode = O.ALPHANUMERIC, this.data = t
                        }
                        W.getBitsLength = function (t) {
                            return 11 * Math.floor(t / 2) + t % 2 * 6
                        }, W.prototype.getLength = function () {
                            return this.data.length
                        }, W.prototype.getBitsLength = function () {
                            return W.getBitsLength(this.data.length)
                        }, W.prototype.write = function (t) {
                            var e;
                            for (e = 0; e + 2 <= this.data.length; e += 2) {
                                var r = 45 * X.indexOf(this.data[e]);
                                r += X.indexOf(this.data[e + 1]), t.put(r, 11)
                            }
                            this.data.length % 2 && t.put(X.indexOf(this.data[e]), 6)
                        };
                        var Z = W;

                        function G(t) {
                            this.mode = O.BYTE, this.data = "string" == typeof t ? (new TextEncoder)
                                .encode(t) : new Uint8Array(t)
                        }
                        G.getBitsLength = function (t) {
                            return 8 * t
                        }, G.prototype.getLength = function () {
                            return this.data.length
                        }, G.prototype.getBitsLength = function () {
                            return G.getBitsLength(this.data.length)
                        }, G.prototype.write = function (t) {
                            for (var e = 0, r = this.data.length; e < r; e++) t.put(
                                this.data[e], 8)
                        };
                        var tt = G;

                        function et(t) {
                            this.mode = O.KANJI, this.data = t
                        }
                        et.getBitsLength = function (t) {
                            return 13 * t
                        }, et.prototype.getLength = function () {
                            return this.data.length
                        }, et.prototype.getBitsLength = function () {
                            return et.getBitsLength(this.data.length)
                        }, et.prototype.write = function (t) {
                            var e;
                            for (e = 0; e < this.data.length; e++) {
                                var r = f(this.data[e]);
                                if (r >= 33088 && r <= 40956) r -= 33088;
                                else {
                                    if (!(r >= 57408 && r <= 60351)) throw new Error(
                                        "Invalid SJIS character: " + this.data[
                                            e] +
                                        "\nMake sure your charset is UTF-8");
                                    r -= 49472
                                }
                                r = 192 * (r >>> 8 & 255) + (255 & r), t.put(r, 13)
                            }
                        };
                        var rt = et,
                            nt = c((function (t) {
                                var e = {
                                    single_source_shortest_paths: function (t,
                                        r, n) {
                                        var o = {},
                                            a = {};
                                        a[r] = 0;
                                        var i, s, u, f, c, h, g, d = e.PriorityQueue
                                            .make();
                                        for (d.push(r, 0); !d.empty();)
                                            for (u in s = (i = d.pop()).value,
                                                f = i.cost, c = t[s] || {})
                                                c.hasOwnProperty(u) && (h =
                                                    f + c[u], g = a[u], (
                                                        void 0 === a[u] ||
                                                        g > h) && (a[u] = h,
                                                        d.push(u, h), o[u] =
                                                        s));
                                        if (void 0 !== n && void 0 === a[n]) {
                                            var l = [
                                                "Could not find a path from ",
                                                r, " to ", n, "."].join(
                                                "");
                                            throw new Error(l)
                                        }
                                        return o
                                    },
                                    extract_shortest_path_from_predecessor_list: function (
                                        t, e) {
                                        for (var r = [], n = e; n;) r.push(
                                            n), t[n], n = t[n];
                                        return r.reverse(), r
                                    },
                                    find_path: function (t, r, n) {
                                        var o = e.single_source_shortest_paths(
                                            t, r, n);
                                        return e.extract_shortest_path_from_predecessor_list(
                                            o, n)
                                    },
                                    PriorityQueue: {
                                        make: function (t) {
                                            var r, n = e.PriorityQueue,
                                                o = {};
                                            for (r in t = t || {}, n) n.hasOwnProperty(
                                                r) && (o[r] = n[r]);
                                            return o.queue = [], o.sorter =
                                                t.sorter || n.default_sorter,
                                                o
                                        },
                                        default_sorter: function (t, e) {
                                            return t.cost - e.cost
                                        },
                                        push: function (t, e) {
                                            var r = {
                                                value: t,
                                                cost: e
                                            };
                                            this.queue.push(r), this.queue.sort(
                                                this.sorter)
                                        },
                                        pop: function () {
                                            return this.queue.shift()
                                        },
                                        empty: function () {
                                            return 0 === this.queue.length
                                        }
                                    }
                                };
                                t.exports = e
                            })),
                            ot = c((function (t, e) {
                                function r(t) {
                                    return unescape(encodeURIComponent(t)).length
                                }

                                function n(t, e, r) {
                                    for (var n, o = []; null !== (n = t.exec(r));) o
                                        .push({
                                            data: n[0],
                                            index: n.index,
                                            mode: e,
                                            length: n[0].length
                                        });
                                    return o
                                }

                                function o(t) {
                                    var e, r, o = n(K.NUMERIC, O.NUMERIC, t),
                                        a = n(K.ALPHANUMERIC, O.ALPHANUMERIC, t);
                                    return u() ? (e = n(K.BYTE, O.BYTE, t), r = n(K
                                        .KANJI, O.KANJI, t)) : (e = n(K.BYTE_KANJI,
                                        O.BYTE, t), r = []), o.concat(a, e, r).sort(
                                        (function (t, e) {
                                            return t.index - e.index
                                        })).map((function (t) {
                                        return {
                                            data: t.data,
                                            mode: t.mode,
                                            length: t.length
                                        }
                                    }))
                                }

                                function a(t, e) {
                                    switch (e) {
                                        case O.NUMERIC:
                                            return $.getBitsLength(t);
                                        case O.ALPHANUMERIC:
                                            return Z.getBitsLength(t);
                                        case O.KANJI:
                                            return rt.getBitsLength(t);
                                        case O.BYTE:
                                            return tt.getBitsLength(t)
                                    }
                                }

                                function i(t, e) {
                                    var r, n = O.getBestModeForData(t);
                                    if ((r = O.from(e, n)) !== O.BYTE && r.bit < n.bit)
                                        throw new Error('"' + t +
                                            '" cannot be encoded with mode ' +
                                            O.toString(r) +
                                            ".\n Suggested mode is: " + O.toString(
                                                n));
                                    switch (r !== O.KANJI || u() || (r = O.BYTE), r) {
                                        case O.NUMERIC:
                                            return new $(t);
                                        case O.ALPHANUMERIC:
                                            return new Z(t);
                                        case O.KANJI:
                                            return new rt(t);
                                        case O.BYTE:
                                            return new tt(t)
                                    }
                                }
                                e.fromArray = function (t) {
                                    return t.reduce((function (t, e) {
                                        return "string" == typeof e ?
                                            t.push(i(e, null)) : e.data &&
                                            t.push(i(e.data, e.mode)),
                                            t
                                    }), [])
                                }, e.fromString = function (t, n) {
                                    for (var i = function (t, e) {
                                            for (var r = {}, n = {
                                                    start: {}
                                                }, o = ["start"], i = 0; i <
                                                t.length; i++) {
                                                for (var s = t[i], u = [],
                                                        f = 0; f < s.length; f++) {
                                                    var c = s[f],
                                                        h = "" + i + f;
                                                    u.push(h), r[h] = {
                                                        node: c,
                                                        lastCount: 0
                                                    }, n[h] = {};
                                                    for (var g = 0; g < o.length; g++) {
                                                        var d = o[g];
                                                        r[d] && r[d].node.mode ===
                                                            c.mode ? (n[d][
                                                                    h] = a(
                                                                    r[d].lastCount +
                                                                    c.length,
                                                                    c.mode) -
                                                                a(r[d].lastCount,
                                                                    c.mode),
                                                                r[d].lastCount +=
                                                                c.length) :
                                                            (r[d] && (r[d].lastCount =
                                                                    c.length
                                                                ), n[d][h] =
                                                                a(c.length,
                                                                    c.mode) +
                                                                4 + O.getCharCountIndicator(
                                                                    c.mode,
                                                                    e))
                                                    }
                                                }
                                                o = u
                                            }
                                            for (var l = 0; l < o.length; l++)
                                                n[o[l]].end = 0;
                                            return {
                                                map: n,
                                                table: r
                                            }
                                        }(function (t) {
                                            for (var e = [], n = 0; n <
                                                t.length; n++) {
                                                var o = t[n];
                                                switch (o.mode) {
                                                    case O.NUMERIC:
                                                        e.push([o, {
                                                                data: o
                                                                    .data,
                                                                mode: O
                                                                    .ALPHANUMERIC,
                                                                length: o
                                                                    .length
                                                            },
                                                            {
                                                                data: o
                                                                    .data,
                                                                mode: O
                                                                    .BYTE,
                                                                length: o
                                                                    .length
                                                            }]);
                                                        break;
                                                    case O.ALPHANUMERIC:
                                                        e.push([o, {
                                                            data: o
                                                                .data,
                                                            mode: O
                                                                .BYTE,
                                                            length: o
                                                                .length
                                                        }]);
                                                        break;
                                                    case O.KANJI:
                                                        e.push([o, {
                                                            data: o
                                                                .data,
                                                            mode: O
                                                                .BYTE,
                                                            length: r(
                                                                o
                                                                .data
                                                            )
                                                        }]);
                                                        break;
                                                    case O.BYTE:
                                                        e.push([{
                                                            data: o
                                                                .data,
                                                            mode: O
                                                                .BYTE,
                                                            length: r(
                                                                o
                                                                .data
                                                            )
                                                        }])
                                                }
                                            }
                                            return e
                                        }(o(t)), n), s = nt.find_path(i.map,
                                            "start", "end"), u = [], f = 1; f <
                                        s.length - 1; f++) u.push(i.table[s[f]]
                                        .node);
                                    return e.fromArray(function (t) {
                                        return t.reduce((function (t, e) {
                                            var r = t.length -
                                                1 >= 0 ? t[
                                                    t.length -
                                                    1] :
                                                null;
                                            return r && r.mode ===
                                                e.mode ? (t[
                                                        t.length -
                                                        1].data +=
                                                    e.data,
                                                    t) : (t
                                                    .push(e),
                                                    t)
                                        }), [])
                                    }(u))
                                }, e.rawSplit = function (t) {
                                    return e.fromArray(o(t))
                                }
                            }));

                        function at(t, e, r) {
                            var n, o, a = t.size,
                                i = Q(e, r);
                            for (n = 0; n < 15; n++) o = 1 == (i >> n & 1), n < 6 ? t.set(n,
                                    8, o, !0) : n < 8 ? t.set(n + 1, 8, o, !0) : t.set(a -
                                    15 + n, 8, o, !0), n < 8 ? t.set(8, a - n - 1, o, !0) :
                                n < 9 ? t.set(8, 15 - n - 1 + 1, o, !0) : t.set(8, 15 - n -
                                    1, o, !0);
                            t.set(a - 8, 8, 1, !0)
                        }

                        function it(t, e, r) {
                            var n = new d;
                            r.forEach((function (e) {
                                n.put(e.mode.bit, 4), n.put(e.getLength(), O.getCharCountIndicator(
                                    e.mode, t)), e.write(n)
                            }));
                            var o = 8 * (a(t) - M(t, e));
                            for (n.getLengthInBits() + 4 <= o && n.put(0, 4); n.getLengthInBits() %
                                8 != 0;) n.putBit(0);
                            for (var i = (o - n.getLengthInBits()) / 8, s = 0; s < i; s++) n
                                .put(s % 2 ? 17 : 236, 8);
                            return function (t, e, r) {
                                for (var n = a(e), o = M(e, r), i = n - o, s = x(e, r),
                                        u = s - n % s, f = Math.floor(n / s), c = Math.floor(
                                            i / s), h = c + 1, g = f - c, d = new T(g),
                                        l = 0, p = new Array(s), v = new Array(s), m =
                                        0, w = new Uint8Array(t.buffer), y = 0; y < s; y++) {
                                    var E = y < u ? c : h;
                                    p[y] = w.slice(l, l + E), v[y] = d.encode(p[y]), l +=
                                        E, m = Math.max(m, E)
                                }
                                var A, I, N = new Uint8Array(n),
                                    P = 0;
                                for (A = 0; A < m; A++)
                                    for (I = 0; I < s; I++) A < p[I].length && (N[P++] =
                                        p[I][A]);
                                for (A = 0; A < g; A++)
                                    for (I = 0; I < s; I++) N[P++] = v[I][A];
                                return N
                            }(n, t, e)
                        }

                        function st(t, e, r, n) {
                            var a;
                            if (Array.isArray(t)) a = ot.fromArray(t);
                            else {
                                if ("string" != typeof t) throw new Error("Invalid data");
                                var i = e;
                                if (!i) {
                                    var s = ot.rawSplit(t);
                                    i = V.getBestVersionForData(s, r)
                                }
                                a = ot.fromString(t, i || 40)
                            }
                            var u = V.getBestVersionForData(a, r);
                            if (!u) throw new Error(
                                "The amount of data is too big to be stored in a QR Code"
                            );
                            if (e) {
                                if (e < u) throw new Error(
                                    "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                                    u + ".\n")
                            } else e = u;
                            var f = it(e, r, a),
                                c = o(e),
                                h = new p(c);
                            return function (t, e) {
                                    for (var r = t.size, n = w(e), o = 0; o < n.length; o++)
                                        for (var a = n[o][0], i = n[o][1], s = -1; s <= 7; s++)
                                            if (!(a + s <= -1 || r <= a + s))
                                                for (var u = -1; u <= 7; u++) i + u <= -1 ||
                                                    r <= i + u || (s >= 0 && s <= 6 && (0 ===
                                                            u || 6 === u) || u >= 0 && u <=
                                                        6 && (0 === s || 6 === s) || s >= 2 &&
                                                        s <= 4 && u >= 2 && u <= 4 ? t.set(
                                                            a + s, i + u, !0, !0) : t.set(a +
                                                            s, i + u, !1, !0))
                                }(h, e),
                                function (t) {
                                    for (var e = t.size, r = 8; r < e - 8; r++) {
                                        var n = r % 2 == 0;
                                        t.set(r, 6, n, !0), t.set(6, r, n, !0)
                                    }
                                }(h),
                                function (t, e) {
                                    for (var r = v.getPositions(e), n = 0; n < r.length; n++)
                                        for (var o = r[n][0], a = r[n][1], i = -2; i <= 2; i++)
                                            for (var s = -2; s <= 2; s++) - 2 === i || 2 ===
                                                i || -2 === s || 2 === s || 0 === i && 0 ===
                                                s ? t.set(o + i, a + s, !0, !0) : t.set(o +
                                                    i, a + s, !1, !0)
                                }(h, e), at(h, r, 0), e >= 7 && function (t, e) {
                                    for (var r, n, o, a = t.size, i = V.getEncodedBits(e),
                                            s = 0; s < 18; s++) r = Math.floor(s / 3), n =
                                        s % 3 + a - 8 - 3, o = 1 == (i >> s & 1), t.set(r,
                                            n, o, !0), t.set(n, r, o, !0)
                                }(h, e),
                                function (t, e) {
                                    for (var r = t.size, n = -1, o = r - 1, a = 7, i = 0, s =
                                            r - 1; s > 0; s -= 2)
                                        for (6 === s && s--;;) {
                                            for (var u = 0; u < 2; u++)
                                                if (!t.isReserved(o, s - u)) {
                                                    var f = !1;
                                                    i < e.length && (f = 1 == (e[i] >>> a &
                                                            1)), t.set(o, s - u, f), -1 ==
                                                        --a && (i++, a = 7)
                                                } if ((o += n) < 0 || r <= o) {
                                                o -= n, n = -n;
                                                break
                                            }
                                        }
                                }(h, f), isNaN(n) && (n = y.getBestMask(h, at.bind(null, h,
                                    r))), y.applyMask(n, h), at(h, r, n), {
                                    modules: h,
                                    version: e,
                                    errorCorrectionLevel: r,
                                    maskPattern: n,
                                    segments: a
                                }
                        }
                        ot.fromArray, ot.fromString, ot.rawSplit;
                        var ut = function (t, e) {
                                if (void 0 === t || "" === t) throw new Error(
                                    "No input text");
                                var r, n, o = h.M;
                                return void 0 !== e && (o = h.from(e.errorCorrectionLevel,
                                        h.M), r = V.from(e.version), n = y.from(e.maskPattern),
                                    e.toSJISFunc && s(e.toSJISFunc)), st(t, r, o, n)
                            },
                            ft = c((function (t, e) {
                                function r(t) {
                                    if ("number" == typeof t && (t = t.toString()),
                                        "string" != typeof t) throw new Error(
                                        "Color should be defined as hex string"
                                    );
                                    var e = t.slice().replace("#", "").split("");
                                    if (e.length < 3 || 5 === e.length || e.length >
                                        8) throw new Error("Invalid hex color: " +
                                        t);
                                    3 !== e.length && 4 !== e.length || (e = Array.prototype
                                        .concat.apply([], e.map((function (t) {
                                            return [t, t]
                                        })))), 6 === e.length && e.push("F",
                                        "F");
                                    var r = parseInt(e.join(""), 16);
                                    return {
                                        r: r >> 24 & 255,
                                        g: r >> 16 & 255,
                                        b: r >> 8 & 255,
                                        a: 255 & r,
                                        hex: "#" + e.slice(0, 6).join("")
                                    }
                                }
                                e.getOptions = function (t) {
                                    t || (t = {}), t.color || (t.color = {});
                                    var e = void 0 === t.margin || null === t.margin ||
                                        t.margin < 0 ? 4 : t.margin,
                                        n = t.width && t.width >= 21 ? t.width :
                                        void 0,
                                        o = t.scale || 4;
                                    return {
                                        width: n,
                                        scale: n ? 4 : o,
                                        margin: e,
                                        color: {
                                            dark: r(t.color.dark || "#000000ff"),
                                            light: r(t.color.light ||
                                                "#ffffffff")
                                        },
                                        type: t.type,
                                        rendererOpts: t.rendererOpts || {}
                                    }
                                }, e.getScale = function (t, e) {
                                    return e.width && e.width >= t + 2 * e.margin ?
                                        e.width / (t + 2 * e.margin) : e.scale
                                }, e.getImageWidth = function (t, r) {
                                    var n = e.getScale(t, r);
                                    return Math.floor((t + 2 * r.margin) * n)
                                }, e.qrToImageData = function (t, r, n) {
                                    for (var o = r.modules.size, a = r.modules.data,
                                            i = e.getScale(o, n), s = Math.floor(
                                                (o + 2 * n.margin) * i), u = n.margin *
                                            i, f = [n.color.light, n.color.dark],
                                            c = 0; c < s; c++)
                                        for (var h = 0; h < s; h++) {
                                            var g = 4 * (c * s + h),
                                                d = n.color.light;
                                            c >= u && h >= u && c < s - u && h <
                                                s - u && (d = f[a[Math.floor((c -
                                                        u) / i) * o +
                                                    Math.floor((h - u) /
                                                        i)] ? 1 : 0]), t[g++] =
                                                d.r, t[g++] = d.g, t[g++] = d.b,
                                                t[g] = d.a
                                        }
                                }
                            }));
                        ft.getOptions, ft.getScale, ft.getImageWidth, ft.qrToImageData;
                        var ct = c((function (t, e) {
                            e.render = function (t, e, r) {
                                var n = r,
                                    o = e;
                                void 0 !== n || e && e.getContext || (n = e,
                                    e = void 0), e || (o = function () {
                                    try {
                                        return document.createElement(
                                            "canvas")
                                    } catch (t) {
                                        throw new Error(
                                            "You need to specify a canvas element"
                                        )
                                    }
                                }()), n = ft.getOptions(n);
                                var a = ft.getImageWidth(t.modules.size, n),
                                    i = o.getContext("2d"),
                                    s = i.createImageData(a, a);
                                return ft.qrToImageData(s.data, t, n),
                                    function (t, e, r) {
                                        t.clearRect(0, 0, e.width, e.height),
                                            e.style || (e.style = {}), e.height =
                                            r, e.width = r, e.style.height =
                                            r + "px", e.style.width = r +
                                            "px"
                                    }(i, o, a), i.putImageData(s, 0, 0), o
                            }, e.renderToDataURL = function (t, r, n) {
                                var o = n;
                                void 0 !== o || r && r.getContext || (o = r,
                                    r = void 0), o || (o = {});
                                var a = e.render(t, r, o),
                                    i = o.type || "image/png",
                                    s = o.rendererOpts || {};
                                return a.toDataURL(i, s.quality)
                            }
                        }));

                        function ht(t, e) {
                            var r = t.a / 255,
                                n = e + '="' + t.hex + '"';
                            return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(
                                1) + '"' : n
                        }

                        function gt(t, e, r) {
                            var n = t + e;
                            return void 0 !== r && (n += " " + r), n
                        }
                        ct.render, ct.renderToDataURL;
                        var dt = function (t, e, r) {
                            var n = ft.getOptions(e),
                                o = t.modules.size,
                                a = t.modules.data,
                                i = o + 2 * n.margin,
                                s = n.color.light.a ? "<path " + ht(n.color.light,
                                    "fill") + ' d="M0 0h' + i + "v" + i + 'H0z"/>' : "",
                                u = "<path " + ht(n.color.dark, "stroke") + ' d="' +
                                function (t, e, r) {
                                    for (var n = "", o = 0, a = !1, i = 0, s = 0; s < t
                                        .length; s++) {
                                        var u = Math.floor(s % e),
                                            f = Math.floor(s / e);
                                        u || a || (a = !0), t[s] ? (i++, s > 0 && u > 0 &&
                                            t[s - 1] || (n += a ? gt("M", u + r, .5 +
                                                    f + r) : gt("m", o, 0), o = 0,
                                                a = !1), u + 1 < e && t[s + 1] || (
                                                n += gt("h", i), i = 0)) : o++
                                    }
                                    return n
                                }(a, o, n.margin) + '"/>',
                                f = 'viewBox="0 0 ' + i + " " + i + '"',
                                c = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ?
                                    'width="' + n.width + '" height="' + n.width + '" ' :
                                    "") + f + ' shape-rendering="crispEdges">' + s + u +
                                "</svg>\n";
                            return "function" == typeof r && r(null, c), c
                        };

                        function lt(t, e, n, o, a) {
                            var i = [].slice.call(arguments, 1),
                                s = i.length,
                                u = "function" == typeof i[s - 1];
                            if (!u && !r()) throw new Error(
                                "Callback required as last argument");
                            if (!u) {
                                if (s < 1) throw new Error("Too few arguments provided");
                                return 1 === s ? (n = e, e = o = void 0) : 2 !== s || e.getContext ||
                                    (o = n, n = e, e = void 0), new Promise((function (r, a) {
                                        try {
                                            var i = ut(n, o);
                                            r(t(i, e, o))
                                        } catch (t) {
                                            a(t)
                                        }
                                    }))
                            }
                            if (s < 2) throw new Error("Too few arguments provided");
                            2 === s ? (a = n, n = e, e = o = void 0) : 3 === s && (e.getContext &&
                                void 0 === a ? (a = o, o = void 0) : (a = o, o = n, n =
                                    e, e = void 0));
                            try {
                                var f = ut(n, o);
                                a(null, t(f, e, o))
                            } catch (t) {
                                a(t)
                            }
                        }
                        var pt = ut,
                            vt = lt.bind(null, ct.render),
                            mt = lt.bind(null, ct.renderToDataURL),
                            wt = lt.bind(null, (function (t, e, r) {
                                return dt(t, r)
                            })),
                            yt = {
                                create: pt,
                                toCanvas: vt,
                                toDataURL: mt,
                                toString: wt
                            };
                        t.create = pt, t.default = yt, t.toCanvas = vt, t.toDataURL = mt, t
                            .toString = wt, Object.defineProperty(t, "__esModule", {
                                value: !0
                            })
                    }, "object" == typeof e && void 0 !== n ? s(e) : "function" == typeof define &&
                    define.amd ? define(["exports"], s) : s((i = "undefined" != typeof globalThis ?
                        globalThis : i || self).QRCode = {}), t("default", n.exports), n.exports
                    .L, n.exports.M, n.exports.Q, n.exports.H, n.exports.isValid, n.exports
                    .from, n.exports.getRowColCoords, n.exports.getPositions, n.exports.Patterns,
                    n.exports.getPenaltyN1, n.exports.getPenaltyN2, n.exports.getPenaltyN3,
                    n.exports.getPenaltyN4, n.exports.applyMask, n.exports.getBestMask, n.exports
                    .mul, n.exports.mod, n.exports.generateECPolynomial, n.exports.NUMERIC,
                    n.exports.ALPHANUMERIC, n.exports.BYTE, n.exports.KANJI, n.exports.MIXED,
                    n.exports.getCharCountIndicator, n.exports.getBestModeForData, n.exports
                    .toString, n.exports.getCapacity, n.exports.getBestVersionForData, n.exports
                    .getEncodedBits, n.exports.fromArray, n.exports.fromString, n.exports.rawSplit,
                    n.exports.getOptions, n.exports.getScale, n.exports.getImageWidth, n.exports
                    .qrToImageData, n.exports.render, n.exports.renderToDataURL, n.exports.create,
                    n.exports.default, n.exports.toCanvas, n.exports.toDataURL, n.exports.__esModule
            }), {})
        }
    }
}));

System.register("chunks:///_virtual/qrcode.ecm.mjs_cjs=&original=.js", ["./qrcode.ecm.js", "./cjs-loader.mjs"], (
    function (e, r) {
        var t, c;
        return {
            setters: [function (r) {
                t = r.__cjsMetaURL;
                var c = {};
                c.__cjsMetaURL = r.__cjsMetaURL, c.default = r.default, e(c)
            }, function (e) {
                c = e.default
            }],
            execute: function () {
                t || c.throwInvalidWrapper("./qrcode.ecm.js", r.meta.url), c.require(t)
            }
        }
    }));

System.register("chunks:///_virtual/resourceUtil.ts", ["cc"], (function (e) {
    var t, r, i, a, n, s, o, u, c, f, l;
    return {
        setters: [function (e) {
            t = e.cclegacy, r = e._decorator, i = e.resources, a = e.error, n = e.Prefab, s = e.instantiate,
                o = e.find, u = e.SpriteFrame, c = e.isValid, f = e.assetManager, l = e.Texture2D
        }],
        execute: function () {
            var d;
            t._RF.push({}, "17c31nr+lFP66wRpFvKIbD9", "resourceUtil", void 0);
            var m = r.ccclass;
            e("resourceUtil", m("resourceUtil")(d = function () {
                function e() {}
                return e.loadRes = function (e, t, r) {
                    t ? i.load(e, t, (function (e, t) {
                        if (e) return a(e.message || e), void(r && r(e, t));
                        r && r(e, t)
                    })) : i.load(e, (function (e, t) {
                        if (e) return a(e.message || e), void(r && r(e, t));
                        r && r(e, t)
                    }))
                }, e.loadDir = function (e, t) {
                    i.loadDir(e, (function (e, r) {
                        if (e) return a(e.message || e), void(t && t(e, r));
                        t && t(e, r)
                    }))
                }, e.getUIPrefabRes = function (e, t) {
                    this.loadRes("prefab/ui/" + e, n, t)
                }, e.getGamePrefabRes = function (e, t) {
                    this.loadRes("prefab/game/" + e, n, t)
                }, e.createUI = function (e, t, r) {
                    this.getUIPrefabRes(e, (function (e, i) {
                        if (!e) {
                            var a = s(i);
                            a.setPosition(0, 0, 0), r || (r = o("Canvas")),
                                r.addChild(a), t && t(null, a)
                        }
                    }))
                }, e.setGameSprite = function (e, t, r) {
                    var i = "textures/UI/game/" + e;
                    this.setSpriteFrame(i, t, r)
                }, e.setPrizeStarSprite = function (e, t, r) {
                    var i = "textures/UI/prize/" + e;
                    this.setSpriteFrame(i, t, r)
                }, e.setStarSprite = function (e, t, r) {
                    var i = "textures/UI/level/" + e;
                    this.setSpriteFrame(i, t, r)
                }, e.setRewardBtnIcon = function (e, t, r) {
                    var i = "textures/UI/reward/btn_" + e;
                    this.setSpriteFrame(i, t, r)
                }, e.getJsonData = function (e, t) {
                    i.load("datas/" + e, (function (e, r) {
                        if (e) a(e.message || e);
                        else {
                            var i = r;
                            if (i.json) t(e, i.json);
                            else {
                                var n = new Error("failed!!!");
                                t(n, null)
                            }
                        }
                    }))
                }, e.getData = function (e, t) {
                    i.load("datas/" + e, (function (e, r) {
                        if (e) a(e.message || e);
                        else {
                            var n = r.text;
                            n ? t(e, n) : i.load(r.nativeUrl, (function (e,
                                r) {
                                t(e, n = r)
                            }))
                        }
                    }))
                }, e.setSpriteFrame = function (e, t, r) {
                    this.loadRes(e + "/spriteFrame", u, (function (i, a) {
                        if (i) return console.error(
                                "set sprite frame failed! err:", e, i),
                            void r(i, a);
                        t && c(t) && (t.spriteFrame = a, r(null, a))
                    }))
                }, e.setRemoteImage = function (e, t, r) {
                    if (e && e.startsWith("http")) {
                        f.loadAny([{
                            url: e,
                            type: "png"
                        }], null, (function (t, i) {
                            if (t) return console.error(
                                    "set avatar failed! err:", e, t),
                                void r(t, i);
                            var a = new l;
                            a.image = i;
                            var n = new u;
                            n.texture = a, r && r(null, n)
                        }))
                    }
                }, e.setGameIcon = function (e, t, r) {
                    e.startsWith("http") ? this.setRemoteImage(e, t, r) : this.setSpriteFrame(
                        "gamePackage/textures/icons/games/" + e, t, r)
                }, e.getEffect = function (e, t) {
                    this.loadRes("prefab/effect/" + e, n, t)
                }, e
            }()) || d);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/resultRandom.ts", ["cc"], (function (t) {
    var n;
    return {
        setters: [function (t) {
            n = t.cclegacy
        }],
        execute: function () {
            n._RF.push({}, "c0aae//mCtFfJ4pCVKqq4VC", "resultRandom", void 0);
            var e = t("successTip", {
                    0: ["不愧是将军！", "妾身好崇拜你呀！", "你已经初步领略幻的魅力了", "千变万幻，你学会了吗~", "你很有成为幻魔的潜力！"],
                    1: ["本将军的眼光果然不错！", "就这个兄弟狂啊！", "你的实力，想狂就狂！", "用这拳头，打破一切！", "你就是下一个【狂魔】"]
                }),
                s = t("failTip", {
                    0: ["再接再厉！", "哎呀~失手了吗~", "又被我迷倒一位，后面排队~", "可惜~你的实力肯定不止于此！", "风吹鸡蛋壳，牌去人安乐~"],
                    1: ["可恶！只差一点点！", "你这小拳头，还得练！", "好兄弟，下次一定！", "我看你是被貂蝉迷了眼", "没事~哥们儿，我也没找到"]
                }),
                r = t("resultRandom", function () {
                    function t() {}
                    return t.getInstance = function () {
                        return this.instance || (this.instance = new t), this.instance
                    }, t.randomResultIndex = function (t) {
                        return Math.floor(Math.random() * t.length)
                    }, t.randomResult = function (t) {
                        return t[Math.floor(Math.random() * t.length)]
                    }, t.getRandomResult = function () {
                        var t = this.randomResultIndex(this.bgList);
                        return this.randomIndex = t, t
                    }, t.getRandomBg = function () {
                        return this.bgList[this.randomIndex]
                    }, t.getResult = function (t) {
                        var n = this.randomResultIndex(this.bgList);
                        return {
                            randomIndex: n,
                            randomBg: this.bgList[n],
                            tip: 0 === t ? this.randomResult(e[n]) : this.randomResult(s[n])
                        }
                    }, t
                }());
            r.bgList = ["textures/UI/success/bg", "textures/UI/fail/bg"], r.randomIndex = 0, r.instance =
                void 0, n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/reward.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./rewardItem.ts",
    "./Log.ts", "./apiClient.ts", "./uiManager.ts", "./constant.ts", "./UserManager.ts"], (function (t) {
    var e, n, i, r, a, s, o, l, c, u, f, d, p, h, w, g, m, b;
    return {
        setters: [function (t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, r =
                t.assertThisInitialized
        }, function (t) {
            a = t.cclegacy, s = t._decorator, o = t.Prefab, l = t.ScrollView, c = t.Node, u = t.Label,
                f = t.instantiate, d = t.Component
        }, function (t) {
            p = t.rewardItem
        }, function (t) {
            h = t.default
        }, function (t) {
            w = t.ApiClient
        }, function (t) {
            g = t.uiManager
        }, function (t) {
            m = t.constant
        }, function (t) {
            b = t.UserManager
        }],
        execute: function () {
            var y, k, v, D, z, L, P, C, M, _, A;
            a._RF.push({}, "088edeY+lpK55FG2wLUiS8A", "reward", void 0);
            var B = s.ccclass,
                F = s.property,
                I = [{
                    id: 1,
                    name: "每日通关1次",
                    reward: "珍宝龙珠*1",
                    status: 1
                }, {
                    id: 2,
                    name: "每日通关2次",
                    reward: "珍宝龙珠*2",
                    status: 1
                }, {
                    id: 3,
                    name: "每日通关3次",
                    reward: "珍宝龙珠*3",
                    status: 1
                }, {
                    id: 4,
                    name: "每日通关4次",
                    reward: "珍宝龙珠*4",
                    status: 1
                }, {
                    id: 5,
                    name: "每日通关5次",
                    reward: "珍宝龙珠*5",
                    status: 1
                }, {
                    id: 6,
                    name: "每日通关6次",
                    reward: "珍宝龙珠*6",
                    status: 1
                }, {
                    id: 7,
                    name: "每日通关7次",
                    reward: "珍宝龙珠*7",
                    status: 1
                }, {
                    id: 8,
                    name: "每日通关8次",
                    reward: "珍宝龙珠*8",
                    status: 1
                }];
            t("reward", (y = B("reward"), k = F(o), v = F(l), D = F(c), z = F(u), y((C = e((P =
                function (t) {
                    function e() {
                        for (var e, n = arguments.length, a = new Array(n), s =
                                0; s < n; s++) a[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(a)) || this, i(
                            e, "itemPrefab", C, r(e)), i(e, "scroll", M, r(
                            e)), i(e, "backBtn", _, r(e)), i(e, "account",
                            A, r(e)), e.list = [], e
                    }
                    n(e, t);
                    var a = e.prototype;
                    return a.start = function () {
                        this.backBtn.on("click", this.back, this), this.account
                            .string = "我的账号:" + b.instance.user.nickname, m
                            .isOffline && (this.list = I, this.initData(
                                this.list))
                    }, a.show = function () {
                        m.isOffline || this.getTask()
                    }, a.back = function () {
                        g.instance.showDialog("main/main"), g.instance.hideDialog(
                            "reward/reward")
                    }, a.getTask = function () {
                        var t = this;
                        w.getRewardList().then((function (e) {
                            h.log("奖励列表", e), t.list = e.task_list,
                                t.initData(t.list)
                        })).catch((function (t) {
                            h.log("奖励列表数据获取失败", t)
                        }))
                    }, a.initData = function (t) {
                        if (this.scroll.content.removeAllChildren(), t && 0 !==
                            t.length)
                            for (var e = 0; e < t.length; ++e) {
                                var n = f(this.itemPrefab),
                                    i = t[e];
                                n && (n.parent = this.scroll.content, n.getComponent(
                                    p).init(i))
                            }
                    }, e
                }(d)).prototype, "itemPrefab", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), M = e(P.prototype, "scroll", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), _ = e(P.prototype, "backBtn", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), A = e(P.prototype, "account", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), L = P)) || L));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/RewardGame.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var i, e, n, o, r, a, l, c, u, s, p, h, b, f;
    return {
        setters: [function (t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.initializerDefineProperty, o =
                t.assertThisInitialized
        }, function (t) {
            r = t.cclegacy, a = t._decorator, l = t.Sprite, c = t.Node, u = t.Label, s = t.Button,
                p = t.UIOpacity, h = t.tween, b = t.Vec3, f = t.Component
        }],
        execute: function () {
            var m, w, d, g, k, y, C, v, D, z, F, B, A, L, S, T, N, R, x, I, G, O, P, _, H, M, W;
            r._RF.push({}, "df206xx0BFJT6o2Eydo4FNr", "RewardGame", void 0);
            var j = a.ccclass,
                E = a.property,
                J = [20, 30, 40, 55];
            t("RewardGame", (m = j("RewardGame"), w = E(l), d = E(c), g = E(c), k = E({
                tooltip: "动画持续时间(秒)"
            }), y = E({
                tooltip: "缩放幅度（0.1表示10%）"
            }), C = E({
                tooltip: "垂直移动幅度（像素）"
            }), v = E({
                tooltip: "是否自动开始动画"
            }), D = E({
                tooltip: "是否记录点击次数",
                visible: !0
            }), z = E({
                tooltip: "是否显示浮动数字效果"
            }), F = E({
                tooltip: "浮动数字上升高度（像素）"
            }), B = E({
                tooltip: "浮动数字动画持续时间（秒）"
            }), A = E(u), m((T = i((S = function (t) {
                function i() {
                    for (var i, e = arguments.length, r = new Array(e), a =
                            0; a < e; a++) r[a] = arguments[a];
                    return i = t.call.apply(t, [this].concat(r)) || this, n(
                            i, "arrow", T, o(i)), n(i, "clickButton", N, o(
                            i)), n(i, "lbBg", R, o(i)), n(i, "animDuration",
                            x, o(i)), n(i, "scaleFactor", I, o(i)), n(i,
                            "moveDistance", G, o(i)), n(i, "autoStart", O,
                            o(i)), n(i, "recordClicks", P, o(i)), n(i,
                            "showFloatingNumber", _, o(i)), n(i,
                            "floatDistance", H, o(i)), n(i, "floatDuration",
                            M, o(i)), n(i, "numberLabel", W, o(i)), i.posScaleTween =
                        null, i.opacityTween = null, i.clickCount = 0, i.clickCountMax =
                        55, i
                }
                e(i, t);
                var r = i.prototype;
                return r.start = function () {
                    this.setInitData(), this.autoStart && this.arrow &&
                        this.startArrowAnimation(), this.setupClickListener()
                }, r.setInitData = function () {
                    this.clickCount = 0
                }, r.init = function (t) {
                    console.log("RewardGame init:", t), this.setInitData()
                }, r.setupClickListener = function () {
                    var t = this;
                    this.clickButton && this.recordClicks && (this.clickButton
                        .off("click"), this.clickButton.on("click",
                            (function () {
                                t.incrementClickCount()
                            }), this))
                }, r.getClickCount = function () {
                    return this.clickCount
                }, r.incrementClickCount = function () {
                    this.clickCount++, console.log("按钮被点击了 " + this.clickCount +
                            " 次"), this.createFloatingNumber(this.clickCount),
                        this.clickCount >= this.clickCountMax && (this.lbBg
                            .active = !0, this.clickButton.getComponent(
                                s).interactable = !1, this.clickButton.off(
                                "click"))
                }, r.createFloatingNumber = function (t) {
                    if (this.showFloatingNumber && this.clickButton) {
                        var i = new c("FloatingNumber"),
                            e = i.addComponent(u);
                        e.string = J.includes(t) ? t + "!!" : "" + t, e
                            .fontSize = this.numberLabel.fontSize, e.color =
                            this.numberLabel.color, e.lineHeight = this
                            .numberLabel.lineHeight, e.font = this.numberLabel
                            .font, e.enableOutline = this.numberLabel.enableOutline,
                            e.outlineColor = this.numberLabel.outlineColor,
                            e.outlineWidth = this.numberLabel.outlineWidth;
                        var n = i.addComponent(p);
                        n.opacity = 255, this.clickButton.parent.addChild(
                                i), i.position = this.clickButton.position
                            .clone(), h(i).by(this.floatDuration, {
                                position: new b(0, this.floatDistance,
                                    0)
                            }, {
                                easing: "sineOut"
                            }).start(), h(n).to(this.floatDuration, {
                                opacity: 0
                            }).call((function () {
                                i.removeFromParent(), i.destroy()
                            })).start()
                    }
                }, r.resetClickCount = function (t) {
                    void 0 === t && (t = 0);
                    var i = this.clickCount;
                    this.clickCount = t, console.log("点击次数已重置: " + i +
                        " -> " + this.clickCount)
                }, r.createArrowAnimation = function () {
                    if (this.arrow && this.arrow.node) {
                        this.arrow.node.position.clone();
                        var t = this.arrow.node.scale.clone(),
                            i = this.arrow.node.getComponent(p);
                        i || (i = this.arrow.node.addComponent(p)),
                            this.posScaleTween = h(this.arrow.node).to(
                                this.animDuration / 2, {
                                    scale: new b(t.x * (1 + this.scaleFactor),
                                        t.y * (1 + this.scaleFactor),
                                        t.z)
                                }, {
                                    easing: "sineOut"
                                }).to(this.animDuration / 2, {
                                scale: t
                            }, {
                                easing: "sineIn"
                            }).union().repeatForever().start(), this.opacityTween =
                            h(i).to(this.animDuration / 2, {
                                opacity: 255
                            }).to(this.animDuration / 2, {
                                opacity: 200
                            }).union().repeatForever().start()
                    } else console.error("Arrow sprite not assigned!")
                }, r.startArrowAnimation = function () {
                    this.stopArrowAnimation(), this.createArrowAnimation()
                }, r.stopArrowAnimation = function () {
                    if (this.posScaleTween && (this.posScaleTween.stop(),
                            this.posScaleTween = null), this.opacityTween &&
                        (this.opacityTween.stop(), this.opacityTween =
                            null), this.arrow && this.arrow.node) {
                        this.arrow.node.setScale(1, 1, 1), this.arrow.node
                            .setPosition(0, 0, 0);
                        var t = this.arrow.node.getComponent(p);
                        t && (t.opacity = 255)
                    }
                }, r.update = function (t) {}, i
            }(f)).prototype, "arrow", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), N = i(S.prototype, "clickButton", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), R = i(S.prototype, "lbBg", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), x = i(S.prototype, "animDuration", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return 1
                }
            }), I = i(S.prototype, "scaleFactor", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return .1
                }
            }), G = i(S.prototype, "moveDistance", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return 10
                }
            }), O = i(S.prototype, "autoStart", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return !0
                }
            }), P = i(S.prototype, "recordClicks", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return !0
                }
            }), _ = i(S.prototype, "showFloatingNumber", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return !0
                }
            }), H = i(S.prototype, "floatDistance", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return 100
                }
            }), M = i(S.prototype, "floatDuration", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return 1.5
                }
            }), W = i(S.prototype, "numberLabel", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), L = S)) || L));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/rewardItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./resourceUtil.ts",
    "./uiManager.ts", "./apiClient.ts", "./constant.ts"], (function (t) {
    var e, n, i, r, a, s, o, c, u, l, p, f, h, d;
    return {
        setters: [function (t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, r =
                t.assertThisInitialized
        }, function (t) {
            a = t.cclegacy, s = t._decorator, o = t.Label, c = t.Sprite, u = t.Button, l = t.Component
        }, function (t) {
            p = t.resourceUtil
        }, function (t) {
            f = t.uiManager
        }, function (t) {
            h = t.ApiClient
        }, function (t) {
            d = t.constant
        }],
        execute: function () {
            var g, w, b, m, y, B, k, v, R;
            a._RF.push({}, "bb469lBEJ9H/JxfpJXcanop", "rewardItem", void 0);
            var I = s.ccclass,
                z = s.property;
            t("rewardItem", (g = I("rewardItem"), w = z({
                type: o,
                tooltip: "奖励名称"
            }), b = z({
                type: o,
                tooltip: "任务描述"
            }), m = z({
                type: c,
                tooltip: "领取按钮奖励状态"
            }), g((k = e((B = function (t) {
                function e() {
                    for (var e, n = arguments.length, a = new Array(n), s =
                            0; s < n; s++) a[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(a)) || this, i(
                            e, "taskName", k, r(e)), i(e, "taskReward", v,
                            r(e)), i(e, "spBtn", R, r(e)), e.state = 0, e.id =
                        0, e
                }
                n(e, t);
                var a = e.prototype;
                return a.start = function () {}, a.init = function (t) {
                    var e = this;
                    this.taskName.string = t.name, this.state = t.status,
                        this.id = t.key, this.taskReward.string = t.reward,
                        p.setRewardBtnIcon(this.state, this.spBtn, (
                            function () {
                                e.spBtn.node.active = !0
                            })), 1 != this.state && (this.spBtn.node.getComponent(
                            u).interactable = !1)
                }, a.getTaskPrize = function () {
                    var t = this;
                    h.getReward({
                        key: this.id
                    }).then((function (e) {
                        f.instance.showTips("领取成功", (
                                function () {})), t.state =
                            2, p.setRewardBtnIcon(t.state,
                                t.spBtn, (function () {})),
                            t.spBtn.node.getComponent(u).interactable = !
                            1
                    })).catch((function (t) {
                        console.log(t)
                    }))
                }, a.onClickBtn = function (t) {
                    if (1 == this.state) {
                        if (!d.isOffline) return void this.getTaskPrize();
                        f.instance.showTips("领取成功", (function () {})),
                            this.state = 2, this.spBtn.node.getComponent(
                                u).interactable = !1, p.setRewardBtnIcon(
                                this.state, this.spBtn, (function () {})
                            )
                    }
                }, e
            }(l)).prototype, "taskName", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), v = e(B.prototype, "taskReward", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), R = e(B.prototype, "spBtn", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), y = B)) || y));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/rule.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./uiManager.ts"], (function (
    t) {
    var r, n, o, e, i;
    return {
        setters: [function (t) {
            r = t.inheritsLoose
        }, function (t) {
            n = t.cclegacy, o = t._decorator, e = t.Component
        }, function (t) {
            i = t.uiManager
        }],
        execute: function () {
            var s;
            n._RF.push({}, "f6c6dwxA8pJa6DJD4tyb0tn", "rule", void 0);
            var l = o.ccclass;
            o.property, t("rule", l("rule")(s = function (t) {
                function n() {
                    for (var r, n = arguments.length, o = new Array(n), e = 0; e < n; e++) o[
                        e] = arguments[e];
                    return (r = t.call.apply(t, [this].concat(o)) || this).isFirstPlay =
                        void 0, r
                }
                r(n, t);
                var o = n.prototype;
                return o.start = function () {}, o.update = function (t) {}, o.show =
                    function (t) {
                        var r = (void 0 === t ? {
                            isFirstPlay: !1
                        } : t).isFirstPlay;
                        console.log("rule show"), console.log(r), this.isFirstPlay = r
                    }, o.onBtnCloseClick = function () {
                        var t = this;
                        i.instance.hideDialog("rule/rule", (function () {
                            t.isFirstPlay && localStorage.setItem("isFirstPlay",
                                "false")
                        }))
                    }, n
            }(e)) || s);
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ServerEventNames.ts", ["cc"], (function (e) {
    var t;
    return {
        setters: [function (e) {
            t = e.cclegacy
        }],
        execute: function () {
            t._RF.push({}, "78cedIHVs5AEYf/aNaIbM+z", "ServerEventNames", void 0);
            var E = e("default", (function () {}));
            E.CONNECT_SUCCESS = "onConnect", E.HEART_JUMP = "20000", E.GAME_START = "10001", E.GAME_MOVE =
                "10002", E.GAME_OVER = "10003", E.ASSIST_START = "10004", E.ASSIST_END = "10005", E.HELP =
                "10006", E.POSTER = "10007", E.RECONNECT = "100500", t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/share.ts", ["./rollupPluginModLoBabelHelpers.js", "cc",
    "./qrcode.ecm.mjs_cjs=&original=.js", "./util.ts", "./uiManager.ts", "./JSBridge.ts", "./UserManager.ts",
    "./qrcode.ecm.js"], (function (t) {
    var n, e, a, s, i, o, c, r, h, l, u, g, m, f;
    return {
        setters: [function (t) {
            n = t.inheritsLoose, e = t.asyncToGenerator, a = t.regeneratorRuntime
        }, function (t) {
            s = t.cclegacy, i = t._decorator, o = t.game, c = t.sys, r = t.Component
        }, null, function (t) {
            h = t.imgLoad, l = t.fittingString
        }, function (t) {
            u = t.uiManager
        }, function (t) {
            g = t.default
        }, function (t) {
            m = t.UserManager
        }, function (t) {
            f = t.default
        }],
        execute: function () {
            var d;
            s._RF.push({}, "52857mwg7xGwpfr26cX/J8B", "share", void 0);
            var v = ["救救我…第5个不同是老板画的饼吗？", "只有0.1 % 的人能找出5处不同，你能吗？", "我的眼睛就是尺，我不信这一关有5处不同！",
                    "眼睛瞪大像铜铃，最后一处不同谁帮我找一下！", "别笑，你也找不到第5处不同", "向你分享了一款斗鸡眼生成器"],
                p = ["https://web-static.sanguosha.cn/zbt/main_1.png",
                    "https://web-static.sanguosha.cn/zbt/main_2.png",
                    "https://web-static.sanguosha.cn/zbt/main_3.png",
                    "https://web-static.sanguosha.cn/zbt/main_4.png",
                    "https://web-static.sanguosha.cn/zbt/main_5.png",
                    "https://web-static.sanguosha.cn/zbt/main_6.png",
                    "https://web-static.sanguosha.cn/zbt/main_7.png"],
                _ = i.ccclass;
            i.property, t("share", _("share")(d = function (t) {
                function s() {
                    for (var n, e = arguments.length, a = new Array(e), s = 0; s < e; s++) a[
                        s] = arguments[s];
                    return (n = t.call.apply(t, [this].concat(a)) || this).share_bg =
                        "https://web-static.sanguosha.cn/zbt/bg1.png", n.main_bg = p[Math.floor(
                            Math.random() * p.length)], n._canvas = null, n.shareUrl =
                        window.location.href, n.nickname = "yutao", n.score = 88108, n.img =
                        void 0, n.level = 11, n
                }
                n(s, t);
                var i = s.prototype;
                return i.start = function () {}, i.update = function (t) {}, i.show =
                    function (t) {
                        this.level = t.level || this.level, this.nickname = m.instance.user
                            .nickname || this.nickname, this.main_bg = p[Math.floor(Math.random() *
                                p.length)], this.generateImage()
                    }, i.onLoad = function () {}, i.loadCustomFont = function () {
                        return new Promise((function (t) {
                            var n = document.createElement("style");
                            n.textContent =
                                "\n        @font-face {\n          font-family: 'HYChiYunLi65';\n          src: url('https://web-static.sanguosha.cn/zbt/HYChiYunLi65.ttf') format('truetype');\n          font-weight: normal;\n          font-style: normal;\n        }\n      ",
                                document.head.appendChild(n);
                            var e = document.createElement("span");
                            e.style.fontFamily = "HYChiYunLi65, Arial", e.style
                                .fontSize = "0px", e.style.visibility =
                                "hidden", e.textContent = "Test Font Loading",
                                document.body.appendChild(e), setTimeout((
                                    function () {
                                        document.body.removeChild(e),
                                            console.log(
                                                "字体 HYChiYunLi65 加载尝试完成"),
                                            t()
                                    }), 100)
                        }))
                    }, i.getMessage = function () {
                        return v[Math.floor(Math.random() * v.length)]
                    }, i.generateImage = function () {
                        var t = e(a().mark((function t() {
                            var n, e = this;
                            return a().wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                            t.next = 3,
                                            this.loadCustomFont();
                                    case 3:
                                        document.fonts &&
                                            document.fonts.check(
                                                "30px HYChiYunLi65"
                                            ) ? console.log(
                                                "字体已成功加载并可用"
                                            ) : console.warn(
                                                "字体加载成功但不可用，将使用后备字体"
                                            ), t.next = 9;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 =
                                            t.catch(0),
                                            console.warn(
                                                "使用自定义字体失败，将使用后备字体",
                                                t.t0);
                                    case 9:
                                        this._canvas ? this
                                            ._canvas.getContext(
                                                "2d").clearRect(
                                                0, 0, this._canvas
                                                .width,
                                                this._canvas
                                                .height) :
                                            (this._canvas =
                                                document.createElement(
                                                    "canvas"
                                                ), this._canvas
                                                .width =
                                                731, this._canvas
                                                .height =
                                                1403), n =
                                            this._canvas.getContext(
                                                "2d"), f.toDataURL(
                                                this.shareUrl, {
                                                    errorCorrectionLevel: "H",
                                                    margin: 1
                                                }, (
                                                    function (
                                                        t,
                                                        a) {
                                                        t ?
                                                            console
                                                            .error(
                                                                t
                                                            ) :
                                                            Promise
                                                            .all(
                                                                [
                                                                    h(
                                                                        e
                                                                        .share_bg
                                                                    ),
                                                                    h(
                                                                        e
                                                                        .main_bg
                                                                    ),
                                                                    h(
                                                                        a
                                                                    )
                                                                    ]
                                                            )
                                                            .then(
                                                                (
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        var
                                                                            a =
                                                                            t[
                                                                                0
                                                                                ],
                                                                            s =
                                                                            t[
                                                                                1
                                                                                ],
                                                                            i =
                                                                            t[
                                                                                2
                                                                                ];
                                                                        n
                                                                            .drawImage(
                                                                                a,
                                                                                0,
                                                                                0,
                                                                                e
                                                                                ._canvas
                                                                                .width,
                                                                                e
                                                                                ._canvas
                                                                                .height
                                                                            ),
                                                                            n
                                                                            .drawImage(
                                                                                i,
                                                                                292,
                                                                                1084,
                                                                                185,
                                                                                185
                                                                            ),
                                                                            n
                                                                            .drawImage(
                                                                                s,
                                                                                76,
                                                                                116,
                                                                                578,
                                                                                785
                                                                            ),
                                                                            n
                                                                            .save();
                                                                        var
                                                                            o =
                                                                            "HYChiYunLi65, Arial, sans-serif";
                                                                        n
                                                                            .font =
                                                                            "normal normal 30px " +
                                                                            o,
                                                                            n
                                                                            .fillStyle =
                                                                            "#733400",
                                                                            n
                                                                            .textAlign =
                                                                            "center",
                                                                            n
                                                                            .fillText(
                                                                                l(
                                                                                    n,
                                                                                    "第" +
                                                                                    e
                                                                                    .level +
                                                                                    "关",
                                                                                    122
                                                                                ),
                                                                                365,
                                                                                80,
                                                                                122
                                                                            ),
                                                                            n
                                                                            .font =
                                                                            "30px " +
                                                                            o,
                                                                            n
                                                                            .fillStyle =
                                                                            "#733400",
                                                                            n
                                                                            .fillText(
                                                                                l(
                                                                                    n,
                                                                                    "@" +
                                                                                    e
                                                                                    .nickname,
                                                                                    460
                                                                                ),
                                                                                365,
                                                                                946,
                                                                                460
                                                                            ),
                                                                            n
                                                                            .font =
                                                                            "34px " +
                                                                            o,
                                                                            n
                                                                            .fillStyle =
                                                                            "#CD4F06",
                                                                            n
                                                                            .textAlign =
                                                                            "center",
                                                                            n
                                                                            .fillText(
                                                                                l(
                                                                                    n,
                                                                                    "" +
                                                                                    e
                                                                                    .getMessage(),
                                                                                    720
                                                                                ),
                                                                                365,
                                                                                1020,
                                                                                720
                                                                            ),
                                                                            e
                                                                            .showImage()
                                                                    }
                                                                )
                                                            )
                                                    }));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [[0, 6]])
                        })));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(), i.showImage = function () {
                        var t = this;
                        if (this._canvas) {
                            var n = new Image;
                            this.img = n, n.style.position = "absolute", n.style.top =
                                "50%", n.style.left = "50%", n.style.width = "300px", n.style
                                .height = "auto", n.style.zIndex = "100", n.style.transform =
                                "translate(-50%, -50%)", n.src = this._canvas.toDataURL(
                                    "image/png", .1), n.onload = function () {
                                    o.container.appendChild(t.img)
                                }
                        }
                    }, i.downloadImage1 = function () {
                        this._canvas ? this._canvas.toBlob((function (t) {
                            if (t) {
                                var n = URL.createObjectURL(t),
                                    e = document.createElement("a");
                                e.href = n, e.download = "share.png", e.click(),
                                    URL.revokeObjectURL(n)
                            }
                        }), "image/png") : (this._canvas = document.createElement(
                                "canvas"), this._canvas.width = 750, this._canvas.height =
                            1624)
                    }, i.downloadImage = function () {
                        var t = this;
                        if (console.log(c.os), console.log(c.OS.IOS), c.os === c.OS.IOS)
                            return u.instance.showTips("iOS请使用长按保存图片");
                        if (this._canvas) {
                            var n = this._canvas.toDataURL("image/jpeg", .8);
                            n && g.invoke("imageSave", {
                                callback: !0,
                                imgUrl: "",
                                imgBase64: n
                            }).then((function (n) {
                                u.instance.showTips("图片已保存到相册"), o.container.removeChild(
                                    t.img)
                            })).catch((function (t) {
                                console.error("图片保存失败", t)
                            }))
                        } else this._canvas = document.createElement("canvas"), this._canvas
                            .width = 750, this._canvas.height = 1624
                    }, i.onBtnCloseClick = function () {
                        u.instance.hideDialog("share/share"), o.container.removeChild(this.img)
                    }, s
            }(r)) || d);
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Socket.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
    var o, t;
    return {
        setters: [function (e) {
            o = e.extends
        }, function (e) {
            t = e.cclegacy
        }],
        execute: function () {
            var s, n;
            t._RF.push({}, "db5d6+nPIdAcKTXUMGgDM2A", "Socket", void 0);
            e("default", function () {
                function e(e) {
                    var o = this;
                    this.socket = void 0, this.config = void 0, this.isUserClose = !1, this.hip =
                        function () {
                            o.socket ? o.send({
                                code: 1e3
                            }) : clearInterval(s)
                        }, console.log("Socket 初始化"), console.log(e), this.config = e, this.init(
                            e)
                }
                var t = e.prototype;
                return t.init = function (e) {
                    var o = this;
                    if (e) {
                        var t = e.createReward,
                            n = e.uploadHitBoat,
                            c = e.startGame;
                        console.log("Socket init"), this.config.createReward = t, this.config
                            .uploadHitBoat = n, this.config.startGame = c
                    }
                    var i = this.config,
                        r = i.onerror,
                        a = i.url,
                        l = i.challengeID,
                        f = new WebSocket(a);
                    f.onopen = function (e) {
                        s = setInterval(o.hip, 5e3), l ? f.send(JSON.stringify({
                            type: 100102,
                            token: o.config.token,
                            code: l
                        })) : f.send(JSON.stringify({
                            type: 100100,
                            token: o.config.token
                        })), o.hip()
                    }, f.onerror = function (e) {
                        console.log("socket.onerror"), o.socket && r("出现异常,链接已断开")
                    }, f.onmessage = function (e) {
                        if (o.socket) {
                            var t = (e || {}).data,
                                s = JSON.parse(t) || {},
                                n = s.code,
                                c = s.data,
                                i = s.message;
                            if ("1001" != n)
                                if (302 != n && 301 != n) {
                                    if (!n) return 0 != n || "100401" != c.type &&
                                        "100403" != c.type ? 0 != n || "100103" !=
                                        c.type && "100101" != c.type ? void 0 : (
                                            console.log(c, "开始游戏"), void localStorage
                                            .setItem("historyScore", c.maxScore)) :
                                        (console.log(c), o.config.gameOverCallback(
                                                c), "100403" == c.type && c.state &&
                                            i && r(i), void o.close());
                                    i && r(i)
                                } else r("出现异常,链接已断开")
                        }
                    }, f.onclose = function (e) {
                        console.log("socket.onclose", o.isUserClose, o.socket), !o.isUserClose &&
                            o.socket ? r("出现异常,链接已断开") : f.close()
                    }, this.socket = f
                }, t.onopen = function (e) {
                    this.socket && this.socket.send(JSON.stringify(e))
                }, t.send = function (e) {
                    if (this.socket) switch (this.socket.readyState) {
                        case 0:
                            onerror("连接尚未建立");
                            break;
                        case 1:
                            var t = o({}, e);
                            this.socket.send(JSON.stringify(t));
                            break;
                        case 2:
                        case 3:
                            onerror("链接断开，请重新进入页面")
                    }
                }, t.clearUploadBoat = function () {
                    clearInterval(n)
                }, t.setGameOver = function (e) {
                    var o = this.config.challengeID;
                    o ? this.send({
                        type: 100402,
                        score: e,
                        token: this.config.token,
                        code: o
                    }) : this.send({
                        type: 100400,
                        score: e,
                        token: this.config.token
                    })
                }, t.close = function () {
                    this.socket && (console.log(
                            "*******************删除监听器***********************"), this.isUserClose = !
                        0, this.socket.close(), clearInterval(s), clearInterval(n),
                        this.socket = null)
                }, e
            }());
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SocketClient.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
    var t, n;
    return {
        setters: [function (e) {
            t = e.createForOfIteratorHelperLoose
        }, function (e) {
            n = e.cclegacy
        }],
        execute: function () {
            n._RF.push({}, "e4b890DFThJtbX3kRn0loE+", "SocketClient", void 0), e("default", function () {
                function e(e) {
                    this.socket = null, this.url = void 0, this.reconnectAttempts = 0, this.maxReconnectAttempts =
                        5, this.reconnectInterval = 3e3, this.reconnectTimer = null, this.eventListeners =
                        new Map, this.isConnecting = !1, this.heartbeatInterval = 3e4, this.heartbeatTimer =
                        null, this.heartbeatTimeoutTimer = null, this.heartbeatTimeout = 5e3,
                        this.missedHeartbeats = 0, this.maxMissedHeartbeats = 3, this.url = e,
                        this.connect()
                }
                e.getInstance = function (t) {
                    return void 0 === t && (t = "ws://127.0.0.1:8080"), this._instance || (
                        this._instance = new e(t)), this._instance
                };
                var n = e.prototype;
                return n.getStatus = function () {
                    return this.socket ? this.socket.readyState : WebSocket.CLOSED
                }, n.isConnected = function () {
                    return null !== this.socket && this.socket.readyState === WebSocket.OPEN
                }, n.connect = function () {
                    var e = this;
                    (!this.socket || this.socket.readyState !== WebSocket.OPEN && this.socket
                        .readyState !== WebSocket.CONNECTING) && (this.isConnecting || (
                        this.isConnecting = !0, this.clearHeartbeat(), this.socket =
                        new WebSocket(this.url), this.socket.onopen = function (t) {
                            console.log("Socket connected to " + e.url), e.reconnectAttempts =
                                0, e.isConnecting = !1, e.startHeartbeat(), e.triggerEvent(
                                    "open", t)
                        }, this.socket.onmessage = function (t) {
                            try {
                                var n = JSON.parse(t.data);
                                if ("pong" === n.type) e.handleHeartbeatResponse();
                                else if (e.triggerEvent("message", t), n && n.type) {
                                    var s = Object.create(t);
                                    s.parsedData = n, e.triggerEvent(n.type, s)
                                }
                            } catch (n) {
                                console.error("Failed to parse message:", n), e.triggerEvent(
                                    "message", t)
                            }
                        }, this.socket.onclose = function (t) {
                            e.isConnecting = !1, e.clearHeartbeat(), e.triggerEvent(
                                "close", t), console.log(
                                "Socket connection closed. Code: " + t.code +
                                ", Reason: " + t.reason), t.wasClean || e.attemptReconnect()
                        }, this.socket.onerror = function (t) {
                            var n;
                            e.isConnecting = !1, console.error(
                                "Socket encountered an error:", t), e.triggerEvent(
                                "error", t), null == (n = e.socket) || n.close()
                        }))
                }, n.attemptReconnect = function () {
                    var e = this;
                    this.reconnectAttempts >= this.maxReconnectAttempts ? console.log(
                        "Max reconnect attempts reached") : (this.reconnectTimer &&
                        clearTimeout(this.reconnectTimer), this.reconnectAttempts++,
                        console.log("Attempting to reconnect (" + this.reconnectAttempts +
                            "/" + this.maxReconnectAttempts + ") in " + this.reconnectInterval /
                            1e3 + "s..."), this.reconnectTimer = setTimeout((function () {
                            console.log("Reconnecting..."), e.connect()
                        }), this.reconnectInterval))
                }, n.startHeartbeat = function () {
                    var e = this;
                    this.clearHeartbeat(), this.missedHeartbeats = 0, this.heartbeatTimer =
                        setInterval((function () {
                            e.sendHeartbeat()
                        }), this.heartbeatInterval)
                }, n.sendHeartbeat = function () {
                    if (this.isConnected()) {
                        var e;
                        if (this.missedHeartbeats >= this.maxMissedHeartbeats) return console
                            .warn("Missed " + this.missedHeartbeats +
                                " heartbeats, closing connection"), this.clearHeartbeat(),
                            void(null == (e = this.socket) || e.close(4e3,
                                "Heartbeat timeout"));
                        this.missedHeartbeats++, console.log("Sending heartbeat (missed: " +
                            this.missedHeartbeats + ")"), this.send({
                            type: "ping",
                            data: {
                                timestamp: Date.now()
                            }
                        }), this.heartbeatTimeoutTimer = setTimeout((function () {
                            console.warn("Heartbeat response timeout")
                        }), this.heartbeatTimeout)
                    } else this.clearHeartbeat()
                }, n.handleHeartbeatResponse = function () {
                    console.log("Received heartbeat response"), this.missedHeartbeats = 0,
                        this.heartbeatTimeoutTimer && (clearTimeout(this.heartbeatTimeoutTimer),
                            this.heartbeatTimeoutTimer = null)
                }, n.clearHeartbeat = function () {
                    this.heartbeatTimer && (clearInterval(this.heartbeatTimer), this.heartbeatTimer =
                        null), this.heartbeatTimeoutTimer && (clearTimeout(this.heartbeatTimeoutTimer),
                        this.heartbeatTimeoutTimer = null)
                }, n.setHeartbeatOptions = function (e, t, n) {
                    void 0 === e && (e = 3e4), void 0 === t && (t = 5e3), void 0 === n && (
                            n = 3), this.heartbeatInterval = e, this.heartbeatTimeout = t,
                        this.maxMissedHeartbeats = n, this.isConnected() && this.startHeartbeat()
                }, n.send = function (e) {
                    if (!this.isConnected()) return console.error(
                        "Cannot send message: socket is not connected"), !1;
                    try {
                        var t = "string" == typeof e ? e : JSON.stringify(e);
                        return this.socket.send(t), !0
                    } catch (e) {
                        return console.error("Error sending message:", e), !1
                    }
                }, n.close = function (e, t) {
                    void 0 === e && (e = 1e3), void 0 === t && (t = "Normal closure"), this
                        .clearHeartbeat(), this.socket && this.socket.close(e, t), this.reconnectTimer &&
                        (clearTimeout(this.reconnectTimer), this.reconnectTimer = null)
                }, n.addEventListener = function (e, t) {
                    this.eventListeners.has(e) || this.eventListeners.set(e, []), this.eventListeners
                        .get(e).push(t)
                }, n.removeEventListener = function (e, t) {
                    if (this.eventListeners.has(e)) {
                        var n = this.eventListeners.get(e),
                            s = n.indexOf(t); - 1 !== s && n.splice(s, 1)
                    }
                }, n.triggerEvent = function (e, n) {
                    if (this.eventListeners.has(e))
                        for (var s, i = t(this.eventListeners.get(e)); !(s = i()).done;) {
                            var r = s.value;
                            try {
                                r(n)
                            } catch (t) {
                                console.error("Error in " + e + " event listener:", t)
                            }
                        }
                }, n.setReconnectOptions = function (e, t) {
                    this.maxReconnectAttempts = e, this.reconnectInterval = t
                }, n.reset = function (e) {
                    this.close(), e && (this.url = e), this.reconnectAttempts = 0, this.connect()
                }, e
            }())._instance = void 0, n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SocketService.ts", ["cc"], (function () {
    var e;
    return {
        setters: [function (c) {
            e = c.cclegacy
        }],
        execute: function () {
            e._RF.push({}, "66618geSF5PGperppnvQV7V", "SocketService", void 0), e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/starLevel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./resourceUtil.ts"], (
    function (t) {
        var r, i, e, s, a, n, o, u, l;
        return {
            setters: [function (t) {
                r = t.applyDecoratedDescriptor, i = t.inheritsLoose, e = t.initializerDefineProperty, s =
                    t.assertThisInitialized
            }, function (t) {
                a = t.cclegacy, n = t._decorator, o = t.Sprite, u = t.Component
            }, function (t) {
                l = t.resourceUtil
            }],
            execute: function () {
                var c, h, p, f, S, m, d, b, L, v, y;
                a._RF.push({}, "d2170GTh3lLmIoXs77d0MKZ", "starLevel", void 0);
                var N = n.ccclass,
                    g = n.property;
                t("starLevel", (c = N("starLevel"), h = g(o), p = g(o), f = g(o), S = g(Number), c((b = r((
                    d = function (t) {
                        function r() {
                            for (var r, i = arguments.length, a = new Array(i), n =
                                    0; n < i; n++) a[n] = arguments[n];
                            return r = t.call.apply(t, [this].concat(a)) || this, e(
                                    r, "firstStar", b, s(r)), e(r, "secondStar", L,
                                    s(r)), e(r, "thirdStar", v, s(r)), e(r,
                                    "starNum", y, s(r)), r.starList = [], r.maxStarNum =
                                3, r
                        }
                        i(r, t);
                        var a = r.prototype;
                        return a.start = function () {
                            this.starList = [this.firstStar, this.secondStar,
                                this.thirdStar]
                        }, a.init = function (t) {
                            this.starList = [this.firstStar, this.secondStar,
                                this.thirdStar], this.starNum = t, this.setStarNum(
                                t)
                        }, a.setStarSprite = function (t, r) {
                            l.setStarSprite(t, r, (function () {}))
                        }, a.setStarNum = function (t) {
                            this.starNum = t < 0 ? 0 : t > this.maxStarNum ?
                                this.maxStarNum : t;
                            for (var r = 0; r < this.starList.length; r++) r <
                                t ? this.setStarSprite("star", this.starList[r]) :
                                this.setStarSprite("star_un", this.starList[r])
                        }, r
                    }(u)).prototype, "firstStar", [h], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), L = r(d.prototype, "secondStar", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), v = r(d.prototype, "thirdStar", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), y = r(d.prototype, "starNum", [S], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 0
                    }
                }), m = d)) || m));
                a._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/StarRatingSystem.ts", ["cc"], (function (t) {
    var e, r;
    return {
        setters: [function (t) {
            e = t.cclegacy, r = t._decorator
        }],
        execute: function () {
            var h;
            e._RF.push({}, "d761c0RcNdM+7sK1BSEBu20", "StarRatingSystem", void 0);
            var i = r.ccclass;
            t("StarRatingSystem", i("StarRatingSystem")(h = function () {
                function t() {
                    this.threeStarTimeThreshold = 20, this.twoStarTimeThreshold = 5, this.oneStarTimeThreshold =
                        0
                }
                var e = t.prototype;
                return e.init = function (t) {
                    var e, r, h;
                    this.threeStarTimeThreshold = null != (e = t.threeStarTimeThreshold) ?
                        e : this.threeStarTimeThreshold, this.twoStarTimeThreshold =
                        null != (r = t.twoStarTimeThreshold) ? r : this.twoStarTimeThreshold,
                        this.oneStarTimeThreshold = null != (h = t.oneStarTimeThreshold) ?
                        h : this.oneStarTimeThreshold
                }, e.calculateStars = function (t, e) {
                    if (e <= 0 && t < this.twoStarTimeThreshold) return 0;
                    var r = 0;
                    return t >= this.threeStarTimeThreshold ? r = 3 : t >= this.twoStarTimeThreshold ?
                        r = 2 : t > this.oneStarTimeThreshold && (r = 1), r
                }, t
            }()) || h);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/success.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./constant.ts",
    "./uiManager.ts", "./page.ts", "./resourceUtil.ts", "./EventHandler.ts", "./UserManager.ts",
    "./resultRandom.ts"], (function (t) {
    var e, n, i, r, a, s, o, l, u, c, h, f, p, g, m, S, d;
    return {
        setters: [function (t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, r =
                t.assertThisInitialized
        }, function (t) {
            a = t.cclegacy, s = t._decorator, o = t.Node, l = t.Sprite, u = t.Label, c = t.Component
        }, function (t) {
            h = t.constant
        }, function (t) {
            f = t.uiManager
        }, function (t) {
            p = t.PagePath
        }, function (t) {
            g = t.resourceUtil
        }, function (t) {
            m = t.EventHandler
        }, function (t) {
            S = t.UserManager
        }, function (t) {
            d = t.resultRandom
        }],
        execute: function () {
            var b, N, v, B, w, L, y, x, k, D, E, z, _, C, A, P, R, H, M;
            a._RF.push({}, "822f3xdTvdAWojN/P9Hjhb0", "success", void 0);
            var U = s.ccclass,
                G = s.property;
            t("success", (b = U("success"), N = G(o), v = G(o), B = G(o), w = G(l), L = G(l), y = G(l),
                x = G(u), k = G(u), b((z = e((E = function (t) {
                    function e() {
                        for (var e, n = arguments.length, a = new Array(n), s =
                                0; s < n; s++) a[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(a)) || this, i(
                                e, "btnBack", z, r(e)), i(e, "btnNext", _, r(e)),
                            i(e, "btnShare", C, r(e)), i(e, "firstStar", A, r(e)),
                            i(e, "secondStar", P, r(e)), i(e, "thirdStar", R, r(
                                e)), i(e, "message", H, r(e)), i(e, "shareNum",
                                M, r(e)), e.starList = [], e.starNum = 2, e.maxStarNum =
                            3, e.rewardLevel = null, e.level = null, e
                    }
                    n(e, t);
                    var a = e.prototype;
                    return a.onEnable = function () {
                        this.btnBack.on("click", this.onBtnBack, this),
                            this.btnNext.on("click", this.onBtnNext, this),
                            this.btnShare.on("click", this.onBtnShare, this)
                    }, a.onDestroy = function () {
                        this.btnBack.off("click", this.onBtnBack, this),
                            this.btnNext.off("click", this.onBtnNext, this),
                            this.btnShare.off("click", this.onBtnShare,
                                this)
                    }, a.show = function (t) {
                        console.log("successUi show", t), this.starList = [
                                this.firstStar, this.secondStar, this.thirdStar
                                ], this.starNum = t.stars, this.rewardLevel =
                            t.rewardLevel, this.level = t.level;
                        var e = d.getResult(0),
                            n = e.randomBg,
                            i = e.tip,
                            r = this.node.getChildByName("dialog").getComponent(
                                l);
                        g.setSpriteFrame(n, r, (function () {})), this.message
                            .string = i, this.updateShareNum(), this.setStarNum(
                                this.starNum)
                    }, a.start = function () {
                        this.starList = [this.firstStar, this.secondStar,
                            this.thirdStar]
                    }, a.updateShareNum = function () {
                        this.shareNum.string = "分享得1体力(每日" + S.instance.user
                            .shareNum + "/" + S.instance.user.totalShareNum +
                            "次)"
                    }, a.setStarSprite = function (t, e) {
                        g.setSpriteFrame("textures/UI/success/" + t, e, (
                            function () {}))
                    }, a.setStarNum = function (t) {
                        this.starNum = t < 0 ? 0 : t > this.maxStarNum ?
                            this.maxStarNum : t;
                        for (var e = 0; e < this.starList.length; e++) e <
                            t ? this.setStarSprite("star", this.starList[e]) :
                            this.setStarSprite("star_un", this.starList[e])
                    }, a.onBtnBack = function () {
                        f.instance.hideDialog(p.Win), f.instance.hideDialog(
                            p.Game), f.instance.showDialog(p.Level)
                    }, a.onBtnNext = function () {
                        if (console.log("onBtnNext"), this.isNeedChapter(
                                this.level)) f.instance.hideDialog(p.Win),
                            f.instance.hideDialog(p.Game), f.instance.showDialog(
                                p.Chapter, [this.level + ""]);
                        else {
                            f.instance.hideDialog(p.Win);
                            var t = {
                                level: this.level + 1,
                                rewardLevel: this.rewardLevel
                            };
                            console.log("onBtnNext", t), m.dispatch(
                                "GAME_AGAIN", t)
                        }
                    }, a.isNeedChapter = function (t) {
                        if (t === h.NEED_CHAPTER_LEVEL1 || t === h.NEED_CHAPTER_LEVEL2) {
                            var e = localStorage.getItem("chapter") || "[]";
                            return !JSON.parse(e).includes(t.toString())
                        }
                        return !1
                    }, a.onBtnShare = function () {
                        var t = this;
                        console.log("onBtnShare"), f.instance.showDialog(p.Share,
                            [{
                                level: this.level
                            }], (function () {
                                S.instance.shareGame().then((
                                    function () {
                                        t.updateShareNum()
                                    }))
                            }))
                    }, e
                }(c)).prototype, "btnBack", [N], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), _ = e(E.prototype, "btnNext", [v], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), C = e(E.prototype, "btnShare", [B], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), A = e(E.prototype, "firstStar", [w], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), P = e(E.prototype, "secondStar", [L], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), R = e(E.prototype, "thirdStar", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), H = e(E.prototype, "message", [x], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), M = e(E.prototype, "shareNum", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), D = E)) || D));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/task.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./taskItem.ts", "./Log.ts",
    "./apiClient.ts", "./uiManager.ts", "./constant.ts", "./UserManager.ts"], (function (t) {
    var n, i, e, a, r, s, o, l, c, u, f, p, h, g, m, d, b;
    return {
        setters: [function (t) {
            n = t.applyDecoratedDescriptor, i = t.inheritsLoose, e = t.initializerDefineProperty, a =
                t.assertThisInitialized
        }, function (t) {
            r = t.cclegacy, s = t._decorator, o = t.Prefab, l = t.ScrollView, c = t.Label, u = t.instantiate,
                f = t.Component
        }, function (t) {
            p = t.taskItem
        }, function (t) {
            h = t.default
        }, function (t) {
            g = t.ApiClient
        }, function (t) {
            m = t.uiManager
        }, function (t) {
            d = t.constant
        }, function (t) {
            b = t.UserManager
        }],
        execute: function () {
            var k, w, v, y, D, C, P, z, L;
            r._RF.push({}, "171aece1CtK1rSXprwa0rXT", "task", void 0);
            var M = s.ccclass,
                T = s.property,
                _ = [{
                    id: 1,
                    name: "分享游戏(1/3)",
                    reward: "体力*1",
                    status: 1
                }, {
                    id: 2,
                    name: "关注微信公众号",
                    reward: "体力*2",
                    status: 1
                }, {
                    id: 3,
                    name: "关注官方抖音",
                    reward: "体力*3",
                    status: 1
                }, {
                    id: 4,
                    name: "关注官方B站",
                    reward: "体力*4",
                    status: 1
                }];
            t("task", (k = M("task"), w = T(o), v = T(l), y = T(c), k((P = n((C = function (t) {
                function n() {
                    for (var n, i = arguments.length, r = new Array(i), s =
                            0; s < i; s++) r[s] = arguments[s];
                    return n = t.call.apply(t, [this].concat(r)) || this, e(
                        n, "itemPrefab", P, a(n)), e(n, "scroll", z, a(
                        n)), e(n, "account", L, a(n)), n.list = [], n
                }
                i(n, t);
                var r = n.prototype;
                return r.start = function () {
                    this.account.string = "我的账号:" + b.instance.user.nickname,
                        d.isOffline && (this.list = _, this.initData(
                            this.list))
                }, r.show = function () {
                    d.isOffline || this.getTask()
                }, r.getTask = function () {
                    var t = this;
                    g.getTaskList().then((function (n) {
                        h.log("奖励列表", n), t.list = n.task_list,
                            t.initData(t.list)
                    })).catch((function (t) {
                        h.log("奖励列表数据获取失败", t)
                    }))
                }, r.initData = function (t) {
                    if (this.scroll.content.removeAllChildren(), t && 0 !==
                        t.length)
                        for (var n = 0; n < t.length; ++n) {
                            var i = u(this.itemPrefab),
                                e = t[n];
                            i && (i.parent = this.scroll.content, i.getComponent(
                                p).init(e))
                        }
                }, r.handleBack = function () {
                    m.instance.showDialog("main/main"), m.instance.hideDialog(
                        "task/task")
                }, n
            }(f)).prototype, "itemPrefab", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), z = n(C.prototype, "scroll", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), L = n(C.prototype, "account", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), D = C)) || D));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/taskItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./resourceUtil.ts",
    "./uiManager.ts", "./apiClient.ts", "./constant.ts", "./UserManager.ts"], (function (t) {
    var e, i, n, s, a, o, r, c, l, u, p, h, f, d, w;
    return {
        setters: [function (t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, s =
                t.assertThisInitialized
        }, function (t) {
            a = t.cclegacy, o = t._decorator, r = t.Label, c = t.Sprite, l = t.Button, u = t.Component
        }, function (t) {
            p = t.resourceUtil
        }, function (t) {
            h = t.uiManager
        }, function (t) {
            f = t.ApiClient
        }, function (t) {
            d = t.constant
        }, function (t) {
            w = t.UserManager
        }],
        execute: function () {
            var k, b, m, g, y, v, B, _, R;
            a._RF.push({}, "1e6e3lXlEhNWb/+l6Q1wz8G", "taskItem", void 0);
            var T = o.ccclass,
                z = o.property;
            t("taskItem", (k = T("taskItem"), b = z({
                type: r,
                tooltip: "奖励名称"
            }), m = z({
                type: r,
                tooltip: "任务描述"
            }), g = z({
                type: c,
                tooltip: "领取按钮奖励状态"
            }), k((B = e((v = function (t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), o =
                            0; o < i; o++) a[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(a)) || this, n(
                            e, "taskName", B, s(e)), n(e, "taskReward", _,
                            s(e)), n(e, "spBtn", R, s(e)), e.state = 0, e.id =
                        0, e
                }
                i(e, t);
                var a = e.prototype;
                return a.start = function () {}, a.init = function (t) {
                    var e = this;
                    this.taskName.string = t.name + ("share_daily" == t
                            .key ? "(" + t.num + "/" + t.totalNum + ")" :
                            ""), this.state = t.status, this.id = t.key,
                        this.taskReward.string = t.reward, p.setRewardBtnIcon(
                            this.state ? this.state : 4, this.spBtn, (
                                function () {
                                    e.spBtn.node.active = !0
                                })), 2 == this.state && (this.spBtn.node
                            .getComponent(l).interactable = !1)
                }, a.getTaskPrize = function () {
                    var t = this;
                    f.getTaskReward({
                        key: this.id,
                        action: 1
                    }).then((function (e) {
                        h.instance.showTips("领取成功", (
                                function () {})), t.state =
                            2, p.setRewardBtnIcon(t.state,
                                t.spBtn, (function () {})),
                            t.spBtn.node.getComponent(l).interactable = !
                            1
                    })).catch((function (t) {
                        console.log(t)
                    }))
                }, a.setTask = function (t) {
                    var e = "";
                    switch (t) {
                        case "follow_wechat_official":
                            e =
                                "https://mp.weixin.qq.com/s/q8Mss0SDaKwph9YSGueE6A";
                            break;
                        case "follow_wechat_video":
                            e = "https://weixin.qq.com/sph/Aiiifiysu";
                            break;
                        case "follow_douyin":
                            e = "https://v.douyin.com/iPWPhSVH/";
                            break;
                        case "follow_bilibili":
                            e = "https://space.bilibili.com/1672821212";
                            break;
                        case "follow_red_note":
                            e =
                                "https://www.xiaohongshu.com/user/profile/66024026000000000b00d628";
                            break;
                        default:
                            e = ""
                    }
                    return e
                }, a.onClickBtn = function (t) {
                    if (0 == this.state) {
                        var e = this.setTask(this.id);
                        return e ? location.href = e : w.instance.shareGameMain()
                            .then((function () {
                                h.instance.showTips(
                                    "链接已复制到剪切板了~快去分享给好兄弟吧",
                                    (function () {}))
                            })), void f.getTaskReward({
                                key: this.id,
                                action: 0
                            }).then((function (t) {}))
                    }
                    if (1 == this.state) {
                        if (!d.isOffline) return void this.getTaskPrize();
                        h.instance.showTips("领取成功", (function () {})),
                            this.state = 2, this.spBtn.node.getComponent(
                                l).interactable = !1, p.setRewardBtnIcon(
                                this.state, this.spBtn, (function () {})
                            )
                    }
                }, e
            }(u)).prototype, "taskName", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), _ = e(v.prototype, "taskReward", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), R = e(v.prototype, "spBtn", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), y = v)) || y));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/tips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./poolManager.ts"], (
    function (t) {
        var e, n, i, o, r, s, a, c, l, p, u, h, d;
        return {
            setters: [function (t) {
                e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, o =
                    t.assertThisInitialized
            }, function (t) {
                r = t.cclegacy, s = t._decorator, a = t.Label, c = t.Vec3, l = t.UITransform, p = t.isValid,
                    u = t.tween, h = t.Component
            }, function (t) {
                d = t.poolManager
            }],
            execute: function () {
                var f, g, b, v, y;
                r._RF.push({}, "60f49uw4/dA4rGh/C738U1T", "tips", void 0);
                var w = s.ccclass,
                    P = s.property;
                t("tips", (f = w("tips"), g = P(a), f((y = e((v = function (t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), s =
                                0; s < n; s++) r[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(r)) || this, i(
                            e, "lbTips", y, o(e)), e.targetPos = void 0, e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.start = function () {}, r.show = function (t, e) {
                        var n = this;
                        this.targetPos = new c(0, 200, 0), this.node.setPosition(
                            this.targetPos), this.lbTips.string = t;
                        var i = this.lbTips.node.getComponent(l).contentSize;
                        p(i) ? (this.node.getComponent(l).setContentSize(i.width +
                            100 < 240 ? 240 : i.width + 100, i.height +
                            20), this.scheduleOnce((function () {
                            u(n.targetPos).by(.8, new c(0,
                                150, 0)).call((function () {
                                e && e(), d.instance
                                    .putNode(n.node)
                            })).start()
                        }), .8)) : d.instance.putNode(this.node)
                    }, e
                }(h)).prototype, "lbTips", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return null
                    }
                }), b = v)) || b));
                r._RF.pop()
            }
        }
    }));

System.register("chunks:///_virtual/TypewriterEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var e, i, n, r, l, a, o, s, c, p, u;
    return {
        setters: [function (t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, r =
                t.assertThisInitialized
        }, function (t) {
            l = t.cclegacy, a = t._decorator, o = t.Label, s = t.error, c = t.warn, p = t.macro, u =
                t.Component
        }],
        execute: function () {
            var h, f, y, g, _, d, b, T, m, x, L;
            l._RF.push({}, "bf60ceu3RxGWZ+xplyeg88i", "TypewriterEffect", void 0);
            var v = a.ccclass,
                C = a.property;
            t("TypewriterEffect", (h = v("TypewriterEffect"), f = C(o), y = C({
                tooltip: "每个字符显示的时间间隔（秒）"
            }), g = C({
                tooltip: "是否在组件启动时自动播放预设文本"
            }), _ = C({
                tooltip: "如果 playOnLoad 为 true，则播放此文本"
            }), h((T = e((b = function (t) {
                function e() {
                    for (var e, i = arguments.length, l = new Array(i), a =
                            0; a < i; a++) l[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(l)) || this, n(
                            e, "targetLabel", T, r(e)), n(e, "typingSpeed",
                            m, r(e)), n(e, "playOnLoad", x, r(e)), n(e,
                            "defaultText", L, r(e)), e._fullText = "", e._currentIndex =
                        0, e._isTyping = !1, e._completionCallback = null,
                        e
                }
                i(e, t);
                var l = e.prototype;
                return l.onLoad = function () {
                    if (!this.targetLabel) return s(
                            "TypewriterEffect: targetLabel 未被指定!"),
                        void(this.enabled = !1)
                }, l.start = function () {
                    this.playOnLoad && this.startTyping(this.defaultText)
                }, l.startTyping = function (t, e, i) {
                    if (!this._isTyping) {
                        this._fullText = t, this.targetLabel.string =
                            "", this._currentIndex = 0, this._isTyping = !
                            0, this._completionCallback = i || null;
                        var n = void 0 !== e ? e : this.typingSpeed;
                        return n <= 0 ? (c(
                                "TypewriterEffect: typingSpeed 必须大于 0。将立即显示完整文本。"
                            ), void this.completeImmediate()) : 0 ===
                            this._fullText.length ? (this._isTyping = !
                                1, void(this._completionCallback &&
                                    this._completionCallback())) : void this
                            .schedule(this._typeCharacter, n, p.REPEAT_FOREVER,
                                0)
                    }
                    c("TypewriterEffect: 正在打字中，请先停止或等待完成。")
                }, l._typeCharacter = function () {
                    this._currentIndex < this._fullText.length ? (this.targetLabel
                        .string += this._fullText[this._currentIndex],
                        this._currentIndex++) : this.stopTyping(!0)
                }, l.stopTyping = function (t) {
                    void 0 === t && (t = !1), this.unschedule(this._typeCharacter),
                        this._isTyping = !1, t && this._completionCallback &&
                        (this._completionCallback(), this._completionCallback =
                            null)
                }, l.completeImmediate = function () {
                    this.targetLabel && void 0 !== this._fullText && (
                        this.stopTyping(!1), this.targetLabel.string =
                        this._fullText, this._isTyping = !1, this._completionCallback &&
                        (this._completionCallback(), this._completionCallback =
                            null))
                }, l.isTyping = function () {
                    return this._isTyping
                }, l.update = function (t) {}, e
            }(u)).prototype, "targetLabel", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), m = e(b.prototype, "typingSpeed", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return .1
                }
            }), x = e(b.prototype, "playOnLoad", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return !1
                }
            }), L = e(b.prototype, "defaultText", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return "这是一个章节过渡的示例文字..."
                }
            }), d = b)) || d));
            l._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ua-parser.min.js", ["./cjs-loader.mjs"], (function (i, e) {
    var o;
    return {
        setters: [function (i) {
            o = i.default
        }],
        execute: function () {
            i("default", void 0);
            var a = i("__cjsMetaURL", e.meta.url);
            o.define(a, (function (e, o, a, r, n) {
                ! function (i, o) {
                    var r = "function",
                        n = "undefined",
                        t = "object",
                        s = "string",
                        b = "major",
                        w = "model",
                        d = "name",
                        l = "type",
                        c = "vendor",
                        u = "version",
                        m = "architecture",
                        p = "console",
                        f = "mobile",
                        h = "tablet",
                        v = "smarttv",
                        g = "wearable",
                        x = "embedded",
                        k = "Amazon",
                        y = "Apple",
                        _ = "ASUS",
                        S = "BlackBerry",
                        T = "Firefox",
                        q = "Google",
                        z = "Huawei",
                        A = "LG",
                        N = "Microsoft",
                        O = "Motorola",
                        j = "Opera",
                        C = "Samsung",
                        U = "Sharp",
                        B = "Sony",
                        E = "Xiaomi",
                        P = "Zebra",
                        M = "Facebook",
                        R = "Chromium OS",
                        D = "Mac OS",
                        V = function (i) {
                            for (var e = {}, o = 0; o < i.length; o++) e[i[o].toUpperCase()] =
                                i[o];
                            return e
                        },
                        F = function (i, e) {
                            return typeof i === s && -1 !== I(e).indexOf(I(i))
                        },
                        I = function (i) {
                            return i.toLowerCase()
                        },
                        G = function (i, e) {
                            if (typeof i === s) return i = i.replace(/^\s\s*/, ""), typeof e ===
                                n ? i : i.substring(0, 500)
                        },
                        L = function (i, e) {
                            for (var a, n, s, b, w, d, l = 0; l < e.length && !w;) {
                                var c = e[l],
                                    u = e[l + 1];
                                for (a = n = 0; a < c.length && !w && c[a];)
                                    if (w = c[a++].exec(i))
                                        for (s = 0; s < u.length; s++) d = w[++n], typeof (
                                                b = u[s]) === t && b.length > 0 ? 2 === b.length ?
                                            typeof b[1] == r ? this[b[0]] = b[1].call(this,
                                                d) : this[b[0]] = b[1] : 3 === b.length ?
                                            typeof b[1] !== r || b[1].exec && b[1].test ?
                                            this[b[0]] = d ? d.replace(b[1], b[2]) : o :
                                            this[b[0]] = d ? b[1].call(this, d, b[2]) : o :
                                            4 === b.length && (this[b[0]] = d ? b[3].call(
                                                this, d.replace(b[1], b[2])) : o) : this[b] =
                                            d || o;
                                l += 2
                            }
                        },
                        H = function (i, e) {
                            for (var a in e)
                                if (typeof e[a] === t && e[a].length > 0) {
                                    for (var r = 0; r < e[a].length; r++)
                                        if (F(e[a][r], i)) return "?" === a ? o : a
                                } else if (F(e[a], i)) return "?" === a ? o : a;
                            return i
                        },
                        Z = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        W = {
                            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [u, [d, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i], [u, [d, "Edge"]], [
                                    /(opera mini)\/([-\w\.]+)/i,
                                    /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                                    /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, u],
                                [/opios[\/ ]+([\w\.]+)/i], [u, [d, "Opera Mini"]], [
                                    /\bop(?:rg)?x\/([\w\.]+)/i], [u, [d, "Opera GX"]],
                                [/\bopr\/([\w\.]+)/i], [u, [d, j]], [
                                    /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
                                    ], [u, [d, "Baidu"]], [/(kindle)\/([\w\.]+)/i,
                                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                                    /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                                    /(?:ms|\()(ie) ([\w\.]+)/i,
                                    /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                    /(heytap|ovi)browser\/([\d\.]+)/i,
                                    /(weibo)__([\d\.]+)/i], [d, u], [
                                    /\bddg\/([\w\.]+)/i], [u, [d, "DuckDuckGo"]], [
                                    /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
                                    ], [u, [d, "UCBrowser"]], [
                                    /microm.+\bqbcore\/([\w\.]+)/i,
                                    /\bqbcore\/([\w\.]+).+microm/i,
                                    /micromessenger\/([\w\.]+)/i], [u, [d, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i], [u, [d, "Konqueror"]], [
                                    /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [u,
                                    [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [
                                    u, [d, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [u, [
                                    d, "Smart Lenovo Browser"]], [
                                    /(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/,
                                    "$1 Secure Browser"], u], [/\bfocus\/([\w\.]+)/i],
                                [u, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [u, [
                                    d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [u,
                                    [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [u, [d,
                                    "Dolphin"]], [/coast\/([\w\.]+)/i], [u, [d,
                                    "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [u, [
                                    d, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [u, [d,
                                    T]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d,
                                    "360 Browser"]], [
                                    /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                                [[d, /(.+)/, "$1 Browser"], u], [
                                    /samsungbrowser\/([\w\.]+)/i], [u, [d,
                                    "Samsung Internet"]], [
                                    /(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], u],
                                [/metasr[\/ ]?([\d\.]+)/i], [u, [d, "Sogou Explorer"]],
                                [/(sogou)mo\w+\/([\d\.]+)/i], [[d, "Sogou Mobile"], u],
                                [/(electron)\/([\w\.]+) safari/i,
                                    /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                                    /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [d,
                                    u], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [d], [
                                    /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                                    ], [[d, M], u], [/(Klarna)\/([\w\.]+)/i,
                                    /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                                    /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                                    /safari (line)\/([\w\.]+)/i,
                                    /\b(line)\/([\w\.]+)\/iab/i,
                                    /(alipay)client\/([\w\.]+)/i,
                                    /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                                    /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [
                                    d, u], [/\bgsa\/([\w\.]+) .*safari\//i], [u, [d,
                                    "GSA"]], [
                                    /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [u,
                                    [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [u, [d, "Chrome Headless"]], [
                                    / wv\).+(chrome)\/([\w\.]+)/i], [[d,
                                    "Chrome WebView"], u], [
                                    /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                                    ], [u, [d, "Android Browser"]], [
                                    /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                                    ], [d, u], [
                                    /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [u,
                                    [d, "Mobile Safari"]], [
                                    /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
                                    ], [u, d], [
                                    /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d,
                                    [u, H, {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [d, u], [
                                    /(navigator|netscape\d?)\/([-\w\.]+)/i], [[d,
                                    "Netscape"], u], [
                                    /mobile vr; rv:([\w\.]+)\).+firefox/i], [u, [d,
                                    "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i,
                                    /(swiftfox)/i,
                                    /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                    /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                    /(firefox)\/([\w\.]+)/i,
                                    /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                    /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d,
                                    u], [/(cobalt)\/([\w\.]+)/i], [d, [u,
                                    /master.|lts./, ""]]],
                            cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[m,
                                    "amd64"]], [/(ia32(?=;))/i], [[m, I]], [
                                    /((?:i[346]|x)86)[;\)]/i], [[m, "ia32"]], [
                                    /\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[m, "arm64"]],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[m, "armhf"]], [
                                    /windows (ce|mobile); ppc;/i], [[m, "arm"]], [
                                    /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[m,
                                    /ower/, "", I]], [/(sun4\w)[;\)]/i], [[m, "sparc"]],
                                [
                                    /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                    ], [[m, I]]],
                            device: [[
                                    /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                                    ], [w, [c, C], [l, h]], [
                                    /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                                    /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [w, [c, C],
                                    [l, f]], [
                                    /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [w, [c,
                                    y], [l, f]], [/\((ipad);[-\w\),; ]+apple/i,
                                    /applecoremedia\/[\w\.]+ \((ipad)/i,
                                    /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [w, [c, y], [l,
                                    h]], [/(macintosh);/i], [w, [c, y]], [
                                    /\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [w, [c, U], [l, f]],
                                [
                                    /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                                    ], [w, [c, z], [l, h]], [
                                    /(?:huawei|honor)([-\w ]+)[;\)]/i,
                                    /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                                    ], [w, [c, z], [l, f]], [
                                    /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                                    /\b; (\w+) build\/hm\1/i,
                                    /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                                    /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                                    /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                                    /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                                    ], [[w, /_/g, " "], [c, E], [l, f]], [
                                    /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                                    /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[w,
                                    /_/g, " "], [c, E], [l, h]], [/; (\w+) bui.+ oppo/i,
                                    /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                                    ], [w, [c, "OPPO"], [l, f]], [
                                    /\b(opd2\d{3}a?) bui/i], [w, [c, "OPPO"], [l, h]],
                                [/vivo (\w+)(?: bui|\))/i,
                                    /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [w, [c, "Vivo"],
                                    [l, f]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [w, [
                                    c, "Realme"], [l, f]], [
                                    /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                                    /\bmot(?:orola)?[- ](\w*)/i,
                                    /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                                    ], [w, [c, O], [l, f]], [
                                    /\b(mz60\d|xoom[2 ]{0,2}) build\//i], [w, [c, O], [
                                    l, h]], [
                                    /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                                    ], [w, [c, A], [l, h]], [
                                    /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                                    /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                                    /\blg-?([\d\w]+) bui/i], [w, [c, A], [l, f]], [
                                    /(ideatab[-\w ]+)/i,
                                    /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                                    ], [w, [c, "Lenovo"], [l, h]], [
                                    /(?:maemo|nokia).*(n900|lumia \d+)/i,
                                    /nokia[-_ ]?([-\w\.]*)/i], [[w, /_/g, " "], [c,
                                    "Nokia"], [l, f]], [/(pixel c)\b/i], [w, [c, q], [l,
                                    h]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [w, [c, q], [l, f]], [
                                    /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                                    ], [w, [c, B], [l, f]], [/sony tablet [ps]/i,
                                    /\b(?:sony)?sgp\w+(?: bui|\))/i], [[w,
                                    "Xperia Tablet"], [c, B], [l, h]], [
                                    / (kb2005|in20[12]5|be20[12][59])\b/i,
                                    /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [w, [c,
                                    "OnePlus"], [l, f]], [/(alexa)webm/i,
                                    /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                                    /(kf[a-z]+)( bui|\)).+silk\//i], [w, [c, k], [l, h]],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[w,
                                    /(.+)/g, "Fire Phone $1"], [c, k], [l, f]], [
                                    /(playbook);[-\w\),; ]+(rim)/i], [w, c, [l, h]], [
                                    /\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [w, [c, S], [l, f]], [
                                    /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                                    ], [w, [c, _], [l, h]], [
                                    / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [
                                    w, [c, _], [l, f]], [/(nexus 9)/i], [w, [c, "HTC"],
                                    [l, h]], [
                                    /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                                    /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                                    /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                                    ], [c, [w, /_/g, " "], [l, f]], [
                                    /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [w, [c,
                                    "Acer"], [l, h]], [/droid.+; (m[1-5] note) bui/i,
                                    /\bmz-([-\w]{2,})/i], [w, [c, "Meizu"], [l, f]], [
                                    /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                                [w, [c, "Ulefone"], [l, f]], [
                                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                                    /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i,
                                    /(microsoft); (lumia[\w ]+)/i,
                                    /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i,
                                    /(oppo) ?([\w ]+) bui/i], [c, w, [l, f]], [
                                    /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i,
                                    /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                                    /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i,
                                    /(dell) (strea[kpr\d ]*[\dko])/i,
                                    /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                                    /(trinity)[- ]*(t\d{3}) bui/i,
                                    /(gigaset)[- ]+(q\w{1,9}) bui/i,
                                    /(vodafone) ([\w ]+)(?:\)| bui)/i], [c, w, [l, h]],
                                [/(surface duo)/i], [w, [c, N], [l, h]], [
                                    /droid [\d\.]+; (fp\du?)(?: b|\))/i], [w, [c,
                                    "Fairphone"], [l, f]], [/(u304aa)/i], [w, [c,
                                    "AT&T"], [l, f]], [/\bsie-(\w*)/i], [w, [c,
                                    "Siemens"], [l, f]], [/\b(rct\w+) b/i], [w, [c,
                                    "RCA"], [l, h]], [/\b(venue[\d ]{2,7}) b/i], [w, [c,
                                    "Dell"], [l, h]], [/\b(q(?:mv|ta)\w+) b/i], [w, [c,
                                    "Verizon"], [l, h]], [
                                    /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [w,
                                    [c, "Barnes & Noble"], [l, h]], [
                                    /\b(tm\d{3}\w+) b/i], [w, [c, "NuVision"], [l, h]],
                                [/\b(k88) b/i], [w, [c, "ZTE"], [l, h]], [
                                    /\b(nx\d{3}j) b/i], [w, [c, "ZTE"], [l, f]], [
                                    /\b(gen\d{3}) b.+49h/i], [w, [c, "Swiss"], [l, f]],
                                [/\b(zur\d{3}) b/i], [w, [c, "Swiss"], [l, h]], [
                                    /\b((zeki)?tb.*\b) b/i], [w, [c, "Zeki"], [l, h]],
                                [/\b([yr]\d{2}) b/i,
                                    /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[c,
                                    "Dragon Touch"], w, [l, h]], [/\b(ns-?\w{0,9}) b/i],
                                [w, [c, "Insignia"], [l, h]], [
                                    /\b((nxa|next)-?\w{0,9}) b/i], [w, [c, "NextBook"],
                                    [l, h]], [
                                    /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [[c, "Voice"], w, [l, f]], [/\b(lvtel\-)?(v1[12]) b/i],
                                [[c, "LvTel"], w, [l, f]], [/\b(ph-1) /i], [w, [c,
                                    "Essential"], [l, f]], [
                                    /\b(v(100md|700na|7011|917g).*\b) b/i], [w, [c,
                                    "Envizen"], [l, h]], [/\b(trio[-\w\. ]+) b/i], [w,
                                    [c, "MachSpeed"], [l, h]], [/\btu_(1491) b/i], [w,
                                    [c, "Rotor"], [l, h]], [/(shield[\w ]+) b/i], [w, [
                                    c, "Nvidia"], [l, h]], [/(sprint) (\w+)/i], [c, w,
                                    [l, f]], [/(kin\.[onetw]{3})/i], [[w, /\./g, " "],
                                    [c, N], [l, f]], [
                                    /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                                    ], [w, [c, P], [l, h]], [
                                    /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [w, [c, P],
                                    [l, f]], [/smart-tv.+(samsung)/i], [c, [l, v]], [
                                    /hbbtv.+maple;(\d+)/i], [[w, /^/, "SmartTV"], [c, C],
                                    [l, v]], [
                                    /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                                    ], [[c, A], [l, v]], [/(apple) ?tv/i], [c, [w,
                                    "Apple TV"], [l, v]], [/crkey/i], [[w, "Chromecast"],
                                    [c, q], [l, v]], [/droid.+aft(\w+)( bui|\))/i], [w,
                                    [c, k], [l, v]], [/\(dtv[\);].+(aquos)/i,
                                    /(aquos-tv[\w ]+)\)/i], [w, [c, U], [l, v]], [
                                    /(bravia[\w ]+)( bui|\))/i], [w, [c, B], [l, v]], [
                                    /(mitv-\w{5}) bui/i], [w, [c, E], [l, v]], [
                                    /Hbbtv.*(technisat) (.*);/i], [c, w, [l, v]], [
                                    /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                                    /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                                    ], [[c, G], [w, G], [l, v]], [
                                    /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [[l, v]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [c,
                                    w, [l, p]], [/droid.+; (shield) bui/i], [w, [c,
                                    "Nvidia"], [l, p]], [
                                    /(playstation [345portablevi]+)/i], [w, [c, B], [l,
                                    p]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [w, [c,
                                    N], [l, p]], [/((pebble))app/i], [c, w, [l, g]], [
                                    /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [w, [c, y],
                                    [l, g]], [/droid.+; (glass) \d/i], [w, [c, q], [l,
                                    g]], [/droid.+; (wt63?0{2,3})\)/i], [w, [c, P], [l,
                                    g]], [/(quest( \d| pro)?)/i], [w, [c, M], [l, g]],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [c, [l, x]],
                                [/(aeobc)\b/i], [w, [c, k], [l, x]], [
                                    /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
                                    ], [w, [l, f]], [
                                    /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                                    ], [w, [l, h]], [
                                    /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[
                                    l, h]], [
                                    /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                                    ], [[l, f]], [/(android[-\w\. ]{0,9});.+buil/i], [w,
                                    [c, "Generic"]]],
                            engine: [[/windows.+ edge\/([\w\.]+)/i], [u, [d, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [u, [d,
                                    "Blink"]], [/(presto)\/([\w\.]+)/i,
                                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                                    /ekioh(flow)\/([\w\.]+)/i,
                                    /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                                    /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d,
                                    u], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [u, d]],
                            os: [[/microsoft (windows) (vista|xp)/i], [d, u], [
                                    /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
                                    ], [d, [u, H, Z]], [/windows nt 6\.2; (arm)/i,
                                    /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                                    /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[u, H, Z],
                                    [d, "Windows"]], [
                                    /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                                    /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                                    /cfnetwork\/.+darwin/i], [[u, /_/g, "."], [d, "iOS"]],
                                [/(mac os x) ?([\w\. ]*)/i,
                                    /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, D],
                                    [u, /_/g, "."]], [
                                    /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [u, d], [
                                    /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                                    /(blackberry)\w*\/([\w\.]*)/i,
                                    /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [d, u], [/\(bb(10);/i], [u, [d, S]], [
                                    /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                                    ], [u, [d, "Symbian"]], [
                                    /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                                    ], [u, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i,
                                    /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [u, [d,
                                    "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [u, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [u, [d,
                                    "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [[d, R], u], [/panasonic;(viera)/i, /(netrange)mmh/i,
                                    /(nettv)\/(\d+\.[\w\.]+)/i,
                                    /(nintendo|playstation) ([wids345portablevuch]+)/i,
                                    /(xbox); +xbox ([^\);]+)/i,
                                    /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                                    /(mint)[\/\(\) ]?(\w*)/i,
                                    /(mageia|vectorlinux)[; ]/i,
                                    /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                    /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i,
                                    /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                                    /(haiku) (\w+)/i], [d, u], [/(sunos) ?([\w\.\d]*)/i],
                                [[d, "Solaris"], u], [
                                    /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                                    /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                                    /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                                    /(unix) ?([\w\.]*)/i], [d, u]]
                        },
                        X = function e(a, b) {
                            if (typeof a === t && (b = a, a = o), !(this instanceof e))
                                return new e(a, b).getResult();
                            var w = typeof i !== n && i.navigator ? i.navigator : o,
                                d = a || (w && w.userAgent ? w.userAgent : ""),
                                l = w && w.userAgentData ? w.userAgentData : o,
                                c = b ? function (i, e) {
                                    var o = {};
                                    for (var a in i) e[a] && e[a].length % 2 == 0 ? o[a] =
                                        e[a].concat(i[a]) : o[a] = i[a];
                                    return o
                                }(W, b) : W,
                                u = w && w.userAgent == d;
                            return this.getBrowser = function () {
                                var i, e = {};
                                return e.name = o, e.version = o, L.call(e, d, c.browser),
                                    e.major = typeof (i = e.version) === s ? i.replace(
                                        /[^\d\.]/g, "").split(".")[0] : o, u && w && w.brave &&
                                    typeof w.brave.isBrave == r && (e.name = "Brave"),
                                    e
                            }, this.getCPU = function () {
                                var i = {};
                                return i.architecture = o, L.call(i, d, c.cpu), i
                            }, this.getDevice = function () {
                                var i = {};
                                return i.vendor = o, i.model = o, i.type = o, L.call(i,
                                        d, c.device), u && !i.type && l && l.mobile &&
                                    (i.type = f), u && "Macintosh" == i.model && w &&
                                    typeof w.standalone !== n && w.maxTouchPoints && w.maxTouchPoints >
                                    2 && (i.model = "iPad", i.type = h), i
                            }, this.getEngine = function () {
                                var i = {};
                                return i.name = o, i.version = o, L.call(i, d, c.engine),
                                    i
                            }, this.getOS = function () {
                                var i = {};
                                return i.name = o, i.version = o, L.call(i, d, c.os), u &&
                                    !i.name && l && l.platform && "Unknown" != l.platform &&
                                    (i.name = l.platform.replace(/chrome os/i, R).replace(
                                        /macos/i, D)), i
                            }, this.getResult = function () {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function () {
                                return d
                            }, this.setUA = function (i) {
                                return d = typeof i === s && i.length > 500 ? G(i, 500) :
                                    i, this
                            }, this.setUA(d), this
                        };
                    X.VERSION = "1.0.38", X.BROWSER = V([d, u, b]), X.CPU = V([m]), X.DEVICE =
                        V([w, c, l, p, f, v, h, g, x]), X.ENGINE = X.OS = V([d, u]), typeof e !==
                        n ? (typeof a !== n && a.exports && (e = a.exports = X), e.UAParser =
                            X) : typeof define === r && define.amd ? define((function () {
                            return X
                        })) : typeof i !== n && (i.UAParser = X);
                    var $ = typeof i !== n && (i.jQuery || i.Zepto);
                    if ($ && !$.ua) {
                        var K = new X;
                        $.ua = K.getResult(), $.ua.get = function () {
                            return K.getUA()
                        }, $.ua.set = function (i) {
                            K.setUA(i);
                            var e = K.getResult();
                            for (var o in e) $.ua[o] = e[o]
                        }
                    }
                }("object" == typeof window ? window : this), i("default", a.exports), a.exports
                    .UAParser
            }), {})
        }
    }
}));

System.register("chunks:///_virtual/ua-parser.min.mjs_cjs=&original=.js", ["./ua-parser.min.js", "./cjs-loader.mjs"], (
    function (e, r) {
        var a, t;
        return {
            setters: [function (r) {
                a = r.__cjsMetaURL;
                var t = {};
                t.__cjsMetaURL = r.__cjsMetaURL, t.default = r.default, e(t)
            }, function (e) {
                t = e.default
            }],
            execute: function () {
                a || t.throwInvalidWrapper("./ua-parser.min.js", r.meta.url), t.require(a)
            }
        }
    }));

System.register("chunks:///_virtual/uiManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./resourceUtil.ts",
    "./poolManager.ts", "./tips.ts"], (function (i) {
    var o, n, e, t, s, a, r, l, p, u;
    return {
        setters: [function (i) {
            o = i.createClass
        }, function (i) {
            n = i.cclegacy, e = i._decorator, t = i.isValid, s = i.UIOpacity, a = i.Vec3, r = i.find
        }, function (i) {
            l = i.resourceUtil
        }, function (i) {
            p = i.poolManager
        }, function (i) {
            u = i.tips
        }],
        execute: function () {
            var h, c;
            n._RF.push({}, "628d4yRjkdHIrVxJGiJj/XL", "uiManager", void 0);
            var f = e.ccclass,
                d = (e.property, i("UIAnimType", function (i) {
                    return i[i.FADE = 0] = "FADE", i[i.SCALE = 1] = "SCALE", i[i.MOVE_UP = 2] =
                        "MOVE_UP", i[i.MOVE_DOWN = 3] = "MOVE_DOWN", i[i.MOVE_LEFT = 4] =
                        "MOVE_LEFT", i[i.MOVE_RIGHT = 5] = "MOVE_RIGHT", i[i.SLIDE_LEFT = 6] =
                        "SLIDE_LEFT", i[i.SLIDE_RIGHT = 7] = "SLIDE_RIGHT", i[i.NONE = 8] =
                        "NONE", i
                }({})));
            i("uiManager", f("uiManager")(((c = function () {
                function i() {
                    this.dictSharedPanel = {}, this.dictLoading = {}, this.arrPopupDialog = [],
                        this.showTipsTime = 0, this.defaultAnimConfig = {
                            type: d.FADE,
                            duration: .3,
                            delay: 0
                        }
                }
                var n = i.prototype;
                return n.playShowAnim = function (i, o, n) {
                    var e, r;
                    if (i && t(i)) {
                        var l = o || this.defaultAnimConfig,
                            p = null != (e = l.duration) ? e : .3,
                            u = null != (r = l.delay) ? r : 0,
                            h = i.getComponent(s);
                        h || (h = i.addComponent(s)), h.opacity = 0, l.type ===
                            d.SCALE && i.setScale(new a(.5, .5, 1));
                        var c = [];
                        switch (u > 0 && c.push(this.wait(u)), l.type) {
                            case d.FADE:
                                c.push(this.fadeTo(i, p, 255));
                                break;
                            case d.SCALE:
                                c.push(this.scaleTo(i, p, 1, 1)), c.push(this.fadeTo(
                                    i, p, 255));
                                break;
                            case d.MOVE_UP:
                                var f = i.position.y;
                                i.position.set(i.position.x, i.position.y - 100,
                                    i.position.z), c.push(this.moveTo(i, p,
                                    i.position.x, f)), c.push(this.fadeTo(i,
                                    p, 255));
                                break;
                            case d.MOVE_DOWN:
                                var g = i.position.y;
                                i.position.set(i.position.x, i.position.y + 100,
                                    i.position.z), c.push(this.moveTo(i, p,
                                    i.position.x, g)), c.push(this.fadeTo(i,
                                    p, 255));
                                break;
                            case d.MOVE_LEFT:
                                var m = i.position.x;
                                i.position.set(i.position.x + 500, i.position.y,
                                    i.position.z), c.push(this.moveTo(i, p,
                                    m, i.position.y)), c.push(this.fadeTo(i,
                                    p, 255));
                                break;
                            case d.MOVE_RIGHT:
                                var v = i.position.x;
                                i.position.set(i.position.x - 500, i.position.y,
                                    i.position.z), c.push(this.moveTo(i, p,
                                    v, i.position.y)), c.push(this.fadeTo(i,
                                    p, 255));
                                break;
                            case d.NONE:
                            default:
                                h.opacity = 255
                        }
                        c.length > 0 ? Promise.all(c).then((function () {
                            return null == n ? void 0 : n()
                        })).catch((function (i) {
                            console.error(
                                    "UI show animation error:", i),
                                null == n || n()
                        })) : null == n || n()
                    } else null == n || n()
                }, n.playHideAnim = function (i, o, n) {
                    var e;
                    if (i && t(i)) {
                        var s = o || this.defaultAnimConfig,
                            a = null != (e = s.duration) ? e : .3,
                            r = [];
                        switch (s.type) {
                            case d.FADE:
                                r.push(this.fadeTo(i, a, 0));
                                break;
                            case d.SCALE:
                                r.push(this.scaleTo(i, a, .5, .5)), r.push(this
                                    .fadeTo(i, a, 0));
                                break;
                            case d.MOVE_UP:
                                r.push(this.moveTo(i, a, i.position.x, i.position
                                    .y + 100)), r.push(this.fadeTo(i, a, 0));
                                break;
                            case d.MOVE_DOWN:
                                r.push(this.moveTo(i, a, i.position.x, i.position
                                    .y - 100)), r.push(this.fadeTo(i, a, 0));
                                break;
                            case d.MOVE_LEFT:
                            case d.SLIDE_RIGHT:
                                r.push(this.moveTo(i, a, i.position.x + 500, i.position
                                    .y)), r.push(this.fadeTo(i, a, 0));
                                break;
                            case d.MOVE_RIGHT:
                            case d.SLIDE_LEFT:
                                r.push(this.moveTo(i, a, i.position.x - 500, i.position
                                    .y)), r.push(this.fadeTo(i, a, 0));
                                break;
                            case d.NONE:
                        }
                        r.length > 0 ? Promise.all(r).then((function () {
                            return null == n ? void 0 : n()
                        })).catch((function (i) {
                            console.error(
                                    "UI hide animation error:", i),
                                null == n || n()
                        })) : null == n || n()
                    } else null == n || n()
                }, n.wait = function (i) {
                    return new Promise((function (o) {
                        setTimeout(o, 1e3 * i)
                    }))
                }, n.fadeTo = function (i, o, n) {
                    return new Promise((function (e) {
                        if (t(i)) {
                            var a = i.getComponent(s);
                            a || (a = i.addComponent(s));
                            var r = a.opacity,
                                l = n - r,
                                p = Date.now();
                            o <= 0 ? (a.opacity = n, e()) :
                                function n() {
                                    if (t(i) && t(a)) {
                                        var s = (Date.now() - p) /
                                            1e3,
                                            u = Math.min(s / o, 1);
                                        a.opacity = r + l * u, u <
                                            1 ?
                                            requestAnimationFrame(n) :
                                            e()
                                    } else e()
                                }()
                        } else e()
                    }))
                }, n.scaleTo = function (i, o, n, e) {
                    return new Promise((function (s) {
                        if (t(i)) {
                            var r = i.scale.x,
                                l = i.scale.y,
                                p = n - r,
                                u = e - l,
                                h = Date.now();
                            o <= 0 ? (i.setScale(new a(n, e, i.scale
                                .z)), s()) : function n() {
                                if (t(i)) {
                                    var e = (Date.now() - h) /
                                        1e3,
                                        c = Math.min(e / o, 1);
                                    i.setScale(new a(r + p * c,
                                            l + u * c, i.scale
                                            .z)), c < 1 ?
                                        requestAnimationFrame(n) :
                                        s()
                                } else s()
                            }()
                        } else s()
                    }))
                }, n.moveTo = function (i, o, n, e) {
                    return new Promise((function (s) {
                        if (t(i)) {
                            var r = i.position.x,
                                l = i.position.y,
                                p = n - r,
                                u = e - l,
                                h = Date.now();
                            o <= 0 ? (i.position = new a(n, e, i.position
                                .z), s()) : function n() {
                                if (t(i)) {
                                    var e = (Date.now() - h) /
                                        1e3,
                                        c = Math.min(e / o, 1);
                                    i.position = new a(r + p *
                                            c, l + u * c, i.position
                                            .z), c < 1 ?
                                        requestAnimationFrame(n) :
                                        s()
                                } else s()
                            }()
                        } else s()
                    }))
                }, n.switchPage = function (i, o, n, e, t) {
                    var s = this;
                    if (void 0 === n && (n = "left"), !i || !o) return console.error(
                        "Invalid parameters for switchPage"), void(null ==
                        t || t());
                    var a = i.position.clone(),
                        r = {
                            type: "left" === n ? d.SLIDE_LEFT : d.SLIDE_RIGHT,
                            duration: .3
                        },
                        l = {
                            type: "left" === n ? d.MOVE_LEFT : d.MOVE_RIGHT,
                            duration: .3
                        };
                    this.playHideAnim(i, r, (function () {
                        i.active = !1, i.position = a, s.showDialog(
                            o, e, (function (i) {
                                if (i && i.node) {
                                    var n = i.node.getComponent(
                                        o.slice(o.lastIndexOf(
                                                "/") +
                                            1));
                                    if (n) {
                                        var e = n.animConfig;
                                        n.animConfig = l,
                                            setTimeout((
                                                function () {
                                                    n.animConfig =
                                                        e
                                                }), 500)
                                    }
                                    null == t || t(i)
                                } else null == t || t()
                            }))
                    }))
                }, n.slideToPage = function (i, o, n, e) {
                    this.switchPage(i, o, "left", n, e)
                }, n.slideBack = function (i, o, n, e) {
                    this.switchPage(i, o, "right", n, e)
                }, n.showDialog = function (i, o, n) {
                    var e = this;
                    if (this.dictLoading[i]) console.log("UI " + i +
                        " is loading...");
                    else {
                        var s = i.lastIndexOf("/"),
                            a = i.slice(s + 1);
                        if (o || (o = []), this.dictSharedPanel.hasOwnProperty(
                                i)) {
                            var p = this.dictSharedPanel[i];
                            if (t(p)) {
                                var u = r("Canvas");
                                if (!u) return console.error(
                                    "Canvas not found!"), void(null ==
                                    n || n());
                                p.parent = u, p.active = !0;
                                var h = p.getComponent(a);
                                h && h.show && h.show.apply(h, o);
                                var c = (null == h ? void 0 : h.animConfig) ||
                                    this.defaultAnimConfig;
                                return void this.playShowAnim(p, c, (function () {
                                    null == n || n(h)
                                }))
                            }
                        }
                        this.dictLoading[i] = !0, l.createUI(i, (function (t, s) {
                            var r = !1;
                            if (e.dictLoading[i] || (r = !0), e.dictLoading[
                                    i] = !1, t) return console.error(
                                "Failed to load UI: " + i,
                                t), void(null == n || n());
                            if (!s) return console.error(
                                    "UI node is null: " + i),
                                void(null == n || n());
                            e.dictSharedPanel[i] = s;
                            var l = s.getComponent(a);
                            if (l && l.show) try {
                                l.show.apply(l, o)
                            } catch (i) {
                                console.error(
                                    "Error when calling show() on " +
                                    a + ":", i)
                            }
                            var p = (null == l ? void 0 : l.animConfig) ||
                                e.defaultAnimConfig;
                            e.playShowAnim(s, p, (function () {
                                null == n || n(l)
                            })), r && e.hideDialog(i)
                        }))
                    }
                }, n.hideDialog = function (i, o) {
                    if (this.dictSharedPanel.hasOwnProperty(i)) {
                        var n = this.dictSharedPanel[i];
                        if (n && t(n)) {
                            var e = i.slice(i.lastIndexOf("/") + 1),
                                s = n.getComponent(e);
                            if (s && s.hide) try {
                                s.hide()
                            } catch (i) {
                                console.error(
                                    "Error when calling hide() on " + e +
                                    ":", i)
                            }
                            var a = (null == s ? void 0 : s.animConfig) || this
                                .defaultAnimConfig;
                            this.playHideAnim(n, a, (function () {
                                n.parent = null, null == o || o()
                            }))
                        } else null == o || o()
                    } else null == o || o();
                    this.dictLoading[i] = !1
                }, n.pushToPopupSeq = function (i, o, n) {
                    if (i) {
                        var e = {
                            panelPath: i,
                            scriptName: o,
                            param: n,
                            isShow: !1
                        };
                        this.arrPopupDialog.push(e), this.checkPopupSeq()
                    } else console.error(
                        "Panel path cannot be empty when pushing to popup sequence"
                    )
                }, n.insertToPopupSeq = function (i, o, n) {
                    if (o)
                        if (i < 0 || i > this.arrPopupDialog.length) console.error(
                            "Invalid index " + i +
                            " for popup sequence of length " + this.arrPopupDialog
                            .length);
                        else {
                            var e = {
                                panelPath: o,
                                param: n,
                                isShow: !1
                            };
                            this.arrPopupDialog.splice(i, 0, e)
                        }
                    else console.error(
                        "Panel path cannot be empty when inserting to popup sequence"
                    )
                }, n.shiftFromPopupSeq = function (i) {
                    var o = this;
                    if (i && 0 !== this.arrPopupDialog.length)
                        if (this.arrPopupDialog[0] && this.arrPopupDialog[0].panelPath ===
                            i) this.hideDialog(i, (function () {
                            o.arrPopupDialog.shift(), o.checkPopupSeq()
                        }));
                        else {
                            var n = this.arrPopupDialog.findIndex((function (o) {
                                return o.panelPath === i
                            })); - 1 !== n && this.arrPopupDialog.splice(n, 1)
                        }
                }, n.checkPopupSeq = function () {
                    if (this.arrPopupDialog.length > 0) {
                        var i = this.arrPopupDialog[0];
                        if (!i.isShow) try {
                            this.showDialog(i.panelPath, i.param), this.arrPopupDialog[
                                0].isShow = !0
                        } catch (i) {
                            console.error(
                                    "Error showing dialog from queue:", i),
                                this.arrPopupDialog.shift(), this.checkPopupSeq()
                        }
                    }
                }, n.showTips = function (i, o) {
                    var n = this;
                    if (i) {
                        var e = Date.now();
                        if (e - this.showTipsTime < 800) {
                            var t = 800 - (e - this.showTipsTime);
                            setTimeout((function () {
                                n._showTipsAni(i, o)
                            }), t), this.showTipsTime = e + t
                        } else this._showTipsAni(i, o), this.showTipsTime = e
                    } else null == o || o()
                }, n._showTipsAni = function (i, o) {
                    l.getUIPrefabRes("common/tips", (function (n, e) {
                        if (n) return console.error(
                            "Failed to load tips prefab:",
                            n), void(null == o || o());
                        var t = r("Canvas");
                        if (!t) return console.error(
                            "Canvas not found!"), void(null ==
                            o || o());
                        try {
                            var s = p.instance.getNode(e, t).getComponent(
                                u);
                            s ? s.show(i, o) : (console.error(
                                "Tips component not found on tips node"
                            ), null == o || o())
                        } catch (i) {
                            console.error("Error showing tips:", i),
                                null == o || o()
                        }
                    }))
                }, n.showCommonDialog = function (i, o, n, e, t) {
                    i || console.warn("Common dialog content is empty"), this.showDialog(
                        "common/CommonDlg", [i, o, n, e, t])
                }, o(i, null, [{
                    key: "instance",
                    get: function () {
                        return this._instance || (this._instance =
                            new i), this._instance
                    }
                }]), i
            }())._instance = null, h = c)) || h);
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/updateValueLabel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var i, a, e, n, s;
    return {
        setters: [function (t) {
            i = t.inheritsLoose
        }, function (t) {
            a = t.cclegacy, e = t._decorator, n = t.Label, s = t.Component
        }],
        execute: function () {
            var r;
            a._RF.push({}, "4b7cfRS5bdP8qo8rorNgln5", "updateValueLabel", void 0);
            var l = e.ccclass,
                h = (e.property, e.requireComponent);
            t("updateValueLabel", l("updateValueLabel")(r = h(n)(r = function (t) {
                function a() {
                    for (var i, a = arguments.length, e = new Array(a), n = 0; n < a; n++)
                        e[n] = arguments[n];
                    return (i = t.call.apply(t, [this].concat(e)) || this).isPlaying = !
                        1, i.startVal = 0, i.endVal = 0, i.diffVal = 0, i.currTime = 0,
                        i.changingTime = 0, i.label = null, i
                }
                i(a, t);
                var e = a.prototype;
                return e.start = function () {}, e.playUpdateValue = function (t, i, a) {
                    this.startVal = t, this.endVal = i, this.diffVal = this.endVal -
                        this.startVal, this.currTime = 0, this.changingTime = a,
                        this.label = this.node.getComponent(n), this.label.string =
                        t.toString(), this.isPlaying = !0
                }, e.update = function (t) {
                    if (this.isPlaying) {
                        if (this.currTime < this.changingTime) {
                            this.currTime += t;
                            var i = this.startVal + parseInt((this.currTime / this.changingTime *
                                this.diffVal).toString());
                            return i < this.startVal ? i = this.startVal : i > this
                                .endVal && (i = this.endVal), void(this.label.string =
                                    "" + i)
                        }
                        this.label.string = "" + this.endVal, this.isPlaying = !1
                    }
                }, a
            }(s)) || r) || r);
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UrlManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (t) {
    var n, r;
    return {
        setters: [function (t) {
            n = t.createClass
        }, function (t) {
            r = t.cclegacy
        }],
        execute: function () {
            r._RF.push({}, "18ccfSj+f9N6bU86J0WkPUC", "UrlManager", void 0), t("UrlManager", function () {
                function t() {
                    this.window = void 0, this.urlData = null
                }
                var r = t.prototype;
                return r.geturlAlldata = function () {
                    return this.window.location.href
                }, r.getUrlProtocol = function () {
                    return this.window.location.protocol
                }, r.getUrlParams = function (t) {
                    void 0 === t && (t = null);
                    var n = {},
                        r = this.window.location.search;
                    if (1 == r.indexOf("?")) return !1;
                    var e, i = r ? r.split("?")[1] : r.slice(1);
                    r = i.split("&"), t = t || "";
                    for (var o = 0; o < r.length; o++) {
                        var a = r[o].split("=");
                        n[a[0]] = decodeURI(a[1])
                    }
                    return t ? n[t] && (e = n[t]) : e = n, this.urlData || (this.urlData =
                        n), e
                }, n(t, null, [{
                    key: "instance",
                    get: function () {
                        return t._instance || (t._instance = new t)
                    }
                }]), t
            }())._instance = void 0, r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UserManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./constant.ts",
    "./gameEnum.ts", "./apiClient.ts", "./Log.ts"], (function (e) {
    var n, t, i, s, o, a;
    return {
        setters: [function (e) {
            n = e.createClass
        }, function (e) {
            t = e.cclegacy
        }, function (e) {
            i = e.constant
        }, function (e) {
            s = e.LoginEnum
        }, function (e) {
            o = e.ApiClient
        }, function (e) {
            a = e.default
        }],
        execute: function () {
            t._RF.push({}, "f9029UInDRFt64lqn19++Lz", "UserManager", void 0);
            var c = e("User", (function () {
                this.level = 1, this.life = 1e3, this.nickname = "中二病少年", this.account =
                    "中二病少年", this.token = "", this.accessToken = "", this.shareNum = 0,
                    this.totalShareNum = 3, this.loginType = s.default
            }));
            e("UserManager", function () {
                function e() {
                    this._user = null, this._localUserInfo = null, this.getUserInfoSuc = !1,
                        this._user = new c, this.loadLocalInfo()
                }
                var t = e.prototype;
                return t.init = function (e) {
                    a.log("获取url参数", e)
                }, t.setUserInfo = function (e, n) {
                    for (var t in e) this._user[t] = e[t];
                    n && n()
                }, t.loadLocalInfo = function () {
                    if (i.isOffline) {
                        var e = localStorage.getItem(i.SBP_USER_INFO);
                        if (null != e && "" != e.trim()) try {
                            var n = JSON.parse(e);
                            this._localUserInfo = n.user
                        } catch (e) {
                            a.log(e)
                        }
                    }
                }, t.saveLocalInfo = function () {
                    if (i.isOffline) {
                        var e = {
                            user: this._localUserInfo
                        };
                        localStorage.setItem(i.SBP_USER_INFO, JSON.stringify(e))
                    }
                }, t.clearLocalInfo = function () {
                    localStorage.removeItem(i.SBP_USER_INFO)
                }, t.clearUserInfo = function () {
                    this._user = new c
                }, t.getUserInfo = function (n) {
                    var t = this;
                    if (i.isOffline) {
                        if (console.log("离线模式获取玩家信息"), this.getUserInfoSuc = !0, null ==
                            this._localUserInfo) {
                            for (var s in this._localUserInfo = {
                                    account: "15858239848",
                                    life: 1e3,
                                    nickname: "中二病少年",
                                    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtd3guc2FuZ3Vvc2hhLmNuIiwiYXVkIjoibXd4LnNhbmd1b3NoYS5jbSIsImp0aSI6IjV0Nnk5NDAwNDUzIiwiaWF0IjoxNzIxOTc1NzI5LjY2MDA2MywiZXhwIjoxNzI5MTc1NzI5LjY2MDA2MywidXNlciI6eyJpZCI6MiwiZm9ydW1Vc2VySWQiOjEsImFjY291bnQiOiIxNTg1ODIzOTg0OCIsIm5pY2tuYW1lIjoiRmlvbkNoZXVuZyIsImRldmljZUlkIjoiOGVjOWE3NzNiNTMzY2ViNmQ5ZjYzMDE4MTQxNzBmNmMiLCJsaWZlIjozLCJpcCI6IjEyNy4wLjAuMSIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTE1IDE1OjMwOjE1In19.kRrNNcrOE7ZMi2FvNzJQKbXjloXdngw-NE03tvC5brI"
                                }, this._localUserInfo) this._user[s] = this._localUserInfo[
                                s];
                            return void(n && n())
                        }
                    } else console.log("在线模式获取玩家信息"), o.getUserInfo().then((function (i) {
                        var s, o;
                        console.log(i), t._user.level = i.cur_level || 1, t._user
                            .life = i.chance, t._user.nickname = i.nickname ||
                            "中二病少年", t._user.account = i.nickname || "中二病少年", t
                            ._user.shareNum = (null == (s = i.share_chance) ?
                                void 0 : s.num) || 0, t._user.totalShareNum = (
                                null == (o = i.share_chance) ? void 0 : o.totalNum
                            ) || 0, t.getUserInfoSuc = !0, a.log("获取用户信息成功", e.instance
                                .user), n && n()
                    })).catch((function (e) {
                        t.getUserInfoSuc = !1, a.log(e)
                    }))
                }, t.shareGame = function () {
                    var e = this;
                    return new Promise((function (n, t) {
                        o.getTaskReward({
                            key: "share_daily",
                            action: 0
                        }).then((function (t) {
                            console.log("分享成功", t), e.user.shareNum =
                                e.user.shareNum + 1 > 3 ? 3 : e.user
                                .shareNum + 1, e.sendLogData(
                                    "sgs_zbt_btn_share"), n()
                        })).catch((function (e) {
                            a.log(e), t(e)
                        }))
                    }))
                }, t.shareGameMain = function () {
                    var e = window.location.href.replace(/([?&])(code|state)=[^&]*/g, "$1")
                        .replace(/\?$/, ""),
                        n = "我在《三国杀OL》眼力大考验里闯到" + this._user.level + "关啦！你也来试试吧！" + e;
                    return this.sendLogData("sgs_zbt_btn_share"), new Promise((function (e,
                        t) {
                        try {
                            var i = document.createElement("textarea");
                            i.value = n, i.style.position = "fixed", i.style.left =
                                "-9999px", document.body.appendChild(i), i.select(),
                                document.execCommand("copy"), document.body.removeChild(
                                    i), e()
                        } catch (e) {
                            console.log("复制失败", e), t(e)
                        }
                    }))
                }, t.sendLogDataWithNum = function () {
                    this.sendLogData("sgs_zbt_log_num")
                }, t.sendLogData = function (e, n) {
                    __sgsYT.sendData(e, n)
                }, n(e, [{
                    key: "user",
                    get: function () {
                        return this._user
                    }
                }], [{
                    key: "instance",
                    get: function () {
                        return this._instance || (this._instance = new e), this
                            ._instance
                    }
                }]), e
            }())._instance = void 0, t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/util.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (r) {
    var t, e, n;
    return {
        setters: [function (r) {
            t = r.createForOfIteratorHelperLoose
        }, function (r) {
            e = r.cclegacy, n = r._decorator
        }],
        execute: function () {
            var o;
            r({
                getAllUrlParams: function () {
                    for (var r, e = {}, n = window.location.search.substring(1).split("&"),
                            o = t(n); !(r = o()).done;) {
                        var a = r.value;
                        if ("" !== a) {
                            var i = a.split("="),
                                u = i[0],
                                c = i[1],
                                f = void 0 === c ? "" : c;
                            e[decodeURIComponent(u)] = decodeURIComponent(f)
                        }
                    }
                    return e
                },
                getUrlParam: function (r) {
                    var t = window.location.href;
                    r = r.replace(/[\[\]]/g, "\\$&");
                    var e = new RegExp("[?&]" + r + "(=([^&#]*)|&|#|$)").exec(t);
                    return e ? e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : "" :
                        null
                },
                isWeiXin: function () {
                    return -1 !== navigator.userAgent.toLowerCase().indexOf(
                        "micromessenger")
                }
            }), e._RF.push({}, "9d3bbQThktMmru66gcrIrFY", "util", void 0);
            var a = n.ccclass;
            n.property, r("util", a("util")(o = function () {
                function r() {}
                return r.clone = function (r) {
                    if (null === r || "object" != typeof r) return r;
                    var t = {};
                    for (var e in r.constructor === Array && (t = []), r) r.hasOwnProperty(
                        e) && (t[e] = this.clone(r[e]));
                    return t
                }, r.objectToArray = function (r) {
                    var t = [];
                    for (var e in r) r.hasOwnProperty(e) && t.push(r[e]);
                    return t
                }, r.arrayToObject = function (r, t) {
                    var e = {};
                    for (var n in r) r.hasOwnProperty(n) && r[n][t] && (e[r[n][t]] = r[
                        n]);
                    return e
                }, r.getWeightRandIndex = function (r, t) {
                    for (var e = Math.floor(Math.random() * t), n = 0, o = 0; o < r.length &&
                        !(e < (n += r[o])); o++);
                    return o
                }, r.getRandomNFromM = function (r, t) {
                    for (var e = [], n = 0, o = 0; o < t && !(o >= r + 1);) {
                        n = this.getRandomInt(0, r);
                        for (var a = 0, i = 0; i < o; i++)
                            if (e[i] === n) {
                                a = 1;
                                break
                            } 0 === a && (e[o] = n, o++)
                    }
                    return e
                }, r.getRandomInt = function (r, t) {
                    var e = Math.random() * (t - r + 1) + r;
                    return Math.floor(e)
                }, r.getStringLength = function (r) {
                    for (var t = r, e = 0, n = 0, o = t.length; n < o; n++) {
                        e += t.charCodeAt(n) <= 255 ? 1 : 2
                    }
                    return Math.ceil(e / 2)
                }, r.isEmptyObject = function (r) {
                    var t = !0;
                    if (r && r.constructor === Object) {
                        for (var e in r)
                            if (r.hasOwnProperty(e)) {
                                t = !1;
                                break
                            }
                    } else t = !1;
                    return t
                }, r.formatNum = function (r) {
                    if (r <= 0) return "0";
                    var t = Math.round(Math.log(r) / Math.log(1e3));
                    return parseInt((r / Math.pow(1e3, t - 1 < 0 ? 0 : t - 1)).toString(),
                        10) + ["", "", "K", "M", "B"][t]
                }, r.isNewDay = function (r) {
                    var t = new Date(r),
                        e = new Date,
                        n = t.getFullYear(),
                        o = t.getMonth(),
                        a = t.getDate(),
                        i = e.getFullYear(),
                        u = e.getMonth(),
                        c = e.getDate();
                    return i > n || (u > o || c > a)
                }, r.getPropertyCount = function (r) {
                    var t, e = 0;
                    for (t in r) r.hasOwnProperty(t) && e++;
                    return e
                }, r.difference = function (r, t) {
                    var e = [];
                    if (r.constructor !== Array || t.constructor !== Array) return e;
                    for (var n = r.length, o = 0; o < n; o++) - 1 === t.indexOf(r[o]) &&
                        e.push(r[o]);
                    return e
                }, r.simulationUUID = function () {
                    function r() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(
                            1)
                    }
                    return r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() +
                        r() + r()
                }, r.trim = function (r) {
                    return r.replace(/(^\s*)|(\s*$)/g, "")
                }, r.isNowValid = function (r, t) {
                    var e = new Date(r),
                        n = new Date(t),
                        o = !1;
                    if (e.getDate() + "" != "NaN" && n.getDate() + "" != "NaN") {
                        var a = new Date;
                        o = a < n && a > e
                    }
                    return o
                }, r.getDeltaDays = function (r, t) {
                    var e = new Date(r),
                        n = new Date(t),
                        o = e.getFullYear(),
                        a = e.getMonth() + 1,
                        i = e.getDate(),
                        u = n.getFullYear(),
                        c = n.getMonth() + 1,
                        f = n.getDate();
                    r = new Date(o + "/" + a + "/" + i + " GMT+0800").getTime();
                    var g = (t = new Date(u + "/" + c + "/" + f + " GMT+0800").getTime()) -
                        r;
                    return Math.floor(g / 864e5)
                }, r.getMin = function (r) {
                    var t = 0;
                    if (r.constructor === Array)
                        for (var e = r.length, n = 0; n < e; n++) t = 0 === n ? Number(
                            r[0]) : t > Number(r[n]) ? Number(r[n]) : t;
                    return t
                }, r.formatTwoDigits = function (r) {
                    return (Array(2).join("0") + r).slice(-2)
                }, r.formatDate = function (r, t) {
                    var e = {
                        "M+": r.getMonth() + 1,
                        "d+": r.getDate(),
                        "h+": r.getHours(),
                        "m+": r.getMinutes(),
                        "s+": r.getSeconds(),
                        "q+": Math.floor((r.getMonth() + 3) / 3),
                        S: r.getMilliseconds()
                    };
                    for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (r.getFullYear() +
                            "").substr(4 - RegExp.$1.length))), e) new RegExp("(" + n +
                        ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ?
                        "" + e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
                    return t
                }, r.getDay = function () {
                    var r = new Date;
                    return r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate()
                }, r.formatMoney = function (r) {
                    for (var t = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "B", "N",
                            "D"], e = "", n = 0; n < t.length; n++) {
                        if (!(r >= 1e4)) {
                            e = Math.floor(r) + t[n];
                            break
                        }
                        r /= 1e3
                    }
                    return "" === e && (e = Math.floor(r) + "U"), e
                }, r.formatTimeForSecond = function (r) {
                    var t = "",
                        e = r % 60,
                        n = Math.floor(r / 60);
                    n = n < 0 ? 0 : n;
                    var o = Math.floor(n / 60),
                        a = n % 60;
                    return o > 0 && (t += o > 9 ? o.toString() : "0" + o, t += ":"), t +=
                        a > 9 ? a.toString() : "0" + a, t += ":", t += e > 9 ? e.toString() :
                        "0" + e
                }, r.formatTimeForMillisecond = function (r) {
                    var t = Math.floor(r / 1e3 % 60),
                        e = Math.floor(r / 1e3 / 60 % 60),
                        n = Math.floor(r / 1e3 / 60 / 60);
                    return (t < 10 ? "0" + t : t) + ":" + (e < 10 ? "0" + e : e) + ":" +
                        (n < 10 ? "0" + n : n)
                }, r.zip = function (r) {
                    var t = pako.gzip(encodeURIComponent(r), {
                        to: "string"
                    });
                    return this.base64encode(t)
                }, r.rand = function (r) {
                    for (var t = this.clone(r), e = t.length - 1; e >= 0; e--) {
                        var n = Math.floor(Math.random() * (e + 1)),
                            o = t[n];
                        t[n] = t[e], t[e] = o
                    }
                    return t
                }, r
            }()) || o), r("imgLoad", (function (r) {
                return new Promise((function (t, e) {
                    var n = new Image;
                    n.onerror = function (r) {
                        console.error("canvas image onload err:", r), e()
                    }, n.crossOrigin = "anonymous", n.onload = function () {
                        t(n)
                    }, n.src = r
                }))
            })), r("fittingString", (function (r, t, e) {
                var n = r.measureText(t).width,
                    o = r.measureText("…").width;
                if (n <= e || e <= o) return t;
                for (var a = t.length; n >= e - o && a-- > 0;) t = t.slice(0, a), n = r.measureText(
                    t).width;
                return t + "…"
            }));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/WordDifferenceGame.ts", ["./rollupPluginModLoBabelHelpers.js", "cc",
    "./EventHandler.ts", "./constant.ts", "./CreateMark.ts", "./audioManager.ts"], (function (t) {
    var e, r, i, o, n, a, l, s, h, c, d, f, g, u, p, C, T, b, y, v, w;
    return {
        setters: [function (t) {
            e = t.applyDecoratedDescriptor, r = t.initializerDefineProperty, i = t.inheritsLoose, o =
                t.assertThisInitialized, n = t.createForOfIteratorHelperLoose
        }, function (t) {
            a = t.cclegacy, l = t._decorator, s = t.CCInteger, h = t.Prefab, c = t.CCString, d = t.Node,
                f = t.instantiate, g = t.Label, u = t.tween, p = t.Vec3, C = t.Component, T = t.Color
        }, function (t) {
            b = t.EventHandler
        }, function (t) {
            y = t.constant
        }, function (t) {
            v = t.MarkManager
        }, function (t) {
            w = t.audioManager
        }],
        execute: function () {
            var E, N, k, _, I, m, D, L, G, H, O, z, R, A, P, U, M, S, x, F, V, B, K, W, j, Y, Q, q, J,
                X;
            a._RF.push({}, "459efvrQ0xMz7dE6NTVejf/", "WordDifferenceGame", void 0);
            var Z = l.ccclass,
                $ = l.property,
                tt = y.IS_AUTO_MARK,
                et = t("TargetPosition", (E = Z("TargetPosition"), N = $({
                    type: s,
                    tooltip: "目标文字的行号 (从0开始)"
                }), k = $({
                    type: s,
                    tooltip: "目标文字的列号 (从0开始)"
                }), E((m = e((I = function () {
                    r(this, "row", m, this), r(this, "col", D, this)
                }).prototype, "row", [N], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 0
                    }
                }), D = e(I.prototype, "col", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                        return 0
                    }
                }), _ = I)) || _));
            t("WordDifferenceGame", (L = Z("WordDifferenceGame"), G = $({
                type: h,
                tooltip: "文字单元格的预制体"
            }), H = $({
                type: s,
                tooltip: "网格行数"
            }), O = $({
                type: s,
                tooltip: "网格列数"
            }), z = $({
                type: [et],
                tooltip: "预设的目标文字位置数组 (行号和列号从0开始)"
            }), R = $({
                type: c,
                tooltip: "要找出的目标文字"
            }), A = $({
                type: c,
                tooltip: "填充的普通文字"
            }), P = $({
                tooltip: "目标文字的颜色"
            }), U = $({
                tooltip: "普通文字的颜色"
            }), M = $({
                tooltip: "找到目标后的颜色"
            }), S = $(d), L((V = e((F = function (t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), a =
                            0; a < i; a++) n[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(n)) || this, r(
                            e, "labelPrefab", V, o(e)), r(e, "rows", B, o(e)),
                        r(e, "cols", K, o(e)), r(e, "targetPositions", W, o(
                            e)), r(e, "targetChar", j, o(e)), r(e,
                            "fillerChar", Y, o(e)), r(e, "targetColor", Q,
                            o(e)), r(e, "fillerColor", q, o(e)), r(e,
                            "foundColor", J, o(e)), r(e, "container", X, o(
                            e)), e.gridNodes = [], e.currentTargets = [], e
                        .foundTargets = new Set, e.info = null, e
                }
                i(e, t);
                var a = e.prototype;
                return a.onLoad = function () {
                    b.on("TOGGLE_TARGET_VISIBILITY", this.refreshTargetVisibility,
                        this), v.initialize((function (t) {
                        t || console.error(
                            "MarkManager 初始化失败，标记功能可能不可用"
                        )
                    })), b.on("HIGHLIGHT_TARGET", this.highlightTarget,
                        this), b.on("HIGHLIGHT_FILLER", this.highlightTarget,
                        this)
                }, a.onDestroy = function () {
                    b.off("TOGGLE_TARGET_VISIBILITY", this.refreshTargetVisibility,
                        this), b.off("HIGHLIGHT_TARGET", this.highlightTarget,
                        this), b.off("HIGHLIGHT_FILLER", this.highlightTarget,
                        this), v.release()
                }, a.start = function () {
                    console.log("start")
                }, a.init = function (t) {
                    console.log("init data", t), this.info = t, this.container =
                        this.node.getChildByName("container"), this.generateGridByData(
                            t)
                }, a.generateGridByData = function(t) {
                    var e = t.content
                      , r = t.answers
                      , i = e.map((function(t) {
                        return t.split("")
                    }
                    ));
                    if (r && r.length > 0) {
                        var o = r.map((function(t) {
                            return {
                                row: t.position.x,
                                col: t.position.y
                            }
                        }
                        ));
                        this.targetPositions = o
                    }

                    this.rows = i.length
                    this.cols = i[0].length
                    this.container.removeAllChildren()
                    this.gridNodes = []
                    this.currentTargets = []
                    this.foundTargets.clear()

                    for (var a, l = new Set, s = n(this.targetPositions); !(a = s()).done; ) {
                        var h = a.value;
                        h.row < 0 || h.row >= this.rows || h.col < 0 || h.col >= this.cols ? console.error("配置的目标位置 (行: " + h.row + ", 列: " + h.col + ") 超出网格范围 (0-" + (this.rows - 1) + ", 0-" + (this.cols - 1) + ")! 将被忽略。") : l.add(h.row + "-" + h.col)
                    }

                    for (var c = 0; c < this.rows; c++) {
                        this.gridNodes[c] = []

                        for (var u = 0; u < this.cols; u++) {
                            var p = f(this.labelPrefab)
                                , C = p.getComponent(g)

                            if (C) {
                                const fillerString = i[0][0]
                                const isFiller = i[c][u] === fillerString
                                C.string = isFiller ? fillerString : 'X'

                                if(!isFiller){
                                    C.color = this.targetColor
                                }

                                this.gridNodes[c][u] = p
                                this.container.addChild(p)

                                if (r && 0 !== r.length) {
                                    var T = c + "-" + u;
                                    l.has(T) ? (C.color = tt ? this.targetColor : this.fillerColor,
                                        this.currentTargets.push(p),
                                        p.on(d.EventType.TOUCH_END, this.onTargetCharClicked, this)) : (C.color = this.fillerColor,
                                            p.on(d.EventType.TOUCH_END, this.onFillerCharClicked, this))
                                } else
                                    p.on(d.EventType.TOUCH_END, this.onCharClicked, this);
                            }else{
                                console.error("Prefab 中缺少 Label 组件! 位置: (行: " + c + ", 列: " + u + ")")
                                this.gridNodes[c][u] = p
                                this.container.addChild(p)
                            }
                        }
                    }
                }, a.generateGrid = function () {
                    this.container.removeAllChildren(), this.gridNodes = [],
                        this.currentTargets = [], this.foundTargets.clear();
                    var t = this.targetPositions.length;
                    console.log("生成 " + this.rows + "x" + this.cols +
                        " 网格, 预设目标数量: " + t);
                    for (var e, r = new Set, i = n(this.targetPositions); !
                        (e = i()).done;) {
                        var o = e.value;
                        o.row < 0 || o.row >= this.rows || o.col < 0 ||
                            o.col >= this.cols ? console.error(
                                "配置的目标位置 (行: " + o.row + ", 列: " + o.col +
                                ") 超出网格范围 (0-" + (this.rows - 1) +
                                ", 0-" + (this.cols - 1) + ")! 将被忽略。") :
                            r.add(o.row + "-" + o.col)
                    }
                    for (var a = 0; a < this.rows; a++) {
                        this.gridNodes[a] = [];
                        for (var l = 0; l < this.cols; l++) {
                            var s = f(this.labelPrefab),
                                h = s.getComponent(g);
                            if (h) {
                                var c = a + "-" + l;
                                r.has(c) ? (h.string = this.targetChar,
                                        h.color = tt ? this.targetColor :
                                        this.fillerColor, this.currentTargets
                                        .push(s), s.on(d.EventType.TOUCH_END,
                                            this.onTargetCharClicked,
                                            this)) : (h.string = this.fillerChar,
                                        h.color = this.fillerColor, s.on(
                                            d.EventType.TOUCH_END, this
                                            .onFillerCharClicked, this)
                                    ), this.gridNodes[a][l] = s, this.container
                                    .addChild(s)
                            } else console.error(
                                "Prefab 中缺少 Label 组件! 位置: (行: " + a +
                                ", 列: " + l + ")"), this.gridNodes[
                                a][l] = s, this.container.addChild(
                                s)
                        }
                    }
                    this.currentTargets.length !== t && console.warn(
                        "实际生成的目标数量 (" + this.currentTargets.length +
                        ") 与配置数量 (" + t + ") 不符，可能因为部分配置位置无效。")
                }, a.onTargetCharClicked = function (t) {
                    var e = t.currentTarget;
                    if (!e || this.foundTargets.has(e)) return console.warn(
                        "无效的点击事件或节点已被找到");
                    var r = this.handleCellClick(e, !0),
                        i = r.row,
                        o = r.col;
                    console.log("恭喜你，找到了位于 (行: " + i + ", 列: " + o +
                        ') 的 "' + this.targetChar + '"!'), b.dispatch(
                        "CLICKED_TARGET", {
                            x: i,
                            y: o,
                            clickedNode: e
                        });
                    var n = e.getComponent(g);
                    n && (n.color = this.foundColor), this.foundTargets
                        .add(e), e.off(d.EventType.TOUCH_END, this.onTargetCharClicked,
                            this), this.foundTargets.size === this.currentTargets
                        .length && this.currentTargets.length > 0 && (
                            console.log("太棒了! 你找到了所有的目标文字!"), b.dispatch(
                                "UPDATA_ALL"))
                }, a.onFillerCharClicked = function (t) {
                    var e = t.currentTarget;
                    if (e) {
                        var r = this.handleCellClick(e, !1),
                            i = r.row,
                            o = r.col;
                        console.log("你点击了位于 (行: " + i + ", 列: " + o +
                                ') 的普通字符 "' + this.fillerChar + '"'), e
                            .off(d.EventType.TOUCH_END, this.onFillerCharClicked,
                                this), b.dispatch("CLICKED_FILLER", {
                                x: i,
                                y: o,
                                clickedNode: e
                            })
                    }
                }, a.onCharClicked = function (t) {
                    var e = t.currentTarget;
                    if (!e) return {
                        row: -1,
                        col: -1
                    };
                    for (var r = -1, i = -1, o = 0; o < this.gridNodes.length; o++) {
                        var n = this.gridNodes[o].indexOf(e);
                        if (-1 !== n) {
                            r = o, i = n;
                            break
                        }
                    }
                    return b.dispatch("CLICKED_RESULT", {
                        x: r,
                        y: i,
                        clickedNode: e
                    }), {
                        row: r,
                        col: i
                    }
                }, a.handleCellClick = function (t, e) {
                    if (!t) return {
                        row: -1,
                        col: -1
                    };
                    for (var r = -1, i = -1, o = 0; o < this.gridNodes.length; o++) {
                        var n = this.gridNodes[o].indexOf(t);
                        if (-1 !== n) {
                            r = o, i = n;
                            break
                        }
                    }
                    return e ? (w.instance.playSound(y.AUDIO_SOUND.CORRECT),
                        v.addCorrectMark(t)) : (v.addErrorMark(t),
                        this.shakeNode(t), v.addErrorMark(t)), {
                        row: r,
                        col: i
                    }
                }, a.highlightTarget = function (t) {
                    var e = t.isTarget,
                        r = t.clickedNode;
                    e ? (w.instance.playSound(y.AUDIO_SOUND.CORRECT), v
                        .addCorrectMark(r)) : (w.instance.playSound(
                            y.AUDIO_SOUND.ERROR), this.shakeNode(r),
                        v.addErrorMark(r))
                }, a.shakeNode = function (t) {
                    console.log("添加抖动效果", t);
                    var e = t.position.clone();
                    u(t).to(.05, {
                        position: new p(e.x - 5, e.y, e.z)
                    }).to(.05, {
                        position: new p(e.x + 5, e.y, e.z)
                    }).to(.05, {
                        position: new p(e.x - 4, e.y, e.z)
                    }).to(.05, {
                        position: new p(e.x + 4, e.y, e.z)
                    }).to(.05, {
                        position: new p(e.x - 3, e.y, e.z)
                    }).to(.05, {
                        position: new p(e.x + 3, e.y, e.z)
                    }).to(.05, {
                        position: e.clone()
                    }).start()
                }, a.updateTargetVisibility = function (t) {
                    for (var e, r = n(this.currentTargets); !(e = r()).done;) {
                        var i = e.value;
                        if (!this.foundTargets.has(i)) {
                            var o = i.getComponent(g);
                            o && (o.color = t ? this.targetColor : this
                                .fillerColor)
                        }
                    }
                    console.log("目标文字可见性已" + (t ? "显示" : "隐藏"))
                }, a.refreshTargetVisibility = function (t) {
                    console.log("刷新目标文字可见性: IS_AUTO_MARK=" + t), this.updateTargetVisibility(
                        t)
                }, a.regenerate = function () {
                    for (var t = 0; t < this.gridNodes.length; t++)
                        for (var e = 0; e < this.gridNodes[t].length; e++) {
                            var r = this.gridNodes[t][e];
                            r && r.isValid && (r.off(d.EventType.TOUCH_END),
                                r.removeAllChildren())
                        }
                    this.generateGrid()
                }, e
            }(C)).prototype, "labelPrefab", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), B = e(F.prototype, "rows", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return 13
                }
            }), K = e(F.prototype, "cols", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return 13
                }
            }), W = e(F.prototype, "targetPositions", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return []
                }
            }), j = e(F.prototype, "targetChar", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return "赵"
                }
            }), Y = e(F.prototype, "fillerChar", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return "字"
                }
            }), Q = e(F.prototype, "targetColor", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return new T(31, 169, 68, 255)
                }
            }), q = e(F.prototype, "fillerColor", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return new T(115, 52, 0, 255)
                }
            }), J = e(F.prototype, "foundColor", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return new T(0, 255, 0, 255)
                }
            }), X = e(F.prototype, "container", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                    return null
                }
            }), x = F)) || x));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/wxService.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
    var t, r, n;
    return {
        setters: [function (e) {
            t = e.asyncToGenerator, r = e.regeneratorRuntime
        }, function (e) {
            n = e.cclegacy
        }],
        execute: function () {
            n._RF.push({}, "0a11e8QuS1Hd4TO+0t8LkEt", "wxService", void 0), e("WxService", function () {
                function e() {}
                return e.getJsConfig = function () {
                    var e = t(r().mark((function e(t) {
                        var n, s;
                        return r().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next =
                                        3, fetch(this.baseUrl +
                                            "/api/wechat/jssdk?url=" +
                                            t.url, {
                                                method: "GET",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                case 3:
                                    if ((n = e.sent).ok) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error(
                                        "HTTP error! status: " +
                                        n.status);
                                case 6:
                                    return e.next = 8, n.json();
                                case 8:
                                    return s = e.sent, e.abrupt(
                                        "return", s);
                                case 12:
                                    throw e.prev = 12, e.t0 =
                                        e.catch(0), console
                                        .error(
                                            "获取JSSDK配置失败:",
                                            e.t0), e.t0;
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 12]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), e
            }()).baseUrl = "https://wx.sanguosha.com", n._RF.pop()
        }
    }
}));

(function (r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function (mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
        return {
            setters: [function (_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
        }],
            execute: function () {}
        };
    });
});