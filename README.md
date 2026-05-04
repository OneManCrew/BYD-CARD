# BYD 3D Card

כרטיס Lovelace מתקדם ל-Home Assistant עבור רכבי BYD, עם עיצוב תלת מימדי, פרופילי רכב, תרגום רב-שפתי ותצוגת קטגוריות דינמית.

## מה הכרטיס כולל

- עיצוב 3D מודרני עם Hero לרכב ומצב סוללה
- בחירת פרופיל רכב: `ATTO 3`, `SEAL`, `DOLPHIN`, `SEALION 7`
- מיפוי אוטומטי לפי `entity_prefix`
- קטגוריות בלחצני Radio:
  - `Summary`
  - `Climate`
  - `Vehicle`
  - `Tires`
  - `Location`
  - `Quick actions`
- סידור קטגוריות ב-Drag & Drop מתוך UI Editor
- שימור הקטגוריה האחרונה אחרי רענון
- תמיכה בשפות: עברית, אנגלית, רוסית, צרפתית
- תמונות פרופיל מקומיות מתיקיית `pic/`

## התקנה

1. העתק את התיקייה לרכיב `www`:
   - `/config/www/byd-card/`
2. הוסף Resource:
   - URL: `/local/byd-card/byd-3d-card.js`
   - Type: `module`
3. בצע Hard Refresh לדפדפן.

## YAML בסיסי

```yaml
type: custom:byd-3d-card
vehicle_profile: atto3
title: Moshiko BYD ATTO 3
title_font_size: 46
entity_prefix: byd_atto_3
image_base_path: /local/byd-card/pic
language: he
i18n_base_path: /local/byd-card/i18n
show_climate: true
show_vehicle: true
show_tires: true
show_actions: true
show_location: true
refresh_interval_seconds: 25
```

## מבנה קבצים

- `byd-3d-card.js` - קובץ הכרטיס הראשי
- `i18n/*.json` - קבצי תרגום
- `pic/` - תמונות פרופיל רכבים

## תמונות פרופיל (עם הסבר על כל תמונה)

- `pic/bydatoo3.png`
  - תמונת פרופיל לרכב BYD ATTO 3, מופיעה בכרטיס וב-UI Editor.
- `pic/byd_dolphin.png`
  - תמונת פרופיל לרכב BYD DOLPHIN.
- `pic/seal.png`
  - תמונת פרופיל לרכב BYD SEAL (קובץ המקור שהוגדר לפרופיל Seal).
- `pic/sealion.png`
  - תמונת פרופיל לרכב BYD SEALION 7 (קובץ המקור שהוגדר לפרופיל Sealion 7).
- `pic/byd_seal.png`
  - גרסה מותאמת מידה (450x273) לשימוש אחיד בתצוגות.
- `pic/byd_sealion7.png`
  - גרסה מותאמת מידה (450x273) לשימוש אחיד בתצוגות.

## הסבר על סט תמונות הממשק (כמו בצילומי המסך)

1. `Summary view` (דו-שפתי):
   - מציג Hero, תג מצב סוללה, פס התראות, טאבי קטגוריות וכרטיס סיכום.
2. `Climate view`:
   - מציג מדדי אקלים, לחצני שליטה במזגן, מצבי קירור/חימום ושליטת חימום מושבים.
3. `Vehicle view`:
   - מציג סטטוס דלתות, חלונות, נעילה, אונליין, מהירות וקילומטראז׳.
4. `Quick actions view`:
   - פעולות מהירות: נעילה/פתיחה, מזגן, חימום סוללה, הבהוב אורות, מצא רכב, סגירת חלונות.
5. `Tires view`:
   - מציג לחץ אוויר לכל גלגל עם צבע התראה לפי ערך PSI.
6. `Editor full configuration`:
   - מסך העריכה המלא, כולל פרופיל, שפה, כותרת, גודל כותרת, נתיבי תמונות/שפה וקטגוריות.
7. `Editor categories and order`:
   - תצוגת צ׳קבוקסים להפעלה/כיבוי קטגוריות וסדר קטגוריות ב-Drag & Drop.

## הערות

- `entity_prefix` לדוגמה:
  - עבור `sensor.byd_atto_3_battery_level` הערך הוא `byd_atto_3`.
- קבצי שפה נטענים מתוך:
  - `i18n_base_path/<language>.json`
- אם תמונה מקומית לא נמצאת, הכרטיס נופל אוטומטית ל-SVG פנימי.
