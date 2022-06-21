require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Wine = require('./models/wine');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Reds', sortOrder: 10},
        {name: 'Whites', sortOrder: 20},
        {name: 'Sparkling', sortOrder: 30},
        {name: 'Rose', sortOrder: 40},
        {name: 'Dessert', sortOrder: 50},
        {name: 'Port', sortOrder: 60},
    ]);

    await Wine.deleteMany({});
    const wines = await Wine.create([
        {
            winery: "Ernesto Ruffo",
            name: "Amarone della Valpolicella Riserva N.V.",
            location: "Italy",
            image: "https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png",
            category: categories[0],
            price: 207.65
        },
        {
            winery: "Cartuxa",
            name: "Pêra-Manca Tinto 1990",
            location: "Portugal, Alentejo",
            image: "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
            category: categories[0],
            price: 299.99
        },
        {
            winery: "Schrader",
            name: "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2015",
            location: "United States, Oakville",
            image: "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
            category: categories[0],
            price: 190.00
        },
        {
            winery: "Hundred Acre",
            name: "Wraith Cabernet Sauvignon 2013",
            location: "United States, Napa Valley",
            image: "https://images.vivino.com/thumbs/PBhGMcRNQ7aVnVNr7VgnWA_pb_x300.png",
            category: categories[0],
            price: 570.00
        },
        {
            winery: "Darioush",
            name: "Darius II Cabernet Sauvignon 2016",
            location: "United States, Napa Valley",
            image: "https://images.vivino.com/thumbs/U19RXtSdRMmoAesl2CBygA_pb_x300.png",
            category: categories[0],
            price: 419.00
        },
        {
            winery: "Garbole",
            name: "Hurlo 2009",
            location: "Italy, Veneto",
            image: "https://images.vivino.com/thumbs/f_G1SS0eT_C6hZGGwdEZqA_pb_x300.png",
            category: categories[0],
            price: 651.05
        },
        {
            winery: "Scarecrow",
            name: "Cabernet Sauvignon 2016",
            location: "United States, Rutherford",
            image: "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
            category: categories[0],
            price: 919.00
        },
        {
            winery: "E. Guigal",
            name: "Côte-Rôtie La Mouline 1990",
            location: "France, Côte-Rôtie",
            image: "https://images.vivino.com/thumbs/HYVZMFigQ5qXxni7s9SpWw_pb_x300.png",
            category: categories[0],
            price: 948.00
        },
        {
            winery: "Jarvis",
            name: "Estate Finch Hollow Chardonnay (Cave Fermented) 2014",
            location: "United States, Napa Valley",
            image: "https://images.vivino.com/thumbs/pQ_92smWRKG7Y7h5_ZwD-w_pb_x300.png",
            category: categories[1],
            price: 139.99
        },
        {
            winery: "Keller",
            name: "G-Max Riesling 2009",
            location: "Germany, Rheinhessen",
            image: "https://images.vivino.com/thumbs/_tbErBvfQ3CcDGgJf-I6Dw_pb_x300.png",
            category: categories[1],
            price: 3499.97
        },
        {
            winery: "F.X. Pichler",
            name: "Unendlich Riesling 2007",
            location: "Austria, Wachau",
            image: "https://images.vivino.com/thumbs/Clc1N_neRBq_orOAKw9aqg_pb_x300.png",
            category: categories[1],
            price: 111.93
        },
        {
            winery: "Gaja",
            name: "Gaia & Rey Langhe 2011",
            location: "Italy, Langhe",
            image: "https://images.vivino.com/thumbs/5K9sXX9CQ8eonyEU71IlDA_pb_x300.png",
            category: categories[1],
            price: 349.99
        },
        {
            winery: "Marqués de Murrieta",
            name: "Castillo Ygay Gran Reserva Especial Blanco 1986",
            location: "Spain, Rioja",
            image: "https://images.vivino.com/thumbs/G3MU5UwBQ1eCX5A6CiPivg_pb_x300.png",
            category: categories[1],
            price: 650.00
        },
        {
            winery: "Adrian et Diego Mathier",
            name: "Ambassadeur Fumé Gros Rhin de Chamoson 2017",
            location: "Switzerland, Chamoson",
            image: "https://images.vivino.com/thumbs/bJnwPQlAS5ais1EUNIXHHQ_pb_x300.png",
            category: categories[1],
            price: 33.62
        },
        {
            winery: "Lothian Vineyards",
            name: "Vineyard Selection Chardonnay 2014",
            location: "South Africa, Elgin",
            image: "https://images.vivino.com/thumbs/xdoEV1phQJOW6T_G9-YVpQ_pb_x300.png",
            category: categories[1],
            price: 23.52
        },
        {
            winery: "Penfolds",
            name: "Yattarna Chardonnay (BIN 144) 2003",
            location: "Australia, Adelaide Hills",
            image: "https://images.vivino.com/thumbs/aMdgLSKeQVybJ-VdZSg6rQ_pb_x300.png",
            category: categories[1],
            price: 129.99
        },
        {
            winery: "Krug",
            name: "Clos d'Ambonnay Blanc de Noirs Brut Champagne 1995",
            location: "France, Champagne",
            image: "https://images.vivino.com/thumbs/DPq0ayGPR4SBeTDsYzLiiA_pb_x300.png",
            category: categories[2],
            price: 2799.00
        },
        {
            winery: "Dom Pérignon",
            name: "P2 Plénitude Brut Champagne 1995",
            location: "France, Champagne",
            image: "https://images.vivino.com/thumbs/n5By4_iWSS2Zmf7anQtL_Q_pb_x300.png",
            category: categories[2],
            price: 495.00
        },
        {
            winery: "Perrier-Jouët",
            name: "Belle Epoque Brut Champagne 1979",
            location: "France, Champagne",
            image: "https://images.vivino.com/thumbs/B976g0gBR1G4iniATCCKIQ_pb_x300.png",
            category: categories[2],
            price: 349.99
        },
        {
            winery: "Moët & Chandon",
            name: "White Star Champagne 2000",
            location: "France, Champagne",
            image: "https://images.vivino.com/thumbs/8XZqb52NRhaWolq_v4mVvg_pb_x300.png",
            category: categories[2],
            price: 75.00
        },
        {
            winery: "Louis Roederer",
            name: "Cristal Brut Champagne (Millésimé) 1990",
            location: "France, Champagne",
            image: "https://images.vivino.com/thumbs/bXZK_MhMQi-a2xrjEITv2A_pb_x300.png",
            category: categories[2],
            price: 299.95
        },
        {
            winery: "Bollinger",
            name: "Vieilles Vignes Françaises Blanc de Noirs Brut Champagne 1997",
            location: "France, Champagne",
            image: "https://images.vivino.com/thumbs/yYHkkUczRVaBfBBl1NAoww_pb_x300.png",
            category: categories[2],
            price: 949.50
        },
        {
            winery: "Taittinger",
            name: "Comtes de Champagne Blanc de Blancs 1983",
            location: "France, Champagne",
            image: "https://images.vivino.com/thumbs/5DnUGr-_SwOGKMxb1KuuGA_pb_x300.png",
            category: categories[2],
            price: 209.99
        },
        {
            winery: "Veuve Clicquot",
            name: "Rare Vintage Brut Champagne 2011",
            location: "France, Champagne",
            image: "https://images.vivino.com/thumbs/XjbCr0pLSNS30xQRHq729g_pb_x300.png",
            category: categories[2],
            price: 67.04
        },
        {
            winery: "Antica Terra",
            name: "Angelicall Rosé 2014",
            location: "United States, Willamette Valley",
            image: "https://images.vivino.com/thumbs/LRmcfSasTD22xR6lRSKcIw_pb_x300.png",
            category: categories[3],
            price: 95.00
        },
        {
            winery: "Minuty",
            name: "281 Rosé 2014",
            location: "France, Provence",
            image: "https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png",
            category: categories[3],
            price: 119.99
        },
        {
            winery: "Batič",
            name: "Rosé 2013",
            location: "Slovenia, Vipava",
            image: "https://images.vivino.com/thumbs/JGtf1UccSRab3Tv4lihFNw_pb_x300.png",
            category: categories[3],
            price: 31.49
        },
        {
            winery: "Marani",
            name: "Pirosmani Medium Dry Rosé 2016",
            location: "Georgia, Kakheti",
            image: "https://images.vivino.com/thumbs/zwtlu0ULTDiN43iBOuVE-w_pb_x300.png",
            category: categories[3],
            price: 9.40
        },
        {
            winery: "Monte da Ravasqueira",
            name: "Touriga Nacional 2010",
            location: "Portugal, Alentejano",
            image: "https://images.vivino.com/thumbs/mE9if7kSTWOjfGBiV5T5CA_pb_x300.png",
            category: categories[3],
            price: 20.42
        },
        {
            winery: "Weingut A. Diehl",
            name: "Eins Zu Eins Merlot Rosé 2016",
            location: "Germany, Pfalz",
            image: "https://images.vivino.com/thumbs/LzLL-fVGQGSPaw7RBeYpeg_pb_x300.png",
            category: categories[3],
            price: 5.69
        },
        {
            winery: "Moorooduc",
            name: "Pinot Gris on Skins 2016",
            location: "Australia, Mornington Peninsula",
            image: "https://images.vivino.com/thumbs/8ozeWUqjRFaQDuxaHMDlIg_pb_x300.png",
            category: categories[3],
            price: 28.32
        },
        {
            winery: "Chateau Purcari",
            name: "Rosé de Purcari N.V.",
            location: "Moldova, South Eastern",
            image: "https://images.vivino.com/thumbs/6iw-Jxp7T-2Q3LbmGvRQTA_pb_x300.png",
            category: categories[3],
            price: 18.99
        },
        {
            winery: "Oremus",
            name: "Eszencia 1999",
            location: "Hungary, Tokaj",
            image: "https://images.vivino.com/thumbs/_VYRnv4XTfCVEXlvhYw4AA_pb_x300.png",
            category: categories[4],
            price: 587.50
        },
        {
            winery: "Rolet",
            name: "Vin de Paille Arbois 2004",
            location: "France, Arbois",
            image: "https://images.vivino.com/thumbs/27IrPhDUR0KvICy3yYBEbQ_pb_x300.png",
            category: categories[4],
            price: 40.00
        },
        {
            winery: "Dal Forno Romano",
            name: "Recioto della Valpolicella (Monte Lodoletta) 1997",
            location: "Italy, Recioto della Valpolicella",
            image: "https://images.vivino.com/thumbs/ebLA3QizQn6mFNe39opVWA_pb_x300.png",
            category: categories[4],
            price: 249.87
        },
        {
            winery: "Argyros",
            name: "Vinsanto 20 Years Barrel Aged 1995",
            location: "Greece, Santorini",
            image: "https://images.vivino.com/thumbs/gIYmH1jJRh6IStnn9b06mA_pb_x300.png",
            category: categories[4],
            price: 83.21
        },
        {
            winery: "Peller Estates",
            name: "Oak Aged Vidal Blanc Icewine 2005",
            location: "Canada, Niagara Peninsula",
            image: "https://images.vivino.com/thumbs/XeCFsk30Tw2KMSmqLuCAfw_pb_x300.png",
            category: categories[4],
            price: 69.99
        },
        {
            winery: "Sine Qua Non",
            name: "Mr. K The Straw Man 2006",
            location: "United States, California",
            image: "https://images.vivino.com/thumbs/SDaFtDxvStCoJChKy8Xg3g_pb_x300.png",
            category: categories[4],
            price: 404.99
        },
        {
            winery: "Bacalhôa",
            name: "Setúbal Moscatel Roxo Superior 1985",
            location: "Portugal, Setúbal",
            image: "https://images.vivino.com/thumbs/0ssL66zES4S4dSg-08ermQ_pb_x300.png",
            category: categories[4],
            price: 142.00
        },
        {
            winery: "Kracher",
            name: "Grande Cuvée Nummer 6 Nouvelle Vague Trockenbeerenauslese 2001",
            location: "Austria, Burgenland",
            image: "https://images.vivino.com/thumbs/vSY4E5LeQfaQsinzlrvb-w_pb_x300.png",
            category: categories[4],
            price: 79.94
        },
        {
            winery: "Taylor's",
            name: "Scion Port 1855",
            location: "Portugal, Vintage Port",
            image: "https://images.vivino.com/thumbs/GrUwd8a_TSOF-1e2WVfwVA_pb_x300.png",
            category: categories[5],
            price: 3057.45
        },
        {
            winery: "Toro Albalá",
            name: "Don PX Convento Selección 1946",
            location: "Spain, Montilla-Moriles",
            image: "https://images.vivino.com/thumbs/ni3gQdaBR0eR1jwck1LaWA_pb_x300.png",
            category: categories[5],
            price: 285.00
        },
        {
            winery: "V. Sattui",
            name: "Madeira 2010",
            location: "United States, Napa Valley",
            image: "https://images.vivino.com/thumbs/LKgiR6xxQ6OcFP09vAch-A_pb_x300.png",
            category: categories[5],
            price: 61.00
        },
        {
            winery: "Cantine Intorcia",
            name: "3 Gen Marsala Superiore Riserva Ambra Dolce N.V.",
            location: "Italy, Marsala",
            image: "https://images.vivino.com/thumbs/Me7qpAl5Q12lGJEZouAphw_pb_x300.png",
            category: categories[5],
            price: 40.00
        },
        {
            winery: "Château Sisqueille",
            name: "Rivesaltes (Doux Naturel) 1936",
            location: "France, Rivesaltes",
            image: "https://images.vivino.com/thumbs/dzd3fs-2Q8GXgaLhhafLNA_pb_x300.png",
            category: categories[5],
            price: 200.00
        },
        {
            winery: "Penfolds",
            name: "50 Year Old Rare Tawny N.V.",
            location: "Australia, South Australia",
            image: "https://images.vivino.com/thumbs/1GeuZNtSQW6b5HewxCG3UQ_pb_x300.png",
            category: categories[5],
            price: 3200.00
        },
        {
            winery: "Prager Winery and Port Works",
            name: "Noble Companion Tawny Port 2008",
            location: "United States, Napa Valley",
            image: "https://images.vivino.com/thumbs/1Ous8R6yQL-JcZ-Cwz3s-g_pb_x300.png",
            category: categories[5],
            price: 125.00
        },
        {
            winery: "Boplaas",
            name: "Cape Vintage Reserve Port 2009",
            location: "South Africa, Western Cape",
            image: "https://images.vivino.com/thumbs/8ddLYDjnRNCPxXo-4PGwhw_pb_x300.png",
            category: categories[5],
            price: 48.00
        }
    ]);

    console.log(wines)

    process.exit();

})();