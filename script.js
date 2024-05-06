let possibles = [];

function load_normal_wordle() {
  possibles = [];
  let fullstring = "abackabaseabateabbeyabbotabhorabideabledabodeabortaboutaboveabuseabyssacornacridactoracuteadageadaptadeptadminadmitadobeadoptadoreadornadultaffixafireafootafoulafteragainagapeagateagentagileagingaglowagonyagoraagreeaheadaideraislealarmalbumalertalgaealibialienalignalikealiveallayalleyallotallowalloyaloftalonealongaloofaloudalphaaltaralteramassamazeamberambleamendamissamityamongampleamplyamuseangelangerangleangryangstanimeankleannexannoyannulanodeanticanvilaortaapartaphidapingapneaappleapplyapronaptlyarborardorarenaarguearisearmoraromaarosearrayarrowarsonartsyascotashenasideaskewassayassetatollatoneatticaudioauditaugurauntyavailavertavianavoidawaitawakeawardawareawashawfulawokeaxialaxiomaxionazurebaconbadgebadlybagelbaggybakerbalerbalmybanalbanjobargebaronbasalbasicbasilbasinbasisbastebatchbathebatonbattybawdybayoubeachbeadybeardbeastbeechbeefybefitbeganbegatbegetbeginbegunbeingbelchbeliebellebellybelowbenchberetberryberthbesetbetelbevelbezelbiblebicepbiddybigotbilgebillybingebingobiomebirchbirthbisonbittyblackbladeblameblandblankblareblastblazebleakbleatbleedbleepblendblessblimpblindblinkblissblitzbloatblockblokeblondbloodbloomblownbluerbluffbluntblurbblurtblushboardboastbobbyboneybongobonusboobyboostboothbootyboozeboozyboraxbornebosombossybotchboughbouleboundbowelboxerbracebraidbrainbrakebrandbrashbrassbravebravobrawlbrawnbreadbreakbreedbriarbribebrickbridebriefbrinebringbrinkbrinybriskbroadbroilbrokebroodbrookbroombrothbrownbruntbrushbrutebuddybudgebuggybuglebuildbuiltbulgebulkybullybunchbunnyburlyburntburstbusedbushybutchbuttebuxombuyerbylawcabalcabbycabincablecacaocachecacticaddycadetcageycairncamelcameocanalcandycannycanoecanoncapercaputcaratcargocarolcarrycarvecastecatchcatercattycaulkcausecavilceasecedarcellochafechaffchainchairchalkchampchantchaoschardcharmchartchasechasmcheapcheatcheckcheekcheerchesschestchickchidechiefchildchilichillchimechinachirpchockchoirchokechordchorechosechuckchumpchunkchurnchutecidercigarcinchcircaciviccivilclackclaimclampclangclankclashclaspclasscleanclearcleatcleftclerkclickcliffclimbclingclinkcloakclockclonecloseclothcloudcloutcloveclowncluckcluedclumpclungcoachcoastcobracocoacoloncolorcometcomfycomiccommaconchcondoconiccopsecoralcorercornycouchcoughcouldcountcoupecourtcovencovercovetcoveycowercoylycrackcraftcrampcranecrankcrashcrasscratecravecrawlcrazecrazycreakcreamcredocreedcreekcreepcremecrepecreptcresscrestcrickcriedcriercrimecrimpcrispcroakcrockcronecronycrookcrosscroupcrowdcrowncrudecruelcrumbcrumpcrushcrustcryptcubiccumincuriocurlycurrycursecurvecurvycutiecybercyclecynicdaddydailydairydaisydallydancedandydatumdauntdealtdeathdebardebitdebugdebutdecaldecaydecordecoydecrydeferdeigndeitydelaydeltadelvedemondemurdenimdensedepotdepthderbydeterdetoxdeucedevildiarydiceydigitdillydimlydinerdingodingydiodedirgedirtydiscoditchdittodittydiverdizzydodgedodgydogmadoingdollydonordonutdopeydoubtdoughdowdydoweldownydowrydozendraftdraindrakedramadrankdrapedrawldrawndreaddreamdressdrieddrierdriftdrilldrinkdrivedroitdrolldronedrooldroopdrossdrovedrowndruiddrunkdryerdrylyduchydullydummydumpydunceduskydustydutchduvetdwarfdwelldweltdyingeagereagleearlyeartheaseleateneaterebonyeclatedictedifyeerieegreteightejectekingelateelbowelderelectelegyelfinelideeliteelopeeludeemailembedemberemceeemptyenactendowenemaenemyenjoyennuiensueenterentryenvoyepochepoxyequalequiperaseerecterodeerroreruptessayesteretherethicethosetudeevadeeventeveryevictevokeexactexaltexcelexertexileexistexpelextolextraexulteyingfablefacetfaintfairyfaithfalsefancyfannyfarcefatalfattyfaultfaunafavorfeastfecalfeignfellafelonfemmefemurfenceferalferryfetalfetchfetidfetusfeverfewerfiberfibreficusfieldfiendfieryfifthfiftyfightfilerfiletfillyfilmyfilthfinalfinchfinerfirstfishyfixerfizzyfjordflackflailflairflakeflakyflameflankflareflashflaskfleckfleetfleshflickflierflingflintflirtfloatflockfloodfloorfloraflossflourfloutflownflufffluidflukeflumeflungflunkflushfluteflyerfoamyfocalfocusfoggyfoistfoliofollyforayforceforgeforgoforteforthfortyforumfoundfoyerfrailframefrankfraudfreakfreedfreerfreshfriarfriedfrillfriskfritzfrockfrondfrontfrostfrothfrownfrozefruitfudgefuguefullyfungifunkyfunnyfurorfurryfussyfuzzygaffegailygamergammagamutgassygaudygaugegauntgauzegavelgawkygayergaylygazergeckogeekygeesegeniegenreghostghoulgiantgiddygipsygirlygirthgivengivergladeglandglareglassglazegleamgleanglideglintgloatglobegloomgloryglossgloveglyphgnashgnomegodlygoinggolemgollygonadgonergoodygooeygoofygoosegorgegougegourdgracegradegraftgrailgraingrandgrantgrapegraphgraspgrassgrategravegravygrazegreatgreedgreengreetgriefgrillgrimegrimygrindgripegroangroingroomgropegrossgroupgroutgrovegrowlgrowngruelgruffgruntguardguavaguessguestguideguildguileguiltguisegulchgullygumbogummyguppygustogustygypsyhabithairyhalvehandyhappyhardyharemharpyharryharshhastehastyhatchhaterhaunthautehavenhavochazelheadyheardheartheathheaveheavyhedgeheftyheisthelixhellohenceheronhillyhingehippohippyhitchhoardhobbyhoisthollyhomerhoneyhonorhordehornyhorsehotelhotlyhoundhousehovelhoverhowdyhumanhumidhumorhumphhumushunchhunkyhurryhuskyhussyhutchhydrohyenahymenhypericilyicingidealidiomidiotidleridylliglooiliacimageimbueimpelimplyinaneinboxincurindexineptinertinferingotinlayinletinnerinputinterintroionicirateironyisletissueitchyivoryjauntjazzyjellyjerkyjettyjeweljiffyjointjoistjokerjollyjoustjudgejuicejuicyjumbojumpyjuntajuntojurorkappakarmakayakkebabkhakikinkykioskkittyknackknavekneadkneedkneelkneltknifeknockknollknownkoalakrilllabellaborladenladlelagerlancelankylapellapselargelarvalassolatchlaterlathelattelaughlayerleachleafyleakyleantleaptlearnleaseleashleastleaveledgeleechleeryleftylegalleggylemonlemurleperlevelleverlibelliegelightlikenlilaclimbolimitlinenlinerlingolipidlitheliverlividllamaloamyloathlobbylocallocuslodgeloftylogicloginloopylooselorryloserlouselousyloverlowerlowlyloyallucidluckylumenlumpylunarlunchlungelupuslurchluridlustylyinglymphlynchlyricmacawmachomacromadammadlymafiamagicmagmamaizemajormakermambomammamammymangamangemangomangymaniamanicmanlymanormaplemarchmarrymarshmasonmassematchmateymauvemaximmaybemayormealymeantmeatymeccamedalmediamedicmeleemelonmercymergemeritmerrymetalmetermetromicromidgemidstmightmilkymimicminceminerminimminormintyminusmirthmisermissymochamodalmodelmodemmogulmoistmolarmoldymoneymonthmoodymoosemoralmoronmorphmossymotelmotifmotormottomoultmoundmountmournmousemouthmovermoviemowermuckymucusmuddymulchmummymunchmuralmurkymushymusicmuskymustymyrrhnadirnaivenannynasalnastynatalnavalnavelneedyneighnerdynervenevernewernewlynicernicheniecenightninjaninnyninthnoblenoblynoisenoisynomadnoosenorthnoseynotchnovelnudgenursenuttynylonnymphoakenobeseoccuroceanoctaloctetodderoddlyoffalofferoftenoldenolderoliveombreomegaoniononsetoperaopineopiumopticorbitorderorganotherotteroughtounceoutdoouteroutgoovaryovateovertovineovoidowingowneroxideozonepaddypaganpaintpalerpalsypanelpanicpansypapalpaperparerparkaparryparsepartypastapastepastypatchpatiopatsypattypausepayeepayerpeacepeachpearlpecanpedalpenalpencepennepennyperchperilperkypeskypestopetalpettyphasephonephonyphotopianopickypiecepietypiggypilotpinchpineypinkypintopiperpiquepitchpithypivotpixelpixiepizzaplaceplaidplainplaitplaneplankplantplateplazapleadpleatpliedplierpluckplumbplumeplumpplunkplushpoesypointpoisepokerpolarpolkapolyppoochpoppyporchposerpositpossepouchpoundpoutypowerprankprawnpreenpresspriceprickpridepriedprimeprimoprintpriorprismprivyprizeprobeproneprongproofproseproudproveprowlproxyprudeprunepsalmpubicpudgypuffypulpypulsepunchpupalpupilpuppypureepurerpurgepursepushyputtypygmyquackquailquakequalmquarkquartquashquasiqueenqueerquellqueryquestqueuequickquietquillquiltquirkquitequotaquotequothrabbirabidracerradarradiiradiorainyraiserajahrallyralphramenranchrandyrangerapidrarerraspyratiorattyravenrayonrazorreachreactreadyrealmrearmrebarrebelrebusrebutrecaprecurrecutreedyreferrefitregalrehabreignrelaxrelayrelicremitrenalrenewrepayrepelreplyrerunresetresinretchretroretryreuserevelrevuerhinorhymeriderridgeriflerightrigidrigorrinseripenriperrisenriserriskyrivalriverrivetroachroastrobinrobotrockyrodeorogerrogueroomyroostrotorrougeroughroundrouserouteroverrowdyrowerroyalruddyruderrugbyrulerrumbarumorrupeeruralrustysadlysafersaintsaladsallysalonsalsasaltysalvesalvosandysanersappysassysatinsatyrsaucesaucysaunasautesavorsavoysavvyscaldscalescalpscalyscampscantscarescarfscaryscenescentscionscoffscoldsconescoopscopescorescornscourscoutscowlscramscrapscreescrewscrubscrumscubasedanseedysegueseizesemensensesepiaserifserumservesetupsevenseversewershackshadeshadyshaftshakeshakyshaleshallshaltshameshankshapeshardsharesharksharpshaveshawlshearsheensheepsheersheetsheikshelfshellshiedshiftshineshinyshireshirkshirtshoalshockshoneshookshootshoreshornshortshoutshoveshownshowyshrewshrubshrugshuckshuntshushshylysiegesievesightsigmasilkysillysincesinewsingesirensissysixthsixtyskateskierskiffskillskimpskirtskulkskullskunkslackslainslangslantslashslateslavesleeksleepsleetsleptsliceslickslideslimeslimyslingslinksloopslopesloshslothslumpslungslunkslurpslushslylysmacksmallsmartsmashsmearsmellsmeltsmilesmirksmitesmithsmocksmokesmokysmotesnacksnailsnakesnakysnaresnarlsneaksneersnidesniffsnipesnoopsnoresnortsnoutsnowysnucksnuffsoapysobersoggysolarsolidsolvesonarsonicsoothsootysorrysoundsouthsowerspacespadespanksparesparkspasmspawnspeakspearspeckspeedspellspeltspendspentspermspicespicyspiedspielspikespikyspillspiltspinespinyspirespitesplatsplitspoilspokespoofspookspoolspoonsporesportspoutsprayspreesprigspunkspurnspurtsquadsquatsquibstackstaffstagestaidstainstairstakestalestalkstallstampstandstankstarestarkstartstashstatestavesteadsteakstealsteamsteedsteelsteepsteersteinsternstickstiffstillstiltstingstinkstintstockstoicstokestolestompstonestonystoodstoolstoopstorestorkstormstorystoutstovestrapstrawstraystripstrutstuckstudystuffstumpstungstunkstuntstylesuavesugarsuingsuitesulkysullysumacsunnysupersurersurgesurlysushiswamiswampswarmswashswathswearsweatsweepsweetswellsweptswiftswillswineswingswirlswishswoonswoopswordsworeswornswungsynodsyruptabbytabletabootacittackytaffytainttakentakertallytalontamertangotangytapertapirtardytarottastetastytattytaunttawnyteachtearyteaseteddyteethtempotenettenortensetenthtepeetepidterratersetestythankthefttheirthemetherethesethetathickthiefthighthingthinkthirdthongthornthosethreethrewthrobthrowthrumthumbthumpthymetiaratibiatidaltigertighttildetimertimidtipsytitantithetitletoasttodaytoddytokentonaltongatonictoothtopaztopictorchtorsotorustotaltotemtouchtoughtoweltowertoxictoxintracetracktracttradetrailtraintraittramptrashtrawltreadtreattrendtriadtrialtribetricetricktriedtripetritetrolltrooptropetrouttrovetrucetrucktruertrulytrumptrunktrusstrusttruthtrysttubaltubertuliptulletumortunicturbotutortwangtweaktweedtweettwicetwinetwirltwisttwixttyingudderulcerultraumbrauncleuncutunderundidundueunfedunfitunifyunionuniteunityunlitunmetunsetuntieuntilunwedunzipupperupseturbanurineusageusherusingusualusurputileuttervaguevaletvalidvalorvaluevalvevapidvaporvaultvauntveganvenomvenuevergeverseversovervevicarvideovigilvigorvillavinylviolaviperviralvirusvisitvisorvistavitalvividvixenvocalvodkavoguevoicevoilavomitvotervouchvowelvyingwackywaferwagerwagonwaistwaivewaltzwartywastewatchwaterwaverwaxenwearyweavewedgeweedyweighweirdwelchwelshwenchwhackwhalewharfwheatwheelwhelpwherewhichwhiffwhilewhinewhinywhirlwhiskwhitewholewhoopwhosewidenwiderwidowwidthwieldwightwillywimpywincewinchwindywiserwispywitchwittywokenwomanwomenwoodywooerwoolywoozywordyworldworryworseworstworthwouldwoundwovenwrackwrathwreakwreckwrestwringwristwritewrongwrotewrungwrylyyachtyearnyeastyieldyoungyouthzebrazestyzonal";
  for (let i = 0; i < fullstring.length; i += 5) {
    possibles.push(fullstring.substring(i, i+5));
  }
}

