import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-ZBQH2XJA.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-NIFQZ4EV.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-4B2252HL.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MX4ISTBZ.js";
import "./chunk-ISO3NB5K.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-IQXQ4AQZ.js";
import {
  MAT_FAB_DEFAULT_OPTIONS,
  MatButton,
  MatButtonModule,
  MatIconButton,
  MatMiniFabButton
} from "./chunk-SCNNM2NP.js";
import "./chunk-JNHLJ5WD.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatSuffix
} from "./chunk-E42C7BPG.js";
import "./chunk-5GAMCIHS.js";
import {
  MatOption,
  MatOptionModule
} from "./chunk-CKPLMEU7.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  Overlay,
  OverlayModule
} from "./chunk-BP4Z3AA2.js";
import {
  PortalModule
} from "./chunk-TRU4DDI4.js";
import {
  animate,
  sequence,
  style,
  transition,
  trigger
} from "./chunk-SE7XYMVL.js";
import "./chunk-FMKCEK3N.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-DDOUE2ML.js";
import "./chunk-YREDVISG.js";
import {
  A11yModule,
  CdkTrapFocus
} from "./chunk-BZPKCVFI.js";
import {
  coerceBooleanProperty
} from "./chunk-VIO4JNRA.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  SlicePipe
} from "./chunk-CRFGUPDV.js";
import "./chunk-EJBUKSVH.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  NgModule,
  Optional,
  Output,
  Pipe,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-HOPEA7NP.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import {
  BehaviorSubject,
  Subject,
  distinctUntilChanged,
  map,
  shareReplay,
  takeUntil,
  tap
} from "./chunk-PQ7O3X3G.js";
import "./chunk-CJNMZQC3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PZQZAEDH.js";

