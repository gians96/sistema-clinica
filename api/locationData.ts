import type { Country, Department, Province, District } from "@/interfaces/Location.interface";
const departments: Department[] =
	[
		{
			id: "01",
			description: "AMAZONAS",
			active: true
		},
		{
			id: "02",
			description: "ÁNCASH",
			active: true
		},
		{
			id: "03",
			description: "APURIMAC",
			active: true
		},
		{
			id: "04",
			description: "AREQUIPA",
			active: true
		},
		{
			id: "05",
			description: "AYACUCHO",
			active: true
		},
		{
			id: "06",
			description: "CAJAMARCA",
			active: true
		},
		{
			id: "07",
			description: "CALLAO",
			active: true
		},
		{
			id: "08",
			description: "CUSCO",
			active: true
		},
		{
			id: "09",
			description: "HUANCAVELICA",
			active: true
		},
		{
			id: "10",
			description: "HUÁNUCO",
			active: true
		},
		{
			id: "11",
			description: "ICA",
			active: true
		},
		{
			id: "12",
			description: "JUNÍN",
			active: true
		},
		{
			id: "13",
			description: "LA LIBERTAD",
			active: true
		},
		{
			id: "14",
			description: "LAMBAYEQUE",
			active: true
		},
		{
			id: "15",
			description: "LIMA",
			active: true
		},
		{
			id: "16",
			description: "LORETO",
			active: true
		},
		{
			id: "17",
			description: "MADRE DE DIOS",
			active: true
		},
		{
			id: "18",
			description: "MOQUEGUA",
			active: true
		},
		{
			id: "19",
			description: "PASCO",
			active: true
		},
		{
			id: "20",
			description: "PIURA",
			active: true
		},
		{
			id: "21",
			description: "PUNO",
			active: true
		},
		{
			id: "22",
			description: "SAN MARTIN",
			active: true
		},
		{
			id: "23",
			description: "TACNA",
			active: true
		},
		{
			id: "24",
			description: "TUMBES",
			active: true
		},
		{
			id: "25",
			description: "UCAYALI",
			active: true
		}
	]

const provinces: Province[] =
	[
		{
			id: "0101",
			department_id: "01",
			description: "Chachapoyas",
			active: true
		},
		{
			id: "0102",
			department_id: "01",
			description: "Bagua",
			active: true
		},
		{
			id: "0103",
			department_id: "01",
			description: "Bongará",
			active: true
		},
		{
			id: "0104",
			department_id: "01",
			description: "Condorcanqui",
			active: true
		},
		{
			id: "0105",
			department_id: "01",
			description: "Luya",
			active: true
		},
		{
			id: "0106",
			department_id: "01",
			description: "Rodríguez de Mendoza",
			active: true
		},
		{
			id: "0107",
			department_id: "01",
			description: "Utcubamba",
			active: true
		},
		{
			id: "0201",
			department_id: "02",
			description: "Huaraz",
			active: true
		},
		{
			id: "0202",
			department_id: "02",
			description: "Aija",
			active: true
		},
		{
			id: "0203",
			department_id: "02",
			description: "Antonio Raymondi",
			active: true
		},
		{
			id: "0204",
			department_id: "02",
			description: "Asunción",
			active: true
		},
		{
			id: "0205",
			department_id: "02",
			description: "Bolognesi",
			active: true
		},
		{
			id: "0206",
			department_id: "02",
			description: "Carhuaz",
			active: true
		},
		{
			id: "0207",
			department_id: "02",
			description: "Carlos Fermín Fitzcarrald",
			active: true
		},
		{
			id: "0208",
			department_id: "02",
			description: "Casma",
			active: true
		},
		{
			id: "0209",
			department_id: "02",
			description: "Corongo",
			active: true
		},
		{
			id: "0210",
			department_id: "02",
			description: "Huari",
			active: true
		},
		{
			id: "0211",
			department_id: "02",
			description: "Huarmey",
			active: true
		},
		{
			id: "0212",
			department_id: "02",
			description: "Huaylas",
			active: true
		},
		{
			id: "0213",
			department_id: "02",
			description: "Mariscal Luzuriaga",
			active: true
		},
		{
			id: "0214",
			department_id: "02",
			description: "Ocros",
			active: true
		},
		{
			id: "0215",
			department_id: "02",
			description: "Pallasca",
			active: true
		},
		{
			id: "0216",
			department_id: "02",
			description: "Pomabamba",
			active: true
		},
		{
			id: "0217",
			department_id: "02",
			description: "Recuay",
			active: true
		},
		{
			id: "0218",
			department_id: "02",
			description: "Santa",
			active: true
		},
		{
			id: "0219",
			department_id: "02",
			description: "Sihuas",
			active: true
		},
		{
			id: "0220",
			department_id: "02",
			description: "Yungay",
			active: true
		},
		{
			id: "0301",
			department_id: "03",
			description: "Abancay",
			active: true
		},
		{
			id: "0302",
			department_id: "03",
			description: "Andahuaylas",
			active: true
		},
		{
			id: "0303",
			department_id: "03",
			description: "Antabamba",
			active: true
		},
		{
			id: "0304",
			department_id: "03",
			description: "Aymaraes",
			active: true
		},
		{
			id: "0305",
			department_id: "03",
			description: "Cotabambas",
			active: true
		},
		{
			id: "0306",
			department_id: "03",
			description: "Chincheros",
			active: true
		},
		{
			id: "0307",
			department_id: "03",
			description: "Grau",
			active: true
		},
		{
			id: "0401",
			department_id: "04",
			description: "Arequipa",
			active: true
		},
		{
			id: "0402",
			department_id: "04",
			description: "Camaná",
			active: true
		},
		{
			id: "0403",
			department_id: "04",
			description: "Caravelí",
			active: true
		},
		{
			id: "0404",
			department_id: "04",
			description: "Castilla",
			active: true
		},
		{
			id: "0405",
			department_id: "04",
			description: "Caylloma",
			active: true
		},
		{
			id: "0406",
			department_id: "04",
			description: "Condesuyos",
			active: true
		},
		{
			id: "0407",
			department_id: "04",
			description: "Islay",
			active: true
		},
		{
			id: "0408",
			department_id: "04",
			description: "La Uniòn",
			active: true
		},
		{
			id: "0501",
			department_id: "05",
			description: "Huamanga",
			active: true
		},
		{
			id: "0502",
			department_id: "05",
			description: "Cangallo",
			active: true
		},
		{
			id: "0503",
			department_id: "05",
			description: "Huanca Sancos",
			active: true
		},
		{
			id: "0504",
			department_id: "05",
			description: "Huanta",
			active: true
		},
		{
			id: "0505",
			department_id: "05",
			description: "La Mar",
			active: true
		},
		{
			id: "0506",
			department_id: "05",
			description: "Lucanas",
			active: true
		},
		{
			id: "0507",
			department_id: "05",
			description: "Parinacochas",
			active: true
		},
		{
			id: "0508",
			department_id: "05",
			description: "Pàucar del Sara Sara",
			active: true
		},
		{
			id: "0509",
			department_id: "05",
			description: "Sucre",
			active: true
		},
		{
			id: "0510",
			department_id: "05",
			description: "Víctor Fajardo",
			active: true
		},
		{
			id: "0511",
			department_id: "05",
			description: "Vilcas Huamán",
			active: true
		},
		{
			id: "0601",
			department_id: "06",
			description: "Cajamarca",
			active: true
		},
		{
			id: "0602",
			department_id: "06",
			description: "Cajabamba",
			active: true
		},
		{
			id: "0603",
			department_id: "06",
			description: "Celendín",
			active: true
		},
		{
			id: "0604",
			department_id: "06",
			description: "Chota",
			active: true
		},
		{
			id: "0605",
			department_id: "06",
			description: "Contumazá",
			active: true
		},
		{
			id: "0606",
			department_id: "06",
			description: "Cutervo",
			active: true
		},
		{
			id: "0607",
			department_id: "06",
			description: "Hualgayoc",
			active: true
		},
		{
			id: "0608",
			department_id: "06",
			description: "Jaén",
			active: true
		},
		{
			id: "0609",
			department_id: "06",
			description: "San Ignacio",
			active: true
		},
		{
			id: "0610",
			department_id: "06",
			description: "San Marcos",
			active: true
		},
		{
			id: "0611",
			department_id: "06",
			description: "San Miguel",
			active: true
		},
		{
			id: "0612",
			department_id: "06",
			description: "San Pablo",
			active: true
		},
		{
			id: "0613",
			department_id: "06",
			description: "Santa Cruz",
			active: true
		},
		{
			id: "0701",
			department_id: "07",
			description: "Prov. Const. del Callao",
			active: true
		},
		{
			id: "0801",
			department_id: "08",
			description: "Cusco",
			active: true
		},
		{
			id: "0802",
			department_id: "08",
			description: "Acomayo",
			active: true
		},
		{
			id: "0803",
			department_id: "08",
			description: "Anta",
			active: true
		},
		{
			id: "0804",
			department_id: "08",
			description: "Calca",
			active: true
		},
		{
			id: "0805",
			department_id: "08",
			description: "Canas",
			active: true
		},
		{
			id: "0806",
			department_id: "08",
			description: "Canchis",
			active: true
		},
		{
			id: "0807",
			department_id: "08",
			description: "Chumbivilcas",
			active: true
		},
		{
			id: "0808",
			department_id: "08",
			description: "Espinar",
			active: true
		},
		{
			id: "0809",
			department_id: "08",
			description: "La Convención",
			active: true
		},
		{
			id: "0810",
			department_id: "08",
			description: "Paruro",
			active: true
		},
		{
			id: "0811",
			department_id: "08",
			description: "Paucartambo",
			active: true
		},
		{
			id: "0812",
			department_id: "08",
			description: "Quispicanchi",
			active: true
		},
		{
			id: "0813",
			department_id: "08",
			description: "Urubamba",
			active: true
		},
		{
			id: "0901",
			department_id: "09",
			description: "Huancavelica",
			active: true
		},
		{
			id: "0902",
			department_id: "09",
			description: "Acobamba",
			active: true
		},
		{
			id: "0903",
			department_id: "09",
			description: "Angaraes",
			active: true
		},
		{
			id: "0904",
			department_id: "09",
			description: "Castrovirreyna",
			active: true
		},
		{
			id: "0905",
			department_id: "09",
			description: "Churcampa",
			active: true
		},
		{
			id: "0906",
			department_id: "09",
			description: "Huaytará",
			active: true
		},
		{
			id: "0907",
			department_id: "09",
			description: "Tayacaja",
			active: true
		},
		{
			id: "1001",
			department_id: "10",
			description: "Huánuco",
			active: true
		},
		{
			id: "1002",
			department_id: "10",
			description: "Ambo",
			active: true
		},
		{
			id: "1003",
			department_id: "10",
			description: "Dos de Mayo",
			active: true
		},
		{
			id: "1004",
			department_id: "10",
			description: "Huacaybamba",
			active: true
		},
		{
			id: "1005",
			department_id: "10",
			description: "Huamalíes",
			active: true
		},
		{
			id: "1006",
			department_id: "10",
			description: "Leoncio Prado",
			active: true
		},
		{
			id: "1007",
			department_id: "10",
			description: "Marañón",
			active: true
		},
		{
			id: "1008",
			department_id: "10",
			description: "Pachitea",
			active: true
		},
		{
			id: "1009",
			department_id: "10",
			description: "Puerto Inca",
			active: true
		},
		{
			id: "1010",
			department_id: "10",
			description: "Lauricocha",
			active: true
		},
		{
			id: "1011",
			department_id: "10",
			description: "Yarowilca",
			active: true
		},
		{
			id: "1101",
			department_id: "11",
			description: "Ica",
			active: true
		},
		{
			id: "1102",
			department_id: "11",
			description: "Chincha",
			active: true
		},
		{
			id: "1103",
			department_id: "11",
			description: "Nasca",
			active: true
		},
		{
			id: "1104",
			department_id: "11",
			description: "Palpa",
			active: true
		},
		{
			id: "1105",
			department_id: "11",
			description: "Pisco",
			active: true
		},
		{
			id: "1201",
			department_id: "12",
			description: "Huancayo",
			active: true
		},
		{
			id: "1202",
			department_id: "12",
			description: "Concepción",
			active: true
		},
		{
			id: "1203",
			department_id: "12",
			description: "Chanchamayo",
			active: true
		},
		{
			id: "1204",
			department_id: "12",
			description: "Jauja",
			active: true
		},
		{
			id: "1205",
			department_id: "12",
			description: "Junín",
			active: true
		},
		{
			id: "1206",
			department_id: "12",
			description: "Satipo",
			active: true
		},
		{
			id: "1207",
			department_id: "12",
			description: "Tarma",
			active: true
		},
		{
			id: "1208",
			department_id: "12",
			description: "Yauli",
			active: true
		},
		{
			id: "1209",
			department_id: "12",
			description: "Chupaca",
			active: true
		},
		{
			id: "1301",
			department_id: "13",
			description: "Trujillo",
			active: true
		},
		{
			id: "1302",
			department_id: "13",
			description: "Ascope",
			active: true
		},
		{
			id: "1303",
			department_id: "13",
			description: "Bolívar",
			active: true
		},
		{
			id: "1304",
			department_id: "13",
			description: "Chepén",
			active: true
		},
		{
			id: "1305",
			department_id: "13",
			description: "Julcán",
			active: true
		},
		{
			id: "1306",
			department_id: "13",
			description: "Otuzco",
			active: true
		},
		{
			id: "1307",
			department_id: "13",
			description: "Pacasmayo",
			active: true
		},
		{
			id: "1308",
			department_id: "13",
			description: "Pataz",
			active: true
		},
		{
			id: "1309",
			department_id: "13",
			description: "Sánchez Carrión",
			active: true
		},
		{
			id: "1310",
			department_id: "13",
			description: "Santiago de Chuco",
			active: true
		},
		{
			id: "1311",
			department_id: "13",
			description: "Gran Chimú",
			active: true
		},
		{
			id: "1312",
			department_id: "13",
			description: "Virú",
			active: true
		},
		{
			id: "1401",
			department_id: "14",
			description: "Chiclayo",
			active: true
		},
		{
			id: "1402",
			department_id: "14",
			description: "Ferreñafe",
			active: true
		},
		{
			id: "1403",
			department_id: "14",
			description: "Lambayeque",
			active: true
		},
		{
			id: "1501",
			department_id: "15",
			description: "Lima",
			active: true
		},
		{
			id: "1502",
			department_id: "15",
			description: "Barranca",
			active: true
		},
		{
			id: "1503",
			department_id: "15",
			description: "Cajatambo",
			active: true
		},
		{
			id: "1504",
			department_id: "15",
			description: "Canta",
			active: true
		},
		{
			id: "1505",
			department_id: "15",
			description: "Cañete",
			active: true
		},
		{
			id: "1506",
			department_id: "15",
			description: "Huaral",
			active: true
		},
		{
			id: "1507",
			department_id: "15",
			description: "Huarochirí",
			active: true
		},
		{
			id: "1508",
			department_id: "15",
			description: "Huaura",
			active: true
		},
		{
			id: "1509",
			department_id: "15",
			description: "Oyón",
			active: true
		},
		{
			id: "1510",
			department_id: "15",
			description: "Yauyos",
			active: true
		},
		{
			id: "1601",
			department_id: "16",
			description: "Maynas",
			active: true
		},
		{
			id: "1602",
			department_id: "16",
			description: "Alto Amazonas",
			active: true
		},
		{
			id: "1603",
			department_id: "16",
			description: "Loreto",
			active: true
		},
		{
			id: "1604",
			department_id: "16",
			description: "Mariscal Ramón Castilla",
			active: true
		},
		{
			id: "1605",
			department_id: "16",
			description: "Requena",
			active: true
		},
		{
			id: "1606",
			department_id: "16",
			description: "Ucayali",
			active: true
		},
		{
			id: "1607",
			department_id: "16",
			description: "Datem del Marañón",
			active: true
		},
		{
			id: "1608",
			department_id: "16",
			description: "Putumayo",
			active: true
		},
		{
			id: "1701",
			department_id: "17",
			description: "Tambopata",
			active: true
		},
		{
			id: "1702",
			department_id: "17",
			description: "Manu",
			active: true
		},
		{
			id: "1703",
			department_id: "17",
			description: "Tahuamanu",
			active: true
		},
		{
			id: "1801",
			department_id: "18",
			description: "Mariscal Nieto",
			active: true
		},
		{
			id: "1802",
			department_id: "18",
			description: "General Sánchez Cerro",
			active: true
		},
		{
			id: "1803",
			department_id: "18",
			description: "Ilo",
			active: true
		},
		{
			id: "1901",
			department_id: "19",
			description: "Pasco",
			active: true
		},
		{
			id: "1902",
			department_id: "19",
			description: "Daniel Alcides Carrión",
			active: true
		},
		{
			id: "1903",
			department_id: "19",
			description: "Oxapampa",
			active: true
		},
		{
			id: "2001",
			department_id: "20",
			description: "Piura",
			active: true
		},
		{
			id: "2002",
			department_id: "20",
			description: "Ayabaca",
			active: true
		},
		{
			id: "2003",
			department_id: "20",
			description: "Huancabamba",
			active: true
		},
		{
			id: "2004",
			department_id: "20",
			description: "Morropón",
			active: true
		},
		{
			id: "2005",
			department_id: "20",
			description: "Paita",
			active: true
		},
		{
			id: "2006",
			department_id: "20",
			description: "Sullana",
			active: true
		},
		{
			id: "2007",
			department_id: "20",
			description: "Talara",
			active: true
		},
		{
			id: "2008",
			department_id: "20",
			description: "Sechura",
			active: true
		},
		{
			id: "2101",
			department_id: "21",
			description: "Puno",
			active: true
		},
		{
			id: "2102",
			department_id: "21",
			description: "Azángaro",
			active: true
		},
		{
			id: "2103",
			department_id: "21",
			description: "Carabaya",
			active: true
		},
		{
			id: "2104",
			department_id: "21",
			description: "Chucuito",
			active: true
		},
		{
			id: "2105",
			department_id: "21",
			description: "El Collao",
			active: true
		},
		{
			id: "2106",
			department_id: "21",
			description: "Huancané",
			active: true
		},
		{
			id: "2107",
			department_id: "21",
			description: "Lampa",
			active: true
		},
		{
			id: "2108",
			department_id: "21",
			description: "Melgar",
			active: true
		},
		{
			id: "2109",
			department_id: "21",
			description: "Moho",
			active: true
		},
		{
			id: "2110",
			department_id: "21",
			description: "San Antonio de Putina",
			active: true
		},
		{
			id: "2111",
			department_id: "21",
			description: "San Román",
			active: true
		},
		{
			id: "2112",
			department_id: "21",
			description: "Sandia",
			active: true
		},
		{
			id: "2113",
			department_id: "21",
			description: "Yunguyo",
			active: true
		},
		{
			id: "2201",
			department_id: "22",
			description: "Moyobamba",
			active: true
		},
		{
			id: "2202",
			department_id: "22",
			description: "Bellavista",
			active: true
		},
		{
			id: "2203",
			department_id: "22",
			description: "El Dorado",
			active: true
		},
		{
			id: "2204",
			department_id: "22",
			description: "Huallaga",
			active: true
		},
		{
			id: "2205",
			department_id: "22",
			description: "Lamas",
			active: true
		},
		{
			id: "2206",
			department_id: "22",
			description: "Mariscal Cáceres",
			active: true
		},
		{
			id: "2207",
			department_id: "22",
			description: "Picota",
			active: true
		},
		{
			id: "2208",
			department_id: "22",
			description: "Rioja",
			active: true
		},
		{
			id: "2209",
			department_id: "22",
			description: "San Martín",
			active: true
		},
		{
			id: "2210",
			department_id: "22",
			description: "Tocache",
			active: true
		},
		{
			id: "2301",
			department_id: "23",
			description: "Tacna",
			active: true
		},
		{
			id: "2302",
			department_id: "23",
			description: "Candarave",
			active: true
		},
		{
			id: "2303",
			department_id: "23",
			description: "Jorge Basadre",
			active: true
		},
		{
			id: "2304",
			department_id: "23",
			description: "Tarata",
			active: true
		},
		{
			id: "2401",
			department_id: "24",
			description: "Tumbes",
			active: true
		},
		{
			id: "2402",
			department_id: "24",
			description: "Contralmirante Villar",
			active: true
		},
		{
			id: "2403",
			department_id: "24",
			description: "Zarumilla",
			active: true
		},
		{
			id: "2501",
			department_id: "25",
			description: "Coronel Portillo",
			active: true
		},
		{
			id: "2502",
			department_id: "25",
			description: "Atalaya",
			active: true
		},
		{
			id: "2503",
			department_id: "25",
			description: "Padre Abad",
			active: true
		},
		{
			id: "2504",
			department_id: "25",
			description: "Purús",
			active: true
		}
	]