function load_infinite_wordle() {
  possibles = ["zeros", "linen", "lager", "canoe", "flash", "small", "rumor", "joist", "qualm", "total", "croak", "exact", "epoxy", "panda", "divan", "pound", "anise", "moron", "dozen", "poker", "tramp", "hunch", "ratio", "rider", "money", "logic", "queue", "comet", "movie", "slide", "libel", "taboo", "dacha", "rosin", "plump", "corny", "ocean", "happy", "fruit", "build", "grasp", "flood", "bilge", "midst", "fauna", "dowel", "vicar", "aloof", "incur", "jetty", "trade", "wrist", "token", "offer", "erupt", "razor", "crony", "power", "false", "lanky", "hover", "amend", "datum", "jiffy", "surge", "otter", "baggy", "bleak", "jihad", "grind", "photo", "defer", "table", "elude", "hound", "mirky", "piety", "older", "raven", "fuzzy", "speed", "organ", "stuck", "glory", "valve", "weird", "alibi", "about", "story", "inane", "horse", "bogus", "holly", "furor", "tryst", "decor", "guano", "tenor", "pixel", "towel", "hefty", "mooch", "erase", "spell", "avail", "among", "forth", "teeth", "beryl", "shown", "stain", "aside", "fiend", "smoke", "cleft", "wheel", "aorta", "twice", "humor", "ladle", "worse", "zesty", "rhyme", "detox", "mount", "style", "abort", "metal", "cream", "molar", "gross", "rebar", "ashen", "fluid", "tumor", "craps", "abide", "roost", "guest", "plaid", "gable", "crawl", "stage", "seven", "petty", "those", "unwed", "wrath", "pupil", "ready", "alias", "ebony", "hosta", "cairn", "mucus", "angel", "mourn", "opera", "taunt", "ivory", "heist", "lapel", "kiosk", "belch", "stiff", "freak", "chide", "putty", "dolly", "naked", "rebut", "depth", "usage", "acing", "union", "fatty", "sound", "issue", "elope", "knock", "haunt", "focal", "heart", "dunce", "panel", "colon", "naval", "apron", "finch", "flock", "croup", "fatwa", "valor", "inbox", "plate", "trout", "flats", "prowl", "clove", "crude", "eager", "tweet", "faith", "brief", "phone", "broke", "glint", "chalk", "gauze", "hokey", "dingy", "butch", "codex", "geode", "foggy", "golem", "humid", "buggy", "alive", "coral", "chant", "maxim", "coyly", "dorky", "rigor", "facet", "month", "borne", "punch", "amuse", "enjoy", "droid", "daddy", "curio", "stove", "proxy", "welsh", "scrap", "humus", "deify", "fence", "nudge", "dimly", "coven", "cargo", "alpha", "gusto", "macho", "modem", "diner", "proud", "pluck", "butte", "beefy", "decay", "vowel", "write", "ninth", "amino", "okapi", "lyric", "promo", "hurry", "serum", "zippy", "foist", "pecan", "being", "forum", "habit", "actor", "vigor", "bongo", "harem", "junta", "elide", "prize", "hippo", "worry", "paper", "guilt", "niche", "clone", "bayou", "skull", "inure", "golly", "lemon", "basil", "amble", "blank", "limbo", "green", "storm", "avert", "honey", "aioli", "druid", "threw", "ronin", "touch", "hinge", "shade", "nerve", "quark", "react", "adorn", "judge", "ultra", "peril", "grunt", "egret", "jaunt", "would", "still", "yours", "feint", "coach", "sugar", "round", "great", "ethos", "preen", "flume", "dread", "stand", "query", "dwell", "loofa", "bowel", "drawl", "essay", "pizza", "blunt", "gland", "bloom", "diver", "diode", "renal", "anvil", "sunny", "mocha", "lotus", "ranch", "brass", "rummy", "paste", "onion", "omega", "hooch", "kempt", "sleek", "dying", "polka", "cycle", "urban", "motza", "bribe", "noise", "choke", "foyer", "aspic", "indie", "flank", "local", "model", "expel", "groom", "elven", "award", "video", "cruel", "hubby", "tenth", "atoll", "rodeo", "goose", "guile", "flown", "oxide", "drove", "adopt", "gummy", "agree", "block", "verse", "blitz", "marry", "ennui", "rural", "briar", "prune", "kebab", "amiss", "adage", "enter", "fetid", "truly", "kanji", "magma", "depot", "duvet", "novel", "grift", "gauge", "creed", "unify", "grade", "slept", "final", "nylon", "rugby", "gaily", "taffy", "deuce", "chord", "debit", "worst", "fudge", "rinse", "uncle", "vinyl", "briny", "epoch", "trove", "relax", "adult", "grass", "sauce", "dream", "louse", "chaos", "naive", "vodka", "baron", "thyme", "purge", "reiki", "syrup", "havoc", "cabby", "claim", "refer", "missy", "fling", "juicy", "filth", "funky", "piece", "retro", "ethic", "relic", "pivot", "spoon", "arise", "dicky", "brisk", "zebra", "gaudy", "going", "folly", "pilot", "bride", "micro", "salad", "shirt", "lover", "hello", "femur", "verry", "bulge", "sense", "cocky", "quite", "ritzy", "thong", "bravo", "lunge", "flail", "tango", "mural", "plead", "group", "empty", "cubic", "prove", "tease", "beret", "alarm", "gizmo", "heard", "roast", "count", "troll", "inert", "grant", "farce", "arson", "evict", "brush", "under", "ledge", "crumb", "vista", "dweeb", "class", "bunch", "clout", "doubt", "avoid", "vivid", "debug", "tiger", "fiery", "leach", "byway", "hijab", "deter", "gripe", "pious", "cramp", "berry", "glove", "nadir", "sandy", "abbey", "delta", "fleet", "dandy", "glare", "talon", "large", "split", "corps", "kaput", "olive", "dopey", "viral", "conch", "aegis", "tonic", "vocal", "foray", "pride", "drone", "dance", "jumbo", "grove", "clamp", "donor", "hence", "folio", "ankle", "knife", "three", "ferry", "dogma", "cacti", "await", "miasm", "banal", "fifth", "halve", "gruff", "scoop", "wacky", "apply", "recur", "fancy", "heron", "broth", "rumba", "north", "event", "upset", "admit", "knave", "digit", "opium", "kitty", "below", "newly", "spark", "rapid", "fetch", "poise", "unity", "igloo", "draft", "tunic", "medic", "groan", "ensue", "reuse", "thigh", "antic", "neigh", "fable", "booty", "occur", "tight", "scout", "quaff", "doozy", "lying", "cedar", "duchy", "parry", "vital", "maybe", "filly", "every", "mouth", "howdy", "sperm", "trash", "brick", "abate", "kayak", "magic", "belay", "quick", "gulch", "acute", "tulip", "print", "sushi", "dryly", "awful", "salon", "payee", "doula", "lemur", "cupid", "falls", "shark", "guppy", "bluff", "satin", "krill", "elder", "coupe", "venal", "bough", "pilaf", "theme", "their", "inlet", "quake", "least", "value", "legal", "kefir", "topaz", "dully", "canto", "booth", "nicer", "patch", "state", "above", "dirty", "house", "young", "lease", "flake", "eight", "atlas", "ought", "vapid", "crimp", "fjord", "drift", "crepe", "start", "ghost", "amaze", "edify", "flack", "assay", "dodge", "pinto", "noble", "nasal", "carve", "theft", "fiber", "motel", "grape", "bidet", "float", "resin", "meter", "tally", "learn", "orbit", "hobby", "wagon", "strip", "kinky", "aphid", "sight", "arrow", "niece", "pesky", "mouse", "exile", "using", "clown", "elite", "ganja", "gaunt", "solve", "copse", "graph", "penny", "twerp", "beige", "delve", "might", "rifle", "taint", "truth", "hardy", "knack", "sorry", "guess", "layer", "right", "chafe", "grain", "fight", "agony", "frisk", "chain", "pasta", "idiot", "azure", "given", "lathe", "kendo", "imply", "henna", "ruler", "julep", "stake", "trump", "cloth", "bylaw", "dirge", "krona", "visit", "aroma", "bawdy", "tonal", "venue", "dusty", "space", "vapor", "altar", "queen", "hatch", "scope", "tidal", "drake", "glide", "attic", "brood", "latch", "cease", "world", "dense", "latke", "elbow", "field", "breed", "mirth", "rupee", "grown", "visor", "hoist", "realm", "which", "plush", "drill", "handy", "inner", "tonne", "botch", "angst", "puppy", "gruel", "unfit", "femme", "scene", "cache", "girth", "doing", "crack", "until", "elate", "major", "yummy", "swear", "wheat", "nomad", "leapt", "quill", "filch", "water", "serve", "bindi", "giddy", "koala", "hocus", "input", "khaki", "diary", "yokel", "mango", "acorn", "trite", "rival", "cynic", "bloat", "mogul", "nurse", "lipid", "hoard", "human", "tempo", "snack", "fishy", "slate", "maple", "combo", "fault", "abhor", "rogue", "raise", "melee", "order", "tipsy", "buxom", "ridge", "grace", "dealt", "easel", "climb", "pouch", "rheum", "watch", "enema", "vague", "lunar", "peach", "loony", "bento", "whose", "owlet", "caper", "cheek", "drape", "cough", "sport", "usual", "inept", "adept", "probe", "melon", "tepid", "merry", "trawl", "repay", "ramen", "galop", "derby", "croon", "credo", "edict", "frame", "klutz", "choir", "ninja", "pitch", "grand", "fakir", "sewer", "catch", "gloom", "wrong", "banjo", "mercy", "pesto", "tilde", "skirt", "route", "vault", "algae", "drunk", "error", "bosom", "yeast", "lasso", "chump", "yield", "flush", "robot", "thumb", "shall", "leper", "envoy", "antsy", "comfy", "sword", "cluck", "cadet", "nasty", "civic", "halal", "cider", "delay", "urine", "balmy", "suite", "image", "embed", "index", "laden", "enemy", "brace", "tweak", "twirl", "denim", "board", "metro", "frond", "disco", "rouge", "condo", "siege", "camel", "hertz", "quash", "dryad", "giant", "laser", "array", "spike", "agile", "rehab", "along", "limit", "proof", "oasis", "other", "tooth", "caulk", "nymph", "known", "regal", "crass", "totem", "fizzy", "conic", "reign", "arbor", "chess", "palsy", "speak", "outer", "ether", "swift", "poppy", "jones", "evade", "couch", "unite", "tuque", "abyss", "radio", "mayor", "mulch", "stole", "loyal", "gamut", "fully", "trial", "canal", "reply", "topic", "inlay", "lucid", "trick", "chirp", "cobra", "penal", "sixth", "worth", "ichor", "fungi", "drain", "villa", "marsh", "droll", "trail", "bushy", "haiku", "blown", "pinky", "rainy", "email", "motor", "beget", "brand", "bonus", "froth", "chasm", "hotel", "never", "obese", "poach", "canny", "pique", "bison", "levee", "swing", "conga", "minor", "moray", "bocce", "parse", "noose", "setup", "clank", "icily", "deign", "vegan", "bless", "manic", "karma", "torch", "braid", "apart", "stone", "nifty", "virus", "eying", "audit", "audio", "twang", "risky", "burly", "panic", "crypt", "ficus", "ideal", "medal", "cleat", "loath", "frown", "gnash", "gloss", "flute", "nerdy", "sonic", "curve", "hedge", "glade", "twist", "eagle", "remix", "dairy", "circa", "pedal", "turbo", "ionic", "awake", "match", "crazy", "point", "quail", "hazel", "sigma", "gavel", "papal", "itchy", "flyer", "emote", "grill", "ducal", "idyll", "messy", "agent", "valet", "imbue", "durum", "tardy", "solar", "emery", "knead", "pagan", "jelly", "grief", "geese", "titan", "ditzy", "cagey", "press", "joint", "crank", "death", "atone", "duomo", "lobby", "yearn", "lithe", "revue", "often", "hydra", "flour", "laugh", "llama", "fleck", "lofty", "super", "dizzy", "drank", "trope", "crust", "bevel", "thank", "voice", "guard", "after", "cinch", "crane", "robin", "curry", "kerne", "futon", "mommy", "rowdy", "early", "grist", "annul", "filet", "music", "token", "kiddo", "earth", "moose", "whale", "ditto", "acrid", "parka", "lodge", "piano", "adobe", "drama", "slope", "loose", "motto", "merit", "meant", "gaffe", "manna", "gloat", "pulse", "ounce", "bliss", "ketch", "since", "porch", "guava", "carry", "place", "berth", "rocky", "kneel", "bugle", "glass", "helix", "wrote", "rally", "grope", "intro", "enact", "elfin", "crown", "impel", "equip", "quack", "decry", "eyrie", "quote", "opine", "minus", "width", "gleam", "tithe", "batch", "squad", "plank", "stamp", "exalt", "alien", "endow", "align", "thief", "lance", "juror", "clasp", "trend", "clerk", "annoy", "royal", "allow", "aisle", "ditch", "hitch", "silly", "jewel", "quiet", "jerky", "media", "valid", "rhino", "waltz", "primp", "moist", "leave", "feign", "corgi", "kukri", "harpy", "rabbi", "rebel", "felon", "cumin", "sweet", "gumbo", "prism", "viola", "forty", "eerie", "pithy", "kanga", "twain", "bully", "nanny", "forge", "slice", "psalm", "aglow", "globe", "exert", "today", "viper", "mince", "ember", "mimic", "while", "gutsy", "prose", "utter", "gnome", "yacht", "peace", "cliff", "spray", "brink", "clave", "badly", "upper", "grump", "pearl", "dross", "screw", "annex", "cloak", "joule", "cocoa", "south", "optic", "quell", "stood", "prank", "affix", "dashi", "ascot", "fetal", "kudos", "chuff", "exist", "patio", "tower", "sadly", "pansy", "range", "pinch", "irate", "patsy", "unlit", "graft", "wafer", "blare", "weigh", "infer", "ducky", "cabal", "phase", "price", "gonad", "brawl", "caste", "bicep", "batik", "youth", "nexus", "pekoe", "radar", "plane", "dress", "shore", "haste", "faint", "floss", "bagel", "alley", "quirk", "rough", "angry", "river", "baton", "juice", "cushy", "rigid", "cigar", "askew", "spite", "balsa", "glyph", "dough", "tract", "dicey", "throb", "caber", "budge", "fresh", "belly", "sneak", "labia", "ripen", "gourd", "droop", "waste", "macro", "argue", "recap", "prior", "eject", "fatal", "ingot", "binge", "polar", "larva", "rotor", "lilac", "chewy", "feral", "ample", "reset", "myrrh", "trust", "candy", "woman", "elegy", "fever", "cling", "flesh", "march", "ovary", "brute", "axiom", "notch", "owner", "toast", "moxie", "onset", "colic", "evoke", "teach", "witch", "moral", "genre", "letch", "divot", "widow", "chive", "plaza", "godly", "glove", "grave", "gamma", "entry", "fluff", "erode", "pooch", "wound", "afoot", "tarot", "merge", "wider", "roman", "thick", "joker", "waxen", "jolly", "latex", "paint", "douse", "radon", "renew", "chard", "boxer", "lowly", "thing", "extra", "torso", "bling", "shaft", "ghoul", "revel", "album", "chill", "truce", "haven", "prawn", "straw", "reach", "mambo", "vomit", "emcee", "taken", "rajah", "kazoo", "genie", "comma", "karat", "morph", "biome", "gecko", "break", "lunch", "fairy", "party", "amber", "blaze", "friar", "drive", "matte", "roach", "fetus", "study", "trunk", "smart", "waist", "frill", "logos", "lingo", "usurp", "equal", "rabid", "cress", "snake", "burnt", "groin", "fugue", "focus", "whole", "smile", "catty", "heavy", "white", "bumpy", "hyper", "tuber", "lucky", "dowse", "jazzy", "feast", "feces", "taste", "vixen", "flirt", "again", "shook", "venom", "solid", "harsh", "elect", "irony", "found", "brake", "eaten", "gulag", "cubby", "swept", "troop", "night", "quest", "flame", "grime", "tutor", "dowry", "kudzu", "oddly", "exude", "erect", "toxic", "light", "prone", "arena", "hairy", "hyena", "cameo", "demur", "third", "madam", "label", "cello", "pause", "gorge", "daunt", "where"];
}

