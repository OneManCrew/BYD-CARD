/* BYD 3D Card for Home Assistant
 * Custom Lovelace card with profile-based BYD entity mapping.
 */

const CARD_TYPE = "byd-3d-card";
const CARD_NAME = "BYD 3D Card";
const CARD_VERSION = "0.1.0";

const PROFILE_IMAGES = {
  atto3:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520">
  <defs>
    <linearGradient id="bg" x1="0" x2="1">
      <stop offset="0%" stop-color="#26384a"/>
      <stop offset="100%" stop-color="#0f141d"/>
    </linearGradient>
    <linearGradient id="car" x1="0" x2="1">
      <stop offset="0%" stop-color="#f7fbff"/>
      <stop offset="60%" stop-color="#cfd9e5"/>
      <stop offset="100%" stop-color="#9caab8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#bg)"/>
  <ellipse cx="600" cy="425" rx="430" ry="50" fill="rgba(0,0,0,0.38)"/>
  <path d="M170 323c21-57 78-108 146-130l160-50c42-14 86-16 130-7l219 41c58 11 110 42 148 88l63 75-18 35H128l42-52z" fill="url(#car)"/>
  <path d="M298 262l155-71c30-13 63-15 95-9l194 31c35 6 68 23 94 48l49 46H283l15-45z" fill="#1d2a37"/>
  <path d="M382 275h453c14 0 25 11 25 24v7H358v-6c0-14 11-25 24-25z" fill="#2a3a4d"/>
  <circle cx="360" cy="379" r="74" fill="#111822"/>
  <circle cx="360" cy="379" r="41" fill="#8ea0b3"/>
  <circle cx="849" cy="379" r="74" fill="#111822"/>
  <circle cx="849" cy="379" r="41" fill="#8ea0b3"/>
  <rect x="253" y="331" width="104" height="20" rx="10" fill="#d7e8f8"/>
  <rect x="858" y="331" width="90" height="20" rx="10" fill="#d7e8f8"/>
  <text x="74" y="92" fill="#ecf5ff" font-size="48" font-family="ui-sans-serif,Arial" font-weight="700">BYD ATTO 3</text>
</svg>
`),
  seal:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520">
  <defs>
    <linearGradient id="bg2" x1="0" x2="1">
      <stop offset="0%" stop-color="#1f2a3a"/>
      <stop offset="100%" stop-color="#0f1118"/>
    </linearGradient>
    <linearGradient id="car2" x1="0" x2="1">
      <stop offset="0%" stop-color="#72dbff"/>
      <stop offset="100%" stop-color="#2398d0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#bg2)"/>
  <ellipse cx="600" cy="426" rx="420" ry="46" fill="rgba(0,0,0,0.35)"/>
  <path d="M160 338c34-61 103-108 179-123l149-28c44-8 88-6 131 8l165 52c50 16 96 45 132 86l43 48-14 17H143l17-60z" fill="url(#car2)"/>
  <path d="M315 279l138-51c38-14 80-15 118-3l182 55c29 9 56 24 77 45H287z" fill="#0d2130"/>
  <circle cx="350" cy="381" r="70" fill="#101720"/>
  <circle cx="350" cy="381" r="38" fill="#95a2b1"/>
  <circle cx="848" cy="381" r="70" fill="#101720"/>
  <circle cx="848" cy="381" r="38" fill="#95a2b1"/>
  <text x="74" y="92" fill="#e7f8ff" font-size="48" font-family="ui-sans-serif,Arial" font-weight="700">BYD SEAL</text>
</svg>
`),
  dolphin:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520">
  <defs>
    <linearGradient id="bg3" x1="0" x2="1">
      <stop offset="0%" stop-color="#283b47"/>
      <stop offset="100%" stop-color="#0e151f"/>
    </linearGradient>
    <linearGradient id="car3" x1="0" x2="1">
      <stop offset="0%" stop-color="#f8fafd"/>
      <stop offset="100%" stop-color="#c3d3de"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#bg3)"/>
  <ellipse cx="600" cy="430" rx="402" ry="44" fill="rgba(0,0,0,0.35)"/>
  <path d="M185 333c26-56 84-103 151-122l159-41c42-10 86-9 127 4l164 49c53 16 101 47 136 89l42 50H170l15-29z" fill="url(#car3)"/>
  <path d="M332 273l128-44c36-12 75-12 111 1l184 64c23 8 44 20 61 36H299z" fill="#1e2f3f"/>
  <circle cx="355" cy="384" r="67" fill="#111a25"/>
  <circle cx="355" cy="384" r="36" fill="#9dabba"/>
  <circle cx="846" cy="384" r="67" fill="#111a25"/>
  <circle cx="846" cy="384" r="36" fill="#9dabba"/>
  <text x="74" y="92" fill="#f2fbff" font-size="48" font-family="ui-sans-serif,Arial" font-weight="700">BYD DOLPHIN</text>
</svg>
`),
  sealion7:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520">
  <defs>
    <linearGradient id="bg4" x1="0" x2="1">
      <stop offset="0%" stop-color="#313540"/>
      <stop offset="100%" stop-color="#0d1016"/>
    </linearGradient>
    <linearGradient id="car4" x1="0" x2="1">
      <stop offset="0%" stop-color="#d5dae2"/>
      <stop offset="100%" stop-color="#a8b5c4"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#bg4)"/>
  <ellipse cx="600" cy="430" rx="444" ry="49" fill="rgba(0,0,0,0.42)"/>
  <path d="M155 341c24-66 89-116 170-132l182-34c43-8 86-6 128 6l187 55c55 16 103 49 137 94l31 43H139l16-32z" fill="url(#car4)"/>
  <path d="M327 275l133-45c44-15 93-14 136 4l180 72c19 8 36 19 49 33H290z" fill="#253140"/>
  <circle cx="345" cy="386" r="72" fill="#131c26"/>
  <circle cx="345" cy="386" r="39" fill="#8f9eae"/>
  <circle cx="860" cy="386" r="72" fill="#131c26"/>
  <circle cx="860" cy="386" r="39" fill="#8f9eae"/>
  <text x="74" y="92" fill="#ecf4ff" font-size="48" font-family="ui-sans-serif,Arial" font-weight="700">BYD SEALION 7</text>
</svg>
`),
};

const VEHICLE_PROFILES = {
  atto3: {
    label: "BYD ATTO 3",
    image: PROFILE_IMAGES.atto3,
    icon: "mdi:car-electric",
  },
  seal: {
    label: "BYD SEAL",
    image: PROFILE_IMAGES.seal,
    icon: "mdi:car-sports",
  },
  dolphin: {
    label: "BYD DOLPHIN",
    image: PROFILE_IMAGES.dolphin,
    icon: "mdi:car-electric-outline",
  },
  sealion7: {
    label: "BYD SEALION 7",
    image: PROFILE_IMAGES.sealion7,
    icon: "mdi:car-estate",
  },
};

const ENTITY_HINTS = {
  battery: { domains: ["sensor"], suffixes: ["battery_level", "elec_percent"] },
  range: { domains: ["sensor"], suffixes: ["range", "endurance_mileage", "endurance_mileage_v2"] },
  charging: { domains: ["binary_sensor"], suffixes: ["charging", "is_charging"] },
  battery_power: { domains: ["sensor"], suffixes: ["battery_power"] },
  climate: { domains: ["climate", "switch"], suffixes: ["climate", "a_c_on", "car_on"] },
  ac_switch: { domains: ["switch"], suffixes: ["a_c_on", "climate", "car_on"] },
  battery_heat: { domains: ["switch"], suffixes: ["battery_heat"] },
  cabin_temp: { domains: ["sensor"], suffixes: ["cabin_temperature", "temp_in_car"] },
  exterior_temp: { domains: ["sensor"], suffixes: ["exterior_temperature", "temp_out_car"] },
  doors: { domains: ["binary_sensor"], suffixes: ["doors", "is_any_door_open"] },
  windows: { domains: ["binary_sensor"], suffixes: ["windows", "is_any_window_open"] },
  speed: { domains: ["sensor"], suffixes: ["speed"] },
  odometer: { domains: ["sensor"], suffixes: ["odometer", "total_mileage", "total_mileage_v2"] },
  lock: { domains: ["lock"], suffixes: ["lock"] },
  online: { domains: ["binary_sensor", "sensor"], suffixes: ["online", "is_online"] },
  tire_fl: { domains: ["sensor"], suffixes: ["front_left_tire_pressure", "left_front_tire_pressure"] },
  tire_fr: { domains: ["sensor"], suffixes: ["front_right_tire_pressure", "right_front_tire_pressure"] },
  tire_rl: { domains: ["sensor"], suffixes: ["rear_left_tire_pressure", "left_rear_tire_pressure"] },
  tire_rr: { domains: ["sensor"], suffixes: ["rear_right_tire_pressure", "right_rear_tire_pressure"] },
  location: { domains: ["device_tracker"], suffixes: ["location"] },
  flash_lights: { domains: ["button"], suffixes: ["flash_lights"] },
  find_car: { domains: ["button"], suffixes: ["find_car"] },
  close_windows: { domains: ["button"], suffixes: ["close_windows"] },
  driver_seat_heat: { domains: ["select"], suffixes: ["driver_seat_heat", "driver_seat_heating"] },
  passenger_seat_heat: { domains: ["select"], suffixes: ["passenger_seat_heat", "passenger_seat_heating"] },
  rear_left_seat_heat: { domains: ["select"], suffixes: ["rear_left_seat_heat", "rear_left_seat_heating"] },
  rear_right_seat_heat: { domains: ["select"], suffixes: ["rear_right_seat_heat", "rear_right_seat_heating"] },
  tirepressure_system: { domains: ["binary_sensor"], suffixes: ["tirepressure_system"] },
  rapid_tire_leak: { domains: ["binary_sensor"], suffixes: ["rapid_tire_leak"] },
  left_front_tire_status: { domains: ["binary_sensor"], suffixes: ["left_front_tire_status"] },
  right_front_tire_status: { domains: ["binary_sensor"], suffixes: ["right_front_tire_status"] },
  left_rear_tire_status: { domains: ["binary_sensor"], suffixes: ["left_rear_tire_status"] },
  right_rear_tire_status: { domains: ["binary_sensor"], suffixes: ["right_rear_tire_status"] },
  abs_warning: { domains: ["binary_sensor"], suffixes: ["abs_warning"] },
  braking_system: { domains: ["binary_sensor"], suffixes: ["braking_system"] },
  steering_system: { domains: ["binary_sensor"], suffixes: ["steering_system"] },
  charging_system: { domains: ["binary_sensor"], suffixes: ["charging_system"] },
  srs: { domains: ["binary_sensor"], suffixes: ["srs"] },
  svs: { domains: ["binary_sensor"], suffixes: ["svs"] },
};

const DEFAULT_CONFIG = {
  type: `custom:${CARD_TYPE}`,
  vehicle_profile: "atto3",
  title: "BYD",
  entity_prefix: "",
  image_url: "",
  image_base_path: "/local/byd-card/pic",
  i18n_base_path: "/local/byd-card/i18n",
  show_tires: true,
  show_actions: true,
  show_climate: true,
  show_vehicle: true,
  show_location: true,
  refresh_interval_seconds: 25,
  language: "he",
  category_order: ["summary", "climate", "vehicle", "tires", "location", "actions"],
  entities: {},
};

