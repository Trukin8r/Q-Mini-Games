const eWords = ['ABOUT', 'ABOVE', 'ACROSS', 'ACTIVE', 'AFRAID', 'AFTER', 'AGAIN', 'AGREE', 'ALONE', 'ALONG', 'AIRPLANE', 'ALREADY', 'ALWAYS', 'ALERT', 'ANGRY', 'ANYONE', 'APPLE', 'AROUND', 'ARROW', 'ANIMAL', 'ASLEEP', 'ARCADE', 'ARRIVE', 'ANGEL', 'ATTACK', 'AMBER', 'ACCEPT', 'AUNT', 'ACROBAT', 'AGENT', 'AFTER', 'AWARE', 'ANGER', 'ADDING', 'BEFORE', 'BEGIN', 'BEHIND', 'BELOW', 'BESIDE', 'BETTER', 'BETWEEN', 'BIRTH', 'BLEED', 'BLOCK', 'BLOOD', 'BOARD', 'BOTTLE', 'BOTTOM', 'BRANCH', 'BRAVE', 'BREAD', 'BREAK', 'BREATH', 'BADGE', 'BRIDGE', 'BRIGHT', 'BRING', 'BROTHER', 'BROKEN', 'BUCKET', 'BRUSH', 'BUILD', 'CANDLE', 'CARRY', 'CATCH', 'CENTRAL', 'CERTAIN', 'CHAIR', 'CHANCE', 'CHANGE', 'CHEAPER', 'CHEESE', 'CHICKEN', 'CHILD', 'CHILDREN', 'CONSTANT', 'CHOCOLATE', 'CHOICE', 'CHOOSE', 'CIRCLE', 'CLEVER', 'CLEANER', 'CALENDAR', 'CABINET', 'CONVINCE', 'CAREFUL', 'CLEAR', 'CLOTHES', 'COFFEE', 'COMMON', 'COMPUTER', 'COPPER', 'CORNER', 'CORRECT', 'COURSE', 'CURRENT', 'DANCE', 'DAMAGE', 'DECIDE', 'DESSERT', 'DESERVE', 'DESIRE', 'DEPEND', 'DESTROY', 'DAYLIGHT', 'DEVELOP', 'DEVOTED', 'DINNER', 'DEFINE', 'DIAMOND', 'DISEASE', 'DOUBLE', 'DARLING', 'EARLY', 'EFFECT', 'EIGHT', 'EITHER', 'ELECTRIC', 'ELEPHANT', 'EVERGREEN', 'EASTERN', 'EGGPLANT', 'ENTRANCE', 'ESCAPE', 'EVENING', 'EVERYONE', 'EVERYBODY', 'EXAMPLE', 'EXCITED', 'EXERCISE', 'EXPLAIN', 'EXPLODE', 'FAMOUS', 'FACTORY', 'FEELING', 'FISHING', 'FORWARD', 'FATHER', 'FEMALE', 'FEVER', 'FINGER', 'FINISH', 'FLOWER', 'FOOTBALL', 'FORCE', 'FOREST', 'FORGET', 'FORGIVE', 'FREEDOM', 'FREEZE', 'FRIENDLY', 'GARDEN', 'GENERIC', 'GIRAFFE', 'GENERAL', 'GENTLEMAN', 'GOODBYE', 'GRANDFATHER', 'GRANDMOTHER', 'GARBAGE', 'GREENHOUSE', 'HAMMER', 'HAPPEN', 'HEALTHY', 'HIMSELF', 'HELPFUL', 'HUNTING', 'HUMANITY', 'HEAVEN', 'HEIGHT', 'HOLIDAY', 'HOSPITAL', 'HUNDRED', 'HUNGRY', 'HUSBAND', 'IMPORTANT', 'INCREASE', 'JUNGLE', 'JUSTICE', 'JEWELRY', 'INFECT', 'JOINTLY', 'JOYFUL', 'INSIDE', 'INVENT', 'ILLNESS', 'INDOOR', 'INVITE', 'ISLAND', 'KITCHEN', 'LEATHER', 'LANTERN', 'LADDER', 'LESSON', 'LETTER', 'LIBRARY', 'LISTEN', 'LITTLE', 'LONELY', 'MACHINE', 'MARKET', 'MATTER', 'MEASURE', 'MEDICINE', 'MEMBER', 'MENTION', 'METHOD', 'MIDDLE', 'MILLION', 'MINUTE', 'MISTAKE', 'MOMENT', 'MONKEY', 'MINERAL', 'MUSICAL', 'MISSION', 'MYSTERY', 'MOUSE', 'MORNING', 'MOTHER', 'MOUNTAIN', 'NARROW', 'NATION', 'NOTHING', 'NECKLACE', 'NATURAL', 'NEARLY', 'NEEDLE', 'NEITHER', 'NEWSPAPER', 'NOISE', 'NOTHING', 'NOTEBOOK', 'NORMAL', 'NOTICE', 'NUMBER', 'NATION', 'OBJECT', 'OCEAN', 'OFFICE', 'OFFICER', 'OUTDOOR', 'OUTLOOK', 'OPPOSITE', 'ORANGE', 'ORDER', 'OTHER', 'OUTSIDE', 'OBSERVE', 'PAINT', 'PARENT', 'PARTNER', 'PEACE', 'PENCIL', 'PEOPLE', 'PEPPER', 'PERFECT', 'PACKAGE', 'PATTERN', 'PERIOD', 'PERSON', 'PICTURE', 'PLACE', 'PLANE', 'PLASTIC', 'PLEASE', 'PLEASED', 'POCKET', 'POISON', 'POLICE', 'POLITE', 'POPULAR', 'POSITION', 'POSSIBLE', 'POTATO', 'PRESENT', 'PRIVATE', 'PROBABLY', 'PROBLEM', 'PRODUCE', 'PROMISE', 'PROPER', 'PROTECT', 'PROVIDE', 'PUBLIC', 'QUESTION', 'RAISE', 'REALLY', 'RECEIVE', 'RECORD', 'REGULAR', 'REMEMBER', 'REMOVE', 'REPAIR', 'REPEAT', 'RESULT', 'RESPECT', 'REVERSE', 'RUNNING', 'RETURN', 'RUBBER', 'SCHOOL', 'SCIENCE', 'SEARCH', 'SECOND', 'SENTENCE', 'SERVE', 'SEVEN', 'SEVERAL', 'SHADOW', 'SHOULDER', 'SILENCE', 'SILVER', 'SIMPLE', 'SINGLE', 'SISTER', 'SLEEP', 'SOMEONE', 'SOMETHING', 'SPECIAL', 'SPRING', 'STATION', 'STRANGE', 'STRONG', 'STUDENT', 'SUMMER', 'SURPRISE', 'TELEPHONE', 'TELEVISION', 'TENNIS', 'TERRIBLE', 'TEACHER', 'TEACHING', 'TELLING', 'THEREFORE', 'THREATEN', 'TOGETHER', 'TOMORROW', 'TONIGHT', 'TEACHER', 'TRAVEL', 'TROUBLE', 'UNCLE', 'UNDER', 'UNDERSTAND', 'USEFUL', 'VACATION', 'VEGETABLE', 'VILLAGE', 'VOICE', 'WASTE', 'WATER', 'WEATHER', 'WEDDING', 'WEIGHT', 'WELCOME', 'WHEEL', 'WHERE', 'WINDOW', 'WINTER', 'YESTERDAY', 'ELDERLY', 'BEDROOM', 'BENEFIT', 'CAUTION', 'BECAUSE', 'ILLNESS', 'BELIEVE']

