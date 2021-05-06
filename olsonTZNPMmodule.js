//
var moment = require('moment-timezone');

// Array containing all timezones with relatives datas...
var timezones = [

	//Universal and conventional timezones...
	{timezone: "Etc/UTC", country_code: "NaNC", moment: moment.tz("Etc/UTC")},
	{timezone: "Etc/GMT", country_code: "NaNC", moment: moment.tz("Etc/GMT")},

	//African timezones...
	{timezone: "Africa/Abidjan", country_code: "CI", moment: moment.tz("Africa/Abidjan")},
	{timezone: "Africa/Accra", country_code: "GH", moment: moment.tz("Africa/Accra")},
	{timezone: "Africa/Addis_Ababa", country_code: "ET", moment: moment.tz("Africa/Addis_Ababa")},
	{timezone: "Africa/Algiers", country_code: "DZ", moment: moment.tz("Africa/Algiers")},
	{timezone: "Africa/Asmara", country_code: "ER", moment: moment.tz("Africa/Asmara")},
	{timezone: "Africa/Bamako", country_code: "ML", moment: moment.tz("Africa/Bamako")},
	{timezone: "Africa/Bangui", country_code: "CF", moment: moment.tz("Africa/Bangui")},
	{timezone: "Africa/Banjul", country_code: "GM", moment: moment.tz("Africa/Banjul")},
	{timezone: "Africa/Bissau", country_code: "GW", moment: moment.tz("Africa/Bissau")},
	{timezone: "Africa/Blantyre", country_code: "MW", moment: moment.tz("Africa/Blantyre")},
	{timezone: "Africa/Brazzaville", country_code: "CG", moment: moment.tz("Africa/Brazzaville")},
	{timezone: "Africa/Bujumbura", country_code: "BI", moment: moment.tz("Africa/Bujumbura")},
	{timezone: "Africa/Cairo", country_code: "EG", moment: moment.tz("Africa/Cairo")},
	{timezone: "Africa/Casablanca", country_code: "MA", moment: moment.tz("Africa/Casablanca")},
	{timezone: "Africa/Ceuta", country_code: "ES", moment: moment.tz("Africa/Ceuta")},
	{timezone: "Africa/Conakry", country_code: "GN", moment: moment.tz("Africa/Conakry")},
	{timezone: "Africa/Dakar", country_code: "SN", moment: moment.tz("Africa/Dakar")},
	{timezone: "Africa/Dar_es_Salaam", country_code: "TZ", moment: moment.tz("Africa/Dar_es_Salaam")},
	{timezone: "Africa/Djibouti", country_code: "DJ", moment: moment.tz("Africa/Djibouti")},
	{timezone: "Africa/Douala", country_code: "CM", moment: moment.tz("Africa/Douala")},
	{timezone: "Africa/El_Aaiun", country_code: "EH", moment: moment.tz("Africa/El_Aaiun")},
	{timezone: "Africa/Freetown", country_code: "SL", moment: moment.tz("Africa/Freetown")},
	{timezone: "Africa/Gaborone", country_code: "BW", moment: moment.tz("Africa/Gaborone")},
	{timezone: "Africa/Harare", country_code: "ZW", moment: moment.tz("Africa/Harare")},
	{timezone: "Africa/Johannesburg", country_code: "ZA", moment: moment.tz("Africa/Johannesburg")},
	{timezone: "Africa/Juba", country_code: "SS", moment: moment.tz("Africa/Juba")},
	{timezone: "Africa/Kampala", country_code: "UG", moment: moment.tz("Africa/Kampala")},
	{timezone: "Africa/Khartoum", country_code: "SD", moment: moment.tz("Africa/Khartoum")},
	{timezone: "Africa/Kigali", country_code: "RW", moment: moment.tz("Africa/Kigali")},
	{timezone: "Africa/Kinshasa", country_code: "CD", moment: moment.tz("Africa/Kinshasa")},
	{timezone: "Africa/Lagos", country_code: "NG", moment: moment.tz("Africa/Lagos")},
	{timezone: "Africa/Libreville", country_code: "GA", moment: moment.tz("Africa/Libreville")},
	{timezone: "Africa/Lome", country_code: "TG", moment: moment.tz("Africa/Lome")},
	{timezone: "Africa/Luanda", country_code: "AO", moment: moment.tz("Africa/Luanda")},
	{timezone: "Africa/Lubumbashi", country_code: "CD", moment: moment.tz("Africa/Lubumbashi")},
	{timezone: "Africa/Lusaka", country_code: "ZM", moment: moment.tz("Africa/Lusaka")},
	{timezone: "Africa/Malabo", country_code: "GQ", moment: moment.tz("Africa/Malabo")},
	{timezone: "Africa/Maputo", country_code: "MZ", moment: moment.tz("Africa/Maputo")},
	{timezone: "Africa/Maseru", country_code: "LS", moment: moment.tz("Africa/Maseru")},
	{timezone: "Africa/Mbabane", country_code: "SZ", moment: moment.tz("Africa/Mbabane")},
	{timezone: "Africa/Mogadishu", country_code: "SO", moment: moment.tz("Africa/Mogadishu")},
	{timezone: "Africa/Monrovia", country_code: "LR", moment: moment.tz("Africa/Monrovia")},
	{timezone: "Africa/Nairobi", country_code: "KE", moment: moment.tz("Africa/Nairobi")},
	{timezone: "Africa/Ndjamena", country_code: "TD", moment: moment.tz("Africa/Ndjamena")},
	{timezone: "Africa/Niamey", country_code: "NE", moment: moment.tz("Africa/Niamey")},
	{timezone: "Africa/Nouakchott", country_code: "MR", moment: moment.tz("Africa/Nouakchott")},
	{timezone: "Africa/Ouagadougou", country_code: "BF", moment: moment.tz("Africa/Ouagadougou")},
	{timezone: "Africa/Porto-Novo", country_code: "BJ", moment: moment.tz("Africa/Porto-Novo")},
	{timezone: "Africa/Sao_Tome", country_code: "ST", moment: moment.tz("Africa/Sao_Tome")},
	{timezone: "Africa/Tripoli", country_code: "LY", moment: moment.tz("Africa/Tripoli")},
	{timezone: "Africa/Tunis", country_code: "TN", moment: moment.tz("Africa/Tunis")},
	{timezone: "Africa/Windhoek", country_code: "NA", moment: moment.tz("Africa/Windhoek")},

	//American timezones...
	{timezone: "America/Adak", country_code: "US", moment: moment.tz("America/Adak")},
	{timezone: "America/Anchorage", country_code: "US", moment: moment.tz("America/Anchorage")},
	{timezone: "America/Anguilla", country_code: "AI", moment: moment.tz("America/Anguilla")},
	{timezone: "America/Antigua", country_code: "AG", moment: moment.tz("America/Antigua")},
	{timezone: "America/Araguaina", country_code: "BR", moment: moment.tz("America/Araguaina")},
	{timezone: "America/Argentina/Buenos_Aires", country_code: "AR", moment: moment.tz("America/Argentina/Buenos_Aires")},
	{timezone: "America/Argentina/Catamarca", country_code: "AR", moment: moment.tz("America/Argentina/Catamarca")},
	{timezone: "America/Argentina/Cordoba", country_code: "AR", moment: moment.tz("America/Argentina/Cordoba")},
	{timezone: "America/Argentina/Jujuy", country_code: "AR", moment: moment.tz("America/Argentina/Jujuy")},
	{timezone: "America/Argentina/La_Rioja", country_code: "AR", moment: moment.tz("America/Argentina/La_Rioja")},
	{timezone: "America/Argentina/Mendoza", country_code: "AR", weather_reference: "Mendoza", moment: moment.tz("America/Argentina/Mendoza")},
	{timezone: "America/Argentina/Rio_Gallegos", country_code: "AR", weather_reference: "Rio Gallegos", moment: moment.tz("America/Argentina/Rio_Gallegos")},
	{timezone: "America/Argentina/Salta", country_code: "AR", weather_reference: "Salta", moment: moment.tz("America/Argentina/Salta")},
	{timezone: "America/Argentina/San_Juan", country_code: "AR", weather_reference: "San Juan", moment: moment.tz("America/Argentina/San_Juan")},
	{timezone: "America/Argentina/San_Luis", country_code: "AR", weather_reference: "San Luis", moment: moment.tz("America/Argentina/San_Luis")},
	{timezone: "America/Argentina/Tucuman", country_code: "AR", weather_reference: "Tucuman", moment: moment.tz("America/Argentina/Tucuman")},
	{timezone: "America/Argentina/Ushuaia", country_code: "AR", weather_reference: "Ushuaia", moment: moment.tz("America/Argentina/Ushuaia")},
	{timezone: "America/Aruba", country_code: "AW", weather_reference: "Aruba", moment: moment.tz("America/Aruba")},
	{timezone: "America/Asuncion", country_code: "PY", moment: moment.tz("America/Asuncion")},
	{timezone: "America/Atikokan", country_code: "CA", moment: moment.tz("America/Atikokan")},
	{timezone: "America/Bahia", country_code: "BR", moment: moment.tz("America/Bahia")},
	{timezone: "America/Bahia_Banderas", country_code: "MX", moment: moment.tz("America/Bahia_Banderas")},
	{timezone: "America/Barbados", country_code: "BB", moment: moment.tz("America/Barbados")},
	{timezone: "America/Belem", country_code: "BR", moment: moment.tz("America/Belem")},
	{timezone: "America/Belize", country_code: "BZ", moment: moment.tz("America/Belize")},
	{timezone: "America/Blanc-Sablon", country_code: "CA", moment: moment.tz("America/Blanc-Sablon")},
	{timezone: "America/Boa_Vista", country_code: "BR", moment: moment.tz("America/Boa_Vista")},
	{timezone: "America/Bogota", country_code: "CO", moment: moment.tz("America/Bogota")},
	{timezone: "America/Boise", country_code: "US", moment: moment.tz("America/Boise")},
	{timezone: "America/Cambridge_Bay", country_code: "CA", moment: moment.tz("America/Cambridge_Bay")},
	{timezone: "America/Campo_Grande", country_code: "BR", moment: moment.tz("America/Campo_Grande")},
	{timezone: "America/Cancun", country_code: "MX", weather_reference: "Cancun", moment: moment.tz("America/Cancun")},
	{timezone: "America/Caracas", country_code: "VE", weather_reference: "Caracas", moment: moment.tz("America/Caracas")},
	{timezone: "America/Cayenne", country_code: "GF", weather_reference: "Cayenne", moment: moment.tz("America/Cayenne")},
	{timezone: "America/Cayman", country_code: "KY", weather_reference: "Cayman", moment: moment.tz("America/Cayman")},
	{timezone: "America/Chicago", country_code: "US", weather_reference: "Chicago", moment: moment.tz("America/Chicago")},
	{timezone: "America/Chihuahua", country_code: "MX", weather_reference: "Chihuahua", moment: moment.tz("America/Chihuahua")},
	{timezone: "America/Costa_Rica", country_code: "CR", weather_reference: "Costa Rica", moment: moment.tz("America/Costa_Rica")},
	{timezone: "America/Creston", country_code: "CA", weather_reference: "Creston", moment: moment.tz("America/Creston")},
	{timezone: "America/Cuiaba", country_code: "BR", weather_reference: "Cuiaba", moment: moment.tz("America/Cuiaba")},
	{timezone: "America/Curacao", country_code: "CW", weather_reference: "Curacao", moment: moment.tz("America/Curacao")},
	{timezone: "America/Danmarkshavn", country_code: "GL", weather_reference: "Danmarkshavn", moment: moment.tz("America/Danmarkshavn")},
	{timezone: "America/Dawson", country_code: "CA", weather_reference: "Dawson", moment: moment.tz("America/Dawson")},
	{timezone: "America/Dawson_Creek", country_code: "CA", weather_reference: "Dawson Creek", moment: moment.tz("America/Dawson_Creek")},
	{timezone: "America/Denver", country_code: "US", weather_reference: "Denver", moment: moment.tz("America/Denver")},
	{timezone: "America/Detroit", country_code: "US", weather_reference: "Detroit", moment: moment.tz("America/Detroit")},
	{timezone: "America/Dominica", country_code: "DM", weather_reference: "Dominica", moment: moment.tz("America/Dominica")},
	{timezone: "America/Edmonton", country_code: "CA", weather_reference: "Edmonton", moment: moment.tz("America/Edmonton")},
	{timezone: "America/Eirunepe", country_code: "BR", weather_reference: "Eirunepe", moment: moment.tz("America/Eirunepe")},
	{timezone: "America/El_Salvador", country_code: "SV", weather_reference: "El Salvador", moment: moment.tz("America/El_Salvador")},
	{timezone: "America/Fort_Nelson", country_code: "CA", weather_reference: "Fort Nelson", moment: moment.tz("America/Fort_Nelson")},
	{timezone: "America/Fortaleza", country_code: "CA", weather_reference: "Fortaleza", moment: moment.tz("America/Fortaleza")},
	{timezone: "America/Glace_Bay", country_code: "CA", weather_reference: "Glace Bay", moment: moment.tz("America/Glace_Bay")},
	{timezone: "America/Goose_Bay", country_code: "CA", weather_reference: "Goose Bay", moment: moment.tz("America/Goose_Bay")},
	{timezone: "America/Grand_Turk", country_code: "TC", weather_reference: "Cockburn Town", moment: moment.tz("America/Grand_Turk")},
	{timezone: "America/Grenada", country_code: "GD", weather_reference: "Grenada", moment: moment.tz("America/Grenada")},
	{timezone: "America/Guadeloupe", country_code: "GP", weather_reference: "Guadeloupe", moment: moment.tz("America/Guadeloupe")},
	{timezone: "America/Guyana", country_code: "GY", weather_reference: "Guyana", moment: moment.tz("America/Guyana")},
	{timezone: "America/Guayaquil", country_code: "EC", weather_reference: "Guayaquil", moment: moment.tz("America/Guayaquil")},
	{timezone: "America/Guyana", country_code: "GY", weather_reference: "Guyana", moment: moment.tz("America/Guyana")},
	{timezone: "America/Halifax", country_code: "CA", weather_reference: "Halifax", moment: moment.tz("America/Halifax")},
	{timezone: "America/Havana", country_code: "CU", weather_reference: "Havana", moment: moment.tz("America/Havana")},
	{timezone: "America/Hermosillo", country_code: "MX", weather_reference: "Hermosillo", moment: moment.tz("America/Hermosillo")},
	{timezone: "America/Indiana/Indianapolis", country_code: "US", weather_reference: "Indianapolis", moment: moment.tz("America/Indiana/Indianapolis")},
	{timezone: "America/Indiana/Knox", country_code: "US", weather_reference: "Knox", moment: moment.tz("America/Indiana/Knox")},
	{timezone: "America/Indiana/Marengo", country_code: "US", weather_reference: "Marengo", moment: moment.tz("America/Indiana/Marengo")},
	{timezone: "America/Indiana/Petersburg", country_code: "US", weather_reference: "Petersburg", moment: moment.tz("America/Indiana/Petersburg")},
	{timezone: "America/Indiana/Tell_City", country_code: "US", weather_reference: "Tell City", moment: moment.tz("America/Indiana/Tell_City")},
	{timezone: "America/Indiana/Vevay", country_code: "US", weather_reference: "Vevay", moment: moment.tz("America/Indiana/Vevay")},
	{timezone: "America/Indiana/Vincennes", country_code: "US", weather_reference: "Vincennes", moment: moment.tz("America/Indiana/Vincennes")},
	{timezone: "America/Indiana/Winamac", country_code: "US", weather_reference: "Winamac", moment: moment.tz("America/Indiana/Winamac")},
	{timezone: "America/Inuvik", country_code: "CA", weather_reference: "Inuvik", moment: moment.tz("America/Inuvik")},
	{timezone: "America/Iqaluit", country_code: "CA", weather_reference: "Iqaluit", moment: moment.tz("America/Iqaluit")},
	{timezone: "America/Jamaica", country_code: "JM", weather_reference: "Jamaica", moment: moment.tz("America/Jamaica")},
	{timezone: "America/Juneau", country_code: "US", weather_reference: "Juneau", moment: moment.tz("America/Juneau")},
	{timezone: "America/Kentucky/Louisville", country_code: "US", weather_reference: "Louisville", moment: moment.tz("America/Kentucky/Louisville")},
	{timezone: "America/Kentucky/Monticello", country_code: "US", weather_reference: "Monticello", moment: moment.tz("America/Kentucky/Monticello")},
	{timezone: "America/Kralendijk", country_code: "BQ", weather_reference: "Kralendijk", moment: moment.tz("America/Kralendijk")},
	{timezone: "America/La_Paz", country_code: "BO", weather_reference: "La Paz", moment: moment.tz("America/La_Paz")},
	{timezone: "America/Lima", country_code: "PM", weather_reference: "Lima", moment: moment.tz("America/Lima")},
	{timezone: "America/Los_Angeles", country_code: "US", weather_reference: "Los Angeles", moment: moment.tz("America/Los_Angeles")},
	{timezone: "America/Lower_Princes", country_code: "SX", weather_reference: "Sint Maarten", moment: moment.tz("America/Lower_Princes")},
	{timezone: "America/Maceio", country_code: "BR", weather_reference: "Maceio", moment: moment.tz("America/Maceio")},
	{timezone: "America/Managua", country_code: "NI", weather_reference: "Managua", moment: moment.tz("America/Managua")},
	{timezone: "America/Manaus", country_code: "BR", weather_reference: "Manaus", moment: moment.tz("America/Manaus")},
	{timezone: "America/Marigot", country_code: "MF", weather_reference: "Marigot", moment: moment.tz("America/Marigot")},
	{timezone: "America/Martinique", country_code: "MQ", weather_reference: "Martinique", moment: moment.tz("America/Martinique")},
	{timezone: "America/Matamoros", country_code: "MX", weather_reference: "Matamoros", moment: moment.tz("America/Matamoros")},
	{timezone: "America/Mazatlan", country_code: "MX", weather_reference: "Mazatlan", moment: moment.tz("America/Mazatlan")},
	{timezone: "America/Menominee", country_code: "US", weather_reference: "Menominee", moment: moment.tz("America/Menominee")},
	{timezone: "America/Merida", country_code: "MX", weather_reference: "Merida", moment: moment.tz("America/Merida")},
	{timezone: "America/Metlakatla", country_code: "US", weather_reference: "Metlakatla", moment: moment.tz("America/Metlakatla")},
	{timezone: "America/Mexico_City", country_code: "MX", weather_reference: "Mexico City", moment: moment.tz("America/Mexico_City")},
	{timezone: "America/Miquelon", country_code: "PM", weather_reference: "Miquelon", moment: moment.tz("America/Miquelon")},
	{timezone: "America/Moncton", country_code: "CA", weather_reference: "Moncton", moment: moment.tz("America/Moncton")},
	{timezone: "America/Monterrey", country_code: "MX", weather_reference: "Monterrey", moment: moment.tz("America/Monterrey")},
	{timezone: "America/Montevideo", country_code: "UY", weather_reference: "Montevideo", moment: moment.tz("America/Montevideo")},
	{timezone: "America/Montreal", country_code: "CA", weather_reference: "Montreal", moment: moment.tz("America/Montreal")},
	{timezone: "America/Montserrat", country_code: "MS", weather_reference: "Montserrat", moment: moment.tz("America/Montserrat")},
	{timezone: "America/Nassau", country_code: "BS", weather_reference: "Nassau", moment: moment.tz("America/Nassau")},
	{timezone: "America/New_York", country_code: "US", weather_reference: "New York City", moment: moment.tz("America/New_York")},
	{timezone: "America/Nipigon", country_code: "CA", weather_reference: "Nipigon", moment: moment.tz("America/Nipigon")},
	{timezone: "America/Nome", country_code: "US", weather_reference: "Nome", moment: moment.tz("America/Nome")},
	{timezone: "America/Noronha", country_code: "BR", weather_reference: "Noronha", moment: moment.tz("America/Noronha")},
	{timezone: "America/North_Dakota/Beulah", country_code: "US", weather_reference: "Beulah", moment: moment.tz("America/North_Dakota/Beulah")},
	{timezone: "America/North_Dakota/Center", country_code: "US", weather_reference: "Center", moment: moment.tz("America/North_Dakota/Center")},
	{timezone: "America/North_Dakota/New_Salem", country_code: "US", weather_reference: "New Salem", moment: moment.tz("America/North_Dakota/New_Salem")},
	{timezone: "America/Nuuk", country_code: "GL", weather_reference: "Nuuk", moment: moment.tz("America/Nuuk")},
	{timezone: "America/Ojinaga", country_code: "MX", weather_reference: "Ojinaga", moment: moment.tz("America/Ojinaga")},
	{timezone: "America/Panama", country_code: "PA", weather_reference: "Panama", moment: moment.tz("America/Panama")},
	{timezone: "America/Pangnirtung", country_code: "CA", weather_reference: "Pangnirtung", moment: moment.tz("America/Pangnirtung")},
	{timezone: "America/Paramaribo", country_code: "SR", weather_reference: "Paramaribo", moment: moment.tz("America/Paramaribo")},
	{timezone: "America/Phoenix", country_code: "US", weather_reference: "Phoenix", moment: moment.tz("America/Phoenix")},
	{timezone: "America/Port-au-Prince", country_code: "HT", weather_reference: "Port-au-Prince", moment: moment.tz("America/Port-au-Prince")},
	{timezone: "America/Port_of_Spain", country_code: "TT", weather_reference: "Port of Spain", moment: moment.tz("America/Port_of_Spain")},
	{timezone: "America/Porto_Velho", country_code: "BR", weather_reference: "Porto Velho", moment: moment.tz("America/Porto_Velho")},
	{timezone: "America/Puerto_Rico", country_code: "PR", weather_reference: "Puerto Rico", moment: moment.tz("America/Puerto_Rico")},
	{timezone: "America/Punta_Arenas", country_code: "CL", weather_reference: "Punta Arenas", moment: moment.tz("America/Punta_Arenas")},
	{timezone: "America/Rainy_River", country_code: "CA", weather_reference: "Rainy River", moment: moment.tz("America/Rainy_River")},
	{timezone: "America/Rankin_Inlet", country_code: "CA", weather_reference: "Rankin Inlet", moment: moment.tz("America/Rankin_Inlet")},
	{timezone: "America/Recife", country_code: "BR", weather_reference: "Recife", moment: moment.tz("America/Recife")},
	{timezone: "America/Regina", country_code: "CA", weather_reference: "Regina", moment: moment.tz("America/Regina")},
	{timezone: "America/Resolute", country_code: "CA", weather_reference: "Resolute", moment: moment.tz("America/Resolute")},
	{timezone: "America/Rio_Branco", country_code: "BR", weather_reference: "Rio Branco", moment: moment.tz("America/Rio_Branco")},
	{timezone: "America/Santarem", country_code: "BR", weather_reference: "Santarem", moment: moment.tz("America/Santarem")},
	{timezone: "America/Santiago", country_code: "CL", weather_reference: "Santiago", moment: moment.tz("America/Santiago")},
	{timezone: "America/Santo_Domingo", country_code: "DO", weather_reference: "Santo Domingo", moment: moment.tz("America/Santo_Domingo")},
	{timezone: "America/Sao_Paulo", country_code: "BR", weather_reference: "Sao Paulo", moment: moment.tz("America/Sao_Paulo")},
	{timezone: "America/Scoresbysund", country_code: "GL", weather_reference: "Scoresbysund", moment: moment.tz("America/Scoresbysund")},
	{timezone: "America/Sitka", country_code: "US", weather_reference: "Sitka", moment: moment.tz("America/Sitka")},
	{timezone: "America/St_Barthelemy", country_code: "BL", weather_reference: "Saint Barthelemy", moment: moment.tz("America/St_Barthelemy")},
	{timezone: "America/St_Johns", country_code: "CA", weather_reference: "St Johns", moment: moment.tz("America/St_Johns")},
	{timezone: "America/St_Kitts", country_code: "KN", weather_reference: "Saint Kitts", moment: moment.tz("America/St_Kitts")},
	{timezone: "America/St_Lucia", country_code: "LC", weather_reference: "Saint Lucia", moment: moment.tz("America/St_Lucia")},
	{timezone: "America/St_Thomas", country_code: "VI", weather_reference: "Charlotte Amalie", moment: moment.tz("America/St_Thomas")},
	{timezone: "America/St_Vincent", country_code: "VC", weather_reference: "Kingstown", moment: moment.tz("America/St_Vincent")},
	{timezone: "America/Swift_Current", country_code: "CA", weather_reference: "Swift Current", moment: moment.tz("America/Swift_Current")},
	{timezone: "America/Tegucigalpa", country_code: "HN", weather_reference: "Tegucigalpa", moment: moment.tz("America/Tegucigalpa")},
	{timezone: "America/Thule", country_code: "GL", weather_reference: "Thule", moment: moment.tz("America/Thule")},
	{timezone: "America/Thunder_Bay", country_code: "CA", weather_reference: "Thunder Bay", moment: moment.tz("America/Thunder_Bay")},
	{timezone: "America/Tijuana", country_code: "MX", weather_reference: "Tijuana", moment: moment.tz("America/Tijuana")},
	{timezone: "America/Toronto", country_code: "CA", weather_reference: "Toronto", moment: moment.tz("America/Toronto")},
	{timezone: "America/Tortola", country_code: "VG", weather_reference: "Tortola", moment: moment.tz("America/Tortola")},
	{timezone: "America/Vancouver", country_code: "CA", weather_reference: "Vancouver", moment: moment.tz("America/Vancouver")},
	{timezone: "America/Whitehorse", country_code: "CA", weather_reference: "Whitehorse", moment: moment.tz("America/Whitehorse")},
	{timezone: "America/Winnipeg", country_code: "CA", weather_reference: "Winnipeg", moment: moment.tz("America/Winnipeg")},
	{timezone: "America/Yakutat", country_code: "US", weather_reference: "Yakutat", moment: moment.tz("America/Yakutat")},
	{timezone: "America/Yellowknife", country_code: "CA", weather_reference: "Yellowknife", moment: moment.tz("America/Yellowknife")},

	//Antarctican timezones...
	{timezone: "Antarctica/Casey", country_code: "AQ", moment: moment.tz("Antarctica/Casey")},
	{timezone: "Antarctica/Davis", country_code: "AQ", moment: moment.tz("Antarctica/Davis")},
	{timezone: "Antarctica/DumontDUrville", country_code: "AQ", moment: moment.tz("Antarctica/DumontDUrville")},
	{timezone: "Antarctica/Macquarie", country_code: "AU", moment: moment.tz("Antarctica/Macquarie")},
	{timezone: "Antarctica/Mawson", country_code: "AQ", moment: moment.tz("Antarctica/Mawson")},
	{timezone: "Antarctica/McMurdo", country_code: "AQ", moment: moment.tz("Antarctica/McMurdo")},
	{timezone: "Antarctica/Palmer", country_code: "AQ", moment: moment.tz("Antarctica/Palmer")},
	{timezone: "Antarctica/Rothera", country_code: "AQ", moment: moment.tz("Antarctica/Rothera")},
	{timezone: "Antarctica/Syowa", country_code: "AQ", moment: moment.tz("Antarctica/Syowa")},
	{timezone: "Antarctica/Troll", country_code: "AQ", moment: moment.tz("Antarctica/Troll")},
	{timezone: "Antarctica/Vostok", country_code: "AQ", moment: moment.tz("Antarctica/Vostok")},

	//Arctic ocean's timezones...
	{timezone: "Arctic/Longyearbyen", country_code: "SJ", moment: moment.tz("Arctic/Longyearbyen")},

	//Asian timezones...
	{timezone: "Asia/Almaty", country_code: "KZ", moment: moment.tz("Asia/Almaty")},
	{timezone: "Asia/Amman", country_code: "JO", moment: moment.tz("Asia/Amman")},
	{timezone: "Asia/Anadyr", country_code: "RU", moment: moment.tz("Asia/Anadyr")},
	{timezone: "Asia/Aqtau", country_code: "KZ", moment: moment.tz("Asia/Aqtau")},
	{timezone: "Asia/Aqtobe", country_code: "KZ", moment: moment.tz("Asia/Aqtobe")},
	{timezone: "Asia/Ashgabat", country_code: "TM", moment: moment.tz("Asia/Ashgabat")},
	{timezone: "Asia/Atyrau", country_code: "KZ", moment: moment.tz("Asia/Atyrau")},
	{timezone: "Asia/Baghdad", country_code: "IQ", moment: moment.tz("Asia/Baghdad")},
	{timezone: "Asia/Bahrain", country_code: "BH", moment: moment.tz("Asia/Bahrain")},
	{timezone: "Asia/Baku", country_code: "AZ", moment: moment.tz("Asia/Baku")},
	{timezone: "Asia/Bangkok", country_code: "TH", moment: moment.tz("Asia/Bangkok")},
	{timezone: "Asia/Barnaul", country_code: "RU", moment: moment.tz("Asia/Barnaul")},
	{timezone: "Asia/Beirut", country_code: "LB", moment: moment.tz("Asia/Beirut")},
	{timezone: "Asia/Bishkek", country_code: "KG", moment: moment.tz("Asia/Bishkek")},
	{timezone: "Asia/Brunei", country_code: "BN", moment: moment.tz("Asia/Brunei")},
	{timezone: "Asia/Chita", country_code: "RU", moment: moment.tz("Asia/Chita")},
	{timezone: "Asia/Choibalsan", country_code: "MN", moment: moment.tz("Asia/Choibalsan")},
	{timezone: "Asia/Colombo", country_code: "LK", moment: moment.tz("Asia/Colombo")},
	{timezone: "Asia/Damascus", country_code: "SY", moment: moment.tz("Asia/Damascus")},
	{timezone: "Asia/Dhaka", country_code: "BD", moment: moment.tz("Asia/Dhaka")},
	{timezone: "Asia/Dili", country_code: "TL", moment: moment.tz("Asia/Dili")},
	{timezone: "Asia/Dubai", country_code: "AE", moment: moment.tz("Asia/Dubai")},
	{timezone: "Asia/Dushanbe", country_code: "TJ", moment: moment.tz("Asia/Dushanbe")},
	{timezone: "Asia/Famagusta", country_code: "CY", moment: moment.tz("Asia/Famagusta")},
	{timezone: "Asia/Gaza", country_code: "PS", moment: moment.tz("Asia/Gaza")},
	{timezone: "Asia/Hebron", country_code: "PS", moment: moment.tz("Asia/Hebron")},
	{timezone: "Asia/Ho_Chi_Minh", country_code: "VN", moment: moment.tz("Asia/Ho_Chi_Minh")},
	{timezone: "Asia/Hong_Kong", country_code: "HK", moment: moment.tz("Asia/Hong_Kong")},
	{timezone: "Asia/Hovd", country_code: "MN", moment: moment.tz("Asia/Hovd")},
	{timezone: "Asia/Irkutsk", country_code: "RU", moment: moment.tz("Asia/Irkutsk")},
	{timezone: "Asia/Istanbul", country_code: "TR", moment: moment.tz("Asia/Istanbul")},
	{timezone: "Asia/Jakarta", country_code: "ID", moment: moment.tz("Asia/Jakarta")},
	{timezone: "Asia/Jayapura", country_code: "ID", moment: moment.tz("Asia/Jayapura")},
	{timezone: "Asia/Jerusalem", country_code: "IL", moment: moment.tz("Asia/Jerusalem")},
	{timezone: "Asia/Kabul", country_code: "AF", moment: moment.tz("Asia/Kabul")},
	{timezone: "Asia/Kamchatka", country_code: "RU", moment: moment.tz("Asia/Kamchatka")},
	{timezone: "Asia/Karachi", country_code: "PK", moment: moment.tz("Asia/Karachi")},
	{timezone: "Asia/Kathmandu", country_code: "NP", moment: moment.tz("Asia/Kathmandu")},
	{timezone: "Asia/Khandyga", country_code: "RU", moment: moment.tz("Asia/Khandyga")},
	{timezone: "Asia/Kolkata", country_code: "IN", moment: moment.tz("Asia/Kolkata")},
	{timezone: "Asia/Krasnoyarsk", country_code: "RU", moment: moment.tz("Asia/Krasnoyarsk")},
	{timezone: "Asia/Kuala_Lumpur", country_code: "MY", moment: moment.tz("Asia/Kuala_Lumpur")},
	{timezone: "Asia/Kuching", country_code: "MY", moment: moment.tz("Asia/Kuching")},
	{timezone: "Asia/Kuwait", country_code: "KW", moment: moment.tz("Asia/Kuwait")},
	{timezone: "Asia/Macau", country_code: "MO", moment: moment.tz("Asia/Macau")},
	{timezone: "Asia/Magadan", country_code: "RU", moment: moment.tz("Asia/Magadan")},
	{timezone: "Asia/Makassar", country_code: "ID", moment: moment.tz("Asia/Makassar")},
	{timezone: "Asia/Manila", country_code: "PH", moment: moment.tz("Asia/Manila")},
	{timezone: "Asia/Muscat", country_code: "OM", moment: moment.tz("Asia/Muscat")},
	{timezone: "Asia/Nicosia", country_code: "CY", moment: moment.tz("Asia/Nicosia")},
	{timezone: "Asia/Novokuznetsk", country_code: "RU", moment: moment.tz("Asia/Novokuznetsk")},
	{timezone: "Asia/Novosibirsk", country_code: "RU", moment: moment.tz("Asia/Novosibirsk")},
	{timezone: "Asia/Omsk", country_code: "RU", moment: moment.tz("Asia/Omsk")},
	{timezone: "Asia/Oral", country_code: "KZ", moment: moment.tz("Asia/Oral")},
	{timezone: "Asia/Phnom_Penh", country_code: "KH", moment: moment.tz("Asia/Phnom_Penh")},
	{timezone: "Asia/Pontianak", country_code: "ID", moment: moment.tz("Asia/Pontianak")},
	{timezone: "Asia/Pyongyang", country_code: "KP", moment: moment.tz("Asia/Pyongyang")},
	{timezone: "Asia/Qatar", country_code: "QA", moment: moment.tz("Asia/Qatar")},
	{timezone: "Asia/Qostanay", country_code: "KZ", moment: moment.tz("Asia/Qostanay")},
	{timezone: "Asia/Qyzylorda", country_code: "KZ", moment: moment.tz("Asia/Qyzylorda")},
	{timezone: "Asia/Riyadh", country_code: "SA", moment: moment.tz("Asia/Riyadh")},
	{timezone: "Asia/Sakhalin", country_code: "RU", moment: moment.tz("Asia/Sakhalin")},
	{timezone: "Asia/Samarkand", country_code: "UZ", moment: moment.tz("Asia/Samarkand")},
	{timezone: "Asia/Seoul", country_code: "KR", moment: moment.tz("Asia/Seoul")},
	{timezone: "Asia/Shanghai", country_code: "CN", moment: moment.tz("Asia/Shanghai")},
	{timezone: "Asia/Singapore", country_code: "SG", moment: moment.tz("Asia/Singapore")},
	{timezone: "Asia/Srednekolymsk", country_code: "RU", moment: moment.tz("Asia/Srednekolymsk")},
	{timezone: "Asia/Taipei", country_code: "TW", moment: moment.tz("Asia/Taipei")},
	{timezone: "Asia/Tashkent", country_code: "UZ", moment: moment.tz("Asia/Tashkent")},
	{timezone: "Asia/Tbilisi", country_code: "GE", moment: moment.tz("Asia/Tbilisi")},
	{timezone: "Asia/Tehran", country_code: "IR", moment: moment.tz("Asia/Tehran")},
	{timezone: "Asia/Thimphu", country_code: "BT", moment: moment.tz("Asia/Thimphu")},
	{timezone: "Asia/Tokyo", country_code: "JP", moment: moment.tz("Asia/Tokyo")},
	{timezone: "Asia/Tomsk", country_code: "RU", moment: moment.tz("Asia/Tomsk")},
	{timezone: "Asia/Ulaanbaatar", country_code: "MN", moment: moment.tz("Asia/Ulaanbaatar")},
	{timezone: "Asia/Urumqi", country_code: "CN", moment: moment.tz("Asia/Urumqi")},
	{timezone: "Asia/Ust-Nera", country_code: "RU", moment: moment.tz("Asia/Ust-Nera")},
	{timezone: "Asia/Vientiane", country_code: "LA", moment: moment.tz("Asia/Vientiane")},
	{timezone: "Asia/Vladivostok", country_code: "RU", moment: moment.tz("Asia/Vladivostok")},
	{timezone: "Asia/Yakutsk", country_code: "RU", moment: moment.tz("Asia/Yakutsk")},
	{timezone: "Asia/Yangon", country_code: "MM", moment: moment.tz("Asia/Yangon")},
	{timezone: "Asia/Yekaterinburg", country_code: "RU", moment: moment.tz("Asia/Yekaterinburg")},
	{timezone: "Asia/Yerevan", country_code: "AM", moment: moment.tz("Asia/Yerevan")},

	//Atlantic ocean's timezones...
	{timezone: "Atlantic/Azores", country_code: "PT", moment: moment.tz("Atlantic/Azores")},
	{timezone: "Atlantic/Bermuda", country_code: "BM", moment: moment.tz("Atlantic/Bermuda")},
	{timezone: "Atlantic/Canary", country_code: "ES", moment: moment.tz("Atlantic/Canary")},
	{timezone: "Atlantic/Cape_Verde", country_code: "CV", moment: moment.tz("Atlantic/Cape_Verde")},
	{timezone: "Atlantic/Faroe", country_code: "FO", moment: moment.tz("Atlantic/Faroe")},
	{timezone: "Atlantic/Madeira", country_code: "PT", moment: moment.tz("Atlantic/Madeira")},
	{timezone: "Atlantic/Reykjavik", country_code: "IS", moment: moment.tz("Atlantic/Reykjavik")},
	{timezone: "Atlantic/South_Georgia", country_code: "GS", moment: moment.tz("Atlantic/South_Georgia")},
	{timezone: "Atlantic/St_Helena", country_code: "SH", moment: moment.tz("Atlantic/St_Helena")},
	{timezone: "Atlantic/Stanley", country_code: "FK", moment: moment.tz("Atlantic/Stanley")},

	//Australian timezones...
	{timezone: "Australia/Adelaide", country_code: "AU", moment: moment.tz("Australia/Adelaide")},
	{timezone: "Australia/Brisbane", country_code: "AU", moment: moment.tz("Australia/Brisbane")},
	{timezone: "Australia/Broken_Hill", country_code: "AU", moment: moment.tz("Australia/Broken_Hill")},
	{timezone: "Australia/Currie", country_code: "AU", moment: moment.tz("Australia/Currie")},
	{timezone: "Australia/Darwin", country_code: "AU", moment: moment.tz("Australia/Darwin")},
	{timezone: "Australia/Eucla", country_code: "AU", moment: moment.tz("Australia/Eucla")},
	{timezone: "Australia/Hobart", country_code: "AU", moment: moment.tz("Australia/Hobart")},
	{timezone: "Australia/Lindeman", country_code: "AU", moment: moment.tz("Australia/Lindeman")},
	{timezone: "Australia/Lord_Howe", country_code: "AU", moment: moment.tz("Australia/Lord_Howe")},
	{timezone: "Australia/Melbourne", country_code: "AU", moment: moment.tz("Australia/Melbourne")},
	{timezone: "Australia/Perth", country_code: "AU", moment: moment.tz("Australia/Perth")},
	{timezone: "Australia/Sydney", country_code: "AU", moment: moment.tz("Australia/Sydney")},

	//European timezones...
	{timezone: "Europe/Amsterdam", country_code: "NL", moment: moment.tz("Europe/Amsterdam")},
	{timezone: "Europe/Andorra", country_code: "AD", moment: moment.tz("Europe/Andorra")},
	{timezone: "Europe/Astrakhan", country_code: "RU", moment: moment.tz("Europe/Astrakhan")},
	{timezone: "Europe/Athens", country_code: "GR", moment: moment.tz("Europe/Athens")},
	{timezone: "Europe/Belgrade", country_code: "RS", moment: moment.tz("Europe/Belgrade")},
	{timezone: "Europe/Berlin", country_code: "DE", moment: moment.tz("Europe/Berlin")},
	{timezone: "Europe/Bratislava", country_code: "SK", moment: moment.tz("Europe/Bratislava")},
	{timezone: "Europe/Brussels", country_code: "BE", moment: moment.tz("Europe/Brussels")},
	{timezone: "Europe/Bucharest", country_code: "RO", moment: moment.tz("Europe/Bucharest")},
	{timezone: "Europe/Budapest", country_code: "HU", moment: moment.tz("Europe/Budapest")},
	{timezone: "Europe/Busingen", country_code: "DE", moment: moment.tz("Europe/Busingen")},
	{timezone: "Europe/Chisinau", country_code: "MD", moment: moment.tz("Europe/Chisinau")},
	{timezone: "Europe/Copenhagen", country_code: "DK", moment: moment.tz("Europe/Copenhagen")},
	{timezone: "Europe/Dublin", country_code: "IE", moment: moment.tz("Europe/Dublin")},
	{timezone: "Europe/Gibraltar", country_code: "GI", moment: moment.tz("Europe/Gibraltar")},
	{timezone: "Europe/Guernsey", country_code: "GG", moment: moment.tz("Europe/Guernsey")},
	{timezone: "Europe/Helsinki", country_code: "FI", moment: moment.tz("Europe/Helsinki")},
	{timezone: "Europe/Isle_of_Man", country_code: "IM", moment: moment.tz("Europe/Isle_of_Man")},
	{timezone: "Europe/Istanbul", country_code: "TR", moment: moment.tz("Europe/Istanbul")},
	{timezone: "Europe/Jersey", country_code: "JE", moment: moment.tz("Europe/Jersey")},
	{timezone: "Europe/Kaliningrad", country_code: "RU", moment: moment.tz("Europe/Kaliningrad")},
	{timezone: "Europe/Kiev", country_code: "UA", moment: moment.tz("Europe/Kiev")},
	{timezone: "Europe/Kirov", country_code: "RU", moment: moment.tz("Europe/Kirov")},
	{timezone: "Europe/Lisbon", country_code: "PT", moment: moment.tz("Europe/Lisbon")},
	{timezone: "Europe/Ljubljana", country_code: "SI", moment: moment.tz("Europe/Ljubljana")},
	{timezone: "Europe/London", country_code: "GB", moment: moment.tz("Europe/London")},
	{timezone: "Europe/Luxembourg", country_code: "LU", moment: moment.tz("Europe/Luxembourg")},
	{timezone: "Europe/Madrid", country_code: "ES", moment: moment.tz("Europe/Madrid")},
	{timezone: "Europe/Malta", country_code: "MT", moment: moment.tz("Europe/Malta")},
	{timezone: "Europe/Mariehamn", country_code: "AX", moment: moment.tz("Europe/Mariehamn")},
	{timezone: "Europe/Minsk", country_code: "BY", moment: moment.tz("Europe/Minsk")},
	{timezone: "Europe/Monaco", country_code: "MC", moment: moment.tz("Europe/Monaco")},
	{timezone: "Europe/Moscow", country_code: "RU", moment: moment.tz("Europe/Moscow")},
	{timezone: "Europe/Nicosia", country_code: "CY", moment: moment.tz("Europe/Nicosia")},
	{timezone: "Europe/Oslo", country_code: "NO", moment: moment.tz("Europe/Oslo")},
	{timezone: "Europe/Paris", country_code: "FR", moment: moment.tz("Europe/Paris")},
	{timezone: "Europe/Podgorica", country_code: "ME", moment: moment.tz("Europe/Podgorica")},
	{timezone: "Europe/Prague", country_code: "CZ", moment: moment.tz("Europe/Prague")},
	{timezone: "Europe/Riga", country_code: "LV", moment: moment.tz("Europe/Riga")},
	{timezone: "Europe/Rome", country_code: "IT", moment: moment.tz("Europe/Rome")},
	{timezone: "Europe/Samara", country_code: "RU", moment: moment.tz("Europe/Samara")},
	{timezone: "Europe/San_Marino", country_code: "SM", moment: moment.tz("Europe/San_Marino")},
	{timezone: "Europe/Sarajevo", country_code: "BA", moment: moment.tz("Europe/Sarajevo")},
	{timezone: "Europe/Saratov", country_code: "RU", moment: moment.tz("Europe/Saratov")},
	{timezone: "Europe/Simferopol", country_code: "UA", moment: moment.tz("Europe/Simferopol")},
	{timezone: "Europe/Skopje", country_code: "MK", moment: moment.tz("Europe/Skopje")},
	{timezone: "Europe/Sofia", country_code: "BG", moment: moment.tz("Europe/Sofia")},
	{timezone: "Europe/Stockholm", country_code: "SE", moment: moment.tz("Europe/Stockholm")},
	{timezone: "Europe/Tallinn", country_code: "EE", moment: moment.tz("Europe/Tallinn")},
	{timezone: "Europe/Tirane", country_code: "AL", moment: moment.tz("Europe/Tirane")},
	{timezone: "Europe/Ulyanovsk", country_code: "RU", moment: moment.tz("Europe/Ulyanovsk")},
	{timezone: "Europe/Uzhgorod", country_code: "UA", moment: moment.tz("Europe/Uzhgorod")},
	{timezone: "Europe/Vaduz", country_code: "LI", moment: moment.tz("Europe/Vaduz")},
	{timezone: "Europe/Vatican", country_code: "VA", moment: moment.tz("Europe/Vatican")},
	{timezone: "Europe/Vienna", country_code: "AT", moment: moment.tz("Europe/Vienna")},
	{timezone: "Europe/Vilnius", country_code: "LT", moment: moment.tz("Europe/Vilnius")},
	{timezone: "Europe/Volgograd", country_code: "RU", moment: moment.tz("Europe/Volgograd")},
	{timezone: "Europe/Warsaw", country_code: "PL", moment: moment.tz("Europe/Warsaw")},
	{timezone: "Europe/Zagreb", country_code: "HR", moment: moment.tz("Europe/Zagreb")},
	{timezone: "Europe/Zaporozhye", country_code: "UA", moment: moment.tz("Europe/Zaporozhye")},
	{timezone: "Europe/Zurich", country_code: "CH", moment: moment.tz("Europe/Zurich")},

	//Indian ocean's timezones...
	{timezone: "Indian/Antananarivo", country_code: "MG", moment: moment.tz("Indian/Antananarivo")},
	{timezone: "Indian/Chagos", country_code: "IO", moment: moment.tz("Indian/Chagos")},
	{timezone: "Indian/Christmas", country_code: "CX", moment: moment.tz("Indian/Christmas")},
	{timezone: "Indian/Cocos", country_code: "CC", moment: moment.tz("Indian/Cocos")},
	{timezone: "Indian/Comoro", country_code: "KM", moment: moment.tz("Indian/Comoro")},
	{timezone: "Indian/Kerguelen", country_code: "TF", moment: moment.tz("Indian/Kerguelen")},
	{timezone: "Indian/Mahe", country_code: "SC", moment: moment.tz("Indian/Mahe")},
	{timezone: "Indian/Maldives", country_code: "MV", moment: moment.tz("Indian/Maldives")},
	{timezone: "Indian/Mauritius", country_code: "MU", moment: moment.tz("Indian/Mauritius")},
	{timezone: "Indian/Mayotte", country_code: "YT", moment: moment.tz("Indian/Mayotte")},
	{timezone: "Indian/Reunion", country_code: "RE", moment: moment.tz("Indian/Reunion")},

	//Pacific ocean's timezones...
	{timezone: "Pacific/Apia", country_code: "WS", moment: moment.tz("Pacific/Apia")},
	{timezone: "Pacific/Auckland", country_code: "NZ", moment: moment.tz("Pacific/Auckland")},
	{timezone: "Pacific/Bougainville", country_code: "PG", moment: moment.tz("Pacific/Bougainville")},
	{timezone: "Pacific/Chatham", country_code: "NZ", moment: moment.tz("Pacific/Chatham")},
	{timezone: "Pacific/Chuuk", country_code: "FM", moment: moment.tz("Pacific/Chuuk")},
	{timezone: "Pacific/Easter", country_code: "CL", moment: moment.tz("Pacific/Easter")},
	{timezone: "Pacific/Efate", country_code: "VU", moment: moment.tz("Pacific/Efate")},
	{timezone: "Pacific/Enderbury", country_code: "KI", moment: moment.tz("Pacific/Enderbury")},
	{timezone: "Pacific/Fakaofo", country_code: "TK", moment: moment.tz("Pacific/Fakaofo")},
	{timezone: "Pacific/Fiji", country_code: "FJ", moment: moment.tz("Pacific/Fiji")},
	{timezone: "Pacific/Funafuti", country_code: "TV", moment: moment.tz("Pacific/Funafuti")},
	{timezone: "Pacific/Galapagos", country_code: "EC", moment: moment.tz("Pacific/Galapagos")},
	{timezone: "Pacific/Gambier", country_code: "PF", moment: moment.tz("Pacific/Gambier")},
	{timezone: "Pacific/Guadalcanal", country_code: "SB", moment: moment.tz("Pacific/Guadalcanal")},
	{timezone: "Pacific/Guam", country_code: "GU", moment: moment.tz("Pacific/Guam")},
	{timezone: "Pacific/Honolulu", country_code: "US", moment: moment.tz("Pacific/Honolulu")},
	{timezone: "Pacific/Kiritimati", country_code: "KI", moment: moment.tz("Pacific/Kiritimati")},
	{timezone: "Pacific/Kosrae", country_code: "FM", moment: moment.tz("Pacific/Kosrae")},
	{timezone: "Pacific/Kwajalein", country_code: "MH", moment: moment.tz("Pacific/Kwajalein")},
	{timezone: "Pacific/Majuro", country_code: "MH", moment: moment.tz("Pacific/Majuro")},
	{timezone: "Pacific/Marquesas", country_code: "PF", moment: moment.tz("Pacific/Marquesas")},
	{timezone: "Pacific/Midway", country_code: "US", moment: moment.tz("Pacific/Midway")},
	{timezone: "Pacific/Nauru", country_code: "NR", moment: moment.tz("Pacific/Nauru")},
	{timezone: "Pacific/Niue", country_code: "NU", moment: moment.tz("Pacific/Niue")},
	{timezone: "Pacific/Norfolk", country_code: "NF", moment: moment.tz("Pacific/Norfolk")},
	{timezone: "Pacific/Noumea", country_code: "NC", moment: moment.tz("Pacific/Noumea")},
	{timezone: "Pacific/Pago_Pago", country_code: "AS", moment: moment.tz("Pacific/Pago_Pago")},
	{timezone: "Pacific/Palau", country_code: "PW", moment: moment.tz("Pacific/Palau")},
	{timezone: "Pacific/Pitcairn", country_code: "PN", moment: moment.tz("Pacific/Pitcairn")},
	{timezone: "Pacific/Pohnpei", country_code: "FM", moment: moment.tz("Pacific/Pohnpei")},
	{timezone: "Pacific/Port_Moresby", country_code: "PG", moment: moment.tz("Pacific/Port_Moresby")},
	{timezone: "Pacific/Rarotonga", country_code: "CK", moment: moment.tz("Pacific/Rarotonga")},
	{timezone: "Pacific/Saipan", country_code: "MP", moment: moment.tz("Pacific/Saipan")},
	{timezone: "Pacific/Tahiti", country_code: "PF", moment: moment.tz("Pacific/Tahiti")},
	{timezone: "Pacific/Tarawa", country_code: "KI", moment: moment.tz("Pacific/Tarawa")},
	{timezone: "Pacific/Tongatapu", country_code: "TO", moment: moment.tz("Pacific/Tongatapu")},
	{timezone: "Pacific/Wake", country_code: "UM", moment: moment.tz("Pacific/Wake")},
	{timezone: "Pacific/Wallis", country_code: "WF", moment: moment.tz("Pacific/Wallis")}
];

