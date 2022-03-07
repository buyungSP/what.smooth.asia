
oldAdmob = {
    banner(){
        admobid = {
            banner: 'ca-app-pub-5890023057020023/9560902191',
            interstitial: 'ca-app-pub-5890023057020023/3413419879',
        }
        admobis = {
            banner:'ca-app-pub-3940256099942544/6300978111',
            interstitial:'ca-app-pub-3940256099942544/1033173712'
        }
        admob.banner.config({
            id: admobid.banner,
            isTesting: false,
            autoShow: true,
            bannerAtTop:true,
            overlap:true,
            size:'BANNER'
        })
        admob.banner.prepare()
        admob.interstitial.config({
            id: admobid.interstitial,
            isTesting: false,
            autoShow: false,
        })
        admob.interstitial.prepare()
        document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
            sessionStorage.setItem('int',true)
        })
        document.addEventListener('admob.interstitial.events.LOAD', function(event) {
            sessionStorage.removeItem('int')
        })
    },
    int(phone){
        if(!sessionStorage.getItem('int')){
            admob.interstitial.show()
            document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
                sistem.chat(`https://wa.me/${phone}`)
                admob.interstitial.prepare()
            })
        }else{
            sistem.chat(`https://wa.me/${phone}`)
        }
    },
}
lokasi = [
    ['AFGHANISTAN','93'],
    ['ALASKA (USA)','1-907'],
    ['ALBANIA','355'],
    ['ALGERIA','213'],
    ['AMERICAN SAMOA','1-684'],
    ['ANDORRA','376'],
    ['ANGOLA','244'],
    ['ANGUILLA','1-264'],
    ['ANTIGUA & BARBUDA','1-268'],
    ['ARGENTINA','54'],
    ['ARMENIA','374'],
    ['ARUBA','297'],
    ['ASCENSION','247'],
    ['AUSTRALIA','61'],
    ['AUSTRIA','43'],
    ['AZERBAIJAN','994'],
    ['BAHAMAS','1-242'],
    ['BAHRAIN','973'],
    ['BANGLADESH','880'],
    ['BARBADOS','1-246'],
    ['BELARUS','375'],
    ['BELGIUM','32'],
    ['BELIZE','501'],
    ['BENIN','229'],
    ['BERMUDA','1-441'],
    ['BHUTAN','975'],
    ['BOLIVIA','591'],
    ['BOSNIA / HERZEGOVINA','387'],
    ['BOTSWANA','267'],
    ['BRAZIL','55'],
    ['BRITISH VIRGINISLANDS','1-284'],
    ['BRUNEI','673'],
    ['BULGARIA','359'],
    ['BURKINA FASO','226'],
    ['BURUNDI','257'],
    ['CAMBODIA','855'],
    ['CAMEROON','237'],
    ['CANADA','1'],
    ['CAPE VERDE','238'],
    ['CAYMAN ISLANDS','1-345'],
    ['CENTRAL AFRICANREPUBLIC','236'],
    ['CHAD','235'],
    ['CHILE','56'],
    ['CHINA','86'],
    ['COLOMBIA','57'],
    ['COMOROS','269'],
    ['CONGO','242'],
    ['CONGO DEM. REP.(ZAIRE)','243'],
    ['COOK ISLAND','682'],
    ['COSTA RICA','506'],
    ['CROATIA','385'],
    ['CUBA','53'],
    ['CYPRUS','357'],
    ['CZECH REPUBLIC','420'],
    ['DENMARK','45'],
    ['DIEGO GARCIA','246'],
    ['DJIBOUTI','253'],
    ['DOMINICA','1-767'],
    ['DOMINICAN REPUBLIC','1-809'],
    ['EAST TIMOR','670'],
    ['ECUADOR','593'],
    ['EGYPT','20'],
    ['EL SALVADOR','503'],
    ['EQUATORIAL GUINEA','240'],
    ['ERITREA','291'],
    ['ESTONIA','372'],
    ['ETHIOPIA','251'],
    ['FALKLAND ISLANDS','500'],
    ['FAROE ISLANDS','298'],
    ['FIJI','679'],
    ['FINLAND','358'],
    ['FRANCE','33'],
    ['FRENCH GUIANA','594'],
    ['FRENCH POLYNESIA','689'],
    ['GABON','241'],
    ['GAMBIA','220'],
    ['GEORGIA','995'],
    ['GERMANY','49'],
    ['GHANA','233'],
    ['GIBRALTAR','350'],
    ['GREECE','30'],
    ['GREENLAND','299'],
    ['GRENADA','1-473'],
    ['GUADALOUPE','590'],
    ['GUAM','1-671'],
    ['GUATEMALA','502'],
    ['GUINEA','224'],
    ['GUINEA BISSAU','245'],
    ['GUYANA','592'],
    ['HAITI','509'],
    ['HAWAII (USA)','1-808'],
    ['HONDURAS','504'],
    ['HONG KONG','852'],
    ['HUNGARY','36'],
    ['ICELAND','354'],
    ['INDIA','91'],
    ['INDONESIA','62'],
    ['IRAN','98'],
    ['IRAQ','964'],
    ['IRELAND','353'],
    ['ISRAEL','972'],
    ['ITALY','39'],
    ['IVORY COAST','225'],
    ['JAMAICA','1-876'],
    ['JAPAN','81'],
    ['JORDAN','962'],
    ['KAZAKHSTAN','7'],
    ['KENYA','254'],
    ['KIRIBATI','686'],
    ['KOREA (NORTH)','850'],
    ['KOREA SOUTH','82'],
    ['KUWAIT','965'],
    ['KYRGHYZSTAN','996'],
    ['LAOS','856'],
    ['LATVIA','371'],
    ['LEBANON','961'],
    ['LESOTHO','266'],
    ['LIBERIA','231'],
    ['LIBYA','218'],
    ['LIECHTENSTEIN','423'],
    ['LITHUANIA','370'],
    ['LUXEMBOURG','352'],
    ['MACAU','853'],
    ['MACEDONIA','389'],
    ['MADAGASCAR','261'],
    ['MALAWI','265'],
    ['MALAYSIA','60'],
    ['MALDIVES','960'],
    ['MALI','223'],
    ['MALTA','356'],
    ['MARIANA IS.(SAIPAN)','1-670'],
    ['MARSHALL ISLANDS','692'],
    ['MARTINIQUE(FRENCHANTILLES)','596'],
    ['MAURITANIA','222'],
    ['MAURITIUS','230'],
    ['MAYOTTE','269'],
    ['MEXICO','52'],
    ['MICRONESIA','691'],
    ['MOLDOVA','373'],
    ['MONACO','377'],
    ['MONGOLIA','976'],
    ['MONTSERRAT','1-664 '],
    ['MOROCCO','212'],
    ['MOZAMBIQUE','258'],
    ['MYANMAR','95'],
    ['NAMIBIA','264'],
    ['NAURU','674'],
    ['NEPAL','977'],
    ['NETHERLANDS','31'],
    ['NETHERLANDS ANTILLES','599'],
    ['NEW CALEDONIA','687'],
    ['NEW ZEALAND','64'],
    ['NICARAGUA','505'],
    ['NIGER','227'],
    ['NIGERIA','234'],
    ['NIUE ISLAND','683'],
    ['NORWAY','47'],
    ['OMAN','968'],
    ['PAKISTAN','92'],
    ['PALAU','680'],
    ['PALESTINE','970'],
    ['PANAMA','507'],
    ['PAPUA NEW GUINEA','675'],
    ['PARAGUAY','595'],
    ['PERU','51'],
    ['PHILIPPINES','63'],
    ['POLAND','48'],
    ['PORTUGAL','351'],
    ['PUERTO RICO (I) (USA)','1-787'],
    ['PUERTO RICO (II)(USA)','1-939'],
    ['QATAR','974'],
    ['REUNION','262'],
    ['ROMANIA','40'],
    ['RUSSIA','7'],
    ['RWANDA','250'],
    ['SAMOA WESTERN','685'],
    ['SAN MARINO','378'],
    ['SAO TOME &PRINCIPE','239'],
    ['SAUDI ARABIA','966'],
    ['SENEGAL','221'],
    ['SEYCHELLES','248'],
    ['SIERRA LEONE','232'],
    ['SINGAPORE','65'],
    ['SLOVAKIA','421'],
    ['SLOVENIA','386'],
    ['SOLOMON ISLANDS','677'],
    ['SOMALIA','252'],
    ['SOUTH AFRICA','27'],
    ['SPAIN','34'],
    ['SRI LANKA','94'],
    ['ST HELENA','290'],
    ['ST KITTS & NEVIS','1-869 '],
    ['ST LUCIA','1-758 '],
    ['ST VINCENT &GRENADINES','1-784 '],
    ['ST. PIERRE &MIQUELON','508'],
    ['SUDAN','249'],
    ['SURINAM','597'],
    ['SWAZILAND','268'],
    ['SWEDEN','46'],
    ['SWITZERLAND','41'],
    ['SYRIA','963'],
    ['TAIWAN','886'],
    ['TAJIKISTAN','992'],
    ['TANZANIA','255'],
    ['THAILAND','66'],
    ['TOGO','228'],
    ['TOKELAU','690'],
    ['TONGA','676'],
    ['TRINIDAD & TOBAGO','1-868'],
    ['TUNISIA','216'],
    ['TURKEY','90'],
    ['TURKMENISTAN','993'],
    ['TURKS & CAICOSISLANDS','1-649 '],
    ['TUVALU','688'],
    ['UGANDA','256'],
    ['UKRAINE','380'],
    ['UNITED ARAB EMIRATES','971'],
    ['UNITED KINGDOM','44'],
    ['URUGUAY','598'],
    ['UZBEKISTAN','998'],
    ['VANUATU','678'],
    ['VATICAN CITY','39'],
    ['VENEZUELA','58'],
    ['VIETNAM','84'],
    ['VIRGIN ISLAND (USA)','1-340'],
    ['WALLIS & FUTUNA','681'],
    ['YEMEN','967'],
    ['YUGOSLAVIA (SERBIA)','381'],
    ['ZAMBIA','260'],
    ['ZANZIBAR','255'],
    ['ZIMBABWE','263']
]
sistem = {
    open(){
        oldAdmob.banner()
        sistem.home()
    },
    back(){
        !document.querySelector('#home').getBoundingClientRect().top? navigator.app.exitApp() : window.scrollTo({top:0,behavior:'smooth'})
    },
    translate(a){
        a.value = !parseInt(a.value)? 1 : 0
        a.children[0].innerHTML = !parseInt(a.value)? 'radio_button_unchecked' : 'radio_button_checked'
        document.querySelectorAll('#trans').forEach(b => b.classList.toggle('hide'))
    },
    layout(){
        document.querySelectorAll('.room').forEach( a => a.style.height = `${window.innerHeight}px`)
    },
    home : () =>{
        sistem.layout()
        a = document
        b = a.querySelector('select')
        b.innerHTML = ''
        c = a.createElement('option')
        c.setAttribute('hidden',true)
        c.innerHTML = 'Select country'
        b.appendChild(c)
        for(d of lokasi){
            e = a.createElement('option')
            e.setAttribute('value',d[1])
            e.innerHTML = d[0]
            b.appendChild(e)
        }
        f = !JSON.parse(localStorage.getItem('history'))? new Array() : JSON.parse(localStorage.getItem('history'))
        g = a.querySelector('#histori')
        g.innerHTML = ''
        for(h of f){
            i = a.createElement('blockquote')
            i.className = 'list'
            i.setAttribute('onclick',`oldAdmob.int('${h.phone}')`)
            i.setAttribute('data-before',h.phone)
            i.innerHTML = sistem.times(h.times)
            g.appendChild(i)
        }
        l = !localStorage.getItem('default')? 62 : localStorage.getItem('default')
        sistem.default(l)
        window.onresize = sistem.layout
    },
    default : a =>{
        b = lokasi.find(element => element[1] == a)
        if(!b){
            document.querySelector('select').selectedIndex  = 0
        }else{
            document.querySelector('#wa_loc').value = b[1]
            document.querySelector('select').selectedIndex  = lokasi.indexOf(b) + 1
            localStorage.setItem('default',b[1])
        }
    },
    times : a =>{
        return new Intl.DateTimeFormat('id-ID',{ dateStyle: 'full', timeStyle: 'short' }).format(new Date(parseFloat(a)))
    },
    set : a =>{
        document.querySelector('#wa_loc').value = a.value
        localStorage.setItem('default',a.value)
    },
    submit : function(a) {
        a.preventDefault()
        g = !JSON.parse(localStorage.getItem('history'))? new Array() : JSON.parse(localStorage.getItem('history'))
        g.push({
            times : Date.now(),
            phone : `${a.target.local.value}${a.target.phone.value}`
        })
        localStorage.setItem('history',JSON.stringify(g))
        sistem.chat(`https://wa.me/${a.target.local.value}${a.target.phone.value}`)
    },
    chat : a =>{
        window.location.href = a
        sistem.home()
    },
    input : a =>{
        sistem.default(a.value)
    },
    playStore(){
        window.location.href = 'https://play.google.com/store/apps/details?id=what.smooth.asia'
    },
    button(a){
        document.querySelector(!a?'#home':'#histori').scrollIntoView({behavior:'smooth'})
    },
    about(){
        window.location.href = 'https://play.google.com/store/apps/dev?id=8080408610935462911'
    }
}
document.addEventListener('deviceready', sistem.open, false)
document.addEventListener("resume", sistem.home, false)
document.addEventListener("backbutton", sistem.back, false)