//document.body.innerHTML += possibles.join(", ");

function filter_bank(guess, sig) {
  //filter possibilities to only contain those that give same signature
  let new_possibles = [];
  for (truth of possibles)
    if (sig == signature(truth, guess))
      new_possibles.push(truth);
  possibles = new_possibles;
}

function best_guess() {
  let best_utility = 1000000000;
  let best_guess = "";
  for (guess of possibles) {
    //pretend this is our guess
    //what is signature breakdown from this guess?
    let signature_count = [];
    for (let i = 0; i < 243; i++) signature_count.push(0);
    for (truth of possibles) {
      let sig = signature(truth, guess);
      signature_count[sig]++;
    }
    //the utility of this guess is sum(count/length * count/length)
    //ie the the chance-weighted proportion left
    //(eg 2% of time we left with 5/100 left, 5% time leave 6/100 ...)
    //because length is same among all guesses in this run, utility is just count^2
    let utility = 0;
    //also small utility is good. that means it loses the most
    for (count of signature_count) utility += count * count;
    if (utility < best_utility) {
      best_utility = utility;
      best_guess = guess;
      //console.log(guess, 1-utility/(possibles.length*possibles.length));
    }
  }
  return {
    word: best_guess,
    utility: 1-best_utility/possibles.length/possibles.length
  };
}

