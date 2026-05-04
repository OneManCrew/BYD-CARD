# BYD 3D Card

Advanced Home Assistant Lovelace card for BYD vehicles with a 3D-style UI, multi-language support, vehicle profiles, and category-based controls.

## Important prerequisite (required)

This card **requires** the BYD integration below.  
Without it, the BYD entities do not exist, and the card cannot show data or control the vehicle:

- https://github.com/jkaberg/hass-byd-vehicle

Recommended order:
1. Install `hass-byd-vehicle`.
2. Verify BYD entities are available in Home Assistant.
3. Install and use `BYD 3D Card`.

## Features

- 3D hero layout for vehicle image and battery status
- Vehicle profiles: `ATTO 3`, `SEAL`, `DOLPHIN`, `SEALION 7`
- Auto entity mapping via `entity_prefix`
- Category tabs (radio style):
  - `Summary`
  - `Climate`
  - `Vehicle`
  - `Tires`
  - `Location`
  - `Quick actions`
- Drag & drop category order in UI editor
- Last selected category is remembered after refresh
- Languages: Hebrew, English, Russian, French
- Local profile images from `pic/`

## Install

1. Copy this repository folder to Home Assistant:
   - `/config/www/byd-card/`
2. Add Lovelace resource:
   - URL: `/local/byd-card/byd-3d-card.js`
   - Type: `module`
3. Hard refresh the browser/app.

## Basic YAML

```yaml
type: custom:byd-3d-card
vehicle_profile: atto3
title: Moshiko BYD ATTO 3
title_font_size: 46
entity_prefix: byd_atto_3
image_base_path: /local/byd-card/pic
language: en
i18n_base_path: /local/byd-card/i18n
show_climate: true
show_vehicle: true
show_tires: true
show_actions: true
show_location: true
refresh_interval_seconds: 25
```

## Files

- `byd-3d-card.js` - main custom card file
- `i18n/*.json` - language files
- `pic/` - profile images

## Profile images (in this repo)

- `pic/bydatoo3.png` - BYD ATTO 3 profile image
- `pic/byd_dolphin.png` - BYD DOLPHIN profile image
- `pic/seal.png` - BYD SEAL source profile image
- `pic/sealion.png` - BYD SEALION 7 source profile image
- `pic/byd_seal.png` - resized SEAL variant (450x273)
- `pic/byd_sealion7.png` - resized SEALION 7 variant (450x273)

### Preview

| ATTO 3 | DOLPHIN |
|---|---|
| ![ATTO 3](pic/bydatoo3.png) | ![DOLPHIN](pic/byd_dolphin.png) |

| SEAL | SEALION 7 |
|---|---|
| ![SEAL](pic/seal.png) | ![SEALION 7](pic/sealion.png) |

## UI screenshots

The dashboard screenshots you sent are not in the repository yet as image files, so they cannot be rendered in README right now.

Add them into:

- `docs/screenshots/`

Suggested names:

- `docs/screenshots/01-summary.png`
- `docs/screenshots/02-climate.png`
- `docs/screenshots/03-vehicle.png`
- `docs/screenshots/04-actions.png`
- `docs/screenshots/05-tires.png`
- `docs/screenshots/06-editor-full.png`
- `docs/screenshots/07-editor-categories.png`

Then they can be embedded directly in this README.

## Notes

- `entity_prefix` example:
  - For `sensor.byd_atto_3_battery_level`, use `byd_atto_3`.
- Language files are loaded from:
  - `i18n_base_path/<language>.json`
- If local profile image is missing, the card falls back to built-in SVG.
