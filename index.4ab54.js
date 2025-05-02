window.__require = function t(e, n, o) {
    function i(c, a) {
        if (!n[c]) {
            if (!e[c]) {
                var s = c.split("/");
                if (s = s[s.length - 1],
                !e[s]) {
                    var u = "function" == typeof __require && __require;
                    if (!a && u)
                        return u(s, !0);
                    if (r)
                        return r(s, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = s
            }
            var p = n[c] = {
                exports: {}
            };
            e[c][0].call(p.exports, function(t) {
                return i(e[c][1][t] || t)
            }, p, p.exports, t, e, n, o)
        }
        return n[c].exports
    }
    for (var r = "function" == typeof __require && __require, c = 0; c < o.length; c++)
        i(o[c]);
    return i
}({
    apiService: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8f611QXjOtL8LidJY9JWw/O", "apiService");
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                    for (var i in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ).apply(this, arguments)
        }
          , i = this && this.__awaiter || function(t, e, n, o) {
            return new (n || (n = Promise))(function(i, r) {
                function c(t) {
                    try {
                        s(o.next(t))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(t) {
                    try {
                        s(o.throw(t))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(c, a)
                }
                s((o = o.apply(t, e || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(t, e) {
            var n, o, i, r, c = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function a(t) {
                return function(e) {
                    return s([t, e])
                }
            }
            function s(r) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (n = 1,
                        o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o),
                        0) : o.next) && !(i = i.call(o, r[1])).done)
                            return i;
                        switch (o = 0,
                        i && (r = [2 & r[0], i.value]),
                        r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            o = r[1],
                            r = [0];
                            continue;
                        case 7:
                            r = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                c.label = r[1];
                                break
                            }
                            if (6 === r[0] && c.label < i[1]) {
                                c.label = i[1],
                                i = r;
                                break
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2],
                                c.ops.push(r);
                                break
                            }
                            i[2] && c.ops.pop(),
                            c.trys.pop();
                            continue
                        }
                        r = e.call(t, c)
                    } catch (a) {
                        r = [6, a],
                        o = 0
                    } finally {
                        n = i = 0
                    }
                if (5 & r[0])
                    throw r[1];
                return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.ApiService = n.ApiPath = void 0;
        var c = t("../config/gameConfig")
          , a = t("../manager/uiMgr")
          , s = t("../utils/httpClient")
          , u = t("../utils/md5");
        n.ApiPath = {
            LOGIN: "/v1/login",
            INFO: "/v1/info",
            RANK: "/v1/game/rank",
            TASK: "/v1/task",
            REWARD: "/v1/gift/task",
            END: "/v1/game/end",
            USE: "/v1/use",
            TASK_RECEIVE: "/v1/task/gift",
            TASK_FINISH: "/v1/task/finish",
            SHARE: "/v1/share",
            REWARD_RECEIVE: "/v1/gift/send"
        };
        var p = function() {
            function t() {}
            return t.init = function(t) {
                this.apiManager.setBaseUrl(t).setTimeout(1e4),
                this.apiManager.addInterceptor({
                    request: function(t) {
                        var e = localStorage.getItem("token");
                        e && (t.headers = o(o({}, t.headers), {
                            Authorization: "" + e
                        }));
                        var n = Math.floor(Date.now() / 1e3)
                          , i = o(o({}, t.data), {
                            timestamp: n
                        })
                          , r = Object.keys(i).sort()
                          , c = "";
                        r.forEach(function(t) {
                            c += t + "=" + i[t]
                        });
                        var a = u.md5(c + "to3uq1u30ldak90fdrmblmp46scwnz6m");
                        return t.data = o(o({}, t.data), {
                            timestamp: n,
                            sign: a
                        }),
                        t
                    }
                }),
                this.apiManager.addInterceptor({
                    response: function(t) {
                        var e = t.data;
                        if (0 !== e.code && 200 !== e.code) {
                            var n = new Error(e.msg || "\u8bf7\u6c42\u5931\u8d25");
                            throw n.code = e.code,
                            n
                        }
                        return t.data = e.data,
                        t
                    },
                    error: function(t) {
                        var e, n;
                        console.error("API\u8bf7\u6c42\u9519\u8bef:", t);
                        var o = "\u8bf7\u6c42\u5931\u8d25"
                          , i = -1;
                        throw t instanceof Error ? (o = null === (e = t.message) || void 0 === e ? void 0 : e.replace(/^Error:\s*/, ""),
                        i = t.code) : "string" == typeof t ? o = t.replace(/^Error:\s*/, "") : (null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.msg) && (o = t.data.msg,
                        i = t.data.code),
                        a.UIMgr.Instance.showToast(o),
                        {
                            code: i,
                            msg: o
                        }
                    }
                })
            }
            ,
            t.login = function(t) {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.post(n.ApiPath.LOGIN, t)]
                    })
                })
            }
            ,
            t.getUserInfo = function() {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.get(n.ApiPath.INFO)]
                    })
                })
            }
            ,
            t.getRank = function() {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.get(n.ApiPath.RANK)]
                    })
                })
            }
            ,
            t.getTask = function(t) {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.get(n.ApiPath.TASK, t)]
                    })
                })
            }
            ,
            t.getReward = function() {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.get(n.ApiPath.REWARD)]
                    })
                })
            }
            ,
            t.gameEnd = function(t) {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.post(n.ApiPath.END, t)]
                    })
                })
            }
            ,
            t.useProp = function(t) {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.post(n.ApiPath.USE, t)]
                    })
                })
            }
            ,
            t.taskReceive = function(t) {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.post(n.ApiPath.TASK_RECEIVE, t)]
                    })
                })
            }
            ,
            t.taskFinish = function(t) {
                return i(this, void 0, void 0, function() {
                    return r(this, function() {
                        return [2, this.apiManager.post(n.ApiPath.TASK_FINISH, t)]
                    })
                })
            }
            ,
            t.shareGame = function() {
                return i(this, void 0, Promise, function() {
                    return r(this, function() {
                        return [2, this.apiManager.get(n.ApiPath.SHARE, {
                            from: 1
                        })]
                    })
                })
            }
            ,
            t.rewardReceive = function(t) {
                return i(this, void 0, void 0, function() {
                    return r(this, function() {
                        return [2, this.apiManager.post(n.ApiPath.REWARD_RECEIVE, t)]
                    })
                })
            }
            ,
            t.apiManager = s.default.getInstance(),
            t
        }();
        n.ApiService = p,
        c.IsDebug ? p.init("https://testol-khj2025.sanguosha.com") : p.init("https://ol-khj2025.sanguosha.com"),
        cc._RF.pop()
    }
    , {
        "../config/gameConfig": "gameConfig",
        "../manager/uiMgr": "uiMgr",
        "../utils/httpClient": "httpClient",
        "../utils/md5": "md5"
    }],
    ball: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "81f161LGKZB0YI5q7oAcj4V", "ball");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../config/gameConfig")
          , a = t("../manager/gameMgr")
          , s = cc._decorator
          , u = s.ccclass
          , p = (s.property,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._rigidBody = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this._rigidBody = this.node.getComponent(cc.RigidBody)
            }
            ,
            e.prototype.setVelocity = function(t) {
                this.node.getComponent(cc.RigidBody).linearVelocity = t.clone()
            }
            ,
            e.prototype.initBallPos = function() {
                cc.tween(this.node).to(c.GameConfig.ballCollectDuration, {
                    position: cc.v3(a.default.instance.currentCollectPoint)
                }, {
                    easing: "quadOut"
                }).start()
            }
            ,
            e.prototype.onEnable = function() {
                this.schedule(this.checkVisible, 1)
            }
            ,
            e.prototype.onDisable = function() {
                this.unschedule(this.checkVisible)
            }
            ,
            e.prototype.checkVisible = function() {
                this.node.isValid && this.node.active && (this.node.position.x < -200 || this.node.position.x > 200 ? this.resetPos() : (this.node.position.y < -10 || this.node.position.y > cc.winSize.height + 50) && this.resetPos())
            }
            ,
            e.prototype.resetPos = function() {
                a.default.instance.gameState == a.default.StateEnum.WAIT && (this.setVelocity(cc.v2(0, 0)),
                this.node.setPosition(cc.v2(0, 30)),
                a.default.instance.startCollect(cc.v2(0, 30))),
                a.default.instance.gameState == a.default.StateEnum.COLLECT && (this.setVelocity(cc.v2(0, 0)),
                this.initBallPos(),
                this.scheduleOnce(function() {
                    a.default.instance.collectBall()
                }, c.GameConfig.ballCollectDuration))
            }
            ,
            e.prototype.update = function() {
                var t = this._rigidBody.linearVelocity;
                if (t.magSqr() > 0 && Math.abs(t.y) < 30) {
                    var e = t.mag()
                      , n = t.normalize();
                    n.y = -.1,
                    n.normalize(),
                    this._rigidBody.linearVelocity = n.multiplyScalar(e)
                }
            }
            ,
            r([u], e)
        }(cc.Component));
        n.default = p,
        cc._RF.pop()
    }
    , {
        "../config/gameConfig": "gameConfig",
        "../manager/gameMgr": "gameMgr"
    }],
    bottomCollider: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "40e17Hqe8lNkYJYpktSv+//", "bottomCollider");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../config/gameConfig")
          , a = t("../manager/gameMgr")
          , s = t("./ball")
          , u = cc._decorator
          , p = u.ccclass
          , l = (u.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.onCollisionEnter = function(t) {
                var e = t.getComponent(cc.RigidBody);
                if (e && (e.linearVelocity = cc.Vec2.ZERO),
                a.default.instance.gameState == a.default.StateEnum.WAIT)
                    a.default.instance.startCollect(cc.v2(t.node.x, t.node.y));
                else {
                    var n = t.getComponent(s.default);
                    n && n.initBallPos(),
                    this.scheduleOnce(function() {
                        a.default.instance.collectBall()
                    }, c.GameConfig.ballCollectDuration)
                }
            }
            ,
            r([p], e)
        }(cc.Component));
        n.default = l,
        cc._RF.pop()
    }
    , {
        "../config/gameConfig": "gameConfig",
        "../manager/gameMgr": "gameMgr",
        "./ball": "ball"
    }],
    brick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5f276Uv70ZOdLOZBQRwvAio", "brick");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = cc._decorator
          , a = c.ccclass
          , s = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.brickFrame = [],
                e.hpLabel = null,
                e.brickSprite = null,
                e._hp = 1,
                e._brickType = 0,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.brickSprite = this.node.getComponent(cc.Sprite),
                this._brickType = -1
            }
            ,
            e.prototype.onBeginContact = function() {
                this._hp--,
                this._hp <= 0 ? this.node.active = !1 : this.updateBrick()
            }
            ,
            e.prototype.updateBrick = function() {
                this.hpLabel.string = this._hp.toString();
                var t = Math.floor(this._hp / 40);
                this._brickType != t && (this._brickType = t,
                t >= this.brickFrame.length ? this.brickSprite.spriteFrame = this.brickFrame[this.brickFrame.length - 1] : this.brickSprite.spriteFrame = this.brickFrame[t])
            }
            ,
            Object.defineProperty(e.prototype, "hp", {
                get: function() {
                    return this._hp
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.initData = function(t) {
                this._hp = t,
                this.updateBrick(),
                this.node.opacity = 255
            }
            ,
            e.prototype.updatePos = function() {
                cc.tween(this.node).by(.5, {
                    y: -40
                }).start()
            }
            ,
            e.prototype.remove = function() {
                var t = this;
                return new Promise(function(e) {
                    cc.tween(t.node).to(.5, {
                        opacity: 0
                    }).call(function() {
                        e()
                    }).start()
                }
                )
            }
            ,
            r([s(cc.SpriteFrame)], e.prototype, "brickFrame", void 0),
            r([s(cc.Label)], e.prototype, "hpLabel", void 0),
            r([a], e)
        }(cc.Component);
        n.default = u,
        cc._RF.pop()
    }
    , {}],
    componentPool: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "936f3uI80BOpobQ3b50DBPk", "componentPool"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.ComponentPool = void 0;
        var o = function() {
            function t(t, e, n) {
                this.pool = [],
                this.createFunc = t,
                this.initFunc = e,
                this.unuseFunc = n
            }
            return t.prototype.get = function() {
                var t;
                return t = this.pool.length > 0 ? this.pool.pop() : this.createFunc(),
                this.initFunc && this.initFunc(t),
                t
            }
            ,
            t.prototype.put = function(t) {
                this.unuseFunc && this.unuseFunc(t),
                this.pool.push(t),
                t.node.removeFromParent()
            }
            ,
            t.prototype.clear = function() {
                this.pool.forEach(function(t) {
                    t.node.destroy()
                }),
                this.pool.length = 0
            }
            ,
            t
        }();
        n.ComponentPool = o,
        cc._RF.pop()
    }
    , {}],
    dataMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "913d65enApP9Yn1yitex3Jq", "dataMgr"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.DataMgr = void 0;
        var o = t("../constants/gameEnum")
          , i = t("../services/apiService")
          , r = function() {
            function t() {
                this._isLogin = !1,
                this._loginType = o.LoginEnum.default,
                this._atkVehicle = 0,
                this._food = 0,
                this._isSound = !0,
                this._hadReward = !1,
                "false" === localStorage.getItem("isSound") && (this._isSound = !1)
            }
            return Object.defineProperty(t, "instance", {
                get: function() {
                    return t._instance || (t._instance = new t),
                    t._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "loginType", {
                get: function() {
                    return this._loginType
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "atkVehicle", {
                get: function() {
                    return this._atkVehicle
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "food", {
                get: function() {
                    return this._food
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isSound", {
                get: function() {
                    return this._isSound
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "hadReward", {
                get: function() {
                    return this._hadReward
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isLogin", {
                get: function() {
                    return this._isLogin
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.setLoginType = function(t) {
                this._loginType = t
            }
            ,
            t.prototype.login = function() {
                this._isLogin = !0
            }
            ,
            t.prototype.initUserInfo = function() {
                var e = this;
                return new Promise(function(n) {
                    i.ApiService.getUserInfo().then(function(o) {
                        t.instance.updatePropNum(o),
                        "number" == typeof o.had_gift && (e._hadReward = 1 === o.had_gift),
                        n(o)
                    })
                }
                )
            }
            ,
            t.prototype.updatePropNum = function(t) {
                "number" == typeof t.grain && (this._food = t.grain),
                "number" == typeof t.siege && (this._atkVehicle = t.siege)
            }
            ,
            t.prototype.receiveProp = function(t, e) {
                switch (t) {
                case o.PropEnum.atkVehicle:
                    this._atkVehicle += e;
                    break;
                case o.PropEnum.food:
                    this._food += e
                }
            }
            ,
            t.prototype.setIsSound = function(t) {
                this._isSound = t,
                localStorage.setItem("isSound", t.toString())
            }
            ,
            t.prototype.shareGame = function() {
                var t = "\u6211\u6b63\u5728\u300a\u4e09\u56fd\u6740OL\u300b\u5f00\u9ed1\u5b63\u5e2e\u52a9\u9b54\u53f8\u9a6c\u61ff\u653b\u514b\u57ce\u6c60\uff01\u5feb\u52a0\u5165\u6211\u4eec\u5427\uff01" + window.location.href;
                return __sgsYT.sendData("sanguoshaol__btn_btnShare"),
                new Promise(function(e, n) {
                    try {
                        var o = document.createElement("textarea");
                        o.value = t,
                        o.style.position = "fixed",
                        o.style.left = "-9999px",
                        document.body.appendChild(o),
                        o.select(),
                        document.execCommand("copy"),
                        document.body.removeChild(o),
                        e()
                    } catch (i) {
                        console.error("\u590d\u5236\u5931\u8d25:", i),
                        n(i)
                    }
                }
                )
            }
            ,
            t
        }();
        n.DataMgr = r,
        cc._RF.pop()
    }
    , {
        "../constants/gameEnum": "gameEnum",
        "../services/apiService": "apiService"
    }],
    eventListener: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "77837qPnBRBXYBXSiO4jvpM", "eventListener");
        var o = this && this.__spreadArrays || function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length;
            var o = Array(t)
              , i = 0;
            for (e = 0; e < n; e++)
                for (var r = arguments[e], c = 0, a = r.length; c < a; c++,
                i++)
                    o[i] = r[c];
            return o
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                this.events = null,
                this.events = {}
            }
            return t.prototype.register = function(t) {
                this.events[t] || (this.events[t] = [])
            }
            ,
            t.prototype.on = function(t, e, n) {
                this.events[t] || (this.events[t] = []),
                this.events[t].push({
                    cb: e,
                    target: n
                })
            }
            ,
            t.prototype.off = function(t, e) {
                if (this.events[t])
                    for (var n = 0; n < this.events[t].length; ++n)
                        if (this.events[t][n].cb == e) {
                            this.events[t].splice(n, 1);
                            break
                        }
            }
            ,
            t.prototype.once = function(t, e, n) {
                this.events[t] || (this.events[t] = []),
                this.events[t].push({
                    cb: e,
                    target: n,
                    once: !0
                })
            }
            ,
            t.prototype.removeByName = function(t) {
                this.events[t] && (this.events[t].length = 0,
                delete this.events[t])
            }
            ,
            t.prototype.removeByTarget = function(t) {
                for (var e in this.events)
                    "object" == typeof this.events[e] && (this.events[e] = this.events[e].filter(function(e) {
                        return e.target != t
                    }))
            }
            ,
            t.prototype.clear = function() {
                this.events = {}
            }
            ,
            t.prototype.emit = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                this.events[t] && (this.events[t] = this.events[t].filter(function(t) {
                    var n;
                    return t.cb && t.target && (n = t.cb).call.apply(n, o([t.target], e)),
                    1 != t.once
                }))
            }
            ,
            t
        }();
        n.default = i,
        cc._RF.pop()
    }
    , {}],
    eventMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2ac4eA5579Ek4sBuZ+IzDA4", "eventMgr"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.EventMgr = n.EventDefine = void 0;
        var o = t("../utils/eventListener");
        (function(t) {
            t.UPDATE_USER_DATA = "UPDATE_USER_DATA",
            t.GAME_START = "GAME_START",
            t.GAME_OVER = "GAME_OVER",
            t.UPDATE_LEVEL = "UPDATE_LEVEL",
            t.LAUNCH_BALL = "LAUNCH_BALL",
            t.BALL_COLLECT = "BALL_COLLECT",
            t.UPDATE_PROP_NUM = "UPDATE_PROP_NUM",
            t.USE_PROP = "USE_PROP"
        }
        )(n.EventDefine || (n.EventDefine = {}));
        var i = function() {
            function t() {
                this._eventDispatcher = null,
                this._eventDispatcher = new o.default
            }
            return Object.defineProperty(t, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new t),
                    this._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.on = function(t, e, n) {
                this._eventDispatcher.on(t, e, n)
            }
            ,
            t.prototype.off = function(t, e, n) {
                this._eventDispatcher.off(t, e, n)
            }
            ,
            t.prototype.emit = function(t, e) {
                this._eventDispatcher.emit(t, e)
            }
            ,
            t
        }();
        n.EventMgr = i,
        cc._RF.pop()
    }
    , {
        "../utils/eventListener": "eventListener"
    }],
    exitUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9ec2082nAFDaqcH2iITWgCp", "exitUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../config/uiConfig")
          , a = t("../manager/gameMgr")
          , s = t("../manager/uiMgr")
          , u = t("../services/apiService")
          , p = cc._decorator
          , l = p.ccclass
          , f = p.property
          , h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.backMainBtn = null,
                e.continueBtn = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.backMainBtn.node.on("click", this.onBackMainBtnClick, this),
                this.continueBtn.node.on("click", this.onContinueBtnClick, this)
            }
            ,
            e.prototype.onBackMainBtnClick = function() {
                var t = this;
                u.ApiService.gameEnd({
                    level: 101
                }).then(function() {
                    s.UIMgr.Instance.removeUI(c.UI_PATH.GAME),
                    s.UIMgr.Instance.showUI(c.UI_PATH.MAIN),
                    s.UIMgr.Instance.removeUI(t.node)
                })
            }
            ,
            e.prototype.onContinueBtnClick = function() {
                s.UIMgr.Instance.removeUI(this.node)
            }
            ,
            r([f(cc.Button)], e.prototype, "backMainBtn", void 0),
            r([f(cc.Button)], e.prototype, "continueBtn", void 0),
            r([l], e)
        }(cc.Component);
        n.default = h,
        cc._RF.pop()
    }
    , {
        "../config/uiConfig": "uiConfig",
        "../manager/gameMgr": "gameMgr",
        "../manager/uiMgr": "uiMgr",
        "../services/apiService": "apiService"
    }],
    gameConfig: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fe2berrj9tO94q/8K+vYuct", "gameConfig"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.GameConfig = n.IsDebug = void 0,
        n.IsDebug = !1,
        n.GameConfig = {
            ballBaseSpeed: 1e3,
            ballCollectDuration: .5,
            rowCount: 8,
            successLevel: 100,
            gameOverY: 120
        },
        cc._RF.pop()
    }
    , {}],
    gameEnum: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "48d49+QbkhGbIQqxdXQlSJ2", "gameEnum"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.LoginEnum = n.PropEnum = void 0,
        function(t) {
            t[t.atkVehicle = 1] = "atkVehicle",
            t[t.food = 0] = "food"
        }(n.PropEnum || (n.PropEnum = {})),
        function(t) {
            t[t.default = 0] = "default",
            t[t.wx = 1] = "wx",
            t[t.microApp = 2] = "microApp"
        }(n.LoginEnum || (n.LoginEnum = {})),
        cc._RF.pop()
    }
    , {}],
    gameMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9811fbIfYdJyokKcAzo2TKo", "gameMgr"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t("../config/gameConfig")
          , i = t("../config/uiConfig")
          , r = t("../constants/gameEnum")
          , c = t("../services/apiService")
          , a = t("./dataMgr")
          , s = t("./eventMgr")
          , u = t("./uiMgr")
          , p = function() {
            function t() {
                this._ganmeState = t.StateEnum.WAIT,
                this._level = 0,
                this._ballCount = 0,
                this._collectCount = 0,
                this._currentCollectPoint = cc.Vec2.ZERO,
                this._ganmeState = t.StateEnum.OVER
            }
            return Object.defineProperty(t, "instance", {
                get: function() {
                    return this._instance || (this._instance = new t),
                    this._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "level", {
                get: function() {
                    return this._level
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "ballCount", {
                get: function() {
                    return this._ballCount
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "gameState", {
                get: function() {
                    return this._ganmeState
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "currentCollectPoint", {
                get: function() {
                    return this._currentCollectPoint
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.reset = function() {
                this._level = 1,
                this._ballCount = 1,
                this._ganmeState = t.StateEnum.PLAYING,
                this._currentCollectPoint = cc.v2(0, 30)
            }
            ,
            t.prototype.addLevel = function() {
                this._level++
            }
            ,
            t.prototype.addBallCount = function() {
                this._collectCount++,
                this._ballCount++
            }
            ,
            t.prototype.gameStart = function() {
                var e = this;
                this._ganmeState = t.StateEnum.PLAYING,
                this.reset();
                var n = Array.from({
                    length: 4
                }, function(t, n) {
                    return e.createNewRowData(1 === n)
                });
                s.EventMgr.Instance.emit(s.EventDefine.GAME_START, n)
            }
            ,
            t.prototype.gameOver = function() {
                this._ganmeState = t.StateEnum.OVER,
                s.EventMgr.Instance.emit(s.EventDefine.GAME_OVER),
                u.UIMgr.Instance.showUI(i.UI_PATH.OVER, u.UILayer.TOP)
            }
            ,
            t.prototype.launchBallAtPosition = function(e) {
                if (this._ganmeState == t.StateEnum.PLAYING) {
                    this._ganmeState = t.StateEnum.WAIT;
                    var n = o.GameConfig.ballBaseSpeed
                      , i = Math.floor(this._level / 10)
                      , r = n * Math.min(2, .1 * i) + n
                      , c = e.subtract(this._currentCollectPoint).normalize().multiplyScalar(r);
                    s.EventMgr.Instance.emit(s.EventDefine.LAUNCH_BALL, c)
                }
            }
            ,
            t.prototype.startCollect = function(e) {
                this._ganmeState = t.StateEnum.COLLECT,
                this._currentCollectPoint = e.clone(),
                this.collectBall(),
                s.EventMgr.Instance.emit(s.EventDefine.BALL_COLLECT, e)
            }
            ,
            t.prototype.collectBall = function() {
                if (this._ganmeState == t.StateEnum.COLLECT && (this._collectCount++,
                this._collectCount >= this._ballCount)) {
                    this._collectCount = 0,
                    this._ganmeState = t.StateEnum.PLAYING,
                    this.addLevel();
                    var e = this.createNewRowData();
                    s.EventMgr.Instance.emit(s.EventDefine.UPDATE_LEVEL, e)
                }
            }
            ,
            t.prototype.createNewRowData = function(t) {
                void 0 === t && (t = !0);
                var e = Math.floor(this._level * (.5 * Math.floor(this._level / 50) + 1))
                  , n = [1, 3];
                this._level >= 8 && (n = [2, 3]);
                var i = Math.floor(Math.random() * (n[1] - n[0] + 1)) + n[0]
                  , r = new Array(o.GameConfig.rowCount).fill({
                    type: 0
                })
                  , c = new Array(o.GameConfig.rowCount).fill(0).map(function(t, e) {
                    return e
                });
                t && (r[c.splice(Math.floor(Math.random() * c.length), 1)[0]] = {
                    type: 2,
                    hp: 0
                });
                for (var a = 0; a < i; a++) {
                    var s = Math.floor(Math.random() * c.length);
                    r[c.splice(s, 1)[0]] = {
                        type: 1,
                        hp: e
                    }
                }
                return r
            }
            ,
            t.prototype.useProp = function(e) {
                var n = this;
                this._ganmeState == t.StateEnum.PLAYING && c.ApiService.useProp({
                    type: e
                }).then(function(t) {
                    e == r.PropEnum.food && n.addBallCount(),
                    a.DataMgr.instance.updatePropNum(t),
                    s.EventMgr.Instance.emit(s.EventDefine.USE_PROP, e),
                    s.EventMgr.Instance.emit(s.EventDefine.UPDATE_PROP_NUM)
                })
            }
            ,
            t.prototype.reviveGame = function() {
                this._ganmeState = t.StateEnum.PLAYING
            }
            ,
            t.StateEnum = {
                PLAYING: "playing",
                WAIT: "wait",
                COLLECT: "collect",
                OVER: "over"
            },
            t
        }();
        n.default = p,
        cc._RF.pop()
    }
    , {
        "../config/gameConfig": "gameConfig",
        "../config/uiConfig": "uiConfig",
        "../constants/gameEnum": "gameEnum",
        "../services/apiService": "apiService",
        "./dataMgr": "dataMgr",
        "./eventMgr": "eventMgr",
        "./uiMgr": "uiMgr"
    }],
    gameUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "026707bcsNOWqtj8Riisy1a", "gameUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../config/gameConfig")
          , a = t("../config/uiConfig")
          , s = t("../constants/gameEnum")
          , u = t("../manager/dataMgr")
          , p = t("../manager/eventMgr")
          , l = t("../manager/gameMgr")
          , f = t("../manager/uiMgr")
          , h = t("../utils/componentPool")
          , d = t("../utils/utils")
          , g = t("./ball")
          , v = t("./brick")
          , y = t("./rewardBox")
          , m = t("./role")
          , _ = cc._decorator
          , b = _.ccclass
          , P = _.property
          , w = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ballPrefab = null,
                e.brickPrefab = null,
                e.rewardBoxPrefab = null,
                e.wallNodeArr = [],
                e.role = null,
                e.containerNode = null,
                e.ballCountLab = null,
                e.levelLab = null,
                e.atkVehicleBtn = null,
                e.foodBtn = null,
                e.atkVehicleLab = null,
                e.foodLab = null,
                e.quitBtn = null,
                e.propNode = null,
                e.successTipNode = null,
                e.ballPool = null,
                e.brickPool = null,
                e.rewardBoxPool = null,
                e.balls = [],
                e.bricks = [],
                e.rewardBoxes = [],
                e.eventArray = [{
                    key: p.EventDefine.GAME_START,
                    call: e.gameStart
                }, {
                    key: p.EventDefine.GAME_OVER,
                    call: e.gameOver
                }, {
                    key: p.EventDefine.LAUNCH_BALL,
                    call: e.launchBall
                }, {
                    key: p.EventDefine.BALL_COLLECT,
                    call: e.collectBall
                }, {
                    key: p.EventDefine.UPDATE_LEVEL,
                    call: e.updateLevel
                }, {
                    key: p.EventDefine.UPDATE_PROP_NUM,
                    call: e.updatePropNum
                }, {
                    key: p.EventDefine.USE_PROP,
                    call: e.useProp
                }],
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                var t = this;
                cc.director.getPhysicsManager().enabled = !0,
                cc.director.getCollisionManager().enabled = !0,
                this.scheduleOnce(function() {
                    t.wallNodeArr.forEach(function(t) {
                        t.active = !0
                    })
                }, 0),
                this.ballPool = new h.ComponentPool(this.createBall.bind(this),this.initBall.bind(this)),
                this.brickPool = new h.ComponentPool(this.createBrick.bind(this),this.initBrick.bind(this)),
                this.rewardBoxPool = new h.ComponentPool(this.createRewardBox.bind(this),this.initRewardBox.bind(this)),
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this),
                this.eventArray.forEach(function(e) {
                    p.EventMgr.Instance.on(e.key, e.call, t)
                }),
                this.atkVehicleBtn.node.on("click", this.onAtkVehicleBtnClick, this),
                this.foodBtn.node.on("click", this.onFoodBtnClick, this),
                this.quitBtn.node.on("click", this.onQuitBtnClick, this),
                this.updatePropNum()
            }
            ,
            e.prototype.onDestroy = function() {
                var t = this;
                this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this),
                this.eventArray.forEach(function(e) {
                    p.EventMgr.Instance.off(e.key, e.call, t)
                }),
                this.ballPool.clear(),
                this.brickPool.clear(),
                this.rewardBoxPool.clear(),
                cc.director.getPhysicsManager().enabled = !1,
                cc.director.getCollisionManager().enabled = !1
            }
            ,
            e.prototype.start = function() {
                l.default.instance.gameStart()
            }
            ,
            e.prototype.onTouchEnd = function(t) {
                var e = t.getLocation()
                  , n = this.node.convertToNodeSpaceAR(e);
                l.default.instance.gameState == l.default.StateEnum.PLAYING && (e.y < 70 || l.default.instance.launchBallAtPosition(n))
            }
            ,
            e.prototype.createBall = function() {
                return cc.instantiate(this.ballPrefab).getComponent(g.default)
            }
            ,
            e.prototype.initBall = function(t) {
                t.node.active = !0,
                t.node.setPosition(l.default.instance.currentCollectPoint),
                this.containerNode.addChild(t.node)
            }
            ,
            e.prototype.createBrick = function() {
                return cc.instantiate(this.brickPrefab).getComponent(v.default)
            }
            ,
            e.prototype.initBrick = function(t) {
                t.node.active = !0,
                this.containerNode.addChild(t.node)
            }
            ,
            e.prototype.createRewardBox = function() {
                return cc.instantiate(this.rewardBoxPrefab).getComponent(y.default)
            }
            ,
            e.prototype.initRewardBox = function(t) {
                t.node.active = !0,
                this.containerNode.addChild(t.node)
            }
            ,
            e.prototype.gameStart = function(t) {
                var e = this;
                this.role.show(),
                this.gameReset(),
                this.scheduleOnce(function() {
                    e.addBall(l.default.instance.ballCount);
                    var n = 40 * t.length - 60;
                    t.forEach(function(t, o) {
                        var i = t
                          , r = cc.winSize.height - n + 40 * o;
                        i.forEach(function(t, n) {
                            if (1 === t.type) {
                                var o = e.brickPool.get();
                                o.node.setPosition(cc.v2(40 * n - 140, r)),
                                o.initData(t.hp),
                                e.bricks.push(o)
                            } else if (2 == t.type) {
                                var i = e.rewardBoxPool.get();
                                i.node.setPosition(cc.v2(40 * n - 140, r)),
                                e.rewardBoxes.push(i)
                            }
                        })
                    })
                }, 0)
            }
            ,
            e.prototype.addBall = function(t) {
                void 0 === t && (t = 1);
                for (var e = 0; e < t; e++) {
                    var n = this.ballPool.get();
                    n.node.setPosition(l.default.instance.currentCollectPoint),
                    this.balls.push(n)
                }
            }
            ,
            e.prototype.launchBall = function(t) {
                var e = this;
                this.role.hide(),
                this.hideProp(),
                this.balls.forEach(function(n, o) {
                    var i = l.default.instance.level
                      , r = Math.max(.05, .2 - .05 * Math.floor(i / 50));
                    e.scheduleOnce(function() {
                        n.setVelocity(t),
                        u.DataMgr.instance.isSound && d.playSound("launch")
                    }, r * o)
                })
            }
            ,
            e.prototype.collectBall = function() {
                this.role.show()
            }
            ,
            e.prototype.gameReset = function() {
                var t = this;
                this.balls.forEach(function(e) {
                    t.ballPool.put(e)
                }),
                this.balls.length = 0,
                this.bricks.forEach(function(e) {
                    t.brickPool.put(e)
                }),
                this.bricks.length = 0,
                this.rewardBoxes.forEach(function(e) {
                    t.rewardBoxPool.put(e)
                }),
                this.rewardBoxes.length = 0,
                this.updateTopInfo()
            }
            ,
            e.prototype.gameOver = function() {
                var t = this;
                this.bricks = this.bricks.filter(function(e) {
                    return !(e.node.y < c.GameConfig.gameOverY && (t.brickPool.put(e),
                    1))
                }),
                this.rewardBoxes = this.rewardBoxes.filter(function(e) {
                    return !(e.node.y < c.GameConfig.gameOverY && (t.rewardBoxPool.put(e),
                    1))
                })
            }
            ,
            e.prototype.updateLevel = function(t) {
                var e = this;
                this.showProp(),
                l.default.instance.level == c.GameConfig.successLevel && this.showSuccessTip(),
                this.bricks = this.bricks.filter(function(t) {
                    return t.hp <= 0 ? (e.brickPool.put(t),
                    !1) : (t.updatePos(),
                    !0)
                }),
                this.rewardBoxes = this.rewardBoxes.filter(function(t) {
                    return !1 === t.node.active || t.node.y < c.GameConfig.gameOverY ? (e.rewardBoxPool.put(t),
                    !1) : (t.updatePos(),
                    !0)
                }),
                t.forEach(function(t, n) {
                    if (1 === t.type) {
                        var o = e.brickPool.get();
                        o.node.setPosition(cc.v2(40 * n - 140, cc.winSize.height + 20)),
                        o.initData(t.hp),
                        e.bricks.push(o)
                    } else if (2 == t.type) {
                        var i = e.rewardBoxPool.get();
                        i.node.setPosition(cc.v2(40 * n - 140, cc.winSize.height + 20)),
                        e.rewardBoxes.push(i)
                    }
                }),
                l.default.instance.ballCount > this.balls.length && this.addBall(l.default.instance.ballCount - this.balls.length),
                this.updateTopInfo(),
                this.bricks.some(function(t) {
                    return t.node.y < c.GameConfig.gameOverY
                }) && l.default.instance.gameOver()
            }
            ,
            e.prototype.updatePropNum = function() {
                this.atkVehicleLab.string = "\u653b\u57ce\u8f66*" + u.DataMgr.instance.atkVehicle.toString(),
                this.foodLab.string = "\u7cae\u8349*" + u.DataMgr.instance.food.toString()
            }
            ,
            e.prototype.useProp = function(t) {
                var e = this;
                if (t == s.PropEnum.food && this.addBall(l.default.instance.ballCount - this.balls.length),
                t == s.PropEnum.atkVehicle && this.bricks.length > 0) {
                    var n = this.bricks.shift();
                    n.remove().then(function() {
                        e.brickPool.put(n)
                    })
                }
                this.updateTopInfo()
            }
            ,
            e.prototype.updateTopInfo = function() {
                this.ballCountLab.string = l.default.instance.ballCount.toString(),
                this.levelLab.string = l.default.instance.level.toString()
            }
            ,
            e.prototype.showProp = function() {
                cc.Tween.stopAllByTarget(this.propNode),
                cc.tween(this.propNode).to(.3, {
                    position: cc.v3(-136, 160)
                }, {
                    easing: "sineOut"
                }).start()
            }
            ,
            e.prototype.hideProp = function() {
                cc.Tween.stopAllByTarget(this.propNode),
                cc.tween(this.propNode).to(.3, {
                    position: cc.v3(-250, 160)
                }, {
                    easing: "sineIn"
                }).start()
            }
            ,
            e.prototype.onAtkVehicleBtnClick = function() {
                l.default.instance.gameState == l.default.StateEnum.PLAYING ? u.DataMgr.instance.atkVehicle > 0 ? l.default.instance.useProp(s.PropEnum.atkVehicle) : f.UIMgr.Instance.showToast("\u653b\u57ce\u8f66\u4e0d\u8db3~") : f.UIMgr.Instance.showToast("\u73b0\u5728\u8fd8\u4e0d\u80fd\u4f7f\u7528\u9053\u5177\u54e6~")
            }
            ,
            e.prototype.onFoodBtnClick = function() {
                l.default.instance.gameState == l.default.StateEnum.PLAYING ? u.DataMgr.instance.food > 0 ? l.default.instance.useProp(s.PropEnum.food) : f.UIMgr.Instance.showToast("\u7cae\u8349\u4e0d\u8db3~") : f.UIMgr.Instance.showToast("\u73b0\u5728\u8fd8\u4e0d\u80fd\u4f7f\u7528\u9053\u5177\u54e6~")
            }
            ,
            e.prototype.onQuitBtnClick = function() {
                f.UIMgr.Instance.showUI(a.UI_PATH.EXIT, f.UILayer.TOP)
            }
            ,
            e.prototype.showSuccessTip = function() {
                var t = this;
                this.successTipNode.opacity = 0,
                this.successTipNode.active = !0,
                cc.Tween.stopAllByTarget(this.successTipNode),
                cc.tween(this.successTipNode).to(.5, {
                    opacity: 255
                }, {
                    easing: "sineOut"
                }).delay(1).to(.5, {
                    opacity: 0
                }, {
                    easing: "sineIn"
                }).call(function() {
                    t.successTipNode.active = !1
                }).start()
            }
            ,
            r([P(cc.Prefab)], e.prototype, "ballPrefab", void 0),
            r([P(cc.Prefab)], e.prototype, "brickPrefab", void 0),
            r([P(cc.Prefab)], e.prototype, "rewardBoxPrefab", void 0),
            r([P(cc.Node)], e.prototype, "wallNodeArr", void 0),
            r([P(m.default)], e.prototype, "role", void 0),
            r([P(cc.Node)], e.prototype, "containerNode", void 0),
            r([P(cc.Label)], e.prototype, "ballCountLab", void 0),
            r([P(cc.Label)], e.prototype, "levelLab", void 0),
            r([P(cc.Button)], e.prototype, "atkVehicleBtn", void 0),
            r([P(cc.Button)], e.prototype, "foodBtn", void 0),
            r([P(cc.Label)], e.prototype, "atkVehicleLab", void 0),
            r([P(cc.Label)], e.prototype, "foodLab", void 0),
            r([P(cc.Button)], e.prototype, "quitBtn", void 0),
            r([P(cc.Node)], e.prototype, "propNode", void 0),
            r([P(cc.Node)], e.prototype, "successTipNode", void 0),
            r([b], e)
        }(cc.Component);
        n.default = w,
        cc._RF.pop()
    }
    , {
        "../config/gameConfig": "gameConfig",
        "../config/uiConfig": "uiConfig",
        "../constants/gameEnum": "gameEnum",
        "../manager/dataMgr": "dataMgr",
        "../manager/eventMgr": "eventMgr",
        "../manager/gameMgr": "gameMgr",
        "../manager/uiMgr": "uiMgr",
        "../utils/componentPool": "componentPool",
        "../utils/utils": "utils",
        "./ball": "ball",
        "./brick": "brick",
        "./rewardBox": "rewardBox",
        "./role": "role"
    }],
    httpClient: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a5675FnlwZGjbV+vcU8ahvr", "httpClient");
        var o, i = this && this.__assign || function() {
            return (i = Object.assign || function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                    for (var i in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ).apply(this, arguments)
        }
        , r = this && this.__awaiter || function(t, e, n, o) {
            return new (n || (n = Promise))(function(i, r) {
                function c(t) {
                    try {
                        s(o.next(t))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(t) {
                    try {
                        s(o.throw(t))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(c, a)
                }
                s((o = o.apply(t, e || [])).next())
            }
            )
        }
        , c = this && this.__generator || function(t, e) {
            var n, o, i, r, c = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function a(t) {
                return function(e) {
                    return s([t, e])
                }
            }
            function s(r) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (n = 1,
                        o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o),
                        0) : o.next) && !(i = i.call(o, r[1])).done)
                            return i;
                        switch (o = 0,
                        i && (r = [2 & r[0], i.value]),
                        r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            o = r[1],
                            r = [0];
                            continue;
                        case 7:
                            r = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                c.label = r[1];
                                break
                            }
                            if (6 === r[0] && c.label < i[1]) {
                                c.label = i[1],
                                i = r;
                                break
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2],
                                c.ops.push(r);
                                break
                            }
                            i[2] && c.ops.pop(),
                            c.trys.pop();
                            continue
                        }
                        r = e.call(t, c)
                    } catch (a) {
                        r = [6, a],
                        o = 0
                    } finally {
                        n = i = 0
                    }
                if (5 & r[0])
                    throw r[1];
                return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        function(t) {
            t.GET = "GET",
            t.POST = "POST",
            t.PUT = "PUT",
            t.DELETE = "DELETE"
        }(o || (o = {}));
        var a = function() {
            function t() {
                this.baseUrl = "",
                this.timeout = 3e4,
                this.headers = {
                    "Content-Type": "application/json"
                },
                this.interceptors = []
            }
            return t.getInstance = function() {
                return t.instance || (t.instance = new t),
                t.instance
            }
            ,
            t.prototype.setBaseUrl = function(t) {
                return this.baseUrl = t,
                this
            }
            ,
            t.prototype.setTimeout = function(t) {
                return this.timeout = t,
                this
            }
            ,
            t.prototype.setHeaders = function(t) {
                return this.headers = i(i({}, this.headers), t),
                this
            }
            ,
            t.prototype.addInterceptor = function(t) {
                return this.interceptors.push(t),
                this
            }
            ,
            t.prototype.clearInterceptors = function() {
                return this.interceptors = [],
                this
            }
            ,
            t.prototype.get = function(t, e, n) {
                return this.request(i({
                    url: t,
                    method: o.GET,
                    data: e
                }, n))
            }
            ,
            t.prototype.post = function(t, e, n) {
                return this.request(i({
                    url: t,
                    method: o.POST,
                    data: e
                }, n))
            }
            ,
            t.prototype.put = function(t, e, n) {
                return this.request(i({
                    url: t,
                    method: o.PUT,
                    data: e
                }, n))
            }
            ,
            t.prototype.delete = function(t, e) {
                return this.request(i({
                    url: t,
                    method: o.DELETE
                }, e))
            }
            ,
            t.prototype.request = function(t) {
                return r(this, void 0, Promise, function() {
                    var e, n, r, a, s, u, p, l, f, h, d, g, v, y, m, _, b, P, w, M;
                    return c(this, function(c) {
                        switch (c.label) {
                        case 0:
                            for (e = i({}, t),
                            n = 0,
                            r = this.interceptors; n < r.length; n++)
                                (M = r[n]).request && (e = M.request(e));
                            a = this.buildFullUrl(e.url),
                            e.method === o.GET && e.data && (a = this.buildUrl(a, e.data)),
                            s = {
                                method: e.method,
                                headers: i(i({}, this.headers), e.headers),
                                credentials: e.withCredentials ? "include" : "same-origin"
                            },
                            e.data && e.method !== o.GET && (s.body = JSON.stringify(e.data)),
                            c.label = 1;
                        case 1:
                            return c.trys.push([1, 7, , 8]),
                            u = new AbortController,
                            s.signal = u.signal,
                            p = setTimeout(function() {
                                u.abort()
                            }, e.timeout || this.timeout),
                            [4, fetch(a, s)];
                        case 2:
                            return l = c.sent(),
                            clearTimeout(p),
                            f = {},
                            l.headers.forEach(function(t, e) {
                                f[e] = t
                            }),
                            h = void 0,
                            (d = l.headers.get("content-type")) && d.includes("application/json") ? [4, l.json()] : [3, 4];
                        case 3:
                            return h = c.sent(),
                            [3, 6];
                        case 4:
                            return [4, l.text()];
                        case 5:
                            h = c.sent(),
                            c.label = 6;
                        case 6:
                            for (g = {
                                data: h,
                                status: l.status,
                                statusText: l.statusText,
                                headers: f
                            },
                            v = g,
                            y = 0,
                            m = this.interceptors; y < m.length; y++)
                                (M = m[y]).response && (v = M.response(v));
                            if (!l.ok)
                                throw new Error("Request failed with status " + l.status + ": " + l.statusText);
                            return [2, v.data];
                        case 7:
                            for (_ = c.sent(),
                            b = _,
                            P = 0,
                            w = this.interceptors; P < w.length; P++)
                                (M = w[P]).error && (b = M.error(b));
                            throw b;
                        case 8:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.prototype.buildFullUrl = function(t) {
                return t.startsWith("http://") || t.startsWith("https://") ? t : this.baseUrl + (t.startsWith("/") ? "" : "/") + t
            }
            ,
            t.prototype.buildUrl = function(t, e) {
                var n = Object.keys(e).map(function(t) {
                    var n;
                    return encodeURIComponent(t) + "=" + encodeURIComponent(null !== (n = e[t]) && void 0 !== n ? n : "")
                }).join("&");
                return n ? t + (t.includes("?") ? "&" : "?") + n : t
            }
            ,
            t
        }();
        n.default = a,
        cc._RF.pop()
    }
    , {}],
    loadingUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4f7bb2QbNNJvIoJmAD5GLZ7", "loadingUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        , c = this && this.__spreadArrays || function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length;
            var o = Array(t)
              , i = 0;
            for (e = 0; e < n; e++)
                for (var r = arguments[e], c = 0, a = r.length; c < a; c++,
                i++)
                    o[i] = r[c];
            return o
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../config/uiConfig")
          , s = t("../constants/gameEnum")
          , u = t("../manager/dataMgr")
          , p = t("../manager/uiMgr")
          , l = t("../services/apiService")
          , f = t("../services/wxService")
          , h = t("../utils/utils")
          , d = cc._decorator
          , g = d.ccclass
          , v = d.property
          , y = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.progressBar = null,
                e.pargressNode = null,
                e.tipLab = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                var t = this
                  , e = h.getUrlParam("token");
                this.tipLab.string = "\u6b63\u5728\u767b\u5f55...";
                var n = !1
                  , o = null;
                if (e)
                    u.DataMgr.instance.setLoginType(s.LoginEnum.microApp),
                    n = !0,
                    o = {
                        from: 1,
                        token: e
                    },
                    this.loadWxScript();
                else if (h.isWeiXin()) {
                    var i = h.getUrlParam("code");
                    if (!i)
                        return void this.redirect();
                    u.DataMgr.instance.setLoginType(s.LoginEnum.wx),
                    n = !0,
                    o = {
                        from: 2,
                        code: i
                    },
                    this.loadWxConfig()
                }
                n ? l.ApiService.login(o).then(function(e) {
                    localStorage.setItem("token", e.token),
                    u.DataMgr.instance.login(),
                    t.loadResources()
                }).catch(function(e) {
                    t.tipLab.string = "\u767b\u5f55\u5931\u8d25\uff1a" + e.msg,
                    -4 === e.code && (t.tipLab.string = "code\u5df2\u8fc7\u671f\uff0c\u6b63\u5728\u91cd\u65b0\u8fdb\u5165\u6e38\u620f...",
                    t.redirect())
                }) : (u.DataMgr.instance.setLoginType(s.LoginEnum.default),
                this.loadResources())
            }
            ,
            e.prototype.redirect = function() {
                var t = location.href.replace(/([?&])(code|state)=[^&]*/g, "$1").replace(/\?$/, "").replace(/[?&]+/g, "?").replace(/\?+$/, "")
                  , e = encodeURIComponent(t);
                location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa18303ad360d1aa8&redirect_uri=" + e + "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"
            }
            ,
            e.prototype.loadResources = function() {
                var t = this;
                this.tipLab.string = "\u9b54\u4e38\u6b63\u5728\u586b\u5145......",
                this.progressBar.progress = 0,
                this.pargressNode.active = !0,
                cc.resources.loadDir("/", function(e, n) {
                    if (n > 0) {
                        var o = e / n;
                        t.progressBar.progress = o;
                        var i = 210 * o - 105;
                        t.pargressNode.x = i
                    }
                }, function(e, n) {
                    e ? console.error("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25:", e) : (console.log("\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6210\uff0c\u5171\u52a0\u8f7d\u8d44\u6e90\u6570:", n.length),
                    t.onLoadComplete())
                })
            }
            ,
            e.prototype.onLoadComplete = function() {
                p.UIMgr.Instance.showUI(a.UI_PATH.MAIN),
                p.UIMgr.Instance.removeUI(a.UI_PATH.LOADING)
            }
            ,
            e.prototype.loadWxScript = function() {
                return new Promise(function(t, e) {
                    if (window.wx)
                        t();
                    else {
                        var n = document.createElement("script");
                        n.type = "text/javascript",
                        n.src = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js",
                        n.onload = function() {
                            return t()
                        }
                        ,
                        n.onerror = function() {
                            return e(new Error("Failed to load WeChat JSSDK"))
                        }
                        ,
                        document.head.appendChild(n)
                    }
                }
                )
            }
            ,
            e.prototype.loadWxConfig = function() {
                this.loadWxScript().then(function() {
                    f.WxService.getJsConfig({
                        url: encodeURIComponent(location.href)
                    }).then(function(t) {
                        console.log("\u83b7\u53d6JSSDK\u914d\u7f6e\u6210\u529f:", t),
                        wx.config({
                            debug: !1,
                            appId: t.appId,
                            timestamp: t.timestamp,
                            nonceStr: t.nonceStr,
                            signature: t.signature,
                            jsApiList: c(t.jsApiList, ["updateAppMessageShareData"])
                        }),
                        wx.ready(function() {
                            wx.updateAppMessageShareData({
                                title: "\u9b54\u53f8\u9a6c\u61ff\u4e0d\u505a\u4eba\u5566\uff01\u5feb\u6765\u548c\u4ed6\u4e00\u8d77\u5f39\u51fa\u201c\u61ff\u201d\u4e2a\u5927\u9b54\u4e38",
                                desc: "\u300a\u4e09\u56fd\u6740OL\u300b\u5f39\u51fa\u201c\u61ff\u201d\u4e2a\u5927\u9b54\u4e38\uff01\u5956\u52b1\u62ff\u4e0d\u505c",
                                link: location.origin + location.pathname,
                                imgUrl: "https://ygdmy25-static.sanguosha.com/shareImg.jpg",
                                success: function() {
                                    console.log("\u5206\u4eab\u7ed9\u670b\u53cb\u8bbe\u7f6e\u6210\u529f")
                                }
                            })
                        })
                    })
                })
            }
            ,
            r([v(cc.ProgressBar)], e.prototype, "progressBar", void 0),
            r([v(cc.Node)], e.prototype, "pargressNode", void 0),
            r([v(cc.Label)], e.prototype, "tipLab", void 0),
            r([g], e)
        }(cc.Component);
        n.default = y,
        cc._RF.pop()
    }
    , {
        "../config/uiConfig": "uiConfig",
        "../constants/gameEnum": "gameEnum",
        "../manager/dataMgr": "dataMgr",
        "../manager/uiMgr": "uiMgr",
        "../services/apiService": "apiService",
        "../services/wxService": "wxService",
        "../utils/utils": "utils"
    }],
    loginUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "525c5IHwGtMvLw/GbW9bMsu", "loginUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../manager/dataMgr")
          , a = t("../manager/eventMgr")
          , s = t("../manager/uiMgr")
          , u = t("../services/apiService")
          , p = cc._decorator
          , l = p.ccclass
          , f = p.property
          , h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.idEditBox = null,
                e.codeEditBox = null,
                e.loginBtn = null,
                e.ticketBtn = null,
                e._isAutoLogin = !1,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.loginBtn.node.on("click", this.onLoginBtnClick, this),
                this.ticketBtn.node.on("click", this.onTicketBtnClick, this)
            }
            ,
            e.prototype.start = function() {
                localStorage.getItem("guid") && (this.idEditBox.string = localStorage.getItem("guid")),
                localStorage.getItem("gcode") && (this.codeEditBox.string = localStorage.getItem("gcode")),
                localStorage.getItem("guid") && localStorage.getItem("gcode") && (this._isAutoLogin = !0,
                this.onLoginBtnClick())
            }
            ,
            e.prototype.onLoginBtnClick = function() {
                var t = this
                  , e = this.idEditBox.string
                  , n = this.codeEditBox.string;
                e && n ? u.ApiService.login({
                    from: 0,
                    guid: e,
                    gcode: n
                }).then(function(o) {
                    localStorage.setItem("guid", e),
                    localStorage.setItem("gcode", n),
                    t.loginSuccess(o.token)
                }).catch(function() {
                    t._isAutoLogin && (t.codeEditBox.string = ""),
                    localStorage.removeItem("gcode")
                }) : s.UIMgr.Instance.showToast("\u8bf7\u8f93\u5165id\u548c\u786e\u8ba4\u7801")
            }
            ,
            e.prototype.onTicketBtnClick = function() {
                var t = this;
                window.showSgsPass(function(e) {
                    u.ApiService.login({
                        from: 0,
                        ticket: e
                    }).then(function(e) {
                        t.loginSuccess(e.token),
                        window.hideSgsPass()
                    }).catch(function() {
                        window.hideSgsPass(),
                        s.UIMgr.Instance.showToast("\u767b\u5f55\u5931\u8d25~")
                    })
                })
            }
            ,
            e.prototype.loginSuccess = function(t) {
                localStorage.setItem("token", t),
                c.DataMgr.instance.login(),
                a.EventMgr.Instance.emit(a.EventDefine.UPDATE_USER_DATA),
                s.UIMgr.Instance.removeUI(this.node)
            }
            ,
            r([f(cc.EditBox)], e.prototype, "idEditBox", void 0),
            r([f(cc.EditBox)], e.prototype, "codeEditBox", void 0),
            r([f(cc.Button)], e.prototype, "loginBtn", void 0),
            r([f(cc.Button)], e.prototype, "ticketBtn", void 0),
            r([l], e)
        }(cc.Component);
        n.default = h,
        cc._RF.pop()
    }
    , {
        "../manager/dataMgr": "dataMgr",
        "../manager/eventMgr": "eventMgr",
        "../manager/uiMgr": "uiMgr",
        "../services/apiService": "apiService"
    }],
    mainSence: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8034546opBFgItIpPIPehXh", "mainSence");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("./config/uiConfig")
          , a = t("./manager/uiMgr")
          , s = cc._decorator
          , u = s.ccclass
          , p = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                a.UIMgr.Instance.init(this.node),
                a.UIMgr.Instance.showUI(c.UI_PATH.LOADING, a.UILayer.TOP)
            }
            ,
            r([u], e)
        }(cc.Component));
        n.default = p,
        cc._RF.pop()
    }
    , {
        "./config/uiConfig": "uiConfig",
        "./manager/uiMgr": "uiMgr"
    }],
    mainUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0fed8xO6NlGdYA5gQi+ZAGO", "mainUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../config/uiConfig")
          , a = t("../constants/gameEnum")
          , s = t("../manager/dataMgr")
          , u = t("../manager/eventMgr")
          , p = t("../manager/uiMgr")
          , l = t("../utils/utils")
          , f = cc._decorator
          , h = f.ccclass
          , d = f.property
          , g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.shareBtn = null,
                e.soundBtn = null,
                e.rankBtn = null,
                e.ruleBtn = null,
                e.taskBtn = null,
                e.startBtn = null,
                e.rewardBtn = null,
                e.soundBtnArr = [],
                e.redPtNode = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.redPtNode.active = !1,
                this.shareBtn.node.on("click", this.onShareBtnClick, this),
                this.soundBtn.node.on("click", this.onSoundBtnClick, this),
                this.rankBtn.node.on("click", this.onRankBtnClick, this),
                this.ruleBtn.node.on("click", this.onRuleBtnClick, this),
                this.taskBtn.node.on("click", this.onTaskBtnClick, this),
                this.startBtn.node.on("click", this.onStartBtnClick, this),
                this.rewardBtn.node.on("click", this.onRewardBtnClick, this),
                u.EventMgr.Instance.on(u.EventDefine.UPDATE_USER_DATA, this.updateUserData, this),
                this.updateSoundState()
            }
            ,
            e.prototype.onDestroy = function() {
                u.EventMgr.Instance.off(u.EventDefine.UPDATE_USER_DATA, this.updateUserData, this)
            }
            ,
            e.prototype.onEnable = function() {
                s.DataMgr.instance.isLogin ? this.updateUserData() : s.DataMgr.instance.loginType == a.LoginEnum.default && p.UIMgr.Instance.showUI(c.UI_PATH.LOGIN)
            }
            ,
            e.prototype.updateUserData = function() {
                var t = this;
                s.DataMgr.instance.initUserInfo().then(function(e) {
                    t.redPtNode.active = 1 === e.had_gift
                })
            }
            ,
            e.prototype.onShareBtnClick = function() {
                s.DataMgr.instance.shareGame().then(function() {
                    p.UIMgr.Instance.showToast("\u94fe\u63a5\u5df2\u590d\u5236\u5230\u526a\u5207\u677f~")
                })
            }
            ,
            e.prototype.onSoundBtnClick = function() {
                s.DataMgr.instance.setIsSound(!s.DataMgr.instance.isSound),
                this.updateSoundState()
            }
            ,
            e.prototype.onRankBtnClick = function() {
                p.UIMgr.Instance.showUI(c.UI_PATH.RANK, p.UILayer.TOP)
            }
            ,
            e.prototype.onRuleBtnClick = function() {
                p.UIMgr.Instance.showUI(c.UI_PATH.RULE, p.UILayer.TOP)
            }
            ,
            e.prototype.onTaskBtnClick = function() {
                p.UIMgr.Instance.showUI(c.UI_PATH.TASK, p.UILayer.TOP)
            }
            ,
            e.prototype.onStartBtnClick = function() {
                p.UIMgr.Instance.hideUI(c.UI_PATH.MAIN),
                p.UIMgr.Instance.showUI(c.UI_PATH.GAME)
            }
            ,
            e.prototype.onRewardBtnClick = function() {
                p.UIMgr.Instance.hideUI(c.UI_PATH.MAIN),
                p.UIMgr.Instance.showUI(c.UI_PATH.REWARD)
            }
            ,
            e.prototype.updateSoundState = function() {
                var t = this.soundBtn.node.getChildByName("btn").getComponent(cc.Sprite);
                t && (t.spriteFrame = this.soundBtnArr[s.DataMgr.instance.isSound ? 0 : 1]),
                s.DataMgr.instance.isSound ? l.playSound("bgm", !0) : l.stopSound()
            }
            ,
            r([d(cc.Button)], e.prototype, "shareBtn", void 0),
            r([d(cc.Button)], e.prototype, "soundBtn", void 0),
            r([d(cc.Button)], e.prototype, "rankBtn", void 0),
            r([d(cc.Button)], e.prototype, "ruleBtn", void 0),
            r([d(cc.Button)], e.prototype, "taskBtn", void 0),
            r([d(cc.Button)], e.prototype, "startBtn", void 0),
            r([d(cc.Button)], e.prototype, "rewardBtn", void 0),
            r([d(cc.SpriteFrame)], e.prototype, "soundBtnArr", void 0),
            r([d(cc.Node)], e.prototype, "redPtNode", void 0),
            r([h], e)
        }(cc.Component);
        n.default = g,
        cc._RF.pop()
    }
    , {
        "../config/uiConfig": "uiConfig",
        "../constants/gameEnum": "gameEnum",
        "../manager/dataMgr": "dataMgr",
        "../manager/eventMgr": "eventMgr",
        "../manager/uiMgr": "uiMgr",
        "../utils/utils": "utils"
    }],
    md5: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "16b1cPwv1FPIrHslG5HddfE", "md5"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.md5 = void 0,
        n.md5 = function(t) {
            var e = function(t, e) {
                return t << e | t >>> 32 - e
            }
              , n = function(t, e) {
                var n, o, i, r, c;
                return i = 2147483648 & t,
                r = 2147483648 & e,
                c = (1073741823 & t) + (1073741823 & e),
                (n = 1073741824 & t) & (o = 1073741824 & e) ? 2147483648 ^ c ^ i ^ r : n | o ? 1073741824 & c ? 3221225472 ^ c ^ i ^ r : 1073741824 ^ c ^ i ^ r : c ^ i ^ r
            }
              , o = function(t, e, n) {
                return t & e | ~t & n
            }
              , i = function(t, e, n) {
                return t & n | e & ~n
            }
              , r = function(t, e, n) {
                return t ^ e ^ n
            }
              , c = function(t, e, n) {
                return e ^ (t | ~n)
            }
              , a = function(t, i, r, c, a, s, u) {
                return t = n(t, n(n(o(i, r, c), a), u)),
                n(e(t, s), i)
            }
              , s = function(t, o, r, c, a, s, u) {
                return t = n(t, n(n(i(o, r, c), a), u)),
                n(e(t, s), o)
            }
              , u = function(t, o, i, c, a, s, u) {
                return t = n(t, n(n(r(o, i, c), a), u)),
                n(e(t, s), o)
            }
              , p = function(t, o, i, r, a, s, u) {
                return t = n(t, n(n(c(o, i, r), a), u)),
                n(e(t, s), o)
            }
              , l = function(t) {
                for (var e, n = t.length, o = n + 8, i = 16 * ((o - o % 64) / 64 + 1), r = Array(i - 1), c = 0, a = 0; a < n; )
                    c = a % 4 * 8,
                    r[e = (a - a % 4) / 4] = r[e] | t.charCodeAt(a) << c,
                    a++;
                return c = a % 4 * 8,
                r[e = (a - a % 4) / 4] = r[e] | 128 << c,
                r[i - 2] = n << 3,
                r[i - 1] = n >>> 29,
                r
            }
              , f = function(t) {
                var e, n = "", o = "";
                for (e = 0; e <= 3; e++)
                    n += (o = "0" + (t >>> 8 * e & 255).toString(16)).substr(o.length - 2, 2);
                return n
            }
              , h = function(t) {
                t = t.toString().replace(/\x0d\x0a/g, "\n");
                for (var e = "", n = 0; n < t.length; n++) {
                    var o = t.charCodeAt(n);
                    o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192),
                    e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224),
                    e += String.fromCharCode(o >> 6 & 63 | 128),
                    e += String.fromCharCode(63 & o | 128))
                }
                return e
            };
            return function(t) {
                var e, o, i, r, c, d, g, v, y, m = Array();
                for (t = h(t),
                m = l(t),
                d = 1732584193,
                g = 4023233417,
                v = 2562383102,
                y = 271733878,
                e = 0; e < m.length; e += 16)
                    o = d,
                    i = g,
                    r = v,
                    c = y,
                    d = a(d, g, v, y, m[e + 0], 7, 3614090360),
                    y = a(y, d, g, v, m[e + 1], 12, 3905402710),
                    v = a(v, y, d, g, m[e + 2], 17, 606105819),
                    g = a(g, v, y, d, m[e + 3], 22, 3250441966),
                    d = a(d, g, v, y, m[e + 4], 7, 4118548399),
                    y = a(y, d, g, v, m[e + 5], 12, 1200080426),
                    v = a(v, y, d, g, m[e + 6], 17, 2821735955),
                    g = a(g, v, y, d, m[e + 7], 22, 4249261313),
                    d = a(d, g, v, y, m[e + 8], 7, 1770035416),
                    y = a(y, d, g, v, m[e + 9], 12, 2336552879),
                    v = a(v, y, d, g, m[e + 10], 17, 4294925233),
                    g = a(g, v, y, d, m[e + 11], 22, 2304563134),
                    d = a(d, g, v, y, m[e + 12], 7, 1804603682),
                    y = a(y, d, g, v, m[e + 13], 12, 4254626195),
                    v = a(v, y, d, g, m[e + 14], 17, 2792965006),
                    g = a(g, v, y, d, m[e + 15], 22, 1236535329),
                    d = s(d, g, v, y, m[e + 1], 5, 4129170786),
                    y = s(y, d, g, v, m[e + 6], 9, 3225465664),
                    v = s(v, y, d, g, m[e + 11], 14, 643717713),
                    g = s(g, v, y, d, m[e + 0], 20, 3921069994),
                    d = s(d, g, v, y, m[e + 5], 5, 3593408605),
                    y = s(y, d, g, v, m[e + 10], 9, 38016083),
                    v = s(v, y, d, g, m[e + 15], 14, 3634488961),
                    g = s(g, v, y, d, m[e + 4], 20, 3889429448),
                    d = s(d, g, v, y, m[e + 9], 5, 568446438),
                    y = s(y, d, g, v, m[e + 14], 9, 3275163606),
                    v = s(v, y, d, g, m[e + 3], 14, 4107603335),
                    g = s(g, v, y, d, m[e + 8], 20, 1163531501),
                    d = s(d, g, v, y, m[e + 13], 5, 2850285829),
                    y = s(y, d, g, v, m[e + 2], 9, 4243563512),
                    v = s(v, y, d, g, m[e + 7], 14, 1735328473),
                    g = s(g, v, y, d, m[e + 12], 20, 2368359562),
                    d = u(d, g, v, y, m[e + 5], 4, 4294588738),
                    y = u(y, d, g, v, m[e + 8], 11, 2272392833),
                    v = u(v, y, d, g, m[e + 11], 16, 1839030562),
                    g = u(g, v, y, d, m[e + 14], 23, 4259657740),
                    d = u(d, g, v, y, m[e + 1], 4, 2763975236),
                    y = u(y, d, g, v, m[e + 4], 11, 1272893353),
                    v = u(v, y, d, g, m[e + 7], 16, 4139469664),
                    g = u(g, v, y, d, m[e + 10], 23, 3200236656),
                    d = u(d, g, v, y, m[e + 13], 4, 681279174),
                    y = u(y, d, g, v, m[e + 0], 11, 3936430074),
                    v = u(v, y, d, g, m[e + 3], 16, 3572445317),
                    g = u(g, v, y, d, m[e + 6], 23, 76029189),
                    d = u(d, g, v, y, m[e + 9], 4, 3654602809),
                    y = u(y, d, g, v, m[e + 12], 11, 3873151461),
                    v = u(v, y, d, g, m[e + 15], 16, 530742520),
                    g = u(g, v, y, d, m[e + 2], 23, 3299628645),
                    d = p(d, g, v, y, m[e + 0], 6, 4096336452),
                    y = p(y, d, g, v, m[e + 7], 10, 1126891415),
                    v = p(v, y, d, g, m[e + 14], 15, 2878612391),
                    g = p(g, v, y, d, m[e + 5], 21, 4237533241),
                    d = p(d, g, v, y, m[e + 12], 6, 1700485571),
                    y = p(y, d, g, v, m[e + 3], 10, 2399980690),
                    v = p(v, y, d, g, m[e + 10], 15, 4293915773),
                    g = p(g, v, y, d, m[e + 1], 21, 2240044497),
                    d = p(d, g, v, y, m[e + 8], 6, 1873313359),
                    y = p(y, d, g, v, m[e + 15], 10, 4264355552),
                    v = p(v, y, d, g, m[e + 6], 15, 2734768916),
                    g = p(g, v, y, d, m[e + 13], 21, 1309151649),
                    d = p(d, g, v, y, m[e + 4], 6, 4149444226),
                    y = p(y, d, g, v, m[e + 11], 10, 3174756917),
                    v = p(v, y, d, g, m[e + 2], 15, 718787259),
                    g = p(g, v, y, d, m[e + 9], 21, 3951481745),
                    d = n(d, o),
                    g = n(g, i),
                    v = n(v, r),
                    y = n(y, c);
                return (f(d) + f(g) + f(v) + f(y)).toLowerCase()
            }(t)
        }
        ,
        cc._RF.pop()
    }
    , {}],
    overUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e17c0TRl3xHAY+OjNF19JiK", "overUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../config/gameConfig")
          , a = t("../config/uiConfig")
          , s = t("../manager/dataMgr")
          , u = t("../manager/gameMgr")
          , p = t("../manager/uiMgr")
          , l = t("../services/apiService")
          , f = cc._decorator
          , h = f.ccclass
          , d = f.property
          , g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.overText = null,
                e.againBtn = null,
                e.shareBtn = null,
                e.storeBtn = null,
                e.failNode = null,
                e.successNode = null,
                e.windowNode = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                var t = this;
                this.againBtn.node.on("click", this.onAgainBtnClick, this),
                this.shareBtn.node.on("click", this.onShareBtnClick, this),
                this.storeBtn.node.on("click", this.onStoreBtnClick, this),
                this.windowNode.active = !1,
                l.ApiService.gameEnd({
                    level: u.default.instance.level
                }).then(function(e) {
                    t.showResult(e)
                })
            }
            ,
            e.prototype.onAgainBtnClick = function() {
                u.default.instance.gameStart(),
                p.UIMgr.Instance.removeUI(this.node)
            }
            ,
            e.prototype.onShareBtnClick = function() {
                var t = this;
                s.DataMgr.instance.shareGame().then(function() {
                    p.UIMgr.Instance.showToast("\u94fe\u63a5\u5df2\u590d\u5236\u5230\u526a\u5207\u677f~"),
                    l.ApiService.shareGame().then(function(e) {
                        e.chance && e.chance > 0 ? (u.default.instance.reviveGame(),
                        p.UIMgr.Instance.removeUI(t.node)) : p.UIMgr.Instance.showToast("\u5206\u4eab\u6b21\u6570\u5df2\u7528\u5b8c~")
                    })
                })
            }
            ,
            e.prototype.onStoreBtnClick = function() {
                p.UIMgr.Instance.showUI(a.UI_PATH.REWARD, p.UILayer.TOP)
            }
            ,
            e.prototype.showResult = function(t) {
                var e = u.default.instance.level;
                if (this.windowNode.active = !0,
                e < c.GameConfig.successLevel) {
                    this.failNode.active = !0,
                    this.successNode.active = !1;
                    var n = ["<color=#1D0E1F>\u60a8\u5df2\u653b\u514b<color=#FF1E00>\u7b2c" + e + "\u5c42<color=#1D0E1F>\u57ce\u6c60\uff0c\u80dc\u5229\u5c31\u5728\u54ab\u5c3a\uff01", "\u5206\u4eab\u6218\u7ee9\u83b7\u5f97\u4e00\u6b21\u7ee7\u7eed\u653b\u57ce\u673a\u4f1a\uff01", "(\u6bcf\u65e5<color=#FF1E00>3\u6b21<color=#1D0E1F>\u673a\u4f1a)</color>"].join("\n");
                    this.overText.string = n
                } else {
                    this.failNode.active = !1,
                    this.successNode.active = !0;
                    var o = ["<color=#1D0E1F>\u606d\u559c\u4f60\u6210\u529f\u653b\u514b<color=#FF1E00>" + e + "\u5c42<color=#1D0E1F>\u57ce\u6c60!\u8d85\u8d8a<color=#FF1E00>" + t.rate + "%<color=#1D0E1F>\u4e3b\u516c", "\u5206\u4eab\u6218\u7ee9\u83b7\u5f97\u4e00\u6b21\u7ee7\u7eed\u653b\u57ce\u673a\u4f1a\uff01", "(\u6bcf\u65e5<color=#FF1E00>3\u6b21<color=#1D0E1F>\u673a\u4f1a)</color>"].join("\n");
                    this.overText.string = o
                }
            }
            ,
            r([d(cc.RichText)], e.prototype, "overText", void 0),
            r([d(cc.Button)], e.prototype, "againBtn", void 0),
            r([d(cc.Button)], e.prototype, "shareBtn", void 0),
            r([d(cc.Button)], e.prototype, "storeBtn", void 0),
            r([d(cc.Node)], e.prototype, "failNode", void 0),
            r([d(cc.Node)], e.prototype, "successNode", void 0),
            r([d(cc.Node)], e.prototype, "windowNode", void 0),
            r([h], e)
        }(cc.Component);
        n.default = g,
        cc._RF.pop()
    }
    , {
        "../config/gameConfig": "gameConfig",
        "../config/uiConfig": "uiConfig",
        "../manager/dataMgr": "dataMgr",
        "../manager/gameMgr": "gameMgr",
        "../manager/uiMgr": "uiMgr",
        "../services/apiService": "apiService"
    }],
    popupComm: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ae327WWuJVEXan4OeQ9eMZ6", "popupComm");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../manager/uiMgr")
          , a = cc._decorator
          , s = a.ccclass
          , u = a.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.bg = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.bg.on(cc.Node.EventType.TOUCH_END, this.onBgClick, this)
            }
            ,
            e.prototype.onBgClick = function() {
                c.UIMgr.Instance.removeUI(this.node)
            }
            ,
            r([u(cc.Node)], e.prototype, "bg", void 0),
            r([s], e)
        }(cc.Component);
        n.default = p,
        cc._RF.pop()
    }
    , {
        "../manager/uiMgr": "uiMgr"
    }],
    rankUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1ec80HN8kxFr7H9BhO6EoSN", "rankUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../services/apiService")
          , a = cc._decorator
          , s = a.ccclass
          , u = a.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemNode = null,
                e.emptyNode = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                for (var t = this, e = 0; e < 5; e++) {
                    var n = this.itemNode.getChildByName("item_" + (e + 1));
                    n && (n.active = !1)
                }
                this.emptyNode.active = !0,
                c.ApiService.getRank().then(function(e) {
                    t.showRank(e.list)
                })
            }
            ,
            e.prototype.showRank = function(t) {
                if (0 != t.length) {
                    this.emptyNode.active = !1;
                    for (var e = function(e) {
                        var o = n.itemNode.getChildByName("item_" + (e + 1))
                          , i = t[e];
                        o.getChildByName("name_lab").getComponent(cc.Label).string = i.nickname,
                        i.avatar && cc.assetManager.loadRemote(i.avatar, function(t, e) {
                            if (t)
                                console.error("\u52a0\u8f7d\u56fe\u7247\u5931\u8d25:", t);
                            else {
                                var n = new cc.SpriteFrame(e);
                                cc.find("avatar/mask/img", o).getComponent(cc.Sprite).spriteFrame = n
                            }
                        }),
                        o.active = !0,
                        o.getChildByName("level_lab").getComponent(cc.Label).string = "\u653b\u514b\u57ce\u6c60\uff1a" + i.level.toString()
                    }, n = this, o = 0; o < t.length; o++)
                        e(o)
                } else
                    this.emptyNode.active = !0
            }
            ,
            r([u(cc.Node)], e.prototype, "itemNode", void 0),
            r([u(cc.Node)], e.prototype, "emptyNode", void 0),
            r([s], e)
        }(cc.Component);
        n.default = p,
        cc._RF.pop()
    }
    , {
        "../services/apiService": "apiService"
    }],
    rewardBox: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "20ca8htzuRGw6+BQ0wU7XH9", "rewardBox");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../manager/gameMgr")
          , a = cc._decorator
          , s = a.ccclass
          , u = (a.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.onCollisionEnter = function() {
                this.node.active = !1,
                c.default.instance.addBallCount()
            }
            ,
            e.prototype.updatePos = function() {
                cc.tween(this.node).by(.5, {
                    y: -40
                }).start()
            }
            ,
            r([s], e)
        }(cc.Component));
        n.default = u,
        cc._RF.pop()
    }
    , {
        "../manager/gameMgr": "gameMgr"
    }],
    rewardItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bd9eeUVVa1JUq8W3fmsanYz", "rewardItem");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../services/apiService")
          , a = cc._decorator
          , s = a.ccclass
          , u = a.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon = null,
                e.descLabel = null,
                e.receiveBtn = null,
                e.incomplete = null,
                e.countLab = null,
                e.normalIcon = null,
                e.highIcon = null,
                e.rewardData = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.receiveBtn.node.on("click", this.onReceiveBtnClick, this)
            }
            ,
            e.prototype.setData = function(t) {
                var e = this;
                this.rewardData = t,
                t.img && cc.assetManager.loadRemote(t.img, function(t, n) {
                    if (t)
                        console.error("\u52a0\u8f7d\u56fe\u7247\u5931\u8d25:", t);
                    else {
                        var o = new cc.SpriteFrame(n);
                        e.icon.spriteFrame = o
                    }
                }),
                this.descLabel.string = t.task_name,
                this.setBtnState(t.done),
                4 === t.task_id ? (this.normalIcon.active = !1,
                this.highIcon.active = !0,
                this.countLab.string = "X 5") : (this.normalIcon.active = !0,
                this.highIcon.active = !1,
                this.countLab.string = "X 1")
            }
            ,
            e.prototype.setBtnState = function(t) {
                0 == t ? (this.incomplete.active = !0,
                this.receiveBtn.node.active = !1) : 1 == t ? (this.incomplete.active = !1,
                this.receiveBtn.node.active = !0,
                this.receiveBtn.interactable = !0) : 2 == t && (this.incomplete.active = !1,
                this.receiveBtn.node.active = !0,
                this.receiveBtn.interactable = !1)
            }
            ,
            e.prototype.onReceiveBtnClick = function() {
                var t = this;
                this.rewardData && (console.log("Task completed:", this.rewardData),
                this.node.emit("taskComplete", this.rewardData),
                c.ApiService.rewardReceive({
                    task_id: this.rewardData.task_id
                }).then(function() {
                    t.setBtnState(2)
                }))
            }
            ,
            r([u(cc.Sprite)], e.prototype, "icon", void 0),
            r([u(cc.Label)], e.prototype, "descLabel", void 0),
            r([u(cc.Button)], e.prototype, "receiveBtn", void 0),
            r([u(cc.Node)], e.prototype, "incomplete", void 0),
            r([u(cc.Label)], e.prototype, "countLab", void 0),
            r([u(cc.Node)], e.prototype, "normalIcon", void 0),
            r([u(cc.Node)], e.prototype, "highIcon", void 0),
            r([s], e)
        }(cc.Component);
        n.default = p,
        cc._RF.pop()
    }
    , {
        "../services/apiService": "apiService"
    }],
    rewardUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e9d60v89YpA8JgFOU9lN40f", "rewardUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = cc._decorator
          , a = c.ccclass
          , s = c.property
          , u = t("../config/uiConfig")
          , p = t("../manager/uiMgr")
          , l = t("../services/apiService")
          , f = t("./rewardItem")
          , h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.backBtn = null,
                e.itemNode = null,
                e.itemContent = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                var t = this;
                this.backBtn.node.on("click", this.onBackBtnClick, this),
                this.itemNode.active = !1,
                l.ApiService.getReward().then(function(e) {
                    t.itemContent.height = 107 * e.list.length + 38,
                    e.list.forEach(function(e) {
                        var n = cc.instantiate(t.itemNode);
                        n.getComponent(f.default).setData(e),
                        n.parent = t.itemNode.parent,
                        n.active = !0
                    })
                })
            }
            ,
            e.prototype.onBackBtnClick = function() {
                p.UIMgr.Instance.removeUI(u.UI_PATH.REWARD),
                p.UIMgr.Instance.showUI(u.UI_PATH.MAIN)
            }
            ,
            r([s(cc.Button)], e.prototype, "backBtn", void 0),
            r([s(cc.Node)], e.prototype, "itemNode", void 0),
            r([s(cc.Node)], e.prototype, "itemContent", void 0),
            r([a], e)
        }(cc.Component);
        n.default = h,
        cc._RF.pop()
    }
    , {
        "../config/uiConfig": "uiConfig",
        "../manager/uiMgr": "uiMgr",
        "../services/apiService": "apiService",
        "./rewardItem": "rewardItem"
    }],
    role: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "dbe48sHeZ9FcIivIK8mnq8X", "role");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../manager/gameMgr")
          , a = cc._decorator
          , s = a.ccclass
          , u = a.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.moqiArr = [],
                e
            }
            return i(e, t),
            e.prototype.collectBall = function(t) {
                this.show(),
                this.node.x = t.x
            }
            ,
            e.prototype.updateRole = function() {
                this.moqiArr.forEach(function(t) {
                    t.active = !1
                }),
                c.default.instance.level >= 50 && (this.moqiArr[0].active = !0),
                c.default.instance.level >= 100 && (this.moqiArr[1].active = !0),
                c.default.instance.level >= 150 && (this.moqiArr[2].active = !0)
            }
            ,
            e.prototype.show = function() {
                this.updateRole(),
                this.node.x = c.default.instance.currentCollectPoint.x,
                cc.Tween.stopAllByTarget(this.node),
                this.node.active = !0,
                cc.tween(this.node).to(.3, {
                    opacity: 255
                }, {
                    easing: "sineOut"
                }).start()
            }
            ,
            e.prototype.hide = function() {
                var t = this;
                cc.Tween.stopAllByTarget(this.node),
                cc.tween(this.node).to(.3, {
                    opacity: 0
                }, {
                    easing: "sineIn"
                }).call(function() {
                    return t.node.active = !1
                }).start()
            }
            ,
            r([u(cc.Node)], e.prototype, "moqiArr", void 0),
            r([s], e)
        }(cc.Component);
        n.default = p,
        cc._RF.pop()
    }
    , {
        "../manager/gameMgr": "gameMgr"
    }],
    ruleUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "abb0bJHCANBGKY8n0HwjmOu", "ruleUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../constants/gameEnum")
          , a = t("../manager/dataMgr")
          , s = cc._decorator
          , u = s.ccclass
          , p = s.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.defaultRuleNode = null,
                e.microAppRuleNode = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                a.DataMgr.instance.loginType === c.LoginEnum.microApp ? (this.defaultRuleNode.active = !1,
                this.microAppRuleNode.active = !0) : (this.defaultRuleNode.active = !0,
                this.microAppRuleNode.active = !1)
            }
            ,
            r([p(cc.Node)], e.prototype, "defaultRuleNode", void 0),
            r([p(cc.Node)], e.prototype, "microAppRuleNode", void 0),
            r([u], e)
        }(cc.Component);
        n.default = l,
        cc._RF.pop()
    }
    , {
        "../constants/gameEnum": "gameEnum",
        "../manager/dataMgr": "dataMgr"
    }],
    taskItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9cc67Jo9JlHbbfrXRtOb0PH", "taskItem");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t("../config/gameConfig")
          , a = t("../manager/dataMgr")
          , s = t("../services/apiService")
          , u = cc._decorator
          , p = u.ccclass
          , l = u.property
          , f = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon = null,
                e.descLabel = null,
                e.completeBtn = null,
                e.receiveBtn = null,
                e.propIconArray = [],
                e.taskData = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.completeBtn.node.on("click", this.onCompleteBtnClick, this),
                this.receiveBtn.node.on("click", this.onReceiveBtnClick, this)
            }
            ,
            e.prototype.setData = function(t) {
                this.taskData = t,
                this.icon.spriteFrame = this.propIconArray[t.reward],
                this.descLabel.string = t.task_name,
                this.setBtnState(t.done)
            }
            ,
            e.prototype.setBtnState = function(t) {
                0 == t ? (this.completeBtn.node.active = !0,
                this.receiveBtn.node.active = !1) : 1 == t ? (this.completeBtn.node.active = !1,
                this.receiveBtn.node.active = !0,
                this.receiveBtn.interactable = !0) : 2 == t && (this.completeBtn.node.active = !1,
                this.receiveBtn.node.active = !0,
                this.receiveBtn.interactable = !1)
            }
            ,
            e.prototype.onCompleteBtnClick = function() {
                var t = this;
                if (this.taskData) {
                    var e = ""
                      , n = !1
                      , o = !0;
                    switch (this.taskData.task_id) {
                    case 2:
                        e = "https://mp.weixin.qq.com/s/jG7-5x_FrkSRFIKZm0Nidw";
                        break;
                    case 3:
                        e = "https://v.douyin.com/iPWPhSVH";
                        break;
                    case 4:
                        e = "https://space.bilibili.com/1672821212";
                        break;
                    case 5:
                        e = "https://www.xiaohongshu.com/user/profile/66024026000000000b00d628";
                        break;
                    case 7:
                        e = "/pages/setup/setup",
                        n = !0,
                        o = !1;
                        break;
                    case 8:
                        e = "/pages/EditPost/EditPost",
                        n = !0,
                        o = !1;
                        break;
                    case 9:
                        e = c.IsDebug ? "/pages/post/post?tid=832" : "/pages/post/post?tid=1649967",
                        n = !0,
                        o = !1
                    }
                    if (e) {
                        var i = function() {
                            n ? wx.miniProgram.navigateTo({
                                url: e
                            }) : location.href = e
                        };
                        o ? s.ApiService.taskFinish({
                            task_id: this.taskData.task_id
                        }).then(function() {
                            t.setBtnState(1),
                            i()
                        }) : i()
                    }
                }
            }
            ,
            e.prototype.onReceiveBtnClick = function() {
                var t = this;
                s.ApiService.taskReceive({
                    task_id: this.taskData.task_id
                }).then(function(e) {
                    t.setBtnState(2),
                    a.DataMgr.instance.receiveProp(e.reward, e.num)
                })
            }
            ,
            r([l(cc.Sprite)], e.prototype, "icon", void 0),
            r([l(cc.Label)], e.prototype, "descLabel", void 0),
            r([l(cc.Button)], e.prototype, "completeBtn", void 0),
            r([l(cc.Button)], e.prototype, "receiveBtn", void 0),
            r([l(cc.SpriteFrame)], e.prototype, "propIconArray", void 0),
            r([p], e)
        }(cc.Component);
        n.default = f,
        cc._RF.pop()
    }
    , {
        "../config/gameConfig": "gameConfig",
        "../manager/dataMgr": "dataMgr",
        "../services/apiService": "apiService"
    }],
    taskUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2406cKU9xVNcpcYBow7LMzv", "taskUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = cc._decorator
          , a = c.ccclass
          , s = c.property
          , u = t("../config/uiConfig")
          , p = t("../constants/gameEnum")
          , l = t("../manager/dataMgr")
          , f = t("../manager/uiMgr")
          , h = t("../services/apiService")
          , d = t("./taskItem")
          , g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.backBtn = null,
                e.itemNode = null,
                e.itemContent = null,
                e
            }
            return i(e, t),
            e.prototype.onLoad = function() {
                this.backBtn.node.on("click", this.onBackBtnClick, this),
                this.itemNode.active = !1,
                this.updateItemList(),
                document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this))
            }
            ,
            e.prototype.onDestroy = function() {
                document.removeEventListener("visibilitychange", this.handleVisibilityChange.bind(this))
            }
            ,
            e.prototype.handleVisibilityChange = function() {
                "visible" === document.visibilityState && this.updateItemList()
            }
            ,
            e.prototype.updateItemList = function() {
                for (var t = this, e = this.itemContent.children.length - 1; e >= 0; e--) {
                    var n = this.itemContent.children[e];
                    n.active && n.removeFromParent(!0)
                }
                var o = l.DataMgr.instance.loginType == p.LoginEnum.microApp ? 1 : 0;
                h.ApiService.getTask({
                    from: o
                }).then(function(e) {
                    t.itemContent.height = 87 * e.list.length + 30,
                    e.list.forEach(function(e) {
                        var n = cc.instantiate(t.itemNode);
                        n.getComponent(d.default).setData(e),
                        n.parent = t.itemNode.parent,
                        n.active = !0
                    })
                })
            }
            ,
            e.prototype.onBackBtnClick = function() {
                f.UIMgr.Instance.removeUI(u.UI_PATH.TASK)
            }
            ,
            r([s(cc.Button)], e.prototype, "backBtn", void 0),
            r([s(cc.Node)], e.prototype, "itemNode", void 0),
            r([s(cc.Node)], e.prototype, "itemContent", void 0),
            r([a], e)
        }(cc.Component);
        n.default = g,
        cc._RF.pop()
    }
    , {
        "../config/uiConfig": "uiConfig",
        "../constants/gameEnum": "gameEnum",
        "../manager/dataMgr": "dataMgr",
        "../manager/uiMgr": "uiMgr",
        "../services/apiService": "apiService",
        "./taskItem": "taskItem"
    }],
    toastUi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "15dbcFwi/ZAjIA49pDadtnU", "toastUi");
        var o, i = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), r = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c),
            c
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = cc._decorator
          , a = c.ccclass
          , s = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.labelNode = null,
                e.showNodeArray = [],
                e
            }
            return i(e, t),
            e.prototype.showToast = function(t, e) {
                var n = this
                  , o = cc.instantiate(this.labelNode);
                o.active = !0,
                o.parent = this.node,
                o.getComponent(cc.Label).string = t,
                cc.tween(o).delay(e).to(.8, {
                    opacity: 0
                }, {
                    easing: "sineIn"
                }).call(function() {
                    o.destroy(),
                    n.showNodeArray.splice(n.showNodeArray.indexOf(o), 1)
                }).start(),
                this.showNodeArray.forEach(function(t) {
                    cc.tween(t).to(.16, {
                        position: t.position.add(cc.v3(0, 30))
                    }).start()
                }),
                this.showNodeArray.push(o)
            }
            ,
            r([s(cc.Node)], e.prototype, "labelNode", void 0),
            r([a], e)
        }(cc.Component);
        n.default = u,
        cc._RF.pop()
    }
    , {}],
    types: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "94365bXtFVDdKXCgoNky0Ip", "types"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        cc._RF.pop()
    }
    , {}],
    uiConfig: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9a849ZkFwxCyZeCMzEaOmer", "uiConfig"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.UI_PATH = void 0,
        n.UI_PATH = {
            LOADING: "prefabs/loading/loadingUi",
            MAIN: "prefabs/main/mainUi",
            GAME: "prefabs/game/gameUi",
            TOAST: "prefabs/toast/toastUi",
            OVER: "prefabs/popup/overUi",
            TASK: "prefabs/popup/taskUi",
            REWARD: "prefabs/popup/rewardUi",
            RANK: "prefabs/popup/rankUi",
            RULE: "prefabs/popup/ruleUi",
            LOGIN: "prefabs/popup/loginUi",
            EXIT: "prefabs/popup/exitUi"
        },
        cc._RF.pop()
    }
    , {}],
    uiMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "32e90zM/LRFA6yu2wNil8fd", "uiMgr"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.UIMgr = n.UILayer = void 0;
        var o, i = t("../config/uiConfig");
        (function(t) {
            t.BOTTOM = "bottom",
            t.MIDDLE = "middle",
            t.TOP = "top",
            t.SYSTEM = "system"
        }
        )(o = n.UILayer || (n.UILayer = {}));
        var r = function() {
            function t() {
                this._uiMap = new Map,
                this._layerMap = new Map,
                this._canvas = null,
                this._toastUi = null
            }
            return Object.defineProperty(t, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new t),
                    this._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.init = function(t) {
                var e = this;
                for (var n in this._canvas = t,
                o) {
                    var r = new cc.Node(o[n]);
                    r.parent = this._canvas;
                    var c = r.addComponent(cc.Widget);
                    c.isAlignTop = !0,
                    c.isAlignBottom = !0,
                    c.isAlignLeft = !0,
                    c.isAlignRight = !0,
                    c.top = 0,
                    c.bottom = 0,
                    c.left = 0,
                    c.right = 0,
                    r.width = this._canvas.width,
                    r.height = this._canvas.height,
                    this._layerMap.set(o[n], r)
                }
                this.showUI(i.UI_PATH.TOAST, o.SYSTEM, function(t) {
                    e._toastUi = t.getComponent("toastUi")
                })
            }
            ,
            t.prototype.showUI = function(t, e, n, i) {
                var r = this;
                if (void 0 === e && (e = o.MIDDLE),
                this._uiMap.has(t)) {
                    var c = this._uiMap.get(t);
                    return c.active = !0,
                    void (n && n(c, i))
                }
                cc.resources.load(t, cc.Prefab, function(o, c) {
                    if (o)
                        cc.error("\u52a0\u8f7dUI\u9884\u5236\u4f53\u5931\u8d25: " + t, o);
                    else {
                        var a = cc.instantiate(c)
                          , s = r._layerMap.get(e);
                        if (s) {
                            a.parent = s,
                            r._uiMap.set(t, a);
                            var u = a.getComponent(t.split("/").pop());
                            u && u.init && u.init(i),
                            n && n(a, i)
                        } else
                            cc.error("UI\u5c42\u7ea7\u4e0d\u5b58\u5728: " + e)
                    }
                })
            }
            ,
            t.prototype.hideUI = function(t) {
                "string" == typeof t ? this._uiMap.has(t) && (this._uiMap.get(t).active = !1) : this._uiMap.forEach(function(e) {
                    e === t && (t.active = !1)
                })
            }
            ,
            t.prototype.removeUI = function(t) {
                var e = this;
                "string" == typeof t ? this._uiMap.has(t) && (this._uiMap.get(t).destroy(),
                this._uiMap.delete(t)) : this._uiMap.forEach(function(n, o) {
                    n === t && (t.destroy(),
                    e._uiMap.delete(o))
                })
            }
            ,
            t.prototype.removeAllUI = function(t) {
                var e = this;
                void 0 === t && (t = []),
                this._uiMap.forEach(function(n, o) {
                    t.includes(o) || (n.destroy(),
                    e._uiMap.delete(o))
                })
            }
            ,
            t.prototype.getUI = function(t) {
                return this._uiMap.get(t)
            }
            ,
            t.prototype.getLayer = function(t) {
                return this._layerMap.get(t)
            }
            ,
            t.prototype.setLayerOrder = function(t, e) {
                var n = this._layerMap.get(t);
                n && (n.zIndex = e)
            }
            ,
            t.prototype.showToast = function(t, e) {
                void 0 === e && (e = 1.2),
                this._toastUi && this._toastUi.showToast(t, e)
            }
            ,
            t
        }();
        n.UIMgr = r,
        cc._RF.pop()
    }
    , {
        "../config/uiConfig": "uiConfig"
    }],
    utils: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "64e6ddVg/BK3rAg47qXV1Nl", "utils"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.isWeiXin = n.stopSound = n.playSound = n.getAllUrlParams = n.getUrlParam = void 0,
        n.getUrlParam = function(t) {
            var e = window.location.href;
            t = t.replace(/[\[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        }
        ,
        n.getAllUrlParams = function() {
            for (var t = {}, e = 0, n = window.location.search.substring(1).split("&"); e < n.length; e++) {
                var o = n[e];
                if ("" !== o) {
                    var i = o.split("=")
                      , r = i[0]
                      , c = i[1]
                      , a = void 0 === c ? "" : c;
                    t[decodeURIComponent(r)] = decodeURIComponent(a)
                }
            }
            return t
        }
        ,
        n.playSound = function(t, e) {
            void 0 === e && (e = !1),
            cc.resources.load("sounds/" + t, cc.AudioClip, function(t, n) {
                t || (e ? cc.audioEngine.playMusic(n, !0) : cc.audioEngine.playEffect(n, !1))
            })
        }
        ,
        n.stopSound = function() {
            cc.audioEngine.stopAll()
        }
        ,
        n.isWeiXin = function() {
            return -1 !== navigator.userAgent.toLowerCase().indexOf("micromessenger")
        }
        ,
        cc._RF.pop()
    }
    , {}],
    wxService: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "251f1dsI45JJLM93zfdYcBe", "wxService");
        var o = this && this.__awaiter || function(t, e, n, o) {
            return new (n || (n = Promise))(function(i, r) {
                function c(t) {
                    try {
                        s(o.next(t))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(t) {
                    try {
                        s(o.throw(t))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(c, a)
                }
                s((o = o.apply(t, e || [])).next())
            }
            )
        }
          , i = this && this.__generator || function(t, e) {
            var n, o, i, r, c = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function a(t) {
                return function(e) {
                    return s([t, e])
                }
            }
            function s(r) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (n = 1,
                        o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o),
                        0) : o.next) && !(i = i.call(o, r[1])).done)
                            return i;
                        switch (o = 0,
                        i && (r = [2 & r[0], i.value]),
                        r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            o = r[1],
                            r = [0];
                            continue;
                        case 7:
                            r = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                c.label = r[1];
                                break
                            }
                            if (6 === r[0] && c.label < i[1]) {
                                c.label = i[1],
                                i = r;
                                break
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2],
                                c.ops.push(r);
                                break
                            }
                            i[2] && c.ops.pop(),
                            c.trys.pop();
                            continue
                        }
                        r = e.call(t, c)
                    } catch (a) {
                        r = [6, a],
                        o = 0
                    } finally {
                        n = i = 0
                    }
                if (5 & r[0])
                    throw r[1];
                return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.WxService = void 0;
        var r = function() {
            function t() {}
            return t.getJsConfig = function(t) {
                return o(this, void 0, Promise, function() {
                    var e, n;
                    return i(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 3, , 4]),
                            [4, fetch(this.baseUrl + "/api/wechat/jssdk?url=" + t.url, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })];
                        case 1:
                            if (!(e = o.sent()).ok)
                                throw new Error("HTTP error! status: " + e.status);
                            return [4, e.json()];
                        case 2:
                            return [2, o.sent()];
                        case 3:
                            throw n = o.sent(),
                            console.error("\u83b7\u53d6JSSDK\u914d\u7f6e\u5931\u8d25:", n),
                            n;
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.baseUrl = "https://wx.sanguosha.com",
            t
        }();
        n.WxService = r,
        cc._RF.pop()
    }
    , {}]
}, {}, ["gameConfig", "uiConfig", "gameEnum", "ball", "bottomCollider", "brick", "gameUi", "rewardBox", "role", "loadingUi", "mainUi", "mainSence", "dataMgr", "eventMgr", "gameMgr", "uiMgr", "exitUi", "loginUi", "overUi", "popupComm", "rankUi", "rewardItem", "rewardUi", "ruleUi", "taskItem", "taskUi", "apiService", "types", "wxService", "toastUi", "componentPool", "eventListener", "httpClient", "md5", "utils"]);