//precondition: both parameters are arrays of 5 characters
function signature(truth, guess, special = false) {
  truth = truth.split("");
  guess = guess.split("");
  let color = [0, 0, 0, 0, 0]; //correspond to guess
  let accounted = [false, false, false, false, false]; //correspond to truth
  let accounted_guess = [false, false, false, false, false]; //to guess
  for (let i = 0; i < 5; i++) {
    if (guess[i] == truth[i]) {
      color[i] = 2;
      accounted[i] = true;
      accounted_guess[i] = true;
    }
  }
  for (let i = 0; i < 5; i++) if (!accounted[i]) { //see if truth[i] is somewhere out there
    for (let j = 0; j < 5; j++) {
      if (truth[i] == guess[j] && !accounted_guess[j]) {
        color[j] = 1;
        accounted[i] = true;
        accounted_guess[j] = true;
      }
    }
  }
  if (special) return color;
  return color[4] + color[3]*3 + color[2]*9 + color[1]*27 + color[0]*81;
}


let display = document.querySelector("section");
let boxes = [];
let buttons = [];
let colors = [];

function start() {
  document.querySelector("article").remove();
  display.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    boxes[i] = document.createElement("input");
    boxes[i].setAttribute("readonly", "true");
    colors[i] = 0;
    update_color(i);
    display.appendChild(boxes[i]);
    boxes[i].onclick = function() {
      click_color(i);
    }
    /*boxes[i].onfocus = function() {
      if (boxes[i].value) {
        boxes[i].placeholder = boxes[i].value;
        boxes[i].value = "";
      } else {
        boxes[i].placeholder = "";
      }
    }
    //use addEventListener bc el.onfocusout doesn't work :(
    boxes[i].addEventListener('focusout', function(){
      if (!boxes[i].value)
        boxes[i].value = boxes[i].placeholder;
    });
    boxes[i].oninput = function() {
      while (boxes[i].value.length > 1) {
        boxes[i].value = boxes[i].value.substring(1);
      }
      if (boxes[i].value) {
        if (i < 4) boxes[i+1].focus();
        else boxes[i].blur();
      }
    }*/
  }
  /*display.appendChild(document.createElement("br"));
  for (let i = 0; i < 5; i++) {
    buttons[i] = document.createElement("button");
    buttons[i].innerText = "color";
    buttons[i].onclick = function() {
      click_color(i);
    }
    display.appendChild(buttons[i]);
  }*/
  let report = best_guess();
  for (let i = 0; i < 5; i++) {
    boxes[i].placeholder = report.word.charAt(i);
    boxes[i].value = report.word.charAt(i);
  }
  report = "you should guess "+report.word.toUpperCase()+". it will reduce "+Math.round(report.utility*1000)/10+"% of the list";
  report_box.innerHTML += '<p>' + report + '</p>';
}
    