// node_modules/ts-luxon/dist/ts-luxon.es6.js
var e = class extends Error {
};
var t = class extends e {
  constructor(e2) {
    super(`Invalid DateTime: ${e2.toMessage()}`);
  }
};
var s = class extends e {
  constructor(e2) {
    super(`Invalid Duration: ${e2.toMessage()}`);
  }
};
var n = class extends e {
  constructor(e2) {
    super(`Invalid Interval: ${e2.toMessage()}`);
  }
};
var r = class _r extends e {
  constructor(e2) {
    super(`Invalid unit ${e2}`), Object.setPrototypeOf(this, _r.prototype);
  }
};
var i = class _i extends e {
  constructor(e2) {
    super(`${e2} is an invalid or unknown zone specifier`), Object.setPrototypeOf(this, _i.prototype);
  }
};
var a = class _a extends e {
  constructor(e2) {
    super(e2), Object.setPrototypeOf(this, _a.prototype);
  }
};
var o = class _o extends e {
  constructor(e2) {
    super(e2), Object.setPrototypeOf(this, _o.prototype);
  }
};
var u = class _u extends e {
  constructor() {
    super("Zone is an abstract class"), Object.setPrototypeOf(this, _u.prototype);
  }
};
function c(...e2) {
  e2.length;
}
var l = class {
  get type() {
    throw new u();
  }
  get ianaName() {
    return this.name;
  }
  get name() {
    throw new u();
  }
  get isUniversal() {
    throw new u();
  }
  offsetName(e2, t2) {
    throw c(e2, t2), new u();
  }
  formatOffset(e2, t2) {
    throw c(e2, t2), new u();
  }
  offset(e2) {
    throw c(e2), new u();
  }
  equals(e2) {
    throw c(e2), new u();
  }
  get isValid() {
    throw new u();
  }
};
var h = Intl;
var d = {};
var m = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
var f = {};
var y = class _y extends l {
  static create(e2) {
    return f[e2] || (f[e2] = new _y(e2)), f[e2];
  }
  static resetCache() {
    f = {}, d = {};
  }
  static isValidSpecifier(e2) {
    return this.isValidZone(e2);
  }
  static isValidZone(e2) {
    if (!e2)
      return false;
    try {
      return new h.DateTimeFormat("en-US", { timeZone: e2 }).format(), true;
    } catch (e3) {
      return false;
    }
  }
  constructor(e2) {
    super(), this._zoneName = e2, this._valid = _y.isValidZone(e2);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this._zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName(e2, { format: t2, locale: s2 } = {}) {
    return ut(e2, t2, s2, this.name);
  }
  formatOffset(e2, t2) {
    return dt(this.offset(e2), t2);
  }
  offset(e2) {
    const t2 = new Date(e2);
    if (isNaN(+t2))
      return NaN;
    const s2 = function(e3) {
      if (!d[e3])
        try {
          d[e3] = new h.DateTimeFormat("en-US", { hour12: false, timeZone: e3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", era: "short" });
        } catch (t3) {
          throw new i(e3);
        }
      return d[e3];
    }(this.name);
    let n2;
    const [r2, a2, o2, u2, c2, l2, f2] = typeof s2.formatToParts == typeof isNaN ? function(e3, t3) {
      const s3 = e3.formatToParts(t3), n3 = [];
      for (let e4 = 0; e4 < s3.length; e4++) {
        const { type: t4, value: r3 } = s3[e4], i2 = m[t4];
        "era" === t4 ? n3[i2] = r3 : qe(i2) || (n3[i2] = parseInt(r3, 10));
      }
      return n3;
    }(s2, t2) : function(e3, t3) {
      const s3 = e3.format(t3).replace(/\u200E/g, ""), n3 = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(s3), [, r3, i2, a3, o3, u3, c3, l3] = n3;
      return [a3, r3, i2, o3, u3, c3, l3];
    }(s2, t2);
    "BC" === u2 && (n2 = 1 - Math.abs(+r2));
    let y2 = +t2;
    const g2 = y2 % 1e3;
    return y2 -= g2 >= 0 ? g2 : 1e3 + g2, (rt({ year: n2 || +r2, month: +a2, day: +o2, hour: +(24 === c2 ? 0 : c2), minute: +l2, second: +f2, millisecond: 0 }) - y2) / 6e4;
  }
  equals(e2) {
    return "iana" === e2.type && e2.name === this.name;
  }
  get isValid() {
    return this._valid;
  }
};
var g = "numeric";
var _ = "short";
var w = "long";
var p = { year: g, month: g, day: g };
var k = { year: g, month: _, day: g };
var O = { year: g, month: _, day: g, weekday: _ };
var b = { year: g, month: w, day: g };
var v = { year: g, month: w, day: g, weekday: w };
var S = { hour: g, minute: g };
var T = { hour: g, minute: g, second: g };
var N = { hour: g, minute: g, second: g, timeZoneName: _ };
var D = { hour: g, minute: g, second: g, timeZoneName: w };
var M = { hour: g, minute: g, hourCycle: "h23" };
var I = { hour: g, minute: g, second: g, hourCycle: "h23" };
var j = { hour: g, minute: g, second: g, hourCycle: "h23", timeZoneName: _ };
var E = { hour: g, minute: g, second: g, hourCycle: "h23", timeZoneName: w };
var x = { year: g, month: g, day: g, hour: g, minute: g };
var V = { year: g, month: g, day: g, hour: g, minute: g, second: g };
var W = { year: g, month: _, day: g, hour: g, minute: g };
var C = { year: g, month: _, day: g, hour: g, minute: g, second: g };
var F = { year: g, month: _, day: g, weekday: _, hour: g, minute: g };
var $ = { year: g, month: w, day: g, hour: g, minute: g, timeZoneName: _ };
var Z = { year: g, month: w, day: g, hour: g, minute: g, second: g, timeZoneName: _ };
var L = { year: g, month: w, day: g, weekday: w, hour: g, minute: g, timeZoneName: w };
var z = { year: g, month: w, day: g, weekday: w, hour: g, minute: g, second: g, timeZoneName: w };
var A = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var q = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var U = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Y(e2) {
  switch (e2) {
    case "narrow":
      return [...U];
    case "short":
      return [...q];
    case "long":
      return [...A];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  }
}
var H = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var P = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var R = ["M", "T", "W", "T", "F", "S", "S"];
function J(e2) {
  switch (e2) {
    case "narrow":
      return [...R];
    case "short":
      return [...P];
    case "long":
      return [...H];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
  }
}
var G = ["AM", "PM"];
var B = ["Before Christ", "Anno Domini"];
var Q = ["BC", "AD"];
var K = ["B", "A"];
function X(e2) {
  switch (e2) {
    case "narrow":
      return [...K];
    case "short":
      return [...Q];
    case "long":
      return [...B];
  }
}
var ee = {};
var te = {};
function se(e2, t2 = {}) {
  const s2 = JSON.stringify([e2, t2]);
  let n2 = te[s2];
  return n2 || (n2 = new h.DateTimeFormat(e2, t2), te[s2] = n2), n2;
}
var ne = {};
var re;
var ie = {};
function ae(e2, t2, s2, n2) {
  return "en" === e2.listingMode() ? s2(t2) : n2(t2);
}
var oe = class {
  constructor(e2, t2, s2) {
    const { padTo: n2, floor: r2 } = s2, i2 = function(e3, t3) {
      var s3 = {};
      for (var n3 in e3)
        Object.prototype.hasOwnProperty.call(e3, n3) && t3.indexOf(n3) < 0 && (s3[n3] = e3[n3]);
      if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
        var r3 = 0;
        for (n3 = Object.getOwnPropertySymbols(e3); r3 < n3.length; r3++)
          t3.indexOf(n3[r3]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, n3[r3]) && (s3[n3[r3]] = e3[n3[r3]]);
      }
      return s3;
    }(s2, ["padTo", "floor"]);
    if (this._padTo = n2 || 0, this._floor = r2 || false, !t2 || Object.keys(i2).length > 0) {
      const t3 = Object.assign({ useGrouping: false }, s2);
      this._padTo > 0 && (t3.minimumIntegerDigits = n2), this._inf = function(e3, t4) {
        const s3 = JSON.stringify([e3, t4]);
        let n3 = ne[s3];
        return n3 || (n3 = new h.NumberFormat(e3, t4), ne[s3] = n3), n3;
      }(e2, t3);
    }
  }
  format(e2) {
    if (this._inf) {
      const t2 = this._floor ? Math.floor(e2) : e2;
      return this._inf.format(t2);
    }
    return Be(this._floor ? Math.floor(e2) : et(e2, 3), this._padTo);
  }
};
var ue = class {
  get dtf() {
    return this._dtf;
  }
  constructor(e2, t2, s2) {
    let n2;
    if (this._opts = s2, this._opts.timeZone)
      this._dt = e2;
    else if ("fixed" === e2.zone.type) {
      const t3 = e2.offset / 60 * -1, s3 = t3 >= 0 ? `Etc/GMT+${t3}` : `Etc/GMT${t3}`;
      0 !== e2.offset && y.create(s3).isValid ? (n2 = s3, this._dt = e2) : (n2 = "UTC", this._dt = 0 === e2.offset ? e2 : e2.setZone("UTC").plus({ minutes: e2.offset }), this._originalZone = e2.zone);
    } else
      "system" === e2.zone.type ? this._dt = e2 : "iana" === e2.zone.type ? (this._dt = e2, n2 = e2.zone.name) : (n2 = "UTC", this._dt = e2.setZone("UTC").plus({ minutes: e2.offset }), this._originalZone = e2.zone);
    const r2 = Object.assign(Object.assign({}, this._opts), { timeZone: this._opts.timeZone || n2 });
    this._dtf = se(t2, r2);
  }
  format() {
    return this._originalZone ? this.formatToParts().map(({ value: e2 }) => e2).join("") : this.dtf.format(this._dt.toJSDate());
  }
  formatToParts() {
    const e2 = this.dtf.formatToParts(this._dt.toJSDate());
    return this._originalZone ? e2.map((e3) => {
      if ("timeZoneName" === e3.type) {
        const t2 = this._originalZone.offsetName(this._dt.ts, { locale: this._dt.locale, format: this._opts.timeZoneName });
        return Object.assign(Object.assign({}, e3), { value: t2 });
      }
      return e3;
    }) : e2;
  }
  resolvedOptions() {
    return this._dtf.resolvedOptions();
  }
};
var ce = class {
  constructor(e2, t2, s2) {
    this._opts = Object.assign({ style: "long" }, s2), !t2 && He() && (this._rtf = function(e3, t3 = {}) {
      const s3 = JSON.stringify([e3, t3]);
      let n2 = ie[s3];
      return n2 || (n2 = new h.RelativeTimeFormat(e3, t3), ie[s3] = n2), n2;
    }(e2, s2));
  }
  format(e2, t2) {
    return this._rtf ? this._rtf.format(e2, t2) : function(e3, t3, s2 = "always", n2 = false) {
      const r2 = fs.normalizeUnit(e3), i2 = { years: ["year", "yr."], quarters: ["quarter", "qtr."], months: ["month", "mo."], weeks: ["week", "wk."], days: ["day", "day", "days"], hours: ["hour", "hr."], minutes: ["minute", "min."], seconds: ["second", "sec."], milliseconds: [] }[r2], a2 = -1 === ["hours", "minutes", "seconds"].indexOf(r2);
      if ("auto" === s2 && a2) {
        const e4 = "days" === r2;
        switch (t3) {
          case 1:
            return e4 ? "tomorrow" : `next ${i2[0]}`;
          case -1:
            return e4 ? "yesterday" : `last ${i2[0]}`;
          case 0:
            return e4 ? "today" : `this ${i2[0]}`;
        }
      }
      const o2 = Object.is(t3, -0) || t3 < 0, u2 = Math.abs(t3), c2 = 1 === u2, l2 = n2 ? c2 ? i2[1] : i2[2] || i2[1] : c2 ? i2[0] : r2;
      return o2 ? `${u2} ${l2} ago` : `in ${u2} ${l2}`;
    }(t2, e2, this._opts.numeric, "long" !== this._opts.style);
  }
  formatToParts(e2, t2) {
    return this._rtf ? this._rtf.formatToParts(e2, t2) : [];
  }
};
var le = class _le {
  get fastNumbers() {
    return void 0 === this._fastNumbersCached && (this._fastNumbersCached = this._supportsFastNumbers()), this._fastNumbersCached;
  }
  constructor(e2, t2, s2, n2, r2) {
    const [i2, a2, o2] = function(e3) {
      const t3 = e3.indexOf("-x-");
      -1 !== t3 && (e3 = e3.substring(0, t3));
      const s3 = e3.indexOf("-u-");
      if (-1 === s3)
        return [e3];
      {
        let t4, n3;
        try {
          t4 = se(e3).resolvedOptions(), n3 = e3;
        } catch (r4) {
          const i4 = e3.substring(0, s3);
          t4 = se(i4).resolvedOptions(), n3 = i4;
        }
        const { numberingSystem: r3, calendar: i3 } = t4;
        return [n3, r3, i3];
      }
    }(e2);
    this.locale = i2, this.numberingSystem = t2 || a2, this.outputCalendar = s2 || o2, this._intl = function(e3, t3, s3) {
      return s3 || t3 ? (e3.includes("-u-") || (e3 += "-u"), s3 && (e3 += `-ca-${s3}`), t3 && (e3 += `-nu-${t3}`), e3) : e3;
    }(this.locale, this.numberingSystem, this.outputCalendar), this._weekSettings = n2, this._weekdaysCache = { format: {}, standalone: {} }, this._monthsCache = { format: {}, standalone: {} }, this._meridiemCache = void 0, this._eraCache = {}, this._specifiedLocale = r2, this._fastNumbersCached = void 0;
  }
  static create(e2, t2, s2, n2, r2 = false) {
    const i2 = e2 || Te.defaultLocale, a2 = i2 || (r2 ? "en-US" : (re || (re = new h.DateTimeFormat().resolvedOptions().locale), re)), o2 = t2 || Te.defaultNumberingSystem, u2 = s2 || Te.defaultOutputCalendar, c2 = Je(n2) || Te.defaultWeekSettings;
    return new _le(a2, o2, u2, c2, i2);
  }
  static fromObject({ locale: e2, numberingSystem: t2, outputCalendar: s2, weekSettings: n2 } = {}) {
    return _le.create(e2, t2, s2, n2);
  }
  static fromOpts(e2) {
    return _le.create(e2.locale, e2.numberingSystem, e2.outputCalendar, e2.weekSettings, e2.defaultToEN);
  }
  static resetCache() {
    re = void 0, ee = {}, te = {}, ne = {}, ie = {};
  }
  clone(e2) {
    return e2 && 0 !== Object.getOwnPropertyNames(e2).length ? _le.create(e2.locale || this._specifiedLocale, e2.numberingSystem || this.numberingSystem, e2.outputCalendar || this.outputCalendar, Je(e2.weekSettings) || this._weekSettings, e2.defaultToEN || false) : this;
  }
  dtFormatter(e2, t2 = {}) {
    return new ue(e2, this._intl, t2);
  }
  equals(e2) {
    return this.locale === e2.locale && this.numberingSystem === e2.numberingSystem && this.outputCalendar === e2.outputCalendar;
  }
  eras(e2) {
    return ae(this, e2, X, (e3) => {
      const t2 = { era: e3 };
      return this._eraCache[e3] || (this._eraCache[e3] = [tn.utc(-40, 1, 1), tn.utc(2017, 1, 1)].map((e4) => this.extract(e4, t2, "era"))), this._eraCache[e3];
    });
  }
  extract(e2, t2, s2) {
    const n2 = this.dtFormatter(e2, t2).formatToParts().find((e3) => e3.type.toLowerCase() === s2.toLowerCase());
    if (!n2)
      throw new Error(`Invalid extract field ${s2}`);
    return n2.value;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getWeekSettings() {
    return this._weekSettings ? this._weekSettings : Pe() ? this._getCachedWeekInfo(this.locale) : wt;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  isEnglish() {
    return !!~["en", "en-us"].indexOf(this.locale.toLowerCase()) || new h.DateTimeFormat(this._intl).resolvedOptions().locale.startsWith("en-us");
  }
  listFormatter(e2 = {}) {
    return function(e3, t2 = {}) {
      const s2 = JSON.stringify([e3, t2]);
      let n2 = ee[s2];
      return n2 || (n2 = new h.ListFormat(e3, t2), ee[s2] = n2), n2;
    }(this._intl, e2);
  }
  listingMode() {
    const e2 = this.isEnglish(), t2 = !(null !== this.numberingSystem && "latn" !== this.numberingSystem || null !== this.outputCalendar && "gregory" !== this.outputCalendar);
    return e2 && t2 ? "en" : "intl";
  }
  meridiems() {
    return ae(this, "long", () => G, () => (void 0 === this._meridiemCache && (this._meridiemCache = [tn.utc(2016, 11, 13, 9), tn.utc(2016, 11, 13, 19)].map((e2) => this.extract(e2, { hour: "numeric", hourCycle: "h12" }, "dayPeriod"))), this._meridiemCache));
  }
  months(e2, t2 = false) {
    return ae(this, e2, Y, (e3) => {
      const s2 = t2 ? { month: e3, day: "numeric" } : { month: e3 }, n2 = t2 ? "format" : "standalone";
      return this._monthsCache[n2][e3] || (this._monthsCache[n2][e3] = function(e4) {
        const t3 = [];
        for (let s3 = 1; s3 <= 12; s3++) {
          const n3 = tn.utc(2009, s3, 1);
          t3.push(e4(n3));
        }
        return t3;
      }((e4) => this.extract(e4, s2, "month"))), this._monthsCache[n2][e3];
    });
  }
  numberFormatter(e2 = {}) {
    return new oe(this._intl, this.fastNumbers, e2);
  }
  redefaultToEN(e2 = {}) {
    return this.clone(Object.assign(Object.assign({}, e2), { defaultToEN: true }));
  }
  redefaultToSystem(e2 = {}) {
    return this.clone(Object.assign(Object.assign({}, e2), { defaultToEN: false }));
  }
  relFormatter(e2 = {}) {
    return new ce(this._intl, this.isEnglish(), e2);
  }
  weekdays(e2, t2 = false) {
    return ae(this, e2, J, (e3) => {
      const s2 = t2 ? { weekday: e3, year: "numeric", month: "long", day: "numeric" } : { weekday: e3 }, n2 = t2 ? "format" : "standalone";
      return this._weekdaysCache[n2][e3] || (this._weekdaysCache[n2][e3] = function(e4) {
        const t3 = [];
        for (let s3 = 1; s3 <= 7; s3++) {
          const n3 = tn.utc(2016, 11, 13 + s3);
          t3.push(e4(n3));
        }
        return t3;
      }((e4) => this.extract(e4, s2, "weekday"))), this._weekdaysCache[n2][e3];
    });
  }
  _getCachedWeekInfo(e2) {
    let t2 = _le._weekInfoCache[e2];
    if (!t2) {
      const s2 = new h.Locale(e2);
      t2 = "getWeekInfo" in s2 ? s2.getWeekInfo() : s2.weekInfo, _le._weekInfoCache[e2] = t2;
    }
    return t2;
  }
  _supportsFastNumbers() {
    return (!this.numberingSystem || "latn" === this.numberingSystem) && ("latn" === this.numberingSystem || !this.locale || this.locale.startsWith("en") || "latn" === h.DateTimeFormat(this._intl).resolvedOptions().numberingSystem);
  }
};
le._weekInfoCache = {};
var he = null;
var de = class _de extends l {
  static get utcInstance() {
    return null === he && (he = new _de(0)), he;
  }
  get isValid() {
    return true;
  }
  get ianaName() {
    return 0 === this._fixed ? "Etc/UTC" : `Etc/GMT${dt(-this._fixed, "narrow")}`;
  }
  get name() {
    return 0 === this._fixed ? "UTC" : `UTC${dt(this._fixed, "narrow")}`;
  }
  get type() {
    return "fixed";
  }
  get isUniversal() {
    return true;
  }
  constructor(e2) {
    super(), this._fixed = e2;
  }
  static instance(e2) {
    return 0 === e2 ? _de.utcInstance : new _de(e2);
  }
  static parseSpecifier(e2) {
    if (e2) {
      const t2 = e2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t2)
        return new _de(ct(t2[1], t2[2]));
    }
    return null;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e2, t2) {
    return dt(this._fixed, t2);
  }
  offset() {
    return this._fixed;
  }
  equals(e2) {
    return "fixed" === e2.type && e2._fixed === this._fixed;
  }
};
var me = class _me extends l {
  constructor(e2) {
    super(), this._zoneName = e2, Object.setPrototypeOf(this, _me.prototype);
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this._zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return false;
  }
  get isValid() {
    return false;
  }
};
var fe = null;
var ye = class _ye extends l {
  static get instance() {
    return null === fe && (fe = new _ye()), fe;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return false;
  }
  offsetName(e2, { format: t2, locale: s2 }) {
    return ut(e2, t2, s2);
  }
  formatOffset(e2, t2) {
    return dt(this.offset(e2), t2);
  }
  offset(e2) {
    return -new Date(e2).getTimezoneOffset();
  }
  equals(e2) {
    return "system" === e2.type;
  }
  get isValid() {
    return true;
  }
};
var ge = (e2, t2) => {
  if (qe(e2) || null === e2)
    return t2;
  if (e2 instanceof l)
    return e2;
  if ("string" == typeof e2) {
    const s2 = e2.toLowerCase();
    return "default" === s2 ? t2 : "local" === s2 || "system" === s2 ? ye.instance : "utc" === s2 || "gmt" === s2 ? de.utcInstance : de.parseSpecifier(s2) || y.create(e2);
  }
  return Ue(e2) ? de.instance(e2) : "object" == typeof e2 && "offset" in e2 && "function" == typeof e2.offset ? e2 : new me(e2);
};
var _e;
var we;
var pe;
var ke;
var Oe = () => Date.now();
var be = "system";
var ve = 60;
var Se = false;
var Te = class {
  static set defaultLocale(e2) {
    _e = e2;
  }
  static get defaultLocale() {
    return _e;
  }
  static set defaultNumberingSystem(e2) {
    we = e2;
  }
  static get defaultNumberingSystem() {
    return we;
  }
  static set defaultOutputCalendar(e2) {
    pe = e2;
  }
  static get defaultOutputCalendar() {
    return pe;
  }
  static set defaultWeekSettings(e2) {
    ke = Je(e2);
  }
  static get defaultWeekSettings() {
    return ke;
  }
  static set defaultZone(e2) {
    be = e2;
  }
  static get defaultZone() {
    return ge(be, ye.instance);
  }
  static set defaultZoneLike(e2) {
    be = e2;
  }
  static set now(e2) {
    Oe = e2;
  }
  static get now() {
    return Oe;
  }
  static set throwOnInvalid(e2) {
    Se = e2;
  }
  static get throwOnInvalid() {
    return Se;
  }
  static set twoDigitCutoffYear(e2) {
    ve = e2 % 100;
  }
  static get twoDigitCutoffYear() {
    return ve;
  }
  static resetCaches() {
    le.resetCache(), y.resetCache();
  }
};
var Ne = class {
  constructor(e2, t2) {
    this.reason = e2, this.explanation = t2, this._formattedExplanation = "", t2 && (this._formattedExplanation = `: ${t2}`);
  }
  toMessage() {
    return `${this.reason}${this._formattedExplanation}`;
  }
};
var De = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var Me = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Ie(e2, t2) {
  return new Ne("unit out of range", `you specified ${t2} (of type ${typeof t2}) as a ${e2}, which is invalid`);
}
function je(e2, t2, s2) {
  return s2 + (tt(e2) ? Me : De)[t2 - 1];
}
function Ee(e2, t2) {
  const s2 = tt(e2) ? Me : De, n2 = s2.findIndex((e3) => e3 < t2);
  return { month: n2 + 1, day: t2 - s2[n2] };
}
function xe(e2, t2, s2) {
  const n2 = new Date(Date.UTC(e2, t2 - 1, s2));
  e2 < 100 && e2 >= 0 && n2.setUTCFullYear(n2.getUTCFullYear() - 1900);
  const r2 = n2.getUTCDay();
  return 0 === r2 ? 7 : r2;
}
function Ve(e2, t2 = wt.minimalDays, s2 = wt.firstDay) {
  const { year: n2, month: r2, day: i2 } = e2, a2 = je(n2, r2, i2), o2 = Le(xe(n2, r2, i2), s2);
  let u2, c2 = Math.floor((a2 - o2 + 14 - t2) / 7);
  return c2 < 1 ? (u2 = n2 - 1, c2 = at(u2, t2, s2)) : c2 > at(n2, t2, s2) ? (u2 = n2 + 1, c2 = 1) : u2 = n2, Object.assign({ weekYear: u2, weekNumber: c2, weekday: o2 }, mt(e2));
}
function We(e2, t2 = wt.minimalDays, s2 = wt.firstDay) {
  const { weekYear: n2, weekNumber: r2, weekday: i2 } = e2, a2 = Le(xe(n2, 1, t2), s2), o2 = st(n2);
  let u2, c2 = 7 * r2 + i2 - a2 - 7 + t2;
  c2 < 1 ? (u2 = n2 - 1, c2 += st(u2)) : c2 > o2 ? (u2 = n2 + 1, c2 -= st(n2)) : u2 = n2;
  const { month: l2, day: h2 } = Ee(u2, c2);
  return Object.assign({ year: u2, month: l2, day: h2 }, mt(e2));
}
function Ce(e2) {
  const { year: t2, month: s2, day: n2 } = e2, r2 = je(t2, s2, n2);
  return Object.assign({ year: t2, ordinal: r2 }, mt(e2));
}
function Fe(e2) {
  const { year: t2, ordinal: s2 } = e2, { month: n2, day: r2 } = Ee(t2, s2);
  return Object.assign({ year: t2, month: n2, day: r2 }, mt(e2));
}
function $e(e2) {
  const t2 = Ye(e2.year), s2 = Ge(e2.month, 1, 12), n2 = Ge(e2.day, 1, nt(e2.year, e2.month));
  return t2 ? s2 ? !n2 && Ie("day", e2.day) : Ie("month", e2.month) : Ie("year", e2.year);
}
function Ze(e2) {
  const { hour: t2, minute: s2, second: n2, millisecond: r2 } = e2, i2 = Ge(t2, 0, 23) || 24 === t2 && 0 === s2 && 0 === n2 && 0 === r2, a2 = Ge(s2, 0, 59), o2 = Ge(n2, 0, 59), u2 = Ge(r2, 0, 999);
  return i2 ? a2 ? o2 ? !u2 && Ie("millisecond", r2) : Ie("second", n2) : Ie("minute", s2) : Ie("hour", t2);
}
function Le(e2, t2) {
  return (e2 - t2 + 7) % 7 + 1;
}
function ze(e2, t2) {
  if (Ae(e2.localWeekday) || Ae(e2.localWeekNumber) || Ae(e2.localWeekYear)) {
    if (Ae(e2.weekday) || Ae(e2.weekNumber) || Ae(e2.weekYear))
      throw new a("Cannot mix locale-based week fields with ISO-based week fields");
    return Ae(e2.localWeekday) && (e2.weekday = e2.localWeekday), Ae(e2.localWeekNumber) && (e2.weekNumber = e2.localWeekNumber), Ae(e2.localWeekYear) && (e2.weekYear = e2.localWeekYear), delete e2.localWeekday, delete e2.localWeekNumber, delete e2.localWeekYear, { minDaysInFirstWeek: t2.getMinDaysInFirstWeek(), startOfWeek: t2.getStartOfWeek() };
  }
  return { minDaysInFirstWeek: wt.minimalDays, startOfWeek: wt.firstDay };
}
function Ae(e2) {
  return void 0 !== e2;
}
function qe(e2) {
  return void 0 === e2;
}
function Ue(e2) {
  return "number" == typeof e2;
}
function Ye(e2) {
  return Ue(e2) && e2 % 1 == 0;
}
function He() {
  try {
    return void 0 !== h && !!h.RelativeTimeFormat;
  } catch (e2) {
    return false;
  }
}
function Pe() {
  try {
    return void 0 !== h && !!h.Locale && ("weekInfo" in h.Locale.prototype || "getWeekInfo" in h.Locale.prototype);
  } catch (e2) {
    return false;
  }
}
function Re(e2, t2, s2) {
  if (0 === e2.length)
    return;
  return e2.reduce((e3, n2) => {
    const r2 = [t2(n2), n2];
    return s2(e3[0], r2[0]) === e3[0] ? e3 : r2;
  }, [t2(e2[0]), e2[0]])[1];
}
function Je(e2) {
  if (e2) {
    if ("object" != typeof e2)
      throw new o("Week settings must be an object");
    if (!Ge(e2.firstDay, 1, 7) || !Ge(e2.minimalDays, 1, 7) || !Array.isArray(e2.weekend) || e2.weekend.some((e3) => !Ge(e3, 1, 7)))
      throw new o("Invalid week settings");
    return { firstDay: e2.firstDay, minimalDays: e2.minimalDays, weekend: e2.weekend };
  }
}
function Ge(e2, t2, s2) {
  return Ye(e2) && e2 >= t2 && e2 <= s2;
}
function Be(e2, t2 = 2) {
  const s2 = +e2 < 0 ? "-" : "", n2 = s2 ? -1 * +e2 : e2;
  let r2;
  return r2 = n2.toString().length < t2 ? ("0".repeat(t2) + n2).slice(-t2) : n2.toString(), `${s2}${r2}`;
}
function Qe(e2) {
  if (e2)
    return parseInt(e2, 10);
}
function Ke(e2) {
  if (e2)
    return parseFloat(e2);
}
function Xe(e2) {
  if (!qe(e2) && null !== e2 && "" !== e2) {
    const t2 = 1e3 * parseFloat("0." + e2);
    return Math.floor(t2);
  }
}
function et(e2, t2, s2 = false) {
  const n2 = Math.pow(10, t2);
  return (s2 ? Math.trunc : Math.round)(e2 * n2) / n2;
}
function tt(e2) {
  return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
}
function st(e2) {
  return tt(e2) ? 366 : 365;
}
function nt(e2, t2) {
  const s2 = function(e3, t3) {
    return e3 - t3 * Math.floor(e3 / t3);
  }(t2 - 1, 12) + 1;
  return [31, tt(e2 + (t2 - s2) / 12) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][s2 - 1];
}
function rt(e2) {
  let t2 = Date.UTC(e2.year, e2.month - 1, e2.day, e2.hour, e2.minute, e2.second, e2.millisecond);
  return e2.year < 100 && e2.year >= 0 && (t2 = new Date(t2), t2.setUTCFullYear(e2.year, e2.month - 1, e2.day)), +t2;
}
function it(e2, t2, s2) {
  return -Le(xe(e2, 1, t2), s2) + t2 - 1;
}
function at(e2, t2 = 4, s2 = 1) {
  const n2 = it(e2, t2, s2), r2 = it(e2 + 1, t2, s2);
  return (st(e2) - n2 + r2) / 7;
}
function ot(e2) {
  return e2 > 99 ? e2 : e2 > Te.twoDigitCutoffYear ? 1900 + e2 : 2e3 + e2;
}
function ut(e2, t2, s2, n2) {
  const r2 = new Date(e2), i2 = { hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: n2 }, a2 = Object.assign({ timeZoneName: t2 }, i2), o2 = new h.DateTimeFormat(s2, a2).formatToParts(r2).find((e3) => "timezonename" === e3.type.toLowerCase());
  return o2 ? o2.value : null;
}
function ct(e2, t2) {
  let s2 = parseInt(e2, 10);
  Number.isNaN(s2) && (s2 = 0);
  const n2 = parseInt(t2, 10) || 0;
  return 60 * s2 + (s2 < 0 || Object.is(s2, -0) ? -n2 : n2);
}
function lt(e2) {
  const t2 = Number(e2);
  if ("boolean" == typeof e2 || "" === e2 || Number.isNaN(t2))
    throw new o(`Invalid unit value ${e2}`);
  return t2;
}
function ht(e2, t2) {
  return Object.keys(e2).reduce((s2, n2) => (void 0 !== e2[n2] && null !== e2[n2] && (s2[t2(n2)] = lt(e2[n2])), s2), {});
}
function dt(e2, t2) {
  const s2 = Math.trunc(Math.abs(e2 / 60)), n2 = Math.trunc(Math.abs(e2 % 60)), r2 = e2 >= 0 ? "+" : "-";
  switch (t2) {
    case "short":
      return `${r2}${Be(s2, 2)}:${Be(n2, 2)}`;
    case "narrow":
      return `${r2}${s2}${n2 > 0 ? `:${n2}` : ""}`;
    case "techie":
      return `${r2}${Be(s2, 2)}${Be(n2, 2)}`;
    default:
      throw new RangeError(`Value format ${t2} is out of range for property format`);
  }
}
function mt(e2) {
  return function(e3, t2) {
    return t2.reduce((t3, s2) => (t3[s2] = e3[s2], t3), {});
  }(e2, ["hour", "minute", "second", "millisecond"]);
}
var ft = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var yt = ft.slice(0).reverse();
var gt = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
var _t = { year: "year", years: "year", quarter: "quarter", quarters: "quarter", month: "month", months: "month", day: "day", days: "day", hour: "hour", hours: "hour", localweeknumber: "localWeekNumber", localweeknumbers: "localWeekNumber", localweekday: "localWeekday", localweekdays: "localWeekday", localweekyear: "localWeekYear", localweekyears: "localWeekYear", minute: "minute", minutes: "minute", second: "second", seconds: "second", millisecond: "millisecond", milliseconds: "millisecond", weekday: "weekday", weekdays: "weekday", weeknumber: "weekNumber", weeksnumber: "weekNumber", weeknumbers: "weekNumber", weekyear: "weekYear", weekyears: "weekYear", ordinal: "ordinal" };
var wt = { firstDay: 1, minimalDays: 4, weekend: [6, 7] };
function pt(e2, t2) {
  let s2 = "";
  for (const n2 of e2)
    n2.literal ? s2 += n2.val : s2 += t2(n2.val);
  return s2;
}
var kt = { D: p, DD: k, DDD: b, DDDD: v, t: S, tt: T, ttt: N, tttt: D, T: M, TT: I, TTT: j, TTTT: E, f: x, ff: W, fff: $, ffff: L, F: V, FF: C, FFF: Z, FFFF: z };
var Ot = class _Ot {
  constructor(e2, t2) {
    this._opts = t2, this._loc = e2, this._systemLoc = void 0;
  }
  static create(e2, t2 = {}) {
    return new _Ot(e2, t2);
  }
  static macroTokenToFormatOpts(e2) {
    return kt[e2];
  }
  static parseFormat(e2) {
    let t2 = null, s2 = "", n2 = false;
    const r2 = [];
    for (let i2 = 0; i2 < e2.length; i2++) {
      const a2 = e2.charAt(i2);
      "'" === a2 ? (s2.length > 0 && r2.push({ literal: n2 || /^\s+$/.test(s2), val: s2 }), t2 = null, s2 = "", n2 = !n2) : n2 || a2 === t2 ? s2 += a2 : (s2.length > 0 && r2.push({ literal: /^\s+$/.test(s2), val: s2 }), s2 = a2, t2 = a2);
    }
    return s2.length > 0 && r2.push({ literal: n2 || /^\s+$/.test(s2), val: s2 }), r2;
  }
  dtFormatter(e2, t2 = {}) {
    return this._loc.dtFormatter(e2, Object.assign(Object.assign({}, this._opts), t2));
  }
  formatDateTime(e2, t2) {
    return this.dtFormatter(e2, t2).format();
  }
  formatDateTimeFromString(e2, t2) {
    const s2 = "en" === this._loc.listingMode(), n2 = this._loc.outputCalendar && "gregory" !== this._loc.outputCalendar, r2 = (t3, s3) => this._loc.extract(e2, t3, s3), i2 = (t3) => e2.isOffsetFixed && 0 === e2.offset && t3.allowZ ? "Z" : e2.isValid ? e2.zone.formatOffset(e2.ts, t3.format) : "", a2 = () => s2 ? function(e3) {
      return G[e3.hour < 12 ? 0 : 1];
    }(e2) : r2({ hour: "numeric", hourCycle: "h12" }, "dayPeriod"), o2 = (t3, n3) => s2 ? function(e3, t4) {
      return Y(t4)[e3.month - 1];
    }(e2, t3) : r2(n3 ? { month: t3 } : { month: t3, day: "numeric" }, "month"), u2 = (t3, n3) => s2 ? function(e3, t4) {
      return J(t4)[e3.weekday - 1];
    }(e2, t3) : r2(n3 ? { weekday: t3 } : { weekday: t3, month: "long", day: "numeric" }, "weekday"), c2 = (t3) => {
      const s3 = _Ot.macroTokenToFormatOpts(t3);
      return s3 ? this.formatWithSystemDefault(e2, s3) : t3;
    }, l2 = (t3) => s2 ? function(e3, t4) {
      return X(t4)[e3.year < 0 ? 0 : 1];
    }(e2, t3) : r2({ era: t3 }, "era");
    return pt(_Ot.parseFormat(t2), (t3) => {
      switch (t3) {
        case "S":
          return this.num(e2.millisecond);
        case "u":
        case "SSS":
          return this.num(e2.millisecond, 3);
        case "s":
          return this.num(e2.second);
        case "ss":
          return this.num(e2.second, 2);
        case "uu":
          return this.num(Math.floor(e2.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e2.millisecond / 100));
        case "m":
          return this.num(e2.minute);
        case "mm":
          return this.num(e2.minute, 2);
        case "h":
          return this.num(e2.hour % 12 == 0 ? 12 : e2.hour % 12);
        case "hh":
          return this.num(e2.hour % 12 == 0 ? 12 : e2.hour % 12, 2);
        case "H":
          return this.num(e2.hour);
        case "HH":
          return this.num(e2.hour, 2);
        case "Z":
          return i2({ format: "narrow", allowZ: this._opts.allowZ });
        case "ZZ":
          return i2({ format: "short", allowZ: this._opts.allowZ });
        case "ZZZ":
          return i2({ format: "techie", allowZ: this._opts.allowZ });
        case "ZZZZ":
          return e2.zone.offsetName(e2.ts, { format: "short", locale: this._loc.locale }) || "";
        case "ZZZZZ":
          return e2.zone.offsetName(e2.ts, { format: "long", locale: this._loc.locale }) || "";
        case "z":
          return e2.zoneName || "";
        case "a":
          return a2();
        case "d":
          return n2 ? r2({ day: "numeric" }, "day") : this.num(e2.day);
        case "dd":
          return n2 ? r2({ day: "2-digit" }, "day") : this.num(e2.day, 2);
        case "c":
        case "E":
          return this.num(e2.weekday);
        case "ccc":
          return u2("short", true);
        case "cccc":
          return u2("long", true);
        case "ccccc":
          return u2("narrow", true);
        case "EEE":
          return u2("short", false);
        case "EEEE":
          return u2("long", false);
        case "EEEEE":
          return u2("narrow", false);
        case "L":
          return n2 ? r2({ month: "numeric", day: "numeric" }, "month") : this.num(e2.month);
        case "LL":
          return n2 ? r2({ month: "2-digit", day: "numeric" }, "month") : this.num(e2.month, 2);
        case "LLL":
          return o2("short", true);
        case "LLLL":
          return o2("long", true);
        case "LLLLL":
          return o2("narrow", true);
        case "M":
          return n2 ? r2({ month: "numeric" }, "month") : this.num(e2.month);
        case "MM":
          return n2 ? r2({ month: "2-digit" }, "month") : this.num(e2.month, 2);
        case "MMM":
          return o2("short", false);
        case "MMMM":
          return o2("long", false);
        case "MMMMM":
          return o2("narrow", false);
        case "y":
          return n2 ? r2({ year: "numeric" }, "year") : this.num(e2.year);
        case "yy":
          return n2 ? r2({ year: "2-digit" }, "year") : this.num(parseInt(e2.year.toString().slice(-2), 10), 2);
        case "yyyy":
          return n2 ? r2({ year: "numeric" }, "year") : this.num(e2.year, 4);
        case "yyyyyy":
          return n2 ? r2({ year: "numeric" }, "year") : this.num(e2.year, 6);
        case "G":
          return l2("short");
        case "GG":
          return l2("long");
        case "GGGGG":
          return l2("narrow");
        case "kk":
          return this.num(parseInt(e2.weekYear.toString().slice(-2), 10), 2);
        case "kkkk":
          return this.num(e2.weekYear, 4);
        case "W":
          return this.num(e2.weekNumber);
        case "WW":
          return this.num(e2.weekNumber, 2);
        case "o":
          return this.num(e2.ordinal);
        case "ooo":
          return this.num(e2.ordinal, 3);
        case "q":
          return this.num(e2.quarter);
        case "qq":
          return this.num(e2.quarter, 2);
        case "X":
          return this.num(Math.floor(e2.ts / 1e3));
        case "x":
          return this.num(e2.ts);
        default:
          return c2(t3);
      }
    });
  }
  formatDateTimeParts(e2, t2) {
    return this.dtFormatter(e2, t2).formatToParts();
  }
  formatDurationFromString(e2, t2) {
    const s2 = (e3) => {
      switch (e3[0]) {
        case "S":
          return "milliseconds";
        case "s":
          return "seconds";
        case "m":
          return "minutes";
        case "h":
          return "hours";
        case "d":
          return "days";
        case "M":
          return "months";
        case "y":
          return "years";
        default:
          return;
      }
    }, n2 = _Ot.parseFormat(t2), r2 = n2.reduce((e3, { literal: t3, val: s3 }) => t3 ? e3 : e3.concat(s3), []);
    return pt(n2, /* @__PURE__ */ ((e3) => (t3) => {
      const n3 = s2(t3);
      return n3 ? this.num(e3.get(n3), t3.length) : t3;
    })(e2.shiftTo(...r2.map(s2).filter((e3) => !!e3))));
  }
  formatInterval(e2, t2 = {}) {
    if (!e2.isValid)
      throw Error("Invalid Interval provided!");
    return this.dtFormatter(e2.start, t2).dtf.formatRange(e2.start.toJSDate(), e2.end.toJSDate());
  }
  formatWithSystemDefault(e2, t2) {
    void 0 === this._systemLoc && (this._systemLoc = this._loc.redefaultToSystem());
    return this._systemLoc.dtFormatter(e2, Object.assign(Object.assign({}, this._opts), t2)).format();
  }
  num(e2, t2 = 0) {
    if (this._opts.forceSimple)
      return Be(e2, t2);
    const s2 = Object.assign({}, this._opts);
    return t2 > 0 && (s2.padTo = t2), this._loc.numberFormatter(s2).format(e2);
  }
  resolvedOptions(e2, t2 = {}) {
    return this.dtFormatter(e2, t2).resolvedOptions();
  }
};
function bt(...e2) {
  const t2 = e2.reduce((e3, t3) => e3 + t3.source, "");
  return RegExp(`^${t2}$`);
}
function vt(...e2) {
  return (t2) => e2.reduce(([e3, s2, n2], r2) => {
    const [i2, a2, o2] = r2(t2, n2);
    return [Object.assign(Object.assign({}, e3), i2), a2 || s2, o2];
  }, [{}, null, 1]).slice(0, 2);
}
function St(e2, ...t2) {
  if (null == e2)
    return [null, null];
  for (const [s2, n2] of t2) {
    const t3 = s2.exec(e2);
    if (t3)
      return n2(t3);
  }
  return [null, null];
}
function Tt(...e2) {
  return (t2, s2) => {
    const n2 = {};
    let r2;
    for (r2 = 0; r2 < e2.length; r2++)
      n2[e2[r2]] = Qe(t2[s2 + r2]);
    return [n2, null, s2 + r2];
  };
}
var Nt = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
var Dt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var Mt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var It = RegExp(`${Mt.source}${`(?:${Dt.source}?(?:\\[(${Nt.source})\\])?)?`}`);
var jt = RegExp(`(?:T${It.source})?`);
var Et = Tt("weekYear", "weekNumber", "weekday");
var xt = Tt("year", "ordinal");
var Vt = RegExp(`${Mt.source} ?(?:${Dt.source}|(${Nt.source}))?`);
var Wt = RegExp(`(?: ${Vt.source})?`);
function Ct(e2, t2, s2) {
  return qe(e2[t2]) ? s2 : Qe(e2[t2]);
}
function Ft(e2, t2) {
  return [{ hour: Ct(e2, t2, 0), minute: Ct(e2, t2 + 1, 0), second: Ct(e2, t2 + 2, 0), millisecond: Xe(e2[t2 + 3]) }, null, t2 + 4];
}
function $t(e2, t2) {
  const s2 = !e2[t2] && !e2[t2 + 1], n2 = ct(e2[t2 + 1], e2[t2 + 2]);
  return [{}, s2 ? null : de.instance(n2), t2 + 3];
}
function Zt(e2, t2) {
  return [{}, e2[t2] ? y.create(e2[t2]) : null, t2 + 1];
}
var Lt = RegExp(`^T?${Mt.source}$`);
var zt = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function At(e2) {
  const [t2, s2, n2, r2, i2, a2, o2, u2, c2] = e2, l2 = t2.startsWith("-"), h2 = !!u2 && u2.startsWith("-"), d2 = (e3, t3 = false) => "number" == typeof e3 && (t3 || e3 && l2) ? -e3 : e3;
  return [{ years: d2(Ke(s2)), months: d2(Ke(n2)), weeks: d2(Ke(r2)), days: d2(Ke(i2)), hours: d2(Ke(a2)), minutes: d2(Ke(o2)), seconds: d2(Ke(u2), "-0" === u2), milliseconds: d2(Xe(c2), h2) }];
}
var qt = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
function Ut(e2, t2, s2, n2, r2, i2, a2) {
  let o2;
  e2 && (o2 = e2.length > 3 ? H.indexOf(e2) + 1 : P.indexOf(e2) + 1);
  return { year: 2 === t2.length ? ot(Qe(t2)) : Qe(t2), month: q.indexOf(s2) + 1, day: Qe(n2), hour: Qe(r2), minute: Qe(i2), second: Qe(a2), weekday: o2 };
}
var Yt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Ht(e2) {
  const [, t2, s2, n2, r2, i2, a2, o2, u2, c2, l2, h2] = e2, d2 = Ut(t2, r2, n2, s2, i2, a2, o2);
  let m2;
  return m2 = u2 ? qt[u2] : c2 ? 0 : ct(l2, h2), [d2, new de(m2)];
}
var Pt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
var Rt = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
var Jt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Gt(e2) {
  const [, t2, s2, n2, r2, i2, a2, o2] = e2;
  return [Ut(t2, r2, n2, s2, i2, a2, o2), de.utcInstance];
}
function Bt(e2) {
  const [, t2, s2, n2, r2, i2, a2, o2] = e2;
  return [Ut(t2, o2, s2, n2, r2, i2, a2), de.utcInstance];
}
var Qt = bt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, jt);
var Kt = bt(/(\d{4})-?W(\d\d)(?:-?(\d))?/, jt);
var Xt = bt(/(\d{4})-?(\d{3})/, jt);
var es = bt(It);
var ts = vt(function(e2, t2) {
  return [{ year: Ct(e2, t2, 0), month: Ct(e2, t2 + 1, 1), day: Ct(e2, t2 + 2, 1) }, null, t2 + 3];
}, Ft, $t, Zt);
var ss = vt(Et, Ft, $t, Zt);
var ns = vt(xt, Ft, $t, Zt);
var rs = vt(Ft, $t, Zt);
var is = bt(/(\d{4})-(\d\d)-(\d\d)/, Wt);
var as = bt(Vt);
var os = vt(Ft, $t, Zt);
var us = { weeks: { days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5 }, days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 }, hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 }, minutes: { seconds: 60, milliseconds: 6e4 }, seconds: { milliseconds: 1e3 } };
var cs = Object.assign({ years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6 }, quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5 }, months: { weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6 } }, us);
var ls = 365.2425;
var hs = 30.436875;
var ds = Object.assign({ years: { quarters: 4, months: 12, weeks: 52.1775, days: ls, hours: 8765.82, minutes: 525949.2, seconds: 525949.2 * 60, milliseconds: 525949.2 * 60 * 1e3 }, quarters: { months: 3, weeks: 13.044375, days: 91.310625, hours: 2191.455, minutes: 131487.3, seconds: 525949.2 * 60 / 4, milliseconds: 7889237999999999e-6 }, months: { weeks: 4.3481250000000005, days: hs, hours: 730.485, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3 } }, us);
function ms(e2, t2) {
  var s2;
  let n2 = null !== (s2 = t2.milliseconds) && void 0 !== s2 ? s2 : 0;
  for (const s3 of yt.slice(1))
    t2[s3] && (n2 += t2[s3] * e2[s3].milliseconds);
  return n2;
}
var fs = class _fs {
  static get _INVALID() {
    return "Invalid Duration";
  }
  get conversionAccuracy() {
    return this._conversionAccuracy;
  }
  get days() {
    return this.isValid ? this._values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this._values.hours || 0 : NaN;
  }
  get invalidExplanation() {
    return this._invalid ? this._invalid.explanation : null;
  }
  get invalidReason() {
    return this._invalid ? this._invalid.reason : null;
  }
  get isValid() {
    return null === this._invalid;
  }
  get locale() {
    return this.isValid ? this._loc.locale : void 0;
  }
  get matrix() {
    return this._matrix;
  }
  get milliseconds() {
    return this.isValid ? this._values.milliseconds || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this._values.minutes || 0 : NaN;
  }
  get months() {
    return this.isValid ? this._values.months || 0 : NaN;
  }
  get numberingSystem() {
    return this.isValid ? this._loc.numberingSystem : void 0;
  }
  get quarters() {
    return this.isValid ? this._values.quarters || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this._values.seconds || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this._values.weeks || 0 : NaN;
  }
  get years() {
    return this.isValid ? this._values.years || 0 : NaN;
  }
  constructor(e2) {
    let t2, s2;
    "longterm" === e2.conversionAccuracy || false ? (s2 = "longterm", t2 = ds) : (s2 = "casual", t2 = cs), e2.matrix && (t2 = e2.matrix), this._values = e2.values || {}, this._loc = e2.loc || le.create(), this._conversionAccuracy = s2, this._invalid = e2.invalid || null, this._matrix = t2, this._isLuxonDuration = true;
  }
  static fromDurationLike(e2) {
    if (Ue(e2))
      return _fs.fromMillis(e2);
    if (_fs.isDuration(e2))
      return e2;
    if ("object" == typeof e2)
      return _fs.fromObject(e2);
    throw new o(`Unknown duration argument ${e2} of type ${typeof e2}`);
  }
  static fromISO(e2, t2) {
    const [s2] = function(e3) {
      return St(e3, [zt, At]);
    }(e2);
    return s2 ? _fs.fromObject(s2, t2) : _fs.invalid("unparsable", `the input "${e2}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e2, t2 = {}) {
    const [s2] = function(e3) {
      return St(e3, [Lt, vt(Ft)]);
    }(e2);
    return s2 ? _fs.fromObject(s2, t2) : _fs.invalid("unparsable", `the input "${e2}" can't be parsed as ISO 8601`);
  }
  static fromMillis(e2, t2 = {}) {
    return _fs.fromObject({ milliseconds: e2 }, t2);
  }
  static fromObject(e2, t2 = {}) {
    if (null == e2 || "object" != typeof e2)
      throw new o("Duration.fromObject: argument expected to be an object, got " + (null === e2 ? "null" : typeof e2));
    return new _fs({ values: ht(e2, _fs.normalizeUnit), loc: le.fromObject(t2), conversionAccuracy: t2.conversionAccuracy, matrix: t2.matrix });
  }
  static invalid(e2, t2) {
    if (!e2)
      throw new o("need to specify a reason the Duration is invalid");
    const n2 = e2 instanceof Ne ? e2 : new Ne(e2, t2);
    if (Te.throwOnInvalid)
      throw new s(n2);
    return new _fs({ invalid: n2 });
  }
  static isDuration(e2) {
    return !!e2 && e2._isLuxonDuration || false;
  }
  static normalizeUnit(e2) {
    const t2 = { year: "years", years: "years", quarter: "quarters", quarters: "quarters", month: "months", months: "months", localWeekNumber: "localWeekNumbers", localWeekYear: "localWeekYears", localWeekday: "localWeekdays", localWeekNumbers: "localWeekNumbers", localWeekYears: "localWeekYears", localWeekdays: "localWeekdays", week: "weeks", weeks: "weeks", day: "days", days: "days", hour: "hours", hours: "hours", minute: "minutes", minutes: "minutes", second: "seconds", seconds: "seconds", millisecond: "milliseconds", milliseconds: "milliseconds" }[e2];
    if (!t2)
      throw new r(e2);
    return t2;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this._values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  as(e2) {
    return this.shiftTo(e2).get(e2);
  }
  equals(e2) {
    if (!this.isValid || !e2.isValid)
      return false;
    if (!this._loc.equals(e2._loc))
      return false;
    for (const n2 of ft)
      if (t2 = this._values[n2], s2 = e2._values[n2], !(void 0 === t2 || 0 === t2 ? void 0 === s2 || 0 === s2 : t2 === s2))
        return false;
    var t2, s2;
    return true;
  }
  get(e2) {
    return this[_fs.normalizeUnit(e2)];
  }
  getMaxUnit(e2 = false) {
    const t2 = e2 ? gt : ft, s2 = this.shiftTo(...t2).toObject();
    return t2.find((e3) => (s2[e3] || 0) > 0) || yt[0];
  }
  mapUnits(e2) {
    if (!this.isValid)
      return this;
    const t2 = {};
    return Object.keys(this._values).forEach((s2) => {
      t2[s2] = lt(e2(this._values[s2], s2));
    }), this._clone(this, { values: t2 }, true);
  }
  minus(e2) {
    if (!this.isValid)
      return this;
    const t2 = _fs.fromDurationLike(e2);
    return this.plus(t2.negate());
  }
  negate() {
    if (!this.isValid)
      return this;
    const e2 = {};
    return Object.keys(this._values).forEach((t2) => {
      e2[t2] = 0 === this._values[t2] ? 0 : -this._values[t2];
    }), this._clone(this, { values: e2 }, true);
  }
  normalize() {
    if (!this.isValid)
      return this;
    const e2 = this.toObject();
    return function(e3, t2) {
      const s2 = ms(e3, t2) < 0 ? -1 : 1;
      yt.reduce((n2, r2) => {
        if (qe(t2[r2]))
          return n2;
        if (n2) {
          const i2 = t2[n2] * s2, a2 = e3[r2][n2], o2 = Math.floor(i2 / a2);
          t2[r2] += o2 * s2, t2[n2] -= o2 * a2 * s2;
        }
        return r2;
      }, null), ft.reduce((s3, n2) => {
        if (qe(t2[n2]))
          return s3;
        if (s3) {
          const r2 = t2[s3] % 1;
          t2[s3] -= r2, t2[n2] += r2 * e3[s3][n2];
        }
        return n2;
      }, null);
    }(this._matrix, e2), this._clone(this, { values: e2 }, true);
  }
  plus(e2) {
    if (!this.isValid)
      return this;
    const t2 = _fs.fromDurationLike(e2), s2 = {};
    return ft.forEach((e3) => {
      void 0 === t2._values[e3] && void 0 === this._values[e3] || (s2[e3] = t2.get(e3) + this.get(e3));
    }), this._clone(this, { values: s2 }, true);
  }
  reconfigure({ locale: e2, numberingSystem: t2, conversionAccuracy: s2, matrix: n2 } = {}) {
    const r2 = { loc: this._loc.clone({ locale: e2, numberingSystem: t2 }), matrix: n2, conversionAccuracy: s2 };
    return this._clone(this, r2);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e2 = function(e3 = {}) {
      return Object.entries(e3).reduce((e4, [t2, s2]) => (0 !== s2 && (e4[t2] = s2), e4), {});
    }(this.normalize().shiftToAll().toObject());
    return this._clone(this, { values: e2 }, true);
  }
  set(e2) {
    if (!this.isValid)
      return this;
    const t2 = Object.assign(Object.assign({}, this._values), ht(e2, _fs.normalizeUnit));
    return this._clone(this, { values: t2 });
  }
  shiftTo(...e2) {
    if (!this.isValid || 0 === e2.length)
      return this;
    e2 = e2.map((e3) => _fs.normalizeUnit(e3));
    const t2 = {}, s2 = {}, n2 = this.toObject();
    let r2;
    return ft.forEach((i2) => {
      if (e2.indexOf(i2) >= 0) {
        r2 = i2;
        let e3 = 0;
        Object.keys(s2).forEach((t3) => {
          e3 += this._matrix[t3][i2] * s2[t3], s2[t3] = 0;
        }), Ue(n2[i2]) && (e3 += n2[i2]);
        const a2 = Math.trunc(e3);
        t2[i2] = a2, s2[i2] = (1e3 * e3 - 1e3 * a2) / 1e3;
      } else
        Ue(n2[i2]) && (s2[i2] = n2[i2]);
    }), Object.keys(s2).forEach((e3) => {
      const n3 = s2[e3];
      0 !== n3 && (t2[r2] += e3 === r2 ? n3 : n3 / this._matrix[r2][e3]);
    }), this._clone(this, { values: t2 }, true).normalize();
  }
  shiftToAll() {
    return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this;
  }
  toFormat(e2, t2 = { floor: true }) {
    const s2 = Object.assign(Object.assign({}, t2), { floor: false !== t2.round && false !== t2.floor });
    return this.isValid ? Ot.create(this._loc, s2).formatDurationFromString(this, e2) : _fs._INVALID;
  }
  toHuman(e2 = {}) {
    if (!this.isValid)
      return _fs._INVALID;
    const t2 = this.getMaxUnit(true), s2 = e2.onlyHumanUnits ? gt : ft, n2 = this.shiftTo(...s2.slice(s2.indexOf(t2))).toObject(), r2 = s2.map((t3) => {
      const s3 = n2[t3];
      return qe(s3) || 0 === s3 ? null : this._loc.numberFormatter(Object.assign(Object.assign({ style: "unit", unitDisplay: "long" }, e2), { unit: t3.slice(0, -1) })).format(s3);
    }).filter((e3) => e3), i2 = Object.assign({ type: "conjunction", style: e2.listStyle || "narrow" }, e2);
    return this._loc.listFormatter(i2).format(r2);
  }
  toISO() {
    if (!this.isValid)
      return null;
    let e2 = "P";
    return 0 !== this.years && (e2 += this.years + "Y"), 0 === this.months && 0 === this.quarters || (e2 += this.months + 3 * this.quarters + "M"), 0 !== this.weeks && (e2 += this.weeks + "W"), 0 !== this.days && (e2 += this.days + "D"), 0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds || (e2 += "T"), 0 !== this.hours && (e2 += this.hours + "H"), 0 !== this.minutes && (e2 += this.minutes + "M"), 0 === this.seconds && 0 === this.milliseconds || (e2 += et(this.seconds + this.milliseconds / 1e3, 3) + "S"), "P" === e2 && (e2 += "T0S"), e2;
  }
  toISOTime(e2 = {}) {
    if (!this.isValid)
      return null;
    const t2 = this.toMillis();
    if (t2 < 0 || t2 >= 864e5)
      return null;
    e2 = Object.assign(Object.assign({ suppressMilliseconds: false, suppressSeconds: false, includePrefix: false, format: "extended" }, e2), { includeOffset: false });
    return tn.fromMillis(t2, { zone: "UTC" }).toISOTime(e2);
  }
  toJSON() {
    return this.toISO();
  }
  toMillis() {
    return this.isValid ? ms(this.matrix, this._values) : NaN;
  }
  toObject() {
    return this.isValid ? Object.assign({}, this._values) : {};
  }
  toString() {
    return this.toISO();
  }
  valueOf() {
    return this.toMillis();
  }
  _clone(e2, t2, s2 = false) {
    const n2 = { values: s2 ? t2.values : Object.assign(Object.assign({}, e2._values), t2.values || {}), loc: e2._loc.clone(t2.loc), conversionAccuracy: t2.conversionAccuracy || e2.conversionAccuracy, matrix: t2.matrix || e2.matrix };
    return new _fs(n2);
  }
};
var ys = "Invalid Interval";
function gs(e2) {
  if (tn.isDateTime(e2))
    return e2;
  if (e2 && e2.valueOf && Ue(e2.valueOf()))
    return tn.fromJSDate(e2);
  if (e2 && "object" == typeof e2)
    return tn.fromObject(e2);
  throw new o(`Unknown datetime argument: ${e2}, of type ${typeof e2}`);
}
var _s = class __s {
  get end() {
    return this.isValid ? this._e : null;
  }
  get invalidReason() {
    return this._invalid ? this._invalid.reason : null;
  }
  get isValid() {
    return null === this.invalidReason;
  }
  get start() {
    return this.isValid ? this._s : null;
  }
  constructor(e2) {
    this._s = e2.start, this._e = e2.end, this._invalid = e2.invalid || null, this._isLuxonInterval = true;
  }
  static after(e2, t2) {
    const s2 = fs.fromDurationLike(t2), n2 = gs(e2);
    return new __s({ start: n2, end: n2 ? n2.plus(s2) : void 0 });
  }
  static before(e2, t2) {
    const s2 = fs.fromDurationLike(t2), n2 = gs(e2);
    return new __s({ start: n2 ? n2.minus(s2) : void 0, end: n2 });
  }
  static fromDateTimes(e2, t2) {
    const s2 = gs(e2), n2 = gs(t2), r2 = function(e3, t3) {
      return e3 && e3.isValid ? t3 && t3.isValid ? t3 < e3 ? __s.invalid("end before start", `The end of an interval must be after its start, but you had start=${e3.toISO()} and end=${t3.toISO()}`) : void 0 : __s.invalid("missing or invalid end") : __s.invalid("missing or invalid start");
    }(s2, n2);
    return r2 || new __s({ start: s2, end: n2 });
  }
  static fromISO(e2, t2 = {}) {
    const [s2, n2] = (e2 || "").split("/", 2);
    if (s2 && n2) {
      let e3, r2, i2, a2;
      try {
        e3 = tn.fromISO(s2, t2), r2 = e3.isValid;
      } catch (n3) {
        r2 = false;
      }
      try {
        i2 = tn.fromISO(n2, t2), a2 = i2.isValid;
      } catch (n3) {
        a2 = false;
      }
      if (r2 && a2)
        return __s.fromDateTimes(e3, i2);
      if (r2) {
        const s3 = fs.fromISO(n2, t2);
        if (s3.isValid)
          return __s.after(e3, s3);
      } else if (a2) {
        const e4 = fs.fromISO(s2, t2);
        if (e4.isValid)
          return __s.before(i2, e4);
      }
    }
    return __s.invalid("unparsable", `the input "${e2}" can't be parsed as ISO 8601`);
  }
  static invalid(e2, t2) {
    if (!e2)
      throw new o("need to specify a reason the Interval is invalid");
    const s2 = e2 instanceof Ne ? e2 : new Ne(e2, t2);
    if (Te.throwOnInvalid)
      throw new n(s2);
    return new __s({ invalid: s2 });
  }
  static isInterval(e2) {
    return !!e2 && e2._isLuxonInterval || false;
  }
  static merge(e2) {
    const [t2, s2] = e2.sort((e3, t3) => e3._s.valueOf() - t3._s.valueOf()).reduce(([e3, t3], s3) => t3 ? t3.overlaps(s3) || t3.abutsStart(s3) ? [e3, t3.union(s3)] : [e3.concat([t3]), s3] : [e3, s3], [[], null]);
    return s2 && t2.push(s2), t2;
  }
  static xor(e2) {
    let t2 = null, s2 = 0;
    const n2 = [], r2 = e2.map((e3) => [{ time: e3._s, type: "s" }, { time: e3._e, type: "e" }]), i2 = Array.prototype.concat(...r2).sort((e3, t3) => +e3.time - +t3.time);
    for (const e3 of i2)
      s2 += "s" === e3.type ? 1 : -1, 1 === s2 ? t2 = e3.time : (t2 && t2.valueOf() !== e3.time.valueOf() && n2.push(__s.fromDateTimes(t2, e3.time)), t2 = null);
    return __s.merge(n2);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this._s.toISO()}, end: ${this._e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  abutsEnd(e2) {
    return +e2._e == +this._s;
  }
  abutsStart(e2) {
    return +this._e == +e2._s;
  }
  contains(e2) {
    return this._s <= e2 && this._e > e2;
  }
  count(e2 = "milliseconds", t2) {
    if (!this.isValid)
      return NaN;
    const s2 = this.start.startOf(e2, t2);
    let n2;
    return n2 = (null == t2 ? void 0 : t2.useLocaleWeeks) ? this.end.reconfigure({ locale: s2.locale }) : this.end, n2 = n2.startOf(e2, t2), Math.floor(n2.diff(s2, e2).get(e2)) + +(n2.valueOf() !== this.end.valueOf());
  }
  difference(...e2) {
    return __s.xor([this].concat(e2)).map((e3) => this.intersection(e3)).filter((e3) => e3 && !e3.isEmpty());
  }
  divideEqually(e2) {
    return this.isValid ? this.splitBy({ milliseconds: this.length() / e2 }).slice(0, e2) : [];
  }
  engulfs(e2) {
    return !!this.isValid && (this._s <= e2._s && this._e >= e2._e);
  }
  equals(e2) {
    return !(!this.isValid || !e2.isValid) && (this._s.equals(e2._s) && this._e.equals(e2._e));
  }
  hasSame(e2) {
    return !!this.isValid && (this.isEmpty() || this._e.minus(1).hasSame(this._s, e2));
  }
  intersection(e2) {
    if (!this.isValid)
      return this;
    const t2 = this._s > e2._s ? this._s : e2._s, s2 = this._e < e2._e ? this._e : e2._e;
    return t2 >= s2 ? null : __s.fromDateTimes(t2, s2);
  }
  isAfter(e2) {
    return !!this.isValid && this._s > e2;
  }
  isBefore(e2) {
    return !!this.isValid && this._e <= e2;
  }
  isEmpty() {
    return this._s.valueOf() === this._e.valueOf();
  }
  length(e2 = "milliseconds") {
    return this.toDuration(e2).get(e2);
  }
  mapEndpoints(e2) {
    return __s.fromDateTimes(e2(this._s), e2(this._e));
  }
  overlaps(e2) {
    return this._e > e2._s && this._s < e2._e;
  }
  set({ start: e2, end: t2 } = {}) {
    return this.isValid ? __s.fromDateTimes(e2 || this._s, t2 || this._e) : this;
  }
  splitAt(...e2) {
    const t2 = e2.map(gs).filter((e3) => this.contains(e3)).sort((e3, t3) => e3.toMillis() - t3.toMillis()), s2 = [];
    let n2 = this._s, r2 = 0;
    for (; n2 < this._e; ) {
      const e3 = t2[r2] || this._e, i2 = +e3 > +this._e ? this._e : e3;
      s2.push(__s.fromDateTimes(n2, i2)), n2 = i2, r2 += 1;
    }
    return s2;
  }
  splitBy(e2) {
    const t2 = fs.fromDurationLike(e2);
    if (!this.isValid || !t2.isValid || 0 === t2.as("milliseconds"))
      return [];
    let s2, n2 = this._s, r2 = 1;
    const i2 = [];
    for (; n2 < this._e; ) {
      const e3 = this.start.plus(t2.mapUnits((e4) => e4 * r2));
      s2 = +e3 > +this._e ? this._e : e3, i2.push(__s.fromDateTimes(n2, s2)), n2 = s2, r2 += 1;
    }
    return i2;
  }
  toDuration(e2 = "milliseconds", t2 = {}) {
    return this.isValid ? this._e.diff(this._s, e2, t2) : fs.invalid(this._invalid.reason);
  }
  toFormat(e2, { separator: t2 = " - " } = {}) {
    return this.isValid ? `${this._s.toFormat(e2)}${t2}${this._e.toFormat(e2)}` : ys;
  }
  toISO(e2 = {}) {
    return this.isValid ? `${this._s.toISO(e2)}/${this._e.toISO(e2)}` : ys;
  }
  toISODate() {
    return this.isValid ? `${this._s.toISODate()}/${this._e.toISODate()}` : ys;
  }
  toISOTime(e2 = {}) {
    return this.isValid ? `${this._s.toISOTime(e2)}/${this._e.toISOTime(e2)}` : ys;
  }
  toLocaleString(e2 = p, t2 = {}) {
    return this.isValid ? Ot.create(this._s.loc.clone(t2), e2).formatInterval(this) : ys;
  }
  toString() {
    return this.isValid ? `[${this._s.toISO()} – ${this._e.toISO()})` : ys;
  }
  union(e2) {
    if (!this.isValid)
      return this;
    const t2 = this._s < e2._s ? this._s : e2._s, s2 = this._e > e2._e ? this._e : e2._e;
    return __s.fromDateTimes(t2, s2);
  }
};
var ws = class {
  static eras(e2 = "short", { locale: t2 } = {}) {
    return le.create(t2, void 0, "gregory").eras(e2);
  }
  static features() {
    return { relative: He(), localeWeek: Pe() };
  }
  static getMinimumDaysInFirstWeek({ locale: e2, locObj: t2 } = {}) {
    return (t2 || le.create(e2)).getMinDaysInFirstWeek();
  }
  static getStartOfWeek({ locale: e2, locObj: t2 } = {}) {
    return (t2 || le.create(e2)).getStartOfWeek();
  }
  static getWeekendWeekdays({ locale: e2, locObj: t2 } = {}) {
    return (t2 || le.create(e2)).getWeekendDays().slice();
  }
  static hasDST(e2 = Te.defaultZone) {
    const t2 = tn.now().setZone(e2).set({ month: 12 });
    return !e2.isUniversal && t2.offset !== t2.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e2) {
    return y.isValidZone(e2);
  }
  static meridiems({ locale: e2 } = {}) {
    return le.create(e2).meridiems();
  }
  static months(e2 = "long", { locale: t2 = null, locObj: s2 = null, numberingSystem: n2 = null, outputCalendar: r2 = "gregory" } = {}) {
    return (s2 || le.create(t2, n2, r2)).months(e2);
  }
  static monthsFormat(e2 = "long", { locale: t2, locObj: s2, numberingSystem: n2, outputCalendar: r2 = "gregory" } = {}) {
    return (s2 || le.create(t2, n2, r2)).months(e2, true);
  }
  static normalizeZone(e2) {
    return ge(e2, Te.defaultZone);
  }
  static weekdays(e2 = "long", { locale: t2, locObj: s2, numberingSystem: n2 } = {}) {
    return (s2 || le.create(t2, n2)).weekdays(e2);
  }
  static weekdaysFormat(e2 = "long", { locale: t2, locObj: s2, numberingSystem: n2 } = {}) {
    return (s2 || le.create(t2, n2)).weekdays(e2, true);
  }
};
function ps(e2, t2) {
  const s2 = (e3) => e3.toUTC(0, { keepLocalTime: true }).startOf("days").valueOf(), n2 = s2(t2) - s2(e2);
  return Math.floor(fs.fromMillis(n2).as("days"));
}
var ks = (e2, t2, s2, n2) => {
  let [r2, i2, a2, o2] = function(e3, t3, s3) {
    const n3 = [["years", (e4, t4) => t4.year - e4.year], ["quarters", (e4, t4) => t4.quarter - e4.quarter + 4 * (t4.year - e4.year)], ["months", (e4, t4) => t4.month - e4.month + 12 * (t4.year - e4.year)], ["weeks", (e4, t4) => {
      const s4 = ps(e4, t4);
      return (s4 - s4 % 7) / 7;
    }], ["days", ps]], r3 = {}, i3 = e3;
    let a3, o3;
    for (const [u3, c3] of n3)
      s3.indexOf(u3) >= 0 && (a3 = u3, r3[u3] = c3(e3, t3), o3 = i3.plus(r3), o3 > t3 ? (r3[u3]--, (e3 = i3.plus(r3)) > t3 && (o3 = e3, r3[u3]--, e3 = i3.plus(r3))) : e3 = o3);
    return [e3, r3, o3, a3];
  }(e2, t2, s2);
  const u2 = +t2 - +r2, c2 = s2.filter((e3) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(e3) >= 0);
  0 === c2.length && (a2 < t2 && (a2 = r2.plus({ [o2]: 1 })), a2 !== r2 && (i2[o2] = (i2[o2] || 0) + u2 / (+a2 - +r2)));
  const l2 = fs.fromObject(i2, n2);
  return c2.length > 0 ? fs.fromMillis(u2, n2).shiftTo(...c2).plus(l2) : l2;
};
var Os = { arab: "[٠-٩]", arabext: "[۰-۹]", bali: "[᭐-᭙]", beng: "[০-৯]", deva: "[०-९]", fullwide: "[０-９]", gujr: "[૦-૯]", hanidec: "[〇|一|二|三|四|五|六|七|八|九]", khmr: "[០-៩]", knda: "[೦-೯]", laoo: "[໐-໙]", limb: "[᥆-᥏]", mlym: "[൦-൯]", mong: "[᠐-᠙]", mymr: "[၀-၉]", orya: "[୦-୯]", tamldec: "[௦-௯]", telu: "[౦-౯]", thai: "[๐-๙]", tibt: "[༠-༩]", latn: "\\d" };
var bs = { arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881] };
var vs = Os.hanidec.replace(/[\[|\]]/g, "").split("");
function Ss(e2, t2 = "") {
  return new RegExp(`${Os[e2.numberingSystem || "latn"]}${t2}`);
}
var Ts = "missing Intl.DateTimeFormat.formatToParts support";
function Ns(e2, t2 = (e3) => e3) {
  return { regex: e2, deser: ([e3]) => t2(function(e4) {
    const t3 = parseInt(e4, 10);
    if (!isNaN(t3))
      return t3;
    let s2 = "";
    for (let t4 = 0; t4 < e4.length; t4++) {
      const n2 = e4.charCodeAt(t4);
      if (-1 !== e4[t4].search(Os.hanidec))
        s2 += vs.indexOf(e4[t4]);
      else
        for (const e5 in bs) {
          const [t5, r2] = bs[e5];
          if (n2 >= t5 && n2 <= r2) {
            s2 += n2 - t5;
            break;
          }
        }
    }
    return parseInt(s2, 10);
  }(e3)) };
}
var Ds = `[ ${String.fromCharCode(160)}]`;
var Ms = new RegExp(Ds, "g");
function Is(e2) {
  return e2.replace(/\./g, "\\.?").replace(Ms, Ds);
}
function js(e2) {
  return e2.replace(/\./g, "").replace(Ms, " ").toLowerCase();
}
function Es(e2, t2) {
  return { regex: RegExp(e2.map(Is).join("|")), deser: ([s2]) => e2.findIndex((e3) => js(s2) === js(e3)) + t2 };
}
function xs(e2, t2) {
  return { regex: e2, deser: ([, e3, t3]) => ct(e3, t3), groups: t2 };
}
function Vs(e2) {
  return { regex: e2, deser: ([e3]) => e3 };
}
var Ws = { year: { "2-digit": "yy", numeric: "yyyyy" }, month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" }, day: { numeric: "d", "2-digit": "dd" }, weekday: { short: "EEE", long: "EEEE" }, dayPeriod: "a", hour12: { numeric: "h", "2-digit": "hh" }, hour24: { numeric: "H", "2-digit": "HH" }, hour: { numeric: "h", "2-digit": "hh" }, minute: { numeric: "m", "2-digit": "mm" }, second: { numeric: "s", "2-digit": "ss" }, timeZoneName: { long: "ZZZZZ", short: "ZZZ" } };
var Cs;
function Fs(e2) {
  return !!e2 && !!e2.invalidReason;
}
function $s(e2, t2) {
  return Array.prototype.concat(...e2.map((e3) => function(e4, t3) {
    if (e4.literal)
      return e4;
    const s2 = zs(Ot.macroTokenToFormatOpts(e4.val), t3);
    return null == s2 || s2.includes(void 0) ? e4 : s2;
  }(e3, t2)));
}
function Zs(e2, t2, s2) {
  const n2 = $s(Ot.parseFormat(s2), e2), r2 = n2.map((t3) => function(e3, t4) {
    const s3 = Ss(t4), n3 = Ss(t4, "{2}"), r3 = Ss(t4, "{3}"), i3 = Ss(t4, "{4}"), a2 = Ss(t4, "{6}"), o2 = Ss(t4, "{1,2}"), u2 = Ss(t4, "{1,3}"), c2 = Ss(t4, "{1,6}"), l2 = Ss(t4, "{1,9}"), h2 = Ss(t4, "{2,4}"), d2 = Ss(t4, "{4,6}"), m2 = (e4) => {
      return { regex: RegExp((t5 = e4.val, t5.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))), deser: ([e5]) => e5, literal: true };
      var t5;
    }, f2 = ((f3) => {
      if (e3.literal)
        return m2(f3);
      switch (f3.val) {
        case "G":
          return Es(t4.eras("short"), 0);
        case "GG":
          return Es(t4.eras("long"), 0);
        case "y":
          return Ns(c2);
        case "yy":
        case "kk":
          return Ns(h2, ot);
        case "yyyy":
        case "kkkk":
          return Ns(i3);
        case "yyyyy":
          return Ns(d2);
        case "yyyyyy":
          return Ns(a2);
        case "M":
        case "L":
        case "d":
        case "H":
        case "h":
        case "m":
        case "q":
        case "s":
        case "W":
          return Ns(o2);
        case "MM":
        case "LL":
        case "dd":
        case "HH":
        case "hh":
        case "mm":
        case "qq":
        case "ss":
        case "WW":
          return Ns(n3);
        case "MMM":
          return Es(t4.months("short", true), 1);
        case "MMMM":
          return Es(t4.months("long", true), 1);
        case "LLL":
          return Es(t4.months("short", false), 1);
        case "LLLL":
          return Es(t4.months("long", false), 1);
        case "o":
        case "S":
          return Ns(u2);
        case "ooo":
        case "SSS":
          return Ns(r3);
        case "u":
          return Vs(l2);
        case "a":
          return Es(t4.meridiems(), 0);
        case "E":
        case "c":
          return Ns(s3);
        case "EEE":
          return Es(t4.weekdays("short", false), 1);
        case "EEEE":
          return Es(t4.weekdays("long", false), 1);
        case "ccc":
          return Es(t4.weekdays("short", true), 1);
        case "cccc":
          return Es(t4.weekdays("long", true), 1);
        case "Z":
        case "ZZ":
          return xs(new RegExp(`([+-]${o2.source})(?::(${n3.source}))?`), 2);
        case "ZZZ":
          return xs(new RegExp(`([+-]${o2.source})(${n3.source})?`), 2);
        case "z":
          return Vs(/[a-z_+-/]{1,256}?/i);
        default:
          return m2(f3);
      }
    })(e3) || { invalidReason: Ts };
    return Object.assign(Object.assign({}, f2), { token: e3 });
  }(t3, e2)), i2 = r2.find(Fs);
  if (i2)
    return { input: t2, tokens: n2, invalidReason: i2.invalidReason };
  {
    const e3 = function(e4) {
      return `^${e4.map((e5) => e5.regex).reduce((e5, t3) => `${e5}(${t3.source})`, "")}$`;
    }(r2), s3 = RegExp(e3, "i"), [i3, o2] = function(e4, t3, s4) {
      const n3 = t3.exec(e4), r3 = {};
      if (null !== n3) {
        let e5 = 1;
        s4.forEach((t4) => {
          const s5 = t4.groups ? t4.groups + 1 : 1;
          t4.literal || (r3[t4.token.val[0]] = t4.deser(n3.slice(e5, e5 + s5))), e5 += s5;
        });
      }
      return [n3, r3];
    }(t2, s3, r2), [u2, c2, l2] = o2 ? function(e4) {
      let t3, s4 = null;
      return Ae(e4.z) && (s4 = y.create(e4.z)), Ae(e4.Z) && (s4 || (s4 = new de(+e4.Z)), t3 = +e4.Z), Ae(e4.q) && (e4.M = 3 * (e4.q - 1) + 1), Ae(e4.h) && (+e4.h < 12 && 1 === e4.a ? e4.h = e4.h + 12 : 12 === e4.h && 0 === e4.a && (e4.h = 0)), 0 === e4.G && e4.y && (e4.y = -e4.y), Ae(e4.u) && (e4.S = Xe(e4.u) || 0), [Object.keys(e4).reduce((t4, s5) => {
        const n3 = ((e5) => {
          switch (e5) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
            case "H":
              return "hour";
            case "d":
              return "day";
            case "o":
              return "ordinal";
            case "L":
            case "M":
              return "month";
            case "y":
              return "year";
            case "E":
            case "c":
              return "weekday";
            case "W":
              return "weekNumber";
            case "k":
              return "weekYear";
            case "q":
              return "quarter";
            default:
              return null;
          }
        })(s5);
        return n3 && (t4[n3] = e4[s5]), t4;
      }, {}), s4, t3];
    }(o2) : [null, null, void 0];
    if ("a" in o2 && "H" in o2)
      throw new a("Can't include meridiem when specifying 24-hour format");
    return { input: t2, tokens: n2, regex: s3, rawMatches: i3, matches: o2, result: u2, zone: c2, specificOffset: l2 };
  }
}
function Ls(e2) {
  return e2.replace(/\u202F/g, " ");
}
function zs(e2, t2) {
  if (!e2)
    return null;
  const s2 = Ot.create(t2, e2).dtFormatter(function(e3) {
    return void 0 === Cs && (Cs = tn.fromMillis(1555555555555, { locale: e3.locale })), Cs;
  }(t2)), n2 = s2.formatToParts(), r2 = s2.resolvedOptions();
  return n2.map((t3) => function(e3, t4, s3) {
    const { type: n3, value: r3 } = e3;
    if ("literal" === n3) {
      const e4 = /^\s+$/.test(r3);
      return { literal: !e4, val: e4 ? " " : r3 };
    }
    const i2 = t4[n3];
    let a2 = n3;
    "hour" === n3 && (a2 = null != t4.hour12 ? t4.hour12 ? "hour12" : "hour24" : null != t4.hourCycle ? "h11" === t4.hourCycle || "h12" === t4.hourCycle ? "hour12" : "hour24" : s3.hour12 ? "hour12" : "hour24");
    let o2 = Ws[a2];
    if ("object" == typeof o2 && (o2 = o2[i2]), o2)
      return { literal: false, val: o2 };
  }(t3, e2, r2));
}
var As = "Invalid DateTime";
var qs = 864e13;
function Us(e2, t2, s2) {
  let n2 = e2 - 60 * t2 * 1e3;
  const r2 = s2.offset(n2);
  if (t2 === r2)
    return [n2, t2];
  n2 -= 60 * (r2 - t2) * 1e3;
  const i2 = s2.offset(n2);
  return r2 === i2 ? [n2, r2] : [e2 - 60 * Math.min(r2, i2) * 1e3, Math.max(r2, i2)];
}
function Ys(e2, t2) {
  const s2 = new Date(e2 += 60 * t2 * 1e3);
  return { year: s2.getUTCFullYear(), month: s2.getUTCMonth() + 1, day: s2.getUTCDate(), hour: s2.getUTCHours(), minute: s2.getUTCMinutes(), second: s2.getUTCSeconds(), millisecond: s2.getUTCMilliseconds() };
}
function Hs(e2, t2, s2) {
  return Us(rt(e2), t2, s2);
}
function Ps(e2, t2, s2, n2, r2, i2) {
  const { setZone: a2, zone: o2 } = s2;
  if (e2 && 0 !== Object.keys(e2).length || t2) {
    const n3 = t2 || o2, r3 = tn.fromObject(e2 || void 0, Object.assign(Object.assign({}, s2), { zone: n3, specificOffset: i2 }));
    return a2 ? r3 : r3.setZone(o2);
  }
  return tn.invalid(new Ne("unparsable", `the input "${r2}" can't be parsed as ${n2}`));
}
function Rs(e2, t2, s2 = true) {
  return e2.isValid ? Ot.create(le.create("en-US"), { allowZ: s2, forceSimple: true }).formatDateTimeFromString(e2, t2) : null;
}
var Js = { year: 0, month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 };
var Gs = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 };
var Bs = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 };
var Qs = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
var Ks = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"];
var Xs = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function en(e2) {
  const t2 = _t[e2.toLowerCase()];
  if (!t2)
    throw new r(e2);
  return t2;
}
var tn = class _tn {
  get day() {
    return this.isValid ? this._c.day : NaN;
  }
  get daysInMonth() {
    return nt(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? st(this.year) : NaN;
  }
  get hour() {
    return this.isValid ? this._c.hour : NaN;
  }
  get invalidExplanation() {
    return this._invalid ? this._invalid.explanation : void 0;
  }
  get invalidReason() {
    return this._invalid ? this._invalid.reason : void 0;
  }
  get isInDST() {
    return !this.isOffsetFixed && (this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset);
  }
  get isInLeapYear() {
    return tt(this.year);
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isValid() {
    return null === this._invalid;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get loc() {
    return this.isValid ? this._loc.clone() : void 0;
  }
  get localWeekNumber() {
    return this.isValid ? this._possiblyCachedLocalWeekData(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? this._possiblyCachedLocalWeekData(this).weekYear : NaN;
  }
  get localWeekday() {
    return this.isValid ? this._possiblyCachedLocalWeekData(this).weekday : NaN;
  }
  get locale() {
    return this.isValid ? this._loc.locale : void 0;
  }
  get millisecond() {
    return this.isValid ? this._c.millisecond : NaN;
  }
  get minute() {
    return this.isValid ? this._c.minute : NaN;
  }
  get month() {
    return this.isValid ? this._c.month : NaN;
  }
  get monthLong() {
    return this.isValid ? ws.months("long", { locObj: this._loc })[this.month - 1] : null;
  }
  get monthShort() {
    return this.isValid ? ws.months("short", { locObj: this._loc })[this.month - 1] : null;
  }
  get numberingSystem() {
    return this.isValid ? this._loc.numberingSystem : void 0;
  }
  get offset() {
    return this.isValid ? +this._o : NaN;
  }
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this._ts, { format: "long", locale: this.locale }) : null;
  }
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this._ts, { format: "short", locale: this.locale }) : null;
  }
  get ordinal() {
    return this.isValid ? Ce(this._c).ordinal : NaN;
  }
  get outputCalendar() {
    return this.isValid ? this._loc.outputCalendar : void 0;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this._c.month / 3) : NaN;
  }
  get second() {
    return this.isValid ? this._c.second : NaN;
  }
  get ts() {
    return this._ts;
  }
  get weekNumber() {
    return this.isValid ? this._possiblyCachedWeekData(this).weekNumber : NaN;
  }
  get weekYear() {
    return this.isValid ? this._possiblyCachedWeekData(this).weekYear : NaN;
  }
  get weekday() {
    return this.isValid ? this._possiblyCachedWeekData(this).weekday : NaN;
  }
  get weekdayLong() {
    return this.isValid ? ws.weekdays("long", { locObj: this._loc })[this.weekday - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? ws.weekdays("short", { locObj: this._loc })[this.weekday - 1] : null;
  }
  get weeksInLocalWeekYear() {
    return this.isValid ? at(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? at(this.weekYear) : NaN;
  }
  get year() {
    return this.isValid ? this._c.year : NaN;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  constructor(e2) {
    const t2 = e2.zone || Te.defaultZone;
    let s2, n2, r2 = e2.invalid || (Number.isNaN(e2.ts) ? new Ne("invalid timestamp") : null) || (t2.isValid ? null : _tn._unsupportedZone(t2));
    if (this._ts = qe(e2.ts) ? Te.now() : e2.ts, !r2) {
      if (!!e2.old && e2.old.ts === this._ts && e2.old.zone.equals(t2))
        [n2, s2] = [e2.old.c, e2.old.o];
      else {
        const e3 = t2.offset(this._ts);
        n2 = Ys(this._ts, e3), r2 = Number.isNaN(n2.year) ? new Ne("invalid input") : null, n2 = r2 ? void 0 : n2, s2 = r2 ? void 0 : e3;
      }
    }
    this._zone = t2, this._loc = e2.loc || le.create(), this._invalid = r2, this._weekData = null, this._c = n2, this._o = s2, this._isLuxonDateTime = true;
  }
  static expandFormat(e2, t2 = {}) {
    return $s(Ot.parseFormat(e2), le.fromObject(t2)).map((e3) => e3.val).join("");
  }
  static fromFormat(e2, t2, s2 = {}) {
    if (qe(e2) || qe(t2))
      throw new o("fromFormat requires an input string and a format");
    const { locale: n2, numberingSystem: r2 } = s2, i2 = le.fromOpts({ locale: n2, numberingSystem: r2, defaultToEN: true }), [a2, u2, c2, l2] = function(e3, t3, s3) {
      const { result: n3, zone: r3, specificOffset: i3, invalidReason: a3 } = Zs(e3, Ls(t3), Ls(s3));
      return [n3, r3, i3, a3];
    }(i2, e2, t2);
    return l2 ? _tn.invalid(l2) : Ps(a2, u2 || null, s2, `format ${t2}`, e2, c2);
  }
  static fromFormatExplain(e2, t2, s2 = {}) {
    const { locale: n2, numberingSystem: r2 } = s2;
    return Zs(le.fromOpts({ locale: n2, numberingSystem: r2, defaultToEN: true }), e2, t2);
  }
  static fromHTTP(e2, t2 = {}) {
    const [s2, n2] = function(e3) {
      return St(e3, [Pt, Gt], [Rt, Gt], [Jt, Bt]);
    }(e2);
    return Ps(s2, n2, t2, "HTTP", e2);
  }
  static fromISO(e2, t2 = {}) {
    const [s2, n2] = function(e3) {
      return St(e3, [Qt, ts], [Kt, ss], [Xt, ns], [es, rs]);
    }(e2);
    return Ps(s2, n2, t2, "ISO 8601", e2);
  }
  static fromJSDate(e2, t2 = {}) {
    const s2 = (n2 = e2, "[object Date]" === Object.prototype.toString.call(n2) ? e2.valueOf() : NaN);
    var n2;
    if (Number.isNaN(s2))
      return _tn.invalid("invalid input");
    const r2 = ge(t2.zone, Te.defaultZone);
    return r2.isValid ? new _tn({ ts: s2, zone: r2, loc: le.fromObject(t2) }) : _tn.invalid(_tn._unsupportedZone(r2));
  }
  static fromMillis(e2, t2 = {}) {
    if (Ue(e2))
      return e2 < -qs || e2 > qs ? _tn.invalid("Timestamp out of range") : new _tn({ ts: e2, zone: ge(t2.zone, Te.defaultZone), loc: le.fromObject(t2) });
    throw new o(`fromMillis requires a numerical input, but received a ${typeof e2} with value ${e2}`);
  }
  static fromObject(e2 = {}, t2 = {}) {
    const s2 = ge(t2.zone, Te.defaultZone);
    if (!s2.isValid)
      return _tn.invalid(_tn._unsupportedZone(s2));
    const n2 = le.fromObject(t2), r2 = ht(e2, en), i2 = Te.now(), o2 = Ue(t2.specificOffset) ? t2.specificOffset : s2.offset(i2), u2 = Ae(r2.ordinal), c2 = Ae(r2.year), l2 = Ae(r2.month) || Ae(r2.day), h2 = c2 || l2, d2 = r2.weekYear || r2.weekNumber;
    if ((h2 || u2) && d2)
      throw new a("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (l2 && u2)
      throw new a("Can't mix ordinal dates with month/day");
    const m2 = d2 || r2.weekday && !h2, { minDaysInFirstWeek: f2, startOfWeek: y2 } = ze(r2, n2), g2 = Ys(i2, o2), _2 = { containsGregor: h2, containsOrdinal: u2, loc: n2, normalized: r2, obj: e2, offsetProvis: o2, useWeekData: m2, zoneToUse: s2 };
    return m2 ? _tn._buildObject(_2, Ks, Gs, Ve(g2, f2, y2)) : u2 ? _tn._buildObject(_2, Xs, Bs, Ce(g2)) : _tn._buildObject(_2, Qs, Js, g2);
  }
  static fromRFC2822(e2, t2 = {}) {
    const [s2, n2] = function(e3) {
      return St(function(e4) {
        return e4.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
      }(e3), [Yt, Ht]);
    }(e2);
    return Ps(s2, n2, t2, "RFC 2822", e2);
  }
  static fromSQL(e2, t2 = {}) {
    const [s2, n2] = function(e3) {
      return St(e3, [is, ts], [as, os]);
    }(e2);
    return Ps(s2, n2, t2, "SQL", e2);
  }
  static fromSeconds(e2, t2 = {}) {
    if (!Ue(e2))
      throw new o("fromSeconds requires a numerical input");
    return new _tn({ ts: 1e3 * e2, zone: ge(t2.zone, Te.defaultZone), loc: le.fromObject(t2) });
  }
  static fromString(e2, t2, s2 = {}) {
    return _tn.fromFormat(e2, t2, s2);
  }
  static fromStringExplain(e2, t2, s2 = {}) {
    return _tn.fromFormatExplain(e2, t2, s2);
  }
  static invalid(e2, s2) {
    if (!e2)
      throw new o("need to specify a reason the DateTime is invalid");
    const n2 = e2 instanceof Ne ? e2 : new Ne(e2, s2);
    if (Te.throwOnInvalid)
      throw new t(n2);
    return new _tn({ invalid: n2 });
  }
  static isDateTime(e2) {
    return !(!e2 || !e2._isLuxonDateTime);
  }
  static local(...e2) {
    const [t2, s2] = this._lastOpts(e2), [n2, r2, i2, a2, o2, u2, c2] = s2;
    return _tn._quickDT({ year: n2, month: r2, day: i2, hour: a2, minute: o2, second: u2, millisecond: c2 }, t2);
  }
  static max(...e2) {
    if (!e2.every(_tn.isDateTime))
      throw new o("max requires all arguments be DateTimes");
    return Re(e2, (e3) => e3.valueOf(), Math.max);
  }
  static min(...e2) {
    if (!e2.every(_tn.isDateTime))
      throw new o("min requires all arguments be DateTimes");
    return Re(e2, (e3) => e3.valueOf(), Math.min);
  }
  static now() {
    return new _tn({});
  }
  static parseFormatForOpts(e2, t2 = {}) {
    const s2 = zs(e2, le.fromObject(t2));
    return s2 ? s2.map((e3) => e3 ? e3.val : null).join("") : null;
  }
  static utc(...e2) {
    const [t2, s2] = this._lastOpts(e2), [n2, r2, i2, a2, o2, u2, c2] = s2;
    return t2.zone = de.utcInstance, this._quickDT({ year: n2, month: r2, day: i2, hour: a2, minute: o2, second: u2, millisecond: c2 }, t2);
  }
  static _buildObject(e2, t2, s2, n2) {
    let r2 = false;
    t2.forEach((t3) => {
      Ae(e2.normalized[t3]) ? r2 = true : e2.normalized[t3] = r2 ? s2[t3] : n2[t3];
    });
    const i2 = (e2.useWeekData ? function(e3, t3 = 4, s3 = 1) {
      const n3 = Ye(e3.weekYear), r3 = Ge(e3.weekNumber, 1, at(e3.weekYear, t3, s3)), i3 = Ge(e3.weekday, 1, 7);
      return n3 ? r3 ? !i3 && Ie("weekday", e3.weekday) : Ie("week", e3.weekNumber) : Ie("weekYear", e3.weekYear);
    }(e2.normalized) : e2.containsOrdinal ? function(e3) {
      const t3 = Ye(e3.year), s3 = Ge(e3.ordinal, 1, st(e3.year));
      return t3 ? !s3 && Ie("ordinal", e3.ordinal) : Ie("year", e3.year);
    }(e2.normalized) : $e(e2.normalized)) || Ze(e2.normalized);
    if (i2)
      return _tn.invalid(i2);
    const a2 = e2.useWeekData ? We(e2.normalized) : e2.containsOrdinal ? Fe(e2.normalized) : e2.normalized, [o2, u2] = Hs(a2, e2.offsetProvis, e2.zoneToUse), c2 = new _tn({ ts: o2, zone: e2.zoneToUse, o: u2, loc: e2.loc });
    return e2.normalized.weekday && e2.containsGregor && e2.obj.weekday !== c2.weekday ? _tn.invalid("mismatched weekday", `you can't specify both a weekday of ${e2.normalized.weekday} and a date of ${c2.toISO()}`) : c2.isValid ? c2 : _tn.invalid(c2._invalid);
  }
  static _diffRelative(e2, t2, s2) {
    const n2 = !!qe(s2.round) || s2.round, r2 = (e3, r3) => {
      e3 = et(e3, n2 || s2.calendary ? 0 : 2, true);
      return t2._loc.clone(s2).relFormatter(s2).format(e3, r3);
    }, i2 = (n3) => s2.calendary ? t2.hasSame(e2, n3) ? 0 : t2.startOf(n3).diff(e2.startOf(n3), n3).get(n3) : t2.diff(e2, n3).get(n3);
    if (s2.unit)
      return r2(i2(s2.unit), s2.unit);
    for (const e3 of s2.units) {
      const t3 = i2(e3);
      if (Math.abs(t3) >= 1)
        return r2(t3, e3);
    }
    return r2(e2 > t2 ? -0 : 0, s2.units[s2.units.length - 1]);
  }
  static _lastOpts(e2) {
    let t2, s2 = {};
    return e2.length > 0 && "object" == typeof e2[e2.length - 1] ? (s2 = e2.pop(), t2 = e2) : t2 = Array.from(e2), [s2, t2];
  }
  static _quickDT(e2, t2) {
    const s2 = ge(t2.zone, Te.defaultZone), n2 = le.fromObject(t2), r2 = Te.now();
    let i2, a2;
    if (Ae(e2.year)) {
      for (const t4 of Qs)
        qe(e2[t4]) && (e2[t4] = Js[t4]);
      const t3 = $e(e2) || Ze(e2);
      if (t3)
        return _tn.invalid(t3);
      const n3 = s2.offset(r2);
      [i2, a2] = Hs(e2, n3, s2);
    } else
      i2 = r2;
    return new _tn({ ts: i2, zone: s2, loc: n2, o: a2 });
  }
  static _unsupportedZone(e2) {
    return new Ne("unsupported zone", `the zone "${e2.name}" is not supported`);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  diff(e2, t2 = "milliseconds", s2 = {}) {
    if (!this.isValid || !e2.isValid) {
      const t3 = this.invalidReason || e2.invalidReason;
      return fs.invalid(t3, "created by diffing an invalid DateTime");
    }
    const n2 = (a2 = t2, Array.isArray(a2) ? a2 : [a2]).map(fs.normalizeUnit), r2 = e2.valueOf() > this.valueOf(), i2 = ks(r2 ? this : e2, r2 ? e2 : this, n2, Object.assign({ locale: this.locale, numberingSystem: this.numberingSystem }, s2));
    var a2;
    return r2 ? i2.negate() : i2;
  }
  diffNow(e2 = "milliseconds", t2 = {}) {
    return this.diff(_tn.now(), e2, t2);
  }
  endOf(e2, { useLocaleWeeks: t2 = false } = {}) {
    return this.plus({ [e2]: 1 }).startOf(e2, { useLocaleWeeks: t2 }).minus({ milliseconds: 1 });
  }
  equals(e2) {
    return this.valueOf() === e2.valueOf() && this.zone.equals(e2.zone) && this._loc.equals(e2._loc);
  }
  get(e2) {
    return this[e2];
  }
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e2 = 864e5, t2 = 6e4, s2 = rt(this._c), n2 = this.zone.offset(s2 - e2), r2 = this.zone.offset(s2 + e2), i2 = this.zone.offset(s2 - n2 * t2), a2 = this.zone.offset(s2 - r2 * t2);
    if (i2 === a2)
      return [this];
    const o2 = s2 - i2 * t2, u2 = s2 - a2 * t2, c2 = Ys(o2, i2), l2 = Ys(u2, a2);
    return c2.hour === l2.hour && c2.minute === l2.minute && c2.second === l2.second && c2.millisecond === l2.millisecond ? [this._clone({ ts: o2 }), this._clone({ ts: u2 })] : [this];
  }
  hasSame(e2, t2, s2) {
    if (!this.isValid)
      return false;
    const n2 = e2.valueOf(), r2 = this.setZone(e2.zone, { keepLocalTime: true });
    return +r2.startOf(t2) <= n2 && n2 <= +r2.endOf(t2, s2);
  }
  minus(e2) {
    if (!this.isValid)
      return this;
    const t2 = fs.fromDurationLike(e2).negate();
    return this._clone(this._adjustTime(t2));
  }
  plus(e2) {
    if (!this.isValid)
      return this;
    const t2 = fs.fromDurationLike(e2);
    return this._clone(this._adjustTime(t2));
  }
  reconfigure(e2) {
    const t2 = this._loc.clone(e2);
    return this._clone({ loc: t2 });
  }
  resolvedLocaleOptions(e2 = {}) {
    const { locale: t2, numberingSystem: s2, calendar: n2 } = Ot.create(this._loc.clone(e2), e2).resolvedOptions(this);
    return { locale: t2, numberingSystem: s2, outputCalendar: n2 };
  }
  set(e2) {
    if (!this.isValid)
      return this;
    const t2 = ht(e2, en), { minDaysInFirstWeek: s2, startOfWeek: n2 } = ze(t2, this.loc), r2 = Ae(t2.weekYear) || Ae(t2.weekNumber) || Ae(t2.weekday), i2 = Ae(t2.ordinal), o2 = Ae(t2.year), u2 = Ae(t2.month) || Ae(t2.day), c2 = o2 || u2, l2 = t2.weekYear || t2.weekNumber;
    if ((c2 || i2) && l2)
      throw new a("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (u2 && i2)
      throw new a("Can't mix ordinal dates with month/day");
    let h2;
    r2 ? h2 = We(Object.assign(Object.assign({}, Ve(this._c, s2, n2)), t2), s2, n2) : qe(t2.ordinal) ? (h2 = Object.assign(Object.assign({}, this.toObject()), t2), qe(t2.day) && (h2.day = Math.min(nt(h2.year, h2.month), h2.day))) : h2 = Fe(Object.assign(Object.assign({}, Ce(this._c)), t2));
    const [d2, m2] = Hs(h2, this._o, this.zone);
    return this._clone({ ts: d2, o: m2 });
  }
  setLocale(e2) {
    return this.reconfigure({ locale: e2 });
  }
  setZone(e2, { keepLocalTime: t2 = false, keepCalendarTime: s2 = false } = {}) {
    if ((e2 = ge(e2, Te.defaultZone)).equals(this.zone))
      return this;
    if (e2.isValid) {
      let n2 = this._ts;
      if (t2 || s2) {
        const t3 = e2.offset(this._ts);
        n2 = Hs(this.toObject(), t3, e2)[0];
      }
      return this._clone({ ts: n2, zone: e2 });
    }
    return _tn.invalid(_tn._unsupportedZone(e2));
  }
  startOf(e2, { useLocaleWeeks: t2 = false } = {}) {
    if (!this.isValid)
      return this;
    const s2 = {}, n2 = fs.normalizeUnit(e2);
    switch (n2) {
      case "years":
        s2.month = 1;
      case "quarters":
      case "months":
        s2.day = 1;
      case "weeks":
      case "days":
        s2.hour = 0;
      case "hours":
        s2.minute = 0;
      case "minutes":
        s2.second = 0;
      case "seconds":
        s2.millisecond = 0;
    }
    if ("weeks" === n2)
      if (t2) {
        const e3 = this.loc.getStartOfWeek(), { weekday: t3 } = this;
        t3 < e3 && (s2.weekNumber = this.weekNumber - 1), s2.weekday = e3;
      } else
        s2.weekday = 1;
    if ("quarters" === n2) {
      const e3 = Math.ceil(this.month / 3);
      s2.month = 3 * (e3 - 1) + 1;
    }
    return this.set(s2);
  }
  toBSON() {
    return this.toJSDate();
  }
  toFormat(e2, t2 = {}) {
    return this.isValid ? Ot.create(this._loc.redefaultToEN(t2)).formatDateTimeFromString(this, e2) : As;
  }
  toHTTP() {
    return Rs(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toISO({ format: e2 = "extended", suppressSeconds: t2 = false, suppressMilliseconds: s2 = false, includeOffset: n2 = true, extendedZone: r2 = false } = {}) {
    if (!this.isValid)
      return null;
    const i2 = "extended" === e2;
    return [this._toISODate(i2), "T", this._toISOTime(i2, t2, s2, n2, r2)].join("");
  }
  toISODate({ format: e2 = "extended" } = { format: "extended" }) {
    return this.isValid ? this._toISODate("extended" === e2) : null;
  }
  toISOTime({ suppressMilliseconds: e2 = false, suppressSeconds: t2 = false, includeOffset: s2 = true, includePrefix: n2 = false, extendedZone: r2 = false, format: i2 = "extended" } = {}) {
    return this.isValid ? [n2 ? "T" : "", this._toISOTime("extended" === i2, t2, e2, s2, r2)].join("") : null;
  }
  toISOWeekDate() {
    return Rs(this, "kkkk-'W'WW-c");
  }
  toJSDate() {
    return new Date(this.isValid ? this._ts : NaN);
  }
  toJSON() {
    return this.toISO();
  }
  toLocal() {
    return this.setZone(Te.defaultZone);
  }
  toLocaleParts(e2 = {}) {
    return this.isValid ? Ot.create(this._loc.clone(e2), e2).formatDateTimeParts(this) : [];
  }
  toLocaleString(e2 = p, t2 = {}) {
    return this.isValid ? Ot.create(this._loc.clone(t2), e2).formatDateTime(this) : As;
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toObject(e2 = { includeConfig: false }) {
    if (!this.isValid)
      return {};
    const t2 = Object.assign({}, this._c);
    return e2.includeConfig && (t2.outputCalendar = this.outputCalendar, t2.numberingSystem = this._loc.numberingSystem, t2.locale = this._loc.locale), t2;
  }
  toRFC2822() {
    return Rs(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  toRelative(e2 = {}) {
    if (!this.isValid)
      return null;
    const t2 = e2.base || _tn.fromObject({}, { zone: this.zone }), s2 = e2.padding ? this < t2 ? -e2.padding : e2.padding : 0;
    let n2 = ["years", "months", "days", "hours", "minutes", "seconds"], r2 = e2.unit;
    return Array.isArray(e2.unit) && (n2 = e2.unit, r2 = void 0), _tn._diffRelative(t2, this.plus(s2), Object.assign(Object.assign({}, e2), { numeric: "always", units: n2, unit: r2 }));
  }
  toRelativeCalendar(e2 = {}) {
    return this.isValid ? _tn._diffRelative(e2.base || _tn.fromObject({}, { zone: this.zone }), this, Object.assign(Object.assign({}, e2), { numeric: "auto", units: ["years", "months", "days"], calendary: true })) : null;
  }
  toSQL(e2 = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e2)}` : null;
  }
  toSQLDate() {
    return this.isValid ? this._toISODate(true) : null;
  }
  toSQLTime({ includeOffset: e2 = true, includeZone: t2 = false, includeOffsetSpace: s2 = true } = {}) {
    let n2 = "HH:mm:ss.SSS";
    return (t2 || e2) && (s2 && (n2 += " "), t2 ? n2 += "z" : e2 && (n2 += "ZZ")), Rs(this, n2, true);
  }
  toSeconds() {
    return this.isValid ? this._ts / 1e3 : NaN;
  }
  toString() {
    return this.isValid ? this.toISO() : As;
  }
  toUTC(e2 = 0, t2 = {}) {
    return this.setZone(de.instance(e2), t2);
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  until(e2) {
    return _s.fromDateTimes(this, e2);
  }
  valueOf() {
    return this.toMillis();
  }
  _adjustTime(e2) {
    const t2 = this._o, s2 = this._c.year + Math.trunc(e2.years), n2 = this._c.month + Math.trunc(e2.months) + 3 * Math.trunc(e2.quarters), r2 = Object.assign(Object.assign({}, this._c), { year: s2, month: n2, day: Math.min(this._c.day, nt(s2, n2)) + Math.trunc(e2.days) + 7 * Math.trunc(e2.weeks) }), i2 = fs.fromObject({ years: e2.years - Math.trunc(e2.years), quarters: e2.quarters - Math.trunc(e2.quarters), months: e2.months - Math.trunc(e2.months), weeks: e2.weeks - Math.trunc(e2.weeks), days: e2.days - Math.trunc(e2.days), hours: e2.hours, minutes: e2.minutes, seconds: e2.seconds, milliseconds: e2.milliseconds }).as("milliseconds"), a2 = rt(r2);
    let [o2, u2] = Us(a2, t2, this.zone);
    return 0 !== i2 && (o2 += i2, u2 = this.zone.offset(o2)), { ts: o2, o: u2 };
  }
  _clone(e2) {
    const t2 = { ts: this._ts, zone: this.zone, c: this._c, o: this._o, loc: this._loc, invalid: this._invalid || void 0 };
    return new _tn(Object.assign(Object.assign(Object.assign({}, t2), e2), { old: t2 }));
  }
  _possiblyCachedLocalWeekData(e2) {
    return e2._localWeekData || (e2._localWeekData = Ve(e2._c, e2.loc.getMinDaysInFirstWeek(), e2.loc.getStartOfWeek())), e2._localWeekData;
  }
  _possiblyCachedWeekData(e2) {
    return null === e2._weekData && (e2._weekData = Ve(e2._c)), e2._weekData;
  }
  _toISODate(e2) {
    const t2 = this._c.year > 9999 || this._c.year < 0;
    let s2 = "";
    return t2 && this._c.year >= 0 && (s2 += "+"), s2 += Be(this._c.year, t2 ? 6 : 4), e2 ? (s2 += "-", s2 += Be(this._c.month), s2 += "-", s2 += Be(this._c.day)) : (s2 += Be(this._c.month), s2 += Be(this._c.day)), s2;
  }
  _toISOTime(e2, t2, s2, n2, r2) {
    let i2 = Be(this._c.hour);
    return e2 ? (i2 += ":", i2 += Be(this._c.minute), 0 === this._c.millisecond && 0 === this._c.second && t2 || (i2 += ":")) : i2 += Be(this._c.minute), 0 === this._c.millisecond && 0 === this._c.second && t2 || (i2 += Be(this._c.second), 0 === this._c.millisecond && s2 || (i2 += ".", i2 += Be(this._c.millisecond, 3))), n2 && (this.isOffsetFixed && 0 === this.offset && !r2 ? i2 += "Z" : this._o < 0 ? (i2 += "-", i2 += Be(Math.trunc(-this._o / 60)), i2 += ":", i2 += Be(Math.trunc(-this._o % 60))) : (i2 += "+", i2 += Be(Math.trunc(this._o / 60)), i2 += ":", i2 += Be(Math.trunc(this._o % 60)))), r2 && (i2 += "[" + this.zone.ianaName + "]"), i2;
  }
};
tn.DATETIME_FULL = $, tn.DATETIME_FULL_WITH_SECONDS = Z, tn.DATETIME_HUGE = L, tn.DATETIME_HUGE_WITH_SECONDS = z, tn.DATETIME_MED = W, tn.DATETIME_MED_WITH_SECONDS = C, tn.DATETIME_MED_WITH_WEEKDAY = F, tn.DATETIME_SHORT = x, tn.DATETIME_SHORT_WITH_SECONDS = V, tn.DATE_FULL = b, tn.DATE_HUGE = v, tn.DATE_MED = k, tn.DATE_MED_WITH_WEEKDAY = O, tn.DATE_SHORT = p, tn.TIME_24_SIMPLE = M, tn.TIME_24_WITH_LONG_OFFSET = E, tn.TIME_24_WITH_SECONDS = I, tn.TIME_24_WITH_SHORT_OFFSET = j, tn.TIME_SIMPLE = S, tn.TIME_WITH_LONG_OFFSET = D, tn.TIME_WITH_SECONDS = T, tn.TIME_WITH_SHORT_OFFSET = N;

// node_modules/ngx-mat-timepicker/fesm2022/ngx-mat-timepicker.mjs
var _c0 = ["clockFace"];
var _c1 = ["clockHand"];
var _c2 = (a0) => ({
  "transform": a0
});
function NgxMatTimepickerFaceComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 9);
    ɵɵpipe(1, "activeHour");
    ɵɵtext(2);
    ɵɵpipe(3, "timeLocalizer");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const time_r8 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("color", ɵɵpipeBind3(1, 4, time_r8.time, ctx_r0.selectedTime == null ? null : ctx_r0.selectedTime.time, ctx_r0.isClockFaceDisabled) ? ctx_r0.color : void 0)("ngStyle", ɵɵpureFunction1(11, _c2, "rotateZ(-" + time_r8.angle + "deg)"))("disabled", time_r8.disabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 8, time_r8.time, ctx_r0.timeUnit.HOUR), " ");
  }
}
function NgxMatTimepickerFaceComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12)(1, "button", 9);
    ɵɵpipe(2, "activeMinute");
    ɵɵtext(3);
    ɵɵpipe(4, "timeLocalizer");
    ɵɵpipe(5, "minutesFormatter");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const time_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(16, _c2, "rotateZ(" + time_r10.angle + "deg)"));
    ɵɵadvance();
    ɵɵproperty("color", ɵɵpipeBind4(2, 5, time_r10.time, ctx_r9.selectedTime == null ? null : ctx_r9.selectedTime.time, ctx_r9.minutesGap, ctx_r9.isClockFaceDisabled) ? ctx_r9.color : void 0)("ngStyle", ɵɵpureFunction1(18, _c2, "rotateZ(-" + time_r10.angle + "deg)"))("disabled", time_r10.disabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 10, ɵɵpipeBind2(5, 13, time_r10.time, ctx_r9.minutesGap), ctx_r9.timeUnit.MINUTE), " ");
  }
}
function NgxMatTimepickerFaceComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, NgxMatTimepickerFaceComponent_ng_template_2_div_1_Template, 6, 20, "div", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.faceTime)("ngForTrackBy", ctx_r2.trackByTime);
  }
}
function NgxMatTimepickerFaceComponent_div_6_div_1_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngTemplateOutlet", "hourButton; context: {$implicit: time}"]);
  }
}
var _c3 = (a0) => ({
  $implicit: a0
});
function NgxMatTimepickerFaceComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, NgxMatTimepickerFaceComponent_div_6_div_1_ng_content_1_Template, 1, 0, "ng-content", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const time_r13 = ctx.$implicit;
    ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c2, "rotateZ(" + time_r13.angle + "deg)"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c3, time_r13));
  }
}
function NgxMatTimepickerFaceComponent_div_6_div_3_div_1_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngTemplateOutlet", "hourButton; context: {$implicit: time}"]);
  }
}
function NgxMatTimepickerFaceComponent_div_6_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, NgxMatTimepickerFaceComponent_div_6_div_3_div_1_ng_content_1_Template, 1, 0, "ng-content", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const time_r16 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(3);
    const _r1 = ɵɵreference(1);
    ɵɵstyleProp("top", "calc(50% - " + ctx_r15.innerClockFaceSize + "px)")("height", ctx_r15.innerClockFaceSize, "px");
    ɵɵproperty("ngStyle", ɵɵpureFunction1(7, _c2, "rotateZ(" + time_r16.angle + "deg)"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c3, time_r16));
  }
}
function NgxMatTimepickerFaceComponent_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, NgxMatTimepickerFaceComponent_div_6_div_3_div_1_Template, 2, 11, "div", 16);
    ɵɵpipe(2, "slice");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind3(2, 2, ctx_r12.faceTime, 12, 24))("ngForTrackBy", ctx_r12.trackByTime);
  }
}
function NgxMatTimepickerFaceComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, NgxMatTimepickerFaceComponent_div_6_div_1_Template, 2, 7, "div", 11);
    ɵɵpipe(2, "slice");
    ɵɵtemplate(3, NgxMatTimepickerFaceComponent_div_6_div_3_Template, 3, 6, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind3(2, 3, ctx_r5.faceTime, 0, 12))("ngForTrackBy", ctx_r5.trackByTime);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r5.faceTime.length > 12);
  }
}
function NgxMatTimepickerFaceComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 18);
    ɵɵelement(1, "span", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r7.color);
  }
}
var _c4 = ["*", "*"];
var _c5 = (a0) => ({
  "clock-face__clock-hand_minute": a0
});
function NgxMatTimepickerPeriodComponent_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("@scaleInOut.done", function NgxMatTimepickerPeriodComponent_ng_template_6_div_0_Template_div_animation_scaleInOut_done_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.animationDone());
    });
    ɵɵelementStart(1, "p");
    ɵɵtext(2, "Current time would be invalid in this period.");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵproperty("@scaleInOut", void 0);
  }
}
function NgxMatTimepickerPeriodComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgxMatTimepickerPeriodComponent_ng_template_6_div_0_Template, 3, 1, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r1.isPeriodAvailable);
  }
}
var _c6 = (a0) => ({
  "active": a0
});
function NgxMatTimepickerDialControlComponent_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 2);
    ɵɵlistener("ngModelChange", function NgxMatTimepickerDialControlComponent_input_0_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.time = $event);
    })("input", function NgxMatTimepickerDialControlComponent_input_0_Template_input_input_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.updateTime());
    })("focus", function NgxMatTimepickerDialControlComponent_input_0_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.saveTimeAndChangeTimeUnit($event, ctx_r6.timeUnit));
    });
    ɵɵpipe(1, "timeLocalizer");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c6, ctx_r0.isActive))("ngModel", ɵɵpipeBind3(1, 4, ctx_r0.time, ctx_r0.timeUnit, true))("disabled", ctx_r0.disabled)("ngxMatTimepickerAutofocus", ctx_r0.isActive);
  }
}
function NgxMatTimepickerDialControlComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 3);
    ɵɵlistener("ngModelChange", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onModelChange($event));
    })("input", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_input_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.updateTime());
    })("focus", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.saveTimeAndChangeTimeUnit($event, ctx_r10.timeUnit));
    })("keydown", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.onKeydown($event));
    })("keypress", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_keypress_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.changeTimeByKeyboard($event));
    });
    ɵɵpipe(1, "timeLocalizer");
    ɵɵpipe(2, "ngxMatTimepickerParser");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c6, ctx_r1.isActive))("ngModel", ɵɵpipeBind3(1, 4, ɵɵpipeBind2(2, 8, ctx_r1.time, ctx_r1.timeUnit), ctx_r1.timeUnit, true))("disabled", ctx_r1.disabled)("ngxMatTimepickerAutofocus", ctx_r1.isActive);
  }
}
function NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-mat-timepicker-period", 7);
    ɵɵlistener("periodChanged", function NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template_ngx_mat_timepicker_period_periodChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.changePeriod($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("selectedPeriod", ctx_r0.period)("activeTimeUnit", ctx_r0.activeTimeUnit)("maxTime", ctx_r0.maxTime)("minTime", ctx_r0.minTime)("format", ctx_r0.format)("hours", ctx_r0.hours)("minutes", ctx_r0.minutes)("selectedHour", ctx_r0.hour)("meridiems", ctx_r0.meridiems);
  }
}
function NgxMatTimepickerDialComponent_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgxMatTimepickerDialComponent_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small", 11);
    ɵɵtext(1, " * use arrows (");
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "⇅");
    ɵɵelementEnd();
    ɵɵtext(4, ") to change the time");
    ɵɵelementEnd();
  }
}
var _c7 = (a0) => ({
  "timepicker-dial__hint-container--hidden": a0
});
function NgxMatTimepickerDialComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, NgxMatTimepickerDialComponent_div_8_ng_container_1_Template, 1, 0, "ng-container", 9)(2, NgxMatTimepickerDialComponent_div_8_ng_template_2_Template, 5, 0, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r6 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c7, !ctx_r1.isHintVisible));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.editableHintTmpl ? ctx_r1.editableHintTmpl : _r6);
  }
}
function NgxMatTimepickerContentComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgxMatTimepickerContentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NgxMatTimepickerContentComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NgxMatTimepickerContentComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgxMatTimepickerContentComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgxMatTimepickerContentComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NgxMatTimepickerContentComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c8 = ["*"];
function NgxMatTimepickerDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 14);
    ɵɵtext(1, "CANCEL ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r0.color);
  }
}
function NgxMatTimepickerDialogComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 14);
    ɵɵtext(1, "OK ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r2.color);
  }
}
function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-mat-timepicker-24-hours-face", 17);
    ɵɵlistener("hourChange", function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template_ngx_mat_timepicker_24_hours_face_hourChange_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.onHourChange($event));
    })("hourSelected", function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template_ngx_mat_timepicker_24_hours_face_hourSelected_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r13 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r13.onHourSelected($event));
    });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("color", ctx_r8.color)("selectedHour", ɵɵpipeBind1(1, 5, ctx_r8.selectedHour))("minTime", ctx_r8.data.minTime)("maxTime", ctx_r8.data.maxTime)("format", ctx_r8.data.format);
  }
}
function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-mat-timepicker-12-hours-face", 18);
    ɵɵlistener("hourChange", function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template_ngx_mat_timepicker_12_hours_face_hourChange_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r14.onHourChange($event));
    })("hourSelected", function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template_ngx_mat_timepicker_12_hours_face_hourSelected_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.onHourSelected($event));
    });
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("color", ctx_r9.color)("selectedHour", ɵɵpipeBind1(1, 5, ctx_r9.selectedHour))("period", ɵɵpipeBind1(2, 7, ctx_r9.selectedPeriod))("minTime", ctx_r9.data.minTime)("maxTime", ctx_r9.data.maxTime);
  }
}
function NgxMatTimepickerDialogComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template, 2, 7, "ngx-mat-timepicker-24-hours-face", 15)(2, NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template, 3, 9, "ng-template", null, 16, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r10 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.data.format === 24)("ngIfElse", _r10);
  }
}
function NgxMatTimepickerDialogComponent_ngx_mat_timepicker_minutes_face_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-mat-timepicker-minutes-face", 19);
    ɵɵlistener("minuteChange", function NgxMatTimepickerDialogComponent_ngx_mat_timepicker_minutes_face_15_Template_ngx_mat_timepicker_minutes_face_minuteChange_0_listener($event) {
      ɵɵrestoreView(_r18);
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.onMinuteChange($event));
    });
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    let tmp_2_0;
    ɵɵproperty("color", ctx_r5.color)("selectedMinute", ɵɵpipeBind1(1, 8, ctx_r5.selectedMinute))("selectedHour", (tmp_2_0 = ɵɵpipeBind1(2, 10, ctx_r5.selectedHour)) == null ? null : tmp_2_0.time)("minTime", ctx_r5.data.minTime)("maxTime", ctx_r5.data.maxTime)("format", ctx_r5.data.format)("period", ɵɵpipeBind1(3, 12, ctx_r5.selectedPeriod))("minutesGap", ctx_r5.data.minutesGap);
  }
}
function NgxMatTimepickerDialogComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgxMatTimepickerDialogComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgxMatTimepickerStandaloneComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 14);
    ɵɵtext(1, "CANCEL ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r0.color);
  }
}
function NgxMatTimepickerStandaloneComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 14);
    ɵɵtext(1, "OK ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r2.color);
  }
}
function NgxMatTimepickerStandaloneComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-mat-timepicker-24-hours-face", 17);
    ɵɵlistener("hourChange", function NgxMatTimepickerStandaloneComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template_ngx_mat_timepicker_24_hours_face_hourChange_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.onHourChange($event));
    })("hourSelected", function NgxMatTimepickerStandaloneComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template_ngx_mat_timepicker_24_hours_face_hourSelected_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r13 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r13.onHourSelected($event));
    });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("color", ctx_r8.color)("selectedHour", ɵɵpipeBind1(1, 5, ctx_r8.selectedHour))("minTime", ctx_r8.data.minTime)("maxTime", ctx_r8.data.maxTime)("format", ctx_r8.data.format);
  }
}
function NgxMatTimepickerStandaloneComponent_div_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-mat-timepicker-12-hours-face", 18);
    ɵɵlistener("hourChange", function NgxMatTimepickerStandaloneComponent_div_14_ng_template_2_Template_ngx_mat_timepicker_12_hours_face_hourChange_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r14.onHourChange($event));
    })("hourSelected", function NgxMatTimepickerStandaloneComponent_div_14_ng_template_2_Template_ngx_mat_timepicker_12_hours_face_hourSelected_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.onHourSelected($event));
    });
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("color", ctx_r9.color)("selectedHour", ɵɵpipeBind1(1, 5, ctx_r9.selectedHour))("period", ɵɵpipeBind1(2, 7, ctx_r9.selectedPeriod))("minTime", ctx_r9.data.minTime)("maxTime", ctx_r9.data.maxTime);
  }
}
function NgxMatTimepickerStandaloneComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NgxMatTimepickerStandaloneComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template, 2, 7, "ngx-mat-timepicker-24-hours-face", 15)(2, NgxMatTimepickerStandaloneComponent_div_14_ng_template_2_Template, 3, 9, "ng-template", null, 16, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r10 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.data.format === 24)("ngIfElse", _r10);
  }
}
function NgxMatTimepickerStandaloneComponent_ngx_mat_timepicker_minutes_face_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-mat-timepicker-minutes-face", 19);
    ɵɵlistener("minuteChange", function NgxMatTimepickerStandaloneComponent_ngx_mat_timepicker_minutes_face_15_Template_ngx_mat_timepicker_minutes_face_minuteChange_0_listener($event) {
      ɵɵrestoreView(_r18);
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.onMinuteChange($event));
    });
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    let tmp_2_0;
    ɵɵproperty("color", ctx_r5.color)("selectedMinute", ɵɵpipeBind1(1, 8, ctx_r5.selectedMinute))("selectedHour", (tmp_2_0 = ɵɵpipeBind1(2, 10, ctx_r5.selectedHour)) == null ? null : tmp_2_0.time)("minTime", ctx_r5.data.minTime)("maxTime", ctx_r5.data.maxTime)("format", ctx_r5.data.format)("period", ɵɵpipeBind1(3, 12, ctx_r5.selectedPeriod))("minutesGap", ctx_r5.data.minutesGap);
  }
}
function NgxMatTimepickerStandaloneComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgxMatTimepickerStandaloneComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgxMatTimepickerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-mat-timepicker-provider");
  }
}
function NgxMatTimepickerToggleComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 2);
    ɵɵelement(1, "path", 3);
    ɵɵelementEnd();
  }
}
var _c9 = [[["", "ngxMatTimepickerToggleIcon", ""]]];
var _c10 = ["[ngxMatTimepickerToggleIcon]"];
function NgxMatTimepickerFieldComponent_mat_form_field_5_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    ɵɵproperty("value", option_r6);
    ɵɵadvance();
    ɵɵtextInterpolate(option_r6);
  }
}
function NgxMatTimepickerFieldComponent_mat_form_field_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 9)(1, "mat-select", 10);
    ɵɵlistener("selectionChange", function NgxMatTimepickerFieldComponent_mat_form_field_5_Template_mat_select_selectionChange_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.changePeriod($event));
    });
    ɵɵtemplate(2, NgxMatTimepickerFieldComponent_mat_form_field_5_mat_option_2_Template, 2, 2, "mat-option", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r0.color);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r0.disabled || ctx_r0.isChangePeriodDisabled)("ngModel", ctx_r0.period);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.periods);
  }
}
function NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-mat-timepicker-toggle", 13)(1, "span", 14);
    ɵɵtemplate(2, NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_6_ng_container_2_Template, 1, 0, "ng-container", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r2 = ɵɵreference(8);
    const _r4 = ɵɵreference(10);
    ɵɵproperty("for", _r2)("disabled", ctx_r1.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.toggleIcon || _r4);
  }
}
function NgxMatTimepickerFieldComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "watch_later");
    ɵɵelementEnd();
  }
}
var _c11 = (a0) => ({
  "ngx-mat-timepicker--disabled": a0
});
var NgxMatTimepickerFormat;
(function(NgxMatTimepickerFormat2) {
  NgxMatTimepickerFormat2["TWELVE"] = "hh:mm a";
  NgxMatTimepickerFormat2["TWELVE_SHORT"] = "h:m a";
  NgxMatTimepickerFormat2["TWENTY_FOUR"] = "HH:mm";
  NgxMatTimepickerFormat2["TWENTY_FOUR_SHORT"] = "H:m";
})(NgxMatTimepickerFormat || (NgxMatTimepickerFormat = {}));
var NgxMatTimepickerPeriods;
(function(NgxMatTimepickerPeriods2) {
  NgxMatTimepickerPeriods2["AM"] = "AM";
  NgxMatTimepickerPeriods2["PM"] = "PM";
})(NgxMatTimepickerPeriods || (NgxMatTimepickerPeriods = {}));
var _NgxMatTimepickerAdapter = class _NgxMatTimepickerAdapter {
  /***
   *  Format hour according to time format (12 or 24)
   */
  static formatHour(currentHour, format, period) {
    if (this.isTwentyFour(format)) {
      return currentHour;
    }
    const hour = period === NgxMatTimepickerPeriods.AM ? currentHour : currentHour + 12;
    if (period === NgxMatTimepickerPeriods.AM && hour === 12) {
      return 0;
    } else if (period === NgxMatTimepickerPeriods.PM && hour === 24) {
      return 12;
    }
    return hour;
  }
  static formatTime(time, opts) {
    if (!time) {
      return "Invalid Time";
    }
    const parsedTime = this.parseTime(time, opts).setLocale(this.defaultLocale);
    if (!parsedTime.isValid) {
      return "Invalid time";
    }
    const isTwelve = !this.isTwentyFour(opts.format);
    if (isTwelve) {
      return parsedTime.toLocaleString(__spreadProps(__spreadValues({}, tn.TIME_SIMPLE), {
        hour12: isTwelve
      })).replace(/\u200E/g, "");
    }
    return parsedTime.toISOTime({
      includeOffset: false,
      suppressMilliseconds: true,
      suppressSeconds: true
    }).replace(/\u200E/g, "");
  }
  static fromDateTimeToString(time, format) {
    return time.reconfigure({
      numberingSystem: this.defaultNumberingSystem,
      locale: this.defaultLocale
    }).toFormat(this.isTwentyFour(format) ? NgxMatTimepickerFormat.TWENTY_FOUR : NgxMatTimepickerFormat.TWELVE);
  }
  static isBetween(time, before, after, unit = "minutes") {
    const innerUnit = unit === "hours" ? unit : void 0;
    return this.isSameOrBefore(time, after, innerUnit) && this.isSameOrAfter(time, before, innerUnit);
  }
  static isSameOrAfter(time, compareWith, unit = "minutes") {
    if (unit === "hours") {
      return time.hour >= compareWith.hour;
    }
    return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
  }
  static isSameOrBefore(time, compareWith, unit = "minutes") {
    if (unit === "hours") {
      return time.hour <= compareWith.hour;
    }
    return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
  }
  static isTimeAvailable(time, min, max, granularity, minutesGap, format) {
    if (!time) {
      return void 0;
    }
    const convertedTime = this.parseTime(time, {
      format
    });
    const minutes = convertedTime.minute;
    if (minutesGap && minutes === minutes && minutes % minutesGap !== 0) {
      throw new Error(`Your minutes - ${minutes} doesn't match your minutesGap - ${minutesGap}`);
    }
    const isAfter = min && !max && this.isSameOrAfter(convertedTime, min, granularity);
    const isBefore = max && !min && this.isSameOrBefore(convertedTime, max, granularity);
    const between = min && max && this.isBetween(convertedTime, min, max, granularity);
    const isAvailable = !min && !max;
    return isAfter || isBefore || between || isAvailable;
  }
  static isTwentyFour(format) {
    return format === 24;
  }
  static parseTime(time, opts) {
    const localeOpts = this._getLocaleOptionsByTime(time, opts);
    let timeMask = NgxMatTimepickerFormat.TWENTY_FOUR_SHORT;
    if (time.match(/\s/g)) {
      time = time.replace(/\.\s*/g, "");
      timeMask = NgxMatTimepickerFormat.TWELVE_SHORT;
    }
    return tn.fromFormat(time.replace(/\s+/g, " "), timeMask, {
      numberingSystem: localeOpts.numberingSystem,
      locale: localeOpts.locale
    });
  }
  static toLocaleTimeString(time, opts = {}) {
    const {
      format = this.defaultFormat,
      locale = this.defaultLocale
    } = opts;
    let hourCycle = "h12";
    let timeMask = NgxMatTimepickerFormat.TWELVE_SHORT;
    if (this.isTwentyFour(format)) {
      hourCycle = "h23";
      timeMask = NgxMatTimepickerFormat.TWENTY_FOUR_SHORT;
    }
    return tn.fromFormat(time, timeMask).reconfigure({
      locale,
      numberingSystem: opts.numberingSystem,
      defaultToEN: opts.defaultToEN,
      outputCalendar: opts.outputCalendar
    }).toLocaleString(__spreadProps(__spreadValues({}, tn.TIME_SIMPLE), {
      hourCycle
    }));
  }
  /**
   *
   * @param time
   * @param opts
   * @private
   */
  static _getLocaleOptionsByTime(time, opts) {
    const {
      numberingSystem,
      locale
    } = tn.now().reconfigure({
      locale: opts.locale,
      numberingSystem: opts.numberingSystem,
      outputCalendar: opts.outputCalendar,
      defaultToEN: opts.defaultToEN
    }).resolvedLocaleOptions();
    return isNaN(parseInt(time, 10)) ? {
      numberingSystem,
      locale
    } : {
      numberingSystem: this.defaultNumberingSystem,
      locale: this.defaultLocale
    };
  }
};
_NgxMatTimepickerAdapter.defaultFormat = 12;
_NgxMatTimepickerAdapter.defaultLocale = "en-US";
_NgxMatTimepickerAdapter.defaultNumberingSystem = "latn";
var NgxMatTimepickerAdapter = _NgxMatTimepickerAdapter;
var NgxMatTimepickerUnits;
(function(NgxMatTimepickerUnits2) {
  NgxMatTimepickerUnits2[NgxMatTimepickerUnits2["HOUR"] = 0] = "HOUR";
  NgxMatTimepickerUnits2[NgxMatTimepickerUnits2["MINUTE"] = 1] = "MINUTE";
})(NgxMatTimepickerUnits || (NgxMatTimepickerUnits = {}));
var NGX_MAT_TIMEPICKER_CONFIG = new InjectionToken("NGX_MAT_TIMEPICKER_CONFIG");
var DEFAULT_HOUR = {
  time: 12,
  angle: 360
};
var DEFAULT_MINUTE = {
  time: 0,
  angle: 360
};
var _NgxMatTimepickerService = class _NgxMatTimepickerService {
  constructor() {
    this._hour$ = new BehaviorSubject(DEFAULT_HOUR);
    this._minute$ = new BehaviorSubject(DEFAULT_MINUTE);
    this._period$ = new BehaviorSubject(NgxMatTimepickerPeriods.AM);
  }
  set hour(hour) {
    this._hour$.next(hour);
  }
  set minute(minute) {
    this._minute$.next(minute);
  }
  set period(period) {
    const isPeriodValid = period === NgxMatTimepickerPeriods.AM || period === NgxMatTimepickerPeriods.PM;
    if (isPeriodValid) {
      this._period$.next(period);
    }
  }
  get selectedHour() {
    return this._hour$.asObservable();
  }
  get selectedMinute() {
    return this._minute$.asObservable();
  }
  get selectedPeriod() {
    return this._period$.asObservable();
  }
  getFullTime(format) {
    const selectedHour = this._hour$.getValue().time;
    const selectedMinute = this._minute$.getValue().time;
    const hour = selectedHour != null ? selectedHour : DEFAULT_HOUR.time;
    const minute = selectedMinute != null ? selectedMinute : DEFAULT_MINUTE.time;
    const period = format === 12 ? this._period$.getValue() : "";
    const time = `${hour}:${minute} ${period}`.trim();
    return NgxMatTimepickerAdapter.formatTime(time, {
      format
    });
  }
  setDefaultTimeIfAvailable(time, min, max, format, minutesGap) {
    time || this._resetTime();
    try {
      if (NgxMatTimepickerAdapter.isTimeAvailable(time, min, max, "minutes", minutesGap)) {
        this._setDefaultTime(time, format);
      }
    } catch (e2) {
      console.error(e2);
    }
  }
  _resetTime() {
    this.hour = __spreadValues({}, DEFAULT_HOUR);
    this.minute = __spreadValues({}, DEFAULT_MINUTE);
    this.period = NgxMatTimepickerPeriods.AM;
  }
  _setDefaultTime(time, format) {
    const defaultDto = NgxMatTimepickerAdapter.parseTime(time, {
      format
    });
    if (defaultDto.isValid) {
      const period = time.substring(time.length - 2).toUpperCase();
      const hour = defaultDto.hour;
      this.hour = __spreadProps(__spreadValues({}, DEFAULT_HOUR), {
        time: formatHourByPeriod(hour, period)
      });
      this.minute = __spreadProps(__spreadValues({}, DEFAULT_MINUTE), {
        time: defaultDto.minute
      });
      this.period = period;
    } else {
      this._resetTime();
    }
  }
};
_NgxMatTimepickerService.ɵfac = function NgxMatTimepickerService_Factory(t2) {
  return new (t2 || _NgxMatTimepickerService)();
};
_NgxMatTimepickerService.ɵprov = ɵɵdefineInjectable({
  token: _NgxMatTimepickerService,
  factory: _NgxMatTimepickerService.ɵfac,
  providedIn: "root"
});
var NgxMatTimepickerService = _NgxMatTimepickerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function formatHourByPeriod(hour, period) {
  switch (period) {
    case NgxMatTimepickerPeriods.AM:
      return hour === 0 ? 12 : hour;
    case NgxMatTimepickerPeriods.PM:
      return hour === 12 ? 12 : hour - 12;
    default:
      return hour;
  }
}
var _NgxMatTimepickerEventService = class _NgxMatTimepickerEventService {
  get backdropClick() {
    return this._backdropClick$.asObservable().pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  get keydownEvent() {
    return this._keydownEvent$.asObservable().pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  constructor() {
    this._backdropClick$ = new Subject();
    this._keydownEvent$ = new Subject();
  }
  dispatchEvent(event) {
    switch (event.type) {
      case "click":
        this._backdropClick$.next(event);
        break;
      case "keydown":
        this._keydownEvent$.next(event);
        break;
      default:
        throw new Error("no such event type");
    }
  }
};
_NgxMatTimepickerEventService.ɵfac = function NgxMatTimepickerEventService_Factory(t2) {
  return new (t2 || _NgxMatTimepickerEventService)();
};
_NgxMatTimepickerEventService.ɵprov = ɵɵdefineInjectable({
  token: _NgxMatTimepickerEventService,
  factory: _NgxMatTimepickerEventService.ɵfac,
  providedIn: "root"
});
var NgxMatTimepickerEventService = _NgxMatTimepickerEventService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerEventService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NGX_MAT_TIMEPICKER_LOCALE = new InjectionToken("TimeLocale", {
  providedIn: "root",
  factory: () => NgxMatTimepickerAdapter.defaultLocale
});
var _NgxMatTimepickerLocaleService = class _NgxMatTimepickerLocaleService {
  get locale() {
    return this._locale;
  }
  constructor(initialLocale) {
    this._locale = initialLocale;
  }
  updateLocale(newValue) {
    this._locale = newValue || this._initialLocale;
  }
};
_NgxMatTimepickerLocaleService.ɵfac = function NgxMatTimepickerLocaleService_Factory(t2) {
  return new (t2 || _NgxMatTimepickerLocaleService)(ɵɵinject(NGX_MAT_TIMEPICKER_LOCALE));
};
_NgxMatTimepickerLocaleService.ɵprov = ɵɵdefineInjectable({
  token: _NgxMatTimepickerLocaleService,
  factory: _NgxMatTimepickerLocaleService.ɵfac,
  providedIn: "root"
});
var NgxMatTimepickerLocaleService = _NgxMatTimepickerLocaleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerLocaleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_MAT_TIMEPICKER_LOCALE]
    }]
  }], null);
})();
var _NgxMatTimepickerBaseDirective = class _NgxMatTimepickerBaseDirective {
  set color(newValue) {
    this._color = newValue;
  }
  get color() {
    return this._color;
  }
  get defaultTime() {
    return this._defaultTime;
  }
  set defaultTime(time) {
    this._defaultTime = time;
    this._setDefaultTime(time);
  }
  get _locale() {
    return this._timepickerLocaleSrv.locale;
  }
  constructor(_timepickerSrv, _eventSrv, _timepickerLocaleSrv, data) {
    this._timepickerSrv = _timepickerSrv;
    this._eventSrv = _eventSrv;
    this._timepickerLocaleSrv = _timepickerLocaleSrv;
    this.data = data;
    this.activeTimeUnit = NgxMatTimepickerUnits.HOUR;
    this.timeUnit = NgxMatTimepickerUnits;
    this._color = "primary";
    this._subsCtrl$ = new Subject();
    this.color = data.color;
    this.defaultTime = data.defaultTime;
  }
  changePeriod(period) {
    this._timepickerSrv.period = period;
    this._onTimeChange();
  }
  changeTimeUnit(unit) {
    this.activeTimeUnit = unit;
  }
  close() {
    this.data.timepickerBaseRef.close();
  }
  ngOnDestroy() {
    this._subsCtrl$.next();
    this._subsCtrl$.complete();
  }
  ngOnInit() {
    this._defineTime();
    this.selectedHour = this._timepickerSrv.selectedHour.pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    this.selectedMinute = this._timepickerSrv.selectedMinute.pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    this.selectedPeriod = this._timepickerSrv.selectedPeriod.pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    this.data.timepickerBaseRef.timeUpdated.pipe(takeUntil(this._subsCtrl$)).subscribe({
      next: (v2) => {
        v2 && this._setDefaultTime(v2);
      }
    });
  }
  onHourChange(hour) {
    this._timepickerSrv.hour = hour;
    this._onTimeChange();
  }
  onHourSelected(hour) {
    if (!this.data.hoursOnly) {
      this.changeTimeUnit(NgxMatTimepickerUnits.MINUTE);
    }
    this.data.timepickerBaseRef.hourSelected.next(hour);
  }
  onKeydown(e2) {
    this._eventSrv.dispatchEvent(e2);
    e2.stopPropagation();
  }
  onMinuteChange(minute) {
    this._timepickerSrv.minute = minute;
    this._onTimeChange();
  }
  setTime() {
    this.data.timepickerBaseRef.timeSet.emit(this._timepickerSrv.getFullTime(this.data.format));
    this.close();
  }
  _defineTime() {
    const minTime = this.data.minTime;
    if (minTime && !this.data.time && !this.data.defaultTime) {
      const time = NgxMatTimepickerAdapter.fromDateTimeToString(minTime, this.data.format);
      this._setDefaultTime(time);
    }
  }
  _onTimeChange() {
    const time = NgxMatTimepickerAdapter.toLocaleTimeString(this._timepickerSrv.getFullTime(this.data.format), {
      locale: this._locale,
      format: this.data.format
    });
    this.data.timepickerBaseRef.timeChanged.emit(time);
  }
  _setDefaultTime(time) {
    this._timepickerSrv.setDefaultTimeIfAvailable(time, this.data.minTime, this.data.maxTime, this.data.format, this.data.minutesGap);
  }
};
_NgxMatTimepickerBaseDirective.ɵfac = function NgxMatTimepickerBaseDirective_Factory(t2) {
  return new (t2 || _NgxMatTimepickerBaseDirective)(ɵɵdirectiveInject(NgxMatTimepickerService), ɵɵdirectiveInject(NgxMatTimepickerEventService), ɵɵdirectiveInject(NgxMatTimepickerLocaleService), ɵɵdirectiveInject(NGX_MAT_TIMEPICKER_CONFIG));
};
_NgxMatTimepickerBaseDirective.ɵdir = ɵɵdefineDirective({
  type: _NgxMatTimepickerBaseDirective,
  selectors: [["", "ngxMatTimepickerBase", ""]],
  hostBindings: function NgxMatTimepickerBaseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function NgxMatTimepickerBaseDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      });
    }
  },
  inputs: {
    color: "color",
    defaultTime: "defaultTime"
  },
  standalone: true
});
var NgxMatTimepickerBaseDirective = _NgxMatTimepickerBaseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerBaseDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatTimepickerBase]",
      standalone: true
    }]
  }], () => [{
    type: NgxMatTimepickerService
  }, {
    type: NgxMatTimepickerEventService
  }, {
    type: NgxMatTimepickerLocaleService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_MAT_TIMEPICKER_CONFIG]
    }]
  }], {
    color: [{
      type: Input
    }],
    defaultTime: [{
      type: Input
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var NgxMatTimepickerUtils = class {
  static get DEFAULT_MINUTES_GAP() {
    return 5;
  }
  static disableHours(hours, config2) {
    if (config2.min || config2.max) {
      return hours.map((value) => {
        const hour = NgxMatTimepickerAdapter.isTwentyFour(config2.format) ? value.time : NgxMatTimepickerAdapter.formatHour(value.time, config2.format, config2.period);
        const currentTime = tn.fromObject({
          hour
        }).toFormat(NgxMatTimepickerFormat.TWELVE);
        return __spreadProps(__spreadValues({}, value), {
          disabled: !NgxMatTimepickerAdapter.isTimeAvailable(currentTime, config2.min, config2.max, "hours")
        });
      });
    }
    return hours;
  }
  static disableMinutes(minutes, selectedHour, config2) {
    if (config2.min || config2.max) {
      const hour = NgxMatTimepickerAdapter.formatHour(selectedHour, config2.format, config2.period);
      let currentTime = tn.fromObject({
        hour,
        minute: 0
      });
      return minutes.map((value) => {
        currentTime = currentTime.set({
          minute: value.time
        });
        return __spreadProps(__spreadValues({}, value), {
          disabled: !NgxMatTimepickerAdapter.isTimeAvailable(currentTime.toFormat(NgxMatTimepickerFormat.TWELVE), config2.min, config2.max, "minutes")
        });
      });
    }
    return minutes;
  }
  static getHours(format) {
    return Array(format).fill(1).map((v2, i2) => {
      const angleStep = 30;
      const time = v2 + i2;
      const angle = angleStep * time;
      return {
        time: time === 24 ? 0 : time,
        angle
      };
    });
  }
  static getMinutes(gap = 1) {
    const minutesCount = 60;
    const angleStep = 360 / minutesCount;
    const minutes = [];
    for (let i2 = 0; i2 < minutesCount; i2++) {
      const angle = angleStep * i2;
      if (i2 % gap === 0) {
        minutes.push({
          time: i2,
          angle: angle !== 0 ? angle : 360
        });
      }
    }
    return minutes;
  }
  static isDigit(e2) {
    if ([46, 8, 9, 27, 13].some((n2) => n2 === e2.keyCode) || // Allow: Ctrl/cmd+A
    e2.keyCode === 65 && (e2.ctrlKey === true || e2.metaKey === true) || // Allow: Ctrl/cmd+C
    e2.keyCode === 67 && (e2.ctrlKey === true || e2.metaKey === true) || // Allow: Ctrl/cmd+X
    e2.keyCode === 88 && (e2.ctrlKey === true || e2.metaKey === true) || // Allow: home, end, left, right, up, down
    e2.keyCode >= 35 && e2.keyCode <= 40) {
      return true;
    }
    return !((e2.keyCode < 48 || e2.keyCode > 57) && (e2.keyCode < 96 || e2.keyCode > 105));
  }
};
var NgxMatTimepickerMeasure;
(function(NgxMatTimepickerMeasure2) {
  NgxMatTimepickerMeasure2["hour"] = "hour";
  NgxMatTimepickerMeasure2["minute"] = "minute";
})(NgxMatTimepickerMeasure || (NgxMatTimepickerMeasure = {}));
var _NgxMatTimepickerTimeLocalizerPipe = class _NgxMatTimepickerTimeLocalizerPipe {
  get _locale() {
    return this._timepickerLocaleSrv.locale;
  }
  constructor(_timepickerLocaleSrv) {
    this._timepickerLocaleSrv = _timepickerLocaleSrv;
  }
  transform(time, timeUnit, isKeyboardEnabled = false) {
    if (time == null || time === "") {
      return "";
    }
    switch (timeUnit) {
      case NgxMatTimepickerUnits.HOUR: {
        const format = time === 0 || isKeyboardEnabled ? "HH" : "H";
        return this._formatTime(NgxMatTimepickerMeasure.hour, time, format);
      }
      case NgxMatTimepickerUnits.MINUTE:
        return this._formatTime(NgxMatTimepickerMeasure.minute, time, "mm");
      default:
        throw new Error(`There is no Time Unit with type ${timeUnit}`);
    }
  }
  _formatTime(timeMeasure, time, format) {
    try {
      return tn.fromObject({
        [timeMeasure]: +time
      }).setLocale(this._locale).toFormat(format);
    } catch {
      throw new Error(`Cannot format provided time - ${time} to locale - ${this._locale}`);
    }
  }
};
_NgxMatTimepickerTimeLocalizerPipe.ɵfac = function NgxMatTimepickerTimeLocalizerPipe_Factory(t2) {
  return new (t2 || _NgxMatTimepickerTimeLocalizerPipe)(ɵɵdirectiveInject(NgxMatTimepickerLocaleService, 16));
};
_NgxMatTimepickerTimeLocalizerPipe.ɵpipe = ɵɵdefinePipe({
  name: "timeLocalizer",
  type: _NgxMatTimepickerTimeLocalizerPipe,
  pure: true,
  standalone: true
});
var NgxMatTimepickerTimeLocalizerPipe = _NgxMatTimepickerTimeLocalizerPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerTimeLocalizerPipe, [{
    type: Pipe,
    args: [{
      name: "timeLocalizer",
      standalone: true
    }]
  }], () => [{
    type: NgxMatTimepickerLocaleService
  }], null);
})();
var _NgxMatTimepickerMinutesFormatterPipe = class _NgxMatTimepickerMinutesFormatterPipe {
  transform(minute, gap = NgxMatTimepickerUtils.DEFAULT_MINUTES_GAP) {
    if (!minute) {
      return minute;
    }
    return minute % gap === 0 ? minute : "";
  }
};
_NgxMatTimepickerMinutesFormatterPipe.ɵfac = function NgxMatTimepickerMinutesFormatterPipe_Factory(t2) {
  return new (t2 || _NgxMatTimepickerMinutesFormatterPipe)();
};
_NgxMatTimepickerMinutesFormatterPipe.ɵpipe = ɵɵdefinePipe({
  name: "minutesFormatter",
  type: _NgxMatTimepickerMinutesFormatterPipe,
  pure: true,
  standalone: true
});
var NgxMatTimepickerMinutesFormatterPipe = _NgxMatTimepickerMinutesFormatterPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerMinutesFormatterPipe, [{
    type: Pipe,
    args: [{
      name: "minutesFormatter",
      standalone: true
    }]
  }], null, null);
})();
var _NgxMatTimepickerActiveMinutePipe = class _NgxMatTimepickerActiveMinutePipe {
  transform(minute, currentMinute, gap, isClockFaceDisabled) {
    if (minute == null || isClockFaceDisabled) {
      return false;
    }
    return currentMinute === minute && minute % (gap || NgxMatTimepickerUtils.DEFAULT_MINUTES_GAP) === 0;
  }
};
_NgxMatTimepickerActiveMinutePipe.ɵfac = function NgxMatTimepickerActiveMinutePipe_Factory(t2) {
  return new (t2 || _NgxMatTimepickerActiveMinutePipe)();
};
_NgxMatTimepickerActiveMinutePipe.ɵpipe = ɵɵdefinePipe({
  name: "activeMinute",
  type: _NgxMatTimepickerActiveMinutePipe,
  pure: true,
  standalone: true
});
var NgxMatTimepickerActiveMinutePipe = _NgxMatTimepickerActiveMinutePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerActiveMinutePipe, [{
    type: Pipe,
    args: [{
      name: "activeMinute",
      standalone: true
    }]
  }], null, null);
})();
var _NgxMatTimepickerActiveHourPipe = class _NgxMatTimepickerActiveHourPipe {
  transform(hour, currentHour, isClockFaceDisabled) {
    if (hour == null || isClockFaceDisabled) {
      return false;
    }
    return hour === currentHour;
  }
};
_NgxMatTimepickerActiveHourPipe.ɵfac = function NgxMatTimepickerActiveHourPipe_Factory(t2) {
  return new (t2 || _NgxMatTimepickerActiveHourPipe)();
};
_NgxMatTimepickerActiveHourPipe.ɵpipe = ɵɵdefinePipe({
  name: "activeHour",
  type: _NgxMatTimepickerActiveHourPipe,
  pure: true,
  standalone: true
});
var NgxMatTimepickerActiveHourPipe = _NgxMatTimepickerActiveHourPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerActiveHourPipe, [{
    type: Pipe,
    args: [{
      name: "activeHour",
      standalone: true
    }]
  }], null, null);
})();
function roundAngle(angle, step) {
  return Math.round(angle / step) * step;
}
function countAngleByCords(x0, y0, x2, y2, currentAngle) {
  if (y2 > y0 && x2 >= x0) {
    return 180 - currentAngle;
  } else if (y2 > y0 && x2 < x0) {
    return 180 + currentAngle;
  } else if (y2 < y0 && x2 < x0) {
    return 360 - currentAngle;
  } else {
    return currentAngle;
  }
}
var CLOCK_HAND_STYLES = {
  small: {
    height: "75px",
    top: "calc(50% - 75px)"
  },
  large: {
    height: "103px",
    top: "calc(50% - 103px)"
  }
};
var _NgxMatTimepickerFaceComponent = class _NgxMatTimepickerFaceComponent {
  constructor() {
    this.color = "primary";
    this.innerClockFaceSize = 85;
    this.timeChange = new EventEmitter();
    this.timeSelected = new EventEmitter();
    this.timeUnit = NgxMatTimepickerUnits;
  }
  ngAfterViewInit() {
    this._setClockHandPosition();
    this._addTouchEvents();
  }
  ngOnChanges(changes) {
    const faceTimeChanges = changes["faceTime"];
    const selectedTimeChanges = changes["selectedTime"];
    if (faceTimeChanges && faceTimeChanges.currentValue && selectedTimeChanges && selectedTimeChanges.currentValue) {
      this.selectedTime = this.faceTime.find((time) => time.time === this.selectedTime.time);
    }
    if (selectedTimeChanges && selectedTimeChanges.currentValue) {
      this._setClockHandPosition();
    }
    if (faceTimeChanges && faceTimeChanges.currentValue) {
      setTimeout(() => this._selectAvailableTime());
    }
  }
  ngOnDestroy() {
    this._removeTouchEvents();
  }
  onMousedown(e2) {
    e2.preventDefault();
    this._isStarted = true;
  }
  onMouseup(e2) {
    e2.preventDefault();
    this._isStarted = false;
  }
  selectTime(e2) {
    if (!this._isStarted && e2 instanceof MouseEvent && e2.type !== "click") {
      return;
    }
    const clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
    const centerX = clockFaceCords.left + clockFaceCords.width / 2;
    const centerY = clockFaceCords.top + clockFaceCords.height / 2;
    const arctangent = Math.atan(Math.abs(e2.clientX - centerX) / Math.abs(e2.clientY - centerY)) * 180 / Math.PI;
    const circleAngle = countAngleByCords(centerX, centerY, e2.clientX, e2.clientY, arctangent);
    const isInnerClockChosen = this.format && this._isInnerClockFace(centerX, centerY, e2.clientX, e2.clientY);
    const angleStep = this.unit === NgxMatTimepickerUnits.MINUTE ? 6 * (this.minutesGap || 1) : 30;
    const roundedAngle = roundAngle(circleAngle, angleStep);
    const angle = (roundedAngle || 360) + (isInnerClockChosen ? 360 : 0);
    const selectedTime = this.faceTime.find((val) => val.angle === angle);
    if (selectedTime && !selectedTime.disabled) {
      this.timeChange.next(selectedTime);
      if (!this._isStarted) {
        this.timeSelected.next(selectedTime.time);
      }
    }
  }
  trackByTime(_item_, time) {
    return time.time;
  }
  _addTouchEvents() {
    this._touchStartHandler = this.onMousedown.bind(this);
    this._touchEndHandler = this.onMouseup.bind(this);
    this.clockFace.nativeElement.addEventListener("touchstart", this._touchStartHandler);
    this.clockFace.nativeElement.addEventListener("touchend", this._touchEndHandler);
  }
  _decreaseClockHand() {
    this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
    this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
  }
  _increaseClockHand() {
    this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
    this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
  }
  _isInnerClockFace(x0, y0, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x0, 2) + Math.pow(y2 - y0, 2)) < this.innerClockFaceSize;
  }
  _removeTouchEvents() {
    this.clockFace.nativeElement.removeEventListener("touchstart", this._touchStartHandler);
    this.clockFace.nativeElement.removeEventListener("touchend", this._touchEndHandler);
  }
  _selectAvailableTime() {
    const currentTime = this.faceTime.find((time) => this.selectedTime.time === time.time);
    this.isClockFaceDisabled = this.faceTime.every((time) => time.disabled);
    if (currentTime && currentTime.disabled && !this.isClockFaceDisabled) {
      const availableTime = this.faceTime.find((time) => !time.disabled);
      this.timeChange.next(availableTime);
    }
  }
  _setClockHandPosition() {
    if (NgxMatTimepickerAdapter.isTwentyFour(this.format)) {
      if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
        this._decreaseClockHand();
      } else {
        this._increaseClockHand();
      }
    }
    if (this.selectedTime) {
      this.clockHand.nativeElement.style.transform = `rotate(${this.selectedTime.angle}deg)`;
    }
  }
};
_NgxMatTimepickerFaceComponent.ɵfac = function NgxMatTimepickerFaceComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerFaceComponent)();
};
_NgxMatTimepickerFaceComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerFaceComponent,
  selectors: [["ngx-mat-timepicker-face"]],
  viewQuery: function NgxMatTimepickerFaceComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 7, ElementRef);
    }
    if (rf & 2) {
      let _t2;
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.clockFace = _t2.first);
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.clockHand = _t2.first);
    }
  },
  hostBindings: function NgxMatTimepickerFaceComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function NgxMatTimepickerFaceComponent_mousedown_HostBindingHandler($event) {
        return ctx.onMousedown($event);
      })("mouseup", function NgxMatTimepickerFaceComponent_mouseup_HostBindingHandler($event) {
        return ctx.onMouseup($event);
      })("click", function NgxMatTimepickerFaceComponent_click_HostBindingHandler($event) {
        return ctx.selectTime($event);
      })("touchmove", function NgxMatTimepickerFaceComponent_touchmove_HostBindingHandler($event) {
        return ctx.selectTime($event.changedTouches[0]);
      })("touchend", function NgxMatTimepickerFaceComponent_touchend_HostBindingHandler($event) {
        return ctx.selectTime($event.changedTouches[0]);
      })("mousemove", function NgxMatTimepickerFaceComponent_mousemove_HostBindingHandler($event) {
        return ctx.selectTime($event);
      });
    }
  },
  inputs: {
    color: "color",
    faceTime: "faceTime",
    format: "format",
    minutesGap: "minutesGap",
    selectedTime: "selectedTime",
    unit: "unit"
  },
  outputs: {
    timeChange: "timeChange",
    timeSelected: "timeSelected"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 11,
  vars: 9,
  consts: [["hourButton", ""], ["minutesFace", ""], [1, "clock-face"], ["clockFace", ""], ["class", "clock-face__container", 4, "ngIf", "ngIfElse"], [1, "clock-face__clock-hand", 3, "color", "ngClass", "hidden"], ["clockHand", ""], ["mat-mini-fab", "", 3, "color", 4, "ngIf"], [1, "clock-face__center", 3, "color"], ["mat-mini-fab", "", "disableRipple", "", 1, "mat-elevation-z0", 3, "color", "ngStyle", "disabled"], [1, "clock-face__container"], ["class", "clock-face__number clock-face__number--outer", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "clock-face__number", "clock-face__number--outer", 3, "ngStyle"], ["class", "clock-face__inner", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "clock-face__inner"], ["class", "clock-face__number clock-face__number--inner", 3, "top", "ngStyle", "height", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "clock-face__number", "clock-face__number--inner", 3, "ngStyle"], ["mat-mini-fab", "", 3, "color"], [1, "clock-face__clock-hand_minute_dot"]],
  template: function NgxMatTimepickerFaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c4);
      ɵɵtemplate(0, NgxMatTimepickerFaceComponent_ng_template_0_Template, 4, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NgxMatTimepickerFaceComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementStart(4, "div", 2, 3);
      ɵɵtemplate(6, NgxMatTimepickerFaceComponent_div_6_Template, 4, 7, "div", 4);
      ɵɵelementStart(7, "mat-toolbar", 5, 6);
      ɵɵtemplate(9, NgxMatTimepickerFaceComponent_button_9_Template, 2, 1, "button", 7);
      ɵɵelementEnd();
      ɵɵelement(10, "mat-toolbar", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const _r3 = ɵɵreference(3);
      ɵɵadvance(6);
      ɵɵproperty("ngIf", ctx.unit !== ctx.timeUnit.MINUTE)("ngIfElse", _r3);
      ɵɵadvance();
      ɵɵproperty("color", ctx.color)("ngClass", ɵɵpureFunction1(7, _c5, ctx.unit === ctx.timeUnit.MINUTE))("hidden", ctx.isClockFaceDisabled);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.unit === ctx.timeUnit.MINUTE);
      ɵɵadvance();
      ɵɵproperty("color", ctx.color);
    }
  },
  dependencies: [MatButtonModule, MatMiniFabButton, NgStyle, NgForOf, NgIf, NgTemplateOutlet, MatToolbarModule, MatToolbar, NgClass, SlicePipe, NgxMatTimepickerActiveHourPipe, NgxMatTimepickerActiveMinutePipe, NgxMatTimepickerMinutesFormatterPipe, NgxMatTimepickerTimeLocalizerPipe],
  styles: ["ngx-mat-timepicker-face [mat-mini-fab].mat-unthemed{--mdc-fab-container-color: transparent;--mat-fab-hover-state-layer-opacity: 0;box-shadow:none}ngx-mat-timepicker-face [mat-mini-fab].mat-unthemed .mat-mdc-button-persistent-ripple{display:none}ngx-mat-timepicker-face [mat-mini-fab].mat-unthemed:disabled[disabled]{--mdc-fab-container-color: transparent;background-color:transparent}ngx-mat-timepicker-face .clock-face{width:290px;height:290px;border-radius:50%;position:relative;display:flex;justify-content:center;box-sizing:border-box;background-color:#c8c8c880!important}ngx-mat-timepicker-face .clock-face__inner{position:absolute;top:0;left:0;width:100%;height:100%}ngx-mat-timepicker-face .clock-face [mat-mini-fab].mat-void{box-shadow:none;background-color:transparent}ngx-mat-timepicker-face .clock-face [mat-mini-fab].mat-void>span.mat-mdc-button-persistent-ripple{display:none}ngx-mat-timepicker-face .clock-face__container{margin-left:-2px}ngx-mat-timepicker-face .clock-face__number{position:absolute;transform-origin:25px 100%;width:50px;text-align:center;z-index:2;top:calc(50% - 125px);left:calc(50% - 25px)}ngx-mat-timepicker-face .clock-face__number--outer{height:125px}ngx-mat-timepicker-face .clock-face__number--outer>span{font-size:16px}ngx-mat-timepicker-face .clock-face__number--inner>span{font-size:14px}ngx-mat-timepicker-face .clock-face__clock-hand{height:103px;width:2px;padding:0;transform-origin:1px 100%;position:absolute;top:calc(50% - 103px);z-index:1}ngx-mat-timepicker-face .clock-face__center{width:8px;height:8px;padding:0;position:absolute;border-radius:50%;top:50%;left:50%;margin:-4px}ngx-mat-timepicker-face .clock-face__clock-hand_minute>button{position:absolute;top:-22px;left:calc(50% - 20px);box-sizing:content-box;display:flex;justify-content:center;align-items:center}ngx-mat-timepicker-face .clock-face__clock-hand_minute>button .clock-face__clock-hand_minute_dot{display:block;width:4px;height:4px;background:#FFF;border-radius:50%}@media (max-device-width: 1023px) and (orientation: landscape){ngx-mat-timepicker-face .clock-face{width:250px;height:250px}}@media screen and (max-width: 360px){ngx-mat-timepicker-face .clock-face{width:250px;height:250px}}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var NgxMatTimepickerFaceComponent = _NgxMatTimepickerFaceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerFaceComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-face",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatButtonModule, NgStyle, NgForOf, NgIf, NgTemplateOutlet, MatToolbarModule, NgClass, SlicePipe, NgxMatTimepickerActiveHourPipe, NgxMatTimepickerActiveMinutePipe, NgxMatTimepickerMinutesFormatterPipe, NgxMatTimepickerTimeLocalizerPipe],
      template: `<!-- DEFAULT TEMPLATES - START -->\r
<ng-template #hourButton\r
             let-time>\r
    <button mat-mini-fab\r
            disableRipple\r
            class="mat-elevation-z0"\r
            [color]="(time.time | activeHour: selectedTime?.time : isClockFaceDisabled) ? color : undefined"\r
            [ngStyle]="{'transform': 'rotateZ(-'+ time.angle +'deg)'}"\r
            [disabled]="time.disabled">\r
        {{time.time | timeLocalizer: timeUnit.HOUR}}\r
    </button>\r
</ng-template>\r
<ng-template #minutesFace>\r
    <div class="clock-face__container">\r
        <div class="clock-face__number clock-face__number--outer"\r
             [ngStyle]="{'transform': 'rotateZ('+ time.angle +'deg)'}"\r
             *ngFor="let time of faceTime; trackBy: trackByTime">\r
            <button mat-mini-fab\r
                    disableRipple\r
                    class="mat-elevation-z0"\r
                    [color]="(time.time | activeMinute: selectedTime?.time:minutesGap:isClockFaceDisabled) ? color : undefined"\r
                    [ngStyle]="{'transform': 'rotateZ(-'+ time.angle +'deg)'}"\r
                    [disabled]="time.disabled">\r
                {{time.time | minutesFormatter: minutesGap | timeLocalizer: timeUnit.MINUTE}}\r
            </button>\r
        </div>\r
    </div>\r
</ng-template>\r
<!-- DEFAULT TEMPLATES - END -->\r
<div class="clock-face"\r
     #clockFace>\r
    <div *ngIf="unit !== timeUnit.MINUTE;else minutesFace"\r
         class="clock-face__container">\r
        <div class="clock-face__number clock-face__number--outer"\r
             [ngStyle]="{'transform': 'rotateZ('+ time.angle +'deg)'}"\r
             *ngFor="let time of faceTime | slice: 0 : 12; trackBy: trackByTime">\r
            <ng-content *ngTemplateOutlet="hourButton; context: {$implicit: time}"></ng-content>\r
        </div>\r
        <div class="clock-face__inner"\r
             *ngIf="faceTime.length > 12">\r
            <div class="clock-face__number clock-face__number--inner"\r
                 [style.top]="'calc(50% - ' + innerClockFaceSize + 'px)'"\r
                 [ngStyle]="{'transform': 'rotateZ('+ time.angle +'deg)'}"\r
                 [style.height.px]="innerClockFaceSize"\r
                 *ngFor="let time of faceTime | slice: 12 : 24; trackBy: trackByTime">\r
                <ng-content *ngTemplateOutlet="hourButton; context: {$implicit: time}"></ng-content>\r
            </div>\r
        </div>\r
    </div>\r
    <mat-toolbar class="clock-face__clock-hand"\r
                 [color]="color"\r
                 [ngClass]="{'clock-face__clock-hand_minute': unit === timeUnit.MINUTE}"\r
                 #clockHand\r
                 [hidden]="isClockFaceDisabled">\r
        <button mat-mini-fab\r
                *ngIf="unit === timeUnit.MINUTE"\r
                [color]="color">\r
            <span class="clock-face__clock-hand_minute_dot"></span>\r
        </button>\r
    </mat-toolbar>\r
    <mat-toolbar class="clock-face__center"\r
                 [color]="color"></mat-toolbar>\r
</div>\r
`,
      styles: ["ngx-mat-timepicker-face [mat-mini-fab].mat-unthemed{--mdc-fab-container-color: transparent;--mat-fab-hover-state-layer-opacity: 0;box-shadow:none}ngx-mat-timepicker-face [mat-mini-fab].mat-unthemed .mat-mdc-button-persistent-ripple{display:none}ngx-mat-timepicker-face [mat-mini-fab].mat-unthemed:disabled[disabled]{--mdc-fab-container-color: transparent;background-color:transparent}ngx-mat-timepicker-face .clock-face{width:290px;height:290px;border-radius:50%;position:relative;display:flex;justify-content:center;box-sizing:border-box;background-color:#c8c8c880!important}ngx-mat-timepicker-face .clock-face__inner{position:absolute;top:0;left:0;width:100%;height:100%}ngx-mat-timepicker-face .clock-face [mat-mini-fab].mat-void{box-shadow:none;background-color:transparent}ngx-mat-timepicker-face .clock-face [mat-mini-fab].mat-void>span.mat-mdc-button-persistent-ripple{display:none}ngx-mat-timepicker-face .clock-face__container{margin-left:-2px}ngx-mat-timepicker-face .clock-face__number{position:absolute;transform-origin:25px 100%;width:50px;text-align:center;z-index:2;top:calc(50% - 125px);left:calc(50% - 25px)}ngx-mat-timepicker-face .clock-face__number--outer{height:125px}ngx-mat-timepicker-face .clock-face__number--outer>span{font-size:16px}ngx-mat-timepicker-face .clock-face__number--inner>span{font-size:14px}ngx-mat-timepicker-face .clock-face__clock-hand{height:103px;width:2px;padding:0;transform-origin:1px 100%;position:absolute;top:calc(50% - 103px);z-index:1}ngx-mat-timepicker-face .clock-face__center{width:8px;height:8px;padding:0;position:absolute;border-radius:50%;top:50%;left:50%;margin:-4px}ngx-mat-timepicker-face .clock-face__clock-hand_minute>button{position:absolute;top:-22px;left:calc(50% - 20px);box-sizing:content-box;display:flex;justify-content:center;align-items:center}ngx-mat-timepicker-face .clock-face__clock-hand_minute>button .clock-face__clock-hand_minute_dot{display:block;width:4px;height:4px;background:#FFF;border-radius:50%}@media (max-device-width: 1023px) and (orientation: landscape){ngx-mat-timepicker-face .clock-face{width:250px;height:250px}}@media screen and (max-width: 360px){ngx-mat-timepicker-face .clock-face{width:250px;height:250px}}\n"]
    }]
  }], null, {
    clockFace: [{
      type: ViewChild,
      args: ["clockFace", {
        static: true
      }]
    }],
    clockHand: [{
      type: ViewChild,
      args: ["clockHand", {
        static: true,
        read: ElementRef
      }]
    }],
    color: [{
      type: Input
    }],
    faceTime: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    minutesGap: [{
      type: Input
    }],
    selectedTime: [{
      type: Input
    }],
    timeChange: [{
      type: Output
    }],
    timeSelected: [{
      type: Output
    }],
    unit: [{
      type: Input
    }],
    onMousedown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onMouseup: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }],
    selectTime: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchmove", ["$event.changedTouches[0]"]]
    }, {
      type: HostListener,
      args: ["touchend", ["$event.changedTouches[0]"]]
    }, {
      type: HostListener,
      args: ["mousemove", ["$event"]]
    }]
  });
})();
var _NgxMatTimepickerMinutesFaceComponent = class _NgxMatTimepickerMinutesFaceComponent {
  set color(newValue) {
    this._color = newValue;
  }
  get color() {
    return this._color;
  }
  constructor() {
    this.minuteChange = new EventEmitter();
    this.minutesList = [];
    this.timeUnit = NgxMatTimepickerUnits;
    this._color = "primary";
  }
  ngOnChanges(changes) {
    if (changes["period"] && changes["period"].currentValue) {
      const minutes = NgxMatTimepickerUtils.getMinutes(this.minutesGap);
      this.minutesList = NgxMatTimepickerUtils.disableMinutes(minutes, this.selectedHour, {
        min: this.minTime,
        max: this.maxTime,
        format: this.format,
        period: this.period
      });
    }
  }
};
_NgxMatTimepickerMinutesFaceComponent.ɵfac = function NgxMatTimepickerMinutesFaceComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerMinutesFaceComponent)();
};
_NgxMatTimepickerMinutesFaceComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerMinutesFaceComponent,
  selectors: [["ngx-mat-timepicker-minutes-face"]],
  inputs: {
    color: "color",
    format: "format",
    maxTime: "maxTime",
    minTime: "minTime",
    minutesGap: "minutesGap",
    period: "period",
    selectedHour: "selectedHour",
    selectedMinute: "selectedMinute"
  },
  outputs: {
    minuteChange: "minuteChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 5,
  consts: [[3, "color", "faceTime", "selectedTime", "minutesGap", "unit", "timeChange"]],
  template: function NgxMatTimepickerMinutesFaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-mat-timepicker-face", 0);
      ɵɵlistener("timeChange", function NgxMatTimepickerMinutesFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) {
        return ctx.minuteChange.next($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("color", ctx.color)("faceTime", ctx.minutesList)("selectedTime", ctx.selectedMinute)("minutesGap", ctx.minutesGap)("unit", ctx.timeUnit.MINUTE);
    }
  },
  dependencies: [NgxMatTimepickerFaceComponent],
  encapsulation: 2
});
var NgxMatTimepickerMinutesFaceComponent = _NgxMatTimepickerMinutesFaceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerMinutesFaceComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-minutes-face",
      standalone: true,
      imports: [NgxMatTimepickerFaceComponent],
      template: '<ngx-mat-timepicker-face [color]="color"\r\n                     [faceTime]="minutesList"\r\n                     [selectedTime]="selectedMinute"\r\n                     [minutesGap]="minutesGap"\r\n                     (timeChange)="minuteChange.next($event)"\r\n                     [unit]="timeUnit.MINUTE"></ngx-mat-timepicker-face>\r\n'
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    minuteChange: [{
      type: Output
    }],
    minutesGap: [{
      type: Input
    }],
    period: [{
      type: Input
    }],
    selectedHour: [{
      type: Input
    }],
    selectedMinute: [{
      type: Input
    }]
  });
})();
var _NgxMatTimepickerHoursFaceDirective = class _NgxMatTimepickerHoursFaceDirective {
  set color(newValue) {
    this._color = newValue;
  }
  get color() {
    return this._color;
  }
  set format(newValue) {
    this._format = newValue;
    this.hoursList = NgxMatTimepickerUtils.getHours(this._format);
  }
  get format() {
    return this._format;
  }
  constructor() {
    this.hourChange = new EventEmitter();
    this.hourSelected = new EventEmitter();
    this.hoursList = [];
    this._color = "primary";
    this._format = 24;
  }
  onTimeSelected(time) {
    this.hourSelected.next(time);
  }
};
_NgxMatTimepickerHoursFaceDirective.ɵfac = function NgxMatTimepickerHoursFaceDirective_Factory(t2) {
  return new (t2 || _NgxMatTimepickerHoursFaceDirective)();
};
_NgxMatTimepickerHoursFaceDirective.ɵdir = ɵɵdefineDirective({
  type: _NgxMatTimepickerHoursFaceDirective,
  selectors: [["", "ngxMatTimepickerHoursFace", ""]],
  inputs: {
    color: "color",
    format: "format",
    maxTime: "maxTime",
    minTime: "minTime",
    selectedHour: "selectedHour"
  },
  outputs: {
    hourChange: "hourChange",
    hourSelected: "hourSelected"
  },
  standalone: true
});
var NgxMatTimepickerHoursFaceDirective = _NgxMatTimepickerHoursFaceDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerHoursFaceDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatTimepickerHoursFace]",
      standalone: true
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    hourChange: [{
      type: Output
    }],
    hourSelected: [{
      type: Output
    }],
    maxTime: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    selectedHour: [{
      type: Input
    }]
  });
})();
var _NgxMatTimepicker12HoursFaceComponent = class _NgxMatTimepicker12HoursFaceComponent extends NgxMatTimepickerHoursFaceDirective {
  constructor() {
    super();
    this.format = 12;
  }
  ngOnChanges(changes) {
    if (changes["period"] && changes["period"].currentValue) {
      this.hoursList = NgxMatTimepickerUtils.disableHours(this.hoursList, {
        min: this.minTime,
        max: this.maxTime,
        format: this.format,
        period: this.period
      });
    }
  }
};
_NgxMatTimepicker12HoursFaceComponent.ɵfac = function NgxMatTimepicker12HoursFaceComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepicker12HoursFaceComponent)();
};
_NgxMatTimepicker12HoursFaceComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepicker12HoursFaceComponent,
  selectors: [["ngx-mat-timepicker-12-hours-face"]],
  inputs: {
    period: "period"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 3,
  consts: [[3, "color", "selectedTime", "faceTime", "timeChange", "timeSelected"]],
  template: function NgxMatTimepicker12HoursFaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-mat-timepicker-face", 0);
      ɵɵlistener("timeChange", function NgxMatTimepicker12HoursFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) {
        return ctx.hourChange.next($event);
      })("timeSelected", function NgxMatTimepicker12HoursFaceComponent_Template_ngx_mat_timepicker_face_timeSelected_0_listener($event) {
        return ctx.onTimeSelected($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("color", ctx.color)("selectedTime", ctx.selectedHour)("faceTime", ctx.hoursList);
    }
  },
  dependencies: [NgxMatTimepickerFaceComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NgxMatTimepicker12HoursFaceComponent = _NgxMatTimepicker12HoursFaceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepicker12HoursFaceComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-12-hours-face",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgxMatTimepickerFaceComponent],
      template: '<ngx-mat-timepicker-face [color]="color"\r\n                     [selectedTime]="selectedHour"\r\n                     [faceTime]="hoursList"\r\n                     (timeChange)="hourChange.next($event)"\r\n                     (timeSelected)="onTimeSelected($event)"></ngx-mat-timepicker-face>\r\n'
    }]
  }], () => [], {
    period: [{
      type: Input
    }]
  });
})();
var _NgxMatTimepicker24HoursFaceComponent = class _NgxMatTimepicker24HoursFaceComponent extends NgxMatTimepickerHoursFaceDirective {
  constructor() {
    super();
    this.format = 24;
  }
  ngAfterContentInit() {
    this.hoursList = NgxMatTimepickerUtils.disableHours(this.hoursList, {
      min: this.minTime,
      max: this.maxTime,
      format: this.format
    });
  }
};
_NgxMatTimepicker24HoursFaceComponent.ɵfac = function NgxMatTimepicker24HoursFaceComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepicker24HoursFaceComponent)();
};
_NgxMatTimepicker24HoursFaceComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepicker24HoursFaceComponent,
  selectors: [["ngx-mat-timepicker-24-hours-face"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 4,
  consts: [[3, "color", "selectedTime", "faceTime", "format", "timeChange", "timeSelected"]],
  template: function NgxMatTimepicker24HoursFaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-mat-timepicker-face", 0);
      ɵɵlistener("timeChange", function NgxMatTimepicker24HoursFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) {
        return ctx.hourChange.next($event);
      })("timeSelected", function NgxMatTimepicker24HoursFaceComponent_Template_ngx_mat_timepicker_face_timeSelected_0_listener($event) {
        return ctx.onTimeSelected($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("color", ctx.color)("selectedTime", ctx.selectedHour)("faceTime", ctx.hoursList)("format", ctx.format);
    }
  },
  dependencies: [NgxMatTimepickerFaceComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NgxMatTimepicker24HoursFaceComponent = _NgxMatTimepicker24HoursFaceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepicker24HoursFaceComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-24-hours-face",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgxMatTimepickerFaceComponent],
      template: '<ngx-mat-timepicker-face [color]="color"\r\n                     [selectedTime]="selectedHour"\r\n                     [faceTime]="hoursList"\r\n                     [format]="format"\r\n                     (timeChange)="hourChange.next($event)"\r\n                     (timeSelected)="onTimeSelected($event)"></ngx-mat-timepicker-face>\r\n'
    }]
  }], () => [], null);
})();
var _NgxMatTimepickerPeriodComponent = class _NgxMatTimepickerPeriodComponent {
  constructor(_overlay) {
    this._overlay = _overlay;
    this.isPeriodAvailable = true;
    this.overlayScrollStrategy = this._overlay.scrollStrategies.reposition();
    this.periodChanged = new EventEmitter();
    this.timePeriod = NgxMatTimepickerPeriods;
  }
  animationDone() {
    this.isPeriodAvailable = true;
  }
  changePeriod(period) {
    this.isPeriodAvailable = this._isSwitchPeriodAvailable(period);
    if (this.isPeriodAvailable) {
      this.periodChanged.next(period);
    }
  }
  _getDisabledTimeByPeriod(period) {
    switch (this.activeTimeUnit) {
      case NgxMatTimepickerUnits.HOUR:
        return NgxMatTimepickerUtils.disableHours(this.hours, {
          min: this.minTime,
          max: this.maxTime,
          format: this.format,
          period
        });
      case NgxMatTimepickerUnits.MINUTE:
        return NgxMatTimepickerUtils.disableMinutes(this.minutes, +this.selectedHour, {
          min: this.minTime,
          max: this.maxTime,
          format: this.format,
          period
        });
      default:
        throw new Error("no such NgxMatTimepickerUnits");
    }
  }
  _isSwitchPeriodAvailable(period) {
    const time = this._getDisabledTimeByPeriod(period);
    return !time.every((t2) => t2.disabled);
  }
};
_NgxMatTimepickerPeriodComponent.ɵfac = function NgxMatTimepickerPeriodComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerPeriodComponent)(ɵɵdirectiveInject(Overlay));
};
_NgxMatTimepickerPeriodComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerPeriodComponent,
  selectors: [["ngx-mat-timepicker-period"]],
  inputs: {
    activeTimeUnit: "activeTimeUnit",
    format: "format",
    hours: "hours",
    maxTime: "maxTime",
    meridiems: "meridiems",
    minTime: "minTime",
    minutes: "minutes",
    selectedHour: "selectedHour",
    selectedPeriod: "selectedPeriod"
  },
  outputs: {
    periodChanged: "periodChanged"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 7,
  vars: 12,
  consts: [["cdkOverlayOrigin", "", 1, "timepicker-period"], ["eventPanelOrigin", "cdkOverlayOrigin"], ["type", "button", 1, "timepicker-dial__item", "timepicker-period__btn", 3, "ngClass", "click"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayPanelClass", "todo-remove-pointer-events-if-necessary", 3, "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], ["class", "timepicker-period__warning", 4, "ngIf"], [1, "timepicker-period__warning"]],
  template: function NgxMatTimepickerPeriodComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1)(2, "button", 2);
      ɵɵlistener("click", function NgxMatTimepickerPeriodComponent_Template_button_click_2_listener() {
        return ctx.changePeriod(ctx.timePeriod.AM);
      });
      ɵɵtext(3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "button", 2);
      ɵɵlistener("click", function NgxMatTimepickerPeriodComponent_Template_button_click_4_listener() {
        return ctx.changePeriod(ctx.timePeriod.PM);
      });
      ɵɵtext(5);
      ɵɵelementEnd()();
      ɵɵtemplate(6, NgxMatTimepickerPeriodComponent_ng_template_6_Template, 1, 1, "ng-template", 3);
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c6, ctx.selectedPeriod === ctx.timePeriod.AM));
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.meridiems[0]);
      ɵɵadvance();
      ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c6, ctx.selectedPeriod === ctx.timePeriod.PM));
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.meridiems[1]);
      ɵɵadvance();
      ɵɵproperty("cdkConnectedOverlayScrollStrategy", ctx.overlayScrollStrategy)("cdkConnectedOverlayPositionStrategy", ctx.overlayPositionStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", !ctx.isPeriodAvailable);
    }
  },
  dependencies: [CdkOverlayOrigin, NgClass, CdkConnectedOverlay, NgIf],
  styles: [".timepicker-period[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.timepicker-period__btn[_ngcontent-%COMP%]{opacity:.5;padding:1px 3px;border:0;background-color:transparent;font-size:18px;font-weight:500;-webkit-user-select:none;user-select:none;outline:none;border-radius:3px;transition:background-color .5s;color:inherit}.timepicker-period__btn.active[_ngcontent-%COMP%]{opacity:1}.timepicker-period__btn[_ngcontent-%COMP%]:focus{background-color:#00000012}.timepicker-period__warning[_ngcontent-%COMP%]{padding:5px 10px;border-radius:3px;background-color:#0000008c;position:absolute;width:200px;left:-20px;top:40px}.timepicker-period__warning[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0;font-size:12px;font-weight:700;color:#fff}"],
  data: {
    animation: [trigger("scaleInOut", [transition(":enter", [style({
      transform: "scale(0)"
    }), animate(".2s", style({
      transform: "scale(1)"
    })), sequence([animate("3s", style({
      opacity: 1
    })), animate(".3s", style({
      opacity: 0
    }))])])])]
  }
});
var NgxMatTimepickerPeriodComponent = _NgxMatTimepickerPeriodComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerPeriodComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-period",
      animations: [trigger("scaleInOut", [transition(":enter", [style({
        transform: "scale(0)"
      }), animate(".2s", style({
        transform: "scale(1)"
      })), sequence([animate("3s", style({
        opacity: 1
      })), animate(".3s", style({
        opacity: 0
      }))])])])],
      standalone: true,
      imports: [CdkOverlayOrigin, NgClass, CdkConnectedOverlay, NgIf],
      template: `<div class="timepicker-period"\r
	 cdkOverlayOrigin\r
     #eventPanelOrigin="cdkOverlayOrigin">\r
	<button class="timepicker-dial__item timepicker-period__btn"\r
			[ngClass]="{'active': selectedPeriod === timePeriod.AM}"\r
			(click)="changePeriod(timePeriod.AM)"\r
			type="button">{{meridiems[0]}}</button>\r
	<button class="timepicker-dial__item timepicker-period__btn"\r
			[ngClass]="{'active': selectedPeriod === timePeriod.PM}"\r
			(click)="changePeriod(timePeriod.PM)"\r
			type="button">{{meridiems[1]}}</button>\r
</div>\r
<ng-template\r
		cdkConnectedOverlay\r
		cdkConnectedOverlayPanelClass="todo-remove-pointer-events-if-necessary"\r
		[cdkConnectedOverlayScrollStrategy]="overlayScrollStrategy"\r
		[cdkConnectedOverlayPositionStrategy]="overlayPositionStrategy"\r
		[cdkConnectedOverlayOrigin]="eventPanelOrigin"\r
		[cdkConnectedOverlayOpen]="!isPeriodAvailable">\r
	<div class="timepicker-period__warning"\r
		 *ngIf="!isPeriodAvailable"\r
		 [@scaleInOut]\r
		 (@scaleInOut.done)="animationDone()">\r
		<p>Current time would be invalid in this period.</p>\r
	</div>\r
</ng-template>\r
`,
      styles: [".timepicker-period{display:flex;flex-direction:column;position:relative}.timepicker-period__btn{opacity:.5;padding:1px 3px;border:0;background-color:transparent;font-size:18px;font-weight:500;-webkit-user-select:none;user-select:none;outline:none;border-radius:3px;transition:background-color .5s;color:inherit}.timepicker-period__btn.active{opacity:1}.timepicker-period__btn:focus{background-color:#00000012}.timepicker-period__warning{padding:5px 10px;border-radius:3px;background-color:#0000008c;position:absolute;width:200px;left:-20px;top:40px}.timepicker-period__warning>p{margin:0;font-size:12px;font-weight:700;color:#fff}\n"]
    }]
  }], () => [{
    type: Overlay
  }], {
    activeTimeUnit: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    hours: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    meridiems: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    minutes: [{
      type: Input
    }],
    periodChanged: [{
      type: Output
    }],
    selectedHour: [{
      type: Input
    }],
    selectedPeriod: [{
      type: Input
    }]
  });
})();
var _NgxMatTimepickerParserPipe = class _NgxMatTimepickerParserPipe {
  get _locale() {
    return this._timepickerLocaleSrv.locale;
  }
  constructor(_timepickerLocaleSrv) {
    this._timepickerLocaleSrv = _timepickerLocaleSrv;
    this._numberingSystem = tn.local().setLocale(this._locale).resolvedLocaleOptions().numberingSystem;
  }
  transform(time, timeUnit = NgxMatTimepickerUnits.HOUR) {
    if (time == null || time === "") {
      return "";
    }
    if (!isNaN(+time)) {
      return `${time}`;
    }
    if (timeUnit === NgxMatTimepickerUnits.MINUTE) {
      return this._parseTime(time, "mm", NgxMatTimepickerMeasure.minute).toString();
    }
    return this._parseTime(time, "HH", NgxMatTimepickerMeasure.hour).toString();
  }
  _parseTime(time, format, timeMeasure) {
    const parsedTime = tn.fromFormat(String(time), format, {
      numberingSystem: this._numberingSystem
    })[timeMeasure];
    if (!isNaN(parsedTime)) {
      return parsedTime;
    }
    throw new Error(`Cannot parse time - ${time}`);
  }
};
_NgxMatTimepickerParserPipe.ɵfac = function NgxMatTimepickerParserPipe_Factory(t2) {
  return new (t2 || _NgxMatTimepickerParserPipe)(ɵɵdirectiveInject(NgxMatTimepickerLocaleService, 16));
};
_NgxMatTimepickerParserPipe.ɵpipe = ɵɵdefinePipe({
  name: "ngxMatTimepickerParser",
  type: _NgxMatTimepickerParserPipe,
  pure: true,
  standalone: true
});
_NgxMatTimepickerParserPipe.ɵprov = ɵɵdefineInjectable({
  token: _NgxMatTimepickerParserPipe,
  factory: _NgxMatTimepickerParserPipe.ɵfac
});
var NgxMatTimepickerParserPipe = _NgxMatTimepickerParserPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerParserPipe, [{
    type: Pipe,
    args: [{
      name: "ngxMatTimepickerParser",
      standalone: true
    }]
  }, {
    type: Injectable
  }], () => [{
    type: NgxMatTimepickerLocaleService
  }], null);
})();
var _NgxMatTimepickerAutofocusDirective = class _NgxMatTimepickerAutofocusDirective {
  constructor(_element, _document) {
    this._element = _element;
    this._document = _document;
    this._activeElement = this._document.activeElement;
  }
  ngOnChanges() {
    if (this.isFocusActive) {
      setTimeout(() => this._element.nativeElement.focus({
        preventScroll: true
      }));
    }
  }
  ngOnDestroy() {
    setTimeout(() => this._activeElement.focus({
      preventScroll: true
    }));
  }
};
_NgxMatTimepickerAutofocusDirective.ɵfac = function NgxMatTimepickerAutofocusDirective_Factory(t2) {
  return new (t2 || _NgxMatTimepickerAutofocusDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT, 8));
};
_NgxMatTimepickerAutofocusDirective.ɵdir = ɵɵdefineDirective({
  type: _NgxMatTimepickerAutofocusDirective,
  selectors: [["", "ngxMatTimepickerAutofocus", ""]],
  inputs: {
    isFocusActive: [InputFlags.None, "ngxMatTimepickerAutofocus", "isFocusActive"]
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NgxMatTimepickerAutofocusDirective = _NgxMatTimepickerAutofocusDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerAutofocusDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatTimepickerAutofocus]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    isFocusActive: [{
      type: Input,
      args: ["ngxMatTimepickerAutofocus"]
    }]
  });
})();
function retainSelection() {
  this.selectionStart = this.selectionEnd;
}
var _NgxMatTimepickerDialControlComponent = class _NgxMatTimepickerDialControlComponent {
  get _selectedTime() {
    if (!!this.time) {
      return this.timeList.find((t2) => t2.time === +this.time);
    }
    return void 0;
  }
  constructor(_elRef, _timeParserPipe) {
    this._elRef = _elRef;
    this._timeParserPipe = _timeParserPipe;
    this.focused = new EventEmitter();
    this.timeChanged = new EventEmitter();
    this.timeUnitChanged = new EventEmitter();
    this.unfocused = new EventEmitter();
  }
  changeTimeByKeyboard(e2) {
    const char = String.fromCharCode(e2.keyCode);
    if (isTimeDisabledToChange(this.time, char, this.timeList)) {
      e2.preventDefault();
    }
  }
  ngAfterViewInit() {
    this._elRef.nativeElement.querySelector("input").addEventListener("select", retainSelection, false);
  }
  ngOnDestroy() {
    this._elRef.nativeElement.querySelector("input").removeEventListener("select", retainSelection);
  }
  onKeydown(e2) {
    if (!NgxMatTimepickerUtils.isDigit(e2)) {
      e2.preventDefault();
    } else {
      this._changeTimeByArrow(e2.keyCode);
    }
  }
  onModelChange(value) {
    this.time = this._timeParserPipe.transform(value, this.timeUnit);
  }
  saveTimeAndChangeTimeUnit(event, unit) {
    event.preventDefault();
    this.previousTime = this.time;
    this.timeUnitChanged.next(unit);
    this.focused.next();
  }
  updateTime() {
    if (this._selectedTime) {
      this.timeChanged.next(this._selectedTime);
      this.previousTime = this._selectedTime.time;
    }
  }
  _addTime(amount) {
    return `0${+this.time + amount}`.substr(-2);
  }
  _changeTimeByArrow(keyCode) {
    let time;
    if (keyCode === 38) {
      time = this._addTime(this.minutesGap || 1);
    } else if (keyCode === 40) {
      time = this._addTime(-1 * (this.minutesGap || 1));
    }
    if (!isTimeUnavailable(time, this.timeList)) {
      this.time = time;
      this.updateTime();
    }
  }
};
_NgxMatTimepickerDialControlComponent.ɵfac = function NgxMatTimepickerDialControlComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerDialControlComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgxMatTimepickerParserPipe));
};
_NgxMatTimepickerDialControlComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerDialControlComponent,
  selectors: [["ngx-mat-timepicker-dial-control"]],
  inputs: {
    disabled: "disabled",
    isActive: "isActive",
    isEditable: "isEditable",
    minutesGap: "minutesGap",
    time: "time",
    timeList: "timeList",
    timeUnit: "timeUnit"
  },
  outputs: {
    focused: "focused",
    timeChanged: "timeChanged",
    timeUnitChanged: "timeUnitChanged",
    unfocused: "unfocused"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NgxMatTimepickerParserPipe]), ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["class", "timepicker-dial__control timepicker-dial__item", "readonly", "", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus", 4, "ngIf", "ngIfElse"], ["editableTemplate", ""], ["readonly", "", 1, "timepicker-dial__control", "timepicker-dial__item", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus"], [1, "timepicker-dial__control", "timepicker-dial__item", "timepicker-dial__control_editable", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus", "keydown", "keypress"]],
  template: function NgxMatTimepickerDialControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NgxMatTimepickerDialControlComponent_input_0_Template, 2, 10, "input", 0)(1, NgxMatTimepickerDialControlComponent_ng_template_1_Template, 3, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", !ctx.isEditable)("ngIfElse", _r2);
    }
  },
  dependencies: [NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgClass, NgxMatTimepickerAutofocusDirective, NgxMatTimepickerParserPipe, NgxMatTimepickerTimeLocalizerPipe],
  styles: [".timepicker-dial__control[_ngcontent-%COMP%]{border:none;background-color:transparent;font-size:50px;width:60px;padding:0;border-radius:3px;text-align:center;color:inherit}.timepicker-dial__control[_ngcontent-%COMP%]:focus{outline:none;background-color:#0000001a}.timepicker-dial__control[_ngcontent-%COMP%]:disabled{cursor:default}"]
});
var NgxMatTimepickerDialControlComponent = _NgxMatTimepickerDialControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerDialControlComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-dial-control",
      providers: [NgxMatTimepickerParserPipe],
      standalone: true,
      imports: [NgIf, FormsModule, NgClass, NgxMatTimepickerAutofocusDirective, NgxMatTimepickerParserPipe, NgxMatTimepickerTimeLocalizerPipe],
      template: `<input class="timepicker-dial__control timepicker-dial__item"\r
       [ngClass]="{'active': isActive}"\r
       [ngModel]="time | timeLocalizer: timeUnit: true"\r
       (ngModelChange)="time = $event"\r
       [disabled]="disabled"\r
       (input)="updateTime()"\r
       (focus)="saveTimeAndChangeTimeUnit($event, timeUnit)"\r
       readonly\r
       [ngxMatTimepickerAutofocus]="isActive"\r
       *ngIf="!isEditable;else editableTemplate">\r
\r
<ng-template #editableTemplate>\r
    <input class="timepicker-dial__control timepicker-dial__item timepicker-dial__control_editable"\r
           [ngClass]="{'active': isActive}"\r
           [ngModel]="time | ngxMatTimepickerParser: timeUnit | timeLocalizer: timeUnit : true"\r
           (ngModelChange)="onModelChange($event)"\r
           [disabled]="disabled"\r
           (input)="updateTime()"\r
           (focus)="saveTimeAndChangeTimeUnit($event, timeUnit)"\r
           [ngxMatTimepickerAutofocus]="isActive"\r
           (keydown)="onKeydown($event)"\r
           (keypress)="changeTimeByKeyboard($event)">\r
</ng-template>\r
`,
      styles: [".timepicker-dial__control{border:none;background-color:transparent;font-size:50px;width:60px;padding:0;border-radius:3px;text-align:center;color:inherit}.timepicker-dial__control:focus{outline:none;background-color:#0000001a}.timepicker-dial__control:disabled{cursor:default}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgxMatTimepickerParserPipe
  }], {
    disabled: [{
      type: Input
    }],
    focused: [{
      type: Output
    }],
    isActive: [{
      type: Input
    }],
    isEditable: [{
      type: Input
    }],
    minutesGap: [{
      type: Input
    }],
    time: [{
      type: Input
    }],
    timeChanged: [{
      type: Output
    }],
    timeList: [{
      type: Input
    }],
    timeUnit: [{
      type: Input
    }],
    timeUnitChanged: [{
      type: Output
    }],
    unfocused: [{
      type: Output
    }]
  });
})();
function isTimeDisabledToChange(currentTime, nextTime, timeList) {
  const isNumber = /\d/.test(nextTime);
  if (isNumber) {
    const time = currentTime + nextTime;
    return isTimeUnavailable(time, timeList);
  }
  return void 0;
}
function isTimeUnavailable(time, timeList) {
  const selectedTime = timeList.find((value) => value.time === +time);
  return !selectedTime || selectedTime && selectedTime.disabled;
}
var _NgxMatTimepickerDialComponent = class _NgxMatTimepickerDialComponent {
  set color(newValue) {
    this._color = newValue;
  }
  get color() {
    return this._color;
  }
  get hourString() {
    return `${this.hour}`;
  }
  get minuteString() {
    return `${this.minute}`;
  }
  get _locale() {
    return this._localeSrv.locale;
  }
  constructor(_localeSrv) {
    this._localeSrv = _localeSrv;
    this.hourChanged = new EventEmitter();
    this.meridiems = ws.meridiems({
      locale: this._locale
    });
    this.minuteChanged = new EventEmitter();
    this.periodChanged = new EventEmitter();
    this.timeUnit = NgxMatTimepickerUnits;
    this.timeUnitChanged = new EventEmitter();
    this._color = "primary";
  }
  changeHour(hour) {
    this.hourChanged.next(hour);
  }
  changeMinute(minute) {
    this.minuteChanged.next(minute);
  }
  changePeriod(period) {
    this.periodChanged.next(period);
  }
  changeTimeUnit(unit) {
    this.timeUnitChanged.next(unit);
  }
  hideHint() {
    this.isHintVisible = false;
  }
  ngOnChanges(changes) {
    const periodChanged = changes["period"] && changes["period"].currentValue;
    if (periodChanged || changes["format"] && changes["format"].currentValue) {
      const hours = NgxMatTimepickerUtils.getHours(this.format);
      this.hours = NgxMatTimepickerUtils.disableHours(hours, {
        min: this.minTime,
        max: this.maxTime,
        format: this.format,
        period: this.period
      });
    }
    if (periodChanged || changes["hour"] && changes["hour"].currentValue) {
      const minutes = NgxMatTimepickerUtils.getMinutes(this.minutesGap);
      this.minutes = NgxMatTimepickerUtils.disableMinutes(minutes, +this.hour, {
        min: this.minTime,
        max: this.maxTime,
        format: this.format,
        period: this.period
      });
    }
  }
  showHint() {
    this.isHintVisible = true;
  }
};
_NgxMatTimepickerDialComponent.ɵfac = function NgxMatTimepickerDialComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerDialComponent)(ɵɵdirectiveInject(NgxMatTimepickerLocaleService));
};
_NgxMatTimepickerDialComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerDialComponent,
  selectors: [["ngx-mat-timepicker-dial"]],
  inputs: {
    activeTimeUnit: "activeTimeUnit",
    color: "color",
    editableHintTmpl: "editableHintTmpl",
    format: "format",
    hour: "hour",
    hoursOnly: "hoursOnly",
    isEditable: "isEditable",
    maxTime: "maxTime",
    minTime: "minTime",
    minute: "minute",
    minutesGap: "minutesGap",
    period: "period"
  },
  outputs: {
    hourChanged: "hourChanged",
    minuteChanged: "minuteChanged",
    periodChanged: "periodChanged",
    timeUnitChanged: "timeUnitChanged"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 9,
  vars: 14,
  consts: [[1, "timepicker-dial"], [1, "timepicker-dial__container"], [1, "timepicker-dial__time"], [3, "timeList", "time", "timeUnit", "isActive", "isEditable", "timeUnitChanged", "timeChanged", "focused", "unfocused"], [3, "timeList", "time", "timeUnit", "isActive", "isEditable", "minutesGap", "disabled", "timeUnitChanged", "timeChanged", "focused", "unfocused"], ["class", "timepicker-dial__period", 3, "selectedPeriod", "activeTimeUnit", "maxTime", "minTime", "format", "hours", "minutes", "selectedHour", "meridiems", "periodChanged", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "timepicker-dial__period", 3, "selectedPeriod", "activeTimeUnit", "maxTime", "minTime", "format", "hours", "minutes", "selectedHour", "meridiems", "periodChanged"], [3, "ngClass"], [4, "ngTemplateOutlet"], ["editableHintDefault", ""], [1, "timepicker-dial__hint"]],
  template: function NgxMatTimepickerDialComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ngx-mat-timepicker-dial-control", 3);
      ɵɵlistener("timeUnitChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeUnitChanged_3_listener($event) {
        return ctx.changeTimeUnit($event);
      })("timeChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeChanged_3_listener($event) {
        return ctx.changeHour($event);
      })("focused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_focused_3_listener() {
        return ctx.showHint();
      })("unfocused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_unfocused_3_listener() {
        return ctx.hideHint();
      });
      ɵɵelementEnd();
      ɵɵelementStart(4, "span");
      ɵɵtext(5, ":");
      ɵɵelementEnd();
      ɵɵelementStart(6, "ngx-mat-timepicker-dial-control", 4);
      ɵɵlistener("timeUnitChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeUnitChanged_6_listener($event) {
        return ctx.changeTimeUnit($event);
      })("timeChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeChanged_6_listener($event) {
        return ctx.changeMinute($event);
      })("focused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_focused_6_listener() {
        return ctx.showHint();
      })("unfocused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_unfocused_6_listener() {
        return ctx.hideHint();
      });
      ɵɵelementEnd()();
      ɵɵtemplate(7, NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template, 1, 9, "ngx-mat-timepicker-period", 5);
      ɵɵelementEnd();
      ɵɵtemplate(8, NgxMatTimepickerDialComponent_div_8_Template, 4, 4, "div", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("timeList", ctx.hours)("time", ctx.hourString)("timeUnit", ctx.timeUnit.HOUR)("isActive", ctx.activeTimeUnit === ctx.timeUnit.HOUR)("isEditable", ctx.isEditable);
      ɵɵadvance(3);
      ɵɵproperty("timeList", ctx.minutes)("time", ctx.minuteString)("timeUnit", ctx.timeUnit.MINUTE)("isActive", ctx.activeTimeUnit === ctx.timeUnit.MINUTE)("isEditable", ctx.isEditable)("minutesGap", ctx.minutesGap)("disabled", ctx.hoursOnly);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.format !== 24);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isEditable || ctx.editableHintTmpl);
    }
  },
  dependencies: [NgxMatTimepickerDialControlComponent, NgIf, NgxMatTimepickerPeriodComponent, NgClass, NgTemplateOutlet],
  styles: [".timepicker-dial[_ngcontent-%COMP%]{text-align:center}.timepicker-dial__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.timepicker-dial__time[_ngcontent-%COMP%]{display:flex;align-items:baseline;line-height:normal;font-size:50px}.timepicker-dial__period[_ngcontent-%COMP%]{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden[_ngcontent-%COMP%]{visibility:hidden}.timepicker-dial__hint[_ngcontent-%COMP%]{display:inline-block;font-size:10px}.timepicker-dial__hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}"],
  changeDetection: 0
});
var NgxMatTimepickerDialComponent = _NgxMatTimepickerDialComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerDialComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-dial",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgxMatTimepickerDialControlComponent, NgIf, NgxMatTimepickerPeriodComponent, NgClass, NgTemplateOutlet],
      template: `<div class="timepicker-dial">\r
    <div class="timepicker-dial__container">\r
        <div class="timepicker-dial__time">\r
            <ngx-mat-timepicker-dial-control [timeList]="hours"\r
                                         [time]="hourString"\r
                                         [timeUnit]="timeUnit.HOUR"\r
                                         [isActive]="activeTimeUnit === timeUnit.HOUR"\r
                                         [isEditable]="isEditable"\r
                                         (timeUnitChanged)="changeTimeUnit($event)"\r
                                         (timeChanged)="changeHour($event)"\r
                                         (focused)="showHint()"\r
                                         (unfocused)="hideHint()">\r
\r
            </ngx-mat-timepicker-dial-control>\r
            <span>:</span>\r
            <ngx-mat-timepicker-dial-control [timeList]="minutes"\r
                                         [time]="minuteString"\r
                                         [timeUnit]="timeUnit.MINUTE"\r
                                         [isActive]="activeTimeUnit === timeUnit.MINUTE"\r
                                         [isEditable]="isEditable"\r
                                         [minutesGap]="minutesGap"\r
                                         [disabled]="hoursOnly"\r
                                         (timeUnitChanged)="changeTimeUnit($event)"\r
                                         (timeChanged)="changeMinute($event)"\r
                                         (focused)="showHint()"\r
                                         (unfocused)="hideHint()">\r
\r
            </ngx-mat-timepicker-dial-control>\r
        </div>\r
        <ngx-mat-timepicker-period class="timepicker-dial__period"\r
                                   *ngIf="format !== 24"\r
                                   [selectedPeriod]="period"\r
                                   [activeTimeUnit]="activeTimeUnit"\r
                                   [maxTime]="maxTime"\r
                                   [minTime]="minTime"\r
                                   [format]="format"\r
                                   [hours]="hours"\r
                                   [minutes]="minutes"\r
                                   [selectedHour]="hour"\r
                                   [meridiems]="meridiems"\r
                                   (periodChanged)="changePeriod($event)"></ngx-mat-timepicker-period>\r
    </div>\r
    <div *ngIf="isEditable || editableHintTmpl"\r
         [ngClass]="{'timepicker-dial__hint-container--hidden': !isHintVisible}">\r
        <ng-container *ngTemplateOutlet="editableHintTmpl ? editableHintTmpl : editableHintDefault"></ng-container>\r
        <ng-template #editableHintDefault>\r
            <small class="timepicker-dial__hint"> * use arrows (<span>&#8645;</span>) to change the time</small>\r
        </ng-template>\r
    </div>\r
</div>\r
`,
      styles: [".timepicker-dial{text-align:center}.timepicker-dial__container{display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.timepicker-dial__time{display:flex;align-items:baseline;line-height:normal;font-size:50px}.timepicker-dial__period{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden{visibility:hidden}.timepicker-dial__hint{display:inline-block;font-size:10px}.timepicker-dial__hint span{font-size:14px}\n"]
    }]
  }], () => [{
    type: NgxMatTimepickerLocaleService
  }], {
    activeTimeUnit: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    editableHintTmpl: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    hour: [{
      type: Input
    }],
    hourChanged: [{
      type: Output
    }],
    hoursOnly: [{
      type: Input
    }],
    isEditable: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    minute: [{
      type: Input
    }],
    minuteChanged: [{
      type: Output
    }],
    minutesGap: [{
      type: Input
    }],
    period: [{
      type: Input
    }],
    periodChanged: [{
      type: Output
    }],
    timeUnitChanged: [{
      type: Output
    }]
  });
})();
var _NgxMatTimepickerContentComponent = class _NgxMatTimepickerContentComponent {
};
_NgxMatTimepickerContentComponent.ɵfac = function NgxMatTimepickerContentComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerContentComponent)();
};
_NgxMatTimepickerContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerContentComponent,
  selectors: [["ngx-mat-timepicker-content"]],
  inputs: {
    appendToInput: "appendToInput",
    inputElement: "inputElement"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c8,
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["timepickerModal", ""], ["timepickerOutlet", ""], [4, "ngTemplateOutlet"]],
  template: function NgxMatTimepickerContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NgxMatTimepickerContentComponent_div_0_Template, 2, 1, "div", 0)(1, NgxMatTimepickerContentComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(3, NgxMatTimepickerContentComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.appendToInput)("ngIfElse", _r2);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
var NgxMatTimepickerContentComponent = _NgxMatTimepickerContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerContentComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-content",
      standalone: true,
      imports: [NgIf, NgTemplateOutlet],
      template: '<div *ngIf="appendToInput;else timepickerModal">\r\n	<ng-container *ngTemplateOutlet="timepickerOutlet"></ng-container>\r\n</div>\r\n<ng-template #timepickerModal>\r\n	<ng-container *ngTemplateOutlet="timepickerOutlet"></ng-container>\r\n</ng-template>\r\n<ng-template #timepickerOutlet>\r\n	<ng-content></ng-content>\r\n</ng-template>\r\n'
    }]
  }], null, {
    appendToInput: [{
      type: Input
    }],
    inputElement: [{
      type: Input
    }]
  });
})();
var _NgxMatTimepickerDialogComponent = class _NgxMatTimepickerDialogComponent extends NgxMatTimepickerBaseDirective {
  constructor(data, _dialogRef, timepickerSrv, eventSrv, timepickerLocaleSrv) {
    super(timepickerSrv, eventSrv, timepickerLocaleSrv, data);
    this.data = data;
    this._dialogRef = _dialogRef;
  }
  close() {
    this._dialogRef.close();
  }
};
_NgxMatTimepickerDialogComponent.ɵfac = function NgxMatTimepickerDialogComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerDialogComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(NgxMatTimepickerService), ɵɵdirectiveInject(NgxMatTimepickerEventService), ɵɵdirectiveInject(NgxMatTimepickerLocaleService));
};
_NgxMatTimepickerDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerDialogComponent,
  selectors: [["ngx-mat-timepicker-dialog"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 21,
  vars: 29,
  consts: [["cancelBtnDefault", ""], ["confirmBtnDefault", ""], ["mat-dialog-content", ""], [3, "appendToInput", "inputElement"], [1, "timepicker", 3, "ngClass"], [1, "timepicker-header", 3, "color"], [3, "color", "format", "hour", "minute", "period", "activeTimeUnit", "minTime", "maxTime", "isEditable", "editableHintTmpl", "minutesGap", "hoursOnly", "periodChanged", "timeUnitChanged", "hourChanged", "minuteChanged"], [1, "timepicker__main-content"], [1, "timepicker__body", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "color", "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange", 4, "ngSwitchCase"], ["mat-dialog-actions", ""], [3, "click"], [4, "ngTemplateOutlet"], ["mat-button", "", 3, "color"], [3, "color", "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected", 4, "ngIf", "ngIfElse"], ["ampmHours", ""], [3, "color", "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected"], [3, "color", "selectedHour", "period", "minTime", "maxTime", "hourChange", "hourSelected"], [3, "color", "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange"]],
  template: function NgxMatTimepickerDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NgxMatTimepickerDialogComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NgxMatTimepickerDialogComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementStart(4, "div", 2)(5, "ngx-mat-timepicker-content", 3)(6, "div", 4)(7, "mat-toolbar", 5)(8, "ngx-mat-timepicker-dial", 6);
      ɵɵlistener("periodChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_periodChanged_8_listener($event) {
        return ctx.changePeriod($event);
      })("timeUnitChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_timeUnitChanged_8_listener($event) {
        return ctx.changeTimeUnit($event);
      })("hourChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_hourChanged_8_listener($event) {
        return ctx.onHourChange($event);
      })("minuteChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_minuteChanged_8_listener($event) {
        return ctx.onMinuteChange($event);
      });
      ɵɵpipe(9, "async");
      ɵɵpipe(10, "async");
      ɵɵpipe(11, "async");
      ɵɵelementEnd()();
      ɵɵelementStart(12, "div", 7)(13, "div", 8);
      ɵɵtemplate(14, NgxMatTimepickerDialogComponent_div_14_Template, 4, 2, "div", 9)(15, NgxMatTimepickerDialogComponent_ngx_mat_timepicker_minutes_face_15_Template, 4, 14, "ngx-mat-timepicker-minutes-face", 10);
      ɵɵelementEnd()()()()();
      ɵɵelementStart(16, "div", 11)(17, "div", 12);
      ɵɵlistener("click", function NgxMatTimepickerDialogComponent_Template_div_click_17_listener() {
        return ctx.close();
      });
      ɵɵtemplate(18, NgxMatTimepickerDialogComponent_ng_container_18_Template, 1, 0, "ng-container", 13);
      ɵɵelementEnd();
      ɵɵelementStart(19, "div", 12);
      ɵɵlistener("click", function NgxMatTimepickerDialogComponent_Template_div_click_19_listener() {
        return ctx.setTime();
      });
      ɵɵtemplate(20, NgxMatTimepickerDialogComponent_ng_container_20_Template, 1, 0, "ng-container", 13);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(1);
      const _r3 = ɵɵreference(3);
      let tmp_7_0;
      let tmp_8_0;
      ɵɵadvance(5);
      ɵɵproperty("appendToInput", ctx.data.appendToInput)("inputElement", ctx.data.inputElement);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.data.timepickerClass);
      ɵɵadvance();
      ɵɵclassProp("is-editable", ctx.data.enableKeyboardInput);
      ɵɵproperty("color", ctx.color);
      ɵɵadvance();
      ɵɵproperty("color", ctx.color)("format", ctx.data.format)("hour", (tmp_7_0 = ɵɵpipeBind1(9, 23, ctx.selectedHour)) == null ? null : tmp_7_0.time)("minute", (tmp_8_0 = ɵɵpipeBind1(10, 25, ctx.selectedMinute)) == null ? null : tmp_8_0.time)("period", ɵɵpipeBind1(11, 27, ctx.selectedPeriod))("activeTimeUnit", ctx.activeTimeUnit)("minTime", ctx.data.minTime)("maxTime", ctx.data.maxTime)("isEditable", ctx.data.enableKeyboardInput)("editableHintTmpl", ctx.data.editableHintTmpl)("minutesGap", ctx.data.minutesGap)("hoursOnly", ctx.data.hoursOnly);
      ɵɵadvance(5);
      ɵɵproperty("ngSwitch", ctx.activeTimeUnit);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", ctx.timeUnit.HOUR);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", ctx.timeUnit.MINUTE);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.data.cancelBtnTmpl ? ctx.data.cancelBtnTmpl : _r1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.data.confirmBtnTmpl ? ctx.data.confirmBtnTmpl : _r3);
    }
  },
  dependencies: [
    AsyncPipe,
    // Common
    NgClass,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgTemplateOutlet,
    // Material
    MatButtonModule,
    MatButton,
    MatDialogModule,
    MatDialogActions,
    MatDialogContent,
    MatToolbarModule,
    MatToolbar,
    // NgxMatTimepicker
    NgxMatTimepickerContentComponent,
    NgxMatTimepickerDialComponent,
    NgxMatTimepicker24HoursFaceComponent,
    NgxMatTimepicker12HoursFaceComponent,
    NgxMatTimepickerMinutesFaceComponent
  ],
  styles: ["div.ngx-mat-timepicker-dialog>mat-dialog-container{padding-top:0}div.ngx-mat-timepicker-dialog>mat-dialog-container [mat-dialog-content]{padding:0;max-height:85vh}div.ngx-mat-timepicker-dialog>mat-dialog-container [mat-dialog-content] mat-toolbar.timepicker-header{display:flex;justify-content:center;align-items:center}div.ngx-mat-timepicker-dialog>mat-dialog-container [mat-dialog-content] mat-toolbar.timepicker-header.is-editable{height:auto}div.ngx-mat-timepicker-dialog>mat-dialog-container [mat-dialog-content] .clock-face{margin:16px}div.ngx-mat-timepicker-dialog>mat-dialog-container div[mat-dialog-actions]{justify-content:flex-end;display:flex}\n"],
  encapsulation: 2
});
var NgxMatTimepickerDialogComponent = _NgxMatTimepickerDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerDialogComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-dialog",
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [
        AsyncPipe,
        // Common
        NgClass,
        NgIf,
        NgSwitch,
        NgSwitchCase,
        NgTemplateOutlet,
        // Material
        MatButtonModule,
        MatDialogModule,
        MatToolbarModule,
        // NgxMatTimepicker
        NgxMatTimepickerContentComponent,
        NgxMatTimepickerDialComponent,
        NgxMatTimepicker24HoursFaceComponent,
        NgxMatTimepicker12HoursFaceComponent,
        NgxMatTimepickerMinutesFaceComponent
      ],
      template: '<ng-template #cancelBtnDefault>\r\n    <button mat-button\r\n            [color]="color">CANCEL\r\n    </button>\r\n</ng-template>\r\n<ng-template #confirmBtnDefault>\r\n    <button mat-button\r\n            [color]="color">OK\r\n    </button>\r\n</ng-template>\r\n<div mat-dialog-content>\r\n    <ngx-mat-timepicker-content [appendToInput]="data.appendToInput"\r\n                                [inputElement]="data.inputElement">\r\n        <div class="timepicker"\r\n             [ngClass]="data.timepickerClass">\r\n            <mat-toolbar [color]="color"\r\n                         [class.is-editable]="data.enableKeyboardInput"\r\n                         class="timepicker-header">\r\n                <ngx-mat-timepicker-dial [color]="color"\r\n                                         [format]="data.format"\r\n                                         [hour]="(selectedHour | async)?.time"\r\n                                         [minute]="(selectedMinute | async)?.time"\r\n                                         [period]="selectedPeriod | async"\r\n                                         [activeTimeUnit]="activeTimeUnit"\r\n                                         [minTime]="data.minTime"\r\n                                         [maxTime]="data.maxTime"\r\n                                         [isEditable]="data.enableKeyboardInput"\r\n                                         [editableHintTmpl]="data.editableHintTmpl"\r\n                                         [minutesGap]="data.minutesGap"\r\n                                         [hoursOnly]="data.hoursOnly"\r\n                                         (periodChanged)="changePeriod($event)"\r\n                                         (timeUnitChanged)="changeTimeUnit($event)"\r\n                                         (hourChanged)="onHourChange($event)"\r\n                                         (minuteChanged)="onMinuteChange($event)"\r\n                ></ngx-mat-timepicker-dial>\r\n            </mat-toolbar>\r\n            <div class="timepicker__main-content">\r\n                <div class="timepicker__body"\r\n                     [ngSwitch]="activeTimeUnit">\r\n                    <div *ngSwitchCase="timeUnit.HOUR">\r\n                        <ngx-mat-timepicker-24-hours-face *ngIf="data.format === 24;else ampmHours"\r\n                                                          [color]="color"\r\n                                                          (hourChange)="onHourChange($event)"\r\n                                                          [selectedHour]="selectedHour | async"\r\n                                                          [minTime]="data.minTime"\r\n                                                          [maxTime]="data.maxTime"\r\n                                                          [format]="data.format"\r\n                                                          (hourSelected)="onHourSelected($event)"></ngx-mat-timepicker-24-hours-face>\r\n                        <ng-template #ampmHours>\r\n                            <ngx-mat-timepicker-12-hours-face\r\n                                    [color]="color"\r\n                                    (hourChange)="onHourChange($event)"\r\n                                    [selectedHour]="selectedHour | async"\r\n                                    [period]="selectedPeriod | async"\r\n                                    [minTime]="data.minTime"\r\n                                    [maxTime]="data.maxTime"\r\n                                    (hourSelected)="onHourSelected($event)"></ngx-mat-timepicker-12-hours-face>\r\n                        </ng-template>\r\n                    </div>\r\n                    <ngx-mat-timepicker-minutes-face *ngSwitchCase="timeUnit.MINUTE"\r\n                                                     [color]="color"\r\n                                                     [selectedMinute]="selectedMinute | async"\r\n                                                     [selectedHour]="(selectedHour | async)?.time"\r\n                                                     [minTime]="data.minTime"\r\n                                                     [maxTime]="data.maxTime"\r\n                                                     [format]="data.format"\r\n                                                     [period]="selectedPeriod | async"\r\n                                                     [minutesGap]="data.minutesGap"\r\n                                                     (minuteChange)="onMinuteChange($event)"></ngx-mat-timepicker-minutes-face>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ngx-mat-timepicker-content>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <div (click)="close()">\r\n        <ng-container\r\n                *ngTemplateOutlet="data.cancelBtnTmpl ? data.cancelBtnTmpl : cancelBtnDefault"></ng-container>\r\n    </div>\r\n    <div (click)="setTime()">\r\n        <ng-container\r\n                *ngTemplateOutlet="data.confirmBtnTmpl ? data.confirmBtnTmpl : confirmBtnDefault"></ng-container>\r\n    </div>\r\n</div>\r\n',
      styles: ["div.ngx-mat-timepicker-dialog>mat-dialog-container{padding-top:0}div.ngx-mat-timepicker-dialog>mat-dialog-container [mat-dialog-content]{padding:0;max-height:85vh}div.ngx-mat-timepicker-dialog>mat-dialog-container [mat-dialog-content] mat-toolbar.timepicker-header{display:flex;justify-content:center;align-items:center}div.ngx-mat-timepicker-dialog>mat-dialog-container [mat-dialog-content] mat-toolbar.timepicker-header.is-editable{height:auto}div.ngx-mat-timepicker-dialog>mat-dialog-container [mat-dialog-content] .clock-face{margin:16px}div.ngx-mat-timepicker-dialog>mat-dialog-container div[mat-dialog-actions]{justify-content:flex-end;display:flex}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DIALOG_DATA]
    }]
  }, {
    type: MatDialogRef
  }, {
    type: NgxMatTimepickerService
  }, {
    type: NgxMatTimepickerEventService
  }, {
    type: NgxMatTimepickerLocaleService
  }], null);
})();
var _NgxMatTimepickerStandaloneComponent = class _NgxMatTimepickerStandaloneComponent extends NgxMatTimepickerBaseDirective {
  constructor(data, timepickerSrv, eventSrv, timepickerLocaleSrv) {
    console.info("DEBUG", data);
    super(timepickerSrv, eventSrv, timepickerLocaleSrv, data);
    this.data = data;
  }
  close() {
    this.data.timepickerBaseRef.close();
  }
};
_NgxMatTimepickerStandaloneComponent.ɵfac = function NgxMatTimepickerStandaloneComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerStandaloneComponent)(ɵɵdirectiveInject(NGX_MAT_TIMEPICKER_CONFIG), ɵɵdirectiveInject(NgxMatTimepickerService), ɵɵdirectiveInject(NgxMatTimepickerEventService), ɵɵdirectiveInject(NgxMatTimepickerLocaleService));
};
_NgxMatTimepickerStandaloneComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerStandaloneComponent,
  selectors: [["ngx-mat-timepicker-standalone"]],
  hostVars: 2,
  hostBindings: function NgxMatTimepickerStandaloneComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-app-background", true);
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 21,
  vars: 29,
  consts: [["cancelBtnDefault", ""], ["confirmBtnDefault", ""], ["cdkTrapFocus", ""], [3, "appendToInput", "inputElement"], [1, "timepicker", 3, "ngClass"], [1, "timepicker-header", 3, "color"], [3, "color", "format", "hour", "minute", "period", "activeTimeUnit", "minTime", "maxTime", "isEditable", "editableHintTmpl", "minutesGap", "hoursOnly", "periodChanged", "timeUnitChanged", "hourChanged", "minuteChanged"], [1, "timepicker__main-content"], [1, "timepicker__body", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "color", "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange", 4, "ngSwitchCase"], [1, "ngx-mat-timepicker-standalone-actions"], [3, "click"], [4, "ngTemplateOutlet"], ["mat-button", "", 3, "color"], [3, "color", "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected", 4, "ngIf", "ngIfElse"], ["ampmHours", ""], [3, "color", "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected"], [3, "color", "selectedHour", "period", "minTime", "maxTime", "hourChange", "hourSelected"], [3, "color", "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange"]],
  template: function NgxMatTimepickerStandaloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NgxMatTimepickerStandaloneComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NgxMatTimepickerStandaloneComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementStart(4, "div", 2)(5, "ngx-mat-timepicker-content", 3)(6, "div", 4)(7, "mat-toolbar", 5)(8, "ngx-mat-timepicker-dial", 6);
      ɵɵlistener("periodChanged", function NgxMatTimepickerStandaloneComponent_Template_ngx_mat_timepicker_dial_periodChanged_8_listener($event) {
        return ctx.changePeriod($event);
      })("timeUnitChanged", function NgxMatTimepickerStandaloneComponent_Template_ngx_mat_timepicker_dial_timeUnitChanged_8_listener($event) {
        return ctx.changeTimeUnit($event);
      })("hourChanged", function NgxMatTimepickerStandaloneComponent_Template_ngx_mat_timepicker_dial_hourChanged_8_listener($event) {
        return ctx.onHourChange($event);
      })("minuteChanged", function NgxMatTimepickerStandaloneComponent_Template_ngx_mat_timepicker_dial_minuteChanged_8_listener($event) {
        return ctx.onMinuteChange($event);
      });
      ɵɵpipe(9, "async");
      ɵɵpipe(10, "async");
      ɵɵpipe(11, "async");
      ɵɵelementEnd()();
      ɵɵelementStart(12, "div", 7)(13, "div", 8);
      ɵɵtemplate(14, NgxMatTimepickerStandaloneComponent_div_14_Template, 4, 2, "div", 9)(15, NgxMatTimepickerStandaloneComponent_ngx_mat_timepicker_minutes_face_15_Template, 4, 14, "ngx-mat-timepicker-minutes-face", 10);
      ɵɵelementEnd()()()();
      ɵɵelementStart(16, "div", 11)(17, "div", 12);
      ɵɵlistener("click", function NgxMatTimepickerStandaloneComponent_Template_div_click_17_listener() {
        return ctx.close();
      });
      ɵɵtemplate(18, NgxMatTimepickerStandaloneComponent_ng_container_18_Template, 1, 0, "ng-container", 13);
      ɵɵelementEnd();
      ɵɵelementStart(19, "div", 12);
      ɵɵlistener("click", function NgxMatTimepickerStandaloneComponent_Template_div_click_19_listener() {
        return ctx.setTime();
      });
      ɵɵtemplate(20, NgxMatTimepickerStandaloneComponent_ng_container_20_Template, 1, 0, "ng-container", 13);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(1);
      const _r3 = ɵɵreference(3);
      let tmp_7_0;
      let tmp_8_0;
      ɵɵadvance(5);
      ɵɵproperty("appendToInput", ctx.data.appendToInput)("inputElement", ctx.data.inputElement);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.data.timepickerClass);
      ɵɵadvance();
      ɵɵclassProp("is-editable", ctx.data.enableKeyboardInput);
      ɵɵproperty("color", ctx.color);
      ɵɵadvance();
      ɵɵproperty("color", ctx.color)("format", ctx.data.format)("hour", (tmp_7_0 = ɵɵpipeBind1(9, 23, ctx.selectedHour)) == null ? null : tmp_7_0.time)("minute", (tmp_8_0 = ɵɵpipeBind1(10, 25, ctx.selectedMinute)) == null ? null : tmp_8_0.time)("period", ɵɵpipeBind1(11, 27, ctx.selectedPeriod))("activeTimeUnit", ctx.activeTimeUnit)("minTime", ctx.data.minTime)("maxTime", ctx.data.maxTime)("isEditable", ctx.data.enableKeyboardInput)("editableHintTmpl", ctx.data.editableHintTmpl)("minutesGap", ctx.data.minutesGap)("hoursOnly", ctx.data.hoursOnly);
      ɵɵadvance(5);
      ɵɵproperty("ngSwitch", ctx.activeTimeUnit);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", ctx.timeUnit.HOUR);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", ctx.timeUnit.MINUTE);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.data.cancelBtnTmpl ? ctx.data.cancelBtnTmpl : _r1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.data.confirmBtnTmpl ? ctx.data.confirmBtnTmpl : _r3);
    }
  },
  dependencies: [MatButtonModule, MatButton, A11yModule, CdkTrapFocus, NgxMatTimepickerContentComponent, NgClass, MatToolbarModule, MatToolbar, NgxMatTimepickerDialComponent, NgSwitch, NgSwitchCase, NgIf, NgxMatTimepicker24HoursFaceComponent, NgxMatTimepicker12HoursFaceComponent, NgxMatTimepickerMinutesFaceComponent, NgTemplateOutlet, AsyncPipe],
  styles: ["ngx-mat-timepicker-standalone{display:block;border-radius:4px;box-shadow:0 0 5px 2px #00000040;overflow:hidden}ngx-mat-timepicker-standalone ngx-mat-timepicker-content{display:block}ngx-mat-timepicker-standalone ngx-mat-timepicker-content mat-toolbar.timepicker-header{display:flex;justify-content:center;align-items:center}ngx-mat-timepicker-standalone ngx-mat-timepicker-content mat-toolbar.timepicker-header.is-editable{height:auto}ngx-mat-timepicker-standalone ngx-mat-timepicker-content .clock-face{margin:16px}ngx-mat-timepicker-standalone .ngx-mat-timepicker-standalone-actions{display:flex;flex-direction:row;justify-content:flex-end;padding:0 16px 16px}\n"],
  encapsulation: 2
});
var NgxMatTimepickerStandaloneComponent = _NgxMatTimepickerStandaloneComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerStandaloneComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-standalone",
      host: {
        "[class.mat-app-background]": "true"
      },
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatButtonModule, A11yModule, NgxMatTimepickerContentComponent, NgClass, MatToolbarModule, NgxMatTimepickerDialComponent, NgSwitch, NgSwitchCase, NgIf, NgxMatTimepicker24HoursFaceComponent, NgxMatTimepicker12HoursFaceComponent, NgxMatTimepickerMinutesFaceComponent, NgTemplateOutlet, AsyncPipe],
      template: '<ng-template #cancelBtnDefault>\r\n	<button mat-button\r\n			[color]="color">CANCEL\r\n	</button>\r\n</ng-template>\r\n<ng-template #confirmBtnDefault>\r\n	<button mat-button\r\n			[color]="color">OK\r\n	</button>\r\n</ng-template>\r\n<div cdkTrapFocus>\r\n	<ngx-mat-timepicker-content [appendToInput]="data.appendToInput"\r\n								[inputElement]="data.inputElement">\r\n		<div class="timepicker"\r\n			 [ngClass]="data.timepickerClass">\r\n			<mat-toolbar [color]="color"\r\n						 [class.is-editable]="data.enableKeyboardInput"\r\n						 class="timepicker-header">\r\n				<ngx-mat-timepicker-dial [color]="color"\r\n										 [format]="data.format"\r\n										 [hour]="(selectedHour | async)?.time"\r\n										 [minute]="(selectedMinute | async)?.time"\r\n										 [period]="selectedPeriod | async"\r\n										 [activeTimeUnit]="activeTimeUnit"\r\n										 [minTime]="data.minTime"\r\n										 [maxTime]="data.maxTime"\r\n										 [isEditable]="data.enableKeyboardInput"\r\n										 [editableHintTmpl]="data.editableHintTmpl"\r\n										 [minutesGap]="data.minutesGap"\r\n										 [hoursOnly]="data.hoursOnly"\r\n										 (periodChanged)="changePeriod($event)"\r\n										 (timeUnitChanged)="changeTimeUnit($event)"\r\n										 (hourChanged)="onHourChange($event)"\r\n										 (minuteChanged)="onMinuteChange($event)">\r\n				</ngx-mat-timepicker-dial>\r\n			</mat-toolbar>\r\n			<div class="timepicker__main-content">\r\n				<div class="timepicker__body"\r\n					 [ngSwitch]="activeTimeUnit">\r\n					<div *ngSwitchCase="timeUnit.HOUR">\r\n						<ngx-mat-timepicker-24-hours-face *ngIf="data.format === 24;else ampmHours"\r\n														  [color]="color"\r\n														  (hourChange)="onHourChange($event)"\r\n														  [selectedHour]="selectedHour | async"\r\n														  [minTime]="data.minTime"\r\n														  [maxTime]="data.maxTime"\r\n														  [format]="data.format"\r\n														  (hourSelected)="onHourSelected($event)"></ngx-mat-timepicker-24-hours-face>\r\n						<ng-template #ampmHours>\r\n							<ngx-mat-timepicker-12-hours-face\r\n									[color]="color"\r\n									(hourChange)="onHourChange($event)"\r\n									[selectedHour]="selectedHour | async"\r\n									[period]="selectedPeriod | async"\r\n									[minTime]="data.minTime"\r\n									[maxTime]="data.maxTime"\r\n									(hourSelected)="onHourSelected($event)"></ngx-mat-timepicker-12-hours-face>\r\n						</ng-template>\r\n					</div>\r\n					<ngx-mat-timepicker-minutes-face *ngSwitchCase="timeUnit.MINUTE"\r\n													 [color]="color"\r\n													 [selectedMinute]="selectedMinute | async"\r\n													 [selectedHour]="(selectedHour | async)?.time"\r\n													 [minTime]="data.minTime"\r\n													 [maxTime]="data.maxTime"\r\n													 [format]="data.format"\r\n													 [period]="selectedPeriod | async"\r\n													 [minutesGap]="data.minutesGap"\r\n													 (minuteChange)="onMinuteChange($event)"></ngx-mat-timepicker-minutes-face>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</ngx-mat-timepicker-content>\r\n\r\n	<div class="ngx-mat-timepicker-standalone-actions">\r\n		<div (click)="close()">\r\n			<ng-container\r\n					*ngTemplateOutlet="data.cancelBtnTmpl ? data.cancelBtnTmpl : cancelBtnDefault"></ng-container>\r\n		</div>\r\n		<div (click)="setTime()">\r\n			<ng-container\r\n					*ngTemplateOutlet="data.confirmBtnTmpl ? data.confirmBtnTmpl : confirmBtnDefault"></ng-container>\r\n		</div>\r\n	</div>\r\n</div>\r\n',
      styles: ["ngx-mat-timepicker-standalone{display:block;border-radius:4px;box-shadow:0 0 5px 2px #00000040;overflow:hidden}ngx-mat-timepicker-standalone ngx-mat-timepicker-content{display:block}ngx-mat-timepicker-standalone ngx-mat-timepicker-content mat-toolbar.timepicker-header{display:flex;justify-content:center;align-items:center}ngx-mat-timepicker-standalone ngx-mat-timepicker-content mat-toolbar.timepicker-header.is-editable{height:auto}ngx-mat-timepicker-standalone ngx-mat-timepicker-content .clock-face{margin:16px}ngx-mat-timepicker-standalone .ngx-mat-timepicker-standalone-actions{display:flex;flex-direction:row;justify-content:flex-end;padding:0 16px 16px}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_MAT_TIMEPICKER_CONFIG]
    }]
  }, {
    type: NgxMatTimepickerService
  }, {
    type: NgxMatTimepickerEventService
  }, {
    type: NgxMatTimepickerLocaleService
  }], null);
})();
var config;
var _NgxMatTimepickerProvider = class _NgxMatTimepickerProvider {
};
_NgxMatTimepickerProvider.ɵfac = function NgxMatTimepickerProvider_Factory(t2) {
  return new (t2 || _NgxMatTimepickerProvider)();
};
_NgxMatTimepickerProvider.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerProvider,
  selectors: [["ngx-mat-timepicker-provider"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NGX_MAT_TIMEPICKER_CONFIG,
    useFactory() {
      return config;
    }
  }]), ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  template: function NgxMatTimepickerProvider_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "ngx-mat-timepicker-standalone");
    }
  },
  dependencies: [NgxMatTimepickerStandaloneComponent],
  encapsulation: 2
});
var NgxMatTimepickerProvider = _NgxMatTimepickerProvider;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerProvider, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-provider",
      template: `<ngx-mat-timepicker-standalone></ngx-mat-timepicker-standalone>`,
      standalone: true,
      providers: [{
        provide: NGX_MAT_TIMEPICKER_CONFIG,
        useFactory() {
          return config;
        }
      }],
      imports: [NgxMatTimepickerStandaloneComponent]
    }]
  }], null, null);
})();
var _NgxMatTimepickerComponent = class _NgxMatTimepickerComponent {
  set appendToInput(newValue) {
    this._appendToInput = coerceBooleanProperty(newValue);
  }
  set color(newValue) {
    this._color = newValue;
  }
  get color() {
    return this._color;
  }
  get disabled() {
    return this._timepickerInput && this._timepickerInput.disabled;
  }
  set enableKeyboardInput(newValue) {
    this._enableKeyboardInput = coerceBooleanProperty(newValue);
  }
  get enableKeyboardInput() {
    return this._enableKeyboardInput;
  }
  get format() {
    return this._timepickerInput ? this._timepickerInput.format : this._format;
  }
  set format(value) {
    this._format = NgxMatTimepickerAdapter.isTwentyFour(value) ? 24 : 12;
  }
  get inputElement() {
    return this._timepickerInput && this._timepickerInput.element;
  }
  get maxTime() {
    return this._timepickerInput ? this._timepickerInput.max : this.max;
  }
  get minTime() {
    return this._timepickerInput ? this._timepickerInput.min : this.min;
  }
  get minutesGap() {
    return this._minutesGap;
  }
  set minutesGap(gap) {
    if (gap == null) {
      return;
    }
    gap = Math.floor(gap);
    this._minutesGap = gap <= 59 ? gap : 1;
  }
  get overlayOrigin() {
    return this._timepickerInput ? this._timepickerInput.cdkOverlayOrigin : void 0;
  }
  get time() {
    return this._timepickerInput && this._timepickerInput.value;
  }
  constructor(_dialog) {
    this._dialog = _dialog;
    this.closed = new EventEmitter();
    this.hourSelected = new EventEmitter();
    this.hoursOnly = false;
    this.id = `ngx_mat_timepicker_${++_NgxMatTimepickerComponent.nextId}`;
    this.isEsc = true;
    this.opened = new EventEmitter();
    this.overlayPositions = [{
      originX: "center",
      originY: "bottom",
      overlayX: "center",
      overlayY: "top",
      offsetY: 0
    }, {
      originX: "center",
      originY: "top",
      overlayX: "center",
      overlayY: "bottom",
      offsetY: 0
    }];
    this.showPicker = false;
    this.timeChanged = new EventEmitter();
    this.timeSet = new EventEmitter();
    this.timeUpdated = new BehaviorSubject(void 0);
    this._appendToInput = false;
    this._color = "primary";
    this._enableKeyboardInput = false;
    this._format = 12;
  }
  close() {
    if (this._appendToInput) {
      this._overlayRef && this._overlayRef.dispose();
    } else {
      this._dialogRef && this._dialogRef.close();
    }
    this.inputElement.focus();
    this.showPicker = false;
    this.closed.emit();
  }
  open() {
    config = {
      timepickerBaseRef: this,
      time: this.time,
      defaultTime: this.defaultTime,
      maxTime: this.maxTime,
      minTime: this.minTime,
      format: this.format,
      minutesGap: this.minutesGap,
      disableAnimation: this.disableAnimation,
      cancelBtnTmpl: this.cancelBtnTmpl,
      confirmBtnTmpl: this.confirmBtnTmpl,
      editableHintTmpl: this.editableHintTmpl,
      disabled: this.disabled,
      enableKeyboardInput: this.enableKeyboardInput,
      preventOverlayClick: this.preventOverlayClick,
      appendToInput: this._appendToInput,
      hoursOnly: this.hoursOnly,
      timepickerClass: this.timepickerClass,
      inputElement: this.inputElement,
      color: this.color
    };
    if (this._appendToInput) {
      this.showPicker = true;
    } else {
      this._dialogRef = this._dialog.open(NgxMatTimepickerDialogComponent, {
        panelClass: "ngx-mat-timepicker-dialog",
        data: __spreadValues({}, config)
      });
      this._dialogRef.afterClosed().subscribe(() => {
        this.closed.emit();
      });
    }
    this.opened.emit();
  }
  /***
   * Register an input with this timepicker.
   * input - The timepicker input to register with this timepicker
   */
  registerInput(input) {
    if (this._timepickerInput) {
      console.warn("Input for this timepicker was already set", input.element);
      throw Error("A Timepicker can only be associated with a single input.");
    }
    this._timepickerInput = input;
  }
  unregisterInput() {
    this._timepickerInput = void 0;
  }
  updateTime(time) {
    this.timeUpdated.next(time);
  }
};
_NgxMatTimepickerComponent.nextId = 0;
_NgxMatTimepickerComponent.ɵfac = function NgxMatTimepickerComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerComponent)(ɵɵdirectiveInject(MatDialog));
};
_NgxMatTimepickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerComponent,
  selectors: [["ngx-mat-timepicker"]],
  hostVars: 1,
  hostBindings: function NgxMatTimepickerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
    }
  },
  inputs: {
    appendToInput: "appendToInput",
    color: "color",
    enableKeyboardInput: "enableKeyboardInput",
    format: "format",
    minutesGap: "minutesGap",
    cancelBtnTmpl: "cancelBtnTmpl",
    confirmBtnTmpl: "confirmBtnTmpl",
    defaultTime: "defaultTime",
    disableAnimation: "disableAnimation",
    editableHintTmpl: "editableHintTmpl",
    hoursOnly: "hoursOnly",
    isEsc: "isEsc",
    max: "max",
    min: "min",
    preventOverlayClick: "preventOverlayClick",
    timepickerClass: "timepickerClass"
  },
  outputs: {
    closed: "closed",
    hourSelected: "hourSelected",
    opened: "opened",
    timeChanged: "timeChanged",
    timeSet: "timeSet"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 4,
  consts: [["cdkConnectedOverlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick"]],
  template: function NgxMatTimepickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NgxMatTimepickerComponent_ng_template_0_Template, 1, 0, "ng-template", 0);
      ɵɵlistener("backdropClick", function NgxMatTimepickerComponent_Template_ng_template_backdropClick_0_listener() {
        return ctx.close();
      });
    }
    if (rf & 2) {
      ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOrigin", ctx.overlayOrigin)("cdkConnectedOverlayOpen", ctx.showPicker);
    }
  },
  dependencies: [CdkConnectedOverlay, NgxMatTimepickerProvider],
  encapsulation: 2
});
var NgxMatTimepickerComponent = _NgxMatTimepickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker",
      template: `
		<ng-template
				cdkConnectedOverlay
				[cdkConnectedOverlayPositions]="overlayPositions"
				[cdkConnectedOverlayHasBackdrop]="!0"
				cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
				(backdropClick)="close()"
				[cdkConnectedOverlayOrigin]="overlayOrigin"
				[cdkConnectedOverlayOpen]="showPicker">
            <ngx-mat-timepicker-provider></ngx-mat-timepicker-provider>
		</ng-template>
    `,
      standalone: true,
      imports: [CdkConnectedOverlay, NgxMatTimepickerStandaloneComponent, NgxMatTimepickerProvider]
    }]
  }], () => [{
    type: MatDialog
  }], {
    appendToInput: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    enableKeyboardInput: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    minutesGap: [{
      type: Input
    }],
    cancelBtnTmpl: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    confirmBtnTmpl: [{
      type: Input
    }],
    defaultTime: [{
      type: Input
    }],
    disableAnimation: [{
      type: Input
    }],
    editableHintTmpl: [{
      type: Input
    }],
    hourSelected: [{
      type: Output
    }],
    hoursOnly: [{
      type: Input
    }],
    id: [{
      type: HostBinding,
      args: ["id"]
    }],
    isEsc: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    opened: [{
      type: Output
    }],
    preventOverlayClick: [{
      type: Input
    }],
    timeChanged: [{
      type: Output
    }],
    timepickerClass: [{
      type: Input
    }],
    timeSet: [{
      type: Output
    }]
  });
})();
var _NgxMatTimepickerToggleIconDirective = class _NgxMatTimepickerToggleIconDirective {
};
_NgxMatTimepickerToggleIconDirective.ɵfac = function NgxMatTimepickerToggleIconDirective_Factory(t2) {
  return new (t2 || _NgxMatTimepickerToggleIconDirective)();
};
_NgxMatTimepickerToggleIconDirective.ɵdir = ɵɵdefineDirective({
  type: _NgxMatTimepickerToggleIconDirective,
  selectors: [["", "ngxMatTimepickerToggleIcon", ""]],
  standalone: true
});
var NgxMatTimepickerToggleIconDirective = _NgxMatTimepickerToggleIconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerToggleIconDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatTimepickerToggleIcon]",
      standalone: true
    }]
  }], null, null);
})();
var _NgxMatTimepickerToggleComponent = class _NgxMatTimepickerToggleComponent {
  get disabled() {
    return this._disabled === void 0 ? this.timepicker?.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  open(event) {
    if (this.timepicker) {
      this.timepicker.open();
      event.stopPropagation();
    }
  }
};
_NgxMatTimepickerToggleComponent.ɵfac = function NgxMatTimepickerToggleComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerToggleComponent)();
};
_NgxMatTimepickerToggleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerToggleComponent,
  selectors: [["ngx-mat-timepicker-toggle"]],
  contentQueries: function NgxMatTimepickerToggleComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NgxMatTimepickerToggleIconDirective, 7);
    }
    if (rf & 2) {
      let _t2;
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.customIcon = _t2.first);
    }
  },
  inputs: {
    disabled: "disabled",
    timepicker: [InputFlags.None, "for", "timepicker"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c10,
  decls: 3,
  vars: 2,
  consts: [["color", "", "mat-icon-button", "", "type", "button", 1, "ngx-mat-timepicker-toggle", "mat-elevation-z0", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "class", "ngx-mat-timepicker-toggle-default-icon", "fill", "currentColor", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", 1, "ngx-mat-timepicker-toggle-default-icon"], ["d", "M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"]],
  template: function NgxMatTimepickerToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c9);
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function NgxMatTimepickerToggleComponent_Template_button_click_0_listener($event) {
        return ctx.open($event);
      });
      ɵɵtemplate(1, NgxMatTimepickerToggleComponent__svg_svg_1_Template, 2, 0, "svg", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("disabled", ctx.disabled);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.customIcon);
    }
  },
  dependencies: [MatButtonModule, MatIconButton, NgIf],
  styles: ["button.ngx-mat-timepicker-toggle{background-color:transparent;text-align:center;-webkit-user-select:none;user-select:none;cursor:pointer;box-shadow:none}.mat-form-field .ngx-mat-timepicker-toggle-default-icon{margin:auto}.mat-form-field .ngx-mat-timepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}body .ngx-mat-timepicker-toggle{color:#0000008a}\n"],
  encapsulation: 2
});
var NgxMatTimepickerToggleComponent = _NgxMatTimepickerToggleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerToggleComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-toggle",
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatButtonModule, NgIf],
      template: '<button class="ngx-mat-timepicker-toggle mat-elevation-z0"\r\n        color=""\r\n        mat-icon-button\r\n        (click)="open($event)"\r\n        [disabled]="disabled"\r\n        type="button">\r\n    <svg xmlns="http://www.w3.org/2000/svg"\r\n         class="ngx-mat-timepicker-toggle-default-icon"\r\n         fill="currentColor"\r\n         viewBox="0 0 24 24"\r\n         width="24px"\r\n         height="24px"\r\n         *ngIf="!customIcon">\r\n        <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z" />\r\n    </svg>\r\n\r\n    <ng-content select="[ngxMatTimepickerToggleIcon]"></ng-content>\r\n</button>\r\n',
      styles: ["button.ngx-mat-timepicker-toggle{background-color:transparent;text-align:center;-webkit-user-select:none;user-select:none;cursor:pointer;box-shadow:none}.mat-form-field .ngx-mat-timepicker-toggle-default-icon{margin:auto}.mat-form-field .ngx-mat-timepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}body .ngx-mat-timepicker-toggle{color:#0000008a}\n"]
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    customIcon: [{
      type: ContentChild,
      args: [NgxMatTimepickerToggleIconDirective, {
        static: true
      }]
    }],
    timepicker: [{
      type: Input,
      args: ["for"]
    }]
  });
})();
function concatTime(currentTime, nextTime) {
  const isNumber = /\d/.test(nextTime);
  if (isNumber) {
    const time = currentTime + nextTime;
    return +time;
  }
  return void 0;
}
var _NgxMatTimepickerControlComponent = class _NgxMatTimepickerControlComponent {
  set color(newValue) {
    this._color = newValue;
  }
  get color() {
    return this._color;
  }
  set floatLabel(newValue) {
    this._floatLabel = newValue;
  }
  get floatLabel() {
    return this._floatLabel;
  }
  constructor(_timeParser) {
    this._timeParser = _timeParser;
    this.id = _NgxMatTimepickerControlComponent.nextId++;
    this.timeChanged = new EventEmitter();
    this._color = "primary";
    this._floatLabel = "auto";
  }
  changeTime(event) {
    event.stopPropagation();
    const char = event.data;
    const time = concatTime(String(this.time), char);
    this._changeTimeIfValid(time);
  }
  decrease() {
    if (!this.disabled) {
      let previousTime = +this.time - 1;
      if (previousTime < this.min) {
        previousTime = this.max;
      }
      if (this._isSelectedTimeDisabled(previousTime)) {
        previousTime = this._getAvailableTime(previousTime, this._getPrevAvailableTime.bind(this));
      }
      if (previousTime !== this.time) {
        this.timeChanged.emit(previousTime);
      }
    }
  }
  increase() {
    if (!this.disabled) {
      let nextTime = +this.time + 1;
      if (nextTime > this.max) {
        nextTime = this.min;
      }
      if (this._isSelectedTimeDisabled(nextTime)) {
        nextTime = this._getAvailableTime(nextTime, this._getNextAvailableTime.bind(this));
      }
      if (nextTime !== this.time) {
        this.timeChanged.emit(nextTime);
      }
    }
  }
  ngOnChanges(changes) {
    if (changes["timeList"] && this.time != null) {
      if (this._isSelectedTimeDisabled(this.time)) {
        this._setAvailableTime();
      }
    }
  }
  onBlur() {
    this.isFocused = false;
    if (this._previousTime !== this.time) {
      this._changeTimeIfValid(+this.time);
    }
  }
  onFocus() {
    this.isFocused = true;
    this._previousTime = this.time;
  }
  onKeydown(event) {
    event.stopPropagation();
    if (!NgxMatTimepickerUtils.isDigit(event)) {
      event.preventDefault();
    }
    switch (event.key) {
      case "ArrowUp":
        this.increase();
        break;
      case "ArrowDown":
        this.decrease();
        break;
    }
    if (this.preventTyping && event.key !== "Tab") {
      event.preventDefault();
    }
  }
  onModelChange(value) {
    this.time = +this._timeParser.transform(value, this.timeUnit);
  }
  _changeTimeIfValid(value) {
    if (!isNaN(value)) {
      this.time = value;
      if (this.time > this.max) {
        const timeString = String(value);
        this.time = +timeString[timeString.length - 1];
      }
      if (this.time < this.min) {
        this.time = this.min;
      }
      this.timeChanged.emit(this.time);
    }
  }
  _getAvailableTime(currentTime, fn) {
    const currentTimeIndex = this.timeList.findIndex((time) => time.time === currentTime);
    const availableTime = fn(currentTimeIndex);
    return availableTime != null ? availableTime : this.time;
  }
  _getNextAvailableTime(index) {
    const timeCollection = this.timeList;
    const maxValue = timeCollection.length;
    for (let i2 = index + 1; i2 < maxValue; i2++) {
      const time = timeCollection[i2];
      if (!time.disabled) {
        return time.time;
      }
    }
    return void 0;
  }
  _getPrevAvailableTime(index) {
    for (let i2 = index; i2 >= 0; i2--) {
      const time = this.timeList[i2];
      if (!time.disabled) {
        return time.time;
      }
    }
    return void 0;
  }
  _isSelectedTimeDisabled(time) {
    return this.timeList.find((faceTime) => faceTime.time === time).disabled;
  }
  _setAvailableTime() {
    this.time = this.timeList.find((t2) => !t2.disabled).time;
    this.timeChanged.emit(this.time);
  }
};
_NgxMatTimepickerControlComponent.nextId = 0;
_NgxMatTimepickerControlComponent.ɵfac = function NgxMatTimepickerControlComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerControlComponent)(ɵɵdirectiveInject(NgxMatTimepickerParserPipe));
};
_NgxMatTimepickerControlComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerControlComponent,
  selectors: [["ngx-mat-timepicker-time-control"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    floatLabel: "floatLabel",
    max: "max",
    min: "min",
    placeholder: "placeholder",
    preventTyping: "preventTyping",
    time: "time",
    timeList: "timeList",
    timeUnit: "timeUnit"
  },
  outputs: {
    timeChanged: "timeChanged"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NgxMatTimepickerParserPipe]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 13,
  vars: 17,
  consts: [[1, "ngx-mat-timepicker-control", 3, "color", "floatLabel", "ngClass"], ["matInput", "", "maxlength", "2", 3, "id", "name", "ngModel", "placeholder", "disabled", "ngModelChange", "keydown", "beforeinput", "focus", "blur"], ["matSuffix", "", 1, "arrows-wrap"], ["role", "button", 1, "arrow", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "18", "viewBox", "0 0 24 24", "width", "18"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"]],
  template: function NgxMatTimepickerControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "mat-form-field", 0)(1, "input", 1);
      ɵɵlistener("ngModelChange", function NgxMatTimepickerControlComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.onModelChange($event);
      })("keydown", function NgxMatTimepickerControlComponent_Template_input_keydown_1_listener($event) {
        return ctx.onKeydown($event);
      })("beforeinput", function NgxMatTimepickerControlComponent_Template_input_beforeinput_1_listener($event) {
        return ctx.changeTime($event);
      })("focus", function NgxMatTimepickerControlComponent_Template_input_focus_1_listener() {
        return ctx.onFocus();
      })("blur", function NgxMatTimepickerControlComponent_Template_input_blur_1_listener() {
        return ctx.onBlur();
      });
      ɵɵpipe(2, "timeLocalizer");
      ɵɵpipe(3, "ngxMatTimepickerParser");
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 2)(5, "span", 3);
      ɵɵlistener("click", function NgxMatTimepickerControlComponent_Template_span_click_5_listener() {
        return ctx.increase();
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(6, "svg", 4);
      ɵɵelement(7, "path", 5)(8, "path", 6);
      ɵɵelementEnd()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(9, "span", 3);
      ɵɵlistener("click", function NgxMatTimepickerControlComponent_Template_span_click_9_listener() {
        return ctx.decrease();
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(10, "svg", 4);
      ɵɵelement(11, "path", 7)(12, "path", 8);
      ɵɵelementEnd()()()();
    }
    if (rf & 2) {
      ɵɵproperty("color", ctx.color)("floatLabel", ctx.floatLabel)("ngClass", ɵɵpureFunction1(15, _c6, ctx.isFocused));
      ɵɵadvance();
      ɵɵpropertyInterpolate1("id", "ngx_mat_timepicker_field_", ctx.id, "")("name", "ngx_mat_timepicker_field_", ctx.id, "");
      ɵɵproperty("ngModel", ɵɵpipeBind3(2, 8, ɵɵpipeBind2(3, 12, ctx.time, ctx.timeUnit), ctx.timeUnit, true))("placeholder", ctx.placeholder)("disabled", ctx.disabled);
    }
  },
  dependencies: [MatFormFieldModule, MatFormField, MatSuffix, NgClass, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, NgxMatTimepickerParserPipe, NgxMatTimepickerTimeLocalizerPipe],
  styles: [".ngx-mat-timepicker-control[_ngcontent-%COMP%]{width:60px;min-width:60px}.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%]{position:relative;z-index:1}.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%] > .arrow[_ngcontent-%COMP%]{text-align:center;opacity:.5;height:15px;cursor:pointer;transition:opacity .2s;-webkit-user-select:none;user-select:none}.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%] > .arrow[_ngcontent-%COMP%]:hover{opacity:1}"],
  changeDetection: 0
});
var NgxMatTimepickerControlComponent = _NgxMatTimepickerControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerControlComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-time-control",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NgxMatTimepickerParserPipe],
      standalone: true,
      imports: [MatFormFieldModule, NgClass, MatInputModule, FormsModule, NgxMatTimepickerParserPipe, NgxMatTimepickerTimeLocalizerPipe],
      template: `<mat-form-field [color]="color"\r
                [floatLabel]="floatLabel"\r
                [ngClass]="{'active': isFocused}"\r
                class="ngx-mat-timepicker-control">\r
    <input id="ngx_mat_timepicker_field_{{id}}"\r
           name="ngx_mat_timepicker_field_{{id}}"\r
           matInput\r
           maxlength="2"\r
           [ngModel]="time | ngxMatTimepickerParser: timeUnit | timeLocalizer: timeUnit : true"\r
           (ngModelChange)="onModelChange($event)"\r
           [placeholder]="placeholder"\r
           [disabled]="disabled"\r
           (keydown)="onKeydown($event)"\r
           (beforeinput)="changeTime($event)"\r
           (focus)="onFocus()"\r
           (blur)="onBlur()" />\r
    <div class="arrows-wrap"\r
         matSuffix>\r
        <span class="arrow"\r
              role="button"\r
              (click)="increase()">\r
            <svg xmlns="http://www.w3.org/2000/svg"\r
                 height="18"\r
                 viewBox="0 0 24 24"\r
                 width="18">\r
                <path d="M0 0h24v24H0z"\r
                      fill="none" />\r
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />\r
            </svg>\r
        </span>\r
        <span class="arrow"\r
              role="button"\r
              (click)="decrease()">\r
            <svg xmlns="http://www.w3.org/2000/svg"\r
                 height="18"\r
                 viewBox="0 0 24 24"\r
                 width="18">\r
                <path d="M0 0h24v24H0V0z"\r
                      fill="none" />\r
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />\r
            </svg>\r
        </span>\r
    </div>\r
</mat-form-field>\r
`,
      styles: [".ngx-mat-timepicker-control{width:60px;min-width:60px}.ngx-mat-timepicker-control .arrows-wrap{position:relative;z-index:1}.ngx-mat-timepicker-control .arrows-wrap>.arrow{text-align:center;opacity:.5;height:15px;cursor:pointer;transition:opacity .2s;-webkit-user-select:none;user-select:none}.ngx-mat-timepicker-control .arrows-wrap>.arrow:hover{opacity:1}\n"]
    }]
  }], () => [{
    type: NgxMatTimepickerParserPipe
  }], {
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    floatLabel: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    preventTyping: [{
      type: Input
    }],
    time: [{
      type: Input
    }],
    timeChanged: [{
      type: Output
    }],
    timeList: [{
      type: Input
    }],
    timeUnit: [{
      type: Input
    }]
  });
})();
var _NgxMatTimepickerFieldComponent = class _NgxMatTimepickerFieldComponent {
  get color() {
    return this._color;
  }
  set color(newValue) {
    this._color = newValue;
  }
  get defaultTime() {
    return this._defaultTime;
  }
  set defaultTime(val) {
    this._defaultTime = val;
    this._isDefaultTime = !!val;
  }
  get floatLabel() {
    return this._floatLabel;
  }
  set floatLabel(newValue) {
    this._floatLabel = newValue;
  }
  get format() {
    return this._format;
  }
  set format(value) {
    if (NgxMatTimepickerAdapter.isTwentyFour(value)) {
      this._format = 24;
      this.minHour = 0;
      this.maxHour = 23;
    } else {
      this._format = 12;
      this.minHour = 1;
      this.maxHour = 12;
    }
    this.hoursList = NgxMatTimepickerUtils.getHours(this._format);
    const isDynamicallyChanged = value && this._previousFormat && this._previousFormat !== this._format;
    if (isDynamicallyChanged) {
      this._updateTime(this.timepickerTime);
    }
    this._previousFormat = this._format;
  }
  get max() {
    return this._max;
  }
  set max(value) {
    if (typeof value === "string") {
      this._max = NgxMatTimepickerAdapter.parseTime(value, {
        locale: this._locale,
        format: this.format
      });
      return;
    }
    this._max = value;
  }
  get min() {
    return this._min;
  }
  set min(value) {
    if (typeof value === "string") {
      this._min = NgxMatTimepickerAdapter.parseTime(value, {
        locale: this._locale,
        format: this.format
      });
      return;
    }
    this._min = value;
  }
  get _locale() {
    return this._timepickerLocaleSrv.locale;
  }
  constructor(_timepickerService, _timepickerLocaleSrv) {
    this._timepickerService = _timepickerService;
    this._timepickerLocaleSrv = _timepickerLocaleSrv;
    this.hour$ = new BehaviorSubject(void 0);
    this.maxHour = 12;
    this.minHour = 1;
    this.minute$ = new BehaviorSubject(void 0);
    this.period = NgxMatTimepickerPeriods.AM;
    this.periods = [NgxMatTimepickerPeriods.AM, NgxMatTimepickerPeriods.PM];
    this.timeChanged = new EventEmitter();
    this.timeUnit = NgxMatTimepickerUnits;
    this._color = "primary";
    this._floatLabel = "auto";
    this._format = 12;
    this._isFirstTimeChange = true;
    this._subsCtrl$ = new Subject();
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
  }
  changeHour(hour) {
    this._timepickerService.hour = this.hoursList.find((h2) => h2.time === hour);
    this._changeTime();
  }
  changeMinute(minute) {
    this._timepickerService.minute = this.minutesList.find((m2) => m2.time === minute);
    this._changeTime();
  }
  changePeriod(event) {
    this._timepickerService.period = event.value;
    this._changeTime();
  }
  ngOnDestroy() {
    this._subsCtrl$.next();
    this._subsCtrl$.complete();
  }
  ngOnInit() {
    this._initTime(this.defaultTime);
    this.hoursList = NgxMatTimepickerUtils.getHours(this._format);
    this.minutesList = NgxMatTimepickerUtils.getMinutes();
    this.isTimeRangeSet = !!(this.min || this.max);
    this._timepickerService.selectedHour.pipe(tap((clockTime) => this._selectedHour = clockTime?.time), map(this._changeDefaultTimeValue.bind(this)), tap(() => this.isTimeRangeSet && this._updateAvailableMinutes())).subscribe({
      next: (v2) => this.hour$.next(v2)
    });
    this._timepickerService.selectedMinute.pipe(map(this._changeDefaultTimeValue.bind(this)), tap(() => this._isFirstTimeChange = false)).subscribe({
      next: (v2) => this.minute$.next(v2)
    });
    if (this.format === 12) {
      this._timepickerService.selectedPeriod.pipe(distinctUntilChanged(), tap((period) => this.period = period), tap((period) => this.isChangePeriodDisabled = this._isPeriodDisabled(period)), takeUntil(this._subsCtrl$)).subscribe(() => this.isTimeRangeSet && this._updateAvailableTime());
    }
  }
  onTimeSet(time) {
    this._updateTime(time);
    this._emitLocalTimeChange(time);
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  writeValue(val) {
    if (val) {
      this._initTime(val);
    } else {
      this._resetTime();
    }
  }
  _changeDefaultTimeValue(clockFaceTime) {
    if (!this._isDefaultTime && this._isFirstTimeChange) {
      return __spreadProps(__spreadValues({}, clockFaceTime), {
        time: null
      });
    }
    return clockFaceTime;
  }
  _changeTime() {
    if (!isNaN(this.hour$.getValue()?.time) && !isNaN(this.minute$.getValue()?.time)) {
      const time = this._timepickerService.getFullTime(this.format);
      this.timepickerTime = time;
      this._emitLocalTimeChange(time);
    }
  }
  _emitLocalTimeChange(time) {
    const localTime = NgxMatTimepickerAdapter.toLocaleTimeString(time, {
      format: this.format,
      locale: this._locale
    });
    this._onChange(localTime);
    this._onTouched(localTime);
    this.timeChanged.emit(localTime);
  }
  _initTime(time) {
    const isDefaultTimeAvailable = NgxMatTimepickerAdapter.isTimeAvailable(time, this.min, this.max, "minutes", null, this.format);
    if (!isDefaultTimeAvailable) {
      if (this.min) {
        this._updateTime(NgxMatTimepickerAdapter.fromDateTimeToString(this.min, this.format));
        return;
      }
      if (this.max) {
        this._updateTime(NgxMatTimepickerAdapter.fromDateTimeToString(this.max, this.format));
        return;
      }
    }
    this._updateTime(time);
  }
  _isPeriodDisabled(period) {
    return NgxMatTimepickerUtils.disableHours(NgxMatTimepickerUtils.getHours(12), {
      min: this.min,
      max: this.max,
      format: 12,
      period: period === NgxMatTimepickerPeriods.AM ? NgxMatTimepickerPeriods.PM : NgxMatTimepickerPeriods.AM
    }).every((time) => time.disabled);
  }
  _resetTime() {
    this._timepickerService.hour = {
      angle: 0,
      time: null
    };
    this._timepickerService.minute = {
      angle: 0,
      time: null
    };
  }
  _updateAvailableHours() {
    this.hoursList = NgxMatTimepickerUtils.disableHours(this.hoursList, {
      min: this.min,
      max: this.max,
      format: this.format,
      period: this.period
    });
  }
  _updateAvailableMinutes() {
    this.minutesList = NgxMatTimepickerUtils.disableMinutes(this.minutesList, this._selectedHour, {
      min: this.min,
      max: this.max,
      format: this.format,
      period: this.period
    });
  }
  _updateAvailableTime() {
    this._updateAvailableHours();
    if (this._selectedHour) {
      this._updateAvailableMinutes();
    }
  }
  _updateTime(time) {
    if (time) {
      const formattedTime = NgxMatTimepickerAdapter.formatTime(time, {
        locale: this._locale,
        format: this.format
      });
      this._timepickerService.setDefaultTimeIfAvailable(formattedTime, this.min, this.max, this.format);
      this.timepickerTime = formattedTime;
    }
  }
};
_NgxMatTimepickerFieldComponent.ɵfac = function NgxMatTimepickerFieldComponent_Factory(t2) {
  return new (t2 || _NgxMatTimepickerFieldComponent)(ɵɵdirectiveInject(NgxMatTimepickerService), ɵɵdirectiveInject(NgxMatTimepickerLocaleService));
};
_NgxMatTimepickerFieldComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMatTimepickerFieldComponent,
  selectors: [["ngx-mat-timepicker-field"]],
  inputs: {
    color: "color",
    defaultTime: "defaultTime",
    floatLabel: "floatLabel",
    format: "format",
    max: "max",
    min: "min",
    cancelBtnTmpl: "cancelBtnTmpl",
    confirmBtnTmpl: "confirmBtnTmpl",
    controlOnly: "controlOnly",
    disabled: "disabled",
    toggleIcon: "toggleIcon"
  },
  outputs: {
    timeChanged: "timeChanged"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NgxMatTimepickerService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: _NgxMatTimepickerFieldComponent,
    multi: true
  }]), ɵɵStandaloneFeature],
  decls: 11,
  vars: 32,
  consts: [[1, "ngx-mat-timepicker", 3, "ngClass"], [1, "ngx-mat-timepicker__control--first", 3, "color", "floatLabel", "placeholder", "time", "min", "max", "timeUnit", "disabled", "timeList", "preventTyping", "timeChanged"], [1, "separator-colon", "ngx-mat-timepicker__control--second"], [1, "ngx-mat-timepicker__control--third", 3, "color", "floatLabel", "placeholder", "time", "min", "max", "timeUnit", "disabled", "timeList", "preventTyping", "timeChanged"], ["class", "period-select ngx-mat-timepicker__control--forth", 3, "color", 4, "ngIf"], ["class", "ngx-mat-timepicker__toggle", 3, "for", "disabled", 4, "ngIf"], [3, "color", "min", "max", "defaultTime", "format", "cancelBtnTmpl", "confirmBtnTmpl", "timeSet"], ["timepicker", ""], ["defaultIcon", ""], [1, "period-select", "ngx-mat-timepicker__control--forth", 3, "color"], [3, "disabled", "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "ngx-mat-timepicker__toggle", 3, "for", "disabled"], ["ngxMatTimepickerToggleIcon", ""], [4, "ngTemplateOutlet"]],
  template: function NgxMatTimepickerFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "ngx-mat-timepicker-time-control", 1);
      ɵɵlistener("timeChanged", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_time_control_timeChanged_1_listener($event) {
        return ctx.changeHour($event);
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "span", 2);
      ɵɵtext(3, ":");
      ɵɵelementEnd();
      ɵɵelementStart(4, "ngx-mat-timepicker-time-control", 3);
      ɵɵlistener("timeChanged", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_time_control_timeChanged_4_listener($event) {
        return ctx.changeMinute($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(5, NgxMatTimepickerFieldComponent_mat_form_field_5_Template, 3, 4, "mat-form-field", 4)(6, NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_6_Template, 3, 3, "ngx-mat-timepicker-toggle", 5);
      ɵɵelementEnd();
      ɵɵelementStart(7, "ngx-mat-timepicker", 6, 7);
      ɵɵlistener("timeSet", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_timeSet_7_listener($event) {
        return ctx.onTimeSet($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(9, NgxMatTimepickerFieldComponent_ng_template_9_Template, 2, 0, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_14_0;
      ɵɵproperty("ngClass", ɵɵpureFunction1(30, _c11, ctx.disabled));
      ɵɵadvance();
      ɵɵproperty("color", ctx.color)("floatLabel", ctx.floatLabel)("placeholder", "HH")("time", (tmp_4_0 = ctx.hour$.getValue()) == null ? null : tmp_4_0.time)("min", ctx.minHour)("max", ctx.maxHour)("timeUnit", ctx.timeUnit.HOUR)("disabled", ctx.disabled)("timeList", ctx.hoursList)("preventTyping", ctx.isTimeRangeSet);
      ɵɵadvance(3);
      ɵɵproperty("color", ctx.color)("floatLabel", ctx.floatLabel)("placeholder", "MM")("time", (tmp_14_0 = ctx.minute$.getValue()) == null ? null : tmp_14_0.time)("min", 0)("max", 59)("timeUnit", ctx.timeUnit.MINUTE)("disabled", ctx.disabled)("timeList", ctx.minutesList)("preventTyping", ctx.isTimeRangeSet);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.format !== 24);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.controlOnly);
      ɵɵadvance();
      ɵɵproperty("color", ctx.color)("min", ctx.min)("max", ctx.max)("defaultTime", ctx.timepickerTime)("format", ctx.format)("cancelBtnTmpl", ctx.cancelBtnTmpl)("confirmBtnTmpl", ctx.confirmBtnTmpl);
    }
  },
  dependencies: [NgClass, NgxMatTimepickerControlComponent, NgIf, MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel, NgForOf, MatOptionModule, NgxMatTimepickerToggleComponent, NgxMatTimepickerToggleIconDirective, NgTemplateOutlet, NgxMatTimepickerComponent, MatIconModule, MatIcon],
  styles: [".ngx-mat-timepicker{display:flex;align-items:center;height:100%}.ngx-mat-timepicker--disabled{background:rgba(0,0,0,.07);pointer-events:none}.ngx-mat-timepicker .separator-colon{margin-left:5px;margin-right:5px}.ngx-mat-timepicker .period-select{width:60px;min-width:60px;margin-left:8px;text-align:center}.ngx-mat-timepicker__control--first{order:1}.ngx-mat-timepicker__control--second{order:2}.ngx-mat-timepicker__control--third{order:3}.ngx-mat-timepicker__control--forth{order:4}.ngx-mat-timepicker__toggle{order:4;margin-bottom:1.5em;margin-left:4px}.ngx-mat-timepicker__toggle span.mat-button-wrapper{font-size:24px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var NgxMatTimepickerFieldComponent = _NgxMatTimepickerFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerFieldComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-timepicker-field",
      providers: [NgxMatTimepickerService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: NgxMatTimepickerFieldComponent,
        multi: true
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NgClass, NgxMatTimepickerControlComponent, NgIf, MatFormFieldModule, MatSelectModule, FormsModule, NgForOf, MatOptionModule, NgxMatTimepickerToggleComponent, NgxMatTimepickerToggleIconDirective, NgTemplateOutlet, NgxMatTimepickerComponent, MatIconModule],
      template: `<div class="ngx-mat-timepicker"\r
     [ngClass]="{'ngx-mat-timepicker--disabled': disabled}">\r
    <ngx-mat-timepicker-time-control\r
            class="ngx-mat-timepicker__control--first"\r
            [color]="color"\r
            [floatLabel]="floatLabel"\r
            [placeholder]="'HH'"\r
            [time]="hour$.getValue()?.time"\r
            [min]="minHour"\r
            [max]="maxHour"\r
            [timeUnit]="timeUnit.HOUR"\r
            [disabled]="disabled"\r
            [timeList]="hoursList"\r
            [preventTyping]="isTimeRangeSet"\r
            (timeChanged)="changeHour($event)"></ngx-mat-timepicker-time-control>\r
    <span class="separator-colon ngx-mat-timepicker__control--second">:</span>\r
    <ngx-mat-timepicker-time-control\r
            class="ngx-mat-timepicker__control--third"\r
            [color]="color"\r
            [floatLabel]="floatLabel"\r
            [placeholder]="'MM'"\r
            [time]="minute$.getValue()?.time"\r
            [min]="0"\r
            [max]="59"\r
            [timeUnit]="timeUnit.MINUTE"\r
            [disabled]="disabled"\r
            [timeList]="minutesList"\r
            [preventTyping]="isTimeRangeSet"\r
            (timeChanged)="changeMinute($event)"></ngx-mat-timepicker-time-control>\r
    <mat-form-field class="period-select ngx-mat-timepicker__control--forth"\r
                    *ngIf="format !== 24"\r
                    [color]="color">\r
        <mat-select [disabled]="disabled || isChangePeriodDisabled"\r
                    (selectionChange)="changePeriod($event)"\r
                    [ngModel]="period">\r
            <mat-option *ngFor="let option of periods"\r
                        [value]="option">{{option}}</mat-option>\r
        </mat-select>\r
    </mat-form-field>\r
    <ngx-mat-timepicker-toggle\r
            class="ngx-mat-timepicker__toggle"\r
            *ngIf="!controlOnly"\r
            [for]="timepicker"\r
            [disabled]="disabled">\r
        <span ngxMatTimepickerToggleIcon>\r
            <ng-container *ngTemplateOutlet="toggleIcon || defaultIcon"></ng-container>\r
        </span>\r
    </ngx-mat-timepicker-toggle>\r
</div>\r
<ngx-mat-timepicker\r
        [color]="color"\r
        [min]="min"\r
        [max]="max"\r
        [defaultTime]="timepickerTime"\r
        [format]="format"\r
        [cancelBtnTmpl]="cancelBtnTmpl"\r
        [confirmBtnTmpl]="confirmBtnTmpl"\r
        (timeSet)="onTimeSet($event)"\r
        #timepicker></ngx-mat-timepicker>\r
\r
<ng-template #defaultIcon>\r
    <mat-icon>watch_later</mat-icon>\r
</ng-template>\r
`,
      styles: [".ngx-mat-timepicker{display:flex;align-items:center;height:100%}.ngx-mat-timepicker--disabled{background:rgba(0,0,0,.07);pointer-events:none}.ngx-mat-timepicker .separator-colon{margin-left:5px;margin-right:5px}.ngx-mat-timepicker .period-select{width:60px;min-width:60px;margin-left:8px;text-align:center}.ngx-mat-timepicker__control--first{order:1}.ngx-mat-timepicker__control--second{order:2}.ngx-mat-timepicker__control--third{order:3}.ngx-mat-timepicker__control--forth{order:4}.ngx-mat-timepicker__toggle{order:4;margin-bottom:1.5em;margin-left:4px}.ngx-mat-timepicker__toggle span.mat-button-wrapper{font-size:24px}\n"]
    }]
  }], () => [{
    type: NgxMatTimepickerService
  }, {
    type: NgxMatTimepickerLocaleService
  }], {
    color: [{
      type: Input
    }],
    defaultTime: [{
      type: Input
    }],
    floatLabel: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    cancelBtnTmpl: [{
      type: Input
    }],
    confirmBtnTmpl: [{
      type: Input
    }],
    controlOnly: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    timeChanged: [{
      type: Output
    }],
    toggleIcon: [{
      type: Input
    }]
  });
})();
var _NgxMatTimepickerDirective = class _NgxMatTimepickerDirective {
  get element() {
    return this._elementRef && this._elementRef.nativeElement;
  }
  get format() {
    return this._format;
  }
  set format(value) {
    this._format = NgxMatTimepickerAdapter.isTwentyFour(+value) ? 24 : 12;
    const isDynamicallyChanged = value && this._previousFormat && this._previousFormat !== this._format;
    if (isDynamicallyChanged) {
      this.value = this._value;
      this._timepicker.updateTime(this._value);
    }
    this._previousFormat = this._format;
  }
  get max() {
    return this._max;
  }
  set max(value) {
    if (typeof value === "string") {
      this._max = NgxMatTimepickerAdapter.parseTime(value, {
        locale: this._locale,
        format: this.format
      });
      return;
    }
    this._max = value;
  }
  get min() {
    return this._min;
  }
  set min(value) {
    if (typeof value === "string") {
      this._min = NgxMatTimepickerAdapter.parseTime(value, {
        locale: this._locale,
        format: this.format
      });
      return;
    }
    this._min = value;
  }
  set timepicker(picker) {
    this._registerTimepicker(picker);
  }
  get value() {
    if (!this._value) {
      return "";
    }
    return NgxMatTimepickerAdapter.toLocaleTimeString(this._value, {
      format: this.format,
      locale: this._locale
    });
  }
  set value(value) {
    if (!value) {
      this._value = "";
      this._updateInputValue();
      return;
    }
    const time = NgxMatTimepickerAdapter.formatTime(value, {
      locale: this._locale,
      format: this.format
    });
    const isAvailable = NgxMatTimepickerAdapter.isTimeAvailable(time, this._min, this._max, "minutes", this._timepicker.minutesGap, this._format);
    if (isAvailable) {
      this._value = time;
      this._updateInputValue();
      return;
    }
    console.warn("Selected time doesn't match min or max value");
  }
  set _defaultTime(time) {
    this._timepicker.defaultTime = NgxMatTimepickerAdapter.formatTime(time, {
      locale: this._locale,
      format: this.format
    });
  }
  get _locale() {
    return this._timepickerLocaleSrv.locale;
  }
  constructor(_elementRef, _timepickerLocaleSrv, _matFormField) {
    this._elementRef = _elementRef;
    this._timepickerLocaleSrv = _timepickerLocaleSrv;
    this._matFormField = _matFormField;
    this.cdkOverlayOrigin = new CdkOverlayOrigin(this._matFormField ? this._matFormField.getConnectedOverlayOrigin() : this._elementRef);
    this._format = 12;
    this._subsCtrl$ = new Subject();
    this._value = "";
    this.onTouched = () => {
    };
    this._onChange = () => {
    };
  }
  ngOnChanges(changes) {
    const vChanges = changes["value"];
    if (vChanges && vChanges.currentValue) {
      this._defaultTime = vChanges.currentValue;
    }
  }
  ngOnDestroy() {
    this._unregisterTimepicker();
    this._subsCtrl$.next();
    this._subsCtrl$.complete();
  }
  onClick(event) {
    if (!this.disableClick) {
      this._timepicker.open();
      event.stopPropagation();
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  updateValue(e2) {
    this.value = e2.target.value;
    this._onChange(this.value);
  }
  writeValue(value) {
    this.value = value;
    if (value) {
      this._defaultTime = value;
    }
  }
  _registerTimepicker(picker) {
    if (picker) {
      this._timepicker = picker;
      this._timepicker.registerInput(this);
      this._timepicker.timeSet.pipe(takeUntil(this._subsCtrl$)).subscribe((time) => {
        this.value = time;
        this._onChange(this.value);
        this.onTouched();
        this._defaultTime = this._value;
      });
    } else {
      throw new Error("NgxMatTimepickerComponent is not defined. Please make sure you passed the timepicker to ngxMatTimepicker directive");
    }
  }
  _unregisterTimepicker() {
    if (this._timepicker) {
      this._timepicker.unregisterInput();
    }
  }
  _updateInputValue() {
    this._elementRef.nativeElement.value = this.value;
  }
};
_NgxMatTimepickerDirective.ɵfac = function NgxMatTimepickerDirective_Factory(t2) {
  return new (t2 || _NgxMatTimepickerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgxMatTimepickerLocaleService), ɵɵdirectiveInject(MatFormField, 8));
};
_NgxMatTimepickerDirective.ɵdir = ɵɵdefineDirective({
  type: _NgxMatTimepickerDirective,
  selectors: [["", "ngxMatTimepicker", ""]],
  hostVars: 2,
  hostBindings: function NgxMatTimepickerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("blur", function NgxMatTimepickerDirective_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("click", function NgxMatTimepickerDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("change", function NgxMatTimepickerDirective_change_HostBindingHandler($event) {
        return ctx.updateValue($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("disabled", ctx.disabled);
      ɵɵattribute("cdkOverlayOrigin", ctx.cdkOverlayOrigin);
    }
  },
  inputs: {
    format: "format",
    max: "max",
    min: "min",
    timepicker: [InputFlags.None, "ngxMatTimepicker", "timepicker"],
    value: "value",
    disableClick: "disableClick",
    disabled: "disabled"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _NgxMatTimepickerDirective,
    multi: true
  }]), ɵɵNgOnChangesFeature]
});
var NgxMatTimepickerDirective = _NgxMatTimepickerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatTimepicker]",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NgxMatTimepickerDirective,
        multi: true
      }],
      // tslint:disable-next-line:no-host-metadata-property
      host: {
        "[disabled]": "disabled",
        "(blur)": "onTouched()"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgxMatTimepickerLocaleService
  }, {
    type: MatFormField,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MatFormField]
    }]
  }], {
    format: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    timepicker: [{
      type: Input,
      args: ["ngxMatTimepicker"]
    }],
    value: [{
      type: Input
    }],
    cdkOverlayOrigin: [{
      type: HostBinding,
      args: ["attr.cdkOverlayOrigin"]
    }],
    disableClick: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    updateValue: [{
      type: HostListener,
      args: ["change", ["$event"]]
    }]
  });
})();
var _NgxMatTimepickerTimeFormatterPipe = class _NgxMatTimepickerTimeFormatterPipe {
  transform(time, timeUnit) {
    if (time == null || time === "") {
      return time;
    }
    switch (timeUnit) {
      case NgxMatTimepickerUnits.HOUR:
        return tn.fromObject({
          hour: +time
        }).toFormat("HH");
      case NgxMatTimepickerUnits.MINUTE:
        return tn.fromObject({
          minute: +time
        }).toFormat("mm");
      default:
        throw new Error("no such time unit");
    }
  }
};
_NgxMatTimepickerTimeFormatterPipe.ɵfac = function NgxMatTimepickerTimeFormatterPipe_Factory(t2) {
  return new (t2 || _NgxMatTimepickerTimeFormatterPipe)();
};
_NgxMatTimepickerTimeFormatterPipe.ɵpipe = ɵɵdefinePipe({
  name: "timeFormatter",
  type: _NgxMatTimepickerTimeFormatterPipe,
  pure: true,
  standalone: true
});
var NgxMatTimepickerTimeFormatterPipe = _NgxMatTimepickerTimeFormatterPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerTimeFormatterPipe, [{
    type: Pipe,
    args: [{
      name: "timeFormatter",
      standalone: true
    }]
  }], null, null);
})();
var _NgxMatTimepickerModule = class _NgxMatTimepickerModule {
  static setLocale(locale) {
    return {
      ngModule: _NgxMatTimepickerModule,
      providers: [{
        provide: NGX_MAT_TIMEPICKER_LOCALE,
        useValue: locale
      }, {
        provide: NGX_MAT_TIMEPICKER_CONFIG,
        useValue: void 0
      }, NgxMatTimepickerLocaleService]
    };
  }
};
_NgxMatTimepickerModule.ɵfac = function NgxMatTimepickerModule_Factory(t2) {
  return new (t2 || _NgxMatTimepickerModule)();
};
_NgxMatTimepickerModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxMatTimepickerModule,
  imports: [
    CommonModule,
    A11yModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    OverlayModule,
    PortalModule,
    // Not really used, but needed to use it as abstract class
    NgxMatTimepickerBaseDirective,
    NgxMatTimepickerHoursFaceDirective,
    //
    NgxMatTimepickerActiveHourPipe,
    NgxMatTimepickerActiveMinutePipe,
    NgxMatTimepickerComponent,
    NgxMatTimepickerDialComponent,
    NgxMatTimepickerDialControlComponent,
    NgxMatTimepickerDialogComponent,
    NgxMatTimepickerDirective,
    NgxMatTimepickerFaceComponent,
    NgxMatTimepickerMinutesFaceComponent,
    NgxMatTimepickerPeriodComponent,
    NgxMatTimepickerStandaloneComponent,
    NgxMatTimepickerToggleComponent,
    NgxMatTimepicker12HoursFaceComponent,
    NgxMatTimepicker24HoursFaceComponent,
    NgxMatTimepickerToggleIconDirective,
    NgxMatTimepickerAutofocusDirective,
    NgxMatTimepickerMinutesFormatterPipe,
    NgxMatTimepickerFieldComponent,
    NgxMatTimepickerControlComponent,
    NgxMatTimepickerParserPipe,
    NgxMatTimepickerContentComponent,
    NgxMatTimepickerTimeFormatterPipe,
    NgxMatTimepickerTimeLocalizerPipe
  ],
  exports: [NgxMatTimepickerComponent, NgxMatTimepickerToggleComponent, NgxMatTimepickerFieldComponent, NgxMatTimepickerDirective, NgxMatTimepickerToggleIconDirective]
});
_NgxMatTimepickerModule.ɵinj = ɵɵdefineInjector({
  providers: [NgxMatTimepickerLocaleService, {
    provide: MAT_FAB_DEFAULT_OPTIONS,
    useValue: {
      color: "void"
    }
  }],
  imports: [CommonModule, A11yModule, FormsModule, MatButtonModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule, MatToolbarModule, MatIconModule, OverlayModule, PortalModule, NgxMatTimepickerComponent, NgxMatTimepickerDialComponent, NgxMatTimepickerDialControlComponent, NgxMatTimepickerDialogComponent, NgxMatTimepickerFaceComponent, NgxMatTimepickerMinutesFaceComponent, NgxMatTimepickerStandaloneComponent, NgxMatTimepickerToggleComponent, NgxMatTimepicker12HoursFaceComponent, NgxMatTimepicker24HoursFaceComponent, NgxMatTimepickerFieldComponent, NgxMatTimepickerControlComponent]
});
var NgxMatTimepickerModule = _NgxMatTimepickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        A11yModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatIconModule,
        OverlayModule,
        PortalModule,
        // Not really used, but needed to use it as abstract class
        NgxMatTimepickerBaseDirective,
        NgxMatTimepickerHoursFaceDirective,
        //
        NgxMatTimepickerActiveHourPipe,
        NgxMatTimepickerActiveMinutePipe,
        NgxMatTimepickerComponent,
        NgxMatTimepickerDialComponent,
        NgxMatTimepickerDialControlComponent,
        NgxMatTimepickerDialogComponent,
        NgxMatTimepickerDirective,
        NgxMatTimepickerFaceComponent,
        NgxMatTimepickerMinutesFaceComponent,
        NgxMatTimepickerPeriodComponent,
        NgxMatTimepickerStandaloneComponent,
        NgxMatTimepickerToggleComponent,
        NgxMatTimepicker12HoursFaceComponent,
        NgxMatTimepicker24HoursFaceComponent,
        NgxMatTimepickerToggleIconDirective,
        NgxMatTimepickerAutofocusDirective,
        NgxMatTimepickerMinutesFormatterPipe,
        NgxMatTimepickerFieldComponent,
        NgxMatTimepickerControlComponent,
        NgxMatTimepickerParserPipe,
        NgxMatTimepickerContentComponent,
        NgxMatTimepickerTimeFormatterPipe,
        NgxMatTimepickerTimeLocalizerPipe
      ],
      exports: [NgxMatTimepickerComponent, NgxMatTimepickerToggleComponent, NgxMatTimepickerFieldComponent, NgxMatTimepickerDirective, NgxMatTimepickerToggleIconDirective],
      providers: [NgxMatTimepickerLocaleService, {
        provide: MAT_FAB_DEFAULT_OPTIONS,
        useValue: {
          color: "void"
        }
      }]
    }]
  }], null, null);
})();
export {
  NgxMatTimepickerComponent,
  NgxMatTimepickerDirective,
  NgxMatTimepickerFieldComponent,
  NgxMatTimepickerLocaleService,
  NgxMatTimepickerModule,
  NgxMatTimepickerToggleComponent,
  NgxMatTimepickerToggleIconDirective
};
//# sourceMappingURL=ngx-mat-timepicker.js.map
