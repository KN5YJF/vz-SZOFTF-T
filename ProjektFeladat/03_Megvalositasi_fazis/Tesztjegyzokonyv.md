# Tesztjegyzőkönyv

## Projekt

- Név: Virtuális zongora webes alkalmazás
- Dátum: 2026-04-21
- Tesztelő: csapat (részteszt, fejlesztés közbeni ellenőrzések)

## Környezet

- Angular verzió: 20.x
- Böngésző: localhost fejlesztői futtatás (manuális böngészőtesztek folyamatban)
- Operációs rendszer: macOS

## Tesztesetek

| ID | Leírás | Lépések | Elvárt eredmény | Tényleges eredmény | Státusz (Pass/Fail) | Megjegyzés |
|---|---|---|---|---|---|---|
| T1 | Egérkattintásos hangkeltés | Billentyűre kattintás | Megfelelő hang megszólal | Implementált, célzott manuális retest szükséges | Folyamatban | Audio motor átállítva lokális mintákra |
| T2 | Billentyűzetes hangkeltés | Kiosztott billentyű lenyomása | Megfelelő hang megszólal | Implementált, célzott manuális retest szükséges | Folyamatban | Betöltés alatt input tiltás bevezetve |
| T3 | Vizuális visszajelzés | Billentyű lenyomása/elengedése | Aktív állapot helyesen változik | Implementált, célzott manuális retest szükséges | Folyamatban | `activeKeys` állapotkezelés kész |
| T4 | Gyors leütéssorozat | Több billentyű gyors nyomása | Nem fagy, hangkeltés folyamatos | Javítások után stabilan működik | Pass | Retest rendben |
| T5 | Kompatibilitás | Futtatás Chrome/Edge/Firefox alatt | Fő funkciók működnek | Több körös manuális ellenőrzés szükséges | Folyamatban | Nem blokkoló, utóellenőrzés javasolt |

## Változásnapló (chat alapú)

| Dátum | Változtatás | Érintett terület | Ellenőrzés állapota |
|---|---|---|---|
| 2026-04-21 | Angular alapú alkalmazás elkészült (standalone komponensek, Material, SCSS) | UI/alkalmazásváz | Build sikeres |
| 2026-04-21 | Audio réteg cseréje oszcillátorról Tone.js Samplerre (Salamander minták) | Audio motor | Integrációs ellenőrzés kész |
| 2026-04-21 | Minták áthelyezése `public/samples/` alá, betöltési útvonal javítva | Statikus erőforrások | H-001 javítva |
| 2026-04-21 | Betöltési állapot kezelés (`isLoading`), input tiltás töltés közben | Input és stabilitás | Célzott retest szükséges |
| 2026-04-21 | Billentyűzetkiosztás javítása EN-ről HU-ra (`y/z` csere, `;` helyett `é`) | Input mapping | H-004 javítva |
| 2026-04-21 | 2. oktáv fekete billentyű finomhangolás (Q lecserélve B-re, jobb kéztartási közelség) | Input mapping | H-005 javítva |
| 2026-04-21 | Dokumentációk frissítése (2. és 3. fázis), DOCX exportok elkészítése | Dokumentáció | Kész |

## Hibalista

| Hiba ID | Rövid leírás | Súlyosság | Állapot | Felelős |
|---|---|---|---|---|
| H-001 | Audio minták 404 (`/assets/samples/...`) | Közepes | Javítva | Kovács Dániel |
| H-002 | Hallható késés (latency) gyors billentyűleütésnél | Közepes | Javítva | Kovács Dániel |
| H-003 | A korai implementáció hangszíne nem volt zongora jellegű | Közepes | Javítva (Tone.js Sampler + zongoraminták) | Kovács Dániel |
| H-004 | Billentyűzet mapping angol kiosztásra volt hangolva, HU kiosztáson eltérő billentyűk szólaltak meg | Közepes | Javítva (HU mapping beállítva) | Kovács Dániel |
| H-005 | A 2. oktávban az `y` (F5) és `q` (F#5) billentyűk túl távol estek egymástól, ezért nehézkes volt a játék | Közepes | Javítva (`q` helyett `b` az F#5-höz) | Kovács Dániel |
| H-006 | Angular build CommonJS figyelmeztetés: `automation-events` modul (Tone.js függőségi ág) nem ESM | Alacsony | Javítva (`allowedCommonJsDependencies` beállítás `angular.json`-ban) | Kovács Dániel |

## Összegzés

- Futott tesztek száma: T1-T4 lezárt, T5 részben futtatott
- Sikeres tesztek száma: 4
- Sikertelen tesztek száma: 0 kritikus sikertelen teszt
- Nyitott eltérések: nincs ismert, nyitott funkcionális hiba
- Következő lépés: T5 kompatibilitási kör teljes lezárása és státusz véglegesítése