function click_color(i) {
  colors[i] = (colors[i]+1)%3;
    update_color(i);
}

function update_color(i) {
  boxes[i].style.backgroundColor = ["#333","#ec2","#4c2"][colors[i]];
  //if (buttons[i]) buttons[i].style.backgroundColor = ["#333","#ec2","#4c2"][colors[i]];
}

let report_box = document.querySelector("footer");
let history_box = document.querySelector("main");
function solve() {
  let guess = "";
    for (b of boxes) guess += b.value;
    if (guess.length != 5) return;
    guess = guess.toLowerCase();
    let sig = colors[4] + colors[3]*3 + colors[2]*9 +
        colors[1]*27 + colors[0]*81;
    filter_bank(guess, sig);
    //create history
    let hist = '';
    for (let i = 0; i < 5; i++) {
      hist += '<input style="background-color: '+["#333","#ec2","#4c2"][colors[i]]+';" value="'+guess.charAt(i)+'" readonly>'
    }
    history_box.innerHTML += hist + '<br>';
    if (sig == 242) {
      report_box.innerHTML += '<p>good job</p>';
      document.body.innerHTML = history_box.outerHTML + report_box.outerHTML;
    }
    if (possibles.length > 1) {
      let report = best_guess();
      for (let i = 0; i < 5; i++) {
        boxes[i].placeholder = report.word.charAt(i);
        boxes[i].value = report.word.charAt(i);
      }
      report = "you should guess "+report.word.toUpperCase()+". it will reduce "+Math.round(report.utility*1000)/10+"% of the list";
      report_box.innerHTML += '<p>' + report + '</p>';
    } else if (possibles.length == 1) {
      for (let i = 0; i < 5; i++) {
        boxes[i].placeholder = possibles[0].charAt(i);
        boxes[i].value = possibles[0].charAt(i);
      }
      report_box.innerHTML += '<p>it must be '+possibles[0].toUpperCase()+'</p>';
    } else {
      for (let i = 0; i < 5; i++) {
        boxes[i].placeholder = "";
        boxes[i].value = "";
      }
      report_box.innerHTML += '<p>all words filtered. im so sorry</p>';
      document.body.innerHTML = history_box.outerHTML + report_box.outerHTML;
    }
    for (let i = 0; i < 5; i++) {
      colors[i] = 0;
      update_color(i);
    }
}

