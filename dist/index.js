const l = class l {
  /**
   * Format a date using Indonesian day and month names.
   * Supports standard formatting characters similar to PHP date().
   */
  static format(e, r) {
    const t = this.parseDate(e);
    let a = "", c = !1;
    const i = (n) => n < 10 ? "0" + n : String(n);
    for (let n = 0; n < r.length; n++) {
      const f = r[n];
      if (c) {
        a += f, c = !1;
        continue;
      }
      if (f === "\\") {
        c = !0;
        continue;
      }
      switch (f) {
        case "l":
          a += this.days[t.getDay()];
          break;
        case "D":
          a += this.shortDays[t.getDay()];
          break;
        case "F":
          a += this.months[t.getMonth() + 1];
          break;
        case "M":
          a += this.shortMonths[t.getMonth() + 1];
          break;
        case "Y":
          a += t.getFullYear();
          break;
        case "y":
          a += String(t.getFullYear()).slice(-2);
          break;
        case "m":
          a += i(t.getMonth() + 1);
          break;
        case "n":
          a += t.getMonth() + 1;
          break;
        case "d":
          a += i(t.getDate());
          break;
        case "j":
          a += t.getDate();
          break;
        case "H":
          a += i(t.getHours());
          break;
        case "G":
          a += t.getHours();
          break;
        case "h": {
          const u = t.getHours() % 12;
          a += i(u === 0 ? 12 : u);
          break;
        }
        case "g": {
          const u = t.getHours() % 12;
          a += u === 0 ? 12 : u;
          break;
        }
        case "i":
          a += i(t.getMinutes());
          break;
        case "s":
          a += i(t.getSeconds());
          break;
        case "w":
          a += t.getDay();
          break;
        case "a":
          a += t.getHours() >= 12 ? "pm" : "am";
          break;
        case "A":
          a += t.getHours() >= 12 ? "PM" : "AM";
          break;
        default:
          a += f;
          break;
      }
    }
    return a;
  }
  /**
   * Get the Indonesian month name.
   */
  static month(e, r = !1) {
    return this.format(e, r ? "M" : "F");
  }
  /**
   * Get the Indonesian day name.
   */
  static day(e, r = !1) {
    return this.format(e, r ? "D" : "l");
  }
  /**
   * Get the year.
   */
  static year(e) {
    return this.format(e, "Y");
  }
  /**
   * Get the full Indonesian date (e.g. "4 Juni 2026" or "Kamis, 4 Juni 2026").
   */
  static date(e, r = !1, t = !1) {
    const a = t ? "D, j" : "l, j", c = t ? "M" : "F", i = r ? `${a} ${c} Y` : `j ${c} Y`;
    return this.format(e, i);
  }
  /**
   * Parse input into a Date object.
   */
  static parseDate(e) {
    if (e == null)
      return /* @__PURE__ */ new Date();
    if (e instanceof Date)
      return new Date(e.getTime());
    if (typeof e == "number")
      return new Date(e < 1e10 ? e * 1e3 : e);
    if (typeof e == "string") {
      const r = new Date(e);
      if (isNaN(r.getTime()))
        throw new Error(`Invalid date string provided: ${e}`);
      return r;
    }
    throw new Error("Invalid date type provided. Expected null, string, number, or Date.");
  }
};
l.months = {
  1: "Januari",
  2: "Februari",
  3: "Maret",
  4: "April",
  5: "Mei",
  6: "Juni",
  7: "Juli",
  8: "Agustus",
  9: "September",
  10: "Oktober",
  11: "November",
  12: "Desember"
}, l.shortMonths = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "Mei",
  6: "Jun",
  7: "Jul",
  8: "Agt",
  9: "Sep",
  10: "Okt",
  11: "Nov",
  12: "Des"
}, l.days = {
  0: "Minggu",
  1: "Senin",
  2: "Selasa",
  3: "Rabu",
  4: "Kamis",
  5: "Jumat",
  6: "Sabtu"
}, l.shortDays = {
  0: "Min",
  1: "Sen",
  2: "Sel",
  3: "Rab",
  4: "Kam",
  5: "Jum",
  6: "Sab"
};
let o = l;
const g = {
  install(s) {
    s.config.globalProperties.$indoDate = (e, r = !1, t = !1) => o.date(e, r, t), s.config.globalProperties.$indoMonth = (e, r = !1) => o.month(e, r), s.config.globalProperties.$indoDay = (e, r = !1) => o.day(e, r), s.config.globalProperties.$indoFormat = (e, r) => o.format(e, r);
  }
};
function h(s, e = !1, r = !1) {
  return o.date(s, e, r);
}
function b(s, e = !1) {
  return o.month(s, e);
}
function m(s, e = !1) {
  return o.day(s, e);
}
function k(s, e) {
  return o.format(s, e);
}
export {
  o as IndonesianDate,
  g as IndonesianDatePlugin,
  h as indoDate,
  m as indoDay,
  k as indoFormat,
  b as indoMonth
};