const CATEGORY_DEFS = [
  { key: "summary", labelKey: "category_summary", icon: "mdi:car-electric" },
  { key: "climate", labelKey: "category_climate", icon: "mdi:air-conditioner" },
  { key: "vehicle", labelKey: "category_vehicle", icon: "mdi:car-info" },
  { key: "tires", labelKey: "category_tires", icon: "mdi:car-tire-alert" },
  { key: "location", labelKey: "category_location", icon: "mdi:map-marker-radius" },
  { key: "actions", labelKey: "category_actions", icon: "mdi:gesture-tap-button" },
];

const TRANSLATION_CACHE = new Map();
const FALLBACK_I18N = {
  yes: "כן",
  no: "לא",
  not_available: "לא זמין",
  locked: "נעול",
  unlocked: "פתוח",
  battery: "סוללה",
  battery_status: "סטטוס סוללה",
  charging: "בטעינה",
  not_charging: "לא בטעינה",
  charging_active: "הרכב בטעינה",
  charging_inactive: "לא בטעינה",
  power: "הספק",
  range_km: "ק״מ",
  speed_kmh: "קמ״ש",
  odometer_km: "ק״מ",
  interior_temp: "טמפ׳ פנים",
  exterior_temp: "טמפ׳ חוץ",
  speed: "מהירות",
  odometer: "קילומטראז׳",
  doors: "דלתות",
  windows: "חלונות",
  lock: "נעילה",
  online: "אונליין",
  category_summary: "סיכום",
  category_climate: "אקלים",
  category_vehicle: "רכב",
  category_tires: "צמיגים",
  category_actions: "פעולות מהירות",
  category_location: "מיקום",
  ac: "מזגן",
  battery_heat: "חימום סוללה",
  flash_lights: "הבהוב אורות",
  find_car: "מצא רכב",
  close_windows: "סגור חלונות",
  seat_heating: "חימום מושבים",
  seat_driver: "נהג",
  seat_passenger: "נוסע",
  seat_rear_left: "אחורי שמאל",
  seat_rear_right: "אחורי ימין",
  level_off: "כבוי",
  level_low: "נמוך",
  level_high: "גבוה",
  front_left: "קדמי שמאל",
  front_right: "קדמי ימין",
  rear_left: "אחורי שמאל",
  rear_right: "אחורי ימין",
  latitude: "קו רוחב",
  longitude: "קו אורך",
  gps_speed: "מהירות GPS",
  settings_title: "BYD 3D Card",
  settings_hint: "בחר פרופיל רכב, שפה וקטגוריות תצוגה.",
  settings_card_title: "כותרת",
  settings_prefix: "Entity Prefix",
  settings_prefix_help: "לדוגמה: byd_atto_3 עבור sensor.byd_atto_3_battery_level",
  settings_image_url: "תמונת רכב (אופציונלי)",
  settings_image_base_path: "נתיב בסיס לתמונות פרופיל",
  settings_i18n_base_path: "נתיב בסיס לקבצי שפה",
  settings_refresh_interval: "רענון סטייט (שניות)",
  settings_refresh_interval_hint: "כמה מהר לעדכן חיווי מהשרת (מומלץ 20-30)",
  settings_language: "שפה",
  settings_categories: "קטגוריות",
  settings_category_order: "סדר קטגוריות",
  settings_category_order_hint: "גרור ושחרר כדי לשנות את הסדר בכפתורי הקטגוריות",
  settings_show_tires: "הצג צמיגים",
  settings_show_actions: "הצג פעולות מהירות",
  settings_show_climate: "הצג אקלים",
  settings_show_vehicle: "הצג רכב",
  settings_show_location: "הצג מיקום",
  climate_controls: "שליטת מזגן",
  turn_on: "הדלק",
  turn_off: "כבה",
  target_temp: "טמפ׳ יעד",
  max_cool: "מקסימום קירור",
  max_heat: "מקסימום חימום",
  comfort_21: "נוחות 21°",
  alert_header: "התראת רכב",
  alert_more: "תקלות נוספות",
  alert_tire_pressure_low: "לחץ אוויר נמוך",
  alert_tire_pressure_critical: "לחץ אוויר קריטי",
  alert_system_fault: "תקלה במערכת",
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toNumber(value) {
  if (value === null || value === undefined || value === "unknown" || value === "unavailable") {
    return null;
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function fireConfigChanged(element, config) {
  const event = new Event("config-changed", { bubbles: true, composed: true });
  event.detail = { config };
  element.dispatchEvent(event);
}

class Byd3DCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement("byd-3d-card-editor");
  }

  static getStubConfig() {
    return {
      vehicle_profile: "atto3",
      title: "BYD ATTO 3",
      entity_prefix: "byd_atto_3",
    };
  }

  setConfig(config) {
    this._config = { ...DEFAULT_CONFIG, ...config, entities: { ...(config.entities || {}) } };
    this._config.category_order = this._normalizeCategoryOrder(this._config.category_order);
    this._config.refresh_interval_seconds = this._normalizeRefreshInterval(this._config.refresh_interval_seconds);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    this._restartAutoRefreshLoop();
    const storedCategory = this._loadStoredCategory();
    this._activeCategory = storedCategory || this._activeCategory || "summary";
    if (!this._seatUiOverrides) {
      this._seatUiOverrides = {};
    }
    this._translations = FALLBACK_I18N;
    this._loadTranslations();
    this._render();
  }

  _normalizeCategoryOrder(order) {
    const base = CATEGORY_DEFS.map((c) => c.key);
    if (!Array.isArray(order) || order.length === 0) return [...base];
    const cleaned = order.filter((k) => base.includes(k));
    for (const k of base) {
      if (!cleaned.includes(k)) cleaned.push(k);
    }
    return cleaned;
  }

  _storageCategoryKey() {
    const prefix = this._config?.entity_prefix || "auto";
    const profile = this._config?.vehicle_profile || "default";
    const title = this._config?.title || "byd";
    const path = window?.location?.pathname || "";
    return `byd3d:last-category:${path}:${profile}:${prefix}:${title}`;
  }

  _loadStoredCategory() {
    try {
      const key = this._storageCategoryKey();
      const stored = window.localStorage.getItem(key);
      if (!stored) return null;
      const valid = CATEGORY_DEFS.some((cat) => cat.key === stored);
      return valid ? stored : null;
    } catch (_err) {
      return null;
    }
  }

  _persistActiveCategory(key) {
    try {
      if (!key) return;
      const valid = CATEGORY_DEFS.some((cat) => cat.key === key);
      if (!valid) return;
      window.localStorage.setItem(this._storageCategoryKey(), key);
    } catch (_err) {
      // no-op: storage might be blocked by browser policy
    }
  }

  _getRefreshEntityIds() {
    if (!this._config) return [];
    const logicalKeys = [
      "battery",
      "range",
      "charging",
      "battery_power",
      "climate",
      "ac_switch",
      "battery_heat",
      "driver_seat_heat",
      "passenger_seat_heat",
      "rear_left_seat_heat",
      "rear_right_seat_heat",
      "doors",
      "windows",
      "lock",
      "online",
      "tire_fl",
      "tire_fr",
      "tire_rl",
      "tire_rr",
      "location",
    ];
    const ids = logicalKeys
      .map((key) => this._resolveEntity(key))
      .filter(Boolean);
    return [...new Set(ids)];
  }

  _refreshStateEntities(force = false) {
    if (!this._hass || !this._config) return;
    const now = Date.now();
    if (!force && this._lastRefreshRequestTs && now - this._lastRefreshRequestTs < 7000) {
      return;
    }
    const entityIds = this._getRefreshEntityIds();
    if (!entityIds.length) return;
    this._lastRefreshRequestTs = now;
    this._hass.callService("homeassistant", "update_entity", {
      entity_id: entityIds,
    });
  }

  _normalizeRefreshInterval(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 25;
    return clamp(Math.round(n), 8, 120);
  }

  _getAutoRefreshIntervalMs() {
    const seconds = this._normalizeRefreshInterval(this._config?.refresh_interval_seconds);
    return seconds * 1000;
  }

  _schedulePostActionRefresh() {
    if (this._postActionTimers?.length) {
      this._postActionTimers.forEach((timer) => window.clearTimeout(timer));
    }
    this._postActionTimers = [1200, 4200, 9000].map((delay) =>
      window.setTimeout(() => this._refreshStateEntities(true), delay)
    );
  }

  _startAutoRefreshLoop() {
    if (this._autoRefreshStarted) return;
    this._autoRefreshStarted = true;
    this._onVisibilityRefresh = () => {
      if (document.visibilityState === "visible") this._refreshStateEntities(true);
    };
    document.addEventListener("visibilitychange", this._onVisibilityRefresh);
    this._autoRefreshTimer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        this._refreshStateEntities(false);
      }
    }, this._getAutoRefreshIntervalMs());
    this._refreshStateEntities(true);
  }

  _stopAutoRefreshLoop() {
    this._autoRefreshStarted = false;
    if (this._autoRefreshTimer) {
      window.clearInterval(this._autoRefreshTimer);
      this._autoRefreshTimer = null;
    }
    if (this._onVisibilityRefresh) {
      document.removeEventListener("visibilitychange", this._onVisibilityRefresh);
      this._onVisibilityRefresh = null;
    }
    if (this._postActionTimers?.length) {
      this._postActionTimers.forEach((timer) => window.clearTimeout(timer));
      this._postActionTimers = [];
    }
  }

  _restartAutoRefreshLoop() {
    if (!this._autoRefreshStarted) return;
    this._stopAutoRefreshLoop();
    this._startAutoRefreshLoop();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  connectedCallback() {
    this._startAutoRefreshLoop();
  }

  disconnectedCallback() {
    this._stopAutoRefreshLoop();
  }

  getCardSize() {
    return 8;
  }

  getGridOptions() {
    return { rows: 8, columns: 12, min_rows: 6 };
  }

  _resolvePrefix() {
    if (this._config.entity_prefix) return this._config.entity_prefix;
    if (!this._hass) return "";
    const states = Object.keys(this._hass.states);
    const probe = states.find((eid) => /^sensor\..+_(battery_level|elec_percent)$/.test(eid));
    if (!probe) return "";
    const [domain, objectId] = probe.split(".");
    if (domain !== "sensor" || !objectId) return "";
    return objectId.replace(/_(battery_level|elec_percent)$/, "");
  }

  _resolveEntity(logicalKey) {
    const override = this._config.entities?.[logicalKey];
    if (override) return override;
    if (!this._hass) return null;

    const hint = ENTITY_HINTS[logicalKey];
    if (!hint) return null;
    const prefix = this._resolvePrefix();
    const all = this._hass.states;

    if (prefix) {
      for (const domain of hint.domains) {
        for (const suffix of hint.suffixes) {
          const candidate = `${domain}.${prefix}_${suffix}`;
          if (all[candidate]) return candidate;
        }
      }
    }

    // Soft fallback for users with renamed object ids.
    const ids = Object.keys(all);
    for (const domain of hint.domains) {
      const pool = ids.filter((id) => id.startsWith(`${domain}.`));
      for (const suffix of hint.suffixes) {
        const found = pool.find((id) => id.endsWith(`_${suffix}`));
        if (found) return found;
      }
    }
    return null;
  }

  _profileImage(profileKey) {
    const basePath = (this._config.image_base_path || "/local/byd-card/pic").replace(/\/$/, "");
    const localMap = {
      atto3: `${basePath}/bydatoo3.png`,
      dolphin: `${basePath}/byd_dolphin.png`,
    };
    return localMap[profileKey] || null;
  }

  _language() {
    return this._config?.language || "he";
  }

  _t(key) {
    return this._translations?.[key] || FALLBACK_I18N[key] || key;
  }

  _boolLabel(state) {
    if (state === "on") return this._t("yes");
    if (state === "off") return this._t("no");
    if (state === "locked") return this._t("locked");
    if (state === "unlocked") return this._t("unlocked");
    return this._t("not_available");
  }

  _openClosedLabel(state) {
    if (state === "on" || state === "unlocked") return this._t("unlocked");
    if (state === "off" || state === "locked") return this._t("locked");
    return this._t("not_available");
  }

  _isTruthyState(raw) {
    const value = String(raw || "").trim().toLowerCase();
    if (!value) return false;
    const falseLike = new Set([
      "off",
      "false",
      "0",
      "none",
      "idle",
      "inactive",
      "unknown",
      "unavailable",
      "no_data",
      "none_selected",
      "none_selected_",
      "כבוי",
      "לא פעיל",
    ]);
    if (falseLike.has(value)) return false;
    return true;
  }

  _isClimateActive(raw) {
    const value = String(raw || "").trim().toLowerCase();
    if (!value) return false;
    const activeValues = new Set([
      "on",
      "auto",
      "cool",
      "heat",
      "heat_cool",
      "dry",
      "fan_only",
      "heating",
      "cooling",
      "preheating",
      "ventilation",
    ]);
    if (activeValues.has(value)) return true;
    return this._isTruthyState(value);
  }

  _isSeatHeatActive(raw) {
    const value = String(raw || "").trim().toLowerCase();
    if (!value) return false;
    const inactive = new Set(["off", "0", "none", "no_data", "unknown", "unavailable", "כבוי"]);
    if (inactive.has(value)) return false;
    const active = new Set([
      "on",
      "1",
      "2",
      "3",
      "low",
      "medium",
      "mid",
      "middle",
      "high",
      "נמוך",
      "בינוני",
      "גבוה",
      "חזק",
    ]);
    if (active.has(value)) return true;
    return this._isTruthyState(value);
  }

  async _loadTranslations() {
    const lang = this._language();
    const cacheKey = `${lang}:${this._config.i18n_base_path || ""}`;
    if (TRANSLATION_CACHE.has(cacheKey)) {
      this._translations = TRANSLATION_CACHE.get(cacheKey);
      this._render();
      return;
    }
    const base = (this._config.i18n_base_path || "/local/byd-card/i18n").replace(/\/$/, "");
    try {
      const response = await fetch(`${base}/${lang}.json`, { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      this._translations = { ...FALLBACK_I18N, ...json };
      TRANSLATION_CACHE.set(cacheKey, this._translations);
      this._render();
    } catch (_err) {
      this._translations = FALLBACK_I18N;
      this._render();
    }
  }

  _state(logicalKey) {
    const eid = this._resolveEntity(logicalKey);
    if (!eid || !this._hass?.states[eid]) return null;
    return this._hass.states[eid];
  }

  _callToggle(logicalKey) {
    const eid = this._resolveEntity(logicalKey);
    if (!eid || !this._hass) return;
    const [domain] = eid.split(".");
    if (!domain) return;
    this._hass.callService(domain, "toggle", { entity_id: eid });
    this._schedulePostActionRefresh();
  }

  _callClimatePower(on) {
    const eid = this._resolveEntity("climate");
    if (!eid || !this._hass) return;
    const [domain] = eid.split(".");
    if (domain === "climate") {
      this._hass.callService("climate", "set_hvac_mode", {
        entity_id: eid,
        hvac_mode: on ? "heat_cool" : "off",
      });
      this._schedulePostActionRefresh();
      return;
    }
    this._hass.callService(domain, "toggle", { entity_id: eid });
    this._schedulePostActionRefresh();
  }

  _callClimateSetTemp(temp) {
    const eid = this._resolveEntity("climate");
    if (!eid || !this._hass) return;
    const [domain] = eid.split(".");
    if (domain !== "climate") return;
    this._hass.callService("climate", "set_temperature", {
      entity_id: eid,
      temperature: temp,
    });
    this._schedulePostActionRefresh();
  }

  _callClimatePreset(presetMode) {
    const eid = this._resolveEntity("climate");
    if (!eid || !this._hass) return;
    const [domain] = eid.split(".");
    if (domain !== "climate") return;
    this._hass.callService("climate", "set_preset_mode", {
      entity_id: eid,
      preset_mode: presetMode,
    });
    this._schedulePostActionRefresh();
  }

  _callButton(logicalKey) {
    const eid = this._resolveEntity(logicalKey);
    if (!eid || !this._hass) return;
    this._hass.callService("button", "press", { entity_id: eid });
    this._schedulePostActionRefresh();
  }

  _callSelectOption(logicalKey, option) {
    const eid = this._resolveEntity(logicalKey);
    if (!eid || !this._hass) return;
    this._hass.callService("select", "select_option", {
      entity_id: eid,
      option,
    });
    this._schedulePostActionRefresh();
  }

  _handleServiceIndicatorAction(indicatorId) {
    if (!indicatorId) return;
    if (indicatorId === "climate") {
      const climateEid = this._resolveEntity("climate");
      const climateDomain = climateEid?.split(".")[0] || "";
      if (climateDomain === "climate") {
        this._callClimatePower(false);
      } else if (this._resolveEntity("ac_switch")) {
        const acOn = this._isClimateActive(this._state("ac_switch")?.state);
        if (acOn) this._callToggle("ac_switch");
      } else if (climateEid) {
        this._callClimatePower(false);
      }
      return;
    }

    if (indicatorId === "battery_heat") {
      if (this._state("battery_heat")?.state === "on") this._callToggle("battery_heat");
      return;
    }

    if (indicatorId === "seat_heat") {
      const seatKeys = ["driver_seat_heat", "passenger_seat_heat", "rear_left_seat_heat", "rear_right_seat_heat"];
      for (const key of seatKeys) {
        if (this._resolveEntity(key)) {
          this._callSelectOption(key, "off");
          this._seatUiOverrides[key] = { option: "off", ts: Date.now() };
        }
      }
      this._render();
      return;
    }

    if (indicatorId === "windows_open") {
      if (this._resolveEntity("close_windows")) this._callButton("close_windows");
      return;
    }

    if (indicatorId === "lock_open") {
      const lockState = this._state("lock")?.state;
      if (lockState === "unlocked" || lockState === "on") this._callToggle("lock");
    }
  }

  _renderActionButton(key, title, icon, handler) {
    const eid = this._resolveEntity(key);
    if (!eid) return "";
    return `
      <button class="action-btn" data-action="${handler}" data-key="${key}">
        <ha-icon icon="${icon}"></ha-icon>
        <span>${title}</span>
      </button>
    `;
  }

  _metric(label, value) {
    return `<div class="metric"><label>${label}</label><strong>${value}</strong></div>`;
  }

  _category(title, content, options = {}) {
    if (!content || content.trim() === "") return "";
    const titleClass = options.titleClass || "";
    const icon = options.icon
      ? `<span class="category-title-row"><ha-icon class="category-title-icon" icon="${options.icon}"></ha-icon><span class="category-title-text">${title}</span><span class="category-title-spacer"></span></span>`
      : title;
    return `
      <section class="category">
        <h3 class="${titleClass}">${icon}</h3>
        ${content}
      </section>
    `;
  }

  _renderSeatHeatControl(logicalKey, label) {
    const seatState = this._state(logicalKey);
    if (!seatState) return "";
    const override = this._seatUiOverrides?.[logicalKey];
    const overrideIsFresh = override && Date.now() - override.ts < 12000;
    const current = String(
      (overrideIsFresh ? override.option : seatState.state) || "off"
    ).toLowerCase();
    const options = ["off", "low", "high"];
    const levelLabel = (opt) => this._t(`level_${opt}`);
    return `
      <div class="seat-control">
        <div class="seat-title">${label}</div>
        <div class="seat-levels">
          ${options
            .map((opt) => {
              const active = current === opt ? "active" : "";
              return `<button class="seat-level ${active} level-${opt}" data-seat="${logicalKey}" data-option="${opt}">${levelLabel(opt)}</button>`;
            })
            .join("")}
        </div>
      </div>
    `;
  }

  _flashButtonFeedback(btn) {
    if (!btn) return;
    btn.classList.remove("btn-feedback");
    // Force restart animation when repeatedly clicking the same button.
    // eslint-disable-next-line no-unused-expressions
    btn.offsetWidth;
    btn.classList.add("btn-feedback");
    window.setTimeout(() => btn.classList.remove("btn-feedback"), 520);
  }

  _render() {
    if (!this.shadowRoot) return;
    if (!this._config) return;

    const profile = VEHICLE_PROFILES[this._config.vehicle_profile] || VEHICLE_PROFILES.atto3;
    const title = this._config.title || profile.label;
    const imageUrl = this._config.image_url || this._profileImage(this._config.vehicle_profile) || profile.image;

    const batteryState = this._state("battery");
    const rangeState = this._state("range");
    const chargingState = this._state("charging");
    const batteryPowerState = this._state("battery_power");
    const cabinTempState = this._state("cabin_temp");
    const exteriorTempState = this._state("exterior_temp");
    const speedState = this._state("speed");
    const odoState = this._state("odometer");
    const doorsState = this._state("doors");
    const windowsState = this._state("windows");
    const lockState = this._state("lock");
    const onlineState = this._state("online");
    const climateState = this._state("climate");
    const batteryHeatState = this._state("battery_heat");
    const locationState = this._state("location");
    const tirepressureSystemState = this._state("tirepressure_system");
    const rapidTireLeakState = this._state("rapid_tire_leak");
    const lfTireStatusState = this._state("left_front_tire_status");
    const rfTireStatusState = this._state("right_front_tire_status");
    const lrTireStatusState = this._state("left_rear_tire_status");
    const rrTireStatusState = this._state("right_rear_tire_status");
    const absWarningState = this._state("abs_warning");
    const brakingSystemState = this._state("braking_system");
    const steeringSystemState = this._state("steering_system");
    const chargingSystemState = this._state("charging_system");
    const srsState = this._state("srs");
    const svsState = this._state("svs");
    const seatHeatSection = [
      this._renderSeatHeatControl("driver_seat_heat", this._t("seat_driver")),
      this._renderSeatHeatControl("passenger_seat_heat", this._t("seat_passenger")),
      this._renderSeatHeatControl("rear_left_seat_heat", this._t("seat_rear_left")),
      this._renderSeatHeatControl("rear_right_seat_heat", this._t("seat_rear_right")),
    ]
      .filter(Boolean)
      .join("");

    const acSwitchState = this._state("ac_switch");
    const hasAcSwitchEntity = Boolean(this._resolveEntity("ac_switch"));
    const climateIndicatorIsOn = hasAcSwitchEntity ? this._isClimateActive(acSwitchState?.state) : false;
    const climateIsOn = this._isClimateActive(climateState?.state) || this._isClimateActive(acSwitchState?.state);
    const climateTempRaw = toNumber(climateState?.attributes?.temperature);
    const climateMin = toNumber(climateState?.attributes?.min_temp) ?? 15;
    const climateMax = toNumber(climateState?.attributes?.max_temp) ?? 31;
    const climateTemp = climateTempRaw ?? 21;
    const presetMode = String(climateState?.attributes?.preset_mode || "").toLowerCase();
    const seatKeys = ["driver_seat_heat", "passenger_seat_heat", "rear_left_seat_heat", "rear_right_seat_heat"];
    const seatHeatStates = seatKeys
      .map((key) => {
        const override = this._seatUiOverrides?.[key];
        const overrideIsFresh = override && Date.now() - override.ts < 12000;
        return overrideIsFresh ? override.option : this._state(key)?.state;
      })
      .filter((v) => v !== undefined && v !== null && String(v).trim() !== "");
    const seatHeatActive = seatHeatStates.some((v) => this._isSeatHeatActive(v));

    const battery = clamp(toNumber(batteryState?.state) ?? 0, 0, 100);
    const range = toNumber(rangeState?.state);
    const isCharging = chargingState?.state === "on";
    const lowBattery = battery < 20;
    const powerRaw = batteryPowerState?.state;
    const powerNumeric = toNumber(powerRaw);
    const powerUnit = batteryPowerState?.attributes?.unit_of_measurement || "W";
    let powerDisplay = "-";
    if (powerNumeric !== null) {
      powerDisplay = `${powerNumeric.toFixed(1)} ${powerUnit}`;
    } else if (
      powerRaw !== undefined &&
      powerRaw !== null &&
      powerRaw !== "unknown" &&
      powerRaw !== "unavailable"
    ) {
      powerDisplay = `${powerRaw} ${powerUnit}`;
    }
    const chargingHeadLabel = isCharging
      ? `<span class="charging-label"><span class="charging-icon">⚡</span><span class="charging-text">${this._t("charging_active")}</span></span>`
      : this._t("battery_status");
    const powerMarkup = `<span class="power-pair"><span class="power-value">${powerDisplay}</span></span>`;
    const idleInBarMarkup = !isCharging ? `<div class="battery-inline-state">${this._t("not_charging")}</div>` : "";

    const tireKeys = [
      ["tire_fl", this._t("front_left")],
      ["tire_fr", this._t("front_right")],
      ["tire_rl", this._t("rear_left")],
      ["tire_rr", this._t("rear_right")],
    ];

    const tireCards = tireKeys
      .map(([key, label]) => {
        const s = this._state(key);
        if (!s) return "";
        const kpa = toNumber(s.state);
        const psi = kpa === null ? null : kpa * 0.145038;
        const color = psi === null ? "#8aa0b5" : psi < 28 ? "#ff5a4d" : psi < 30 ? "#ffb252" : "#7ce89e";
        return `
          <div class="tire-card ${psi !== null && psi < 28 ? "warn" : ""}">
            <div class="tire-title">${label}</div>
            <div class="tire-value" style="color:${color}">${psi === null ? "-" : psi.toFixed(1)} PSI</div>
          </div>
        `;
      })
      .join("");

    const alerts = [];
    const addAlert = (message) => {
      if (message && !alerts.includes(message)) alerts.push(message);
    };
    const tireWarn = (label, psi) => {
      if (psi === null) return;
      if (psi < 28) addAlert(`${this._t("alert_tire_pressure_critical")} - ${label}`);
      else if (psi < 30) addAlert(`${this._t("alert_tire_pressure_low")} - ${label}`);
    };

    const flPsi = (() => {
      const s = this._state("tire_fl");
      const kpa = toNumber(s?.state);
      return kpa === null ? null : kpa * 0.145038;
    })();
    const frPsi = (() => {
      const s = this._state("tire_fr");
      const kpa = toNumber(s?.state);
      return kpa === null ? null : kpa * 0.145038;
    })();
    const rlPsi = (() => {
      const s = this._state("tire_rl");
      const kpa = toNumber(s?.state);
      return kpa === null ? null : kpa * 0.145038;
    })();
    const rrPsi = (() => {
      const s = this._state("tire_rr");
      const kpa = toNumber(s?.state);
      return kpa === null ? null : kpa * 0.145038;
    })();

    tireWarn(this._t("front_left"), flPsi);
    tireWarn(this._t("front_right"), frPsi);
    tireWarn(this._t("rear_left"), rlPsi);
    tireWarn(this._t("rear_right"), rrPsi);

    const boolFaultState = (s) => s?.state === "on";
    if (boolFaultState(rapidTireLeakState)) addAlert(`${this._t("alert_system_fault")} - ${this._t("rapid_tire_leak")}`);
    if (boolFaultState(tirepressureSystemState)) addAlert(`${this._t("alert_system_fault")} - TPMS`);
    if (boolFaultState(lfTireStatusState)) addAlert(`${this._t("alert_system_fault")} - ${this._t("front_left")}`);
    if (boolFaultState(rfTireStatusState)) addAlert(`${this._t("alert_system_fault")} - ${this._t("front_right")}`);
    if (boolFaultState(lrTireStatusState)) addAlert(`${this._t("alert_system_fault")} - ${this._t("rear_left")}`);
    if (boolFaultState(rrTireStatusState)) addAlert(`${this._t("alert_system_fault")} - ${this._t("rear_right")}`);
    if (boolFaultState(absWarningState)) addAlert(`${this._t("alert_system_fault")} - ABS`);
    if (boolFaultState(brakingSystemState)) addAlert(`${this._t("alert_system_fault")} - Brake`);
    if (boolFaultState(steeringSystemState)) addAlert(`${this._t("alert_system_fault")} - Steering`);
    if (boolFaultState(chargingSystemState)) addAlert(`${this._t("alert_system_fault")} - Charging`);
    if (boolFaultState(srsState)) addAlert(`${this._t("alert_system_fault")} - SRS`);
    if (boolFaultState(svsState)) addAlert(`${this._t("alert_system_fault")} - SVS`);

    const alertJoined = alerts.map((msg) => `⚠ ${msg}`).join("   •   ");
    const alertRibbon = alerts.length
      ? `
        <div class="alert-ribbon ${alerts.length > 1 ? "scrolling" : ""}">
          <div class="alert-ribbon-inner">
            <div class="alert-ribbon-head">
              <span class="alert-ribbon-sign">⚠</span>
              <span>${this._t("alert_header")}</span>
            </div>
            <div class="alert-ribbon-body">
              ${
                alerts.length > 1
                  ? `
                <div class="alert-marquee">
                  <div class="alert-marquee-track">
                    <span class="alert-marquee-line">${alertJoined}</span>
                    <span class="alert-marquee-line" aria-hidden="true">${alertJoined}</span>
                  </div>
                </div>
              `
                  : `<div class="alert-single">⚠ ${alerts[0]}</div>`
              }
            </div>
          </div>
        </div>
      `
      : "";

    const serviceIndicators = [];
    const pushIndicator = (id, icon, label, tone = "info", actionable = false) => {
      if (serviceIndicators.some((i) => i.id === id)) return;
      serviceIndicators.push({ id, icon, label, tone, actionable });
    };
    const canControlClimate = Boolean(this._resolveEntity("climate") || this._resolveEntity("ac_switch"));
    const canToggleBatteryHeat = Boolean(this._resolveEntity("battery_heat"));
    const canControlSeatHeat = ["driver_seat_heat", "passenger_seat_heat", "rear_left_seat_heat", "rear_right_seat_heat"].some((key) =>
      Boolean(this._resolveEntity(key))
    );
    const canCloseWindows = Boolean(this._resolveEntity("close_windows"));
    const canToggleLock = Boolean(this._resolveEntity("lock"));
    if (climateIndicatorIsOn) pushIndicator("climate", "mdi:air-conditioner", this._t("ac"), "cold", canControlClimate);
    if (batteryHeatState?.state === "on") {
      pushIndicator("battery_heat", "mdi:heat-wave", this._t("battery_heat"), "hot", canToggleBatteryHeat);
    }
    if (seatHeatActive) {
      pushIndicator("seat_heat", "mdi:car-seat-heater", this._t("seat_heating"), "hot", canControlSeatHeat);
    }
    if (doorsState?.state === "on") {
      pushIndicator("doors_open", "mdi:car-door", this._t("doors"), "warn");
    }
    if (windowsState?.state === "on") {
      pushIndicator("windows_open", "mdi:window-open", this._t("windows"), "warn", canCloseWindows);
    }
    if (lockState?.state === "unlocked") {
      pushIndicator("lock_open", "mdi:lock-open-variant-outline", this._t("lock"), "warn", canToggleLock);
    }
    if (chargingState?.state === "on") {
      pushIndicator("charging", "mdi:ev-station", this._t("charging"), "cold");
    }
    const visibleServiceIndicators = serviceIndicators.slice(0, 3);
    const heroBatteryOverlay = `
      <div class="hero-battery-badge ${lowBattery ? "low" : ""}">
        <span class="hero-battery-label">${this._t("battery_status")}</span>
        <span class="hero-battery-value">${battery.toFixed(0)}%</span>
      </div>
    `;
    const serviceOverlay = visibleServiceIndicators.length
      ? `
        <div class="hero-services-grid">
          ${visibleServiceIndicators
            .map(
              (item) => `
                <div
                  class="hero-service-item tone-${item.tone} ${item.actionable ? "actionable" : "readonly"}"
                  title="${item.label}"
                  data-indicator="${item.id}"
                >
                  <ha-icon icon="${item.icon}"></ha-icon>
                </div>
              `
            )
            .join("")}
        </div>
      `
      : "";

    const summaryMetrics = `
      <div class="metrics-grid">
        ${this._metric(this._t("interior_temp"), `${cabinTempState?.state ?? "-"}°C`)}
        ${this._metric(this._t("exterior_temp"), `${exteriorTempState?.state ?? "-"}°C`)}
        ${this._metric(this._t("speed"), `${speedState?.state ?? "-"} ${this._t("speed_kmh")}`)}
        ${this._metric(this._t("odometer"), `${odoState?.state ?? "-"} ${this._t("odometer_km")}`)}
      </div>
    `;

    const summaryCategory = this._category(
      this._t("category_summary"),
      `
      <div class="panel">
        <div class="battery-head">
          <span class="battery-head-power">${powerMarkup}</span>
          <span class="battery-head-status">${chargingHeadLabel}</span>
        </div>
        <div class="battery-row">
          <div class="battery-shell ${isCharging ? "is-charging" : ""}">
            <div class="battery-fill ${isCharging ? "charging" : ""}" style="width:${battery}%"></div>
            <div class="battery-gloss"></div>
            ${idleInBarMarkup}
          </div>
          <div class="battery-percent">${battery.toFixed(0)}%</div>
        </div>
        <div class="battery-range">${range === null ? "-" : range.toFixed(0)} ${this._t("range_km")}</div>
        ${isCharging ? `<div class="battery-sub"><span class="charge-state">${this._t("charging")}</span></div>` : ""}
      </div>
      ${summaryMetrics}
      `,
      { titleClass: "category-title-main", icon: "mdi:car-electric" }
    );

    const climateCategory = this._config.show_climate
      ? this._category(
          this._t("category_climate"),
          `
            <div class="metrics-grid">
              ${this._metric(this._t("ac"), this._boolLabel(climateState?.state))}
              ${this._metric(this._t("battery_heat"), this._boolLabel(batteryHeatState?.state))}
              ${this._metric(this._t("interior_temp"), `${cabinTempState?.state ?? "-"}°C`)}
              ${this._metric(this._t("exterior_temp"), `${exteriorTempState?.state ?? "-"}°C`)}
            </div>
            <div class="climate-controls">
              <div class="climate-row">
                <button class="climate-btn ${climateIsOn ? "on" : ""}" data-climate-action="power">
                  ${climateIsOn ? this._t("turn_off") : this._t("turn_on")}
                </button>
                <div class="target-box">
                  <span>${this._t("target_temp")}</span>
                  <strong>${climateTemp.toFixed(0)}°C</strong>
                </div>
              </div>
              <div class="climate-row">
                <button class="climate-btn" data-climate-action="temp_down">-</button>
                <button class="climate-btn" data-climate-action="temp_up">+</button>
                <button class="climate-btn ${presetMode === "max_cool" ? "active-cool" : ""}" data-climate-action="preset_cool">${this._t("max_cool")}</button>
                <button class="climate-btn ${presetMode === "max_heat" ? "active-heat" : ""}" data-climate-action="preset_heat">${this._t("max_heat")}</button>
                <button class="climate-btn" data-climate-action="comfort_21">${this._t("comfort_21")}</button>
              </div>
            </div>
            ${
              seatHeatSection
                ? `
            <div class="seat-wrap">
              <div class="seat-header"><ha-icon icon="mdi:car-seat-heater"></ha-icon><span>${this._t("seat_heating")}</span></div>
              <div class="seat-grid">${seatHeatSection}</div>
            </div>
            `
                : ""
            }
          `
        , { icon: "mdi:air-conditioner" })
      : "";

    const vehicleCategory = this._config.show_vehicle
      ? this._category(
          this._t("category_vehicle"),
          `
              <div class="metrics-grid">
              ${this._metric(this._t("doors"), this._openClosedLabel(doorsState?.state))}
              ${this._metric(this._t("windows"), this._openClosedLabel(windowsState?.state))}
              ${this._metric(this._t("lock"), this._boolLabel(lockState?.state))}
              ${this._metric(this._t("online"), this._boolLabel(onlineState?.state))}
              ${this._metric(this._t("speed"), `${speedState?.state ?? "-"} ${this._t("speed_kmh")}`)}
              ${this._metric(this._t("odometer"), `${odoState?.state ?? "-"} ${this._t("odometer_km")}`)}
            </div>
          `
        , { icon: "mdi:car-info" })
      : "";

    const tiresCategory =
      this._config.show_tires && tireCards
        ? this._category(this._t("category_tires"), `<div class="tires">${tireCards}</div>`, { icon: "mdi:car-tire-alert" })
        : "";

    const actionsCategory = this._config.show_actions
      ? this._category(
          this._t("category_actions"),
          `
            <div class="actions">
              ${this._renderActionButton("lock", this._t("lock"), "mdi:lock", "toggle")}
              ${this._renderActionButton("climate", this._t("ac"), "mdi:air-conditioner", "toggle")}
              ${this._renderActionButton("battery_heat", this._t("battery_heat"), "mdi:heat-wave", "toggle")}
              ${this._renderActionButton("flash_lights", this._t("flash_lights"), "mdi:car-light-high", "press")}
              ${this._renderActionButton("find_car", this._t("find_car"), "mdi:car-search", "press")}
              ${this._renderActionButton("close_windows", this._t("close_windows"), "mdi:window-closed-variant", "press")}
            </div>
          `
        , { icon: "mdi:gesture-tap-button" })
      : "";

    const locationCategory =
      this._config.show_location && locationState
        ? this._category(
            this._t("category_location"),
            `
              <div class="metrics-grid">
                ${this._metric(this._t("latitude"), locationState.attributes?.latitude ?? "-")}
                ${this._metric(this._t("longitude"), locationState.attributes?.longitude ?? "-")}
                ${this._metric(this._t("gps_speed"), locationState.attributes?.gps_speed ?? "-")}
                ${this._metric(this._t("online"), this._boolLabel(onlineState?.state))}
              </div>
            `
          , { icon: "mdi:map-marker-radius" })
        : "";

    const categoryTabsRaw = [
      { key: "summary", label: this._t("category_summary"), icon: "mdi:car-electric", content: summaryCategory, enabled: true },
      { key: "climate", label: this._t("category_climate"), icon: "mdi:air-conditioner", content: climateCategory, enabled: this._config.show_climate },
      { key: "vehicle", label: this._t("category_vehicle"), icon: "mdi:car-info", content: vehicleCategory, enabled: this._config.show_vehicle },
      { key: "tires", label: this._t("category_tires"), icon: "mdi:car-tire-alert", content: tiresCategory, enabled: this._config.show_tires },
      { key: "location", label: this._t("category_location"), icon: "mdi:map-marker-radius", content: locationCategory, enabled: this._config.show_location },
      { key: "actions", label: this._t("category_actions"), icon: "mdi:gesture-tap-button", content: actionsCategory, enabled: this._config.show_actions },
    ];
    const order = this._normalizeCategoryOrder(this._config.category_order);
    const categoryMap = new Map(categoryTabsRaw.map((t) => [t.key, t]));
    const categoryTabs = order.map((k) => categoryMap.get(k)).filter(Boolean);
    const visibleTabs = categoryTabs.filter((tab) => tab.enabled && tab.content);
    if (!visibleTabs.some((tab) => tab.key === this._activeCategory)) {
      this._activeCategory = visibleTabs[0]?.key || "summary";
    }
    const activeTab = visibleTabs.find((tab) => tab.key === this._activeCategory) || visibleTabs[0];
    this._persistActiveCategory(activeTab?.key);
    const activeContent = activeTab?.content || "";

    this.shadowRoot.innerHTML = `
      <ha-card>
        <div class="wrap ${lowBattery ? "low" : ""}">
          <div class="hero-title">${title}</div>
          <div class="hero">
            <img class="car-image" src="${imageUrl}" data-fallback="${profile.image}" alt="${profile.label}" />
            <div class="hero-overlay">
              ${heroBatteryOverlay}
              ${serviceOverlay}
            </div>
          </div>

          ${alertRibbon}

          <div class="category-tabs" role="radiogroup" aria-label="Vehicle categories">
            ${visibleTabs
              .map((tab) => {
                const active = tab.key === this._activeCategory ? "active" : "";
                return `
                  <button class="cat-tab ${active}" data-category="${tab.key}" aria-checked="${tab.key === this._activeCategory ? "true" : "false"}" role="radio">
                    <ha-icon icon="${tab.icon}"></ha-icon>
                    <span>${tab.label}</span>
                  </button>
                `;
              })
              .join("")}
          </div>

          <div class="active-category-content">
            ${activeContent}
          </div>
        </div>
      </ha-card>
      <style>
        :host { display: block; }
        ha-card {
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(150, 178, 210, .34);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.24),
            0 0 0 1px rgba(120,170,220,.12),
            0 28px 70px rgba(0,0,0,.62);
          background: transparent;
        }
        .wrap {
          background:
            radial-gradient(circle at 14% 4%, rgba(58,93,134,.7) 0%, rgba(26,38,55,.95) 44%, rgba(10,14,22,1) 100%);
          padding: 14px;
          color: #fff;
          font-family: "Segoe UI", "SF Pro Text", "Arial", sans-serif;
        }
        .wrap.low {
          background: radial-gradient(circle at 18% 8%, #5e2830 0%, #1a1218 58%, #0a080d 100%);
        }
        .hero-title {
          margin: 2px 4px 10px;
          font-size: clamp(30px, 5.4vw, 60px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: .2px;
          color: #f3f8ff;
          text-shadow: 0 8px 22px rgba(0,0,0,.34);
          text-align: center;
        }
        .hero {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 195px;
          background: #0b1119;
          border: 1px solid rgba(255,255,255,.12);
        }
        .car-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.03);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          display: block;
          padding: 14px;
          background: linear-gradient(180deg, rgba(5,7,10,.12), rgba(5,7,10,.72));
        }
        .hero-services-grid {
          position: absolute;
          top: 12px;
          left: 12px;
          display: grid;
          grid-template-columns: repeat(3, 34px);
          gap: 7px;
          max-width: 130px;
        }
        .hero-service-item {
          width: 34px;
          height: 34px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(186, 219, 246, .26);
          background: linear-gradient(180deg, rgba(20,32,48,.76), rgba(12,18,26,.88));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.12);
        }
        .hero-battery-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          min-width: 106px;
          padding: 7px 10px;
          border-radius: 12px;
          border: 1px solid rgba(126,198,241,.42);
          background: linear-gradient(180deg, rgba(13,24,36,.72), rgba(10,17,26,.86));
          box-shadow: 0 0 18px rgba(76,179,236,.2), inset 0 1px 0 rgba(255,255,255,.15);
          text-align: right;
        }
        .hero-battery-badge.low {
          border-color: rgba(255,126,126,.58);
          box-shadow: 0 0 16px rgba(255,95,95,.22), inset 0 1px 0 rgba(255,255,255,.15);
        }
        .hero-battery-label {
          display: block;
          font-size: 11px;
          font-weight: 800;
          color: rgba(222,241,255,.82);
          line-height: 1.1;
        }
        .hero-battery-value {
          display: block;
          margin-top: 2px;
          font-size: 24px;
          font-weight: 900;
          line-height: 1;
          color: #f4fbff;
          text-shadow: 0 0 12px rgba(121,219,255,.45);
        }
        .hero-service-item ha-icon {
          width: 20px;
          height: 20px;
          color: #d8ecff;
        }
        .hero-service-item.actionable {
          cursor: pointer;
        }
        .hero-service-item.readonly {
          opacity: .74;
        }
        .hero-service-item.actionable:active {
          transform: scale(.96);
        }
        .hero-service-item.tone-cold {
          border-color: rgba(93,201,255,.52);
          box-shadow: 0 0 12px rgba(93,201,255,.24), inset 0 1px 0 rgba(255,255,255,.14);
        }
        .hero-service-item.tone-hot {
          border-color: rgba(255,149,114,.54);
          box-shadow: 0 0 12px rgba(255,149,114,.25), inset 0 1px 0 rgba(255,255,255,.14);
        }
        .hero-service-item.tone-warn {
          border-color: rgba(255,119,109,.6);
          box-shadow: 0 0 12px rgba(255,119,109,.24), inset 0 1px 0 rgba(255,255,255,.14);
        }
        .alert-ribbon {
          margin-top: 10px;
          border-radius: 14px;
          border: 1px solid rgba(255,128,116,.54);
          background: linear-gradient(180deg, rgba(124,25,25,.30), rgba(65,13,13,.38));
          box-shadow: 0 0 18px rgba(255,97,87,.20), inset 0 1px 0 rgba(255,255,255,.14);
          overflow: hidden;
        }
        .alert-ribbon-inner {
          padding: 6px 10px;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: 8px;
        }
        .alert-ribbon-head {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ffe2de;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .5px;
          margin-bottom: 0;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .alert-ribbon-body {
          min-width: 0;
        }
        .alert-ribbon-sign {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          font-size: 13px;
          line-height: 1;
          color: #ffc1bb;
          transform: translateY(-0.5px);
        }
        .alert-single {
          color: #fff4f2;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.2;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .alert-marquee {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          border-radius: 8px;
          background: rgba(0,0,0,.16);
          border: 1px solid rgba(255,154,144,.24);
        }
        .alert-marquee-track {
          display: inline-flex;
          align-items: center;
          min-width: max-content;
          gap: 24px;
          padding: 4px 0;
          animation: alert-scroll 18s linear infinite;
          will-change: transform;
        }
        .alert-marquee-line {
          color: #fff4f2;
          font-size: 13px;
          font-weight: 800;
          padding-inline: 8px;
          line-height: 1.2;
        }
        .panel {
          border-radius: 20px;
          padding: 14px;
          background:
            radial-gradient(circle at 85% 20%, rgba(93, 210, 255, .18), transparent 36%),
            radial-gradient(circle at 16% 60%, rgba(53, 137, 255, .14), transparent 35%),
            linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.03));
          border: 1px solid rgba(160, 188, 214, .26);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.16),
            inset 0 -20px 28px rgba(0,0,0,.42);
        }
        .category {
          margin-top: 12px;
          border-radius: 18px;
          padding: 10px;
          border: 1px solid rgba(160, 188, 214, .22);
          background:
            radial-gradient(circle at 24% 10%, rgba(58,120,188,.2), transparent 33%),
            linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
        }
        .category-tabs {
          margin-top: 12px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
        }
        .cat-tab {
          appearance: none;
          border: 1px solid rgba(157,190,220,.20);
          background: linear-gradient(180deg, rgba(24,35,49,.86), rgba(15,22,31,.9));
          border-radius: 12px;
          min-height: 44px;
          color: rgba(228,240,252,.92);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: transform .12s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease;
          text-align: center;
        }
        .cat-tab:hover { transform: translateY(-1px); }
        .cat-tab ha-icon {
          width: 16px;
          height: 16px;
          color: rgba(173,221,255,.92);
        }
        .cat-tab span {
          text-align: center;
          display: inline-block;
          width: 100%;
        }
        .cat-tab.active {
          border-color: rgba(84,194,255,.75);
          background: linear-gradient(180deg, rgba(0,184,255,.20), rgba(0,184,255,.06));
          box-shadow: 0 0 0 1px rgba(84,194,255,.35) inset, 0 10px 24px rgba(20,130,210,.2);
          color: #f4fbff;
        }
        .btn-feedback {
          animation: btn-pulse .45s ease;
        }
        .active-category-content {
          margin-top: 2px;
        }
        .category h3 {
          margin: 2px 2px 10px;
          font-size: 22px;
          text-transform: none;
          letter-spacing: .4px;
          color: rgba(255,255,255,.8);
          text-align: center;
          font-weight: 900;
        }
        .category-title-row {
          display: grid;
          grid-template-columns: 36px 1fr 36px;
          align-items: start;
          width: 100%;
          gap: 8px;
        }
        .category-title-icon {
          width: 36px;
          height: 36px;
          color: rgba(180, 227, 255, .92);
          filter: drop-shadow(0 0 7px rgba(99, 199, 255, .35));
          justify-self: start;
          align-self: start;
          margin-top: -2px;
        }
        .category-title-text {
          justify-self: center;
          text-align: center;
          line-height: 1.12;
        }
        .category-title-spacer {
          width: 36px;
          height: 36px;
        }
        .category h3.category-title-main {
          text-transform: none;
          letter-spacing: .2px;
          font-size: 32px;
          font-weight: 900;
          color: #f2f8ff;
          text-shadow: 0 2px 12px rgba(0,0,0,.35);
          text-align: center;
        }
        .battery-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }
        .battery-head-status {
          font-size: 20px;
          color: rgba(237,247,255,.97);
          font-weight: 900;
          letter-spacing: .2px;
          text-align: right;
        }
        .battery-head-power {
          font-size: 21px;
          color: rgba(216,244,255,.98);
          font-weight: 900;
          text-align: left;
          text-shadow: 0 0 16px rgba(104,216,255,.45);
          line-height: 1;
        }
        .battery-head-power .power-pair {
          display: inline-flex;
          align-items: baseline;
          gap: 4px;
          direction: ltr;
        }
        .battery-head-power .power-value {
          font-size: 1em;
          font-weight: 900;
          color: inherit;
        }
        .charging-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ecf9ff;
        }
        .charging-icon {
          font-size: 20px;
          line-height: 1;
          text-shadow: 0 0 14px rgba(108, 219, 255, .75);
        }
        .charging-text {
          font-size: 17px;
          font-weight: 900;
          letter-spacing: .3px;
        }
        .battery-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .battery-shell {
          position: relative;
          flex: 1;
          height: 30px;
          border-radius: 999px;
          overflow: hidden;
          background: linear-gradient(180deg, #0a0f17, #1a2430);
          border: 1px solid rgba(188,214,236,.24);
          box-shadow:
            inset 0 4px 8px rgba(255,255,255,.14),
            inset 0 -12px 16px rgba(0,0,0,.72),
            0 0 0 1px rgba(54,118,170,.18);
        }
        .battery-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #6dd9ff 0%, #63d7d3 48%, #78f3b8 100%);
          box-shadow:
            inset 0 2px 8px rgba(255,255,255,.46),
            0 0 24px rgba(121,239,193,.4),
            0 0 22px rgba(105,204,255,.35);
          transition: width .6s ease;
          position: relative;
          overflow: hidden;
        }
        .battery-fill.charging::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(90deg, transparent 0px, transparent 12px, rgba(255,255,255,.35) 13px, rgba(255,255,255,.35) 20px, transparent 32px);
          animation: electric-current 0.7s linear infinite;
        }
        .battery-fill.charging::after {
          content: "";
          position: absolute;
          top: 0;
          left: -40%;
          width: 40%;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.8), rgba(0,229,255,.9), transparent);
          filter: blur(1px);
          animation: charge-wave 1.2s ease-in-out infinite;
        }
        .battery-gloss {
          position: absolute;
          top: 3px;
          left: 4px;
          right: 4px;
          height: 45%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255,255,255,.42), rgba(255,255,255,0));
        }
        .battery-inline-state {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 6;
          font-size: 14px;
          font-weight: 900;
          color: rgba(241,249,255,.96);
          padding: 2px 10px;
          border-radius: 999px;
          background: rgba(8,14,20,.46);
          border: 1px solid rgba(176,212,238,.35);
          text-shadow: 0 1px 8px rgba(0,0,0,.65);
          pointer-events: none;
          white-space: nowrap;
        }
        .battery-shell.is-charging .battery-inline-state {
          display: none !important;
        }
        .battery-percent {
          min-width: 92px;
          text-align: right;
          font-size: 52px;
          font-weight: 900;
          line-height: 1;
          color: #f8feff;
          text-shadow:
            0 0 18px rgba(120,220,255,.75),
            0 0 34px rgba(81,187,255,.5);
        }
        .battery-range {
          margin-top: 8px;
          font-size: 22px;
          font-weight: 900;
          color: rgba(228,247,255,.96);
          text-align: right;
          letter-spacing: .1px;
          white-space: nowrap;
          text-shadow: 0 0 16px rgba(109,210,255,.32);
        }
        .battery-sub {
          margin-top: 6px;
          color: rgba(226,239,252,.92);
          font-size: 16px;
          font-weight: 700;
          text-align: right;
        }
        .battery-sub .charge-state {
          font-size: 17px;
          font-weight: 900;
          color: #f2fbff;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .metric {
          border-radius: 14px;
          padding: 10px 11px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.10);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .metric label {
          font-size: 12px;
          color: rgba(255,255,255,.70);
          display: block;
          width: 100%;
          text-align: center;
        }
        .metric strong {
          font-size: 15px;
          margin-top: 4px;
          display: block;
          width: 100%;
          text-align: center;
          color: #fff;
        }
        .actions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .action-btn {
          appearance: none;
          border: 1px solid rgba(255,255,255,.12);
          background: linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.03));
          color: #fff;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          padding: 11px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          cursor: pointer;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.16);
          text-align: center;
        }
        .action-btn:active { transform: translateY(1px); }
        .action-btn ha-icon { width: 19px; height: 19px; }
        .action-btn span {
          text-align: center;
          width: 100%;
          display: inline-block;
        }
        .seat-wrap {
          margin-top: 10px;
          border-radius: 14px;
          padding: 10px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
        }
        .seat-header {
          font-size: 12px;
          color: rgba(255,255,255,.72);
          margin-bottom: 8px;
          letter-spacing: .6px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .seat-header ha-icon {
          width: 16px;
          height: 16px;
          color: rgba(255, 169, 128, .95);
          filter: drop-shadow(0 0 7px rgba(255, 121, 88, .42));
        }
        .seat-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }
        .seat-control {
          border-radius: 12px;
          padding: 8px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
        }
        .seat-title {
          font-size: 12px;
          color: rgba(255,255,255,.78);
          margin-bottom: 7px;
          text-align: center;
        }
        .seat-levels {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 6px;
        }
        .seat-level {
          appearance: none;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 9px;
          min-height: 30px;
          background: rgba(255,255,255,.03);
          color: rgba(255,255,255,.85);
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
        }
        .seat-level.active.level-off {
          border-color: rgba(156,197,230,.72);
          background: linear-gradient(180deg, rgba(133,161,191,.45), rgba(112,139,167,.36));
          color: #f2f8ff;
          box-shadow: 0 0 16px rgba(143,186,225,.26), inset 0 1px 0 rgba(255,255,255,.2);
        }
        .seat-level.active.level-low {
          border-color: rgba(255,179,71,.6);
          background: rgba(255,179,71,.26);
          color: #ffd18f;
          box-shadow: 0 0 14px rgba(255,179,71,.28);
        }
        .seat-level.active.level-high {
          border-color: rgba(255,96,88,.7);
          background: rgba(255,96,88,.28);
          color: #ffb2ad;
          box-shadow: 0 0 16px rgba(255,96,88,.32);
        }
        .climate-controls {
          margin-top: 10px;
          border-radius: 14px;
          padding: 10px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
        }
        .climate-row {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 7px;
          margin-top: 8px;
        }
        .climate-row:first-child {
          grid-template-columns: 1fr 1fr;
          margin-top: 0;
        }
        .climate-btn {
          appearance: none;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 10px;
          min-height: 34px;
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.9);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          padding: 0 8px;
          text-align: center;
        }
        .climate-btn.on {
          background: rgba(0,217,255,.2);
          border-color: rgba(0,217,255,.55);
          box-shadow: 0 0 15px rgba(0,217,255,.3);
        }
        .climate-btn.active-cool {
          background: rgba(77,175,255,.24);
          border-color: rgba(77,175,255,.64);
          color: #b8e3ff;
        }
        .climate-btn.active-heat {
          background: rgba(255,129,77,.24);
          border-color: rgba(255,129,77,.64);
          color: #ffd0b8;
        }
        .target-box {
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 10px;
          min-height: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          background: rgba(255,255,255,.03);
        }
        .target-box span {
          font-size: 11px;
          color: rgba(255,255,255,.68);
        }
        .target-box strong {
          font-size: 14px;
          color: #fff;
        }
        .tires {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .tire-card {
          border-radius: 14px;
          padding: 10px 11px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.10);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .tire-card.warn { animation: blink 1s infinite; }
        .tire-title { font-size: 12px; color: rgba(255,255,255,.72); text-align: center; width: 100%; }
        .tire-value { margin-top: 4px; font-size: 16px; font-weight: 800; text-align: center; width: 100%; }
        @keyframes electric-current { 0% { transform: translateX(-36px); } 100% { transform: translateX(36px); } }
        @keyframes charge-wave { 0% { left: -40%; opacity: .2; } 35% { opacity: 1; } 100% { left: 100%; opacity: .3; } }
        @keyframes blink { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.18); } }
        @keyframes alert-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes btn-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(116,217,255,0); }
          40% { transform: scale(1.03); box-shadow: 0 0 18px rgba(116,217,255,.34); }
          100% { transform: scale(1); box-shadow: 0 0 0 rgba(116,217,255,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .alert-marquee-track { animation: none; }
          .btn-feedback { animation: none; }
        }
        @media (max-width: 540px) {
          .hero-title {
            margin: 0 2px 8px;
            font-size: clamp(25px, 7.1vw, 44px);
          }
          .car-image { height: 190px; }
          .hero { min-height: 165px; }
          .hero-services-grid {
            grid-template-columns: repeat(3, 30px);
            gap: 6px;
            max-width: 114px;
            top: 10px;
            left: 10px;
          }
          .hero-battery-badge {
            top: 10px;
            right: 10px;
            min-width: 90px;
            padding: 6px 8px;
            border-radius: 10px;
          }
          .hero-battery-label { font-size: 10px; }
          .hero-battery-value { font-size: 19px; }
          .hero-service-item {
            width: 30px;
            height: 30px;
            border-radius: 9px;
          }
          .hero-service-item ha-icon {
            width: 17px;
            height: 17px;
          }
          .alert-ribbon-inner { padding: 5px 8px; gap: 6px; grid-template-columns: auto minmax(0, 1fr); }
          .alert-single { font-size: 12px; }
          .alert-marquee-line { font-size: 12px; }
          .category h3 { font-size: 19px; }
          .category h3.category-title-main { font-size: 26px; }
          .category-title-row { grid-template-columns: 30px 1fr 30px; }
          .category-title-icon { width: 30px; height: 30px; }
          .category-title-spacer { width: 30px; height: 30px; }
          .category-tabs { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .battery-head-status { font-size: 17px; }
          .battery-head-power { font-size: 17px; }
          .battery-percent { font-size: 38px; min-width: 72px; }
          .battery-range { font-size: 18px; }
          .battery-sub { font-size: 14px; }
          .charging-text { font-size: 15px; }
          .battery-sub .charge-state { font-size: 15px; }
          .battery-inline-state { font-size: 12px; padding: 1px 8px; }
          .seat-grid { grid-template-columns: 1fr; }
          .climate-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .climate-row:first-child {
            grid-template-columns: 1fr;
          }
        }
      </style>
    `;

    this.shadowRoot.querySelectorAll(".action-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this._flashButtonFeedback(btn);
        const key = btn.getAttribute("data-key");
        const action = btn.getAttribute("data-action");
        if (!key || !action) return;
        if (action === "toggle") this._callToggle(key);
        if (action === "press") this._callButton(key);
      });
    });

    this.shadowRoot.querySelectorAll(".seat-level").forEach((btn) => {
      btn.addEventListener("click", () => {
        this._flashButtonFeedback(btn);
        const key = btn.getAttribute("data-seat");
        const option = btn.getAttribute("data-option");
        if (!key || !option) return;
        this._seatUiOverrides[key] = { option, ts: Date.now() };
        this._render();
        this._callSelectOption(key, option);
      });
    });

    this.shadowRoot.querySelectorAll(".climate-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this._flashButtonFeedback(btn);
        const action = btn.getAttribute("data-climate-action");
        if (!action) return;
        if (action === "power") {
          this._callClimatePower(!climateIsOn);
          return;
        }
        if (action === "temp_down") {
          const next = clamp(climateTemp - 1, climateMin, climateMax);
          this._callClimateSetTemp(next);
          return;
        }
        if (action === "temp_up") {
          const next = clamp(climateTemp + 1, climateMin, climateMax);
          this._callClimateSetTemp(next);
          return;
        }
        if (action === "preset_cool") {
          this._callClimatePreset("max_cool");
          return;
        }
        if (action === "preset_heat") {
          this._callClimatePreset("max_heat");
          return;
        }
        if (action === "comfort_21") {
          const next = clamp(21, climateMin, climateMax);
          this._callClimateSetTemp(next);
        }
      });
    });

    this.shadowRoot.querySelectorAll(".cat-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        this._flashButtonFeedback(btn);
        const key = btn.getAttribute("data-category");
        if (!key || key === this._activeCategory) return;
        this._activeCategory = key;
        this._persistActiveCategory(key);
        this._render();
      });
    });

    this.shadowRoot.querySelectorAll(".hero-service-item.actionable").forEach((item) => {
      item.addEventListener("click", () => {
        this._flashButtonFeedback(item);
        const indicatorId = item.getAttribute("data-indicator");
        this._handleServiceIndicatorAction(indicatorId);
      });
    });

    const heroImage = this.shadowRoot.querySelector(".car-image");
    if (heroImage) {
      heroImage.addEventListener("error", () => {
        const fallback = heroImage.getAttribute("data-fallback");
        if (fallback && heroImage.getAttribute("src") !== fallback) {
          heroImage.setAttribute("src", fallback);
        }
      });
    }
  }
}

