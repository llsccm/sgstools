// https://ygdmy25-static.sanguosha.com/muniu/pc/assets/main/index.js
System.register("chunks:///_virtual/AnimationPlayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts"], (function(e) {
    var t, i, s, n, r, a, o, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            s = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            a = e._decorator,
            o = e.Enum
        }
        , function(e) {
            p = e.UiBase
        }
        ],
        execute: function() {
            var h, l, m, _, f;
            r._RF.push({}, "41090jGx0ZMU5W4R34k101r", "AnimationPlayer", void 0);
            var c = a.ccclass
              , u = a.property
              , y = e("AnimationType", function(e) {
                return e[e.frame = 0] = "frame",
                e[e.spine = 1] = "spine",
                e
            }({}))
              , d = o(y);
            e("AnimationPlayer", (h = c("AnimationPlayer"),
            l = u({
                type: d
            }),
            h((f = t((_ = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                        r[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    s(t, "type", f, n(t)),
                    t._playing = !1,
                    t._loop = !0,
                    t._onComplete = void 0,
                    t._frames = [],
                    t._fps = 12,
                    t._frameIndex = 0,
                    t._frameAcc = 0,
                    t._sprite = null,
                    t._skeleton = null,
                    t._spineAnimName = "",
                    t
                }
                i(t, e);
                var r = t.prototype;
                return r.initFrame = function(e, t, i, s) {
                    void 0 === i && (i = 12),
                    this.type = y.frame,
                    this._sprite = e,
                    this._frames = t,
                    this._fps = i,
                    this._onComplete = s
                }
                ,
                r.initSpine = function(e, t, i) {
                    this.type = y.spine,
                    this._skeleton = e,
                    this._spineAnimName = t,
                    this._onComplete = i
                }
                ,
                r.play = function(e) {
                    var t = this;
                    if (void 0 === e && (e = !0),
                    this._loop = e,
                    this._playing = !0,
                    this.type === y.frame) {
                        if (!this._sprite || 0 === this._frames.length)
                            return void console.warn("AnimationPlayer: frame data missing");
                        this._frameIndex = 0,
                        this._frameAcc = 0,
                        this._sprite.spriteFrame = this._frames[0],
                        this.schedule(this.updateFrame, 0)
                    } else if (this.type === y.spine) {
                        if (!this._skeleton || !this._spineAnimName)
                            return void console.warn("AnimationPlayer: spine data missing");
                        this._skeleton.setAnimation(0, this._spineAnimName, e),
                        !e && this._onComplete && this._skeleton.setCompleteListener((function() {
                            t._onComplete && t._onComplete()
                        }
                        ))
                    }
                }
                ,
                r.updateFrame = function(e) {
                    if (this._playing && this.type === y.frame) {
                        this._frameAcc += e;
                        for (var t = 1 / Math.max(this._fps, 1); this._frameAcc >= t; ) {
                            if (this._frameAcc -= t,
                            this._frameIndex++,
                            this._frameIndex >= this._frames.length) {
                                if (!this._loop)
                                    return this.stop(),
                                    void (this._onComplete && this._onComplete());
                                this._frameIndex = 0
                            }
                            this._sprite && (this._sprite.spriteFrame = this._frames[this._frameIndex])
                        }
                    }
                }
                ,
                r.stop = function() {
                    this._playing = !1,
                    this.type === y.frame ? this.unschedule(this.updateFrame) : this.type === y.spine && this._skeleton && this._skeleton.clearTrack(0)
                }
                ,
                r.pause = function() {
                    this._playing = !1,
                    this.type === y.spine && this._skeleton && (this._skeleton.paused = !0)
                }
                ,
                r.resume = function() {
                    this._playing = !0,
                    this.type === y.spine && this._skeleton && (this._skeleton.paused = !1)
                }
                ,
                r.onDestroy = function() {
                    this.stop()
                }
                ,
                t
            }(p)).prototype, "type", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return y.frame
                }
            }),
            m = _)) || m));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/api.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./HttpClient.ts"], (function(r) {
    var t, n, e, u, a;
    return {
        setters: [function(r) {
            t = r.extends,
            n = r.asyncToGenerator,
            e = r.regeneratorRuntime
        }
        , function(r) {
            u = r.cclegacy
        }
        , function(r) {
            a = r.HttpClient
        }
        ],
        execute: function() {
            u._RF.push({}, "103bbVvi49ORYFfukAUmUpw", "api", void 0);
            var o = r("ApiPath", {
                LOGIN: "api/login/game/uid/send/email",
                LOGIN_TICKET: "api/login/yk",
                LOGIN_WX: "api/login/wx/official",
                GAME_START: "api/game/start",
                GENERAL: "api/user/general",
                TASK_REPORT: "api/game/task/report",
                USER_INFO: "api/user/info",
                GAME_END: "api/game/complete",
                QLD_REPORT: "api/qld/report",
                QLD_COUNT: "api/qld",
                REWARD: "api/user/reward/obtain",
                RANK: "api/user/general/ranking",
                PROP_SHARE: "api/user/prop/share"
            });
            r("Api", function() {
                function r() {}
                return r.init = function(r) {
                    a.init(r),
                    a.addRequestInterceptor((function(r) {
                        var n = localStorage.getItem("token");
                        return n && (r.headers = t({}, r.headers, {
                            Authorization: "" + n
                        })),
                        r
                    }
                    )),
                    a.addResponseInterceptor((function(r) {
                        var t = r.data;
                        if (0 !== t.code && -600 !== t.code) {
                            var n = new Error(t.msg || "请求失败");
                            throw n.code = t.code,
                            n
                        }
                        return r.data = t.data,
                        r
                    }
                    ))
                }
                ,
                r.login = function() {
                    var r = n(e().mark((function r(t) {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.post(o.LOGIN, t));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                r.loginTicket = function() {
                    var r = n(e().mark((function r(t) {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.post(o.LOGIN_TICKET, t));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                r.loginWx = function() {
                    var r = n(e().mark((function r(t) {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.post(o.LOGIN_WX, t));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                r.gameStart = function() {
                    var r = n(e().mark((function r() {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.post(o.GAME_START, {}));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function() {
                        return r.apply(this, arguments)
                    }
                }(),
                r.getGeneral = function() {
                    var r = n(e().mark((function r() {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.get(o.GENERAL, {}));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function() {
                        return r.apply(this, arguments)
                    }
                }(),
                r.taskReport = function() {
                    var r = n(e().mark((function r(t) {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.post(o.TASK_REPORT, t));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                r.getUserInfo = function() {
                    var r = n(e().mark((function r() {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.get(o.USER_INFO, {}));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function() {
                        return r.apply(this, arguments)
                    }
                }(),
                r.gameEnd = function() {
                    var r = n(e().mark((function r(t) {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.post(o.GAME_END, t));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                r.qldReport = function() {
                    var r = n(e().mark((function r(t) {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.post(o.QLD_REPORT, t));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                r.getQldCount = function() {
                    var r = n(e().mark((function r() {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.get(o.QLD_COUNT));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function() {
                        return r.apply(this, arguments)
                    }
                }(),
                r.getReward = function() {
                    var r = n(e().mark((function r(t) {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.get(o.REWARD, t));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                r.getRankList = function() {
                    var r = n(e().mark((function r() {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.get(o.RANK));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function() {
                        return r.apply(this, arguments)
                    }
                }(),
                r.propShare = function() {
                    var r = n(e().mark((function r(t) {
                        return e().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.post(o.PROP_SHARE, t));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                r
            }());
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AppLifecycle.ts", ["cc", "./EventDispatcher.ts"], (function(t) {
    var e, n, i, c;
    return {
        setters: [function(t) {
            e = t.cclegacy,
            n = t.game,
            i = t.Game
        }
        , function(t) {
            c = t.default
        }
        ],
        execute: function() {
            e._RF.push({}, "f7e1fW+3ldGIYFAqFUdgDnq", "AppLifecycle", void 0);
            var s = t("AppLifecycleEvent", function(t) {
                return t.SHOW = "app_show",
                t.HIDE = "app_hide",
                t
            }({}))
              , d = t("AppState", function(t) {
                return t.FOREGROUND = "foreground",
                t.BACKGROUND = "background",
                t
            }({}))
              , h = t("AppLifecycleManager", function() {
                function t() {}
                return t.init = function() {
                    var t = this;
                    this.inited || (this.inited = !0,
                    n.on(i.EVENT_SHOW, this.handleShow, this),
                    n.on(i.EVENT_HIDE, this.handleHide, this),
                    "undefined" != typeof document && document.addEventListener && document.addEventListener("visibilitychange", (function() {
                        document.hidden && t.state !== d.BACKGROUND ? t.handleHide() : document.hidden || t.state === d.FOREGROUND || t.handleShow()
                    }
                    )))
                }
                ,
                t.handleShow = function() {
                    this.state !== d.FOREGROUND && (this.state = d.FOREGROUND,
                    this.dispatcher.emit(s.SHOW))
                }
                ,
                t.handleHide = function() {
                    this.state !== d.BACKGROUND && (this.state = d.BACKGROUND,
                    this.dispatcher.emit(s.HIDE))
                }
                ,
                t.on = function(t, e, n) {
                    this.dispatcher.on(t, e, n)
                }
                ,
                t.once = function(t, e, n) {
                    this.dispatcher.once(t, e, n)
                }
                ,
                t.off = function(t, e, n) {
                    this.dispatcher.off(t, e, n)
                }
                ,
                t.getState = function() {
                    return this.state
                }
                ,
                t
            }());
            h.inited = !1,
            h.state = d.FOREGROUND,
            h.dispatcher = new c,
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BundleManager.ts"], (function(o) {
    var i, u, e, n, t, a, c, r;
    return {
        setters: [function(o) {
            i = o.createClass
        }
        , function(o) {
            u = o.cclegacy,
            e = o._decorator,
            n = o.Node,
            t = o.director,
            a = o.AudioSource,
            c = o.AudioClip
        }
        , function(o) {
            r = o.BundleManager
        }
        ],
        execute: function() {
            u._RF.push({}, "ebf838HYvJJRaaRd48Cu7dU", "AudioManager", void 0);
            e.ccclass;
            o("AudioManager", function() {
                function o() {
                    this.audioSource = null
                }
                var u = o.prototype;
                return u.init = function() {
                    var o = new n("globalAudioManager");
                    t.getScene().addChild(o),
                    this.audioSource = o.addComponent(a),
                    t.addPersistRootNode(o)
                }
                ,
                u.playBGM = function(o, i, u, e) {
                    var n = this;
                    void 0 === i && (i = !0),
                    void 0 === u && (u = 1),
                    this.audioSource && r.load(o, c, (function(o, e) {
                        o ? console.error("加载背景音乐失败:", o) : (n.audioSource.clip = e,
                        n.audioSource.loop = i,
                        n.audioSource.volume = u,
                        n.audioSource.play())
                    }
                    ), e)
                }
                ,
                u.stopBGM = function() {
                    this.audioSource && this.audioSource.playing && this.audioSource.stop()
                }
                ,
                u.pauseBGM = function() {
                    this.audioSource && this.audioSource.playing && this.audioSource.pause()
                }
                ,
                u.resumeBGM = function() {
                    this.audioSource && !this.audioSource.playing && this.audioSource.clip && this.audioSource.play()
                }
                ,
                u.playSFX = function(o, i, u) {
                    var e = this;
                    void 0 === i && (i = 1),
                    this.audioSource && r.load(o, c, (function(o, u) {
                        o ? console.error("加载音效失败:", o) : e.audioSource.playOneShot(u, i)
                    }
                    ), u)
                }
                ,
                i(o, null, [{
                    key: "Instance",
                    get: function() {
                        return this.instance || (this.instance = new o,
                        this.instance.init()),
                        this.instance
                    }
                }]),
                o
            }()).instance = null,
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BundleManager.ts", ["cc"], (function(n) {
    var e, u, t;
    return {
        setters: [function(n) {
            e = n.cclegacy,
            u = n.assetManager,
            t = n.error
        }
        ],
        execute: function() {
            e._RF.push({}, "086beevw5RPF7A77JeA9EdU", "BundleManager", void 0),
            n("BundleManager", function() {
                function n() {}
                return n.setDefaultBundle = function(n) {
                    this.defaultBundle = n
                }
                ,
                n.getBundle = function(n) {
                    var e = n || this.defaultBundle
                      , r = u.getBundle(e);
                    return r || (t("[BundleManager] 找不到 Bundle: " + e),
                    null)
                }
                ,
                n.load = function(n, e, u, t) {
                    var r = this.getBundle(t);
                    r ? r.load(n, e, u) : u(new Error("Bundle not found: " + (t || this.defaultBundle)), null)
                }
                ,
                n.loadAsync = function(n, e, u) {
                    var t = this;
                    return new Promise((function(r, l) {
                        t.load(n, e, (function(n, e) {
                            n || !e ? l(n) : r(e)
                        }
                        ), u)
                    }
                    ))
                }
                ,
                n
            }()).defaultBundle = "resources",
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CampPage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./UserControl.ts", "./utils.ts", "./GeneralPopup.ts", "./UiConfig.ts", "./PageManager.ts"], (function(e) {
    var n, t, r, a, i, o, u, c, s, l, p, f, h, g, d, v, y;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            r = e.initializerDefineProperty,
            a = e.assertThisInitialized,
            i = e.asyncToGenerator,
            o = e.regeneratorRuntime
        }
        , function(e) {
            u = e.cclegacy,
            c = e._decorator,
            s = e.Node,
            l = e.instantiate,
            p = e.Sprite
        }
        , function(e) {
            f = e.UiBase
        }
        , function(e) {
            h = e.userControl
        }
        , function(e) {
            g = e.getGeneralSprite
        }
        , function(e) {
            d = e.GeneralPopup
        }
        , function(e) {
            v = e.UI_PATH
        }
        , function(e) {
            y = e.UILayer
        }
        ],
        execute: function() {
            var m, w, b, C, P, k, G, U, E, M, N;
            u._RF.push({}, "55dd1433K1KqKY75ERZygmt", "CampPage", void 0);
            var T = c.ccclass
              , A = c.property;
            e("CampPage", (m = T("CampPage"),
            w = A(s),
            b = A(s),
            C = A(s),
            P = A(d),
            m((U = n((G = function(e) {
                function n() {
                    for (var n, t = arguments.length, i = new Array(t), o = 0; o < t; o++)
                        i[o] = arguments[o];
                    return n = e.call.apply(e, [this].concat(i)) || this,
                    r(n, "rankBtn", U, a(n)),
                    r(n, "item", E, a(n)),
                    r(n, "backNode", M, a(n)),
                    r(n, "generalPopup", N, a(n)),
                    n.generalSpArr = [],
                    n
                }
                t(n, e);
                var u = n.prototype;
                return u.onLoad = function() {
                    this.item.active = !1,
                    this.initGeneralView(),
                    this.rankBtn.on(s.EventType.TOUCH_END, this.onRankBtnClick, this),
                    this.backNode.on(s.EventType.TOUCH_END, this.goHome, this)
                }
                ,
                u.start = function() {
                    this.updateMyGeneral()
                }
                ,
                u.initGeneralView = function() {
                    var e = i(o().mark((function e() {
                        var n = this;
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    h.getAllGeneralConfig().forEach((function(e, t) {
                                        var r = l(n.item);
                                        r.active = !0,
                                        r.parent = n.item.parent;
                                        var a = r.getComponent(p);
                                        n.generalSpArr.push({
                                            sp: a,
                                            id: e.id,
                                            has: !1
                                        }),
                                        g(e.id, "card").then((function(e) {
                                            a.spriteFrame = e,
                                            a.grayscale = !0
                                        }
                                        )),
                                        r.on(s.EventType.TOUCH_END, (function() {
                                            n.onClickGeneral(t)
                                        }
                                        ), n)
                                    }
                                    ));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                u.updateMyGeneral = function() {
                    var e = i(o().mark((function e() {
                        var n = this;
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    h.updateMyGeneral();
                                case 2:
                                    e.sent.forEach((function(e) {
                                        var t = n.generalSpArr.find((function(n) {
                                            return n.id === e
                                        }
                                        ));
                                        t && (t.sp.grayscale = !1,
                                        t.has = !0)
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                u.onClickGeneral = function(e) {
                    var n = this.generalSpArr[e];
                    this.generalPopup.showGeneral(n.id, n.has)
                }
                ,
                u.onRankBtnClick = function() {
                    this.pageManager.showUI(v.RANK, y.TOP)
                }
                ,
                u.onShowNewGeneral = function(e) {
                    this.generalPopup.node.active = !0,
                    this.generalPopup.showNewGeneral(e)
                }
                ,
                u.goHome = function() {
                    var e = this;
                    this.pageManager.showUI(v.HOME, y.MIDDLE, (function() {
                        e.pageManager.removeUI(e.node)
                    }
                    ))
                }
                ,
                n
            }(f)).prototype, "rankBtn", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            E = n(G.prototype, "item", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = n(G.prototype, "backNode", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            N = n(G.prototype, "generalPopup", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = G)) || k));
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CommonFun.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimationPlayer.ts"], (function(e) {
    var n, o, t, r, i;
    return {
        setters: [function(e) {
            n = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            o = e.cclegacy,
            t = e.assetManager,
            r = e.JsonAsset
        }
        , function(e) {
            i = e.AnimationPlayer
        }
        ],
        execute: function() {
            e({
                copyToClipboard: function(e) {
                    return new Promise((function(n, o) {
                        try {
                            var t = document.createElement("textarea");
                            t.value = e,
                            t.style.position = "fixed",
                            t.style.left = "-9999px",
                            document.body.appendChild(t),
                            t.select(),
                            document.execCommand("copy"),
                            document.body.removeChild(t),
                            n()
                        } catch (e) {
                            console.error("复制失败:", e),
                            o(e)
                        }
                    }
                    ))
                },
                findChildRecursive: function(e, o) {
                    if (e.name === o)
                        return e;
                    for (var t, r = n(e.children); !(t = r()).done; ) {
                        var i = t.value
                          , a = this.findChildRecursive(i, o);
                        if (a)
                            return a
                    }
                    return null
                },
                getAllUrlParams: function() {
                    for (var e, o = {}, t = window.location.search.substring(1).split("&"), r = n(t); !(e = r()).done; ) {
                        var i = e.value;
                        if ("" !== i) {
                            var a = i.split("=")
                              , u = a[0]
                              , c = a[1]
                              , l = void 0 === c ? "" : c;
                            o[decodeURIComponent(u)] = decodeURIComponent(l)
                        }
                    }
                    return o
                },
                getRandomElement: function(e) {
                    if (0 === e.length)
                        return;
                    var n = Math.floor(Math.random() * e.length);
                    return e[n]
                },
                getUrlParam: function(e) {
                    var n = window.location.href;
                    e = e.replace(/[\[\]]/g, "\\$&");
                    var o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
                    return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
                },
                isWeiXin: function() {
                    return -1 !== navigator.userAgent.toLowerCase().indexOf("micromessenger")
                },
                loadJson: function(e, n) {
                    return new Promise((function(o, i) {
                        var a = n || "resources";
                        t.loadBundle(a, (function(n, t) {
                            n ? i(n) : t.load(e, r, (function(e, n) {
                                e ? i(e) : o(n.json)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                },
                loadJsonRemote: function(e) {
                    return new Promise((function(n, o) {
                        t.loadRemote(e, {
                            ext: ".json"
                        }, (function(e, t) {
                            e ? o(e) : n(t.json)
                        }
                        ))
                    }
                    ))
                },
                loadWxScript: function() {
                    return new Promise((function(e, n) {
                        if (window.wx)
                            e();
                        else {
                            var o = document.createElement("script");
                            o.type = "text/javascript",
                            o.src = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js",
                            o.onload = function() {
                                return e()
                            }
                            ,
                            o.onerror = function() {
                                return n(new Error("Failed to load WeChat JSSDK"))
                            }
                            ,
                            document.head.appendChild(o)
                        }
                    }
                    ))
                },
                playFrameAnimation: function(e, n, o, t, r) {
                    void 0 === o && (o = 12);
                    void 0 === t && (t = !0);
                    var a = e.node.addComponent(i);
                    return a.initFrame(e, n, o, r),
                    a.play(t),
                    {
                        play: function() {
                            return a.play(t)
                        },
                        pause: function() {
                            return a.pause()
                        },
                        stop: function() {
                            return a.stop()
                        }
                    }
                },
                shuffleInPlace: function(e) {
                    for (var n = e.length - 1; n > 0; n--) {
                        var o = Math.floor(Math.random() * (n + 1))
                          , t = [e[o], e[n]];
                        e[n] = t[0],
                        e[o] = t[1]
                    }
                    return e
                }
            }),
            o._RF.push({}, "11597hEJKhHPqJ4V1TuFpO9", "CommonFun", void 0),
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EventDefine.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "b2704jl4xRH+Z6LI8jsKgH1", "EventDefine", void 0);
            e("UiEvent", function(e) {
                return e.initGame = "initGame",
                e.selectItem = "selectItem",
                e.taskComplete = "taskComplete",
                e.updateMap = "updateMap",
                e.updateSelect = "updateSelect",
                e.resetMap = "resetMap",
                e.gameResult = "gameResult",
                e.collectGeneral = "collectGeneral",
                e.openShareProp = "openShareProp",
                e.updatePropCount = "updatePropCount",
                e
            }({}));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EventDispatcher.ts", ["cc"], (function(t) {
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "28350PpfE1AoYiqvrwM3CCy", "EventDispatcher", void 0);
            t("default", function() {
                function t() {
                    this.events = null,
                    this.events = {}
                }
                var e = t.prototype;
                return e.register = function(t) {
                    this.events[t] || (this.events[t] = [])
                }
                ,
                e.on = function(t, e, n) {
                    this.events[t] || (this.events[t] = []),
                    this.events[t].push({
                        cb: e,
                        target: n
                    })
                }
                ,
                e.off = function(t, e, n) {
                    if (this.events[t])
                        for (var s = 0; s < this.events[t].length; ++s)
                            if (this.events[t][s].cb == e) {
                                this.events[t].splice(s, 1);
                                break
                            }
                }
                ,
                e.once = function(t, e, n) {
                    this.events[t] || (this.events[t] = []),
                    this.events[t].push({
                        cb: e,
                        target: n,
                        once: !0
                    })
                }
                ,
                e.removeByName = function(t) {
                    this.events[t] && (this.events[t].length = 0,
                    delete this.events[t])
                }
                ,
                e.removeByTarget = function(t) {
                    for (var e in this.events)
                        "object" == typeof this.events[e] && (this.events[e] = this.events[e].filter((function(e) {
                            return e.target != t
                        }
                        )))
                }
                ,
                e.clear = function() {
                    this.events = {}
                }
                ,
                e.emit = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                        n[s - 1] = arguments[s];
                    this.events[t] && (this.events[t] = this.events[t].filter((function(t) {
                        var e;
                        return t.cb && t.target && (e = t.cb).call.apply(e, [t.target].concat(n)),
                        1 != t.once
                    }
                    )))
                }
                ,
                t
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EventManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts"], (function(e) {
    var t, n, s;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            n = e.cclegacy
        }
        , function(e) {
            s = e.default
        }
        ],
        execute: function() {
            n._RF.push({}, "32fb1wl26hGnIc2BwYd6N/6", "EventManager", void 0),
            e("EventManager", function() {
                function e() {}
                return e.getDispatcher = function(e) {
                    return this._dispatchers.get(e) || null
                }
                ,
                e.register = function(e) {
                    return this._dispatchers.has(e) || this._dispatchers.set(e, new s),
                    this._dispatchers.get(e)
                }
                ,
                e.remove = function(e) {
                    if ("global" !== e) {
                        var t = this._dispatchers.get(e);
                        t && (t.clear(),
                        this._dispatchers.delete(e))
                    } else
                        console.warn("global dispatcher cannot be removed")
                }
                ,
                e.clearAll = function() {
                    this._dispatchers.forEach((function(e, t) {
                        "global" !== t && e.clear()
                    }
                    ))
                }
                ,
                t(e, null, [{
                    key: "global",
                    get: function() {
                        return this._dispatchers.get("global")
                    }
                }]),
                e
            }())._dispatchers = new Map([["global", new s]]),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameCanvas.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiConfig.ts", "./UiBase.ts", "./UserControl.ts", "./TipControl.ts", "./AudioManager.ts", "./GameConst.ts", "./AppLifecycle.ts", "./api.ts"], (function(n) {
    var t, e, o, a, i, s, r, c, u, l;
    return {
        setters: [function(n) {
            t = n.inheritsLoose
        }
        , function(n) {
            e = n.cclegacy,
            o = n._decorator
        }
        , function(n) {
            a = n.UI_PATH
        }
        , function(n) {
            i = n.UiBase
        }
        , function(n) {
            s = n.userControl
        }
        , function(n) {
            r = n.TipControl
        }
        , null, function(n) {
            c = n.revivalTimeKey
        }
        , function(n) {
            u = n.AppLifecycleManager
        }
        , function(n) {
            l = n.Api
        }
        ],
        execute: function() {
            var p;
            e._RF.push({}, "3563bouWsBBqKOwaaFciw5w", "GameCanvas", void 0);
            var f = o.ccclass;
            o.property,
            n("GameCanvas", f("GameCanvas")(p = function(n) {
                function e() {
                    return n.apply(this, arguments) || this
                }
                return t(e, n),
                e.prototype.onLoad = function() {
                    u.init(),
                    this.pageManager.init(this.node),
                    r.Instance.init(),
                    l.init("https://sgsolmnlm.sanguosha.com/");
                    var n = localStorage.getItem(c)
                      , t = a.LOADING;
                    n && (Date.now() - Number(n) < 6e5 ? (s.initBaseData(),
                    s.login(),
                    t = a.GAME) : localStorage.removeItem(c)),
                    this.pageManager.showUI(t)
                }
                ,
                e
            }(i)) || p);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameConst.ts", ["cc"], (function(e) {
    var u;
    return {
        setters: [function(e) {
            u = e.cclegacy
        }
        ],
        execute: function() {
            u._RF.push({}, "703ca9oXyhNVIMsUboQ2ksf", "GameConst", void 0);
            e("eLoginType", function(e) {
                return e[e.default = 0] = "default",
                e[e.wx = 1] = "wx",
                e
            }({})),
            e("MaxLayer", 5),
            e("MaxSelectedItem", 7),
            e("MaxTaskNum", 3),
            e("MaxGeneralNum", 15),
            e("MaxUsePropCount", 3),
            e("revivalTimeKey", "revivalTime"),
            e("RewardConfig", [{
                key: "once_a_day",
                desc: "完成一局游戏",
                count: 1,
                type: [1],
                source: 1
            }, {
                key: "three_times_a_day",
                desc: "完成3局游戏",
                count: 3,
                type: [1],
                source: 2
            }, {
                key: "accumulate_5_digits",
                desc: "累计获得5位武将",
                count: 5,
                type: [2, 3],
                source: 3
            }, {
                key: "accumulate_10_digits",
                desc: "累计获得10位武将",
                count: 10,
                type: [2, 3],
                source: 4
            }, {
                key: "accumulate_15_digits",
                desc: "累计获得15位武将",
                count: 15,
                type: [2, 4],
                source: 5
            }, {
                key: "accumulate_all_digits",
                desc: "收集全部武将",
                count: 15,
                type: [1, 4],
                source: 6
            }]),
            e("eItemType", function(e) {
                return e[e.fodder = 1] = "fodder",
                e[e.greenDragonBlade = 8] = "greenDragonBlade",
                e
            }({})),
            e("eGeneralType", function(e) {
                return e[e.liubei = 1] = "liubei",
                e[e.zhangfei = 2] = "zhangfei",
                e[e.guanyu = 3] = "guanyu",
                e[e.zhaoyun = 4] = "zhaoyun",
                e[e.jiangwei = 5] = "jiangwei",
                e[e.xusheng = 6] = "xusheng",
                e[e.wanglang = 7] = "wanglang",
                e[e.simayi = 8] = "simayi",
                e[e.menghuo = 9] = "menghuo",
                e[e.masu = 10] = "masu",
                e[e.zhouyu = 11] = "zhouyu",
                e[e.huangyueying = 12] = "huangyueying",
                e[e.liaohua = 13] = "liaohua",
                e[e.liushan = 14] = "liushan",
                e[e.huangzhong = 15] = "huangzhong",
                e
            }({})),
            e("FollowConfig", [{
                key: "weixin",
                url: "https://mp.weixin.qq.com/s/SFOgjRlIT95jgj4r0n8v2Q"
            }, {
                key: "bili",
                url: "https://space.bilibili.com/1672821212"
            }, {
                key: "douyin",
                url: "https://v.douyin.com/iPWPhSVH"
            }, {
                key: "xiaohongshu",
                url: "https://www.xiaohongshu.com/user/profile/66024026000000000b00d628"
            }, {
                key: "kuaishou",
                url: "https://www.kuaishou.com/profile/3xmkm3wptzn6b8m"
            }]),
            e("ePropType", function(e) {
                return e[e.flawless = 1] = "flawless",
                e[e.chain = 2] = "chain",
                e[e.reset = 3] = "reset",
                e
            }({}));
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameControl.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./CommonFun.ts", "./api.ts", "./EventDefine.ts", "./GameConst.ts", "./GameModel.ts", "./UserControl.ts", "./TipControl.ts"], (function(e) {
    var t, a, n, i, s, r, o, l, m, c, u, h, d, g, f, v, p;
    return {
        setters: [function(e) {
            t = e.asyncToGenerator,
            a = e.regeneratorRuntime
        }
        , function(e) {
            n = e.cclegacy,
            i = e.error
        }
        , function(e) {
            s = e.UiBase
        }
        , function(e) {
            r = e.getRandomElement,
            o = e.loadJson
        }
        , function(e) {
            l = e.Api
        }
        , function(e) {
            m = e.UiEvent
        }
        , function(e) {
            c = e.eItemType,
            u = e.eGeneralType,
            h = e.MaxSelectedItem,
            d = e.ePropType,
            g = e.revivalTimeKey
        }
        , function(e) {
            f = e.GameModel
        }
        , function(e) {
            v = e.userControl
        }
        , function(e) {
            p = e.tipControl
        }
        ],
        execute: function() {
            n._RF.push({}, "da06209l2NPFJxaIOCxFHG2", "GameControl", void 0);
            var M = e("GameControl", function() {
                function e() {
                    this.gameModel = new f,
                    this.isInGame = !1
                }
                e.getInstance = function() {
                    return e.instance || (e.instance = new e),
                    e.instance
                }
                ;
                var n = e.prototype;
                return n.initConfigData = function() {}
                ,
                n.initGame = function() {
                    var e = t(a().mark((function e() {
                        var t, n, i;
                        return a().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!localStorage.getItem(g)) {
                                        e.next = 8;
                                        break
                                    }
                                    this.gameModel.loadDataFromLocal(),
                                    s.emitUiEvent(m.initGame, this.gameModel),
                                    this.revival(),
                                    localStorage.removeItem(g),
                                    e.next = 18;
                                    break;
                                case 8:
                                    return t = Math.floor(4 * Math.random()) + 1,
                                    e.next = 11,
                                    o("json/gameMap" + t);
                                case 11:
                                    return n = e.sent,
                                    this.gameModel.updateBaseMap(n),
                                    e.next = 15,
                                    l.gameStart();
                                case 15:
                                    i = e.sent.data,
                                    this.gameModel.initGameData(i),
                                    s.emitUiEvent(m.initGame, this.gameModel);
                                case 18:
                                    this.isInGame = !0;
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                n.getSelectItems = function() {
                    return this.gameModel.selectedItemList
                }
                ,
                n.getMapData = function() {
                    return this.gameModel.mapDataArr
                }
                ,
                n.getGeneralData = function() {
                    return this.gameModel.generalVal
                }
                ,
                n.clickItem = function(e, t) {
                    if (this.isInGame)
                        for (var a = this.gameModel.mapDataArr, n = a.length - 1; n >= 0; n--) {
                            var i = a[n][e][t];
                            if (i > 0) {
                                var r = this.gameModel.selectedItemList
                                  , o = r.lastIndexOf(i)
                                  , h = r.length;
                                -1 === o ? r.push(i) : (h = o + 1,
                                r.splice(o + 1, 0, i)),
                                a[n][e][t] = 0,
                                s.emitUiEvent(m.selectItem, n, e, t, h),
                                this.checkSelectItem(),
                                i !== c.greenDragonBlade || v.hasGeneral(u.guanyu) || l.qldReport({
                                    game_id: this.gameModel.gameIdVal
                                });
                                break
                            }
                        }
                }
                ,
                n.clickGeneralItem = function() {
                    var e = t(a().mark((function e() {
                        var t, n, i, r, o = this;
                        return a().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!(this.gameModel.getGeneralStatus() >= 0)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (t = v.getAllGeneralConfig(),
                                    n = t.find((function(e) {
                                        return e.id === o.gameModel.generalVal.id
                                    }
                                    ))) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    if (i = !1,
                                    !(n.item_id && n.item_num <= 3)) {
                                        e.next = 13;
                                        break
                                    }
                                    r = this.gameModel.selectedItemList,
                                    r.filter((function(e) {
                                        return e === n.item_id
                                    }
                                    )).length >= n.item_num && (i = !0),
                                    e.next = 21;
                                    break;
                                case 13:
                                    if (n.id != u.guanyu) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 16,
                                    l.getQldCount();
                                case 16:
                                    e.sent.data.num >= 50 && (i = !0),
                                    e.next = 21;
                                    break;
                                case 20:
                                    (4 == n.id && v.hasGeneral(u.liushan) || n.id == u.jiangwei || n.id == u.simayi && 0 == this.gameModel.selectedItemList.length || n.id == u.liaohua && 0 == this.gameModel.currentTaskList.length) && (i = !0);
                                case 21:
                                    this.gameModel.setGeneralStatus(i ? 1 : 0),
                                    s.emitUiEvent(m.collectGeneral, i),
                                    this.checkGameWin();
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                n.checkSelectItem = function() {
                    var e = this
                      , t = this.gameModel.selectedItemList;
                    if (!(t.length < 3)) {
                        for (var a = {}, n = 0; n < t.length; n++) {
                            var i = t[n];
                            a[i] = (a[i] || 0) + 1
                        }
                        var s = function() {
                            if (a.hasOwnProperty(r) && a[r] >= 3) {
                                var t = parseInt(r);
                                if (e.gameModel.currentTaskList.some((function(e) {
                                    return e.item_id == t
                                }
                                ))) {
                                    e.gameModel.removeSelectedItem(t);
                                    var n = e.gameModel.currentTaskList.find((function(e) {
                                        return e.item_id == t
                                    }
                                    ));
                                    return e.completeTask(n),
                                    1
                                }
                            }
                        };
                        for (var r in a)
                            if (s())
                                break;
                        this.checkGameLose()
                    }
                }
                ,
                n.completeTask = function(e) {
                    var t = this
                      , a = this.gameModel.completeTask(e.id);
                    s.emitUiEvent(m.taskComplete, e, a),
                    a && setTimeout((function() {
                        t.checkSelectItem()
                    }
                    ), 500),
                    l.taskReport({
                        game_id: this.gameModel.gameIdVal,
                        task_id: e.id,
                        status: 1
                    }).then((function() {
                        t.checkGameWin()
                    }
                    ))
                }
                ,
                n.checkGameLose = function() {
                    this.gameModel.selectedItemList.length >= h && (this.gameModel.getIsRevival() ? this.gameLoseReport().then((function() {
                        s.emitUiEvent(m.gameResult, "lose")
                    }
                    )) : s.emitUiEvent(m.gameResult, "revival"))
                }
                ,
                n.gameLoseReport = function() {
                    return this.isInGame = !1,
                    l.gameEnd({
                        game_id: this.gameModel.gameIdVal,
                        status: 0,
                        general_status: 0
                    })
                }
                ,
                n.checkGameWin = function() {
                    for (var e = this.gameModel.mapDataArr, t = !0, a = e.length - 1; a >= 0 && t; a--)
                        for (var n = e[a], i = 0; i < n.length && t; i++)
                            for (var r = n[i], o = 0; o < r.length; o++)
                                if (0 !== r[o]) {
                                    t = !1;
                                    break
                                }
                    var c = this.gameModel.getGeneralStatus();
                    return !!(t && c >= 0) && (this.isInGame = !1,
                    l.gameEnd({
                        game_id: this.gameModel.gameIdVal,
                        status: 1,
                        general_status: c
                    }).then((function(e) {
                        s.emitUiEvent(m.gameResult, "win", e.data)
                    }
                    )),
                    !0)
                }
                ,
                n.removeGroupItem = function(e) {
                    for (var t = this.gameModel.selectedItemList, a = 0, n = 0; n < t.length && (t[n] == e && a++,
                    !(a >= 3)); n++)
                        ;
                    if (a > 0 && (this.gameModel.removeSelectedItem(e),
                    s.emitUiEvent(m.updateSelect)),
                    3 !== a) {
                        for (var r = this.gameModel.mapDataArr, o = r.length - 1; o >= 0 && a < 3; o--)
                            for (var l = r[o], c = 0; c < l.length && a < 3; c++)
                                for (var u = l[c], h = 0; h < u.length && a < 3; h++)
                                    u[h] === e && (r[o][c][h] = 0,
                                    ++a > 3 && i("道具数量有误 cout==", a));
                        if (3 !== a)
                            return i("道具数量有误 cout==", a),
                            console.log("要移除的 ID===", e),
                            void console.log(r);
                        s.emitUiEvent(m.updateMap, r)
                    }
                }
                ,
                n.randomRemoveSelect = function() {
                    var e = this.gameModel.selectedItemList;
                    if (0 != e.length) {
                        var t = r(e);
                        this.removeGroupItem(t);
                        var a = this.gameModel.currentTaskList.find((function(e) {
                            return e.item_id == t
                        }
                        ));
                        a ? this.completeTask(a) : (a = this.gameModel.taskQueueList.find((function(e) {
                            return e.item_id == t
                        }
                        ))) && (this.gameModel.removeQueueTask(a.id),
                        l.taskReport({
                            game_id: this.gameModel.gameIdVal,
                            task_id: a.id,
                            status: 1
                        }))
                    } else
                        p.showTip("收集栏没有道具~")
                }
                ,
                n.checkUseChain = function() {
                    0 != this.gameModel.currentTaskList.length ? s.emitUiEvent(m.openShareProp, d.chain) : p.showTip("任务已全部完成~")
                }
                ,
                n.useChain = function() {
                    if (0 != this.gameModel.currentTaskList.length) {
                        var e = r(this.gameModel.currentTaskList);
                        this.completeTask(e);
                        var t = e.item_id;
                        this.removeGroupItem(t)
                    }
                }
                ,
                n.checkUseFlawless = function() {
                    0 != this.gameModel.selectedItemList.length ? this.useFlawless() : p.showTip("收集栏没有物品可消除~")
                }
                ,
                n.useFlawless = function() {
                    0 != this.gameModel.selectedItemList.length && this.randomRemoveSelect()
                }
                ,
                n.checkUseReset = function() {
                    s.emitUiEvent(m.openShareProp, d.reset)
                }
                ,
                n.useReset = function() {
                    this.gameModel.resetMapData(),
                    s.emitUiEvent(m.resetMap)
                }
                ,
                n.revival = function() {
                    this.gameModel.setRevival(!0),
                    this.randomRemoveSelect()
                }
                ,
                n.saveGameState = function() {
                    this.gameModel.saveDataToLocal(),
                    localStorage.setItem(g, Date.now().toString())
                }
                ,
                n.useProp = function(e) {
                    switch (e) {
                    case d.chain:
                        this.useChain();
                        break;
                    case d.flawless:
                        this.useFlawless();
                        break;
                    case d.reset:
                        this.useReset()
                    }
                    v.useProp(e),
                    s.emitUiEvent(m.updatePropCount)
                }
                ,
                e
            }());
            M.instance = void 0;
            e("gameControl", M.getInstance());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./utils.ts", "./GameControl.ts"], (function(t) {
    var e, i, n, o, r, s, c, a, l, p, u, h, m, f;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            o = t.assertThisInitialized
        }
        , function(t) {
            r = t.cclegacy,
            s = t._decorator,
            c = t.Sprite,
            a = t.Node,
            l = t.Vec3,
            p = t.Color
        }
        , function(t) {
            u = t.UiBase
        }
        , function(t) {
            h = t.getPropTopItem,
            m = t.getItemSprite
        }
        , function(t) {
            f = t.gameControl
        }
        ],
        execute: function() {
            var d, y, S, v, w;
            r._RF.push({}, "9890c1BBo5NiJbqA1PkC/mb", "GameItem", void 0);
            var I = s.ccclass
              , g = s.property;
            t("GameItem", (d = I("GameItem"),
            y = g(c),
            d((w = e((v = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                        r[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    n(e, "itemSprite", w, o(e)),
                    e.layerIndex = -1,
                    e.row = -1,
                    e.col = -1,
                    e
                }
                i(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    this.itemSprite.node.on(a.EventType.TOUCH_END, this.clickProp, this)
                }
                ,
                r.init = function(t, e, i, n) {
                    this.node.active = !0,
                    this.layerIndex = t,
                    this.row = e,
                    this.col = i,
                    this.node.setPosition(new l(90 * (i - 3),90 * (3 - e),0)),
                    this.node.angle = 360 * Math.random(),
                    this.setPropSprite(n)
                }
                ,
                r.updateState = function(t) {
                    var e = h(this.layerIndex, this.row, this.col, t);
                    this.setVisibilityState(e.length)
                }
                ,
                r.clickProp = function() {
                    f.clickItem(this.row, this.col)
                }
                ,
                r.cleanUp = function() {
                    this.layerIndex = -1,
                    this.row = -1,
                    this.col = -1,
                    this.node.active = !1
                }
                ,
                r.setPropSprite = function(t) {
                    var e = this;
                    m(t, "game").then((function(t) {
                        e.itemSprite.spriteFrame = t
                    }
                    ))
                }
                ,
                r.setVisibilityState = function(t) {
                    this.itemSprite.color = 0 == t ? new p(255,255,255,255) : 1 == t ? new p(120,120,120,255) : 2 == t ? new p(60,60,60,255) : new p(0,0,0,255)
                }
                ,
                e
            }(u)).prototype, "itemSprite", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = v)) || S));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameModel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonFun.ts"], (function(t) {
    var e, a, s, r;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            a = t.cclegacy,
            s = t.error
        }
        , function(t) {
            r = t.shuffleInPlace
        }
        ],
        execute: function() {
            a._RF.push({}, "41752etonND3rr7vKtvSfDR", "GameModel", void 0);
            t("GameModel", function() {
                var t = a.prototype;
                function a() {
                    this.gameId = void 0,
                    this.baseMap = void 0,
                    this.mapData = void 0,
                    this.selectedItem = void 0,
                    this.taskQueue = void 0,
                    this.currentTask = [],
                    this.general = null,
                    this.generalStatus = -1,
                    this.isRevival = !1,
                    this.selectedItem = [],
                    this.taskQueue = []
                }
                return t.getGeneralStatus = function() {
                    return this.generalStatus
                }
                ,
                t.setGeneralStatus = function(t) {
                    this.generalStatus = t
                }
                ,
                t.getIsRevival = function() {
                    return this.isRevival
                }
                ,
                t.setRevival = function(t) {
                    this.isRevival = t
                }
                ,
                t.updateBaseMap = function(t) {
                    this.baseMap = t
                }
                ,
                t.initGameData = function(t) {
                    var e = this;
                    this.gameId = t.game_id,
                    this.isRevival = !1,
                    this.selectedItem = [],
                    this.taskQueue = [],
                    this.currentTask = [];
                    var a = {};
                    t.task_orders.forEach((function(t) {
                        e.taskQueue.push(t),
                        a[t.item_id] = (a[t.item_id] || 0) + 3
                    }
                    ));
                    for (var s = 3; s > 0 && this.taskQueue.length > 0; )
                        this.currentTask.push(this.taskQueue.splice(0, 1)[0]),
                        s--;
                    var i = [];
                    for (var n in a)
                        if (a.hasOwnProperty(n)) {
                            var u = parseInt(a[n], 10) || 0
                              , h = parseInt(n, 10);
                            if (!(u <= 0))
                                for (var l = 0; l < u; l++)
                                    i.push(h)
                        }
                    r(i),
                    this.mapData = [];
                    for (var o = 0, c = [], g = 0; g < this.baseMap.length; g++) {
                        for (var p = [], m = 0; m < this.baseMap[g].length; m++) {
                            for (var f = [], v = 0; v < this.baseMap[g][m].length; v++)
                                1 === this.baseMap[g][m][v] ? (f.push(o < i.length ? i[o++] : 0),
                                0 === g && c.push({
                                    r: m,
                                    c: v
                                })) : f.push(0);
                            p.push(f)
                        }
                        this.mapData.push(p)
                    }
                    if (this.general = null,
                    this.generalStatus = -1,
                    t.general_id) {
                        var d = c.splice(Math.floor(Math.random() * c.length), 1)[0];
                        this.general = {
                            id: t.general_id,
                            r: d.r,
                            c: d.c
                        }
                    } else
                        this.generalStatus = 0
                }
                ,
                t.removeSelectedItem = function(t) {
                    var e = 0;
                    this.selectedItem = this.selectedItem.filter((function(a) {
                        return !(a === t && e < 3) || (e++,
                        !1)
                    }
                    ))
                }
                ,
                t.completeTask = function(t) {
                    var e = this.currentTask.findIndex((function(e) {
                        return e.id === t
                    }
                    ));
                    if (e >= 0 && this.currentTask.splice(e, 1),
                    this.taskQueue.length > 0) {
                        var a = this.taskQueue.splice(0, 1)[0];
                        return this.currentTask.push(a),
                        a
                    }
                    return null
                }
                ,
                t.removeQueueTask = function(t) {
                    var e = this.taskQueue.findIndex((function(e) {
                        return e.id === t
                    }
                    ));
                    return e >= 0 ? this.taskQueue.splice(e, 1)[0] : (s("对应道具的任务不存在"),
                    null)
                }
                ,
                t.resetMapData = function() {
                    if (this.mapData && 0 !== this.mapData.length) {
                        for (var t = [], e = 0; e < this.mapData.length; e++)
                            for (var a = 0; a < this.mapData[e].length; a++)
                                for (var s = 0; s < this.mapData[e][a].length; s++)
                                    0 !== this.mapData[e][a][s] && t.push(this.mapData[e][a][s]);
                        r(t);
                        for (var i = 0, n = 0; n < this.mapData.length; n++)
                            for (var u = 0; u < this.mapData[n].length; u++)
                                for (var h = 0; h < this.mapData[n][u].length; h++)
                                    0 !== this.mapData[n][u][h] && (this.mapData[n][u][h] = t[i++]);
                        if (this.general) {
                            for (var l = [], o = 0; o < this.baseMap[0].length; o++)
                                for (var c = 0; c < this.baseMap[0][o].length; c++)
                                    1 === this.baseMap[0][o][c] && l.push({
                                        r: o,
                                        c: c
                                    });
                            var g = l.splice(Math.floor(Math.random() * l.length), 1)[0];
                            this.general.r = g.r,
                            this.general.c = g.c
                        }
                    }
                }
                ,
                t.saveDataToLocal = function() {
                    var t = {
                        gameId: this.gameId,
                        baseMap: this.baseMap,
                        mapData: this.mapData,
                        selectedItem: this.selectedItem,
                        taskQueue: this.taskQueue,
                        currentTask: this.currentTask,
                        general: this.general,
                        generalStatus: this.generalStatus
                    };
                    localStorage.setItem("gameData", JSON.stringify(t))
                }
                ,
                t.loadDataFromLocal = function() {
                    var t = JSON.parse(localStorage.getItem("gameData") || "{}");
                    this.gameId = t.gameId,
                    this.baseMap = t.baseMap,
                    this.mapData = t.mapData,
                    this.selectedItem = t.selectedItem,
                    this.taskQueue = t.taskQueue,
                    this.currentTask = t.currentTask,
                    this.general = t.general,
                    this.generalStatus = t.generalStatus,
                    localStorage.removeItem("gameData")
                }
                ,
                e(a, [{
                    key: "gameIdVal",
                    get: function() {
                        return this.gameId
                    }
                }, {
                    key: "mapDataArr",
                    get: function() {
                        return this.mapData
                    }
                }, {
                    key: "selectedItemList",
                    get: function() {
                        return this.selectedItem
                    }
                }, {
                    key: "taskQueueList",
                    get: function() {
                        return this.taskQueue
                    }
                }, {
                    key: "currentTaskList",
                    get: function() {
                        return this.currentTask
                    }
                }, {
                    key: "generalVal",
                    get: function() {
                        return this.general
                    }
                }]),
                a
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GamePage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./GameControl.ts", "./EventDefine.ts", "./GameConst.ts", "./GameItem.ts", "./ItemCard.ts", "./TaskCart.ts", "./UiConfig.ts", "./PageManager.ts", "./ResultPopup.ts", "./GeneralItem.ts", "./UserControl.ts", "./PropGetPopup.ts", "./TipControl.ts"], (function(t) {
    var e, n, a, i, r, s, o, l, u, c, h, p, f, m, d, g, v, P, C, I, b, y, k, U, w, E, G, L, T, M, S, B;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            a = t.initializerDefineProperty,
            i = t.assertThisInitialized,
            r = t.createForOfIteratorHelperLoose
        }
        , function(t) {
            s = t.cclegacy,
            o = t._decorator,
            l = t.Prefab,
            u = t.Node,
            c = t.instantiate,
            h = t.tween,
            p = t.v3,
            f = t.error,
            m = t.Vec3,
            d = t.Label
        }
        , function(t) {
            g = t.UiBase
        }
        , function(t) {
            v = t.gameControl
        }
        , function(t) {
            P = t.UiEvent
        }
        , function(t) {
            C = t.MaxTaskNum,
            I = t.MaxLayer,
            b = t.MaxUsePropCount,
            y = t.ePropType
        }
        , function(t) {
            k = t.GameItem
        }
        , function(t) {
            U = t.ItemCard
        }
        , function(t) {
            w = t.TaskCart
        }
        , function(t) {
            E = t.UI_PATH
        }
        , function(t) {
            G = t.UILayer
        }
        , function(t) {
            L = t.ResultPopup
        }
        , function(t) {
            T = t.GeneralItem
        }
        , function(t) {
            M = t.userControl
        }
        , function(t) {
            S = t.PropGetPopup
        }
        , function(t) {
            B = t.tipControl
        }
        ],
        execute: function() {
            var O, R, z, F, D, N, _, x, H, A, V, q, j, W, X, J, K, Q, Y, Z, $, tt, et, nt, at;
            s._RF.push({}, "aca6cEPNp5MBrbmk1yS6sjo", "GamePage", void 0);
            var it = o.ccclass
              , rt = o.property;
            t("GamePage", (O = it("GamePage"),
            R = rt(l),
            z = rt(l),
            F = rt(l),
            D = rt(u),
            N = rt(u),
            _ = rt(u),
            x = rt(T),
            H = rt(u),
            A = rt(u),
            V = rt(u),
            q = rt(u),
            O((X = e((W = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), s = 0; s < n; s++)
                        r[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    a(e, "itemPfb", X, i(e)),
                    a(e, "itemCardPfb", J, i(e)),
                    a(e, "taskCartPfb", K, i(e)),
                    a(e, "mapNode", Q, i(e)),
                    a(e, "selectedPanel", Y, i(e)),
                    a(e, "taskPanel", Z, i(e)),
                    a(e, "generalItem", $, i(e)),
                    a(e, "generalLayer", tt, i(e)),
                    a(e, "chainBtn", et, i(e)),
                    a(e, "flawlessBtn", nt, i(e)),
                    a(e, "resetBtn", at, i(e)),
                    e.layers = [],
                    e.selectCards = [],
                    e.mapItems = [],
                    e.taskList = [],
                    e
                }
                n(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    this.taskList = new Array(C).fill(null),
                    this.onUiEvent(P.initGame, this.initGame),
                    this.onUiEvent(P.selectItem, this.selectItem),
                    this.onUiEvent(P.taskComplete, this.taskComplete),
                    this.onUiEvent(P.updateMap, this.updateMap),
                    this.onUiEvent(P.updateSelect, this.updateSelectItem),
                    this.onUiEvent(P.resetMap, this.resetMap),
                    this.onUiEvent(P.gameResult, this.onGameResult),
                    this.onUiEvent(P.collectGeneral, this.onCollectGeneral),
                    this.onUiEvent(P.openShareProp, this.openPropShare),
                    this.onUiEvent(P.updatePropCount, this.updatePropCount);
                    for (var t = 0; t < I; t++)
                        this.layers.push(this.mapNode.getChildByName("Layer_" + t));
                    this.chainBtn.on(u.EventType.TOUCH_END, this.onChain, this),
                    this.flawlessBtn.on(u.EventType.TOUCH_END, this.onFlawless, this),
                    this.resetBtn.on(u.EventType.TOUCH_END, this.onReset, this)
                }
                ,
                s.start = function() {
                    v.initGame(),
                    this.updatePropCount()
                }
                ,
                s.initGame = function(t) {
                    var e = this
                      , n = t.mapDataArr;
                    this.cleanMap(),
                    this.mapItems = [];
                    for (var a = 0; a < n.length; a++) {
                        for (var i = [], r = this.layers[a], s = 0; s < n[a].length; s++) {
                            for (var o = [], l = 0; l < n[a][s].length; l++) {
                                var u = n[a][s][l];
                                if (0 !== u) {
                                    var h = c(this.itemPfb);
                                    h.parent = r;
                                    var p = h.getComponent(k);
                                    p.init(a, s, l, u),
                                    p.updateState(n),
                                    o.push(p)
                                } else
                                    o.push(null)
                            }
                            i.push(o)
                        }
                        this.mapItems.push(i)
                    }
                    t.currentTaskList.forEach((function(t) {
                        e.addTask(t)
                    }
                    ));
                    var f = t.generalVal
                      , m = t.getGeneralStatus();
                    f && -1 === m && this.generalItem.init(f.r, f.c, f.id)
                }
                ,
                s.taskComplete = function(t, e) {
                    var n = this
                      , a = t.id
                      , i = this.taskList.findIndex((function(t) {
                        return t && t.taskId === a
                    }
                    ));
                    if (-1 !== i) {
                        var r = this.taskList[i];
                        h(r.node).to(.6, {
                            position: p(500, 0, 0)
                        }, {
                            easing: "quadOut"
                        }).call((function() {
                            r.node.removeFromParent()
                        }
                        )).start(),
                        this.taskList[i] = null
                    }
                    e && this.addTask(e),
                    this.scheduleOnce((function() {
                        n.updateSelectItem()
                    }
                    ), .3)
                }
                ,
                s.addTask = function(t) {
                    var e = this.taskList.findIndex((function(t) {
                        return null === t
                    }
                    ));
                    if (-1 !== e) {
                        var n = c(this.taskCartPfb);
                        n.parent = this.taskPanel,
                        n.setPosition(p(-500, 0, 0)),
                        h(n).to(.5, {
                            position: p(200 * (e - 1), 0, 0)
                        }, {
                            easing: "quadOut"
                        }).start();
                        var a = n.getComponent(w);
                        a.setTask(t.item_id, t.id),
                        this.taskList[e] = a
                    } else
                        f("任务列表已满")
                }
                ,
                s.selectItem = function(t, e, n, a) {
                    var i = this.mapItems[t][e][n];
                    if (i) {
                        var r = v.getMapData()
                          , s = 90 * (a - 3);
                        this.updateSelectItem(),
                        h(i.node).to(.3, {
                            position: p(s, 390, 0)
                        }, {
                            easing: "quadOut"
                        }).call((function() {
                            i.node.removeFromParent()
                        }
                        )).start();
                        for (var o = 0; o < this.mapItems.length; o++) {
                            var l = this.mapItems[o][e][n];
                            l && l.updateState(r)
                        }
                        this.generalItem.updateState(r)
                    }
                }
                ,
                s.updateSelectItem = function() {
                    for (var t, e = this, n = v.getSelectItems(), a = new Map, i = r(n); !(t = i()).done; ) {
                        var s, o = t.value;
                        a.set(o, (null != (s = a.get(o)) ? s : 0) + 1)
                    }
                    for (var l = [], u = function() {
                        var t, n = e.selectCards[p], i = n.itemIdVal, r = null != (t = a.get(i)) ? t : 0;
                        r > 0 ? (l.push(n),
                        a.set(i, r - 1)) : h(n.node).to(.2, {
                            scale: new m(0,0,0)
                        }).call((function() {
                            return n.node.destroy()
                        }
                        )).start()
                    }, p = this.selectCards.length - 1; p >= 0; p--)
                        u();
                    this.selectCards = l.reverse();
                    var f = [];
                    n.forEach((function(t, n) {
                        var a = e.selectCards.find((function(e) {
                            return e.itemIdVal === t && -1 === f.indexOf(e)
                        }
                        ));
                        if (!a) {
                            var i = c(e.itemCardPfb);
                            i.parent = e.selectedPanel,
                            (a = i.getComponent(U)).setItemSprite(t),
                            i.active = !1,
                            e.scheduleOnce((function() {
                                return i.active = !0
                            }
                            ), .3)
                        }
                        f.push(a)
                    }
                    )),
                    this.selectCards = f;
                    this.selectCards.forEach((function(t, e) {
                        var n = new m(87 * e - 262,0,0);
                        h(t.node).to(.3, {
                            position: n
                        }).start()
                    }
                    ))
                }
                ,
                s.updateMap = function() {
                    for (var t = v.getMapData(), e = 0; e < this.mapItems.length; e++)
                        for (var n = 0; n < this.mapItems[e].length; n++)
                            for (var a = 0; a < this.mapItems[e][n].length; a++) {
                                var i = this.mapItems[e][n][a];
                                0 === t[e][n][a] && i ? (i.node.removeFromParent(),
                                this.mapItems[e][n][a] = null) : i && i.updateState(t)
                            }
                    this.generalItem.updateState(t)
                }
                ,
                s.onGameResult = function(t, e) {
                    this.pageManager.showUI(E.RESULT, G.TOP, (function(n) {
                        var a = n.getComponent(L);
                        switch (t) {
                        case "win":
                            a && a.showWin(e);
                            break;
                        case "lose":
                            a && a.showLose();
                            break;
                        case "revival":
                            a && a.showRevival()
                        }
                    }
                    ))
                }
                ,
                s.onCollectGeneral = function(t) {
                    this.generalItem && (M.playSFX("collect"),
                    this.generalItem.collect(t))
                }
                ,
                s.cleanMap = function() {
                    var t = this;
                    if (this.taskList.forEach((function(e, n) {
                        e && (e.node.removeFromParent(),
                        t.taskList[n] = null)
                    }
                    )),
                    this.selectCards.forEach((function(t) {
                        t.node.removeFromParent()
                    }
                    )),
                    this.selectCards = [],
                    0 != this.mapItems.length) {
                        for (var e = 0; e < this.mapItems.length; e++)
                            for (var n = 0; n < this.mapItems[e].length; n++)
                                for (var a = 0; a < this.mapItems[e][n].length; a++)
                                    this.mapItems[e][n][a] && (this.mapItems[e][n][a].node.removeFromParent(),
                                    this.mapItems[e][n][a] = null);
                        this.generalItem.cleanUp()
                    }
                }
                ,
                s.checkUseProp = function(t) {
                    return !(M.getPropUseCount(t) >= b) || (B.showTip("今天次数已用尽~"),
                    !1)
                }
                ,
                s.onChain = function() {
                    this.checkUseProp(y.chain) && v.checkUseChain()
                }
                ,
                s.onFlawless = function() {
                    v.checkUseFlawless()
                }
                ,
                s.onReset = function() {
                    this.checkUseProp(y.reset) && v.checkUseReset()
                }
                ,
                s.resetMap = function() {
                    var t = this
                      , e = []
                      , n = [this.generalLayer];
                    this.layers.forEach((function(t, a) {
                        a % 2 == 0 ? e.push(t) : n.push(t)
                    }
                    )),
                    e.forEach((function(t) {
                        h(t).to(1.5, {
                            angle: 720
                        }).call((function() {
                            t.angle = 0
                        }
                        )).start()
                    }
                    )),
                    n.forEach((function(t) {
                        h(t).to(1.5, {
                            angle: -720
                        }).call((function() {
                            t.angle = 0
                        }
                        )).start()
                    }
                    )),
                    this.scheduleOnce((function() {
                        for (var e = v.getMapData(), n = 0; n < t.mapItems.length; n++)
                            for (var a = 0; a < t.mapItems[n].length; a++)
                                for (var i = 0; i < t.mapItems[n][a].length; i++) {
                                    var r = t.mapItems[n][a][i]
                                      , s = e[n][a][i];
                                    r && s && r.init(n, a, i, s)
                                }
                        var o = v.getGeneralData();
                        o && t.generalItem.resetPos(o.r, o.c)
                    }
                    ), .75)
                }
                ,
                s.openPropShare = function(t) {
                    this.pageManager.showUI(E.PROPGET, G.TOP, (function(e) {
                        var n = e.getComponent(S);
                        n && n.show(t)
                    }
                    ))
                }
                ,
                s.updatePropCount = function() {
                    [{
                        node: this.flawlessBtn,
                        count: M.getPropUseCount(y.flawless)
                    }, {
                        node: this.chainBtn,
                        count: M.getPropUseCount(y.chain)
                    }, {
                        node: this.resetBtn,
                        count: M.getPropUseCount(y.reset)
                    }].forEach((function(t) {
                        var e = t.count
                          , n = t.node.getChildByName("RedBg");
                        e >= b ? n.active = !1 : n.getChildByName("Count").getComponent(d).string = (b - Math.max(0, e)).toString()
                    }
                    ))
                }
                ,
                e
            }(g)).prototype, "itemPfb", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            J = e(W.prototype, "itemCardPfb", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            K = e(W.prototype, "taskCartPfb", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Q = e(W.prototype, "mapNode", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Y = e(W.prototype, "selectedPanel", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Z = e(W.prototype, "taskPanel", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            $ = e(W.prototype, "generalItem", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            tt = e(W.prototype, "generalLayer", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            et = e(W.prototype, "chainBtn", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            nt = e(W.prototype, "flawlessBtn", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            at = e(W.prototype, "resetBtn", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            j = W)) || j));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GeneralItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./utils.ts", "./GameControl.ts"], (function(e) {
    var t, n, i, o, r, a, s, l, c, p, u, h, f, g, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            a = e._decorator,
            s = e.Sprite,
            l = e.Node,
            c = e.Vec3,
            p = e.tween,
            u = e.Color
        }
        , function(e) {
            h = e.UiBase
        }
        , function(e) {
            f = e.getPropTopItem,
            g = e.getGeneralSprite
        }
        , function(e) {
            d = e.gameControl
        }
        ],
        execute: function() {
            var w, S, v, y, m;
            r._RF.push({}, "f086bcsE81Axq5de8D8aUVF", "GeneralItem", void 0);
            var G = a.ccclass
              , P = a.property;
            e("GeneralItem", (w = G("GeneralItem"),
            S = P(s),
            w((m = t((y = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    i(t, "generalSprite", m, o(t)),
                    t.row = -1,
                    t.col = -1,
                    t
                }
                n(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    this.generalSprite.node.on(l.EventType.TOUCH_END, this.clickGeneral, this)
                }
                ,
                r.init = function(e, t, n) {
                    this.node.active = !0,
                    this.row = e,
                    this.col = t,
                    this.node.setPosition(new c(90 * (t - 3),90 * (3 - e),0)),
                    this.setPropSprite(n)
                }
                ,
                r.collect = function(e) {
                    var t = this;
                    e ? p(this.node).to(.2, {
                        scale: new c(0,0,0)
                    }).call((function() {
                        t.cleanUp()
                    }
                    )).start() : p(this.node).to(.2, {
                        scale: new c(1.5,1.5,1)
                    }).repeat(2, p().to(.1, {
                        angle: 15
                    }).to(.2, {
                        angle: -15
                    }).to(.1, {
                        angle: 0
                    })).call((function() {
                        t.generalSprite.grayscale = !0
                    }
                    )).to(.2, {
                        scale: new c(1,1,1)
                    }).start()
                }
                ,
                r.resetPos = function(e, t) {
                    this.row = e,
                    this.col = t,
                    this.node.setPosition(new c(90 * (t - 3),90 * (3 - e),0))
                }
                ,
                r.updateState = function(e) {
                    if (!1 !== this.node.active) {
                        var t = f(-1, this.row, this.col, e);
                        this.setVisibilityState(t.length)
                    }
                }
                ,
                r.clickGeneral = function() {
                    d.clickGeneralItem()
                }
                ,
                r.cleanUp = function() {
                    this.row = -1,
                    this.col = -1,
                    this.node.scale = new c(1,1,1),
                    this.node.active = !1,
                    this.generalSprite.grayscale = !1
                }
                ,
                r.setPropSprite = function(e) {
                    var t = this;
                    g(e).then((function(e) {
                        t.generalSprite.spriteFrame = e
                    }
                    ))
                }
                ,
                r.setVisibilityState = function(e) {
                    this.generalSprite.color = 0 == e ? new u(255,255,255,255) : 1 == e ? new u(120,120,120,255) : 2 == e ? new u(60,60,60,255) : new u(0,0,0,255)
                }
                ,
                t
            }(h)).prototype, "generalSprite", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = y)) || v));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GeneralModel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonFun.ts", "./api.ts"], (function(e) {
    var n, t, r, a, o, u;
    return {
        setters: [function(e) {
            n = e.createClass,
            t = e.asyncToGenerator,
            r = e.regeneratorRuntime
        }
        , function(e) {
            a = e.cclegacy
        }
        , function(e) {
            o = e.loadJson
        }
        , function(e) {
            u = e.Api
        }
        ],
        execute: function() {
            a._RF.push({}, "3912dyLZktLC6WxW0LYIQop", "GeneralModel", void 0);
            e("GeneralModel", function() {
                function e() {
                    this.generalConfig = void 0,
                    this.myGeneral = [],
                    this.greenDragonBladeNum = 0
                }
                var a = e.prototype;
                return a.initConfig = function() {
                    var e = this;
                    o("json/general").then((function(n) {
                        e.generalConfig = n
                    }
                    ))
                }
                ,
                a.updateGeneral = function() {
                    var e = t(r().mark((function e() {
                        var n, t = this;
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    u.getGeneral();
                                case 2:
                                    n = e.sent,
                                    this.myGeneral = [],
                                    n.data.general && n.data.general.forEach((function(e) {
                                        t.myGeneral.push(e.generalId)
                                    }
                                    ));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                a.updateGreenDragonNum = function() {
                    var e = t(r().mark((function e() {
                        var n;
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    u.getQldCount();
                                case 2:
                                    return n = e.sent.data,
                                    this.greenDragonBladeNum = n.num,
                                    e.abrupt("return", this.greenDragonBladeNum);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                n(e, [{
                    key: "generalConfigVal",
                    get: function() {
                        return this.generalConfig
                    }
                }, {
                    key: "myGeneralList",
                    get: function() {
                        return this.myGeneral
                    }
                }, {
                    key: "greenDragonBladeNumVal",
                    get: function() {
                        return this.greenDragonBladeNum
                    }
                }]),
                e
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GeneralPopup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./utils.ts", "./UserControl.ts", "./GameConst.ts", "./UiConfig.ts", "./PageManager.ts"], (function(e) {
    var n, t, i, r, a, o, l, u, c, s, p, g, f, h, b, m;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            i = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            o = e._decorator,
            l = e.Node,
            u = e.Sprite,
            c = e.Label
        }
        , function(e) {
            s = e.UiBase
        }
        , function(e) {
            p = e.getGeneralSprite,
            g = e.getGeneralText
        }
        , function(e) {
            f = e.userControl
        }
        , function(e) {
            h = e.eGeneralType
        }
        , function(e) {
            b = e.UI_PATH
        }
        , function(e) {
            m = e.UILayer
        }
        ],
        execute: function() {
            var d, y, w, G, v, N, B, D, z, C, T, U, E, L, S, F, P, _, M, H, I, O, k, A, x, R, j, q, V, W, Y;
            a._RF.push({}, "2d220VW1FxEq6OStc3Y8duy", "GeneralPopup", void 0);
            var J = o.ccclass
              , K = o.property;
            e("GeneralPopup", (d = J("GeneralPopup"),
            y = K(l),
            w = K(l),
            G = K(u),
            v = K(u),
            N = K(u),
            B = K(l),
            D = K(u),
            z = K(u),
            C = K(u),
            T = K(u),
            U = K(c),
            E = K(l),
            L = K(l),
            S = K(l),
            d((_ = n((P = function(e) {
                function n() {
                    for (var n, t = arguments.length, a = new Array(t), o = 0; o < t; o++)
                        a[o] = arguments[o];
                    return n = e.call.apply(e, [this].concat(a)) || this,
                    i(n, "maskBg", _, r(n)),
                    i(n, "newGeneralNode", M, r(n)),
                    i(n, "newGeneralSprite", H, r(n)),
                    i(n, "newGeneralName", I, r(n)),
                    i(n, "newGeneralDesc", O, r(n)),
                    i(n, "generalNode", k, r(n)),
                    i(n, "generalSprite", A, r(n)),
                    i(n, "generalName", x, r(n)),
                    i(n, "generalDesc", R, r(n)),
                    i(n, "strategy", j, r(n)),
                    i(n, "countLab", q, r(n)),
                    i(n, "addCampBtn", V, r(n)),
                    i(n, "goGameBtn", W, r(n)),
                    i(n, "closeBtn", Y, r(n)),
                    n
                }
                t(n, e);
                var a = n.prototype;
                return a.onLoad = function() {
                    this.addCampBtn.on(l.EventType.TOUCH_END, this.hide, this),
                    this.goGameBtn.on(l.EventType.TOUCH_END, this.goGame, this),
                    this.maskBg.on(l.EventType.TOUCH_END, this.hide, this),
                    this.closeBtn.on(l.EventType.TOUCH_END, this.hide, this)
                }
                ,
                a.showNewGeneral = function(e) {
                    var n = this;
                    this.node.active = !0,
                    this.newGeneralNode.active = !0,
                    this.generalNode.active = !1,
                    p(e).then((function(e) {
                        n.newGeneralSprite.spriteFrame = e
                    }
                    )),
                    g(e, "desc").then((function(e) {
                        n.newGeneralDesc.spriteFrame = e
                    }
                    )),
                    g(e, "name").then((function(e) {
                        n.newGeneralName.spriteFrame = e
                    }
                    ))
                }
                ,
                a.showGeneral = function(e, n) {
                    var t = this;
                    this.node.active = !0,
                    this.newGeneralNode.active = !1,
                    this.generalNode.active = !0,
                    this.generalDesc.node.active = !1,
                    this.strategy.node.active = !1,
                    this.countLab.node.active = !1,
                    this.goGameBtn.active = !1,
                    p(e).then((function(e) {
                        t.generalSprite.spriteFrame = e
                    }
                    )),
                    g(e, "name").then((function(e) {
                        t.generalName.spriteFrame = e
                    }
                    )),
                    n ? (this.generalDesc.node.active = !0,
                    g(e, "desc").then((function(e) {
                        t.generalDesc.spriteFrame = e
                    }
                    ))) : (this.strategy.node.active = !0,
                    this.goGameBtn.active = !0,
                    g(e, "strategy").then((function(e) {
                        t.strategy.spriteFrame = e
                    }
                    )),
                    e === h.guanyu && f.getGreenDragonBladeNum().then((function(e) {
                        t.countLab.string = e.toString(),
                        t.countLab.node.active = !0
                    }
                    )))
                }
                ,
                a.hide = function() {
                    this.node.active = !1
                }
                ,
                a.goGame = function() {
                    var e = this;
                    this.pageManager.showUI(b.GAME, m.MIDDLE, (function() {
                        e.pageManager.removeUI(b.CAMP)
                    }
                    ))
                }
                ,
                n
            }(s)).prototype, "maskBg", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = n(P.prototype, "newGeneralNode", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            H = n(P.prototype, "newGeneralSprite", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = n(P.prototype, "newGeneralName", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = n(P.prototype, "newGeneralDesc", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = n(P.prototype, "generalNode", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            A = n(P.prototype, "generalSprite", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = n(P.prototype, "generalName", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = n(P.prototype, "generalDesc", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            j = n(P.prototype, "strategy", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            q = n(P.prototype, "countLab", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            V = n(P.prototype, "addCampBtn", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            W = n(P.prototype, "goGameBtn", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Y = n(P.prototype, "closeBtn", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = P)) || F));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/HomePage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./CommonFun.ts", "./UiConfig.ts", "./PageManager.ts", "./UserControl.ts", "./utils.ts"], (function(n) {
    var e, t, r, i, a, o, u, s, l, p, c, f, g, h, m, d;
    return {
        setters: [function(n) {
            e = n.applyDecoratedDescriptor,
            t = n.inheritsLoose,
            r = n.initializerDefineProperty,
            i = n.assertThisInitialized
        }
        , function(n) {
            a = n.cclegacy,
            o = n._decorator,
            u = n.Sprite,
            s = n.Node,
            l = n.SpriteFrame,
            p = n.resources
        }
        , function(n) {
            c = n.UiBase
        }
        , function(n) {
            f = n.playFrameAnimation
        }
        , function(n) {
            g = n.UI_PATH
        }
        , function(n) {
            h = n.UILayer
        }
        , function(n) {
            m = n.userControl
        }
        , function(n) {
            d = n.shareGame
        }
        ],
        execute: function() {
            var b, y, B, S, v, E, U, w, C, T, D, I, M, H, P, _, z, L, O;
            a._RF.push({}, "d9a82ntlFZIl4u3aTseeVuy", "HomePage", void 0);
            var G = o.ccclass
              , N = o.property;
            n("HomePage", (b = G("HomePage"),
            y = N(u),
            B = N(s),
            S = N(s),
            v = N(s),
            E = N(s),
            U = N(s),
            w = N(s),
            C = N(l),
            b((I = e((D = function(n) {
                function e() {
                    for (var e, t = arguments.length, a = new Array(t), o = 0; o < t; o++)
                        a[o] = arguments[o];
                    return e = n.call.apply(n, [this].concat(a)) || this,
                    r(e, "bgSprite", I, i(e)),
                    r(e, "campBtn", M, i(e)),
                    r(e, "rewardBtn", H, i(e)),
                    r(e, "startGameBtn", P, i(e)),
                    r(e, "shareBtn", _, i(e)),
                    r(e, "soundBtn", z, i(e)),
                    r(e, "ruleBtn", L, i(e)),
                    r(e, "soundSprites", O, i(e)),
                    e
                }
                t(e, n);
                var a = e.prototype;
                return a.onLoad = function() {
                    var n = this;
                    this.campBtn.on(s.EventType.TOUCH_END, this.goCamp, this),
                    this.startGameBtn.on(s.EventType.TOUCH_END, this.onStartGame, this),
                    this.rewardBtn.on(s.EventType.TOUCH_END, (function() {
                        n.pageManager.showUI(g.REWARD)
                    }
                    )),
                    this.shareBtn.on(s.EventType.TOUCH_END, d),
                    this.soundBtn.on(s.EventType.TOUCH_END, this.onClickSound, this),
                    this.ruleBtn.on(s.EventType.TOUCH_END, (function() {
                        n.pageManager.showUI(g.RULE, h.TOP)
                    }
                    )),
                    this.updateSoundState()
                }
                ,
                a.onEnable = function() {
                    m.isLoginVal ? m.initBaseData() : this.pageManager.showUI(g.LOGIN, h.TOP)
                }
                ,
                a.start = function() {
                    var n = this;
                    p.loadDir("animation/mainBg", l, (function(e, t) {
                        e ? console.error(e) : (t.sort((function(n, e) {
                            return n.name.localeCompare(e.name)
                        }
                        )),
                        f(n.bgSprite, t, 25, !0).play())
                    }
                    ))
                }
                ,
                a.onStartGame = function() {
                    var n = this;
                    this.pageManager.showUI(g.GAME, h.MIDDLE, (function() {
                        n.pageManager.removeUI(n.node)
                    }
                    ))
                }
                ,
                a.onClickSound = function() {
                    var n = m.getSoundEnabled();
                    m.setSoundEnabled(!n),
                    this.updateSoundState()
                }
                ,
                a.updateSoundState = function() {
                    var n = m.getSoundEnabled()
                      , e = this.soundBtn.getComponent(u);
                    e && (e.spriteFrame = this.soundSprites[n ? 0 : 1]),
                    m.updatePlayBgmState()
                }
                ,
                a.goCamp = function() {
                    var n = this;
                    this.pageManager.showUI(g.CAMP, h.MIDDLE, (function() {
                        n.pageManager.removeUI(n.node)
                    }
                    ))
                }
                ,
                e
            }(c)).prototype, "bgSprite", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = e(D.prototype, "campBtn", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            H = e(D.prototype, "rewardBtn", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = e(D.prototype, "startGameBtn", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = e(D.prototype, "shareBtn", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = e(D.prototype, "soundBtn", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = e(D.prototype, "ruleBtn", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = e(D.prototype, "soundSprites", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            T = D)) || T));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/HttpClient.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./HttpManager.ts"], (function(t) {
    var e, n, r;
    return {
        setters: [function(t) {
            e = t.extends
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            r = t.HttpManager
        }
        ],
        execute: function() {
            n._RF.push({}, "b9930bOCINCApyHlqmfdEr7", "HttpClient", void 0);
            var i = t("HttpClient", function() {
                function t() {}
                return t.init = function(t) {
                    this.endpoints.has(this.defaultEndpoint) || ((new r).setBaseUrl(t),
                    this.register({
                        baseUrl: t
                    }, this.defaultEndpoint))
                }
                ,
                t.getManager = function(t) {
                    var e = t || this.defaultEndpoint
                      , n = this.endpoints.get(e);
                    if (!n)
                        throw new Error("HTTP端点 '" + e + "' 不存在");
                    return n
                }
                ,
                t.register = function(t, n) {
                    var i = n || this.defaultEndpoint;
                    if (this.endpoints.has(i))
                        throw new Error("HTTP端点 '" + i + "' 已经存在");
                    var s = new r;
                    s.setBaseUrl(t.baseUrl),
                    t.headers && s.addRequestInterceptor((function(n) {
                        return n.headers = e({}, n.headers, t.headers),
                        n
                    }
                    )),
                    t.timeout && s.addRequestInterceptor((function(e) {
                        return e.timeout || (e.timeout = t.timeout),
                        e
                    }
                    )),
                    this.endpoints.set(i, s),
                    1 === this.endpoints.size && (this.defaultEndpoint = i)
                }
                ,
                t.setDefaultEndpoint = function(t) {
                    this.endpoints.has(t) ? this.defaultEndpoint = t : console.error("HTTP端点 '" + t + "' 不存在")
                }
                ,
                t.getEndpoint = function(t) {
                    var e = t || this.defaultEndpoint
                      , n = this.endpoints.get(e);
                    if (!n)
                        throw new Error("HTTP端点 '" + e + "' 不存在");
                    return n
                }
                ,
                t.getEndpointNames = function() {
                    return Array.from(this.endpoints.keys())
                }
                ,
                t.setBaseUrl = function(t) {
                    this.getManager().setBaseUrl(t)
                }
                ,
                t.addRequestInterceptor = function(t, e, n) {
                    return this.getManager(n).addRequestInterceptor(t, e)
                }
                ,
                t.addResponseInterceptor = function(t, e, n) {
                    return this.getManager(n).addResponseInterceptor(t, e)
                }
                ,
                t.get = function(t, e, n, r) {
                    return this.getManager(r).get(t, e, n)
                }
                ,
                t.post = function(t, e, n, r) {
                    return this.getManager(r).post(t, e, n)
                }
                ,
                t.put = function(t, e, n, r) {
                    return this.getManager(r).put(t, e, n)
                }
                ,
                t.delete = function(t, e, n, r) {
                    return this.getManager(r).delete(t, e, n)
                }
                ,
                t
            }());
            i.endpoints = new Map,
            i.defaultEndpoint = "default",
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/HttpManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./HttpService.ts"], (function(e) {
    var t, r, n, s, o, u, c;
    return {
        setters: [function(e) {
            t = e.extends,
            r = e.asyncToGenerator,
            n = e.regeneratorRuntime,
            s = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            o = e.cclegacy
        }
        , function(e) {
            u = e.HttpMethod,
            c = e.HttpService
        }
        ],
        execute: function() {
            o._RF.push({}, "951a3HGqmhB4qczSgf+Wpw0", "HttpManager", void 0);
            e("HttpManager", function() {
                function e() {
                    this.httpService = void 0,
                    this.requestInterceptors = [],
                    this.responseInterceptors = [],
                    this.baseUrl = "",
                    this.httpService = new c
                }
                var o = e.prototype;
                return o.setBaseUrl = function(e) {
                    this.baseUrl = e
                }
                ,
                o.getBaseUrl = function() {
                    return this.baseUrl
                }
                ,
                o.addRequestInterceptor = function(e, t) {
                    var r = {
                        onFulfilled: e,
                        onRejected: t
                    };
                    return this.requestInterceptors.push(r),
                    this.requestInterceptors.length - 1
                }
                ,
                o.addResponseInterceptor = function(e, t) {
                    var r = {
                        onFulfilled: e,
                        onRejected: t
                    };
                    return this.responseInterceptors.push(r),
                    this.responseInterceptors.length - 1
                }
                ,
                o.removeRequestInterceptor = function(e) {
                    e >= 0 && e < this.requestInterceptors.length && (this.requestInterceptors[e] = {})
                }
                ,
                o.removeResponseInterceptor = function(e) {
                    e >= 0 && e < this.responseInterceptors.length && (this.responseInterceptors[e] = {})
                }
                ,
                o.clearInterceptors = function() {
                    this.requestInterceptors = [],
                    this.responseInterceptors = []
                }
                ,
                o.request = function() {
                    var e = r(n().mark((function e(r) {
                        var o, u, c, i, a, p, h, l, f, d, v, I, b;
                        return n().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.baseUrl && !r.url.startsWith("http") && (r.url = this.baseUrl + (this.baseUrl.endsWith("/") || r.url.startsWith("/") ? "" : "/") + r.url),
                                    e.prev = 1,
                                    o = t({}, r),
                                    u = s(this.requestInterceptors);
                                case 4:
                                    if ((c = u()).done) {
                                        e.next = 12;
                                        break
                                    }
                                    if (!(i = c.value).onFulfilled) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 9,
                                    i.onFulfilled(o);
                                case 9:
                                    o = e.sent;
                                case 10:
                                    e.next = 4;
                                    break;
                                case 12:
                                    return e.next = 14,
                                    this.httpService.request(o);
                                case 14:
                                    a = e.sent,
                                    p = t({}, a),
                                    h = s(this.responseInterceptors);
                                case 17:
                                    if ((l = h()).done) {
                                        e.next = 25;
                                        break
                                    }
                                    if (!(f = l.value).onFulfilled) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 22,
                                    f.onFulfilled(p);
                                case 22:
                                    p = e.sent;
                                case 23:
                                    e.next = 17;
                                    break;
                                case 25:
                                    return e.abrupt("return", p);
                                case 28:
                                    e.prev = 28,
                                    e.t0 = e.catch(1),
                                    d = e.t0,
                                    v = s(this.responseInterceptors);
                                case 32:
                                    if ((I = v()).done) {
                                        e.next = 40;
                                        break
                                    }
                                    if (!(b = I.value).onRejected) {
                                        e.next = 38;
                                        break
                                    }
                                    return e.next = 37,
                                    b.onRejected(d);
                                case 37:
                                    d = e.sent;
                                case 38:
                                    e.next = 32;
                                    break;
                                case 40:
                                    throw d;
                                case 41:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 28]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.get = function(e, r, n) {
                    return this.request(t({
                        url: e,
                        method: u.GET,
                        data: r
                    }, n))
                }
                ,
                o.post = function(e, r, n) {
                    return this.request(t({
                        url: e,
                        method: u.POST,
                        data: r
                    }, n))
                }
                ,
                o.put = function(e, r, n) {
                    return this.request(t({
                        url: e,
                        method: u.PUT,
                        data: r
                    }, n))
                }
                ,
                o.delete = function(e, r, n) {
                    return this.request(t({
                        url: e,
                        method: u.DELETE,
                        data: r
                    }, n))
                }
                ,
                e
            }());
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/HttpService.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, n;
    return {
        setters: [function(e) {
            t = e.extends
        }
        , function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "b52a4kbzB9PXZBGgKtzvjX2", "HttpService", void 0);
            var o = e("HttpMethod", function(e) {
                return e.GET = "GET",
                e.POST = "POST",
                e.PUT = "PUT",
                e.DELETE = "DELETE",
                e
            }({}));
            e("HttpService", function() {
                function e() {
                    this.defaultTimeout = 1e4,
                    this.defaultHeaders = {
                        "Content-Type": "application/json"
                    }
                }
                var n = e.prototype;
                return n.request = function(e) {
                    var n = this
                      , r = e.url
                      , s = e.method
                      , a = void 0 === s ? o.GET : s
                      , u = e.data
                      , i = void 0 === u ? null : u
                      , c = e.headers
                      , d = void 0 === c ? {} : c
                      , f = e.timeout
                      , l = void 0 === f ? this.defaultTimeout : f
                      , p = e.responseType
                      , v = void 0 === p ? "json" : p
                      , h = e.onProgress
                      , g = void 0 === h ? null : h
                      , m = e.abortSignal
                      , y = void 0 === m ? null : m;
                    return new Promise((function(s, u) {
                        var c = r;
                        a === o.GET && i && "object" == typeof i && (c = n.buildQueryUrl(r, i));
                        var f = new XMLHttpRequest;
                        f.open(a, c, !0),
                        f.responseType = v,
                        f.timeout = l;
                        var p = t({}, n.defaultHeaders, d);
                        if (Object.keys(p).forEach((function(e) {
                            f.setRequestHeader(e, p[e])
                        }
                        )),
                        g && "function" == typeof g && (f.onprogress = function(e) {
                            e.lengthComputable && g(e.loaded, e.total)
                        }
                        ),
                        y && y.addEventListener("abort", (function() {
                            f.abort(),
                            u(new Error("Request aborted"))
                        }
                        )),
                        f.onreadystatechange = function() {
                            if (4 === f.readyState) {
                                var t = {};
                                f.getAllResponseHeaders().split("\r\n").forEach((function(e) {
                                    var n = e.indexOf(": ");
                                    if (n > 0) {
                                        var o = e.substring(0, n)
                                          , r = e.substring(n + 2);
                                        t[o] = r
                                    }
                                }
                                )),
                                f.status >= 200 && f.status < 300 ? s({
                                    data: f.response,
                                    status: f.status,
                                    headers: t,
                                    config: e
                                }) : u({
                                    data: f.response,
                                    status: f.status,
                                    headers: t,
                                    config: e,
                                    message: "Request failed with status code " + f.status
                                })
                            }
                        }
                        ,
                        f.onerror = function() {
                            u({
                                data: null,
                                status: 0,
                                headers: {},
                                config: e,
                                message: "Network Error"
                            })
                        }
                        ,
                        f.ontimeout = function() {
                            u({
                                data: null,
                                status: 0,
                                headers: {},
                                config: e,
                                message: "Timeout of " + l + "ms exceeded"
                            })
                        }
                        ,
                        a !== o.GET && i) {
                            var h = i;
                            "object" != typeof i || i instanceof FormData || i instanceof ArrayBuffer || (h = JSON.stringify(i)),
                            f.send(h)
                        } else
                            f.send()
                    }
                    ))
                }
                ,
                n.buildQueryUrl = function(e, t) {
                    var n = [];
                    if (Object.keys(t).forEach((function(e) {
                        var o = t[e];
                        null != o && (Array.isArray(o) ? o.forEach((function(t) {
                            n.push(encodeURIComponent(e) + "[]=" + encodeURIComponent(t))
                        }
                        )) : "object" == typeof o ? n.push(encodeURIComponent(e) + "=" + encodeURIComponent(JSON.stringify(o))) : n.push(encodeURIComponent(e) + "=" + encodeURIComponent(o)))
                    }
                    )),
                    0 === n.length)
                        return e;
                    var o = e.includes("?") ? "&" : "?";
                    return "" + e + o + n.join("&")
                }
                ,
                e
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Interface.ts", ["cc"], (function() {
    var e;
    return {
        setters: [function(n) {
            e = n.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "fbd2fnVUXxLrrnCD1SF97nW", "Interface", void 0),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ItemCard.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./utils.ts"], (function(t) {
    var e, i, r, n, a, o, c, s, u, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            r = t.initializerDefineProperty,
            n = t.assertThisInitialized,
            a = t.createClass
        }
        , function(t) {
            o = t.cclegacy,
            c = t._decorator,
            s = t.Sprite
        }
        , function(t) {
            u = t.UiBase
        }
        , function(t) {
            p = t.getItemSprite
        }
        ],
        execute: function() {
            var l, f, m, d, I;
            o._RF.push({}, "1f8e4IzNrxNfpQ1evPIdh9e", "ItemCard", void 0);
            var h = c.ccclass
              , y = c.property;
            t("ItemCard", (l = h("ItemCard"),
            f = y(s),
            l((I = e((d = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                        a[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    r(e, "itemSprite", I, n(e)),
                    e.itemId = 0,
                    e
                }
                return i(e, t),
                e.prototype.setItemSprite = function(t) {
                    var e = this;
                    this.itemId = t,
                    p(t, "icon").then((function(t) {
                        e.itemSprite.spriteFrame = t
                    }
                    ))
                }
                ,
                a(e, [{
                    key: "itemIdVal",
                    get: function() {
                        return this.itemId
                    }
                }]),
                e
            }(u)).prototype, "itemSprite", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = d)) || m));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LoadingPage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./UiConfig.ts", "./UserControl.ts", "./BundleManager.ts", "./CommonFun.ts", "./GameConst.ts", "./wxApi.ts", "./api.ts"], (function(e) {
    var t, o, n, i, a, r, s, c, l, p, u, g, d, f, h, m, y, b, v, L;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            r = e._decorator,
            s = e.ProgressBar,
            c = e.Node,
            l = e.Label,
            p = e.tween
        }
        , function(e) {
            u = e.UiBase
        }
        , function(e) {
            g = e.UI_PATH
        }
        , function(e) {
            d = e.userControl
        }
        , function(e) {
            f = e.BundleManager
        }
        , function(e) {
            h = e.isWeiXin,
            m = e.getUrlParam,
            y = e.loadWxScript
        }
        , function(e) {
            b = e.eLoginType
        }
        , function(e) {
            v = e.WxApi
        }
        , function(e) {
            L = e.Api
        }
        ],
        execute: function() {
            var w, x, C, A, B, U, S, I, P;
            a._RF.push({}, "6bb68oOwUFAdqhew/15AhEe", "LoadingPage", void 0);
            var _ = r.ccclass
              , D = r.property;
            e("LoadingPage", (w = _("LoadingPage"),
            x = D(s),
            C = D(c),
            A = D(l),
            w((S = t((U = function(e) {
                function t() {
                    for (var t, o = arguments.length, a = new Array(o), r = 0; r < o; r++)
                        a[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    n(t, "progressBar", S, i(t)),
                    n(t, "tagNode", I, i(t)),
                    n(t, "tipLab", P, i(t)),
                    t
                }
                o(t, e);
                var a = t.prototype;
                return a.onLoad = function() {
                    var e = this;
                    if (h()) {
                        var t = m("code");
                        if (!t)
                            return void this.redirect();
                        d.setLoginType(b.wx),
                        this.loadWxConfig(),
                        L.loginWx({
                            code: t
                        }).then((function(t) {
                            d.login(),
                            localStorage.setItem("token", t.data.token),
                            e.loadResources()
                        }
                        )).catch((function(t) {
                            -202 == t.code && e.redirect()
                        }
                        ))
                    } else
                        d.setLoginType(b.default),
                        this.loadResources()
                }
                ,
                a.loadResources = function() {
                    var e = this;
                    this.progressBar.progress = 0,
                    this.tagNode.active = !0,
                    p(this.tagNode).by(1.5, {
                        angle: -360
                    }).repeatForever().start(),
                    f.getBundle().loadDir("/", (function(t, o, n) {
                        if (o > 0) {
                            var i = t / o;
                            if (e.progressBar.progress < i) {
                                e.progressBar.progress = i;
                                var a = 513 * i - 255;
                                e.tagNode.x = a
                            }
                        }
                    }
                    ), (function(t, o) {
                        t ? console.error("资源加载失败:", t) : (console.log("资源加载完成，共加载资源数:", o.length),
                        e.onLoadComplete())
                    }
                    ))
                }
                ,
                a.onLoadComplete = function() {
                    this.pageManager.showUI(g.HOME),
                    this.pageManager.removeUI(this.node),
                    d.initConfigData()
                }
                ,
                a.redirect = function() {
                    var e = location.href.replace(/([?&])(code|state)=[^&]*/g, "$1").replace(/\?$/, "").replace(/[?&]+/g, "?").replace(/\?+$/, "")
                      , t = encodeURIComponent(e);
                    location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa18303ad360d1aa8&redirect_uri=" + t + "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"
                }
                ,
                a.loadWxConfig = function() {
                    v.init(),
                    y().then((function() {
                        v.getJsConfig({
                            url: encodeURIComponent(location.href)
                        }).then((function(e) {
                            var t = e.data;
                            console.log("获取JSSDK配置成功:", t),
                            wx.config({
                                debug: !1,
                                appId: t.appId,
                                timestamp: t.timestamp,
                                nonceStr: t.nonceStr,
                                signature: t.signature,
                                jsApiList: [].concat(t.jsApiList, ["updateAppMessageShareData"])
                            }),
                            wx.ready((function() {
                                wx.updateAppMessageShareData({
                                    title: "三国杀小游戏《木牛流马》，诸葛亮喊你来北伐",
                                    desc: "我正在帮助谋诸葛亮收集粮草，助力北伐！你也来试试吧！",
                                    link: location.origin + location.pathname,
                                    imgUrl: "https://ygdmy25-static.sanguosha.com/muniu/comm/share.png",
                                    success: function() {
                                        console.log("分享给朋友设置成功")
                                    }
                                })
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }(u)).prototype, "progressBar", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = t(U.prototype, "tagNode", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = t(U.prototype, "tipLab", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = U)) || B));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LoginPopup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./api.ts", "./UserControl.ts", "./TipControl.ts"], (function(t) {
    var o, i, n, e, c, r, l, a, s, u, g, d, p;
    return {
        setters: [function(t) {
            o = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            e = t.assertThisInitialized
        }
        , function(t) {
            c = t.cclegacy,
            r = t._decorator,
            l = t.EditBox,
            a = t.Button,
            s = t.error
        }
        , function(t) {
            u = t.UiBase
        }
        , function(t) {
            g = t.Api
        }
        , function(t) {
            d = t.userControl
        }
        , function(t) {
            p = t.tipControl
        }
        ],
        execute: function() {
            var h, f, B, k, m, S, b, w, L, x, y;
            c._RF.push({}, "b5c66ngx51BaJ0wFGepTuCh", "LoginPopup", void 0);
            var v = r.ccclass
              , I = r.property;
            t("LoginPopup", (h = v("LoginPopup"),
            f = I(l),
            B = I(l),
            k = I(a),
            m = I(a),
            h((w = o((b = function(t) {
                function o() {
                    for (var o, i = arguments.length, c = new Array(i), r = 0; r < i; r++)
                        c[r] = arguments[r];
                    return o = t.call.apply(t, [this].concat(c)) || this,
                    n(o, "idEditBox", w, e(o)),
                    n(o, "codeEditBox", L, e(o)),
                    n(o, "loginBtn", x, e(o)),
                    n(o, "ticketBtn", y, e(o)),
                    o._isAutoLogin = !1,
                    o
                }
                i(o, t);
                var c = o.prototype;
                return c.onLoad = function() {
                    this.loginBtn.node.on("click", this.onLoginBtnClick, this),
                    this.ticketBtn.node.on("click", this.onTicketBtnClick, this)
                }
                ,
                c.start = function() {
                    localStorage.getItem("guid") && (this.idEditBox.string = localStorage.getItem("guid")),
                    localStorage.getItem("gcode") && (this.codeEditBox.string = localStorage.getItem("gcode")),
                    localStorage.getItem("guid") && localStorage.getItem("gcode") && (this._isAutoLogin = !0,
                    this.onLoginBtnClick())
                }
                ,
                c.onLoginBtnClick = function() {
                    var t = this
                      , o = this.idEditBox.string
                      , i = this.codeEditBox.string;
                    o && i ? g.login({
                        uid: o,
                        code: i
                    }).then((function(n) {
                        localStorage.setItem("guid", o),
                        localStorage.setItem("gcode", i),
                        t.loginSuccess(n.data.token),
                        console.log("登录成功~~"),
                        console.log("res ===>", n)
                    }
                    )).catch((function() {
                        t._isAutoLogin && (t.codeEditBox.string = ""),
                        localStorage.removeItem("gcode"),
                        console.log("登录失败~~")
                    }
                    )) : s("请输入id和确认码")
                }
                ,
                c.onTicketBtnClick = function() {
                    var t = this;
                    window.showSgsPass((function(o) {
                        g.loginTicket({
                            ticket: o
                        }).then((function(o) {
                            t.loginSuccess(o.data.token),
                            window.hideSgsPass()
                        }
                        )).catch((function() {
                            window.hideSgsPass(),
                            p.showTip("登录失败~")
                        }
                        ))
                    }
                    ))
                }
                ,
                c.loginSuccess = function(t) {
                    localStorage.setItem("token", t),
                    this.removeFromPageManager(),
                    d.login(),
                    d.initBaseData()
                }
                ,
                o
            }(u)).prototype, "idEditBox", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = o(b.prototype, "codeEditBox", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = o(b.prototype, "loginBtn", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = o(b.prototype, "ticketBtn", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = b)) || S));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/main", ["./AppLifecycle.ts", "./AudioManager.ts", "./BundleManager.ts", "./EventDispatcher.ts", "./EventManager.ts", "./HttpClient.ts", "./HttpManager.ts", "./HttpService.ts", "./TimerManager.ts", "./TimerManager1.ts", "./AnimationPlayer.ts", "./PageManager.ts", "./Popup.ts", "./TipTemp.ts", "./UiBase.ts", "./CommonFun.ts", "./Queue.ts", "./GameCanvas.ts", "./api.ts", "./wxApi.ts", "./EventDefine.ts", "./GameConst.ts", "./Interface.ts", "./UiConfig.ts", "./GameControl.ts", "./TipControl.ts", "./UserControl.ts", "./GameModel.ts", "./GeneralModel.ts", "./UserInfoModel.ts", "./CampPage.ts", "./GameItem.ts", "./GamePage.ts", "./GeneralItem.ts", "./GeneralPopup.ts", "./HomePage.ts", "./ItemCard.ts", "./LoadingPage.ts", "./LoginPopup.ts", "./PropGetPopup.ts", "./RankPopup.ts", "./ResultPopup.ts", "./RewardItem.ts", "./RewardPage.ts", "./TaskCart.ts", "./utils.ts"], (function() {
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}
));

System.register("chunks:///_virtual/PageManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BundleManager.ts"], (function(t) {
    var e, i, a, n, r, s, o, u;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            i = t.cclegacy,
            a = t.Node,
            n = t.Widget,
            r = t.Prefab,
            s = t.error,
            o = t.instantiate
        }
        , function(t) {
            u = t.BundleManager
        }
        ],
        execute: function() {
            i._RF.push({}, "beb65PRJcNMB54cVaurrwXh", "PageManager", void 0);
            var c = t("UILayer", function(t) {
                return t.BOTTOM = "bottom",
                t.MIDDLE = "middle",
                t.TOP = "top",
                t.SYSTEM = "system",
                t
            }({}));
            t("PageManager", function() {
                function t() {
                    this.uiRoot = null,
                    this.layerMap = new Map,
                    this.uiMap = new Map,
                    this.defaultLayer = c.MIDDLE
                }
                var i = t.prototype;
                return i.init = function(t, e, i) {
                    void 0 === i && (i = c.MIDDLE),
                    this.uiRoot = t,
                    this.defaultLayer = i;
                    for (var r = e || [c.BOTTOM, c.MIDDLE, c.TOP, c.SYSTEM], s = 0; s < r.length; s++) {
                        var o = r[s]
                          , u = new a(o);
                        u.parent = this.uiRoot;
                        var l = u.addComponent(n);
                        l.isAlignTop = !0,
                        l.isAlignBottom = !0,
                        l.isAlignLeft = !0,
                        l.isAlignRight = !0,
                        l.top = 0,
                        l.bottom = 0,
                        l.left = 0,
                        l.right = 0,
                        this.layerMap.set(o, u)
                    }
                }
                ,
                i.setDefaultLayer = function(t) {
                    this.defaultLayer = t
                }
                ,
                i.showUI = function(t, e, i, a, n) {
                    var c = this
                      , l = e || this.defaultLayer;
                    if (this.uiMap.has(t)) {
                        var f = this.uiMap.get(t);
                        return f.active = !0,
                        void (i && i(f, a))
                    }
                    u.load(t, r, (function(e, n) {
                        if (e)
                            s("[PageManager] 加载失败: " + t, e);
                        else {
                            var r = o(n)
                              , u = c.layerMap.get(l);
                            if (u) {
                                r.parent = u,
                                r.active = !0,
                                c.uiMap.set(t, r);
                                var f = t.split("/").pop()
                                  , g = r.getComponent(f);
                                g && g.init && g.init(a),
                                i && i(r, a)
                            } else
                                s("[PageManager] 层级不存在: " + l)
                        }
                    }
                    ), n)
                }
                ,
                i.hideUI = function(t) {
                    if ("string" == typeof t) {
                        var e = this.uiMap.get(t);
                        e && (e.active = !1)
                    } else
                        t.active = !1
                }
                ,
                i.removeUI = function(t) {
                    var e = this;
                    if ("string" == typeof t) {
                        var i = this.uiMap.get(t);
                        i && (i.destroy(),
                        this.uiMap.delete(t))
                    } else
                        this.uiMap.forEach((function(i, a) {
                            i === t && (t.destroy(),
                            e.uiMap.delete(a))
                        }
                        ))
                }
                ,
                i.getUI = function(t) {
                    return this.uiMap.get(t)
                }
                ,
                i.getLayer = function(t) {
                    return this.layerMap.get(t)
                }
                ,
                e(t, null, [{
                    key: "Instance",
                    get: function() {
                        return this.instance || (this.instance = new t),
                        this.instance
                    }
                }]),
                t
            }()).instance = void 0,
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Popup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts"], (function(e) {
    var i, o, t, n, a, r, s, l;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            t = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            r = e._decorator,
            s = e.Node
        }
        , function(e) {
            l = e.UiBase
        }
        ],
        execute: function() {
            var u, p, c, f, h, m, b, d, y;
            a._RF.push({}, "945d6wGaeRFwoye1BpvcnTc", "Popup", void 0);
            var v = r.ccclass
              , g = r.property;
            e("Popup", (u = v("Popup"),
            p = g({
                serializable: !0,
                displayName: "点击遮罩关闭"
            }),
            c = g({
                type: s,
                displayName: "遮罩节点",
                visible: function() {
                    return this.maskClosable
                }
            }),
            f = g({
                displayName: "关闭自动移除",
                visible: function() {
                    return this.maskClosable
                }
            }),
            u((b = i((m = function(e) {
                function i() {
                    for (var i, o = arguments.length, a = new Array(o), r = 0; r < o; r++)
                        a[r] = arguments[r];
                    return i = e.call.apply(e, [this].concat(a)) || this,
                    t(i, "maskClosable", b, n(i)),
                    t(i, "maskNode", d, n(i)),
                    t(i, "closeAutoRemove", y, n(i)),
                    i
                }
                o(i, e);
                var a = i.prototype;
                return a.onLoad = function() {
                    this.maskClosable && this.maskNode.on(s.EventType.TOUCH_END, this.closePopup, this)
                }
                ,
                a.closePopup = function() {
                    this.closeAutoRemove ? this.pageManager.removeUI(this.node) : this.pageManager.hideUI(this.node)
                }
                ,
                i
            }(l)).prototype, "maskClosable", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            d = i(m.prototype, "maskNode", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = i(m.prototype, "closeAutoRemove", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            h = m)) || h));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PropGetPopup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./GameControl.ts", "./utils.ts"], (function(t) {
    var e, n, o, r, i, a, s, p, u, c;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            o = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            i = t.cclegacy,
            a = t._decorator,
            s = t.Node
        }
        , function(t) {
            p = t.UiBase
        }
        , function(t) {
            u = t.gameControl
        }
        , function(t) {
            c = t.shareGame
        }
        ],
        execute: function() {
            var l, h, f, y, v;
            i._RF.push({}, "2700dCFBodISrk3NF955DNv", "PropGetPopup", void 0);
            var P = a.ccclass
              , d = a.property;
            t("PropGetPopup", (l = P("PropGetPopup"),
            h = d(s),
            l((v = e((y = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                        i[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(i)) || this,
                    o(e, "shareBtn", v, r(e)),
                    e.type = null,
                    e
                }
                n(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    this.shareBtn.on(s.EventType.TOUCH_END, this.onShareBtn, this)
                }
                ,
                i.show = function(t) {
                    this.type = t
                }
                ,
                i.onShareBtn = function() {
                    var t = this;
                    c().then((function() {
                        u.useProp(t.type),
                        t.pageManager.removeUI(t.node)
                    }
                    ))
                }
                ,
                e
            }(p)).prototype, "shareBtn", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            f = y)) || f));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Queue.ts", ["cc"], (function(t) {
    var r;
    return {
        setters: [function(t) {
            r = t.cclegacy
        }
        ],
        execute: function() {
            r._RF.push({}, "10bc6A+oXFAuaRNB6RdrDk9", "Queue", void 0);
            t("Queue", function() {
                function t() {
                    this.array = void 0,
                    this.array = new Array
                }
                var r = t.prototype;
                return r.getSize = function() {
                    return this.array.length
                }
                ,
                r.isEmpty = function() {
                    return 0 == this.array.length
                }
                ,
                r.enqueue = function(t) {
                    this.array.push(t)
                }
                ,
                r.dequeue = function() {
                    return this.array.splice(0, 1)[0]
                }
                ,
                r.getFront = function() {
                    return this.array[0]
                }
                ,
                r.clear = function() {
                    this.array.length = 0
                }
                ,
                t
            }());
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RankPopup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./api.ts", "./GameConst.ts"], (function(e) {
    var t, n, i, r, o, a, s, c, p, u, l, g, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            s = e.Node,
            c = e.instantiate,
            p = e.Label,
            u = e.ProgressBar
        }
        , function(e) {
            l = e.UiBase
        }
        , function(e) {
            g = e.Api
        }
        , function(e) {
            f = e.MaxGeneralNum
        }
        ],
        execute: function() {
            var m, d, h, v, y;
            o._RF.push({}, "bb5c46mPSxCZ7xxoi91ubPh", "RankPopup", void 0);
            var N = a.ccclass
              , P = a.property;
            e("RankPopup", (m = N("RankPopup"),
            d = P(s),
            m((y = t((v = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                        o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    i(t, "itemNode", y, r(t)),
                    t
                }
                return n(t, e),
                t.prototype.onLoad = function() {
                    var e = this;
                    this.itemNode.active = !1,
                    g.getRankList().then((function(t) {
                        t.data.list.forEach((function(t) {
                            var n = c(e.itemNode);
                            n.parent = e.itemNode.parent,
                            n.active = !0,
                            n.getChildByName("nickName").getComponent(p).string = t.nickname;
                            var i = n.getChildByName("progressBar").getComponent(u)
                              , r = Math.floor(t.general / f * 100) / 100;
                            i.progress = r;
                            var o = n.getChildByName("progressText").getComponent(p);
                            t.general >= f ? o.string = "已集齐所有武将！" : o.string = (100 * r).toString() + "%"
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }(l)).prototype, "itemNode", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = v)) || h));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ResultPopup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./UiConfig.ts", "./PageManager.ts", "./GameControl.ts", "./utils.ts", "./CampPage.ts", "./GameConst.ts", "./BundleManager.ts", "./TipControl.ts", "./AppLifecycle.ts"], (function(e) {
    var t, n, i, r, a, o, l, s, u, c, p, g, h, v, f, m, b, C, w, d, y, S;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            o = e._decorator,
            l = e.Node,
            s = e.Sprite,
            u = e.SpriteFrame
        }
        , function(e) {
            c = e.UiBase
        }
        , function(e) {
            p = e.UI_PATH
        }
        , function(e) {
            g = e.UILayer
        }
        , function(e) {
            h = e.gameControl
        }
        , function(e) {
            v = e.getGeneralSprite,
            f = e.getGeneralText,
            m = e.shareGame
        }
        , function(e) {
            b = e.CampPage
        }
        , function(e) {
            C = e.FollowConfig
        }
        , function(e) {
            w = e.BundleManager
        }
        , function(e) {
            d = e.tipControl
        }
        , function(e) {
            y = e.AppLifecycleManager,
            S = e.AppLifecycleEvent
        }
        ],
        execute: function() {
            var I, D, B, L, M, U, E, T, _, z, H, N, P, R, A, G, O, F, k, x, J, W, j, q, K, Q, V, X, Y, Z, $;
            a._RF.push({}, "8f76e2r3O1DOJJGIfaF3ldl", "ResultPopup", void 0);
            var ee = o.ccclass
              , te = o.property;
            e("ResultPopup", (I = ee("ResultPopup"),
            D = te(l),
            B = te(l),
            L = te(l),
            M = te(l),
            U = te(l),
            E = te(l),
            T = te(l),
            _ = te(s),
            z = te(s),
            H = te(l),
            N = te(l),
            P = te(l),
            R = te(l),
            A = te(l),
            I((F = t((O = function(e) {
                function t() {
                    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                        a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    i(t, "winContent", F, r(t)),
                    i(t, "loseContent", k, r(t)),
                    i(t, "goHomeBtn", x, r(t)),
                    i(t, "continueBtn", J, r(t)),
                    i(t, "againBtn", W, r(t)),
                    i(t, "goCampBtn", j, r(t)),
                    i(t, "generalNode", q, r(t)),
                    i(t, "generalSprite", K, r(t)),
                    i(t, "generalLines", Q, r(t)),
                    i(t, "winLines", V, r(t)),
                    i(t, "revivalContent", X, r(t)),
                    i(t, "shareBtn", Y, r(t)),
                    i(t, "closeRevival", Z, r(t)),
                    i(t, "arrowNode", $, r(t)),
                    t.resultData = null,
                    t.isClickShare = !1,
                    t
                }
                n(t, e);
                var a = t.prototype;
                return a.onLoad = function() {
                    this.goHomeBtn.on(l.EventType.TOUCH_END, this.goHome, this),
                    this.continueBtn.on(l.EventType.TOUCH_END, this.restart, this),
                    this.againBtn.on(l.EventType.TOUCH_END, this.restart, this),
                    this.goCampBtn.on(l.EventType.TOUCH_END, this.goCamp, this),
                    this.shareBtn.on(l.EventType.TOUCH_END, this.share, this),
                    this.closeRevival.on(l.EventType.TOUCH_END, this.hideRevival, this)
                }
                ,
                a.showWin = function(e) {
                    var t = this;
                    this.winContent.active = !0,
                    this.loseContent.active = !1,
                    this.revivalContent.active = !1,
                    this.resultData = e,
                    e.general_id ? (this.generalNode.active = !0,
                    this.winLines.active = !1,
                    this.generalSprite.grayscale = 1 !== e.status,
                    v(e.general_id).then((function(e) {
                        t.generalSprite.spriteFrame = e
                    }
                    )),
                    f(e.general_id, "obtain").then((function(e) {
                        t.generalLines.spriteFrame = e
                    }
                    ))) : (this.generalNode.active = !1,
                    this.winLines.active = !0)
                }
                ,
                a.showLose = function() {
                    this.winContent.active = !1,
                    this.loseContent.active = !0,
                    this.revivalContent.active = !1
                }
                ,
                a.showRevival = function() {
                    var e = this;
                    this.winContent.active = !1,
                    this.loseContent.active = !1,
                    this.revivalContent.active = !0,
                    this.isClickShare = !1;
                    var t = this.getShareIndex();
                    if (t < C.length) {
                        var n = C[t];
                        w.loadAsync("image/result/follow_" + n.key + "/spriteFrame", u).then((function(t) {
                            e.shareBtn.getComponent(s).spriteFrame = t
                        }
                        ))
                    } else
                        this.arrowNode.active = !0
                }
                ,
                a.goHome = function() {
                    var e = this;
                    this.pageManager.removeUI(this.node),
                    this.pageManager.showUI(p.HOME, g.MIDDLE, (function() {
                        e.pageManager.removeUI(p.GAME)
                    }
                    ))
                }
                ,
                a.restart = function() {
                    this.pageManager.removeUI(this.node),
                    h.initGame()
                }
                ,
                a.goCamp = function() {
                    var e = this;
                    this.pageManager.showUI(p.CAMP, g.MIDDLE, (function(t) {
                        var n = t.getComponent(b);
                        n && 1 === e.resultData.status && n.onShowNewGeneral(e.resultData.general_id),
                        e.pageManager.removeUI(e.node),
                        e.pageManager.removeUI(p.GAME)
                    }
                    ))
                }
                ,
                a.share = function() {
                    var e = this;
                    if (!this.isClickShare) {
                        this.isClickShare = !0;
                        var t = this.getShareIndex();
                        if (localStorage.setItem("revivalIndex" + (new Date).toLocaleDateString(), (t + 1).toString()),
                        t < C.length) {
                            var n = C[t];
                            d.showTip("页面正在跳转~", 2);
                            var i = navigator.userAgent;
                            if (/Android/i.test(i) || /HarmonyOS/i.test(i))
                                return h.saveGameState(),
                                void (location.href = n.url);
                            /iPhone|iPad|iPod/i.test(i) ? location.href = n.url : window.open(n.url, "_blank"),
                            y.on(S.SHOW, (function() {
                                e.pageManager.removeUI(e.node),
                                h.revival()
                            }
                            ), this)
                        } else
                            m().then((function() {
                                e.pageManager.removeUI(e.node),
                                h.revival()
                            }
                            ))
                    }
                }
                ,
                a.getShareIndex = function() {
                    var e = (new Date).toLocaleDateString();
                    return parseInt(localStorage.getItem("revivalIndex" + e)) || 0
                }
                ,
                a.hideRevival = function() {
                    this.revivalContent.active = !1,
                    this.showLose(),
                    h.gameLoseReport()
                }
                ,
                t
            }(c)).prototype, "winContent", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = t(O.prototype, "loseContent", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = t(O.prototype, "goHomeBtn", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            J = t(O.prototype, "continueBtn", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            W = t(O.prototype, "againBtn", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            j = t(O.prototype, "goCampBtn", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            q = t(O.prototype, "generalNode", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            K = t(O.prototype, "generalSprite", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Q = t(O.prototype, "generalLines", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            V = t(O.prototype, "winLines", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            X = t(O.prototype, "revivalContent", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Y = t(O.prototype, "shareBtn", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Z = t(O.prototype, "closeRevival", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            $ = t(O.prototype, "arrowNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            G = O)) || G));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RewardItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./UserControl.ts", "./api.ts"], (function(e) {
    var t, i, n, r, o, c, a, s, u, l, f, p, h, d, v, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            c = e._decorator,
            a = e.Node,
            s = e.RichText,
            u = e.Button,
            l = e.Sprite,
            f = e.UITransform,
            p = e.resources,
            h = e.SpriteFrame
        }
        , function(e) {
            d = e.UiBase
        }
        , function(e) {
            v = e.userControl
        }
        , function(e) {
            m = e.Api
        }
        ],
        execute: function() {
            var b, g, w, B, R, y, I, z, C, S, x, F, U;
            o._RF.push({}, "44983GbuppIfIUZ0RDkQTuE", "RewardItem", void 0);
            var k = c.ccclass
              , L = c.property;
            e("RewardItem", (b = k("RewardItem"),
            g = L(a),
            w = L(a),
            B = L(a),
            R = L(s),
            y = L(a),
            b((C = t((z = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), c = 0; c < i; c++)
                        o[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(t, "receiveBtn", C, r(t)),
                    n(t, "receivedBtn", S, r(t)),
                    n(t, "unfinished", x, r(t)),
                    n(t, "text", F, r(t)),
                    n(t, "icon", U, r(t)),
                    t.source = void 0,
                    t
                }
                i(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.receiveBtn.on(u.EventType.CLICK, this.onReceive, this)
                }
                ,
                o.onReceive = function() {
                    this.setBtnState(1),
                    m.getReward({
                        source: this.source
                    }).then((function() {
                        v.updateUserInfo()
                    }
                    ))
                }
                ,
                o.initRewardItem = function(e, t, i, n) {
                    var r = this;
                    if (this.text.string = e,
                    this.source = i,
                    t.length > 1)
                        t.forEach((function(e, t) {
                            r.getRewardIcon(e).then((function(e) {
                                r.icon[t].getComponent(l).spriteFrame = e,
                                r.icon[t].active = !0
                            }
                            ))
                        }
                        ));
                    else {
                        this.getRewardIcon(t[0]).then((function(e) {
                            r.icon[0].getComponent(l).spriteFrame = e,
                            r.icon[0].active = !0
                        }
                        ));
                        var o = this.icon[0];
                        o.getComponent(f).setContentSize(70, 70),
                        o.x = 0
                    }
                    var c = v.getRewardList()[n];
                    this.setBtnState(c)
                }
                ,
                o.getRewardIcon = function(e) {
                    return new Promise((function(t, i) {
                        p.load("image/reward/reward_" + e + "/spriteFrame", h, (function(e, n) {
                            e ? i(e) : t(n)
                        }
                        ))
                    }
                    ))
                }
                ,
                o.setBtnState = function(e) {
                    switch (void 0 === e && (e = 0),
                    this.unfinished.active = !1,
                    this.receiveBtn.active = !1,
                    this.receivedBtn.active = !1,
                    e) {
                    case 0:
                        this.unfinished.active = !0;
                        break;
                    case 1:
                        this.receivedBtn.active = !0;
                        break;
                    case 2:
                        this.receiveBtn.active = !0;
                        break;
                    default:
                        this.unfinished.active = !0
                    }
                }
                ,
                t
            }(d)).prototype, "receiveBtn", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = t(z.prototype, "receivedBtn", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = t(z.prototype, "unfinished", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = t(z.prototype, "text", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            U = t(z.prototype, "icon", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            I = z)) || I));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RewardPage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./GameConst.ts", "./RewardItem.ts", "./UserControl.ts"], (function(e) {
    var t, r, n, a, o, i, c, u, l, s, d, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            a = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            i = e._decorator,
            c = e.Node,
            u = e.instantiate
        }
        , function(e) {
            l = e.UiBase
        }
        , function(e) {
            s = e.RewardConfig
        }
        , function(e) {
            d = e.RewardItem
        }
        , function(e) {
            p = e.userControl
        }
        ],
        execute: function() {
            var f, w, y, g, m, h, v;
            o._RF.push({}, "34d681aXrVKhbMnxMKawbhE", "RewardPage", void 0);
            var b = i.ccclass
              , I = i.property;
            e("RewardPage", (f = b("RewardPage"),
            w = I(c),
            y = I(c),
            f((h = t((m = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                        o[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(t, "rewardItem", h, a(t)),
                    n(t, "backNode", v, a(t)),
                    t
                }
                return r(t, e),
                t.prototype.onLoad = function() {
                    var e = this;
                    this.rewardItem.active = !1,
                    s.forEach((function(t, r) {
                        var n = u(e.rewardItem);
                        n.parent = e.rewardItem.parent,
                        n.active = !0;
                        var a = n.getComponent(d)
                          , o = 0;
                        o = "once_a_day" == t.key || "once_a_week" == t.key ? p.getDayGameNum() : p.getMyGeneral().length;
                        var i = "<b><color=#5D402E>" + t.desc + "<color=#81B143>(" + o + "/" + t.count + ")</color>";
                        a.initRewardItem(i, t.type, t.source, t.key)
                    }
                    )),
                    this.backNode.on(c.EventType.TOUCH_END, (function() {
                        e.pageManager.removeUI(e.node)
                    }
                    ))
                }
                ,
                t
            }(l)).prototype, "rewardItem", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = t(m.prototype, "backNode", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            g = m)) || g));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TaskCart.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts", "./utils.ts"], (function(t) {
    var e, r, i, a, n, s, o, c, p, u;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            i = t.initializerDefineProperty,
            a = t.assertThisInitialized,
            n = t.createClass
        }
        , function(t) {
            s = t.cclegacy,
            o = t._decorator,
            c = t.Sprite
        }
        , function(t) {
            p = t.UiBase
        }
        , function(t) {
            u = t.getItemSprite
        }
        ],
        execute: function() {
            var l, f, h, k, d;
            s._RF.push({}, "74b6bmocWdDlagam8jUhI0P", "TaskCart", void 0);
            var y = o.ccclass
              , g = o.property;
            t("TaskCart", (l = y("TaskCart"),
            f = g(c),
            l((d = e((k = function(t) {
                function e() {
                    for (var e, r = arguments.length, n = new Array(r), s = 0; s < r; s++)
                        n[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    i(e, "propSprite", d, a(e)),
                    e._taskId = 0,
                    e
                }
                return r(e, t),
                e.prototype.setTask = function(t, e) {
                    var r = this;
                    u(t).then((function(t) {
                        r.propSprite.spriteFrame = t
                    }
                    )),
                    this._taskId = e
                }
                ,
                n(e, [{
                    key: "taskId",
                    get: function() {
                        return this._taskId
                    }
                }]),
                e
            }(p)).prototype, "propSprite", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = k)) || h));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TimerManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, a, n, r, i;
    return {
        setters: [function(e) {
            t = e.extends,
            a = e.createForOfIteratorHelperLoose,
            n = e.createClass
        }
        , function(e) {
            r = e.cclegacy,
            i = e.director
        }
        ],
        execute: function() {
            r._RF.push({}, "fd9629VEMhP1qvQirwEMn4e", "TimerManager", void 0),
            e("TimerManager", function() {
                function e() {
                    this._tasks = new Map,
                    this._counter = 1
                }
                var r = e.prototype;
                return r._addTask = function(e) {
                    var a = this._counter++;
                    return this._tasks.set(a, t({
                        id: a
                    }, e)),
                    a
                }
                ,
                r.setTimeout = function(e, t, a) {
                    return this._addTask({
                        type: "JS",
                        callback: e,
                        remaining: t,
                        repeat: 0,
                        target: a
                    })
                }
                ,
                r.setInterval = function(e, t, a) {
                    return this._addTask({
                        type: "JS",
                        callback: e,
                        remaining: t,
                        interval: t,
                        repeat: 1 / 0,
                        target: a
                    })
                }
                ,
                r.clearTimeout = function(e) {
                    this._tasks.delete(e)
                }
                ,
                r.clearInterval = function(e) {
                    this._tasks.delete(e)
                }
                ,
                r.clearAllByTarget = function(e) {
                    for (var t, n = a(this._tasks); !(t = n()).done; ) {
                        var r = t.value
                          , i = r[0];
                        r[1].target === e && this._tasks.delete(i)
                    }
                }
                ,
                r.clearAll = function() {
                    this._tasks.clear()
                }
                ,
                r.schedule = function(e, t, a, n, r) {
                    return void 0 === a && (a = 0),
                    void 0 === n && (n = 1 / 0),
                    void 0 === r && (r = 0),
                    this._addTask({
                        type: "COCOS",
                        callback: e,
                        remaining: r,
                        interval: a,
                        repeat: n,
                        target: t
                    })
                }
                ,
                r.scheduleOnce = function(e, t, a) {
                    return void 0 === a && (a = 0),
                    this._addTask({
                        type: "COCOS",
                        callback: e,
                        remaining: a,
                        repeat: 0,
                        target: t
                    })
                }
                ,
                r.unscheduleById = function(e) {
                    this._tasks.delete(e)
                }
                ,
                r.unscheduleAllForTarget = function(e) {
                    this.clearAllByTarget(e)
                }
                ,
                r.update = function(e) {
                    for (var t, n = this, r = [], i = a(this._tasks); !(t = i()).done; ) {
                        var s = t.value
                          , c = s[0]
                          , l = s[1];
                        if (l.target && l.target._objFlags && 2 == (2 & l.target._objFlags))
                            r.push(c);
                        else if (l.remaining -= e,
                        l.remaining <= 0) {
                            try {
                                l.callback(e)
                            } catch (e) {
                                console.error("TimerManager callback error:", e)
                            }
                            var u;
                            if (l.repeat === 1 / 0)
                                l.remaining = null != (u = l.interval) ? u : 0;
                            else if (l.repeat && l.repeat > 0) {
                                var o;
                                l.repeat--,
                                l.remaining = null != (o = l.interval) ? o : 0
                            } else
                                r.push(c)
                        }
                    }
                    r.forEach((function(e) {
                        return n._tasks.delete(e)
                    }
                    ))
                }
                ,
                n(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance || (this._instance = new e,
                        i.getScheduler().schedule(this._instance.update.bind(this._instance), this._instance, 0, Number.POSITIVE_INFINITY, 0, !1)),
                        this._instance
                    }
                }]),
                e
            }())._instance = void 0,
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TimerManager1.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, a, s;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            s = e.director
        }
        ],
        execute: function() {
            a._RF.push({}, "b149bCgJohJ4peRA4nBKN5V", "TimerManager1", void 0),
            e("TimerManager", function() {
                function e() {
                    this._tasks = new Map,
                    this._nextId = 1
                }
                var a = e.prototype;
                return a._initScheduler = function() {
                    s.getScheduler().schedule(this.update, this, 0, Number.MAX_SAFE_INTEGER, 0, !1)
                }
                ,
                a.update = function(e) {
                    for (var t = 0, a = Array.from(this._tasks.entries()); t < a.length; t++) {
                        var s = a[t]
                          , n = s[0]
                          , r = s[1];
                        if (!r.paused && (r.elapsed += e,
                        r.elapsed >= r.interval)) {
                            try {
                                r.callback.apply(r, r.args || [])
                            } catch (e) {
                                console.error("TimerManager callback error:", e)
                            }
                            r.once ? this._tasks.delete(n) : r.repeat > 0 ? (r.repeat--,
                            r.repeat <= 0 ? this._tasks.delete(n) : r.elapsed -= r.interval) : r.elapsed -= r.interval
                        }
                    }
                }
                ,
                a.setTimeout = function(e, t) {
                    for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), n = 2; n < a; n++)
                        s[n - 2] = arguments[n];
                    var r = this._nextId++;
                    return this._tasks.set(r, {
                        id: r,
                        callback: e,
                        interval: t,
                        repeat: 0,
                        elapsed: 0,
                        paused: !1,
                        once: !0,
                        args: s
                    }),
                    r
                }
                ,
                a.setInterval = function(e, t) {
                    for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), n = 2; n < a; n++)
                        s[n - 2] = arguments[n];
                    var r = this._nextId++;
                    return this._tasks.set(r, {
                        id: r,
                        callback: e,
                        interval: t,
                        repeat: -1,
                        elapsed: 0,
                        paused: !1,
                        once: !1,
                        args: s
                    }),
                    r
                }
                ,
                a.setRepeat = function(e, t, a) {
                    for (var s = arguments.length, n = new Array(s > 3 ? s - 3 : 0), r = 3; r < s; r++)
                        n[r - 3] = arguments[r];
                    var i = this._nextId++;
                    return this._tasks.set(i, {
                        id: i,
                        callback: e,
                        interval: t,
                        repeat: a,
                        elapsed: 0,
                        paused: !1,
                        once: !1,
                        args: n
                    }),
                    i
                }
                ,
                a.clearTimer = function(e) {
                    this._tasks.delete(e)
                }
                ,
                a.pauseTimer = function(e) {
                    var t = this._tasks.get(e);
                    t && (t.paused = !0)
                }
                ,
                a.resumeTimer = function(e) {
                    var t = this._tasks.get(e);
                    t && (t.paused = !1)
                }
                ,
                a.clearAll = function() {
                    this._tasks.clear()
                }
                ,
                a.dispose = function() {
                    s.getScheduler().unschedule(this.update, this),
                    this.clearAll(),
                    e._instance = null
                }
                ,
                t(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance || (this._instance = new e,
                        this._instance._initScheduler()),
                        this._instance
                    }
                }]),
                e
            }())._instance = null,
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TipControl.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PageManager.ts", "./UiConfig.ts", "./TipTemp.ts"], (function(n) {
    var t, i, e, s, o, c;
    return {
        setters: [function(n) {
            t = n.createClass
        }
        , function(n) {
            i = n.cclegacy
        }
        , function(n) {
            e = n.PageManager,
            s = n.UILayer
        }
        , function(n) {
            o = n.UI_PATH
        }
        , function(n) {
            c = n.TipTemp
        }
        ],
        execute: function() {
            i._RF.push({}, "9d369IAErBGD7JHtOWBMOpU", "TipControl", void 0);
            var r = n("TipControl", function() {
                function n() {
                    this.isInit = !1,
                    this.tip = null
                }
                var i = n.prototype;
                return i.init = function() {
                    var n = this;
                    this.isInit || (this.isInit = !0,
                    e.Instance.showUI(o.TIP, s.SYSTEM, (function(t) {
                        n.tip = t.getComponent(c)
                    }
                    )))
                }
                ,
                i.showTip = function(n, t) {
                    this.tip.showTip(n, t)
                }
                ,
                t(n, null, [{
                    key: "Instance",
                    get: function() {
                        return this.instance || (this.instance = new n),
                        this.instance
                    }
                }]),
                n
            }());
            r.instance = void 0;
            n("tipControl", r.Instance);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TipTemp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UiBase.ts"], (function(e) {
    var t, i, o, a, r, n, l, p, s, c, u, d, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            o = e.initializerDefineProperty,
            a = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            n = e._decorator,
            l = e.Node,
            p = e.instantiate,
            s = e.Label,
            c = e.UIOpacity,
            u = e.Vec3,
            d = e.tween
        }
        , function(e) {
            f = e.UiBase
        }
        ],
        execute: function() {
            var h, y, m, b, v, g, w, N, T, z, A, P, L;
            r._RF.push({}, "b489dLsmr9JiZgpkvWcIcfg", "TipTemp", void 0);
            var O = n.ccclass
              , B = n.property;
            e("TipTemp", (h = O("TipTemp"),
            y = B({
                type: l,
                displayName: "模板节点"
            }),
            m = B({
                displayName: "显示文本的子节点路径",
                tooltip: "默认为label，若层级结构不同，请修改"
            }),
            b = B({
                displayName: "显示时间(秒)",
                tooltip: "默认1秒，不包括淡出动画时间"
            }),
            v = B({
                displayName: "淡出时间(秒)",
                tooltip: "默认0.8秒"
            }),
            g = B({
                displayName: "上移距离"
            }),
            h((T = t((N = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    o(t, "templateNode", T, a(t)),
                    o(t, "labelPath", z, a(t)),
                    o(t, "showTime", A, a(t)),
                    o(t, "fadeOutTime", P, a(t)),
                    o(t, "diffY", L, a(t)),
                    t.showNodeArray = [],
                    t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    this.templateNode.active = !1
                }
                ,
                r.showTip = function(e, t) {
                    var i = this;
                    void 0 === t && (t = this.showTime),
                    console.log("delay ===>", t);
                    var o = p(this.templateNode);
                    o.active = !0,
                    o.parent = this.templateNode.parent;
                    var a = o.getChildByPath(this.labelPath);
                    if (a) {
                        var r = a.getComponent(s);
                        r && (r.string = e)
                    }
                    var n = o.getComponent(c);
                    n || (n = o.addComponent(c)),
                    n.opacity = 255,
                    this.showNodeArray.forEach((function(e) {
                        var t = new u(e.position.x,e.position.y + i.diffY,e.position.z);
                        d(e).to(.16, {
                            position: t
                        }).start()
                    }
                    )),
                    this.showNodeArray.push(o),
                    d(n).delay(t).to(this.fadeOutTime, {
                        opacity: 0
                    }, {
                        easing: "sineIn"
                    }).call((function() {
                        var e = i.showNodeArray.indexOf(o);
                        -1 !== e && i.showNodeArray.splice(e, 1),
                        o.destroy()
                    }
                    )).start()
                }
                ,
                t
            }(f)).prototype, "templateNode", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = t(N.prototype, "labelPath", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "label"
                }
            }),
            A = t(N.prototype, "showTime", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            P = t(N.prototype, "fadeOutTime", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .8
                }
            }),
            L = t(N.prototype, "diffY", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 40
                }
            }),
            w = N)) || w));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UiBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./PageManager.ts"], (function(n) {
    var e, i, t, o, r, a, u, v;
    return {
        setters: [function(n) {
            e = n.inheritsLoose,
            i = n.createClass
        }
        , function(n) {
            t = n.cclegacy,
            o = n._decorator,
            r = n.error,
            a = n.Component
        }
        , function(n) {
            u = n.EventManager
        }
        , function(n) {
            v = n.PageManager
        }
        ],
        execute: function() {
            var s, c;
            t._RF.push({}, "e9f6aLidQpJ3IABYqJn4Q2r", "UiBase", void 0);
            var l = o.ccclass;
            o.property,
            n("UiBase", l("UiBase")(((c = function(n) {
                function t() {
                    var e;
                    return (e = n.call(this) || this)._initialized = !1,
                    e
                }
                e(t, n);
                var o = t.prototype;
                return o.onEnable = function() {}
                ,
                o.onDisable = function() {}
                ,
                o.onDestroy = function() {
                    this.removeGlobalEvents(),
                    t._uiEvent && this.removeUiEvents()
                }
                ,
                o.initialize = function() {
                    this._initialized || (this._initialized = !0)
                }
                ,
                o.onGlobalEvent = function(n, e, i) {
                    void 0 === i && (i = this),
                    u.global.on(n, e, i)
                }
                ,
                o.offGlobalEvent = function(n, e, i) {
                    void 0 === i && (i = this),
                    u.global.off(n, e, i)
                }
                ,
                o.removeGlobalEvents = function() {
                    u.global.removeByTarget(this)
                }
                ,
                t.initUiEvnet = function(n) {
                    void 0 === n && (n = "ui"),
                    t._uiEvent = u.register(n)
                }
                ,
                t.emitUiEvent = function(n) {
                    var e;
                    t._uiEvent || this.initUiEvnet();
                    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                        o[r - 1] = arguments[r];
                    (e = t._uiEvent).emit.apply(e, [n].concat(o))
                }
                ,
                o.onUiEvent = function(n, e, i) {
                    void 0 === i && (i = this),
                    t._uiEvent || t.initUiEvnet(),
                    t._uiEvent.on(n, e, i)
                }
                ,
                o.offUiEvent = function(n, e, i) {
                    void 0 === i && (i = this),
                    t._uiEvent ? t._uiEvent.off(n, e, i) : r("UI组件默认事件监听器未设置")
                }
                ,
                o.removeUiEvents = function() {
                    t._uiEvent ? t._uiEvent.removeByTarget(this) : r("UI组件默认事件监听器未设置")
                }
                ,
                o.removeFromPageManager = function() {
                    this.pageManager.removeUI(this.node)
                }
                ,
                o.findNodeByUuid = function(n) {
                    return function e(i) {
                        if (i.uuid === n)
                            return i;
                        for (var t = 0; t < i.children.length; t++) {
                            var o = e(i.children[t]);
                            if (o)
                                return o
                        }
                        return null
                    }(this.node)
                }
                ,
                i(t, [{
                    key: "pageManager",
                    get: function() {
                        return v.Instance
                    }
                }]),
                t
            }(a))._uiEvent = null,
            s = c)) || s);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UiConfig.ts", ["cc"], (function(p) {
    var e;
    return {
        setters: [function(p) {
            e = p.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "56544bQ1StCN55fwiJIZr12", "UiConfig", void 0);
            p("UI_PATH", {
                LOADING: "prefab/page/LoadingPage",
                HOME: "prefab/page/HomePage",
                GAME: "prefab/page/GamePage",
                CAMP: "prefab/page/CampPage",
                REWARD: "prefab/page/RewardPage",
                LOGIN: "prefab/popup/LoginPopup",
                RESULT: "prefab/popup/ResultPopup",
                RULE: "prefab/popup/RulePopup",
                RANK: "prefab/popup/RankPopup",
                PROPGET: "prefab/popup/PropGetPopup",
                TIP: "prefab/common/Tip"
            });
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UserControl.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioManager.ts", "./GameConst.ts", "./GeneralModel.ts", "./UserInfoModel.ts"], (function(n) {
    var e, t, r, o, i, u, s, a;
    return {
        setters: [function(n) {
            e = n.createClass,
            t = n.asyncToGenerator,
            r = n.regeneratorRuntime
        }
        , function(n) {
            o = n.cclegacy
        }
        , function(n) {
            i = n.AudioManager
        }
        , function(n) {
            u = n.eLoginType
        }
        , function(n) {
            s = n.GeneralModel
        }
        , function(n) {
            a = n.UserInfoModel
        }
        ],
        execute: function() {
            o._RF.push({}, "3b3b0apfWlN8KyH+4a3bljy", "UserControl", void 0);
            var l = n("UserControl", function() {
                var n = o.prototype;
                function o() {
                    this.generalModel = null,
                    this.userInfoModel = null,
                    this.isLogin = !1,
                    this.loginType = u.default,
                    this.userInfoModel = new a,
                    this.generalModel = new s
                }
                return n.getLoginType = function() {
                    return this.loginType
                }
                ,
                n.setLoginType = function(n) {
                    this.loginType = n
                }
                ,
                n.login = function() {
                    this.isLogin = !0
                }
                ,
                n.initConfigData = function() {
                    this.userInfoModel.initConfig(),
                    this.generalModel.initConfig()
                }
                ,
                n.initBaseData = function() {
                    var n = t(r().mark((function n() {
                        return r().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    this.userInfoModel.initUserInfo(),
                                    this.generalModel.updateGeneral();
                                case 2:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                n.updateUserInfo = function() {
                    var n = t(r().mark((function n() {
                        return r().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    this.userInfoModel.initUserInfo();
                                case 2:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                n.getRewardList = function() {
                    return this.userInfoModel.rewardList
                }
                ,
                n.getDayGameNum = function() {
                    return this.userInfoModel.dayGameNumVal
                }
                ,
                n.getMyGeneral = function() {
                    return this.generalModel.myGeneralList
                }
                ,
                n.hasGeneral = function(n) {
                    return this.generalModel.myGeneralList.some((function(e) {
                        return e === n
                    }
                    ))
                }
                ,
                n.updateMyGeneral = function() {
                    var n = t(r().mark((function n() {
                        return r().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    this.generalModel.updateGeneral();
                                case 2:
                                    return n.abrupt("return", this.generalModel.myGeneralList);
                                case 3:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                n.getAllGeneralConfig = function() {
                    return this.generalModel.generalConfigVal
                }
                ,
                n.getGeneralConfig = function(n) {
                    return this.generalModel.generalConfigVal.find((function(e) {
                        return e.id === n
                    }
                    ))
                }
                ,
                n.getGreenDragonBladeNum = function() {
                    return this.generalModel.updateGreenDragonNum()
                }
                ,
                n.setSoundEnabled = function(n) {
                    this.userInfoModel.setSoundEnabled(n)
                }
                ,
                n.getSoundEnabled = function() {
                    return this.userInfoModel.isSoundEnabledVal
                }
                ,
                n.updatePlayBgmState = function() {
                    this.getSoundEnabled() ? i.Instance.playBGM("audio/bgm") : i.Instance.stopBGM()
                }
                ,
                n.playSFX = function(n) {
                    this.getSoundEnabled() && i.Instance.playSFX(n)
                }
                ,
                n.getPropUseCount = function(n) {
                    return this.userInfoModel.getPropCount(n)
                }
                ,
                n.useProp = function(n) {
                    this.userInfoModel.useProp(n)
                }
                ,
                e(o, [{
                    key: "isLoginVal",
                    get: function() {
                        return this.isLogin
                    }
                }], [{
                    key: "Instance",
                    get: function() {
                        return null == this.instance && (this.instance = new o),
                        this.instance
                    }
                }]),
                o
            }());
            l.instance = void 0;
            n("userControl", l.Instance);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UserInfoModel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./api.ts", "./GameConst.ts"], (function(t) {
    var e, n, s, a;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            s = t.Api
        }
        , function(t) {
            a = t.ePropType
        }
        ],
        execute: function() {
            n._RF.push({}, "31185ClnmpA1JRupkWsMODQ", "UserInfoModel", void 0);
            t("UserInfoModel", function() {
                function t() {
                    this.rewardArr = [],
                    this.dayGameNum = 0,
                    this.isSoundEnabled = !0,
                    this.flawlessCount = 0,
                    this.chainCount = 0,
                    this.resetCount = 0
                }
                var n = t.prototype;
                return n.initConfig = function() {
                    "false" === localStorage.getItem("soundEnabled") && (this.isSoundEnabled = !1)
                }
                ,
                n.initUserInfo = function() {
                    var t = this;
                    return s.getUserInfo().then((function(e) {
                        var n = e.data;
                        n && (t.rewardArr = n.user_prize,
                        t.dayGameNum = n.day_game_num,
                        t.flawlessCount = n.arbitrary,
                        t.chainCount = n.automatic,
                        t.resetCount = n.recharge)
                    }
                    ))
                }
                ,
                n.setSoundEnabled = function(t) {
                    this.isSoundEnabled = t,
                    localStorage.setItem("soundEnabled", t.toString())
                }
                ,
                n.useProp = function(t) {
                    switch (t) {
                    case a.flawless:
                        this.flawlessCount = Math.max(0, this.flawlessCount),
                        this.flawlessCount++;
                        break;
                    case a.chain:
                        this.chainCount = Math.max(0, this.chainCount),
                        this.chainCount++;
                        break;
                    case a.reset:
                        this.resetCount = Math.max(0, this.resetCount),
                        this.resetCount++
                    }
                    s.propShare({
                        source: t
                    })
                }
                ,
                n.getPropCount = function(t) {
                    switch (t) {
                    case a.flawless:
                        return this.flawlessCount;
                    case a.chain:
                        return this.chainCount;
                    case a.reset:
                        return this.resetCount
                    }
                    return 0
                }
                ,
                e(t, [{
                    key: "rewardList",
                    get: function() {
                        return this.rewardArr
                    }
                }, {
                    key: "dayGameNumVal",
                    get: function() {
                        return this.dayGameNum
                    }
                }, {
                    key: "isSoundEnabledVal",
                    get: function() {
                        return this.isSoundEnabled
                    }
                }]),
                t
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/utils.ts", ["cc", "./CommonFun.ts", "./TipControl.ts", "./BundleManager.ts"], (function(n) {
    var e, t, o, i, r;
    return {
        setters: [function(n) {
            e = n.cclegacy,
            t = n.SpriteFrame
        }
        , function(n) {
            o = n.copyToClipboard
        }
        , function(n) {
            i = n.tipControl
        }
        , function(n) {
            r = n.BundleManager
        }
        ],
        execute: function() {
            e._RF.push({}, "53ec0eCEDVP37ABp3ASXt5X", "utils", void 0);
            n("getItemSprite", (function(n, e) {
                return void 0 === e && (e = "icon"),
                new Promise((function(o, i) {
                    r.load("image/propItem/" + e + "/" + n + "/spriteFrame", t, (function(n, e) {
                        n ? i(n) : o(e)
                    }
                    ))
                }
                ))
            }
            )),
            n("getGeneralSprite", (function(n, e) {
                return void 0 === e && (e = "common"),
                new Promise((function(o, i) {
                    r.load("image/general/" + e + "/" + n + "/spriteFrame", t, (function(n, e) {
                        n ? i(n) : o(e)
                    }
                    ))
                }
                ))
            }
            )),
            n("getGeneralText", (function(n, e) {
                return new Promise((function(o, i) {
                    r.load("image/generalText/" + e + "/" + n + "/spriteFrame", t, (function(n, e) {
                        n ? i(n) : o(e)
                    }
                    ))
                }
                ))
            }
            )),
            n("getPropTopItem", (function(n, e, t, o) {
                for (var i = [], r = n + 1; r < o.length; ++r)
                    0 !== o[r][e][t] && i.push(o[r][e][t]);
                return i
            }
            )),
            n("shareGame", (function() {
                return new Promise((function(n, e) {
                    var t = "我在三国杀小游戏《木牛流马》帮助谋诸葛亮收集粮草，助力北伐！你也来试试吧！";
                    t += window.location.href,
                    o(t).then((function() {
                        i.showTip("链接已复制到剪切板~"),
                        n(null),
                        __sgsYT && __sgsYT.sendData("muniuliuma__btn_btnShare")
                    }
                    ))
                }
                ))
            }
            ));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/wxApi.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./HttpClient.ts"], (function(t) {
    var n, e, r, i;
    return {
        setters: [function(t) {
            n = t.asyncToGenerator,
            e = t.regeneratorRuntime
        }
        , function(t) {
            r = t.cclegacy
        }
        , function(t) {
            i = t.HttpClient
        }
        ],
        execute: function() {
            r._RF.push({}, "68174I4p8ZF8JaDuIHWmAgK", "wxApi", void 0);
            t("WxApi", function() {
                function t() {}
                return t.init = function() {
                    i.register({
                        baseUrl: "https://wx.sanguosha.com/"
                    }, "wx")
                }
                ,
                t.getJsConfig = function() {
                    var t = n(e().mark((function t(n) {
                        return e().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", i.getEndpoint("wx").get("api/wechat/jssdk", n));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                t
            }());
            r._RF.pop()
        }
    }
}
));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
}
)(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule")
                        _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }
            ],
            execute: function() {}
        };
    });
});
