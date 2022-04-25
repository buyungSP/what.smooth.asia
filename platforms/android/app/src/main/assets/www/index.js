oldAdmob = {
    banner() {
        admobid = {
            banner: 'ca-app-pub-5890023057020023/9560902191',
            interstitial: 'ca-app-pub-5890023057020023/3413419879',
        }
        admobis = {
            banner: 'ca-app-pub-3940256099942544/6300978111',
            interstitial: 'ca-app-pub-3940256099942544/1033173712'
        }
        admob.banner.config({
            id: admobid.banner,
            isTesting: false,
            autoShow: true,
            bannerAtTop: true,
            overlap: true,
            size: 'BANNER'
        })
        admob.banner.prepare()
        admob.interstitial.config({
            id: admobid.interstitial,
            isTesting: false,
            autoShow: false,
        })
        admob.interstitial.prepare()
        document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
            sessionStorage.setItem('int', true)
        })
        document.addEventListener('admob.interstitial.events.LOAD', function(event) {
            sessionStorage.removeItem('int')
        })
    },
    int(phone) {
        if (!sessionStorage.getItem('int')) {
            admob.interstitial.show()
            document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
                sistem.chat(`https://wa.me/${phone}`)
                admob.interstitial.prepare()
            })
        } else {
            sistem.chat(`https://wa.me/${phone}`)
        }
    },
}
translates = [
    {"en-EN" : ["Form link  direct whatsapp chat." ,["Press 'Lanjut' button to start.<br>","You have to install Whatsapp/Whatsapp business app and your mobile number registered on Whatsapp to proceed to Whatsapp chat page."]]},
    {"id-ID" : ["Formulir tautan obrolan whatsapp langsung." ,["tekan tombol 'Kirim' untuk memulai.<br>","Anda harus menginstal aplikasi Whatsapp / Whatsapp bisnis dan nomor ponsel Anda terdaftar di Whatsapp untuk melanjutkan ke halaman obrolan Whatsapp."]]}
]
lokasi = [
        {
            "kode": "93",
            "negara": "AFGHANISTAN"
        },{
            "kode": "1-907",
            "negara": "ALASKA (USA)"
        },{
            "kode": "355",
            "negara": "ALBANIA"
        },{
            "kode": "213",
            "negara": "ALGERIA"
        },{
            "kode": "1-684",
            "negara": "AMERICAN SAMOA"
        },{
            "kode": "376",
            "negara": "ANDORRA"
        },{
            "kode": "244",
            "negara": "ANGOLA"
        },{
            "kode": "1-264",
            "negara": "ANGUILLA"
        },{
            "kode": "1-268",
            "negara": "ANTIGUA & BARBUDA"
        },{
            "kode": "54",
            "negara": "ARGENTINA"
        },{
            "kode": "374",
            "negara": "ARMENIA"
        },{
            "kode": "297",
            "negara": "ARUBA"
        },{
            "kode": "247",
            "negara": "ASCENSION"
        },{
            "kode": "61",
            "negara": "AUSTRALIA"
        },{
            "kode": "43",
            "negara": "AUSTRIA"
        },{
            "kode": "994",
            "negara": "AZERBAIJAN"
        },{
            "kode": "1-242",
            "negara": "BAHAMAS"
        },{
            "kode": "973",
            "negara": "BAHRAIN"
        },{
            "kode": "880",
            "negara": "BANGLADESH"
        },{
            "kode": "1-246",
            "negara": "BARBADOS"
        },{
            "kode": "375",
            "negara": "BELARUS"
        },{
            "kode": "32",
            "negara": "BELGIUM"
        },{
            "kode": "501",
            "negara": "BELIZE"
        },{
            "kode": "229",
            "negara": "BENIN"
        },{
            "kode": "1-441",
            "negara": "BERMUDA"
        },{
            "kode": "975",
            "negara": "BHUTAN"
        },{
            "kode": "591",
            "negara": "BOLIVIA"
        },{
            "kode": "387",
            "negara": "BOSNIA / HERZEGOVINA"
        },{
            "kode": "267",
            "negara": "BOTSWANA"
        },{
            "kode": "55",
            "negara": "BRAZIL"
        },{
            "kode": "1-284",
            "negara": "BRITISH VIRGINISLANDS"
        },{
            "kode": "673",
            "negara": "BRUNEI"
        },{
            "kode": "359",
            "negara": "BULGARIA"
        },{
            "kode": "226",
            "negara": "BURKINA FASO"
        },{
            "kode": "257",
            "negara": "BURUNDI"
        },{
            "kode": "855",
            "negara": "CAMBODIA"
        },{
            "kode": "237",
            "negara": "CAMEROON"
        },{
            "kode": "1",
            "negara": "CANADA"
        },{
            "kode": "238",
            "negara": "CAPE VERDE"
        },{
            "kode": "1-345",
            "negara": "CAYMAN ISLANDS"
        },{
            "kode": "236",
            "negara": "CENTRAL AFRICANREPUBLIC"
        },{
            "kode": "235",
            "negara": "CHAD"
        },{
            "kode": "56",
            "negara": "CHILE"
        },{
            "kode": "86",
            "negara": "CHINA"
        },{
            "kode": "57",
            "negara": "COLOMBIA"
        },{
            "kode": "269",
            "negara": "COMOROS"
        },{
            "kode": "242",
            "negara": "CONGO"
        },{
            "kode": "243",
            "negara": "CONGO DEM. REP.(ZAIRE)"
        },{
            "kode": "682",
            "negara": "COOK ISLAND"
        },{
            "kode": "506",
            "negara": "COSTA RICA"
        },{
            "kode": "385",
            "negara": "CROATIA"
        },{
            "kode": "53",
            "negara": "CUBA"
        },{
            "kode": "357",
            "negara": "CYPRUS"
        },{
            "kode": "420",
            "negara": "CZECH REPUBLIC"
        },{
            "kode": "45",
            "negara": "DENMARK"
        },{
            "kode": "246",
            "negara": "DIEGO GARCIA"
        },{
            "kode": "253",
            "negara": "DJIBOUTI"
        },{
            "kode": "1-767",
            "negara": "DOMINICA"
        },{
            "kode": "1-809",
            "negara": "DOMINICAN REPUBLIC"
        },{
            "kode": "670",
            "negara": "EAST TIMOR"
        },{
            "kode": "593",
            "negara": "ECUADOR"
        },{
            "kode": "20",
            "negara": "EGYPT"
        },{
            "kode": "503",
            "negara": "EL SALVADOR"
        },{
            "kode": "240",
            "negara": "EQUATORIAL GUINEA"
        },{
            "kode": "291",
            "negara": "ERITREA"
        },{
            "kode": "372",
            "negara": "ESTONIA"
        },{
            "kode": "251",
            "negara": "ETHIOPIA"
        },{
            "kode": "500",
            "negara": "FALKLAND ISLANDS"
        },{
            "kode": "298",
            "negara": "FAROE ISLANDS"
        },{
            "kode": "679",
            "negara": "FIJI"
        },{
            "kode": "358",
            "negara": "FINLAND"
        },{
            "kode": "33",
            "negara": "FRANCE"
        },{
            "kode": "594",
            "negara": "FRENCH GUIANA"
        },{
            "kode": "689",
            "negara": "FRENCH POLYNESIA"
        },{
            "kode": "241",
            "negara": "GABON"
        },{
            "kode": "220",
            "negara": "GAMBIA"
        },{
            "kode": "995",
            "negara": "GEORGIA"
        },{
            "kode": "49",
            "negara": "GERMANY"
        },{
            "kode": "233",
            "negara": "GHANA"
        },{
            "kode": "350",
            "negara": "GIBRALTAR"
        },{
            "kode": "30",
            "negara": "GREECE"
        },{
            "kode": "299",
            "negara": "GREENLAND"
        },{
            "kode": "1-473",
            "negara": "GRENADA"
        },{
            "kode": "590",
            "negara": "GUADALOUPE"
        },{
            "kode": "1-671",
            "negara": "GUAM"
        },{
            "kode": "502",
            "negara": "GUATEMALA"
        },{
            "kode": "224",
            "negara": "GUINEA"
        },{
            "kode": "245",
            "negara": "GUINEA BISSAU"
        },{
            "kode": "592",
            "negara": "GUYANA"
        },{
            "kode": "509",
            "negara": "HAITI"
        },{
            "kode": "1-808",
            "negara": "HAWAII (USA)"
        },{
            "kode": "504",
            "negara": "HONDURAS"
        },{
            "kode": "852",
            "negara": "HONG KONG"
        },{
            "kode": "36",
            "negara": "HUNGARY"
        },{
            "kode": "354",
            "negara": "ICELAND"
        },{
            "kode": "91",
            "negara": "INDIA"
        },{
            "kode": "62",
            "negara": "INDONESIA"
        },{
            "kode": "98",
            "negara": "IRAN"
        },{
            "kode": "964",
            "negara": "IRAQ"
        },{
            "kode": "353",
            "negara": "IRELAND"
        },{
            "kode": "972",
            "negara": "ISRAEL"
        },{
            "kode": "39",
            "negara": "ITALY"
        },{
            "kode": "225",
            "negara": "IVORY COAST"
        },{
            "kode": "1-876",
            "negara": "JAMAICA"
        },{
            "kode": "81",
            "negara": "JAPAN"
        },{
            "kode": "962",
            "negara": "JORDAN"
        },{
            "kode": "7",
            "negara": "KAZAKHSTAN"
        },{
            "kode": "254",
            "negara": "KENYA"
        },{
            "kode": "686",
            "negara": "KIRIBATI"
        },{
            "kode": "850",
            "negara": "KOREA (NORTH)"
        },{
            "kode": "82",
            "negara": "KOREA SOUTH"
        },{
            "kode": "965",
            "negara": "KUWAIT"
        },{
            "kode": "996",
            "negara": "KYRGHYZSTAN"
        },{
            "kode": "856",
            "negara": "LAOS"
        },{
            "kode": "371",
            "negara": "LATVIA"
        },{
            "kode": "961",
            "negara": "LEBANON"
        },{
            "kode": "266",
            "negara": "LESOTHO"
        },{
            "kode": "231",
            "negara": "LIBERIA"
        },{
            "kode": "218",
            "negara": "LIBYA"
        },{
            "kode": "423",
            "negara": "LIECHTENSTEIN"
        },{
            "kode": "370",
            "negara": "LITHUANIA"
        },{
            "kode": "352",
            "negara": "LUXEMBOURG"
        },{
            "kode": "853",
            "negara": "MACAU"
        },{
            "kode": "389",
            "negara": "MACEDONIA"
        },{
            "kode": "261",
            "negara": "MADAGASCAR"
        },{
            "kode": "265",
            "negara": "MALAWI"
        },{
            "kode": "60",
            "negara": "MALAYSIA"
        },{
            "kode": "960",
            "negara": "MALDIVES"
        },{
            "kode": "223",
            "negara": "MALI"
        },{
            "kode": "356",
            "negara": "MALTA"
        },{
            "kode": "1-670",
            "negara": "MARIANA IS.(SAIPAN)"
        },{
            "kode": "692",
            "negara": "MARSHALL ISLANDS"
        },{
            "kode": "596",
            "negara": "MARTINIQUE(FRENCHANTILLES)"
        },{
            "kode": "222",
            "negara": "MAURITANIA"
        },{
            "kode": "230",
            "negara": "MAURITIUS"
        },{
            "kode": "269",
            "negara": "MAYOTTE"
        },{
            "kode": "52",
            "negara": "MEXICO"
        },{
            "kode": "691",
            "negara": "MICRONESIA"
        },{
            "kode": "373",
            "negara": "MOLDOVA"
        },{
            "kode": "377",
            "negara": "MONACO"
        },{
            "kode": "976",
            "negara": "MONGOLIA"
        },{
            "kode": "1-664 ",
            "negara": "MONTSERRAT"
        },{
            "kode": "212",
            "negara": "MOROCCO"
        },{
            "kode": "258",
            "negara": "MOZAMBIQUE"
        },{
            "kode": "95",
            "negara": "MYANMAR"
        },{
            "kode": "264",
            "negara": "NAMIBIA"
        },{
            "kode": "674",
            "negara": "NAURU"
        },{
            "kode": "977",
            "negara": "NEPAL"
        },{
            "kode": "31",
            "negara": "NETHERLANDS"
        },{
            "kode": "599",
            "negara": "NETHERLANDS ANTILLES"
        },{
            "kode": "687",
            "negara": "NEW CALEDONIA"
        },{
            "kode": "64",
            "negara": "NEW ZEALAND"
        },{
            "kode": "505",
            "negara": "NICARAGUA"
        },{
            "kode": "227",
            "negara": "NIGER"
        },{
            "kode": "234",
            "negara": "NIGERIA"
        },{
            "kode": "683",
            "negara": "NIUE ISLAND"
        },{
            "kode": "47",
            "negara": "NORWAY"
        },{
            "kode": "968",
            "negara": "OMAN"
        },{
            "kode": "92",
            "negara": "PAKISTAN"
        },{
            "kode": "680",
            "negara": "PALAU"
        },{
            "kode": "970",
            "negara": "PALESTINE"
        },{
            "kode": "507",
            "negara": "PANAMA"
        },{
            "kode": "675",
            "negara": "PAPUA NEW GUINEA"
        },{
            "kode": "595",
            "negara": "PARAGUAY"
        },{
            "kode": "51",
            "negara": "PERU"
        },{
            "kode": "63",
            "negara": "PHILIPPINES"
        },{
            "kode": "48",
            "negara": "POLAND"
        },{
            "kode": "351",
            "negara": "PORTUGAL"
        },{
            "kode": "1-787",
            "negara": "PUERTO RICO (I) (USA)"
        },{
            "kode": "1-939",
            "negara": "PUERTO RICO (II)(USA)"
        },{
            "kode": "974",
            "negara": "QATAR"
        },{
            "kode": "262",
            "negara": "REUNION"
        },{
            "kode": "40",
            "negara": "ROMANIA"
        },{
            "kode": "7",
            "negara": "RUSSIA"
        },{
            "kode": "250",
            "negara": "RWANDA"
        },{
            "kode": "685",
            "negara": "SAMOA WESTERN"
        },{
            "kode": "378",
            "negara": "SAN MARINO"
        },{
            "kode": "239",
            "negara": "SAO TOME &PRINCIPE"
        },{
            "kode": "966",
            "negara": "SAUDI ARABIA"
        },{
            "kode": "221",
            "negara": "SENEGAL"
        },{
            "kode": "248",
            "negara": "SEYCHELLES"
        },{
            "kode": "232",
            "negara": "SIERRA LEONE"
        },{
            "kode": "65",
            "negara": "SINGAPORE"
        },{
            "kode": "421",
            "negara": "SLOVAKIA"
        },{
            "kode": "386",
            "negara": "SLOVENIA"
        },{
            "kode": "677",
            "negara": "SOLOMON ISLANDS"
        },{
            "kode": "252",
            "negara": "SOMALIA"
        },{
            "kode": "27",
            "negara": "SOUTH AFRICA"
        },{
            "kode": "34",
            "negara": "SPAIN"
        },{
            "kode": "94",
            "negara": "SRI LANKA"
        },{
            "kode": "290",
            "negara": "ST HELENA"
        },{
            "kode": "1-869 ",
            "negara": "ST KITTS & NEVIS"
        },{
            "kode": "1-758 ",
            "negara": "ST LUCIA"
        },{
            "kode": "1-784 ",
            "negara": "ST VINCENT &GRENADINES"
        },{
            "kode": "508",
            "negara": "ST. PIERRE &MIQUELON"
        },{
            "kode": "249",
            "negara": "SUDAN"
        },{
            "kode": "597",
            "negara": "SURINAM"
        },{
            "kode": "268",
            "negara": "SWAZILAND"
        },{
            "kode": "46",
            "negara": "SWEDEN"
        },{
            "kode": "41",
            "negara": "SWITZERLAND"
        },{
            "kode": "963",
            "negara": "SYRIA"
        },{
            "kode": "886",
            "negara": "TAIWAN"
        },{
            "kode": "992",
            "negara": "TAJIKISTAN"
        },{
            "kode": "255",
            "negara": "TANZANIA"
        },{
            "kode": "66",
            "negara": "THAILAND"
        },{
            "kode": "228",
            "negara": "TOGO"
        },{
            "kode": "690",
            "negara": "TOKELAU"
        },{
            "kode": "676",
            "negara": "TONGA"
        },{
            "kode": "1-868",
            "negara": "TRINIDAD & TOBAGO"
        },{
            "kode": "216",
            "negara": "TUNISIA"
        },{
            "kode": "90",
            "negara": "TURKEY"
        },{
            "kode": "993",
            "negara": "TURKMENISTAN"
        },{
            "kode": "1-649 ",
            "negara": "TURKS & CAICOSISLANDS"
        },{
            "kode": "688",
            "negara": "TUVALU"
        },{
            "kode": "256",
            "negara": "UGANDA"
        },{
            "kode": "380",
            "negara": "UKRAINE"
        },{
            "kode": "971",
            "negara": "UNITED ARAB EMIRATES"
        },{
            "kode": "44",
            "negara": "UNITED KINGDOM"
        },{
            "kode": "598",
            "negara": "URUGUAY"
        },{
            "kode": "998",
            "negara": "UZBEKISTAN"
        },{
            "kode": "678",
            "negara": "VANUATU"
        },{
            "kode": "39",
            "negara": "VATICAN CITY"
        },{
            "kode": "58",
            "negara": "VENEZUELA"
        },{
            "kode": "84",
            "negara": "VIETNAM"
        },{
            "kode": "1-340",
            "negara": "VIRGIN ISLAND (USA)"
        },{
            "kode": "681",
            "negara": "WALLIS & FUTUNA"
        },{
            "kode": "967",
            "negara": "YEMEN"
        },{
            "kode": "381",
            "negara": "YUGOSLAVIA (SERBIA)"
        },{
            "kode": "260",
            "negara": "ZAMBIA"
        },{
            "kode": "255",
            "negara": "ZANZIBAR"
        },{
            "kode": "263",
            "negara": "ZIMBABWE"
        }]