const mWords = ['ACTIVITY', 'ADAPT', 'AMOUNT', 'ACCURATE', 'ANNUAL', 'ACHIEVE', 'ACADEMY', 'ASSUME', 'ANOTHER', 'ANSWER', 'ANYTHING', 'ANYTIME', 'AGILE', 'AFFIRM', 'AFTERWARD', 'AFTERNOON', 'ADJUST', 'ADVANTAGE', 'AGGRESSIVE', 'ALARMED', 'ALARMING', 'ANCIENT', 'ADVANCE', 'AGENCY', 'AGENDA', 'ABJECT', 'ABLAZE', 'ADJECTIVE', 'ALLOW', 'ARROGANT', 'ARTWORK', 'ASSEMBLE', 'ASSEMBLY', 'ASTRONAUT', 'AUDIENCE', 'AWNING', 'ABOLISH', 'ACCENT', 'ACCESS', 'APOLOGIZE', 'AMAZE', 'ADRIFT', 'AMAZING', 'ABRASIVE', 'AMPLE', 'AMUSE', 'AMUSING', 'ARTIST', 'ASHAMED', 'ASPIRING', 'ASSERTIVE', 'APPRECIATE', 'ANGUISH', 'ATHLETIC', 'AUDIBLE', 'AUTHENTIC', 'ABUNDANT', 'ACCESSIBLE', 'APPEALING', 'APPROPRIATE', 'AROMATIC', 'AIMLESS', 'AMATEUR', 'ALLOWED', 'ALLOWABLE', 'AMBITIOUS', 'ADDICTED', 'ACROBATIC', 'ANGELIC', 'ADMIRE', 'ADORE', 'ACCLAIM', 'AWAKEN', 'ABSOLUTE', 'ARTICULATE', 'APPEAR', 'ACCEPTABLE', 'ACCOUNTABLE', 'AUTUMN', 'ANALYZE', 'AWESOME', 'AWFUL', 'AMPLE', 'AMPLIFY', 'ANKLE', 'BEAUTIFUL', 'BEDROOM', 'BASKET', 'BEHAVE', 'BESIDES', 'BIRTHDAY', 'BEIGE', 'BORDER', 'BORROW', 'BUMPER', 'BREAKFAST', 'BREATHE', 'BREAK', 'BRAKE', 'BROWN', 'BUSINESS', 'CAREFUL', 'CARELESS', 'BELIEVE', 'AGREEABLE', 'AIRWORTHY', 'CENTURY', 'CLOCK', 'CLOTHING', 'CLOUDY', 'COFFEE', 'COLLECT', 'COMFORTABLE', 'COMPARE', 'COMPLETE', 'COMPUTER', 'CONDITION', 'CONTINUE', 'CONTROL', 'CONTAIN', 'COUNTRY', 'CUPBOARD', 'DANGEROUS', 'CAREFREE', 'CARETAKER', 'CATALYST', 'CELEBRATE', 'CHAMPION', 'CHARMING', 'CHASE', 'CHANCE', 'CHERISH', 'CHEERFUL', 'CHUCKLE', 'CLEVER', 'COMICAL', 'COMPATIBLE', 'COMPETENT', 'CONFIDENT', 'COURAGE', 'CURIOUS', 'CUDDLE', 'CHAOTIC', 'CLASSIC', 'COMFORTING', 'COMPLEX', 'COMPLICATE', 'COMPLICATED', 'CONCISE', 'COUNTLESS', 'CRYPTIC', 'CUSTOMER', 'CALCULATE', 'CALCULATOR', 'CANCEL', 'CANCELED', 'CAPTIVE', 'CAUTION', 'CAUTIOUS', 'CHANGE', 'CHARCOAL', 'COLOSSAL', 'CONFUSED', 'CANDID', 'COMMITTED', 'COMPACT', 'COMMUNICATE', 'CONSERVE', 'CONSIDER', 'COURTEOUS', 'COWARD', 'CULTURE', 'CABBAGE', 'CABOOSE', 'COMMUNITY', 'CRAFTSMAN', 'CAPTIVATE', 'CERTIFY', 'CIRCULATE', 'CONNECT', 'CALENDAR', 'CANDIDATE', 'CANTEEN', 'CRAYONS', 'CAPACITY', 'CAPABILITY', 'CAPTURE', 'CARDBOARD', 'CARETAKER', 'CATEGORY', 'DAUGHTER', 'DECREASE', 'DIFFERENT', 'DIFFICULT', 'DIRECTION', 'DISCOVER', 'DAZZLE', 'DECENT', 'DECORATE', 'DEDICATE', 'DEFINITE', 'DELICATE', 'DELICACY', 'DELIGHT', 'DELIGHTFUL', 'DEPENDABLE', 'DESIRABLE', 'DEVELOP', 'DEVELOPMENT', 'DETERMINED', 'DETERMINE', 'DIAMOND', 'DISTINGUISH', 'DYNAMIC', 'DARKEN', 'DEBATABLE', 'DECAYING', 'DEFEATED', 'DEFECTIVE', 'DEFICIENT', 'DEFORMED', 'DELIVERED', 'DISAPPOINT', 'DISASTER', 'DISCIPLINE', 'DISCREDIT', 'DISEASE', 'DISGUSTED', 'DISRUPTIVE', 'DOWNHILL', 'DEPRESSING', 'DESPERATE', 'DILIGENT', 'DIPLOMATIC', 'DISHONEST', 'DAYDREAM', 'DIAGNOSIS', 'DISGUISE', 'DECREASE', 'DAMPNESS', 'DANDELION', 'DARKNESS', 'EDUCATION', 'EXAMINATION', 'EXPENSIVE', 'EXTREMELY', 'EFFECTIVE', 'EFFORTLESS', 'EFFICIENT', 'ELECTRIFY', 'ELEGANCE', 'ELOQUENT', 'EMBRACE', 'EMPATHY', 'EMPOWER', 'ENCHANT', 'ENCOURAGE', 'ENDOWMENT', 'ENERGETIC', 'ENHANCE', 'ENLIGHTEN', 'ENTERTAIN', 'ENTHUSIAST', 'EXCEPTIONAL', 'EXPANSIVE', 'EARNEST', 'ECCENTRIC', 'ELEMENTARY', 'EMOTIONAL', 'ENCLOSED', 'ENGAGED', 'ESSENTIAL', 'EVAPORATE', 'EXPRESSIVE', 'EXTRAVAGANT', 'EXTROVERT', 'ECONOMY', 'ECONOMICAL', 'EDUCATE', 'EDUCATED', 'EFFECTED', 'EIGHTEEN', 'ELABORATE', 'ELAPSED', 'ELECTRONIC', 'ELEMENTAL', 'ELEVATED', 'EMBOSSED', 'EMPIRICAL', 'ENDOCRINE', 'EMBARRASS', 'ENJOYABLE', 'ENTERPRISE', 'EMBARGO', 'EMBASSY', 'ENAMEL', 'ERUPTION', 'EVACUATE', 'EYEBROW', 'EYELASHES', 'EAVESDROP', 'EMBELLISH', 'ENERGIZE', 'ESPRESSO', 'EXTENSION', 'ETHERNET', 'EMERALD', 'ERMINE', 'ELDERBERRY', 'EGGNOG', 'EQUIPMENT', 'ESTIMATE', 'EARTHQUAKE', 'FOREIGN', 'FURNITURE', 'FURTHER', 'FUTURE', 'FABULOUS', 'FAIRNESS', 'FAMILIAR', 'FANTASTIC', 'FASCINATE', 'FASHION', 'FAVORITE', 'FEASIBLE', 'FESTIVE', 'FLAWLESS', 'FLEXIBLE', 'FOCUSED', 'FOREMOST', 'FORTUNATE', 'FRATERNITY', 'FRESHNESS', 'FRIENDSHIP', 'FRUITFUL', 'FUNNIER', 'FACTUAL', 'FAITHFUL', 'FEARSOME', 'FEIGNED', 'FEMININE', 'FEROCIOUS', 'FICTIONAL', 'FLAMMABLE', 'FLATTERING', 'FRIVOLOUS', 'FRUSTRATE', 'FEARFUL', 'FLEETING', 'FLIPPANT', 'FLOWERING', 'FRAGMENT', 'FRANCHISE', 'FATIGUE', 'FIENDISH', 'FINICKY', 'FLOURISH', 'FOOLISH', 'FORMIDABLE', 'FRIENDLY', 'FOREMAN', 'FRONTIER', 'FUNERAL', 'FABRICATE', 'FANTASY', 'FEATURE', 'FINALIZE', 'FUNCTION', 'FACILITY', 'FACULTY', 'FAINTLY', 'FARMHOUSE', 'FASTENED', 'FATALITY', 'FATHOM', 'GALVANIZE', 'GENUINE', 'GIGGLING', 'GLORIOUS', 'GOODNESS', 'GRATEFUL', 'GREATEST', 'GREATNESS', 'GUARDIAN', 'GALLANT', 'GASPING', 'GENEROUS', 'GEOGRAPHY', 'GEOLOGICAL', 'GHOSTLY', 'GLAMOROUS', 'GLISTENING', 'GLITTERING', 'GRUMBLING', 'GIBBERISH', 'GLOWING', 'GRACEFUL', 'GRADUATE', 'GRADUAL', 'GRACIOUS', 'GREENERY', 'GROTESQUE', 'GUERRILLA', 'GUIDING', 'GORGEOUS', 'GROCERIES', 'GYMNASIUM', 'GENERATE', 'GERMINATE', 'GLIMPSE', 'GUARANTEE', 'GOVERNMENT', 'GENETICS', 'GRATITUDE', 'GREGARIOUS', 'HANDSHAKE', 'HARMONY', 'HEAVENLY', 'HILARIOUS', 'HONESTLY', 'HOPEFUL', 'HUMANE', 'HYGIENE', 'HYSTERICAL', 'HABITUAL', 'HANDSOME', 'HAUNTED', 'HAZARDOUS', 'HEARTBROKEN', 'HESITANT', 'HIDEOUS', 'HISTORICAL', 'HOMEGROWN', 'HONORABLE', 'HOPEFULLY', 'HORRIFIC', 'HOSTILE', 'HUMILIATE', 'HUMILIATING', 'HYPERACTIVE', 'HYPNOTIC', 'HEADACHE', 'HEARTFELT', 'HEARTSICK', 'HIDDEN', 'HOLOGRAM', 'HOLSTER', 'HOMEWARD', 'HYDRAULIC', 'HYBRID', 'HAUGHTY', 'HARMONICA', 'HOMELESS', 'HORIZONTAL', 'HEIRLOOM', 'HELICOPTER', 'HEROINE', 'HOARDER', 'HARVEST', 'HEADLINE', 'HYPHENATE', 'HABITAT', 'HERITAGE', 'HOSPITABLE', 'HUMOROUS', 'INTRODUCE', 'IDEALIST', 'ICONIC', 'IMMEDIATE', 'IMAGINE', 'IDYLLIC', 'IMMENSE', 'IMMUNE', 'IMMUNITY', 'IMPARTIAL', 'IMPECCABLE', 'IMPRESS', 'IMPRESSIVE', 'IMPROVE', 'IMPROVEMENT', 'INCREDIBLE', 'INDIVIDUAL', 'INDEPENDENT', 'INDULGE', 'INFINITE', 'INFLUENCE', 'INITIATIVE', 'INNOCENT', 'INNOVATE', 'INSIGHT', 'INSIGHTFUL', 'INSPIRE', 'INTEGRATE', 'INTEGRITY', 'INTELLIGENT', 'INTIMATE', 'INVENTIVE', 'INVIGORATE', 'INVINCIBLE', 'INVITING', 'IDENTICAL', 'IGNORANT', 'ILLEGAL', 'ILLOGICAL', 'IMAGINARY', 'IMMORAL', 'IMPATIENT', 'IMPERFECT', 'IMPORTED', 'IMPRUDENT', 'INCOMPLETE', 'INFAMOUS', 'INFERIOR', 'INSANITY', 'INTERNAL', 'INVISIBLE', 'IRRITATE', 'ILLUSION', 'IMPROVISE', 'IMPROMPTU', 'INACCURATE', 'INAUGURAL', 'INDIRECT', 'INDOOR', 'INCISIVE', 'INDIGNANT', 'ISOLATED', 'ICEBERG', 'IGNITION', 'ITINERARY', 'IDENTIFY', 'IGNORE', 'IMPLEMENT', 'JAMBOREE', 'JEWELED', 'JOINTED', 'JOYOUS', 'JOYRIDE', 'JOVIALLY', 'JUDICIOUS', 'JUSTIFIED', 'JEOPARDY', 'JUDGMENT', 'JUVENILE', 'JOURNALIST', 'JEALOUSY', 'JETTISON', 'KEEPING', 'KEEPSAKE', 'KEYNOTE', 'KEYSTONE', 'KICKSTART', 'KINDNESS', 'KINDLY', 'KINDRED', 'KINGDOM', 'KNIGHTHOOD', 'KNOCKOUT', 'KNOWINGLY', 'KNOWLEDGE', 'KEYLESS', 'KNEADED', 'KNOWABLE', 'KAYAK', 'KANGAROO', 'KIDNAPPER', 'KNAPSACK', 'KNEECAP', 'KNUCKLE', 'KNEELING', 'KEYBOARD', 'KETCHUP', 'KILOGRAM', 'KEYPAD', 'LAUGHING', 'LAUDABLE', 'LAUGHTER', 'LAVISHLY', 'LAWFUL', 'LAWYER', 'LEADERSHIP', 'LEGEND', 'LEISURE', 'LENIENCY', 'LIBERALLY', 'LIBERATE', 'LIBERTY', 'LIFESAVER', 'LIMITLESS', 'LIKABLE', 'LUCKILY', 'LUSCIOUS', 'LUXURY', 'LYRICAL', 'LAMINATED', 'LANGUID', 'LEARNED', 'LEGENDARY', 'LENIENT', 'LIMITED', 'LINEAR', 'LIVABLE', 'LOGICAL', 'LOVESICK', 'LUNATIC', 'LACKLUSTER', 'LARGEST', 'LAVENDER', 'LATERAL', 'LEAFLESS', 'LEATHERY', 'LEGISLATE', 'LICENSE', 'LINGUISTIC', 'LUDICROUS', 'LIABILITY', 'LUBRICATE', 'LUBRICANT', 'LACERATE', 'LEGALIZE', 'LEGITIMATE', 'LOUNGE', 'LUMINOUS', 'LARCENY', 'LETHARGIC', 'LEXICON', 'LONGEVITY', 'LAWMAKER', 'LEVERAGE', 'LOYALTY', 'LOVABLE', 'LOLLIPOP', 'LADYBUG', 'LOVINGLY', 'MAGICAL', 'MAGNETIC', 'MAGNIFY', 'MAINSTAY', 'MAJESTIC', 'MANIFEST', 'MANNERS', 'MARKETING', 'MARVELOUS', 'MASTERMIND', 'MATURE', 'MEANINGFUL', 'MEDITATE', 'MEMORY', 'MEMORABLE', 'MERCIFUL', 'MERRIMENT', 'MINDFUL', 'MIRACLE', 'MIRACULOUS', 'MITIGATE', 'MONUMENTAL', 'MORALITY', 'MOTIVATE', 'MUTUALLY', 'MAGENTA', 'MAGNETO', 'MAINTAIN', 'MAIDEN', 'MALICIOUS', 'MALIGNANT', 'MANAGER', 'MANDATORY', 'MANDATE', 'MANUAL', 'MARGINAL', 'MATERIAL', 'MATHEMATICS', 'MAXIMUM', 'MECHANIC', 'MECHANICAL', 'MELODIC', 'METALLIC', 'MIDDLE', 'MYTHICAL', 'MIGRANT', 'MILITARY', 'MISPLACED', 'MISLEADING', 'MISSING', 'MISTAKEN', 'MOONLESS', 'MORBID', 'MOTORIZE', 'MUTANT', 'MYSTERY', 'MYSTERIOUS', 'MEASURE', 'MEASURED', 'MINORITY', 'MINDLESS', 'MODERATE', 'MONARCH', 'MOURNFUL', 'MOURNING', 'MUMBLING', 'MAGAZINE', 'MARRIAGE', 'MEDICINE', 'MEDICATE', 'MESSAGE', 'MICROCOSM', 'MICROSCOPE', 'MIDNIGHT', 'MORNING', 'MIXTURE', 'MISSION', 'MILDEW', 'MANEUVER', 'MANIPULATE', 'MARINATE', 'MEMORIZE', 'MENTION', 'MISCARRY', 'MISJUDGE', 'MODERNIZE', 'MONITOR', 'MULTIPLY', 'MAJORITY', 'MEETING', 'MANIFEST', 'NEIGHBOR', 'NATIONAL', 'NATIONWIDE', 'NATURALLY', 'NAVIGATE', 'NECESSARY', 'NECTAR', 'NEWBORN', 'NIMBLE', 'NOBILITY', 'NOMINATE', 'NONCHALANT', 'NORMALLY', 'NOSTALGIA', 'NOTABLE', 'NOTEWORTHY', 'NOVELTY', 'NUMEROUS', 'NURTURE', 'NUTRIENT', 'NUTRITIOUS', 'NARROWLY', 'NAUGHTY', 'NAUSEATE', 'NAUSEOUS', 'NAUTICAL', 'NEAREST', 'NEEDLESS', 'NEGOTIATE', 'NEWEST', 'NIGHTFALL', 'NIGHTMARE', 'NINETEEN', 'NOISY', 'NOTICE', 'NOTICEABLE', 'NONSTOP', 'NOXIOUS', 'NUCLEAR', 'NUMBING', 'NURSING', 'NUTRITION', 'NUTRITIOUS', 'NUTRITIONAL', 'NAMELESS', 'NEGATIVE', 'NEGLIGENT', 'NONDESCRIPT', 'NONPROFIT', 'NONSENSE', 'NORTHERLY', 'NORMAL', 'NOURISH', 'NOVICE', 'NUMBER', 'NUMEROUS', 'NUMERICAL', 'NEBULOUS', 'NEITHER', 'NERVOUS', 'NERVOUSLY', 'NEUTRAL', 'NOCTURNAL', 'NOMADIC', 'NOMINAL', 'NONVERBAL', 'NOSTALGIC', 'NICKNAME', 'NOODLE', 'NUANCE', 'NUGGET', 'NARRATE', 'NARRATOR', 'NETTLE', 'NETWORK', 'NETWORKING', 'NOTATION', 'NEPHEW', 'NEWSPAPER', 'OBEDIENT', 'OBSERVABLE', 'OBSERVANT', 'OBTAIN', 'OCCASION', 'OCCASIONAL', 'ODYSSEY', 'OFFERING', 'ONGOING', 'ONWARD', 'OPERATE', 'OPPORTUNITY', 'OPTIMISM', 'OPTIMIST', 'OPTION', 'OPTIONAL', 'OPULENT', 'ORDERLY', 'ORIENTAL', 'ORIGINAL', 'ORIGINATE', 'OATMEAL', 'ORNAMENT', 'ORNAMENTAL', 'ORNATE', 'OUTCLASS', 'OUTRANK', 'OUTBREAK', 'OUTSMART', 'OUTSTANDING', 'OVATION', 'OVERTAKE', 'OBJECTION', 'OBJECTIVE', 'OBLIGATED', 'OBLONG', 'OBSOLETE', 'OBTUSE', 'OBVIOUS', 'OCEANIC', 'OCTAGON', 'OCTAGONAL', 'OFFENSE', 'OFFENSIVE', 'OFFICIAL', 'OPAQUE', 'OPERATION', 'ORGANIC', 'OUTDATED', 'OVERTLY', 'OBLIGATORY', 'OBLIGING', 'OBSCURE', 'OCCUPIED', 'ODORLESS', 'OLFACTORY', 'OMNIBUS', 'OPPOSITE', 'OUTRAGEOUS', 'OUTSTANDING', 'OBSESSIVE', 'OPINION', 'OPINIONATED', 'ORPHAN', 'ORPHANED', 'ORDINARY', 'OTHERWISE', 'OUTGOING', 'OUTMODED', 'OUTSPOKEN', 'OVERACTIVE', 'OVERAGE', 'OVERJOYED', 'OVERWEIGHT', 'OVERWHELM', 'OBITUARY', 'OFFICER', 'OPERATOR', 'OUTCOME', 'OUTDOORS', 'OUTHOUSE', 'OVERALL', 'OVERCOAT', 'OBSTRUCT', 'OCCLUDE', 'OPPRESS', 'OPPRESSIVE', 'ORCHESTRA', 'ORGANIZE', 'ORIENTATE', 'OUTLAW', 'OUTLINE', 'OVERFLOW', 'OVERHAUL', 'OVERLOAD', 'OVERPOWER', 'OVERSEE', 'OBFUSCATE', 'PHOTOGRAPH', 'PACIFIST', 'PAMPER', 'PARADE', 'PARADISE', 'PARAGON', 'PARAMOUNT', 'PARDON', 'PARTICIPATE', 'PASSION', 'PASSIONATE', 'PATIENT', 'PATIENCE', 'PEACEFUL', 'PERCEPTIVE', 'PERSEVERE', 'PRESERVE', 'PERSUADE', 'PIONEER', 'PLEASING', 'PLEASURE', 'PLENTIFUL', 'POSITIVE', 'POSSIBLE', 'POSSIBILITY', 'POTENTIAL', 'PRAGMATIC', 'PRECIOUS', 'PRODIGY', 'PROGRESS', 'PROLIFIC', 'PROMOTE', 'PROPONENT', 'PROTECT', 'PROTECTIVE', 'PAINFUL', 'PANORAMIC', 'PARANORMAL', 'PARASITE', 'PARASITIC', 'PARCHED', 'PARCHMENT', 'PARTIAL', 'PASTORAL', 'PECULIAR', 'PEDESTRIAN', 'PERPETUAL', 'PERSONAL', 'PETRIFIED', 'PHENOMENAL', 'POIGNANT', 'POINTLESS', 'POLITICAL', 'PRECISE', 'PRECISION', 'PROFUSE', 'PROVERB', 'PROVERBIAL', 'PUMPED', 'PUZZLE', 'POULTRY', 'PARALLEL', 'PERFUME', 'PERIODIC', 'PHYSICAL', 'PIERCING', 'PLAINTIVE', 'PLAUSIBLE', 'POLISHED', 'PREFERABLE', 'PREFERENCE', 'PREMIUM', 'PRESTIGIOUS', 'PRESUME', 'PREVIOUS', 'PRIMARY', 'PROBABLE', 'PROFITABLE', 'PUNGENT', 'PUZZLED', 'PARAMEDIC', 'PARANOID', 'PARTICIPATE', 'PARTICIPANT', 'PATERNAL', 'PATHETIC', 'PATRIOT', 'PATRIOTIC', 'PECKISH', 'PERFORM', 'PERFORMER', 'POWERFUL', 'PRACTICAL', 'PRACTICE', 'PROMINENT', 'PAPERBACK', 'PEPPERONI', 'PERCENT', 'PEBBLE', 'PAINTER', 'PHARMACY', 'PHOTOGRAPH', 'PICNIC', 'PRAYER', 'PRESIDENT', 'PROGRAM', 'PUMPKIN', 'PUPPET', 'PURPOSE', 'PURSUIT', 'PADDLE', 'PATRONIZE', 'PEDDLE', 'PHRASE', 'PUBLISH', 'PEOPLE', 'PHILOSOPHY', 'PHYSICS', 'PLASTIC', 'POLITICS', 'POLLUTION', 'PENSIVE', 'PALPABLE', 'PARADOX', 'PARAGON', 'PLACATE', 'PRECEDENT', 'QUALITY', 'QUICKLY', 'QUARTER', 'QUESTION', 'QUALIFIED', 'QUAINTLY', 'QUOTATION', 'QUARREL', 'QUEENLY', 'QUADRANT', 'QUANTUM', 'QUARTERBACK', 'QUEASINESS', 'QUICKSAND', 'RESTAURANT', 'RABBIT', 'RAINBOW', 'RAPPORT', 'RATIONAL', 'RAVISHING', 'READILY', 'REASONABLE', 'RECEPTIVE', 'RECOGNIZE', 'RECONCILE', 'RECOVERY', 'REFRESH', 'REINFORCE', 'REPLENISH', 'RESILIENT', 'RESOURCEFUL', 'RANDOM', 'RASPBERRY', 'REDUNDANT', 'REFLECTION', 'REFLECTIVE', 'REGULAR', 'RELIEVE', 'RELIEVED', 'RESTFUL', 'RESTRICT', 'RESTRICTION', 'REVERSE', 'REVOLTING', 'REVOLUTION', 'RHETORICAL', 'ROUTINE', 'ROASTED', 'RADIANT', 'RADIATE', 'RAGGED', 'RAMBLING', 'RAVENOUS', 'RECYCLE', 'RECYCLING', 'RADICAL', 'REMARKABLE', 'REPORTER', 'RIDICULOUS', 'ROUNDED', 'RACCOON', 'ROADBLOCK', 'ROADMAP', 'ROADSIDE', 'ROADWAY', 'HIGHWAY', 'ROBBERY', 'RODENT', 'ROGUE', 'ROMANCE', 'RAILROAD', 'REACTIVE', 'RICOCHET', 'RIDICULE', 'RUMINATE', 'RECOMMEND', 'RELEASE', 'RELIABLE', 'SCISSORS', 'SIMILAR', 'SOMETIMES', 'STRUCTURE', 'SUBJECT', 'SUBSTANCE', 'SUCCESSFUL', 'STREET', 'SALVAGE', 'SAFETY', 'SAFEST', 'SCENIC', 'SCENERY', 'SENSATION', 'SENSES', 'SENSATION', 'SENSIBLE', 'SERENITY', 'SHELTER', 'SIMPLIFY', 'SOLUTION', 'SPARKLE', 'SPLENDOR', 'SUCCESS', 'SUCCEED', 'SURVIVE', 'SURVIVOR', 'SUPPORT', 'SUPPORTIVE', 'SUPERB', 'SYMPATHY', 'STRENGTH', 'STRONGEST', 'SAINTLY', 'SALIENT', 'SANITARY', 'SATIRICAL', 'SATISFY', 'SCANDAL', 'SCRAWNY', 'SECURITY', 'SINGULAR', 'SLIPPERY', 'SMUDGED', 'SENIOR', 'STIMULATE', 'STRANDED', 'STRATEGY', 'STRATEGIC', 'STRAIGHT', 'STRANGER', 'SUBMIT', 'SUBMISSIVE', 'SUFFICIENT', 'SURPRISED', 'SURREAL', 'SUSPECT', 'SUSPICIOUS', 'SWEEPING', 'SYMBOLIC', 'SYMBOLISM', 'SYSTEMATIC', 'SADISTIC', 'SARCASTIC', 'SCIENTIFIC', 'SCOUNDREL', 'SEASICK', 'SEDITIOUS', 'SELECTION', 'SELECTIVE', 'SINCERE', 'SINCERITY', 'SINISTER', 'SOLDIER', 'SOOTHING', 'SPECIALIZE', 'SPLENDID', 'SHACKLE', 'SHADOWY', 'SPACIOUS', 'SPAGHETTI', 'SQUABBLE', 'STAGECOACH', 'SCAMPER', 'SCREAM', 'STRUGGLE', 'SURPASS', 'SEASON', 'SEASONAL', 'SOLITUDE', 'TACTFUL', 'TAILORED', 'TALENTED', 'TANGIBLE', 'TANTALIZE', 'TEAMWORK', 'TEMPERATE', 'TENACIOUS', 'TENDERNESS', 'THANKFUL', 'THOROUGH', 'THOUGHTFUL', 'THRILLING', 'TOLERANCE', 'TOLERANT', 'TRIUMPH', 'TROOPER', 'TROPHY', 'TRUTHFUL', 'TYCOON', 'TACTICAL', 'TEENAGER', 'TELEPATHY', 'TERMINAL', 'TEXTURE', 'TINTED', 'TIRESOME', 'TRANQUIL', 'TRANSIENT', 'TRADITION', 'TRANSLUCENT', 'TRANSPARENT', 'TRANSPORT', 'TRAUMATIC', 'TWENTY', 'TEMPORARY', 'THERAPEUTIC', 'THREADBARE', 'TREASURE', 'TREMENDOUS', 'TRIANGULAR', 'TYPICAL', 'TALKATIVE', 'TATTLETALE', 'TECHNICAL', 'TERRIFYING', 'TERRORIST', 'TRANSFIXED', 'TROUBLED', 'TRUSTWORTHY', 'TURBULENT', 'TABLESPOON', 'TECHNOLOGY', 'THICKET', 'TRAFFIC', 'TREATMENT', 'TERMINATE', 'TOLERATE', 'TRANSPLANT', 'TRAVESTY', 'TRIGGER', 'TWINKLE', 'THROTTLE', 'THUNDERBOLT', 'TIGHTEN', 'TOMBSTONE', 'TORNADO', 'TORPEDO', 'TRADEMARK', 'TRACTION', 'TURBULENT', 'TWENTIETH', 'TWITCHED', 'TYPEWRITER', 'ULTIMATE', 'UMBRELLA', 'UMPIRE', 'UNAFRAID', 'UNANSWERED', 'UNARMED', 'UNAVAILABLE', 'UNBALANCED', 'UNKNOWN', 'UNCERTAIN', 'UNDERBRUSH', 'UNDERGROWTH', 'UNDERLINE', 'UNDERTAKER', 'UNEMPLOYED', 'UNEVENLY', 'UNIFORM', 'UNIFORMITY', 'UNIQUELY', 'UNIVERSAL', 'UNIVERSITY', 'UNLIMITED', 'UNNATURAL', 'UNPOLISHED', 'UNSEEING', 'UNSIGHTLY', 'UNSPOKEN', 'UPHEAVAL', 'UPHOLDING', 'UPHOLSTERY', 'UPRISING', 'UPSTANDING', 'UPWARD', 'URGENCY', 'UTENSIL', 'UTILIZE', 'VALIANTLY', 'VALIDATE', 'VACANCY', 'VACCINATE', 'VACILLATE', 'VACUUM', 'VAGABOND', 'VAGRANT', 'VALENTINE', 'VALOROUS', 'VALUED', 'VALUABLE', 'VAMPIRE', 'VANISHED', 'VAPORIZE', 'VARIABLE', 'VARIANT', 'VARIOUS', 'VASCULAR', 'CARDIAC', 'VAULTED', 'VEGETARIAN', 'VEHEMENCE', 'VEHICLE', 'VELOCITY', 'VENDETTA', 'VENGEANCE', 'VENOMOUS', 'VENTILATE', 'VENTILATOR', 'VERBALLY', 'VERTICAL', 'VERTIGO', 'VETERAN', 'VIABLE', 'VIBRANT', 'VIBRATE', 'VIBRATION', 'VICIOUSLY', 'VICTORIAN', 'VICTORIOUS', 'VIDEOGAME', 'VIDEOTAPE', 'VIEWPOINT', 'VIGILANCE', 'VIGOROUS', 'VILIFIED', 'VILLAGER', 'VINDICATE', 'VINEYARD', 'VIOLATION', 'VIRTUOUS', 'VIRULENT', 'VISIONARY', 'VISITATION', 'VISITING', 'VISUALIZE', 'VITAMIN', 'VIVIDLY', 'VOCABULARY', 'VOCATION', 'VOLATILE', 'VOLCANO', 'VOLUME', 'VOLUNTEER', 'VOUCHER', 'VOYAGE', 'VULNERABLE', 'WADDLE', 'WAFFLES', 'WAGON', 'WAISTBAND', 'WAITRESS', 'WALLOWING', 'WANDERER', 'WANDERING', 'WARDROBE', 'WAREHOUSE', 'WARFARE', 'WARMEST', 'WARNING', 'WASHABLE', 'WATCHDOG', 'WATERFALL', 'WATERPROOF', 'WEAKEN', 'WEAKNESS', 'WEALTHY', 'WEAPON', 'WEARINESS', 'WEASEL', 'WEATHERED', 'WEDNESDAY', 'WEIGHTED', 'WELCOMING', 'WEREWOLF', 'WESTERNER', 'WESTWARD', 'WHATEVER', 'WHEEDLE', 'WHEEZING', 'WHEREVER', 'WHIRLWIND', 'WHISKER', 'WHISPERED', 'WHISTLING', 'WHOLESALE', 'WICKEDLY', 'WIDOWER', 'WILDERNESS', 'WILDFLOWER', 'WILLINGLY', 'WILLPOWER', 'WINCING', 'WINNING', 'WISDOM', 'WISHFUL', 'WITHDRAWAL', 'WITHSTAND', 'WITNESSES', 'WOMANHOOD', 'WONDERED', 'WONDERFUL', 'WONDERING', 'WOODLAND', 'WOODPECKER', 'WOODWORK', 'WORKBOOK', 'WORKHORSE', 'WORKSHOP', 'WORLDWIDE', 'WORTHINESS', 'WOUNDED', 'WRAPPER', 'WRESTLE', 'WRINKLE', 'YOUTHFUL', 'YAWNED', 'YOGURT', 'YANKEE', 'YOUNGEST', 'YEARNING', 'YOUNGSTER', 'YEARLING', 'YARDWORK', 'YELLOWING', 'ZEPHYR', 'ZESTFUL', 'ZIGZAG', 'ZIPPERED', 'ZOOKEEPER']

