## Virtuális zongora
Ez a projekt egy böngészőben futó virtuális zongora alkalmazás. A felületen látható billentyűk egérrel kattinthatók, de a zongora a számítógép billentyűzetéről is vezérelhető. A hangkeltéshez a program helyben tárolt zongoramintákat használ, ezért futás közben nem kell külső hangforrást betöltenie.

## Technológiák
Angular 20
TypeScript
SCSS
Angular Material
Tone.js
Helyi MP3 zongoraminták a public/samples mappában

## Telepítés
A projekt indítása előtt a függőségeket telepíteni kell:

npm ci
Indítás fejlesztői módban
npm start
Sikeres indítás után az alkalmazás itt érhető el:

http://localhost:4200/
Fordítás
A végleges build elkészítéséhez:

npm run build
A build eredménye a dist/virtualis-zongora mappába kerül.

##Használat, user guide##
Az alkalmazás kétféleképpen használható:

egérrel a zongorabillentyűkre kattintva,
a számítógép billentyűzetével.
Billentyűkiosztás:

Oktáv	Fehér billentyűk	Fekete billentyűk
C4-B4	a s d f g h j	w e t z u
C5-B5	k l é y x c v	o p b n m
Magyar billentyűzetkiosztásnál külön ellenőrizve lett az é, y és z használata, mert ezek eltérhetnek angol kiosztáshoz képest.

## Tesztelési javaslat
Beadás vagy bemutatás előtt érdemes végigmenni ezen a rövid ellenőrzésen:

az alkalmazás elindul npm start paranccsal,
a production build elkészül npm run build paranccsal,
minden fehér billentyű megszólal egérrel,
minden fekete billentyű megszólal egérrel,
a billentyűzetes vezérlés működik,
gyors egymás utáni leütéseknél nem fagy le a felület,
oldalfrissítés után újra betöltődnek a hangminták.

## Ismert korlátozások
Az alkalmazás elsősorban asztali böngészős használatra készült.
A projekt nem tartalmaz felvétel, visszajátszás vagy kottafunkciót.
A hangminőség a mellékelt MP3 mintákon és a böngésző hangkezelésén múlik.
Automata tesztek jelenleg nincsenek a projektben, a működés ellenőrzése manuális tesztekkel történt.

## Projekt célja
A fejlesztés célja egy egyszerű, bemutatható webes zongoraalkalmazás elkészítése volt, amely alkalmas a szoftverfejlesztési projektfeladat megvalósítási részének bemutatására. A hangsúly az alapfunkciók működésén, a böngészős futtathatóságon és a dokumentálható tesztelésen volt.