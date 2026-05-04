# BYD 3D Card

Custom Home Assistant Lovelace card for BYD vehicles with:
- 3D-style UI
- Vehicle profile picker (Atto 3, Seal, Dolphin, Sealion 7)
- Minimal setup via `entity_prefix`
- Optional local image folder support
- Category-based layout (summary, climate, vehicle, tires, location, actions)
- External language files (`he`, `en`, `ru`, `fr`)

## Files

- `byd-3d-card.js` - the custom card
- `pic/` - local vehicle images (currently includes Atto 3 + Dolphin)
- `i18n/` - language files used by the card UI

## Install (manual)

1. Copy this folder into HA `www` as:
   - `/config/www/byd-card/`
2. Add resource:
   - URL: `/local/byd-card/byd-3d-card.js`
   - Type: `module`
3. Add card in dashboard:

```yaml
type: custom:byd-3d-card
vehicle_profile: atto3
title: Moshiko BYD ATTO 3
entity_prefix: byd_atto_3
image_base_path: /local/byd-card/pic
language: he
i18n_base_path: /local/byd-card/i18n
show_climate: true
show_vehicle: true
show_tires: true
show_actions: true
show_location: true
```

## Optional overrides

You can override specific entities if your entity IDs are different:

```yaml
type: custom:byd-3d-card
vehicle_profile: atto3
entity_prefix: byd_atto_3
entities:
  battery: sensor.my_custom_battery
  range: sensor.my_custom_range
  charging: binary_sensor.my_custom_charging
```

## Notes

- If local profile image is missing, the card automatically falls back to built-in SVG.
- `entity_prefix` example: for `sensor.byd_atto_3_battery_level`, prefix is `byd_atto_3`.
- Language files are loaded from `i18n_base_path/<language>.json`.