const districts: District[] =
	[
		{
			id: "010101",
			province_id: "0101",
			description: "Chachapoyas",
			active: true
		},
		{
			id: "010102",
			province_id: "0101",
			description: "Asunción",
			active: true
		},
		{
			id: "010103",
			province_id: "0101",
			description: "Balsas",
			active: true
		},
		{
			id: "010104",
			province_id: "0101",
			description: "Cheto",
			active: true
		},
		{
			id: "010105",
			province_id: "0101",
			description: "Chiliquin",
			active: true
		},
		{
			id: "010106",
			province_id: "0101",
			description: "Chuquibamba",
			active: true
		},
		{
			id: "010107",
			province_id: "0101",
			description: "Granada",
			active: true
		},
		{
			id: "010108",
			province_id: "0101",
			description: "Huancas",
			active: true
		},
		{
			id: "010109",
			province_id: "0101",
			description: "La Jalca",
			active: true
		},
		{
			id: "010110",
			province_id: "0101",
			description: "Leimebamba",
			active: true
		},
		{
			id: "010111",
			province_id: "0101",
			description: "Levanto",
			active: true
		},
		{
			id: "010112",
			province_id: "0101",
			description: "Magdalena",
			active: true
		},
		{
			id: "010113",
			province_id: "0101",
			description: "Mariscal Castilla",
			active: true
		},
		{
			id: "010114",
			province_id: "0101",
			description: "Molinopampa",
			active: true
		},
		{
			id: "010115",
			province_id: "0101",
			description: "Montevideo",
			active: true
		},
		{
			id: "010116",
			province_id: "0101",
			description: "Olleros",
			active: true
		},
		{
			id: "010117",
			province_id: "0101",
			description: "Quinjalca",
			active: true
		},
		{
			id: "010118",
			province_id: "0101",
			description: "San Francisco de Daguas",
			active: true
		},
		{
			id: "010119",
			province_id: "0101",
			description: "San Isidro de Maino",
			active: true
		},
		{
			id: "010120",
			province_id: "0101",
			description: "Soloco",
			active: true
		},
		{
			id: "010121",
			province_id: "0101",
			description: "Sonche",
			active: true
		},
		{
			id: "010201",
			province_id: "0102",
			description: "Bagua",
			active: true
		},
		{
			id: "010202",
			province_id: "0102",
			description: "Aramango",
			active: true
		},
		{
			id: "010203",
			province_id: "0102",
			description: "Copallin",
			active: true
		},
		{
			id: "010204",
			province_id: "0102",
			description: "El Parco",
			active: true
		},
		{
			id: "010205",
			province_id: "0102",
			description: "Imaza",
			active: true
		},
		{
			id: "010206",
			province_id: "0102",
			description: "La Peca",
			active: true
		},
		{
			id: "010301",
			province_id: "0103",
			description: "Jumbilla",
			active: true
		},
		{
			id: "010302",
			province_id: "0103",
			description: "Chisquilla",
			active: true
		},
		{
			id: "010303",
			province_id: "0103",
			description: "Churuja",
			active: true
		},
		{
			id: "010304",
			province_id: "0103",
			description: "Corosha",
			active: true
		},
		{
			id: "010305",
			province_id: "0103",
			description: "Cuispes",
			active: true
		},
		{
			id: "010306",
			province_id: "0103",
			description: "Florida",
			active: true
		},
		{
			id: "010307",
			province_id: "0103",
			description: "Jazan",
			active: true
		},
		{
			id: "010308",
			province_id: "0103",
			description: "Recta",
			active: true
		},
		{
			id: "010309",
			province_id: "0103",
			description: "San Carlos",
			active: true
		},
		{
			id: "010310",
			province_id: "0103",
			description: "Shipasbamba",
			active: true
		},
		{
			id: "010311",
			province_id: "0103",
			description: "Valera",
			active: true
		},
		{
			id: "010312",
			province_id: "0103",
			description: "Yambrasbamba",
			active: true
		},
		{
			id: "010401",
			province_id: "0104",
			description: "Nieva",
			active: true
		},
		{
			id: "010402",
			province_id: "0104",
			description: "El Cenepa",
			active: true
		},
		{
			id: "010403",
			province_id: "0104",
			description: "Río Santiago",
			active: true
		},
		{
			id: "010501",
			province_id: "0105",
			description: "Lamud",
			active: true
		},
		{
			id: "010502",
			province_id: "0105",
			description: "Camporredondo",
			active: true
		},
		{
			id: "010503",
			province_id: "0105",
			description: "Cocabamba",
			active: true
		},
		{
			id: "010504",
			province_id: "0105",
			description: "Colcamar",
			active: true
		},
		{
			id: "010505",
			province_id: "0105",
			description: "Conila",
			active: true
		},
		{
			id: "010506",
			province_id: "0105",
			description: "Inguilpata",
			active: true
		},
		{
			id: "010507",
			province_id: "0105",
			description: "Longuita",
			active: true
		},
		{
			id: "010508",
			province_id: "0105",
			description: "Lonya Chico",
			active: true
		},
		{
			id: "010509",
			province_id: "0105",
			description: "Luya",
			active: true
		},
		{
			id: "010510",
			province_id: "0105",
			description: "Luya Viejo",
			active: true
		},
		{
			id: "010511",
			province_id: "0105",
			description: "María",
			active: true
		},
		{
			id: "010512",
			province_id: "0105",
			description: "Ocalli",
			active: true
		},
		{
			id: "010513",
			province_id: "0105",
			description: "Ocumal",
			active: true
		},
		{
			id: "010514",
			province_id: "0105",
			description: "Pisuquia",
			active: true
		},
		{
			id: "010515",
			province_id: "0105",
			description: "Providencia",
			active: true
		},
		{
			id: "010516",
			province_id: "0105",
			description: "San Cristóbal",
			active: true
		},
		{
			id: "010517",
			province_id: "0105",
			description: "San Francisco de Yeso",
			active: true
		},
		{
			id: "010518",
			province_id: "0105",
			description: "San Jerónimo",
			active: true
		},
		{
			id: "010519",
			province_id: "0105",
			description: "San Juan de Lopecancha",
			active: true
		},
		{
			id: "010520",
			province_id: "0105",
			description: "Santa Catalina",
			active: true
		},
		{
			id: "010521",
			province_id: "0105",
			description: "Santo Tomas",
			active: true
		},
		{
			id: "010522",
			province_id: "0105",
			description: "Tingo",
			active: true
		},
		{
			id: "010523",
			province_id: "0105",
			description: "Trita",
			active: true
		},
		{
			id: "010601",
			province_id: "0106",
			description: "San Nicolás",
			active: true
		},
		{
			id: "010602",
			province_id: "0106",
			description: "Chirimoto",
			active: true
		},
		{
			id: "010603",
			province_id: "0106",
			description: "Cochamal",
			active: true
		},
		{
			id: "010604",
			province_id: "0106",
			description: "Huambo",
			active: true
		},
		{
			id: "010605",
			province_id: "0106",
			description: "Limabamba",
			active: true
		},
		{
			id: "010606",
			province_id: "0106",
			description: "Longar",
			active: true
		},
		{
			id: "010607",
			province_id: "0106",
			description: "Mariscal Benavides",
			active: true
		},
		{
			id: "010608",
			province_id: "0106",
			description: "Milpuc",
			active: true
		},
		{
			id: "010609",
			province_id: "0106",
			description: "Omia",
			active: true
		},
		{
			id: "010610",
			province_id: "0106",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "010611",
			province_id: "0106",
			description: "Totora",
			active: true
		},
		{
			id: "010612",
			province_id: "0106",
			description: "Vista Alegre",
			active: true
		},
		{
			id: "010701",
			province_id: "0107",
			description: "Bagua Grande",
			active: true
		},
		{
			id: "010702",
			province_id: "0107",
			description: "Cajaruro",
			active: true
		},
		{
			id: "010703",
			province_id: "0107",
			description: "Cumba",
			active: true
		},
		{
			id: "010704",
			province_id: "0107",
			description: "El Milagro",
			active: true
		},
		{
			id: "010705",
			province_id: "0107",
			description: "Jamalca",
			active: true
		},
		{
			id: "010706",
			province_id: "0107",
			description: "Lonya Grande",
			active: true
		},
		{
			id: "010707",
			province_id: "0107",
			description: "Yamon",
			active: true
		},
		{
			id: "020101",
			province_id: "0201",
			description: "Huaraz",
			active: true
		},
		{
			id: "020102",
			province_id: "0201",
			description: "Cochabamba",
			active: true
		},
		{
			id: "020103",
			province_id: "0201",
			description: "Colcabamba",
			active: true
		},
		{
			id: "020104",
			province_id: "0201",
			description: "Huanchay",
			active: true
		},
		{
			id: "020105",
			province_id: "0201",
			description: "Independencia",
			active: true
		},
		{
			id: "020106",
			province_id: "0201",
			description: "Jangas",
			active: true
		},
		{
			id: "020107",
			province_id: "0201",
			description: "La Libertad",
			active: true
		},
		{
			id: "020108",
			province_id: "0201",
			description: "Olleros",
			active: true
		},
		{
			id: "020109",
			province_id: "0201",
			description: "Pampas Grande",
			active: true
		},
		{
			id: "020110",
			province_id: "0201",
			description: "Pariacoto",
			active: true
		},
		{
			id: "020111",
			province_id: "0201",
			description: "Pira",
			active: true
		},
		{
			id: "020112",
			province_id: "0201",
			description: "Tarica",
			active: true
		},
		{
			id: "020201",
			province_id: "0202",
			description: "Aija",
			active: true
		},
		{
			id: "020202",
			province_id: "0202",
			description: "Coris",
			active: true
		},
		{
			id: "020203",
			province_id: "0202",
			description: "Huacllan",
			active: true
		},
		{
			id: "020204",
			province_id: "0202",
			description: "La Merced",
			active: true
		},
		{
			id: "020205",
			province_id: "0202",
			description: "Succha",
			active: true
		},
		{
			id: "020301",
			province_id: "0203",
			description: "Llamellin",
			active: true
		},
		{
			id: "020302",
			province_id: "0203",
			description: "Aczo",
			active: true
		},
		{
			id: "020303",
			province_id: "0203",
			description: "Chaccho",
			active: true
		},
		{
			id: "020304",
			province_id: "0203",
			description: "Chingas",
			active: true
		},
		{
			id: "020305",
			province_id: "0203",
			description: "Mirgas",
			active: true
		},
		{
			id: "020306",
			province_id: "0203",
			description: "San Juan de Rontoy",
			active: true
		},
		{
			id: "020401",
			province_id: "0204",
			description: "Chacas",
			active: true
		},
		{
			id: "020402",
			province_id: "0204",
			description: "Acochaca",
			active: true
		},
		{
			id: "020501",
			province_id: "0205",
			description: "Chiquian",
			active: true
		},
		{
			id: "020502",
			province_id: "0205",
			description: "Abelardo Pardo Lezameta",
			active: true
		},
		{
			id: "020503",
			province_id: "0205",
			description: "Antonio Raymondi",
			active: true
		},
		{
			id: "020504",
			province_id: "0205",
			description: "Aquia",
			active: true
		},
		{
			id: "020505",
			province_id: "0205",
			description: "Cajacay",
			active: true
		},
		{
			id: "020506",
			province_id: "0205",
			description: "Canis",
			active: true
		},
		{
			id: "020507",
			province_id: "0205",
			description: "Colquioc",
			active: true
		},
		{
			id: "020508",
			province_id: "0205",
			description: "Huallanca",
			active: true
		},
		{
			id: "020509",
			province_id: "0205",
			description: "Huasta",
			active: true
		},
		{
			id: "020510",
			province_id: "0205",
			description: "Huayllacayan",
			active: true
		},
		{
			id: "020511",
			province_id: "0205",
			description: "La Primavera",
			active: true
		},
		{
			id: "020512",
			province_id: "0205",
			description: "Mangas",
			active: true
		},
		{
			id: "020513",
			province_id: "0205",
			description: "Pacllon",
			active: true
		},
		{
			id: "020514",
			province_id: "0205",
			description: "San Miguel de Corpanqui",
			active: true
		},
		{
			id: "020515",
			province_id: "0205",
			description: "Ticllos",
			active: true
		},
		{
			id: "020601",
			province_id: "0206",
			description: "Carhuaz",
			active: true
		},
		{
			id: "020602",
			province_id: "0206",
			description: "Acopampa",
			active: true
		},
		{
			id: "020603",
			province_id: "0206",
			description: "Amashca",
			active: true
		},
		{
			id: "020604",
			province_id: "0206",
			description: "Anta",
			active: true
		},
		{
			id: "020605",
			province_id: "0206",
			description: "Ataquero",
			active: true
		},
		{
			id: "020606",
			province_id: "0206",
			description: "Marcara",
			active: true
		},
		{
			id: "020607",
			province_id: "0206",
			description: "Pariahuanca",
			active: true
		},
		{
			id: "020608",
			province_id: "0206",
			description: "San Miguel de Aco",
			active: true
		},
		{
			id: "020609",
			province_id: "0206",
			description: "Shilla",
			active: true
		},
		{
			id: "020610",
			province_id: "0206",
			description: "Tinco",
			active: true
		},
		{
			id: "020611",
			province_id: "0206",
			description: "Yungar",
			active: true
		},
		{
			id: "020701",
			province_id: "0207",
			description: "San Luis",
			active: true
		},
		{
			id: "020702",
			province_id: "0207",
			description: "San Nicolás",
			active: true
		},
		{
			id: "020703",
			province_id: "0207",
			description: "Yauya",
			active: true
		},
		{
			id: "020801",
			province_id: "0208",
			description: "Casma",
			active: true
		},
		{
			id: "020802",
			province_id: "0208",
			description: "Buena Vista Alta",
			active: true
		},
		{
			id: "020803",
			province_id: "0208",
			description: "Comandante Noel",
			active: true
		},
		{
			id: "020804",
			province_id: "0208",
			description: "Yautan",
			active: true
		},
		{
			id: "020901",
			province_id: "0209",
			description: "Corongo",
			active: true
		},
		{
			id: "020902",
			province_id: "0209",
			description: "Aco",
			active: true
		},
		{
			id: "020903",
			province_id: "0209",
			description: "Bambas",
			active: true
		},
		{
			id: "020904",
			province_id: "0209",
			description: "Cusca",
			active: true
		},
		{
			id: "020905",
			province_id: "0209",
			description: "La Pampa",
			active: true
		},
		{
			id: "020906",
			province_id: "0209",
			description: "Yanac",
			active: true
		},
		{
			id: "020907",
			province_id: "0209",
			description: "Yupan",
			active: true
		},
		{
			id: "021001",
			province_id: "0210",
			description: "Huari",
			active: true
		},
		{
			id: "021002",
			province_id: "0210",
			description: "Anra",
			active: true
		},
		{
			id: "021003",
			province_id: "0210",
			description: "Cajay",
			active: true
		},
		{
			id: "021004",
			province_id: "0210",
			description: "Chavin de Huantar",
			active: true
		},
		{
			id: "021005",
			province_id: "0210",
			description: "Huacachi",
			active: true
		},
		{
			id: "021006",
			province_id: "0210",
			description: "Huacchis",
			active: true
		},
		{
			id: "021007",
			province_id: "0210",
			description: "Huachis",
			active: true
		},
		{
			id: "021008",
			province_id: "0210",
			description: "Huantar",
			active: true
		},
		{
			id: "021009",
			province_id: "0210",
			description: "Masin",
			active: true
		},
		{
			id: "021010",
			province_id: "0210",
			description: "Paucas",
			active: true
		},
		{
			id: "021011",
			province_id: "0210",
			description: "Ponto",
			active: true
		},
		{
			id: "021012",
			province_id: "0210",
			description: "Rahuapampa",
			active: true
		},
		{
			id: "021013",
			province_id: "0210",
			description: "Rapayan",
			active: true
		},
		{
			id: "021014",
			province_id: "0210",
			description: "San Marcos",
			active: true
		},
		{
			id: "021015",
			province_id: "0210",
			description: "San Pedro de Chana",
			active: true
		},
		{
			id: "021016",
			province_id: "0210",
			description: "Uco",
			active: true
		},
		{
			id: "021101",
			province_id: "0211",
			description: "Huarmey",
			active: true
		},
		{
			id: "021102",
			province_id: "0211",
			description: "Cochapeti",
			active: true
		},
		{
			id: "021103",
			province_id: "0211",
			description: "Culebras",
			active: true
		},
		{
			id: "021104",
			province_id: "0211",
			description: "Huayan",
			active: true
		},
		{
			id: "021105",
			province_id: "0211",
			description: "Malvas",
			active: true
		},
		{
			id: "021201",
			province_id: "0212",
			description: "Caraz",
			active: true
		},
		{
			id: "021202",
			province_id: "0212",
			description: "Huallanca",
			active: true
		},
		{
			id: "021203",
			province_id: "0212",
			description: "Huata",
			active: true
		},
		{
			id: "021204",
			province_id: "0212",
			description: "Huaylas",
			active: true
		},
		{
			id: "021205",
			province_id: "0212",
			description: "Mato",
			active: true
		},
		{
			id: "021206",
			province_id: "0212",
			description: "Pamparomas",
			active: true
		},
		{
			id: "021207",
			province_id: "0212",
			description: "Pueblo Libre",
			active: true
		},
		{
			id: "021208",
			province_id: "0212",
			description: "Santa Cruz",
			active: true
		},
		{
			id: "021209",
			province_id: "0212",
			description: "Santo Toribio",
			active: true
		},
		{
			id: "021210",
			province_id: "0212",
			description: "Yuracmarca",
			active: true
		},
		{
			id: "021301",
			province_id: "0213",
			description: "Piscobamba",
			active: true
		},
		{
			id: "021302",
			province_id: "0213",
			description: "Casca",
			active: true
		},
		{
			id: "021303",
			province_id: "0213",
			description: "Eleazar Guzmán Barron",
			active: true
		},
		{
			id: "021304",
			province_id: "0213",
			description: "Fidel Olivas Escudero",
			active: true
		},
		{
			id: "021305",
			province_id: "0213",
			description: "Llama",
			active: true
		},
		{
			id: "021306",
			province_id: "0213",
			description: "Llumpa",
			active: true
		},
		{
			id: "021307",
			province_id: "0213",
			description: "Lucma",
			active: true
		},
		{
			id: "021308",
			province_id: "0213",
			description: "Musga",
			active: true
		},
		{
			id: "021401",
			province_id: "0214",
			description: "Ocros",
			active: true
		},
		{
			id: "021402",
			province_id: "0214",
			description: "Acas",
			active: true
		},
		{
			id: "021403",
			province_id: "0214",
			description: "Cajamarquilla",
			active: true
		},
		{
			id: "021404",
			province_id: "0214",
			description: "Carhuapampa",
			active: true
		},
		{
			id: "021405",
			province_id: "0214",
			description: "Cochas",
			active: true
		},
		{
			id: "021406",
			province_id: "0214",
			description: "Congas",
			active: true
		},
		{
			id: "021407",
			province_id: "0214",
			description: "Llipa",
			active: true
		},
		{
			id: "021408",
			province_id: "0214",
			description: "San Cristóbal de Rajan",
			active: true
		},
		{
			id: "021409",
			province_id: "0214",
			description: "San Pedro",
			active: true
		},
		{
			id: "021410",
			province_id: "0214",
			description: "Santiago de Chilcas",
			active: true
		},
		{
			id: "021501",
			province_id: "0215",
			description: "Cabana",
			active: true
		},
		{
			id: "021502",
			province_id: "0215",
			description: "Bolognesi",
			active: true
		},
		{
			id: "021503",
			province_id: "0215",
			description: "Conchucos",
			active: true
		},
		{
			id: "021504",
			province_id: "0215",
			description: "Huacaschuque",
			active: true
		},
		{
			id: "021505",
			province_id: "0215",
			description: "Huandoval",
			active: true
		},
		{
			id: "021506",
			province_id: "0215",
			description: "Lacabamba",
			active: true
		},
		{
			id: "021507",
			province_id: "0215",
			description: "Llapo",
			active: true
		},
		{
			id: "021508",
			province_id: "0215",
			description: "Pallasca",
			active: true
		},
		{
			id: "021509",
			province_id: "0215",
			description: "Pampas",
			active: true
		},
		{
			id: "021510",
			province_id: "0215",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "021511",
			province_id: "0215",
			description: "Tauca",
			active: true
		},
		{
			id: "021601",
			province_id: "0216",
			description: "Pomabamba",
			active: true
		},
		{
			id: "021602",
			province_id: "0216",
			description: "Huayllan",
			active: true
		},
		{
			id: "021603",
			province_id: "0216",
			description: "Parobamba",
			active: true
		},
		{
			id: "021604",
			province_id: "0216",
			description: "Quinuabamba",
			active: true
		},
		{
			id: "021701",
			province_id: "0217",
			description: "Recuay",
			active: true
		},
		{
			id: "021702",
			province_id: "0217",
			description: "Catac",
			active: true
		},
		{
			id: "021703",
			province_id: "0217",
			description: "Cotaparaco",
			active: true
		},
		{
			id: "021704",
			province_id: "0217",
			description: "Huayllapampa",
			active: true
		},
		{
			id: "021705",
			province_id: "0217",
			description: "Llacllin",
			active: true
		},
		{
			id: "021706",
			province_id: "0217",
			description: "Marca",
			active: true
		},
		{
			id: "021707",
			province_id: "0217",
			description: "Pampas Chico",
			active: true
		},
		{
			id: "021708",
			province_id: "0217",
			description: "Pararin",
			active: true
		},
		{
			id: "021709",
			province_id: "0217",
			description: "Tapacocha",
			active: true
		},
		{
			id: "021710",
			province_id: "0217",
			description: "Ticapampa",
			active: true
		},
		{
			id: "021801",
			province_id: "0218",
			description: "Chimbote",
			active: true
		},
		{
			id: "021802",
			province_id: "0218",
			description: "Cáceres del Perú",
			active: true
		},
		{
			id: "021803",
			province_id: "0218",
			description: "Coishco",
			active: true
		},
		{
			id: "021804",
			province_id: "0218",
			description: "Macate",
			active: true
		},
		{
			id: "021805",
			province_id: "0218",
			description: "Moro",
			active: true
		},
		{
			id: "021806",
			province_id: "0218",
			description: "Nepeña",
			active: true
		},
		{
			id: "021807",
			province_id: "0218",
			description: "Samanco",
			active: true
		},
		{
			id: "021808",
			province_id: "0218",
			description: "Santa",
			active: true
		},
		{
			id: "021809",
			province_id: "0218",
			description: "Nuevo Chimbote",
			active: true
		},
		{
			id: "021901",
			province_id: "0219",
			description: "Sihuas",
			active: true
		},
		{
			id: "021902",
			province_id: "0219",
			description: "Acobamba",
			active: true
		},
		{
			id: "021903",
			province_id: "0219",
			description: "Alfonso Ugarte",
			active: true
		},
		{
			id: "021904",
			province_id: "0219",
			description: "Cashapampa",
			active: true
		},
		{
			id: "021905",
			province_id: "0219",
			description: "Chingalpo",
			active: true
		},
		{
			id: "021906",
			province_id: "0219",
			description: "Huayllabamba",
			active: true
		},
		{
			id: "021907",
			province_id: "0219",
			description: "Quiches",
			active: true
		},
		{
			id: "021908",
			province_id: "0219",
			description: "Ragash",
			active: true
		},
		{
			id: "021909",
			province_id: "0219",
			description: "San Juan",
			active: true
		},
		{
			id: "021910",
			province_id: "0219",
			description: "Sicsibamba",
			active: true
		},
		{
			id: "022001",
			province_id: "0220",
			description: "Yungay",
			active: true
		},
		{
			id: "022002",
			province_id: "0220",
			description: "Cascapara",
			active: true
		},
		{
			id: "022003",
			province_id: "0220",
			description: "Mancos",
			active: true
		},
		{
			id: "022004",
			province_id: "0220",
			description: "Matacoto",
			active: true
		},
		{
			id: "022005",
			province_id: "0220",
			description: "Quillo",
			active: true
		},
		{
			id: "022006",
			province_id: "0220",
			description: "Ranrahirca",
			active: true
		},
		{
			id: "022007",
			province_id: "0220",
			description: "Shupluy",
			active: true
		},
		{
			id: "022008",
			province_id: "0220",
			description: "Yanama",
			active: true
		},
		{
			id: "030101",
			province_id: "0301",
			description: "Abancay",
			active: true
		},
		{
			id: "030102",
			province_id: "0301",
			description: "Chacoche",
			active: true
		},
		{
			id: "030103",
			province_id: "0301",
			description: "Circa",
			active: true
		},
		{
			id: "030104",
			province_id: "0301",
			description: "Curahuasi",
			active: true
		},
		{
			id: "030105",
			province_id: "0301",
			description: "Huanipaca",
			active: true
		},
		{
			id: "030106",
			province_id: "0301",
			description: "Lambrama",
			active: true
		},
		{
			id: "030107",
			province_id: "0301",
			description: "Pichirhua",
			active: true
		},
		{
			id: "030108",
			province_id: "0301",
			description: "San Pedro de Cachora",
			active: true
		},
		{
			id: "030109",
			province_id: "0301",
			description: "Tamburco",
			active: true
		},
		{
			id: "030201",
			province_id: "0302",
			description: "Andahuaylas",
			active: true
		},
		{
			id: "030202",
			province_id: "0302",
			description: "Andarapa",
			active: true
		},
		{
			id: "030203",
			province_id: "0302",
			description: "Chiara",
			active: true
		},
		{
			id: "030204",
			province_id: "0302",
			description: "Huancarama",
			active: true
		},
		{
			id: "030205",
			province_id: "0302",
			description: "Huancaray",
			active: true
		},
		{
			id: "030206",
			province_id: "0302",
			description: "Huayana",
			active: true
		},
		{
			id: "030207",
			province_id: "0302",
			description: "Kishuara",
			active: true
		},
		{
			id: "030208",
			province_id: "0302",
			description: "Pacobamba",
			active: true
		},
		{
			id: "030209",
			province_id: "0302",
			description: "Pacucha",
			active: true
		},
		{
			id: "030210",
			province_id: "0302",
			description: "Pampachiri",
			active: true
		},
		{
			id: "030211",
			province_id: "0302",
			description: "Pomacocha",
			active: true
		},
		{
			id: "030212",
			province_id: "0302",
			description: "San Antonio de Cachi",
			active: true
		},
		{
			id: "030213",
			province_id: "0302",
			description: "San Jerónimo",
			active: true
		},
		{
			id: "030214",
			province_id: "0302",
			description: "San Miguel de Chaccrampa",
			active: true
		},
		{
			id: "030215",
			province_id: "0302",
			description: "Santa María de Chicmo",
			active: true
		},
		{
			id: "030216",
			province_id: "0302",
			description: "Talavera",
			active: true
		},
		{
			id: "030217",
			province_id: "0302",
			description: "Tumay Huaraca",
			active: true
		},
		{
			id: "030218",
			province_id: "0302",
			description: "Turpo",
			active: true
		},
		{
			id: "030219",
			province_id: "0302",
			description: "Kaquiabamba",
			active: true
		},
		{
			id: "030220",
			province_id: "0302",
			description: "José María Arguedas",
			active: true
		},
		{
			id: "030301",
			province_id: "0303",
			description: "Antabamba",
			active: true
		},
		{
			id: "030302",
			province_id: "0303",
			description: "El Oro",
			active: true
		},
		{
			id: "030303",
			province_id: "0303",
			description: "Huaquirca",
			active: true
		},
		{
			id: "030304",
			province_id: "0303",
			description: "Juan Espinoza Medrano",
			active: true
		},
		{
			id: "030305",
			province_id: "0303",
			description: "Oropesa",
			active: true
		},
		{
			id: "030306",
			province_id: "0303",
			description: "Pachaconas",
			active: true
		},
		{
			id: "030307",
			province_id: "0303",
			description: "Sabaino",
			active: true
		},
		{
			id: "030401",
			province_id: "0304",
			description: "Chalhuanca",
			active: true
		},
		{
			id: "030402",
			province_id: "0304",
			description: "Capaya",
			active: true
		},
		{
			id: "030403",
			province_id: "0304",
			description: "Caraybamba",
			active: true
		},
		{
			id: "030404",
			province_id: "0304",
			description: "Chapimarca",
			active: true
		},
		{
			id: "030405",
			province_id: "0304",
			description: "Colcabamba",
			active: true
		},
		{
			id: "030406",
			province_id: "0304",
			description: "Cotaruse",
			active: true
		},
		{
			id: "030407",
			province_id: "0304",
			description: "Ihuayllo",
			active: true
		},
		{
			id: "030408",
			province_id: "0304",
			description: "Justo Apu Sahuaraura",
			active: true
		},
		{
			id: "030409",
			province_id: "0304",
			description: "Lucre",
			active: true
		},
		{
			id: "030410",
			province_id: "0304",
			description: "Pocohuanca",
			active: true
		},
		{
			id: "030411",
			province_id: "0304",
			description: "San Juan de Chacña",
			active: true
		},
		{
			id: "030412",
			province_id: "0304",
			description: "Sañayca",
			active: true
		},
		{
			id: "030413",
			province_id: "0304",
			description: "Soraya",
			active: true
		},
		{
			id: "030414",
			province_id: "0304",
			description: "Tapairihua",
			active: true
		},
		{
			id: "030415",
			province_id: "0304",
			description: "Tintay",
			active: true
		},
		{
			id: "030416",
			province_id: "0304",
			description: "Toraya",
			active: true
		},
		{
			id: "030417",
			province_id: "0304",
			description: "Yanaca",
			active: true
		},
		{
			id: "030501",
			province_id: "0305",
			description: "Tambobamba",
			active: true
		},
		{
			id: "030502",
			province_id: "0305",
			description: "Cotabambas",
			active: true
		},
		{
			id: "030503",
			province_id: "0305",
			description: "Coyllurqui",
			active: true
		},
		{
			id: "030504",
			province_id: "0305",
			description: "Haquira",
			active: true
		},
		{
			id: "030505",
			province_id: "0305",
			description: "Mara",
			active: true
		},
		{
			id: "030506",
			province_id: "0305",
			description: "Challhuahuacho",
			active: true
		},
		{
			id: "030601",
			province_id: "0306",
			description: "Chincheros",
			active: true
		},
		{
			id: "030602",
			province_id: "0306",
			description: "Anco_Huallo",
			active: true
		},
		{
			id: "030603",
			province_id: "0306",
			description: "Cocharcas",
			active: true
		},
		{
			id: "030604",
			province_id: "0306",
			description: "Huaccana",
			active: true
		},
		{
			id: "030605",
			province_id: "0306",
			description: "Ocobamba",
			active: true
		},
		{
			id: "030606",
			province_id: "0306",
			description: "Ongoy",
			active: true
		},
		{
			id: "030607",
			province_id: "0306",
			description: "Uranmarca",
			active: true
		},
		{
			id: "030608",
			province_id: "0306",
			description: "Ranracancha",
			active: true
		},
		{
			id: "030609",
			province_id: "0306",
			description: "Rocchacc",
			active: true
		},
		{
			id: "030610",
			province_id: "0306",
			description: "El Porvenir",
			active: true
		},
		{
			id: "030701",
			province_id: "0307",
			description: "Chuquibambilla",
			active: true
		},
		{
			id: "030702",
			province_id: "0307",
			description: "Curpahuasi",
			active: true
		},
		{
			id: "030703",
			province_id: "0307",
			description: "Gamarra",
			active: true
		},
		{
			id: "030704",
			province_id: "0307",
			description: "Huayllati",
			active: true
		},
		{
			id: "030705",
			province_id: "0307",
			description: "Mamara",
			active: true
		},
		{
			id: "030706",
			province_id: "0307",
			description: "Micaela Bastidas",
			active: true
		},
		{
			id: "030707",
			province_id: "0307",
			description: "Pataypampa",
			active: true
		},
		{
			id: "030708",
			province_id: "0307",
			description: "Progreso",
			active: true
		},
		{
			id: "030709",
			province_id: "0307",
			description: "San Antonio",
			active: true
		},
		{
			id: "030710",
			province_id: "0307",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "030711",
			province_id: "0307",
			description: "Turpay",
			active: true
		},
		{
			id: "030712",
			province_id: "0307",
			description: "Vilcabamba",
			active: true
		},
		{
			id: "030713",
			province_id: "0307",
			description: "Virundo",
			active: true
		},
		{
			id: "030714",
			province_id: "0307",
			description: "Curasco",
			active: true
		},
		{
			id: "040101",
			province_id: "0401",
			description: "Arequipa",
			active: true
		},
		{
			id: "040102",
			province_id: "0401",
			description: "Alto Selva Alegre",
			active: true
		},
		{
			id: "040103",
			province_id: "0401",
			description: "Cayma",
			active: true
		},
		{
			id: "040104",
			province_id: "0401",
			description: "Cerro Colorado",
			active: true
		},
		{
			id: "040105",
			province_id: "0401",
			description: "Characato",
			active: true
		},
		{
			id: "040106",
			province_id: "0401",
			description: "Chiguata",
			active: true
		},
		{
			id: "040107",
			province_id: "0401",
			description: "Jacobo Hunter",
			active: true
		},
		{
			id: "040108",
			province_id: "0401",
			description: "La Joya",
			active: true
		},
		{
			id: "040109",
			province_id: "0401",
			description: "Mariano Melgar",
			active: true
		},
		{
			id: "040110",
			province_id: "0401",
			description: "Miraflores",
			active: true
		},
		{
			id: "040111",
			province_id: "0401",
			description: "Mollebaya",
			active: true
		},
		{
			id: "040112",
			province_id: "0401",
			description: "Paucarpata",
			active: true
		},
		{
			id: "040113",
			province_id: "0401",
			description: "Pocsi",
			active: true
		},
		{
			id: "040114",
			province_id: "0401",
			description: "Polobaya",
			active: true
		},
		{
			id: "040115",
			province_id: "0401",
			description: "Quequeña",
			active: true
		},
		{
			id: "040116",
			province_id: "0401",
			description: "Sabandia",
			active: true
		},
		{
			id: "040117",
			province_id: "0401",
			description: "Sachaca",
			active: true
		},
		{
			id: "040118",
			province_id: "0401",
			description: "San Juan de Siguas",
			active: true
		},
		{
			id: "040119",
			province_id: "0401",
			description: "San Juan de Tarucani",
			active: true
		},
		{
			id: "040120",
			province_id: "0401",
			description: "Santa Isabel de Siguas",
			active: true
		},
		{
			id: "040121",
			province_id: "0401",
			description: "Santa Rita de Siguas",
			active: true
		},
		{
			id: "040122",
			province_id: "0401",
			description: "Socabaya",
			active: true
		},
		{
			id: "040123",
			province_id: "0401",
			description: "Tiabaya",
			active: true
		},
		{
			id: "040124",
			province_id: "0401",
			description: "Uchumayo",
			active: true
		},
		{
			id: "040125",
			province_id: "0401",
			description: "Vitor",
			active: true
		},
		{
			id: "040126",
			province_id: "0401",
			description: "Yanahuara",
			active: true
		},
		{
			id: "040127",
			province_id: "0401",
			description: "Yarabamba",
			active: true
		},
		{
			id: "040128",
			province_id: "0401",
			description: "Yura",
			active: true
		},
		{
			id: "040129",
			province_id: "0401",
			description: "José Luis Bustamante Y Rivero",
			active: true
		},
		{
			id: "040201",
			province_id: "0402",
			description: "Camaná",
			active: true
		},
		{
			id: "040202",
			province_id: "0402",
			description: "José María Quimper",
			active: true
		},
		{
			id: "040203",
			province_id: "0402",
			description: "Mariano Nicolás Valcárcel",
			active: true
		},
		{
			id: "040204",
			province_id: "0402",
			description: "Mariscal Cáceres",
			active: true
		},
		{
			id: "040205",
			province_id: "0402",
			description: "Nicolás de Pierola",
			active: true
		},
		{
			id: "040206",
			province_id: "0402",
			description: "Ocoña",
			active: true
		},
		{
			id: "040207",
			province_id: "0402",
			description: "Quilca",
			active: true
		},
		{
			id: "040208",
			province_id: "0402",
			description: "Samuel Pastor",
			active: true
		},
		{
			id: "040301",
			province_id: "0403",
			description: "Caravelí",
			active: true
		},
		{
			id: "040302",
			province_id: "0403",
			description: "Acarí",
			active: true
		},
		{
			id: "040303",
			province_id: "0403",
			description: "Atico",
			active: true
		},
		{
			id: "040304",
			province_id: "0403",
			description: "Atiquipa",
			active: true
		},
		{
			id: "040305",
			province_id: "0403",
			description: "Bella Unión",
			active: true
		},
		{
			id: "040306",
			province_id: "0403",
			description: "Cahuacho",
			active: true
		},
		{
			id: "040307",
			province_id: "0403",
			description: "Chala",
			active: true
		},
		{
			id: "040308",
			province_id: "0403",
			description: "Chaparra",
			active: true
		},
		{
			id: "040309",
			province_id: "0403",
			description: "Huanuhuanu",
			active: true
		},
		{
			id: "040310",
			province_id: "0403",
			description: "Jaqui",
			active: true
		},
		{
			id: "040311",
			province_id: "0403",
			description: "Lomas",
			active: true
		},
		{
			id: "040312",
			province_id: "0403",
			description: "Quicacha",
			active: true
		},
		{
			id: "040313",
			province_id: "0403",
			description: "Yauca",
			active: true
		},
		{
			id: "040401",
			province_id: "0404",
			description: "Aplao",
			active: true
		},
		{
			id: "040402",
			province_id: "0404",
			description: "Andagua",
			active: true
		},
		{
			id: "040403",
			province_id: "0404",
			description: "Ayo",
			active: true
		},
		{
			id: "040404",
			province_id: "0404",
			description: "Chachas",
			active: true
		},
		{
			id: "040405",
			province_id: "0404",
			description: "Chilcaymarca",
			active: true
		},
		{
			id: "040406",
			province_id: "0404",
			description: "Choco",
			active: true
		},
		{
			id: "040407",
			province_id: "0404",
			description: "Huancarqui",
			active: true
		},
		{
			id: "040408",
			province_id: "0404",
			description: "Machaguay",
			active: true
		},
		{
			id: "040409",
			province_id: "0404",
			description: "Orcopampa",
			active: true
		},
		{
			id: "040410",
			province_id: "0404",
			description: "Pampacolca",
			active: true
		},
		{
			id: "040411",
			province_id: "0404",
			description: "Tipan",
			active: true
		},
		{
			id: "040412",
			province_id: "0404",
			description: "Uñon",
			active: true
		},
		{
			id: "040413",
			province_id: "0404",
			description: "Uraca",
			active: true
		},
		{
			id: "040414",
			province_id: "0404",
			description: "Viraco",
			active: true
		},
		{
			id: "040501",
			province_id: "0405",
			description: "Chivay",
			active: true
		},
		{
			id: "040502",
			province_id: "0405",
			description: "Achoma",
			active: true
		},
		{
			id: "040503",
			province_id: "0405",
			description: "Cabanaconde",
			active: true
		},
		{
			id: "040504",
			province_id: "0405",
			description: "Callalli",
			active: true
		},
		{
			id: "040505",
			province_id: "0405",
			description: "Caylloma",
			active: true
		},
		{
			id: "040506",
			province_id: "0405",
			description: "Coporaque",
			active: true
		},
		{
			id: "040507",
			province_id: "0405",
			description: "Huambo",
			active: true
		},
		{
			id: "040508",
			province_id: "0405",
			description: "Huanca",
			active: true
		},
		{
			id: "040509",
			province_id: "0405",
			description: "Ichupampa",
			active: true
		},
		{
			id: "040510",
			province_id: "0405",
			description: "Lari",
			active: true
		},
		{
			id: "040511",
			province_id: "0405",
			description: "Lluta",
			active: true
		},
		{
			id: "040512",
			province_id: "0405",
			description: "Maca",
			active: true
		},
		{
			id: "040513",
			province_id: "0405",
			description: "Madrigal",
			active: true
		},
		{
			id: "040514",
			province_id: "0405",
			description: "San Antonio de Chuca",
			active: true
		},
		{
			id: "040515",
			province_id: "0405",
			description: "Sibayo",
			active: true
		},
		{
			id: "040516",
			province_id: "0405",
			description: "Tapay",
			active: true
		},
		{
			id: "040517",
			province_id: "0405",
			description: "Tisco",
			active: true
		},
		{
			id: "040518",
			province_id: "0405",
			description: "Tuti",
			active: true
		},
		{
			id: "040519",
			province_id: "0405",
			description: "Yanque",
			active: true
		},
		{
			id: "040520",
			province_id: "0405",
			description: "Majes",
			active: true
		},
		{
			id: "040601",
			province_id: "0406",
			description: "Chuquibamba",
			active: true
		},
		{
			id: "040602",
			province_id: "0406",
			description: "Andaray",
			active: true
		},
		{
			id: "040603",
			province_id: "0406",
			description: "Cayarani",
			active: true
		},
		{
			id: "040604",
			province_id: "0406",
			description: "Chichas",
			active: true
		},
		{
			id: "040605",
			province_id: "0406",
			description: "Iray",
			active: true
		},
		{
			id: "040606",
			province_id: "0406",
			description: "Río Grande",
			active: true
		},
		{
			id: "040607",
			province_id: "0406",
			description: "Salamanca",
			active: true
		},
		{
			id: "040608",
			province_id: "0406",
			description: "Yanaquihua",
			active: true
		},
		{
			id: "040701",
			province_id: "0407",
			description: "Mollendo",
			active: true
		},
		{
			id: "040702",
			province_id: "0407",
			description: "Cocachacra",
			active: true
		},
		{
			id: "040703",
			province_id: "0407",
			description: "Dean Valdivia",
			active: true
		},
		{
			id: "040704",
			province_id: "0407",
			description: "Islay",
			active: true
		},
		{
			id: "040705",
			province_id: "0407",
			description: "Mejia",
			active: true
		},
		{
			id: "040706",
			province_id: "0407",
			description: "Punta de Bombón",
			active: true
		},
		{
			id: "040801",
			province_id: "0408",
			description: "Cotahuasi",
			active: true
		},
		{
			id: "040802",
			province_id: "0408",
			description: "Alca",
			active: true
		},
		{
			id: "040803",
			province_id: "0408",
			description: "Charcana",
			active: true
		},
		{
			id: "040804",
			province_id: "0408",
			description: "Huaynacotas",
			active: true
		},
		{
			id: "040805",
			province_id: "0408",
			description: "Pampamarca",
			active: true
		},
		{
			id: "040806",
			province_id: "0408",
			description: "Puyca",
			active: true
		},
		{
			id: "040807",
			province_id: "0408",
			description: "Quechualla",
			active: true
		},
		{
			id: "040808",
			province_id: "0408",
			description: "Sayla",
			active: true
		},
		{
			id: "040809",
			province_id: "0408",
			description: "Tauria",
			active: true
		},
		{
			id: "040810",
			province_id: "0408",
			description: "Tomepampa",
			active: true
		},
		{
			id: "040811",
			province_id: "0408",
			description: "Toro",
			active: true
		},
		{
			id: "050101",
			province_id: "0501",
			description: "Ayacucho",
			active: true
		},
		{
			id: "050102",
			province_id: "0501",
			description: "Acocro",
			active: true
		},
		{
			id: "050103",
			province_id: "0501",
			description: "Acos Vinchos",
			active: true
		},
		{
			id: "050104",
			province_id: "0501",
			description: "Carmen Alto",
			active: true
		},
		{
			id: "050105",
			province_id: "0501",
			description: "Chiara",
			active: true
		},
		{
			id: "050106",
			province_id: "0501",
			description: "Ocros",
			active: true
		},
		{
			id: "050107",
			province_id: "0501",
			description: "Pacaycasa",
			active: true
		},
		{
			id: "050108",
			province_id: "0501",
			description: "Quinua",
			active: true
		},
		{
			id: "050109",
			province_id: "0501",
			description: "San José de Ticllas",
			active: true
		},
		{
			id: "050110",
			province_id: "0501",
			description: "San Juan Bautista",
			active: true
		},
		{
			id: "050111",
			province_id: "0501",
			description: "Santiago de Pischa",
			active: true
		},
		{
			id: "050112",
			province_id: "0501",
			description: "Socos",
			active: true
		},
		{
			id: "050113",
			province_id: "0501",
			description: "Tambillo",
			active: true
		},
		{
			id: "050114",
			province_id: "0501",
			description: "Vinchos",
			active: true
		},
		{
			id: "050115",
			province_id: "0501",
			description: "Jesús Nazareno",
			active: true
		},
		{
			id: "050116",
			province_id: "0501",
			description: "Andrés Avelino Cáceres Dorregaray",
			active: true
		},
		{
			id: "050201",
			province_id: "0502",
			description: "Cangallo",
			active: true
		},
		{
			id: "050202",
			province_id: "0502",
			description: "Chuschi",
			active: true
		},
		{
			id: "050203",
			province_id: "0502",
			description: "Los Morochucos",
			active: true
		},
		{
			id: "050204",
			province_id: "0502",
			description: "María Parado de Bellido",
			active: true
		},
		{
			id: "050205",
			province_id: "0502",
			description: "Paras",
			active: true
		},
		{
			id: "050206",
			province_id: "0502",
			description: "Totos",
			active: true
		},
		{
			id: "050301",
			province_id: "0503",
			description: "Sancos",
			active: true
		},
		{
			id: "050302",
			province_id: "0503",
			description: "Carapo",
			active: true
		},
		{
			id: "050303",
			province_id: "0503",
			description: "Sacsamarca",
			active: true
		},
		{
			id: "050304",
			province_id: "0503",
			description: "Santiago de Lucanamarca",
			active: true
		},
		{
			id: "050401",
			province_id: "0504",
			description: "Huanta",
			active: true
		},
		{
			id: "050402",
			province_id: "0504",
			description: "Ayahuanco",
			active: true
		},
		{
			id: "050403",
			province_id: "0504",
			description: "Huamanguilla",
			active: true
		},
		{
			id: "050404",
			province_id: "0504",
			description: "Iguain",
			active: true
		},
		{
			id: "050405",
			province_id: "0504",
			description: "Luricocha",
			active: true
		},
		{
			id: "050406",
			province_id: "0504",
			description: "Santillana",
			active: true
		},
		{
			id: "050407",
			province_id: "0504",
			description: "Sivia",
			active: true
		},
		{
			id: "050408",
			province_id: "0504",
			description: "Llochegua",
			active: true
		},
		{
			id: "050409",
			province_id: "0504",
			description: "Canayre",
			active: true
		},
		{
			id: "050410",
			province_id: "0504",
			description: "Uchuraccay",
			active: true
		},
		{
			id: "050411",
			province_id: "0504",
			description: "Pucacolpa",
			active: true
		},
		{
			id: "050412",
			province_id: "0504",
			description: "Chaca",
			active: true
		},
		{
			id: "050501",
			province_id: "0505",
			description: "San Miguel",
			active: true
		},
		{
			id: "050502",
			province_id: "0505",
			description: "Anco",
			active: true
		},
		{
			id: "050503",
			province_id: "0505",
			description: "Ayna",
			active: true
		},
		{
			id: "050504",
			province_id: "0505",
			description: "Chilcas",
			active: true
		},
		{
			id: "050505",
			province_id: "0505",
			description: "Chungui",
			active: true
		},
		{
			id: "050506",
			province_id: "0505",
			description: "Luis Carranza",
			active: true
		},
		{
			id: "050507",
			province_id: "0505",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "050508",
			province_id: "0505",
			description: "Tambo",
			active: true
		},
		{
			id: "050509",
			province_id: "0505",
			description: "Samugari",
			active: true
		},
		{
			id: "050510",
			province_id: "0505",
			description: "Anchihuay",
			active: true
		},
		{
			id: "050601",
			province_id: "0506",
			description: "Puquio",
			active: true
		},
		{
			id: "050602",
			province_id: "0506",
			description: "Aucara",
			active: true
		},
		{
			id: "050603",
			province_id: "0506",
			description: "Cabana",
			active: true
		},
		{
			id: "050604",
			province_id: "0506",
			description: "Carmen Salcedo",
			active: true
		},
		{
			id: "050605",
			province_id: "0506",
			description: "Chaviña",
			active: true
		},
		{
			id: "050606",
			province_id: "0506",
			description: "Chipao",
			active: true
		},
		{
			id: "050607",
			province_id: "0506",
			description: "Huac-Huas",
			active: true
		},
		{
			id: "050608",
			province_id: "0506",
			description: "Laramate",
			active: true
		},
		{
			id: "050609",
			province_id: "0506",
			description: "Leoncio Prado",
			active: true
		},
		{
			id: "050610",
			province_id: "0506",
			description: "Llauta",
			active: true
		},
		{
			id: "050611",
			province_id: "0506",
			description: "Lucanas",
			active: true
		},
		{
			id: "050612",
			province_id: "0506",
			description: "Ocaña",
			active: true
		},
		{
			id: "050613",
			province_id: "0506",
			description: "Otoca",
			active: true
		},
		{
			id: "050614",
			province_id: "0506",
			description: "Saisa",
			active: true
		},
		{
			id: "050615",
			province_id: "0506",
			description: "San Cristóbal",
			active: true
		},
		{
			id: "050616",
			province_id: "0506",
			description: "San Juan",
			active: true
		},
		{
			id: "050617",
			province_id: "0506",
			description: "San Pedro",
			active: true
		},
		{
			id: "050618",
			province_id: "0506",
			description: "San Pedro de Palco",
			active: true
		},
		{
			id: "050619",
			province_id: "0506",
			description: "Sancos",
			active: true
		},
		{
			id: "050620",
			province_id: "0506",
			description: "Santa Ana de Huaycahuacho",
			active: true
		},
		{
			id: "050621",
			province_id: "0506",
			description: "Santa Lucia",
			active: true
		},
		{
			id: "050701",
			province_id: "0507",
			description: "Coracora",
			active: true
		},
		{
			id: "050702",
			province_id: "0507",
			description: "Chumpi",
			active: true
		},
		{
			id: "050703",
			province_id: "0507",
			description: "Coronel Castañeda",
			active: true
		},
		{
			id: "050704",
			province_id: "0507",
			description: "Pacapausa",
			active: true
		},
		{
			id: "050705",
			province_id: "0507",
			description: "Pullo",
			active: true
		},
		{
			id: "050706",
			province_id: "0507",
			description: "Puyusca",
			active: true
		},
		{
			id: "050707",
			province_id: "0507",
			description: "San Francisco de Ravacayco",
			active: true
		},
		{
			id: "050708",
			province_id: "0507",
			description: "Upahuacho",
			active: true
		},
		{
			id: "050801",
			province_id: "0508",
			description: "Pausa",
			active: true
		},
		{
			id: "050802",
			province_id: "0508",
			description: "Colta",
			active: true
		},
		{
			id: "050803",
			province_id: "0508",
			description: "Corculla",
			active: true
		},
		{
			id: "050804",
			province_id: "0508",
			description: "Lampa",
			active: true
		},
		{
			id: "050805",
			province_id: "0508",
			description: "Marcabamba",
			active: true
		},
		{
			id: "050806",
			province_id: "0508",
			description: "Oyolo",
			active: true
		},
		{
			id: "050807",
			province_id: "0508",
			description: "Pararca",
			active: true
		},
		{
			id: "050808",
			province_id: "0508",
			description: "San Javier de Alpabamba",
			active: true
		},
		{
			id: "050809",
			province_id: "0508",
			description: "San José de Ushua",
			active: true
		},
		{
			id: "050810",
			province_id: "0508",
			description: "Sara Sara",
			active: true
		},
		{
			id: "050901",
			province_id: "0509",
			description: "Querobamba",
			active: true
		},
		{
			id: "050902",
			province_id: "0509",
			description: "Belén",
			active: true
		},
		{
			id: "050903",
			province_id: "0509",
			description: "Chalcos",
			active: true
		},
		{
			id: "050904",
			province_id: "0509",
			description: "Chilcayoc",
			active: true
		},
		{
			id: "050905",
			province_id: "0509",
			description: "Huacaña",
			active: true
		},
		{
			id: "050906",
			province_id: "0509",
			description: "Morcolla",
			active: true
		},
		{
			id: "050907",
			province_id: "0509",
			description: "Paico",
			active: true
		},
		{
			id: "050908",
			province_id: "0509",
			description: "San Pedro de Larcay",
			active: true
		},
		{
			id: "050909",
			province_id: "0509",
			description: "San Salvador de Quije",
			active: true
		},
		{
			id: "050910",
			province_id: "0509",
			description: "Santiago de Paucaray",
			active: true
		},
		{
			id: "050911",
			province_id: "0509",
			description: "Soras",
			active: true
		},
		{
			id: "051001",
			province_id: "0510",
			description: "Huancapi",
			active: true
		},
		{
			id: "051002",
			province_id: "0510",
			description: "Alcamenca",
			active: true
		},
		{
			id: "051003",
			province_id: "0510",
			description: "Apongo",
			active: true
		},
		{
			id: "051004",
			province_id: "0510",
			description: "Asquipata",
			active: true
		},
		{
			id: "051005",
			province_id: "0510",
			description: "Canaria",
			active: true
		},
		{
			id: "051006",
			province_id: "0510",
			description: "Cayara",
			active: true
		},
		{
			id: "051007",
			province_id: "0510",
			description: "Colca",
			active: true
		},
		{
			id: "051008",
			province_id: "0510",
			description: "Huamanquiquia",
			active: true
		},
		{
			id: "051009",
			province_id: "0510",
			description: "Huancaraylla",
			active: true
		},
		{
			id: "051010",
			province_id: "0510",
			description: "Huaya",
			active: true
		},
		{
			id: "051011",
			province_id: "0510",
			description: "Sarhua",
			active: true
		},
		{
			id: "051012",
			province_id: "0510",
			description: "Vilcanchos",
			active: true
		},
		{
			id: "051101",
			province_id: "0511",
			description: "Vilcas Huaman",
			active: true
		},
		{
			id: "051102",
			province_id: "0511",
			description: "Accomarca",
			active: true
		},
		{
			id: "051103",
			province_id: "0511",
			description: "Carhuanca",
			active: true
		},
		{
			id: "051104",
			province_id: "0511",
			description: "Concepción",
			active: true
		},
		{
			id: "051105",
			province_id: "0511",
			description: "Huambalpa",
			active: true
		},
		{
			id: "051106",
			province_id: "0511",
			description: "Independencia",
			active: true
		},
		{
			id: "051107",
			province_id: "0511",
			description: "Saurama",
			active: true
		},
		{
			id: "051108",
			province_id: "0511",
			description: "Vischongo",
			active: true
		},
		{
			id: "060101",
			province_id: "0601",
			description: "Cajamarca",
			active: true
		},
		{
			id: "060102",
			province_id: "0601",
			description: "Asunción",
			active: true
		},
		{
			id: "060103",
			province_id: "0601",
			description: "Chetilla",
			active: true
		},
		{
			id: "060104",
			province_id: "0601",
			description: "Cospan",
			active: true
		},
		{
			id: "060105",
			province_id: "0601",
			description: "Encañada",
			active: true
		},
		{
			id: "060106",
			province_id: "0601",
			description: "Jesús",
			active: true
		},
		{
			id: "060107",
			province_id: "0601",
			description: "Llacanora",
			active: true
		},
		{
			id: "060108",
			province_id: "0601",
			description: "Los Baños del Inca",
			active: true
		},
		{
			id: "060109",
			province_id: "0601",
			description: "Magdalena",
			active: true
		},
		{
			id: "060110",
			province_id: "0601",
			description: "Matara",
			active: true
		},
		{
			id: "060111",
			province_id: "0601",
			description: "Namora",
			active: true
		},
		{
			id: "060112",
			province_id: "0601",
			description: "San Juan",
			active: true
		},
		{
			id: "060201",
			province_id: "0602",
			description: "Cajabamba",
			active: true
		},
		{
			id: "060202",
			province_id: "0602",
			description: "Cachachi",
			active: true
		},
		{
			id: "060203",
			province_id: "0602",
			description: "Condebamba",
			active: true
		},
		{
			id: "060204",
			province_id: "0602",
			description: "Sitacocha",
			active: true
		},
		{
			id: "060301",
			province_id: "0603",
			description: "Celendín",
			active: true
		},
		{
			id: "060302",
			province_id: "0603",
			description: "Chumuch",
			active: true
		},
		{
			id: "060303",
			province_id: "0603",
			description: "Cortegana",
			active: true
		},
		{
			id: "060304",
			province_id: "0603",
			description: "Huasmin",
			active: true
		},
		{
			id: "060305",
			province_id: "0603",
			description: "Jorge Chávez",
			active: true
		},
		{
			id: "060306",
			province_id: "0603",
			description: "José Gálvez",
			active: true
		},
		{
			id: "060307",
			province_id: "0603",
			description: "Miguel Iglesias",
			active: true
		},
		{
			id: "060308",
			province_id: "0603",
			description: "Oxamarca",
			active: true
		},
		{
			id: "060309",
			province_id: "0603",
			description: "Sorochuco",
			active: true
		},
		{
			id: "060310",
			province_id: "0603",
			description: "Sucre",
			active: true
		},
		{
			id: "060311",
			province_id: "0603",
			description: "Utco",
			active: true
		},
		{
			id: "060312",
			province_id: "0603",
			description: "La Libertad de Pallan",
			active: true
		},
		{
			id: "060401",
			province_id: "0604",
			description: "Chota",
			active: true
		},
		{
			id: "060402",
			province_id: "0604",
			description: "Anguia",
			active: true
		},
		{
			id: "060403",
			province_id: "0604",
			description: "Chadin",
			active: true
		},
		{
			id: "060404",
			province_id: "0604",
			description: "Chiguirip",
			active: true
		},
		{
			id: "060405",
			province_id: "0604",
			description: "Chimban",
			active: true
		},
		{
			id: "060406",
			province_id: "0604",
			description: "Choropampa",
			active: true
		},
		{
			id: "060407",
			province_id: "0604",
			description: "Cochabamba",
			active: true
		},
		{
			id: "060408",
			province_id: "0604",
			description: "Conchan",
			active: true
		},
		{
			id: "060409",
			province_id: "0604",
			description: "Huambos",
			active: true
		},
		{
			id: "060410",
			province_id: "0604",
			description: "Lajas",
			active: true
		},
		{
			id: "060411",
			province_id: "0604",
			description: "Llama",
			active: true
		},
		{
			id: "060412",
			province_id: "0604",
			description: "Miracosta",
			active: true
		},
		{
			id: "060413",
			province_id: "0604",
			description: "Paccha",
			active: true
		},
		{
			id: "060414",
			province_id: "0604",
			description: "Pion",
			active: true
		},
		{
			id: "060415",
			province_id: "0604",
			description: "Querocoto",
			active: true
		},
		{
			id: "060416",
			province_id: "0604",
			description: "San Juan de Licupis",
			active: true
		},
		{
			id: "060417",
			province_id: "0604",
			description: "Tacabamba",
			active: true
		},
		{
			id: "060418",
			province_id: "0604",
			description: "Tocmoche",
			active: true
		},
		{
			id: "060419",
			province_id: "0604",
			description: "Chalamarca",
			active: true
		},
		{
			id: "060501",
			province_id: "0605",
			description: "Contumaza",
			active: true
		},
		{
			id: "060502",
			province_id: "0605",
			description: "Chilete",
			active: true
		},
		{
			id: "060503",
			province_id: "0605",
			description: "Cupisnique",
			active: true
		},
		{
			id: "060504",
			province_id: "0605",
			description: "Guzmango",
			active: true
		},
		{
			id: "060505",
			province_id: "0605",
			description: "San Benito",
			active: true
		},
		{
			id: "060506",
			province_id: "0605",
			description: "Santa Cruz de Toledo",
			active: true
		},
		{
			id: "060507",
			province_id: "0605",
			description: "Tantarica",
			active: true
		},
		{
			id: "060508",
			province_id: "0605",
			description: "Yonan",
			active: true
		},
		{
			id: "060601",
			province_id: "0606",
			description: "Cutervo",
			active: true
		},
		{
			id: "060602",
			province_id: "0606",
			description: "Callayuc",
			active: true
		},
		{
			id: "060603",
			province_id: "0606",
			description: "Choros",
			active: true
		},
		{
			id: "060604",
			province_id: "0606",
			description: "Cujillo",
			active: true
		},
		{
			id: "060605",
			province_id: "0606",
			description: "La Ramada",
			active: true
		},
		{
			id: "060606",
			province_id: "0606",
			description: "Pimpingos",
			active: true
		},
		{
			id: "060607",
			province_id: "0606",
			description: "Querocotillo",
			active: true
		},
		{
			id: "060608",
			province_id: "0606",
			description: "San Andrés de Cutervo",
			active: true
		},
		{
			id: "060609",
			province_id: "0606",
			description: "San Juan de Cutervo",
			active: true
		},
		{
			id: "060610",
			province_id: "0606",
			description: "San Luis de Lucma",
			active: true
		},
		{
			id: "060611",
			province_id: "0606",
			description: "Santa Cruz",
			active: true
		},
		{
			id: "060612",
			province_id: "0606",
			description: "Santo Domingo de la Capilla",
			active: true
		},
		{
			id: "060613",
			province_id: "0606",
			description: "Santo Tomas",
			active: true
		},
		{
			id: "060614",
			province_id: "0606",
			description: "Socota",
			active: true
		},
		{
			id: "060615",
			province_id: "0606",
			description: "Toribio Casanova",
			active: true
		},
		{
			id: "060701",
			province_id: "0607",
			description: "Bambamarca",
			active: true
		},
		{
			id: "060702",
			province_id: "0607",
			description: "Chugur",
			active: true
		},
		{
			id: "060703",
			province_id: "0607",
			description: "Hualgayoc",
			active: true
		},
		{
			id: "060801",
			province_id: "0608",
			description: "Jaén",
			active: true
		},
		{
			id: "060802",
			province_id: "0608",
			description: "Bellavista",
			active: true
		},
		{
			id: "060803",
			province_id: "0608",
			description: "Chontali",
			active: true
		},
		{
			id: "060804",
			province_id: "0608",
			description: "Colasay",
			active: true
		},
		{
			id: "060805",
			province_id: "0608",
			description: "Huabal",
			active: true
		},
		{
			id: "060806",
			province_id: "0608",
			description: "Las Pirias",
			active: true
		},
		{
			id: "060807",
			province_id: "0608",
			description: "Pomahuaca",
			active: true
		},
		{
			id: "060808",
			province_id: "0608",
			description: "Pucara",
			active: true
		},
		{
			id: "060809",
			province_id: "0608",
			description: "Sallique",
			active: true
		},
		{
			id: "060810",
			province_id: "0608",
			description: "San Felipe",
			active: true
		},
		{
			id: "060811",
			province_id: "0608",
			description: "San José del Alto",
			active: true
		},
		{
			id: "060812",
			province_id: "0608",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "060901",
			province_id: "0609",
			description: "San Ignacio",
			active: true
		},
		{
			id: "060902",
			province_id: "0609",
			description: "Chirinos",
			active: true
		},
		{
			id: "060903",
			province_id: "0609",
			description: "Huarango",
			active: true
		},
		{
			id: "060904",
			province_id: "0609",
			description: "La Coipa",
			active: true
		},
		{
			id: "060905",
			province_id: "0609",
			description: "Namballe",
			active: true
		},
		{
			id: "060906",
			province_id: "0609",
			description: "San José de Lourdes",
			active: true
		},
		{
			id: "060907",
			province_id: "0609",
			description: "Tabaconas",
			active: true
		},
		{
			id: "061001",
			province_id: "0610",
			description: "Pedro Gálvez",
			active: true
		},
		{
			id: "061002",
			province_id: "0610",
			description: "Chancay",
			active: true
		},
		{
			id: "061003",
			province_id: "0610",
			description: "Eduardo Villanueva",
			active: true
		},
		{
			id: "061004",
			province_id: "0610",
			description: "Gregorio Pita",
			active: true
		},
		{
			id: "061005",
			province_id: "0610",
			description: "Ichocan",
			active: true
		},
		{
			id: "061006",
			province_id: "0610",
			description: "José Manuel Quiroz",
			active: true
		},
		{
			id: "061007",
			province_id: "0610",
			description: "José Sabogal",
			active: true
		},
		{
			id: "061101",
			province_id: "0611",
			description: "San Miguel",
			active: true
		},
		{
			id: "061102",
			province_id: "0611",
			description: "Bolívar",
			active: true
		},
		{
			id: "061103",
			province_id: "0611",
			description: "Calquis",
			active: true
		},
		{
			id: "061104",
			province_id: "0611",
			description: "Catilluc",
			active: true
		},
		{
			id: "061105",
			province_id: "0611",
			description: "El Prado",
			active: true
		},
		{
			id: "061106",
			province_id: "0611",
			description: "La Florida",
			active: true
		},
		{
			id: "061107",
			province_id: "0611",
			description: "Llapa",
			active: true
		},
		{
			id: "061108",
			province_id: "0611",
			description: "Nanchoc",
			active: true
		},
		{
			id: "061109",
			province_id: "0611",
			description: "Niepos",
			active: true
		},
		{
			id: "061110",
			province_id: "0611",
			description: "San Gregorio",
			active: true
		},
		{
			id: "061111",
			province_id: "0611",
			description: "San Silvestre de Cochan",
			active: true
		},
		{
			id: "061112",
			province_id: "0611",
			description: "Tongod",
			active: true
		},
		{
			id: "061113",
			province_id: "0611",
			description: "Unión Agua Blanca",
			active: true
		},
		{
			id: "061201",
			province_id: "0612",
			description: "San Pablo",
			active: true
		},
		{
			id: "061202",
			province_id: "0612",
			description: "San Bernardino",
			active: true
		},
		{
			id: "061203",
			province_id: "0612",
			description: "San Luis",
			active: true
		},
		{
			id: "061204",
			province_id: "0612",
			description: "Tumbaden",
			active: true
		},
		{
			id: "061301",
			province_id: "0613",
			description: "Santa Cruz",
			active: true
		},
		{
			id: "061302",
			province_id: "0613",
			description: "Andabamba",
			active: true
		},
		{
			id: "061303",
			province_id: "0613",
			description: "Catache",
			active: true
		},
		{
			id: "061304",
			province_id: "0613",
			description: "Chancaybaños",
			active: true
		},
		{
			id: "061305",
			province_id: "0613",
			description: "La Esperanza",
			active: true
		},
		{
			id: "061306",
			province_id: "0613",
			description: "Ninabamba",
			active: true
		},
		{
			id: "061307",
			province_id: "0613",
			description: "Pulan",
			active: true
		},
		{
			id: "061308",
			province_id: "0613",
			description: "Saucepampa",
			active: true
		},
		{
			id: "061309",
			province_id: "0613",
			description: "Sexi",
			active: true
		},
		{
			id: "061310",
			province_id: "0613",
			description: "Uticyacu",
			active: true
		},
		{
			id: "061311",
			province_id: "0613",
			description: "Yauyucan",
			active: true
		},
		{
			id: "070101",
			province_id: "0701",
			description: "Callao",
			active: true
		},
		{
			id: "070102",
			province_id: "0701",
			description: "Bellavista",
			active: true
		},
		{
			id: "070103",
			province_id: "0701",
			description: "Carmen de la Legua Reynoso",
			active: true
		},
		{
			id: "070104",
			province_id: "0701",
			description: "La Perla",
			active: true
		},
		{
			id: "070105",
			province_id: "0701",
			description: "La Punta",
			active: true
		},
		{
			id: "070106",
			province_id: "0701",
			description: "Ventanilla",
			active: true
		},
		{
			id: "070107",
			province_id: "0701",
			description: "Mi Perú",
			active: true
		},
		{
			id: "080101",
			province_id: "0801",
			description: "Cusco",
			active: true
		},
		{
			id: "080102",
			province_id: "0801",
			description: "Ccorca",
			active: true
		},
		{
			id: "080103",
			province_id: "0801",
			description: "Poroy",
			active: true
		},
		{
			id: "080104",
			province_id: "0801",
			description: "San Jerónimo",
			active: true
		},
		{
			id: "080105",
			province_id: "0801",
			description: "San Sebastian",
			active: true
		},
		{
			id: "080106",
			province_id: "0801",
			description: "Santiago",
			active: true
		},
		{
			id: "080107",
			province_id: "0801",
			description: "Saylla",
			active: true
		},
		{
			id: "080108",
			province_id: "0801",
			description: "Wanchaq",
			active: true
		},
		{
			id: "080201",
			province_id: "0802",
			description: "Acomayo",
			active: true
		},
		{
			id: "080202",
			province_id: "0802",
			description: "Acopia",
			active: true
		},
		{
			id: "080203",
			province_id: "0802",
			description: "Acos",
			active: true
		},
		{
			id: "080204",
			province_id: "0802",
			description: "Mosoc Llacta",
			active: true
		},
		{
			id: "080205",
			province_id: "0802",
			description: "Pomacanchi",
			active: true
		},
		{
			id: "080206",
			province_id: "0802",
			description: "Rondocan",
			active: true
		},
		{
			id: "080207",
			province_id: "0802",
			description: "Sangarara",
			active: true
		},
		{
			id: "080301",
			province_id: "0803",
			description: "Anta",
			active: true
		},
		{
			id: "080302",
			province_id: "0803",
			description: "Ancahuasi",
			active: true
		},
		{
			id: "080303",
			province_id: "0803",
			description: "Cachimayo",
			active: true
		},
		{
			id: "080304",
			province_id: "0803",
			description: "Chinchaypujio",
			active: true
		},
		{
			id: "080305",
			province_id: "0803",
			description: "Huarocondo",
			active: true
		},
		{
			id: "080306",
			province_id: "0803",
			description: "Limatambo",
			active: true
		},
		{
			id: "080307",
			province_id: "0803",
			description: "Mollepata",
			active: true
		},
		{
			id: "080308",
			province_id: "0803",
			description: "Pucyura",
			active: true
		},
		{
			id: "080309",
			province_id: "0803",
			description: "Zurite",
			active: true
		},
		{
			id: "080401",
			province_id: "0804",
			description: "Calca",
			active: true
		},
		{
			id: "080402",
			province_id: "0804",
			description: "Coya",
			active: true
		},
		{
			id: "080403",
			province_id: "0804",
			description: "Lamay",
			active: true
		},
		{
			id: "080404",
			province_id: "0804",
			description: "Lares",
			active: true
		},
		{
			id: "080405",
			province_id: "0804",
			description: "Pisac",
			active: true
		},
		{
			id: "080406",
			province_id: "0804",
			description: "San Salvador",
			active: true
		},
		{
			id: "080407",
			province_id: "0804",
			description: "Taray",
			active: true
		},
		{
			id: "080408",
			province_id: "0804",
			description: "Yanatile",
			active: true
		},
		{
			id: "080501",
			province_id: "0805",
			description: "Yanaoca",
			active: true
		},
		{
			id: "080502",
			province_id: "0805",
			description: "Checca",
			active: true
		},
		{
			id: "080503",
			province_id: "0805",
			description: "Kunturkanki",
			active: true
		},
		{
			id: "080504",
			province_id: "0805",
			description: "Langui",
			active: true
		},
		{
			id: "080505",
			province_id: "0805",
			description: "Layo",
			active: true
		},
		{
			id: "080506",
			province_id: "0805",
			description: "Pampamarca",
			active: true
		},
		{
			id: "080507",
			province_id: "0805",
			description: "Quehue",
			active: true
		},
		{
			id: "080508",
			province_id: "0805",
			description: "Tupac Amaru",
			active: true
		},
		{
			id: "080601",
			province_id: "0806",
			description: "Sicuani",
			active: true
		},
		{
			id: "080602",
			province_id: "0806",
			description: "Checacupe",
			active: true
		},
		{
			id: "080603",
			province_id: "0806",
			description: "Combapata",
			active: true
		},
		{
			id: "080604",
			province_id: "0806",
			description: "Marangani",
			active: true
		},
		{
			id: "080605",
			province_id: "0806",
			description: "Pitumarca",
			active: true
		},
		{
			id: "080606",
			province_id: "0806",
			description: "San Pablo",
			active: true
		},
		{
			id: "080607",
			province_id: "0806",
			description: "San Pedro",
			active: true
		},
		{
			id: "080608",
			province_id: "0806",
			description: "Tinta",
			active: true
		},
		{
			id: "080701",
			province_id: "0807",
			description: "Santo Tomas",
			active: true
		},
		{
			id: "080702",
			province_id: "0807",
			description: "Capacmarca",
			active: true
		},
		{
			id: "080703",
			province_id: "0807",
			description: "Chamaca",
			active: true
		},
		{
			id: "080704",
			province_id: "0807",
			description: "Colquemarca",
			active: true
		},
		{
			id: "080705",
			province_id: "0807",
			description: "Livitaca",
			active: true
		},
		{
			id: "080706",
			province_id: "0807",
			description: "Llusco",
			active: true
		},
		{
			id: "080707",
			province_id: "0807",
			description: "Quiñota",
			active: true
		},
		{
			id: "080708",
			province_id: "0807",
			description: "Velille",
			active: true
		},
		{
			id: "080801",
			province_id: "0808",
			description: "Espinar",
			active: true
		},
		{
			id: "080802",
			province_id: "0808",
			description: "Condoroma",
			active: true
		},
		{
			id: "080803",
			province_id: "0808",
			description: "Coporaque",
			active: true
		},
		{
			id: "080804",
			province_id: "0808",
			description: "Ocoruro",
			active: true
		},
		{
			id: "080805",
			province_id: "0808",
			description: "Pallpata",
			active: true
		},
		{
			id: "080806",
			province_id: "0808",
			description: "Pichigua",
			active: true
		},
		{
			id: "080807",
			province_id: "0808",
			description: "Suyckutambo",
			active: true
		},
		{
			id: "080808",
			province_id: "0808",
			description: "Alto Pichigua",
			active: true
		},
		{
			id: "080901",
			province_id: "0809",
			description: "Santa Ana",
			active: true
		},
		{
			id: "080902",
			province_id: "0809",
			description: "Echarate",
			active: true
		},
		{
			id: "080903",
			province_id: "0809",
			description: "Huayopata",
			active: true
		},
		{
			id: "080904",
			province_id: "0809",
			description: "Maranura",
			active: true
		},
		{
			id: "080905",
			province_id: "0809",
			description: "Ocobamba",
			active: true
		},
		{
			id: "080906",
			province_id: "0809",
			description: "Quellouno",
			active: true
		},
		{
			id: "080907",
			province_id: "0809",
			description: "Kimbiri",
			active: true
		},
		{
			id: "080908",
			province_id: "0809",
			description: "Santa Teresa",
			active: true
		},
		{
			id: "080909",
			province_id: "0809",
			description: "Vilcabamba",
			active: true
		},
		{
			id: "080910",
			province_id: "0809",
			description: "Pichari",
			active: true
		},
		{
			id: "080911",
			province_id: "0809",
			description: "Inkawasi",
			active: true
		},
		{
			id: "080912",
			province_id: "0809",
			description: "Villa Virgen",
			active: true
		},
		{
			id: "080913",
			province_id: "0809",
			description: "Villa Kintiarina",
			active: true
		},
		{
			id: "081001",
			province_id: "0810",
			description: "Paruro",
			active: true
		},
		{
			id: "081002",
			province_id: "0810",
			description: "Accha",
			active: true
		},
		{
			id: "081003",
			province_id: "0810",
			description: "Ccapi",
			active: true
		},
		{
			id: "081004",
			province_id: "0810",
			description: "Colcha",
			active: true
		},
		{
			id: "081005",
			province_id: "0810",
			description: "Huanoquite",
			active: true
		},
		{
			id: "081006",
			province_id: "0810",
			description: "Omacha",
			active: true
		},
		{
			id: "081007",
			province_id: "0810",
			description: "Paccaritambo",
			active: true
		},
		{
			id: "081008",
			province_id: "0810",
			description: "Pillpinto",
			active: true
		},
		{
			id: "081009",
			province_id: "0810",
			description: "Yaurisque",
			active: true
		},
		{
			id: "081101",
			province_id: "0811",
			description: "Paucartambo",
			active: true
		},
		{
			id: "081102",
			province_id: "0811",
			description: "Caicay",
			active: true
		},
		{
			id: "081103",
			province_id: "0811",
			description: "Challabamba",
			active: true
		},
		{
			id: "081104",
			province_id: "0811",
			description: "Colquepata",
			active: true
		},
		{
			id: "081105",
			province_id: "0811",
			description: "Huancarani",
			active: true
		},
		{
			id: "081106",
			province_id: "0811",
			description: "Kosñipata",
			active: true
		},
		{
			id: "081201",
			province_id: "0812",
			description: "Urcos",
			active: true
		},
		{
			id: "081202",
			province_id: "0812",
			description: "Andahuaylillas",
			active: true
		},
		{
			id: "081203",
			province_id: "0812",
			description: "Camanti",
			active: true
		},
		{
			id: "081204",
			province_id: "0812",
			description: "Ccarhuayo",
			active: true
		},
		{
			id: "081205",
			province_id: "0812",
			description: "Ccatca",
			active: true
		},
		{
			id: "081206",
			province_id: "0812",
			description: "Cusipata",
			active: true
		},
		{
			id: "081207",
			province_id: "0812",
			description: "Huaro",
			active: true
		},
		{
			id: "081208",
			province_id: "0812",
			description: "Lucre",
			active: true
		},
		{
			id: "081209",
			province_id: "0812",
			description: "Marcapata",
			active: true
		},
		{
			id: "081210",
			province_id: "0812",
			description: "Ocongate",
			active: true
		},
		{
			id: "081211",
			province_id: "0812",
			description: "Oropesa",
			active: true
		},
		{
			id: "081212",
			province_id: "0812",
			description: "Quiquijana",
			active: true
		},
		{
			id: "081301",
			province_id: "0813",
			description: "Urubamba",
			active: true
		},
		{
			id: "081302",
			province_id: "0813",
			description: "Chinchero",
			active: true
		},
		{
			id: "081303",
			province_id: "0813",
			description: "Huayllabamba",
			active: true
		},
		{
			id: "081304",
			province_id: "0813",
			description: "Machupicchu",
			active: true
		},
		{
			id: "081305",
			province_id: "0813",
			description: "Maras",
			active: true
		},
		{
			id: "081306",
			province_id: "0813",
			description: "Ollantaytambo",
			active: true
		},
		{
			id: "081307",
			province_id: "0813",
			description: "Yucay",
			active: true
		},
		{
			id: "090101",
			province_id: "0901",
			description: "Huancavelica",
			active: true
		},
		{
			id: "090102",
			province_id: "0901",
			description: "Acobambilla",
			active: true
		},
		{
			id: "090103",
			province_id: "0901",
			description: "Acoria",
			active: true
		},
		{
			id: "090104",
			province_id: "0901",
			description: "Conayca",
			active: true
		},
		{
			id: "090105",
			province_id: "0901",
			description: "Cuenca",
			active: true
		},
		{
			id: "090106",
			province_id: "0901",
			description: "Huachocolpa",
			active: true
		},
		{
			id: "090107",
			province_id: "0901",
			description: "Huayllahuara",
			active: true
		},
		{
			id: "090108",
			province_id: "0901",
			description: "Izcuchaca",
			active: true
		},
		{
			id: "090109",
			province_id: "0901",
			description: "Laria",
			active: true
		},
		{
			id: "090110",
			province_id: "0901",
			description: "Manta",
			active: true
		},
		{
			id: "090111",
			province_id: "0901",
			description: "Mariscal Cáceres",
			active: true
		},
		{
			id: "090112",
			province_id: "0901",
			description: "Moya",
			active: true
		},
		{
			id: "090113",
			province_id: "0901",
			description: "Nuevo Occoro",
			active: true
		},
		{
			id: "090114",
			province_id: "0901",
			description: "Palca",
			active: true
		},
		{
			id: "090115",
			province_id: "0901",
			description: "Pilchaca",
			active: true
		},
		{
			id: "090116",
			province_id: "0901",
			description: "Vilca",
			active: true
		},
		{
			id: "090117",
			province_id: "0901",
			description: "Yauli",
			active: true
		},
		{
			id: "090118",
			province_id: "0901",
			description: "Ascensión",
			active: true
		},
		{
			id: "090119",
			province_id: "0901",
			description: "Huando",
			active: true
		},
		{
			id: "090201",
			province_id: "0902",
			description: "Acobamba",
			active: true
		},
		{
			id: "090202",
			province_id: "0902",
			description: "Andabamba",
			active: true
		},
		{
			id: "090203",
			province_id: "0902",
			description: "Anta",
			active: true
		},
		{
			id: "090204",
			province_id: "0902",
			description: "Caja",
			active: true
		},
		{
			id: "090205",
			province_id: "0902",
			description: "Marcas",
			active: true
		},
		{
			id: "090206",
			province_id: "0902",
			description: "Paucara",
			active: true
		},
		{
			id: "090207",
			province_id: "0902",
			description: "Pomacocha",
			active: true
		},
		{
			id: "090208",
			province_id: "0902",
			description: "Rosario",
			active: true
		},
		{
			id: "090301",
			province_id: "0903",
			description: "Lircay",
			active: true
		},
		{
			id: "090302",
			province_id: "0903",
			description: "Anchonga",
			active: true
		},
		{
			id: "090303",
			province_id: "0903",
			description: "Callanmarca",
			active: true
		},
		{
			id: "090304",
			province_id: "0903",
			description: "Ccochaccasa",
			active: true
		},
		{
			id: "090305",
			province_id: "0903",
			description: "Chincho",
			active: true
		},
		{
			id: "090306",
			province_id: "0903",
			description: "Congalla",
			active: true
		},
		{
			id: "090307",
			province_id: "0903",
			description: "Huanca-Huanca",
			active: true
		},
		{
			id: "090308",
			province_id: "0903",
			description: "Huayllay Grande",
			active: true
		},
		{
			id: "090309",
			province_id: "0903",
			description: "Julcamarca",
			active: true
		},
		{
			id: "090310",
			province_id: "0903",
			description: "San Antonio de Antaparco",
			active: true
		},
		{
			id: "090311",
			province_id: "0903",
			description: "Santo Tomas de Pata",
			active: true
		},
		{
			id: "090312",
			province_id: "0903",
			description: "Secclla",
			active: true
		},
		{
			id: "090401",
			province_id: "0904",
			description: "Castrovirreyna",
			active: true
		},
		{
			id: "090402",
			province_id: "0904",
			description: "Arma",
			active: true
		},
		{
			id: "090403",
			province_id: "0904",
			description: "Aurahua",
			active: true
		},
		{
			id: "090404",
			province_id: "0904",
			description: "Capillas",
			active: true
		},
		{
			id: "090405",
			province_id: "0904",
			description: "Chupamarca",
			active: true
		},
		{
			id: "090406",
			province_id: "0904",
			description: "Cocas",
			active: true
		},
		{
			id: "090407",
			province_id: "0904",
			description: "Huachos",
			active: true
		},
		{
			id: "090408",
			province_id: "0904",
			description: "Huamatambo",
			active: true
		},
		{
			id: "090409",
			province_id: "0904",
			description: "Mollepampa",
			active: true
		},
		{
			id: "090410",
			province_id: "0904",
			description: "San Juan",
			active: true
		},
		{
			id: "090411",
			province_id: "0904",
			description: "Santa Ana",
			active: true
		},
		{
			id: "090412",
			province_id: "0904",
			description: "Tantara",
			active: true
		},
		{
			id: "090413",
			province_id: "0904",
			description: "Ticrapo",
			active: true
		},
		{
			id: "090501",
			province_id: "0905",
			description: "Churcampa",
			active: true
		},
		{
			id: "090502",
			province_id: "0905",
			description: "Anco",
			active: true
		},
		{
			id: "090503",
			province_id: "0905",
			description: "Chinchihuasi",
			active: true
		},
		{
			id: "090504",
			province_id: "0905",
			description: "El Carmen",
			active: true
		},
		{
			id: "090505",
			province_id: "0905",
			description: "La Merced",
			active: true
		},
		{
			id: "090506",
			province_id: "0905",
			description: "Locroja",
			active: true
		},
		{
			id: "090507",
			province_id: "0905",
			description: "Paucarbamba",
			active: true
		},
		{
			id: "090508",
			province_id: "0905",
			description: "San Miguel de Mayocc",
			active: true
		},
		{
			id: "090509",
			province_id: "0905",
			description: "San Pedro de Coris",
			active: true
		},
		{
			id: "090510",
			province_id: "0905",
			description: "Pachamarca",
			active: true
		},
		{
			id: "090511",
			province_id: "0905",
			description: "Cosme",
			active: true
		},
		{
			id: "090601",
			province_id: "0906",
			description: "Huaytara",
			active: true
		},
		{
			id: "090602",
			province_id: "0906",
			description: "Ayavi",
			active: true
		},
		{
			id: "090603",
			province_id: "0906",
			description: "Córdova",
			active: true
		},
		{
			id: "090604",
			province_id: "0906",
			description: "Huayacundo Arma",
			active: true
		},
		{
			id: "090605",
			province_id: "0906",
			description: "Laramarca",
			active: true
		},
		{
			id: "090606",
			province_id: "0906",
			description: "Ocoyo",
			active: true
		},
		{
			id: "090607",
			province_id: "0906",
			description: "Pilpichaca",
			active: true
		},
		{
			id: "090608",
			province_id: "0906",
			description: "Querco",
			active: true
		},
		{
			id: "090609",
			province_id: "0906",
			description: "Quito-Arma",
			active: true
		},
		{
			id: "090610",
			province_id: "0906",
			description: "San Antonio de Cusicancha",
			active: true
		},
		{
			id: "090611",
			province_id: "0906",
			description: "San Francisco de Sangayaico",
			active: true
		},
		{
			id: "090612",
			province_id: "0906",
			description: "San Isidro",
			active: true
		},
		{
			id: "090613",
			province_id: "0906",
			description: "Santiago de Chocorvos",
			active: true
		},
		{
			id: "090614",
			province_id: "0906",
			description: "Santiago de Quirahuara",
			active: true
		},
		{
			id: "090615",
			province_id: "0906",
			description: "Santo Domingo de Capillas",
			active: true
		},
		{
			id: "090616",
			province_id: "0906",
			description: "Tambo",
			active: true
		},
		{
			id: "090701",
			province_id: "0907",
			description: "Pampas",
			active: true
		},
		{
			id: "090702",
			province_id: "0907",
			description: "Acostambo",
			active: true
		},
		{
			id: "090703",
			province_id: "0907",
			description: "Acraquia",
			active: true
		},
		{
			id: "090704",
			province_id: "0907",
			description: "Ahuaycha",
			active: true
		},
		{
			id: "090705",
			province_id: "0907",
			description: "Colcabamba",
			active: true
		},
		{
			id: "090706",
			province_id: "0907",
			description: "Daniel Hernández",
			active: true
		},
		{
			id: "090707",
			province_id: "0907",
			description: "Huachocolpa",
			active: true
		},
		{
			id: "090709",
			province_id: "0907",
			description: "Huaribamba",
			active: true
		},
		{
			id: "090710",
			province_id: "0907",
			description: "Ñahuimpuquio",
			active: true
		},
		{
			id: "090711",
			province_id: "0907",
			description: "Pazos",
			active: true
		},
		{
			id: "090713",
			province_id: "0907",
			description: "Quishuar",
			active: true
		},
		{
			id: "090714",
			province_id: "0907",
			description: "Salcabamba",
			active: true
		},
		{
			id: "090715",
			province_id: "0907",
			description: "Salcahuasi",
			active: true
		},
		{
			id: "090716",
			province_id: "0907",
			description: "San Marcos de Rocchac",
			active: true
		},
		{
			id: "090717",
			province_id: "0907",
			description: "Surcubamba",
			active: true
		},
		{
			id: "090718",
			province_id: "0907",
			description: "Tintay Puncu",
			active: true
		},
		{
			id: "090719",
			province_id: "0907",
			description: "Quichuas",
			active: true
		},
		{
			id: "090720",
			province_id: "0907",
			description: "Andaymarca",
			active: true
		},
		{
			id: "090721",
			province_id: "0907",
			description: "Roble",
			active: true
		},
		{
			id: "090722",
			province_id: "0907",
			description: "Pichos",
			active: true
		},
		{
			id: "100101",
			province_id: "1001",
			description: "Huanuco",
			active: true
		},
		{
			id: "100102",
			province_id: "1001",
			description: "Amarilis",
			active: true
		},
		{
			id: "100103",
			province_id: "1001",
			description: "Chinchao",
			active: true
		},
		{
			id: "100104",
			province_id: "1001",
			description: "Churubamba",
			active: true
		},
		{
			id: "100105",
			province_id: "1001",
			description: "Margos",
			active: true
		},
		{
			id: "100106",
			province_id: "1001",
			description: "Quisqui (Kichki)",
			active: true
		},
		{
			id: "100107",
			province_id: "1001",
			description: "San Francisco de Cayran",
			active: true
		},
		{
			id: "100108",
			province_id: "1001",
			description: "San Pedro de Chaulan",
			active: true
		},
		{
			id: "100109",
			province_id: "1001",
			description: "Santa María del Valle",
			active: true
		},
		{
			id: "100110",
			province_id: "1001",
			description: "Yarumayo",
			active: true
		},
		{
			id: "100111",
			province_id: "1001",
			description: "Pillco Marca",
			active: true
		},
		{
			id: "100112",
			province_id: "1001",
			description: "Yacus",
			active: true
		},
		{
			id: "100113",
			province_id: "1001",
			description: "San Pablo de Pillao",
			active: true
		},
		{
			id: "100201",
			province_id: "1002",
			description: "Ambo",
			active: true
		},
		{
			id: "100202",
			province_id: "1002",
			description: "Cayna",
			active: true
		},
		{
			id: "100203",
			province_id: "1002",
			description: "Colpas",
			active: true
		},
		{
			id: "100204",
			province_id: "1002",
			description: "Conchamarca",
			active: true
		},
		{
			id: "100205",
			province_id: "1002",
			description: "Huacar",
			active: true
		},
		{
			id: "100206",
			province_id: "1002",
			description: "San Francisco",
			active: true
		},
		{
			id: "100207",
			province_id: "1002",
			description: "San Rafael",
			active: true
		},
		{
			id: "100208",
			province_id: "1002",
			description: "Tomay Kichwa",
			active: true
		},
		{
			id: "100301",
			province_id: "1003",
			description: "La Unión",
			active: true
		},
		{
			id: "100307",
			province_id: "1003",
			description: "Chuquis",
			active: true
		},
		{
			id: "100311",
			province_id: "1003",
			description: "Marías",
			active: true
		},
		{
			id: "100313",
			province_id: "1003",
			description: "Pachas",
			active: true
		},
		{
			id: "100316",
			province_id: "1003",
			description: "Quivilla",
			active: true
		},
		{
			id: "100317",
			province_id: "1003",
			description: "Ripan",
			active: true
		},
		{
			id: "100321",
			province_id: "1003",
			description: "Shunqui",
			active: true
		},
		{
			id: "100322",
			province_id: "1003",
			description: "Sillapata",
			active: true
		},
		{
			id: "100323",
			province_id: "1003",
			description: "Yanas",
			active: true
		},
		{
			id: "100401",
			province_id: "1004",
			description: "Huacaybamba",
			active: true
		},
		{
			id: "100402",
			province_id: "1004",
			description: "Canchabamba",
			active: true
		},
		{
			id: "100403",
			province_id: "1004",
			description: "Cochabamba",
			active: true
		},
		{
			id: "100404",
			province_id: "1004",
			description: "Pinra",
			active: true
		},
		{
			id: "100501",
			province_id: "1005",
			description: "Llata",
			active: true
		},
		{
			id: "100502",
			province_id: "1005",
			description: "Arancay",
			active: true
		},
		{
			id: "100503",
			province_id: "1005",
			description: "Chavín de Pariarca",
			active: true
		},
		{
			id: "100504",
			province_id: "1005",
			description: "Jacas Grande",
			active: true
		},
		{
			id: "100505",
			province_id: "1005",
			description: "Jircan",
			active: true
		},
		{
			id: "100506",
			province_id: "1005",
			description: "Miraflores",
			active: true
		},
		{
			id: "100507",
			province_id: "1005",
			description: "Monzón",
			active: true
		},
		{
			id: "100508",
			province_id: "1005",
			description: "Punchao",
			active: true
		},
		{
			id: "100509",
			province_id: "1005",
			description: "Puños",
			active: true
		},
		{
			id: "100510",
			province_id: "1005",
			description: "Singa",
			active: true
		},
		{
			id: "100511",
			province_id: "1005",
			description: "Tantamayo",
			active: true
		},
		{
			id: "100601",
			province_id: "1006",
			description: "Rupa-Rupa",
			active: true
		},
		{
			id: "100602",
			province_id: "1006",
			description: "Daniel Alomía Robles",
			active: true
		},
		{
			id: "100603",
			province_id: "1006",
			description: "Hermílio Valdizan",
			active: true
		},
		{
			id: "100604",
			province_id: "1006",
			description: "José Crespo y Castillo",
			active: true
		},
		{
			id: "100605",
			province_id: "1006",
			description: "Luyando",
			active: true
		},
		{
			id: "100606",
			province_id: "1006",
			description: "Mariano Damaso Beraun",
			active: true
		},
		{
			id: "100607",
			province_id: "1006",
			description: "Pucayacu",
			active: true
		},
		{
			id: "100608",
			province_id: "1006",
			description: "Castillo Grande",
			active: true
		},
		{
			id: "100701",
			province_id: "1007",
			description: "Huacrachuco",
			active: true
		},
		{
			id: "100702",
			province_id: "1007",
			description: "Cholon",
			active: true
		},
		{
			id: "100703",
			province_id: "1007",
			description: "San Buenaventura",
			active: true
		},
		{
			id: "100704",
			province_id: "1007",
			description: "La Morada",
			active: true
		},
		{
			id: "100705",
			province_id: "1007",
			description: "Santa Rosa de Alto Yanajanca",
			active: true
		},
		{
			id: "100801",
			province_id: "1008",
			description: "Panao",
			active: true
		},
		{
			id: "100802",
			province_id: "1008",
			description: "Chaglla",
			active: true
		},
		{
			id: "100803",
			province_id: "1008",
			description: "Molino",
			active: true
		},
		{
			id: "100804",
			province_id: "1008",
			description: "Umari",
			active: true
		},
		{
			id: "100901",
			province_id: "1009",
			description: "Puerto Inca",
			active: true
		},
		{
			id: "100902",
			province_id: "1009",
			description: "Codo del Pozuzo",
			active: true
		},
		{
			id: "100903",
			province_id: "1009",
			description: "Honoria",
			active: true
		},
		{
			id: "100904",
			province_id: "1009",
			description: "Tournavista",
			active: true
		},
		{
			id: "100905",
			province_id: "1009",
			description: "Yuyapichis",
			active: true
		},
		{
			id: "101001",
			province_id: "1010",
			description: "Jesús",
			active: true
		},
		{
			id: "101002",
			province_id: "1010",
			description: "Baños",
			active: true
		},
		{
			id: "101003",
			province_id: "1010",
			description: "Jivia",
			active: true
		},
		{
			id: "101004",
			province_id: "1010",
			description: "Queropalca",
			active: true
		},
		{
			id: "101005",
			province_id: "1010",
			description: "Rondos",
			active: true
		},
		{
			id: "101006",
			province_id: "1010",
			description: "San Francisco de Asís",
			active: true
		},
		{
			id: "101007",
			province_id: "1010",
			description: "San Miguel de Cauri",
			active: true
		},
		{
			id: "101101",
			province_id: "1011",
			description: "Chavinillo",
			active: true
		},
		{
			id: "101102",
			province_id: "1011",
			description: "Cahuac",
			active: true
		},
		{
			id: "101103",
			province_id: "1011",
			description: "Chacabamba",
			active: true
		},
		{
			id: "101104",
			province_id: "1011",
			description: "Aparicio Pomares",
			active: true
		},
		{
			id: "101105",
			province_id: "1011",
			description: "Jacas Chico",
			active: true
		},
		{
			id: "101106",
			province_id: "1011",
			description: "Obas",
			active: true
		},
		{
			id: "101107",
			province_id: "1011",
			description: "Pampamarca",
			active: true
		},
		{
			id: "101108",
			province_id: "1011",
			description: "Choras",
			active: true
		},
		{
			id: "110101",
			province_id: "1101",
			description: "Ica",
			active: true
		},
		{
			id: "110102",
			province_id: "1101",
			description: "La Tinguiña",
			active: true
		},
		{
			id: "110103",
			province_id: "1101",
			description: "Los Aquijes",
			active: true
		},
		{
			id: "110104",
			province_id: "1101",
			description: "Ocucaje",
			active: true
		},
		{
			id: "110105",
			province_id: "1101",
			description: "Pachacutec",
			active: true
		},
		{
			id: "110106",
			province_id: "1101",
			description: "Parcona",
			active: true
		},
		{
			id: "110107",
			province_id: "1101",
			description: "Pueblo Nuevo",
			active: true
		},
		{
			id: "110108",
			province_id: "1101",
			description: "Salas",
			active: true
		},
		{
			id: "110109",
			province_id: "1101",
			description: "San José de Los Molinos",
			active: true
		},
		{
			id: "110110",
			province_id: "1101",
			description: "San Juan Bautista",
			active: true
		},
		{
			id: "110111",
			province_id: "1101",
			description: "Santiago",
			active: true
		},
		{
			id: "110112",
			province_id: "1101",
			description: "Subtanjalla",
			active: true
		},
		{
			id: "110113",
			province_id: "1101",
			description: "Tate",
			active: true
		},
		{
			id: "110114",
			province_id: "1101",
			description: "Yauca del Rosario",
			active: true
		},
		{
			id: "110201",
			province_id: "1102",
			description: "Chincha Alta",
			active: true
		},
		{
			id: "110202",
			province_id: "1102",
			description: "Alto Laran",
			active: true
		},
		{
			id: "110203",
			province_id: "1102",
			description: "Chavin",
			active: true
		},
		{
			id: "110204",
			province_id: "1102",
			description: "Chincha Baja",
			active: true
		},
		{
			id: "110205",
			province_id: "1102",
			description: "El Carmen",
			active: true
		},
		{
			id: "110206",
			province_id: "1102",
			description: "Grocio Prado",
			active: true
		},
		{
			id: "110207",
			province_id: "1102",
			description: "Pueblo Nuevo",
			active: true
		},
		{
			id: "110208",
			province_id: "1102",
			description: "San Juan de Yanac",
			active: true
		},
		{
			id: "110209",
			province_id: "1102",
			description: "San Pedro de Huacarpana",
			active: true
		},
		{
			id: "110210",
			province_id: "1102",
			description: "Sunampe",
			active: true
		},
		{
			id: "110211",
			province_id: "1102",
			description: "Tambo de Mora",
			active: true
		},
		{
			id: "110301",
			province_id: "1103",
			description: "Nasca",
			active: true
		},
		{
			id: "110302",
			province_id: "1103",
			description: "Changuillo",
			active: true
		},
		{
			id: "110303",
			province_id: "1103",
			description: "El Ingenio",
			active: true
		},
		{
			id: "110304",
			province_id: "1103",
			description: "Marcona",
			active: true
		},
		{
			id: "110305",
			province_id: "1103",
			description: "Vista Alegre",
			active: true
		},
		{
			id: "110401",
			province_id: "1104",
			description: "Palpa",
			active: true
		},
		{
			id: "110402",
			province_id: "1104",
			description: "Llipata",
			active: true
		},
		{
			id: "110403",
			province_id: "1104",
			description: "Río Grande",
			active: true
		},
		{
			id: "110404",
			province_id: "1104",
			description: "Santa Cruz",
			active: true
		},
		{
			id: "110405",
			province_id: "1104",
			description: "Tibillo",
			active: true
		},
		{
			id: "110501",
			province_id: "1105",
			description: "Pisco",
			active: true
		},
		{
			id: "110502",
			province_id: "1105",
			description: "Huancano",
			active: true
		},
		{
			id: "110503",
			province_id: "1105",
			description: "Humay",
			active: true
		},
		{
			id: "110504",
			province_id: "1105",
			description: "Independencia",
			active: true
		},
		{
			id: "110505",
			province_id: "1105",
			description: "Paracas",
			active: true
		},
		{
			id: "110506",
			province_id: "1105",
			description: "San Andrés",
			active: true
		},
		{
			id: "110507",
			province_id: "1105",
			description: "San Clemente",
			active: true
		},
		{
			id: "110508",
			province_id: "1105",
			description: "Tupac Amaru Inca",
			active: true
		},
		{
			id: "120101",
			province_id: "1201",
			description: "Huancayo",
			active: true
		},
		{
			id: "120104",
			province_id: "1201",
			description: "Carhuacallanga",
			active: true
		},
		{
			id: "120105",
			province_id: "1201",
			description: "Chacapampa",
			active: true
		},
		{
			id: "120106",
			province_id: "1201",
			description: "Chicche",
			active: true
		},
		{
			id: "120107",
			province_id: "1201",
			description: "Chilca",
			active: true
		},
		{
			id: "120108",
			province_id: "1201",
			description: "Chongos Alto",
			active: true
		},
		{
			id: "120111",
			province_id: "1201",
			description: "Chupuro",
			active: true
		},
		{
			id: "120112",
			province_id: "1201",
			description: "Colca",
			active: true
		},
		{
			id: "120113",
			province_id: "1201",
			description: "Cullhuas",
			active: true
		},
		{
			id: "120114",
			province_id: "1201",
			description: "El Tambo",
			active: true
		},
		{
			id: "120116",
			province_id: "1201",
			description: "Huacrapuquio",
			active: true
		},
		{
			id: "120117",
			province_id: "1201",
			description: "Hualhuas",
			active: true
		},
		{
			id: "120119",
			province_id: "1201",
			description: "Huancan",
			active: true
		},
		{
			id: "120120",
			province_id: "1201",
			description: "Huasicancha",
			active: true
		},
		{
			id: "120121",
			province_id: "1201",
			description: "Huayucachi",
			active: true
		},
		{
			id: "120122",
			province_id: "1201",
			description: "Ingenio",
			active: true
		},
		{
			id: "120124",
			province_id: "1201",
			description: "Pariahuanca",
			active: true
		},
		{
			id: "120125",
			province_id: "1201",
			description: "Pilcomayo",
			active: true
		},
		{
			id: "120126",
			province_id: "1201",
			description: "Pucara",
			active: true
		},
		{
			id: "120127",
			province_id: "1201",
			description: "Quichuay",
			active: true
		},
		{
			id: "120128",
			province_id: "1201",
			description: "Quilcas",
			active: true
		},
		{
			id: "120129",
			province_id: "1201",
			description: "San Agustín",
			active: true
		},
		{
			id: "120130",
			province_id: "1201",
			description: "San Jerónimo de Tunan",
			active: true
		},
		{
			id: "120132",
			province_id: "1201",
			description: "Saño",
			active: true
		},
		{
			id: "120133",
			province_id: "1201",
			description: "Sapallanga",
			active: true
		},
		{
			id: "120134",
			province_id: "1201",
			description: "Sicaya",
			active: true
		},
		{
			id: "120135",
			province_id: "1201",
			description: "Santo Domingo de Acobamba",
			active: true
		},
		{
			id: "120136",
			province_id: "1201",
			description: "Viques",
			active: true
		},
		{
			id: "120201",
			province_id: "1202",
			description: "Concepción",
			active: true
		},
		{
			id: "120202",
			province_id: "1202",
			description: "Aco",
			active: true
		},
		{
			id: "120203",
			province_id: "1202",
			description: "Andamarca",
			active: true
		},
		{
			id: "120204",
			province_id: "1202",
			description: "Chambara",
			active: true
		},
		{
			id: "120205",
			province_id: "1202",
			description: "Cochas",
			active: true
		},
		{
			id: "120206",
			province_id: "1202",
			description: "Comas",
			active: true
		},
		{
			id: "120207",
			province_id: "1202",
			description: "Heroínas Toledo",
			active: true
		},
		{
			id: "120208",
			province_id: "1202",
			description: "Manzanares",
			active: true
		},
		{
			id: "120209",
			province_id: "1202",
			description: "Mariscal Castilla",
			active: true
		},
		{
			id: "120210",
			province_id: "1202",
			description: "Matahuasi",
			active: true
		},
		{
			id: "120211",
			province_id: "1202",
			description: "Mito",
			active: true
		},
		{
			id: "120212",
			province_id: "1202",
			description: "Nueve de Julio",
			active: true
		},
		{
			id: "120213",
			province_id: "1202",
			description: "Orcotuna",
			active: true
		},
		{
			id: "120214",
			province_id: "1202",
			description: "San José de Quero",
			active: true
		},
		{
			id: "120215",
			province_id: "1202",
			description: "Santa Rosa de Ocopa",
			active: true
		},
		{
			id: "120301",
			province_id: "1203",
			description: "Chanchamayo",
			active: true
		},
		{
			id: "120302",
			province_id: "1203",
			description: "Perene",
			active: true
		},
		{
			id: "120303",
			province_id: "1203",
			description: "Pichanaqui",
			active: true
		},
		{
			id: "120304",
			province_id: "1203",
			description: "San Luis de Shuaro",
			active: true
		},
		{
			id: "120305",
			province_id: "1203",
			description: "San Ramón",
			active: true
		},
		{
			id: "120306",
			province_id: "1203",
			description: "Vitoc",
			active: true
		},
		{
			id: "120401",
			province_id: "1204",
			description: "Jauja",
			active: true
		},
		{
			id: "120402",
			province_id: "1204",
			description: "Acolla",
			active: true
		},
		{
			id: "120403",
			province_id: "1204",
			description: "Apata",
			active: true
		},
		{
			id: "120404",
			province_id: "1204",
			description: "Ataura",
			active: true
		},
		{
			id: "120405",
			province_id: "1204",
			description: "Canchayllo",
			active: true
		},
		{
			id: "120406",
			province_id: "1204",
			description: "Curicaca",
			active: true
		},
		{
			id: "120407",
			province_id: "1204",
			description: "El Mantaro",
			active: true
		},
		{
			id: "120408",
			province_id: "1204",
			description: "Huamali",
			active: true
		},
		{
			id: "120409",
			province_id: "1204",
			description: "Huaripampa",
			active: true
		},
		{
			id: "120410",
			province_id: "1204",
			description: "Huertas",
			active: true
		},
		{
			id: "120411",
			province_id: "1204",
			description: "Janjaillo",
			active: true
		},
		{
			id: "120412",
			province_id: "1204",
			description: "Julcán",
			active: true
		},
		{
			id: "120413",
			province_id: "1204",
			description: "Leonor Ordóñez",
			active: true
		},
		{
			id: "120414",
			province_id: "1204",
			description: "Llocllapampa",
			active: true
		},
		{
			id: "120415",
			province_id: "1204",
			description: "Marco",
			active: true
		},
		{
			id: "120416",
			province_id: "1204",
			description: "Masma",
			active: true
		},
		{
			id: "120417",
			province_id: "1204",
			description: "Masma Chicche",
			active: true
		},
		{
			id: "120418",
			province_id: "1204",
			description: "Molinos",
			active: true
		},
		{
			id: "120419",
			province_id: "1204",
			description: "Monobamba",
			active: true
		},
		{
			id: "120420",
			province_id: "1204",
			description: "Muqui",
			active: true
		},
		{
			id: "120421",
			province_id: "1204",
			description: "Muquiyauyo",
			active: true
		},
		{
			id: "120422",
			province_id: "1204",
			description: "Paca",
			active: true
		},
		{
			id: "120423",
			province_id: "1204",
			description: "Paccha",
			active: true
		},
		{
			id: "120424",
			province_id: "1204",
			description: "Pancan",
			active: true
		},
		{
			id: "120425",
			province_id: "1204",
			description: "Parco",
			active: true
		},
		{
			id: "120426",
			province_id: "1204",
			description: "Pomacancha",
			active: true
		},
		{
			id: "120427",
			province_id: "1204",
			description: "Ricran",
			active: true
		},
		{
			id: "120428",
			province_id: "1204",
			description: "San Lorenzo",
			active: true
		},
		{
			id: "120429",
			province_id: "1204",
			description: "San Pedro de Chunan",
			active: true
		},
		{
			id: "120430",
			province_id: "1204",
			description: "Sausa",
			active: true
		},
		{
			id: "120431",
			province_id: "1204",
			description: "Sincos",
			active: true
		},
		{
			id: "120432",
			province_id: "1204",
			description: "Tunan Marca",
			active: true
		},
		{
			id: "120433",
			province_id: "1204",
			description: "Yauli",
			active: true
		},
		{
			id: "120434",
			province_id: "1204",
			description: "Yauyos",
			active: true
		},
		{
			id: "120501",
			province_id: "1205",
			description: "Junin",
			active: true
		},
		{
			id: "120502",
			province_id: "1205",
			description: "Carhuamayo",
			active: true
		},
		{
			id: "120503",
			province_id: "1205",
			description: "Ondores",
			active: true
		},
		{
			id: "120504",
			province_id: "1205",
			description: "Ulcumayo",
			active: true
		},
		{
			id: "120601",
			province_id: "1206",
			description: "Satipo",
			active: true
		},
		{
			id: "120602",
			province_id: "1206",
			description: "Coviriali",
			active: true
		},
		{
			id: "120603",
			province_id: "1206",
			description: "Llaylla",
			active: true
		},
		{
			id: "120604",
			province_id: "1206",
			description: "Mazamari",
			active: true
		},
		{
			id: "120605",
			province_id: "1206",
			description: "Pampa Hermosa",
			active: true
		},
		{
			id: "120606",
			province_id: "1206",
			description: "Pangoa",
			active: true
		},
		{
			id: "120607",
			province_id: "1206",
			description: "Río Negro",
			active: true
		},
		{
			id: "120608",
			province_id: "1206",
			description: "Río Tambo",
			active: true
		},
		{
			id: "120609",
			province_id: "1206",
			description: "Vizcatan del Ene",
			active: true
		},
		{
			id: "120701",
			province_id: "1207",
			description: "Tarma",
			active: true
		},
		{
			id: "120702",
			province_id: "1207",
			description: "Acobamba",
			active: true
		},
		{
			id: "120703",
			province_id: "1207",
			description: "Huaricolca",
			active: true
		},
		{
			id: "120704",
			province_id: "1207",
			description: "Huasahuasi",
			active: true
		},
		{
			id: "120705",
			province_id: "1207",
			description: "La Unión",
			active: true
		},
		{
			id: "120706",
			province_id: "1207",
			description: "Palca",
			active: true
		},
		{
			id: "120707",
			province_id: "1207",
			description: "Palcamayo",
			active: true
		},
		{
			id: "120708",
			province_id: "1207",
			description: "San Pedro de Cajas",
			active: true
		},
		{
			id: "120709",
			province_id: "1207",
			description: "Tapo",
			active: true
		},
		{
			id: "120801",
			province_id: "1208",
			description: "La Oroya",
			active: true
		},
		{
			id: "120802",
			province_id: "1208",
			description: "Chacapalpa",
			active: true
		},
		{
			id: "120803",
			province_id: "1208",
			description: "Huay-Huay",
			active: true
		},
		{
			id: "120804",
			province_id: "1208",
			description: "Marcapomacocha",
			active: true
		},
		{
			id: "120805",
			province_id: "1208",
			description: "Morococha",
			active: true
		},
		{
			id: "120806",
			province_id: "1208",
			description: "Paccha",
			active: true
		},
		{
			id: "120807",
			province_id: "1208",
			description: "Santa Bárbara de Carhuacayan",
			active: true
		},
		{
			id: "120808",
			province_id: "1208",
			description: "Santa Rosa de Sacco",
			active: true
		},
		{
			id: "120809",
			province_id: "1208",
			description: "Suitucancha",
			active: true
		},
		{
			id: "120810",
			province_id: "1208",
			description: "Yauli",
			active: true
		},
		{
			id: "120901",
			province_id: "1209",
			description: "Chupaca",
			active: true
		},
		{
			id: "120902",
			province_id: "1209",
			description: "Ahuac",
			active: true
		},
		{
			id: "120903",
			province_id: "1209",
			description: "Chongos Bajo",
			active: true
		},
		{
			id: "120904",
			province_id: "1209",
			description: "Huachac",
			active: true
		},
		{
			id: "120905",
			province_id: "1209",
			description: "Huamancaca Chico",
			active: true
		},
		{
			id: "120906",
			province_id: "1209",
			description: "San Juan de Iscos",
			active: true
		},
		{
			id: "120907",
			province_id: "1209",
			description: "San Juan de Jarpa",
			active: true
		},
		{
			id: "120908",
			province_id: "1209",
			description: "Tres de Diciembre",
			active: true
		},
		{
			id: "120909",
			province_id: "1209",
			description: "Yanacancha",
			active: true
		},
		{
			id: "130101",
			province_id: "1301",
			description: "Trujillo",
			active: true
		},
		{
			id: "130102",
			province_id: "1301",
			description: "El Porvenir",
			active: true
		},
		{
			id: "130103",
			province_id: "1301",
			description: "Florencia de Mora",
			active: true
		},
		{
			id: "130104",
			province_id: "1301",
			description: "Huanchaco",
			active: true
		},
		{
			id: "130105",
			province_id: "1301",
			description: "La Esperanza",
			active: true
		},
		{
			id: "130106",
			province_id: "1301",
			description: "Laredo",
			active: true
		},
		{
			id: "130107",
			province_id: "1301",
			description: "Moche",
			active: true
		},
		{
			id: "130108",
			province_id: "1301",
			description: "Poroto",
			active: true
		},
		{
			id: "130109",
			province_id: "1301",
			description: "Salaverry",
			active: true
		},
		{
			id: "130110",
			province_id: "1301",
			description: "Simbal",
			active: true
		},
		{
			id: "130111",
			province_id: "1301",
			description: "Victor Larco Herrera",
			active: true
		},
		{
			id: "130201",
			province_id: "1302",
			description: "Ascope",
			active: true
		},
		{
			id: "130202",
			province_id: "1302",
			description: "Chicama",
			active: true
		},
		{
			id: "130203",
			province_id: "1302",
			description: "Chocope",
			active: true
		},
		{
			id: "130204",
			province_id: "1302",
			description: "Magdalena de Cao",
			active: true
		},
		{
			id: "130205",
			province_id: "1302",
			description: "Paijan",
			active: true
		},
		{
			id: "130206",
			province_id: "1302",
			description: "Rázuri",
			active: true
		},
		{
			id: "130207",
			province_id: "1302",
			description: "Santiago de Cao",
			active: true
		},
		{
			id: "130208",
			province_id: "1302",
			description: "Casa Grande",
			active: true
		},
		{
			id: "130301",
			province_id: "1303",
			description: "Bolívar",
			active: true
		},
		{
			id: "130302",
			province_id: "1303",
			description: "Bambamarca",
			active: true
		},
		{
			id: "130303",
			province_id: "1303",
			description: "Condormarca",
			active: true
		},
		{
			id: "130304",
			province_id: "1303",
			description: "Longotea",
			active: true
		},
		{
			id: "130305",
			province_id: "1303",
			description: "Uchumarca",
			active: true
		},
		{
			id: "130306",
			province_id: "1303",
			description: "Ucuncha",
			active: true
		},
		{
			id: "130401",
			province_id: "1304",
			description: "Chepen",
			active: true
		},
		{
			id: "130402",
			province_id: "1304",
			description: "Pacanga",
			active: true
		},
		{
			id: "130403",
			province_id: "1304",
			description: "Pueblo Nuevo",
			active: true
		},
		{
			id: "130501",
			province_id: "1305",
			description: "Julcan",
			active: true
		},
		{
			id: "130502",
			province_id: "1305",
			description: "Calamarca",
			active: true
		},
		{
			id: "130503",
			province_id: "1305",
			description: "Carabamba",
			active: true
		},
		{
			id: "130504",
			province_id: "1305",
			description: "Huaso",
			active: true
		},
		{
			id: "130601",
			province_id: "1306",
			description: "Otuzco",
			active: true
		},
		{
			id: "130602",
			province_id: "1306",
			description: "Agallpampa",
			active: true
		},
		{
			id: "130604",
			province_id: "1306",
			description: "Charat",
			active: true
		},
		{
			id: "130605",
			province_id: "1306",
			description: "Huaranchal",
			active: true
		},
		{
			id: "130606",
			province_id: "1306",
			description: "La Cuesta",
			active: true
		},
		{
			id: "130608",
			province_id: "1306",
			description: "Mache",
			active: true
		},
		{
			id: "130610",
			province_id: "1306",
			description: "Paranday",
			active: true
		},
		{
			id: "130611",
			province_id: "1306",
			description: "Salpo",
			active: true
		},
		{
			id: "130613",
			province_id: "1306",
			description: "Sinsicap",
			active: true
		},
		{
			id: "130614",
			province_id: "1306",
			description: "Usquil",
			active: true
		},
		{
			id: "130701",
			province_id: "1307",
			description: "San Pedro de Lloc",
			active: true
		},
		{
			id: "130702",
			province_id: "1307",
			description: "Guadalupe",
			active: true
		},
		{
			id: "130703",
			province_id: "1307",
			description: "Jequetepeque",
			active: true
		},
		{
			id: "130704",
			province_id: "1307",
			description: "Pacasmayo",
			active: true
		},
		{
			id: "130705",
			province_id: "1307",
			description: "San José",
			active: true
		},
		{
			id: "130801",
			province_id: "1308",
			description: "Tayabamba",
			active: true
		},
		{
			id: "130802",
			province_id: "1308",
			description: "Buldibuyo",
			active: true
		},
		{
			id: "130803",
			province_id: "1308",
			description: "Chillia",
			active: true
		},
		{
			id: "130804",
			province_id: "1308",
			description: "Huancaspata",
			active: true
		},
		{
			id: "130805",
			province_id: "1308",
			description: "Huaylillas",
			active: true
		},
		{
			id: "130806",
			province_id: "1308",
			description: "Huayo",
			active: true
		},
		{
			id: "130807",
			province_id: "1308",
			description: "Ongon",
			active: true
		},
		{
			id: "130808",
			province_id: "1308",
			description: "Parcoy",
			active: true
		},
		{
			id: "130809",
			province_id: "1308",
			description: "Pataz",
			active: true
		},
		{
			id: "130810",
			province_id: "1308",
			description: "Pias",
			active: true
		},
		{
			id: "130811",
			province_id: "1308",
			description: "Santiago de Challas",
			active: true
		},
		{
			id: "130812",
			province_id: "1308",
			description: "Taurija",
			active: true
		},
		{
			id: "130813",
			province_id: "1308",
			description: "Urpay",
			active: true
		},
		{
			id: "130901",
			province_id: "1309",
			description: "Huamachuco",
			active: true
		},
		{
			id: "130902",
			province_id: "1309",
			description: "Chugay",
			active: true
		},
		{
			id: "130903",
			province_id: "1309",
			description: "Cochorco",
			active: true
		},
		{
			id: "130904",
			province_id: "1309",
			description: "Curgos",
			active: true
		},
		{
			id: "130905",
			province_id: "1309",
			description: "Marcabal",
			active: true
		},
		{
			id: "130906",
			province_id: "1309",
			description: "Sanagoran",
			active: true
		},
		{
			id: "130907",
			province_id: "1309",
			description: "Sarin",
			active: true
		},
		{
			id: "130908",
			province_id: "1309",
			description: "Sartimbamba",
			active: true
		},
		{
			id: "131001",
			province_id: "1310",
			description: "Santiago de Chuco",
			active: true
		},
		{
			id: "131002",
			province_id: "1310",
			description: "Angasmarca",
			active: true
		},
		{
			id: "131003",
			province_id: "1310",
			description: "Cachicadan",
			active: true
		},
		{
			id: "131004",
			province_id: "1310",
			description: "Mollebamba",
			active: true
		},
		{
			id: "131005",
			province_id: "1310",
			description: "Mollepata",
			active: true
		},
		{
			id: "131006",
			province_id: "1310",
			description: "Quiruvilca",
			active: true
		},
		{
			id: "131007",
			province_id: "1310",
			description: "Santa Cruz de Chuca",
			active: true
		},
		{
			id: "131008",
			province_id: "1310",
			description: "Sitabamba",
			active: true
		},
		{
			id: "131101",
			province_id: "1311",
			description: "Cascas",
			active: true
		},
		{
			id: "131102",
			province_id: "1311",
			description: "Lucma",
			active: true
		},
		{
			id: "131103",
			province_id: "1311",
			description: "Marmot",
			active: true
		},
		{
			id: "131104",
			province_id: "1311",
			description: "Sayapullo",
			active: true
		},
		{
			id: "131201",
			province_id: "1312",
			description: "Viru",
			active: true
		},
		{
			id: "131202",
			province_id: "1312",
			description: "Chao",
			active: true
		},
		{
			id: "131203",
			province_id: "1312",
			description: "Guadalupito",
			active: true
		},
		{
			id: "140101",
			province_id: "1401",
			description: "Chiclayo",
			active: true
		},
		{
			id: "140102",
			province_id: "1401",
			description: "Chongoyape",
			active: true
		},
		{
			id: "140103",
			province_id: "1401",
			description: "Eten",
			active: true
		},
		{
			id: "140104",
			province_id: "1401",
			description: "Eten Puerto",
			active: true
		},
		{
			id: "140105",
			province_id: "1401",
			description: "José Leonardo Ortiz",
			active: true
		},
		{
			id: "140106",
			province_id: "1401",
			description: "La Victoria",
			active: true
		},
		{
			id: "140107",
			province_id: "1401",
			description: "Lagunas",
			active: true
		},
		{
			id: "140108",
			province_id: "1401",
			description: "Monsefu",
			active: true
		},
		{
			id: "140109",
			province_id: "1401",
			description: "Nueva Arica",
			active: true
		},
		{
			id: "140110",
			province_id: "1401",
			description: "Oyotun",
			active: true
		},
		{
			id: "140111",
			province_id: "1401",
			description: "Picsi",
			active: true
		},
		{
			id: "140112",
			province_id: "1401",
			description: "Pimentel",
			active: true
		},
		{
			id: "140113",
			province_id: "1401",
			description: "Reque",
			active: true
		},
		{
			id: "140114",
			province_id: "1401",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "140115",
			province_id: "1401",
			description: "Saña",
			active: true
		},
		{
			id: "140116",
			province_id: "1401",
			description: "Cayalti",
			active: true
		},
		{
			id: "140117",
			province_id: "1401",
			description: "Patapo",
			active: true
		},
		{
			id: "140118",
			province_id: "1401",
			description: "Pomalca",
			active: true
		},
		{
			id: "140119",
			province_id: "1401",
			description: "Pucala",
			active: true
		},
		{
			id: "140120",
			province_id: "1401",
			description: "Tuman",
			active: true
		},
		{
			id: "140201",
			province_id: "1402",
			description: "Ferreñafe",
			active: true
		},
		{
			id: "140202",
			province_id: "1402",
			description: "Cañaris",
			active: true
		},
		{
			id: "140203",
			province_id: "1402",
			description: "Incahuasi",
			active: true
		},
		{
			id: "140204",
			province_id: "1402",
			description: "Manuel Antonio Mesones Muro",
			active: true
		},
		{
			id: "140205",
			province_id: "1402",
			description: "Pitipo",
			active: true
		},
		{
			id: "140206",
			province_id: "1402",
			description: "Pueblo Nuevo",
			active: true
		},
		{
			id: "140301",
			province_id: "1403",
			description: "Lambayeque",
			active: true
		},
		{
			id: "140302",
			province_id: "1403",
			description: "Chochope",
			active: true
		},
		{
			id: "140303",
			province_id: "1403",
			description: "Illimo",
			active: true
		},
		{
			id: "140304",
			province_id: "1403",
			description: "Jayanca",
			active: true
		},
		{
			id: "140305",
			province_id: "1403",
			description: "Mochumi",
			active: true
		},
		{
			id: "140306",
			province_id: "1403",
			description: "Morrope",
			active: true
		},
		{
			id: "140307",
			province_id: "1403",
			description: "Motupe",
			active: true
		},
		{
			id: "140308",
			province_id: "1403",
			description: "Olmos",
			active: true
		},
		{
			id: "140309",
			province_id: "1403",
			description: "Pacora",
			active: true
		},
		{
			id: "140310",
			province_id: "1403",
			description: "Salas",
			active: true
		},
		{
			id: "140311",
			province_id: "1403",
			description: "San José",
			active: true
		},
		{
			id: "140312",
			province_id: "1403",
			description: "Tucume",
			active: true
		},
		{
			id: "150101",
			province_id: "1501",
			description: "Lima",
			active: true
		},
		{
			id: "150102",
			province_id: "1501",
			description: "Ancón",
			active: true
		},
		{
			id: "150103",
			province_id: "1501",
			description: "Ate",
			active: true
		},
		{
			id: "150104",
			province_id: "1501",
			description: "Barranco",
			active: true
		},
		{
			id: "150105",
			province_id: "1501",
			description: "Breña",
			active: true
		},
		{
			id: "150106",
			province_id: "1501",
			description: "Carabayllo",
			active: true
		},
		{
			id: "150107",
			province_id: "1501",
			description: "Chaclacayo",
			active: true
		},
		{
			id: "150108",
			province_id: "1501",
			description: "Chorrillos",
			active: true
		},
		{
			id: "150109",
			province_id: "1501",
			description: "Cieneguilla",
			active: true
		},
		{
			id: "150110",
			province_id: "1501",
			description: "Comas",
			active: true
		},
		{
			id: "150111",
			province_id: "1501",
			description: "El Agustino",
			active: true
		},
		{
			id: "150112",
			province_id: "1501",
			description: "Independencia",
			active: true
		},
		{
			id: "150113",
			province_id: "1501",
			description: "Jesús María",
			active: true
		},
		{
			id: "150114",
			province_id: "1501",
			description: "La Molina",
			active: true
		},
		{
			id: "150115",
			province_id: "1501",
			description: "La Victoria",
			active: true
		},
		{
			id: "150116",
			province_id: "1501",
			description: "Lince",
			active: true
		},
		{
			id: "150117",
			province_id: "1501",
			description: "Los Olivos",
			active: true
		},
		{
			id: "150118",
			province_id: "1501",
			description: "Lurigancho",
			active: true
		},
		{
			id: "150119",
			province_id: "1501",
			description: "Lurin",
			active: true
		},
		{
			id: "150120",
			province_id: "1501",
			description: "Magdalena del Mar",
			active: true
		},
		{
			id: "150121",
			province_id: "1501",
			description: "Pueblo Libre",
			active: true
		},
		{
			id: "150122",
			province_id: "1501",
			description: "Miraflores",
			active: true
		},
		{
			id: "150123",
			province_id: "1501",
			description: "Pachacamac",
			active: true
		},
		{
			id: "150124",
			province_id: "1501",
			description: "Pucusana",
			active: true
		},
		{
			id: "150125",
			province_id: "1501",
			description: "Puente Piedra",
			active: true
		},
		{
			id: "150126",
			province_id: "1501",
			description: "Punta Hermosa",
			active: true
		},
		{
			id: "150127",
			province_id: "1501",
			description: "Punta Negra",
			active: true
		},
		{
			id: "150128",
			province_id: "1501",
			description: "Rímac",
			active: true
		},
		{
			id: "150129",
			province_id: "1501",
			description: "San Bartolo",
			active: true
		},
		{
			id: "150130",
			province_id: "1501",
			description: "San Borja",
			active: true
		},
		{
			id: "150131",
			province_id: "1501",
			description: "San Isidro",
			active: true
		},
		{
			id: "150132",
			province_id: "1501",
			description: "San Juan de Lurigancho",
			active: true
		},
		{
			id: "150133",
			province_id: "1501",
			description: "San Juan de Miraflores",
			active: true
		},
		{
			id: "150134",
			province_id: "1501",
			description: "San Luis",
			active: true
		},
		{
			id: "150135",
			province_id: "1501",
			description: "San Martín de Porres",
			active: true
		},
		{
			id: "150136",
			province_id: "1501",
			description: "San Miguel",
			active: true
		},
		{
			id: "150137",
			province_id: "1501",
			description: "Santa Anita",
			active: true
		},
		{
			id: "150138",
			province_id: "1501",
			description: "Santa María del Mar",
			active: true
		},
		{
			id: "150139",
			province_id: "1501",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "150140",
			province_id: "1501",
			description: "Santiago de Surco",
			active: true
		},
		{
			id: "150141",
			province_id: "1501",
			description: "Surquillo",
			active: true
		},
		{
			id: "150142",
			province_id: "1501",
			description: "Villa El Salvador",
			active: true
		},
		{
			id: "150143",
			province_id: "1501",
			description: "Villa María del Triunfo",
			active: true
		},
		{
			id: "150201",
			province_id: "1502",
			description: "Barranca",
			active: true
		},
		{
			id: "150202",
			province_id: "1502",
			description: "Paramonga",
			active: true
		},
		{
			id: "150203",
			province_id: "1502",
			description: "Pativilca",
			active: true
		},
		{
			id: "150204",
			province_id: "1502",
			description: "Supe",
			active: true
		},
		{
			id: "150205",
			province_id: "1502",
			description: "Supe Puerto",
			active: true
		},
		{
			id: "150301",
			province_id: "1503",
			description: "Cajatambo",
			active: true
		},
		{
			id: "150302",
			province_id: "1503",
			description: "Copa",
			active: true
		},
		{
			id: "150303",
			province_id: "1503",
			description: "Gorgor",
			active: true
		},
		{
			id: "150304",
			province_id: "1503",
			description: "Huancapon",
			active: true
		},
		{
			id: "150305",
			province_id: "1503",
			description: "Manas",
			active: true
		},
		{
			id: "150401",
			province_id: "1504",
			description: "Canta",
			active: true
		},
		{
			id: "150402",
			province_id: "1504",
			description: "Arahuay",
			active: true
		},
		{
			id: "150403",
			province_id: "1504",
			description: "Huamantanga",
			active: true
		},
		{
			id: "150404",
			province_id: "1504",
			description: "Huaros",
			active: true
		},
		{
			id: "150405",
			province_id: "1504",
			description: "Lachaqui",
			active: true
		},
		{
			id: "150406",
			province_id: "1504",
			description: "San Buenaventura",
			active: true
		},
		{
			id: "150407",
			province_id: "1504",
			description: "Santa Rosa de Quives",
			active: true
		},
		{
			id: "150501",
			province_id: "1505",
			description: "San Vicente de Cañete",
			active: true
		},
		{
			id: "150502",
			province_id: "1505",
			description: "Asia",
			active: true
		},
		{
			id: "150503",
			province_id: "1505",
			description: "Calango",
			active: true
		},
		{
			id: "150504",
			province_id: "1505",
			description: "Cerro Azul",
			active: true
		},
		{
			id: "150505",
			province_id: "1505",
			description: "Chilca",
			active: true
		},
		{
			id: "150506",
			province_id: "1505",
			description: "Coayllo",
			active: true
		},
		{
			id: "150507",
			province_id: "1505",
			description: "Imperial",
			active: true
		},
		{
			id: "150508",
			province_id: "1505",
			description: "Lunahuana",
			active: true
		},
		{
			id: "150509",
			province_id: "1505",
			description: "Mala",
			active: true
		},
		{
			id: "150510",
			province_id: "1505",
			description: "Nuevo Imperial",
			active: true
		},
		{
			id: "150511",
			province_id: "1505",
			description: "Pacaran",
			active: true
		},
		{
			id: "150512",
			province_id: "1505",
			description: "Quilmana",
			active: true
		},
		{
			id: "150513",
			province_id: "1505",
			description: "San Antonio",
			active: true
		},
		{
			id: "150514",
			province_id: "1505",
			description: "San Luis",
			active: true
		},
		{
			id: "150515",
			province_id: "1505",
			description: "Santa Cruz de Flores",
			active: true
		},
		{
			id: "150516",
			province_id: "1505",
			description: "Zúñiga",
			active: true
		},
		{
			id: "150601",
			province_id: "1506",
			description: "Huaral",
			active: true
		},
		{
			id: "150602",
			province_id: "1506",
			description: "Atavillos Alto",
			active: true
		},
		{
			id: "150603",
			province_id: "1506",
			description: "Atavillos Bajo",
			active: true
		},
		{
			id: "150604",
			province_id: "1506",
			description: "Aucallama",
			active: true
		},
		{
			id: "150605",
			province_id: "1506",
			description: "Chancay",
			active: true
		},
		{
			id: "150606",
			province_id: "1506",
			description: "Ihuari",
			active: true
		},
		{
			id: "150607",
			province_id: "1506",
			description: "Lampian",
			active: true
		},
		{
			id: "150608",
			province_id: "1506",
			description: "Pacaraos",
			active: true
		},
		{
			id: "150609",
			province_id: "1506",
			description: "San Miguel de Acos",
			active: true
		},
		{
			id: "150610",
			province_id: "1506",
			description: "Santa Cruz de Andamarca",
			active: true
		},
		{
			id: "150611",
			province_id: "1506",
			description: "Sumbilca",
			active: true
		},
		{
			id: "150612",
			province_id: "1506",
			description: "Veintisiete de Noviembre",
			active: true
		},
		{
			id: "150701",
			province_id: "1507",
			description: "Matucana",
			active: true
		},
		{
			id: "150702",
			province_id: "1507",
			description: "Antioquia",
			active: true
		},
		{
			id: "150703",
			province_id: "1507",
			description: "Callahuanca",
			active: true
		},
		{
			id: "150704",
			province_id: "1507",
			description: "Carampoma",
			active: true
		},
		{
			id: "150705",
			province_id: "1507",
			description: "Chicla",
			active: true
		},
		{
			id: "150706",
			province_id: "1507",
			description: "Cuenca",
			active: true
		},
		{
			id: "150707",
			province_id: "1507",
			description: "Huachupampa",
			active: true
		},
		{
			id: "150708",
			province_id: "1507",
			description: "Huanza",
			active: true
		},
		{
			id: "150709",
			province_id: "1507",
			description: "Huarochiri",
			active: true
		},
		{
			id: "150710",
			province_id: "1507",
			description: "Lahuaytambo",
			active: true
		},
		{
			id: "150711",
			province_id: "1507",
			description: "Langa",
			active: true
		},
		{
			id: "150712",
			province_id: "1507",
			description: "Laraos",
			active: true
		},
		{
			id: "150713",
			province_id: "1507",
			description: "Mariatana",
			active: true
		},
		{
			id: "150714",
			province_id: "1507",
			description: "Ricardo Palma",
			active: true
		},
		{
			id: "150715",
			province_id: "1507",
			description: "San Andrés de Tupicocha",
			active: true
		},
		{
			id: "150716",
			province_id: "1507",
			description: "San Antonio",
			active: true
		},
		{
			id: "150717",
			province_id: "1507",
			description: "San Bartolomé",
			active: true
		},
		{
			id: "150718",
			province_id: "1507",
			description: "San Damian",
			active: true
		},
		{
			id: "150719",
			province_id: "1507",
			description: "San Juan de Iris",
			active: true
		},
		{
			id: "150720",
			province_id: "1507",
			description: "San Juan de Tantaranche",
			active: true
		},
		{
			id: "150721",
			province_id: "1507",
			description: "San Lorenzo de Quinti",
			active: true
		},
		{
			id: "150722",
			province_id: "1507",
			description: "San Mateo",
			active: true
		},
		{
			id: "150723",
			province_id: "1507",
			description: "San Mateo de Otao",
			active: true
		},
		{
			id: "150724",
			province_id: "1507",
			description: "San Pedro de Casta",
			active: true
		},
		{
			id: "150725",
			province_id: "1507",
			description: "San Pedro de Huancayre",
			active: true
		},
		{
			id: "150726",
			province_id: "1507",
			description: "Sangallaya",
			active: true
		},
		{
			id: "150727",
			province_id: "1507",
			description: "Santa Cruz de Cocachacra",
			active: true
		},
		{
			id: "150728",
			province_id: "1507",
			description: "Santa Eulalia",
			active: true
		},
		{
			id: "150729",
			province_id: "1507",
			description: "Santiago de Anchucaya",
			active: true
		},
		{
			id: "150730",
			province_id: "1507",
			description: "Santiago de Tuna",
			active: true
		},
		{
			id: "150731",
			province_id: "1507",
			description: "Santo Domingo de Los Olleros",
			active: true
		},
		{
			id: "150732",
			province_id: "1507",
			description: "Surco",
			active: true
		},
		{
			id: "150801",
			province_id: "1508",
			description: "Huacho",
			active: true
		},
		{
			id: "150802",
			province_id: "1508",
			description: "Ambar",
			active: true
		},
		{
			id: "150803",
			province_id: "1508",
			description: "Caleta de Carquin",
			active: true
		},
		{
			id: "150804",
			province_id: "1508",
			description: "Checras",
			active: true
		},
		{
			id: "150805",
			province_id: "1508",
			description: "Hualmay",
			active: true
		},
		{
			id: "150806",
			province_id: "1508",
			description: "Huaura",
			active: true
		},
		{
			id: "150807",
			province_id: "1508",
			description: "Leoncio Prado",
			active: true
		},
		{
			id: "150808",
			province_id: "1508",
			description: "Paccho",
			active: true
		},
		{
			id: "150809",
			province_id: "1508",
			description: "Santa Leonor",
			active: true
		},
		{
			id: "150810",
			province_id: "1508",
			description: "Santa María",
			active: true
		},
		{
			id: "150811",
			province_id: "1508",
			description: "Sayan",
			active: true
		},
		{
			id: "150812",
			province_id: "1508",
			description: "Vegueta",
			active: true
		},
		{
			id: "150901",
			province_id: "1509",
			description: "Oyon",
			active: true
		},
		{
			id: "150902",
			province_id: "1509",
			description: "Andajes",
			active: true
		},
		{
			id: "150903",
			province_id: "1509",
			description: "Caujul",
			active: true
		},
		{
			id: "150904",
			province_id: "1509",
			description: "Cochamarca",
			active: true
		},
		{
			id: "150905",
			province_id: "1509",
			description: "Navan",
			active: true
		},
		{
			id: "150906",
			province_id: "1509",
			description: "Pachangara",
			active: true
		},
		{
			id: "151001",
			province_id: "1510",
			description: "Yauyos",
			active: true
		},
		{
			id: "151002",
			province_id: "1510",
			description: "Alis",
			active: true
		},
		{
			id: "151003",
			province_id: "1510",
			description: "Allauca",
			active: true
		},
		{
			id: "151004",
			province_id: "1510",
			description: "Ayaviri",
			active: true
		},
		{
			id: "151005",
			province_id: "1510",
			description: "Azángaro",
			active: true
		},
		{
			id: "151006",
			province_id: "1510",
			description: "Cacra",
			active: true
		},
		{
			id: "151007",
			province_id: "1510",
			description: "Carania",
			active: true
		},
		{
			id: "151008",
			province_id: "1510",
			description: "Catahuasi",
			active: true
		},
		{
			id: "151009",
			province_id: "1510",
			description: "Chocos",
			active: true
		},
		{
			id: "151010",
			province_id: "1510",
			description: "Cochas",
			active: true
		},
		{
			id: "151011",
			province_id: "1510",
			description: "Colonia",
			active: true
		},
		{
			id: "151012",
			province_id: "1510",
			description: "Hongos",
			active: true
		},
		{
			id: "151013",
			province_id: "1510",
			description: "Huampara",
			active: true
		},
		{
			id: "151014",
			province_id: "1510",
			description: "Huancaya",
			active: true
		},
		{
			id: "151015",
			province_id: "1510",
			description: "Huangascar",
			active: true
		},
		{
			id: "151016",
			province_id: "1510",
			description: "Huantan",
			active: true
		},
		{
			id: "151017",
			province_id: "1510",
			description: "Huañec",
			active: true
		},
		{
			id: "151018",
			province_id: "1510",
			description: "Laraos",
			active: true
		},
		{
			id: "151019",
			province_id: "1510",
			description: "Lincha",
			active: true
		},
		{
			id: "151020",
			province_id: "1510",
			description: "Madean",
			active: true
		},
		{
			id: "151021",
			province_id: "1510",
			description: "Miraflores",
			active: true
		},
		{
			id: "151022",
			province_id: "1510",
			description: "Omas",
			active: true
		},
		{
			id: "151023",
			province_id: "1510",
			description: "Putinza",
			active: true
		},
		{
			id: "151024",
			province_id: "1510",
			description: "Quinches",
			active: true
		},
		{
			id: "151025",
			province_id: "1510",
			description: "Quinocay",
			active: true
		},
		{
			id: "151026",
			province_id: "1510",
			description: "San Joaquín",
			active: true
		},
		{
			id: "151027",
			province_id: "1510",
			description: "San Pedro de Pilas",
			active: true
		},
		{
			id: "151028",
			province_id: "1510",
			description: "Tanta",
			active: true
		},
		{
			id: "151029",
			province_id: "1510",
			description: "Tauripampa",
			active: true
		},
		{
			id: "151030",
			province_id: "1510",
			description: "Tomas",
			active: true
		},
		{
			id: "151031",
			province_id: "1510",
			description: "Tupe",
			active: true
		},
		{
			id: "151032",
			province_id: "1510",
			description: "Viñac",
			active: true
		},
		{
			id: "151033",
			province_id: "1510",
			description: "Vitis",
			active: true
		},
		{
			id: "160101",
			province_id: "1601",
			description: "Iquitos",
			active: true
		},
		{
			id: "160102",
			province_id: "1601",
			description: "Alto Nanay",
			active: true
		},
		{
			id: "160103",
			province_id: "1601",
			description: "Fernando Lores",
			active: true
		},
		{
			id: "160104",
			province_id: "1601",
			description: "Indiana",
			active: true
		},
		{
			id: "160105",
			province_id: "1601",
			description: "Las Amazonas",
			active: true
		},
		{
			id: "160106",
			province_id: "1601",
			description: "Mazan",
			active: true
		},
		{
			id: "160107",
			province_id: "1601",
			description: "Napo",
			active: true
		},
		{
			id: "160108",
			province_id: "1601",
			description: "Punchana",
			active: true
		},
		{
			id: "160110",
			province_id: "1601",
			description: "Torres Causana",
			active: true
		},
		{
			id: "160112",
			province_id: "1601",
			description: "Belén",
			active: true
		},
		{
			id: "160113",
			province_id: "1601",
			description: "San Juan Bautista",
			active: true
		},
		{
			id: "160201",
			province_id: "1602",
			description: "Yurimaguas",
			active: true
		},
		{
			id: "160202",
			province_id: "1602",
			description: "Balsapuerto",
			active: true
		},
		{
			id: "160205",
			province_id: "1602",
			description: "Jeberos",
			active: true
		},
		{
			id: "160206",
			province_id: "1602",
			description: "Lagunas",
			active: true
		},
		{
			id: "160210",
			province_id: "1602",
			description: "Santa Cruz",
			active: true
		},
		{
			id: "160211",
			province_id: "1602",
			description: "Teniente Cesar López Rojas",
			active: true
		},
		{
			id: "160301",
			province_id: "1603",
			description: "Nauta",
			active: true
		},
		{
			id: "160302",
			province_id: "1603",
			description: "Parinari",
			active: true
		},
		{
			id: "160303",
			province_id: "1603",
			description: "Tigre",
			active: true
		},
		{
			id: "160304",
			province_id: "1603",
			description: "Trompeteros",
			active: true
		},
		{
			id: "160305",
			province_id: "1603",
			description: "Urarinas",
			active: true
		},
		{
			id: "160401",
			province_id: "1604",
			description: "Ramón Castilla",
			active: true
		},
		{
			id: "160402",
			province_id: "1604",
			description: "Pebas",
			active: true
		},
		{
			id: "160403",
			province_id: "1604",
			description: "Yavari",
			active: true
		},
		{
			id: "160404",
			province_id: "1604",
			description: "San Pablo",
			active: true
		},
		{
			id: "160501",
			province_id: "1605",
			description: "Requena",
			active: true
		},
		{
			id: "160502",
			province_id: "1605",
			description: "Alto Tapiche",
			active: true
		},
		{
			id: "160503",
			province_id: "1605",
			description: "Capelo",
			active: true
		},
		{
			id: "160504",
			province_id: "1605",
			description: "Emilio San Martín",
			active: true
		},
		{
			id: "160505",
			province_id: "1605",
			description: "Maquia",
			active: true
		},
		{
			id: "160506",
			province_id: "1605",
			description: "Puinahua",
			active: true
		},
		{
			id: "160507",
			province_id: "1605",
			description: "Saquena",
			active: true
		},
		{
			id: "160508",
			province_id: "1605",
			description: "Soplin",
			active: true
		},
		{
			id: "160509",
			province_id: "1605",
			description: "Tapiche",
			active: true
		},
		{
			id: "160510",
			province_id: "1605",
			description: "Jenaro Herrera",
			active: true
		},
		{
			id: "160511",
			province_id: "1605",
			description: "Yaquerana",
			active: true
		},
		{
			id: "160601",
			province_id: "1606",
			description: "Contamana",
			active: true
		},
		{
			id: "160602",
			province_id: "1606",
			description: "Inahuaya",
			active: true
		},
		{
			id: "160603",
			province_id: "1606",
			description: "Padre Márquez",
			active: true
		},
		{
			id: "160604",
			province_id: "1606",
			description: "Pampa Hermosa",
			active: true
		},
		{
			id: "160605",
			province_id: "1606",
			description: "Sarayacu",
			active: true
		},
		{
			id: "160606",
			province_id: "1606",
			description: "Vargas Guerra",
			active: true
		},
		{
			id: "160701",
			province_id: "1607",
			description: "Barranca",
			active: true
		},
		{
			id: "160702",
			province_id: "1607",
			description: "Cahuapanas",
			active: true
		},
		{
			id: "160703",
			province_id: "1607",
			description: "Manseriche",
			active: true
		},
		{
			id: "160704",
			province_id: "1607",
			description: "Morona",
			active: true
		},
		{
			id: "160705",
			province_id: "1607",
			description: "Pastaza",
			active: true
		},
		{
			id: "160706",
			province_id: "1607",
			description: "Andoas",
			active: true
		},
		{
			id: "160801",
			province_id: "1608",
			description: "Putumayo",
			active: true
		},
		{
			id: "160802",
			province_id: "1608",
			description: "Rosa Panduro",
			active: true
		},
		{
			id: "160803",
			province_id: "1608",
			description: "Teniente Manuel Clavero",
			active: true
		},
		{
			id: "160804",
			province_id: "1608",
			description: "Yaguas",
			active: true
		},
		{
			id: "170101",
			province_id: "1701",
			description: "Tambopata",
			active: true
		},
		{
			id: "170102",
			province_id: "1701",
			description: "Inambari",
			active: true
		},
		{
			id: "170103",
			province_id: "1701",
			description: "Las Piedras",
			active: true
		},
		{
			id: "170104",
			province_id: "1701",
			description: "Laberinto",
			active: true
		},
		{
			id: "170201",
			province_id: "1702",
			description: "Manu",
			active: true
		},
		{
			id: "170202",
			province_id: "1702",
			description: "Fitzcarrald",
			active: true
		},
		{
			id: "170203",
			province_id: "1702",
			description: "Madre de Dios",
			active: true
		},
		{
			id: "170204",
			province_id: "1702",
			description: "Huepetuhe",
			active: true
		},
		{
			id: "170301",
			province_id: "1703",
			description: "Iñapari",
			active: true
		},
		{
			id: "170302",
			province_id: "1703",
			description: "Iberia",
			active: true
		},
		{
			id: "170303",
			province_id: "1703",
			description: "Tahuamanu",
			active: true
		},
		{
			id: "180101",
			province_id: "1801",
			description: "Moquegua",
			active: true
		},
		{
			id: "180102",
			province_id: "1801",
			description: "Carumas",
			active: true
		},
		{
			id: "180103",
			province_id: "1801",
			description: "Cuchumbaya",
			active: true
		},
		{
			id: "180104",
			province_id: "1801",
			description: "Samegua",
			active: true
		},
		{
			id: "180105",
			province_id: "1801",
			description: "San Cristóbal",
			active: true
		},
		{
			id: "180106",
			province_id: "1801",
			description: "Torata",
			active: true
		},
		{
			id: "180201",
			province_id: "1802",
			description: "Omate",
			active: true
		},
		{
			id: "180202",
			province_id: "1802",
			description: "Chojata",
			active: true
		},
		{
			id: "180203",
			province_id: "1802",
			description: "Coalaque",
			active: true
		},
		{
			id: "180204",
			province_id: "1802",
			description: "Ichuña",
			active: true
		},
		{
			id: "180205",
			province_id: "1802",
			description: "La Capilla",
			active: true
		},
		{
			id: "180206",
			province_id: "1802",
			description: "Lloque",
			active: true
		},
		{
			id: "180207",
			province_id: "1802",
			description: "Matalaque",
			active: true
		},
		{
			id: "180208",
			province_id: "1802",
			description: "Puquina",
			active: true
		},
		{
			id: "180209",
			province_id: "1802",
			description: "Quinistaquillas",
			active: true
		},
		{
			id: "180210",
			province_id: "1802",
			description: "Ubinas",
			active: true
		},
		{
			id: "180211",
			province_id: "1802",
			description: "Yunga",
			active: true
		},
		{
			id: "180301",
			province_id: "1803",
			description: "Ilo",
			active: true
		},
		{
			id: "180302",
			province_id: "1803",
			description: "El Algarrobal",
			active: true
		},
		{
			id: "180303",
			province_id: "1803",
			description: "Pacocha",
			active: true
		},
		{
			id: "190101",
			province_id: "1901",
			description: "Chaupimarca",
			active: true
		},
		{
			id: "190102",
			province_id: "1901",
			description: "Huachon",
			active: true
		},
		{
			id: "190103",
			province_id: "1901",
			description: "Huariaca",
			active: true
		},
		{
			id: "190104",
			province_id: "1901",
			description: "Huayllay",
			active: true
		},
		{
			id: "190105",
			province_id: "1901",
			description: "Ninacaca",
			active: true
		},
		{
			id: "190106",
			province_id: "1901",
			description: "Pallanchacra",
			active: true
		},
		{
			id: "190107",
			province_id: "1901",
			description: "Paucartambo",
			active: true
		},
		{
			id: "190108",
			province_id: "1901",
			description: "San Francisco de Asís de Yarusyacan",
			active: true
		},
		{
			id: "190109",
			province_id: "1901",
			description: "Simon Bolívar",
			active: true
		},
		{
			id: "190110",
			province_id: "1901",
			description: "Ticlacayan",
			active: true
		},
		{
			id: "190111",
			province_id: "1901",
			description: "Tinyahuarco",
			active: true
		},
		{
			id: "190112",
			province_id: "1901",
			description: "Vicco",
			active: true
		},
		{
			id: "190113",
			province_id: "1901",
			description: "Yanacancha",
			active: true
		},
		{
			id: "190201",
			province_id: "1902",
			description: "Yanahuanca",
			active: true
		},
		{
			id: "190202",
			province_id: "1902",
			description: "Chacayan",
			active: true
		},
		{
			id: "190203",
			province_id: "1902",
			description: "Goyllarisquizga",
			active: true
		},
		{
			id: "190204",
			province_id: "1902",
			description: "Paucar",
			active: true
		},
		{
			id: "190205",
			province_id: "1902",
			description: "San Pedro de Pillao",
			active: true
		},
		{
			id: "190206",
			province_id: "1902",
			description: "Santa Ana de Tusi",
			active: true
		},
		{
			id: "190207",
			province_id: "1902",
			description: "Tapuc",
			active: true
		},
		{
			id: "190208",
			province_id: "1902",
			description: "Vilcabamba",
			active: true
		},
		{
			id: "190301",
			province_id: "1903",
			description: "Oxapampa",
			active: true
		},
		{
			id: "190302",
			province_id: "1903",
			description: "Chontabamba",
			active: true
		},
		{
			id: "190303",
			province_id: "1903",
			description: "Huancabamba",
			active: true
		},
		{
			id: "190304",
			province_id: "1903",
			description: "Palcazu",
			active: true
		},
		{
			id: "190305",
			province_id: "1903",
			description: "Pozuzo",
			active: true
		},
		{
			id: "190306",
			province_id: "1903",
			description: "Puerto Bermúdez",
			active: true
		},
		{
			id: "190307",
			province_id: "1903",
			description: "Villa Rica",
			active: true
		},
		{
			id: "190308",
			province_id: "1903",
			description: "Constitución",
			active: true
		},
		{
			id: "200101",
			province_id: "2001",
			description: "Piura",
			active: true
		},
		{
			id: "200104",
			province_id: "2001",
			description: "Castilla",
			active: true
		},
		{
			id: "200105",
			province_id: "2001",
			description: "Catacaos",
			active: true
		},
		{
			id: "200107",
			province_id: "2001",
			description: "Cura Mori",
			active: true
		},
		{
			id: "200108",
			province_id: "2001",
			description: "El Tallan",
			active: true
		},
		{
			id: "200109",
			province_id: "2001",
			description: "La Arena",
			active: true
		},
		{
			id: "200110",
			province_id: "2001",
			description: "La Unión",
			active: true
		},
		{
			id: "200111",
			province_id: "2001",
			description: "Las Lomas",
			active: true
		},
		{
			id: "200114",
			province_id: "2001",
			description: "Tambo Grande",
			active: true
		},
		{
			id: "200115",
			province_id: "2001",
			description: "Veintiseis de Octubre",
			active: true
		},
		{
			id: "200201",
			province_id: "2002",
			description: "Ayabaca",
			active: true
		},
		{
			id: "200202",
			province_id: "2002",
			description: "Frias",
			active: true
		},
		{
			id: "200203",
			province_id: "2002",
			description: "Jilili",
			active: true
		},
		{
			id: "200204",
			province_id: "2002",
			description: "Lagunas",
			active: true
		},
		{
			id: "200205",
			province_id: "2002",
			description: "Montero",
			active: true
		},
		{
			id: "200206",
			province_id: "2002",
			description: "Pacaipampa",
			active: true
		},
		{
			id: "200207",
			province_id: "2002",
			description: "Paimas",
			active: true
		},
		{
			id: "200208",
			province_id: "2002",
			description: "Sapillica",
			active: true
		},
		{
			id: "200209",
			province_id: "2002",
			description: "Sicchez",
			active: true
		},
		{
			id: "200210",
			province_id: "2002",
			description: "Suyo",
			active: true
		},
		{
			id: "200301",
			province_id: "2003",
			description: "Huancabamba",
			active: true
		},
		{
			id: "200302",
			province_id: "2003",
			description: "Canchaque",
			active: true
		},
		{
			id: "200303",
			province_id: "2003",
			description: "El Carmen de la Frontera",
			active: true
		},
		{
			id: "200304",
			province_id: "2003",
			description: "Huarmaca",
			active: true
		},
		{
			id: "200305",
			province_id: "2003",
			description: "Lalaquiz",
			active: true
		},
		{
			id: "200306",
			province_id: "2003",
			description: "San Miguel de El Faique",
			active: true
		},
		{
			id: "200307",
			province_id: "2003",
			description: "Sondor",
			active: true
		},
		{
			id: "200308",
			province_id: "2003",
			description: "Sondorillo",
			active: true
		},
		{
			id: "200401",
			province_id: "2004",
			description: "Chulucanas",
			active: true
		},
		{
			id: "200402",
			province_id: "2004",
			description: "Buenos Aires",
			active: true
		},
		{
			id: "200403",
			province_id: "2004",
			description: "Chalaco",
			active: true
		},
		{
			id: "200404",
			province_id: "2004",
			description: "La Matanza",
			active: true
		},
		{
			id: "200405",
			province_id: "2004",
			description: "Morropon",
			active: true
		},
		{
			id: "200406",
			province_id: "2004",
			description: "Salitral",
			active: true
		},
		{
			id: "200407",
			province_id: "2004",
			description: "San Juan de Bigote",
			active: true
		},
		{
			id: "200408",
			province_id: "2004",
			description: "Santa Catalina de Mossa",
			active: true
		},
		{
			id: "200409",
			province_id: "2004",
			description: "Santo Domingo",
			active: true
		},
		{
			id: "200410",
			province_id: "2004",
			description: "YAMANGO",
			active: true
		},
		{
			id: "200501",
			province_id: "2005",
			description: "PAITA",
			active: true
		},
		{
			id: "200502",
			province_id: "2005",
			description: "AMOTAPE",
			active: true
		},
		{
			id: "200503",
			province_id: "2005",
			description: "ARENAL",
			active: true
		},
		{
			id: "200504",
			province_id: "2005",
			description: "COLAN",
			active: true
		},
		{
			id: "200505",
			province_id: "2005",
			description: "LA HUACA",
			active: true
		},
		{
			id: "200506",
			province_id: "2005",
			description: "Tamarindo",
			active: true
		},
		{
			id: "200507",
			province_id: "2005",
			description: "Vichayal",
			active: true
		},
		{
			id: "200601",
			province_id: "2006",
			description: "SULLANA",
			active: true
		},
		{
			id: "200602",
			province_id: "2006",
			description: "Bellavista",
			active: true
		},
		{
			id: "200603",
			province_id: "2006",
			description: "Ignacio Escudero",
			active: true
		},
		{
			id: "200604",
			province_id: "2006",
			description: "Lancones",
			active: true
		},
		{
			id: "200605",
			province_id: "2006",
			description: "Marcavelica",
			active: true
		},
		{
			id: "200606",
			province_id: "2006",
			description: "Miguel Checa",
			active: true
		},
		{
			id: "200607",
			province_id: "2006",
			description: "Querecotillo",
			active: true
		},
		{
			id: "200608",
			province_id: "2006",
			description: "Salitral",
			active: true
		},
		{
			id: "200701",
			province_id: "2007",
			description: "PARIÑAS",
			active: true
		},
		{
			id: "200702",
			province_id: "2007",
			description: "EL ALTO",
			active: true
		},
		{
			id: "200703",
			province_id: "2007",
			description: "LA BREA",
			active: true
		},
		{
			id: "200704",
			province_id: "2007",
			description: "LOBITOS",
			active: true
		},
		{
			id: "200705",
			province_id: "2007",
			description: "Los Organos",
			active: true
		},
		{
			id: "200706",
			province_id: "2007",
			description: "MANCORA",
			active: true
		},
		{
			id: "200801",
			province_id: "2008",
			description: "SECHURA",
			active: true
		},
		{
			id: "200802",
			province_id: "2008",
			description: "Bellavista de la Unión",
			active: true
		},
		{
			id: "200803",
			province_id: "2008",
			description: "BERNAL",
			active: true
		},
		{
			id: "200804",
			province_id: "2008",
			description: "Cristo Nos Valga",
			active: true
		},
		{
			id: "200805",
			province_id: "2008",
			description: "Vice",
			active: true
		},
		{
			id: "200806",
			province_id: "2008",
			description: "Rinconada Llicuar",
			active: true
		},
		{
			id: "210101",
			province_id: "2101",
			description: "Puno",
			active: true
		},
		{
			id: "210102",
			province_id: "2101",
			description: "Acora",
			active: true
		},
		{
			id: "210103",
			province_id: "2101",
			description: "Amantani",
			active: true
		},
		{
			id: "210104",
			province_id: "2101",
			description: "Atuncolla",
			active: true
		},
		{
			id: "210105",
			province_id: "2101",
			description: "Capachica",
			active: true
		},
		{
			id: "210106",
			province_id: "2101",
			description: "Chucuito",
			active: true
		},
		{
			id: "210107",
			province_id: "2101",
			description: "Coata",
			active: true
		},
		{
			id: "210108",
			province_id: "2101",
			description: "Huata",
			active: true
		},
		{
			id: "210109",
			province_id: "2101",
			description: "Mañazo",
			active: true
		},
		{
			id: "210110",
			province_id: "2101",
			description: "Paucarcolla",
			active: true
		},
		{
			id: "210111",
			province_id: "2101",
			description: "Pichacani",
			active: true
		},
		{
			id: "210112",
			province_id: "2101",
			description: "Plateria",
			active: true
		},
		{
			id: "210113",
			province_id: "2101",
			description: "San Antonio",
			active: true
		},
		{
			id: "210114",
			province_id: "2101",
			description: "Tiquillaca",
			active: true
		},
		{
			id: "210115",
			province_id: "2101",
			description: "Vilque",
			active: true
		},
		{
			id: "210201",
			province_id: "2102",
			description: "Azángaro",
			active: true
		},
		{
			id: "210202",
			province_id: "2102",
			description: "Achaya",
			active: true
		},
		{
			id: "210203",
			province_id: "2102",
			description: "Arapa",
			active: true
		},
		{
			id: "210204",
			province_id: "2102",
			description: "Asillo",
			active: true
		},
		{
			id: "210205",
			province_id: "2102",
			description: "Caminaca",
			active: true
		},
		{
			id: "210206",
			province_id: "2102",
			description: "Chupa",
			active: true
		},
		{
			id: "210207",
			province_id: "2102",
			description: "José Domingo Choquehuanca",
			active: true
		},
		{
			id: "210208",
			province_id: "2102",
			description: "Muñani",
			active: true
		},
		{
			id: "210209",
			province_id: "2102",
			description: "Potoni",
			active: true
		},
		{
			id: "210210",
			province_id: "2102",
			description: "Saman",
			active: true
		},
		{
			id: "210211",
			province_id: "2102",
			description: "San Anton",
			active: true
		},
		{
			id: "210212",
			province_id: "2102",
			description: "San José",
			active: true
		},
		{
			id: "210213",
			province_id: "2102",
			description: "San Juan de Salinas",
			active: true
		},
		{
			id: "210214",
			province_id: "2102",
			description: "Santiago de Pupuja",
			active: true
		},
		{
			id: "210215",
			province_id: "2102",
			description: "Tirapata",
			active: true
		},
		{
			id: "210301",
			province_id: "2103",
			description: "Macusani",
			active: true
		},
		{
			id: "210302",
			province_id: "2103",
			description: "Ajoyani",
			active: true
		},
		{
			id: "210303",
			province_id: "2103",
			description: "Ayapata",
			active: true
		},
		{
			id: "210304",
			province_id: "2103",
			description: "Coasa",
			active: true
		},
		{
			id: "210305",
			province_id: "2103",
			description: "Corani",
			active: true
		},
		{
			id: "210306",
			province_id: "2103",
			description: "Crucero",
			active: true
		},
		{
			id: "210307",
			province_id: "2103",
			description: "Ituata",
			active: true
		},
		{
			id: "210308",
			province_id: "2103",
			description: "Ollachea",
			active: true
		},
		{
			id: "210309",
			province_id: "2103",
			description: "San Gaban",
			active: true
		},
		{
			id: "210310",
			province_id: "2103",
			description: "Usicayos",
			active: true
		},
		{
			id: "210401",
			province_id: "2104",
			description: "Juli",
			active: true
		},
		{
			id: "210402",
			province_id: "2104",
			description: "Desaguadero",
			active: true
		},
		{
			id: "210403",
			province_id: "2104",
			description: "Huacullani",
			active: true
		},
		{
			id: "210404",
			province_id: "2104",
			description: "Kelluyo",
			active: true
		},
		{
			id: "210405",
			province_id: "2104",
			description: "Pisacoma",
			active: true
		},
		{
			id: "210406",
			province_id: "2104",
			description: "Pomata",
			active: true
		},
		{
			id: "210407",
			province_id: "2104",
			description: "Zepita",
			active: true
		},
		{
			id: "210501",
			province_id: "2105",
			description: "Ilave",
			active: true
		},
		{
			id: "210502",
			province_id: "2105",
			description: "Capazo",
			active: true
		},
		{
			id: "210503",
			province_id: "2105",
			description: "Pilcuyo",
			active: true
		},
		{
			id: "210504",
			province_id: "2105",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "210505",
			province_id: "2105",
			description: "Conduriri",
			active: true
		},
		{
			id: "210601",
			province_id: "2106",
			description: "Huancane",
			active: true
		},
		{
			id: "210602",
			province_id: "2106",
			description: "Cojata",
			active: true
		},
		{
			id: "210603",
			province_id: "2106",
			description: "Huatasani",
			active: true
		},
		{
			id: "210604",
			province_id: "2106",
			description: "Inchupalla",
			active: true
		},
		{
			id: "210605",
			province_id: "2106",
			description: "Pusi",
			active: true
		},
		{
			id: "210606",
			province_id: "2106",
			description: "Rosaspata",
			active: true
		},
		{
			id: "210607",
			province_id: "2106",
			description: "Taraco",
			active: true
		},
		{
			id: "210608",
			province_id: "2106",
			description: "Vilque Chico",
			active: true
		},
		{
			id: "210701",
			province_id: "2107",
			description: "Lampa",
			active: true
		},
		{
			id: "210702",
			province_id: "2107",
			description: "Cabanilla",
			active: true
		},
		{
			id: "210703",
			province_id: "2107",
			description: "Calapuja",
			active: true
		},
		{
			id: "210704",
			province_id: "2107",
			description: "Nicasio",
			active: true
		},
		{
			id: "210705",
			province_id: "2107",
			description: "Ocuviri",
			active: true
		},
		{
			id: "210706",
			province_id: "2107",
			description: "Palca",
			active: true
		},
		{
			id: "210707",
			province_id: "2107",
			description: "Paratia",
			active: true
		},
		{
			id: "210708",
			province_id: "2107",
			description: "Pucara",
			active: true
		},
		{
			id: "210709",
			province_id: "2107",
			description: "Santa Lucia",
			active: true
		},
		{
			id: "210710",
			province_id: "2107",
			description: "Vilavila",
			active: true
		},
		{
			id: "210801",
			province_id: "2108",
			description: "Ayaviri",
			active: true
		},
		{
			id: "210802",
			province_id: "2108",
			description: "Antauta",
			active: true
		},
		{
			id: "210803",
			province_id: "2108",
			description: "Cupi",
			active: true
		},
		{
			id: "210804",
			province_id: "2108",
			description: "Llalli",
			active: true
		},
		{
			id: "210805",
			province_id: "2108",
			description: "Macari",
			active: true
		},
		{
			id: "210806",
			province_id: "2108",
			description: "Nuñoa",
			active: true
		},
		{
			id: "210807",
			province_id: "2108",
			description: "Orurillo",
			active: true
		},
		{
			id: "210808",
			province_id: "2108",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "210809",
			province_id: "2108",
			description: "Umachiri",
			active: true
		},
		{
			id: "210901",
			province_id: "2109",
			description: "Moho",
			active: true
		},
		{
			id: "210902",
			province_id: "2109",
			description: "Conima",
			active: true
		},
		{
			id: "210903",
			province_id: "2109",
			description: "Huayrapata",
			active: true
		},
		{
			id: "210904",
			province_id: "2109",
			description: "Tilali",
			active: true
		},
		{
			id: "211001",
			province_id: "2110",
			description: "Putina",
			active: true
		},
		{
			id: "211002",
			province_id: "2110",
			description: "Ananea",
			active: true
		},
		{
			id: "211003",
			province_id: "2110",
			description: "Pedro Vilca Apaza",
			active: true
		},
		{
			id: "211004",
			province_id: "2110",
			description: "Quilcapuncu",
			active: true
		},
		{
			id: "211005",
			province_id: "2110",
			description: "Sina",
			active: true
		},
		{
			id: "211101",
			province_id: "2111",
			description: "Juliaca",
			active: true
		},
		{
			id: "211102",
			province_id: "2111",
			description: "Cabana",
			active: true
		},
		{
			id: "211103",
			province_id: "2111",
			description: "Cabanillas",
			active: true
		},
		{
			id: "211104",
			province_id: "2111",
			description: "Caracoto",
			active: true
		},
		{
			id: "211105",
			province_id: "2111",
			description: "San Miguel",
			active: true
		},
		{
			id: "211201",
			province_id: "2112",
			description: "Sandia",
			active: true
		},
		{
			id: "211202",
			province_id: "2112",
			description: "Cuyocuyo",
			active: true
		},
		{
			id: "211203",
			province_id: "2112",
			description: "Limbani",
			active: true
		},
		{
			id: "211204",
			province_id: "2112",
			description: "Patambuco",
			active: true
		},
		{
			id: "211205",
			province_id: "2112",
			description: "Phara",
			active: true
		},
		{
			id: "211206",
			province_id: "2112",
			description: "Quiaca",
			active: true
		},
		{
			id: "211207",
			province_id: "2112",
			description: "San Juan del Oro",
			active: true
		},
		{
			id: "211208",
			province_id: "2112",
			description: "Yanahuaya",
			active: true
		},
		{
			id: "211209",
			province_id: "2112",
			description: "Alto Inambari",
			active: true
		},
		{
			id: "211210",
			province_id: "2112",
			description: "San Pedro de Putina Punco",
			active: true
		},
		{
			id: "211301",
			province_id: "2113",
			description: "Yunguyo",
			active: true
		},
		{
			id: "211302",
			province_id: "2113",
			description: "Anapia",
			active: true
		},
		{
			id: "211303",
			province_id: "2113",
			description: "Copani",
			active: true
		},
		{
			id: "211304",
			province_id: "2113",
			description: "Cuturapi",
			active: true
		},
		{
			id: "211305",
			province_id: "2113",
			description: "Ollaraya",
			active: true
		},
		{
			id: "211306",
			province_id: "2113",
			description: "Tinicachi",
			active: true
		},
		{
			id: "211307",
			province_id: "2113",
			description: "Unicachi",
			active: true
		},
		{
			id: "220101",
			province_id: "2201",
			description: "Moyobamba",
			active: true
		},
		{
			id: "220102",
			province_id: "2201",
			description: "Calzada",
			active: true
		},
		{
			id: "220103",
			province_id: "2201",
			description: "Habana",
			active: true
		},
		{
			id: "220104",
			province_id: "2201",
			description: "Jepelacio",
			active: true
		},
		{
			id: "220105",
			province_id: "2201",
			description: "Soritor",
			active: true
		},
		{
			id: "220106",
			province_id: "2201",
			description: "Yantalo",
			active: true
		},
		{
			id: "220201",
			province_id: "2202",
			description: "Bellavista",
			active: true
		},
		{
			id: "220202",
			province_id: "2202",
			description: "Alto Biavo",
			active: true
		},
		{
			id: "220203",
			province_id: "2202",
			description: "Bajo Biavo",
			active: true
		},
		{
			id: "220204",
			province_id: "2202",
			description: "Huallaga",
			active: true
		},
		{
			id: "220205",
			province_id: "2202",
			description: "San Pablo",
			active: true
		},
		{
			id: "220206",
			province_id: "2202",
			description: "San Rafael",
			active: true
		},
		{
			id: "220301",
			province_id: "2203",
			description: "San José de Sisa",
			active: true
		},
		{
			id: "220302",
			province_id: "2203",
			description: "Agua Blanca",
			active: true
		},
		{
			id: "220303",
			province_id: "2203",
			description: "San Martín",
			active: true
		},
		{
			id: "220304",
			province_id: "2203",
			description: "Santa Rosa",
			active: true
		},
		{
			id: "220305",
			province_id: "2203",
			description: "Shatoja",
			active: true
		},
		{
			id: "220401",
			province_id: "2204",
			description: "Saposoa",
			active: true
		},
		{
			id: "220402",
			province_id: "2204",
			description: "Alto Saposoa",
			active: true
		},
		{
			id: "220403",
			province_id: "2204",
			description: "El Eslabón",
			active: true
		},
		{
			id: "220404",
			province_id: "2204",
			description: "Piscoyacu",
			active: true
		},
		{
			id: "220405",
			province_id: "2204",
			description: "Sacanche",
			active: true
		},
		{
			id: "220406",
			province_id: "2204",
			description: "Tingo de Saposoa",
			active: true
		},
		{
			id: "220501",
			province_id: "2205",
			description: "Lamas",
			active: true
		},
		{
			id: "220502",
			province_id: "2205",
			description: "Alonso de Alvarado",
			active: true
		},
		{
			id: "220503",
			province_id: "2205",
			description: "Barranquita",
			active: true
		},
		{
			id: "220504",
			province_id: "2205",
			description: "Caynarachi",
			active: true
		},
		{
			id: "220505",
			province_id: "2205",
			description: "Cuñumbuqui",
			active: true
		},
		{
			id: "220506",
			province_id: "2205",
			description: "Pinto Recodo",
			active: true
		},
		{
			id: "220507",
			province_id: "2205",
			description: "Rumisapa",
			active: true
		},
		{
			id: "220508",
			province_id: "2205",
			description: "San Roque de Cumbaza",
			active: true
		},
		{
			id: "220509",
			province_id: "2205",
			description: "Shanao",
			active: true
		},
		{
			id: "220510",
			province_id: "2205",
			description: "Tabalosos",
			active: true
		},
		{
			id: "220511",
			province_id: "2205",
			description: "Zapatero",
			active: true
		},
		{
			id: "220601",
			province_id: "2206",
			description: "Juanjuí",
			active: true
		},
		{
			id: "220602",
			province_id: "2206",
			description: "Campanilla",
			active: true
		},
		{
			id: "220603",
			province_id: "2206",
			description: "Huicungo",
			active: true
		},
		{
			id: "220604",
			province_id: "2206",
			description: "Pachiza",
			active: true
		},
		{
			id: "220605",
			province_id: "2206",
			description: "Pajarillo",
			active: true
		},
		{
			id: "220701",
			province_id: "2207",
			description: "Picota",
			active: true
		},
		{
			id: "220702",
			province_id: "2207",
			description: "Buenos Aires",
			active: true
		},
		{
			id: "220703",
			province_id: "2207",
			description: "Caspisapa",
			active: true
		},
		{
			id: "220704",
			province_id: "2207",
			description: "Pilluana",
			active: true
		},
		{
			id: "220705",
			province_id: "2207",
			description: "Pucacaca",
			active: true
		},
		{
			id: "220706",
			province_id: "2207",
			description: "San Cristóbal",
			active: true
		},
		{
			id: "220707",
			province_id: "2207",
			description: "San Hilarión",
			active: true
		},
		{
			id: "220708",
			province_id: "2207",
			description: "Shamboyacu",
			active: true
		},
		{
			id: "220709",
			province_id: "2207",
			description: "Tingo de Ponasa",
			active: true
		},
		{
			id: "220710",
			province_id: "2207",
			description: "Tres Unidos",
			active: true
		},
		{
			id: "220801",
			province_id: "2208",
			description: "Rioja",
			active: true
		},
		{
			id: "220802",
			province_id: "2208",
			description: "Awajun",
			active: true
		},
		{
			id: "220803",
			province_id: "2208",
			description: "Elías Soplin Vargas",
			active: true
		},
		{
			id: "220804",
			province_id: "2208",
			description: "Nueva Cajamarca",
			active: true
		},
		{
			id: "220805",
			province_id: "2208",
			description: "Pardo Miguel",
			active: true
		},
		{
			id: "220806",
			province_id: "2208",
			description: "Posic",
			active: true
		},
		{
			id: "220807",
			province_id: "2208",
			description: "San Fernando",
			active: true
		},
		{
			id: "220808",
			province_id: "2208",
			description: "Yorongos",
			active: true
		},
		{
			id: "220809",
			province_id: "2208",
			description: "Yuracyacu",
			active: true
		},
		{
			id: "220901",
			province_id: "2209",
			description: "Tarapoto",
			active: true
		},
		{
			id: "220902",
			province_id: "2209",
			description: "Alberto Leveau",
			active: true
		},
		{
			id: "220903",
			province_id: "2209",
			description: "Cacatachi",
			active: true
		},
		{
			id: "220904",
			province_id: "2209",
			description: "Chazuta",
			active: true
		},
		{
			id: "220905",
			province_id: "2209",
			description: "Chipurana",
			active: true
		},
		{
			id: "220906",
			province_id: "2209",
			description: "El Porvenir",
			active: true
		},
		{
			id: "220907",
			province_id: "2209",
			description: "Huimbayoc",
			active: true
		},
		{
			id: "220908",
			province_id: "2209",
			description: "Juan Guerra",
			active: true
		},
		{
			id: "220909",
			province_id: "2209",
			description: "La Banda de Shilcayo",
			active: true
		},
		{
			id: "220910",
			province_id: "2209",
			description: "Morales",
			active: true
		},
		{
			id: "220911",
			province_id: "2209",
			description: "Papaplaya",
			active: true
		},
		{
			id: "220912",
			province_id: "2209",
			description: "San Antonio",
			active: true
		},
		{
			id: "220913",
			province_id: "2209",
			description: "Sauce",
			active: true
		},
		{
			id: "220914",
			province_id: "2209",
			description: "Shapaja",
			active: true
		},
		{
			id: "221001",
			province_id: "2210",
			description: "Tocache",
			active: true
		},
		{
			id: "221002",
			province_id: "2210",
			description: "Nuevo Progreso",
			active: true
		},
		{
			id: "221003",
			province_id: "2210",
			description: "Polvora",
			active: true
		},
		{
			id: "221004",
			province_id: "2210",
			description: "Shunte",
			active: true
		},
		{
			id: "221005",
			province_id: "2210",
			description: "Uchiza",
			active: true
		},
		{
			id: "230101",
			province_id: "2301",
			description: "Tacna",
			active: true
		},
		{
			id: "230102",
			province_id: "2301",
			description: "Alto de la Alianza",
			active: true
		},
		{
			id: "230103",
			province_id: "2301",
			description: "Calana",
			active: true
		},
		{
			id: "230104",
			province_id: "2301",
			description: "Ciudad Nueva",
			active: true
		},
		{
			id: "230105",
			province_id: "2301",
			description: "Inclan",
			active: true
		},
		{
			id: "230106",
			province_id: "2301",
			description: "Pachia",
			active: true
		},
		{
			id: "230107",
			province_id: "2301",
			description: "Palca",
			active: true
		},
		{
			id: "230108",
			province_id: "2301",
			description: "Pocollay",
			active: true
		},
		{
			id: "230109",
			province_id: "2301",
			description: "Sama",
			active: true
		},
		{
			id: "230110",
			province_id: "2301",
			description: "Coronel Gregorio Albarracín Lanchipa",
			active: true
		},
		{
			id: "230111",
			province_id: "2301",
			description: "La Yarada los Palos",
			active: true
		},
		{
			id: "230201",
			province_id: "2302",
			description: "Candarave",
			active: true
		},
		{
			id: "230202",
			province_id: "2302",
			description: "Cairani",
			active: true
		},
		{
			id: "230203",
			province_id: "2302",
			description: "Camilaca",
			active: true
		},
		{
			id: "230204",
			province_id: "2302",
			description: "Curibaya",
			active: true
		},
		{
			id: "230205",
			province_id: "2302",
			description: "Huanuara",
			active: true
		},
		{
			id: "230206",
			province_id: "2302",
			description: "Quilahuani",
			active: true
		},
		{
			id: "230301",
			province_id: "2303",
			description: "Locumba",
			active: true
		},
		{
			id: "230302",
			province_id: "2303",
			description: "Ilabaya",
			active: true
		},
		{
			id: "230303",
			province_id: "2303",
			description: "Ite",
			active: true
		},
		{
			id: "230401",
			province_id: "2304",
			description: "Tarata",
			active: true
		},
		{
			id: "230402",
			province_id: "2304",
			description: "Héroes Albarracín",
			active: true
		},
		{
			id: "230403",
			province_id: "2304",
			description: "Estique",
			active: true
		},
		{
			id: "230404",
			province_id: "2304",
			description: "Estique-Pampa",
			active: true
		},
		{
			id: "230405",
			province_id: "2304",
			description: "Sitajara",
			active: true
		},
		{
			id: "230406",
			province_id: "2304",
			description: "Susapaya",
			active: true
		},
		{
			id: "230407",
			province_id: "2304",
			description: "Tarucachi",
			active: true
		},
		{
			id: "230408",
			province_id: "2304",
			description: "Ticaco",
			active: true
		},
		{
			id: "240101",
			province_id: "2401",
			description: "Tumbes",
			active: true
		},
		{
			id: "240102",
			province_id: "2401",
			description: "Corrales",
			active: true
		},
		{
			id: "240103",
			province_id: "2401",
			description: "La Cruz",
			active: true
		},
		{
			id: "240104",
			province_id: "2401",
			description: "Pampas de Hospital",
			active: true
		},
		{
			id: "240105",
			province_id: "2401",
			description: "San Jacinto",
			active: true
		},
		{
			id: "240106",
			province_id: "2401",
			description: "San Juan de la Virgen",
			active: true
		},
		{
			id: "240201",
			province_id: "2402",
			description: "Zorritos",
			active: true
		},
		{
			id: "240202",
			province_id: "2402",
			description: "Casitas",
			active: true
		},
		{
			id: "240203",
			province_id: "2402",
			description: "Canoas de Punta Sal",
			active: true
		},
		{
			id: "240301",
			province_id: "2403",
			description: "Zarumilla",
			active: true
		},
		{
			id: "240302",
			province_id: "2403",
			description: "Aguas Verdes",
			active: true
		},
		{
			id: "240303",
			province_id: "2403",
			description: "Matapalo",
			active: true
		},
		{
			id: "240304",
			province_id: "2403",
			description: "Papayal",
			active: true
		},
		{
			id: "250101",
			province_id: "2501",
			description: "Calleria",
			active: true
		},
		{
			id: "250102",
			province_id: "2501",
			description: "Campoverde",
			active: true
		},
		{
			id: "250103",
			province_id: "2501",
			description: "Iparia",
			active: true
		},
		{
			id: "250104",
			province_id: "2501",
			description: "Masisea",
			active: true
		},
		{
			id: "250105",
			province_id: "2501",
			description: "Yarinacocha",
			active: true
		},
		{
			id: "250106",
			province_id: "2501",
			description: "Nueva Requena",
			active: true
		},
		{
			id: "250107",
			province_id: "2501",
			description: "Manantay",
			active: true
		},
		{
			id: "250201",
			province_id: "2502",
			description: "Raymondi",
			active: true
		},
		{
			id: "250202",
			province_id: "2502",
			description: "Sepahua",
			active: true
		},
		{
			id: "250203",
			province_id: "2502",
			description: "Tahuania",
			active: true
		},
		{
			id: "250204",
			province_id: "2502",
			description: "Yurua",
			active: true
		},
		{
			id: "250301",
			province_id: "2503",
			description: "Padre Abad",
			active: true
		},
		{
			id: "250302",
			province_id: "2503",
			description: "Irazola",
			active: true
		},
		{
			id: "250303",
			province_id: "2503",
			description: "Curimana",
			active: true
		},
		{
			id: "250304",
			province_id: "2503",
			description: "Neshuya",
			active: true
		},
		{
			id: "250305",
			province_id: "2503",
			description: "Alexander Von Humboldt",
			active: true
		},
		{
			id: "250401",
			province_id: "2504",
			description: "Purus",
			active: true
		}
	]
