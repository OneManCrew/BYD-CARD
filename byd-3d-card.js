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
  driver_seat_heat: { domains: ["select"], suffixes: ["driver_seat_heat"] },
  passenger_seat_heat: { domains: ["select"], suffixes: ["passenger_seat_heat"] },
  rear_left_seat_heat: { domains: ["select"], suffixes: ["rear_left_seat_heat"] },
  rear_right_seat_heat: { domains: ["select"], suffixes: ["rear_right_seat_heat"] },
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
  language: "he",
  entities: {},
};

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
  settings_language: "שפה",
  settings_categories: "קטגוריות",
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
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    this._translations = FALLBACK_I18N;
    this._loadTranslations();
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
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
      return;
    }
    this._hass.callService(domain, "toggle", { entity_id: eid });
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
  }

  _callButton(logicalKey) {
    const eid = this._resolveEntity(logicalKey);
    if (!eid || !this._hass) return;
    this._hass.callService("button", "press", { entity_id: eid });
  }

  _callSelectOption(logicalKey, option) {
    const eid = this._resolveEntity(logicalKey);
    if (!eid || !this._hass) return;
    this._hass.callService("select", "select_option", {
      entity_id: eid,
      option,
    });
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

  _category(title, content) {
    if (!content || content.trim() === "") return "";
    return `
      <section class="category">
        <h3>${title}</h3>
        ${content}
      </section>
    `;
  }

  _renderSeatHeatControl(logicalKey, label) {
    const seatState = this._state(logicalKey);
    if (!seatState) return "";
    const current = String(seatState.state || "off").toLowerCase();
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
    const seatHeatSection = [
      this._renderSeatHeatControl("driver_seat_heat", this._t("seat_driver")),
      this._renderSeatHeatControl("passenger_seat_heat", this._t("seat_passenger")),
      this._renderSeatHeatControl("rear_left_seat_heat", this._t("seat_rear_left")),
      this._renderSeatHeatControl("rear_right_seat_heat", this._t("seat_rear_right")),
    ]
      .filter(Boolean)
      .join("");

    const climateDomain = this._resolveEntity("climate")?.split(".")[0] || "";
    const climateIsOn =
      climateDomain === "climate"
        ? climateState?.state && climateState.state !== "off"
        : climateState?.state === "on";
    const climateTempRaw = toNumber(climateState?.attributes?.temperature);
    const climateMin = toNumber(climateState?.attributes?.min_temp) ?? 15;
    const climateMax = toNumber(climateState?.attributes?.max_temp) ?? 31;
    const climateTemp = climateTempRaw ?? 21;
    const presetMode = String(climateState?.attributes?.preset_mode || "").toLowerCase();

    const battery = clamp(toNumber(batteryState?.state) ?? 0, 0, 100);
    const range = toNumber(rangeState?.state);
    const isCharging = chargingState?.state === "on";
    const lowBattery = battery < 20;

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

    const summaryMetrics = `
      <div class="metrics-grid">
        ${this._metric(this._t("interior_temp"), `${cabinTempState?.state ?? "-"}°C`)}
        ${this._metric(this._t("exterior_temp"), `${exteriorTempState?.state ?? "-"}°C`)}
        ${this._metric(this._t("speed"), `${speedState?.state ?? "-"} ${this._t("speed_kmh")}`)}
        ${this._metric(this._t("odometer"), `${odoState?.state ?? "-"} ${this._t("odometer_km")}`)}
      </div>
    `;

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
              <div class="seat-header">${this._t("seat_heating")}</div>
              <div class="seat-grid">${seatHeatSection}</div>
            </div>
            `
                : ""
            }
          `
        )
      : "";

    const vehicleCategory = this._config.show_vehicle
      ? this._category(
          this._t("category_vehicle"),
          `
            <div class="metrics-grid">
              ${this._metric(this._t("doors"), this._boolLabel(doorsState?.state))}
              ${this._metric(this._t("windows"), this._boolLabel(windowsState?.state))}
              ${this._metric(this._t("lock"), this._boolLabel(lockState?.state))}
              ${this._metric(this._t("online"), this._boolLabel(onlineState?.state))}
              ${this._metric(this._t("speed"), `${speedState?.state ?? "-"} ${this._t("speed_kmh")}`)}
              ${this._metric(this._t("odometer"), `${odoState?.state ?? "-"} ${this._t("odometer_km")}`)}
            </div>
          `
        )
      : "";

    const tiresCategory =
      this._config.show_tires && tireCards
        ? this._category(this._t("category_tires"), `<div class="tires">${tireCards}</div>`)
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
        )
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
          )
        : "";

    this.shadowRoot.innerHTML = `
      <ha-card>
        <div class="wrap ${lowBattery ? "low" : ""}">
          <div class="hero">
            <img class="car-image" src="${imageUrl}" data-fallback="${profile.image}" alt="${profile.label}" />
            <div class="hero-overlay">
              <div class="hero-top">
                <div class="title">${title}</div>
                <div class="chip">${profile.label}</div>
              </div>
              <div class="hero-range">${range === null ? "-" : range.toFixed(0)} ${this._t("range_km")}</div>
            </div>
          </div>

          ${this._category(
            this._t("category_summary"),
            `
          <div class="panel">
            <div class="battery-head">
              <span>${isCharging ? `⚡ ${this._t("charging")}` : this._t("battery_status")}</span>
            </div>
            <div class="battery-row">
              <div class="battery-shell">
                <div class="battery-fill ${isCharging ? "charging" : ""}" style="width:${battery}%"></div>
                <div class="battery-gloss"></div>
              </div>
              <div class="battery-percent">${battery.toFixed(0)}%</div>
            </div>
            <div class="battery-sub">
              ${isCharging ? this._t("charging_active") : this._t("charging_inactive")} ·
              ${this._t("power")}: ${batteryPowerState?.state ?? "-"}
            </div>
          </div>
          ${summaryMetrics}
          `
          )}

          ${climateCategory}
          ${vehicleCategory}
          ${tiresCategory}
          ${locationCategory}
          ${actionsCategory}
        </div>
      </ha-card>
      <style>
        :host { display: block; }
        ha-card {
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.14);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.20), 0 28px 70px rgba(0,0,0,.58);
          background: transparent;
        }
        .wrap {
          background:
            radial-gradient(circle at 20% 6%, #2f4862 0%, #111b26 58%, #070a10 100%);
          padding: 14px;
          color: #fff;
          font-family: "Segoe UI", "SF Pro Text", "Arial", sans-serif;
        }
        .wrap.low {
          background: radial-gradient(circle at 18% 8%, #5e2830 0%, #1a1218 58%, #0a080d 100%);
        }
        .hero {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 165px;
          background: #0b1119;
          border: 1px solid rgba(255,255,255,.12);
        }
        .car-image {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.03);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 14px;
          background: linear-gradient(180deg, rgba(5,7,10,.12), rgba(5,7,10,.72));
        }
        .hero-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
        .title { font-size: 22px; font-weight: 800; text-shadow: 0 2px 12px rgba(0,0,0,.65); }
        .chip {
          font-size: 11px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(0,0,0,.45);
          border: 1px solid rgba(255,255,255,.16);
          letter-spacing: .3px;
        }
        .hero-range {
          align-self: flex-start;
          font-size: 16px;
          font-weight: 800;
          color: rgba(255,255,255,.95);
          padding: 6px 11px;
          border-radius: 999px;
          background: rgba(0,0,0,.38);
          border: 1px solid rgba(255,255,255,.15);
          text-shadow: 0 1px 8px rgba(0,0,0,.55);
        }
        .panel {
          border-radius: 20px;
          padding: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.16), inset 0 -12px 22px rgba(0,0,0,.46);
        }
        .category {
          margin-top: 12px;
          border-radius: 18px;
          padding: 10px;
          border: 1px solid rgba(255,255,255,.11);
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
        }
        .category h3 {
          margin: 2px 2px 10px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.1px;
          color: rgba(255,255,255,.8);
        }
        .battery-head { display: flex; align-items: center; margin-bottom: 8px; }
        .battery-head span { font-size: 12px; color: rgba(255,255,255,.72); letter-spacing: .8px; }
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
          background: linear-gradient(180deg, #07090d, #252d36);
          border: 1px solid rgba(255,255,255,.20);
          box-shadow: inset 0 4px 7px rgba(255,255,255,.12), inset 0 -10px 18px rgba(0,0,0,.65);
        }
        .battery-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #00d9ff, #00ff9d);
          box-shadow: inset 0 2px 8px rgba(255,255,255,.45), 0 0 26px rgba(0,255,190,.55);
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
          background: linear-gradient(180deg, rgba(255,255,255,.34), rgba(255,255,255,0));
        }
        .battery-percent {
          min-width: 70px;
          text-align: right;
          font-size: 34px;
          font-weight: 900;
          line-height: 1;
          color: #fff;
          text-shadow: 0 0 20px rgba(0,229,255,.75);
        }
        .battery-sub { margin-top: 8px; color: rgba(255,255,255,.7); font-size: 13px; }
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
        }
        .metric label { font-size: 12px; color: rgba(255,255,255,.70); display: block; }
        .metric strong { font-size: 15px; margin-top: 4px; display: block; color: #fff; }
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
        }
        .action-btn:active { transform: translateY(1px); }
        .action-btn ha-icon { width: 19px; height: 19px; }
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
        }
        .seat-level.active.level-off {
          border-color: rgba(255,255,255,.35);
          background: rgba(230,237,245,.2);
          color: #f2f7ff;
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
        }
        .tire-card.warn { animation: blink 1s infinite; }
        .tire-title { font-size: 12px; color: rgba(255,255,255,.72); }
        .tire-value { margin-top: 4px; font-size: 16px; font-weight: 800; }
        @keyframes electric-current { 0% { transform: translateX(-36px); } 100% { transform: translateX(36px); } }
        @keyframes charge-wave { 0% { left: -40%; opacity: .2; } 35% { opacity: 1; } 100% { left: 100%; opacity: .3; } }
        @keyframes blink { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.18); } }
        @media (max-width: 540px) {
          .title { font-size: 19px; }
          .car-image { height: 170px; }
          .hero { min-height: 150px; }
          .battery-percent { font-size: 30px; min-width: 60px; }
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
        const key = btn.getAttribute("data-key");
        const action = btn.getAttribute("data-action");
        if (!key || !action) return;
        if (action === "toggle") this._callToggle(key);
        if (action === "press") this._callButton(key);
      });
    });

    this.shadowRoot.querySelectorAll(".seat-level").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-seat");
        const option = btn.getAttribute("data-option");
        if (!key || !option) return;
        this._callSelectOption(key, option);
      });
    });

    this.shadowRoot.querySelectorAll(".climate-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
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
        input[type="text"] {
          border: 1px solid rgba(157,190,220,.18);
          background: linear-gradient(180deg, rgba(17,23,33,.72), rgba(13,18,27,.82));
          border-radius: 14px;
          min-height: 46px;
          padding: 0 14px;
          color: #e8f2fb;
          font-size: 16px;
          transition: border-color .2s ease, box-shadow .2s ease, transform .1s ease;
        }
        input[type="text"]:focus {
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