function find_success_rate(scheme = load_infinite_wordle) {
  let distribution = [[], [], [], [], [], [], [], [], [], []];
  scheme();
  let mots = possibles;
  let first_guess = best_guess().word;
  mots = ["where", "where", "where", "where", "where", "where", "where", "where", "where", "where", "where", "where", "zonal"];
  for (truth of mots) {
    //play pretend game over truth
    scheme();
    console.log("playing over "+truth);
    filter_bank(first_guess, signature(truth, first_guess));
    let guesses = 1;
    if (possibles.length == 1)
      distribution[1].push(truth);
    else while (guesses < 10) {
      let b = best_guess().word;
      let sig = signature(truth, b);
      filter_bank(b, sig);
      if (sig == 242) {
        distribution[guesses].push(truth);
        break;
      }
      guesses++;
    }
  }
  for (let i = 1; i < distribution.length; i++) {
    console.log(i, "guesses: "+distribution[i].length);
    //console.log(distribution[i]);
  }
  console.log(distribution);
}

/*function signature(truth, guess) {
  truth = truth.split("");
  guess = guess.split("");
  let color = [0, 0, 0, 0, 0];
  let accounted = [false, false, false, false, false];
  for (let i = 0; i < 5; i++) {
    if (guess[i] == truth[i]) {
      color[i] = 2;
      accounted[i] = true;
    }
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (!accounted[j] && guess[i] == truth[j]) {
        color[i] = 1;
        accounted[j] = true;
      }
    }
  }
  return color[4] + color[3]*3 + color[2]*9 + color[1]*27 + color[0]*81;
}*/