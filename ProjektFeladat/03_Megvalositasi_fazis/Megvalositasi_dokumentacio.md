# Megvalósítási dokumentáció

## 0. Megvalósítási csomagok és felelősök

| Csomag | Tartalom | Felelős |
|---|---|---|
| M1 - UI alap | Billentyűk kiosztása, Angular Material layout, SCSS alaptéma | Perge György |
| M2 - Audio motor | Tone.js Sampler integráció, valós zongoraminták, hangindítás/leállítás | Kovács Dániel |
| M3 - Input réteg | Egér és billentyűzet eseménykezelés | Kovács Dániel |
| M4 - Integráció | UI és hangkeltés összekötése, állapotkezelés | Perge György + Kovács Dániel |
| M5 - Teszt és release | Tesztfutás, hibajavítás, végleges csomag | Teljes csapat |

## 1. Elkészült funkciók

- [x] Virtuális zongora billentyűzet megjelenítés
- [x] Egérkattintásra hangkeltés
- [x] Billentyűzet inputra hangkeltés
- [x] Vizuális visszajelzés lenyomáskor
- [ ] Alap kompatibilitás: Chrome, Edge, Firefox (folyamatban)

## 2. Technikai megoldás röviden

- Keretrendszer: Angular
- UI: Angular Material
- Stílus: SCSS
- Audio: Tone.js Sampler (Salamander Grand Piano minták)
- Minták tárolása: local static asset (`public/samples/`)
- Betöltési állapot: `isLoading` jelzés, input tiltása töltés alatt

## 3. Teszteredmények összefoglalója

| Teszt | Eredmény | Megjegyzés |
|---|---|---|
| Funkcionális tesztek | Részben kész | Alapfunkciók implementálva, manuális végigtesztelés folyamatban |
| Kompatibilitási tesztek | Folyamatban | Chrome/Edge/Firefox teljes körű ellenőrzés még hátra van |
| Regressziós tesztek | Nyitott | Lokális mintás átállás utáni kör szükséges |

### 3.1 Minimális tesztesetek

| ID | Teszteset | Elvárt eredmény | Állapot |
|---|---|---|---|
| T1 | Billentyű kattintás egérrel | A megfelelő hang megszólal | Folyamatban |
| T2 | Billentyűzet gomb lenyomás | A megfelelő hang megszólal | Folyamatban |
| T3 | Lenyomott billentyű vizuális állapota | Aktív stílus megjelenik lenyomáskor | Folyamatban |
| T4 | Gyors egymás utáni leütések | Nem akad meg a hangkeltés | Folyamatban |
| T5 | Böngésző kompatibilitás (3 böngésző) | Minden fő funkció működik | Nyitott |

## 3.2 Minőségi kilépési feltételek

- Kritikus (blokkoló) hiba nincs nyitva.
- T1-T5 tesztesetek legalább 90%-a sikeres.
- Dokumentáció és tesztjegyzőkönyv kitöltve.

## 4. Ismert korlátozások

- [x] Mobil optimalizálás részleges
- [x] Haladó zenei funkciók nem részei a scope-nak
- [x] Lokális mintatárolás miatt a kezdeti hálózati késleltetés csökkent

## 5. Megvalósítási mérföldkövek

| Mérföldkő | Leírás | Célidő |
|---|---|---|
| MK1 | UI és audio külön működik | 2026-04-21 (teljesítve) |
| MK2 | Integrált kliens alkalmazás működik | 2026-04-21 (teljesítve) |
| MK3 | Tesztelt release jelölt készen áll | 2026-05-10 |

## 6. Leadott csomag tartalma

- Forráskód
- Lokális audio minták (`public/samples/`)
- Tesztjegyzőkönyv
- Rövid használati leírás

## 7. Változásnapló és hibakezelés

| Dátum | Tétel | Leírás | Eredmény |
|---|---|---|---|
| 2026-04-21 | Audio architektúra módosítás | Oszcillátoros hangkeltés helyett Tone.js Sampler + Salamander zongoraminták | Valósághűbb hangzás, stabil működés |
| 2026-04-21 | Erőforrás útvonal javítás | Minták végleges helye: `public/samples/`, `SAMPLE_BASE='samples/'` | 404 hibák megszűntek |
| 2026-04-21 | Input stabilitás | Betöltés közbeni input tiltás, `isLoading` állapot bevezetése | Versenyhelyzetek csökkentek |
| 2026-04-21 | Input mapping javítás | Billentyűzetkiosztás EN-ről HU-ra igazítva (`y/z` csere, `;` helyett `é`) | Magyar kiosztáson konzisztens vezérlés |
| 2026-04-21 | Kódstílus tisztítás | Felesleges kommentek eltávolítása, template kötés egyszerűsítés | Karbantarthatóság javult |
| 2026-04-21 | DOCX export | `Projektterv`, `Kommunikacios_es_riportolasi_terv`, `Minosegbiztositasi_es_tesztelesi_terv` DOCX generálva | Beadásra előkészítve |

Utókövetési javaslat:

- T5 kompatibilitási ellenőrzés teljes lezárása Chrome/Edge/Firefox alatt a következő iterációban.
