# BYD 3D Card

[![HACS Validation](https://github.com/OneManCrew/BYD-CARD/actions/workflows/validate.yaml/badge.svg)](https://github.com/OneManCrew/BYD-CARD/actions/workflows/validate.yaml)
[![GitHub Release](https://img.shields.io/github/v/release/OneManCrew/BYD-CARD?style=flat-square)](https://github.com/OneManCrew/BYD-CARD/releases/latest)
[![License](https://img.shields.io/github/license/OneManCrew/BYD-CARD?style=flat-square)](LICENSE)

A premium Home Assistant Lovelace card for **BYD electric vehicles** — featuring a stunning 3D-style interface, real-time vehicle data, climate controls, tire pressure monitoring, and more.

| ![Summary](docs/screenshots/01-overview-summary.png) | ![Climate](docs/screenshots/02-climate-view.png) | ![Actions](docs/screenshots/04-quick-actions-view.png) |
|---|---|---|

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Supported Vehicles](#supported-vehicles)
- [Features](#features)
- [Installation](#installation)
  - [Method 1: HACS (Recommended)](#method-1-hacs-recommended)
  - [Method 2: Manual Installation](#method-2-manual-installation)
- [Configuration](#configuration)
  - [Visual Editor](#visual-editor)
  - [YAML Configuration](#yaml-configuration)
  - [Configuration Options](#configuration-options)
- [Troubleshooting](#troubleshooting)
- [UI Screenshots](#ui-screenshots)
- [Credits](#credits)

---

## Prerequisites

> **This card requires the BYD vehicle integration to be installed first.**  
> Without it, no BYD entities will exist in Home Assistant and the card will have no data to display.

**Required integration:** [hass-byd-vehicle](https://github.com/jkaberg/hass-byd-vehicle)

### Setup order:

1. Install the **hass-byd-vehicle** integration via HACS.
2. Configure it with your BYD account credentials.
3. Verify that BYD entities appear in Home Assistant (e.g., `sensor.byd_atto_3_battery_level`).
4. Install **BYD 3D Card** (this project).

---

## Supported Vehicles

| Vehicle | Profile Key | Default Entity Prefix |
|---------|-------------|----------------------|
| BYD ATTO 3 | `atto3` | `byd_atto_3` |
| BYD SEAL | `seal` | `byd_seal` |
| BYD DOLPHIN | `dolphin` | `byd_dolphin` |
| BYD SEALION 7 | `sealion7` | `byd_sealion_7` |
| BYD SEAL U DM-i | `seal_u_dmi` | `byd_seal_u_dmi` |

| ATTO 3 | SEAL | DOLPHIN |
|---|---|---|
| ![ATTO 3](pic/bydatoo3.png) | ![SEAL](pic/seal.png) | ![DOLPHIN](pic/byd_dolphin.png) |

| SEALION 7 | SEAL U DM-i |
|---|---|
| ![SEALION 7](pic/sealion.png) | ![SEAL U DM-i](pic/seal_u_dmi.png) |

---

## Features

### Dashboard
- **3D hero layout** — vehicle image with floating battery badge and service indicators
- **Real-time data** — battery level, range, charging status, power
- **Alert ribbon** — animated marquee for active vehicle alerts (tire pressure, system faults)
- **Auto entity detection** — set `entity_prefix` once and all entities are mapped automatically

### Categories (tabs)
- **Summary** — battery bar, range, power, charging state, key metrics
- **Climate** — A/C on/off, temperature control, preset modes, seat heating/cooling
- **Vehicle** — doors, windows, lock status, online state, speed, odometer
- **Tires** — per-wheel pressure with color-coded warnings (green/orange/red)
- **Location** — embedded OpenStreetMap with external Google Maps link
- **Quick Actions** — lock/unlock, A/C, battery heat, flash lights, find car, close windows

### Customization
- **5 vehicle profiles** with dedicated images
- **4 languages** — Hebrew, English, Russian, French
- **Drag & drop** category ordering in the visual editor
- **Custom entities** — add any HA entity as a quick-action button on the hero image
- **Configurable refresh interval** (8–120 seconds)
- **Tire pressure units** — PSI or kPa
- **Seat mode** — heat only, cool only, or both
- **Remembers last active tab** per card instance

---

## Installation

### Method 1: HACS (Recommended)

HACS (Home Assistant Community Store) will handle downloads and updates automatically.

#### Step 1 — Add the repository to HACS

1. Open Home Assistant → **HACS** → **Frontend** (or **Dashboard**).
2. Click the **⋮** menu (top right) → **Custom repositories**.
3. Enter the repository URL:
   ```
   https://github.com/OneManCrew/BYD-CARD
   ```
4. Select category: **Dashboard** (or **Lovelace**).
5. Click **Add**.

#### Step 2 — Install the card

1. Search for **"BYD 3D Card"** in HACS Frontend.
2. Click **Install**.
3. HACS will download the files to `/config/www/community/BYD-CARD/`.

#### Step 3 — Add the Lovelace resource

This is usually done automatically by HACS. If not:

1. Go to **Settings** → **Dashboards** → **⋮** menu → **Resources**.
2. Click **Add Resource**.
3. URL:
   ```
   /hacsfiles/BYD-CARD/byd-3d-card-hacs.js
   ```
4. Resource type: **JavaScript Module**.
5. Click **Create**.

#### Step 4 — Refresh

1. **Hard refresh** the browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac).
2. On the HA mobile app, clear the app cache or force-close and reopen.

---

### Method 2: Manual Installation

#### Step 1 — Download files

Download or clone this repository:
```bash
git clone https://github.com/OneManCrew/BYD-CARD.git
```

#### Step 2 — Copy files to Home Assistant

Copy the **contents** of the `dist/` folder to your Home Assistant config:
```
/config/www/byd-card/
```

Your file structure should look like:
```
/config/www/byd-card/
├── byd-3d-card.js
├── byd-3d-card-hacs.js
├── bydatoo3.png
├── byd_dolphin.png
├── seal.png
├── sealion.png
├── he.json
├── en.json
├── ru.json
└── fr.json
```

#### Step 3 — Add the Lovelace resource

1. Go to **Settings** → **Dashboards** → **⋮** menu → **Resources**.
2. Click **Add Resource**.
3. URL:
   ```
   /local/byd-card/byd-3d-card.js
   ```
4. Resource type: **JavaScript Module**.
5. Click **Create**.

#### Step 4 — Refresh

Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac).

---

## Configuration

### Visual Editor

The card includes a full visual editor — no YAML needed:

1. Add a new card to your dashboard.
2. Search for **"BYD 3D Card"**.
3. Use the editor to configure:
   - Vehicle profile
   - Card title and font size
   - Entity prefix
   - Language
   - Visible categories and their order
   - Custom action entities

### YAML Configuration

```yaml
type: custom:byd-3d-card
vehicle_profile: atto3
title: My BYD ATTO 3
entity_prefix: byd_atto_3
language: he
show_climate: true
show_vehicle: true
show_tires: true
show_actions: true
show_location: true
tire_pressure_unit: psi
refresh_interval_seconds: 25
category_order:
  - summary
  - climate
  - vehicle
  - tires
  - location
  - actions
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `vehicle_profile` | string | `atto3` | Vehicle profile: `atto3`, `seal`, `dolphin`, `sealion7` |
| `title` | string | Profile name | Card title displayed on the hero image |
| `title_font_size` | number | `46` | Title font size in pixels (24–72) |
| `entity_prefix` | string | `byd_atto_3` | Prefix used to auto-detect BYD entities |
| `language` | string | `he` | UI language: `he`, `en`, `ru`, `fr` |
| `show_climate` | boolean | `true` | Show the Climate tab |
| `show_vehicle` | boolean | `true` | Show the Vehicle tab |
| `show_tires` | boolean | `true` | Show the Tires tab |
| `show_actions` | boolean | `true` | Show the Quick Actions tab |
| `show_location` | boolean | `true` | Show the Location tab |
| `tire_pressure_unit` | string | `psi` | Tire pressure unit: `psi` or `kpa` |
| `refresh_interval_seconds` | number | `25` | Auto-refresh interval in seconds (8–120) |
| `seat_passenger_mode` | string | `heat` | Seat control mode: `heat`, `cool`, `both` |
| `image_url` | string | — | Custom vehicle image URL (overrides profile) |
| `image_base_path` | string | auto | Base path for profile images |
| `i18n_base_path` | string | auto | Base path for language JSON files |
| `category_order` | list | all | Order of category tabs |
| `custom_entities` | list | — | Additional HA entities for hero quick-actions popup |

### Entity Prefix

The `entity_prefix` is the key to auto-detection. The card uses it to find all relevant entities.

**Example:** If your BYD integration creates `sensor.byd_atto_3_battery_level`, your prefix is `byd_atto_3`.

The card will automatically resolve entities like:
- `sensor.byd_atto_3_battery_level` → battery
- `sensor.byd_atto_3_range` → range
- `binary_sensor.byd_atto_3_charging` → charging status
- `climate.byd_atto_3_climate` → climate controls
- `lock.byd_atto_3_lock` → door lock

### Custom Entities

Add any Home Assistant entity to the hero quick-actions popup:

```yaml
custom_entities:
  - script.open_parking_gate
  - light.garden
  - switch.charger
```

- A floating button appears on the hero image.
- Tap it to open a popup grid with buttons for all selected entities.
- In the card editor, you can assign a custom icon per entity (e.g., `mdi:gate-open`).

---

## Troubleshooting

### "Custom element doesn't exist" or "Resource not found"

| Check | What to verify |
|-------|----------------|
| **Resource URL** | Must match exactly — see [Installation](#installation) section |
| **Resource type** | Must be **JavaScript Module** |
| **File exists on disk** | HACS: `/config/www/community/BYD-CARD/byd-3d-card-hacs.js`<br>Manual: `/config/www/byd-card/byd-3d-card.js` |
| **Browser cache** | Hard refresh with `Ctrl+Shift+R`. If still stuck, append `?v=1.0.11` to the resource URL |
| **HA restart** | Sometimes a full Home Assistant restart is needed after adding resources |

### Card shows "N/A" for all values

- Verify the **hass-byd-vehicle** integration is installed and configured.
- Check that BYD entities exist in **Developer Tools** → **States**.
- Ensure `entity_prefix` matches your entities (e.g., `byd_atto_3`).

### Images not loading

- The card has built-in SVG fallbacks for all vehicle profiles.
- If custom `image_url` or `image_base_path` is wrong, clear the field and let the card auto-detect.

---

## UI Screenshots

### Summary
![Overview and Summary](docs/screenshots/01-overview-summary.png)

Hero image with battery badge, alert ribbon, 6 category tabs, and summary panel with power/range/battery bar.

### Climate
![Climate category](docs/screenshots/02-climate-view.png)

Climate metrics, A/C controls, temperature adjustment, preset modes, and seat heating controls.

### Vehicle
![Vehicle category](docs/screenshots/03-vehicle-view.png)

Status cards for doors, windows, lock, online state, speed, and odometer.

### Quick Actions
![Quick actions category](docs/screenshots/04-quick-actions-view.png)

Control buttons for lock/unlock, A/C, battery heat, flash lights, find car, and close windows.

### Tires
![Tires category](docs/screenshots/05-tires-view.png)

Per-wheel tire pressure with color-coded warnings (green = normal, orange = warning, red = critical).

### Visual Editor
![Editor main view](docs/screenshots/06-editor-main.png)

Profile selection, card title, entity prefix, language picker, and live preview.

![Editor categories Hebrew](docs/screenshots/07-editor-categories-he.png)

Category visibility toggles, drag & drop ordering, refresh interval, and path settings.

---

## Version Management

This project uses [GitHub Releases](https://github.com/OneManCrew/BYD-CARD/releases) for version management. HACS automatically detects new releases and notifies users of available updates.

---

## Credits

**Created by [moshiko2312](https://github.com/OneManCrew/BYD-CARD/commits?author=moshiko2312)**

Built with passion for the BYD community and Home Assistant ecosystem.

### Special Thanks

- [hass-byd-vehicle](https://github.com/jkaberg/hass-byd-vehicle) — The BYD integration that makes this card possible
- [HACS](https://hacs.xyz/) — Home Assistant Community Store
- The Home Assistant community

---

## License

This project is open source. See the [LICENSE](LICENSE) file for details.