sistem = {
    open() {
        sistem.home()
        if(!admob){
            return false
        }else{
            oldAdmob.banner()
        }
    },
    back: () => !document.querySelector('#home').getBoundingClientRect().top ? navigator.app.exitApp() : window.scrollTo({ top: 0, behavior: 'smooth' }),
    translate(a) {
        a.value = !parseInt(a.value) ? 1 : 0
        a.setAttribute('data-after',!parseInt(a.value) ? 'radio_button_unchecked' : 'radio_button_checked')
        this.translates(a.value)
    },
    translates(a = 0) {
        for(b in translates[a]){
            trans.setAttribute('data-before',translates[a][b][0])
            trans.innerHTML = new Intl.ListFormat(b, { style: 'long', type: 'disjunction' }).format(translates[a][b][1])
        }
    },
    layout: () => document.querySelectorAll('.room').forEach(a => a.style.height = `${window.innerHeight}px`),
    home() {
        sistem.layout()
        if (wa_select.childElementCount === 1) {
            this.listLokasi()
        }
        this.listHistory()
        this.default()
        this.translates()
        window.onresize = sistem.layout
        whatsapp.onsubmit = function(a) {
            a.preventDefault()
            b = Object.fromEntries(new FormData(this).entries())
            c = {
                times: Date.now(),
                phone: `${b.local}${b.phone}`
            }
            d = !JSON.parse(localStorage.getItem('history')) ? [] : JSON.parse(localStorage.getItem('history'))
            d.push(c)
            localStorage.setItem('history', JSON.stringify(d))
            sistem.chat(`https://wa.me/${c.phone}`)
        }
    },
    listLokasi() {
        lokasi.forEach(({ kode, negara }) => {
            a = document.createElement('option')
            a.value = kode
            a.innerHTML = negara
            wa_select.appendChild(a)
        })
    },
    listHistory() {
        histori.innerHTML = ''
        if (!JSON.parse(localStorage.getItem('history'))) {
            this.listViewHistory({})
        } else {
            a = JSON.parse(localStorage.getItem('history'))
            a.sort((b,c) => b.times > c.times? b.times - c.times : c.times - b.times)
            a.forEach(this.listViewHistory)
        }
    },
    listViewHistory({ times = 'data kosong', phone = 'error' }) {
        a = document.createElement('blockquote')
        a.className = 'list'
        a.setAttribute('onclick', !parseInt(times) ? 'sistem.back()' : `oldAdmob.int('${phone}')`)
        a.setAttribute('data-before', phone)
        a.innerHTML = !parseInt(times) ? times : sistem.times(times)
        histori.appendChild(a)
    },
    default () {
        a = !localStorage.getItem('default') ? 62 : localStorage.getItem('default')
        b = lokasi.find(element => element.kode === a)
        if (!b) {
            document.querySelector('select').value = 62
        } else {
            wa_loc.value = b.kode
            document.querySelector('select').value = b.kode
            localStorage.setItem('default', b.kode)
        }
    },
    set: a => {
        wa_loc.value = a.value
        localStorage.setItem('default', a.value)
    },
    chat: a => {
        window.location.href = a
        sistem.home()
    },
    times: a => new Intl.DateTimeFormat('id-ID', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(parseFloat(a))),
    input: a => sistem.default(a.value),
    playStore: () => location.href = 'https://play.google.com/store/apps/details?id=what.smooth.asia',
    button: a => document.querySelector(!a ? '#home' : '#histori').scrollIntoView({ behavior: 'smooth' })
}
document.addEventListener('deviceready', sistem.open, false)
document.addEventListener("resume", sistem.home, false)
document.addEventListener("backbutton", sistem.back, false)