class Byd3DCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = { ...DEFAULT_CONFIG, ...config, entities: { ...(config.entities || {}) } };
    this._config.category_order = this._normalizeCategoryOrder(this._config.category_order);
    this._config.refresh_interval_seconds = this._normalizeRefreshInterval(this._config.refresh_interval_seconds);
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this.isConnected) this._populatePrefixCandidates();
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    this._render();
    this._populatePrefixCandidates();
  }

  _normalizeCategoryOrder(order) {
    const base = CATEGORY_DEFS.map((c) => c.key);
    if (!Array.isArray(order) || order.length === 0) return [...base];
    const cleaned = order.filter((k) => base.includes(k));
    for (const key of base) {
      if (!cleaned.includes(key)) cleaned.push(key);
    }
    return cleaned;
  }

  _normalizeRefreshInterval(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 25;
    return clamp(Math.round(n), 8, 120);
  }

  _categoryLabel(key) {
    const def = CATEGORY_DEFS.find((item) => item.key === key);
    if (!def) return key;
    return FALLBACK_I18N[def.labelKey] || def.key;
  }

  _renderCategoryOrderOptions() {
    const order = this._normalizeCategoryOrder(this._config.category_order);
    return order
      .map((key) => {
        const def = CATEGORY_DEFS.find((item) => item.key === key);
        if (!def) return "";
        return `
          <div class="category-order-item" draggable="true" data-key="${key}">
            <div class="category-order-main">
              <ha-icon icon="${def.icon}"></ha-icon>
              <span>${this._categoryLabel(key)}</span>
            </div>
            <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
          </div>
        `;
      })
      .join("");
  }

  _bindCategoryOrderDnD() {
    if (!this.shadowRoot) return;
    const items = [...this.shadowRoot.querySelectorAll(".category-order-item")];
    if (!items.length) return;

    let draggingKey = "";

    const clearDragStates = () => {
      items.forEach((item) => item.classList.remove("drag-over", "dragging"));
    };

    items.forEach((item) => {
      item.addEventListener("dragstart", (event) => {
        const key = item.getAttribute("data-key");
        if (!key) return;
        draggingKey = key;
        item.classList.add("dragging");
        if (event.dataTransfer) {
          event.dataTransfer.effectAllowed = "move";
          event.dataTransfer.setData("text/plain", key);
        }
      });

      item.addEventListener("dragend", () => {
        draggingKey = "";
        clearDragStates();
      });

      item.addEventListener("dragover", (event) => {
        event.preventDefault();
        const targetKey = item.getAttribute("data-key");
        if (!targetKey || !draggingKey || targetKey === draggingKey) return;
        item.classList.add("drag-over");
        if (event.dataTransfer) {
          event.dataTransfer.dropEffect = "move";
        }
      });

      item.addEventListener("dragleave", () => {
        item.classList.remove("drag-over");
      });

      item.addEventListener("drop", (event) => {
        event.preventDefault();
        const targetKey = item.getAttribute("data-key");
        const sourceKey = draggingKey || event.dataTransfer?.getData("text/plain");
        if (!sourceKey || !targetKey || sourceKey === targetKey) {
          clearDragStates();
          return;
        }

        const nextOrder = this._normalizeCategoryOrder(this._config.category_order);
        const sourceIndex = nextOrder.indexOf(sourceKey);
        const targetIndex = nextOrder.indexOf(targetKey);
        if (sourceIndex < 0 || targetIndex < 0) {
          clearDragStates();
          return;
        }

        const targetRect = item.getBoundingClientRect();
        const beforeTarget = event.clientY < targetRect.top + targetRect.height / 2;

        nextOrder.splice(sourceIndex, 1);
        let insertAt = nextOrder.indexOf(targetKey);
        if (!beforeTarget) insertAt += 1;
        nextOrder.splice(insertAt, 0, sourceKey);

        clearDragStates();
        this._emitChange({ category_order: nextOrder });
        this._render();
      });
    });
  }

  _renderProfileOptions() {
    return Object.entries(VEHICLE_PROFILES)
      .map(([key, profile]) => {
        const active = this._config.vehicle_profile === key ? "active" : "";
        const basePath = (this._config.image_base_path || "/local/byd-card/pic").replace(/\/$/, "");
        const localImage =
          key === "atto3"
            ? `${basePath}/bydatoo3.png`
            : key === "dolphin"
              ? `${basePath}/byd_dolphin.png`
              : profile.image;
        return `
          <button class="profile ${active}" data-profile="${key}" title="${profile.label}">
            <img src="${localImage}" data-fallback="${profile.image}" alt="${profile.label}" />
            <span>${profile.label}</span>
          </button>
        `;
      })
      .join("");
  }

  _renderLanguageOptions() {
    const langs = [
      { key: "he", label: "עברית", flag: "🇮🇱" },
      { key: "en", label: "English", flag: "🇺🇸" },
      { key: "ru", label: "Русский", flag: "🇷🇺" },
      { key: "fr", label: "Français", flag: "🇫🇷" },
    ];
    return langs
      .map((lang) => {
        const active = this._config.language === lang.key ? "active" : "";
        return `
          <button class="lang-btn ${active}" data-lang="${lang.key}" title="${lang.label}">
            <span class="flag">${lang.flag}</span>
            <span class="lang-label">${lang.label}</span>
          </button>
        `;
      })
      .join("");
  }

  _emitChange(partial) {
    this._config = { ...this._config, ...partial };
    fireConfigChanged(this, this._config);
  }

  _populatePrefixCandidates() {
    if (!this._hass || !this.shadowRoot) return;
    const list = this.shadowRoot.getElementById("prefix_suggestions");
    if (!list) return;
    const prefixes = new Set();
    for (const eid of Object.keys(this._hass.states)) {
      const match = eid.match(/^sensor\.([a-z0-9_]+)_(battery_level|elec_percent)$/);
      if (match) prefixes.add(match[1]);
    }
    list.innerHTML = "";
    [...prefixes].sort().forEach((prefix) => {
      const option = document.createElement("option");
      option.value = prefix;
      list.appendChild(option);
    });
  }

  _render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <div class="editor-shell">
        <div class="editor-glow"></div>
        <div class="editor">
          <div class="head">
            <h3>${FALLBACK_I18N.settings_title}</h3>
            <p>${FALLBACK_I18N.settings_hint}</p>
          </div>

          <section class="group">
            <div class="group-title">Vehicle Profile</div>
            <div class="profiles">${this._renderProfileOptions()}</div>
          </section>

          <section class="group">
            <div class="field">
              <label>${FALLBACK_I18N.settings_card_title}</label>
              <input id="title" type="text" value="${this._config.title || ""}" placeholder="BYD ATTO 3" />
            </div>
            <div class="field">
              <label>${FALLBACK_I18N.settings_prefix}</label>
              <input id="prefix" type="text" list="prefix_suggestions" value="${this._config.entity_prefix || ""}" placeholder="byd_atto_3" />
              <datalist id="prefix_suggestions"></datalist>
              <small>${FALLBACK_I18N.settings_prefix_help}</small>
            </div>
          </section>

          <section class="group">
            <div class="group-title">${FALLBACK_I18N.settings_language}</div>
            <div class="lang-grid">${this._renderLanguageOptions()}</div>
          </section>

          <section class="group">
            <div class="field">
              <label>${FALLBACK_I18N.settings_image_url}</label>
              <input id="image_url" type="text" value="${this._config.image_url || ""}" placeholder="/local/bydatoo3.png" />
            </div>
            <div class="field">
              <label>${FALLBACK_I18N.settings_image_base_path}</label>
              <input id="image_base_path" type="text" value="${this._config.image_base_path || ""}" placeholder="/local/byd-card/pic" />
            </div>
            <div class="field">
              <label>${FALLBACK_I18N.settings_i18n_base_path}</label>
              <input id="i18n_base_path" type="text" value="${this._config.i18n_base_path || ""}" placeholder="/local/byd-card/i18n" />
            </div>
            <div class="field">
              <label>${FALLBACK_I18N.settings_refresh_interval}</label>
              <input
                id="refresh_interval_seconds"
                type="number"
                min="8"
                max="120"
                step="1"
                value="${this._normalizeRefreshInterval(this._config.refresh_interval_seconds)}"
              />
              <small>${FALLBACK_I18N.settings_refresh_interval_hint}</small>
            </div>
          </section>

          <section class="group">
            <div class="group-title">${FALLBACK_I18N.settings_categories}</div>
            <div class="toggles">
              <label class="toggle-chip"><input id="show_climate" type="checkbox" ${this._config.show_climate ? "checked" : ""}/> <span>${FALLBACK_I18N.settings_show_climate}</span></label>
              <label class="toggle-chip"><input id="show_vehicle" type="checkbox" ${this._config.show_vehicle ? "checked" : ""}/> <span>${FALLBACK_I18N.settings_show_vehicle}</span></label>
              <label class="toggle-chip"><input id="show_tires" type="checkbox" ${this._config.show_tires ? "checked" : ""}/> <span>${FALLBACK_I18N.settings_show_tires}</span></label>
              <label class="toggle-chip"><input id="show_actions" type="checkbox" ${this._config.show_actions ? "checked" : ""}/> <span>${FALLBACK_I18N.settings_show_actions}</span></label>
              <label class="toggle-chip"><input id="show_location" type="checkbox" ${this._config.show_location ? "checked" : ""}/> <span>${FALLBACK_I18N.settings_show_location}</span></label>
            </div>
          </section>

          <section class="group">
            <div class="group-title">${FALLBACK_I18N.settings_category_order}</div>
            <div class="order-hint">${FALLBACK_I18N.settings_category_order_hint}</div>
            <div class="category-order-list">
              ${this._renderCategoryOrderOptions()}
            </div>
          </section>
        </div>
      </div>
      <style>
        .editor-shell {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(130, 163, 196, .22);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.16), 0 16px 46px rgba(0,0,0,.35);
          background: radial-gradient(circle at 20% 0%, rgba(65,97,130,.35), rgba(13,18,25,.92) 62%, rgba(8,12,18,.96));
        }
        .editor-glow {
          position: absolute;
          inset: -20% -10% auto auto;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0,188,255,.17), transparent 68%);
          pointer-events: none;
        }
        .editor {
          position: relative;
          z-index: 1;
          font-family: "Segoe UI", "Arial", sans-serif;
          display: grid;
          gap: 12px;
          padding: 14px;
          color: #eaf2fa;
        }
        .head {
          border-radius: 16px;
          padding: 12px 13px;
          background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.03));
          border: 1px solid rgba(255,255,255,.11);
        }
        h3 {
          margin: 0;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: .2px;
        }
        p {
          margin: 6px 0 0;
          color: rgba(231,241,250,.73);
          font-size: 13px;
        }
        .group {
          border-radius: 16px;
          padding: 12px;
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.11);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
          display: grid;
          gap: 10px;
        }
        .group-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: rgba(207,225,242,.74);
          font-weight: 800;
        }
        .field {
          display: grid;
          gap: 7px;
        }
        label {
          font-size: 13px;
          font-weight: 700;
          color: #f4f8fc;
        }
        input[type="text"],
        input[type="number"] {
          border: 1px solid rgba(157,190,220,.18);
          background: linear-gradient(180deg, rgba(17,23,33,.72), rgba(13,18,27,.82));
          border-radius: 14px;
          min-height: 46px;
          padding: 0 14px;
          color: #e8f2fb;
          font-size: 16px;
          transition: border-color .2s ease, box-shadow .2s ease, transform .1s ease;
        }
        input[type="text"]:focus,
        input[type="number"]:focus {
          outline: none;
          border-color: rgba(0,184,255,.75);
          box-shadow: 0 0 0 2px rgba(0,184,255,.22), 0 10px 24px rgba(0,184,255,.12);
        }
        small {
          color: rgba(207,225,242,.7);
          font-size: 11px;
        }
        .profiles {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }
        .profile {
          border: 1px solid rgba(157,190,220,.18);
          background: linear-gradient(180deg, rgba(20,29,40,.86), rgba(15,21,30,.9));
          border-radius: 14px;
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          text-align: left;
          color: #eff7ff;
          transition: transform .15s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .profile:hover { transform: translateY(-1px); }
        .profile img {
          width: 100%;
          height: 98px;
          object-fit: cover;
          display: block;
          opacity: .95;
        }
        .profile span {
          display: block;
          padding: 8px 10px;
          font-size: 12px;
          font-weight: 700;
        }
        .profile.active {
          border-color: #23bcff;
          box-shadow: 0 0 0 1px rgba(35,188,255,.65) inset, 0 12px 26px rgba(35,188,255,.16);
        }
        .lang-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }
        .lang-btn {
          border: 1px solid rgba(157,190,220,.18);
          background: linear-gradient(180deg, rgba(20,29,40,.86), rgba(15,21,30,.9));
          border-radius: 14px;
          min-height: 46px;
          color: #e8f3fc;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 12px;
          cursor: pointer;
          transition: transform .15s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .lang-btn:hover { transform: translateY(-1px); }
        .lang-btn .flag {
          font-size: 19px;
          line-height: 1;
        }
        .lang-btn .lang-label {
          font-size: 13px;
          font-weight: 700;
        }
        .lang-btn.active {
          border-color: #23bcff;
          box-shadow: 0 0 0 1px rgba(35,188,255,.65) inset, 0 12px 24px rgba(35,188,255,.14);
          background: linear-gradient(180deg, rgba(0,184,255,.19), rgba(0,184,255,.04));
        }
        .toggles {
          display: grid;
          gap: 8px;
        }
        .order-hint {
          font-size: 12px;
          color: rgba(207,225,242,.72);
        }
        .category-order-list {
          display: grid;
          gap: 8px;
        }
        .category-order-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(157,190,220,.16);
          background: rgba(16,23,32,.66);
          cursor: grab;
          user-select: none;
          transition: border-color .2s ease, background .2s ease, transform .14s ease, box-shadow .2s ease;
        }
        .category-order-item:hover {
          border-color: rgba(77,189,255,.45);
          background: rgba(24,38,52,.7);
        }
        .category-order-item.drag-over {
          border-color: rgba(35,188,255,.86);
          box-shadow: 0 0 0 1px rgba(35,188,255,.42) inset, 0 8px 20px rgba(35,188,255,.14);
        }
        .category-order-item.dragging {
          opacity: .65;
          transform: scale(.985);
          cursor: grabbing;
        }
        .category-order-main {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          font-weight: 800;
          color: #eaf4ff;
        }
        .category-order-main ha-icon {
          --mdc-icon-size: 18px;
          color: #96cfff;
        }
        .drag-handle {
          --mdc-icon-size: 18px;
          color: rgba(203,223,242,.76);
          pointer-events: none;
        }
        .toggle-chip {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 11px;
          border-radius: 12px;
          border: 1px solid rgba(157,190,220,.16);
          background: rgba(16,23,32,.66);
          cursor: pointer;
          font-weight: 700;
          color: #e8f2fb;
          transition: border-color .2s ease, background .2s ease;
        }
        .toggle-chip:hover {
          border-color: rgba(77,189,255,.45);
          background: rgba(24,38,52,.7);
        }
        .toggle-chip input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #2abfff;
          cursor: pointer;
        }
        @media (max-width: 540px) {
          .editor {
            padding: 11px;
            gap: 10px;
          }
          .profiles,
          .lang-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    `;

    const onChange = () =>
      this._emitChange({
        refresh_interval_seconds: this._normalizeRefreshInterval(
          this.shadowRoot.getElementById("refresh_interval_seconds").value
        ),
        title: this.shadowRoot.getElementById("title").value.trim(),
        entity_prefix: this.shadowRoot.getElementById("prefix").value.trim(),
        language: this._config.language || "he",
        image_url: this.shadowRoot.getElementById("image_url").value.trim(),
        image_base_path: this.shadowRoot.getElementById("image_base_path").value.trim() || "/local/byd-card/pic",
        i18n_base_path: this.shadowRoot.getElementById("i18n_base_path").value.trim() || "/local/byd-card/i18n",
        show_climate: this.shadowRoot.getElementById("show_climate").checked,
        show_vehicle: this.shadowRoot.getElementById("show_vehicle").checked,
        show_tires: this.shadowRoot.getElementById("show_tires").checked,
        show_actions: this.shadowRoot.getElementById("show_actions").checked,
        show_location: this.shadowRoot.getElementById("show_location").checked,
      });

    this.shadowRoot.getElementById("title").addEventListener("input", onChange);
    this.shadowRoot.getElementById("prefix").addEventListener("input", onChange);
    this.shadowRoot.getElementById("image_url").addEventListener("input", onChange);
    this.shadowRoot.getElementById("image_base_path").addEventListener("input", onChange);
    this.shadowRoot.getElementById("i18n_base_path").addEventListener("input", onChange);
    this.shadowRoot.getElementById("refresh_interval_seconds").addEventListener("change", onChange);
    this.shadowRoot.getElementById("show_climate").addEventListener("change", onChange);
    this.shadowRoot.getElementById("show_vehicle").addEventListener("change", onChange);
    this.shadowRoot.getElementById("show_tires").addEventListener("change", onChange);
    this.shadowRoot.getElementById("show_actions").addEventListener("change", onChange);
    this.shadowRoot.getElementById("show_location").addEventListener("change", onChange);

    this.shadowRoot.querySelectorAll(".profile").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.getAttribute("data-profile");
        if (!key) return;
        this._emitChange({ vehicle_profile: key });
        this._render();
      });
    });

    this.shadowRoot.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.getAttribute("data-lang");
        if (!key) return;
        this._emitChange({ language: key });
        this._render();
      });
    });

    this.shadowRoot.querySelectorAll(".profile img").forEach((img) => {
      img.addEventListener("error", () => {
        const fallback = img.getAttribute("data-fallback");
        if (fallback && img.getAttribute("src") !== fallback) {
          img.setAttribute("src", fallback);
        }
      });
    });

    this._bindCategoryOrderDnD();
  }
}

if (!customElements.get(CARD_TYPE)) {
  customElements.define(CARD_TYPE, Byd3DCard);
}
if (!customElements.get("byd-3d-card-editor")) {
  customElements.define("byd-3d-card-editor", Byd3DCardEditor);
}

window.customCards = window.customCards || [];
if (!window.customCards.find((card) => card.type === `custom:${CARD_TYPE}`)) {
  window.customCards.push({
    type: `custom:${CARD_TYPE}`,
    name: CARD_NAME,
    preview: true,
    description: "Dynamic 3D BYD dashboard card with vehicle profiles.",
    documentationURL: "https://github.com/jkaberg/hass-byd-vehicle",
  });
}

console.info(`%c ${CARD_NAME} %c ${CARD_VERSION} `, "color:#00e5ff;font-weight:700;", "color:#9fb9c8;");