const hWords = ['ADDED', 'ACOUSTIC', 'ABSOLUTELY', 'ABUNDANCE', 'ACCELERATE', 'ACCOLADE', 'ACCOMPLISH', 'ACHIEVER', 'ADAPTABLE', 'ADMIRABLE', 'ADVENTUROUS', 'AFFABLE', 'ADORABLE', 'AGLOW', 'ADHESIVE', 'ALTRUISTIC', 'APPRECIATE', 'AIRBORNE', 'ABANDONED', 'ABDOMINAL', 'AMBIVALENT', 'ANALYTICAL', 'APATHETIC', 'ARTIFICIAL', 'AUSTERE', 'ABBREVIATE', 'ABHORRENT', 'ABNORMAL', 'AGHAST', 'AKIMBO', 'ANXIOUS', 'AARDVARK', 'ABDICATE', 'ABERRATION', 'ABORIGINAL', 'ABSTRUSE', 'ACAPELLA', 'ACQUAINT', 'ACQUIESCE', 'AVOCADO', 'CHIVALRY', 'CONCENTRATE', 'COPACETIC', 'CURIOSITY', 'CAPRICIOUS', 'CATASTROPHE', 'CAVERNOUS', 'CELEBRATORY', 'COHERENT', 'CONCENTRIC', 'CONVOLUTED', 'CUMBERSOME', 'CUSTOMARY', 'CALCULATED', 'CAMOUFLAGED', 'CATACLYSM', 'CATACLYSMIC', 'CHARITABLE', 'CLOISTERED', 'CONSCIOUS', 'CONDESCEND', 'CAULIFLOWER', 'DEBONAIR', 'DECENTRALIZED', 'DECIMATE', 'DECREPIT', 'DISCRIMINATE', 'DEHUMANIZE', 'DIALOGUE', 'DALLIANCE', 'DEFENSTRATE', 'DENIGRATE', 'DIAPHANOUS', 'DICHOTOMY', 'DISPARATE', 'DOOMSDAY', 'DASTARDLY', 'ECSTASY', 'EUPHORIA', 'ENCOMPASSING', 'EGOTISTICAL', 'ETIQUETTE', 'EPHEMERAL', 'ENIGMATIC', 'EMBROIDERY', 'EDAMAME', 'FLIRTATIOUS', 'FASTIDIOUS', 'FURLOUGH', 'FACINOROUS', 'FALLACIOUS', 'FECULENT', 'FLUMMOX', 'FRANGIBLE', 'GREGARIOUS', 'GUMPTION', 'GARRULOUS', 'GLUTTONOUS', 'GESTICULATE', 'GARGANTUAN', 'GOSSAMER', 'GOURMAND', 'HIEROGLYPH', 'HEINOUS', 'HOMOGENEOUS', 'HYPERBOLE', 'HYPOCRITE', 'ILLUSTRIOUS', 'INDOMITABLE', 'INEFFABLE', 'INDIGENOUS', 'ICONOCLAST', 'IMPERVIOUS', 'INEPTITUDE', 'INEXORABLE', 'INSCRUTABLE', 'INSIDIOUS', 'JUXTAPOSED', 'JUGGERNAUT', 'JINGOISM', 'KINESTHETIC', 'KAFKAESQUE', 'KARAOKE', 'LASCIVIOUS', 'LOQUACIOUS', 'LABYRINTH', 'LACONIC', 'LAMPOON', 'LASSITUDE', 'LECHEROUS', 'LILLIPUTIAN', 'LUGUBRIOUS', 'LYCANTHROPY', 'MERITORIOUS', 'MACABRE', 'MAGNANIMOUS', 'MALAISE', 'MALFEASANCE', 'MALLEABLE', 'MISANTHROPE', 'MORATORIUM', 'MOROSE', 'NARCISSIST', 'NEBULOUS', 'NEFARIOUS', 'NIHILISTIC', 'NOTORIOUS', 'NUANCE', 'OSTRACIZE', 'PSYCHEDELIC', 'PUERILE', 'PERNICIOUS', 'PINNACLE', 'PUNCTILIOUS', 'PLATITUDE', 'PLETHORA', 'POMPOUS', 'PREVARICATE', 'PUGNACIOUS', 'PYRRHIC', 'QABALISTIC', 'QUADRANGLE', 'QUINTILLION', 'QUIZZICAL', 'QUARANTINE', 'QUAGMIRE', 'QUANDARY', 'QUIXOTIC', 'REJUVENATE', 'RAPACIOUS', 'REDOLENT', 'REFULGENT', 'REJOINDER', 'REMONSTRATE', 'REPARTEE', 'RHAPSODY', 'SALIENT', 'SERENDIPITY', 'SONOROUS', 'SANGUINE', 'SUPINE', 'SOPORIFIC', 'SYCOPHANT', 'SCINTILLATE', 'SYNTHESIZE', 'SAGACIOUS', 'TONSURE', 'TOPOGRAPHY', 'TRANSFIGURE', 'TREMULOUS', 'TRUCULENT', 'TRUNCHEON', 'TURPITUDE', 'UBIQUITOUS', 'UMBRAGE', 'UNDULATING', 'USURIOUS', 'USURPATION', 'UTOPIAN', 'VACUOUS', 'VANQUISH', 'VERANDA', 'VERBOTEN', 'VERNACULAR', 'VESTIBULE', 'VEXATION', 'VICARIOUS', 'VISCERAL', 'VIVACIOUS', 'VIVIFIED', 'VOCIFEROUS', 'VOLUMINOUS', 'VORACIOUS', 'VULCANIZE', 'WHETSTONE', 'WHITSUNTIDE', 'WHIMSICAL', 'WORMWOOD', 'WROUGHT', 'XYLOPHONE', 'XEROGRAPHY', 'XENOPHOBIC', 'YACHTSMAN', 'ZYGOTE', 'ZOOMORPHIC', 'ZEPPELIN', 'ZIRCONIUM', 'ZODIAC']