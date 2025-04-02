// splitted pokemon names index = id and .join("") = name
const splitted_names = [
    ["", ""],
    ["Bulba", "saur"],
    ["Ivy", "saur"],
    ["Venu", "saur"],
    ["Char", "mander"],
    ["Char", "meleon"],
    ["Char", "izard"],
    ["Squirt", "tle"],
    ["War", "tortle"],
    ["Blast", "toise"],
    ["Cater", "pie"],
    ["Meta", "pod"],
    ["Butter", "free"],
    ["Wee", "dle"],
    ["Kak", "una"],
    ["Bee", "drill"],
    ["Pid", "gey"],
    ["Pidge", "otto"],
    ["Pid", "geot"],
    ["Rat", "tata"],
    ["Rat", "icate"],
    ["Spear", "row"],
    ["Fear", "row"],
    ["Ek", "ans"],
    ["Ar", "bok"],
    ["Pika", "chu"],
    ["Rai", "chu"],
    ["Sand", "shrew"],
    ["Sand", "slash"],
    ["Nido", "ran"],
    ["Nido", "rina"],
    ["Nido", "queen"],
    ["Nido", "ran"],
    ["Nido", "rino"],
    ["Nido", "king"],
    ["Clef", "fairy"],
    ["Clef", "fable"],
    ["Vul", "pix"],
    ["Nine", "tales"],
    ["Jiggly", "puff"],
    ["Wiggly", "tuff"],
    ["Zu", "bat"],
    ["Gol", "bat"],
    ["Odd", "ish"],
    ["Gloo", "oom"],
    ["Vile", "plume"],
    ["Pa", "ras"],
    ["Para", "sect"],
    ["Veno", "nat"],
    ["Veno", "moth"],
    ["Dig", "lett"],
    ["Dug", "trio"],
    ["Meow", "th"],
    ["Per", "sian"],
    ["Psy", "duck"],
    ["Gol", "duck"],
    ["Man", "key"],
    ["Prime", "ape"],
    ["Growl", "lithe"],
    ["Arca", "nine"],
    ["Poli", "wag"],
    ["Poli", "whirl"],
    ["Poli", "wrath"],
    ["Ab", "ra"],
    ["Kada", "bra"],
    ["Ala", "kazam"],
    ["Ma", "chop"],
    ["Ma", "choke"],
    ["Ma", "champ"],
    ["Bell", "sprout"],
    ["Weepin", "bell"],
    ["Victree", "bell"],
    ["Tenta", "cool"],
    ["Tenta", "cruel"],
    ["Geo", "dude"],
    ["Grave", "ler"],
    ["Go", "lem"],
    ["Pony", "ta"],
    ["Rapi", "dash"],
    ["Slow", "poke"],
    ["Slow", "bro"],
    ["Magne", "mite"],
    ["Magne", "ton"],
    ["Far", "fetchd"],
    ["Do", "duo"],
    ["Do", "drio"],
    ["See", "eel"],
    ["Dew", "gong"],
    ["Gri", "mer"],
    ["Mu", "uk"],
    ["Shell", "der"],
    ["Cloy", "ster"],
    ["Gas", "tly"],
    ["Haun", "ter"],
    ["Gen", "gar"],
    ["On", "nix"],
    ["Drow", "zee"],
    ["Hyp", "no"],
    ["Krab", "by"],
    ["King", "ler"],
    ["Volt", "orb"],
    ["Electr", "ode"],
    ["Exegg", "cute"],
    ["Exeggu", "tor"],
    ["Cu", "bone"],
    ["Maro", "wak"],
    ["Hitmon", "lee"],
    ["Hitmon", "chan"],
    ["Licki", "tung"],
    ["Koff", "fing"],
    ["Wee", "zing"],
    ["Rhy", "horn"],
    ["Rhy", "don"],
    ["Chan", "sey"],
    ["Tan", "gela"],
    ["Kangas", "khan"],
    ["Hor", "sea"],
    ["Sea", "dra"],
    ["Gol", "deen"],
    ["Sea", "king"],
    ["Star", "yu"],
    ["Star", "mie"],
    ["Mr. ", "mime"],
    ["Scy", "ther"],
    ["Jyn", "nx"],
    ["Electa", "buzz"],
    ["Mag", "mar"],
    ["Pin", "sir"],
    ["Tau", "ros"],
    ["Magi", "karp"],
    ["Gyara", "dos"],
    ["Lap", "ras"],
    ["Dit", "to"],
    ["Ee", "vee"],
    ["Vapor", "eon"],
    ["Jolt", "eon"],
    ["Fla", "reon"],
    ["Pory", "gon"],
    ["Oma", "nyte"],
    ["Oma", "star"],
    ["Kabu", "to"],
    ["Kabu", "tops"],
    ["Aero", "dactyl"],
    ["Snor", "lax"],
    ["Arti", "cuno"],
    ["Zap", "dos"],
    ["Mol", "tres"],
    ["Dra", "tini"],
    ["Drago", "nair"],
    ["Drago", "nite"],
    ["Mew", "two"],
    ["Mew", "ew"],
    ["Chiko", "rita"],
    ["Bay", "leef"],
    ["Mega", "nium"],
    ["Cynda", "quil"],
    ["Qui", "lava"],
    ["Typh", "losion"],
    ["Toto", "dile"],
    ["Croco", "naw"],
    ["Fera", "ligatr"],
    ["Sen", "tret"],
    ["Fur", "ret"],
    ["Hoot", "hoot"],
    ["Noct", "owl"],
    ["Ledy", "ba"],
    ["Led", "ian"],
    ["Spina", "rak"],
    ["Aria", "dos"],
    ["Cro", "bat"],
    ["Chin", "chou"],
    ["Lan", "turn"],
    ["Pi", "chu"],
    ["Clef", "fa"],
    ["Iggly", "buff"],
    ["Toge", "pi"],
    ["Toge", "tic"],
    ["Na", "tu"],
    ["Xa", "tu"],
    ["Ma", "reep"],
    ["Flaa", "ffy"],
    ["Ampha", "ros"],
    ["Bell", "ossom"],
    ["Ma", "rill"],
    ["Azuma", "rill"],
    ["Sudo", "woodo"],
    ["Poli", "toed"],
    ["Hop", "pip"],
    ["Skip", "loom"],
    ["Jump", "luff"],
    ["Ai", "pom"],
    ["Sun", "kern"],
    ["Sun", "flora"],
    ["Yan", "ma"],
    ["Woo", "per"],
    ["Quag", "sire"],
    ["Esp", "eon"],
    ["Umb", "reon"],
    ["Mur", "krow"],
    ["Slow", "king"],
    ["Mis", "dreavus"],
    ["Un", "own"],
    ["Wob", "buffet"],
    ["Gira", "farig"],
    ["Pine", "co"],
    ["Forre", "tress"],
    ["Dun", "sparce"],
    ["Gli", "gar"],
    ["Stee", "lix"],
    ["Snub", "bull"],
    ["Gran", "bull"],
    ["Qwil", "fish"],
    ["Sci", "zor"],
    ["Shu", "ckle"],
    ["Hera", "cross"],
    ["Snea", "sel"],
    ["Teddi", "ursa"],
    ["Ursa", "ring"],
    ["Slug", "gma"],
    ["Mag", "cargo"],
    ["Swi", "nub"],
    ["Pilo", "swine"],
    ["Cor", "sola"],
    ["Remo", "raid"],
    ["Octi", "llery"],
    ["Deli", "bird"],
    ["Man", "tine"],
    ["Skar", "mory"],
    ["Houn", "dour"],
    ["Houn", "doom"],
    ["King", "dra"],
    ["Phan", "py"],
    ["Don", "phan"],
    ["Pory", "gon2"],
    ["Stan", "tler"],
    ["Smear", "gle"],
    ["Ty", "rogue"],
    ["Hitmon", "top"],
    ["Smoo", "chum"],
    ["Ele", "kid"],
    ["Mag", "by"],
    ["Mil", "tank"],
    ["Blis", "sey"],
    ["Rai", "kou"],
    ["En", "tei"],
    ["Sui", "cune"],
    ["Larvi", "tar"],
    ["Pupi", "tar"],
    ["Tyran", "itar"],
    ["Lu", "gia"],
    ["Ho-", "oh"],
    ["Cele", "bi"],
    ["Azu", "rill"],
    ["Wy", "naut"],
    ["Ambi", "pom"],
    ["Mis", "magius"],
    ["Honch", "krow"],
    ["Bon", "sly"],
    ["Mime", " Jr."],
    ["Happi", "piny"],
    ["Munch", "lax"],
    ["Man", "tyke"],
    ["Weav", "vile"],
    ["Magne", "zone"],
    ["Licki", "licky"],
    ["Rhy", "perior"],
    ["Tan", "growth"],
    ["Electi", "vire"],
    ["Magmor", "mortar"],
    ["Toge", "kiss"],
    ["Yan", "mega"],
    ["Leaf", "feon"],
    ["Glace", "ceon"],
    ["Glis", "cor"],
    ["Mamo", "swine"],
    ["Pory", "gon-Z"],
    ["Tree", "cko"],
    ["Gro", "vyle"],
    ["Scep", "tile"],
    ["Torch", "chic"],
    ["Com", "busken"],
    ["Bla", "ziken"],
    ["Mud", "kip"],
    ["Marsh", "tomp"],
    ["Swamp", "pert"],
    ["Ral", "ts"],
    ["Kir", "lia"],
    ["Garde", "voir"],
    ["Gall", "lade"],
    ["Shed", "inja"],
    ["Kec", "eon"],
    ["Bel", "dum"],
    ["Met", "tang"],
    ["Meta", "gross"],
    ["Bi", "doof"],
    ["Spiri", "tomb"],
    ["Luca", "cario"],
    ["Gib", "ble"],
    ["Gab", "bite"],
    ["Gar", "chomp"],
    ["Maw", "wile"],
    ["Lil", "leep"],
    ["Crad", "dily"],
    ["Ano", "rith"],
    ["Arm", "aldo"],
    ["Cran", "idos"],
    ["Ram", "pardos"],
    ["Shiel", "don"],
    ["Bastio", "don"],
    ["Sla", "king"],
    ["Ab", "sol"],
    ["Dus", "skull"],
    ["Dusc", "clops"],
    ["Dusk", "noir"],
    ["Wail", "lord"],
    ["Arc", "ceus"],
    ["Tur", "wig"],
    ["Gro", "tle"],
    ["Tor", "terra"],
    ["Chim", "char"],
    ["Mon", "ferno"],
    ["Infer", "nape"],
    ["Pip", "lup"],
    ["Prin", "plup"],
    ["Empo", "leon"],
    ["Nose", "pass"],
    ["Probo", "pass"],
    ["Hon", "edge"],
    ["Doub", "blade"],
    ["Aegi", "slash"],
    ["Pawn", "iard"],
    ["Bi", "sharp"],
    ["Lux", "ray"],
    ["Agg", "gron"],
    ["Fly", "gon"],
    ["Milo", "tic"],
    ["Sala", "mence"],
    ["Klink", "klang"],
    ["Zoro", "ark"],
    ["Syl", "veon"],
    ["Kyo", "ogre"],
    ["Grou", "don"],
    ["Ray", "quaza"],
    ["Dial", "alga"],
    ["Palk", "kia"],
    ["Gira", "tina"],
    ["Regi", "gigas"],
    ["Dark", "rai"],
    ["Gene", "esect"],
    ["Reshi", "ram"],
    ["Zek", "rom"],
    ["Kyu", "rem"],
    ["Rose", "rade"],
    ["Drifb", "blim"],
    ["Lop", "punny"],
    ["Bre", "loom"],
    ["Nin", "jask"],
    ["Ban", "nette"],
    ["Ro", "tom"],
    ["Reuni", "niclus"],
    ["Whimsi", "cott"],
    ["Krooko", "dile"],
    ["Cofa", "grigus"],
    ["Galvan", "tula"],
    ["Ferro", "thorn"],
    ["Lit", "wick"],
    ["Lamp", "pent"],
    ["Chandel", "lure"],
    ["Hax", "xorus"],
    ["Golu", "lurk"],
    ["Pyuku", "muku"],
    ["Klef", "ki"],
    ["Talon", "flame"],
    ["Mimi", "kyu"],
    ["Volca", "rona"],
    ["Dei", "no"],
    ["Zwei", "lous"],
    ["Hy", "dreigon"],
    ["La", "tias"],
    ["La", "tios"],
    ["Deo", "xys"],
    ["Ji", "rachi"],
    ["Nin", "cada"],
    ["Bi", "barel"],
    ["Rio", "olu"],
    ["Sla", "koth"],
    ["Vigo", "roth"],
    ["Wail", "mer"],
    ["Shi", "nx"],
    ["Lu", "xio"],
    ["Ar", "on"],
    ["Lair", "ron"],
    ["Trap", "inch"],
    ["Vibra", "va"],
    ["Fee", "bas"],
    ["Ba", "agon"],
    ["Shel", "elgon"],
    ["Kli", "ink"],
    ["Kla", "ang"],
    ["Zo", "rua"],
    ["Bu", "dew"],
    ["Rose", "elia"],
    ["Drifl", "loon"],
    ["Bun", "eary"],
    ["Shroom", "ish"],
    ["Shup", "pet"],
    ["Solo", "sis"],
    ["Duo", "sion"],
    ["Cotton", "onee"],
    ["Sandi", "ile"],
    ["Kroko", "rok"],
    ["Ya", "mask"],
    ["Jol", "tik"],
    ["Ferro", "seed"],
    ["Axe", "xew"],
    ["Frax", "xure"],
    ["Gole", "olett"],
    ["Fletch", "ling"],
    ["Fletch", "inder"],
    ["Larv", "esta"],
    ["Stun", "fisk"],
    ["Sabl", "eye"],
    ["Veni", "pede"],
    ["Whirli", "pede"],
    ["Scoli", "pede"],
    ["Ty", "runt"],
    ["Tyran", "trum"],
    ["Sno", "runt"],
    ["Gla", "lie"],
    ["Fros", "lass"],
    ["Ori", "corio"],
    ["Ori", "corio"],
    ["Ori", "corio"],
    ["Ori", "corio"],
    ["Trub", "bish"],
    ["Garb", "odor"],
    ["Car", "vanha"],
    ["Sharp", "edo"],
    ["Phant", "tump"],
    ["Tre", "venant"],
    ["Noi", "bat"],
    ["Noi", "vern"],
    ["Swab", "lu"],
    ["Alta", "ria"],
    ["Goo", "my"],
    ["Sli", "goo"],
    ["Goo", "dra"],
    ["Regi", "rock"],
    ["Regi", "ice"],
    ["Regi", "steel"],
    ["Necro", "zma"],
    ["Stuff", "ful"],
    ["Be", "wear"],
    ["Dhel", "mise"],
    ["Mar", "eanie"],
    ["Tox", "apex"],
    ["Hawl", "lucha"],
    ["Cac", "nea"],
    ["Cact", "turne"],
    ["Sandy", "gast"],
    ["Palo", "sand"],
    ["Ama", "aura"],
    ["Auro", "rorus"],
    ["Rock", "ruff"],
    ["Lycan", "roc"],
    ["Lycan", "roc"],
    ["Melo", "etta"],
    ["Melo", "etta"],
    ["Cress", "selia"],
    ["Brux", "ish"],
    ["Necro", "zma"],
    ["Jang", "mo-o"],
    ["Haka", "mo-o"],
    ["Kom", "mo-o"],
    ["Wim", "pod"],
    ["Goli", "sopod"],
    ["Fo", "mantis"],
    ["Lu", "rantis"],
    ["Car", "bink"],
    ["Ches", "pin"],
    ["Quil", "ladin"],
    ["Ches", "naught"],
    ["Fenne", "kin"],
    ["Brai", "xen"],
    ["Del", "phox"],
    ["Froa", "kie"],
    ["Frog", "adier"],
    ["Gre", "ninja"],
    ["Tor", "koal"],
    ["Pump", "kaboo"],
    ["Gour", "geist"],
    ["Swir", "lix"],
    ["Slur", "puff"],
    ["Scra", "ggy"],
    ["Scraf", "ty"],
    ["Lo", "tad"],
    ["Lom", "bre"],
    ["Ludi", "colo"],
    ["Mini", "or"],
    ["Mini", "or"],
    ["Dian", "cie"],
    ["Luv", "disc"],
  ];
  
  const pokeTypes = {
    "1": [
     "GRASS",
     "POISON"
    ],
    "2": [
     "GRASS",
     "POISON"
    ],
    "3": [
     "GRASS",
     "POISON"
    ],
    "4": [
     "FIRE"
    ],
    "5": [
     "FIRE"
    ],
    "6": [
     "FIRE",
     "FLYING"
    ],
    "7": [
     "WATER"
    ],
    "8": [
     "WATER"
    ],
    "9": [
     "WATER"
    ],
    "10": [
     "BUG"
    ],
    "11": [
     "BUG"
    ],
    "12": [
     "BUG",
     "FLYING"
    ],
    "13": [
     "BUG",
     "POISON"
    ],
    "14": [
     "BUG",
     "POISON"
    ],
    "15": [
     "BUG",
     "POISON"
    ],
    "16": [
     "NORMAL",
     "FLYING"
    ],
    "17": [
     "NORMAL",
     "FLYING"
    ],
    "18": [
     "NORMAL",
     "FLYING"
    ],
    "19": [
     "NORMAL"
    ],
    "20": [
     "NORMAL"
    ],
    "21": [
     "NORMAL",
     "FLYING"
    ],
    "22": [
     "NORMAL",
     "FLYING"
    ],
    "23": [
     "POISON"
    ],
    "24": [
     "POISON"
    ],
    "25": [
     "ELECTRIC"
    ],
    "26": [
     "ELECTRIC"
    ],
    "27": [
     "GROUND"
    ],
    "28": [
     "GROUND"
    ],
    "29": [
     "POISON"
    ],
    "30": [
     "POISON"
    ],
    "31": [
     "POISON",
     "GROUND"
    ],
    "32": [
     "POISON"
    ],
    "33": [
     "POISON"
    ],
    "34": [
     "POISON",
     "GROUND"
    ],
    "35": [
     "FAIRY"
    ],
    "36": [
     "FAIRY"
    ],
    "37": [
     "FIRE"
    ],
    "38": [
     "FIRE"
    ],
    "39": [
     "NORMAL",
     "FAIRY"
    ],
    "40": [
     "NORMAL",
     "FAIRY"
    ],
    "41": [
     "POISON",
     "FLYING"
    ],
    "42": [
     "POISON",
     "FLYING"
    ],
    "43": [
     "GRASS",
     "POISON"
    ],
    "44": [
     "GRASS",
     "POISON"
    ],
    "45": [
     "GRASS",
     "POISON"
    ],
    "46": [
     "BUG",
     "GRASS"
    ],
    "47": [
     "BUG",
     "GRASS"
    ],
    "48": [
     "BUG",
     "POISON"
    ],
    "49": [
     "BUG",
     "POISON"
    ],
    "50": [
     "GROUND"
    ],
    "51": [
     "GROUND"
    ],
    "52": [
     "NORMAL"
    ],
    "53": [
     "NORMAL"
    ],
    "54": [
     "WATER"
    ],
    "55": [
     "WATER"
    ],
    "56": [
     "FIGHTING"
    ],
    "57": [
     "FIGHTING"
    ],
    "58": [
     "FIRE"
    ],
    "59": [
     "FIRE"
    ],
    "60": [
     "WATER"
    ],
    "61": [
     "WATER"
    ],
    "62": [
     "WATER",
     "FIGHTING"
    ],
    "63": [
     "PSYCHIC"
    ],
    "64": [
     "PSYCHIC"
    ],
    "65": [
     "PSYCHIC"
    ],
    "66": [
     "FIGHTING"
    ],
    "67": [
     "FIGHTING"
    ],
    "68": [
     "FIGHTING"
    ],
    "69": [
     "GRASS",
     "POISON"
    ],
    "70": [
     "GRASS",
     "POISON"
    ],
    "71": [
     "GRASS",
     "POISON"
    ],
    "72": [
     "WATER",
     "POISON"
    ],
    "73": [
     "WATER",
     "POISON"
    ],
    "74": [
     "ROCK",
     "GROUND"
    ],
    "75": [
     "ROCK",
     "GROUND"
    ],
    "76": [
     "ROCK",
     "GROUND"
    ],
    "77": [
     "FIRE"
    ],
    "78": [
     "FIRE"
    ],
    "79": [
     "WATER",
     "PSYCHIC"
    ],
    "80": [
     "WATER",
     "PSYCHIC"
    ],
    "81": [
     "STEEL",
     "ELECTRIC"
    ],
    "82": [
     "STEEL",
     "ELECTRIC"
    ],
    "83": [
     "NORMAL",
     "FLYING"
    ],
    "84": [
     "NORMAL",
     "FLYING"
    ],
    "85": [
     "NORMAL",
     "FLYING"
    ],
    "86": [
     "WATER"
    ],
    "87": [
     "WATER",
     "ICE"
    ],
    "88": [
     "POISON"
    ],
    "89": [
     "POISON"
    ],
    "90": [
     "WATER"
    ],
    "91": [
     "WATER",
     "ICE"
    ],
    "92": [
     "GHOST",
     "POISON"
    ],
    "93": [
     "GHOST",
     "POISON"
    ],
    "94": [
     "GHOST",
     "POISON"
    ],
    "95": [
     "ROCK",
     "GROUND"
    ],
    "96": [
     "PSYCHIC"
    ],
    "97": [
     "PSYCHIC"
    ],
    "98": [
     "WATER"
    ],
    "99": [
     "WATER"
    ],
    "100": [
     "ELECTRIC"
    ],
    "101": [
     "ELECTRIC"
    ],
    "102": [
     "GRASS",
     "PSYCHIC"
    ],
    "103": [
     "GRASS",
     "PSYCHIC"
    ],
    "104": [
     "GROUND"
    ],
    "105": [
     "GROUND"
    ],
    "106": [
     "FIGHTING"
    ],
    "107": [
     "FIGHTING"
    ],
    "108": [
     "NORMAL"
    ],
    "109": [
     "POISON"
    ],
    "110": [
     "POISON"
    ],
    "111": [
     "GROUND",
     "ROCK"
    ],
    "112": [
     "GROUND",
     "ROCK"
    ],
    "113": [
     "NORMAL"
    ],
    "114": [
     "GRASS"
    ],
    "115": [
     "NORMAL"
    ],
    "116": [
     "WATER"
    ],
    "117": [
     "WATER"
    ],
    "118": [
     "WATER"
    ],
    "119": [
     "WATER"
    ],
    "120": [
     "WATER"
    ],
    "121": [
     "WATER",
     "PSYCHIC"
    ],
    "122": [
     "PSYCHIC",
     "FAIRY"
    ],
    "123": [
     "BUG",
     "FLYING"
    ],
    "124": [
     "ICE",
     "PSYCHIC"
    ],
    "125": [
     "ELECTRIC"
    ],
    "126": [
     "FIRE"
    ],
    "127": [
     "BUG"
    ],
    "128": [
     "NORMAL"
    ],
    "129": [
     "WATER"
    ],
    "130": [
     "WATER",
     "FLYING"
    ],
    "131": [
     "WATER",
     "ICE"
    ],
    "132": [
     "NORMAL"
    ],
    "133": [
     "NORMAL"
    ],
    "134": [
     "WATER"
    ],
    "135": [
     "ELECTRIC"
    ],
    "136": [
     "FIRE"
    ],
    "137": [
     "NORMAL"
    ],
    "138": [
     "ROCK",
     "WATER"
    ],
    "139": [
     "ROCK",
     "WATER"
    ],
    "140": [
     "ROCK",
     "WATER"
    ],
    "141": [
     "ROCK",
     "WATER"
    ],
    "142": [
     "ROCK",
     "FLYING"
    ],
    "143": [
     "NORMAL"
    ],
    "144": [
     "ICE",
     "FLYING"
    ],
    "145": [
     "ELECTRIC",
     "FLYING"
    ],
    "146": [
     "FIRE",
     "FLYING"
    ],
    "147": [
     "DRAGON"
    ],
    "148": [
     "DRAGON"
    ],
    "149": [
     "DRAGON",
     "FLYING"
    ],
    "150": [
     "PSYCHIC"
    ],
    "151": [
     "PSYCHIC"
    ],
    "152": [
     "GRASS"
    ],
    "153": [
     "GRASS"
    ],
    "154": [
     "GRASS"
    ],
    "155": [
     "FIRE"
    ],
    "156": [
     "FIRE"
    ],
    "157": [
     "FIRE"
    ],
    "158": [
     "WATER"
    ],
    "159": [
     "WATER"
    ],
    "160": [
     "WATER"
    ],
    "161": [
     "NORMAL"
    ],
    "162": [
     "NORMAL"
    ],
    "163": [
     "NORMAL",
     "FLYING"
    ],
    "164": [
     "NORMAL",
     "FLYING"
    ],
    "165": [
     "BUG",
     "FLYING"
    ],
    "166": [
     "BUG",
     "FLYING"
    ],
    "167": [
     "BUG",
     "POISON"
    ],
    "168": [
     "BUG",
     "POISON"
    ],
    "169": [
     "POISON",
     "FLYING"
    ],
    "170": [
     "WATER",
     "ELECTRIC"
    ],
    "171": [
     "WATER",
     "ELECTRIC"
    ],
    "172": [
     "ELECTRIC"
    ],
    "173": [
     "FAIRY"
    ],
    "174": [
     "NORMAL",
     "FAIRY"
    ],
    "175": [
     "FAIRY"
    ],
    "176": [
     "FAIRY",
     "FLYING"
    ],
    "177": [
     "PSYCHIC",
     "FLYING"
    ],
    "178": [
     "PSYCHIC",
     "FLYING"
    ],
    "179": [
     "ELECTRIC"
    ],
    "180": [
     "ELECTRIC"
    ],
    "181": [
     "ELECTRIC"
    ],
    "182": [
     "GRASS"
    ],
    "183": [
     "WATER",
     "FAIRY"
    ],
    "184": [
     "WATER",
     "FAIRY"
    ],
    "185": [
     "ROCK"
    ],
    "186": [
     "WATER"
    ],
    "187": [
     "GRASS",
     "FLYING"
    ],
    "188": [
     "GRASS",
     "FLYING"
    ],
    "189": [
     "GRASS",
     "FLYING"
    ],
    "190": [
     "NORMAL"
    ],
    "191": [
     "GRASS"
    ],
    "192": [
     "GRASS"
    ],
    "193": [
     "BUG",
     "FLYING"
    ],
    "194": [
     "WATER",
     "GROUND"
    ],
    "195": [
     "WATER",
     "GROUND"
    ],
    "196": [
     "PSYCHIC"
    ],
    "197": [
     "DARK"
    ],
    "198": [
     "DARK",
     "FLYING"
    ],
    "199": [
     "WATER",
     "PSYCHIC"
    ],
    "200": [
     "GHOST"
    ],
    "201": [
     "PSYCHIC"
    ],
    "202": [
     "PSYCHIC"
    ],
    "203": [
     "NORMAL",
     "PSYCHIC"
    ],
    "204": [
     "BUG"
    ],
    "205": [
     "BUG",
     "STEEL"
    ],
    "206": [
     "NORMAL"
    ],
    "207": [
     "GROUND",
     "FLYING"
    ],
    "208": [
     "STEEL",
     "GROUND"
    ],
    "209": [
     "FAIRY"
    ],
    "210": [
     "FAIRY"
    ],
    "211": [
     "WATER",
     "POISON"
    ],
    "212": [
     "BUG",
     "STEEL"
    ],
    "213": [
     "BUG",
     "ROCK"
    ],
    "214": [
     "BUG",
     "FIGHTING"
    ],
    "215": [
     "DARK",
     "ICE"
    ],
    "216": [
     "NORMAL"
    ],
    "217": [
     "NORMAL"
    ],
    "218": [
     "FIRE"
    ],
    "219": [
     "FIRE",
     "ROCK"
    ],
    "220": [
     "ICE",
     "GROUND"
    ],
    "221": [
     "ICE",
     "GROUND"
    ],
    "222": [
     "WATER",
     "ROCK"
    ],
    "223": [
     "WATER"
    ],
    "224": [
     "WATER"
    ],
    "225": [
     "ICE",
     "FLYING"
    ],
    "226": [
     "WATER",
     "FLYING"
    ],
    "227": [
     "STEEL",
     "FLYING"
    ],
    "228": [
     "DARK",
     "FIRE"
    ],
    "229": [
     "DARK",
     "FIRE"
    ],
    "230": [
     "WATER",
     "DRAGON"
    ],
    "231": [
     "GROUND"
    ],
    "232": [
     "GROUND"
    ],
    "233": [
     "NORMAL"
    ],
    "234": [
     "NORMAL"
    ],
    "235": [
     "NORMAL"
    ],
    "236": [
     "FIGHTING"
    ],
    "237": [
     "FIGHTING"
    ],
    "238": [
     "ICE",
     "PSYCHIC"
    ],
    "239": [
     "ELECTRIC"
    ],
    "240": [
     "FIRE"
    ],
    "241": [
     "NORMAL"
    ],
    "242": [
     "NORMAL"
    ],
    "243": [
     "ELECTRIC"
    ],
    "244": [
     "FIRE"
    ],
    "245": [
     "WATER"
    ],
    "246": [
     "ROCK",
     "GROUND"
    ],
    "247": [
     "ROCK",
     "GROUND"
    ],
    "248": [
     "ROCK",
     "DARK"
    ],
    "249": [
     "PSYCHIC",
     "FLYING"
    ],
    "250": [
     "FIRE",
     "FLYING"
    ],
    "251": [
     "PSYCHIC",
     "GRASS"
    ],
    "252": [
     "NORMAL",
     "FAIRY"
    ],
    "253": [
     "PSYCHIC"
    ],
    "254": [
     "NORMAL"
    ],
    "255": [
     "GHOST"
    ],
    "256": [
     "DARK",
     "FLYING"
    ],
    "257": [
     "ROCK"
    ],
    "258": [
     "PSYCHIC",
     "FAIRY"
    ],
    "259": [
     "NORMAL"
    ],
    "260": [
     "NORMAL"
    ],
    "261": [
     "WATER",
     "FLYING"
    ],
    "262": [
     "DARK",
     "ICE"
    ],
    "263": [
     "STEEL",
     "ELECTRIC"
    ],
    "264": [
     "NORMAL"
    ],
    "265": [
     "GROUND",
     "ROCK"
    ],
    "266": [
     "GRASS"
    ],
    "267": [
     "ELECTRIC"
    ],
    "268": [
     "FIRE"
    ],
    "269": [
     "FAIRY",
     "FLYING"
    ],
    "270": [
     "BUG",
     "FLYING"
    ],
    "271": [
     "GRASS"
    ],
    "272": [
     "ICE"
    ],
    "273": [
     "GROUND",
     "FLYING"
    ],
    "274": [
     "ICE",
     "GROUND"
    ],
    "275": [
     "NORMAL"
    ],
    "276": [
     "GRASS"
    ],
    "277": [
     "GRASS"
    ],
    "278": [
     "GRASS"
    ],
    "279": [
     "FIRE"
    ],
    "280": [
     "FIRE",
     "FIGHTING"
    ],
    "281": [
     "FIRE",
     "FIGHTING"
    ],
    "282": [
     "WATER"
    ],
    "283": [
     "WATER",
     "GROUND"
    ],
    "284": [
     "WATER",
     "GROUND"
    ],
    "285": [
     "PSYCHIC",
     "FAIRY"
    ],
    "286": [
     "PSYCHIC",
     "FAIRY"
    ],
    "287": [
     "PSYCHIC",
     "FAIRY"
    ],
    "288": [
     "PSYCHIC",
     "FIGHTING"
    ],
    "289": [
     "BUG",
     "GHOST"
    ],
    "290": [
     "NORMAL"
    ],
    "291": [
     "STEEL",
     "PSYCHIC"
    ],
    "292": [
     "STEEL",
     "PSYCHIC"
    ],
    "293": [
     "STEEL",
     "PSYCHIC"
    ],
    "294": [
     "NORMAL"
    ],
    "295": [
     "DARK",
     "GHOST"
    ],
    "296": [
     "FIGHTING",
     "STEEL"
    ],
    "297": [
     "DRAGON",
     "GROUND"
    ],
    "298": [
     "DRAGON",
     "GROUND"
    ],
    "299": [
     "DRAGON",
     "GROUND"
    ],
    "300": [
     "STEEL",
     "FAIRY"
    ],
    "301": [
     "ROCK",
     "GRASS"
    ],
    "302": [
     "ROCK",
     "GRASS"
    ],
    "303": [
     "ROCK",
     "BUG"
    ],
    "304": [
     "ROCK",
     "BUG"
    ],
    "305": [
     "ROCK"
    ],
    "306": [
     "ROCK"
    ],
    "307": [
     "ROCK",
     "STEEL"
    ],
    "308": [
     "ROCK",
     "STEEL"
    ],
    "309": [
     "NORMAL"
    ],
    "310": [
     "DARK"
    ],
    "311": [
     "GHOST"
    ],
    "312": [
     "GHOST"
    ],
    "313": [
     "GHOST"
    ],
    "314": [
     "WATER"
    ],
    "315": [
     "NORMAL"
    ],
    "316": [
     "GRASS"
    ],
    "317": [
     "GRASS"
    ],
    "318": [
     "GRASS",
     "GROUND"
    ],
    "319": [
     "FIRE"
    ],
    "320": [
     "FIRE",
     "FIGHTING"
    ],
    "321": [
     "FIRE",
     "FIGHTING"
    ],
    "322": [
     "WATER"
    ],
    "323": [
     "WATER"
    ],
    "324": [
     "WATER",
     "STEEL"
    ],
    "325": [
     "ROCK"
    ],
    "326": [
     "ROCK",
     "STEEL"
    ],
    "327": [
     "STEEL",
     "GHOST"
    ],
    "328": [
     "STEEL",
     "GHOST"
    ],
    "329": [
     "STEEL",
     "GHOST"
    ],
    "330": [
     "DARK",
     "STEEL"
    ],
    "331": [
     "DARK",
     "STEEL"
    ],
    "332": [
     "ELECTRIC"
    ],
    "333": [
     "STEEL",
     "ROCK"
    ],
    "334": [
     "GROUND",
     "DRAGON"
    ],
    "335": [
     "WATER"
    ],
    "336": [
     "DRAGON",
     "FLYING"
    ],
    "337": [
     "STEEL"
    ],
    "338": [
     "DARK"
    ],
    "339": [
     "FAIRY"
    ],
    "340": [
     "WATER"
    ],
    "341": [
     "GROUND"
    ],
    "342": [
     "DRAGON",
     "FLYING"
    ],
    "343": [
     "STEEL",
     "DRAGON"
    ],
    "344": [
     "WATER",
     "DRAGON"
    ],
    "345": [
     "GHOST",
     "DRAGON"
    ],
    "346": [
     "NORMAL"
    ],
    "347": [
     "DARK"
    ],
    "348": [
     "BUG",
     "STEEL"
    ],
    "349": [
     "DRAGON",
     "FIRE"
    ],
    "350": [
     "DRAGON",
     "ELECTRIC"
    ],
    "351": [
     "DRAGON",
     "ICE"
    ],
    "352": [
     "GRASS",
     "POISON"
    ],
    "353": [
     "GHOST",
     "FLYING"
    ],
    "354": [
     "NORMAL"
    ],
    "355": [
     "GRASS",
     "FIGHTING"
    ],
    "356": [
     "BUG",
     "FLYING"
    ],
    "357": [
     "GHOST"
    ],
    "358": [
     "ELECTRIC",
     "GHOST"
    ],
    "359": [
     "PSYCHIC"
    ],
    "360": [
     "GRASS",
     "FAIRY"
    ],
    "361": [
     "GROUND",
     "DARK"
    ],
    "362": [
     "GHOST"
    ],
    "363": [
     "BUG",
     "ELECTRIC"
    ],
    "364": [
     "STEEL",
     "GRASS"
    ],
    "365": [
     "GHOST",
     "FIRE"
    ],
    "366": [
     "GHOST",
     "FIRE"
    ],
    "367": [
     "GHOST",
     "FIRE"
    ],
    "368": [
     "DRAGON"
    ],
    "369": [
     "GROUND",
     "GHOST"
    ],
    "370": [
     "WATER"
    ],
    "371": [
     "STEEL",
     "FAIRY"
    ],
    "372": [
     "FIRE",
     "FLYING"
    ],
    "373": [
     "GHOST",
     "FAIRY"
    ],
    "374": [
     "BUG",
     "FIRE"
    ],
    "375": [
     "DARK",
     "DRAGON"
    ],
    "376": [
     "DARK",
     "DRAGON"
    ],
    "377": [
     "DARK",
     "DRAGON"
    ],
    "378": [
     "DRAGON",
     "PSYCHIC"
    ],
    "379": [
     "DRAGON",
     "PSYCHIC"
    ],
    "380": [
     "PSYCHIC"
    ],
    "381": [
     "STEEL",
     "PSYCHIC"
    ],
    "382": [
     "BUG",
     "GROUND"
    ],
    "383": [
     "NORMAL",
     "WATER"
    ],
    "384": [
     "FIGHTING"
    ],
    "385": [
     "NORMAL"
    ],
    "386": [
     "NORMAL"
    ],
    "387": [
     "WATER"
    ],
    "388": [
     "ELECTRIC"
    ],
    "389": [
     "ELECTRIC"
    ],
    "390": [
     "STEEL",
     "ROCK"
    ],
    "391": [
     "STEEL",
     "ROCK"
    ],
    "392": [
     "GROUND"
    ],
    "393": [
     "GROUND",
     "DRAGON"
    ],
    "394": [
     "WATER"
    ],
    "395": [
     "DRAGON"
    ],
    "396": [
     "DRAGON"
    ],
    "397": [
     "STEEL"
    ],
    "398": [
     "STEEL"
    ],
    "399": [
     "DARK"
    ],
    "400": [
     "GRASS",
     "POISON"
    ],
    "401": [
     "GRASS",
     "POISON"
    ],
    "402": [
     "GHOST",
     "FLYING"
    ],
    "403": [
     "NORMAL"
    ],
    "404": [
     "GRASS"
    ],
    "405": [
     "GHOST"
    ],
    "406": [
     "PSYCHIC"
    ],
    "407": [
     "PSYCHIC"
    ],
    "408": [
     "GRASS",
     "FAIRY"
    ],
    "409": [
     "GROUND",
     "DARK"
    ],
    "410": [
     "GROUND",
     "DARK"
    ],
    "411": [
     "GHOST"
    ],
    "412": [
     "BUG",
     "ELECTRIC"
    ],
    "413": [
     "STEEL",
     "GRASS"
    ],
    "414": [
     "DRAGON"
    ],
    "415": [
     "DRAGON"
    ],
    "416": [
     "GROUND",
     "GHOST"
    ],
    "417": [
     "NORMAL",
     "FLYING"
    ],
    "418": [
     "FIRE",
     "FLYING"
    ],
    "419": [
     "BUG",
     "FIRE"
    ],
    "420": [
     "GROUND",
     "ELECTRIC"
    ],
    "421": [
     "DARK",
     "GHOST"
    ],
    "422": [
     "BUG",
     "POISON"
    ],
    "423": [
     "BUG",
     "POISON"
    ],
    "424": [
     "BUG",
     "POISON"
    ],
    "425": [
     "ROCK",
     "DRAGON"
    ],
    "426": [
     "ROCK",
     "DRAGON"
    ],
    "427": [
     "ICE"
    ],
    "428": [
     "ICE"
    ],
    "429": [
     "ICE",
     "GHOST"
    ],
    "430": [
     "FIRE",
     "FLYING"
    ],
    "431": [
     "ELECTRIC",
     "FLYING"
    ],
    "432": [
     "PSYCHIC",
     "FLYING"
    ],
    "433": [
     "GHOST",
     "FLYING"
    ],
    "434": [
     "POISON"
    ],
    "435": [
     "POISON"
    ],
    "436": [
     "WATER",
     "DARK"
    ],
    "437": [
     "WATER",
     "DARK"
    ],
    "438": [
     "GRASS",
     "GHOST"
    ],
    "439": [
     "GRASS",
     "GHOST"
    ],
    "440": [
     "FLYING",
     "DRAGON"
    ],
    "441": [
     "FLYING",
     "DRAGON"
    ],
    "442": [
     "NORMAL",
     "FLYING"
    ],
    "443": [
     "DRAGON",
     "FLYING"
    ],
    "444": [
     "DRAGON"
    ],
    "445": [
     "DRAGON"
    ],
    "446": [
     "DRAGON"
    ],
    "447": [
     "ROCK"
    ],
    "448": [
     "ICE"
    ],
    "449": [
     "STEEL"
    ],
    "450": [
     "PSYCHIC"
    ],
    "451": [
     "NORMAL",
     "FIGHTING"
    ],
    "452": [
     "NORMAL",
     "FIGHTING"
    ],
    "453": [
     "GHOST",
     "GRASS"
    ],
    "454": [
     "POISON",
     "WATER"
    ],
    "455": [
     "POISON",
     "WATER"
    ],
    "456": [
     "FIGHTING",
     "FLYING"
    ],
    "457": [
     "GRASS"
    ],
    "458": [
     "GRASS",
     "DARK"
    ],
    "459": [
     "GROUND",
     "GHOST"
    ],
    "460": [
     "GROUND",
     "GHOST"
    ],
    "461": [
     "ROCK",
     "ICE"
    ],
    "462": [
     "ROCK",
     "ICE"
    ],
    "463": [
     "ROCK"
    ],
    "464": [
     "ROCK"
    ],
    "465": [
     "ROCK"
    ],
    "466": [
     "NORMAL",
     "PSYCHIC"
    ],
    "467": [
     "NORMAL",
     "FIGHTING"
    ],
    "468": [
     "PSYCHIC"
    ],
    "469": [
     "WATER",
     "PSYCHIC"
    ],
    "470": [
     "PSYCHIC",
     "DRAGON"
    ],
    "471": [
     "DRAGON"
    ],
    "472": [
     "DRAGON",
     "FIGHTING"
    ],
    "473": [
     "DRAGON",
     "FIGHTING"
    ],
    "474": [
     "BUG",
     "WATER"
    ],
    "475": [
     "BUG",
     "WATER"
    ],
    "476": [
     "GRASS"
    ],
    "477": [
     "GRASS"
    ],
    "478": [
     "ROCK",
     "FAIRY"
    ],
    "479": [
     "GRASS"
    ],
    "480": [
     "GRASS"
    ],
    "481": [
     "GRASS",
     "FIGHTING"
    ],
    "482": [
     "FIRE"
    ],
    "483": [
     "FIRE"
    ],
    "484": [
     "FIRE",
     "PSYCHIC"
    ],
    "485": [
     "WATER"
    ],
    "486": [
     "WATER"
    ],
    "487": [
     "WATER",
     "DARK"
    ],
    "488": [
     "FIRE"
    ],
    "489": [
     "GHOST",
     "GRASS"
    ],
    "490": [
     "GHOST",
     "GRASS"
    ],
    "491": [
     "FAIRY"
    ],
    "492": [
     "FAIRY"
    ],
    "493": [
     "DARK",
     "FIGHTING"
    ],
    "494": [
     "DARK",
     "FIGHTING"
    ],
    "495": [
     "WATER",
     "GRASS"
    ],
    "496": [
     "WATER",
     "GRASS"
    ],
    "497": [
     "WATER",
     "GRASS"
    ],
    "498": [
     "ROCK",
     "FLYING"
    ],
    "499": [
     "ROCK",
     "FLYING"
    ],
    "500": [
     "ROCK",
     "FAIRY"
    ],
    "501": [
     "WATER"
    ],
    "1000027": [
     "FIREWATERGRASS"
    ],
    "1000028": [
     "FIREWATERGRASS"
    ],
    "1000029": [
     "FIREWATERGRASS"
    ],
    "1.4.7": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "2.5.8": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "3.6.9": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "144.145.146": [
     "FIRE",
     "ELECTRIC",
     "ICE"
    ],
    "150.348.380": [
     "PSYCHIC",
     "BUG",
     "STEEL"
    ],
    "151.251.381": [
     "PSYCHIC"
    ],
    "152.155.158": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "153.156.159": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "154.157.160": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "243.244.245": [
     "FIRE",
     "WATER",
     "ELECTRIC"
    ],
    "276.279.282": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "277.280.283": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "278.281.284": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "316.319.322": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "317.320.323": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "318.321.324": [
     "FIRE",
     "WATER",
     "GRASS"
    ],
    "340.341.342": [
     "WATER",
     "GROUND",
     "FLYING"
    ],
    "343.344.345": [
     "DRAGON"
    ],
    "349.350.351": [
     "DRAGON"
    ],
    "447.448.449": [
     "ICE",
     "ROCK",
     "STEEL"
    ]
   }
  
  // Function to populate the datalist with Pokémon options
  function populateDatalist() {
    const datalist = document.getElementById("pokemonList");
  
    splitted_names.forEach((nameParts, index) => {
      if (index === 0) return; // Skip the first empty entry
  
      const option = document.createElement("option");
      const fullName = nameParts.join(""); // Combine the name parts
  
      option.value = fullName;
      option.label = `${fullName} (${index})`;
  
      datalist.appendChild(option);
    });
  }
  
  const generateTypeImage = (name) => {
    const image = document.createElement('img')
    image.src = `./type/${name.toLowerCase()}.png`
    image.alt = name
    image.className = "typeImage"
    return image
  }
  
  function generateFusion() {
    const headPoke = document.getElementById("HeadPokemon").value;
    const bodyPoke = document.getElementById("BodyPokemon").value;
  
    // Find the corresponding indices of the selected Pokémon
    const headIndex = splitted_names.findIndex(
      (name) => name.join("") === headPoke
    );
    const bodyIndex = splitted_names.findIndex(
      (name) => name.join("") === bodyPoke
    );
  
    // Check if the selected Pokémon are valid
    if (headIndex === -1 || bodyIndex === -1) {
      alert("Please select valid Pokémon names from the list.");
      return;
    }
  
    // Create the fusion name (combining head and body parts)
    const fusionName = `<span style="color: green">${
      splitted_names[headIndex][0]
    }${splitted_names[bodyIndex][1]}</span> <span style="color: red">(${
      headIndex * bodyIndex
    })</span>`;
  
    // Construct the fusion image URL based on the indices of head and body Pokémon
    const fusionImageUrl = `https://cdn.jsdelivr.net/gh/fusiondex-org/infinite-fusion-graphics/autogen/${headIndex}/${headIndex}.${bodyIndex}.png`;
  
    // Get types (limit to 2 types)
    const types = [...pokeTypes[headIndex.toString()], ...pokeTypes[bodyIndex.toString()]].slice(0, 2);
  
    // Update the UI with the fusion result
    document.getElementById("fusionName").innerHTML = fusionName;
    document.getElementById("fusionImage").src = fusionImageUrl;
    document.getElementById("fusionOutput").style.display = "block";
  
    // Display Pokémon details
    document.getElementById("headPokemonDetails").innerText = headPoke;
    document.getElementById("bodyPokemonDetails").innerText = bodyPoke;
  
    // Clear existing types and append new type images
    const typesElm = document.getElementById("typesElm");
    typesElm.innerHTML = ""; // Clear any previous types
    types.forEach((type) => {
      const typeImage = generateTypeImage(type);
      typesElm.appendChild(typeImage);
    });
  }
  
  
  // Function to reset the form
  function resetForm() {
    document.getElementById("fusionForm").reset();
    document.getElementById("fusionOutput").style.display = "none";
  }
  
  // Function to select random Pokémon
  function randomFusion() {
    const randomHeadIndex =
      Math.floor(Math.random() * (splitted_names.length - 1)) + 1;
    const randomBodyIndex =
      Math.floor(Math.random() * (splitted_names.length - 1)) + 1;
  
    document.getElementById("HeadPokemon").value =
      splitted_names[randomHeadIndex].join("");
    document.getElementById("BodyPokemon").value =
      splitted_names[randomBodyIndex].join("");
  
    generateFusion();
  }
  
  // Call the function to populate the datalist when the page loads
  document.addEventListener("DOMContentLoaded", populateDatalist);
  
  // Attach event listeners
  document
    .getElementById("generateButton")
    .addEventListener("click", generateFusion);
  document.getElementById("randomButton").addEventListener("click", randomFusion);
  