// Definition of the 'getCountryCodeFromOneTimezone' function to identify and return the country code of the 'wishedTimezone' timezone...
function getCountryCodeFromOneTimezone(wishedTimezone) {

	// Definition of the 'wishedCountryCode' variable which will contain the found country code...
	var wishedCountryCode = "";

	// Browse for each element contained in the 'timezones' array...
	for(var i = 0; i < timezones.length; i++)
	{
		// If the current element of the 'timezones' array corresponds to the desired timezone...
		if(timezones[i].timezone === wishedTimezone) {

			// Affectation of the found country code to the 'wishedCountryCode' variable...
			wishedCountryCode = timezones[i].country_code;

			// Leaving the loop...
			break;
		}
	}

	//
	return wishedCountryCode;
}

// Definition of the 'getDatTimeForMultipleTimezones' function to return date and time (in a format specified by the 'dateAndTimeFormat' variable) from an array containing all wished timezones named 'wishedTimezonesArray' passed as an argument...
function getDatTimeForMultipleTimezones(wishedTimezonesArray, dateAndTimeFormat = "X") {

	// Definition of the 'wishedTimezonesMomentsAssociativeArray' variable which will contain all moments for every wished timezones...
	var wishedTimezonesMomentsAssociativeArray = {};

	//
	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		//
		for(var j = 0; j < timezones.length; j++)
		{
			//
			if(wishedTimezonesArray[i] === timezones[j].timezone) {

				//
				wishedTimezonesMomentsAssociativeArray[timezones[j].timezone] = timezones[j].moment.format(dateAndTimeFormat);

				// Leaving the second loop...
				break;
			}
		}
	}

	//
	return wishedTimezonesMomentsAssociativeArray;
}

// Definition of the 'getDateTimeForOneTimezone' function to return date and time (in a format specified by the 'dateAndTimeFormat' variable) from string containing the wished timezone named 'wishedTimezone' passed as an argument...
function getDateTimeForOneTimezone(wishedTimezone, dateAndTimeFormat = "X") {

	// Definition of the 'wishedTimezonesMomentsAssociativeArray' variable which will contain all moments for every wished timezones...
	var wishedTimezoneMomentAssociativeArray = {};

	//
	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		//
		if(wishedTimezonesArray[i] === wishedTimezone) {

				//
				wishedTimezoneMomentAssociativeArray[wishedTimezonesArray[i].timezone] = wishedTimezonesArray[i].moment.format(dateAndTimeFormat);

				// Leaving the loop...
				break;
		}
	}

	//
	return wishedTimezoneMomentAssociativeArray;
}

// Export all defined functions to extract datas from timezones...
module.exports = {

	'getCountryCodeFromOneTimezone': getCountryCodeFromOneTimezone,
	'getDatTimeForMultipleTimezones': getDatTimeForMultipleTimezones,
	'getDateTimeForOneTimezone': getDateTimeForOneTimezone
}