const countries: Country[] = [
	{
		id: "AX",
		description: "AALAND ISLANDS",
		active: true
	},
	{
		id: "AF",
		description: "AFGHANISTAN",
		active: true
	},
	{
		id: "AL",
		description: "ALBANIA",
		active: true
	},
	{
		id: "DZ",
		description: "ALGERIA",
		active: true
	},
	{
		id: "AS",
		description: "AMERICAN SAMOA",
		active: true
	},
	{
		id: "AD",
		description: "ANDORRA",
		active: true
	},
	{
		id: "AO",
		description: "ANGOLA",
		active: true
	},
	{
		id: "AI",
		description: "ANGUILLA",
		active: true
	},
	{
		id: "AQ",
		description: "ANTARCTICA",
		active: true
	},
	{
		id: "AG",
		description: "ANTIGUA AND BARBUDA",
		active: true
	},
	{
		id: "AR",
		description: "ARGENTINA",
		active: true
	},
	{
		id: "AM",
		description: "ARMENIA",
		active: true
	},
	{
		id: "AW",
		description: "ARUBA",
		active: true
	},
	{
		id: "AU",
		description: "AUSTRALIA",
		active: true
	},
	{
		id: "AT",
		description: "AUSTRIA",
		active: true
	},
	{
		id: "AZ",
		description: "AZERBAIJAN",
		active: true
	},
	{
		id: "BS",
		description: "BAHAMAS",
		active: true
	},
	{
		id: "BH",
		description: "BAHRAIN",
		active: true
	},
	{
		id: "BD",
		description: "BANGLADESH",
		active: true
	},
	{
		id: "BB",
		description: "BARBADOS",
		active: true
	},
	{
		id: "BY",
		description: "BELARUS",
		active: true
	},
	{
		id: "BE",
		description: "BELGIUM",
		active: true
	},
	{
		id: "BZ",
		description: "BELIZE",
		active: true
	},
	{
		id: "BJ",
		description: "BENIN",
		active: true
	},
	{
		id: "BM",
		description: "BERMUDA",
		active: true
	},
	{
		id: "BT",
		description: "BHUTAN",
		active: true
	},
	{
		id: "BO",
		description: "BOLIVIA",
		active: true
	},
	{
		id: "BA",
		description: "BOSNIA AND HERZEGOWINA",
		active: true
	},
	{
		id: "BW",
		description: "BOTSWANA",
		active: true
	},
	{
		id: "BV",
		description: "BOUVET ISLAND",
		active: true
	},
	{
		id: "BR",
		description: "BRAZIL",
		active: true
	},
	{
		id: "IO",
		description: "BRITISH INDIAN OCEAN TERRITORY",
		active: true
	},
	{
		id: "BN",
		description: "BRUNEI DARUSSALAM",
		active: true
	},
	{
		id: "BG",
		description: "BULGARIA",
		active: true
	},
	{
		id: "BF",
		description: "BURKINA FASO",
		active: true
	},
	{
		id: "BI",
		description: "BURUNDI",
		active: true
	},
	{
		id: "KH",
		description: "CAMBODIA",
		active: true
	},
	{
		id: "CM",
		description: "CAMEROON",
		active: true
	},
	{
		id: "CA",
		description: "CANADA",
		active: true
	},
	{
		id: "CV",
		description: "CAPE VERDE",
		active: true
	},
	{
		id: "KY",
		description: "CAYMAN ISLANDS",
		active: true
	},
	{
		id: "CF",
		description: "CENTRAL AFRICAN REPUBLIC",
		active: true
	},
	{
		id: "TD",
		description: "CHAD",
		active: true
	},
	{
		id: "CL",
		description: "CHILE",
		active: true
	},
	{
		id: "CN",
		description: "CHINA",
		active: true
	},
	{
		id: "CX",
		description: "CHRISTMAS ISLAND",
		active: true
	},
	{
		id: "CC",
		description: "COCOS (KEELING) ISLANDS",
		active: true
	},
	{
		id: "CO",
		description: "COLOMBIA",
		active: true
	},
	{
		id: "KM",
		description: "COMOROS",
		active: true
	},
	{
		id: "CD",
		description: "CONGO, Democratic Republic of (was Zaire)",
		active: true
	},
	{
		id: "CG",
		description: "CONGO, Republic of",
		active: true
	},
	{
		id: "CK",
		description: "COOK ISLANDS",
		active: true
	},
	{
		id: "CR",
		description: "COSTA RICA",
		active: true
	},
	{
		id: "CI",
		description: "COTE D`IVOIRE",
		active: true
	},
	{
		id: "HR",
		description: "CROATIA (local name: Hrvatska)",
		active: true
	},
	{
		id: "CU",
		description: "CUBA",
		active: true
	},
	{
		id: "CY",
		description: "CYPRUS",
		active: true
	},
	{
		id: "CZ",
		description: "CZECH REPUBLIC",
		active: true
	},
	{
		id: "DK",
		description: "DENMARK",
		active: true
	},
	{
		id: "DJ",
		description: "DJIBOUTI",
		active: true
	},
	{
		id: "DM",
		description: "DOMINICA",
		active: true
	},
	{
		id: "DO",
		description: "DOMINICAN REPUBLIC",
		active: true
	},
	{
		id: "EC",
		description: "ECUADOR",
		active: true
	},
	{
		id: "EG",
		description: "EGYPT",
		active: true
	},
	{
		id: "SV",
		description: "EL SALVADOR",
		active: true
	},
	{
		id: "GQ",
		description: "EQUATORIAL GUINEA",
		active: true
	},
	{
		id: "ER",
		description: "ERITREA",
		active: true
	},
	{
		id: "EE",
		description: "ESTONIA",
		active: true
	},
	{
		id: "ET",
		description: "ETHIOPIA",
		active: true
	},
	{
		id: "FK",
		description: "FALKLAND ISLANDS (MALVINAS)",
		active: true
	},
	{
		id: "FO",
		description: "FAROE ISLANDS",
		active: true
	},
	{
		id: "FJ",
		description: "FIJI",
		active: true
	},
	{
		id: "FI",
		description: "FINLAND",
		active: true
	},
	{
		id: "FR",
		description: "FRANCE",
		active: true
	},
	{
		id: "GF",
		description: "FRENCH GUIANA",
		active: true
	},
	{
		id: "PF",
		description: "FRENCH POLYNESIA",
		active: true
	},
	{
		id: "TF",
		description: "FRENCH SOUTHERN TERRITORIES",
		active: true
	},
	{
		id: "GA",
		description: "GABON",
		active: true
	},
	{
		id: "GM",
		description: "GAMBIA",
		active: true
	},
	{
		id: "GE",
		description: "GEORGIA",
		active: true
	},
	{
		id: "DE",
		description: "GERMANY",
		active: true
	},
	{
		id: "GH",
		description: "GHANA",
		active: true
	},
	{
		id: "GI",
		description: "GIBRALTAR",
		active: true
	},
	{
		id: "GR",
		description: "GREECE",
		active: true
	},
	{
		id: "GL",
		description: "GREENLAND",
		active: true
	},
	{
		id: "GD",
		description: "GRENADA",
		active: true
	},
	{
		id: "GP",
		description: "GUADELOUPE",
		active: true
	},
	{
		id: "GU",
		description: "GUAM",
		active: true
	},
	{
		id: "GT",
		description: "GUATEMALA",
		active: true
	},
	{
		id: "GN",
		description: "GUINEA",
		active: true
	},
	{
		id: "GW",
		description: "GUINEA-BISSAU",
		active: true
	},
	{
		id: "GY",
		description: "GUYANA",
		active: true
	},
	{
		id: "HT",
		description: "HAITI",
		active: true
	},
	{
		id: "HM",
		description: "HEARD AND MC DONALD ISLANDS",
		active: true
	},
	{
		id: "HN",
		description: "HONDURAS",
		active: true
	},
	{
		id: "HK",
		description: "HONG KONG",
		active: true
	},
	{
		id: "HU",
		description: "HUNGARY",
		active: true
	},
	{
		id: "IS",
		description: "ICELAND",
		active: true
	},
	{
		id: "IN",
		description: "INDIA",
		active: true
	},
	{
		id: "ID",
		description: "INDONESIA",
		active: true
	},
	{
		id: "IR",
		description: "IRAN (ISLAMIC REPUBLIC OF)",
		active: true
	},
	{
		id: "IQ",
		description: "IRAQ",
		active: true
	},
	{
		id: "IE",
		description: "IRELAND",
		active: true
	},
	{
		id: "IL",
		description: "ISRAEL",
		active: true
	},
	{
		id: "IT",
		description: "ITALY",
		active: true
	},
	{
		id: "JM",
		description: "JAMAICA",
		active: true
	},
	{
		id: "JP",
		description: "JAPAN",
		active: true
	},
	{
		id: "JO",
		description: "JORDAN",
		active: true
	},
	{
		id: "KZ",
		description: "KAZAKHSTAN",
		active: true
	},
	{
		id: "KE",
		description: "KENYA",
		active: true
	},
	{
		id: "KI",
		description: "KIRIBATI",
		active: true
	},
	{
		id: "KP",
		description: "KOREA, DEMOCRATIC PEOPLE`S REPUBLIC OF",
		active: true
	},
	{
		id: "KR",
		description: "KOREA, REPUBLIC OF",
		active: true
	},
	{
		id: "KW",
		description: "KUWAIT",
		active: true
	},
	{
		id: "KG",
		description: "KYRGYZSTAN",
		active: true
	},
	{
		id: "LA",
		description: "LAO PEOPLE`S DEMOCRATIC REPUBLIC",
		active: true
	},
	{
		id: "LV",
		description: "LATVIA",
		active: true
	},
	{
		id: "LB",
		description: "LEBANON",
		active: true
	},
	{
		id: "LS",
		description: "LESOTHO",
		active: true
	},
	{
		id: "LR",
		description: "LIBERIA",
		active: true
	},
	{
		id: "LY",
		description: "LIBYAN ARAB JAMAHIRIYA",
		active: true
	},
	{
		id: "LI",
		description: "LIECHTENSTEIN",
		active: true
	},
	{
		id: "LT",
		description: "LITHUANIA",
		active: true
	},
	{
		id: "LU",
		description: "LUXEMBOURG",
		active: true
	},
	{
		id: "MO",
		description: "MACAU",
		active: true
	},
	{
		id: "MK",
		description: "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
		active: true
	},
	{
		id: "MG",
		description: "MADAGASCAR",
		active: true
	},
	{
		id: "MW",
		description: "MALAWI",
		active: true
	},
	{
		id: "MY",
		description: "MALAYSIA",
		active: true
	},
	{
		id: "MV",
		description: "MALDIVES",
		active: true
	},
	{
		id: "ML",
		description: "MALI",
		active: true
	},
	{
		id: "MT",
		description: "MALTA",
		active: true
	},
	{
		id: "MH",
		description: "MARSHALL ISLANDS",
		active: true
	},
	{
		id: "MQ",
		description: "MARTINIQUE",
		active: true
	},
	{
		id: "MR",
		description: "MAURITANIA",
		active: true
	},
	{
		id: "MU",
		description: "MAURITIUS",
		active: true
	},
	{
		id: "YT",
		description: "MAYOTTE",
		active: true
	},
	{
		id: "MX",
		description: "MEXICO",
		active: true
	},
	{
		id: "FM",
		description: "MICRONESIA, FEDERATED STATES OF",
		active: true
	},
	{
		id: "MD",
		description: "MOLDOVA, REPUBLIC OF",
		active: true
	},
	{
		id: "MC",
		description: "MONACO",
		active: true
	},
	{
		id: "MN",
		description: "MONGOLIA",
		active: true
	},
	{
		id: "MS",
		description: "MONTSERRAT",
		active: true
	},
	{
		id: "MA",
		description: "MOROCCO",
		active: true
	},
	{
		id: "MZ",
		description: "MOZAMBIQUE",
		active: true
	},
	{
		id: "MM",
		description: "MYANMAR",
		active: true
	},
	{
		id: "NA",
		description: "NAMIBIA",
		active: true
	},
	{
		id: "NR",
		description: "NAURU",
		active: true
	},
	{
		id: "NP",
		description: "NEPAL",
		active: true
	},
	{
		id: "NL",
		description: "NETHERLANDS",
		active: true
	},
	{
		id: "AN",
		description: "NETHERLANDS ANTILLES",
		active: true
	},
	{
		id: "NC",
		description: "NEW CALEDONIA",
		active: true
	},
	{
		id: "NZ",
		description: "NEW ZEALAND",
		active: true
	},
	{
		id: "NI",
		description: "NICARAGUA",
		active: true
	},
	{
		id: "NE",
		description: "NIGER",
		active: true
	},
	{
		id: "NG",
		description: "NIGERIA",
		active: true
	},
	{
		id: "NU",
		description: "NIUE",
		active: true
	},
	{
		id: "NF",
		description: "NORFOLK ISLAND",
		active: true
	},
	{
		id: "MP",
		description: "NORTHERN MARIANA ISLANDS",
		active: true
	},
	{
		id: "NO",
		description: "NORWAY",
		active: true
	},
	{
		id: "OM",
		description: "OMAN",
		active: true
	},
	{
		id: "PK",
		description: "PAKISTAN",
		active: true
	},
	{
		id: "PW",
		description: "PALAU",
		active: true
	},
	{
		id: "PS",
		description: "PALESTINIAN TERRITORY, Occupied",
		active: true
	},
	{
		id: "PA",
		description: "PANAMA",
		active: true
	},
	{
		id: "PG",
		description: "PAPUA NEW GUINEA",
		active: true
	},
	{
		id: "PY",
		description: "PARAGUAY",
		active: true
	},
	{
		id: "PE",
		description: "PERU",
		active: true
	},
	{
		id: "PH",
		description: "PHILIPPINES",
		active: true
	},
	{
		id: "PN",
		description: "PITCAIRN",
		active: true
	},
	{
		id: "PL",
		description: "POLAND",
		active: true
	},
	{
		id: "PT",
		description: "PORTUGAL",
		active: true
	},
	{
		id: "PR",
		description: "PUERTO RICO",
		active: true
	},
	{
		id: "QA",
		description: "QATAR",
		active: true
	},
	{
		id: "RE",
		description: "REUNION",
		active: true
	},
	{
		id: "RO",
		description: "ROMANIA",
		active: true
	},
	{
		id: "RU",
		description: "RUSSIAN FEDERATION",
		active: true
	},
	{
		id: "RW",
		description: "RWANDA",
		active: true
	},
	{
		id: "SH",
		description: "SAINT HELENA",
		active: true
	},
	{
		id: "KN",
		description: "SAINT KITTS AND NEVIS",
		active: true
	},
	{
		id: "LC",
		description: "SAINT LUCIA",
		active: true
	},
	{
		id: "PM",
		description: "SAINT PIERRE AND MIQUELON",
		active: true
	},
	{
		id: "VC",
		description: "SAINT VINCENT AND THE GRENADINES",
		active: true
	},
	{
		id: "WS",
		description: "SAMOA",
		active: true
	},
	{
		id: "SM",
		description: "SAN MARINO",
		active: true
	},
	{
		id: "ST",
		description: "SAO TOME AND PRINCIPE",
		active: true
	},
	{
		id: "SA",
		description: "SAUDI ARABIA",
		active: true
	},
	{
		id: "SN",
		description: "SENEGAL",
		active: true
	},
	{
		id: "CS",
		description: "SERBIA AND MONTENEGRO",
		active: true
	},
	{
		id: "SC",
		description: "SEYCHELLES",
		active: true
	},
	{
		id: "SL",
		description: "SIERRA LEONE",
		active: true
	},
	{
		id: "SG",
		description: "SINGAPORE",
		active: true
	},
	{
		id: "SK",
		description: "SLOVAKIA",
		active: true
	},
	{
		id: "SI",
		description: "SLOVENIA",
		active: true
	},
	{
		id: "SB",
		description: "SOLOMON ISLANDS",
		active: true
	},
	{
		id: "SO",
		description: "SOMALIA",
		active: true
	},
	{
		id: "ZA",
		description: "SOUTH AFRICA",
		active: true
	},
	{
		id: "GS",
		description: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
		active: true
	},
	{
		id: "ES",
		description: "SPAIN",
		active: true
	},
	{
		id: "LK",
		description: "SRI LANKA",
		active: true
	},
	{
		id: "SD",
		description: "SUDAN",
		active: true
	},
	{
		id: "SR",
		description: "SURINAME",
		active: true
	},
	{
		id: "SJ",
		description: "SVALBARD AND JAN MAYEN ISLANDS",
		active: true
	},
	{
		id: "SZ",
		description: "SWAZILAND",
		active: true
	},
	{
		id: "SE",
		description: "SWEDEN",
		active: true
	},
	{
		id: "CH",
		description: "SWITZERLAND",
		active: true
	},
	{
		id: "SY",
		description: "SYRIAN ARAB REPUBLIC",
		active: true
	},
	{
		id: "TW",
		description: "TAIWAN",
		active: true
	},
	{
		id: "TJ",
		description: "TAJIKISTAN",
		active: true
	},
	{
		id: "TZ",
		description: "TANZANIA, UNITED REPUBLIC OF",
		active: true
	},
	{
		id: "TH",
		description: "THAILAND",
		active: true
	},
	{
		id: "TL",
		description: "TIMOR-LESTE",
		active: true
	},
	{
		id: "TG",
		description: "TOGO",
		active: true
	},
	{
		id: "TK",
		description: "TOKELAU",
		active: true
	},
	{
		id: "TO",
		description: "TONGA",
		active: true
	},
	{
		id: "TT",
		description: "TRINIDAD AND TOBAGO",
		active: true
	},
	{
		id: "TN",
		description: "TUNISIA",
		active: true
	},
	{
		id: "TR",
		description: "TURKEY",
		active: true
	},
	{
		id: "TM",
		description: "TURKMENISTAN",
		active: true
	},
	{
		id: "TC",
		description: "TURKS AND CAICOS ISLANDS",
		active: true
	},
	{
		id: "TV",
		description: "TUVALU",
		active: true
	},
	{
		id: "UG",
		description: "UGANDA",
		active: true
	},
	{
		id: "UA",
		description: "UKRAINE",
		active: true
	},
	{
		id: "AE",
		description: "UNITED ARAB EMIRATES",
		active: true
	},
	{
		id: "GB",
		description: "UNITED KINGDOM",
		active: true
	},
	{
		id: "US",
		description: "UNITED STATES",
		active: true
	},
	{
		id: "UM",
		description: "UNITED STATES MINOR OUTLYING ISLANDS",
		active: true
	},
	{
		id: "UY",
		description: "URUGUAY",
		active: true
	},
	{
		id: "UZ",
		description: "UZBEKISTAN",
		active: true
	},
	{
		id: "VU",
		description: "VANUATU",
		active: true
	},
	{
		id: "VA",
		description: "VATICAN CITY STATE (HOLY SEE)",
		active: true
	},
	{
		id: "VE",
		description: "VENEZUELA",
		active: true
	},
	{
		id: "VN",
		description: "VIET NAM",
		active: true
	},
	{
		id: "VG",
		description: "VIRGIN ISLANDS (BRITISH)",
		active: true
	},
	{
		id: "VI",
		description: "VIRGIN ISLANDS (U.S.)",
		active: true
	},
	{
		id: "WF",
		description: "WALLIS AND FUTUNA ISLANDS",
		active: true
	},
	{
		id: "EH",
		description: "WESTERN SAHARA",
		active: true
	},
	{
		id: "YE",
		description: "YEMEN",
		active: true
	},
	{
		id: "ZM",
		description: "ZAMBIA",
		active: true
	},
	{
		id: "ZW",
		description: "ZIMBABWE",
		active: true
	}
]

export { departments, provinces, districts, countries };