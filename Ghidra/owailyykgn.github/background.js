var di = Object.defineProperty;
var hi = (s, e, r) => e in s ? di(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var K = (s, e, r) => hi(s, typeof e != "symbol" ? e + "" : e, r);
function fi(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var jr = { exports: {} }, mi = jr.exports, Bs;
function pi() {
  return Bs || (Bs = 1, function(s, e) {
    (function(r, a) {
      a(s);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : mi, function(r) {
      if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
        throw new Error("This script should only be loaded in a browser extension.");
      if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
        r.exports = globalThis.browser;
      else {
        const a = "The message port closed before a response was received.", t = (n) => {
          const o = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(o).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class i extends WeakMap {
            constructor(C, T = void 0) {
              super(T), this.createItem = C;
            }
            get(C) {
              return this.has(C) || this.set(C, this.createItem(C)), super.get(C);
            }
          }
          const u = (P) => P && typeof P == "object" && typeof P.then == "function", c = (P, C) => (...T) => {
            n.runtime.lastError ? P.reject(new Error(n.runtime.lastError.message)) : C.singleCallbackArg || T.length <= 1 && C.singleCallbackArg !== !1 ? P.resolve(T[0]) : P.resolve(T);
          }, h = (P) => P == 1 ? "argument" : "arguments", f = (P, C) => function(k, ...S) {
            if (S.length < C.minArgs)
              throw new Error(`Expected at least ${C.minArgs} ${h(C.minArgs)} for ${P}(), got ${S.length}`);
            if (S.length > C.maxArgs)
              throw new Error(`Expected at most ${C.maxArgs} ${h(C.maxArgs)} for ${P}(), got ${S.length}`);
            return new Promise((R, D) => {
              if (C.fallbackToNoCallback)
                try {
                  k[P](...S, c({
                    resolve: R,
                    reject: D
                  }, C));
                } catch (F) {
                  console.warn(`${P} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, F), k[P](...S), C.fallbackToNoCallback = !1, C.noCallback = !0, R();
                }
              else C.noCallback ? (k[P](...S), R()) : k[P](...S, c({
                resolve: R,
                reject: D
              }, C));
            });
          }, v = (P, C, T) => new Proxy(C, {
            apply(k, S, R) {
              return T.call(S, P, ...R);
            }
          });
          let d = Function.call.bind(Object.prototype.hasOwnProperty);
          const m = (P, C = {}, T = {}) => {
            let k = /* @__PURE__ */ Object.create(null), S = {
              has(D, F) {
                return F in P || F in k;
              },
              get(D, F, j) {
                if (F in k)
                  return k[F];
                if (!(F in P))
                  return;
                let z = P[F];
                if (typeof z == "function")
                  if (typeof C[F] == "function")
                    z = v(P, P[F], C[F]);
                  else if (d(T, F)) {
                    let Y = f(F, T[F]);
                    z = v(P, P[F], Y);
                  } else
                    z = z.bind(P);
                else if (typeof z == "object" && z !== null && (d(C, F) || d(T, F)))
                  z = m(z, C[F], T[F]);
                else if (d(T, "*"))
                  z = m(z, C[F], T["*"]);
                else
                  return Object.defineProperty(k, F, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return P[F];
                    },
                    set(Y) {
                      P[F] = Y;
                    }
                  }), z;
                return k[F] = z, z;
              },
              set(D, F, j, z) {
                return F in k ? k[F] = j : P[F] = j, !0;
              },
              defineProperty(D, F, j) {
                return Reflect.defineProperty(k, F, j);
              },
              deleteProperty(D, F) {
                return Reflect.deleteProperty(k, F);
              }
            }, R = Object.create(P);
            return new Proxy(R, S);
          }, g = (P) => ({
            addListener(C, T, ...k) {
              C.addListener(P.get(T), ...k);
            },
            hasListener(C, T) {
              return C.hasListener(P.get(T));
            },
            removeListener(C, T) {
              C.removeListener(P.get(T));
            }
          }), y = new i((P) => typeof P != "function" ? P : function(T) {
            const k = m(T, {}, {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            });
            P(k);
          }), w = new i((P) => typeof P != "function" ? P : function(T, k, S) {
            let R = !1, D, F = new Promise((Q) => {
              D = function(G) {
                R = !0, Q(G);
              };
            }), j;
            try {
              j = P(T, k, D);
            } catch (Q) {
              j = Promise.reject(Q);
            }
            const z = j !== !0 && u(j);
            if (j !== !0 && !z && !R)
              return !1;
            const Y = (Q) => {
              Q.then((G) => {
                S(G);
              }, (G) => {
                let ee;
                G && (G instanceof Error || typeof G.message == "string") ? ee = G.message : ee = "An unexpected error occurred", S({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: ee
                });
              }).catch((G) => {
                console.error("Failed to send onMessage rejected reply", G);
              });
            };
            return Y(z ? j : F), !0;
          }), M = ({
            reject: P,
            resolve: C
          }, T) => {
            n.runtime.lastError ? n.runtime.lastError.message === a ? C() : P(new Error(n.runtime.lastError.message)) : T && T.__mozWebExtensionPolyfillReject__ ? P(new Error(T.message)) : C(T);
          }, O = (P, C, T, ...k) => {
            if (k.length < C.minArgs)
              throw new Error(`Expected at least ${C.minArgs} ${h(C.minArgs)} for ${P}(), got ${k.length}`);
            if (k.length > C.maxArgs)
              throw new Error(`Expected at most ${C.maxArgs} ${h(C.maxArgs)} for ${P}(), got ${k.length}`);
            return new Promise((S, R) => {
              const D = M.bind(null, {
                resolve: S,
                reject: R
              });
              k.push(D), T.sendMessage(...k);
            });
          }, E = {
            devtools: {
              network: {
                onRequestFinished: g(y)
              }
            },
            runtime: {
              onMessage: g(w),
              onMessageExternal: g(w),
              sendMessage: O.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: O.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, x = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return o.privacy = {
            network: {
              "*": x
            },
            services: {
              "*": x
            },
            websites: {
              "*": x
            }
          }, m(n, E, o);
        };
        r.exports = t(chrome);
      }
    });
  }(jr)), jr.exports;
}
pi();
var pr;
(function(s) {
  s.Local = "local", s.Sync = "sync", s.Managed = "managed", s.Session = "session";
})(pr || (pr = {}));
var rs;
(function(s) {
  s.ExtensionPagesOnly = "TRUSTED_CONTEXTS", s.ExtensionPagesAndContentScripts = "TRUSTED_AND_UNTRUSTED_CONTEXTS";
})(rs || (rs = {}));
const ze = globalThis.chrome, Zs = async (s, e) => {
  const r = (t) => typeof t == "function", a = (t) => t instanceof Promise;
  return r(s) ? (a(s), s(e)) : s;
};
let Ws = !1;
function Qs(s) {
  if (ze && ze.storage[s] === void 0)
    throw new Error(`Check your storage permission in manifest.json: ${s} is not defined`);
}
function gi(s, e, r) {
  var g, y;
  let a = null, t = !1, n = [];
  const o = (r == null ? void 0 : r.storageEnum) ?? pr.Local, i = ((g = r == null ? void 0 : r.serialization) == null ? void 0 : g.serialize) ?? ((w) => w), u = ((y = r == null ? void 0 : r.serialization) == null ? void 0 : y.deserialize) ?? ((w) => w);
  Ws === !1 && o === pr.Session && (r == null ? void 0 : r.sessionAccessForContentScripts) === !0 && (Qs(o), ze == null || ze.storage[o].setAccessLevel({
    accessLevel: rs.ExtensionPagesAndContentScripts
  }).catch((w) => {
    console.warn(w), console.warn("Please call setAccessLevel into different context, like a background script.");
  }), Ws = !0);
  const c = async () => {
    Qs(o);
    const w = await (ze == null ? void 0 : ze.storage[o].get([s]));
    return w ? u(w[s]) ?? e : e;
  }, h = () => {
    n.forEach((w) => w());
  }, f = async (w) => {
    t || (a = await c()), a = await Zs(w, a), await (ze == null ? void 0 : ze.storage[o].set({ [s]: i(a) })), h();
  }, v = (w) => (n = [...n, w], () => {
    n = n.filter((M) => M !== w);
  }), d = () => a;
  c().then((w) => {
    a = w, t = !0, h();
  });
  async function m(w) {
    if (w[s] === void 0)
      return;
    const M = u(w[s].newValue);
    a !== M && (a = await Zs(M, a), h());
  }
  return ze == null || ze.storage[o].onChanged.addListener(m), {
    get: c,
    set: f,
    getSnapshot: d,
    subscribe: v
  };
}
const Js = gi("theme-storage-key", "light", {
  storageEnum: pr.Local
}), vi = {
  ...Js,
  toggle: async () => {
    await Js.set((s) => s === "light" ? "dark" : "light");
  }
};
class yi {
  constructor() {
    K(this, "projectConfig");
    K(this, "cachedConfig", {});
    K(this, "lastFetchTime", 0);
    K(this, "minimumFetchInterval", 36e5);
    // 1 hour in production
    K(this, "fetchTimeout", 6e4);
    // 60 seconds
    // Default configuration values
    K(this, "defaultConfig", {
      notifications_enabled: "true",
      max_notifications_per_day: "3",
      notification_cooldown_hours: "4",
      features: JSON.stringify({
        sidebar_v2: { enabled: !1, rollout: 0, schema_version: 1 },
        ai_tools_enhanced: { enabled: !0, rollout: 100, schema_version: 1 },
        notification_system: { enabled: !0, rollout: 100, schema_version: 1 }
      }),
      config_version: "1.0.0",
      schema_version: "1",
      last_updated: (/* @__PURE__ */ new Date()).toISOString(),
      privacy_policy_version: "1.0.0",
      data_collection_consent_required: "true",
      active_notifications: JSON.stringify([]),
      update_notifications: JSON.stringify({
        enabled: !0,
        min_version_gap: "0.1.0",
        channels: ["in-app", "badge"],
        schema_version: 1
      })
    });
    {
      console.log("[FirebaseRemoteConfigAPI] Remote Config is DISABLED - using defaults only"), this.projectConfig = { projectId: "", apiKey: "", appId: "" }, this.minimumFetchInterval = 0;
      return;
    }
  }
  async initialize() {
    console.log("[FirebaseRemoteConfigAPI] Initializing Remote Config API...");
    {
      console.log("[FirebaseRemoteConfigAPI] Remote Config DISABLED - initializing with defaults only"), this.initializeWithDefaults(), console.log("[FirebaseRemoteConfigAPI] Remote Config API initialized with defaults only");
      return;
    }
  }
  async fetchAndActivate(e = !1) {
    return console.debug("[FirebaseRemoteConfigAPI] Remote Config DISABLED - skipping fetch, using defaults only"), !1;
  }
  async fetchRemoteConfig() {
    try {
      const e = await this.getInstallationId(), r = `https://firebaseremoteconfig.googleapis.com/v1/projects/${this.projectConfig.projectId}/namespaces/firebase:fetch`, a = {
        appId: this.projectConfig.appId,
        appInstanceId: e,
        appInstanceIdToken: "",
        // Would need Firebase Installations API for this
        languageCode: "en-US",
        platformVersion: chrome.runtime.getManifest().version,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }, t = new AbortController(), n = setTimeout(() => t.abort(), this.fetchTimeout);
      console.debug("[FirebaseRemoteConfigAPI] Making request to:", r), console.debug("[FirebaseRemoteConfigAPI] Request body:", JSON.stringify(a, null, 2));
      const o = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": this.projectConfig.apiKey
        },
        body: JSON.stringify(a),
        signal: t.signal
      });
      if (clearTimeout(n), console.debug("[FirebaseRemoteConfigAPI] Response status:", o.status, o.statusText), console.debug("[FirebaseRemoteConfigAPI] Content-Type:", o.headers.get("content-type")), !o.ok) {
        const u = await o.text();
        throw console.error("[FirebaseRemoteConfigAPI] Error response body:", u), new Error(`HTTP ${o.status}: ${o.statusText} - ${u}`);
      }
      const i = await o.json();
      if (console.debug("[FirebaseRemoteConfigAPI] Raw Firebase response:", JSON.stringify(i, null, 2)), i.entries) {
        const u = {};
        Object.entries(i.entries).forEach(([h, f]) => {
          u[h] = {
            value: f,
            source: "remote"
          };
        });
        const c = {};
        for (const [h, f] of Object.entries(this.defaultConfig))
          c[h] = {
            value: f,
            source: "default"
          };
        Object.assign(c, u), this.cachedConfig = c, console.log(`[FirebaseRemoteConfigAPI] Updated config with ${Object.keys(i.entries).length} remote values, removed deleted keys`), console.debug("[FirebaseRemoteConfigAPI] Fetched configuration details:"), Object.entries(u).forEach(([h, f]) => {
          const v = f.value, d = f.source;
          let m = v;
          try {
            if (v && typeof v == "string") {
              const g = JSON.parse(v);
              m = JSON.stringify(g, null, 2);
            }
          } catch {
          }
          console.debug(`  ${h} (${d}):`, m);
        });
      } else
        console.warn("[FirebaseRemoteConfigAPI] No entries found in response:", i);
      return !0;
    } catch (e) {
      return e instanceof Error && e.name === "AbortError" ? console.error("[FirebaseRemoteConfigAPI] Fetch timeout") : console.error("[FirebaseRemoteConfigAPI] Fetch failed:", e), !1;
    }
  }
  getValue(e) {
    return this.cachedConfig[e] ? this.cachedConfig[e] : this.defaultConfig[e] ? {
      value: this.defaultConfig[e],
      source: "default"
    } : {
      value: "",
      source: "static"
    };
  }
  getAll() {
    const e = {};
    for (const [r, a] of Object.entries(this.defaultConfig))
      e[r] = {
        value: a,
        source: "default"
      };
    for (const [r, a] of Object.entries(this.cachedConfig))
      e[r] = a;
    return e;
  }
  initializeWithDefaults() {
    for (const [e, r] of Object.entries(this.defaultConfig))
      this.cachedConfig[e] || (this.cachedConfig[e] = {
        value: r,
        source: "default"
      });
  }
  async loadCachedConfig() {
    try {
      const e = await chrome.storage.local.get(["firebaseRemoteConfig", "firebaseRemoteConfigLastFetch"]);
      e.firebaseRemoteConfig && (this.cachedConfig = e.firebaseRemoteConfig), e.firebaseRemoteConfigLastFetch && (this.lastFetchTime = e.firebaseRemoteConfigLastFetch);
    } catch (e) {
      console.error("[FirebaseRemoteConfigAPI] Failed to load cached config:", e);
    }
  }
  async saveCachedConfig() {
    try {
      await chrome.storage.local.set({
        firebaseRemoteConfig: this.cachedConfig,
        firebaseRemoteConfigLastFetch: this.lastFetchTime
      });
    } catch (e) {
      console.error("[FirebaseRemoteConfigAPI] Failed to save cached config:", e);
    }
  }
  async getInstallationId() {
    try {
      const e = await chrome.storage.local.get(["firebaseInstallationId"]);
      if (e.firebaseInstallationId)
        return e.firebaseInstallationId;
      const r = this.generateInstallationId();
      return await chrome.storage.local.set({ firebaseInstallationId: r }), r;
    } catch (e) {
      return console.error("[FirebaseRemoteConfigAPI] Failed to get installation ID:", e), this.generateInstallationId();
    }
  }
  generateInstallationId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let r = "";
    for (let a = 0; a < 22; a++)
      r += e.charAt(Math.floor(Math.random() * e.length));
    return r;
  }
  /**
   * Clear cached config and force a fresh fetch
   * Useful when dealing with deleted Firebase keys
   */
  async clearCacheAndRefetch() {
    return console.log("[FirebaseRemoteConfigAPI] Remote Config DISABLED - skipping cache clear, using defaults only"), !1;
  }
}
const ia = (s) => {
  if (!s || typeof s != "object")
    return !1;
  try {
    return !(s.features && typeof s.features != "object" || s.notifications && !Array.isArray(s.notifications));
  } catch (e) {
    return console.error("[FirebaseRemoteConfigAPI] Validation error:", e), !1;
  }
}, Le = new yi();
class _i {
  constructor() {
    K(this, "isInitialized", !1);
    K(this, "fetchInterval", null);
    K(this, "lastFetchTime", null);
    K(this, "retryCount", 0);
    K(this, "maxRetries", 3);
  }
  async initialize() {
    try {
      console.log("[RemoteConfigManager] Initializing Remote Config Manager..."), await Le.initialize(), await this.fetchConfig(!0), this.startPeriodicFetch(), this.isInitialized = !0, console.log("[RemoteConfigManager] Remote Config Manager initialized successfully");
    } catch (e) {
      throw console.error("[RemoteConfigManager] Failed to initialize:", e), e;
    }
  }
  async fetchConfig(e = !1) {
    try {
      const r = Date.now();
      if (!e && this.lastFetchTime && r - this.lastFetchTime < 36e5) {
        console.debug("[RemoteConfigManager] Skipping fetch due to minimum interval");
        return;
      }
      console.log("[RemoteConfigManager] Fetching remote config..."), await Le.fetchAndActivate(e), await this.processConfiguration(), this.lastFetchTime = r, await this.setLastFetchTime(r), this.retryCount = 0, console.log("[RemoteConfigManager] Remote config fetched successfully");
      const t = Le.getAll(), n = Object.values(t).filter((i) => i.source === "remote").length, o = Object.values(t).filter((i) => i.source === "default").length;
      console.debug(`[RemoteConfigManager] Config summary: ${n} remote values, ${o} default values`);
    } catch (r) {
      this.retryCount++;
      const a = r instanceof Error ? r.message : String(r);
      if (console.error("[RemoteConfigManager] Failed to fetch config:", a), this.retryCount <= this.maxRetries) {
        const t = Math.pow(2, this.retryCount) * 1e3;
        setTimeout(() => this.fetchConfig(e), t);
      }
      throw r;
    }
  }
  async processConfiguration() {
    try {
      const e = Le.getAll();
      console.debug("[RemoteConfigManager] Processing configuration. Available configs:"), Object.entries(e).forEach(([r, a]) => {
        const t = a.value, n = a.source;
        let o = t;
        try {
          const i = JSON.parse(t);
          o = JSON.stringify(i, null, 2);
        } catch {
        }
        console.debug(`  ${r} (${n}):`, o);
      }), await this.processFeatureFlags(e), await this.processNotifications(e), await this.processAdapterConfigurations(e), await this.processVersionConfigurations(e);
    } catch (e) {
      throw console.error("[RemoteConfigManager] Failed to process configuration:", e), e;
    }
  }
  async processFeatureFlags(e) {
    try {
      const a = Le.getValue("features").value;
      if (a) {
        const t = JSON.parse(a);
        ia({ features: t }) && (await this.broadcastFeatureFlags(t), console.log(`[RemoteConfigManager] Updated ${Object.keys(t).length} feature flags`));
      }
    } catch (r) {
      console.error("[RemoteConfigManager] Failed to process feature flags:", r);
    }
  }
  async processNotifications(e) {
    try {
      const a = Le.getValue("active_notifications").value;
      if (a) {
        const t = JSON.parse(a);
        ia({ notifications: t }) && (await this.broadcastNotifications(t), console.log(`[RemoteConfigManager] Processed ${t.length} notifications`));
      }
    } catch (r) {
      console.error("[RemoteConfigManager] Failed to process notifications:", r);
    }
  }
  async processAdapterConfigurations(e) {
    try {
      let r = {}, a = !1;
      const n = Le.getValue("adapter_configs").value;
      if (n)
        try {
          const i = JSON.parse(n);
          r = { ...i }, a = !0, console.log(`[RemoteConfigManager] Found unified adapter_configs with ${Object.keys(i).length} adapters`);
        } catch (i) {
          console.warn("[RemoteConfigManager] Failed to parse unified adapter_configs:", i);
        }
      const o = Object.keys(e).filter((i) => i.endsWith("_adapter_config"));
      if (o.length > 0) {
        console.log(`[RemoteConfigManager] Found ${o.length} individual adapter config parameters:`, o);
        for (const i of o)
          try {
            const u = Le.getValue(i);
            if (u.value) {
              const c = JSON.parse(u.value), h = i.replace("_adapter_config", "");
              r[h] = c, a = !0, console.log(`[RemoteConfigManager] Loaded individual config for adapter: ${h}`);
            }
          } catch (u) {
            console.warn(`[RemoteConfigManager] Failed to parse ${i}:`, u);
          }
      }
      a && Object.keys(r).length > 0 ? this.validateAdapterConfigs(r) ? (await this.broadcastAdapterConfigs(r), console.log(`[RemoteConfigManager] Processed and broadcasted ${Object.keys(r).length} adapter configurations`)) : console.warn("[RemoteConfigManager] Adapter configs validation failed") : console.debug("[RemoteConfigManager] No adapter configurations found");
    } catch (r) {
      console.error("[RemoteConfigManager] Failed to process adapter configurations:", r);
    }
  }
  validateAdapterConfigs(e) {
    if (!e || typeof e != "object")
      return console.warn("[RemoteConfigManager] Invalid adapter configs structure"), !1;
    for (const [r, a] of Object.entries(e)) {
      if (!a || typeof a != "object") {
        console.warn(`[RemoteConfigManager] Invalid config for adapter: ${r}`);
        continue;
      }
      const t = a;
      if (!t.selectors || !t.ui) {
        console.warn(`[RemoteConfigManager] Missing required fields for adapter: ${r}`);
        continue;
      }
    }
    return !0;
  }
  async processVersionConfigurations(e) {
    try {
      const a = `version_config_${chrome.runtime.getManifest().version.replace(/\./g, "_")}`, n = Le.getValue(a).value;
      if (n) {
        const o = JSON.parse(n);
        ia(o) && (await this.broadcastVersionConfig(o), console.log("[RemoteConfigManager] Applied version-specific configuration"));
      }
    } catch (r) {
      console.error("[RemoteConfigManager] Failed to process version configurations:", r);
    }
  }
  async broadcastFeatureFlags(e) {
    try {
      const r = await chrome.tabs.query({ active: !0 });
      for (const a of r)
        if (a.id)
          try {
            await chrome.tabs.sendMessage(a.id, {
              type: "remote-config:feature-flags-updated",
              data: {
                flags: e,
                timestamp: Date.now()
              }
            });
          } catch {
            console.debug("[RemoteConfigManager] Could not send message to tab:", a.id);
          }
    } catch (r) {
      console.error("[RemoteConfigManager] Failed to broadcast feature flags:", r);
    }
  }
  async broadcastNotifications(e) {
    try {
      const r = await chrome.tabs.query({ active: !0 });
      for (const a of r)
        if (a.id)
          try {
            await chrome.tabs.sendMessage(a.id, {
              type: "remote-config:notifications-received",
              data: {
                notifications: e,
                timestamp: Date.now()
              }
            });
          } catch {
            console.debug("[RemoteConfigManager] Could not send message to tab:", a.id);
          }
    } catch (r) {
      console.error("[RemoteConfigManager] Failed to broadcast notifications:", r);
    }
  }
  async broadcastAdapterConfigs(e) {
    try {
      const r = await chrome.tabs.query({});
      let a = 0;
      for (const t of r)
        if (t.id && t.url && !t.url.startsWith("chrome://") && !t.url.startsWith("chrome-extension://"))
          try {
            await chrome.tabs.sendMessage(t.id, {
              type: "remote-config:adapter-configs-updated",
              data: {
                adapterConfigs: e,
                timestamp: Date.now()
              }
            }), a++;
          } catch (n) {
            console.debug(`[RemoteConfigManager] Could not send adapter config message to tab ${t.id}:`, n instanceof Error ? n.message : String(n));
          }
      console.log(`[RemoteConfigManager] Broadcasted adapter configs to ${a} tabs`);
    } catch (r) {
      console.error("[RemoteConfigManager] Failed to broadcast adapter configurations:", r);
    }
  }
  async broadcastVersionConfig(e) {
    try {
      const r = await chrome.tabs.query({ active: !0 });
      for (const a of r)
        if (a.id)
          try {
            await chrome.tabs.sendMessage(a.id, {
              type: "remote-config:version-config-updated",
              data: {
                config: e,
                timestamp: Date.now()
              }
            });
          } catch {
            console.debug("[RemoteConfigManager] Could not send message to tab:", a.id);
          }
    } catch (r) {
      console.error("[RemoteConfigManager] Failed to broadcast version config:", r);
    }
  }
  //development
  //   private startPeriodicFetch(): void {
  //     // Fetch every 5 sec
  //     this.fetchInterval = setInterval(() => {
  //       this.fetchConfig(true);
  //     }, 5000);
  //     console.debug('[RemoteConfigManager] Started periodic config fetching');
  //   }
  startPeriodicFetch() {
    this.fetchInterval = setInterval(() => {
      this.fetchConfig(!1);
    }, 12 * 60 * 60 * 1e3), console.debug("[RemoteConfigManager] Started periodic config fetching");
  }
  stopPeriodicFetch() {
    this.fetchInterval && (clearInterval(this.fetchInterval), this.fetchInterval = null, console.debug("[RemoteConfigManager] Stopped periodic config fetching"));
  }
  async setLastFetchTime(e) {
    await chrome.storage.local.set({ remoteConfigLastFetch: e });
  }
  async getLastFetchTime() {
    const e = await chrome.storage.local.get(["remoteConfigLastFetch"]);
    return (e == null ? void 0 : e.remoteConfigLastFetch) || null;
  }
  async getFeatureFlag(e) {
    try {
      const a = Le.getValue("features").value;
      return a && JSON.parse(a)[e] || null;
    } catch (r) {
      return console.error("[RemoteConfigManager] Failed to get feature flag:", r), null;
    }
  }
  async getAllConfig() {
    try {
      return Le.getAll();
    } catch (e) {
      return console.error("[RemoteConfigManager] Failed to get all config:", e), {};
    }
  }
  async getSpecificConfig(e) {
    try {
      const r = Le.getAll();
      if (e.includes("adapter_config")) {
        const t = Le.getValue("adapter_configs").value;
        if (t) {
          const o = JSON.parse(t);
          if (e.endsWith("_adapter_config")) {
            const i = e.replace("_adapter_config", "");
            return { [e]: o[i] || null };
          }
        }
        const n = Le.getValue(e);
        if (n.value)
          try {
            return { [e]: JSON.parse(n.value) };
          } catch {
            return { [e]: n.value };
          }
        return { [e]: null };
      }
      if (r[e]) {
        const a = r[e];
        try {
          return { [e]: JSON.parse(a.value) };
        } catch {
          return { [e]: a.value };
        }
      }
      return { [e]: null };
    } catch (r) {
      return console.error(`[RemoteConfigManager] Failed to get specific config for key ${e}:`, r), { [e]: null };
    }
  }
  async cleanup() {
    this.stopPeriodicFetch(), this.isInitialized = !1, this.lastFetchTime = null, this.retryCount = 0, console.log("[RemoteConfigManager] Cleaned up");
  }
  get initialized() {
    return this.isInitialized;
  }
  async getLastFetchTimePublic() {
    return this.getLastFetchTime();
  }
  /**
   * Clear cache and force refresh - useful for handling deleted Firebase keys
   */
  async clearCacheAndRefresh() {
    try {
      console.log("[RemoteConfigManager] Clearing cache and forcing refresh...");
      const e = await Le.clearCacheAndRefetch();
      return e && (await this.processConfiguration(), console.log("[RemoteConfigManager] Cache cleared and config refreshed successfully")), e;
    } catch (e) {
      return console.error("[RemoteConfigManager] Failed to clear cache and refresh:", e), !1;
    }
  }
}
var fe;
(function(s) {
  s.assertEqual = (t) => t;
  function e(t) {
  }
  s.assertIs = e;
  function r(t) {
    throw new Error();
  }
  s.assertNever = r, s.arrayToEnum = (t) => {
    const n = {};
    for (const o of t)
      n[o] = o;
    return n;
  }, s.getValidEnumValues = (t) => {
    const n = s.objectKeys(t).filter((i) => typeof t[t[i]] != "number"), o = {};
    for (const i of n)
      o[i] = t[i];
    return s.objectValues(o);
  }, s.objectValues = (t) => s.objectKeys(t).map(function(n) {
    return t[n];
  }), s.objectKeys = typeof Object.keys == "function" ? (t) => Object.keys(t) : (t) => {
    const n = [];
    for (const o in t)
      Object.prototype.hasOwnProperty.call(t, o) && n.push(o);
    return n;
  }, s.find = (t, n) => {
    for (const o of t)
      if (n(o))
        return o;
  }, s.isInteger = typeof Number.isInteger == "function" ? (t) => Number.isInteger(t) : (t) => typeof t == "number" && isFinite(t) && Math.floor(t) === t;
  function a(t, n = " | ") {
    return t.map((o) => typeof o == "string" ? `'${o}'` : o).join(n);
  }
  s.joinValues = a, s.jsonStringifyReplacer = (t, n) => typeof n == "bigint" ? n.toString() : n;
})(fe || (fe = {}));
var as;
(function(s) {
  s.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(as || (as = {}));
const B = fe.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), yt = (s) => {
  switch (typeof s) {
    case "undefined":
      return B.undefined;
    case "string":
      return B.string;
    case "number":
      return isNaN(s) ? B.nan : B.number;
    case "boolean":
      return B.boolean;
    case "function":
      return B.function;
    case "bigint":
      return B.bigint;
    case "symbol":
      return B.symbol;
    case "object":
      return Array.isArray(s) ? B.array : s === null ? B.null : s.then && typeof s.then == "function" && s.catch && typeof s.catch == "function" ? B.promise : typeof Map < "u" && s instanceof Map ? B.map : typeof Set < "u" && s instanceof Set ? B.set : typeof Date < "u" && s instanceof Date ? B.date : B.object;
    default:
      return B.unknown;
  }
}, q = fe.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), wi = (s) => JSON.stringify(s, null, 2).replace(/"([^"]+)":/g, "$1:");
class Be extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (a) => {
      this.issues = [...this.issues, a];
    }, this.addIssues = (a = []) => {
      this.issues = [...this.issues, ...a];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const r = e || function(n) {
      return n.message;
    }, a = { _errors: [] }, t = (n) => {
      for (const o of n.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(t);
        else if (o.code === "invalid_return_type")
          t(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          t(o.argumentsError);
        else if (o.path.length === 0)
          a._errors.push(r(o));
        else {
          let i = a, u = 0;
          for (; u < o.path.length; ) {
            const c = o.path[u];
            u === o.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(r(o))) : i[c] = i[c] || { _errors: [] }, i = i[c], u++;
          }
        }
    };
    return t(this), a;
  }
  static assert(e) {
    if (!(e instanceof Be))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, fe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, a = [];
    for (const t of this.issues)
      t.path.length > 0 ? (r[t.path[0]] = r[t.path[0]] || [], r[t.path[0]].push(e(t))) : a.push(e(t));
    return { formErrors: a, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Be.create = (s) => new Be(s);
const Xt = (s, e) => {
  let r;
  switch (s.code) {
    case q.invalid_type:
      s.received === B.undefined ? r = "Required" : r = `Expected ${s.expected}, received ${s.received}`;
      break;
    case q.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(s.expected, fe.jsonStringifyReplacer)}`;
      break;
    case q.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${fe.joinValues(s.keys, ", ")}`;
      break;
    case q.invalid_union:
      r = "Invalid input";
      break;
    case q.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${fe.joinValues(s.options)}`;
      break;
    case q.invalid_enum_value:
      r = `Invalid enum value. Expected ${fe.joinValues(s.options)}, received '${s.received}'`;
      break;
    case q.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case q.invalid_return_type:
      r = "Invalid function return type";
      break;
    case q.invalid_date:
      r = "Invalid date";
      break;
    case q.invalid_string:
      typeof s.validation == "object" ? "includes" in s.validation ? (r = `Invalid input: must include "${s.validation.includes}"`, typeof s.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${s.validation.position}`)) : "startsWith" in s.validation ? r = `Invalid input: must start with "${s.validation.startsWith}"` : "endsWith" in s.validation ? r = `Invalid input: must end with "${s.validation.endsWith}"` : fe.assertNever(s.validation) : s.validation !== "regex" ? r = `Invalid ${s.validation}` : r = "Invalid";
      break;
    case q.too_small:
      s.type === "array" ? r = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "more than"} ${s.minimum} element(s)` : s.type === "string" ? r = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "over"} ${s.minimum} character(s)` : s.type === "number" ? r = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}` : s.type === "date" ? r = `Date must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(s.minimum))}` : r = "Invalid input";
      break;
    case q.too_big:
      s.type === "array" ? r = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "less than"} ${s.maximum} element(s)` : s.type === "string" ? r = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "under"} ${s.maximum} character(s)` : s.type === "number" ? r = `Number must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}` : s.type === "bigint" ? r = `BigInt must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}` : s.type === "date" ? r = `Date must be ${s.exact ? "exactly" : s.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(s.maximum))}` : r = "Invalid input";
      break;
    case q.custom:
      r = "Invalid input";
      break;
    case q.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case q.not_multiple_of:
      r = `Number must be a multiple of ${s.multipleOf}`;
      break;
    case q.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, fe.assertNever(s);
  }
  return { message: r };
};
let ro = Xt;
function bi(s) {
  ro = s;
}
function zr() {
  return ro;
}
const Vr = (s) => {
  const { data: e, path: r, errorMaps: a, issueData: t } = s, n = [...r, ...t.path || []], o = {
    ...t,
    path: n
  };
  if (t.message !== void 0)
    return {
      ...t,
      path: n,
      message: t.message
    };
  let i = "";
  const u = a.filter((c) => !!c).slice().reverse();
  for (const c of u)
    i = c(o, { data: e, defaultError: i }).message;
  return {
    ...t,
    path: n,
    message: i
  };
}, Pi = [];
function V(s, e) {
  const r = zr(), a = Vr({
    issueData: e,
    data: s.data,
    path: s.path,
    errorMaps: [
      s.common.contextualErrorMap,
      // contextual error map is first priority
      s.schemaErrorMap,
      // then schema-bound map if available
      r,
      // then global override map
      r === Xt ? void 0 : Xt
      // then global default map
    ].filter((t) => !!t)
  });
  s.common.issues.push(a);
}
class Me {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const a = [];
    for (const t of r) {
      if (t.status === "aborted")
        return te;
      t.status === "dirty" && e.dirty(), a.push(t.value);
    }
    return { status: e.value, value: a };
  }
  static async mergeObjectAsync(e, r) {
    const a = [];
    for (const t of r) {
      const n = await t.key, o = await t.value;
      a.push({
        key: n,
        value: o
      });
    }
    return Me.mergeObjectSync(e, a);
  }
  static mergeObjectSync(e, r) {
    const a = {};
    for (const t of r) {
      const { key: n, value: o } = t;
      if (n.status === "aborted" || o.status === "aborted")
        return te;
      n.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), n.value !== "__proto__" && (typeof o.value < "u" || t.alwaysSet) && (a[n.value] = o.value);
    }
    return { status: e.value, value: a };
  }
}
const te = Object.freeze({
  status: "aborted"
}), Bt = (s) => ({ status: "dirty", value: s }), qe = (s) => ({ status: "valid", value: s }), ss = (s) => s.status === "aborted", ns = (s) => s.status === "dirty", Ft = (s) => s.status === "valid", gr = (s) => typeof Promise < "u" && s instanceof Promise;
function Hr(s, e, r, a) {
  if (typeof e == "function" ? s !== e || !0 : !e.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(s);
}
function ao(s, e, r, a, t) {
  if (typeof e == "function" ? s !== e || !0 : !e.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(s, r), r;
}
var Z;
(function(s) {
  s.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, s.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(Z || (Z = {}));
var ir, lr;
class dt {
  constructor(e, r, a, t) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = a, this._key = t;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Gs = (s, e) => {
  if (Ft(e))
    return { success: !0, data: e.value };
  if (!s.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Be(s.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ne(s) {
  if (!s)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: a, description: t } = s;
  if (e && (r || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: t } : { errorMap: (o, i) => {
    var u, c;
    const { message: h } = s;
    return o.code === "invalid_enum_value" ? { message: h ?? i.defaultError } : typeof i.data > "u" ? { message: (u = h ?? a) !== null && u !== void 0 ? u : i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: (c = h ?? r) !== null && c !== void 0 ? c : i.defaultError };
  }, description: t };
}
class ie {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return yt(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: yt(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Me(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: yt(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (gr(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const a = this.safeParse(e, r);
    if (a.success)
      return a.data;
    throw a.error;
  }
  safeParse(e, r) {
    var a;
    const t = {
      common: {
        issues: [],
        async: (a = r == null ? void 0 : r.async) !== null && a !== void 0 ? a : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: yt(e)
    }, n = this._parseSync({ data: e, path: t.path, parent: t });
    return Gs(t, n);
  }
  "~validate"(e) {
    var r, a;
    const t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: yt(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return Ft(n) ? {
          value: n.value
        } : {
          issues: t.common.issues
        };
      } catch (n) {
        !((a = (r = n == null ? void 0 : n.message) === null || r === void 0 ? void 0 : r.toLowerCase()) === null || a === void 0) && a.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => Ft(n) ? {
      value: n.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, r) {
    const a = await this.safeParseAsync(e, r);
    if (a.success)
      return a.data;
    throw a.error;
  }
  async safeParseAsync(e, r) {
    const a = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: yt(e)
    }, t = this._parse({ data: e, path: a.path, parent: a }), n = await (gr(t) ? t : Promise.resolve(t));
    return Gs(a, n);
  }
  refine(e, r) {
    const a = (t) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(t) : r;
    return this._refinement((t, n) => {
      const o = e(t), i = () => n.addIssue({
        code: q.custom,
        ...a(t)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((a, t) => e(a) ? !0 : (t.addIssue(typeof r == "function" ? r(a, t) : r), !1));
  }
  _refinement(e) {
    return new at({
      schema: this,
      typeName: X.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (r) => this["~validate"](r)
    };
  }
  optional() {
    return ut.create(this, this._def);
  }
  nullable() {
    return At.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return rt.create(this);
  }
  promise() {
    return tr.create(this, this._def);
  }
  or(e) {
    return wr.create([this, e], this._def);
  }
  and(e) {
    return br.create(this, e, this._def);
  }
  transform(e) {
    return new at({
      ...ne(this._def),
      schema: this,
      typeName: X.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new xr({
      ...ne(this._def),
      innerType: this,
      defaultValue: r,
      typeName: X.ZodDefault
    });
  }
  brand() {
    return new _s({
      typeName: X.ZodBranded,
      type: this,
      ...ne(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ar({
      ...ne(this._def),
      innerType: this,
      catchValue: r,
      typeName: X.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return kr.create(this, e);
  }
  readonly() {
    return Rr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ei = /^c[^\s-]{8,}$/i, Si = /^[0-9a-z]+$/, Ci = /^[0-9A-HJKMNP-TV-Z]{26}$/i, xi = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ai = /^[a-z0-9_-]{21}$/i, Ri = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Ti = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, ki = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ii = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let la;
const $i = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Oi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Di = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Fi = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Mi = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ni = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, so = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ji = new RegExp(`^${so}$`);
function no(s) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return s.precision ? e = `${e}\\.\\d{${s.precision}}` : s.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Li(s) {
  return new RegExp(`^${no(s)}$`);
}
function oo(s) {
  let e = `${so}T${no(s)}`;
  const r = [];
  return r.push(s.local ? "Z?" : "Z"), s.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function qi(s, e) {
  return !!((e === "v4" || !e) && $i.test(s) || (e === "v6" || !e) && Di.test(s));
}
function Ui(s, e) {
  if (!Ri.test(s))
    return !1;
  try {
    const [r] = s.split("."), a = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), t = JSON.parse(atob(a));
    return !(typeof t != "object" || t === null || !t.typ || !t.alg || e && t.alg !== e);
  } catch {
    return !1;
  }
}
function zi(s, e) {
  return !!((e === "v4" || !e) && Oi.test(s) || (e === "v6" || !e) && Fi.test(s));
}
class tt extends ie {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== B.string) {
      const n = this._getOrReturnCtx(e);
      return V(n, {
        code: q.invalid_type,
        expected: B.string,
        received: n.parsedType
      }), te;
    }
    const a = new Me();
    let t;
    for (const n of this._def.checks)
      if (n.kind === "min")
        e.data.length < n.value && (t = this._getOrReturnCtx(e, t), V(t, {
          code: q.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), a.dirty());
      else if (n.kind === "max")
        e.data.length > n.value && (t = this._getOrReturnCtx(e, t), V(t, {
          code: q.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), a.dirty());
      else if (n.kind === "length") {
        const o = e.data.length > n.value, i = e.data.length < n.value;
        (o || i) && (t = this._getOrReturnCtx(e, t), o ? V(t, {
          code: q.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }) : i && V(t, {
          code: q.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }), a.dirty());
      } else if (n.kind === "email")
        ki.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
          validation: "email",
          code: q.invalid_string,
          message: n.message
        }), a.dirty());
      else if (n.kind === "emoji")
        la || (la = new RegExp(Ii, "u")), la.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
          validation: "emoji",
          code: q.invalid_string,
          message: n.message
        }), a.dirty());
      else if (n.kind === "uuid")
        xi.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
          validation: "uuid",
          code: q.invalid_string,
          message: n.message
        }), a.dirty());
      else if (n.kind === "nanoid")
        Ai.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
          validation: "nanoid",
          code: q.invalid_string,
          message: n.message
        }), a.dirty());
      else if (n.kind === "cuid")
        Ei.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
          validation: "cuid",
          code: q.invalid_string,
          message: n.message
        }), a.dirty());
      else if (n.kind === "cuid2")
        Si.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
          validation: "cuid2",
          code: q.invalid_string,
          message: n.message
        }), a.dirty());
      else if (n.kind === "ulid")
        Ci.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
          validation: "ulid",
          code: q.invalid_string,
          message: n.message
        }), a.dirty());
      else if (n.kind === "url")
        try {
          new URL(e.data);
        } catch {
          t = this._getOrReturnCtx(e, t), V(t, {
            validation: "url",
            code: q.invalid_string,
            message: n.message
          }), a.dirty();
        }
      else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
        validation: "regex",
        code: q.invalid_string,
        message: n.message
      }), a.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (t = this._getOrReturnCtx(e, t), V(t, {
        code: q.invalid_string,
        validation: { includes: n.value, position: n.position },
        message: n.message
      }), a.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (t = this._getOrReturnCtx(e, t), V(t, {
        code: q.invalid_string,
        validation: { startsWith: n.value },
        message: n.message
      }), a.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (t = this._getOrReturnCtx(e, t), V(t, {
        code: q.invalid_string,
        validation: { endsWith: n.value },
        message: n.message
      }), a.dirty()) : n.kind === "datetime" ? oo(n).test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
        code: q.invalid_string,
        validation: "datetime",
        message: n.message
      }), a.dirty()) : n.kind === "date" ? ji.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
        code: q.invalid_string,
        validation: "date",
        message: n.message
      }), a.dirty()) : n.kind === "time" ? Li(n).test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
        code: q.invalid_string,
        validation: "time",
        message: n.message
      }), a.dirty()) : n.kind === "duration" ? Ti.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
        validation: "duration",
        code: q.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "ip" ? qi(e.data, n.version) || (t = this._getOrReturnCtx(e, t), V(t, {
        validation: "ip",
        code: q.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "jwt" ? Ui(e.data, n.alg) || (t = this._getOrReturnCtx(e, t), V(t, {
        validation: "jwt",
        code: q.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "cidr" ? zi(e.data, n.version) || (t = this._getOrReturnCtx(e, t), V(t, {
        validation: "cidr",
        code: q.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "base64" ? Mi.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
        validation: "base64",
        code: q.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "base64url" ? Ni.test(e.data) || (t = this._getOrReturnCtx(e, t), V(t, {
        validation: "base64url",
        code: q.invalid_string,
        message: n.message
      }), a.dirty()) : fe.assertNever(n);
    return { status: a.value, value: e.data };
  }
  _regex(e, r, a) {
    return this.refinement((t) => e.test(t), {
      validation: r,
      code: q.invalid_string,
      ...Z.errToObj(a)
    });
  }
  _addCheck(e) {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...Z.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...Z.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...Z.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...Z.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...Z.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...Z.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...Z.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...Z.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...Z.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...Z.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...Z.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...Z.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...Z.errToObj(e) });
  }
  datetime(e) {
    var r, a;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      local: (a = e == null ? void 0 : e.local) !== null && a !== void 0 ? a : !1,
      ...Z.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...Z.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...Z.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...Z.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...Z.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...Z.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...Z.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...Z.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...Z.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...Z.errToObj(r)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, Z.errToObj(e));
  }
  trim() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
tt.create = (s) => {
  var e;
  return new tt({
    checks: [],
    typeName: X.ZodString,
    coerce: (e = s == null ? void 0 : s.coerce) !== null && e !== void 0 ? e : !1,
    ...ne(s)
  });
};
function Vi(s, e) {
  const r = (s.toString().split(".")[1] || "").length, a = (e.toString().split(".")[1] || "").length, t = r > a ? r : a, n = parseInt(s.toFixed(t).replace(".", "")), o = parseInt(e.toFixed(t).replace(".", ""));
  return n % o / Math.pow(10, t);
}
class St extends ie {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== B.number) {
      const n = this._getOrReturnCtx(e);
      return V(n, {
        code: q.invalid_type,
        expected: B.number,
        received: n.parsedType
      }), te;
    }
    let a;
    const t = new Me();
    for (const n of this._def.checks)
      n.kind === "int" ? fe.isInteger(e.data) || (a = this._getOrReturnCtx(e, a), V(a, {
        code: q.invalid_type,
        expected: "integer",
        received: "float",
        message: n.message
      }), t.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (a = this._getOrReturnCtx(e, a), V(a, {
        code: q.too_small,
        minimum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), t.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (a = this._getOrReturnCtx(e, a), V(a, {
        code: q.too_big,
        maximum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), t.dirty()) : n.kind === "multipleOf" ? Vi(e.data, n.value) !== 0 && (a = this._getOrReturnCtx(e, a), V(a, {
        code: q.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), t.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (a = this._getOrReturnCtx(e, a), V(a, {
        code: q.not_finite,
        message: n.message
      }), t.dirty()) : fe.assertNever(n);
    return { status: t.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, Z.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, Z.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, Z.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, Z.toString(r));
  }
  setLimit(e, r, a, t) {
    return new St({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: a,
          message: Z.toString(t)
        }
      ]
    });
  }
  _addCheck(e) {
    return new St({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: Z.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Z.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Z.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Z.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Z.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Z.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: Z.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Z.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Z.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && fe.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf")
        return !0;
      a.kind === "min" ? (r === null || a.value > r) && (r = a.value) : a.kind === "max" && (e === null || a.value < e) && (e = a.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
St.create = (s) => new St({
  checks: [],
  typeName: X.ZodNumber,
  coerce: (s == null ? void 0 : s.coerce) || !1,
  ...ne(s)
});
class Ct extends ie {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== B.bigint)
      return this._getInvalidInput(e);
    let a;
    const t = new Me();
    for (const n of this._def.checks)
      n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (a = this._getOrReturnCtx(e, a), V(a, {
        code: q.too_small,
        type: "bigint",
        minimum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), t.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (a = this._getOrReturnCtx(e, a), V(a, {
        code: q.too_big,
        type: "bigint",
        maximum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), t.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (a = this._getOrReturnCtx(e, a), V(a, {
        code: q.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), t.dirty()) : fe.assertNever(n);
    return { status: t.value, value: e.data };
  }
  _getInvalidInput(e) {
    const r = this._getOrReturnCtx(e);
    return V(r, {
      code: q.invalid_type,
      expected: B.bigint,
      received: r.parsedType
    }), te;
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, Z.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, Z.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, Z.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, Z.toString(r));
  }
  setLimit(e, r, a, t) {
    return new Ct({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: a,
          message: Z.toString(t)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ct({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Z.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Z.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Z.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Z.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Z.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
Ct.create = (s) => {
  var e;
  return new Ct({
    checks: [],
    typeName: X.ZodBigInt,
    coerce: (e = s == null ? void 0 : s.coerce) !== null && e !== void 0 ? e : !1,
    ...ne(s)
  });
};
class vr extends ie {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== B.boolean) {
      const a = this._getOrReturnCtx(e);
      return V(a, {
        code: q.invalid_type,
        expected: B.boolean,
        received: a.parsedType
      }), te;
    }
    return qe(e.data);
  }
}
vr.create = (s) => new vr({
  typeName: X.ZodBoolean,
  coerce: (s == null ? void 0 : s.coerce) || !1,
  ...ne(s)
});
class Mt extends ie {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== B.date) {
      const n = this._getOrReturnCtx(e);
      return V(n, {
        code: q.invalid_type,
        expected: B.date,
        received: n.parsedType
      }), te;
    }
    if (isNaN(e.data.getTime())) {
      const n = this._getOrReturnCtx(e);
      return V(n, {
        code: q.invalid_date
      }), te;
    }
    const a = new Me();
    let t;
    for (const n of this._def.checks)
      n.kind === "min" ? e.data.getTime() < n.value && (t = this._getOrReturnCtx(e, t), V(t, {
        code: q.too_small,
        message: n.message,
        inclusive: !0,
        exact: !1,
        minimum: n.value,
        type: "date"
      }), a.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (t = this._getOrReturnCtx(e, t), V(t, {
        code: q.too_big,
        message: n.message,
        inclusive: !0,
        exact: !1,
        maximum: n.value,
        type: "date"
      }), a.dirty()) : fe.assertNever(n);
    return {
      status: a.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Mt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: Z.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: Z.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
Mt.create = (s) => new Mt({
  checks: [],
  coerce: (s == null ? void 0 : s.coerce) || !1,
  typeName: X.ZodDate,
  ...ne(s)
});
class Br extends ie {
  _parse(e) {
    if (this._getType(e) !== B.symbol) {
      const a = this._getOrReturnCtx(e);
      return V(a, {
        code: q.invalid_type,
        expected: B.symbol,
        received: a.parsedType
      }), te;
    }
    return qe(e.data);
  }
}
Br.create = (s) => new Br({
  typeName: X.ZodSymbol,
  ...ne(s)
});
class yr extends ie {
  _parse(e) {
    if (this._getType(e) !== B.undefined) {
      const a = this._getOrReturnCtx(e);
      return V(a, {
        code: q.invalid_type,
        expected: B.undefined,
        received: a.parsedType
      }), te;
    }
    return qe(e.data);
  }
}
yr.create = (s) => new yr({
  typeName: X.ZodUndefined,
  ...ne(s)
});
class _r extends ie {
  _parse(e) {
    if (this._getType(e) !== B.null) {
      const a = this._getOrReturnCtx(e);
      return V(a, {
        code: q.invalid_type,
        expected: B.null,
        received: a.parsedType
      }), te;
    }
    return qe(e.data);
  }
}
_r.create = (s) => new _r({
  typeName: X.ZodNull,
  ...ne(s)
});
class er extends ie {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return qe(e.data);
  }
}
er.create = (s) => new er({
  typeName: X.ZodAny,
  ...ne(s)
});
class Dt extends ie {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return qe(e.data);
  }
}
Dt.create = (s) => new Dt({
  typeName: X.ZodUnknown,
  ...ne(s)
});
class _t extends ie {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return V(r, {
      code: q.invalid_type,
      expected: B.never,
      received: r.parsedType
    }), te;
  }
}
_t.create = (s) => new _t({
  typeName: X.ZodNever,
  ...ne(s)
});
class Zr extends ie {
  _parse(e) {
    if (this._getType(e) !== B.undefined) {
      const a = this._getOrReturnCtx(e);
      return V(a, {
        code: q.invalid_type,
        expected: B.void,
        received: a.parsedType
      }), te;
    }
    return qe(e.data);
  }
}
Zr.create = (s) => new Zr({
  typeName: X.ZodVoid,
  ...ne(s)
});
class rt extends ie {
  _parse(e) {
    const { ctx: r, status: a } = this._processInputParams(e), t = this._def;
    if (r.parsedType !== B.array)
      return V(r, {
        code: q.invalid_type,
        expected: B.array,
        received: r.parsedType
      }), te;
    if (t.exactLength !== null) {
      const o = r.data.length > t.exactLength.value, i = r.data.length < t.exactLength.value;
      (o || i) && (V(r, {
        code: o ? q.too_big : q.too_small,
        minimum: i ? t.exactLength.value : void 0,
        maximum: o ? t.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: t.exactLength.message
      }), a.dirty());
    }
    if (t.minLength !== null && r.data.length < t.minLength.value && (V(r, {
      code: q.too_small,
      minimum: t.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: t.minLength.message
    }), a.dirty()), t.maxLength !== null && r.data.length > t.maxLength.value && (V(r, {
      code: q.too_big,
      maximum: t.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: t.maxLength.message
    }), a.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, i) => t.type._parseAsync(new dt(r, o, r.path, i)))).then((o) => Me.mergeArray(a, o));
    const n = [...r.data].map((o, i) => t.type._parseSync(new dt(r, o, r.path, i)));
    return Me.mergeArray(a, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new rt({
      ...this._def,
      minLength: { value: e, message: Z.toString(r) }
    });
  }
  max(e, r) {
    return new rt({
      ...this._def,
      maxLength: { value: e, message: Z.toString(r) }
    });
  }
  length(e, r) {
    return new rt({
      ...this._def,
      exactLength: { value: e, message: Z.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
rt.create = (s, e) => new rt({
  type: s,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: X.ZodArray,
  ...ne(e)
});
function Ut(s) {
  if (s instanceof Ee) {
    const e = {};
    for (const r in s.shape) {
      const a = s.shape[r];
      e[r] = ut.create(Ut(a));
    }
    return new Ee({
      ...s._def,
      shape: () => e
    });
  } else return s instanceof rt ? new rt({
    ...s._def,
    type: Ut(s.element)
  }) : s instanceof ut ? ut.create(Ut(s.unwrap())) : s instanceof At ? At.create(Ut(s.unwrap())) : s instanceof ht ? ht.create(s.items.map((e) => Ut(e))) : s;
}
class Ee extends ie {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = fe.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== B.object) {
      const c = this._getOrReturnCtx(e);
      return V(c, {
        code: q.invalid_type,
        expected: B.object,
        received: c.parsedType
      }), te;
    }
    const { status: a, ctx: t } = this._processInputParams(e), { shape: n, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof _t && this._def.unknownKeys === "strip"))
      for (const c in t.data)
        o.includes(c) || i.push(c);
    const u = [];
    for (const c of o) {
      const h = n[c], f = t.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: h._parse(new dt(t, f, t.path, c)),
        alwaysSet: c in t.data
      });
    }
    if (this._def.catchall instanceof _t) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const h of i)
          u.push({
            key: { status: "valid", value: h },
            value: { status: "valid", value: t.data[h] }
          });
      else if (c === "strict")
        i.length > 0 && (V(t, {
          code: q.unrecognized_keys,
          keys: i
        }), a.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const h of i) {
        const f = t.data[h];
        u.push({
          key: { status: "valid", value: h },
          value: c._parse(
            new dt(t, f, t.path, h)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: h in t.data
        });
      }
    }
    return t.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const h of u) {
        const f = await h.key, v = await h.value;
        c.push({
          key: f,
          value: v,
          alwaysSet: h.alwaysSet
        });
      }
      return c;
    }).then((c) => Me.mergeObjectSync(a, c)) : Me.mergeObjectSync(a, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return Z.errToObj, new Ee({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, a) => {
          var t, n, o, i;
          const u = (o = (n = (t = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(t, r, a).message) !== null && o !== void 0 ? o : a.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = Z.errToObj(e).message) !== null && i !== void 0 ? i : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ee({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ee({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new Ee({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new Ee({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: X.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new Ee({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return fe.objectKeys(e).forEach((a) => {
      e[a] && this.shape[a] && (r[a] = this.shape[a]);
    }), new Ee({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return fe.objectKeys(this.shape).forEach((a) => {
      e[a] || (r[a] = this.shape[a]);
    }), new Ee({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Ut(this);
  }
  partial(e) {
    const r = {};
    return fe.objectKeys(this.shape).forEach((a) => {
      const t = this.shape[a];
      e && !e[a] ? r[a] = t : r[a] = t.optional();
    }), new Ee({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return fe.objectKeys(this.shape).forEach((a) => {
      if (e && !e[a])
        r[a] = this.shape[a];
      else {
        let n = this.shape[a];
        for (; n instanceof ut; )
          n = n._def.innerType;
        r[a] = n;
      }
    }), new Ee({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return io(fe.objectKeys(this.shape));
  }
}
Ee.create = (s, e) => new Ee({
  shape: () => s,
  unknownKeys: "strip",
  catchall: _t.create(),
  typeName: X.ZodObject,
  ...ne(e)
});
Ee.strictCreate = (s, e) => new Ee({
  shape: () => s,
  unknownKeys: "strict",
  catchall: _t.create(),
  typeName: X.ZodObject,
  ...ne(e)
});
Ee.lazycreate = (s, e) => new Ee({
  shape: s,
  unknownKeys: "strip",
  catchall: _t.create(),
  typeName: X.ZodObject,
  ...ne(e)
});
class wr extends ie {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), a = this._def.options;
    function t(n) {
      for (const i of n)
        if (i.result.status === "valid")
          return i.result;
      for (const i of n)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = n.map((i) => new Be(i.ctx.common.issues));
      return V(r, {
        code: q.invalid_union,
        unionErrors: o
      }), te;
    }
    if (r.common.async)
      return Promise.all(a.map(async (n) => {
        const o = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await n._parseAsync({
            data: r.data,
            path: r.path,
            parent: o
          }),
          ctx: o
        };
      })).then(t);
    {
      let n;
      const o = [];
      for (const u of a) {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, h = u._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (h.status === "valid")
          return h;
        h.status === "dirty" && !n && (n = { result: h, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (n)
        return r.common.issues.push(...n.ctx.common.issues), n.result;
      const i = o.map((u) => new Be(u));
      return V(r, {
        code: q.invalid_union,
        unionErrors: i
      }), te;
    }
  }
  get options() {
    return this._def.options;
  }
}
wr.create = (s, e) => new wr({
  options: s,
  typeName: X.ZodUnion,
  ...ne(e)
});
const gt = (s) => s instanceof Er ? gt(s.schema) : s instanceof at ? gt(s.innerType()) : s instanceof Sr ? [s.value] : s instanceof xt ? s.options : s instanceof Cr ? fe.objectValues(s.enum) : s instanceof xr ? gt(s._def.innerType) : s instanceof yr ? [void 0] : s instanceof _r ? [null] : s instanceof ut ? [void 0, ...gt(s.unwrap())] : s instanceof At ? [null, ...gt(s.unwrap())] : s instanceof _s || s instanceof Rr ? gt(s.unwrap()) : s instanceof Ar ? gt(s._def.innerType) : [];
class Kr extends ie {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== B.object)
      return V(r, {
        code: q.invalid_type,
        expected: B.object,
        received: r.parsedType
      }), te;
    const a = this.discriminator, t = r.data[a], n = this.optionsMap.get(t);
    return n ? r.common.async ? n._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : n._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (V(r, {
      code: q.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [a]
    }), te);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, r, a) {
    const t = /* @__PURE__ */ new Map();
    for (const n of r) {
      const o = gt(n.shape[e]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (t.has(i))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
        t.set(i, n);
      }
    }
    return new Kr({
      typeName: X.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: t,
      ...ne(a)
    });
  }
}
function os(s, e) {
  const r = yt(s), a = yt(e);
  if (s === e)
    return { valid: !0, data: s };
  if (r === B.object && a === B.object) {
    const t = fe.objectKeys(e), n = fe.objectKeys(s).filter((i) => t.indexOf(i) !== -1), o = { ...s, ...e };
    for (const i of n) {
      const u = os(s[i], e[i]);
      if (!u.valid)
        return { valid: !1 };
      o[i] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === B.array && a === B.array) {
    if (s.length !== e.length)
      return { valid: !1 };
    const t = [];
    for (let n = 0; n < s.length; n++) {
      const o = s[n], i = e[n], u = os(o, i);
      if (!u.valid)
        return { valid: !1 };
      t.push(u.data);
    }
    return { valid: !0, data: t };
  } else return r === B.date && a === B.date && +s == +e ? { valid: !0, data: s } : { valid: !1 };
}
class br extends ie {
  _parse(e) {
    const { status: r, ctx: a } = this._processInputParams(e), t = (n, o) => {
      if (ss(n) || ss(o))
        return te;
      const i = os(n.value, o.value);
      return i.valid ? ((ns(n) || ns(o)) && r.dirty(), { status: r.value, value: i.data }) : (V(a, {
        code: q.invalid_intersection_types
      }), te);
    };
    return a.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      }),
      this._def.right._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      })
    ]).then(([n, o]) => t(n, o)) : t(this._def.left._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }), this._def.right._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }));
  }
}
br.create = (s, e, r) => new br({
  left: s,
  right: e,
  typeName: X.ZodIntersection,
  ...ne(r)
});
class ht extends ie {
  _parse(e) {
    const { status: r, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== B.array)
      return V(a, {
        code: q.invalid_type,
        expected: B.array,
        received: a.parsedType
      }), te;
    if (a.data.length < this._def.items.length)
      return V(a, {
        code: q.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), te;
    !this._def.rest && a.data.length > this._def.items.length && (V(a, {
      code: q.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const n = [...a.data].map((o, i) => {
      const u = this._def.items[i] || this._def.rest;
      return u ? u._parse(new dt(a, o, a.path, i)) : null;
    }).filter((o) => !!o);
    return a.common.async ? Promise.all(n).then((o) => Me.mergeArray(r, o)) : Me.mergeArray(r, n);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ht({
      ...this._def,
      rest: e
    });
  }
}
ht.create = (s, e) => {
  if (!Array.isArray(s))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ht({
    items: s,
    typeName: X.ZodTuple,
    rest: null,
    ...ne(e)
  });
};
class Pr extends ie {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== B.object)
      return V(a, {
        code: q.invalid_type,
        expected: B.object,
        received: a.parsedType
      }), te;
    const t = [], n = this._def.keyType, o = this._def.valueType;
    for (const i in a.data)
      t.push({
        key: n._parse(new dt(a, i, a.path, i)),
        value: o._parse(new dt(a, a.data[i], a.path, i)),
        alwaysSet: i in a.data
      });
    return a.common.async ? Me.mergeObjectAsync(r, t) : Me.mergeObjectSync(r, t);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, a) {
    return r instanceof ie ? new Pr({
      keyType: e,
      valueType: r,
      typeName: X.ZodRecord,
      ...ne(a)
    }) : new Pr({
      keyType: tt.create(),
      valueType: e,
      typeName: X.ZodRecord,
      ...ne(r)
    });
  }
}
class Wr extends ie {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== B.map)
      return V(a, {
        code: q.invalid_type,
        expected: B.map,
        received: a.parsedType
      }), te;
    const t = this._def.keyType, n = this._def.valueType, o = [...a.data.entries()].map(([i, u], c) => ({
      key: t._parse(new dt(a, i, a.path, [c, "key"])),
      value: n._parse(new dt(a, u, a.path, [c, "value"]))
    }));
    if (a.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const c = await u.key, h = await u.value;
          if (c.status === "aborted" || h.status === "aborted")
            return te;
          (c.status === "dirty" || h.status === "dirty") && r.dirty(), i.set(c.value, h.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const u of o) {
        const c = u.key, h = u.value;
        if (c.status === "aborted" || h.status === "aborted")
          return te;
        (c.status === "dirty" || h.status === "dirty") && r.dirty(), i.set(c.value, h.value);
      }
      return { status: r.value, value: i };
    }
  }
}
Wr.create = (s, e, r) => new Wr({
  valueType: e,
  keyType: s,
  typeName: X.ZodMap,
  ...ne(r)
});
class Nt extends ie {
  _parse(e) {
    const { status: r, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== B.set)
      return V(a, {
        code: q.invalid_type,
        expected: B.set,
        received: a.parsedType
      }), te;
    const t = this._def;
    t.minSize !== null && a.data.size < t.minSize.value && (V(a, {
      code: q.too_small,
      minimum: t.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: t.minSize.message
    }), r.dirty()), t.maxSize !== null && a.data.size > t.maxSize.value && (V(a, {
      code: q.too_big,
      maximum: t.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: t.maxSize.message
    }), r.dirty());
    const n = this._def.valueType;
    function o(u) {
      const c = /* @__PURE__ */ new Set();
      for (const h of u) {
        if (h.status === "aborted")
          return te;
        h.status === "dirty" && r.dirty(), c.add(h.value);
      }
      return { status: r.value, value: c };
    }
    const i = [...a.data.values()].map((u, c) => n._parse(new dt(a, u, a.path, c)));
    return a.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(e, r) {
    return new Nt({
      ...this._def,
      minSize: { value: e, message: Z.toString(r) }
    });
  }
  max(e, r) {
    return new Nt({
      ...this._def,
      maxSize: { value: e, message: Z.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Nt.create = (s, e) => new Nt({
  valueType: s,
  minSize: null,
  maxSize: null,
  typeName: X.ZodSet,
  ...ne(e)
});
class Qt extends ie {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== B.function)
      return V(r, {
        code: q.invalid_type,
        expected: B.function,
        received: r.parsedType
      }), te;
    function a(i, u) {
      return Vr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          zr(),
          Xt
        ].filter((c) => !!c),
        issueData: {
          code: q.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function t(i, u) {
      return Vr({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          zr(),
          Xt
        ].filter((c) => !!c),
        issueData: {
          code: q.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const n = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof tr) {
      const i = this;
      return qe(async function(...u) {
        const c = new Be([]), h = await i._def.args.parseAsync(u, n).catch((d) => {
          throw c.addIssue(a(u, d)), c;
        }), f = await Reflect.apply(o, this, h);
        return await i._def.returns._def.type.parseAsync(f, n).catch((d) => {
          throw c.addIssue(t(f, d)), c;
        });
      });
    } else {
      const i = this;
      return qe(function(...u) {
        const c = i._def.args.safeParse(u, n);
        if (!c.success)
          throw new Be([a(u, c.error)]);
        const h = Reflect.apply(o, this, c.data), f = i._def.returns.safeParse(h, n);
        if (!f.success)
          throw new Be([t(h, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Qt({
      ...this._def,
      args: ht.create(e).rest(Dt.create())
    });
  }
  returns(e) {
    return new Qt({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, a) {
    return new Qt({
      args: e || ht.create([]).rest(Dt.create()),
      returns: r || Dt.create(),
      typeName: X.ZodFunction,
      ...ne(a)
    });
  }
}
class Er extends ie {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Er.create = (s, e) => new Er({
  getter: s,
  typeName: X.ZodLazy,
  ...ne(e)
});
class Sr extends ie {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return V(r, {
        received: r.data,
        code: q.invalid_literal,
        expected: this._def.value
      }), te;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Sr.create = (s, e) => new Sr({
  value: s,
  typeName: X.ZodLiteral,
  ...ne(e)
});
function io(s, e) {
  return new xt({
    values: s,
    typeName: X.ZodEnum,
    ...ne(e)
  });
}
class xt extends ie {
  constructor() {
    super(...arguments), ir.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), a = this._def.values;
      return V(r, {
        expected: fe.joinValues(a),
        received: r.parsedType,
        code: q.invalid_type
      }), te;
    }
    if (Hr(this, ir) || ao(this, ir, new Set(this._def.values)), !Hr(this, ir).has(e.data)) {
      const r = this._getOrReturnCtx(e), a = this._def.values;
      return V(r, {
        received: r.data,
        code: q.invalid_enum_value,
        options: a
      }), te;
    }
    return qe(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return xt.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return xt.create(this.options.filter((a) => !e.includes(a)), {
      ...this._def,
      ...r
    });
  }
}
ir = /* @__PURE__ */ new WeakMap();
xt.create = io;
class Cr extends ie {
  constructor() {
    super(...arguments), lr.set(this, void 0);
  }
  _parse(e) {
    const r = fe.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(e);
    if (a.parsedType !== B.string && a.parsedType !== B.number) {
      const t = fe.objectValues(r);
      return V(a, {
        expected: fe.joinValues(t),
        received: a.parsedType,
        code: q.invalid_type
      }), te;
    }
    if (Hr(this, lr) || ao(this, lr, new Set(fe.getValidEnumValues(this._def.values))), !Hr(this, lr).has(e.data)) {
      const t = fe.objectValues(r);
      return V(a, {
        received: a.data,
        code: q.invalid_enum_value,
        options: t
      }), te;
    }
    return qe(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
lr = /* @__PURE__ */ new WeakMap();
Cr.create = (s, e) => new Cr({
  values: s,
  typeName: X.ZodNativeEnum,
  ...ne(e)
});
class tr extends ie {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== B.promise && r.common.async === !1)
      return V(r, {
        code: q.invalid_type,
        expected: B.promise,
        received: r.parsedType
      }), te;
    const a = r.parsedType === B.promise ? r.data : Promise.resolve(r.data);
    return qe(a.then((t) => this._def.type.parseAsync(t, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
tr.create = (s, e) => new tr({
  type: s,
  typeName: X.ZodPromise,
  ...ne(e)
});
class at extends ie {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === X.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: a } = this._processInputParams(e), t = this._def.effect || null, n = {
      addIssue: (o) => {
        V(a, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (n.addIssue = n.addIssue.bind(n), t.type === "preprocess") {
      const o = t.transform(a.data, n);
      if (a.common.async)
        return Promise.resolve(o).then(async (i) => {
          if (r.value === "aborted")
            return te;
          const u = await this._def.schema._parseAsync({
            data: i,
            path: a.path,
            parent: a
          });
          return u.status === "aborted" ? te : u.status === "dirty" || r.value === "dirty" ? Bt(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return te;
        const i = this._def.schema._parseSync({
          data: o,
          path: a.path,
          parent: a
        });
        return i.status === "aborted" ? te : i.status === "dirty" || r.value === "dirty" ? Bt(i.value) : i;
      }
    }
    if (t.type === "refinement") {
      const o = (i) => {
        const u = t.refinement(i, n);
        if (a.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (a.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return i.status === "aborted" ? te : (i.status === "dirty" && r.dirty(), o(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((i) => i.status === "aborted" ? te : (i.status === "dirty" && r.dirty(), o(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (t.type === "transform")
      if (a.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!Ft(o))
          return o;
        const i = t.transform(o.value, n);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((o) => Ft(o) ? Promise.resolve(t.transform(o.value, n)).then((i) => ({ status: r.value, value: i })) : o);
    fe.assertNever(t);
  }
}
at.create = (s, e, r) => new at({
  schema: s,
  typeName: X.ZodEffects,
  effect: e,
  ...ne(r)
});
at.createWithPreprocess = (s, e, r) => new at({
  schema: e,
  effect: { type: "preprocess", transform: s },
  typeName: X.ZodEffects,
  ...ne(r)
});
class ut extends ie {
  _parse(e) {
    return this._getType(e) === B.undefined ? qe(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ut.create = (s, e) => new ut({
  innerType: s,
  typeName: X.ZodOptional,
  ...ne(e)
});
class At extends ie {
  _parse(e) {
    return this._getType(e) === B.null ? qe(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
At.create = (s, e) => new At({
  innerType: s,
  typeName: X.ZodNullable,
  ...ne(e)
});
class xr extends ie {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let a = r.data;
    return r.parsedType === B.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
xr.create = (s, e) => new xr({
  innerType: s,
  typeName: X.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ne(e)
});
class Ar extends ie {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), a = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, t = this._def.innerType._parse({
      data: a.data,
      path: a.path,
      parent: {
        ...a
      }
    });
    return gr(t) ? t.then((n) => ({
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new Be(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: t.status === "valid" ? t.value : this._def.catchValue({
        get error() {
          return new Be(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ar.create = (s, e) => new Ar({
  innerType: s,
  typeName: X.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ne(e)
});
class Qr extends ie {
  _parse(e) {
    if (this._getType(e) !== B.nan) {
      const a = this._getOrReturnCtx(e);
      return V(a, {
        code: q.invalid_type,
        expected: B.nan,
        received: a.parsedType
      }), te;
    }
    return { status: "valid", value: e.data };
  }
}
Qr.create = (s) => new Qr({
  typeName: X.ZodNaN,
  ...ne(s)
});
const Hi = Symbol("zod_brand");
class _s extends ie {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), a = r.data;
    return this._def.type._parse({
      data: a,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class kr extends ie {
  _parse(e) {
    const { status: r, ctx: a } = this._processInputParams(e);
    if (a.common.async)
      return (async () => {
        const n = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return n.status === "aborted" ? te : n.status === "dirty" ? (r.dirty(), Bt(n.value)) : this._def.out._parseAsync({
          data: n.value,
          path: a.path,
          parent: a
        });
      })();
    {
      const t = this._def.in._parseSync({
        data: a.data,
        path: a.path,
        parent: a
      });
      return t.status === "aborted" ? te : t.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: t.value
      }) : this._def.out._parseSync({
        data: t.value,
        path: a.path,
        parent: a
      });
    }
  }
  static create(e, r) {
    return new kr({
      in: e,
      out: r,
      typeName: X.ZodPipeline
    });
  }
}
class Rr extends ie {
  _parse(e) {
    const r = this._def.innerType._parse(e), a = (t) => (Ft(t) && (t.value = Object.freeze(t.value)), t);
    return gr(r) ? r.then((t) => a(t)) : a(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Rr.create = (s, e) => new Rr({
  innerType: s,
  typeName: X.ZodReadonly,
  ...ne(e)
});
function Ks(s, e) {
  const r = typeof s == "function" ? s(e) : typeof s == "string" ? { message: s } : s;
  return typeof r == "string" ? { message: r } : r;
}
function lo(s, e = {}, r) {
  return s ? er.create().superRefine((a, t) => {
    var n, o;
    const i = s(a);
    if (i instanceof Promise)
      return i.then((u) => {
        var c, h;
        if (!u) {
          const f = Ks(e, a), v = (h = (c = f.fatal) !== null && c !== void 0 ? c : r) !== null && h !== void 0 ? h : !0;
          t.addIssue({ code: "custom", ...f, fatal: v });
        }
      });
    if (!i) {
      const u = Ks(e, a), c = (o = (n = u.fatal) !== null && n !== void 0 ? n : r) !== null && o !== void 0 ? o : !0;
      t.addIssue({ code: "custom", ...u, fatal: c });
    }
  }) : er.create();
}
const Bi = {
  object: Ee.lazycreate
};
var X;
(function(s) {
  s.ZodString = "ZodString", s.ZodNumber = "ZodNumber", s.ZodNaN = "ZodNaN", s.ZodBigInt = "ZodBigInt", s.ZodBoolean = "ZodBoolean", s.ZodDate = "ZodDate", s.ZodSymbol = "ZodSymbol", s.ZodUndefined = "ZodUndefined", s.ZodNull = "ZodNull", s.ZodAny = "ZodAny", s.ZodUnknown = "ZodUnknown", s.ZodNever = "ZodNever", s.ZodVoid = "ZodVoid", s.ZodArray = "ZodArray", s.ZodObject = "ZodObject", s.ZodUnion = "ZodUnion", s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", s.ZodIntersection = "ZodIntersection", s.ZodTuple = "ZodTuple", s.ZodRecord = "ZodRecord", s.ZodMap = "ZodMap", s.ZodSet = "ZodSet", s.ZodFunction = "ZodFunction", s.ZodLazy = "ZodLazy", s.ZodLiteral = "ZodLiteral", s.ZodEnum = "ZodEnum", s.ZodEffects = "ZodEffects", s.ZodNativeEnum = "ZodNativeEnum", s.ZodOptional = "ZodOptional", s.ZodNullable = "ZodNullable", s.ZodDefault = "ZodDefault", s.ZodCatch = "ZodCatch", s.ZodPromise = "ZodPromise", s.ZodBranded = "ZodBranded", s.ZodPipeline = "ZodPipeline", s.ZodReadonly = "ZodReadonly";
})(X || (X = {}));
const Zi = (s, e = {
  message: `Input not instance of ${s.name}`
}) => lo((r) => r instanceof s, e), co = tt.create, uo = St.create, Wi = Qr.create, Qi = Ct.create, ho = vr.create, Ji = Mt.create, Gi = Br.create, Ki = yr.create, Yi = _r.create, Xi = er.create, el = Dt.create, tl = _t.create, rl = Zr.create, al = rt.create, sl = Ee.create, nl = Ee.strictCreate, ol = wr.create, il = Kr.create, ll = br.create, cl = ht.create, ul = Pr.create, dl = Wr.create, hl = Nt.create, fl = Qt.create, ml = Er.create, pl = Sr.create, gl = xt.create, vl = Cr.create, yl = tr.create, Ys = at.create, _l = ut.create, wl = At.create, bl = at.createWithPreprocess, Pl = kr.create, El = () => co().optional(), Sl = () => uo().optional(), Cl = () => ho().optional(), xl = {
  string: (s) => tt.create({ ...s, coerce: !0 }),
  number: (s) => St.create({ ...s, coerce: !0 }),
  boolean: (s) => vr.create({
    ...s,
    coerce: !0
  }),
  bigint: (s) => Ct.create({ ...s, coerce: !0 }),
  date: (s) => Mt.create({ ...s, coerce: !0 })
}, Al = te;
var l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Xt,
  setErrorMap: bi,
  getErrorMap: zr,
  makeIssue: Vr,
  EMPTY_PATH: Pi,
  addIssueToContext: V,
  ParseStatus: Me,
  INVALID: te,
  DIRTY: Bt,
  OK: qe,
  isAborted: ss,
  isDirty: ns,
  isValid: Ft,
  isAsync: gr,
  get util() {
    return fe;
  },
  get objectUtil() {
    return as;
  },
  ZodParsedType: B,
  getParsedType: yt,
  ZodType: ie,
  datetimeRegex: oo,
  ZodString: tt,
  ZodNumber: St,
  ZodBigInt: Ct,
  ZodBoolean: vr,
  ZodDate: Mt,
  ZodSymbol: Br,
  ZodUndefined: yr,
  ZodNull: _r,
  ZodAny: er,
  ZodUnknown: Dt,
  ZodNever: _t,
  ZodVoid: Zr,
  ZodArray: rt,
  ZodObject: Ee,
  ZodUnion: wr,
  ZodDiscriminatedUnion: Kr,
  ZodIntersection: br,
  ZodTuple: ht,
  ZodRecord: Pr,
  ZodMap: Wr,
  ZodSet: Nt,
  ZodFunction: Qt,
  ZodLazy: Er,
  ZodLiteral: Sr,
  ZodEnum: xt,
  ZodNativeEnum: Cr,
  ZodPromise: tr,
  ZodEffects: at,
  ZodTransformer: at,
  ZodOptional: ut,
  ZodNullable: At,
  ZodDefault: xr,
  ZodCatch: Ar,
  ZodNaN: Qr,
  BRAND: Hi,
  ZodBranded: _s,
  ZodPipeline: kr,
  ZodReadonly: Rr,
  custom: lo,
  Schema: ie,
  ZodSchema: ie,
  late: Bi,
  get ZodFirstPartyTypeKind() {
    return X;
  },
  coerce: xl,
  any: Xi,
  array: al,
  bigint: Qi,
  boolean: ho,
  date: Ji,
  discriminatedUnion: il,
  effect: Ys,
  enum: gl,
  function: fl,
  instanceof: Zi,
  intersection: ll,
  lazy: ml,
  literal: pl,
  map: dl,
  nan: Wi,
  nativeEnum: vl,
  never: tl,
  null: Yi,
  nullable: wl,
  number: uo,
  object: sl,
  oboolean: Cl,
  onumber: Sl,
  optional: _l,
  ostring: El,
  pipeline: Pl,
  preprocess: bl,
  promise: yl,
  record: ul,
  set: hl,
  strictObject: nl,
  string: co,
  symbol: Gi,
  transformer: Ys,
  tuple: cl,
  undefined: Ki,
  union: ol,
  unknown: el,
  void: rl,
  NEVER: Al,
  ZodIssueCode: q,
  quotelessJson: wi,
  ZodError: Be
});
const Yr = "2025-06-18", Rl = [
  Yr,
  "2025-03-26",
  "2024-11-05",
  "2024-10-07"
], Xr = "2.0", fo = l.union([l.string(), l.number().int()]), mo = l.string(), Tl = l.object({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: l.optional(fo)
}).passthrough(), Ge = l.object({
  _meta: l.optional(Tl)
}).passthrough(), He = l.object({
  method: l.string(),
  params: l.optional(Ge)
}), Ir = l.object({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}).passthrough(), ft = l.object({
  method: l.string(),
  params: l.optional(Ir)
}), Ke = l.object({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}).passthrough(), ea = l.union([l.string(), l.number().int()]), po = l.object({
  jsonrpc: l.literal(Xr),
  id: ea
}).merge(He).strict(), go = (s) => po.safeParse(s).success, vo = l.object({
  jsonrpc: l.literal(Xr)
}).merge(ft).strict(), kl = (s) => vo.safeParse(s).success, yo = l.object({
  jsonrpc: l.literal(Xr),
  id: ea,
  result: Ke
}).strict(), is = (s) => yo.safeParse(s).success;
var lt;
(function(s) {
  s[s.ConnectionClosed = -32e3] = "ConnectionClosed", s[s.RequestTimeout = -32001] = "RequestTimeout", s[s.ParseError = -32700] = "ParseError", s[s.InvalidRequest = -32600] = "InvalidRequest", s[s.MethodNotFound = -32601] = "MethodNotFound", s[s.InvalidParams = -32602] = "InvalidParams", s[s.InternalError = -32603] = "InternalError";
})(lt || (lt = {}));
const _o = l.object({
  jsonrpc: l.literal(Xr),
  id: ea,
  error: l.object({
    /**
     * The error type that occurred.
     */
    code: l.number().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: l.string(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: l.optional(l.unknown())
  })
}).strict(), Il = (s) => _o.safeParse(s).success, Lr = l.union([
  po,
  vo,
  yo,
  _o
]), Zt = Ke.strict(), ws = ft.extend({
  method: l.literal("notifications/cancelled"),
  params: Ir.extend({
    /**
     * The ID of the request to cancel.
     *
     * This MUST correspond to the ID of a request previously issued in the same direction.
     */
    requestId: ea,
    /**
     * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
     */
    reason: l.string().optional()
  })
}), $r = l.object({
  /** Intended for programmatic or logical use, but used as a display name in past specs or fallback */
  name: l.string(),
  /**
  * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
  * even by those unfamiliar with domain-specific terminology.
  *
  * If not provided, the name should be used for display (except for Tool,
  * where `annotations.title` should be given precedence over using `name`,
  * if present).
  */
  title: l.optional(l.string())
}).passthrough(), wo = $r.extend({
  version: l.string()
}), $l = l.object({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: l.optional(l.object({}).passthrough()),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: l.optional(l.object({}).passthrough()),
  /**
   * Present if the client supports eliciting user input.
   */
  elicitation: l.optional(l.object({}).passthrough()),
  /**
   * Present if the client supports listing roots.
   */
  roots: l.optional(l.object({
    /**
     * Whether the client supports issuing notifications for changes to the roots list.
     */
    listChanged: l.optional(l.boolean())
  }).passthrough())
}).passthrough(), Ol = He.extend({
  method: l.literal("initialize"),
  params: Ge.extend({
    /**
     * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
     */
    protocolVersion: l.string(),
    capabilities: $l,
    clientInfo: wo
  })
}), Dl = l.object({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: l.optional(l.object({}).passthrough()),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: l.optional(l.object({}).passthrough()),
  /**
   * Present if the server supports sending completions to the client.
   */
  completions: l.optional(l.object({}).passthrough()),
  /**
   * Present if the server offers any prompt templates.
   */
  prompts: l.optional(l.object({
    /**
     * Whether this server supports issuing notifications for changes to the prompt list.
     */
    listChanged: l.optional(l.boolean())
  }).passthrough()),
  /**
   * Present if the server offers any resources to read.
   */
  resources: l.optional(l.object({
    /**
     * Whether this server supports clients subscribing to resource updates.
     */
    subscribe: l.optional(l.boolean()),
    /**
     * Whether this server supports issuing notifications for changes to the resource list.
     */
    listChanged: l.optional(l.boolean())
  }).passthrough()),
  /**
   * Present if the server offers any tools to call.
   */
  tools: l.optional(l.object({
    /**
     * Whether this server supports issuing notifications for changes to the tool list.
     */
    listChanged: l.optional(l.boolean())
  }).passthrough())
}).passthrough(), bo = Ke.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: l.string(),
  capabilities: Dl,
  serverInfo: wo,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: l.optional(l.string())
}), Po = ft.extend({
  method: l.literal("notifications/initialized")
}), Fl = (s) => Po.safeParse(s).success, bs = He.extend({
  method: l.literal("ping")
}), Ml = l.object({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: l.number(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: l.optional(l.number()),
  /**
   * An optional message describing the current progress.
   */
  message: l.optional(l.string())
}).passthrough(), Ps = ft.extend({
  method: l.literal("notifications/progress"),
  params: Ir.merge(Ml).extend({
    /**
     * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
     */
    progressToken: fo
  })
}), ta = He.extend({
  params: Ge.extend({
    /**
     * An opaque token representing the current pagination position.
     * If provided, the server should return results starting after this cursor.
     */
    cursor: l.optional(mo)
  }).optional()
}), ra = Ke.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: l.optional(mo)
}), Eo = l.object({
  /**
   * The URI of this resource.
   */
  uri: l.string(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: l.optional(l.string()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}).passthrough(), So = Eo.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: l.string()
}), Co = Eo.extend({
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: l.string().base64()
}), xo = $r.extend({
  /**
   * The URI of this resource.
   */
  uri: l.string(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: l.optional(l.string()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: l.optional(l.string()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}), Nl = $r.extend({
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: l.string(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: l.optional(l.string()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: l.optional(l.string()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}), jl = ta.extend({
  method: l.literal("resources/list")
}), Ao = ra.extend({
  resources: l.array(xo)
}), Ll = ta.extend({
  method: l.literal("resources/templates/list")
}), Ro = ra.extend({
  resourceTemplates: l.array(Nl)
}), ql = He.extend({
  method: l.literal("resources/read"),
  params: Ge.extend({
    /**
     * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: l.string()
  })
}), To = Ke.extend({
  contents: l.array(l.union([So, Co]))
}), Ul = ft.extend({
  method: l.literal("notifications/resources/list_changed")
}), zl = He.extend({
  method: l.literal("resources/subscribe"),
  params: Ge.extend({
    /**
     * The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: l.string()
  })
}), Vl = He.extend({
  method: l.literal("resources/unsubscribe"),
  params: Ge.extend({
    /**
     * The URI of the resource to unsubscribe from.
     */
    uri: l.string()
  })
}), Hl = ft.extend({
  method: l.literal("notifications/resources/updated"),
  params: Ir.extend({
    /**
     * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
     */
    uri: l.string()
  })
}), Bl = l.object({
  /**
   * The name of the argument.
   */
  name: l.string(),
  /**
   * A human-readable description of the argument.
   */
  description: l.optional(l.string()),
  /**
   * Whether this argument must be provided.
   */
  required: l.optional(l.boolean())
}).passthrough(), Zl = $r.extend({
  /**
   * An optional description of what this prompt provides
   */
  description: l.optional(l.string()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: l.optional(l.array(Bl)),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}), Wl = ta.extend({
  method: l.literal("prompts/list")
}), ko = ra.extend({
  prompts: l.array(Zl)
}), Ql = He.extend({
  method: l.literal("prompts/get"),
  params: Ge.extend({
    /**
     * The name of the prompt or prompt template.
     */
    name: l.string(),
    /**
     * Arguments to use for templating the prompt.
     */
    arguments: l.optional(l.record(l.string()))
  })
}), Es = l.object({
  type: l.literal("text"),
  /**
   * The text content of the message.
   */
  text: l.string(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}).passthrough(), Ss = l.object({
  type: l.literal("image"),
  /**
   * The base64-encoded image data.
   */
  data: l.string().base64(),
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: l.string(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}).passthrough(), Cs = l.object({
  type: l.literal("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: l.string().base64(),
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: l.string(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}).passthrough(), Jl = l.object({
  type: l.literal("resource"),
  resource: l.union([So, Co]),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}).passthrough(), Gl = xo.extend({
  type: l.literal("resource_link")
}), Io = l.union([
  Es,
  Ss,
  Cs,
  Gl,
  Jl
]), Kl = l.object({
  role: l.enum(["user", "assistant"]),
  content: Io
}).passthrough(), $o = Ke.extend({
  /**
   * An optional description for the prompt.
   */
  description: l.optional(l.string()),
  messages: l.array(Kl)
}), Yl = ft.extend({
  method: l.literal("notifications/prompts/list_changed")
}), Xl = l.object({
  /**
   * A human-readable title for the tool.
   */
  title: l.optional(l.string()),
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint: l.optional(l.boolean()),
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint: l.optional(l.boolean()),
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint: l.optional(l.boolean()),
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint: l.optional(l.boolean())
}).passthrough(), ec = $r.extend({
  /**
   * A human-readable description of the tool.
   */
  description: l.optional(l.string()),
  /**
   * A JSON Schema object defining the expected parameters for the tool.
   */
  inputSchema: l.object({
    type: l.literal("object"),
    properties: l.optional(l.object({}).passthrough()),
    required: l.optional(l.array(l.string()))
  }).passthrough(),
  /**
   * An optional JSON Schema object defining the structure of the tool's output returned in
   * the structuredContent field of a CallToolResult.
   */
  outputSchema: l.optional(l.object({
    type: l.literal("object"),
    properties: l.optional(l.object({}).passthrough()),
    required: l.optional(l.array(l.string()))
  }).passthrough()),
  /**
   * Optional additional tool information.
   */
  annotations: l.optional(Xl),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}), tc = ta.extend({
  method: l.literal("tools/list")
}), Oo = ra.extend({
  tools: l.array(ec)
}), xs = Ke.extend({
  /**
   * A list of content objects that represent the result of the tool call.
   *
   * If the Tool does not define an outputSchema, this field MUST be present in the result.
   * For backwards compatibility, this field is always present, but it may be empty.
   */
  content: l.array(Io).default([]),
  /**
   * An object containing structured tool output.
   *
   * If the Tool defines an outputSchema, this field MUST be present in the result, and contain a JSON object that matches the schema.
   */
  structuredContent: l.object({}).passthrough().optional(),
  /**
   * Whether the tool call ended in an error.
   *
   * If not set, this is assumed to be false (the call was successful).
   *
   * Any errors that originate from the tool SHOULD be reported inside the result
   * object, with `isError` set to true, _not_ as an MCP protocol-level error
   * response. Otherwise, the LLM would not be able to see that an error occurred
   * and self-correct.
   *
   * However, any errors in _finding_ the tool, an error indicating that the
   * server does not support tool calls, or any other exceptional conditions,
   * should be reported as an MCP error response.
   */
  isError: l.optional(l.boolean())
});
xs.or(Ke.extend({
  toolResult: l.unknown()
}));
const rc = He.extend({
  method: l.literal("tools/call"),
  params: Ge.extend({
    name: l.string(),
    arguments: l.optional(l.record(l.unknown()))
  })
}), ac = ft.extend({
  method: l.literal("notifications/tools/list_changed")
}), Do = l.enum([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]), sc = He.extend({
  method: l.literal("logging/setLevel"),
  params: Ge.extend({
    /**
     * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
     */
    level: Do
  })
}), Fo = ft.extend({
  method: l.literal("notifications/message"),
  params: Ir.extend({
    /**
     * The severity of this log message.
     */
    level: Do,
    /**
     * An optional name of the logger issuing this message.
     */
    logger: l.optional(l.string()),
    /**
     * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
     */
    data: l.unknown()
  })
}), nc = l.object({
  /**
   * A hint for a model name.
   */
  name: l.string().optional()
}).passthrough(), oc = l.object({
  /**
   * Optional hints to use for model selection.
   */
  hints: l.optional(l.array(nc)),
  /**
   * How much to prioritize cost when selecting a model.
   */
  costPriority: l.optional(l.number().min(0).max(1)),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model.
   */
  speedPriority: l.optional(l.number().min(0).max(1)),
  /**
   * How much to prioritize intelligence and capabilities when selecting a model.
   */
  intelligencePriority: l.optional(l.number().min(0).max(1))
}).passthrough(), ic = l.object({
  role: l.enum(["user", "assistant"]),
  content: l.union([Es, Ss, Cs])
}).passthrough(), lc = He.extend({
  method: l.literal("sampling/createMessage"),
  params: Ge.extend({
    messages: l.array(ic),
    /**
     * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
     */
    systemPrompt: l.optional(l.string()),
    /**
     * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.
     */
    includeContext: l.optional(l.enum(["none", "thisServer", "allServers"])),
    temperature: l.optional(l.number()),
    /**
     * The maximum number of tokens to sample, as requested by the server. The client MAY choose to sample fewer tokens than requested.
     */
    maxTokens: l.number().int(),
    stopSequences: l.optional(l.array(l.string())),
    /**
     * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
     */
    metadata: l.optional(l.object({}).passthrough()),
    /**
     * The server's preferences for which model to select.
     */
    modelPreferences: l.optional(oc)
  })
}), cc = Ke.extend({
  /**
   * The name of the model that generated the message.
   */
  model: l.string(),
  /**
   * The reason why sampling stopped.
   */
  stopReason: l.optional(l.enum(["endTurn", "stopSequence", "maxTokens"]).or(l.string())),
  role: l.enum(["user", "assistant"]),
  content: l.discriminatedUnion("type", [
    Es,
    Ss,
    Cs
  ])
}), uc = l.object({
  type: l.literal("boolean"),
  title: l.optional(l.string()),
  description: l.optional(l.string()),
  default: l.optional(l.boolean())
}).passthrough(), dc = l.object({
  type: l.literal("string"),
  title: l.optional(l.string()),
  description: l.optional(l.string()),
  minLength: l.optional(l.number()),
  maxLength: l.optional(l.number()),
  format: l.optional(l.enum(["email", "uri", "date", "date-time"]))
}).passthrough(), hc = l.object({
  type: l.enum(["number", "integer"]),
  title: l.optional(l.string()),
  description: l.optional(l.string()),
  minimum: l.optional(l.number()),
  maximum: l.optional(l.number())
}).passthrough(), fc = l.object({
  type: l.literal("string"),
  title: l.optional(l.string()),
  description: l.optional(l.string()),
  enum: l.array(l.string()),
  enumNames: l.optional(l.array(l.string()))
}).passthrough(), mc = l.union([
  uc,
  dc,
  hc,
  fc
]), pc = He.extend({
  method: l.literal("elicitation/create"),
  params: Ge.extend({
    /**
     * The message to present to the user.
     */
    message: l.string(),
    /**
     * The schema for the requested user input.
     */
    requestedSchema: l.object({
      type: l.literal("object"),
      properties: l.record(l.string(), mc),
      required: l.optional(l.array(l.string()))
    }).passthrough()
  })
}), gc = Ke.extend({
  /**
   * The user's response action.
   */
  action: l.enum(["accept", "reject", "cancel"]),
  /**
   * The collected user input content (only present if action is "accept").
   */
  content: l.optional(l.record(l.string(), l.unknown()))
}), vc = l.object({
  type: l.literal("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: l.string()
}).passthrough(), yc = l.object({
  type: l.literal("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: l.string()
}).passthrough(), _c = He.extend({
  method: l.literal("completion/complete"),
  params: Ge.extend({
    ref: l.union([yc, vc]),
    /**
     * The argument's information
     */
    argument: l.object({
      /**
       * The name of the argument
       */
      name: l.string(),
      /**
       * The value of the argument to use for completion matching.
       */
      value: l.string()
    }).passthrough(),
    context: l.optional(l.object({
      /**
       * Previously-resolved variables in a URI template or prompt.
       */
      arguments: l.optional(l.record(l.string(), l.string()))
    }))
  })
}), Mo = Ke.extend({
  completion: l.object({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: l.array(l.string()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: l.optional(l.number().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: l.optional(l.boolean())
  }).passthrough()
}), wc = l.object({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   */
  uri: l.string().startsWith("file://"),
  /**
   * An optional name for the root.
   */
  name: l.optional(l.string()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: l.optional(l.object({}).passthrough())
}).passthrough(), bc = He.extend({
  method: l.literal("roots/list")
}), Pc = Ke.extend({
  roots: l.array(wc)
}), Ec = ft.extend({
  method: l.literal("notifications/roots/list_changed")
});
l.union([
  bs,
  Ol,
  _c,
  sc,
  Ql,
  Wl,
  jl,
  Ll,
  ql,
  zl,
  Vl,
  rc,
  tc
]);
l.union([
  ws,
  Ps,
  Po,
  Ec
]);
l.union([
  Zt,
  cc,
  gc,
  Pc
]);
l.union([
  bs,
  lc,
  pc,
  bc
]);
l.union([
  ws,
  Ps,
  Fo,
  Hl,
  Ul,
  ac,
  Yl
]);
l.union([
  Zt,
  bo,
  Mo,
  $o,
  ko,
  Ao,
  Ro,
  To,
  xs,
  Oo
]);
class Pt extends Error {
  constructor(e, r, a) {
    super(`MCP error ${e}: ${r}`), this.code = e, this.data = a, this.name = "McpError";
  }
}
const Sc = 6e4;
class Cc {
  constructor(e) {
    this._options = e, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this.setNotificationHandler(ws, (r) => {
      const a = this._requestHandlerAbortControllers.get(r.params.requestId);
      a == null || a.abort(r.params.reason);
    }), this.setNotificationHandler(Ps, (r) => {
      this._onprogress(r);
    }), this.setRequestHandler(
      bs,
      // Automatic pong by default.
      (r) => ({})
    );
  }
  _setupTimeout(e, r, a, t, n = !1) {
    this._timeoutInfo.set(e, {
      timeoutId: setTimeout(t, r),
      startTime: Date.now(),
      timeout: r,
      maxTotalTimeout: a,
      resetTimeoutOnProgress: n,
      onTimeout: t
    });
  }
  _resetTimeout(e) {
    const r = this._timeoutInfo.get(e);
    if (!r)
      return !1;
    const a = Date.now() - r.startTime;
    if (r.maxTotalTimeout && a >= r.maxTotalTimeout)
      throw this._timeoutInfo.delete(e), new Pt(lt.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: r.maxTotalTimeout, totalElapsed: a });
    return clearTimeout(r.timeoutId), r.timeoutId = setTimeout(r.onTimeout, r.timeout), !0;
  }
  _cleanupTimeout(e) {
    const r = this._timeoutInfo.get(e);
    r && (clearTimeout(r.timeoutId), this._timeoutInfo.delete(e));
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The Protocol object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(e) {
    this._transport = e, this._transport.onclose = () => {
      this._onclose();
    }, this._transport.onerror = (r) => {
      this._onerror(r);
    }, this._transport.onmessage = (r, a) => {
      is(r) || Il(r) ? this._onresponse(r) : go(r) ? this._onrequest(r, a) : kl(r) ? this._onnotification(r) : this._onerror(new Error(`Unknown message type: ${JSON.stringify(r)}`));
    }, await this._transport.start();
  }
  _onclose() {
    var e;
    const r = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._transport = void 0, (e = this.onclose) === null || e === void 0 || e.call(this);
    const a = new Pt(lt.ConnectionClosed, "Connection closed");
    for (const t of r.values())
      t(a);
  }
  _onerror(e) {
    var r;
    (r = this.onerror) === null || r === void 0 || r.call(this, e);
  }
  _onnotification(e) {
    var r;
    const a = (r = this._notificationHandlers.get(e.method)) !== null && r !== void 0 ? r : this.fallbackNotificationHandler;
    a !== void 0 && Promise.resolve().then(() => a(e)).catch((t) => this._onerror(new Error(`Uncaught error in notification handler: ${t}`)));
  }
  _onrequest(e, r) {
    var a, t, n, o;
    const i = (a = this._requestHandlers.get(e.method)) !== null && a !== void 0 ? a : this.fallbackRequestHandler;
    if (i === void 0) {
      (t = this._transport) === null || t === void 0 || t.send({
        jsonrpc: "2.0",
        id: e.id,
        error: {
          code: lt.MethodNotFound,
          message: "Method not found"
        }
      }).catch((h) => this._onerror(new Error(`Failed to send an error response: ${h}`)));
      return;
    }
    const u = new AbortController();
    this._requestHandlerAbortControllers.set(e.id, u);
    const c = {
      signal: u.signal,
      sessionId: (n = this._transport) === null || n === void 0 ? void 0 : n.sessionId,
      _meta: (o = e.params) === null || o === void 0 ? void 0 : o._meta,
      sendNotification: (h) => this.notification(h, { relatedRequestId: e.id }),
      sendRequest: (h, f, v) => this.request(h, f, { ...v, relatedRequestId: e.id }),
      authInfo: r == null ? void 0 : r.authInfo,
      requestId: e.id
    };
    Promise.resolve().then(() => i(e, c)).then((h) => {
      var f;
      if (!u.signal.aborted)
        return (f = this._transport) === null || f === void 0 ? void 0 : f.send({
          result: h,
          jsonrpc: "2.0",
          id: e.id
        });
    }, (h) => {
      var f, v;
      if (!u.signal.aborted)
        return (f = this._transport) === null || f === void 0 ? void 0 : f.send({
          jsonrpc: "2.0",
          id: e.id,
          error: {
            code: Number.isSafeInteger(h.code) ? h.code : lt.InternalError,
            message: (v = h.message) !== null && v !== void 0 ? v : "Internal error"
          }
        });
    }).catch((h) => this._onerror(new Error(`Failed to send response: ${h}`))).finally(() => {
      this._requestHandlerAbortControllers.delete(e.id);
    });
  }
  _onprogress(e) {
    const { progressToken: r, ...a } = e.params, t = Number(r), n = this._progressHandlers.get(t);
    if (!n) {
      this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`));
      return;
    }
    const o = this._responseHandlers.get(t), i = this._timeoutInfo.get(t);
    if (i && o && i.resetTimeoutOnProgress)
      try {
        this._resetTimeout(t);
      } catch (u) {
        o(u);
        return;
      }
    n(a);
  }
  _onresponse(e) {
    const r = Number(e.id), a = this._responseHandlers.get(r);
    if (a === void 0) {
      this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
      return;
    }
    if (this._responseHandlers.delete(r), this._progressHandlers.delete(r), this._cleanupTimeout(r), is(e))
      a(e);
    else {
      const t = new Pt(e.error.code, e.error.message, e.error.data);
      a(t);
    }
  }
  get transport() {
    return this._transport;
  }
  /**
   * Closes the connection.
   */
  async close() {
    var e;
    await ((e = this._transport) === null || e === void 0 ? void 0 : e.close());
  }
  /**
   * Sends a request and wait for a response.
   *
   * Do not use this method to emit notifications! Use notification() instead.
   */
  request(e, r, a) {
    const { relatedRequestId: t, resumptionToken: n, onresumptiontoken: o } = a ?? {};
    return new Promise((i, u) => {
      var c, h, f, v, d, m;
      if (!this._transport) {
        u(new Error("Not connected"));
        return;
      }
      ((c = this._options) === null || c === void 0 ? void 0 : c.enforceStrictCapabilities) === !0 && this.assertCapabilityForMethod(e.method), (h = a == null ? void 0 : a.signal) === null || h === void 0 || h.throwIfAborted();
      const g = this._requestMessageId++, y = {
        ...e,
        jsonrpc: "2.0",
        id: g
      };
      a != null && a.onprogress && (this._progressHandlers.set(g, a.onprogress), y.params = {
        ...e.params,
        _meta: {
          ...((f = e.params) === null || f === void 0 ? void 0 : f._meta) || {},
          progressToken: g
        }
      });
      const w = (E) => {
        var x;
        this._responseHandlers.delete(g), this._progressHandlers.delete(g), this._cleanupTimeout(g), (x = this._transport) === null || x === void 0 || x.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: g,
            reason: String(E)
          }
        }, { relatedRequestId: t, resumptionToken: n, onresumptiontoken: o }).catch((P) => this._onerror(new Error(`Failed to send cancellation: ${P}`))), u(E);
      };
      this._responseHandlers.set(g, (E) => {
        var x;
        if (!(!((x = a == null ? void 0 : a.signal) === null || x === void 0) && x.aborted)) {
          if (E instanceof Error)
            return u(E);
          try {
            const P = r.parse(E.result);
            i(P);
          } catch (P) {
            u(P);
          }
        }
      }), (v = a == null ? void 0 : a.signal) === null || v === void 0 || v.addEventListener("abort", () => {
        var E;
        w((E = a == null ? void 0 : a.signal) === null || E === void 0 ? void 0 : E.reason);
      });
      const M = (d = a == null ? void 0 : a.timeout) !== null && d !== void 0 ? d : Sc, O = () => w(new Pt(lt.RequestTimeout, "Request timed out", { timeout: M }));
      this._setupTimeout(g, M, a == null ? void 0 : a.maxTotalTimeout, O, (m = a == null ? void 0 : a.resetTimeoutOnProgress) !== null && m !== void 0 ? m : !1), this._transport.send(y, { relatedRequestId: t, resumptionToken: n, onresumptiontoken: o }).catch((E) => {
        this._cleanupTimeout(g), u(E);
      });
    });
  }
  /**
   * Emits a notification, which is a one-way message that does not expect a response.
   */
  async notification(e, r) {
    if (!this._transport)
      throw new Error("Not connected");
    this.assertNotificationCapability(e.method);
    const a = {
      ...e,
      jsonrpc: "2.0"
    };
    await this._transport.send(a, r);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a request with the given method.
   *
   * Note that this will replace any previous request handler for the same method.
   */
  setRequestHandler(e, r) {
    const a = e.shape.method.value;
    this.assertRequestHandlerCapability(a), this._requestHandlers.set(a, (t, n) => Promise.resolve(r(e.parse(t), n)));
  }
  /**
   * Removes the request handler for the given method.
   */
  removeRequestHandler(e) {
    this._requestHandlers.delete(e);
  }
  /**
   * Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
   */
  assertCanSetRequestHandler(e) {
    if (this._requestHandlers.has(e))
      throw new Error(`A request handler for ${e} already exists, which would be overridden`);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a notification with the given method.
   *
   * Note that this will replace any previous notification handler for the same method.
   */
  setNotificationHandler(e, r) {
    this._notificationHandlers.set(e.shape.method.value, (a) => Promise.resolve(r(e.parse(a))));
  }
  /**
   * Removes the notification handler for the given method.
   */
  removeNotificationHandler(e) {
    this._notificationHandlers.delete(e);
  }
}
function xc(s, e) {
  return Object.entries(e).reduce((r, [a, t]) => (t && typeof t == "object" ? r[a] = r[a] ? { ...r[a], ...t } : t : r[a] = t, r), { ...s });
}
var cr = { exports: {} };
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
var Ac = cr.exports, Xs;
function Rc() {
  return Xs || (Xs = 1, function(s, e) {
    (function(r, a) {
      a(e);
    })(Ac, function(r) {
      function a() {
        for (var _ = arguments.length, p = Array(_), b = 0; b < _; b++)
          p[b] = arguments[b];
        if (p.length > 1) {
          p[0] = p[0].slice(0, -1);
          for (var $ = p.length - 1, I = 1; I < $; ++I)
            p[I] = p[I].slice(1, -1);
          return p[$] = p[$].slice(1), p.join("");
        } else
          return p[0];
      }
      function t(_) {
        return "(?:" + _ + ")";
      }
      function n(_) {
        return _ === void 0 ? "undefined" : _ === null ? "null" : Object.prototype.toString.call(_).split(" ").pop().split("]").shift().toLowerCase();
      }
      function o(_) {
        return _.toUpperCase();
      }
      function i(_) {
        return _ != null ? _ instanceof Array ? _ : typeof _.length != "number" || _.split || _.setInterval || _.call ? [_] : Array.prototype.slice.call(_) : [];
      }
      function u(_, p) {
        var b = _;
        if (p)
          for (var $ in p)
            b[$] = p[$];
        return b;
      }
      function c(_) {
        var p = "[A-Za-z]", b = "[0-9]", $ = a(b, "[A-Fa-f]"), I = t(t("%[EFef]" + $ + "%" + $ + $ + "%" + $ + $) + "|" + t("%[89A-Fa-f]" + $ + "%" + $ + $) + "|" + t("%" + $ + $)), W = "[\\:\\/\\?\\#\\[\\]\\@]", J = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", he = a(W, J), ve = _ ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", Ae = _ ? "[\\uE000-\\uF8FF]" : "[]", de = a(p, b, "[\\-\\.\\_\\~]", ve);
        t(p + a(p, b, "[\\+\\-\\.]") + "*"), t(t(I + "|" + a(de, J, "[\\:]")) + "*");
        var ge = t(t("25[0-5]") + "|" + t("2[0-4]" + b) + "|" + t("1" + b + b) + "|" + t("0?[1-9]" + b) + "|0?0?" + b), Re = t(ge + "\\." + ge + "\\." + ge + "\\." + ge), se = t($ + "{1,4}"), _e = t(t(se + "\\:" + se) + "|" + Re), Te = t(t(se + "\\:") + "{6}" + _e), we = t("\\:\\:" + t(se + "\\:") + "{5}" + _e), wt = t(t(se) + "?\\:\\:" + t(se + "\\:") + "{4}" + _e), nt = t(t(t(se + "\\:") + "{0,1}" + se) + "?\\:\\:" + t(se + "\\:") + "{3}" + _e), ot = t(t(t(se + "\\:") + "{0,2}" + se) + "?\\:\\:" + t(se + "\\:") + "{2}" + _e), qt = t(t(t(se + "\\:") + "{0,3}" + se) + "?\\:\\:" + se + "\\:" + _e), Rt = t(t(t(se + "\\:") + "{0,4}" + se) + "?\\:\\:" + _e), We = t(t(t(se + "\\:") + "{0,5}" + se) + "?\\:\\:" + se), it = t(t(t(se + "\\:") + "{0,6}" + se) + "?\\:\\:"), Tt = t([Te, we, wt, nt, ot, qt, Rt, We, it].join("|")), pt = t(t(de + "|" + I) + "+");
        t("[vV]" + $ + "+\\." + a(de, J, "[\\:]") + "+"), t(t(I + "|" + a(de, J)) + "*");
        var nr = t(I + "|" + a(de, J, "[\\:\\@]"));
        return t(t(I + "|" + a(de, J, "[\\@]")) + "+"), t(t(nr + "|" + a("[\\/\\?]", Ae)) + "*"), {
          NOT_SCHEME: new RegExp(a("[^]", p, b, "[\\+\\-\\.]"), "g"),
          NOT_USERINFO: new RegExp(a("[^\\%\\:]", de, J), "g"),
          NOT_HOST: new RegExp(a("[^\\%\\[\\]\\:]", de, J), "g"),
          NOT_PATH: new RegExp(a("[^\\%\\/\\:\\@]", de, J), "g"),
          NOT_PATH_NOSCHEME: new RegExp(a("[^\\%\\/\\@]", de, J), "g"),
          NOT_QUERY: new RegExp(a("[^\\%]", de, J, "[\\:\\@\\/\\?]", Ae), "g"),
          NOT_FRAGMENT: new RegExp(a("[^\\%]", de, J, "[\\:\\@\\/\\?]"), "g"),
          ESCAPE: new RegExp(a("[^]", de, J), "g"),
          UNRESERVED: new RegExp(de, "g"),
          OTHER_CHARS: new RegExp(a("[^\\%]", de, he), "g"),
          PCT_ENCODED: new RegExp(I, "g"),
          IPV4ADDRESS: new RegExp("^(" + Re + ")$"),
          IPV6ADDRESS: new RegExp("^\\[?(" + Tt + ")" + t(t("\\%25|\\%(?!" + $ + "{2})") + "(" + pt + ")") + "?\\]?$")
          //RFC 6874, with relaxed parsing rules
        };
      }
      var h = c(!1), f = c(!0), v = /* @__PURE__ */ function() {
        function _(p, b) {
          var $ = [], I = !0, W = !1, J = void 0;
          try {
            for (var he = p[Symbol.iterator](), ve; !(I = (ve = he.next()).done) && ($.push(ve.value), !(b && $.length === b)); I = !0)
              ;
          } catch (Ae) {
            W = !0, J = Ae;
          } finally {
            try {
              !I && he.return && he.return();
            } finally {
              if (W) throw J;
            }
          }
          return $;
        }
        return function(p, b) {
          if (Array.isArray(p))
            return p;
          if (Symbol.iterator in Object(p))
            return _(p, b);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(), d = function(_) {
        if (Array.isArray(_)) {
          for (var p = 0, b = Array(_.length); p < _.length; p++) b[p] = _[p];
          return b;
        } else
          return Array.from(_);
      }, m = 2147483647, g = 36, y = 1, w = 26, M = 38, O = 700, E = 72, x = 128, P = "-", C = /^xn--/, T = /[^\0-\x7E]/, k = /[\x2E\u3002\uFF0E\uFF61]/g, S = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, R = g - y, D = Math.floor, F = String.fromCharCode;
      function j(_) {
        throw new RangeError(S[_]);
      }
      function z(_, p) {
        for (var b = [], $ = _.length; $--; )
          b[$] = p(_[$]);
        return b;
      }
      function Y(_, p) {
        var b = _.split("@"), $ = "";
        b.length > 1 && ($ = b[0] + "@", _ = b[1]), _ = _.replace(k, ".");
        var I = _.split("."), W = z(I, p).join(".");
        return $ + W;
      }
      function Q(_) {
        for (var p = [], b = 0, $ = _.length; b < $; ) {
          var I = _.charCodeAt(b++);
          if (I >= 55296 && I <= 56319 && b < $) {
            var W = _.charCodeAt(b++);
            (W & 64512) == 56320 ? p.push(((I & 1023) << 10) + (W & 1023) + 65536) : (p.push(I), b--);
          } else
            p.push(I);
        }
        return p;
      }
      var G = function(p) {
        return String.fromCodePoint.apply(String, d(p));
      }, ee = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : g;
      }, ae = function(p, b) {
        return p + 22 + 75 * (p < 26) - ((b != 0) << 5);
      }, Ne = function(p, b, $) {
        var I = 0;
        for (
          p = $ ? D(p / O) : p >> 1, p += D(p / b);
          /* no initialization */
          p > R * w >> 1;
          I += g
        )
          p = D(p / R);
        return D(I + (R + 1) * p / (p + M));
      }, De = function(p) {
        var b = [], $ = p.length, I = 0, W = x, J = E, he = p.lastIndexOf(P);
        he < 0 && (he = 0);
        for (var ve = 0; ve < he; ++ve)
          p.charCodeAt(ve) >= 128 && j("not-basic"), b.push(p.charCodeAt(ve));
        for (var Ae = he > 0 ? he + 1 : 0; Ae < $; ) {
          for (
            var de = I, ge = 1, Re = g;
            ;
            /* no condition */
            Re += g
          ) {
            Ae >= $ && j("invalid-input");
            var se = ee(p.charCodeAt(Ae++));
            (se >= g || se > D((m - I) / ge)) && j("overflow"), I += se * ge;
            var _e = Re <= J ? y : Re >= J + w ? w : Re - J;
            if (se < _e)
              break;
            var Te = g - _e;
            ge > D(m / Te) && j("overflow"), ge *= Te;
          }
          var we = b.length + 1;
          J = Ne(I - de, we, de == 0), D(I / we) > m - W && j("overflow"), W += D(I / we), I %= we, b.splice(I++, 0, W);
        }
        return String.fromCodePoint.apply(String, b);
      }, $e = function(p) {
        var b = [];
        p = Q(p);
        var $ = p.length, I = x, W = 0, J = E, he = !0, ve = !1, Ae = void 0;
        try {
          for (var de = p[Symbol.iterator](), ge; !(he = (ge = de.next()).done); he = !0) {
            var Re = ge.value;
            Re < 128 && b.push(F(Re));
          }
        } catch (or) {
          ve = !0, Ae = or;
        } finally {
          try {
            !he && de.return && de.return();
          } finally {
            if (ve)
              throw Ae;
          }
        }
        var se = b.length, _e = se;
        for (se && b.push(P); _e < $; ) {
          var Te = m, we = !0, wt = !1, nt = void 0;
          try {
            for (var ot = p[Symbol.iterator](), qt; !(we = (qt = ot.next()).done); we = !0) {
              var Rt = qt.value;
              Rt >= I && Rt < Te && (Te = Rt);
            }
          } catch (or) {
            wt = !0, nt = or;
          } finally {
            try {
              !we && ot.return && ot.return();
            } finally {
              if (wt)
                throw nt;
            }
          }
          var We = _e + 1;
          Te - I > D((m - W) / We) && j("overflow"), W += (Te - I) * We, I = Te;
          var it = !0, Tt = !1, pt = void 0;
          try {
            for (var nr = p[Symbol.iterator](), Us; !(it = (Us = nr.next()).done); it = !0) {
              var zs = Us.value;
              if (zs < I && ++W > m && j("overflow"), zs == I) {
                for (
                  var Fr = W, Mr = g;
                  ;
                  /* no condition */
                  Mr += g
                ) {
                  var Nr = Mr <= J ? y : Mr >= J + w ? w : Mr - J;
                  if (Fr < Nr)
                    break;
                  var Vs = Fr - Nr, Hs = g - Nr;
                  b.push(F(ae(Nr + Vs % Hs, 0))), Fr = D(Vs / Hs);
                }
                b.push(F(ae(Fr, 0))), J = Ne(W, We, _e == se), W = 0, ++_e;
              }
            }
          } catch (or) {
            Tt = !0, pt = or;
          } finally {
            try {
              !it && nr.return && nr.return();
            } finally {
              if (Tt)
                throw pt;
            }
          }
          ++W, ++I;
        }
        return b.join("");
      }, Ce = function(p) {
        return Y(p, function(b) {
          return C.test(b) ? De(b.slice(4).toLowerCase()) : b;
        });
      }, Ze = function(p) {
        return Y(p, function(b) {
          return T.test(b) ? "xn--" + $e(b) : b;
        });
      }, A = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        version: "2.1.0",
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        ucs2: {
          decode: Q,
          encode: G
        },
        decode: De,
        encode: $e,
        toASCII: Ze,
        toUnicode: Ce
      }, N = {};
      function H(_) {
        var p = _.charCodeAt(0), b = void 0;
        return p < 16 ? b = "%0" + p.toString(16).toUpperCase() : p < 128 ? b = "%" + p.toString(16).toUpperCase() : p < 2048 ? b = "%" + (p >> 6 | 192).toString(16).toUpperCase() + "%" + (p & 63 | 128).toString(16).toUpperCase() : b = "%" + (p >> 12 | 224).toString(16).toUpperCase() + "%" + (p >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (p & 63 | 128).toString(16).toUpperCase(), b;
      }
      function re(_) {
        for (var p = "", b = 0, $ = _.length; b < $; ) {
          var I = parseInt(_.substr(b + 1, 2), 16);
          if (I < 128)
            p += String.fromCharCode(I), b += 3;
          else if (I >= 194 && I < 224) {
            if ($ - b >= 6) {
              var W = parseInt(_.substr(b + 4, 2), 16);
              p += String.fromCharCode((I & 31) << 6 | W & 63);
            } else
              p += _.substr(b, 6);
            b += 6;
          } else if (I >= 224) {
            if ($ - b >= 9) {
              var J = parseInt(_.substr(b + 4, 2), 16), he = parseInt(_.substr(b + 7, 2), 16);
              p += String.fromCharCode((I & 15) << 12 | (J & 63) << 6 | he & 63);
            } else
              p += _.substr(b, 9);
            b += 9;
          } else
            p += _.substr(b, 3), b += 3;
        }
        return p;
      }
      function L(_, p) {
        function b($) {
          var I = re($);
          return I.match(p.UNRESERVED) ? I : $;
        }
        return _.scheme && (_.scheme = String(_.scheme).replace(p.PCT_ENCODED, b).toLowerCase().replace(p.NOT_SCHEME, "")), _.userinfo !== void 0 && (_.userinfo = String(_.userinfo).replace(p.PCT_ENCODED, b).replace(p.NOT_USERINFO, H).replace(p.PCT_ENCODED, o)), _.host !== void 0 && (_.host = String(_.host).replace(p.PCT_ENCODED, b).toLowerCase().replace(p.NOT_HOST, H).replace(p.PCT_ENCODED, o)), _.path !== void 0 && (_.path = String(_.path).replace(p.PCT_ENCODED, b).replace(_.scheme ? p.NOT_PATH : p.NOT_PATH_NOSCHEME, H).replace(p.PCT_ENCODED, o)), _.query !== void 0 && (_.query = String(_.query).replace(p.PCT_ENCODED, b).replace(p.NOT_QUERY, H).replace(p.PCT_ENCODED, o)), _.fragment !== void 0 && (_.fragment = String(_.fragment).replace(p.PCT_ENCODED, b).replace(p.NOT_FRAGMENT, H).replace(p.PCT_ENCODED, o)), _;
      }
      function U(_) {
        return _.replace(/^0*(.*)/, "$1") || "0";
      }
      function oe(_, p) {
        var b = _.match(p.IPV4ADDRESS) || [], $ = v(b, 2), I = $[1];
        return I ? I.split(".").map(U).join(".") : _;
      }
      function ue(_, p) {
        var b = _.match(p.IPV6ADDRESS) || [], $ = v(b, 3), I = $[1], W = $[2];
        if (I) {
          for (var J = I.toLowerCase().split("::").reverse(), he = v(J, 2), ve = he[0], Ae = he[1], de = Ae ? Ae.split(":").map(U) : [], ge = ve.split(":").map(U), Re = p.IPV4ADDRESS.test(ge[ge.length - 1]), se = Re ? 7 : 8, _e = ge.length - se, Te = Array(se), we = 0; we < se; ++we)
            Te[we] = de[we] || ge[_e + we] || "";
          Re && (Te[se - 1] = oe(Te[se - 1], p));
          var wt = Te.reduce(function(We, it, Tt) {
            if (!it || it === "0") {
              var pt = We[We.length - 1];
              pt && pt.index + pt.length === Tt ? pt.length++ : We.push({ index: Tt, length: 1 });
            }
            return We;
          }, []), nt = wt.sort(function(We, it) {
            return it.length - We.length;
          })[0], ot = void 0;
          if (nt && nt.length > 1) {
            var qt = Te.slice(0, nt.index), Rt = Te.slice(nt.index + nt.length);
            ot = qt.join(":") + "::" + Rt.join(":");
          } else
            ot = Te.join(":");
          return W && (ot += "%" + W), ot;
        } else
          return _;
      }
      var le = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, ye = "".match(/(){0}/)[1] === void 0;
      function me(_) {
        var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = {}, $ = p.iri !== !1 ? f : h;
        p.reference === "suffix" && (_ = (p.scheme ? p.scheme + ":" : "") + "//" + _);
        var I = _.match(le);
        if (I) {
          ye ? (b.scheme = I[1], b.userinfo = I[3], b.host = I[4], b.port = parseInt(I[5], 10), b.path = I[6] || "", b.query = I[7], b.fragment = I[8], isNaN(b.port) && (b.port = I[5])) : (b.scheme = I[1] || void 0, b.userinfo = _.indexOf("@") !== -1 ? I[3] : void 0, b.host = _.indexOf("//") !== -1 ? I[4] : void 0, b.port = parseInt(I[5], 10), b.path = I[6] || "", b.query = _.indexOf("?") !== -1 ? I[7] : void 0, b.fragment = _.indexOf("#") !== -1 ? I[8] : void 0, isNaN(b.port) && (b.port = _.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? I[4] : void 0)), b.host && (b.host = ue(oe(b.host, $), $)), b.scheme === void 0 && b.userinfo === void 0 && b.host === void 0 && b.port === void 0 && !b.path && b.query === void 0 ? b.reference = "same-document" : b.scheme === void 0 ? b.reference = "relative" : b.fragment === void 0 ? b.reference = "absolute" : b.reference = "uri", p.reference && p.reference !== "suffix" && p.reference !== b.reference && (b.error = b.error || "URI is not a " + p.reference + " reference.");
          var W = N[(p.scheme || b.scheme || "").toLowerCase()];
          if (!p.unicodeSupport && (!W || !W.unicodeSupport)) {
            if (b.host && (p.domainHost || W && W.domainHost))
              try {
                b.host = A.toASCII(b.host.replace($.PCT_ENCODED, re).toLowerCase());
              } catch (J) {
                b.error = b.error || "Host's domain name can not be converted to ASCII via punycode: " + J;
              }
            L(b, h);
          } else
            L(b, $);
          W && W.parse && W.parse(b, p);
        } else
          b.error = b.error || "URI can not be parsed.";
        return b;
      }
      function pe(_, p) {
        var b = p.iri !== !1 ? f : h, $ = [];
        return _.userinfo !== void 0 && ($.push(_.userinfo), $.push("@")), _.host !== void 0 && $.push(ue(oe(String(_.host), b), b).replace(b.IPV6ADDRESS, function(I, W, J) {
          return "[" + W + (J ? "%25" + J : "") + "]";
        })), (typeof _.port == "number" || typeof _.port == "string") && ($.push(":"), $.push(String(_.port))), $.length ? $.join("") : void 0;
      }
      var Fe = /^\.\.?\//, Pe = /^\/\.(\/|$)/, Ye = /^\/\.\.(\/|$)/, je = /^\/?(?:.|\n)*?(?=\/|$)/;
      function Se(_) {
        for (var p = []; _.length; )
          if (_.match(Fe))
            _ = _.replace(Fe, "");
          else if (_.match(Pe))
            _ = _.replace(Pe, "/");
          else if (_.match(Ye))
            _ = _.replace(Ye, "/"), p.pop();
          else if (_ === "." || _ === "..")
            _ = "";
          else {
            var b = _.match(je);
            if (b) {
              var $ = b[0];
              _ = _.slice($.length), p.push($);
            } else
              throw new Error("Unexpected dot segment condition");
          }
        return p.join("");
      }
      function xe(_) {
        var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = p.iri ? f : h, $ = [], I = N[(p.scheme || _.scheme || "").toLowerCase()];
        if (I && I.serialize && I.serialize(_, p), _.host && !b.IPV6ADDRESS.test(_.host)) {
          if (p.domainHost || I && I.domainHost)
            try {
              _.host = p.iri ? A.toUnicode(_.host) : A.toASCII(_.host.replace(b.PCT_ENCODED, re).toLowerCase());
            } catch (he) {
              _.error = _.error || "Host's domain name can not be converted to " + (p.iri ? "Unicode" : "ASCII") + " via punycode: " + he;
            }
        }
        L(_, b), p.reference !== "suffix" && _.scheme && ($.push(_.scheme), $.push(":"));
        var W = pe(_, p);
        if (W !== void 0 && (p.reference !== "suffix" && $.push("//"), $.push(W), _.path && _.path.charAt(0) !== "/" && $.push("/")), _.path !== void 0) {
          var J = _.path;
          !p.absolutePath && (!I || !I.absolutePath) && (J = Se(J)), W === void 0 && (J = J.replace(/^\/\//, "/%2F")), $.push(J);
        }
        return _.query !== void 0 && ($.push("?"), $.push(_.query)), _.fragment !== void 0 && ($.push("#"), $.push(_.fragment)), $.join("");
      }
      function Ue(_, p) {
        var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, $ = arguments[3], I = {};
        return $ || (_ = me(xe(_, b), b), p = me(xe(p, b), b)), b = b || {}, !b.tolerant && p.scheme ? (I.scheme = p.scheme, I.userinfo = p.userinfo, I.host = p.host, I.port = p.port, I.path = Se(p.path || ""), I.query = p.query) : (p.userinfo !== void 0 || p.host !== void 0 || p.port !== void 0 ? (I.userinfo = p.userinfo, I.host = p.host, I.port = p.port, I.path = Se(p.path || ""), I.query = p.query) : (p.path ? (p.path.charAt(0) === "/" ? I.path = Se(p.path) : ((_.userinfo !== void 0 || _.host !== void 0 || _.port !== void 0) && !_.path ? I.path = "/" + p.path : _.path ? I.path = _.path.slice(0, _.path.lastIndexOf("/") + 1) + p.path : I.path = p.path, I.path = Se(I.path)), I.query = p.query) : (I.path = _.path, p.query !== void 0 ? I.query = p.query : I.query = _.query), I.userinfo = _.userinfo, I.host = _.host, I.port = _.port), I.scheme = _.scheme), I.fragment = p.fragment, I;
      }
      function Dr(_, p, b) {
        var $ = u({ scheme: "null" }, b);
        return xe(Ue(me(_, $), me(p, $), $, !0), $);
      }
      function sa(_, p) {
        return typeof _ == "string" ? _ = xe(me(_, p), p) : n(_) === "object" && (_ = me(xe(_, p), p)), _;
      }
      function na(_, p, b) {
        return typeof _ == "string" ? _ = xe(me(_, b), b) : n(_) === "object" && (_ = xe(_, b)), typeof p == "string" ? p = xe(me(p, b), b) : n(p) === "object" && (p = xe(p, b)), _ === p;
      }
      function Xo(_, p) {
        return _ && _.toString().replace(!p || !p.iri ? h.ESCAPE : f.ESCAPE, H);
      }
      function mt(_, p) {
        return _ && _.toString().replace(!p || !p.iri ? h.PCT_ENCODED : f.PCT_ENCODED, re);
      }
      var ar = {
        scheme: "http",
        domainHost: !0,
        parse: function(p, b) {
          return p.host || (p.error = p.error || "HTTP URIs must have a host."), p;
        },
        serialize: function(p, b) {
          var $ = String(p.scheme).toLowerCase() === "https";
          return (p.port === ($ ? 443 : 80) || p.port === "") && (p.port = void 0), p.path || (p.path = "/"), p;
        }
      }, Os = {
        scheme: "https",
        domainHost: ar.domainHost,
        parse: ar.parse,
        serialize: ar.serialize
      };
      function Ds(_) {
        return typeof _.secure == "boolean" ? _.secure : String(_.scheme).toLowerCase() === "wss";
      }
      var sr = {
        scheme: "ws",
        domainHost: !0,
        parse: function(p, b) {
          var $ = p;
          return $.secure = Ds($), $.resourceName = ($.path || "/") + ($.query ? "?" + $.query : ""), $.path = void 0, $.query = void 0, $;
        },
        serialize: function(p, b) {
          if ((p.port === (Ds(p) ? 443 : 80) || p.port === "") && (p.port = void 0), typeof p.secure == "boolean" && (p.scheme = p.secure ? "wss" : "ws", p.secure = void 0), p.resourceName) {
            var $ = p.resourceName.split("?"), I = v($, 2), W = I[0], J = I[1];
            p.path = W && W !== "/" ? W : void 0, p.query = J, p.resourceName = void 0;
          }
          return p.fragment = void 0, p;
        }
      }, Fs = {
        scheme: "wss",
        domainHost: sr.domainHost,
        parse: sr.parse,
        serialize: sr.serialize
      }, ei = {}, Ms = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", st = "[0-9A-Fa-f]", ti = t(t("%[EFef]" + st + "%" + st + st + "%" + st + st) + "|" + t("%[89A-Fa-f]" + st + "%" + st + st) + "|" + t("%" + st + st)), ri = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", ai = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", si = a(ai, '[\\"\\\\]'), ni = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", oi = new RegExp(Ms, "g"), Lt = new RegExp(ti, "g"), ii = new RegExp(a("[^]", ri, "[\\.]", '[\\"]', si), "g"), Ns = new RegExp(a("[^]", Ms, ni), "g"), li = Ns;
      function oa(_) {
        var p = re(_);
        return p.match(oi) ? p : _;
      }
      var js = {
        scheme: "mailto",
        parse: function(p, b) {
          var $ = p, I = $.to = $.path ? $.path.split(",") : [];
          if ($.path = void 0, $.query) {
            for (var W = !1, J = {}, he = $.query.split("&"), ve = 0, Ae = he.length; ve < Ae; ++ve) {
              var de = he[ve].split("=");
              switch (de[0]) {
                case "to":
                  for (var ge = de[1].split(","), Re = 0, se = ge.length; Re < se; ++Re)
                    I.push(ge[Re]);
                  break;
                case "subject":
                  $.subject = mt(de[1], b);
                  break;
                case "body":
                  $.body = mt(de[1], b);
                  break;
                default:
                  W = !0, J[mt(de[0], b)] = mt(de[1], b);
                  break;
              }
            }
            W && ($.headers = J);
          }
          $.query = void 0;
          for (var _e = 0, Te = I.length; _e < Te; ++_e) {
            var we = I[_e].split("@");
            if (we[0] = mt(we[0]), b.unicodeSupport)
              we[1] = mt(we[1], b).toLowerCase();
            else
              try {
                we[1] = A.toASCII(mt(we[1], b).toLowerCase());
              } catch (wt) {
                $.error = $.error || "Email address's domain name can not be converted to ASCII via punycode: " + wt;
              }
            I[_e] = we.join("@");
          }
          return $;
        },
        serialize: function(p, b) {
          var $ = p, I = i(p.to);
          if (I) {
            for (var W = 0, J = I.length; W < J; ++W) {
              var he = String(I[W]), ve = he.lastIndexOf("@"), Ae = he.slice(0, ve).replace(Lt, oa).replace(Lt, o).replace(ii, H), de = he.slice(ve + 1);
              try {
                de = b.iri ? A.toUnicode(de) : A.toASCII(mt(de, b).toLowerCase());
              } catch (_e) {
                $.error = $.error || "Email address's domain name can not be converted to " + (b.iri ? "Unicode" : "ASCII") + " via punycode: " + _e;
              }
              I[W] = Ae + "@" + de;
            }
            $.path = I.join(",");
          }
          var ge = p.headers = p.headers || {};
          p.subject && (ge.subject = p.subject), p.body && (ge.body = p.body);
          var Re = [];
          for (var se in ge)
            ge[se] !== ei[se] && Re.push(se.replace(Lt, oa).replace(Lt, o).replace(Ns, H) + "=" + ge[se].replace(Lt, oa).replace(Lt, o).replace(li, H));
          return Re.length && ($.query = Re.join("&")), $;
        }
      }, ci = /^([^\:]+)\:(.*)/, Ls = {
        scheme: "urn",
        parse: function(p, b) {
          var $ = p.path && p.path.match(ci), I = p;
          if ($) {
            var W = b.scheme || I.scheme || "urn", J = $[1].toLowerCase(), he = $[2], ve = W + ":" + (b.nid || J), Ae = N[ve];
            I.nid = J, I.nss = he, I.path = void 0, Ae && (I = Ae.parse(I, b));
          } else
            I.error = I.error || "URN can not be parsed.";
          return I;
        },
        serialize: function(p, b) {
          var $ = b.scheme || p.scheme || "urn", I = p.nid, W = $ + ":" + (b.nid || I), J = N[W];
          J && (p = J.serialize(p, b));
          var he = p, ve = p.nss;
          return he.path = (I || b.nid) + ":" + ve, he;
        }
      }, ui = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, qs = {
        scheme: "urn:uuid",
        parse: function(p, b) {
          var $ = p;
          return $.uuid = $.nss, $.nss = void 0, !b.tolerant && (!$.uuid || !$.uuid.match(ui)) && ($.error = $.error || "UUID is not valid."), $;
        },
        serialize: function(p, b) {
          var $ = p;
          return $.nss = (p.uuid || "").toLowerCase(), $;
        }
      };
      N[ar.scheme] = ar, N[Os.scheme] = Os, N[sr.scheme] = sr, N[Fs.scheme] = Fs, N[js.scheme] = js, N[Ls.scheme] = Ls, N[qs.scheme] = qs, r.SCHEMES = N, r.pctEncChar = H, r.pctDecChars = re, r.parse = me, r.removeDotSegments = Se, r.serialize = xe, r.resolveComponents = Ue, r.resolve = Dr, r.normalize = sa, r.equal = na, r.escapeComponent = Xo, r.unescapeComponent = mt, Object.defineProperty(r, "__esModule", { value: !0 });
    });
  }(cr, cr.exports)), cr.exports;
}
var ca, en;
function As() {
  return en || (en = 1, ca = function s(e, r) {
    if (e === r) return !0;
    if (e && r && typeof e == "object" && typeof r == "object") {
      if (e.constructor !== r.constructor) return !1;
      var a, t, n;
      if (Array.isArray(e)) {
        if (a = e.length, a != r.length) return !1;
        for (t = a; t-- !== 0; )
          if (!s(e[t], r[t])) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if (n = Object.keys(e), a = n.length, a !== Object.keys(r).length) return !1;
      for (t = a; t-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, n[t])) return !1;
      for (t = a; t-- !== 0; ) {
        var o = n[t];
        if (!s(e[o], r[o])) return !1;
      }
      return !0;
    }
    return e !== e && r !== r;
  }), ca;
}
var ua, tn;
function Tc() {
  return tn || (tn = 1, ua = function(e) {
    for (var r = 0, a = e.length, t = 0, n; t < a; )
      r++, n = e.charCodeAt(t++), n >= 55296 && n <= 56319 && t < a && (n = e.charCodeAt(t), (n & 64512) == 56320 && t++);
    return r;
  }), ua;
}
var da, rn;
function rr() {
  if (rn) return da;
  rn = 1, da = {
    copy: s,
    checkDataType: e,
    checkDataTypes: r,
    coerceToTypes: t,
    toHash: n,
    getProperty: u,
    escapeQuotes: c,
    equal: As(),
    ucs2length: Tc(),
    varOccurences: h,
    varReplace: f,
    schemaHasRules: v,
    schemaHasRulesExcept: d,
    schemaUnknownRules: m,
    toQuotedString: g,
    getPathExpr: y,
    getPath: w,
    getData: E,
    unescapeFragment: P,
    unescapeJsonPointer: k,
    escapeFragment: C,
    escapeJsonPointer: T
  };
  function s(S, R) {
    R = R || {};
    for (var D in S) R[D] = S[D];
    return R;
  }
  function e(S, R, D, F) {
    var j = F ? " !== " : " === ", z = F ? " || " : " && ", Y = F ? "!" : "", Q = F ? "" : "!";
    switch (S) {
      case "null":
        return R + j + "null";
      case "array":
        return Y + "Array.isArray(" + R + ")";
      case "object":
        return "(" + Y + R + z + "typeof " + R + j + '"object"' + z + Q + "Array.isArray(" + R + "))";
      case "integer":
        return "(typeof " + R + j + '"number"' + z + Q + "(" + R + " % 1)" + z + R + j + R + (D ? z + Y + "isFinite(" + R + ")" : "") + ")";
      case "number":
        return "(typeof " + R + j + '"' + S + '"' + (D ? z + Y + "isFinite(" + R + ")" : "") + ")";
      default:
        return "typeof " + R + j + '"' + S + '"';
    }
  }
  function r(S, R, D) {
    switch (S.length) {
      case 1:
        return e(S[0], R, D, !0);
      default:
        var F = "", j = n(S);
        j.array && j.object && (F = j.null ? "(" : "(!" + R + " || ", F += "typeof " + R + ' !== "object")', delete j.null, delete j.array, delete j.object), j.number && delete j.integer;
        for (var z in j)
          F += (F ? " && " : "") + e(z, R, D, !0);
        return F;
    }
  }
  var a = n(["string", "number", "integer", "boolean", "null"]);
  function t(S, R) {
    if (Array.isArray(R)) {
      for (var D = [], F = 0; F < R.length; F++) {
        var j = R[F];
        (a[j] || S === "array" && j === "array") && (D[D.length] = j);
      }
      if (D.length) return D;
    } else {
      if (a[R])
        return [R];
      if (S === "array" && R === "array")
        return ["array"];
    }
  }
  function n(S) {
    for (var R = {}, D = 0; D < S.length; D++) R[S[D]] = !0;
    return R;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, i = /'|\\/g;
  function u(S) {
    return typeof S == "number" ? "[" + S + "]" : o.test(S) ? "." + S : "['" + c(S) + "']";
  }
  function c(S) {
    return S.replace(i, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
  }
  function h(S, R) {
    R += "[^0-9]";
    var D = S.match(new RegExp(R, "g"));
    return D ? D.length : 0;
  }
  function f(S, R, D) {
    return R += "([^0-9])", D = D.replace(/\$/g, "$$$$"), S.replace(new RegExp(R, "g"), D + "$1");
  }
  function v(S, R) {
    if (typeof S == "boolean") return !S;
    for (var D in S) if (R[D]) return !0;
  }
  function d(S, R, D) {
    if (typeof S == "boolean") return !S && D != "not";
    for (var F in S) if (F != D && R[F]) return !0;
  }
  function m(S, R) {
    if (typeof S != "boolean") {
      for (var D in S) if (!R[D]) return D;
    }
  }
  function g(S) {
    return "'" + c(S) + "'";
  }
  function y(S, R, D, F) {
    var j = D ? "'/' + " + R + (F ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : F ? "'[' + " + R + " + ']'" : "'[\\'' + " + R + " + '\\']'";
    return x(S, j);
  }
  function w(S, R, D) {
    var F = g(D ? "/" + T(R) : u(R));
    return x(S, F);
  }
  var M = /^\/(?:[^~]|~0|~1)*$/, O = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function E(S, R, D) {
    var F, j, z, Y;
    if (S === "") return "rootData";
    if (S[0] == "/") {
      if (!M.test(S)) throw new Error("Invalid JSON-pointer: " + S);
      j = S, z = "rootData";
    } else {
      if (Y = S.match(O), !Y) throw new Error("Invalid JSON-pointer: " + S);
      if (F = +Y[1], j = Y[2], j == "#") {
        if (F >= R) throw new Error("Cannot access property/index " + F + " levels up, current level is " + R);
        return D[R - F];
      }
      if (F > R) throw new Error("Cannot access data " + F + " levels up, current level is " + R);
      if (z = "data" + (R - F || ""), !j) return z;
    }
    for (var Q = z, G = j.split("/"), ee = 0; ee < G.length; ee++) {
      var ae = G[ee];
      ae && (z += u(k(ae)), Q += " && " + z);
    }
    return Q;
  }
  function x(S, R) {
    return S == '""' ? R : (S + " + " + R).replace(/([^\\])' \+ '/g, "$1");
  }
  function P(S) {
    return k(decodeURIComponent(S));
  }
  function C(S) {
    return encodeURIComponent(T(S));
  }
  function T(S) {
    return S.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function k(S) {
    return S.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  return da;
}
var ha, an;
function No() {
  if (an) return ha;
  an = 1;
  var s = rr();
  ha = e;
  function e(r) {
    s.copy(r, this);
  }
  return ha;
}
var fa = { exports: {} }, sn;
function kc() {
  if (sn) return fa.exports;
  sn = 1;
  var s = fa.exports = function(a, t, n) {
    typeof t == "function" && (n = t, t = {}), n = t.cb || n;
    var o = typeof n == "function" ? n : n.pre || function() {
    }, i = n.post || function() {
    };
    e(t, o, i, a, "", a);
  };
  s.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0
  }, s.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, s.propsKeywords = {
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, s.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function e(a, t, n, o, i, u, c, h, f, v) {
    if (o && typeof o == "object" && !Array.isArray(o)) {
      t(o, i, u, c, h, f, v);
      for (var d in o) {
        var m = o[d];
        if (Array.isArray(m)) {
          if (d in s.arrayKeywords)
            for (var g = 0; g < m.length; g++)
              e(a, t, n, m[g], i + "/" + d + "/" + g, u, i, d, o, g);
        } else if (d in s.propsKeywords) {
          if (m && typeof m == "object")
            for (var y in m)
              e(a, t, n, m[y], i + "/" + d + "/" + r(y), u, i, d, o, y);
        } else (d in s.keywords || a.allKeys && !(d in s.skipKeywords)) && e(a, t, n, m, i + "/" + d, u, i, d, o);
      }
      n(o, i, u, c, h, f, v);
    }
  }
  function r(a) {
    return a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return fa.exports;
}
var ma, nn;
function Rs() {
  if (nn) return ma;
  nn = 1;
  var s = Rc(), e = As(), r = rr(), a = No(), t = kc();
  ma = n, n.normalizeId = w, n.fullPath = m, n.url = M, n.ids = O, n.inlineRef = f, n.schema = o;
  function n(E, x, P) {
    var C = this._refs[P];
    if (typeof C == "string")
      if (this._refs[C]) C = this._refs[C];
      else return n.call(this, E, x, C);
    if (C = C || this._schemas[P], C instanceof a)
      return f(C.schema, this._opts.inlineRefs) ? C.schema : C.validate || this._compile(C);
    var T = o.call(this, x, P), k, S, R;
    return T && (k = T.schema, x = T.root, R = T.baseId), k instanceof a ? S = k.validate || E.call(this, k.schema, x, void 0, R) : k !== void 0 && (S = f(k, this._opts.inlineRefs) ? k : E.call(this, k, x, void 0, R)), S;
  }
  function o(E, x) {
    var P = s.parse(x), C = g(P), T = m(this._getId(E.schema));
    if (Object.keys(E.schema).length === 0 || C !== T) {
      var k = w(C), S = this._refs[k];
      if (typeof S == "string")
        return i.call(this, E, S, P);
      if (S instanceof a)
        S.validate || this._compile(S), E = S;
      else if (S = this._schemas[k], S instanceof a) {
        if (S.validate || this._compile(S), k == w(x))
          return { schema: S, root: E, baseId: T };
        E = S;
      } else
        return;
      if (!E.schema) return;
      T = m(this._getId(E.schema));
    }
    return c.call(this, P, T, E.schema, E);
  }
  function i(E, x, P) {
    var C = o.call(this, E, x);
    if (C) {
      var T = C.schema, k = C.baseId;
      E = C.root;
      var S = this._getId(T);
      return S && (k = M(k, S)), c.call(this, P, k, T, E);
    }
  }
  var u = r.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function c(E, x, P, C) {
    if (E.fragment = E.fragment || "", E.fragment.slice(0, 1) == "/") {
      for (var T = E.fragment.split("/"), k = 1; k < T.length; k++) {
        var S = T[k];
        if (S) {
          if (S = r.unescapeFragment(S), P = P[S], P === void 0) break;
          var R;
          if (!u[S] && (R = this._getId(P), R && (x = M(x, R)), P.$ref)) {
            var D = M(x, P.$ref), F = o.call(this, C, D);
            F && (P = F.schema, C = F.root, x = F.baseId);
          }
        }
      }
      if (P !== void 0 && P !== C.schema)
        return { schema: P, root: C, baseId: x };
    }
  }
  var h = r.toHash([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum"
  ]);
  function f(E, x) {
    if (x === !1) return !1;
    if (x === void 0 || x === !0) return v(E);
    if (x) return d(E) <= x;
  }
  function v(E) {
    var x;
    if (Array.isArray(E)) {
      for (var P = 0; P < E.length; P++)
        if (x = E[P], typeof x == "object" && !v(x)) return !1;
    } else
      for (var C in E)
        if (C == "$ref" || (x = E[C], typeof x == "object" && !v(x))) return !1;
    return !0;
  }
  function d(E) {
    var x = 0, P;
    if (Array.isArray(E)) {
      for (var C = 0; C < E.length; C++)
        if (P = E[C], typeof P == "object" && (x += d(P)), x == 1 / 0) return 1 / 0;
    } else
      for (var T in E) {
        if (T == "$ref") return 1 / 0;
        if (h[T])
          x++;
        else if (P = E[T], typeof P == "object" && (x += d(P) + 1), x == 1 / 0) return 1 / 0;
      }
    return x;
  }
  function m(E, x) {
    x !== !1 && (E = w(E));
    var P = s.parse(E);
    return g(P);
  }
  function g(E) {
    return s.serialize(E).split("#")[0] + "#";
  }
  var y = /#\/?$/;
  function w(E) {
    return E ? E.replace(y, "") : "";
  }
  function M(E, x) {
    return x = w(x), s.resolve(E, x);
  }
  function O(E) {
    var x = w(this._getId(E)), P = { "": x }, C = { "": m(x, !1) }, T = {}, k = this;
    return t(E, { allKeys: !0 }, function(S, R, D, F, j, z, Y) {
      if (R !== "") {
        var Q = k._getId(S), G = P[F], ee = C[F] + "/" + j;
        if (Y !== void 0 && (ee += "/" + (typeof Y == "number" ? Y : r.escapeFragment(Y))), typeof Q == "string") {
          Q = G = w(G ? s.resolve(G, Q) : Q);
          var ae = k._refs[Q];
          if (typeof ae == "string" && (ae = k._refs[ae]), ae && ae.schema) {
            if (!e(S, ae.schema))
              throw new Error('id "' + Q + '" resolves to more than one schema');
          } else if (Q != w(ee))
            if (Q[0] == "#") {
              if (T[Q] && !e(S, T[Q]))
                throw new Error('id "' + Q + '" resolves to more than one schema');
              T[Q] = S;
            } else
              k._refs[Q] = ee;
        }
        P[R] = G, C[R] = ee;
      }
    }), T;
  }
  return ma;
}
var pa, on;
function Ts() {
  if (on) return pa;
  on = 1;
  var s = Rs();
  pa = {
    Validation: a(e),
    MissingRef: a(r)
  };
  function e(t) {
    this.message = "validation failed", this.errors = t, this.ajv = this.validation = !0;
  }
  r.message = function(t, n) {
    return "can't resolve reference " + n + " from id " + t;
  };
  function r(t, n, o) {
    this.message = o || r.message(t, n), this.missingRef = s.url(t, n), this.missingSchema = s.normalizeId(s.fullPath(this.missingRef));
  }
  function a(t) {
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
  }
  return pa;
}
var ga, ln;
function jo() {
  return ln || (ln = 1, ga = function(s, e) {
    e || (e = {}), typeof e == "function" && (e = { cmp: e });
    var r = typeof e.cycles == "boolean" ? e.cycles : !1, a = e.cmp && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(i, u) {
          var c = { key: i, value: o[i] }, h = { key: u, value: o[u] };
          return n(c, h);
        };
      };
    }(e.cmp), t = [];
    return function n(o) {
      if (o && o.toJSON && typeof o.toJSON == "function" && (o = o.toJSON()), o !== void 0) {
        if (typeof o == "number") return isFinite(o) ? "" + o : "null";
        if (typeof o != "object") return JSON.stringify(o);
        var i, u;
        if (Array.isArray(o)) {
          for (u = "[", i = 0; i < o.length; i++)
            i && (u += ","), u += n(o[i]) || "null";
          return u + "]";
        }
        if (o === null) return "null";
        if (t.indexOf(o) !== -1) {
          if (r) return JSON.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        }
        var c = t.push(o) - 1, h = Object.keys(o).sort(a && a(o));
        for (u = "", i = 0; i < h.length; i++) {
          var f = h[i], v = n(o[f]);
          v && (u && (u += ","), u += JSON.stringify(f) + ":" + v);
        }
        return t.splice(c, 1), "{" + u + "}";
      }
    }(s);
  }), ga;
}
var va, cn;
function Lo() {
  return cn || (cn = 1, va = function(e, r, a) {
    var t = "", n = e.schema.$async === !0, o = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"), i = e.self._getId(e.schema);
    if (e.opts.strictKeywords) {
      var u = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
      if (u) {
        var c = "unknown keyword: " + u;
        if (e.opts.strictKeywords === "log") e.logger.warn(c);
        else throw new Error(c);
      }
    }
    if (e.isTop && (t += " var validate = ", n && (e.async = !0, t += "async "), t += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", i && (e.opts.sourceCode || e.opts.processCode) && (t += " " + ("/*# sourceURL=" + i + " */") + " ")), typeof e.schema == "boolean" || !(o || e.schema.$ref)) {
      var r = "false schema", h = e.level, f = e.dataLevel, v = e.schema[r], d = e.schemaPath + e.util.getProperty(r), m = e.errSchemaPath + "/" + r, x = !e.opts.allErrors, T, g = "data" + (f || ""), E = "valid" + h;
      if (e.schema === !1) {
        e.isTop ? x = !0 : t += " var " + E + " = false; ";
        var y = y || [];
        y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (T || "false schema") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'boolean schema is false' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + g + " "), t += " } ") : t += " {} ";
        var w = t;
        t = y.pop(), !e.compositeRule && x ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else
        e.isTop ? n ? t += " return data; " : t += " validate.errors = null; return true; " : t += " var " + E + " = true; ";
      return e.isTop && (t += " }; return validate; "), t;
    }
    if (e.isTop) {
      var M = e.isTop, h = e.level = 0, f = e.dataLevel = 0, g = "data";
      if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [""], e.schema.default !== void 0 && e.opts.useDefaults && e.opts.strictDefaults) {
        var O = "default is ignored in the schema root";
        if (e.opts.strictDefaults === "log") e.logger.warn(O);
        else throw new Error(O);
      }
      t += " var vErrors = null; ", t += " var errors = 0;     ", t += " if (rootData === undefined) rootData = data; ";
    } else {
      var h = e.level, f = e.dataLevel, g = "data" + (f || "");
      if (i && (e.baseId = e.resolve.url(e.baseId, i)), n && !e.async) throw new Error("async schema in sync schema");
      t += " var errs_" + h + " = errors;";
    }
    var E = "valid" + h, x = !e.opts.allErrors, P = "", C = "", T, k = e.schema.type, S = Array.isArray(k);
    if (k && e.opts.nullable && e.schema.nullable === !0 && (S ? k.indexOf("null") == -1 && (k = k.concat("null")) : k != "null" && (k = [k, "null"], S = !0)), S && k.length == 1 && (k = k[0], S = !1), e.schema.$ref && o) {
      if (e.opts.extendRefs == "fail")
        throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
      e.opts.extendRefs !== !0 && (o = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'));
    }
    if (e.schema.$comment && e.opts.$comment && (t += " " + e.RULES.all.$comment.code(e, "$comment")), k) {
      if (e.opts.coerceTypes)
        var R = e.util.coerceToTypes(e.opts.coerceTypes, k);
      var D = e.RULES.types[k];
      if (R || S || D === !0 || D && !Pe(D)) {
        var d = e.schemaPath + ".type", m = e.errSchemaPath + "/type", d = e.schemaPath + ".type", m = e.errSchemaPath + "/type", F = S ? "checkDataTypes" : "checkDataType";
        if (t += " if (" + e.util[F](k, g, e.opts.strictNumbers, !0) + ") { ", R) {
          var j = "dataType" + h, z = "coerced" + h;
          t += " var " + j + " = typeof " + g + "; var " + z + " = undefined; ", e.opts.coerceTypes == "array" && (t += " if (" + j + " == 'object' && Array.isArray(" + g + ") && " + g + ".length == 1) { " + g + " = " + g + "[0]; " + j + " = typeof " + g + "; if (" + e.util.checkDataType(e.schema.type, g, e.opts.strictNumbers) + ") " + z + " = " + g + "; } "), t += " if (" + z + " !== undefined) ; ";
          var Y = R;
          if (Y)
            for (var Q, G = -1, ee = Y.length - 1; G < ee; )
              Q = Y[G += 1], Q == "string" ? t += " else if (" + j + " == 'number' || " + j + " == 'boolean') " + z + " = '' + " + g + "; else if (" + g + " === null) " + z + " = ''; " : Q == "number" || Q == "integer" ? (t += " else if (" + j + " == 'boolean' || " + g + " === null || (" + j + " == 'string' && " + g + " && " + g + " == +" + g + " ", Q == "integer" && (t += " && !(" + g + " % 1)"), t += ")) " + z + " = +" + g + "; ") : Q == "boolean" ? t += " else if (" + g + " === 'false' || " + g + " === 0 || " + g + " === null) " + z + " = false; else if (" + g + " === 'true' || " + g + " === 1) " + z + " = true; " : Q == "null" ? t += " else if (" + g + " === '' || " + g + " === 0 || " + g + " === false) " + z + " = null; " : e.opts.coerceTypes == "array" && Q == "array" && (t += " else if (" + j + " == 'string' || " + j + " == 'number' || " + j + " == 'boolean' || " + g + " == null) " + z + " = [" + g + "]; ");
          t += " else {   ";
          var y = y || [];
          y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (T || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { type: '", S ? t += "" + k.join(",") : t += "" + k, t += "' } ", e.opts.messages !== !1 && (t += " , message: 'should be ", S ? t += "" + k.join(",") : t += "" + k, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + g + " "), t += " } ") : t += " {} ";
          var w = t;
          t = y.pop(), !e.compositeRule && x ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } if (" + z + " !== undefined) {  ";
          var ae = f ? "data" + (f - 1 || "") : "parentData", Ne = f ? e.dataPathArr[f] : "parentDataProperty";
          t += " " + g + " = " + z + "; ", f || (t += "if (" + ae + " !== undefined)"), t += " " + ae + "[" + Ne + "] = " + z + "; } ";
        } else {
          var y = y || [];
          y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (T || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { type: '", S ? t += "" + k.join(",") : t += "" + k, t += "' } ", e.opts.messages !== !1 && (t += " , message: 'should be ", S ? t += "" + k.join(",") : t += "" + k, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + g + " "), t += " } ") : t += " {} ";
          var w = t;
          t = y.pop(), !e.compositeRule && x ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        t += " } ";
      }
    }
    if (e.schema.$ref && !o)
      t += " " + e.RULES.all.$ref.code(e, "$ref") + " ", x && (t += " } if (errors === ", M ? t += "0" : t += "errs_" + h, t += ") { ", C += "}");
    else {
      var De = e.RULES;
      if (De) {
        for (var D, $e = -1, Ce = De.length - 1; $e < Ce; )
          if (D = De[$e += 1], Pe(D)) {
            if (D.type && (t += " if (" + e.util.checkDataType(D.type, g, e.opts.strictNumbers) + ") { "), e.opts.useDefaults) {
              if (D.type == "object" && e.schema.properties) {
                var v = e.schema.properties, Ze = Object.keys(v), A = Ze;
                if (A)
                  for (var N, H = -1, re = A.length - 1; H < re; ) {
                    N = A[H += 1];
                    var L = v[N];
                    if (L.default !== void 0) {
                      var U = g + e.util.getProperty(N);
                      if (e.compositeRule) {
                        if (e.opts.strictDefaults) {
                          var O = "default is ignored for: " + U;
                          if (e.opts.strictDefaults === "log") e.logger.warn(O);
                          else throw new Error(O);
                        }
                      } else
                        t += " if (" + U + " === undefined ", e.opts.useDefaults == "empty" && (t += " || " + U + " === null || " + U + " === '' "), t += " ) " + U + " = ", e.opts.useDefaults == "shared" ? t += " " + e.useDefault(L.default) + " " : t += " " + JSON.stringify(L.default) + " ", t += "; ";
                    }
                  }
              } else if (D.type == "array" && Array.isArray(e.schema.items)) {
                var oe = e.schema.items;
                if (oe) {
                  for (var L, G = -1, ue = oe.length - 1; G < ue; )
                    if (L = oe[G += 1], L.default !== void 0) {
                      var U = g + "[" + G + "]";
                      if (e.compositeRule) {
                        if (e.opts.strictDefaults) {
                          var O = "default is ignored for: " + U;
                          if (e.opts.strictDefaults === "log") e.logger.warn(O);
                          else throw new Error(O);
                        }
                      } else
                        t += " if (" + U + " === undefined ", e.opts.useDefaults == "empty" && (t += " || " + U + " === null || " + U + " === '' "), t += " ) " + U + " = ", e.opts.useDefaults == "shared" ? t += " " + e.useDefault(L.default) + " " : t += " " + JSON.stringify(L.default) + " ", t += "; ";
                    }
                }
              }
            }
            var le = D.rules;
            if (le) {
              for (var ye, me = -1, pe = le.length - 1; me < pe; )
                if (ye = le[me += 1], Ye(ye)) {
                  var Fe = ye.code(e, ye.keyword, D.type);
                  Fe && (t += " " + Fe + " ", x && (P += "}"));
                }
            }
            if (x && (t += " " + P + " ", P = ""), D.type && (t += " } ", k && k === D.type && !R)) {
              t += " else { ";
              var d = e.schemaPath + ".type", m = e.errSchemaPath + "/type", y = y || [];
              y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (T || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { type: '", S ? t += "" + k.join(",") : t += "" + k, t += "' } ", e.opts.messages !== !1 && (t += " , message: 'should be ", S ? t += "" + k.join(",") : t += "" + k, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + g + " "), t += " } ") : t += " {} ";
              var w = t;
              t = y.pop(), !e.compositeRule && x ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ";
            }
            x && (t += " if (errors === ", M ? t += "0" : t += "errs_" + h, t += ") { ", C += "}");
          }
      }
    }
    x && (t += " " + C + " "), M ? (n ? (t += " if (errors === 0) return data;           ", t += " else throw new ValidationError(vErrors); ") : (t += " validate.errors = vErrors; ", t += " return errors === 0;       "), t += " }; return validate;") : t += " var " + E + " = errors === errs_" + h + ";";
    function Pe(Se) {
      for (var xe = Se.rules, Ue = 0; Ue < xe.length; Ue++)
        if (Ye(xe[Ue])) return !0;
    }
    function Ye(Se) {
      return e.schema[Se.keyword] !== void 0 || Se.implements && je(Se);
    }
    function je(Se) {
      for (var xe = Se.implements, Ue = 0; Ue < xe.length; Ue++)
        if (e.schema[xe[Ue]] !== void 0) return !0;
    }
    return t;
  }), va;
}
var ya, un;
function Ic() {
  if (un) return ya;
  un = 1;
  var s = Rs(), e = rr(), r = Ts(), a = jo(), t = Lo(), n = e.ucs2length, o = As(), i = r.Validation;
  ya = u;
  function u(w, M, O, E) {
    var x = this, P = this._opts, C = [void 0], T = {}, k = [], S = {}, R = [], D = {}, F = [];
    M = M || { schema: w, refVal: C, refs: T };
    var j = c.call(this, w, M, E), z = this._compilations[j.index];
    if (j.compiling) return z.callValidate = ae;
    var Y = this._formats, Q = this.RULES;
    try {
      var G = Ne(w, M, O, E);
      z.validate = G;
      var ee = z.callValidate;
      return ee && (ee.schema = G.schema, ee.errors = null, ee.refs = G.refs, ee.refVal = G.refVal, ee.root = G.root, ee.$async = G.$async, P.sourceCode && (ee.source = G.source)), G;
    } finally {
      h.call(this, w, M, E);
    }
    function ae() {
      var L = z.validate, U = L.apply(this, arguments);
      return ae.errors = L.errors, U;
    }
    function Ne(L, U, oe, ue) {
      var le = !U || U && U.schema == L;
      if (U.schema != M.schema)
        return u.call(x, L, U, oe, ue);
      var ye = L.$async === !0, me = t({
        isTop: !0,
        schema: L,
        isRoot: le,
        baseId: ue,
        root: U,
        schemaPath: "",
        errSchemaPath: "#",
        errorPath: '""',
        MissingRefError: r.MissingRef,
        RULES: Q,
        validate: t,
        util: e,
        resolve: s,
        resolveRef: De,
        usePattern: N,
        useDefault: H,
        useCustomRule: re,
        opts: P,
        formats: Y,
        logger: x.logger,
        self: x
      });
      me = y(C, m) + y(k, v) + y(R, d) + y(F, g) + me, P.processCode && (me = P.processCode(me, L));
      var pe;
      try {
        var Fe = new Function(
          "self",
          "RULES",
          "formats",
          "root",
          "refVal",
          "defaults",
          "customRules",
          "equal",
          "ucs2length",
          "ValidationError",
          me
        );
        pe = Fe(
          x,
          Q,
          Y,
          M,
          C,
          R,
          F,
          o,
          n,
          i
        ), C[0] = pe;
      } catch (Pe) {
        throw x.logger.error("Error compiling schema, function code:", me), Pe;
      }
      return pe.schema = L, pe.errors = null, pe.refs = T, pe.refVal = C, pe.root = le ? pe : U, ye && (pe.$async = !0), P.sourceCode === !0 && (pe.source = {
        code: me,
        patterns: k,
        defaults: R
      }), pe;
    }
    function De(L, U, oe) {
      U = s.url(L, U);
      var ue = T[U], le, ye;
      if (ue !== void 0)
        return le = C[ue], ye = "refVal[" + ue + "]", A(le, ye);
      if (!oe && M.refs) {
        var me = M.refs[U];
        if (me !== void 0)
          return le = M.refVal[me], ye = $e(U, le), A(le, ye);
      }
      ye = $e(U);
      var pe = s.call(x, Ne, M, U);
      if (pe === void 0) {
        var Fe = O && O[U];
        Fe && (pe = s.inlineRef(Fe, P.inlineRefs) ? Fe : u.call(x, Fe, M, O, L));
      }
      if (pe === void 0)
        Ce(U);
      else
        return Ze(U, pe), A(pe, ye);
    }
    function $e(L, U) {
      var oe = C.length;
      return C[oe] = U, T[L] = oe, "refVal" + oe;
    }
    function Ce(L) {
      delete T[L];
    }
    function Ze(L, U) {
      var oe = T[L];
      C[oe] = U;
    }
    function A(L, U) {
      return typeof L == "object" || typeof L == "boolean" ? { code: U, schema: L, inline: !0 } : { code: U, $async: L && !!L.$async };
    }
    function N(L) {
      var U = S[L];
      return U === void 0 && (U = S[L] = k.length, k[U] = L), "pattern" + U;
    }
    function H(L) {
      switch (typeof L) {
        case "boolean":
        case "number":
          return "" + L;
        case "string":
          return e.toQuotedString(L);
        case "object":
          if (L === null) return "null";
          var U = a(L), oe = D[U];
          return oe === void 0 && (oe = D[U] = R.length, R[oe] = L), "default" + oe;
      }
    }
    function re(L, U, oe, ue) {
      if (x._opts.validateSchema !== !1) {
        var le = L.definition.dependencies;
        if (le && !le.every(function(xe) {
          return Object.prototype.hasOwnProperty.call(oe, xe);
        }))
          throw new Error("parent schema must have all required keywords: " + le.join(","));
        var ye = L.definition.validateSchema;
        if (ye) {
          var me = ye(U);
          if (!me) {
            var pe = "keyword schema is invalid: " + x.errorsText(ye.errors);
            if (x._opts.validateSchema == "log") x.logger.error(pe);
            else throw new Error(pe);
          }
        }
      }
      var Fe = L.definition.compile, Pe = L.definition.inline, Ye = L.definition.macro, je;
      if (Fe)
        je = Fe.call(x, U, oe, ue);
      else if (Ye)
        je = Ye.call(x, U, oe, ue), P.validateSchema !== !1 && x.validateSchema(je, !0);
      else if (Pe)
        je = Pe.call(x, ue, L.keyword, U, oe);
      else if (je = L.definition.validate, !je) return;
      if (je === void 0)
        throw new Error('custom keyword "' + L.keyword + '"failed to compile');
      var Se = F.length;
      return F[Se] = je, {
        code: "customRule" + Se,
        validate: je
      };
    }
  }
  function c(w, M, O) {
    var E = f.call(this, w, M, O);
    return E >= 0 ? { index: E, compiling: !0 } : (E = this._compilations.length, this._compilations[E] = {
      schema: w,
      root: M,
      baseId: O
    }, { index: E, compiling: !1 });
  }
  function h(w, M, O) {
    var E = f.call(this, w, M, O);
    E >= 0 && this._compilations.splice(E, 1);
  }
  function f(w, M, O) {
    for (var E = 0; E < this._compilations.length; E++) {
      var x = this._compilations[E];
      if (x.schema == w && x.root == M && x.baseId == O) return E;
    }
    return -1;
  }
  function v(w, M) {
    return "var pattern" + w + " = new RegExp(" + e.toQuotedString(M[w]) + ");";
  }
  function d(w) {
    return "var default" + w + " = defaults[" + w + "];";
  }
  function m(w, M) {
    return M[w] === void 0 ? "" : "var refVal" + w + " = refVal[" + w + "];";
  }
  function g(w) {
    return "var customRule" + w + " = customRules[" + w + "];";
  }
  function y(w, M) {
    if (!w.length) return "";
    for (var O = "", E = 0; E < w.length; E++)
      O += M(E, w);
    return O;
  }
  return ya;
}
var _a = { exports: {} }, dn;
function $c() {
  if (dn) return _a.exports;
  dn = 1;
  var s = _a.exports = function() {
    this._cache = {};
  };
  return s.prototype.put = function(r, a) {
    this._cache[r] = a;
  }, s.prototype.get = function(r) {
    return this._cache[r];
  }, s.prototype.del = function(r) {
    delete this._cache[r];
  }, s.prototype.clear = function() {
    this._cache = {};
  }, _a.exports;
}
var wa, hn;
function Oc() {
  if (hn) return wa;
  hn = 1;
  var s = rr(), e = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], a = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, t = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, c = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, h = /^(?:\/(?:[^~/]|~0|~1)*)*$/, f = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, v = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  wa = d;
  function d(C) {
    return C = C == "full" ? "full" : "fast", s.copy(d[C]);
  }
  d.fast = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
    "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    "uri-template": i,
    url: u,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    hostname: t,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: P,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: c,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    "json-pointer": h,
    "json-pointer-uri-fragment": f,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    "relative-json-pointer": v
  }, d.full = {
    date: g,
    time: y,
    "date-time": M,
    uri: E,
    "uri-reference": o,
    "uri-template": i,
    url: u,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: t,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: P,
    uuid: c,
    "json-pointer": h,
    "json-pointer-uri-fragment": f,
    "relative-json-pointer": v
  };
  function m(C) {
    return C % 4 === 0 && (C % 100 !== 0 || C % 400 === 0);
  }
  function g(C) {
    var T = C.match(e);
    if (!T) return !1;
    var k = +T[1], S = +T[2], R = +T[3];
    return S >= 1 && S <= 12 && R >= 1 && R <= (S == 2 && m(k) ? 29 : r[S]);
  }
  function y(C, T) {
    var k = C.match(a);
    if (!k) return !1;
    var S = k[1], R = k[2], D = k[3], F = k[5];
    return (S <= 23 && R <= 59 && D <= 59 || S == 23 && R == 59 && D == 60) && (!T || F);
  }
  var w = /t|\s/i;
  function M(C) {
    var T = C.split(w);
    return T.length == 2 && g(T[0]) && y(T[1], !0);
  }
  var O = /\/|:/;
  function E(C) {
    return O.test(C) && n.test(C);
  }
  var x = /[^\\]\\Z/;
  function P(C) {
    if (x.test(C)) return !1;
    try {
      return new RegExp(C), !0;
    } catch {
      return !1;
    }
  }
  return wa;
}
var ba, fn;
function Dc() {
  return fn || (fn = 1, ba = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.errSchemaPath + "/" + r, c = !e.opts.allErrors, h = "data" + (o || ""), f = "valid" + n, v, d;
    if (i == "#" || i == "#/")
      e.isRoot ? (v = e.async, d = "validate") : (v = e.root.schema.$async === !0, d = "root.refVal[0]");
    else {
      var m = e.resolveRef(e.baseId, i, e.isRoot);
      if (m === void 0) {
        var g = e.MissingRefError.message(e.baseId, i);
        if (e.opts.missingRefs == "fail") {
          e.logger.error(g);
          var y = y || [];
          y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { ref: '" + e.util.escapeQuotes(i) + "' } ", e.opts.messages !== !1 && (t += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(i) + "' "), e.opts.verbose && (t += " , schema: " + e.util.toQuotedString(i) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), t += " } ") : t += " {} ";
          var w = t;
          t = y.pop(), !e.compositeRule && c ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c && (t += " if (false) { ");
        } else if (e.opts.missingRefs == "ignore")
          e.logger.warn(g), c && (t += " if (true) { ");
        else
          throw new e.MissingRefError(e.baseId, i, g);
      } else if (m.inline) {
        var M = e.util.copy(e);
        M.level++;
        var O = "valid" + M.level;
        M.schema = m.schema, M.schemaPath = "", M.errSchemaPath = i;
        var E = e.validate(M).replace(/validate\.schema/g, m.code);
        t += " " + E + " ", c && (t += " if (" + O + ") { ");
      } else
        v = m.$async === !0 || e.async && m.$async !== !1, d = m.code;
    }
    if (d) {
      var y = y || [];
      y.push(t), t = "", e.opts.passContext ? t += " " + d + ".call(this, " : t += " " + d + "( ", t += " " + h + ", (dataPath || '')", e.errorPath != '""' && (t += " + " + e.errorPath);
      var x = o ? "data" + (o - 1 || "") : "parentData", P = o ? e.dataPathArr[o] : "parentDataProperty";
      t += " , " + x + " , " + P + ", rootData)  ";
      var C = t;
      if (t = y.pop(), v) {
        if (!e.async) throw new Error("async schema referenced by sync schema");
        c && (t += " var " + f + "; "), t += " try { await " + C + "; ", c && (t += " " + f + " = true; "), t += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", c && (t += " " + f + " = false; "), t += " } ", c && (t += " if (" + f + ") { ");
      } else
        t += " if (!" + C + ") { if (vErrors === null) vErrors = " + d + ".errors; else vErrors = vErrors.concat(" + d + ".errors); errors = vErrors.length; } ", c && (t += " else { ");
    }
    return t;
  }), ba;
}
var Pa, mn;
function Fc() {
  return mn || (mn = 1, Pa = function(e, r, a) {
    var t = " ", n = e.schema[r], o = e.schemaPath + e.util.getProperty(r), i = e.errSchemaPath + "/" + r, u = !e.opts.allErrors, c = e.util.copy(e), h = "";
    c.level++;
    var f = "valid" + c.level, v = c.baseId, d = !0, m = n;
    if (m)
      for (var g, y = -1, w = m.length - 1; y < w; )
        g = m[y += 1], (e.opts.strictKeywords ? typeof g == "object" && Object.keys(g).length > 0 || g === !1 : e.util.schemaHasRules(g, e.RULES.all)) && (d = !1, c.schema = g, c.schemaPath = o + "[" + y + "]", c.errSchemaPath = i + "/" + y, t += "  " + e.validate(c) + " ", c.baseId = v, u && (t += " if (" + f + ") { ", h += "}"));
    return u && (d ? t += " if (true) { " : t += " " + h.slice(0, -1) + " "), t;
  }), Pa;
}
var Ea, pn;
function Mc() {
  return pn || (pn = 1, Ea = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = "errs__" + n, m = e.util.copy(e), g = "";
    m.level++;
    var y = "valid" + m.level, w = i.every(function(T) {
      return e.opts.strictKeywords ? typeof T == "object" && Object.keys(T).length > 0 || T === !1 : e.util.schemaHasRules(T, e.RULES.all);
    });
    if (w) {
      var M = m.baseId;
      t += " var " + d + " = errors; var " + v + " = false;  ";
      var O = e.compositeRule;
      e.compositeRule = m.compositeRule = !0;
      var E = i;
      if (E)
        for (var x, P = -1, C = E.length - 1; P < C; )
          x = E[P += 1], m.schema = x, m.schemaPath = u + "[" + P + "]", m.errSchemaPath = c + "/" + P, t += "  " + e.validate(m) + " ", m.baseId = M, t += " " + v + " = " + v + " || " + y + "; if (!" + v + ") { ", g += "}";
      e.compositeRule = m.compositeRule = O, t += " " + g + " if (!" + v + ") {   var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += " } else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } ", e.opts.allErrors && (t += " } ");
    } else
      h && (t += " if (true) { ");
    return t;
  }), Ea;
}
var Sa, gn;
function Nc() {
  return gn || (gn = 1, Sa = function(e, r, a) {
    var t = " ", n = e.schema[r], o = e.errSchemaPath + "/" + r;
    e.opts.allErrors;
    var i = e.util.toQuotedString(n);
    return e.opts.$comment === !0 ? t += " console.log(" + i + ");" : typeof e.opts.$comment == "function" && (t += " self._opts.$comment(" + i + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"), t;
  }), Sa;
}
var Ca, vn;
function jc() {
  return vn || (vn = 1, Ca = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = e.opts.$data && i && i.$data;
    d && (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; "), d || (t += " var schema" + n + " = validate.schema" + u + ";"), t += "var " + v + " = equal(" + f + ", schema" + n + "); if (!" + v + ") {   ";
    var m = m || [];
    m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValue: schema" + n + " } ", e.opts.messages !== !1 && (t += " , message: 'should be equal to constant' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var g = t;
    return t = m.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + g + "]); " : t += " validate.errors = [" + g + "]; return false; " : t += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " }", h && (t += " else { "), t;
  }), Ca;
}
var xa, yn;
function Lc() {
  return yn || (yn = 1, xa = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = "errs__" + n, m = e.util.copy(e), g = "";
    m.level++;
    var y = "valid" + m.level, w = "i" + n, M = m.dataLevel = e.dataLevel + 1, O = "data" + M, E = e.baseId, x = e.opts.strictKeywords ? typeof i == "object" && Object.keys(i).length > 0 || i === !1 : e.util.schemaHasRules(i, e.RULES.all);
    if (t += "var " + d + " = errors;var " + v + ";", x) {
      var P = e.compositeRule;
      e.compositeRule = m.compositeRule = !0, m.schema = i, m.schemaPath = u, m.errSchemaPath = c, t += " var " + y + " = false; for (var " + w + " = 0; " + w + " < " + f + ".length; " + w + "++) { ", m.errorPath = e.util.getPathExpr(e.errorPath, w, e.opts.jsonPointers, !0);
      var C = f + "[" + w + "]";
      m.dataPathArr[M] = w;
      var T = e.validate(m);
      m.baseId = E, e.util.varOccurences(T, O) < 2 ? t += " " + e.util.varReplace(T, O, C) + " " : t += " var " + O + " = " + C + "; " + T + " ", t += " if (" + y + ") break; }  ", e.compositeRule = m.compositeRule = P, t += " " + g + " if (!" + y + ") {";
    } else
      t += " if (" + f + ".length == 0) {";
    var k = k || [];
    k.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'should contain a valid item' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var S = t;
    return t = k.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + S + "]); " : t += " validate.errors = [" + S + "]; return false; " : t += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ", x && (t += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } "), e.opts.allErrors && (t += " } "), t;
  }), xa;
}
var Aa, _n;
function qc() {
  return _n || (_n = 1, Aa = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "errs__" + n, d = e.util.copy(e), m = "";
    d.level++;
    var g = "valid" + d.level, y = {}, w = {}, M = e.opts.ownProperties;
    for (P in i)
      if (P != "__proto__") {
        var O = i[P], E = Array.isArray(O) ? w : y;
        E[P] = O;
      }
    t += "var " + v + " = errors;";
    var x = e.errorPath;
    t += "var missing" + n + ";";
    for (var P in w)
      if (E = w[P], E.length) {
        if (t += " if ( " + f + e.util.getProperty(P) + " !== undefined ", M && (t += " && Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(P) + "') "), h) {
          t += " && ( ";
          var C = E;
          if (C)
            for (var T, k = -1, S = C.length - 1; k < S; ) {
              T = C[k += 1], k && (t += " || ");
              var R = e.util.getProperty(T), D = f + R;
              t += " ( ( " + D + " === undefined ", M && (t += " || ! Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(T) + "') "), t += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? T : R) + ") ) ";
            }
          t += ")) {  ";
          var F = "missing" + n, j = "' + " + F + " + '";
          e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(x, F, !0) : x + " + " + F);
          var z = z || [];
          z.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(P) + "', missingProperty: '" + j + "', depsCount: " + E.length + ", deps: '" + e.util.escapeQuotes(E.length == 1 ? E[0] : E.join(", ")) + "' } ", e.opts.messages !== !1 && (t += " , message: 'should have ", E.length == 1 ? t += "property " + e.util.escapeQuotes(E[0]) : t += "properties " + e.util.escapeQuotes(E.join(", ")), t += " when property " + e.util.escapeQuotes(P) + " is present' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
          var Y = t;
          t = z.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + Y + "]); " : t += " validate.errors = [" + Y + "]; return false; " : t += " var err = " + Y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        } else {
          t += " ) { ";
          var Q = E;
          if (Q)
            for (var T, G = -1, ee = Q.length - 1; G < ee; ) {
              T = Q[G += 1];
              var R = e.util.getProperty(T), j = e.util.escapeQuotes(T), D = f + R;
              e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(x, T, e.opts.jsonPointers)), t += " if ( " + D + " === undefined ", M && (t += " || ! Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(T) + "') "), t += ") {  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(P) + "', missingProperty: '" + j + "', depsCount: " + E.length + ", deps: '" + e.util.escapeQuotes(E.length == 1 ? E[0] : E.join(", ")) + "' } ", e.opts.messages !== !1 && (t += " , message: 'should have ", E.length == 1 ? t += "property " + e.util.escapeQuotes(E[0]) : t += "properties " + e.util.escapeQuotes(E.join(", ")), t += " when property " + e.util.escapeQuotes(P) + " is present' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
            }
        }
        t += " }   ", h && (m += "}", t += " else { ");
      }
    e.errorPath = x;
    var ae = d.baseId;
    for (var P in y) {
      var O = y[P];
      (e.opts.strictKeywords ? typeof O == "object" && Object.keys(O).length > 0 || O === !1 : e.util.schemaHasRules(O, e.RULES.all)) && (t += " " + g + " = true; if ( " + f + e.util.getProperty(P) + " !== undefined ", M && (t += " && Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(P) + "') "), t += ") { ", d.schema = O, d.schemaPath = u + e.util.getProperty(P), d.errSchemaPath = c + "/" + e.util.escapeFragment(P), t += "  " + e.validate(d) + " ", d.baseId = ae, t += " }  ", h && (t += " if (" + g + ") { ", m += "}"));
    }
    return h && (t += "   " + m + " if (" + v + " == errors) {"), t;
  }), Aa;
}
var Ra, wn;
function Uc() {
  return wn || (wn = 1, Ra = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = e.opts.$data && i && i.$data;
    d && (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ");
    var m = "i" + n, g = "schema" + n;
    d || (t += " var " + g + " = validate.schema" + u + ";"), t += "var " + v + ";", d && (t += " if (schema" + n + " === undefined) " + v + " = true; else if (!Array.isArray(schema" + n + ")) " + v + " = false; else {"), t += "" + v + " = false;for (var " + m + "=0; " + m + "<" + g + ".length; " + m + "++) if (equal(" + f + ", " + g + "[" + m + "])) { " + v + " = true; break; }", d && (t += "  }  "), t += " if (!" + v + ") {   ";
    var y = y || [];
    y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValues: schema" + n + " } ", e.opts.messages !== !1 && (t += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var w = t;
    return t = y.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " }", h && (t += " else { "), t;
  }), Ra;
}
var Ta, bn;
function zc() {
  return bn || (bn = 1, Ta = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || "");
    if (e.opts.format === !1)
      return h && (t += " if (true) { "), t;
    var v = e.opts.$data && i && i.$data, d;
    v ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", d = "schema" + n) : d = i;
    var m = e.opts.unknownFormats, g = Array.isArray(m);
    if (v) {
      var y = "format" + n, w = "isObject" + n, M = "formatType" + n;
      t += " var " + y + " = formats[" + d + "]; var " + w + " = typeof " + y + " == 'object' && !(" + y + " instanceof RegExp) && " + y + ".validate; var " + M + " = " + w + " && " + y + ".type || 'string'; if (" + w + ") { ", e.async && (t += " var async" + n + " = " + y + ".async; "), t += " " + y + " = " + y + ".validate; } if (  ", v && (t += " (" + d + " !== undefined && typeof " + d + " != 'string') || "), t += " (", m != "ignore" && (t += " (" + d + " && !" + y + " ", g && (t += " && self._opts.unknownFormats.indexOf(" + d + ") == -1 "), t += ") || "), t += " (" + y + " && " + M + " == '" + a + "' && !(typeof " + y + " == 'function' ? ", e.async ? t += " (async" + n + " ? await " + y + "(" + f + ") : " + y + "(" + f + ")) " : t += " " + y + "(" + f + ") ", t += " : " + y + ".test(" + f + "))))) {";
    } else {
      var y = e.formats[i];
      if (!y) {
        if (m == "ignore")
          return e.logger.warn('unknown format "' + i + '" ignored in schema at path "' + e.errSchemaPath + '"'), h && (t += " if (true) { "), t;
        if (g && m.indexOf(i) >= 0)
          return h && (t += " if (true) { "), t;
        throw new Error('unknown format "' + i + '" is used in schema at path "' + e.errSchemaPath + '"');
      }
      var w = typeof y == "object" && !(y instanceof RegExp) && y.validate, M = w && y.type || "string";
      if (w) {
        var O = y.async === !0;
        y = y.validate;
      }
      if (M != a)
        return h && (t += " if (true) { "), t;
      if (O) {
        if (!e.async) throw new Error("async format in sync schema");
        var E = "formats" + e.util.getProperty(i) + ".validate";
        t += " if (!(await " + E + "(" + f + "))) { ";
      } else {
        t += " if (! ";
        var E = "formats" + e.util.getProperty(i);
        w && (E += ".validate"), typeof y == "function" ? t += " " + E + "(" + f + ") " : t += " " + E + ".test(" + f + ") ", t += ") { ";
      }
    }
    var x = x || [];
    x.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { format:  ", v ? t += "" + d : t += "" + e.util.toQuotedString(i), t += "  } ", e.opts.messages !== !1 && (t += ` , message: 'should match format "`, v ? t += "' + " + d + " + '" : t += "" + e.util.escapeQuotes(i), t += `"' `), e.opts.verbose && (t += " , schema:  ", v ? t += "validate.schema" + u : t += "" + e.util.toQuotedString(i), t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var P = t;
    return t = x.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", h && (t += " else { "), t;
  }), Ta;
}
var ka, Pn;
function Vc() {
  return Pn || (Pn = 1, ka = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = "errs__" + n, m = e.util.copy(e);
    m.level++;
    var g = "valid" + m.level, y = e.schema.then, w = e.schema.else, M = y !== void 0 && (e.opts.strictKeywords ? typeof y == "object" && Object.keys(y).length > 0 || y === !1 : e.util.schemaHasRules(y, e.RULES.all)), O = w !== void 0 && (e.opts.strictKeywords ? typeof w == "object" && Object.keys(w).length > 0 || w === !1 : e.util.schemaHasRules(w, e.RULES.all)), E = m.baseId;
    if (M || O) {
      var x;
      m.createErrors = !1, m.schema = i, m.schemaPath = u, m.errSchemaPath = c, t += " var " + d + " = errors; var " + v + " = true;  ";
      var P = e.compositeRule;
      e.compositeRule = m.compositeRule = !0, t += "  " + e.validate(m) + " ", m.baseId = E, m.createErrors = !0, t += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }  ", e.compositeRule = m.compositeRule = P, M ? (t += " if (" + g + ") {  ", m.schema = e.schema.then, m.schemaPath = e.schemaPath + ".then", m.errSchemaPath = e.errSchemaPath + "/then", t += "  " + e.validate(m) + " ", m.baseId = E, t += " " + v + " = " + g + "; ", M && O ? (x = "ifClause" + n, t += " var " + x + " = 'then'; ") : x = "'then'", t += " } ", O && (t += " else { ")) : t += " if (!" + g + ") { ", O && (m.schema = e.schema.else, m.schemaPath = e.schemaPath + ".else", m.errSchemaPath = e.errSchemaPath + "/else", t += "  " + e.validate(m) + " ", m.baseId = E, t += " " + v + " = " + g + "; ", M && O ? (x = "ifClause" + n, t += " var " + x + " = 'else'; ") : x = "'else'", t += " } "), t += " if (!" + v + ") {   var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { failingKeyword: " + x + " } ", e.opts.messages !== !1 && (t += ` , message: 'should match "' + ` + x + ` + '" schema' `), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += " }   ", h && (t += " else { ");
    } else
      h && (t += " if (true) { ");
    return t;
  }), ka;
}
var Ia, En;
function Hc() {
  return En || (En = 1, Ia = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = "errs__" + n, m = e.util.copy(e), g = "";
    m.level++;
    var y = "valid" + m.level, w = "i" + n, M = m.dataLevel = e.dataLevel + 1, O = "data" + M, E = e.baseId;
    if (t += "var " + d + " = errors;var " + v + ";", Array.isArray(i)) {
      var x = e.schema.additionalItems;
      if (x === !1) {
        t += " " + v + " = " + f + ".length <= " + i.length + "; ";
        var P = c;
        c = e.errSchemaPath + "/additionalItems", t += "  if (!" + v + ") {   ";
        var C = C || [];
        C.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + i.length + " } ", e.opts.messages !== !1 && (t += " , message: 'should NOT have more than " + i.length + " items' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
        var T = t;
        t = C.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + T + "]); " : t += " validate.errors = [" + T + "]; return false; " : t += " var err = " + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", c = P, h && (g += "}", t += " else { ");
      }
      var k = i;
      if (k) {
        for (var S, R = -1, D = k.length - 1; R < D; )
          if (S = k[R += 1], e.opts.strictKeywords ? typeof S == "object" && Object.keys(S).length > 0 || S === !1 : e.util.schemaHasRules(S, e.RULES.all)) {
            t += " " + y + " = true; if (" + f + ".length > " + R + ") { ";
            var F = f + "[" + R + "]";
            m.schema = S, m.schemaPath = u + "[" + R + "]", m.errSchemaPath = c + "/" + R, m.errorPath = e.util.getPathExpr(e.errorPath, R, e.opts.jsonPointers, !0), m.dataPathArr[M] = R;
            var j = e.validate(m);
            m.baseId = E, e.util.varOccurences(j, O) < 2 ? t += " " + e.util.varReplace(j, O, F) + " " : t += " var " + O + " = " + F + "; " + j + " ", t += " }  ", h && (t += " if (" + y + ") { ", g += "}");
          }
      }
      if (typeof x == "object" && (e.opts.strictKeywords ? typeof x == "object" && Object.keys(x).length > 0 || x === !1 : e.util.schemaHasRules(x, e.RULES.all))) {
        m.schema = x, m.schemaPath = e.schemaPath + ".additionalItems", m.errSchemaPath = e.errSchemaPath + "/additionalItems", t += " " + y + " = true; if (" + f + ".length > " + i.length + ") {  for (var " + w + " = " + i.length + "; " + w + " < " + f + ".length; " + w + "++) { ", m.errorPath = e.util.getPathExpr(e.errorPath, w, e.opts.jsonPointers, !0);
        var F = f + "[" + w + "]";
        m.dataPathArr[M] = w;
        var j = e.validate(m);
        m.baseId = E, e.util.varOccurences(j, O) < 2 ? t += " " + e.util.varReplace(j, O, F) + " " : t += " var " + O + " = " + F + "; " + j + " ", h && (t += " if (!" + y + ") break; "), t += " } }  ", h && (t += " if (" + y + ") { ", g += "}");
      }
    } else if (e.opts.strictKeywords ? typeof i == "object" && Object.keys(i).length > 0 || i === !1 : e.util.schemaHasRules(i, e.RULES.all)) {
      m.schema = i, m.schemaPath = u, m.errSchemaPath = c, t += "  for (var " + w + " = 0; " + w + " < " + f + ".length; " + w + "++) { ", m.errorPath = e.util.getPathExpr(e.errorPath, w, e.opts.jsonPointers, !0);
      var F = f + "[" + w + "]";
      m.dataPathArr[M] = w;
      var j = e.validate(m);
      m.baseId = E, e.util.varOccurences(j, O) < 2 ? t += " " + e.util.varReplace(j, O, F) + " " : t += " var " + O + " = " + F + "; " + j + " ", h && (t += " if (!" + y + ") break; "), t += " }";
    }
    return h && (t += " " + g + " if (" + d + " == errors) {"), t;
  }), Ia;
}
var $a, Sn;
function Cn() {
  return Sn || (Sn = 1, $a = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, E, f = "data" + (o || ""), v = e.opts.$data && i && i.$data, d;
    v ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", d = "schema" + n) : d = i;
    var m = r == "maximum", g = m ? "exclusiveMaximum" : "exclusiveMinimum", y = e.schema[g], w = e.opts.$data && y && y.$data, M = m ? "<" : ">", O = m ? ">" : "<", E = void 0;
    if (!(v || typeof i == "number" || i === void 0))
      throw new Error(r + " must be number");
    if (!(w || y === void 0 || typeof y == "number" || typeof y == "boolean"))
      throw new Error(g + " must be number or boolean");
    if (w) {
      var x = e.util.getData(y.$data, o, e.dataPathArr), P = "exclusive" + n, C = "exclType" + n, T = "exclIsNumber" + n, k = "op" + n, S = "' + " + k + " + '";
      t += " var schemaExcl" + n + " = " + x + "; ", x = "schemaExcl" + n, t += " var " + P + "; var " + C + " = typeof " + x + "; if (" + C + " != 'boolean' && " + C + " != 'undefined' && " + C + " != 'number') { ";
      var E = g, R = R || [];
      R.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (E || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: '" + g + " should be boolean' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
      var D = t;
      t = R.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + D + "]); " : t += " validate.errors = [" + D + "]; return false; " : t += " var err = " + D + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else if ( ", v && (t += " (" + d + " !== undefined && typeof " + d + " != 'number') || "), t += " " + C + " == 'number' ? ( (" + P + " = " + d + " === undefined || " + x + " " + M + "= " + d + ") ? " + f + " " + O + "= " + x + " : " + f + " " + O + " " + d + " ) : ( (" + P + " = " + x + " === true) ? " + f + " " + O + "= " + d + " : " + f + " " + O + " " + d + " ) || " + f + " !== " + f + ") { var op" + n + " = " + P + " ? '" + M + "' : '" + M + "='; ", i === void 0 && (E = g, c = e.errSchemaPath + "/" + g, d = x, v = w);
    } else {
      var T = typeof y == "number", S = M;
      if (T && v) {
        var k = "'" + S + "'";
        t += " if ( ", v && (t += " (" + d + " !== undefined && typeof " + d + " != 'number') || "), t += " ( " + d + " === undefined || " + y + " " + M + "= " + d + " ? " + f + " " + O + "= " + y + " : " + f + " " + O + " " + d + " ) || " + f + " !== " + f + ") { ";
      } else {
        T && i === void 0 ? (P = !0, E = g, c = e.errSchemaPath + "/" + g, d = y, O += "=") : (T && (d = Math[m ? "min" : "max"](y, i)), y === (T ? d : !0) ? (P = !0, E = g, c = e.errSchemaPath + "/" + g, O += "=") : (P = !1, S += "="));
        var k = "'" + S + "'";
        t += " if ( ", v && (t += " (" + d + " !== undefined && typeof " + d + " != 'number') || "), t += " " + f + " " + O + " " + d + " || " + f + " !== " + f + ") { ";
      }
    }
    E = E || r;
    var R = R || [];
    R.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (E || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { comparison: " + k + ", limit: " + d + ", exclusive: " + P + " } ", e.opts.messages !== !1 && (t += " , message: 'should be " + S + " ", v ? t += "' + " + d : t += "" + d + "'"), e.opts.verbose && (t += " , schema:  ", v ? t += "validate.schema" + u : t += "" + i, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var D = t;
    return t = R.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + D + "]); " : t += " validate.errors = [" + D + "]; return false; " : t += " var err = " + D + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", h && (t += " else { "), t;
  }), $a;
}
var Oa, xn;
function An() {
  return xn || (xn = 1, Oa = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, g, f = "data" + (o || ""), v = e.opts.$data && i && i.$data, d;
    if (v ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", d = "schema" + n) : d = i, !(v || typeof i == "number"))
      throw new Error(r + " must be number");
    var m = r == "maxItems" ? ">" : "<";
    t += "if ( ", v && (t += " (" + d + " !== undefined && typeof " + d + " != 'number') || "), t += " " + f + ".length " + m + " " + d + ") { ";
    var g = r, y = y || [];
    y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (g || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + d + " } ", e.opts.messages !== !1 && (t += " , message: 'should NOT have ", r == "maxItems" ? t += "more" : t += "fewer", t += " than ", v ? t += "' + " + d + " + '" : t += "" + i, t += " items' "), e.opts.verbose && (t += " , schema:  ", v ? t += "validate.schema" + u : t += "" + i, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var w = t;
    return t = y.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", h && (t += " else { "), t;
  }), Oa;
}
var Da, Rn;
function Tn() {
  return Rn || (Rn = 1, Da = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, g, f = "data" + (o || ""), v = e.opts.$data && i && i.$data, d;
    if (v ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", d = "schema" + n) : d = i, !(v || typeof i == "number"))
      throw new Error(r + " must be number");
    var m = r == "maxLength" ? ">" : "<";
    t += "if ( ", v && (t += " (" + d + " !== undefined && typeof " + d + " != 'number') || "), e.opts.unicode === !1 ? t += " " + f + ".length " : t += " ucs2length(" + f + ") ", t += " " + m + " " + d + ") { ";
    var g = r, y = y || [];
    y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (g || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + d + " } ", e.opts.messages !== !1 && (t += " , message: 'should NOT be ", r == "maxLength" ? t += "longer" : t += "shorter", t += " than ", v ? t += "' + " + d + " + '" : t += "" + i, t += " characters' "), e.opts.verbose && (t += " , schema:  ", v ? t += "validate.schema" + u : t += "" + i, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var w = t;
    return t = y.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", h && (t += " else { "), t;
  }), Da;
}
var Fa, kn;
function In() {
  return kn || (kn = 1, Fa = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, g, f = "data" + (o || ""), v = e.opts.$data && i && i.$data, d;
    if (v ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", d = "schema" + n) : d = i, !(v || typeof i == "number"))
      throw new Error(r + " must be number");
    var m = r == "maxProperties" ? ">" : "<";
    t += "if ( ", v && (t += " (" + d + " !== undefined && typeof " + d + " != 'number') || "), t += " Object.keys(" + f + ").length " + m + " " + d + ") { ";
    var g = r, y = y || [];
    y.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (g || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + d + " } ", e.opts.messages !== !1 && (t += " , message: 'should NOT have ", r == "maxProperties" ? t += "more" : t += "fewer", t += " than ", v ? t += "' + " + d + " + '" : t += "" + i, t += " properties' "), e.opts.verbose && (t += " , schema:  ", v ? t += "validate.schema" + u : t += "" + i, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var w = t;
    return t = y.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", h && (t += " else { "), t;
  }), Fa;
}
var Ma, $n;
function Bc() {
  return $n || ($n = 1, Ma = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = e.opts.$data && i && i.$data, d;
    if (v ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", d = "schema" + n) : d = i, !(v || typeof i == "number"))
      throw new Error(r + " must be number");
    t += "var division" + n + ";if (", v && (t += " " + d + " !== undefined && ( typeof " + d + " != 'number' || "), t += " (division" + n + " = " + f + " / " + d + ", ", e.opts.multipleOfPrecision ? t += " Math.abs(Math.round(division" + n + ") - division" + n + ") > 1e-" + e.opts.multipleOfPrecision + " " : t += " division" + n + " !== parseInt(division" + n + ") ", t += " ) ", v && (t += "  )  "), t += " ) {   ";
    var m = m || [];
    m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { multipleOf: " + d + " } ", e.opts.messages !== !1 && (t += " , message: 'should be multiple of ", v ? t += "' + " + d : t += "" + d + "'"), e.opts.verbose && (t += " , schema:  ", v ? t += "validate.schema" + u : t += "" + i, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var g = t;
    return t = m.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + g + "]); " : t += " validate.errors = [" + g + "]; return false; " : t += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", h && (t += " else { "), t;
  }), Ma;
}
var Na, On;
function Zc() {
  return On || (On = 1, Na = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "errs__" + n, d = e.util.copy(e);
    d.level++;
    var m = "valid" + d.level;
    if (e.opts.strictKeywords ? typeof i == "object" && Object.keys(i).length > 0 || i === !1 : e.util.schemaHasRules(i, e.RULES.all)) {
      d.schema = i, d.schemaPath = u, d.errSchemaPath = c, t += " var " + v + " = errors;  ";
      var g = e.compositeRule;
      e.compositeRule = d.compositeRule = !0, d.createErrors = !1;
      var y;
      d.opts.allErrors && (y = d.opts.allErrors, d.opts.allErrors = !1), t += " " + e.validate(d) + " ", d.createErrors = !0, y && (d.opts.allErrors = y), e.compositeRule = d.compositeRule = g, t += " if (" + m + ") {   ";
      var w = w || [];
      w.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'should NOT be valid' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
      var M = t;
      t = w.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + M + "]); " : t += " validate.errors = [" + M + "]; return false; " : t += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else {  errors = " + v + "; if (vErrors !== null) { if (" + v + ") vErrors.length = " + v + "; else vErrors = null; } ", e.opts.allErrors && (t += " } ");
    } else
      t += "  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'should NOT be valid' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", h && (t += " if (false) { ");
    return t;
  }), Na;
}
var ja, Dn;
function Wc() {
  return Dn || (Dn = 1, ja = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = "errs__" + n, m = e.util.copy(e), g = "";
    m.level++;
    var y = "valid" + m.level, w = m.baseId, M = "prevValid" + n, O = "passingSchemas" + n;
    t += "var " + d + " = errors , " + M + " = false , " + v + " = false , " + O + " = null; ";
    var E = e.compositeRule;
    e.compositeRule = m.compositeRule = !0;
    var x = i;
    if (x)
      for (var P, C = -1, T = x.length - 1; C < T; )
        P = x[C += 1], (e.opts.strictKeywords ? typeof P == "object" && Object.keys(P).length > 0 || P === !1 : e.util.schemaHasRules(P, e.RULES.all)) ? (m.schema = P, m.schemaPath = u + "[" + C + "]", m.errSchemaPath = c + "/" + C, t += "  " + e.validate(m) + " ", m.baseId = w) : t += " var " + y + " = true; ", C && (t += " if (" + y + " && " + M + ") { " + v + " = false; " + O + " = [" + O + ", " + C + "]; } else { ", g += "}"), t += " if (" + y + ") { " + v + " = " + M + " = true; " + O + " = " + C + "; }";
    return e.compositeRule = m.compositeRule = E, t += "" + g + "if (!" + v + ") {   var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { passingSchemas: " + O + " } ", e.opts.messages !== !1 && (t += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += "} else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }", e.opts.allErrors && (t += " } "), t;
  }), ja;
}
var La, Fn;
function Qc() {
  return Fn || (Fn = 1, La = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = e.opts.$data && i && i.$data, d;
    v ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", d = "schema" + n) : d = i;
    var m = v ? "(new RegExp(" + d + "))" : e.usePattern(i);
    t += "if ( ", v && (t += " (" + d + " !== undefined && typeof " + d + " != 'string') || "), t += " !" + m + ".test(" + f + ") ) {   ";
    var g = g || [];
    g.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { pattern:  ", v ? t += "" + d : t += "" + e.util.toQuotedString(i), t += "  } ", e.opts.messages !== !1 && (t += ` , message: 'should match pattern "`, v ? t += "' + " + d + " + '" : t += "" + e.util.escapeQuotes(i), t += `"' `), e.opts.verbose && (t += " , schema:  ", v ? t += "validate.schema" + u : t += "" + e.util.toQuotedString(i), t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
    var y = t;
    return t = g.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + y + "]); " : t += " validate.errors = [" + y + "]; return false; " : t += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", h && (t += " else { "), t;
  }), La;
}
var qa, Mn;
function Jc() {
  return Mn || (Mn = 1, qa = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "errs__" + n, d = e.util.copy(e), m = "";
    d.level++;
    var g = "valid" + d.level, y = "key" + n, w = "idx" + n, M = d.dataLevel = e.dataLevel + 1, O = "data" + M, E = "dataProperties" + n, x = Object.keys(i || {}).filter(G), P = e.schema.patternProperties || {}, C = Object.keys(P).filter(G), T = e.schema.additionalProperties, k = x.length || C.length, S = T === !1, R = typeof T == "object" && Object.keys(T).length, D = e.opts.removeAdditional, F = S || R || D, j = e.opts.ownProperties, z = e.baseId, Y = e.schema.required;
    if (Y && !(e.opts.$data && Y.$data) && Y.length < e.opts.loopRequired)
      var Q = e.util.toHash(Y);
    function G(na) {
      return na !== "__proto__";
    }
    if (t += "var " + v + " = errors;var " + g + " = true;", j && (t += " var " + E + " = undefined;"), F) {
      if (j ? t += " " + E + " = " + E + " || Object.keys(" + f + "); for (var " + w + "=0; " + w + "<" + E + ".length; " + w + "++) { var " + y + " = " + E + "[" + w + "]; " : t += " for (var " + y + " in " + f + ") { ", k) {
        if (t += " var isAdditional" + n + " = !(false ", x.length)
          if (x.length > 8)
            t += " || validate.schema" + u + ".hasOwnProperty(" + y + ") ";
          else {
            var ee = x;
            if (ee)
              for (var ae, Ne = -1, De = ee.length - 1; Ne < De; )
                ae = ee[Ne += 1], t += " || " + y + " == " + e.util.toQuotedString(ae) + " ";
          }
        if (C.length) {
          var $e = C;
          if ($e)
            for (var Ce, Ze = -1, A = $e.length - 1; Ze < A; )
              Ce = $e[Ze += 1], t += " || " + e.usePattern(Ce) + ".test(" + y + ") ";
        }
        t += " ); if (isAdditional" + n + ") { ";
      }
      if (D == "all")
        t += " delete " + f + "[" + y + "]; ";
      else {
        var N = e.errorPath, H = "' + " + y + " + '";
        if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers)), S)
          if (D)
            t += " delete " + f + "[" + y + "]; ";
          else {
            t += " " + g + " = false; ";
            var re = c;
            c = e.errSchemaPath + "/additionalProperties";
            var L = L || [];
            L.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { additionalProperty: '" + H + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is an invalid additional property" : t += "should NOT have additional properties", t += "' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
            var U = t;
            t = L.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + U + "]); " : t += " validate.errors = [" + U + "]; return false; " : t += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c = re, h && (t += " break; ");
          }
        else if (R)
          if (D == "failing") {
            t += " var " + v + " = errors;  ";
            var oe = e.compositeRule;
            e.compositeRule = d.compositeRule = !0, d.schema = T, d.schemaPath = e.schemaPath + ".additionalProperties", d.errSchemaPath = e.errSchemaPath + "/additionalProperties", d.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers);
            var ue = f + "[" + y + "]";
            d.dataPathArr[M] = y;
            var le = e.validate(d);
            d.baseId = z, e.util.varOccurences(le, O) < 2 ? t += " " + e.util.varReplace(le, O, ue) + " " : t += " var " + O + " = " + ue + "; " + le + " ", t += " if (!" + g + ") { errors = " + v + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + f + "[" + y + "]; }  ", e.compositeRule = d.compositeRule = oe;
          } else {
            d.schema = T, d.schemaPath = e.schemaPath + ".additionalProperties", d.errSchemaPath = e.errSchemaPath + "/additionalProperties", d.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers);
            var ue = f + "[" + y + "]";
            d.dataPathArr[M] = y;
            var le = e.validate(d);
            d.baseId = z, e.util.varOccurences(le, O) < 2 ? t += " " + e.util.varReplace(le, O, ue) + " " : t += " var " + O + " = " + ue + "; " + le + " ", h && (t += " if (!" + g + ") break; ");
          }
        e.errorPath = N;
      }
      k && (t += " } "), t += " }  ", h && (t += " if (" + g + ") { ", m += "}");
    }
    var ye = e.opts.useDefaults && !e.compositeRule;
    if (x.length) {
      var me = x;
      if (me)
        for (var ae, pe = -1, Fe = me.length - 1; pe < Fe; ) {
          ae = me[pe += 1];
          var Pe = i[ae];
          if (e.opts.strictKeywords ? typeof Pe == "object" && Object.keys(Pe).length > 0 || Pe === !1 : e.util.schemaHasRules(Pe, e.RULES.all)) {
            var Ye = e.util.getProperty(ae), ue = f + Ye, je = ye && Pe.default !== void 0;
            d.schema = Pe, d.schemaPath = u + Ye, d.errSchemaPath = c + "/" + e.util.escapeFragment(ae), d.errorPath = e.util.getPath(e.errorPath, ae, e.opts.jsonPointers), d.dataPathArr[M] = e.util.toQuotedString(ae);
            var le = e.validate(d);
            if (d.baseId = z, e.util.varOccurences(le, O) < 2) {
              le = e.util.varReplace(le, O, ue);
              var Se = ue;
            } else {
              var Se = O;
              t += " var " + O + " = " + ue + "; ";
            }
            if (je)
              t += " " + le + " ";
            else {
              if (Q && Q[ae]) {
                t += " if ( " + Se + " === undefined ", j && (t += " || ! Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(ae) + "') "), t += ") { " + g + " = false; ";
                var N = e.errorPath, re = c, xe = e.util.escapeQuotes(ae);
                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(N, ae, e.opts.jsonPointers)), c = e.errSchemaPath + "/required";
                var L = L || [];
                L.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + xe + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + xe + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
                var U = t;
                t = L.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + U + "]); " : t += " validate.errors = [" + U + "]; return false; " : t += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c = re, e.errorPath = N, t += " } else { ";
              } else
                h ? (t += " if ( " + Se + " === undefined ", j && (t += " || ! Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(ae) + "') "), t += ") { " + g + " = true; } else { ") : (t += " if (" + Se + " !== undefined ", j && (t += " &&   Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(ae) + "') "), t += " ) { ");
              t += " " + le + " } ";
            }
          }
          h && (t += " if (" + g + ") { ", m += "}");
        }
    }
    if (C.length) {
      var Ue = C;
      if (Ue)
        for (var Ce, Dr = -1, sa = Ue.length - 1; Dr < sa; ) {
          Ce = Ue[Dr += 1];
          var Pe = P[Ce];
          if (e.opts.strictKeywords ? typeof Pe == "object" && Object.keys(Pe).length > 0 || Pe === !1 : e.util.schemaHasRules(Pe, e.RULES.all)) {
            d.schema = Pe, d.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(Ce), d.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(Ce), j ? t += " " + E + " = " + E + " || Object.keys(" + f + "); for (var " + w + "=0; " + w + "<" + E + ".length; " + w + "++) { var " + y + " = " + E + "[" + w + "]; " : t += " for (var " + y + " in " + f + ") { ", t += " if (" + e.usePattern(Ce) + ".test(" + y + ")) { ", d.errorPath = e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers);
            var ue = f + "[" + y + "]";
            d.dataPathArr[M] = y;
            var le = e.validate(d);
            d.baseId = z, e.util.varOccurences(le, O) < 2 ? t += " " + e.util.varReplace(le, O, ue) + " " : t += " var " + O + " = " + ue + "; " + le + " ", h && (t += " if (!" + g + ") break; "), t += " } ", h && (t += " else " + g + " = true; "), t += " }  ", h && (t += " if (" + g + ") { ", m += "}");
          }
        }
    }
    return h && (t += " " + m + " if (" + v + " == errors) {"), t;
  }), qa;
}
var Ua, Nn;
function Gc() {
  return Nn || (Nn = 1, Ua = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "errs__" + n, d = e.util.copy(e), m = "";
    d.level++;
    var g = "valid" + d.level;
    if (t += "var " + v + " = errors;", e.opts.strictKeywords ? typeof i == "object" && Object.keys(i).length > 0 || i === !1 : e.util.schemaHasRules(i, e.RULES.all)) {
      d.schema = i, d.schemaPath = u, d.errSchemaPath = c;
      var y = "key" + n, w = "idx" + n, M = "i" + n, O = "' + " + y + " + '", E = d.dataLevel = e.dataLevel + 1, x = "data" + E, P = "dataProperties" + n, C = e.opts.ownProperties, T = e.baseId;
      C && (t += " var " + P + " = undefined; "), C ? t += " " + P + " = " + P + " || Object.keys(" + f + "); for (var " + w + "=0; " + w + "<" + P + ".length; " + w + "++) { var " + y + " = " + P + "[" + w + "]; " : t += " for (var " + y + " in " + f + ") { ", t += " var startErrs" + n + " = errors; ";
      var k = y, S = e.compositeRule;
      e.compositeRule = d.compositeRule = !0;
      var R = e.validate(d);
      d.baseId = T, e.util.varOccurences(R, x) < 2 ? t += " " + e.util.varReplace(R, x, k) + " " : t += " var " + x + " = " + k + "; " + R + " ", e.compositeRule = d.compositeRule = S, t += " if (!" + g + ") { for (var " + M + "=startErrs" + n + "; " + M + "<errors; " + M + "++) { vErrors[" + M + "].propertyName = " + y + "; }   var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { propertyName: '" + O + "' } ", e.opts.messages !== !1 && (t += " , message: 'property name \\'" + O + "\\' is invalid' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), h && (t += " break; "), t += " } }";
    }
    return h && (t += " " + m + " if (" + v + " == errors) {"), t;
  }), Ua;
}
var za, jn;
function Kc() {
  return jn || (jn = 1, za = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = e.opts.$data && i && i.$data;
    d && (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ");
    var m = "schema" + n;
    if (!d)
      if (i.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
        var g = [], y = i;
        if (y)
          for (var w, M = -1, O = y.length - 1; M < O; ) {
            w = y[M += 1];
            var E = e.schema.properties[w];
            E && (e.opts.strictKeywords ? typeof E == "object" && Object.keys(E).length > 0 || E === !1 : e.util.schemaHasRules(E, e.RULES.all)) || (g[g.length] = w);
          }
      } else
        var g = i;
    if (d || g.length) {
      var x = e.errorPath, P = d || g.length >= e.opts.loopRequired, C = e.opts.ownProperties;
      if (h)
        if (t += " var missing" + n + "; ", P) {
          d || (t += " var " + m + " = validate.schema" + u + "; ");
          var T = "i" + n, k = "schema" + n + "[" + T + "]", S = "' + " + k + " + '";
          e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(x, k, e.opts.jsonPointers)), t += " var " + v + " = true; ", d && (t += " if (schema" + n + " === undefined) " + v + " = true; else if (!Array.isArray(schema" + n + ")) " + v + " = false; else {"), t += " for (var " + T + " = 0; " + T + " < " + m + ".length; " + T + "++) { " + v + " = " + f + "[" + m + "[" + T + "]] !== undefined ", C && (t += " &&   Object.prototype.hasOwnProperty.call(" + f + ", " + m + "[" + T + "]) "), t += "; if (!" + v + ") break; } ", d && (t += "  }  "), t += "  if (!" + v + ") {   ";
          var R = R || [];
          R.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + S + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + S + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
          var D = t;
          t = R.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + D + "]); " : t += " validate.errors = [" + D + "]; return false; " : t += " var err = " + D + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ";
        } else {
          t += " if ( ";
          var F = g;
          if (F)
            for (var j, T = -1, z = F.length - 1; T < z; ) {
              j = F[T += 1], T && (t += " || ");
              var Y = e.util.getProperty(j), Q = f + Y;
              t += " ( ( " + Q + " === undefined ", C && (t += " || ! Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(j) + "') "), t += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? j : Y) + ") ) ";
            }
          t += ") {  ";
          var k = "missing" + n, S = "' + " + k + " + '";
          e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(x, k, !0) : x + " + " + k);
          var R = R || [];
          R.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + S + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + S + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
          var D = t;
          t = R.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + D + "]); " : t += " validate.errors = [" + D + "]; return false; " : t += " var err = " + D + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ";
        }
      else if (P) {
        d || (t += " var " + m + " = validate.schema" + u + "; ");
        var T = "i" + n, k = "schema" + n + "[" + T + "]", S = "' + " + k + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(x, k, e.opts.jsonPointers)), d && (t += " if (" + m + " && !Array.isArray(" + m + ")) {  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + S + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + S + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + m + " !== undefined) { "), t += " for (var " + T + " = 0; " + T + " < " + m + ".length; " + T + "++) { if (" + f + "[" + m + "[" + T + "]] === undefined ", C && (t += " || ! Object.prototype.hasOwnProperty.call(" + f + ", " + m + "[" + T + "]) "), t += ") {  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + S + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + S + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", d && (t += "  }  ");
      } else {
        var G = g;
        if (G)
          for (var j, ee = -1, ae = G.length - 1; ee < ae; ) {
            j = G[ee += 1];
            var Y = e.util.getProperty(j), S = e.util.escapeQuotes(j), Q = f + Y;
            e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(x, j, e.opts.jsonPointers)), t += " if ( " + Q + " === undefined ", C && (t += " || ! Object.prototype.hasOwnProperty.call(" + f + ", '" + e.util.escapeQuotes(j) + "') "), t += ") {  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + S + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + S + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      e.errorPath = x;
    } else h && (t += " if (true) {");
    return t;
  }), za;
}
var Va, Ln;
function Yc() {
  return Ln || (Ln = 1, Va = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f = "data" + (o || ""), v = "valid" + n, d = e.opts.$data && i && i.$data, m;
    if (d ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", m = "schema" + n) : m = i, (i || d) && e.opts.uniqueItems !== !1) {
      d && (t += " var " + v + "; if (" + m + " === false || " + m + " === undefined) " + v + " = true; else if (typeof " + m + " != 'boolean') " + v + " = false; else { "), t += " var i = " + f + ".length , " + v + " = true , j; if (i > 1) { ";
      var g = e.schema.items && e.schema.items.type, y = Array.isArray(g);
      if (!g || g == "object" || g == "array" || y && (g.indexOf("object") >= 0 || g.indexOf("array") >= 0))
        t += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + f + "[i], " + f + "[j])) { " + v + " = false; break outer; } } } ";
      else {
        t += " var itemIndices = {}, item; for (;i--;) { var item = " + f + "[i]; ";
        var w = "checkDataType" + (y ? "s" : "");
        t += " if (" + e.util[w](g, "item", e.opts.strictNumbers, !0) + ") continue; ", y && (t += ` if (typeof item == 'string') item = '"' + item; `), t += " if (typeof itemIndices[item] == 'number') { " + v + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
      }
      t += " } ", d && (t += "  }  "), t += " if (!" + v + ") {   ";
      var M = M || [];
      M.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { i: i, j: j } ", e.opts.messages !== !1 && (t += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (t += " , schema:  ", d ? t += "validate.schema" + u : t += "" + i, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
      var O = t;
      t = M.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + O + "]); " : t += " validate.errors = [" + O + "]; return false; " : t += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", h && (t += " else { ");
    } else
      h && (t += " if (true) { ");
    return t;
  }), Va;
}
var Ha, qn;
function Xc() {
  return qn || (qn = 1, Ha = {
    $ref: Dc(),
    allOf: Fc(),
    anyOf: Mc(),
    $comment: Nc(),
    const: jc(),
    contains: Lc(),
    dependencies: qc(),
    enum: Uc(),
    format: zc(),
    if: Vc(),
    items: Hc(),
    maximum: Cn(),
    minimum: Cn(),
    maxItems: An(),
    minItems: An(),
    maxLength: Tn(),
    minLength: Tn(),
    maxProperties: In(),
    minProperties: In(),
    multipleOf: Bc(),
    not: Zc(),
    oneOf: Wc(),
    pattern: Qc(),
    properties: Jc(),
    propertyNames: Gc(),
    required: Kc(),
    uniqueItems: Yc(),
    validate: Lo()
  }), Ha;
}
var Ba, Un;
function eu() {
  if (Un) return Ba;
  Un = 1;
  var s = Xc(), e = rr().toHash;
  return Ba = function() {
    var a = [
      {
        type: "number",
        rules: [
          { maximum: ["exclusiveMaximum"] },
          { minimum: ["exclusiveMinimum"] },
          "multipleOf",
          "format"
        ]
      },
      {
        type: "string",
        rules: ["maxLength", "minLength", "pattern", "format"]
      },
      {
        type: "array",
        rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
      },
      {
        type: "object",
        rules: [
          "maxProperties",
          "minProperties",
          "required",
          "dependencies",
          "propertyNames",
          { properties: ["additionalProperties", "patternProperties"] }
        ]
      },
      { rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"] }
    ], t = ["type", "$comment"], n = [
      "$schema",
      "$id",
      "id",
      "$data",
      "$async",
      "title",
      "description",
      "default",
      "definitions",
      "examples",
      "readOnly",
      "writeOnly",
      "contentMediaType",
      "contentEncoding",
      "additionalItems",
      "then",
      "else"
    ], o = ["number", "integer", "string", "array", "object", "boolean", "null"];
    return a.all = e(t), a.types = e(o), a.forEach(function(i) {
      i.rules = i.rules.map(function(u) {
        var c;
        if (typeof u == "object") {
          var h = Object.keys(u)[0];
          c = u[h], u = h, c.forEach(function(v) {
            t.push(v), a.all[v] = !0;
          });
        }
        t.push(u);
        var f = a.all[u] = {
          keyword: u,
          code: s[u],
          implements: c
        };
        return f;
      }), a.all.$comment = {
        keyword: "$comment",
        code: s.$comment
      }, i.type && (a.types[i.type] = i);
    }), a.keywords = e(t.concat(n)), a.custom = {}, a;
  }, Ba;
}
var Za, zn;
function tu() {
  if (zn) return Za;
  zn = 1;
  var s = [
    "multipleOf",
    "maximum",
    "exclusiveMaximum",
    "minimum",
    "exclusiveMinimum",
    "maxLength",
    "minLength",
    "pattern",
    "additionalItems",
    "maxItems",
    "minItems",
    "uniqueItems",
    "maxProperties",
    "minProperties",
    "required",
    "additionalProperties",
    "enum",
    "format",
    "const"
  ];
  return Za = function(e, r) {
    for (var a = 0; a < r.length; a++) {
      e = JSON.parse(JSON.stringify(e));
      var t = r[a].split("/"), n = e, o;
      for (o = 1; o < t.length; o++)
        n = n[t[o]];
      for (o = 0; o < s.length; o++) {
        var i = s[o], u = n[i];
        u && (n[i] = {
          anyOf: [
            u,
            { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
          ]
        });
      }
    }
    return e;
  }, Za;
}
var Wa, Vn;
function ru() {
  if (Vn) return Wa;
  Vn = 1;
  var s = Ts().MissingRef;
  Wa = e;
  function e(r, a, t) {
    var n = this;
    if (typeof this._opts.loadSchema != "function")
      throw new Error("options.loadSchema should be a function");
    typeof a == "function" && (t = a, a = void 0);
    var o = i(r).then(function() {
      var c = n._addSchema(r, void 0, a);
      return c.validate || u(c);
    });
    return t && o.then(
      function(c) {
        t(null, c);
      },
      t
    ), o;
    function i(c) {
      var h = c.$schema;
      return h && !n.getSchema(h) ? e.call(n, { $ref: h }, !0) : Promise.resolve();
    }
    function u(c) {
      try {
        return n._compile(c);
      } catch (f) {
        if (f instanceof s) return h(f);
        throw f;
      }
      function h(f) {
        var v = f.missingSchema;
        if (g(v)) throw new Error("Schema " + v + " is loaded but " + f.missingRef + " cannot be resolved");
        var d = n._loadingSchemas[v];
        return d || (d = n._loadingSchemas[v] = n._opts.loadSchema(v), d.then(m, m)), d.then(function(y) {
          if (!g(v))
            return i(y).then(function() {
              g(v) || n.addSchema(y, v, void 0, a);
            });
        }).then(function() {
          return u(c);
        });
        function m() {
          delete n._loadingSchemas[v];
        }
        function g(y) {
          return n._refs[y] || n._schemas[y];
        }
      }
    }
  }
  return Wa;
}
var Qa, Hn;
function au() {
  return Hn || (Hn = 1, Qa = function(e, r, a) {
    var t = " ", n = e.level, o = e.dataLevel, i = e.schema[r], u = e.schemaPath + e.util.getProperty(r), c = e.errSchemaPath + "/" + r, h = !e.opts.allErrors, f, v = "data" + (o || ""), d = "valid" + n, m = "errs__" + n, g = e.opts.$data && i && i.$data, y;
    g ? (t += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", y = "schema" + n) : y = i;
    var w = this, M = "definition" + n, O = w.definition, E = "", x, P, C, T, k;
    if (g && O.$data) {
      k = "keywordValidate" + n;
      var S = O.validateSchema;
      t += " var " + M + " = RULES.custom['" + r + "'].definition; var " + k + " = " + M + ".validate;";
    } else {
      if (T = e.useCustomRule(w, i, e.schema, e), !T) return;
      y = "validate.schema" + u, k = T.code, x = O.compile, P = O.inline, C = O.macro;
    }
    var R = k + ".errors", D = "i" + n, F = "ruleErr" + n, j = O.async;
    if (j && !e.async) throw new Error("async keyword in sync schema");
    if (P || C || (t += "" + R + " = null;"), t += "var " + m + " = errors;var " + d + ";", g && O.$data && (E += "}", t += " if (" + y + " === undefined) { " + d + " = true; } else { ", S && (E += "}", t += " " + d + " = " + M + ".validateSchema(" + y + "); if (" + d + ") { ")), P)
      O.statements ? t += " " + T.validate + " " : t += " " + d + " = " + T.validate + "; ";
    else if (C) {
      var z = e.util.copy(e), E = "";
      z.level++;
      var Y = "valid" + z.level;
      z.schema = T.validate, z.schemaPath = "";
      var Q = e.compositeRule;
      e.compositeRule = z.compositeRule = !0;
      var G = e.validate(z).replace(/validate\.schema/g, k);
      e.compositeRule = z.compositeRule = Q, t += " " + G;
    } else {
      var ee = ee || [];
      ee.push(t), t = "", t += "  " + k + ".call( ", e.opts.passContext ? t += "this" : t += "self", x || O.schema === !1 ? t += " , " + v + " " : t += " , " + y + " , " + v + " , validate.schema" + e.schemaPath + " ", t += " , (dataPath || '')", e.errorPath != '""' && (t += " + " + e.errorPath);
      var ae = o ? "data" + (o - 1 || "") : "parentData", Ne = o ? e.dataPathArr[o] : "parentDataProperty";
      t += " , " + ae + " , " + Ne + " , rootData )  ";
      var De = t;
      t = ee.pop(), O.errors === !1 ? (t += " " + d + " = ", j && (t += "await "), t += "" + De + "; ") : j ? (R = "customErrors" + n, t += " var " + R + " = null; try { " + d + " = await " + De + "; } catch (e) { " + d + " = false; if (e instanceof ValidationError) " + R + " = e.errors; else throw e; } ") : t += " " + R + " = null; " + d + " = " + De + "; ";
    }
    if (O.modifying && (t += " if (" + ae + ") " + v + " = " + ae + "[" + Ne + "];"), t += "" + E, O.valid)
      h && (t += " if (true) { ");
    else {
      t += " if ( ", O.valid === void 0 ? (t += " !", C ? t += "" + Y : t += "" + d) : t += " " + !O.valid + " ", t += ") { ", f = w.keyword;
      var ee = ee || [];
      ee.push(t), t = "";
      var ee = ee || [];
      ee.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (f || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { keyword: '" + w.keyword + "' } ", e.opts.messages !== !1 && (t += ` , message: 'should pass "` + w.keyword + `" keyword validation' `), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + v + " "), t += " } ") : t += " {} ";
      var $e = t;
      t = ee.pop(), !e.compositeRule && h ? e.async ? t += " throw new ValidationError([" + $e + "]); " : t += " validate.errors = [" + $e + "]; return false; " : t += " var err = " + $e + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      var Ce = t;
      t = ee.pop(), P ? O.errors ? O.errors != "full" && (t += "  for (var " + D + "=" + m + "; " + D + "<errors; " + D + "++) { var " + F + " = vErrors[" + D + "]; if (" + F + ".dataPath === undefined) " + F + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + F + ".schemaPath === undefined) { " + F + '.schemaPath = "' + c + '"; } ', e.opts.verbose && (t += " " + F + ".schema = " + y + "; " + F + ".data = " + v + "; "), t += " } ") : O.errors === !1 ? t += " " + Ce + " " : (t += " if (" + m + " == errors) { " + Ce + " } else {  for (var " + D + "=" + m + "; " + D + "<errors; " + D + "++) { var " + F + " = vErrors[" + D + "]; if (" + F + ".dataPath === undefined) " + F + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + F + ".schemaPath === undefined) { " + F + '.schemaPath = "' + c + '"; } ', e.opts.verbose && (t += " " + F + ".schema = " + y + "; " + F + ".data = " + v + "; "), t += " } } ") : C ? (t += "   var err =   ", e.createErrors !== !1 ? (t += " { keyword: '" + (f || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { keyword: '" + w.keyword + "' } ", e.opts.messages !== !1 && (t += ` , message: 'should pass "` + w.keyword + `" keyword validation' `), e.opts.verbose && (t += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + v + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; ")) : O.errors === !1 ? t += " " + Ce + " " : (t += " if (Array.isArray(" + R + ")) { if (vErrors === null) vErrors = " + R + "; else vErrors = vErrors.concat(" + R + "); errors = vErrors.length;  for (var " + D + "=" + m + "; " + D + "<errors; " + D + "++) { var " + F + " = vErrors[" + D + "]; if (" + F + ".dataPath === undefined) " + F + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + F + '.schemaPath = "' + c + '";  ', e.opts.verbose && (t += " " + F + ".schema = " + y + "; " + F + ".data = " + v + "; "), t += " } } else { " + Ce + " } "), t += " } ", h && (t += " else { ");
    }
    return t;
  }), Qa;
}
const su = "http://json-schema.org/draft-07/schema#", nu = "http://json-schema.org/draft-07/schema#", ou = "Core schema meta-schema", iu = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, lu = ["object", "boolean"], cu = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, qo = {
  $schema: su,
  $id: nu,
  title: ou,
  definitions: iu,
  type: lu,
  properties: cu,
  default: !0
};
var Ja, Bn;
function uu() {
  if (Bn) return Ja;
  Bn = 1;
  var s = qo;
  return Ja = {
    $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
    definitions: {
      simpleTypes: s.definitions.simpleTypes
    },
    type: "object",
    dependencies: {
      schema: ["validate"],
      $data: ["validate"],
      statements: ["inline"],
      valid: { not: { required: ["macro"] } }
    },
    properties: {
      type: s.properties.type,
      schema: { type: "boolean" },
      statements: { type: "boolean" },
      dependencies: {
        type: "array",
        items: { type: "string" }
      },
      metaSchema: { type: "object" },
      modifying: { type: "boolean" },
      valid: { type: "boolean" },
      $data: { type: "boolean" },
      async: { type: "boolean" },
      errors: {
        anyOf: [
          { type: "boolean" },
          { const: "full" }
        ]
      }
    }
  }, Ja;
}
var Ga, Zn;
function du() {
  if (Zn) return Ga;
  Zn = 1;
  var s = /^[a-z_$][a-z0-9_$-]*$/i, e = au(), r = uu();
  Ga = {
    add: a,
    get: t,
    remove: n,
    validate: o
  };
  function a(i, u) {
    var c = this.RULES;
    if (c.keywords[i])
      throw new Error("Keyword " + i + " is already defined");
    if (!s.test(i))
      throw new Error("Keyword " + i + " is not a valid identifier");
    if (u) {
      this.validateKeyword(u, !0);
      var h = u.type;
      if (Array.isArray(h))
        for (var f = 0; f < h.length; f++)
          d(i, h[f], u);
      else
        d(i, h, u);
      var v = u.metaSchema;
      v && (u.$data && this._opts.$data && (v = {
        anyOf: [
          v,
          { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
        ]
      }), u.validateSchema = this.compile(v, !0));
    }
    c.keywords[i] = c.all[i] = !0;
    function d(m, g, y) {
      for (var w, M = 0; M < c.length; M++) {
        var O = c[M];
        if (O.type == g) {
          w = O;
          break;
        }
      }
      w || (w = { type: g, rules: [] }, c.push(w));
      var E = {
        keyword: m,
        definition: y,
        custom: !0,
        code: e,
        implements: y.implements
      };
      w.rules.push(E), c.custom[m] = E;
    }
    return this;
  }
  function t(i) {
    var u = this.RULES.custom[i];
    return u ? u.definition : this.RULES.keywords[i] || !1;
  }
  function n(i) {
    var u = this.RULES;
    delete u.keywords[i], delete u.all[i], delete u.custom[i];
    for (var c = 0; c < u.length; c++)
      for (var h = u[c].rules, f = 0; f < h.length; f++)
        if (h[f].keyword == i) {
          h.splice(f, 1);
          break;
        }
    return this;
  }
  function o(i, u) {
    o.errors = null;
    var c = this._validateKeyword = this._validateKeyword || this.compile(r, !0);
    if (c(i)) return !0;
    if (o.errors = c.errors, u)
      throw new Error("custom keyword definition is invalid: " + this.errorsText(c.errors));
    return !1;
  }
  return Ga;
}
const hu = "http://json-schema.org/draft-07/schema#", fu = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", mu = "Meta-schema for $data reference (JSON Schema extension proposal)", pu = "object", gu = ["$data"], vu = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, yu = !1, _u = {
  $schema: hu,
  $id: fu,
  description: mu,
  type: pu,
  required: gu,
  properties: vu,
  additionalProperties: yu
};
var Ka, Wn;
function wu() {
  if (Wn) return Ka;
  Wn = 1;
  var s = Ic(), e = Rs(), r = $c(), a = No(), t = jo(), n = Oc(), o = eu(), i = tu(), u = rr();
  Ka = m, m.prototype.validate = g, m.prototype.compile = y, m.prototype.addSchema = w, m.prototype.addMetaSchema = M, m.prototype.validateSchema = O, m.prototype.getSchema = x, m.prototype.removeSchema = T, m.prototype.addFormat = Q, m.prototype.errorsText = Y, m.prototype._addSchema = S, m.prototype._compile = R, m.prototype.compileAsync = ru();
  var c = du();
  m.prototype.addKeyword = c.add, m.prototype.getKeyword = c.get, m.prototype.removeKeyword = c.remove, m.prototype.validateKeyword = c.validate;
  var h = Ts();
  m.ValidationError = h.Validation, m.MissingRefError = h.MissingRef, m.$dataMetaSchema = i;
  var f = "http://json-schema.org/draft-07/schema", v = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"], d = ["/properties"];
  function m(A) {
    if (!(this instanceof m)) return new m(A);
    A = this._opts = u.copy(A) || {}, Ce(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = n(A.format), this._cache = A.cache || new r(), this._loadingSchemas = {}, this._compilations = [], this.RULES = o(), this._getId = D(A), A.loopRequired = A.loopRequired || 1 / 0, A.errorDataPath == "property" && (A._errorDataPathProperty = !0), A.serialize === void 0 && (A.serialize = t), this._metaOpts = $e(this), A.formats && ae(this), A.keywords && Ne(this), G(this), typeof A.meta == "object" && this.addMetaSchema(A.meta), A.nullable && this.addKeyword("nullable", { metaSchema: { type: "boolean" } }), ee(this);
  }
  function g(A, N) {
    var H;
    if (typeof A == "string") {
      if (H = this.getSchema(A), !H) throw new Error('no schema with key or ref "' + A + '"');
    } else {
      var re = this._addSchema(A);
      H = re.validate || this._compile(re);
    }
    var L = H(N);
    return H.$async !== !0 && (this.errors = H.errors), L;
  }
  function y(A, N) {
    var H = this._addSchema(A, void 0, N);
    return H.validate || this._compile(H);
  }
  function w(A, N, H, re) {
    if (Array.isArray(A)) {
      for (var L = 0; L < A.length; L++) this.addSchema(A[L], void 0, H, re);
      return this;
    }
    var U = this._getId(A);
    if (U !== void 0 && typeof U != "string")
      throw new Error("schema id must be string");
    return N = e.normalizeId(N || U), De(this, N), this._schemas[N] = this._addSchema(A, H, re, !0), this;
  }
  function M(A, N, H) {
    return this.addSchema(A, N, H, !0), this;
  }
  function O(A, N) {
    var H = A.$schema;
    if (H !== void 0 && typeof H != "string")
      throw new Error("$schema must be a string");
    if (H = H || this._opts.defaultMeta || E(this), !H)
      return this.logger.warn("meta-schema not available"), this.errors = null, !0;
    var re = this.validate(H, A);
    if (!re && N) {
      var L = "schema is invalid: " + this.errorsText();
      if (this._opts.validateSchema == "log") this.logger.error(L);
      else throw new Error(L);
    }
    return re;
  }
  function E(A) {
    var N = A._opts.meta;
    return A._opts.defaultMeta = typeof N == "object" ? A._getId(N) || N : A.getSchema(f) ? f : void 0, A._opts.defaultMeta;
  }
  function x(A) {
    var N = C(this, A);
    switch (typeof N) {
      case "object":
        return N.validate || this._compile(N);
      case "string":
        return this.getSchema(N);
      case "undefined":
        return P(this, A);
    }
  }
  function P(A, N) {
    var H = e.schema.call(A, { schema: {} }, N);
    if (H) {
      var re = H.schema, L = H.root, U = H.baseId, oe = s.call(A, re, L, void 0, U);
      return A._fragments[N] = new a({
        ref: N,
        fragment: !0,
        schema: re,
        root: L,
        baseId: U,
        validate: oe
      }), oe;
    }
  }
  function C(A, N) {
    return N = e.normalizeId(N), A._schemas[N] || A._refs[N] || A._fragments[N];
  }
  function T(A) {
    if (A instanceof RegExp)
      return k(this, this._schemas, A), k(this, this._refs, A), this;
    switch (typeof A) {
      case "undefined":
        return k(this, this._schemas), k(this, this._refs), this._cache.clear(), this;
      case "string":
        var N = C(this, A);
        return N && this._cache.del(N.cacheKey), delete this._schemas[A], delete this._refs[A], this;
      case "object":
        var H = this._opts.serialize, re = H ? H(A) : A;
        this._cache.del(re);
        var L = this._getId(A);
        L && (L = e.normalizeId(L), delete this._schemas[L], delete this._refs[L]);
    }
    return this;
  }
  function k(A, N, H) {
    for (var re in N) {
      var L = N[re];
      !L.meta && (!H || H.test(re)) && (A._cache.del(L.cacheKey), delete N[re]);
    }
  }
  function S(A, N, H, re) {
    if (typeof A != "object" && typeof A != "boolean")
      throw new Error("schema should be object or boolean");
    var L = this._opts.serialize, U = L ? L(A) : A, oe = this._cache.get(U);
    if (oe) return oe;
    re = re || this._opts.addUsedSchema !== !1;
    var ue = e.normalizeId(this._getId(A));
    ue && re && De(this, ue);
    var le = this._opts.validateSchema !== !1 && !N, ye;
    le && !(ye = ue && ue == e.normalizeId(A.$schema)) && this.validateSchema(A, !0);
    var me = e.ids.call(this, A), pe = new a({
      id: ue,
      schema: A,
      localRefs: me,
      cacheKey: U,
      meta: H
    });
    return ue[0] != "#" && re && (this._refs[ue] = pe), this._cache.put(U, pe), le && ye && this.validateSchema(A, !0), pe;
  }
  function R(A, N) {
    if (A.compiling)
      return A.validate = L, L.schema = A.schema, L.errors = null, L.root = N || L, A.schema.$async === !0 && (L.$async = !0), L;
    A.compiling = !0;
    var H;
    A.meta && (H = this._opts, this._opts = this._metaOpts);
    var re;
    try {
      re = s.call(this, A.schema, N, A.localRefs);
    } catch (U) {
      throw delete A.validate, U;
    } finally {
      A.compiling = !1, A.meta && (this._opts = H);
    }
    return A.validate = re, A.refs = re.refs, A.refVal = re.refVal, A.root = re.root, re;
    function L() {
      var U = A.validate, oe = U.apply(this, arguments);
      return L.errors = U.errors, oe;
    }
  }
  function D(A) {
    switch (A.schemaId) {
      case "auto":
        return z;
      case "id":
        return F;
      default:
        return j;
    }
  }
  function F(A) {
    return A.$id && this.logger.warn("schema $id ignored", A.$id), A.id;
  }
  function j(A) {
    return A.id && this.logger.warn("schema id ignored", A.id), A.$id;
  }
  function z(A) {
    if (A.$id && A.id && A.$id != A.id)
      throw new Error("schema $id is different from id");
    return A.$id || A.id;
  }
  function Y(A, N) {
    if (A = A || this.errors, !A) return "No errors";
    N = N || {};
    for (var H = N.separator === void 0 ? ", " : N.separator, re = N.dataVar === void 0 ? "data" : N.dataVar, L = "", U = 0; U < A.length; U++) {
      var oe = A[U];
      oe && (L += re + oe.dataPath + " " + oe.message + H);
    }
    return L.slice(0, -H.length);
  }
  function Q(A, N) {
    return typeof N == "string" && (N = new RegExp(N)), this._formats[A] = N, this;
  }
  function G(A) {
    var N;
    if (A._opts.$data && (N = _u, A.addMetaSchema(N, N.$id, !0)), A._opts.meta !== !1) {
      var H = qo;
      A._opts.$data && (H = i(H, d)), A.addMetaSchema(H, f, !0), A._refs["http://json-schema.org/schema"] = f;
    }
  }
  function ee(A) {
    var N = A._opts.schemas;
    if (N)
      if (Array.isArray(N)) A.addSchema(N);
      else for (var H in N) A.addSchema(N[H], H);
  }
  function ae(A) {
    for (var N in A._opts.formats) {
      var H = A._opts.formats[N];
      A.addFormat(N, H);
    }
  }
  function Ne(A) {
    for (var N in A._opts.keywords) {
      var H = A._opts.keywords[N];
      A.addKeyword(N, H);
    }
  }
  function De(A, N) {
    if (A._schemas[N] || A._refs[N])
      throw new Error('schema with key or id "' + N + '" already exists');
  }
  function $e(A) {
    for (var N = u.copy(A._opts), H = 0; H < v.length; H++)
      delete N[v[H]];
    return N;
  }
  function Ce(A) {
    var N = A._opts.logger;
    if (N === !1)
      A.logger = { log: Ze, warn: Ze, error: Ze };
    else {
      if (N === void 0 && (N = console), !(typeof N == "object" && N.log && N.warn && N.error))
        throw new Error("logger must implement log, warn and error methods");
      A.logger = N;
    }
  }
  function Ze() {
  }
  return Ka;
}
var bu = wu();
const Pu = /* @__PURE__ */ fi(bu);
class Eu extends Cc {
  /**
   * Initializes this client with the given name and version information.
   */
  constructor(e, r) {
    var a;
    super(r), this._clientInfo = e, this._cachedToolOutputValidators = /* @__PURE__ */ new Map(), this._capabilities = (a = r == null ? void 0 : r.capabilities) !== null && a !== void 0 ? a : {}, this._ajv = new Pu();
  }
  /**
   * Registers new capabilities. This can only be called before connecting to a transport.
   *
   * The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
   */
  registerCapabilities(e) {
    if (this.transport)
      throw new Error("Cannot register capabilities after connecting to transport");
    this._capabilities = xc(this._capabilities, e);
  }
  assertCapability(e, r) {
    var a;
    if (!(!((a = this._serverCapabilities) === null || a === void 0) && a[e]))
      throw new Error(`Server does not support ${e} (required for ${r})`);
  }
  async connect(e, r) {
    if (await super.connect(e), e.sessionId === void 0)
      try {
        const a = await this.request({
          method: "initialize",
          params: {
            protocolVersion: Yr,
            capabilities: this._capabilities,
            clientInfo: this._clientInfo
          }
        }, bo, r);
        if (a === void 0)
          throw new Error(`Server sent invalid initialize result: ${a}`);
        if (!Rl.includes(a.protocolVersion))
          throw new Error(`Server's protocol version is not supported: ${a.protocolVersion}`);
        this._serverCapabilities = a.capabilities, this._serverVersion = a.serverInfo, e.setProtocolVersion && e.setProtocolVersion(a.protocolVersion), this._instructions = a.instructions, await this.notification({
          method: "notifications/initialized"
        });
      } catch (a) {
        throw this.close(), a;
      }
  }
  /**
   * After initialization has completed, this will be populated with the server's reported capabilities.
   */
  getServerCapabilities() {
    return this._serverCapabilities;
  }
  /**
   * After initialization has completed, this will be populated with information about the server's name and version.
   */
  getServerVersion() {
    return this._serverVersion;
  }
  /**
   * After initialization has completed, this may be populated with information about the server's instructions.
   */
  getInstructions() {
    return this._instructions;
  }
  assertCapabilityForMethod(e) {
    var r, a, t, n, o;
    switch (e) {
      case "logging/setLevel":
        if (!(!((r = this._serverCapabilities) === null || r === void 0) && r.logging))
          throw new Error(`Server does not support logging (required for ${e})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!(!((a = this._serverCapabilities) === null || a === void 0) && a.prompts))
          throw new Error(`Server does not support prompts (required for ${e})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
      case "resources/subscribe":
      case "resources/unsubscribe":
        if (!(!((t = this._serverCapabilities) === null || t === void 0) && t.resources))
          throw new Error(`Server does not support resources (required for ${e})`);
        if (e === "resources/subscribe" && !this._serverCapabilities.resources.subscribe)
          throw new Error(`Server does not support resource subscriptions (required for ${e})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!(!((n = this._serverCapabilities) === null || n === void 0) && n.tools))
          throw new Error(`Server does not support tools (required for ${e})`);
        break;
      case "completion/complete":
        if (!(!((o = this._serverCapabilities) === null || o === void 0) && o.completions))
          throw new Error(`Server does not support completions (required for ${e})`);
        break;
    }
  }
  assertNotificationCapability(e) {
    var r;
    switch (e) {
      case "notifications/roots/list_changed":
        if (!(!((r = this._capabilities.roots) === null || r === void 0) && r.listChanged))
          throw new Error(`Client does not support roots list changed notifications (required for ${e})`);
        break;
    }
  }
  assertRequestHandlerCapability(e) {
    switch (e) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling)
          throw new Error(`Client does not support sampling capability (required for ${e})`);
        break;
      case "elicitation/create":
        if (!this._capabilities.elicitation)
          throw new Error(`Client does not support elicitation capability (required for ${e})`);
        break;
      case "roots/list":
        if (!this._capabilities.roots)
          throw new Error(`Client does not support roots capability (required for ${e})`);
        break;
    }
  }
  async ping(e) {
    return this.request({ method: "ping" }, Zt, e);
  }
  async complete(e, r) {
    return this.request({ method: "completion/complete", params: e }, Mo, r);
  }
  async setLoggingLevel(e, r) {
    return this.request({ method: "logging/setLevel", params: { level: e } }, Zt, r);
  }
  async getPrompt(e, r) {
    return this.request({ method: "prompts/get", params: e }, $o, r);
  }
  async listPrompts(e, r) {
    return this.request({ method: "prompts/list", params: e }, ko, r);
  }
  async listResources(e, r) {
    return this.request({ method: "resources/list", params: e }, Ao, r);
  }
  async listResourceTemplates(e, r) {
    return this.request({ method: "resources/templates/list", params: e }, Ro, r);
  }
  async readResource(e, r) {
    return this.request({ method: "resources/read", params: e }, To, r);
  }
  async subscribeResource(e, r) {
    return this.request({ method: "resources/subscribe", params: e }, Zt, r);
  }
  async unsubscribeResource(e, r) {
    return this.request({ method: "resources/unsubscribe", params: e }, Zt, r);
  }
  async callTool(e, r = xs, a) {
    const t = await this.request({ method: "tools/call", params: e }, r, a), n = this.getToolOutputValidator(e.name);
    if (n) {
      if (!t.structuredContent && !t.isError)
        throw new Pt(lt.InvalidRequest, `Tool ${e.name} has an output schema but did not return structured content`);
      if (t.structuredContent)
        try {
          if (!n(t.structuredContent))
            throw new Pt(lt.InvalidParams, `Structured content does not match the tool's output schema: ${this._ajv.errorsText(n.errors)}`);
        } catch (o) {
          throw o instanceof Pt ? o : new Pt(lt.InvalidParams, `Failed to validate structured content: ${o instanceof Error ? o.message : String(o)}`);
        }
    }
    return t;
  }
  cacheToolOutputSchemas(e) {
    this._cachedToolOutputValidators.clear();
    for (const r of e)
      if (r.outputSchema)
        try {
          const a = this._ajv.compile(r.outputSchema);
          this._cachedToolOutputValidators.set(r.name, a);
        } catch {
        }
  }
  getToolOutputValidator(e) {
    return this._cachedToolOutputValidators.get(e);
  }
  async listTools(e, r) {
    const a = await this.request({ method: "tools/list", params: e }, Oo, r);
    return this.cacheToolOutputSchemas(a.tools), a;
  }
  async sendRootsListChanged() {
    return this.notification({ method: "notifications/roots/list_changed" });
  }
}
class Uo {
  constructor() {
    K(this, "listeners", /* @__PURE__ */ new Map());
    K(this, "maxListeners", 100);
  }
  on(e, r) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set());
    const a = this.listeners.get(e);
    return a.size >= this.maxListeners && console.warn(`EventEmitter: Maximum listeners (${this.maxListeners}) exceeded for event '${String(e)}'`), a.add(r), this;
  }
  off(e, r) {
    const a = this.listeners.get(e);
    return a && (a.delete(r), a.size === 0 && this.listeners.delete(e)), this;
  }
  once(e, r) {
    const a = (t) => (this.off(e, a), r(t));
    return this.on(e, a);
  }
  emit(e, r) {
    const a = this.listeners.get(e);
    return !a || a.size === 0 ? !1 : (a.forEach(async (t) => {
      try {
        await t(r);
      } catch (n) {
        console.error(`EventEmitter: Error in listener for event '${String(e)}':`, n);
      }
    }), !0);
  }
  removeAllListeners(e) {
    return e !== void 0 ? this.listeners.delete(e) : this.listeners.clear(), this;
  }
  listenerCount(e) {
    var r;
    return ((r = this.listeners.get(e)) == null ? void 0 : r.size) ?? 0;
  }
  eventNames() {
    return Array.from(this.listeners.keys());
  }
  setMaxListeners(e) {
    return this.maxListeners = Math.max(0, e), this;
  }
  getMaxListeners() {
    return this.maxListeners;
  }
}
class Qn extends Error {
  constructor(e, r) {
    super(e), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Ya(s) {
}
function zo(s) {
  if (typeof s == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: e = Ya, onError: r = Ya, onRetry: a = Ya, onComment: t } = s;
  let n = "", o = !0, i, u = "", c = "";
  function h(g) {
    const y = o ? g.replace(/^\xEF\xBB\xBF/, "") : g, [w, M] = Su(`${n}${y}`);
    for (const O of w)
      f(O);
    n = M, o = !1;
  }
  function f(g) {
    if (g === "") {
      d();
      return;
    }
    if (g.startsWith(":")) {
      t && t(g.slice(g.startsWith(": ") ? 2 : 1));
      return;
    }
    const y = g.indexOf(":");
    if (y !== -1) {
      const w = g.slice(0, y), M = g[y + 1] === " " ? 2 : 1, O = g.slice(y + M);
      v(w, O, g);
      return;
    }
    v(g, "", g);
  }
  function v(g, y, w) {
    switch (g) {
      case "event":
        c = y;
        break;
      case "data":
        u = `${u}${y}
`;
        break;
      case "id":
        i = y.includes("\0") ? void 0 : y;
        break;
      case "retry":
        /^\d+$/.test(y) ? a(parseInt(y, 10)) : r(
          new Qn(`Invalid \`retry\` value: "${y}"`, {
            type: "invalid-retry",
            value: y,
            line: w
          })
        );
        break;
      default:
        r(
          new Qn(
            `Unknown field "${g.length > 20 ? `${g.slice(0, 20)}…` : g}"`,
            { type: "unknown-field", field: g, value: y, line: w }
          )
        );
        break;
    }
  }
  function d() {
    u.length > 0 && e({
      id: i,
      event: c || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: u.endsWith(`
`) ? u.slice(0, -1) : u
    }), i = void 0, u = "", c = "";
  }
  function m(g = {}) {
    n && g.consume && f(n), o = !0, i = void 0, u = "", c = "", n = "";
  }
  return { feed: h, reset: m };
}
function Su(s) {
  const e = [];
  let r = "", a = 0;
  for (; a < s.length; ) {
    const t = s.indexOf("\r", a), n = s.indexOf(`
`, a);
    let o = -1;
    if (t !== -1 && n !== -1 ? o = Math.min(t, n) : t !== -1 ? o = t : n !== -1 && (o = n), o === -1) {
      r = s.slice(a);
      break;
    } else {
      const i = s.slice(a, o);
      e.push(i), a = o + 1, s[a - 1] === "\r" && s[a] === `
` && a++;
    }
  }
  return [e, r];
}
class Jn extends Event {
  /**
   * Constructs a new `ErrorEvent` instance. This is typically not called directly,
   * but rather emitted by the `EventSource` object when an error occurs.
   *
   * @param type - The type of the event (should be "error")
   * @param errorEventInitDict - Optional properties to include in the error event
   */
  constructor(e, r) {
    var a, t;
    super(e), this.code = (a = r == null ? void 0 : r.code) != null ? a : void 0, this.message = (t = r == null ? void 0 : r.message) != null ? t : void 0;
  }
  /**
   * Node.js "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Node.js when you `console.log` an instance of this class.
   *
   * @param _depth - The current depth
   * @param options - The options passed to `util.inspect`
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @returns A string representation of the error
   */
  [Symbol.for("nodejs.util.inspect.custom")](e, r, a) {
    return a(Gn(this), r);
  }
  /**
   * Deno "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Deno when you `console.log` an instance of this class.
   *
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @param options - The options passed to `Deno.inspect`
   * @returns A string representation of the error
   */
  [Symbol.for("Deno.customInspect")](e, r) {
    return e(Gn(this), r);
  }
}
function Cu(s) {
  const e = globalThis.DOMException;
  return typeof e == "function" ? new e(s, "SyntaxError") : new SyntaxError(s);
}
function ls(s) {
  return s instanceof Error ? "errors" in s && Array.isArray(s.errors) ? s.errors.map(ls).join(", ") : "cause" in s && s.cause instanceof Error ? `${s}: ${ls(s.cause)}` : s.message : `${s}`;
}
function Gn(s) {
  return {
    type: s.type,
    message: s.message,
    code: s.code,
    defaultPrevented: s.defaultPrevented,
    cancelable: s.cancelable,
    timeStamp: s.timeStamp
  };
}
var Vo = (s) => {
  throw TypeError(s);
}, ks = (s, e, r) => e.has(s) || Vo("Cannot " + r), ce = (s, e, r) => (ks(s, e, "read from private field"), r ? r.call(s) : e.get(s)), ke = (s, e, r) => e.has(s) ? Vo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, r), be = (s, e, r, a) => (ks(s, e, "write to private field"), e.set(s, r), r), vt = (s, e, r) => (ks(s, e, "access private method"), r), Ve, It, zt, qr, Jr, hr, Wt, fr, bt, Vt, Jt, Ht, ur, Xe, cs, us, ds, Kn, hs, fs, dr, ms, ps;
class Ur extends EventTarget {
  constructor(e, r) {
    var a, t;
    super(), ke(this, Xe), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, ke(this, Ve), ke(this, It), ke(this, zt), ke(this, qr), ke(this, Jr), ke(this, hr), ke(this, Wt), ke(this, fr, null), ke(this, bt), ke(this, Vt), ke(this, Jt, null), ke(this, Ht, null), ke(this, ur, null), ke(this, us, async (n) => {
      var o;
      ce(this, Vt).reset();
      const { body: i, redirected: u, status: c, headers: h } = n;
      if (c === 204) {
        vt(this, Xe, dr).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (u ? be(this, zt, new URL(n.url)) : be(this, zt, void 0), c !== 200) {
        vt(this, Xe, dr).call(this, `Non-200 status code (${c})`, c);
        return;
      }
      if (!(h.get("content-type") || "").startsWith("text/event-stream")) {
        vt(this, Xe, dr).call(this, 'Invalid content type, expected "text/event-stream"', c);
        return;
      }
      if (ce(this, Ve) === this.CLOSED)
        return;
      be(this, Ve, this.OPEN);
      const f = new Event("open");
      if ((o = ce(this, ur)) == null || o.call(this, f), this.dispatchEvent(f), typeof i != "object" || !i || !("getReader" in i)) {
        vt(this, Xe, dr).call(this, "Invalid response body, expected a web ReadableStream", c), this.close();
        return;
      }
      const v = new TextDecoder(), d = i.getReader();
      let m = !0;
      do {
        const { done: g, value: y } = await d.read();
        y && ce(this, Vt).feed(v.decode(y, { stream: !g })), g && (m = !1, ce(this, Vt).reset(), vt(this, Xe, ms).call(this));
      } while (m);
    }), ke(this, ds, (n) => {
      be(this, bt, void 0), !(n.name === "AbortError" || n.type === "aborted") && vt(this, Xe, ms).call(this, ls(n));
    }), ke(this, hs, (n) => {
      typeof n.id == "string" && be(this, fr, n.id);
      const o = new MessageEvent(n.event || "message", {
        data: n.data,
        origin: ce(this, zt) ? ce(this, zt).origin : ce(this, It).origin,
        lastEventId: n.id || ""
      });
      ce(this, Ht) && (!n.event || n.event === "message") && ce(this, Ht).call(this, o), this.dispatchEvent(o);
    }), ke(this, fs, (n) => {
      be(this, hr, n);
    }), ke(this, ps, () => {
      be(this, Wt, void 0), ce(this, Ve) === this.CONNECTING && vt(this, Xe, cs).call(this);
    });
    try {
      if (e instanceof URL)
        be(this, It, e);
      else if (typeof e == "string")
        be(this, It, new URL(e, xu()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw Cu("An invalid or illegal string was specified");
    }
    be(this, Vt, zo({
      onEvent: ce(this, hs),
      onRetry: ce(this, fs)
    })), be(this, Ve, this.CONNECTING), be(this, hr, 3e3), be(this, Jr, (a = r == null ? void 0 : r.fetch) != null ? a : globalThis.fetch), be(this, qr, (t = r == null ? void 0 : r.withCredentials) != null ? t : !1), vt(this, Xe, cs).call(this);
  }
  /**
   * Returns the state of this EventSource object's connection. It can have the values described below.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/readyState)
   *
   * Note: typed as `number` instead of `0 | 1 | 2` for compatibility with the `EventSource` interface,
   * defined in the TypeScript `dom` library.
   *
   * @public
   */
  get readyState() {
    return ce(this, Ve);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return ce(this, It).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return ce(this, qr);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return ce(this, Jt);
  }
  set onerror(e) {
    be(this, Jt, e);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return ce(this, Ht);
  }
  set onmessage(e) {
    be(this, Ht, e);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return ce(this, ur);
  }
  set onopen(e) {
    be(this, ur, e);
  }
  addEventListener(e, r, a) {
    const t = r;
    super.addEventListener(e, t, a);
  }
  removeEventListener(e, r, a) {
    const t = r;
    super.removeEventListener(e, t, a);
  }
  /**
   * Aborts any instances of the fetch algorithm started for this EventSource object, and sets the readyState attribute to CLOSED.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/close)
   *
   * @public
   */
  close() {
    ce(this, Wt) && clearTimeout(ce(this, Wt)), ce(this, Ve) !== this.CLOSED && (ce(this, bt) && ce(this, bt).abort(), be(this, Ve, this.CLOSED), be(this, bt, void 0));
  }
}
Ve = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
cs = function() {
  be(this, Ve, this.CONNECTING), be(this, bt, new AbortController()), ce(this, Jr)(ce(this, It), vt(this, Xe, Kn).call(this)).then(ce(this, us)).catch(ce(this, ds));
}, us = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/
Kn = function() {
  var s;
  const e = {
    // [spec] Let `corsAttributeState` be `Anonymous`…
    // [spec] …will have their mode set to "cors"…
    mode: "cors",
    redirect: "follow",
    headers: { Accept: "text/event-stream", ...ce(this, fr) ? { "Last-Event-ID": ce(this, fr) } : void 0 },
    cache: "no-store",
    signal: (s = ce(this, bt)) == null ? void 0 : s.signal
  };
  return "window" in globalThis && (e.credentials = this.withCredentials ? "include" : "same-origin"), e;
}, hs = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), /**
* Handles the process referred to in the EventSource specification as "failing a connection".
*
* @param error - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
dr = function(s, e) {
  var r;
  ce(this, Ve) !== this.CLOSED && be(this, Ve, this.CLOSED);
  const a = new Jn("error", { code: e, message: s });
  (r = ce(this, Jt)) == null || r.call(this, a), this.dispatchEvent(a);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
ms = function(s, e) {
  var r;
  if (ce(this, Ve) === this.CLOSED)
    return;
  be(this, Ve, this.CONNECTING);
  const a = new Jn("error", { code: e, message: s });
  (r = ce(this, Jt)) == null || r.call(this, a), this.dispatchEvent(a), be(this, Wt, setTimeout(ce(this, ps), ce(this, hr)));
}, ps = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/
Ur.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/
Ur.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/
Ur.CLOSED = 2;
function xu() {
  const s = "document" in globalThis ? globalThis.document : void 0;
  return s && typeof s == "object" && "baseURI" in s && typeof s.baseURI == "string" ? s.baseURI : void 0;
}
let Is;
Is = globalThis.crypto;
async function Au(s) {
  return (await Is).getRandomValues(new Uint8Array(s));
}
async function Ru(s) {
  const e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
  let r = "";
  const a = await Au(s);
  for (let t = 0; t < s; t++) {
    const n = a[t] % e.length;
    r += e[n];
  }
  return r;
}
async function Tu(s) {
  return await Ru(s);
}
async function ku(s) {
  const e = await (await Is).subtle.digest("SHA-256", new TextEncoder().encode(s));
  return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function Iu(s) {
  if (s || (s = 43), s < 43 || s > 128)
    throw `Expected a length between 43 and 128. Received ${s}.`;
  const e = await Tu(s), r = await ku(e);
  return {
    code_verifier: e,
    code_challenge: r
  };
}
const $u = l.object({
  resource: l.string().url(),
  authorization_servers: l.array(l.string().url()).optional(),
  jwks_uri: l.string().url().optional(),
  scopes_supported: l.array(l.string()).optional(),
  bearer_methods_supported: l.array(l.string()).optional(),
  resource_signing_alg_values_supported: l.array(l.string()).optional(),
  resource_name: l.string().optional(),
  resource_documentation: l.string().optional(),
  resource_policy_uri: l.string().url().optional(),
  resource_tos_uri: l.string().url().optional(),
  tls_client_certificate_bound_access_tokens: l.boolean().optional(),
  authorization_details_types_supported: l.array(l.string()).optional(),
  dpop_signing_alg_values_supported: l.array(l.string()).optional(),
  dpop_bound_access_tokens_required: l.boolean().optional()
}).passthrough(), Ou = l.object({
  issuer: l.string(),
  authorization_endpoint: l.string(),
  token_endpoint: l.string(),
  registration_endpoint: l.string().optional(),
  scopes_supported: l.array(l.string()).optional(),
  response_types_supported: l.array(l.string()),
  response_modes_supported: l.array(l.string()).optional(),
  grant_types_supported: l.array(l.string()).optional(),
  token_endpoint_auth_methods_supported: l.array(l.string()).optional(),
  token_endpoint_auth_signing_alg_values_supported: l.array(l.string()).optional(),
  service_documentation: l.string().optional(),
  revocation_endpoint: l.string().optional(),
  revocation_endpoint_auth_methods_supported: l.array(l.string()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: l.array(l.string()).optional(),
  introspection_endpoint: l.string().optional(),
  introspection_endpoint_auth_methods_supported: l.array(l.string()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: l.array(l.string()).optional(),
  code_challenge_methods_supported: l.array(l.string()).optional()
}).passthrough(), Ho = l.object({
  access_token: l.string(),
  token_type: l.string(),
  expires_in: l.number().optional(),
  scope: l.string().optional(),
  refresh_token: l.string().optional()
}).strip();
l.object({
  error: l.string(),
  error_description: l.string().optional(),
  error_uri: l.string().optional()
});
const Du = l.object({
  redirect_uris: l.array(l.string()).refine((s) => s.every((e) => URL.canParse(e)), { message: "redirect_uris must contain valid URLs" }),
  token_endpoint_auth_method: l.string().optional(),
  grant_types: l.array(l.string()).optional(),
  response_types: l.array(l.string()).optional(),
  client_name: l.string().optional(),
  client_uri: l.string().optional(),
  logo_uri: l.string().optional(),
  scope: l.string().optional(),
  contacts: l.array(l.string()).optional(),
  tos_uri: l.string().optional(),
  policy_uri: l.string().optional(),
  jwks_uri: l.string().optional(),
  jwks: l.any().optional(),
  software_id: l.string().optional(),
  software_version: l.string().optional()
}).strip(), Fu = l.object({
  client_id: l.string(),
  client_secret: l.string().optional(),
  client_id_issued_at: l.number().optional(),
  client_secret_expires_at: l.number().optional()
}).strip(), Mu = Du.merge(Fu);
l.object({
  error: l.string(),
  error_description: l.string().optional()
}).strip();
l.object({
  token: l.string(),
  token_type_hint: l.string().optional()
}).strip();
function Nu(s) {
  const e = typeof s == "string" ? new URL(s) : new URL(s.href);
  return e.hash = "", e;
}
function ju({ requestedResource: s, configuredResource: e }) {
  const r = typeof s == "string" ? new URL(s) : new URL(s.href), a = typeof e == "string" ? new URL(e) : new URL(e.href);
  if (r.origin !== a.origin || r.pathname.length < a.pathname.length)
    return !1;
  const t = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", n = a.pathname.endsWith("/") ? a.pathname : a.pathname + "/";
  return t.startsWith(n);
}
class ct extends Error {
  constructor(e) {
    super(e ?? "Unauthorized");
  }
}
async function Gt(s, { serverUrl: e, authorizationCode: r, scope: a, resourceMetadataUrl: t }) {
  let n, o = e;
  try {
    n = await qu(e, { resourceMetadataUrl: t }), n.authorization_servers && n.authorization_servers.length > 0 && (o = n.authorization_servers[0]);
  } catch {
  }
  const i = await Lu(e, s, n), u = await Uu(o);
  let c = await Promise.resolve(s.clientInformation());
  if (!c) {
    if (r !== void 0)
      throw new Error("Existing OAuth client information is required when exchanging an authorization code");
    if (!s.saveClientInformation)
      throw new Error("OAuth client information must be saveable for dynamic registration");
    const m = await Bu(o, {
      metadata: u,
      clientMetadata: s.clientMetadata
    });
    await s.saveClientInformation(m), c = m;
  }
  if (r !== void 0) {
    const m = await s.codeVerifier(), g = await Vu(o, {
      metadata: u,
      clientInformation: c,
      authorizationCode: r,
      codeVerifier: m,
      redirectUri: s.redirectUrl,
      resource: i
    });
    return await s.saveTokens(g), "AUTHORIZED";
  }
  const h = await s.tokens();
  if (h != null && h.refresh_token)
    try {
      const m = await Hu(o, {
        metadata: u,
        clientInformation: c,
        refreshToken: h.refresh_token,
        resource: i
      });
      return await s.saveTokens(m), "AUTHORIZED";
    } catch {
    }
  const f = s.state ? await s.state() : void 0, { authorizationUrl: v, codeVerifier: d } = await zu(o, {
    metadata: u,
    clientInformation: c,
    state: f,
    redirectUrl: s.redirectUrl,
    scope: a || s.clientMetadata.scope,
    resource: i
  });
  return await s.saveCodeVerifier(d), await s.redirectToAuthorization(v), "REDIRECT";
}
async function Lu(s, e, r) {
  let a = Nu(s);
  if (e.validateResourceURL)
    return await e.validateResourceURL(a, r == null ? void 0 : r.resource);
  if (r)
    if (ju({ requestedResource: a, configuredResource: r.resource }))
      a = new URL(r.resource);
    else
      throw new Error(`Protected resource ${r.resource} does not match expected ${a} (or origin)`);
  return a;
}
function gs(s) {
  const e = s.headers.get("WWW-Authenticate");
  if (!e)
    return;
  const [r, a] = e.split(" ");
  if (r.toLowerCase() !== "bearer" || !a)
    return;
  const n = /resource_metadata="([^"]*)"/.exec(e);
  if (n)
    try {
      return new URL(n[1]);
    } catch {
      return;
    }
}
async function qu(s, e) {
  var r;
  let a;
  e != null && e.resourceMetadataUrl ? a = new URL(e == null ? void 0 : e.resourceMetadataUrl) : a = new URL("/.well-known/oauth-protected-resource", s);
  let t;
  try {
    t = await fetch(a, {
      headers: {
        "MCP-Protocol-Version": (r = e == null ? void 0 : e.protocolVersion) !== null && r !== void 0 ? r : Yr
      }
    });
  } catch (n) {
    if (n instanceof TypeError)
      t = await fetch(a);
    else
      throw n;
  }
  if (t.status === 404)
    throw new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!t.ok)
    throw new Error(`HTTP ${t.status} trying to load well-known OAuth protected resource metadata.`);
  return $u.parse(await t.json());
}
async function Uu(s, e) {
  var r;
  const a = new URL("/.well-known/oauth-authorization-server", s);
  let t;
  try {
    t = await fetch(a, {
      headers: {
        "MCP-Protocol-Version": (r = e == null ? void 0 : e.protocolVersion) !== null && r !== void 0 ? r : Yr
      }
    });
  } catch (n) {
    if (n instanceof TypeError)
      t = await fetch(a);
    else
      throw n;
  }
  if (t.status !== 404) {
    if (!t.ok)
      throw new Error(`HTTP ${t.status} trying to load well-known OAuth metadata`);
    return Ou.parse(await t.json());
  }
}
async function zu(s, { metadata: e, clientInformation: r, redirectUrl: a, scope: t, state: n, resource: o }) {
  const i = "code", u = "S256";
  let c;
  if (e) {
    if (c = new URL(e.authorization_endpoint), !e.response_types_supported.includes(i))
      throw new Error(`Incompatible auth server: does not support response type ${i}`);
    if (!e.code_challenge_methods_supported || !e.code_challenge_methods_supported.includes(u))
      throw new Error(`Incompatible auth server: does not support code challenge method ${u}`);
  } else
    c = new URL("/authorize", s);
  const h = await Iu(), f = h.code_verifier, v = h.code_challenge;
  return c.searchParams.set("response_type", i), c.searchParams.set("client_id", r.client_id), c.searchParams.set("code_challenge", v), c.searchParams.set("code_challenge_method", u), c.searchParams.set("redirect_uri", String(a)), n && c.searchParams.set("state", n), t && c.searchParams.set("scope", t), o && c.searchParams.set("resource", o.href), { authorizationUrl: c, codeVerifier: f };
}
async function Vu(s, { metadata: e, clientInformation: r, authorizationCode: a, codeVerifier: t, redirectUri: n, resource: o }) {
  const i = "authorization_code";
  let u;
  if (e) {
    if (u = new URL(e.token_endpoint), e.grant_types_supported && !e.grant_types_supported.includes(i))
      throw new Error(`Incompatible auth server: does not support grant type ${i}`);
  } else
    u = new URL("/token", s);
  const c = new URLSearchParams({
    grant_type: i,
    client_id: r.client_id,
    code: a,
    code_verifier: t,
    redirect_uri: String(n)
  });
  r.client_secret && c.set("client_secret", r.client_secret), o && c.set("resource", o.href);
  const h = await fetch(u, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: c
  });
  if (!h.ok)
    throw new Error(`Token exchange failed: HTTP ${h.status}`);
  return Ho.parse(await h.json());
}
async function Hu(s, { metadata: e, clientInformation: r, refreshToken: a, resource: t }) {
  const n = "refresh_token";
  let o;
  if (e) {
    if (o = new URL(e.token_endpoint), e.grant_types_supported && !e.grant_types_supported.includes(n))
      throw new Error(`Incompatible auth server: does not support grant type ${n}`);
  } else
    o = new URL("/token", s);
  const i = new URLSearchParams({
    grant_type: n,
    client_id: r.client_id,
    refresh_token: a
  });
  r.client_secret && i.set("client_secret", r.client_secret), t && i.set("resource", t.href);
  const u = await fetch(o, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: i
  });
  if (!u.ok)
    throw new Error(`Token refresh failed: HTTP ${u.status}`);
  return Ho.parse({ refresh_token: a, ...await u.json() });
}
async function Bu(s, { metadata: e, clientMetadata: r }) {
  let a;
  if (e) {
    if (!e.registration_endpoint)
      throw new Error("Incompatible auth server: does not support dynamic client registration");
    a = new URL(e.registration_endpoint);
  } else
    a = new URL("/register", s);
  const t = await fetch(a, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(r)
  });
  if (!t.ok)
    throw new Error(`Dynamic client registration failed: HTTP ${t.status}`);
  return Mu.parse(await t.json());
}
class Zu extends Error {
  constructor(e, r, a) {
    super(`SSE error: ${r}`), this.code = e, this.event = a;
  }
}
class Wu {
  constructor(e, r) {
    this._url = e, this._resourceMetadataUrl = void 0, this._eventSourceInit = r == null ? void 0 : r.eventSourceInit, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider;
  }
  async _authThenStart() {
    var e;
    if (!this._authProvider)
      throw new ct("No auth provider");
    let r;
    try {
      r = await Gt(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl });
    } catch (a) {
      throw (e = this.onerror) === null || e === void 0 || e.call(this, a), a;
    }
    if (r !== "AUTHORIZED")
      throw new ct();
    return await this._startOrAuth();
  }
  async _commonHeaders() {
    var e;
    const r = {
      ...(e = this._requestInit) === null || e === void 0 ? void 0 : e.headers
    };
    if (this._authProvider) {
      const a = await this._authProvider.tokens();
      a && (r.Authorization = `Bearer ${a.access_token}`);
    }
    return this._protocolVersion && (r["mcp-protocol-version"] = this._protocolVersion), r;
  }
  _startOrAuth() {
    var e;
    const r = ((e = this === null || this === void 0 ? void 0 : this._eventSourceInit) === null || e === void 0 ? void 0 : e.fetch) || fetch;
    return new Promise((a, t) => {
      this._eventSource = new Ur(this._url.href, {
        ...this._eventSourceInit,
        fetch: async (n, o) => {
          const i = await this._commonHeaders(), u = await r(n, {
            ...o,
            headers: new Headers({
              ...i,
              Accept: "text/event-stream"
            })
          });
          return u.status === 401 && u.headers.has("www-authenticate") && (this._resourceMetadataUrl = gs(u)), u;
        }
      }), this._abortController = new AbortController(), this._eventSource.onerror = (n) => {
        var o;
        if (n.code === 401 && this._authProvider) {
          this._authThenStart().then(a, t);
          return;
        }
        const i = new Zu(n.code, n.message, n);
        t(i), (o = this.onerror) === null || o === void 0 || o.call(this, i);
      }, this._eventSource.onopen = () => {
      }, this._eventSource.addEventListener("endpoint", (n) => {
        var o;
        const i = n;
        try {
          if (this._endpoint = new URL(i.data, this._url), this._endpoint.origin !== this._url.origin)
            throw new Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
        } catch (u) {
          t(u), (o = this.onerror) === null || o === void 0 || o.call(this, u), this.close();
          return;
        }
        a();
      }), this._eventSource.onmessage = (n) => {
        var o, i;
        const u = n;
        let c;
        try {
          c = Lr.parse(JSON.parse(u.data));
        } catch (h) {
          (o = this.onerror) === null || o === void 0 || o.call(this, h);
          return;
        }
        (i = this.onmessage) === null || i === void 0 || i.call(this, c);
      };
    });
  }
  async start() {
    if (this._eventSource)
      throw new Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return await this._startOrAuth();
  }
  /**
   * Call this method after the user has finished authorizing via their user agent and is redirected back to the MCP client application. This will exchange the authorization code for an access token, enabling the next connection attempt to successfully auth.
   */
  async finishAuth(e) {
    if (!this._authProvider)
      throw new ct("No auth provider");
    if (await Gt(this._authProvider, { serverUrl: this._url, authorizationCode: e, resourceMetadataUrl: this._resourceMetadataUrl }) !== "AUTHORIZED")
      throw new ct("Failed to authorize");
  }
  async close() {
    var e, r, a;
    (e = this._abortController) === null || e === void 0 || e.abort(), (r = this._eventSource) === null || r === void 0 || r.close(), (a = this.onclose) === null || a === void 0 || a.call(this);
  }
  async send(e) {
    var r, a;
    if (!this._endpoint)
      throw new Error("Not connected");
    try {
      const t = await this._commonHeaders(), n = new Headers(t);
      n.set("content-type", "application/json");
      const o = {
        ...this._requestInit,
        method: "POST",
        headers: n,
        body: JSON.stringify(e),
        signal: (r = this._abortController) === null || r === void 0 ? void 0 : r.signal
      }, i = await fetch(this._endpoint, o);
      if (!i.ok) {
        if (i.status === 401 && this._authProvider) {
          if (this._resourceMetadataUrl = gs(i), await Gt(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl }) !== "AUTHORIZED")
            throw new ct();
          return this.send(e);
        }
        const u = await i.text().catch(() => null);
        throw new Error(`Error POSTing to endpoint (HTTP ${i.status}): ${u}`);
      }
    } catch (t) {
      throw (a = this.onerror) === null || a === void 0 || a.call(this, t), t;
    }
  }
  setProtocolVersion(e) {
    this._protocolVersion = e;
  }
}
class Bo {
  constructor() {
    K(this, "metadata", {
      name: "SSE Transport Plugin",
      version: "1.0.0",
      transportType: "sse",
      description: "Server-Sent Events transport for MCP protocol",
      author: "MCP SuperAssistant"
    });
    K(this, "config", {});
    K(this, "transport", null);
    K(this, "isConnectedFlag", !1);
    K(this, "connectionPromise", null);
  }
  async initialize(e) {
    this.config = {
      keepAlive: !0,
      connectionTimeout: 5e3,
      readTimeout: 3e4,
      ...e
    }, console.log("[SSEPlugin] Initialized with config:", this.config);
  }
  async connect(e) {
    console.log(`[SSEPlugin] Creating transport for: ${e}`);
    try {
      const r = await this.createConnection(e);
      return this.transport = r, console.log("[SSEPlugin] Transport created successfully"), r;
    } catch (r) {
      throw console.error("[SSEPlugin] Transport creation failed:", r), r;
    }
  }
  async createConnection(e) {
    try {
      const r = new URL(e);
      console.log(`[SSEPlugin] Creating SSE transport for: ${r.toString()}`);
      const a = new Wu(r);
      return console.log("[SSEPlugin] SSE transport created successfully"), a;
    } catch (r) {
      const a = r instanceof Error ? r.message : String(r);
      let t = a;
      throw a.includes("404") ? t = "SSE endpoint not found (404). Verify the server URL and SSE endpoint path." : a.includes("timeout") ? t = "SSE connection timeout. The server may be slow or the endpoint may not support SSE." : a.includes("Failed to fetch") && (t = "SSE connection failed. Check if the server is running and accessible."), new Error(`SSE Plugin: ${t}`);
    }
  }
  async disconnect() {
    if (console.log("[SSEPlugin] Disconnecting..."), this.transport)
      try {
        "close" in this.transport && typeof this.transport.close == "function" && await this.transport.close();
      } catch (e) {
        console.warn("[SSEPlugin] Error during transport cleanup:", e);
      }
    this.transport = null, this.isConnectedFlag = !1, this.connectionPromise = null, console.log("[SSEPlugin] Disconnected");
  }
  isConnected() {
    return this.transport !== null;
  }
  isSupported(e) {
    try {
      const r = new URL(e);
      return r.protocol === "http:" || r.protocol === "https:";
    } catch {
      return !1;
    }
  }
  getDefaultConfig() {
    return {
      keepAlive: !0,
      connectionTimeout: 5e3,
      readTimeout: 3e4,
      headers: {
        Accept: "text/event-stream",
        "Cache-Control": "no-cache"
      }
    };
  }
  async isHealthy() {
    if (!this.isConnected() || !this.transport)
      return !1;
    try {
      return !0;
    } catch (e) {
      return console.warn("[SSEPlugin] Health check failed:", e), !1;
    }
  }
  async callTool(e, r, a) {
    if (!this.isConnected())
      throw new Error("SSE Plugin: Not connected");
    console.log(`[SSEPlugin] Calling tool: ${r}`);
    try {
      const t = await e.callTool({ name: r, arguments: a });
      return console.log(`[SSEPlugin] Tool call completed: ${r}`), t;
    } catch (t) {
      throw console.error(`[SSEPlugin] Tool call failed: ${r}`, t), t;
    }
  }
  async getPrimitives(e) {
    if (!this.isConnected())
      throw new Error("SSE Plugin: Not connected");
    console.log("[SSEPlugin] Getting primitives...");
    try {
      const r = e.getServerCapabilities(), a = [], t = [];
      return r != null && r.resources && t.push(
        e.listResources().then(({ resources: n }) => {
          n.forEach((o) => a.push({ type: "resource", value: o }));
        })
      ), r != null && r.tools && t.push(
        e.listTools().then(({ tools: n }) => {
          n.forEach((o) => a.push({ type: "tool", value: o }));
        })
      ), r != null && r.prompts && t.push(
        e.listPrompts().then(({ prompts: n }) => {
          n.forEach((o) => a.push({ type: "prompt", value: o }));
        })
      ), await Promise.all(t), console.log(`[SSEPlugin] Retrieved ${a.length} primitives`), a;
    } catch (r) {
      throw console.error("[SSEPlugin] Failed to get primitives:", r), r;
    }
  }
}
class Qu {
  constructor(e, r = {}) {
    // Transport interface callbacks - required by MCP client
    K(this, "onmessage");
    K(this, "onclose");
    K(this, "onerror");
    K(this, "ws", null);
    K(this, "url");
    K(this, "options");
    K(this, "messageQueue", []);
    K(this, "isConnected", !1);
    // Removed ping/pong timers - using MCP protocol connection management
    K(this, "eventListeners", /* @__PURE__ */ new Map());
    this.url = e, this.options = {
      protocols: ["mcp-v1"],
      pingInterval: 3e4,
      pongTimeout: 5e3,
      binaryType: "arraybuffer",
      maxReconnectAttempts: 3,
      ...r
    };
  }
  async start() {
    console.log("[WebSocketTransport] Start method called - initiating connection"), await this.connect();
  }
  async connect() {
    if (this.isConnected || this.ws && this.ws.readyState === WebSocket.CONNECTING) {
      console.log("[WebSocketTransport] Already connected or connecting");
      return;
    }
    return new Promise((e, r) => {
      try {
        console.log(`[WebSocketTransport] Connecting to: ${this.url}`), this.ws = new WebSocket(this.url, this.options.protocols), this.ws.binaryType = this.options.binaryType || "arraybuffer";
        const a = setTimeout(() => {
          this.ws && this.ws.readyState === WebSocket.CONNECTING && (this.ws.close(), r(new Error("WebSocket connection timeout")));
        }, 1e4);
        this.ws.onopen = () => {
          clearTimeout(a), console.log("[WebSocketTransport] Connected"), this.isConnected = !0, this.startPingPong(), this.processMessageQueue(), e();
        }, this.ws.onclose = (t) => {
          clearTimeout(a), console.log(`[WebSocketTransport] Disconnected: ${t.code} ${t.reason}`), this.isConnected = !1, this.stopPingPong(), this.emit("close", { code: t.code, reason: t.reason }), this.onclose && this.onclose();
        }, this.ws.onerror = (t) => {
          clearTimeout(a), console.error("[WebSocketTransport] Error:", t), this.isConnected = !1, this.emit("error", t), this.onerror && this.onerror(new Error("WebSocket connection failed")), r(new Error("WebSocket connection failed"));
        }, this.ws.onmessage = (t) => {
          try {
            let n;
            if (typeof t.data == "string")
              n = JSON.parse(t.data);
            else if (t.data instanceof ArrayBuffer) {
              const o = new TextDecoder().decode(t.data);
              n = JSON.parse(o);
            } else {
              console.warn("[WebSocketTransport] Received unknown data type:", typeof t.data);
              return;
            }
            this.emit("message", n), this.onmessage && this.onmessage(n);
          } catch (n) {
            console.error("[WebSocketTransport] Failed to parse message:", n);
            const o = new Error("Failed to parse WebSocket message");
            this.emit("error", o), this.onerror && this.onerror(o);
          }
        };
      } catch (a) {
        r(a);
      }
    });
  }
  async close() {
    console.log("[WebSocketTransport] Closing connection"), this.isConnected = !1, this.stopPingPong(), this.ws && (this.ws.close(1e3, "Normal closure"), this.ws = null);
  }
  async send(e) {
    const r = JSON.stringify(e);
    if (!this.isConnected || !this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.log("[WebSocketTransport] Queuing message (not connected)"), this.messageQueue.push(e);
      return;
    }
    try {
      this.ws.send(r);
    } catch (a) {
      throw console.error("[WebSocketTransport] Failed to send message:", a), this.messageQueue.push(e), a;
    }
  }
  processMessageQueue() {
    if (this.messageQueue.length === 0) return;
    console.log(`[WebSocketTransport] Processing ${this.messageQueue.length} queued messages`);
    const e = [...this.messageQueue];
    this.messageQueue = [], e.forEach((r) => {
      try {
        this.send(r);
      } catch (a) {
        console.error("[WebSocketTransport] Failed to send queued message:", a), this.messageQueue.push(r);
      }
    });
  }
  startPingPong() {
    console.log("[WebSocketTransport] Skipping custom ping/pong - relying on MCP protocol and server-side monitoring");
  }
  stopPingPong() {
  }
  // Removed custom ping/pong methods - using MCP protocol instead
  // Event emitter functionality
  on(e, r) {
    this.eventListeners.has(e) || this.eventListeners.set(e, /* @__PURE__ */ new Set()), this.eventListeners.get(e).add(r);
  }
  off(e, r) {
    const a = this.eventListeners.get(e);
    a && a.delete(r);
  }
  emit(e, r) {
    const a = this.eventListeners.get(e);
    a && a.forEach((t) => {
      try {
        t(r);
      } catch (n) {
        console.error(`[WebSocketTransport] Error in ${e} listener:`, n);
      }
    });
  }
  getReadyState() {
    var e;
    return ((e = this.ws) == null ? void 0 : e.readyState) ?? WebSocket.CLOSED;
  }
  isConnectionOpen() {
    var e;
    return this.isConnected && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN;
  }
}
class Zo {
  constructor() {
    K(this, "metadata", {
      name: "WebSocket Transport Plugin",
      version: "1.0.0",
      transportType: "websocket",
      description: "WebSocket transport for MCP protocol with real-time bidirectional communication",
      author: "MCP SuperAssistant"
    });
    K(this, "config", {});
    K(this, "transport", null);
    K(this, "isConnectedFlag", !1);
    K(this, "connectionPromise", null);
    K(this, "lastPingTime", 0);
    K(this, "disconnectionCallback");
  }
  async initialize(e) {
    this.config = {
      protocols: ["mcp-v1"],
      pingInterval: 3e4,
      pongTimeout: 5e3,
      maxReconnectAttempts: 3,
      binaryType: "arraybuffer",
      ...e
    }, console.log("[WebSocketPlugin] Initialized with config:", this.config);
  }
  async connect(e) {
    console.log(`[WebSocketPlugin] Creating transport for: ${e}`);
    try {
      const r = await this.createConnection(e);
      return this.transport = r, console.log("[WebSocketPlugin] Transport created successfully"), r;
    } catch (r) {
      throw console.error("[WebSocketPlugin] Transport creation failed:", r), r;
    }
  }
  async createConnection(e) {
    try {
      const r = new URL(e);
      if (r.protocol !== "ws:" && r.protocol !== "wss:")
        throw new Error(`Invalid WebSocket protocol: ${r.protocol}. Expected ws: or wss:`);
      console.log(`[WebSocketPlugin] Creating WebSocket transport for: ${r.toString()}`);
      const a = new Qu(r.toString(), {
        protocols: this.config.protocols,
        pingInterval: this.config.pingInterval,
        pongTimeout: this.config.pongTimeout,
        binaryType: this.config.binaryType,
        maxReconnectAttempts: this.config.maxReconnectAttempts
      });
      return a.on("close", (t) => {
        console.log(`[WebSocketPlugin] Transport closed: ${t.code} ${t.reason}`), this.isConnectedFlag = !1, this.handleDisconnection("WebSocket closed", t.code, t.reason);
      }), a.on("error", (t) => {
        console.error("[WebSocketPlugin] Transport error:", t), t.message.includes("Pong timeout") || (this.isConnectedFlag = !1, this.handleDisconnection("WebSocket error", void 0, t.message));
      }), console.log("[WebSocketPlugin] WebSocket transport created successfully"), a;
    } catch (r) {
      const a = r instanceof Error ? r.message : String(r);
      let t = a;
      throw a.includes("timeout") ? t = "WebSocket connection timeout. The server may be slow or unreachable." : a.includes("Failed to construct") ? t = "Invalid WebSocket URL format. Check the URI syntax." : a.includes("connection failed") ? t = "WebSocket connection failed. Check if the server is running and accessible." : a.includes("protocol") && (t = "WebSocket protocol error. The server may not support the requested protocols."), new Error(`WebSocket Plugin: ${t}`);
    }
  }
  async disconnect() {
    if (console.log("[WebSocketPlugin] Disconnecting..."), this.transport)
      try {
        await this.transport.close();
      } catch (e) {
        console.warn("[WebSocketPlugin] Error during transport cleanup:", e);
      }
    this.transport = null, this.isConnectedFlag = !1, this.connectionPromise = null, console.log("[WebSocketPlugin] Disconnected");
  }
  isConnected() {
    return this.transport !== null;
  }
  isSupported(e) {
    try {
      const r = new URL(e);
      return r.protocol === "ws:" || r.protocol === "wss:";
    } catch {
      return !1;
    }
  }
  getDefaultConfig() {
    return {
      protocols: ["mcp-v1"],
      maxReconnectAttempts: 3,
      binaryType: "arraybuffer"
      // Removed ping/pong settings - using MCP protocol connection management
    };
  }
  async isHealthy() {
    if (!this.isConnected() || !this.transport)
      return !1;
    try {
      const e = this.transport.getReadyState();
      return e === WebSocket.OPEN ? ((this.config.pingInterval || 3e4) > 0, !0) : (console.warn(`[WebSocketPlugin] WebSocket not in OPEN state: ${e}`), !1);
    } catch (e) {
      return console.warn("[WebSocketPlugin] Health check failed:", e), !1;
    }
  }
  async callTool(e, r, a) {
    if (!this.isConnected())
      throw new Error("WebSocket Plugin: Not connected");
    console.log(`[WebSocketPlugin] Calling tool: ${r}`);
    try {
      const t = await e.callTool({ name: r, arguments: a });
      return console.log(`[WebSocketPlugin] Tool call completed: ${r}`), t;
    } catch (t) {
      throw console.error(`[WebSocketPlugin] Tool call failed: ${r}`, t), this.isConnected() ? t : (this.isConnectedFlag = !1, new Error(`WebSocket connection lost during tool call: ${r}`));
    }
  }
  async getPrimitives(e) {
    if (!this.isConnected())
      throw new Error("WebSocket Plugin: Not connected");
    console.log("[WebSocketPlugin] Getting primitives...");
    try {
      const r = e.getServerCapabilities(), a = [], t = [];
      return r != null && r.resources && t.push(
        e.listResources().then(({ resources: n }) => {
          n.forEach((o) => a.push({ type: "resource", value: o }));
        })
      ), r != null && r.tools && t.push(
        e.listTools().then(({ tools: n }) => {
          n.forEach((o) => a.push({ type: "tool", value: o }));
        })
      ), r != null && r.prompts && t.push(
        e.listPrompts().then(({ prompts: n }) => {
          n.forEach((o) => a.push({ type: "prompt", value: o }));
        })
      ), await Promise.all(t), console.log(`[WebSocketPlugin] Retrieved ${a.length} primitives`), a;
    } catch (r) {
      throw console.error("[WebSocketPlugin] Failed to get primitives:", r), this.isConnected() ? r : (this.isConnectedFlag = !1, new Error("WebSocket connection lost while getting primitives"));
    }
  }
  /**
   * Set a callback to be called when the WebSocket disconnects
   */
  setDisconnectionCallback(e) {
    this.disconnectionCallback = e;
  }
  /**
   * Handle disconnection events by notifying the main client
   */
  handleDisconnection(e, r, a) {
    if (console.log(`[WebSocketPlugin] Handling disconnection: ${e} (code: ${r}, details: ${a})`), this.disconnectionCallback)
      try {
        this.disconnectionCallback(e, r, a);
      } catch (t) {
        console.error("[WebSocketPlugin] Error in disconnection callback:", t);
      }
  }
}
class Ju extends TransformStream {
  constructor({ onError: e, onRetry: r, onComment: a } = {}) {
    let t;
    super({
      start(n) {
        t = zo({
          onEvent: (o) => {
            n.enqueue(o);
          },
          onError(o) {
            e === "terminate" ? n.error(o) : typeof e == "function" && e(o);
          },
          onRetry: r,
          onComment: a
        });
      },
      transform(n) {
        t.feed(n);
      }
    });
  }
}
const Gu = {
  initialReconnectionDelay: 1e3,
  maxReconnectionDelay: 3e4,
  reconnectionDelayGrowFactor: 1.5,
  maxRetries: 2
};
class Xa extends Error {
  constructor(e, r) {
    super(`Streamable HTTP error: ${r}`), this.code = e;
  }
}
class Ku {
  constructor(e, r) {
    var a;
    this._url = e, this._resourceMetadataUrl = void 0, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._sessionId = r == null ? void 0 : r.sessionId, this._reconnectionOptions = (a = r == null ? void 0 : r.reconnectionOptions) !== null && a !== void 0 ? a : Gu;
  }
  async _authThenStart() {
    var e;
    if (!this._authProvider)
      throw new ct("No auth provider");
    let r;
    try {
      r = await Gt(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl });
    } catch (a) {
      throw (e = this.onerror) === null || e === void 0 || e.call(this, a), a;
    }
    if (r !== "AUTHORIZED")
      throw new ct();
    return await this._startOrAuthSse({ resumptionToken: void 0 });
  }
  async _commonHeaders() {
    var e;
    const r = {};
    if (this._authProvider) {
      const a = await this._authProvider.tokens();
      a && (r.Authorization = `Bearer ${a.access_token}`);
    }
    return this._sessionId && (r["mcp-session-id"] = this._sessionId), this._protocolVersion && (r["mcp-protocol-version"] = this._protocolVersion), new Headers({ ...r, ...(e = this._requestInit) === null || e === void 0 ? void 0 : e.headers });
  }
  async _startOrAuthSse(e) {
    var r, a;
    const { resumptionToken: t } = e;
    try {
      const n = await this._commonHeaders();
      n.set("Accept", "text/event-stream"), t && n.set("last-event-id", t);
      const o = await fetch(this._url, {
        method: "GET",
        headers: n,
        signal: (r = this._abortController) === null || r === void 0 ? void 0 : r.signal
      });
      if (!o.ok) {
        if (o.status === 401 && this._authProvider)
          return await this._authThenStart();
        if (o.status === 405)
          return;
        throw new Xa(o.status, `Failed to open SSE stream: ${o.statusText}`);
      }
      this._handleSseStream(o.body, e);
    } catch (n) {
      throw (a = this.onerror) === null || a === void 0 || a.call(this, n), n;
    }
  }
  /**
   * Calculates the next reconnection delay using  backoff algorithm
   *
   * @param attempt Current reconnection attempt count for the specific stream
   * @returns Time to wait in milliseconds before next reconnection attempt
   */
  _getNextReconnectionDelay(e) {
    const r = this._reconnectionOptions.initialReconnectionDelay, a = this._reconnectionOptions.reconnectionDelayGrowFactor, t = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(r * Math.pow(a, e), t);
  }
  /**
   * Schedule a reconnection attempt with exponential backoff
   *
   * @param lastEventId The ID of the last received event for resumability
   * @param attemptCount Current reconnection attempt count for this specific stream
   */
  _scheduleReconnection(e, r = 0) {
    var a;
    const t = this._reconnectionOptions.maxRetries;
    if (t > 0 && r >= t) {
      (a = this.onerror) === null || a === void 0 || a.call(this, new Error(`Maximum reconnection attempts (${t}) exceeded.`));
      return;
    }
    const n = this._getNextReconnectionDelay(r);
    setTimeout(() => {
      this._startOrAuthSse(e).catch((o) => {
        var i;
        (i = this.onerror) === null || i === void 0 || i.call(this, new Error(`Failed to reconnect SSE stream: ${o instanceof Error ? o.message : String(o)}`)), this._scheduleReconnection(e, r + 1);
      });
    }, n);
  }
  _handleSseStream(e, r) {
    if (!e)
      return;
    const { onresumptiontoken: a, replayMessageId: t } = r;
    let n;
    (async () => {
      var i, u, c, h;
      try {
        const f = e.pipeThrough(new TextDecoderStream()).pipeThrough(new Ju()).getReader();
        for (; ; ) {
          const { value: v, done: d } = await f.read();
          if (d)
            break;
          if (v.id && (n = v.id, a == null || a(v.id)), !v.event || v.event === "message")
            try {
              const m = Lr.parse(JSON.parse(v.data));
              t !== void 0 && is(m) && (m.id = t), (i = this.onmessage) === null || i === void 0 || i.call(this, m);
            } catch (m) {
              (u = this.onerror) === null || u === void 0 || u.call(this, m);
            }
        }
      } catch (f) {
        if ((c = this.onerror) === null || c === void 0 || c.call(this, new Error(`SSE stream disconnected: ${f}`)), this._abortController && !this._abortController.signal.aborted && n !== void 0)
          try {
            this._scheduleReconnection({
              resumptionToken: n,
              onresumptiontoken: a,
              replayMessageId: t
            }, 0);
          } catch (v) {
            (h = this.onerror) === null || h === void 0 || h.call(this, new Error(`Failed to reconnect: ${v instanceof Error ? v.message : String(v)}`));
          }
      }
    })();
  }
  async start() {
    if (this._abortController)
      throw new Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    this._abortController = new AbortController();
  }
  /**
   * Call this method after the user has finished authorizing via their user agent and is redirected back to the MCP client application. This will exchange the authorization code for an access token, enabling the next connection attempt to successfully auth.
   */
  async finishAuth(e) {
    if (!this._authProvider)
      throw new ct("No auth provider");
    if (await Gt(this._authProvider, { serverUrl: this._url, authorizationCode: e, resourceMetadataUrl: this._resourceMetadataUrl }) !== "AUTHORIZED")
      throw new ct("Failed to authorize");
  }
  async close() {
    var e, r;
    (e = this._abortController) === null || e === void 0 || e.abort(), (r = this.onclose) === null || r === void 0 || r.call(this);
  }
  async send(e, r) {
    var a, t, n;
    try {
      const { resumptionToken: o, onresumptiontoken: i } = r || {};
      if (o) {
        this._startOrAuthSse({ resumptionToken: o, replayMessageId: go(e) ? e.id : void 0 }).catch((g) => {
          var y;
          return (y = this.onerror) === null || y === void 0 ? void 0 : y.call(this, g);
        });
        return;
      }
      const u = await this._commonHeaders();
      u.set("content-type", "application/json"), u.set("accept", "application/json, text/event-stream");
      const c = {
        ...this._requestInit,
        method: "POST",
        headers: u,
        body: JSON.stringify(e),
        signal: (a = this._abortController) === null || a === void 0 ? void 0 : a.signal
      }, h = await fetch(this._url, c), f = h.headers.get("mcp-session-id");
      if (f && (this._sessionId = f), !h.ok) {
        if (h.status === 401 && this._authProvider) {
          if (this._resourceMetadataUrl = gs(h), await Gt(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl }) !== "AUTHORIZED")
            throw new ct();
          return this.send(e);
        }
        const g = await h.text().catch(() => null);
        throw new Error(`Error POSTing to endpoint (HTTP ${h.status}): ${g}`);
      }
      if (h.status === 202) {
        Fl(e) && this._startOrAuthSse({ resumptionToken: void 0 }).catch((g) => {
          var y;
          return (y = this.onerror) === null || y === void 0 ? void 0 : y.call(this, g);
        });
        return;
      }
      const d = (Array.isArray(e) ? e : [e]).filter((g) => "method" in g && "id" in g && g.id !== void 0).length > 0, m = h.headers.get("content-type");
      if (d)
        if (m != null && m.includes("text/event-stream"))
          this._handleSseStream(h.body, { onresumptiontoken: i });
        else if (m != null && m.includes("application/json")) {
          const g = await h.json(), y = Array.isArray(g) ? g.map((w) => Lr.parse(w)) : [Lr.parse(g)];
          for (const w of y)
            (t = this.onmessage) === null || t === void 0 || t.call(this, w);
        } else
          throw new Xa(-1, `Unexpected content type: ${m}`);
    } catch (o) {
      throw (n = this.onerror) === null || n === void 0 || n.call(this, o), o;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  /**
   * Terminates the current session by sending a DELETE request to the server.
   *
   * Clients that no longer need a particular session
   * (e.g., because the user is leaving the client application) SHOULD send an
   * HTTP DELETE to the MCP endpoint with the Mcp-Session-Id header to explicitly
   * terminate the session.
   *
   * The server MAY respond with HTTP 405 Method Not Allowed, indicating that
   * the server does not allow clients to terminate sessions.
   */
  async terminateSession() {
    var e, r;
    if (this._sessionId)
      try {
        const a = await this._commonHeaders(), t = {
          ...this._requestInit,
          method: "DELETE",
          headers: a,
          signal: (e = this._abortController) === null || e === void 0 ? void 0 : e.signal
        }, n = await fetch(this._url, t);
        if (!n.ok && n.status !== 405)
          throw new Xa(n.status, `Failed to terminate session: ${n.statusText}`);
        this._sessionId = void 0;
      } catch (a) {
        throw (r = this.onerror) === null || r === void 0 || r.call(this, a), a;
      }
  }
  setProtocolVersion(e) {
    this._protocolVersion = e;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
}
class Wo {
  constructor() {
    K(this, "metadata", {
      name: "StreamableHttpPlugin",
      version: "1.0.0",
      transportType: "streamable-http",
      description: "Streamable HTTP transport for MCP protocol",
      author: "MCP SuperAssistant"
    });
    K(this, "transport", null);
  }
  async initialize(e) {
    console.log("[StreamableHttpPlugin] Initialized with config:", e);
  }
  async connect(e) {
    console.log(`[StreamableHttpPlugin] Creating transport for: ${e}`);
    try {
      const r = await this.createConnection(e);
      return this.transport = r, console.log("[StreamableHttpPlugin] Transport created successfully"), r;
    } catch (r) {
      throw console.error("[StreamableHttpPlugin] Transport creation failed:", r), r;
    }
  }
  async createConnection(e) {
    try {
      const r = new URL(e);
      console.log(`[StreamableHttpPlugin] Creating Streamable HTTP transport for: ${r.toString()}`);
      const a = new Ku(r);
      return console.log("[StreamableHttpPlugin] Streamable HTTP transport created successfully"), a;
    } catch (r) {
      const a = r instanceof Error ? r.message : String(r);
      let t = a;
      throw a.includes("404") ? t = "Streamable HTTP endpoint not found (404). Verify the server URL and endpoint path." : a.includes("timeout") ? t = "Streamable HTTP connection timeout. The server may be slow or unreachable." : a.includes("Failed to fetch") ? t = "Streamable HTTP connection failed. Check if the server is running and accessible." : a.includes("protocol") && (t = "Streamable HTTP protocol error. The server may not support streamable HTTP."), new Error(`StreamableHttpPlugin: ${t}`);
    }
  }
  async disconnect() {
    if (console.log("[StreamableHttpPlugin] Disconnecting..."), this.transport)
      try {
        await this.transport.close();
      } catch (e) {
        console.warn("[StreamableHttpPlugin] Error during transport cleanup:", e);
      }
    this.transport = null, console.log("[StreamableHttpPlugin] Disconnected");
  }
  isConnected() {
    return this.transport !== null;
  }
  isSupported(e) {
    try {
      const r = new URL(e);
      return r.protocol === "http:" || r.protocol === "https:";
    } catch {
      return !1;
    }
  }
  getDefaultConfig() {
    return {
      keepAlive: !0,
      connectionTimeout: 5e3,
      readTimeout: 3e4,
      fallbackToSSE: !1,
      maxRetries: 2
    };
  }
  async isHealthy() {
    if (!this.isConnected() || !this.transport)
      return !1;
    try {
      return !0;
    } catch (e) {
      return console.warn("[StreamableHttpPlugin] Health check failed:", e), !1;
    }
  }
  async callTool(e, r, a) {
    if (!this.isConnected())
      throw new Error("StreamableHttpPlugin: Not connected");
    console.log(`[StreamableHttpPlugin] Calling tool: ${r}`);
    try {
      const t = await e.callTool({ name: r, arguments: a });
      return console.log(`[StreamableHttpPlugin] Tool call completed: ${r}`), t;
    } catch (t) {
      throw console.error(`[StreamableHttpPlugin] Tool call failed: ${r}`, t), t;
    }
  }
  async getPrimitives(e) {
    if (!this.isConnected())
      throw new Error("StreamableHttpPlugin: Not connected");
    console.log("[StreamableHttpPlugin] Getting primitives...");
    try {
      const r = e.getServerCapabilities(), a = [], t = [];
      return r != null && r.resources && t.push(
        e.listResources().then(({ resources: n }) => {
          n.forEach((o) => a.push({ type: "resource", value: o }));
        }).catch((n) => {
          console.warn("[StreamableHttpPlugin] Failed to list resources:", n);
        })
      ), r != null && r.tools && t.push(
        e.listTools().then(({ tools: n }) => {
          n.forEach((o) => a.push({ type: "tool", value: o }));
        }).catch((n) => {
          console.warn("[StreamableHttpPlugin] Failed to list tools:", n);
        })
      ), r != null && r.prompts && t.push(
        e.listPrompts().then(({ prompts: n }) => {
          n.forEach((o) => a.push({ type: "prompt", value: o }));
        }).catch((n) => {
          console.warn("[StreamableHttpPlugin] Failed to list prompts:", n);
        })
      ), await Promise.all(t), console.log(`[StreamableHttpPlugin] Retrieved ${a.length} primitives`), a;
    } catch (r) {
      return console.error("[StreamableHttpPlugin] Failed to get primitives:", r), [];
    }
  }
}
class Yu extends Uo {
  constructor() {
    super();
    K(this, "plugins", /* @__PURE__ */ new Map());
    K(this, "initialized", /* @__PURE__ */ new Set());
    console.log("[PluginRegistry] Initialized");
  }
  async register(r) {
    const { transportType: a } = r.metadata;
    this.plugins.has(a) && console.warn(`[PluginRegistry] Plugin for transport '${a}' already registered, replacing`), this.plugins.set(a, r), console.log(
      `[PluginRegistry] Registered plugin: ${r.metadata.name} v${r.metadata.version} (${a})`
    ), this.emit("registry:plugin-registered", { plugin: r });
  }
  unregister(r) {
    return this.plugins.get(r) ? (this.plugins.delete(r), this.initialized.delete(r), console.log(`[PluginRegistry] Unregistered plugin for transport: ${r}`), this.emit("registry:plugin-unregistered", { type: r }), !0) : !1;
  }
  getPlugin(r) {
    return this.plugins.get(r);
  }
  async getInitializedPlugin(r, a) {
    const t = this.getPlugin(r);
    if (!t)
      throw new Error(`Plugin for transport '${r}' not found`);
    if (!this.initialized.has(r)) {
      const n = a || t.getDefaultConfig();
      await t.initialize(n), this.initialized.add(r), console.log(`[PluginRegistry] Initialized plugin: ${r}`);
    }
    return t;
  }
  isPluginAvailable(r) {
    return this.plugins.has(r);
  }
  isPluginInitialized(r) {
    return this.initialized.has(r);
  }
  listAvailable() {
    return Array.from(this.plugins.keys());
  }
  listInitialized() {
    return Array.from(this.initialized);
  }
  getPluginInfo(r) {
    const a = this.plugins.get(r);
    return {
      available: !!a,
      initialized: this.initialized.has(r),
      metadata: a == null ? void 0 : a.metadata
    };
  }
  async loadDefaultPlugins() {
    console.log("[PluginRegistry] Loading default plugins...");
    try {
      await this.register(new Bo()), await this.register(new Zo()), await this.register(new Wo());
      const r = this.plugins.size;
      console.log(`[PluginRegistry] Loaded ${r} default plugins`), this.emit("registry:plugins-loaded", { count: r });
    } catch (r) {
      throw console.error("[PluginRegistry] Failed to load default plugins:", r), new Error(`Failed to load default plugins: ${r instanceof Error ? r.message : String(r)}`);
    }
  }
  clear() {
    this.plugins.clear(), this.initialized.clear(), console.log("[PluginRegistry] Cleared all plugins");
  }
  getStats() {
    return {
      totalPlugins: this.plugins.size,
      initializedPlugins: this.initialized.size,
      availableTypes: this.listAvailable(),
      initializedTypes: this.listInitialized()
    };
  }
}
const es = {
  defaultTransport: "sse",
  defaultUri: "http://localhost:3006/sse",
  plugins: {
    sse: {
      keepAlive: !0,
      connectionTimeout: 5e3,
      readTimeout: 3e4
    },
    websocket: {
      protocols: ["mcp-v1"],
      pingInterval: 3e4,
      pongTimeout: 5e3,
      maxReconnectAttempts: 3,
      binaryType: "arraybuffer"
    },
    "streamable-http": {
      keepAlive: !0,
      connectionTimeout: 5e3,
      readTimeout: 3e4,
      fallbackToSSE: !1,
      maxRetries: 2
    }
  },
  global: {
    timeout: 3e4,
    maxRetries: 3,
    healthCheckInterval: 6e4,
    reconnectDelay: 2e3,
    logLevel: "info"
  }
};
class Yn extends Uo {
  // 5 minutes
  constructor(r = {}) {
    super();
    K(this, "registry");
    K(this, "config");
    K(this, "client", null);
    K(this, "activePlugin", null);
    K(this, "activeTransport", null);
    K(this, "isConnectedFlag", !1);
    K(this, "connectionPromise", null);
    K(this, "healthCheckTimer", null);
    K(this, "primitivesCache", null);
    K(this, "primitivesCacheTime", 0);
    K(this, "CACHE_TTL", 3e5);
    this.config = {
      ...es,
      ...r,
      global: {
        ...es.global,
        ...r.global
      },
      plugins: {
        ...es.plugins,
        ...r.plugins
      }
    }, this.registry = new Yu(), this.registry.on("registry:plugin-registered", (a) => {
      this.emit("registry:plugin-registered", a);
    }), this.registry.on("registry:plugins-loaded", (a) => {
      this.emit("registry:plugins-loaded", a);
    }), console.log("[McpClient] Initialized with config:", this.config), this.emit("client:initialized", { config: this.config });
  }
  async initialize() {
    try {
      console.log("[McpClient] Loading default plugins..."), await this.registry.loadDefaultPlugins(), console.log("[McpClient] Initialization complete");
    } catch (r) {
      console.error("[McpClient] Initialization failed:", r), console.log("[McpClient] Attempting manual plugin registration as fallback...");
      try {
        await this.manualPluginRegistration(), console.log("[McpClient] Manual plugin registration successful");
      } catch (a) {
        throw console.error("[McpClient] Manual plugin registration also failed:", a), r;
      }
    }
  }
  async manualPluginRegistration() {
    await this.registry.register(new Bo()), await this.registry.register(new Zo()), await this.registry.register(new Wo()), console.log("[McpClient] Manual plugin registration completed");
  }
  async connect(r) {
    var a, t, n, o;
    if (this.isConnectedFlag && ((a = this.activePlugin) == null ? void 0 : a.metadata.transportType) === r.type) {
      console.log(`[McpClient] Already connected via ${r.type}, skipping`);
      return;
    }
    if (this.connectionPromise) {
      console.log("[McpClient] Connection already in progress, waiting...");
      try {
        if (await this.connectionPromise, this.isConnectedFlag && ((t = this.activePlugin) == null ? void 0 : t.metadata.transportType) === r.type) {
          console.log("[McpClient] Existing connection matches request");
          return;
        }
      } catch {
        console.log("[McpClient] Previous connection failed, starting new one"), this.connectionPromise = null;
      }
    }
    this.isConnectedFlag && ((n = this.activePlugin) == null ? void 0 : n.metadata.transportType) !== r.type && (console.log(`[McpClient] Switching from ${(o = this.activePlugin) == null ? void 0 : o.metadata.transportType} to ${r.type}`), await this.disconnect()), this.connectionPromise = this.performConnection(r);
    try {
      await this.connectionPromise;
    } finally {
      this.connectionPromise = null;
    }
  }
  async performConnection(r) {
    const { uri: a, type: t, config: n } = r;
    try {
      console.log(`[McpClient] Connecting to ${a} via ${t}`), this.emit("client:connecting", { uri: a, type: t }), this.isConnectedFlag && await this.disconnect();
      const o = {
        ...this.config.plugins[t],
        ...n
      }, i = await this.registry.getInitializedPlugin(t, o);
      if (!i.isSupported(a))
        throw new Error(`Plugin ${t} does not support URI: ${a}`);
      const u = await i.connect(a);
      t === "websocket" && "setDisconnectionCallback" in i && i.setDisconnectionCallback((v, d, m) => {
        console.log(`[McpClient] WebSocket disconnection detected: ${v} (code: ${d})`), this.isConnectedFlag = !1, this.emit("connection:status-changed", {
          isConnected: !1,
          type: "websocket",
          error: `WebSocket disconnected: ${v}${d ? ` (code: ${d})` : ""}${m ? ` - ${m}` : ""}`
        }), this.cleanup().catch((g) => {
          console.error("[McpClient] Error during cleanup after WebSocket disconnection:", g);
        });
      }), this.client = new Eu(
        {
          name: `mcp-client-${t}`,
          version: "1.0.0"
        },
        { capabilities: {} }
      ), this.client.setNotificationHandler(Fo, (v) => {
        console.debug("[McpClient] Server log:", v.params.data);
      }), console.log("[McpClient] Starting MCP client connection to transport...");
      const c = 3e4, h = this.client.connect(u), f = new Promise((v, d) => {
        setTimeout(() => {
          d(new Error(`MCP client connection timeout after ${c}ms`));
        }, c);
      });
      await Promise.race([h, f]), console.log("[McpClient] MCP client connected successfully"), this.activePlugin = i, this.activeTransport = u, this.isConnectedFlag = !0, this.clearPrimitivesCache(), this.startHealthMonitoring(), console.log(`[McpClient] Successfully connected via ${t}`), this.emit("client:connected", { uri: a, type: t }), this.emit("connection:status-changed", {
        isConnected: !0,
        type: t,
        error: void 0
      });
    } catch (o) {
      const i = o instanceof Error ? o.message : String(o);
      throw console.error("[McpClient] Connection failed:", o), await this.cleanup(), this.emit("client:error", {
        error: o instanceof Error ? o : new Error(i),
        context: "connection"
      }), this.emit("connection:status-changed", {
        isConnected: !1,
        type: t,
        error: i
      }), o;
    }
  }
  async disconnect() {
    var a;
    if (!this.isConnectedFlag) {
      console.log("[McpClient] Already disconnected");
      return;
    }
    const r = (a = this.activePlugin) == null ? void 0 : a.metadata.transportType;
    console.log(`[McpClient] Disconnecting from ${r || "unknown"}`), r && this.emit("client:disconnecting", { type: r });
    try {
      await this.cleanup(), console.log("[McpClient] Disconnected successfully"), r && this.emit("client:disconnected", { type: r }), this.emit("connection:status-changed", {
        isConnected: !1,
        type: r || null
      });
    } catch (t) {
      console.error("[McpClient] Error during disconnect:", t), this.emit("client:error", {
        error: t instanceof Error ? t : new Error(String(t)),
        context: "disconnect"
      });
    }
  }
  async cleanup() {
    if (this.stopHealthMonitoring(), this.client) {
      try {
        await this.client.close();
      } catch (r) {
        console.warn("[McpClient] Error closing client:", r);
      }
      this.client = null;
    }
    if (this.activePlugin) {
      try {
        await this.activePlugin.disconnect();
      } catch (r) {
        console.warn("[McpClient] Error disconnecting plugin:", r);
      }
      this.activePlugin = null;
    }
    this.activeTransport = null, this.isConnectedFlag = !1, this.clearPrimitivesCache();
  }
  async callTool(r, a) {
    var n;
    if (!this.isConnectedFlag || !this.activePlugin || !this.client)
      throw new Error("Not connected to any MCP server");
    const t = Date.now();
    this.emit("tool:call-started", { toolName: r, args: a });
    try {
      console.log(`[McpClient] Calling tool: ${r}`);
      const o = await this.activePlugin.callTool(this.client, r, a), i = Date.now() - t;
      return this.emit("tool:call-completed", { toolName: r, result: o, duration: i }), o;
    } catch (o) {
      const i = Date.now() - t, u = o instanceof Error ? o : new Error(String(o));
      throw this.emit("tool:call-failed", { toolName: r, error: u, duration: i }), await this.isHealthy() || (this.isConnectedFlag = !1, this.emit("connection:status-changed", {
        isConnected: !1,
        type: ((n = this.activePlugin) == null ? void 0 : n.metadata.transportType) || null,
        error: "Connection lost during tool call"
      })), u;
    }
  }
  async getPrimitives(r = !1) {
    var a;
    if (!this.isConnectedFlag || !this.activePlugin || !this.client)
      throw new Error("Not connected to any MCP server");
    if (!r && this.primitivesCache && this.isCacheValid())
      return console.log("[McpClient] Returning cached primitives"), this.primitivesCache;
    try {
      console.log("[McpClient] Fetching primitives from server...");
      const t = await this.activePlugin.getPrimitives(this.client), n = this.normalizeTools(t.filter((c) => c.type === "tool")), o = t.filter((c) => c.type === "resource").map((c) => c.value), i = t.filter((c) => c.type === "prompt").map((c) => c.value), u = {
        tools: n,
        resources: o,
        prompts: i,
        timestamp: Date.now()
      };
      return this.primitivesCache = u, this.primitivesCacheTime = Date.now(), this.emit("tools:list-updated", {
        tools: n,
        type: this.activePlugin.metadata.transportType
      }), console.log(
        `[McpClient] Retrieved ${n.length} tools, ${o.length} resources, ${i.length} prompts`
      ), u;
    } catch (t) {
      throw console.error("[McpClient] Failed to get primitives:", t), await this.isHealthy() || (this.isConnectedFlag = !1, this.emit("connection:status-changed", {
        isConnected: !1,
        type: ((a = this.activePlugin) == null ? void 0 : a.metadata.transportType) || null,
        error: "Connection lost while getting primitives"
      })), t;
    }
  }
  normalizeTools(r) {
    return r.map((a) => {
      const t = a.value;
      return {
        name: t.name,
        description: t.description || "",
        input_schema: t.inputSchema || t.input_schema || {},
        schema: t.inputSchema ? JSON.stringify(t.inputSchema) : t.input_schema ? JSON.stringify(t.input_schema) : "{}",
        ...t.uri && { uri: t.uri },
        ...t.arguments && { arguments: t.arguments }
      };
    });
  }
  clearPrimitivesCache() {
    this.primitivesCache = null, this.primitivesCacheTime = 0;
  }
  isCacheValid() {
    return Date.now() - this.primitivesCacheTime < this.CACHE_TTL;
  }
  async isHealthy() {
    if (!this.isConnectedFlag || !this.activePlugin)
      return !1;
    try {
      return await this.activePlugin.isHealthy();
    } catch (r) {
      return console.warn("[McpClient] Health check failed:", r), !1;
    }
  }
  isConnected() {
    var r;
    return this.isConnectedFlag && ((r = this.activePlugin) == null ? void 0 : r.isConnected()) === !0;
  }
  getConnectionInfo() {
    var r, a;
    return {
      isConnected: this.isConnectedFlag,
      type: ((r = this.activePlugin) == null ? void 0 : r.metadata.transportType) || null,
      uri: null,
      // Could store this if needed
      pluginInfo: ((a = this.activePlugin) == null ? void 0 : a.metadata) || null
    };
  }
  getAvailableTransports() {
    return this.registry.listAvailable();
  }
  async switchTransport(r) {
    var t;
    const a = ((t = this.activePlugin) == null ? void 0 : t.metadata.transportType) || null;
    a === r.type ? console.log(`[McpClient] Already using ${r.type}, reconnecting...`) : (console.log(`[McpClient] Switching from ${a} to ${r.type}`), this.emit("client:plugin-switched", { from: a, to: r.type })), await this.connect(r);
  }
  startHealthMonitoring() {
    const r = this.config.global.healthCheckInterval;
    r <= 0 || (this.healthCheckTimer = setInterval(async () => {
      var a;
      if (!this.isConnectedFlag) {
        this.stopHealthMonitoring();
        return;
      }
      try {
        const t = await this.isHealthy(), n = ((a = this.activePlugin) == null ? void 0 : a.metadata.transportType) || null;
        n && this.emit("connection:health-check", {
          healthy: t,
          type: n,
          timestamp: Date.now()
        }), t || (console.warn(`[McpClient] Health check failed for ${n}`), this.isConnectedFlag = !1, this.emit("connection:status-changed", {
          isConnected: !1,
          type: n,
          error: "Health check failed"
        }));
      } catch (t) {
        console.error("[McpClient] Health check error:", t);
      }
    }, r));
  }
  stopHealthMonitoring() {
    this.healthCheckTimer && (clearInterval(this.healthCheckTimer), this.healthCheckTimer = null);
  }
  getConfig() {
    return { ...this.config };
  }
  updateConfig(r) {
    this.config = {
      ...this.config,
      ...r,
      global: {
        ...this.config.global,
        ...r.global
      },
      plugins: {
        ...this.config.plugins,
        ...r.plugins
      }
    }, console.log("[McpClient] Configuration updated");
  }
}
let Qe = null;
async function Or() {
  if (!Qe)
    try {
      Qe = new Yn(), await Qe.initialize(), Xn(Qe);
    } catch (s) {
      console.error("[getGlobalClient] Failed to initialize client:", s), Qe = new Yn(), Xn(Qe);
    }
  return Qe;
}
function Xn(s) {
  s.on("connection:status-changed", (e) => {
    console.log("[Global Client] Connection status changed:", e), typeof window < "u" && window.dispatchEvent && window.dispatchEvent(new CustomEvent("mcp:connection-status-changed", {
      detail: e
    })), typeof chrome < "u" && chrome.runtime && chrome.runtime.sendMessage && chrome.runtime.sendMessage({
      type: "mcp:connection-status-changed",
      payload: e,
      origin: "mcpclient"
    }).catch(() => {
    });
  }), s.on("client:connected", (e) => {
    console.log("[Global Client] Client connected:", e);
  }), s.on("client:disconnected", (e) => {
    console.log("[Global Client] Client disconnected:", e);
  }), s.on("client:error", (e) => {
    console.error("[Global Client] Client error:", e);
  });
}
function aa(s) {
  try {
    const e = new URL(s);
    return e.protocol === "ws:" || e.protocol === "wss:" ? "websocket" : "sse";
  } catch {
    return "sse";
  }
}
function Xu() {
  return Qe ? Qe.isConnected() : !1;
}
async function $t() {
  try {
    return await (await Or()).isHealthy();
  } catch (s) {
    return console.error("[Backward Compatibility] checkMcpServerConnection failed:", s), !1;
  }
}
async function ed(s, e, r, a) {
  const t = await Or(), n = a || aa(s);
  return t.isConnected() || await t.connect({ uri: s, type: n }), await t.callTool(e, r);
}
async function Kt(s, e = !1, r) {
  const a = await Or(), t = r || aa(s);
  a.isConnected() || await a.connect({ uri: s, type: t });
  const n = await a.getPrimitives(e), o = [];
  return n.tools.forEach((i) => {
    o.push({ type: "tool", value: i });
  }), n.resources.forEach((i) => {
    o.push({ type: "resource", value: i });
  }), n.prompts.forEach((i) => {
    o.push({ type: "prompt", value: i });
  }), o;
}
async function eo(s, e) {
  const r = await Or(), a = e || aa(s);
  r.isConnected() && await r.disconnect(), await r.connect({ uri: s, type: a });
}
async function td(s, e) {
  const r = await Or(), a = e || aa(s);
  await r.connect({ uri: s, type: a });
  const t = await r.getPrimitives();
  console.log(`Connected, found ${t.tools.length} tools, ${t.resources.length} resources, ${t.prompts.length} prompts`);
}
function rd() {
  Qe && Qe.isConnected() && Qe.disconnect().catch((s) => {
    console.error("[Backward Compatibility] resetMcpConnectionState failed:", s);
  });
}
function ad() {
  console.log("[Backward Compatibility] resetMcpConnectionStateForRecovery - handled by plugin health monitoring");
}
function Yt(s) {
  return s.filter((e) => e.type === "tool").map((e) => {
    const r = e.value;
    return {
      name: r.name,
      description: r.description || "",
      input_schema: r.inputSchema || r.input_schema || {},
      schema: r.inputSchema ? JSON.stringify(r.inputSchema) : r.input_schema ? JSON.stringify(r.input_schema) : "{}",
      ...r.uri && { uri: r.uri },
      ...r.arguments && { arguments: r.arguments }
    };
  });
}
const sd = "G-6ENY3Y3H9X", nd = "I0PHa_CWTbuTlXSb3T-kXg", od = "https://www.google-analytics.com/mp/collect", to = !("update_url" in chrome.runtime.getManifest()), id = od, ld = 100, cd = 30;
async function ud() {
  try {
    let e = (await chrome.storage.local.get("clientId")).clientId;
    return e || (e = self.crypto.randomUUID(), await chrome.storage.local.set({ clientId: e }), console.debug("[GA4] Generated new clientId:", e)), e;
  } catch (s) {
    return console.error("[GA4] Error getting or creating clientId:", s), "error-client-id";
  }
}
async function dd() {
  try {
    let { sessionData: s } = await chrome.storage.session.get("sessionData");
    const e = Date.now();
    return s && s.timestamp && ((e - s.timestamp) / 6e4 > cd ? (s = null, console.debug("[GA4] Session expired, starting new one.")) : (s.timestamp = e, await chrome.storage.session.set({ sessionData: s }))), s || (s = {
      session_id: e.toString(),
      timestamp: e
      // Store timestamp as number
    }, await chrome.storage.session.set({ sessionData: s }), console.debug("[GA4] Created new session:", s.session_id)), s.session_id;
  } catch (s) {
    return console.error("[GA4] Error getting or creating session_id:", s), "error-session-id";
  }
}
async function jt(s, e) {
  try {
    const r = await ud(), a = await dd(), t = {
      name: s,
      params: {
        session_id: a,
        engagement_time_msec: ld,
        ...e
        // Spread user-provided params
      }
    }, n = {
      client_id: r,
      events: [t]
    };
    console.debug(`[GA4] Sending event: ${s}`, JSON.stringify(e));
    const o = await fetch(`${id}?measurement_id=${sd}&api_secret=${nd}`, {
      method: "POST",
      body: JSON.stringify(n),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (o.ok) {
      if (console.debug("[GA4] Event sent successfully."), to && o.status !== 204)
        try {
          const i = await o.json();
          console.debug("[GA4] Debug endpoint success response:", JSON.stringify(i, null, 2));
        } catch {
          console.debug("[GA4] Debug endpoint success response likely had no body (e.g., 200 OK with empty body).");
        }
    } else if (console.warn(`[GA4] Analytics request failed: ${o.status} ${o.statusText}`), to)
      try {
        const i = await o.json();
        console.error("[GA4] Debug endpoint error response:", JSON.stringify(i, null, 2));
      } catch {
        console.error("[GA4] Debug endpoint error response could not be parsed as JSON:", await o.text());
      }
  } catch (r) {
    console.error("[GA4] Error sending analytics event:", r);
  }
}
async function Qo(s, e) {
  var r;
  await jt("extension_error", {
    error_message: s.message,
    error_stack: (r = s.stack) == null ? void 0 : r.substring(0, 500),
    // Limit stack trace length
    error_context: e
  });
}
const Gr = "http://localhost:3006/sse", Jo = "ws://localhost:3006/message", hd = "http://localhost:3006", vs = "sse";
let Oe = null, mr = Gr, Ie = vs, Go = !1, ys = !1;
async function fd() {
  try {
    const s = await chrome.storage.local.get(["mcpServerUrl", "mcpConnectionType"]);
    Ie = s.mcpConnectionType || vs;
    const e = Ie === "websocket" ? Jo : Ie === "streamable-http" ? hd : Gr;
    mr = s.mcpServerUrl || e, ys = !0, console.log("[Background] Server config loaded from storage:", {
      url: mr,
      type: Ie
    });
  } catch (s) {
    console.warn("[Background] Failed to load server config from storage, using defaults:", s), Ie = vs, mr = Gr, ys = !0;
  }
}
async function md() {
  for (; !ys; )
    await new Promise((s) => setTimeout(s, 100));
}
function Et() {
  return mr;
}
function pd(s, e) {
  mr = s, e && (Ie = e), console.log("[Background] Server config updated to:", { url: s, type: Ie });
}
function Ko() {
  return Go;
}
function et(s) {
  Go = s, console.log("[Background] Connection status updated to:", s);
}
let Ot = !1, kt = 0;
const ts = 3;
function gd(s) {
  const e = s.message.toLowerCase(), r = [
    /tool .* not found/i,
    /tool not found/i,
    /method not found/i,
    /invalid arguments/i,
    /invalid parameters/i,
    /mcp error -32602/i,
    // Invalid params
    /mcp error -32601/i,
    // Method not found
    /mcp error -32600/i,
    // Invalid request
    /tool '[^']+' is not available/i,
    /tool '[^']+' not found on server/i
  ], a = [
    /connection refused/i,
    /econnrefused/i,
    /timeout/i,
    /etimedout/i,
    /enotfound/i,
    /network error/i,
    /server unavailable/i,
    /could not connect/i,
    /connection failed/i,
    /transport error/i,
    /fetch failed/i
  ];
  return r.some((t) => t.test(e)) ? { isConnectionError: !1, isToolError: !0, category: "tool_error" } : a.some((t) => t.test(e)) ? { isConnectionError: !0, isToolError: !1, category: "connection_error" } : { isConnectionError: !1, isToolError: !0, category: "unknown_tool_error" };
}
async function Yo() {
  jt("extension_loaded", {}), console.log("Extension initializing...");
  try {
    const r = await vi.get();
    console.log("Theme initialized:", r);
  } catch (r) {
    console.warn("Error initializing theme, continuing with defaults:", r);
  }
  await fd(), await md();
  const s = Et();
  console.log("Background script initialized with server URL:", s), et(!1), await bd(), console.log("Extension initialized successfully"), (async () => {
    const r = Et();
    console.log(`[Background] Attempting initial connection to ${r} with transport: ${Ie}`);
    let a = !1;
    try {
      await $s(r, Ie), a = await $t(), console.log(`[Background] Initial connection attempt result: ${a ? "connected" : "failed"}`);
    } catch (t) {
      console.log(`[Background] Initial connection attempt failed: ${t instanceof Error ? t.message : String(t)}`), a = !1;
    }
    if (et(a), Je(a), console.log(`[Background] Initial connection status broadcast: ${a ? "connected" : "disconnected"}`), a)
      try {
        console.log("[Background] Server connected, fetching and broadcasting initial tools...");
        const t = await Kt(r, !1, Ie);
        console.log(`[Background] Retrieved ${t.length} primitives for initial broadcast`);
        const n = Yt(t);
        console.log(`[Background] Broadcasting ${n.length} normalized initial tools`), Tr(n);
      } catch (t) {
        console.warn("[Background] Error broadcasting initial tools:", t);
      }
  })();
}
async function $s(s, e = Ie) {
  if (Ot) {
    console.log("Connection attempt already in progress, skipping");
    return;
  }
  Ot = !0, kt++, console.log(
    `Attempting to connect to MCP server via ${e} (attempt ${kt}/${ts}): ${s}`
  );
  try {
    await td(s, e), console.log("MCP client connected successfully"), et(!0), Je(!0);
    try {
      console.log("[Background] Connection successful, fetching and broadcasting tools...");
      const r = await Kt(s, !0, e);
      console.log(`[Background] Retrieved ${r.length} primitives after connection`);
      const a = Yt(r);
      console.log(`[Background] Broadcasting ${a.length} normalized tools after successful connection`), Tr(a);
    } catch (r) {
      console.warn("[Background] Error broadcasting tools after connection:", r);
    }
    kt = 0;
  } catch (r) {
    const a = gd(r instanceof Error ? r : new Error(String(r)));
    if (console.warn(`MCP server connection failed (${a.category}): ${r.message || String(r)}`), console.log("Extension will continue to function with limited capabilities"), a.isConnectionError ? (et(!1), Je(!1, r.message || String(r))) : console.log("Error categorized as tool-related, not updating connection status"), kt < ts) {
      const t = Math.min(5e3 * kt, 15e3);
      console.log(`Scheduling next connection attempt in ${t / 1e3} seconds...`), setTimeout(() => {
        Ot = !1, $s(s).catch(() => {
        });
      }, t);
    } else
      console.log("Maximum connection attempts reached. Will try again during periodic check."), Ot = !1;
  } finally {
    kt >= ts && (Ot = !1);
  }
}
const vd = 6e4;
setInterval(async () => {
  if (Ot)
    return;
  const s = Ko(), e = await $t();
  if (et(e), s !== e) {
    if (console.log(`[Background] Connection status changed: ${s} -> ${e}`), Je(e), e)
      try {
        console.log("[Background] Periodic check: Connection established, fetching and broadcasting tools...");
        const r = await Kt(Et(), !0, Ie);
        console.log(`[Background] Periodic check: Retrieved ${r.length} primitives`);
        const a = Yt(r);
        console.log(`[Background] Periodic check: Broadcasting ${a.length} normalized tools`), Tr(a);
      } catch (r) {
        console.warn("[Background] Error broadcasting tools after status change:", r);
      }
  } else
    Je(e);
  if (!e && !Ot) {
    kt = 0, console.log("Periodic check: MCP server not connected, attempting to connect");
    const r = Et();
    try {
      console.log("[Background] Resetting MCP client connection state for periodic recovery attempt"), ad();
    } catch (a) {
      console.warn("[Background] Error resetting MCP connection state:", a);
    }
    $s(r, Ie).catch(() => {
    });
  }
}, vd);
setInterval(() => {
}, 6e4);
self.addEventListener("unhandledrejection", (s) => {
  console.error("Unhandled rejection in service worker:", s.reason), s.reason instanceof Error ? Qo(s.reason, "background_unhandled_rejection") : jt("extension_error", {
    error_message: `Unhandled rejection: ${JSON.stringify(s.reason)}`,
    error_context: "background_unhandled_rejection_non_error"
  });
});
self.addEventListener("error", (s) => {
  console.error("Uncaught error in service worker:", s.error), s.error instanceof Error ? Qo(s.error, "background_uncaught_error") : jt("extension_error", {
    error_message: `Uncaught error: ${s.message}`,
    error_context: "background_uncaught_error_non_error"
  });
});
chrome.runtime.onInstalled.addListener(async (s) => {
  console.log("Extension installed or updated:", s.reason), jt("extension_installed", { reason: s.reason });
  const e = chrome.runtime.getManifest().version;
  if (s.reason === "install")
    console.log("Performing first-time installation setup."), await chrome.storage.local.set({
      installDate: (/* @__PURE__ */ new Date()).toISOString(),
      version: e
    }), Oe && Oe.initialized && await Oe.fetchConfig(!0);
  else if (s.reason === "update") {
    const r = s.previousVersion || "unknown";
    console.log(`Extension updated from ${r} to ${e}`), await chrome.storage.local.set({
      version: e,
      previousVersion: r,
      lastUpdateDate: (/* @__PURE__ */ new Date()).toISOString()
    }), Oe && Oe.initialized && await Oe.fetchConfig(!0), setTimeout(() => {
      chrome.tabs.query({}, (a) => {
        a.forEach((t) => {
          t.id && chrome.tabs.sendMessage(t.id, {
            type: "app:version-updated",
            data: {
              oldVersion: r,
              newVersion: e,
              timestamp: Date.now()
            }
          }).catch(() => {
          });
        });
      });
    }, 1e3);
  }
});
chrome.runtime.onStartup.addListener(() => {
  console.log("Browser startup detected."), jt("browser_startup", {}), Yo().catch((s) => console.error("Error initializing on startup:", s));
});
Yo().then(() => {
  console.log("Extension startup complete");
}).catch((s) => {
  console.error("Error during extension initialization:", s), console.log("Extension will continue running with limited functionality");
});
console.log("Background script loaded");
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
chrome.runtime.onMessage.addListener((s, e, r) => {
  if (console.debug("[Background] Received message:", {
    type: s.type || s.command,
    origin: s.origin || "unknown",
    id: s.id,
    hasPayload: !!s.payload,
    from: e.tab ? `tab-${e.tab.id}` : "extension"
  }), s.type === "mcp:connection-status-changed" && s.origin === "mcpclient") {
    console.log("[Background] Received connection status change from MCP client:", s.payload);
    const { isConnected: a, error: t } = s.payload;
    return et(a), Je(a, t), !1;
  }
  return s.command === "trackAnalyticsEvent" ? s.eventName && s.eventParams ? (jt(s.eventName, s.eventParams).then(() => r({ success: !0 })).catch((a) => {
    console.error("[Background] Error tracking analytics event from message:", a), r({ success: !1, error: a instanceof Error ? a.message : String(a) });
  }), !0) : (console.warn("[Background] Invalid trackAnalyticsEvent message received:", s), r({ success: !1, error: "Invalid eventName or eventParams" }), !1) : typeof s.type == "string" && s.type.startsWith("mcp:") ? (yd(s, e, r), !0) : typeof s.type == "string" && s.type.startsWith("remote-config:") ? (wd(s, e, r), !0) : (console.debug("[Background] Message not handled, ignoring:", s.type || s.command), !1);
});
async function yd(s, e, r) {
  const a = Date.now(), t = s.type;
  try {
    let n = null;
    const o = s.payload || {};
    switch (console.log(`[Background] Processing MCP message: ${t}`), t) {
      case "mcp:call-tool": {
        const { toolName: u, args: c } = o;
        if (!u)
          throw new Error("Tool name is required");
        console.log(`[Background] Calling tool: ${u}`), n = await ed(Et(), u, c || {}), console.log(`[Background] Tool call completed: ${u}`);
        break;
      }
      case "mcp:get-connection-status": {
        console.log("[Background] Getting current connection status");
        const u = Ko(), c = await $t();
        console.log(`[Background] Stored status: ${u}, Actual status: ${c}`), u !== c && (console.log("[Background] Status mismatch detected, updating and broadcasting..."), et(c), Je(c)), n = {
          status: c ? "connected" : "disconnected",
          isConnected: c,
          timestamp: Date.now()
        };
        break;
      }
      case "mcp:get-tools": {
        const { forceRefresh: u = !1 } = o;
        console.log(`[Background] Getting tools (forceRefresh: ${u})`);
        try {
          const c = await Kt(Et(), u, Ie);
          console.log(`[Background] Retrieved ${c.length} primitives from server`);
          const h = Yt(c);
          console.log(`[Background] Returning ${h.length} normalized tools to content script`), n = h;
        } catch (c) {
          console.error("[Background] Error getting tools:", c), n = [];
        }
        break;
      }
      case "mcp:force-reconnect": {
        console.log("[Background] Force reconnect requested via context bridge");
        try {
          Je(!1, "Reconnecting..."), console.log("[Background] Starting force reconnection process..."), rd();
          const u = eo(Et(), Ie), c = new Promise(
            (f, v) => setTimeout(() => v(new Error("Reconnection timeout after 20 seconds")), 2e4)
          );
          await Promise.race([u, c]), console.log("[Background] Force reconnect completed successfully");
          const h = await $t();
          if (et(h), Je(h), h)
            try {
              console.log("[Background] Fetching tools after successful reconnection...");
              const f = await Kt(Et(), !0, Ie);
              console.log(`[Background] Retrieved ${f.length} primitives after reconnection`);
              const v = Yt(f);
              console.log(`[Background] Broadcasting ${v.length} normalized tools after reconnection`), Tr(v);
            } catch (f) {
              console.error("[Background] Error fetching tools after reconnect:", f);
            }
          n = { isConnected: h, message: "Reconnection completed" };
        } catch (u) {
          console.error("[Background] Force reconnect failed:", u);
          const c = await $t();
          et(c);
          const h = u instanceof Error ? u.message : String(u);
          Je(c, h), n = { isConnected: c, error: h };
        }
        break;
      }
      case "mcp:get-server-config": {
        const u = await chrome.storage.local.get(["mcpServerUrl", "mcpConnectionType"]), c = Ie === "websocket" ? Jo : Gr;
        n = {
          uri: u.mcpServerUrl || c,
          connectionType: u.mcpConnectionType || Ie
        };
        break;
      }
      case "mcp:update-server-config": {
        const { config: u } = o;
        if (!u || typeof u.uri != "string")
          throw new Error("Invalid server config: uri is required");
        let c = u.connectionType;
        if (console.log(`[Background] Received connection type: ${u.connectionType}, parsed as: ${c}`), !c)
          try {
            const f = new URL(u.uri);
            c = f.protocol === "ws:" || f.protocol === "wss:" ? "websocket" : "sse";
          } catch {
            c = Ie;
          }
        console.log(`[Background] Updating server config to: ${u.uri} (${c})`), await chrome.storage.local.set({
          mcpServerUrl: u.uri,
          mcpConnectionType: c
        }), pd(u.uri, c), _d({ uri: u.uri, connectionType: c }), (async () => {
          try {
            console.log("[Background] Starting async reconnection after config update..."), await eo(u.uri, c);
            const f = await $t();
            if (et(f), Je(f), console.log(`[Background] Async reconnection completed, connected: ${f}`), f)
              try {
                const v = await Kt(u.uri, !0, c), d = Yt(v);
                Tr(d), console.log(`[Background] Broadcasted ${d.length} normalized tools after config update`);
              } catch (v) {
                console.warn("[Background] Failed to fetch tools after config update:", v);
              }
          } catch (f) {
            console.warn("[Background] Async reconnect after config update failed:", f);
            const v = await $t();
            et(v);
            const d = f instanceof Error ? f.message : String(f);
            Je(v, d);
          }
        })().catch((f) => {
          console.error("[Background] Unhandled error in async reconnection:", f);
        }), n = { success: !0 };
        break;
      }
      case "mcp:heartbeat": {
        const { timestamp: u } = o, c = Xu();
        n = {
          timestamp: Date.now(),
          isConnected: c,
          receivedTimestamp: u
        }, s.id && setTimeout(() => {
          chrome.tabs.query({}, (h) => {
            h.forEach((f) => {
              f.id && chrome.tabs.sendMessage(f.id, {
                type: "mcp:heartbeat-response",
                payload: { timestamp: Date.now(), isConnected: c },
                origin: "background",
                timestamp: Date.now()
              }).catch(() => {
              });
            });
          });
        }, 0);
        break;
      }
      default:
        throw new Error(`Unhandled MCP message type: ${t}`);
    }
    const i = Date.now() - a;
    console.log(`[Background] MCP message ${t} processed in ${i}ms`), r({
      type: `${t}:response`,
      payload: n,
      success: !0,
      timestamp: Date.now(),
      processingTime: i,
      origin: "background",
      id: s.id
    });
  } catch (n) {
    const o = Date.now() - a, i = n instanceof Error ? n.message : String(n);
    console.error(`[Background] MCP message handling error (${o}ms):`, n), r({
      type: `${t}:response`,
      error: i,
      success: !1,
      timestamp: Date.now(),
      processingTime: o,
      origin: "background",
      id: s.id
    });
  }
}
function Je(s, e) {
  const r = e ? "error" : s ? "connected" : "disconnected";
  console.log(`[Background] Broadcasting connection status: ${r} (connected: ${s})`);
  const a = {
    type: "connection:status-changed",
    payload: {
      status: r,
      // Type assertion needed due to status calculation
      error: e || void 0,
      isConnected: s,
      timestamp: Date.now()
    },
    origin: "background",
    timestamp: Date.now()
  };
  chrome.tabs.query({}, (t) => {
    t.forEach((n) => {
      n.id && chrome.tabs.sendMessage(n.id, a).catch(() => {
      });
    });
  });
}
function Tr(s) {
  console.log(`[Background] Broadcasting tools update to content scripts: ${s.length} tools`);
  const e = {
    type: "mcp:tool-update",
    payload: {
      tools: s
    },
    origin: "background",
    timestamp: Date.now()
  };
  chrome.tabs.query({}, (r) => {
    r.forEach((a) => {
      a.id && chrome.tabs.sendMessage(a.id, e).catch(() => {
      });
    });
  });
}
function _d(s) {
  console.log(`[Background] Broadcasting config update to content scripts: ${s.uri}`);
  const e = {
    type: "mcp:server-config-updated",
    payload: {
      config: s
      // Type assertion due to partial config structure
    },
    origin: "background",
    timestamp: Date.now()
  };
  chrome.tabs.query({}, (r) => {
    r.forEach((a) => {
      a.id && chrome.tabs.sendMessage(a.id, e).catch(() => {
      });
    });
  });
}
async function wd(s, e, r) {
  const a = Date.now();
  try {
    if (console.log(`[Background] Processing Remote Config message: ${s.type}`), !Oe || !Oe.initialized)
      throw new Error("Remote Config Manager not initialized");
    let t = null;
    switch (s.type) {
      case "remote-config:fetch": {
        const { force: o = !1 } = s.payload || {};
        console.log(`[Background] Fetching remote config (force: ${o})`), await Oe.fetchConfig(o), t = { success: !0, timestamp: Date.now() };
        break;
      }
      case "remote-config:get-feature-flag": {
        const { flagName: o } = s.payload || {};
        if (!o)
          throw new Error("Feature flag name is required");
        console.log(`[Background] Getting feature flag: ${o}`), t = await Oe.getFeatureFlag(o);
        break;
      }
      case "remote-config:get-config": {
        const { key: o } = s.payload || {};
        o ? (console.log(`[Background] Getting specific config for key: ${o}`), t = await Oe.getSpecificConfig(o)) : (console.log("[Background] Getting all remote config"), t = await Oe.getAllConfig());
        break;
      }
      case "remote-config:get-status": {
        console.log("[Background] Getting remote config status"), t = {
          initialized: Oe.initialized,
          lastFetchTime: await Oe.getLastFetchTimePublic(),
          timestamp: Date.now()
        };
        break;
      }
      case "remote-config:clear-cache": {
        console.log("[Background] Clearing remote config cache and refreshing"), t = {
          success: await Oe.clearCacheAndRefresh(),
          timestamp: Date.now()
        };
        break;
      }
      default:
        throw new Error(`Unknown remote config message type: ${s.type}`);
    }
    const n = {
      success: !0,
      data: t,
      processingTime: Date.now() - a,
      timestamp: Date.now()
    };
    console.log(`[Background] Remote Config message processed successfully: ${s.type} (${n.processingTime}ms)`), r(n);
  } catch (t) {
    const n = t instanceof Error ? t.message : String(t);
    console.error(`[Background] Error processing Remote Config message ${s.type}:`, t);
    const o = {
      success: !1,
      error: n,
      processingTime: Date.now() - a,
      timestamp: Date.now()
    };
    r(o);
  }
}
async function bd() {
  try {
    Oe = new _i(), await Oe.initialize(), console.log("[Background] Remote Config Manager initialized successfully"), typeof globalThis < "u" && (globalThis.remoteConfigManager = Oe, console.log("[Background] RemoteConfigManager is now accessible globally as window.remoteConfigManager"));
  } catch (s) {
    console.error("[Background] Failed to initialize Remote Config Manager:", s);
  }
}
