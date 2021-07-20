// import the 'moment-timezone' NPM module...
var moment = require('moment-timezone');

// Array containing all timezones with relatives datas...
var timezones = [

	//Universal and conventional timezones...
	{timezone: "Etc/UTC", country_code_ISO_3166_1_alpha_2: null, country_code_ISO_3166_1_alpha_3: null, country_code_ISO_3166_1_numeric: null, country: null, flag: null, moment: moment.tz("Etc/UTC")},
	{timezone: "Etc/GMT", country_code_ISO_3166_1_alpha_2: null, country_code_ISO_3166_1_alpha_3: null, country_code_ISO_3166_1_numeric: null, country: null, flag: null, moment: moment.tz("Etc/GMT")},

	//African timezones...
	{timezone: "Africa/Abidjan", country_code_ISO_3166_1_alpha_2: "CI", country_code_ISO_3166_1_alpha_3: "CIV", country_code_ISO_3166_1_numeric: "384", country: "Ivory Coast", flag: "https://flagcdn.com/h40/ci.png", moment: moment.tz("Africa/Abidjan")},
	{timezone: "Africa/Accra", country_code_ISO_3166_1_alpha_2: "GH", country: "Ghana", flag: "https://flagcdn.com/h40/gh.png", moment: moment.tz("Africa/Accra")},
	{timezone: "Africa/Addis_Ababa", country_code_ISO_3166_1_alpha_2: "ET", country: "Ethiopia", flag: "https://flagcdn.com/h40/et.png", moment: moment.tz("Africa/Addis_Ababa")},
	{timezone: "Africa/Algiers", country_code_ISO_3166_1_alpha_2: "DZ", country: "Algeria", flag: "https://flagcdn.com/h40/dz.png", moment: moment.tz("Africa/Algiers")},
	{timezone: "Africa/Asmara", country_code_ISO_3166_1_alpha_2: "ER", country: "Eritrea", flag: "https://flagcdn.com/h40/er.png", moment: moment.tz("Africa/Asmara")},
	{timezone: "Africa/Bamako", country_code_ISO_3166_1_alpha_2: "ML", country: "Mali", flag: "https://flagcdn.com/h40/ml.png", moment: moment.tz("Africa/Bamako")},
	{timezone: "Africa/Bangui", country_code_ISO_3166_1_alpha_2: "CF", country: "Central African Republic", flag: "https://flagcdn.com/h40/cf.png", moment: moment.tz("Africa/Bangui")},
	{timezone: "Africa/Banjul", country_code_ISO_3166_1_alpha_2: "GM", country: "The Gambia", flag: "https://flagcdn.com/h40/gm.png", moment: moment.tz("Africa/Banjul")},
	{timezone: "Africa/Bissau", country_code_ISO_3166_1_alpha_2: "GW", country: "Guinea-Bissau", flag: "https://flagcdn.com/h40/gw.png", moment: moment.tz("Africa/Bissau")},
	{timezone: "Africa/Blantyre", country_code_ISO_3166_1_alpha_2: "MW", country: "Malawi", flag: "https://flagcdn.com/h40/mw.png", moment: moment.tz("Africa/Blantyre")},
	{timezone: "Africa/Brazzaville", country_code_ISO_3166_1_alpha_2: "CG", country: "Republic of the Congo", flag: "https://flagcdn.com/h40/cg.png", moment: moment.tz("Africa/Brazzaville")},
	{timezone: "Africa/Bujumbura", country_code_ISO_3166_1_alpha_2: "BI", country: "Burundi", flag: "https://flagcdn.com/h40/bi.png", moment: moment.tz("Africa/Bujumbura")},
	{timezone: "Africa/Cairo", country_code_ISO_3166_1_alpha_2: "EG", country: "Egypt", flag: "https://flagcdn.com/h40/eg.png", moment: moment.tz("Africa/Cairo")},
	{timezone: "Africa/Casablanca", country_code_ISO_3166_1_alpha_2: "MA", country: "Morocco", flag: "https://flagcdn.com/h40/ma.png", moment: moment.tz("Africa/Casablanca")},
	{timezone: "Africa/Ceuta", country_code_ISO_3166_1_alpha_2: "ES", country: "Spain", flag: "https://flagcdn.com/h40/es.png", moment: moment.tz("Africa/Ceuta")},
	{timezone: "Africa/Conakry", country_code_ISO_3166_1_alpha_2: "GN", country: "Guinea", flag: "https://flagcdn.com/h40/gn.png", moment: moment.tz("Africa/Conakry")},
	{timezone: "Africa/Dakar", country_code_ISO_3166_1_alpha_2: "SN", country: "Senegal", flag: "https://flagcdn.com/h40/sn.png", moment: moment.tz("Africa/Dakar")},
	{timezone: "Africa/Dar_es_Salaam", country_code_ISO_3166_1_alpha_2: "TZ", country: "Tanzania", flag: "https://flagcdn.com/h40/tz.png", moment: moment.tz("Africa/Dar_es_Salaam")},
	{timezone: "Africa/Djibouti", country_code_ISO_3166_1_alpha_2: "DJ", country: "Djibouti", flag: "https://flagcdn.com/h40/dj.png", moment: moment.tz("Africa/Djibouti")},
	{timezone: "Africa/Douala", country_code_ISO_3166_1_alpha_2: "CM", country: "Cameroon", flag: "https://flagcdn.com/h40/cm.png", moment: moment.tz("Africa/Douala")},
	{timezone: "Africa/El_Aaiun", country_code_ISO_3166_1_alpha_2: "EH", country: "Western Sahara", flag: "https://flagcdn.com/h40/eh.png", moment: moment.tz("Africa/El_Aaiun")},
	{timezone: "Africa/Freetown", country_code_ISO_3166_1_alpha_2: "SL", country: "Sierra Leone", flag: "https://flagcdn.com/h40/sl.png", moment: moment.tz("Africa/Freetown")},
	{timezone: "Africa/Gaborone", country_code_ISO_3166_1_alpha_2: "BW", country: "Botswana", flag: "https://flagcdn.com/h40/bw.png", moment: moment.tz("Africa/Gaborone")},
	{timezone: "Africa/Harare", country_code_ISO_3166_1_alpha_2: "ZW", country: "Zimbabwe", flag: "https://flagcdn.com/h40/zw.png", moment: moment.tz("Africa/Harare")},
	{timezone: "Africa/Johannesburg", country_code_ISO_3166_1_alpha_2: "ZA", country: "South Africa", flag: "https://flagcdn.com/h40/za.png", moment: moment.tz("Africa/Johannesburg")},
	{timezone: "Africa/Juba", country_code_ISO_3166_1_alpha_2: "SS", country: "South Sudan", flag: "https://flagcdn.com/h40/ss.png", moment: moment.tz("Africa/Juba")},
	{timezone: "Africa/Kampala", country_code_ISO_3166_1_alpha_2: "UG", country: "Uganda", flag: "https://flagcdn.com/h40/ug.png", moment: moment.tz("Africa/Kampala")},
	{timezone: "Africa/Khartoum", country_code_ISO_3166_1_alpha_2: "SD", country: "Sudan", flag: "https://flagcdn.com/h40/sd.png", moment: moment.tz("Africa/Khartoum")},
	{timezone: "Africa/Kigali", country_code_ISO_3166_1_alpha_2: "RW", country: "Rwanda", flag: "https://flagcdn.com/h40/rw.png", moment: moment.tz("Africa/Kigali")},
	{timezone: "Africa/Kinshasa", country_code_ISO_3166_1_alpha_2: "CD", country: "Democratic Republic of the Congo", flag: "https://flagcdn.com/h40/cd.png", moment: moment.tz("Africa/Kinshasa")},
	{timezone: "Africa/Lagos", country_code_ISO_3166_1_alpha_2: "NG", country: "Nigeria", flag: "https://flagcdn.com/h40/ng.png", moment: moment.tz("Africa/Lagos")},
	{timezone: "Africa/Libreville", country_code_ISO_3166_1_alpha_2: "GA", country: "Gabon", flag: "https://flagcdn.com/h40/ga.png", moment: moment.tz("Africa/Libreville")},
	{timezone: "Africa/Lome", country_code_ISO_3166_1_alpha_2: "TG", country: "Togo", flag: "https://flagcdn.com/h40/tg.png", moment: moment.tz("Africa/Lome")},
	{timezone: "Africa/Luanda", country_code_ISO_3166_1_alpha_2: "AO", country: "Angola", flag: "https://flagcdn.com/h40/ao.png", moment: moment.tz("Africa/Luanda")},
	{timezone: "Africa/Lubumbashi", country_code_ISO_3166_1_alpha_2: "CD", country: "Democratic Republic of the Congo", flag: "https://flagcdn.com/h40/cd.png", moment: moment.tz("Africa/Lubumbashi")},
	{timezone: "Africa/Lusaka", country_code_ISO_3166_1_alpha_2: "ZM", country: "Zambia", flag: "https://flagcdn.com/h40/zm.png", moment: moment.tz("Africa/Lusaka")},
	{timezone: "Africa/Malabo", country_code_ISO_3166_1_alpha_2: "GQ", country: "Equatorial Guinea", flag: "https://flagcdn.com/h40/gq.png", moment: moment.tz("Africa/Malabo")},
	{timezone: "Africa/Maputo", country_code_ISO_3166_1_alpha_2: "MZ", country: "Mozambique", flag: "https://flagcdn.com/h40/mz.png", moment: moment.tz("Africa/Maputo")},
	{timezone: "Africa/Maseru", country_code_ISO_3166_1_alpha_2: "LS", country: "Lesotho", flag: "https://flagcdn.com/h40/ls.png", moment: moment.tz("Africa/Maseru")},
	{timezone: "Africa/Mbabane", country_code_ISO_3166_1_alpha_2: "SZ", country: "Eswatini", flag: "https://flagcdn.com/h40/sz.png", moment: moment.tz("Africa/Mbabane")},
	{timezone: "Africa/Mogadishu", country_code_ISO_3166_1_alpha_2: "SO", country: "Somalia", flag: "https://flagcdn.com/h40/so.png", moment: moment.tz("Africa/Mogadishu")},
	{timezone: "Africa/Monrovia", country_code_ISO_3166_1_alpha_2: "LR", country: "Liberia", flag: "https://flagcdn.com/h40/lr.png", moment: moment.tz("Africa/Monrovia")},
	{timezone: "Africa/Nairobi", country_code_ISO_3166_1_alpha_2: "KE", country: "Kenya", flag: "https://flagcdn.com/h40/ke.png", moment: moment.tz("Africa/Nairobi")},
	{timezone: "Africa/Ndjamena", country_code_ISO_3166_1_alpha_2: "TD", country: "Chad", flag: "https://flagcdn.com/h40/td.png", moment: moment.tz("Africa/Ndjamena")},
	{timezone: "Africa/Niamey", country_code_ISO_3166_1_alpha_2: "NE", country: "Niger", flag: "https://flagcdn.com/h40/ne.png", moment: moment.tz("Africa/Niamey")},
	{timezone: "Africa/Nouakchott", country_code_ISO_3166_1_alpha_2: "MR", country: "Mauritania", flag: "https://flagcdn.com/h40/mr.png", moment: moment.tz("Africa/Nouakchott")},
	{timezone: "Africa/Ouagadougou", country_code_ISO_3166_1_alpha_2: "BF", country: "Burkina Faso", flag: "https://flagcdn.com/h40/bf.png", moment: moment.tz("Africa/Ouagadougou")},
	{timezone: "Africa/Porto-Novo", country_code_ISO_3166_1_alpha_2: "BJ", country: "Benin", flag: "https://flagcdn.com/h40/bj.png", moment: moment.tz("Africa/Porto-Novo")},
	{timezone: "Africa/Sao_Tome", country_code_ISO_3166_1_alpha_2: "ST", country: "São Tomé and Príncipe", flag: "https://flagcdn.com/h40/st.png", moment: moment.tz("Africa/Sao_Tome")},
	{timezone: "Africa/Tripoli", country_code_ISO_3166_1_alpha_2: "LY", country: "Libya", flag: "https://flagcdn.com/h40/ly.png", moment: moment.tz("Africa/Tripoli")},
	{timezone: "Africa/Tunis", country_code_ISO_3166_1_alpha_2: "TN", country: "Tunisia", flag: "https://flagcdn.com/h40/tn.png", moment: moment.tz("Africa/Tunis")},
	{timezone: "Africa/Windhoek", country_code_ISO_3166_1_alpha_2: "NA", country: "Namibia", flag: "https://flagcdn.com/h40/na.png", moment: moment.tz("Africa/Windhoek")},

	//American timezones...
	{timezone: "America/Adak", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Adak")},
	{timezone: "America/Anchorage", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Anchorage")},
	{timezone: "America/Anguilla", country_code_ISO_3166_1_alpha_2: "AI", country: "Anguilla", flag: "https://flagcdn.com/h40/ai.png", moment: moment.tz("America/Anguilla")},
	{timezone: "America/Antigua", country_code_ISO_3166_1_alpha_2: "AG", country: "Antigua and Barbuda", flag: "https://flagcdn.com/h40/ag.png", moment: moment.tz("America/Antigua")},
	{timezone: "America/Araguaina", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Araguaina")},
	{timezone: "America/Argentina/Buenos_Aires", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Buenos_Aires")},
	{timezone: "America/Argentina/Catamarca", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Catamarca")},
	{timezone: "America/Argentina/Cordoba", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Cordoba")},
	{timezone: "America/Argentina/Jujuy", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Jujuy")},
	{timezone: "America/Argentina/La_Rioja", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/La_Rioja")},
	{timezone: "America/Argentina/Mendoza", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Mendoza")},
	{timezone: "America/Argentina/Rio_Gallegos", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Rio_Gallegos")},
	{timezone: "America/Argentina/Salta", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Salta")},
	{timezone: "America/Argentina/San_Juan", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/San_Juan")},
	{timezone: "America/Argentina/San_Luis", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/San_Luis")},
	{timezone: "America/Argentina/Tucuman", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Tucuman")},
	{timezone: "America/Argentina/Ushuaia", country_code_ISO_3166_1_alpha_2: "AR", country: "Argentina", flag: "https://flagcdn.com/h40/ar.png", moment: moment.tz("America/Argentina/Ushuaia")},
	{timezone: "America/Aruba", country_code_ISO_3166_1_alpha_2: "AW", country: "Aruba", flag: "https://flagcdn.com/h40/aw.png", moment: moment.tz("America/Aruba")},
	{timezone: "America/Asuncion", country_code_ISO_3166_1_alpha_2: "PY", country: "Paraguay", flag: "https://flagcdn.com/h40/py.png", moment: moment.tz("America/Asuncion")},
	{timezone: "America/Atikokan", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Atikokan")},
	{timezone: "America/Bahia", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Bahia")},
	{timezone: "America/Bahia_Banderas", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Bahia_Banderas")},
	{timezone: "America/Barbados", country_code_ISO_3166_1_alpha_2: "BB", country: "Barbados", flag: "https://flagcdn.com/h40/bb.png", moment: moment.tz("America/Barbados")},
	{timezone: "America/Belem", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Belem")},
	{timezone: "America/Belize", country_code_ISO_3166_1_alpha_2: "BZ", country: "Belize", flag: "https://flagcdn.com/h40/bz.png", moment: moment.tz("America/Belize")},
	{timezone: "America/Blanc-Sablon", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Blanc-Sablon")},
	{timezone: "America/Boa_Vista", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Boa_Vista")},
	{timezone: "America/Bogota", country_code_ISO_3166_1_alpha_2: "CO", country: "Colombia", flag: "https://flagcdn.com/h40/co.png", moment: moment.tz("America/Bogota")},
	{timezone: "America/Boise", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Boise")},
	{timezone: "America/Cambridge_Bay", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Cambridge_Bay")},
	{timezone: "America/Campo_Grande", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Campo_Grande")},
	{timezone: "America/Cancun", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Cancun")},
	{timezone: "America/Caracas", country_code_ISO_3166_1_alpha_2: "VE", country: "Venezuela", flag: "https://flagcdn.com/h40/ve.png", moment: moment.tz("America/Caracas")},
	{timezone: "America/Cayenne", country_code_ISO_3166_1_alpha_2: "GF", country: "French Guiana", flag: "https://flagcdn.com/h40/gf.png", moment: moment.tz("America/Cayenne")},
	{timezone: "America/Cayman", country_code_ISO_3166_1_alpha_2: "KY", country: "Cayman Islands", flag: "https://flagcdn.com/h40/ky.png", moment: moment.tz("America/Cayman")},
	{timezone: "America/Chicago", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Chicago")},
	{timezone: "America/Chihuahua", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Chihuahua")},
	{timezone: "America/Costa_Rica", country_code_ISO_3166_1_alpha_2: "CR", country: "Costa Rica", flag: "https://flagcdn.com/h40/cr.png", moment: moment.tz("America/Costa_Rica")},
	{timezone: "America/Creston", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Creston")},
	{timezone: "America/Cuiaba", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Cuiaba")},
	{timezone: "America/Curacao", country_code_ISO_3166_1_alpha_2: "CW", country: "Curaçao", flag: "https://flagcdn.com/h40/cw.png", moment: moment.tz("America/Curacao")},
	{timezone: "America/Danmarkshavn", country_code_ISO_3166_1_alpha_2: "GL", country: "Greenland", flag: "https://flagcdn.com/h40/gl.png", moment: moment.tz("America/Danmarkshavn")},
	{timezone: "America/Dawson", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Dawson")},
	{timezone: "America/Dawson_Creek", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Dawson_Creek")},
	{timezone: "America/Denver", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Denver")},
	{timezone: "America/Detroit", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Detroit")},
	{timezone: "America/Dominica", country_code_ISO_3166_1_alpha_2: "DM", country: "Dominica", flag: "https://flagcdn.com/h40/dm.png", moment: moment.tz("America/Dominica")},
	{timezone: "America/Edmonton", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Edmonton")},
	{timezone: "America/Eirunepe", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Eirunepe")},
	{timezone: "America/El_Salvador", country_code_ISO_3166_1_alpha_2: "SV", country: "El Salvador", flag: "https://flagcdn.com/h40/sv.png", moment: moment.tz("America/El_Salvador")},
	{timezone: "America/Fort_Nelson", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Fort_Nelson")},
	{timezone: "America/Fortaleza", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Fortaleza")},
	{timezone: "America/Glace_Bay", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Glace_Bay")},
	{timezone: "America/Goose_Bay", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Goose_Bay")},
	{timezone: "America/Grand_Turk", country_code_ISO_3166_1_alpha_2: "TC", country: "Grand Turk Island", flag: "https://flagcdn.com/h40/tc.png", moment: moment.tz("America/Grand_Turk")},
	{timezone: "America/Grenada", country_code_ISO_3166_1_alpha_2: "GD", country: "Grenada", flag: "https://flagcdn.com/h40/gd.png", moment: moment.tz("America/Grenada")},
	{timezone: "America/Guadeloupe", country_code_ISO_3166_1_alpha_2: "GP", country: "Guadeloupe", flag: "https://flagcdn.com/h40/gp.png", moment: moment.tz("America/Guadeloupe")},
	{timezone: "America/Guatemala", country_code_ISO_3166_1_alpha_2: "GT", country: "Guatemala", flag: "https://flagcdn.com/h40/gt.png", moment: moment.tz("America/Guatemala")},
	{timezone: "America/Guayaquil", country_code_ISO_3166_1_alpha_2: "EC", country: "Ecuador", flag: "https://flagcdn.com/h40/ec.png", moment: moment.tz("America/Guayaquil")},
	{timezone: "America/Guyana", country_code_ISO_3166_1_alpha_2: "GY", country: "Guyana", flag: "https://flagcdn.com/h40/gy.png", moment: moment.tz("America/Guyana")},
	{timezone: "America/Halifax", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Halifax")},
	{timezone: "America/Havana", country_code_ISO_3166_1_alpha_2: "CU", country: "Cuba", flag: "https://flagcdn.com/h40/cu.png", moment: moment.tz("America/Havana")},
	{timezone: "America/Hermosillo", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Hermosillo")},
	{timezone: "America/Indiana/Indianapolis", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Indiana/Indianapolis")},
	{timezone: "America/Indiana/Knox", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Indiana/Knox")},
	{timezone: "America/Indiana/Marengo", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Indiana/Marengo")},
	{timezone: "America/Indiana/Petersburg", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Indiana/Petersburg")},
	{timezone: "America/Indiana/Tell_City", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Indiana/Tell_City")},
	{timezone: "America/Indiana/Vevay", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Indiana/Vevay")},
	{timezone: "America/Indiana/Vincennes", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Indiana/Vincennes")},
	{timezone: "America/Indiana/Winamac", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Indiana/Winamac")},
	{timezone: "America/Inuvik", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Inuvik")},
	{timezone: "America/Iqaluit", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Iqaluit")},
	{timezone: "America/Jamaica", country_code_ISO_3166_1_alpha_2: "JM", country: "Jamaica", flag: "https://flagcdn.com/h40/jm.png", moment: moment.tz("America/Jamaica")},
	{timezone: "America/Juneau", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Juneau")},
	{timezone: "America/Kentucky/Louisville", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Kentucky/Louisville")},
	{timezone: "America/Kentucky/Monticello", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Kentucky/Monticello")},
	{timezone: "America/Kralendijk", country_code_ISO_3166_1_alpha_2: "BQ", country: "Bonaire", flag: "https://flagcdn.com/h40/bq.png", moment: moment.tz("America/Kralendijk")},
	{timezone: "America/La_Paz", country_code_ISO_3166_1_alpha_2: "BO", country: "Bolivia", flag: "https://flagcdn.com/h40/bo.png", moment: moment.tz("America/La_Paz")},
	{timezone: "America/Lima", country_code_ISO_3166_1_alpha_2: "PE", country: "Peru", flag: "https://flagcdn.com/h40/pe.png", moment: moment.tz("America/Lima")},
	{timezone: "America/Los_Angeles", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Los_Angeles")},
	{timezone: "America/Lower_Princes", country_code_ISO_3166_1_alpha_2: "SX", country: "Sint Maarten", flag: "https://flagcdn.com/h40/sx.png", moment: moment.tz("America/Lower_Princes")},
	{timezone: "America/Maceio", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Maceio")},
	{timezone: "America/Managua", country_code_ISO_3166_1_alpha_2: "NI", country: "Nicaragua", flag: "https://flagcdn.com/h40/ni.png", moment: moment.tz("America/Managua")},
	{timezone: "America/Manaus", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Manaus")},
	{timezone: "America/Marigot", country_code_ISO_3166_1_alpha_2: "MF", country: "Saint Martin", flag: "https://flagcdn.com/h40/mf.png", moment: moment.tz("America/Marigot")},
	{timezone: "America/Martinique", country_code_ISO_3166_1_alpha_2: "MQ", country: "Martinique", flag: "https://flagcdn.com/h40/mq.png", moment: moment.tz("America/Martinique")},
	{timezone: "America/Matamoros", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Matamoros")},
	{timezone: "America/Mazatlan", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Mazatlan")},
	{timezone: "America/Menominee", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Menominee")},
	{timezone: "America/Merida", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Merida")},
	{timezone: "America/Metlakatla", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Metlakatla")},
	{timezone: "America/Mexico_City", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Mexico_City")},
	{timezone: "America/Miquelon", country_code_ISO_3166_1_alpha_2: "PM", country: "Saint Pierre and Miquelon", flag: "https://flagcdn.com/h40/pm.png", moment: moment.tz("America/Miquelon")},
	{timezone: "America/Moncton", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Moncton")},
	{timezone: "America/Monterrey", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Monterrey")},
	{timezone: "America/Montevideo", country_code_ISO_3166_1_alpha_2: "UY", country: "Uruguay", flag: "https://flagcdn.com/h40/uy.png", moment: moment.tz("America/Montevideo")},
	{timezone: "America/Montreal", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Montreal")},
	{timezone: "America/Montserrat", country_code_ISO_3166_1_alpha_2: "MS", country: "Montserrat", flag: "https://flagcdn.com/h40/ms.png", moment: moment.tz("America/Montserrat")},
	{timezone: "America/Nassau", country_code_ISO_3166_1_alpha_2: "BS", country: "The Bahamas", flag: "https://flagcdn.com/h40/bs.png", moment: moment.tz("America/Nassau")},
	{timezone: "America/New_York", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/New_York")},
	{timezone: "America/Nipigon", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Nipigon")},
	{timezone: "America/Nome", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Nome")},
	{timezone: "America/Noronha", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Noronha")},
	{timezone: "America/North_Dakota/Beulah", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/North_Dakota/Beulah")},
	{timezone: "America/North_Dakota/Center", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/North_Dakota/Center")},
	{timezone: "America/North_Dakota/New_Salem", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/North_Dakota/New_Salem")},
	{timezone: "America/Nuuk", country_code_ISO_3166_1_alpha_2: "GL", country: "Greenland", flag: "https://flagcdn.com/h40/gl.png", moment: moment.tz("America/Nuuk")},
	{timezone: "America/Ojinaga", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Ojinaga")},
	{timezone: "America/Panama", country_code_ISO_3166_1_alpha_2: "PA", country: "Panama", flag: "https://flagcdn.com/h40/pa.png", moment: moment.tz("America/Panama")},
	{timezone: "America/Pangnirtung", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Pangnirtung")},
	{timezone: "America/Paramaribo", country_code_ISO_3166_1_alpha_2: "SR", country: "Suriname", flag: "https://flagcdn.com/h40/sr.png", moment: moment.tz("America/Paramaribo")},
	{timezone: "America/Phoenix", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Phoenix")},
	{timezone: "America/Port-au-Prince", country_code_ISO_3166_1_alpha_2: "HT", country: "Haiti", flag: "https://flagcdn.com/h40/ht.png", moment: moment.tz("America/Port-au-Prince")},
	{timezone: "America/Port_of_Spain", country_code_ISO_3166_1_alpha_2: "TT", country: "Trinidad and Tobago", flag: "https://flagcdn.com/h40/tt.png", moment: moment.tz("America/Port_of_Spain")},
	{timezone: "America/Porto_Velho", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Porto_Velho")},
	{timezone: "America/Puerto_Rico", country_code_ISO_3166_1_alpha_2: "PR", country: "Puerto Rico", flag: "https://flagcdn.com/h40/pr.png", moment: moment.tz("America/Puerto_Rico")},
	{timezone: "America/Punta_Arenas", country_code_ISO_3166_1_alpha_2: "CL", country: "Chile", flag: "https://flagcdn.com/h40/cl.png", moment: moment.tz("America/Punta_Arenas")},
	{timezone: "America/Rainy_River", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Rainy_River")},
	{timezone: "America/Rankin_Inlet", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Rankin_Inlet")},
	{timezone: "America/Recife", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Recife")},
	{timezone: "America/Regina", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Regina")},
	{timezone: "America/Resolute", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Resolute")},
	{timezone: "America/Rio_Branco", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Rio_Branco")},
	{timezone: "America/Santarem", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Santarem")},
	{timezone: "America/Santiago", country_code_ISO_3166_1_alpha_2: "CL", country: "Chile", flag: "https://flagcdn.com/h40/cl.png", moment: moment.tz("America/Santiago")},
	{timezone: "America/Santo_Domingo", country_code_ISO_3166_1_alpha_2: "DO", country: "Dominican Republic", flag: "https://flagcdn.com/h40/do.png", moment: moment.tz("America/Santo_Domingo")},
	{timezone: "America/Sao_Paulo", country_code_ISO_3166_1_alpha_2: "BR", country: "Brazil", flag: "https://flagcdn.com/h40/br.png", moment: moment.tz("America/Sao_Paulo")},
	{timezone: "America/Scoresbysund", country_code_ISO_3166_1_alpha_2: "GL", country: "Greenland", flag: "https://flagcdn.com/h40/gl.png", moment: moment.tz("America/Scoresbysund")},
	{timezone: "America/Sitka", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Sitka")},
	{timezone: "America/St_Barthelemy", country_code_ISO_3166_1_alpha_2: "BL", country: "Saint Barthélemy", flag: "https://flagcdn.com/h40/bl.png", moment: moment.tz("America/St_Barthelemy")},
	{timezone: "America/St_Johns", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/St_Johns")},
	{timezone: "America/St_Kitts", country_code_ISO_3166_1_alpha_2: "KN", country: "Saint Kitts and Nevis", flag: "https://flagcdn.com/h40/kn.png", moment: moment.tz("America/St_Kitts")},
	{timezone: "America/St_Lucia", country_code_ISO_3166_1_alpha_2: "LC", country: "Saint Lucia", flag: "https://flagcdn.com/h40/lc.png", moment: moment.tz("America/St_Lucia")},
	{timezone: "America/St_Thomas", country_code_ISO_3166_1_alpha_2: "VI", country: "U.S. Virgin Islands", flag: "https://flagcdn.com/h40/vi.png", moment: moment.tz("America/St_Thomas")},
	{timezone: "America/St_Vincent", country_code_ISO_3166_1_alpha_2: "VC", country: "Saint-Vincent-et-les-Grenadines", flag: "https://flagcdn.com/h40/vc.png", moment: moment.tz("America/St_Vincent")},
	{timezone: "America/Swift_Current", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Swift_Current")},
	{timezone: "America/Tegucigalpa", country_code_ISO_3166_1_alpha_2: "HN", country: "Honduras", flag: "https://flagcdn.com/h40/hn.png", moment: moment.tz("America/Tegucigalpa")},
	{timezone: "America/Thule", country_code_ISO_3166_1_alpha_2: "GL", country: "Greenland", flag: "https://flagcdn.com/h40/gl.png", moment: moment.tz("America/Thule")},
	{timezone: "America/Thunder_Bay", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Thunder_Bay")},
	{timezone: "America/Tijuana", country_code_ISO_3166_1_alpha_2: "MX", country: "Mexico", flag: "https://flagcdn.com/h40/mx.png", moment: moment.tz("America/Tijuana")},
	{timezone: "America/Toronto", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Toronto")},
	{timezone: "America/Tortola", country_code_ISO_3166_1_alpha_2: "VG", country: "British Virgin Islands", flag: "https://flagcdn.com/h40/vg.png", moment: moment.tz("America/Tortola")},
	{timezone: "America/Vancouver", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Vancouver")},
	{timezone: "America/Whitehorse", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Whitehorse")},
	{timezone: "America/Winnipeg", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Winnipeg")},
	{timezone: "America/Yakutat", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("America/Yakutat")},
	{timezone: "America/Yellowknife", country_code_ISO_3166_1_alpha_2: "CA", country: "Canada", flag: "https://flagcdn.com/h40/ca.png", moment: moment.tz("America/Yellowknife")},

	//Antarctican timezones...
	{timezone: "Antarctica/Casey", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Casey")},
	{timezone: "Antarctica/Davis", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Davis")},
	{timezone: "Antarctica/DumontDUrville", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/DumontDUrville")},
	{timezone: "Antarctica/Macquarie", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Macquarie")},
	{timezone: "Antarctica/Mawson", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Mawson")},
	{timezone: "Antarctica/McMurdo", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/McMurdo")},
	{timezone: "Antarctica/Palmer", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Palmer")},
	{timezone: "Antarctica/Rothera", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Rothera")},
	{timezone: "Antarctica/Syowa", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Syowa")},
	{timezone: "Antarctica/Troll", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Troll")},
	{timezone: "Antarctica/Vostok", country_code_ISO_3166_1_alpha_2: "AQ", country_code_ISO_3166_1_alpha_3: "ATA", country_code_ISO_3166_1_numeric: "010", country: "Antarctica", flag: "https://flagcdn.com/h40/aq.png", moment: moment.tz("Antarctica/Vostok")},

	//Arctic ocean's timezones...
	{timezone: "Arctic/Longyearbyen", country_code_ISO_3166_1_alpha_2: "SJ", country: "Svalbard and Jan Mayen", flag: "https://flagcdn.com/h40/sj.png", moment: moment.tz("Arctic/Longyearbyen")},

	//Asian timezones...
	{timezone: "Asia/Almaty", country_code_ISO_3166_1_alpha_2: "KZ", country: "Kazakhstan", flag: "https://flagcdn.com/h40/kz.png", moment: moment.tz("Asia/Almaty")},
	{timezone: "Asia/Amman", country_code_ISO_3166_1_alpha_2: "JO", country: "Jordan", flag: "https://flagcdn.com/h40/jo.png", moment: moment.tz("Asia/Amman")},
	{timezone: "Asia/Anadyr", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Anadyr")},
	{timezone: "Asia/Aqtau", country_code_ISO_3166_1_alpha_2: "KZ", country: "Kazakhstan", flag: "https://flagcdn.com/h40/kz.png", moment: moment.tz("Asia/Aqtau")},
	{timezone: "Asia/Aqtobe", country_code_ISO_3166_1_alpha_2: "KZ", country: "Kazakhstan", flag: "https://flagcdn.com/h40/kz.png", moment: moment.tz("Asia/Aqtobe")},
	{timezone: "Asia/Ashgabat", country_code_ISO_3166_1_alpha_2: "TM", country: "Turkmenistan", flag: "https://flagcdn.com/h40/tm.png", moment: moment.tz("Asia/Ashgabat")},
	{timezone: "Asia/Atyrau", country_code_ISO_3166_1_alpha_2: "KZ", country: "Kazakhstan", flag: "https://flagcdn.com/h40/kz.png", moment: moment.tz("Asia/Atyrau")},
	{timezone: "Asia/Baghdad", country_code_ISO_3166_1_alpha_2: "IQ", country: "Iraq", flag: "https://flagcdn.com/h40/iq.png", moment: moment.tz("Asia/Baghdad")},
	{timezone: "Asia/Bahrain", country_code_ISO_3166_1_alpha_2: "BH", country: "Bahrain", flag: "https://flagcdn.com/h40/bh.png", moment: moment.tz("Asia/Bahrain")},
	{timezone: "Asia/Baku", country_code_ISO_3166_1_alpha_2: "AZ", country: "Azerbaijan", flag: "https://flagcdn.com/h40/az.png", moment: moment.tz("Asia/Baku")},
	{timezone: "Asia/Bangkok", country_code_ISO_3166_1_alpha_2: "TH", country: "Thailand", flag: "https://flagcdn.com/h40/th.png", moment: moment.tz("Asia/Bangkok")},
	{timezone: "Asia/Barnaul", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Barnaul")},
	{timezone: "Asia/Beirut", country_code_ISO_3166_1_alpha_2: "LB", country: "Lebabon", flag: "https://flagcdn.com/h40/lb.png", moment: moment.tz("Asia/Beirut")},
	{timezone: "Asia/Bishkek", country_code_ISO_3166_1_alpha_2: "KG", country: "Kyrgyzstan", flag: "https://flagcdn.com/h40/kg.png", moment: moment.tz("Asia/Bishkek")},
	{timezone: "Asia/Brunei", country_code_ISO_3166_1_alpha_2: "BN", country: "Brunei", flag: "https://flagcdn.com/h40/bn.png", moment: moment.tz("Asia/Brunei")},
	{timezone: "Asia/Chita", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Chita")},
	{timezone: "Asia/Choibalsan", country_code_ISO_3166_1_alpha_2: "MN", country: "Mongolia", flag: "https://flagcdn.com/h40/mn.png", moment: moment.tz("Asia/Choibalsan")},
	{timezone: "Asia/Colombo", country_code_ISO_3166_1_alpha_2: "LK", country: "Sri Lanka", flag: "https://flagcdn.com/h40/lk.png", moment: moment.tz("Asia/Colombo")},
	{timezone: "Asia/Damascus", country_code_ISO_3166_1_alpha_2: "SY", country: "Syria", flag: "https://flagcdn.com/h40/sy.png", moment: moment.tz("Asia/Damascus")},
	{timezone: "Asia/Dhaka", country_code_ISO_3166_1_alpha_2: "BD", country: "Bangladesh", flag: "https://flagcdn.com/h40/bd.png", moment: moment.tz("Asia/Dhaka")},
	{timezone: "Asia/Dili", country_code_ISO_3166_1_alpha_2: "TL", country: "East Timor", flag: "https://flagcdn.com/h40/tl.png", moment: moment.tz("Asia/Dili")},
	{timezone: "Asia/Dubai", country_code_ISO_3166_1_alpha_2: "AE", country: "United Arab Emirates", flag: "https://flagcdn.com/h40/ae.png", moment: moment.tz("Asia/Dubai")},
	{timezone: "Asia/Dushanbe", country_code_ISO_3166_1_alpha_2: "TJ", country: "Tajikistan", flag: "https://flagcdn.com/h40/tj.png", moment: moment.tz("Asia/Dushanbe")},
	{timezone: "Asia/Famagusta", country_code_ISO_3166_1_alpha_2: "CY", country: "Cyprus", flag: "https://flagcdn.com/h40/cy.png", moment: moment.tz("Asia/Famagusta")},
	{timezone: "Asia/Gaza", country_code_ISO_3166_1_alpha_2: "PS", country: "Palestine", flag: "https://flagcdn.com/h40/ps.png", moment: moment.tz("Asia/Gaza")},
	{timezone: "Asia/Hebron", country_code_ISO_3166_1_alpha_2: "PS", country: "Palestine", flag: "https://flagcdn.com/h40/ps.png", moment: moment.tz("Asia/Hebron")},
	{timezone: "Asia/Ho_Chi_Minh", country_code_ISO_3166_1_alpha_2: "VN", country: "Vietnam", flag: "https://flagcdn.com/h40/vn.png", moment: moment.tz("Asia/Ho_Chi_Minh")},
	{timezone: "Asia/Hong_Kong", country_code_ISO_3166_1_alpha_2: "HK", country: "Hong Kong", flag: "https://flagcdn.com/h40/hk.png", moment: moment.tz("Asia/Hong_Kong")},
	{timezone: "Asia/Hovd", country_code_ISO_3166_1_alpha_2: "MN", country: "Mongolia", flag: "https://flagcdn.com/h40/mn.png", moment: moment.tz("Asia/Hovd")},
	{timezone: "Asia/Irkutsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Irkutsk")},
	{timezone: "Asia/Istanbul", country_code_ISO_3166_1_alpha_2: "TR", country: "Turkey", flag: "https://flagcdn.com/h40/tr.png", moment: moment.tz("Asia/Istanbul")},
	{timezone: "Asia/Jakarta", country_code_ISO_3166_1_alpha_2: "ID", country: "Indonesia", flag: "https://flagcdn.com/h40/id.png", moment: moment.tz("Asia/Jakarta")},
	{timezone: "Asia/Jayapura", country_code_ISO_3166_1_alpha_2: "ID", country: "Indonesia", flag: "https://flagcdn.com/h40/id.png", moment: moment.tz("Asia/Jayapura")},
	{timezone: "Asia/Jerusalem", country_code_ISO_3166_1_alpha_2: "IL", country: "Israel", flag: "https://flagcdn.com/h40/il.png", moment: moment.tz("Asia/Jerusalem")},
	{timezone: "Asia/Kabul", country_code_ISO_3166_1_alpha_2: "AF", country: "Afghanistan", flag: "https://flagcdn.com/h40/af.png", moment: moment.tz("Asia/Kabul")},
	{timezone: "Asia/Kamchatka", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Kamchatka")},
	{timezone: "Asia/Karachi", country_code_ISO_3166_1_alpha_2: "PK", country: "Pakistan", flag: "https://flagcdn.com/h40/pk.png", moment: moment.tz("Asia/Karachi")},
	{timezone: "Asia/Kathmandu", country_code_ISO_3166_1_alpha_2: "NP", country: "Nepal", flag: "https://flagcdn.com/h40/np.png", moment: moment.tz("Asia/Kathmandu")},
	{timezone: "Asia/Khandyga", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Khandyga")},
	{timezone: "Asia/Kolkata", country_code_ISO_3166_1_alpha_2: "IN", country: "India", flag: "https://flagcdn.com/h40/in.png", moment: moment.tz("Asia/Kolkata")},
	{timezone: "Asia/Krasnoyarsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Krasnoyarsk")},
	{timezone: "Asia/Kuala_Lumpur", country_code_ISO_3166_1_alpha_2: "MY", country: "Malaysia", flag: "https://flagcdn.com/h40/my.png", moment: moment.tz("Asia/Kuala_Lumpur")},
	{timezone: "Asia/Kuching", country_code_ISO_3166_1_alpha_2: "MY", country: "Malaysia", flag: "https://flagcdn.com/h40/my.png", moment: moment.tz("Asia/Kuching")},
	{timezone: "Asia/Kuwait", country_code_ISO_3166_1_alpha_2: "KW", country: "Kuwait", flag: "https://flagcdn.com/h40/kw.png", moment: moment.tz("Asia/Kuwait")},
	{timezone: "Asia/Macau", country_code_ISO_3166_1_alpha_2: "MO", country: "Macau", flag: "https://flagcdn.com/h40/mo.png", moment: moment.tz("Asia/Macau")},
	{timezone: "Asia/Magadan", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Magadan")},
	{timezone: "Asia/Makassar", country_code_ISO_3166_1_alpha_2: "ID", country: "Indonesia", flag: "https://flagcdn.com/h40/id.png", moment: moment.tz("Asia/Makassar")},
	{timezone: "Asia/Manila", country_code_ISO_3166_1_alpha_2: "PH", country: "Philippines", flag: "https://flagcdn.com/h40/ph.png", moment: moment.tz("Asia/Manila")},
	{timezone: "Asia/Muscat", country_code_ISO_3166_1_alpha_2: "OM", country: "Oman", flag: "https://flagcdn.com/h40/om.png", moment: moment.tz("Asia/Muscat")},
	{timezone: "Asia/Nicosia", country_code_ISO_3166_1_alpha_2: "CY", country: "Cyprus", flag: "https://flagcdn.com/h40/cy.png", moment: moment.tz("Asia/Nicosia")},
	{timezone: "Asia/Novokuznetsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Novokuznetsk")},
	{timezone: "Asia/Novosibirsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Novosibirsk")},
	{timezone: "Asia/Omsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Omsk")},
	{timezone: "Asia/Oral", country_code_ISO_3166_1_alpha_2: "KZ", country: "Kazakhstan", flag: "https://flagcdn.com/h40/kz.png", moment: moment.tz("Asia/Oral")},
	{timezone: "Asia/Phnom_Penh", country_code_ISO_3166_1_alpha_2: "KH", country: "Cambodia", flag: "https://flagcdn.com/h40/kh.png", moment: moment.tz("Asia/Phnom_Penh")},
	{timezone: "Asia/Pontianak", country_code_ISO_3166_1_alpha_2: "ID", country: "Indonesia", flag: "https://flagcdn.com/h40/id.png", moment: moment.tz("Asia/Pontianak")},
	{timezone: "Asia/Pyongyang", country_code_ISO_3166_1_alpha_2: "KP", country: "North Korea", flag: "https://flagcdn.com/h40/kp.png", moment: moment.tz("Asia/Pyongyang")},
	{timezone: "Asia/Qatar", country_code_ISO_3166_1_alpha_2: "QA", country: "Qatar", flag: "https://flagcdn.com/h40/qa.png", moment: moment.tz("Asia/Qatar")},
	{timezone: "Asia/Qostanay", country_code_ISO_3166_1_alpha_2: "KZ", country: "Kazakhstan", flag: "https://flagcdn.com/h40/kz.png", moment: moment.tz("Asia/Qostanay")},
	{timezone: "Asia/Qyzylorda", country_code_ISO_3166_1_alpha_2: "KZ", country: "Kazakhstan", flag: "https://flagcdn.com/h40/kz.png", moment: moment.tz("Asia/Qyzylorda")},
	{timezone: "Asia/Riyadh", country_code_ISO_3166_1_alpha_2: "SA", country: "Saudi Arabia", flag: "https://flagcdn.com/h40/sa.png", moment: moment.tz("Asia/Riyadh")},
	{timezone: "Asia/Sakhalin", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Sakhalin")},
	{timezone: "Asia/Samarkand", country_code_ISO_3166_1_alpha_2: "UZ", country: "Uzbekistan", flag: "https://flagcdn.com/h40/uz.png", moment: moment.tz("Asia/Samarkand")},
	{timezone: "Asia/Seoul", country_code_ISO_3166_1_alpha_2: "KR", country: "South Korea", flag: "https://flagcdn.com/h40/kr.png", moment: moment.tz("Asia/Seoul")},
	{timezone: "Asia/Shanghai", country_code_ISO_3166_1_alpha_2: "CN", country: "China", flag: "https://flagcdn.com/h40/cn.png", moment: moment.tz("Asia/Shanghai")},
	{timezone: "Asia/Singapore", country_code_ISO_3166_1_alpha_2: "SG", country: "Singapore", flag: "https://flagcdn.com/h40/sg.png", moment: moment.tz("Asia/Singapore")},
	{timezone: "Asia/Srednekolymsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Srednekolymsk")},
	{timezone: "Asia/Taipei", country_code_ISO_3166_1_alpha_2: "TW", country: "Taïwan", flag: "https://flagcdn.com/h40/tw.png", moment: moment.tz("Asia/Taipei")},
	{timezone: "Asia/Tashkent", country_code_ISO_3166_1_alpha_2: "UZ", country: "Uzbekistan", flag: "https://flagcdn.com/h40/uz.png", moment: moment.tz("Asia/Tashkent")},
	{timezone: "Asia/Tbilisi", country_code_ISO_3166_1_alpha_2: "GE", country: "Georgia", flag: "https://flagcdn.com/h40/ge.png", moment: moment.tz("Asia/Tbilisi")},
	{timezone: "Asia/Tehran", country_code_ISO_3166_1_alpha_2: "IR", country: "Iran", flag: "https://flagcdn.com/h40/ir.png", moment: moment.tz("Asia/Tehran")},
	{timezone: "Asia/Thimphu", country_code_ISO_3166_1_alpha_2: "BT", country: "Bhutan", flag: "https://flagcdn.com/h40/bt.png", moment: moment.tz("Asia/Thimphu")},
	{timezone: "Asia/Tokyo", country_code_ISO_3166_1_alpha_2: "JP", country: "Japan", flag: "https://flagcdn.com/h40/jp.png", moment: moment.tz("Asia/Tokyo")},
	{timezone: "Asia/Tomsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Tomsk")},
	{timezone: "Asia/Ulaanbaatar", country_code_ISO_3166_1_alpha_2: "MN", country: "Mongolia", flag: "https://flagcdn.com/h40/mn.png", moment: moment.tz("Asia/Ulaanbaatar")},
	{timezone: "Asia/Urumqi", country_code_ISO_3166_1_alpha_2: "CN", country: "China", flag: "https://flagcdn.com/h40/cn.png", moment: moment.tz("Asia/Urumqi")},
	{timezone: "Asia/Ust-Nera", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Ust-Nera")},
	{timezone: "Asia/Vientiane", country_code_ISO_3166_1_alpha_2: "LA", country: "Laos", flag: "https://flagcdn.com/h40/la.png", moment: moment.tz("Asia/Vientiane")},
	{timezone: "Asia/Vladivostok", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Vladivostok")},
	{timezone: "Asia/Yakutsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Yakutsk")},
	{timezone: "Asia/Yangon", country_code_ISO_3166_1_alpha_2: "MM", country: "Myanmar", flag: "https://flagcdn.com/h40/mm.png", moment: moment.tz("Asia/Yangon")},
	{timezone: "Asia/Yekaterinburg", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Asia/Yekaterinburg")},
	{timezone: "Asia/Yerevan", country_code_ISO_3166_1_alpha_2: "AM", country: "Armenia", flag: "https://flagcdn.com/h40/am.png", moment: moment.tz("Asia/Yerevan")},

	//Atlantic ocean's timezones...
	{timezone: "Atlantic/Azores", country_code_ISO_3166_1_alpha_2: "PT", country: "Portugal", flag: "https://flagcdn.com/h40/pt.png", moment: moment.tz("Atlantic/Azores")},
	{timezone: "Atlantic/Bermuda", country_code_ISO_3166_1_alpha_2: "BM", country: "Bermuda", flag: "https://flagcdn.com/h40/bm.png", moment: moment.tz("Atlantic/Bermuda")},
	{timezone: "Atlantic/Canary", country_code_ISO_3166_1_alpha_2: "ES", country: "Canary Islands", flag: "https://flagcdn.com/h40/es.png", moment: moment.tz("Atlantic/Canary")},
	{timezone: "Atlantic/Cape_Verde", country_code_ISO_3166_1_alpha_2: "CV", country: "Cape Verde", flag: "https://flagcdn.com/h40/cv.png", moment: moment.tz("Atlantic/Cape_Verde")},
	{timezone: "Atlantic/Faroe", country_code_ISO_3166_1_alpha_2: "FO", country: "Faroe Islands", flag: "https://flagcdn.com/h40/fo.png", moment: moment.tz("Atlantic/Faroe")},
	{timezone: "Atlantic/Madeira", country_code_ISO_3166_1_alpha_2: "PT", country: "Portugal", flag: "https://flagcdn.com/h40/pt.png", moment: moment.tz("Atlantic/Madeira")},
	{timezone: "Atlantic/Reykjavik", country_code_ISO_3166_1_alpha_2: "IS", country: "Iceland", flag: "https://flagcdn.com/h40/is.png", moment: moment.tz("Atlantic/Reykjavik")},
	{timezone: "Atlantic/South_Georgia", country_code_ISO_3166_1_alpha_2: "GS", country: "South Georgia", flag: "https://flagcdn.com/h40/gs.png", moment: moment.tz("Atlantic/South_Georgia")},
	{timezone: "Atlantic/St_Helena", country_code_ISO_3166_1_alpha_2: "SH", country: "Saint Helena", flag: "https://flagcdn.com/h40/sh.png", moment: moment.tz("Atlantic/St_Helena")},
	{timezone: "Atlantic/Stanley", country_code_ISO_3166_1_alpha_2: "FK", country: "Falkland Islands", flag: "https://flagcdn.com/h40/fk.png", moment: moment.tz("Atlantic/Stanley")},

	//Australian timezones...
	{timezone: "Australia/Adelaide", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Adelaide")},
	{timezone: "Australia/Brisbane", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Brisbane")},
	{timezone: "Australia/Broken_Hill", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Broken_Hill")},
	{timezone: "Australia/Currie", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Currie")},
	{timezone: "Australia/Darwin", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Darwin")},
	{timezone: "Australia/Eucla", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Eucla")},
	{timezone: "Australia/Hobart", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Hobart")},
	{timezone: "Australia/Lindeman", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Lindeman")},
	{timezone: "Australia/Lord_Howe", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Lord_Howe")},
	{timezone: "Australia/Melbourne", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Melbourne")},
	{timezone: "Australia/Perth", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Perth")},
	{timezone: "Australia/Sydney", country_code_ISO_3166_1_alpha_2: "AU", country_code_ISO_3166_1_alpha_3: "AUS", country_code_ISO_3166_1_numeric: "036", country: "Australia", flag: "https://flagcdn.com/h40/au.png", moment: moment.tz("Australia/Sydney")},

	//European timezones...
	{timezone: "Europe/Amsterdam", country_code_ISO_3166_1_alpha_2: "NL", country: "Netherlands", flag: "https://flagcdn.com/h40/nl.png", moment: moment.tz("Europe/Amsterdam")},
	{timezone: "Europe/Andorra", country_code_ISO_3166_1_alpha_2: "AD", country: "Andorra", flag: "https://flagcdn.com/h40/ad.png", moment: moment.tz("Europe/Andorra")},
	{timezone: "Europe/Astrakhan", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Europe/Astrakhan")},
	{timezone: "Europe/Athens", country_code_ISO_3166_1_alpha_2: "GR", country: "Greece", flag: "https://flagcdn.com/h40/gr.png", moment: moment.tz("Europe/Athens")},
	{timezone: "Europe/Belgrade", country_code_ISO_3166_1_alpha_2: "RS", country: "Serbia", flag: "https://flagcdn.com/h40/gr.png", moment: moment.tz("Europe/Belgrade")},
	{timezone: "Europe/Berlin", country_code_ISO_3166_1_alpha_2: "DE", country: "Germany", flag: "https://flagcdn.com/h40/de.png", moment: moment.tz("Europe/Berlin")},
	{timezone: "Europe/Bratislava", country_code_ISO_3166_1_alpha_2: "SK", country: "Slovakia", flag: "https://flagcdn.com/h40/sk.png", moment: moment.tz("Europe/Bratislava")},
	{timezone: "Europe/Brussels", country_code_ISO_3166_1_alpha_2: "BE", country: "Belgium", flag: "https://flagcdn.com/h40/be.png", moment: moment.tz("Europe/Brussels")},
	{timezone: "Europe/Bucharest", country_code_ISO_3166_1_alpha_2: "RO", country: "Romania", flag: "https://flagcdn.com/h40/ro.png", moment: moment.tz("Europe/Bucharest")},
	{timezone: "Europe/Budapest", country_code_ISO_3166_1_alpha_2: "HU", country: "Hungary", flag: "https://flagcdn.com/h40/hu.png", moment: moment.tz("Europe/Budapest")},
	{timezone: "Europe/Busingen", country_code_ISO_3166_1_alpha_2: "DE", country: "Germany", flag: "https://flagcdn.com/h40/de.png", moment: moment.tz("Europe/Busingen")},
	{timezone: "Europe/Chisinau", country_code_ISO_3166_1_alpha_2: "MD", country: "Moldavia", flag: "https://flagcdn.com/h40/md.png", moment: moment.tz("Europe/Chisinau")},
	{timezone: "Europe/Copenhagen", country_code_ISO_3166_1_alpha_2: "DK", country: "Denmark", flag: "https://flagcdn.com/h40/dk.png", moment: moment.tz("Europe/Copenhagen")},
	{timezone: "Europe/Dublin", country_code_ISO_3166_1_alpha_2: "IE", country: "Ireland", flag: "https://flagcdn.com/h40/ie.png", moment: moment.tz("Europe/Dublin")},
	{timezone: "Europe/Gibraltar", country_code_ISO_3166_1_alpha_2: "GI", country: "Gibraltar", flag: "https://flagcdn.com/h40/gi.png", moment: moment.tz("Europe/Gibraltar")},
	{timezone: "Europe/Guernsey", country_code_ISO_3166_1_alpha_2: "GG", country: "Guernsey", flag: "https://flagcdn.com/h40/gg.png", moment: moment.tz("Europe/Guernsey")},
	{timezone: "Europe/Helsinki", country_code_ISO_3166_1_alpha_2: "FI", country: "Finland", flag: "https://flagcdn.com/h40/fi.png", moment: moment.tz("Europe/Helsinki")},
	{timezone: "Europe/Isle_of_Man", country_code_ISO_3166_1_alpha_2: "IM", country: "Isle of Man", flag: "https://flagcdn.com/h40/im.png", moment: moment.tz("Europe/Isle_of_Man")},
	{timezone: "Europe/Istanbul", country_code_ISO_3166_1_alpha_2: "TR", country: "Turkey", flag: "https://flagcdn.com/h40/tr.png", moment: moment.tz("Europe/Istanbul")},
	{timezone: "Europe/Jersey", country_code_ISO_3166_1_alpha_2: "JE", country: "Jersey", flag: "https://flagcdn.com/h40/je.png", moment: moment.tz("Europe/Jersey")},
	{timezone: "Europe/Kaliningrad", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Europe/Kaliningrad")},
	{timezone: "Europe/Kiev", country_code_ISO_3166_1_alpha_2: "UA", country: "Ukraine", flag: "https://flagcdn.com/h40/ua.png", moment: moment.tz("Europe/Kiev")},
	{timezone: "Europe/Kirov", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Europe/Kirov")},
	{timezone: "Europe/Lisbon", country_code_ISO_3166_1_alpha_2: "PT", country: "Portugal", flag: "https://flagcdn.com/h40/pt.png", moment: moment.tz("Europe/Lisbon")},
	{timezone: "Europe/Ljubljana", country_code_ISO_3166_1_alpha_2: "SI", country: "Slovenia", flag: "https://flagcdn.com/h40/si.png", moment: moment.tz("Europe/Ljubljana")},
	{timezone: "Europe/London", country_code_ISO_3166_1_alpha_2: "GB", country: "United Kingdom", flag: "https://flagcdn.com/h40/gb.png", moment: moment.tz("Europe/London")},
	{timezone: "Europe/Luxembourg", country_code_ISO_3166_1_alpha_2: "LU", country: "Luxembourg", flag: "https://flagcdn.com/h40/lu.png", moment: moment.tz("Europe/Luxembourg")},
	{timezone: "Europe/Madrid", country_code_ISO_3166_1_alpha_2: "ES", country: "Spain", flag: "https://flagcdn.com/h40/es.png", moment: moment.tz("Europe/Madrid")},
	{timezone: "Europe/Malta", country_code_ISO_3166_1_alpha_2: "MT", country: "Malta", flag: "https://flagcdn.com/h40/mt.png", moment: moment.tz("Europe/Malta")},
	{timezone: "Europe/Mariehamn", country_code_ISO_3166_1_alpha_2: "AX", country: "Åland Islands", flag: "https://flagcdn.com/h40/ax.png", moment: moment.tz("Europe/Mariehamn")},
	{timezone: "Europe/Minsk", country_code_ISO_3166_1_alpha_2: "BY", country: "Belarus", flag: "https://flagcdn.com/h40/by.png", moment: moment.tz("Europe/Minsk")},
	{timezone: "Europe/Monaco", country_code_ISO_3166_1_alpha_2: "MC", country: "Monaco", flag: "https://flagcdn.com/h40/mc.png", moment: moment.tz("Europe/Monaco")},
	{timezone: "Europe/Moscow", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Europe/Moscow")},
	{timezone: "Europe/Nicosia", country_code_ISO_3166_1_alpha_2: "CY", country: "Cyprus", flag: "https://flagcdn.com/h40/cy.png", moment: moment.tz("Europe/Nicosia")},
	{timezone: "Europe/Oslo", country_code_ISO_3166_1_alpha_2: "NO", country_code_ISO_3166_1_alpha_3: "NOR", country_code_ISO_3166_1_numeric: "578", country: "Norway", flag: "https://flagcdn.com/h40/no.png", moment: moment.tz("Europe/Oslo")},
	{timezone: "Europe/Paris", country_code_ISO_3166_1_alpha_2: "FR", country_code_ISO_3166_1_alpha_3: "FRA", country_code_ISO_3166_1_numeric: "250", country: "France", flag: "https://flagcdn.com/h40/fr.png", moment: moment.tz("Europe/Paris")},
	{timezone: "Europe/Podgorica", country_code_ISO_3166_1_alpha_2: "ME", country: "Montenegro", flag: "https://flagcdn.com/h40/me.png", moment: moment.tz("Europe/Podgorica")},
	{timezone: "Europe/Prague", country_code_ISO_3166_1_alpha_2: "CZ", country: "Czechia", flag: "https://flagcdn.com/h40/cz.png", moment: moment.tz("Europe/Prague")},
	{timezone: "Europe/Riga", country_code_ISO_3166_1_alpha_2: "LV", country: "Latvia", flag: "https://flagcdn.com/h40/lv.png", moment: moment.tz("Europe/Riga")},
	{timezone: "Europe/Rome", country_code_ISO_3166_1_alpha_2: "IT", country: "Italia", flag: "https://flagcdn.com/h40/it.png", moment: moment.tz("Europe/Rome")},
	{timezone: "Europe/Samara", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Europe/Samara")},
	{timezone: "Europe/San_Marino", country_code_ISO_3166_1_alpha_2: "SM", country: "San Marino", flag: "https://flagcdn.com/h40/sm.png", moment: moment.tz("Europe/San_Marino")},
	{timezone: "Europe/Sarajevo", country_code_ISO_3166_1_alpha_2: "BA", country: "Bosnia and Herzegovina", flag: "https://flagcdn.com/h40/ba.png", moment: moment.tz("Europe/Sarajevo")},
	{timezone: "Europe/Saratov", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Europe/Saratov")},
	{timezone: "Europe/Simferopol", country_code_ISO_3166_1_alpha_2: "UA", country: "Ukraine", flag: "https://flagcdn.com/h40/ua.png", moment: moment.tz("Europe/Simferopol")},
	{timezone: "Europe/Skopje", country_code_ISO_3166_1_alpha_2: "MK", country: "North Macedonia", flag: "https://flagcdn.com/h40/mk.png", moment: moment.tz("Europe/Skopje")},
	{timezone: "Europe/Sofia", country_code_ISO_3166_1_alpha_2: "BG", country: "Bulgaria", flag: "https://flagcdn.com/h40/bg.png", moment: moment.tz("Europe/Sofia")},
	{timezone: "Europe/Stockholm", country_code_ISO_3166_1_alpha_2: "SE", country: "Sweden", flag: "https://flagcdn.com/h40/se.png", moment: moment.tz("Europe/Stockholm")},
	{timezone: "Europe/Tallinn", country_code_ISO_3166_1_alpha_2: "EE", country: "Estonia", flag: "https://flagcdn.com/h40/ee.png", moment: moment.tz("Europe/Tallinn")},
	{timezone: "Europe/Tirane", country_code_ISO_3166_1_alpha_2: "AL", country: "Albania", flag: "https://flagcdn.com/h40/al.png", moment: moment.tz("Europe/Tirane")},
	{timezone: "Europe/Ulyanovsk", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Europe/Ulyanovsk")},
	{timezone: "Europe/Uzhgorod", country_code_ISO_3166_1_alpha_2: "UA", country: "Ukraine", flag: "https://flagcdn.com/h40/ua.png", moment: moment.tz("Europe/Uzhgorod")},
	{timezone: "Europe/Vaduz", country_code_ISO_3166_1_alpha_2: "LI", country: "Liechtenstein", flag: "https://flagcdn.com/h40/li.png", moment: moment.tz("Europe/Vaduz")},
	{timezone: "Europe/Vatican", country_code_ISO_3166_1_alpha_2: "VA", country: "Vatican City", flag: "https://flagcdn.com/h40/va.png", moment: moment.tz("Europe/Vatican")},
	{timezone: "Europe/Vienna", country_code_ISO_3166_1_alpha_2: "AT", country: "Austria", flag: "https://flagcdn.com/h40/at.png", moment: moment.tz("Europe/Vienna")},
	{timezone: "Europe/Vilnius", country_code_ISO_3166_1_alpha_2: "LT", country: "Lithuania", flag: "https://flagcdn.com/h40/lt.png", moment: moment.tz("Europe/Vilnius")},
	{timezone: "Europe/Volgograd", country_code_ISO_3166_1_alpha_2: "RU", country: "Russia", flag: "https://flagcdn.com/h40/ru.png", moment: moment.tz("Europe/Volgograd")},
	{timezone: "Europe/Warsaw", country_code_ISO_3166_1_alpha_2: "PL", country: "Poland", flag: "https://flagcdn.com/h40/pl.png", moment: moment.tz("Europe/Warsaw")},
	{timezone: "Europe/Zagreb", country_code_ISO_3166_1_alpha_2: "HR", country: "Croatia", flag: "https://flagcdn.com/h40/hr.png", moment: moment.tz("Europe/Zagreb")},
	{timezone: "Europe/Zaporozhye", country_code_ISO_3166_1_alpha_2: "UA", country: "Ukraine", flag: "https://flagcdn.com/h40/ua.png", moment: moment.tz("Europe/Zaporozhye")},
	{timezone: "Europe/Zurich", country_code_ISO_3166_1_alpha_2: "CH", country: "Switzerland", flag: "https://flagcdn.com/h40/ch.png", moment: moment.tz("Europe/Zurich")},

	//Indian ocean's timezones...
	{timezone: "Indian/Antananarivo", country_code_ISO_3166_1_alpha_2: "MG", country: "Madagascar", flag: "https://flagcdn.com/h40/mg.png", moment: moment.tz("Indian/Antananarivo")},
	{timezone: "Indian/Chagos", country_code_ISO_3166_1_alpha_2: "IO", country: "Chagos Archipelago", flag: "https://flagcdn.com/h40/io.png", moment: moment.tz("Indian/Chagos")},
	{timezone: "Indian/Christmas", country_code_ISO_3166_1_alpha_2: "CX", country: "Christmas Island", flag: "https://flagcdn.com/h40/cx.png", moment: moment.tz("Indian/Christmas")},
	{timezone: "Indian/Cocos", country_code_ISO_3166_1_alpha_2: "CC", country: "Cocos Islands", flag: "https://flagcdn.com/h40/cc.png", moment: moment.tz("Indian/Cocos")},
	{timezone: "Indian/Comoro", country_code_ISO_3166_1_alpha_2: "KM", country: "Comoros", flag: "https://flagcdn.com/h40/km.png", moment: moment.tz("Indian/Comoro")},
	{timezone: "Indian/Kerguelen", country_code_ISO_3166_1_alpha_2: "TF", country: "Kerguelen Islands", flag: "https://flagcdn.com/h40/tf.png", moment: moment.tz("Indian/Kerguelen")},
	{timezone: "Indian/Mahe", country_code_ISO_3166_1_alpha_2: "SC", country: "Seychelles", flag: "https://flagcdn.com/h40/sc.png", moment: moment.tz("Indian/Mahe")},
	{timezone: "Indian/Maldives", country_code_ISO_3166_1_alpha_2: "MV", country: "Maldives", flag: "https://flagcdn.com/h40/mv.png", moment: moment.tz("Indian/Maldives")},
	{timezone: "Indian/Mauritius", country_code_ISO_3166_1_alpha_2: "MU", country: "Mauritius", flag: "https://flagcdn.com/h40/mu.png", moment: moment.tz("Indian/Mauritius")},
	{timezone: "Indian/Mayotte", country_code_ISO_3166_1_alpha_2: "YT", country: "Mayotte", flag: "https://flagcdn.com/h40/yt.png", moment: moment.tz("Indian/Mayotte")},
	{timezone: "Indian/Reunion", country_code_ISO_3166_1_alpha_2: "RE", country: "Réunion", flag: "https://flagcdn.com/h40/re.png", moment: moment.tz("Indian/Reunion")},

	//Pacific ocean's timezones...
	{timezone: "Pacific/Apia", country_code_ISO_3166_1_alpha_2: "WS", country: "Samoa", flag: "https://flagcdn.com/h40/ws.png", moment: moment.tz("Pacific/Apia")},
	{timezone: "Pacific/Auckland", country_code_ISO_3166_1_alpha_2: "NZ", country: "New Zeland", flag: "https://flagcdn.com/h40/nz.png", moment: moment.tz("Pacific/Auckland")},
	{timezone: "Pacific/Bougainville", country_code_ISO_3166_1_alpha_2: "PG", country: "Papua New Guinea", flag: "https://flagcdn.com/h40/pg.png", moment: moment.tz("Pacific/Bougainville")},
	{timezone: "Pacific/Chatham", country_code_ISO_3166_1_alpha_2: "NZ", country: "New Zeland", flag: "https://flagcdn.com/h40/nz.png", moment: moment.tz("Pacific/Chatham")},
	{timezone: "Pacific/Chuuk", country_code_ISO_3166_1_alpha_2: "FM", country: "Federated States of Micronesia", flag: "https://flagcdn.com/h40/fm.png", moment: moment.tz("Pacific/Chuuk")},
	{timezone: "Pacific/Easter", country_code_ISO_3166_1_alpha_2: "CL", country: "Chile", flag: "https://flagcdn.com/h40/cl.png", moment: moment.tz("Pacific/Easter")},
	{timezone: "Pacific/Efate", country_code_ISO_3166_1_alpha_2: "VU", country: "Vanuatu", flag: "https://flagcdn.com/h40/vu.png", moment: moment.tz("Pacific/Efate")},
	{timezone: "Pacific/Enderbury", country_code_ISO_3166_1_alpha_2: "KI", country: "Kiribati", flag: "https://flagcdn.com/h40/ki.png", moment: moment.tz("Pacific/Enderbury")},
	{timezone: "Pacific/Fakaofo", country_code_ISO_3166_1_alpha_2: "TK", country: "Tokelau", flag: "https://flagcdn.com/h40/tk.png", moment: moment.tz("Pacific/Fakaofo")},
	{timezone: "Pacific/Fiji", country_code_ISO_3166_1_alpha_2: "FJ", country: "Fiji", flag: "https://flagcdn.com/h40/fj.png", moment: moment.tz("Pacific/Fiji")},
	{timezone: "Pacific/Funafuti", country_code_ISO_3166_1_alpha_2: "TV", country: "Tuvalu", flag: "https://flagcdn.com/h40/tv.png", moment: moment.tz("Pacific/Funafuti")},
	{timezone: "Pacific/Galapagos", country_code_ISO_3166_1_alpha_2: "EC", country: "Ecuador", flag: "https://flagcdn.com/h40/ec.png", moment: moment.tz("Pacific/Galapagos")},
	{timezone: "Pacific/Gambier", country_code_ISO_3166_1_alpha_2: "PF", country: "French Polynesia", flag: "https://flagcdn.com/h40/pf.png", moment: moment.tz("Pacific/Gambier")},
	{timezone: "Pacific/Guadalcanal", country_code_ISO_3166_1_alpha_2: "SB", country: "Solomon Islands", flag: "https://flagcdn.com/h40/sb.png", moment: moment.tz("Pacific/Guadalcanal")},
	{timezone: "Pacific/Guam", country_code_ISO_3166_1_alpha_2: "GU", country: "Solomon Islands", flag: "https://flagcdn.com/h40/gu.png", moment: moment.tz("Pacific/Guam")},
	{timezone: "Pacific/Honolulu", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("Pacific/Honolulu")},
	{timezone: "Pacific/Kiritimati", country_code_ISO_3166_1_alpha_2: "KI", country: "Kiribati", flag: "https://flagcdn.com/h40/ki.png", moment: moment.tz("Pacific/Kiritimati")},
	{timezone: "Pacific/Kosrae", country_code_ISO_3166_1_alpha_2: "FM", country: "Federated States of Micronesia", flag: "https://flagcdn.com/h40/fm.png", moment: moment.tz("Pacific/Kosrae")},
	{timezone: "Pacific/Kwajalein", country_code_ISO_3166_1_alpha_2: "MH", country: "Marshall Islands", flag: "https://flagcdn.com/h40/mh.png", moment: moment.tz("Pacific/Kwajalein")},
	{timezone: "Pacific/Majuro", country_code_ISO_3166_1_alpha_2: "MH", country: "Marshall Islands", flag: "https://flagcdn.com/h40/mh.png", moment: moment.tz("Pacific/Majuro")},
	{timezone: "Pacific/Marquesas", country_code_ISO_3166_1_alpha_2: "PF", country: "French Polynesia", flag: "https://flagcdn.com/h40/pf.png", moment: moment.tz("Pacific/Marquesas")},
	{timezone: "Pacific/Midway", country_code_ISO_3166_1_alpha_2: "US", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("Pacific/Midway")},
	{timezone: "Pacific/Nauru", country_code_ISO_3166_1_alpha_2: "NR", country: "Nauru", flag: "https://flagcdn.com/h40/nr.png", moment: moment.tz("Pacific/Nauru")},
	{timezone: "Pacific/Niue", country_code_ISO_3166_1_alpha_2: "NU", country: "Niue", flag: "https://flagcdn.com/h40/nu.png", moment: moment.tz("Pacific/Niue")},
	{timezone: "Pacific/Norfolk", country_code_ISO_3166_1_alpha_2: "NF", country: "Norfolk Island", flag: "https://flagcdn.com/h40/nf.png", moment: moment.tz("Pacific/Norfolk")},
	{timezone: "Pacific/Noumea", country_code_ISO_3166_1_alpha_2: "NC", country: "New Caledonia", flag: "https://flagcdn.com/h40/nc.png", moment: moment.tz("Pacific/Noumea")},
	{timezone: "Pacific/Pago_Pago", country_code_ISO_3166_1_alpha_2: "AS", country: "American Samoa", flag: "https://flagcdn.com/h40/as.png", moment: moment.tz("Pacific/Pago_Pago")},
	{timezone: "Pacific/Palau", country_code_ISO_3166_1_alpha_2: "PW", country: "Palau", flag: "https://flagcdn.com/h40/pw.png", moment: moment.tz("Pacific/Palau")},
	{timezone: "Pacific/Pitcairn", country_code_ISO_3166_1_alpha_2: "PN", country: "Pitcairn Islands", flag: "https://flagcdn.com/h40/pn.png", moment: moment.tz("Pacific/Pitcairn")},
	{timezone: "Pacific/Pohnpei", country_code_ISO_3166_1_alpha_2: "FM", country: "Federated States of Micronesia", flag: "https://flagcdn.com/h40/fm.png", moment: moment.tz("Pacific/Pohnpei")},
	{timezone: "Pacific/Port_Moresby", country_code_ISO_3166_1_alpha_2: "PG", country: "Papua New Guinea", flag: "https://flagcdn.com/h40/pg.png", moment: moment.tz("Pacific/Port_Moresby")},
	{timezone: "Pacific/Rarotonga", country_code_ISO_3166_1_alpha_2: "CK", country: "Cook Islands", flag: "https://flagcdn.com/h40/ck.png", moment: moment.tz("Pacific/Rarotonga")},
	{timezone: "Pacific/Saipan", country_code_ISO_3166_1_alpha_2: "MP", country: "Northern Mariana Islands", flag: "https://flagcdn.com/h40/mp.png", moment: moment.tz("Pacific/Saipan")},
	{timezone: "Pacific/Tahiti", country_code_ISO_3166_1_alpha_2: "PF", country: "French Polynesia", flag: "https://flagcdn.com/h40/pf.png", moment: moment.tz("Pacific/Tahiti")},
	{timezone: "Pacific/Tarawa", country_code_ISO_3166_1_alpha_2: "KI", country: "Kiribati", flag: "https://flagcdn.com/h40/ki.png", moment: moment.tz("Pacific/Tarawa")},
	{timezone: "Pacific/Tongatapu", country_code_ISO_3166_1_alpha_2: "TO", country: "Tonga", flag: "https://flagcdn.com/h40/to.png", moment: moment.tz("Pacific/Tongatapu")},
	{timezone: "Pacific/Wake", country_code_ISO_3166_1_alpha_2: "UM", country: "United States of America", flag: "https://flagcdn.com/h40/us.png", moment: moment.tz("Pacific/Wake")},
	{timezone: "Pacific/Wallis", country_code_ISO_3166_1_alpha_2: "WF", country: "Wallis and Futuna", flag: "https://flagcdn.com/h40/wf.png", moment: moment.tz("Pacific/Wallis")}
];

// Definition of the 'getAllDatasFromMultipleTimezones' function to return all datas from all wished timezones in an array and even the current datetime in a wished format...
function getAllDatasFromMultipleTimezones(wishedTimezonesArray, dateAndTimeFormat = "X") {

	// Definition of the 'allDatasFromTimezonesJSONArray' variable which is an array which will contain all JSON datas from all the wished timezones...
	var allDatasFromTimezonesJSONArray = [];

	// Browse for each element contained in the 'wishedTimezonesArray' array...
	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		// Browse for each element contained in the 'timezones' array...
		for(var j = 0; j < timezones.length; j++)
		{
			//  If the current element of the 'timezones' array corresponds to one of the desired timezones (current element of the 'wishedTimezonesArray' array)...
			if(wishedTimezonesArray[i] === timezones[j].timezone) {

				// Definition of the 'allDatasFromTimezoneJSON' variable which will contain all datas from the current timezone in the wished ones...
				var allDatasFromTimezoneJSON = {};

				// Affectation of all datas from the current timezone in the wished ones in the 'allDatasFromTimezoneJSON' variable...
				allDatasFromTimezoneJSON['timezone'] = timezones[j].timezone;
				allDatasFromTimezoneJSON['country_code_ISO_3166_1_alpha_2'] = timezones[j].country_code_ISO_3166_1_alpha_2;
				allDatasFromTimezoneJSON['country'] = timezones[j].country;
				allDatasFromTimezoneJSON['flag'] = timezones[j].flag;
				allDatasFromTimezoneJSON['datetime'] = timezones[j].moment.format(dateAndTimeFormat);

				// Push the 'allDatasFromTimezoneJSON' variable in the 'allDatasFromTimezonesJSONArray' array...
				allDatasFromTimezonesJSONArray.push(allDatasFromTimezoneJSON);

				// Leaving the second loop...
				break;
			}
		}
	}

	// Return all datas from all the wished timezones in the 'allDatasFromTimezonesJSONArray' array containing JSON variables...
	return allDatasFromTimezonesJSONArray;
}

// Definition of the 'getAllDatasFromOneTimezone' function to return all datas from a wishedTimezone and even the current datetime in a wished format...
function getAllDatasFromOneTimezone(wishedTimezone, dateAndTimeFormat = "X") {

	// Definition of the 'allDatasFromTimezoneJSON' variable which will contain all datas from a wished timezone...
	var allDatasFromTimezoneJSON = {};

	// Browse for each element contained in the 'timezones' array...
	for(var i = 0; i < timezones.length; i++)
	{
		// If the current element of the 'timezones' array corresponds to the desired timezone...
		if(timezones[i].timezone === wishedTimezone) {

			// Affectation of all datas from the wished timezone in the 'allDatasFromTimezoneJSON' variable...
			allDatasFromTimezoneJSON['timezone'] = timezones[i].timezone;
			allDatasFromTimezoneJSON['country_code_ISO_3166_1_alpha_2'] = timezones[i].country_code_ISO_3166_1_alpha_2;
			allDatasFromTimezoneJSON['country'] = timezones[i].country;
			allDatasFromTimezoneJSON['flag'] = timezones[i].flag;
			allDatasFromTimezoneJSON['datetime'] = timezones[i].moment.format(dateAndTimeFormat);

			// Leaving the loop...
			break;
		}
	}

	// Return all datas from the wished timezone in the 'allDatasFromTimezoneJSON' JSON variable...
	return allDatasFromTimezoneJSON;
}

// Definition of the 'getFlagFromMultipleTimezones' function to return the country flag URL from 'wishedTimezonesArray' wished timezones array...
function getFlagFromMultipleTimezones(wishedTimezonesArray) {

	// Definition of the 'wishedFlagsFromTimezonesJSON' variable which will contain all country flags URL from every wished timezones...
	var wishedFlagsFromTimezonesJSON = {};

	// Browse for each element contained in the 'wishedTimezonesArray' array...
 	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		// Browse for each element contained in the 'timezones' array...
		for(var j = 0; j < timezones.length; j++)
		{
			//  If the current element of the 'timezones' array corresponds to one of the desired timezones (current element of the 'wishedTimezonesArray' array)...
			if(wishedTimezonesArray[i] === timezones[j].timezone) {

				// Add the country flag URL to the 'wishedFlagsFromTimezonesJSON' JSON variable...
				wishedFlagsFromTimezonesJSON[timezones[j].timezone] = timezones[j].flag;

				// Leaving the second loop...
				break;
			}
		}
	}

	// Return all country flags for all wished timezones in the completed 'wishedFlagsFromTimezonesJSON' JSON variable...
	return wishedFlagsFromTimezonesJSON;
}

// Definition of the 'getFlagFromOneTimezone' function to return the country flag URL from a 'wishedTimezone' wished timezone...
function getFlagFromOneTimezone(wishedTimezone) {

	// Definition of the 'flagFromTimezoneJSON' variable which will contain the country flag URL from a wished timezone...
	var flagFromTimezoneJSON = {};

	// Browse for each element contained in the 'timezones' array...
	for(var i = 0; i < timezones.length; i++)
	{
		// If the current element of the 'timezones' array corresponds to the desired timezone...
		if(timezones[i].timezone === wishedTimezone) {

			// Affectation of the country flag URL from the wished timezone in the 'flagFromTimezoneJSON' variable...
			flagFromTimezoneJSON[timezones[i].timezone] = timezones[i].flag;

			// Leaving the loop...
			break;
		}
	}

	// Return the country flag URL from the wished timezone in the 'flagFromTimezoneJSON' JSON variable...
	return flagFromTimezoneJSON;
}

// Definition of the 'getCountryFromMultipleTimezones' function to identify and return the country name of all wished timezones in the 'wishedTimezonesArray' array...
function getCountryFromMultipleTimezones(wishedTimezonesArray) {

	// Definition of the 'countryFromTimezonesJSON' variable which will contain the country name from all wished timezone...
	var countryFromTimezonesJSON = {};

	// Browse for each element contained in the 'wishedTimezonesArray' array...
 	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		// Browse for each element contained in the 'timezones' array...
		for(var j = 0; j < timezones.length; j++)
		{
			//  If the current element of the 'timezones' array corresponds to one of the desired timezones (current element of the 'wishedTimezonesArray' array)...
			if(wishedTimezonesArray[i] === timezones[j].timezone) {

				// Add the country name to the 'countryFromTimezonesJSON' JSON variable...
				countryFromTimezonesJSON[timezones[j].timezone] = timezones[j].country;

				// Leaving the second loop...
				break;
			}
		}
	}

	// Return the country name from all wished timezone in the 'countryFromTimezonesJSON' JSON variable...
	return countryFromTimezonesJSON;
}

// Definition of the 'getCountryFromOneTimezone' function to return the country name from a 'wishedTimezone' wished timezone...
function getCountryFromOneTimezone(wishedTimezone) {

	// Definition of the 'countryFromTimezoneJSON' variable which will contain the country name from a wished timezone...
	var countryFromTimezoneJSON = {};

	// Browse for each element contained in the 'timezones' array...
	for(var i = 0; i < timezones.length; i++)
	{
		// If the current element of the 'timezones' array corresponds to the desired timezone...
		if(timezones[i].timezone === wishedTimezone) {

			// Affectation of the country name from the wished timezone in the 'countryFromTimezoneJSON' variable...
			countryFromTimezoneJSON[timezones[i].timezone] = timezones[i].country;

			// Leaving the loop...
			break;
		}
	}

	// Return the country name from the wished timezone in the 'countryFromTimezoneJSON' JSON variable...
	return countryFromTimezoneJSON;
}

//
function getCountryCodeISO3166_1AlphaNumericFromMultipleTimezones(wishedTimezonesArray) {

	//
	var wishedCountryCodesJSON = {};

	//
	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		//
		for(var j = 0; j < timezones.length; j++)
		{
			//
			if(wishedTimezonesArray[i] === timezones[j].timezone) {

				//
				wishedCountryCodesJSON[timezones[j].timezone] = timezones[j].country_code_ISO_3166_1_numeric;

				//
				break;
			}
		}
	}

	//
	return wishedCountryCodesJSON;	
}

//
function getCountryCodeISO3166_1AlphaNumericFromOneTimezone(wishedTimezone) {

}

//
function getCountryCodeISO3166_1Alpha3FromMultipleTimezones(wishedTimezonesArray) {

	//
	var wishedCountryCodesJSON = {};

	//
	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		//
		for(var j = 0; j < timezones.length; j++)
		{
			//
			if(wishedTimezonesArray[i] === timezones[j].timezone) {

				//
				wishedCountryCodesJSON[timezones[j].timezone] = timezones[j].country_code_ISO_3166_1_alpha_3;

				//
				break;
			}
		}
	}

	//
	return wishedCountryCodesJSON;
}

//
function getCountryCodeISO3166_1Alpha3FromOneTimezone(wishedTimezone) {

}

// Definition of the 'getCountryCodeISO3166_1Alpha2FromMultipleTimezones' function to identify and return the ISO 3166-1 alpha-2 ISO 3166-1 alpha-2 country code of all wished timezones in the 'wishedTimezonesArray' array...
function getCountryCodeISO3166_1Alpha2FromMultipleTimezones(wishedTimezonesArray) {

	// Definition of the 'wishedCountryCodesISO3166_1Alpha2JSON' variable which will contain all the found ISO 3166-1 alpha-2 country codes...
	var wishedCountryCodesISO3166_1Alpha2JSON = {};

	// Browse for each element contained in the 'wishedTimezonesArray' array...
	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		// Browse for each element contained in the 'timezones' array...
		for(var j = 0; j < timezones.length; j++)
		{
			// If the current element of the 'timezones' array corresponds to one of the desired timezones (current element of the 'wishedTimezonesArray' array)...
			if(wishedTimezonesArray[i] === timezones[j].timezone) {

				// Add the ISO 3166-1 alpha-2 country code to the 'wishedCountryCodesISO3166_1Alpha2JSON' JSON variable...
				wishedCountryCodesISO3166_1Alpha2JSON[timezones[j].timezone] = timezones[j].country_code_ISO_3166_1_alpha_2;

				// Leaving the loop...
				break;
			}
		}
	}

	// Return all ISO 3166-1 alpha-2 country code contained in the completed 'wishedCountryCodesISO3166_1Alpha2JSON' JSON variable...
	return wishedCountryCodesISO3166_1Alpha2JSON;
}

// Definition of the 'getCountryCodeISO3166_1Alpha2FromOneTimezone' function to identify and return the ISO 3166-1 alpha-2 ISO 3166-1 alpha-2 country code of the 'wishedTimezone' timezone...
function getCountryCodeISO3166_1Alpha2FromOneTimezone(wishedTimezone) {

	// Definition of the 'wishedCountryCodeISO3166_1Alpha2JSON' variable which will contain the found ISO 3166-1 alpha-2 country code...
	var wishedCountryCodeISO3166_1Alpha2JSON = {};

	// Browse for each element contained in the 'timezones' array...
	for(var i = 0; i < timezones.length; i++)
	{
		// If the current element of the 'timezones' array corresponds to the desired timezone...
		if(timezones[i].timezone === wishedTimezone) {

			// Add the ISO 3166-1 alpha-2 country code to the 'wishedCountryCodeISO3166_1Alpha2JSON' JSON variable...
			wishedCountryCodeISO3166_1Alpha2JSON[timezones[i].timezone] = timezones[i].country_code_ISO_3166_1_alpha_2;

			// Leaving the loop...
			break;
		}
	}

	// Return the ISO 3166-1 alpha-2 country code contained in the completed 'wishedCountryCodeISO3166_1Alpha2JSON' JSON variable...
	return wishedCountryCodeISO3166_1Alpha2JSON;
}

// Definition of the 'getDatTimeFromMultipleTimezones' function to return date and time (in a format specified by the 'dateAndTimeFormat' variable) from an array containing all wished timezones named 'wishedTimezonesArray' passed as an argument...
function getDatTimeFromMultipleTimezones(wishedTimezonesArray, dateAndTimeFormat = "X") {

	// Definition of the 'wishedTimezonesMomentsJSON' variable which will contain all moments for every wished timezones...
	var wishedTimezonesMomentsJSON = {};

	// Browse for each element contained in the 'wishedTimezonesArray' array...
	for(var i = 0; i < wishedTimezonesArray.length; i++)
	{
		// Browse for each element contained in the 'timezones' array...
		for(var j = 0; j < timezones.length; j++)
		{
			//  If the current element of the 'timezones' array corresponds to one of the desired timezones (current element of the 'wishedTimezonesArray' array)...
			if(wishedTimezonesArray[i] === timezones[j].timezone) {

				// Add the formating date and time to the 'wishedTimezonesMomentsJSON' JSON variable...
				wishedTimezonesMomentsJSON[timezones[j].timezone] = timezones[j].moment.format(dateAndTimeFormat);

				// Leaving the second loop...
				break;
			}
		}
	}

	// Return all current dates and times for all wished timezones in the completed 'wishedTimezonesMomentsJSON' JSON variable...
	return wishedTimezonesMomentsJSON;
}

// Definition of the 'getDateTimeFromOneTimezone' function to return date and time (in a format specified by the 'dateAndTimeFormat' variable) from string containing the wished timezone named 'wishedTimezone' passed as an argument...
function getDateTimeFromOneTimezone(wishedTimezone, dateAndTimeFormat = "X") {

	// Definition of the 'wishedTimezoneMomentJSON' variable which will contain all moments for every wished timezones...
	var wishedTimezoneMomentJSON = {};

	// Browse for each element contained in the 'timezones' array...
	for(var i = 0; i < timezones.length; i++)
	{
		// If the desired timezone (named 'wishedTimezone') corresponds to the current element (timezone) in the 'wishedTimezonesArray' array...
		if(timezones[i].timezone === wishedTimezone) {

				// Add the formating date and time to the 'wishedTimezoneMomentJSON' JSON variable...
				wishedTimezoneMomentJSON[timezones[i].timezone] = timezones[i].moment.format(dateAndTimeFormat);

				// Leaving the loop...
				break;
		}
	}

	// Return current date and time for the wished timezone in the completed 'wishedTimezoneMomentJSON' JSON variable...
	return wishedTimezoneMomentJSON;
}

// Export all defined functions to extract datas from timezones...
module.exports = {

	'getAllDatasFromMultipleTimezones': getAllDatasFromMultipleTimezones,
	'getAllDatasFromOneTimezone': getAllDatasFromOneTimezone,
	'getFlagFromMultipleTimezones': getFlagFromMultipleTimezones,
	'getFlagFromOneTimezone': getFlagFromOneTimezone,
	'getCountryFromMultipleTimezones': getCountryFromMultipleTimezones,
	'getCountryFromOneTimezone': getCountryFromOneTimezone,
	'getCountryCodeISO3166_1AlphaNumericFromMultipleTimezones': getCountryCodeISO3166_1AlphaNumericFromMultipleTimezones,
	'getCountryCodeISO3166_1AlphaNumericFromOneTimezone': getCountryCodeISO3166_1AlphaNumericFromOneTimezone,
	'getCountryCodeISO3166_1Alpha3FromMultipleTimezones': getCountryCodeISO3166_1Alpha3FromMultipleTimezones,
	'getCountryCodeISO3166_1Alpha3FromOneTimezone': getCountryCodeISO3166_1Alpha3FromOneTimezone,
	'getCountryCodeISO3166_1Alpha2FromMultipleTimezones': getCountryCodeISO3166_1Alpha2FromMultipleTimezones, 
	'getCountryCodeISO3166_1Alpha2FromOneTimezone': getCountryCodeISO3166_1Alpha2FromOneTimezone,
	'getDatTimeFromMultipleTimezones': getDatTimeFromMultipleTimezones,
	'getDateTimeFromOneTimezone': getDateTimeFromOneTimezone
}
