About the design

Färgvalsmotivering:

I gruppens första möte så började vi kika igenom onepagelove och bestämma vilken typ av tema vi ville ha på projektet. Ett Café för kodare blev bestämt och vi kikade lite på inspirations-sidor och hittde en grönblå färg på en av sidorna som vi alla tyckte om så den fick bli utgångspunkten.

Vi ville ha en grundpalett som kändes kaffe-betonad och kikade på lite inspirationsbilder och hittade en bild med en bakgrundsfärg i en ganska ljust beige färg som vi sedan valde några nyanser av, en väldigt mörk för footer, en lite ljusare för innehåll etc.

Den lysande gröna färgen kändes som en fin match på det bruna för att använda till knappar och ev länkar. Ytterligare en senapsgul färg lades till för att vara med på några få element som ett komplement till den gröna färgen ifall vi ville.

Typsnitt:

Vi har valt att hålla oss till tre olika typsnitt genom hela projektet, som alla är tillgängliga via Google fonts och som vi anser passar in med det genomgående temat för projektet (kombinationen av kaffe och programmering). En stor del av texten har typsnittet Roboto Mono, vilket vi valde då Roboto Mono är standard-typsnittet i VS code. Utöver detta har vi använt oss av typsnitten Cinzel och Yellowtail för rubriker och slogan.

Layout:

Vi har genomgående tagit hänsyn till tillgänglighet och anpassat storlek på text och knappar för att passa såväl desktop som tablet- och mobilanvändare.

Målsättningen var att få en överblickbar och snabbnavigerad layout. Sidan är uppdelad i "block" som antingen är staplade på varandra eller bredvid varandra. Varje block har en egen bakgrundfärg/mönster. Syftet med detta är ett varje block ska kännas unik, både vad gäller stil och innehåll.

På desktop och tablet är navigeringen högst upp på sidan och på mobil i en hamburgermeny. Navigeringen är på detta sätt genast tydlig för användaren.

Vid klick på "Sign up!" knappen så öppnas en pop-up ruta. På mobil- och tablet så täcker denna ruta hela bredden och på desktop täcker den lite mer än halva bredden. På så vis är användaren alltid kvar på sidan.

# Om appen (från utvecklarna)

## Projektstruktur

├── assets (grafik från designteam)

├── src (mapp för filer att jobba med)

│ ├── img

│ ├── script

│ ├── scss

├── dev (mapp med kompilerade filer för dev.)

├── dist (mapp med kompilerade filer för prod.)

## Installera paket

Installera paketen i [package.json](./package.json) med "npm install"

- Parcel är en bundler som hjälper till att hantera utvecklarmiljön och bygga siten när den är redo för deployment. [Parceljs.org](https://parceljs.org/)
- Gh-pages är ett paket som hjälper till att publicera till GitHub pages. [gh-pages](https://www.npmjs.com/package/gh-pages)
- SASS hjälper till att kompilera SCSS till CSS. [Sass-lang.com](https://sass-lang.com/)
- Prettier hjälper till att formatera koden enhetligt. [Prettier.io](https://prettier.io/)

## Utveckla, Bygg eller Publicera siten

Script finns i [package.json](./package.json)

#### Starta utvecklarmiljön

Kör "npm run dev". Följ adressen till localhost som kommer upp i terminalen.

#### Bygg siten

Kör "npm run build" bygger siten i mappen "dist" i roten.

#### Formatera med Prettier

Kör "npm run format" för att formatera koden i projektets filer.

#### Publicera till GitHub pages

Kör "npm run deploy". Då byggs siten till mappen "dist" i roten. Det skapas en ny branch i repot som heter gh-pages (om den inte redan finns) samt siten publiceras på Github pages. Deploy scriptet kör även build-scriptet så det är inte nödvändigt att först köra "npm run build" vid publicering till GitHub pages.

[https://medieinstitutet.github.io/fed22d-grafiska-verktyg-tomatsoppan/](https://medieinstitutet.github.io/fed22d-grafiska-verktyg-tomatsoppan/)

## Bilder på slutresultatet 📷
#### Desktop-vy:
![desktop](https://user-images.githubusercontent.com/95537845/213437101-b250e80f-3a8d-42f6-ad20-3d993d9aed0d.png)

#### Cookie pop-up:
![cookie-popup](https://user-images.githubusercontent.com/95537845/213437153-92fe08e1-720b-47eb-a02c-28f5dec79c0c.png)

#### Event pop-up:
![event-popup](https://user-images.githubusercontent.com/95537845/213437202-a8dc9990-0db5-4157-a188-5733660d0f95.png)

☞ Vill du se bild på mobil-vy? [Klicka här](https://user-images.githubusercontent.com/95537845/213438738-99bff800-7929-49f7-86b2-fd7d204fc122.png)

☞ Vill du se bild på tablet-vy? [Klicka här](https://user-images.githubusercontent.com/95537845/213438765-b97994be-d8ab-473a-81de-b93add7b86f4.png)     
  

## Vi som utvecklat sidan 💻
- [@etrigo](https://github.com/etrigo) 
- [@nanidam](https://github.com/nanidam) 
- [@julia-lundbergish](https://github.com/julia-lundbergish) 
- [@zandrastr](https://github.com/zandrastr) 


