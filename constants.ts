import { City, Question, DimensionKey } from './types';

export const DIMENSION_LABELS: Record<DimensionKey, string> = {
  lifePace: '生活节奏',
  modernTraditional: '现代/传统',
  vitalityTranquility: '活力/宁静',
  urbanNature: '城市/自然',
  costTolerance: '成本承受',
  climatePreference: '气候偏好',
};

export const DIMENSION_DESCRIPTIONS: Record<DimensionKey, { low: string; high: string }> = {
  lifePace: { low: '慢节奏/悠闲', high: '快节奏/高效' },
  modernTraditional: { low: '传统/历史', high: '现代/科技' },
  vitalityTranquility: { low: '宁静/独处', high: '活力/热闹' },
  urbanNature: { low: '自然/山野', high: '城市/便利' },
  costTolerance: { low: '节俭/低成本', high: '品质/高消费' },
  climatePreference: { low: '凉爽/干燥', high: '温暖/湿润' },
};

export const QUESTIONS: Question[] = [
  // --- 生活节奏 (1-5) ---
  {
    id: 1,
    text: "你更喜欢哪种生活节奏？",
    dimension: "lifePace",
    options: [
      { text: "快节奏，追求高效与忙碌", value: 100 },
      { text: "慢节奏，享受悠闲时光", value: 0 },
      { text: "介于两者之间，能适应不同节奏", value: 50 },
      { text: "根据心情而定，有时想快有时想慢", value: 50 }
    ]
  },
  {
    id: 2,
    text: "你理想的工作状态是？",
    dimension: "lifePace",
    options: [
      { text: "高强度工作，充满挑战", value: 100 },
      { text: "朝九晚五，稳定规律", value: 60 },
      { text: "弹性工作，自由安排", value: 40 },
      { text: "轻松工作，享受生活", value: 20 }
    ]
  },
  {
    id: 3,
    text: "周末你更倾向于？",
    dimension: "lifePace",
    options: [
      { text: "参加各种活动，充实每一刻", value: 90 },
      { text: "适度安排，有活动也有休息", value: 60 },
      { text: "在家休息，偶尔出门", value: 30 },
      { text: "完全放空，什么都不做", value: 10 }
    ]
  },
  {
    id: 4,
    text: "你对通勤时间的容忍度是？",
    dimension: "lifePace",
    options: [
      { text: "30分钟以内，时间就是金钱", value: 100 },
      { text: "1小时左右可以接受", value: 70 },
      { text: "1-2小时也没关系", value: 40 },
      { text: "不在乎通勤时间，可以利用这段时间", value: 20 }
    ]
  },
  {
    id: 5,
    text: "你的日常作息是？",
    dimension: "lifePace",
    options: [
      { text: "早睡早起，充分利用白天", value: 80 },
      { text: "规律作息，按时睡觉起床", value: 60 },
      { text: "晚睡晚起，享受夜生活", value: 70 },
      { text: "作息不规律，随心所欲", value: 50 }
    ]
  },
  // --- 现代/传统 (6-10) ---
  {
    id: 6,
    text: "你对城市现代化程度的偏好是？",
    dimension: "modernTraditional",
    options: [
      { text: "偏向现代化都市，充满科技与活力", value: 100 },
      { text: "偏向传统古城，保留历史韵味", value: 0 },
      { text: "两者平衡，既有现代便利也有文化底蕴", value: 50 },
      { text: "不太在意城市的现代化程度", value: 50 }
    ]
  },
  {
    id: 7,
    text: "你更喜欢哪种建筑风格？",
    dimension: "modernTraditional",
    options: [
      { text: "现代摩天大楼，玻璃幕墙", value: 100 },
      { text: "古典建筑，雕梁画栋", value: 0 },
      { text: "新旧结合，现代与传统交融", value: 50 },
      { text: "各有特色，都能欣赏", value: 50 }
    ]
  },
  {
    id: 8,
    text: "你对历史文化的兴趣程度？",
    dimension: "modernTraditional",
    options: [
      { text: "非常感兴趣，喜欢探索历史", value: 0 },
      { text: "有一定兴趣，偶尔了解", value: 30 },
      { text: "兴趣一般，不排斥也不追求", value: 60 },
      { text: "更关注现代发展，对历史不太感兴趣", value: 100 }
    ]
  },
  {
    id: 9,
    text: "你更喜欢哪种购物方式？",
    dimension: "modernTraditional",
    options: [
      { text: "线上购物，方便快捷", value: 100 },
      { text: "大型商场，一站式购物", value: 80 },
      { text: "传统市集，体验烟火气", value: 20 },
      { text: "小店铺，慢慢挑选", value: 30 }
    ]
  },
  {
    id: 10,
    text: "你对科技产品的态度是？",
    dimension: "modernTraditional",
    options: [
      { text: "科技爱好者，追求最新产品", value: 100 },
      { text: "实用主义，够用就好", value: 60 },
      { text: "不太关注，能用就行", value: 30 },
      { text: "更喜欢传统方式，不依赖科技", value: 0 }
    ]
  },
  // --- 活力/宁静 (11-15) ---
  {
    id: 11,
    text: "你更享受哪种氛围？",
    dimension: "vitalityTranquility",
    options: [
      { text: "充满活力与热闹的环境", value: 100 },
      { text: "宁静安逸的氛围", value: 0 },
      { text: "两者都可以接受，视情况而定", value: 50 },
      { text: "需要根据具体活动选择不同氛围", value: 50 }
    ]
  },
  {
    id: 12,
    text: "你对夜生活的态度是？",
    dimension: "vitalityTranquility",
    options: [
      { text: "热爱夜生活，经常夜间活动", value: 100 },
      { text: "偶尔参与，不排斥夜间活动", value: 70 },
      { text: "更喜欢早睡，很少夜间活动", value: 30 },
      { text: "完全不喜欢夜生活，追求宁静", value: 0 }
    ]
  },
  {
    id: 13,
    text: "你更喜欢哪种社交方式？",
    dimension: "vitalityTranquility",
    options: [
      { text: "大型聚会，认识更多人", value: 100 },
      { text: "小型聚会，三五好友", value: 60 },
      { text: "一对一交流，深度沟通", value: 30 },
      { text: "独处时光，享受安静", value: 0 }
    ]
  },
  {
    id: 14,
    text: "你对城市噪音的容忍度？",
    dimension: "vitalityTranquility",
    options: [
      { text: "完全不介意，甚至喜欢热闹", value: 100 },
      { text: "可以接受，习惯就好", value: 70 },
      { text: "比较敏感，希望环境安静", value: 30 },
      { text: "非常敏感，需要绝对安静", value: 0 }
    ]
  },
  {
    id: 15,
    text: "你理想的居住环境是？",
    dimension: "vitalityTranquility",
    options: [
      { text: "市中心，热闹繁华", value: 100 },
      { text: "商业区附近，便利但不太吵", value: 70 },
      { text: "居民区，安静舒适", value: 30 },
      { text: "郊区或乡村，远离喧嚣", value: 0 }
    ]
  },
  // --- 城市/自然 (16-20) ---
  {
    id: 16,
    text: "你对自然环境的重视程度如何？",
    dimension: "urbanNature",
    options: [
      { text: "非常重视，喜欢接近大自然", value: 0 },
      { text: "比较重视，但也能接受城市生活", value: 30 },
      { text: "一般，两者都可以", value: 60 },
      { text: "不太重视，更关注城市便利性", value: 100 }
    ]
  },
  {
    id: 17,
    text: "你多久需要接触一次自然？",
    dimension: "urbanNature",
    options: [
      { text: "每天都需要，喜欢户外活动", value: 0 },
      { text: "每周至少一次", value: 30 },
      { text: "每月几次就够了", value: 60 },
      { text: "很少需要，偶尔即可", value: 100 }
    ]
  },
  {
    id: 18,
    text: "你更喜欢哪种休闲方式？",
    dimension: "urbanNature",
    options: [
      { text: "登山、徒步等户外运动", value: 0 },
      { text: "公园散步，亲近自然", value: 30 },
      { text: "逛街购物，城市休闲", value: 80 },
      { text: "室内活动，如看电影、健身房", value: 100 }
    ]
  },
  {
    id: 19,
    text: "你对城市绿化的要求是？",
    dimension: "urbanNature",
    options: [
      { text: "非常重要，需要大量绿地", value: 0 },
      { text: "比较重要，希望有公园绿地", value: 30 },
      { text: "一般，有基本绿化就行", value: 70 },
      { text: "不太在意，更关注城市功能", value: 100 }
    ]
  },
  {
    id: 20,
    text: "你理想的度假方式是？",
    dimension: "urbanNature",
    options: [
      { text: "山野田园，回归自然", value: 0 },
      { text: "海滨度假，享受阳光沙滩", value: 20 },
      { text: "城市旅游，探索都市风情", value: 80 },
      { text: "主题乐园，娱乐设施丰富", value: 100 }
    ]
  },
  // --- 成本承受 (21-25) ---
  {
    id: 21,
    text: "你对生活成本的态度是？",
    dimension: "costTolerance",
    options: [
      { text: "不介意高生活成本，追求品质生活", value: 100 },
      { text: "希望生活成本适中，收支平衡", value: 60 },
      { text: "偏向低生活成本，节省开支", value: 30 },
      { text: "根据收入水平灵活调整", value: 50 }
    ]
  },
  {
    id: 22,
    text: "你对房价的承受能力是？",
    dimension: "costTolerance",
    options: [
      { text: "可以接受高房价，追求优质地段", value: 100 },
      { text: "希望房价适中，性价比高", value: 60 },
      { text: "偏向低房价，减轻经济压力", value: 30 },
      { text: "租房为主，不考虑买房", value: 50 }
    ]
  },
  {
    id: 23,
    text: "你的消费观念是？",
    dimension: "costTolerance",
    options: [
      { text: "追求品质，愿意为好东西付费", value: 100 },
      { text: "理性消费，注重性价比", value: 60 },
      { text: "节俭为主，能省则省", value: 20 },
      { text: "根据需求灵活调整", value: 50 }
    ]
  },
  {
    id: 24,
    text: "你对餐饮消费的态度是？",
    dimension: "costTolerance",
    options: [
      { text: "经常外出就餐，享受美食", value: 90 },
      { text: "偶尔外出，平时自己做饭", value: 50 },
      { text: "主要自己做饭，很少外出", value: 20 },
      { text: "根据情况灵活安排", value: 60 }
    ]
  },
  {
    id: 25,
    text: "你对娱乐消费的预算是？",
    dimension: "costTolerance",
    options: [
      { text: "充足预算，经常参与各种活动", value: 100 },
      { text: "适度预算，选择性参与", value: 60 },
      { text: "有限预算，偏向免费活动", value: 30 },
      { text: "很少娱乐消费", value: 10 }
    ]
  },
  // --- 气候偏好 (26-30) ---
  {
    id: 26,
    text: "你偏好的气候类型是？",
    dimension: "climatePreference",
    options: [
      { text: "温暖湿润的气候", value: 100 },
      { text: "干燥凉爽的气候", value: 40 },
      { text: "四季分明的气候", value: 60 },
      { text: "温和舒适的气候", value: 80 }
    ]
  },
  {
    id: 27,
    text: "你对温度的偏好是？",
    dimension: "climatePreference",
    options: [
      { text: "喜欢温暖，不喜欢寒冷", value: 100 },
      { text: "喜欢凉爽，不喜欢炎热", value: 40 },
      { text: "适应能力强，冷热都可以", value: 60 },
      { text: "喜欢温和，不冷不热最好", value: 80 }
    ]
  },
  {
    id: 28,
    text: "你对降雨的态度是？",
    dimension: "climatePreference",
    options: [
      { text: "喜欢雨天，觉得浪漫", value: 80 },
      { text: "不介意雨天，习惯就好", value: 70 },
      { text: "不太喜欢雨天，影响出行", value: 50 },
      { text: "讨厌雨天，喜欢晴朗", value: 30 }
    ]
  },
  {
    id: 29,
    text: "你对空气质量的要求是？",
    dimension: "climatePreference",
    options: [
      { text: "非常重视，必须空气清新", value: 90 },
      { text: "比较重视，希望空气良好", value: 70 },
      { text: "一般，可以接受一定污染", value: 40 },
      { text: "不太在意，习惯就好", value: 20 }
    ]
  },
  {
    id: 30,
    text: "你对四季变化的态度是？",
    dimension: "climatePreference",
    options: [
      { text: "喜欢四季分明，感受变化", value: 60 },
      { text: "喜欢如春，温度稳定", value: 90 },
      { text: "喜欢冬暖夏凉，温差适中", value: 80 },
      { text: "不太在意，都能适应", value: 50 }
    ]
  }
];

export const CITIES: City[] = [
  {
    id: "chengdu",
    name: "成都",
    tags: ["巴适生活", "休闲惬意", "美食文化"],
    personaTypes: ["躺平型", "社交型", "文艺型"],
    description: "巴适的成都，慢节奏中享受生活。火锅串串、茶馆麻将，这里的生活充满闲适与惬意。适合追求生活平衡、热爱美食的你。",
    detailedDescription: "你和成都一样，懂得享受生活又不失烟火气。成都的慢节奏、美食文化、休闲氛围，都与你追求生活品质、注重内心平和的性格相契合。作为躺平型人格，你享受在茶馆里的悠闲时光；作为社交型人格，你喜欢和朋友在火锅店里畅聊人生；作为文艺型人格，你沉醉于宽窄巷子和锦里的古韵。这座\"巴适之城\"的闲适与包容，能让你在慢生活中找到真正的幸福。",
    scores: { lifePace: 40, modernTraditional: 50, vitalityTranquility: 45, urbanNature: 55, costTolerance: 60, climatePreference: 65 }
  },
  {
    id: "xian",
    name: "西安",
    tags: ["古都韵味", "历史文化", "西北风情"],
    personaTypes: ["文化型", "传统型", "探索型"],
    description: "十三朝古都西安，历史文化底蕴深厚。兵马俑、古城墙，这里的每一砖每一瓦都在诉说历史。适合热爱历史文化、追求厚重感的你。",
    detailedDescription: "你和西安一样，厚重深沉又充满历史底蕴。西安的古都气质、文化传承、西北豪爽，都与你热爱历史、追求文化深度的性格相契合。作为文化型人格，你沉醉于兵马俑和大雁塔的历史厚重；作为传统型人格，你享受在回民街品尝传统美食的乐趣；作为探索型人格，你喜欢在古城墙上感受千年历史。这座\"古都\"的厚重与豪迈，能让你在历史长河中找到文化归属。",
    scores: { lifePace: 60, modernTraditional: 35, vitalityTranquility: 60, urbanNature: 65, costTolerance: 50, climatePreference: 55 }
  },
  {
    id: "lijiang",
    name: "丽江",
    tags: ["古城风韵", "慢生活", "世外桃源"],
    personaTypes: ["文艺型", "躺平型", "自然型"],
    description: "古城丽江，雪山脚下、古镇悠悠。这里的生活节奏缓慢，充满诗意与浪漫。适合追求慢生活、热爱自然与文化的你。",
    detailedDescription: "你和丽江一样，诗意浪漫又充满自由气息。丽江的古城韵味、雪山美景、慢生活节奏，都与你追求精神自由、热爱自然的性格相契合。作为文艺型人格，你沉醉于古城的石板路和纳西文化；作为躺平型人格，你享受在客栈晒太阳和发呆的悠闲时光；作为自然型人格，你喜欢在玉龙雪山和泸沽湖感受大自然的壮美。这座\"世外桃源\"的诗意与自由，能让你在慢时光中找到真正的自己。",
    scores: { lifePace: 20, modernTraditional: 25, vitalityTranquility: 30, urbanNature: 20, costTolerance: 50, climatePreference: 85 }
  },
  {
    id: "kunming",
    name: "昆明",
    tags: ["春城", "四季如春", "民族风情"],
    personaTypes: ["自然型", "躺平型", "探索型"],
    description: "春城昆明，四季如春、气候宜人。这里节奏舒缓、民族风情浓郁，生活充满阳光与温暖。适合追求舒适气候、热爱自然的你。",
    detailedDescription: "你和昆明一样，温暖舒适又充满自然气息。昆明的四季如春、民族风情、慢节奏生活，都与你追求舒适、热爱自然的性格相契合。作为自然型人格，你沉醉于滇池和石林的自然美景；作为躺平型人格，你享受在翠湖公园晒太阳的悠闲时光；作为探索型人格，你喜欢探索云南的多元民族文化。这座\"春城\"的温暖与包容，能让你在阳光中找到生活的惬意。",
    scores: { lifePace: 45, modernTraditional: 55, vitalityTranquility: 45, urbanNature: 40, costTolerance: 55, climatePreference: 95 }
  },
  {
    id: "chongqing",
    name: "重庆",
    tags: ["山城魅力", "火辣热情", "立体城市"],
    personaTypes: ["社交型", "奋斗型", "冒险型"],
    description: "8D魔幻山城重庆，火锅江湖、夜景璀璨。这里的人热情直爽，生活充满烟火气。适合性格爽朗、热爱美食的你。",
    detailedDescription: "你和重庆一样，热情直爽又充满江湖气息。重庆的山城特色、火辣文化、夜景魅力，都与你性格豪爽、热爱生活的特质相契合。作为社交型人格，你享受在火锅店里和朋友推杯换盏；作为奋斗型人格，你在解放碑和江北嘴书写奋斗故事；作为冒险型人格，你喜欢在轻轨穿楼和长江索道中感受刺激。这座\"山城\"的热情与魔幻，能让你在立体空间中找到生活的激情。",
    scores: { lifePace: 70, modernTraditional: 55, vitalityTranquility: 75, urbanNature: 60, costTolerance: 55, climatePreference: 70 }
  },
  {
    id: "nanjing",
    name: "南京",
    tags: ["六朝古都", "文艺气息", "梧桐树下"],
    personaTypes: ["文艺型", "文化型", "精致型"],
    description: "六朝古都南京，历史与现代交融。梧桐树下、秦淮河畔，这里充满文艺气息。适合热爱历史、追求文艺生活的你。",
    detailedDescription: "你和南京一样，文艺优雅又不失历史底蕴。南京的古都气质、梧桐浪漫、文艺氛围，都与你追求精神世界、热爱文化艺术的性格相契合。作为文艺型人格，你沉醉于先锋书店和1912街区的文艺范儿；作为文化型人格，你享受在中山陵和夫子庙感受历史厚重；作为精致型人格，你喜欢在梧桐树下的咖啡馆度过午后时光。这座\"博爱之都\"的文艺与温柔，能让你在历史与现代中找到心灵栖息地。",
    scores: { lifePace: 65, modernTraditional: 55, vitalityTranquility: 60, urbanNature: 55, costTolerance: 70, climatePreference: 70 }
  },
  {
    id: "wuhan",
    name: "武汉",
    tags: ["九省通衢", "江湖气息", "热干面之城"],
    personaTypes: ["社交型", "奋斗型", "豪爽型"],
    description: "九省通衢的武汉，江湖气息浓厚。热干面、樱花季，这里的生活充满烟火气与浪漫。适合性格豪爽、热爱生活的你。",
    detailedDescription: "你和武汉一样，豪爽大气又充满江湖义气。武汉的码头文化、江湖气息、热情豪迈，都与你性格直爽、重情重义的特质相契合。作为社交型人格，你享受在户部巷和朋友吃热干面的快乐；作为奋斗型人格，你在光谷和武汉天地书写奋斗篇章；作为豪爽型人格，你喜欢在长江大桥上感受江城的大气磅礴。这座\"江城\"的豪迈与浪漫，能让你在烟火气中找到真实的自己。",
    scores: { lifePace: 70, modernTraditional: 60, vitalityTranquility: 70, urbanNature: 60, costTolerance: 60, climatePreference: 65 }
  },
  {
    id: "suzhou",
    name: "苏州",
    tags: ["江南水乡", "园林之城", "温婉雅致"],
    personaTypes: ["文艺型", "传统型", "精致型"],
    description: "江南水乡苏州，园林遍布、小桥流水。这里的生活温婉雅致，节奏适中。适合追求诗意生活、热爱传统文化的你。",
    detailedDescription: "你和苏州一样，温婉雅致又充满江南韵味。苏州的园林文化、水乡风情、精致生活，都与你追求诗意、注重内涵的性格相契合。作为文艺型人格，你沉醉于拙政园和平江路的古典美；作为传统型人格，你享受在昆曲和评弹中感受传统文化；作为精致型人格，你喜欢在金鸡湖畔和诚品书店度过精致时光。这座\"园林之城\"的温婉与雅致，能让你在小桥流水中找到心灵的宁静。",
    scores: { lifePace: 55, modernTraditional: 40, vitalityTranquility: 50, urbanNature: 45, costTolerance: 75, climatePreference: 75 }
  },
  {
    id: "dalian",
    name: "大连",
    tags: ["北方明珠", "海滨城市", "浪漫之都"],
    personaTypes: ["自然型", "文艺型", "躺平型"],
    description: "北方明珠大连，海滨风光旖旎。这里四季分明、空气清新，生活节奏适中。适合热爱自然、追求舒适生活的你。",
    detailedDescription: "你和大连一样，浪漫优雅又充满海洋气息。大连的海滨风光、浪漫氛围、宜居环境，都与你追求舒适、热爱自然的性格相契合。作为自然型人格，你沉醉于星海广场和老虎滩的海景；作为文艺型人格，你享受在俄罗斯风情街感受异域风情；作为躺平型人格，你喜欢在滨海路上悠闲散步。这座\"浪漫之都\"的优雅与宁静，能让你在海风中找到心灵的归宿。",
    scores: { lifePace: 60, modernTraditional: 70, vitalityTranquility: 55, urbanNature: 50, costTolerance: 60, climatePreference: 75 }
  },
  {
    id: "qingdao",
    name: "青岛",
    tags: ["海滨风情", "啤酒之城", "红瓦绿树"],
    personaTypes: ["自然型", "社交型", "休闲型"],
    description: "红瓦绿树、碧海蓝天的青岛，德式建筑与海滨风情交融。啤酒、海鲜，生活惬意舒适。适合热爱海洋、追求舒适生活的你。",
    detailedDescription: "你和青岛一样，舒适惬意又充满海洋魅力。青岛的海滨风光、啤酒文化、德式风情，都与你追求舒适、热爱自然的性格相契合。作为自然型人格，你沉醉于栈桥和八大关的海景；作为社交型人格，你享受在啤酒节和朋友畅饮的快乐；作为休闲型人格，你喜欢在海边散步和品尝海鲜。这座\"啤酒之城\"的惬意与浪漫，能让你在海风中找到生活的美好。",
    scores: { lifePace: 60, modernTraditional: 65, vitalityTranquility: 55, urbanNature: 45, costTolerance: 65, climatePreference: 80 }
  },
  {
    id: "xiamen",
    name: "厦门",
    tags: ["海滨城市", "文艺小资", "宜居舒适"],
    personaTypes: ["文艺型", "躺平型", "自然型"],
    description: "海上花园厦门，气候宜人、风景优美。鼓浪屿、环岛路，这里的生活充满文艺与浪漫。适合追求慢生活、热爱海洋的你。",
    detailedDescription: "你和厦门一样，文艺浪漫又充满海洋气息。厦门的海滨风光、文艺氛围、慢生活节奏，都与你追求诗意、热爱自然的性格相契合。作为文艺型人格，你沉醉于鼓浪屿的小资情调和曾厝垵的文艺范儿；作为躺平型人格，你享受在海边发呆和骑行环岛路的悠闲；作为自然型人格，你喜欢在海滩上看日出日落。这座\"海上花园\"的浪漫与宁静，能让你在海风中找到内心的平和。",
    scores: { lifePace: 50, modernTraditional: 70, vitalityTranquility: 50, urbanNature: 40, costTolerance: 70, climatePreference: 90 }
  },
  {
    id: "beijing",
    name: "北京",
    tags: ["首都", "文化中心", "机遇之城"],
    personaTypes: ["奋斗型", "文化型", "野心型"],
    description: "作为首都，北京兼具现代化与深厚的历史底蕴。这里节奏快、机会多，四季分明的气候让你感受时光流转。适合追求事业发展、热爱艺术文化的你。",
    detailedDescription: "你和北京一样，充满雄心壮志又不失文化底蕴。北京的快节奏、历史厚重感、机遇无限，都与你追求卓越、渴望成就的性格相契合。作为奋斗型人格，你享受在竞争中成长的快感；作为文化型人格，你沉醉于故宫、胡同里的历史韵味；作为野心型人格，你在这座首都找到施展才华的舞台。这座\"帝都\"的大气与包容，能让你在追梦路上找到归属感。",
    scores: { lifePace: 90, modernTraditional: 70, vitalityTranquility: 85, urbanNature: 80, costTolerance: 85, climatePreference: 60 }
  },
  {
    id: "guangzhou",
    name: "广州",
    tags: ["务实包容", "美食天堂", "温暖湿润"],
    personaTypes: ["社交型", "奋斗型", "躺平型"],
    description: "务实包容的广州，美食遍地、生活气息浓厚。温暖的气候、适中的节奏，让生活充满烟火气。适合热爱美食、追求生活品质的你。",
    detailedDescription: "你和广州一样，务实低调又充满生活智慧。广州的务实精神、美食文化、包容氛围，都与你注重实际、追求事业与生活平衡的性格相契合。作为社交型人格，你享受早茶文化和朋友聚会；作为奋斗型人格，你在务实中追求进步；作为躺平型人格，你喜欢珠江边的悠闲散步。这座\"美食之都\"的务实与包容，能让你在奋斗中找到生活的真谛。",
    scores: { lifePace: 75, modernTraditional: 65, vitalityTranquility: 70, urbanNature: 60, costTolerance: 75, climatePreference: 85 }
  },
  {
    id: "hangzhou",
    name: "杭州",
    tags: ["诗意江南", "科技创新", "宜居城市"],
    personaTypes: ["文艺型", "精致型", "自然型"],
    description: "上有天堂，下有苏杭。杭州兼具江南诗意与现代科技，西湖美景、互联网氛围，让生活充满诗意与活力。适合追求品质生活、热爱自然的你。",
    detailedDescription: "你和杭州一样，诗意浪漫又不失现代气息。杭州的江南韵味、科技创新、宜居环境，都与你追求美好、注重生活品质的性格相契合。作为文艺型人格，你沉醉于西湖的烟雨和灵隐寺的禅意；作为精致型人格，你享受在湖滨银泰和西溪湿地的精致生活；作为自然型人格，你喜欢在西湖边骑行和爬山。这座\"人间天堂\"的诗意与活力，能让你在现代与传统中找到完美平衡。",
    scores: { lifePace: 70, modernTraditional: 75, vitalityTranquility: 65, urbanNature: 50, costTolerance: 80, climatePreference: 75 }
  },
  {
    id: "shanghai",
    name: "上海",
    tags: ["国际化", "时尚前沿", "精致生活"],
    personaTypes: ["精致型", "奋斗型", "时尚型"],
    description: "魔都上海，中国最国际化的城市。现代与传统交融，快节奏中不失精致。适合追求品质生活、喜欢多元文化的你。",
    detailedDescription: "你和上海一样，追求精致又充满活力。上海的国际化视野、时尚氛围、精致生活方式，都与你注重品质、追求卓越的性格相契合。作为精致型人格，你享受外滩的夜景和法租界的咖啡馆；作为奋斗型人格，你在陆家嘴的摩天大楼中书写传奇；作为时尚型人格，你在南京路和淮海路找到潮流前沿。这座\"魔都\"的精致与包容，能让你在快节奏中活出自己的风采。",
    scores: { lifePace: 95, modernTraditional: 85, vitalityTranquility: 90, urbanNature: 85, costTolerance: 90, climatePreference: 70 }
  },
  {
    id: "shenzhen",
    name: "深圳",
    tags: ["年轻活力", "创新创业", "海滨城市"],
    personaTypes: ["奋斗型", "创新型", "野心型"],
    description: "年轻的深圳充满活力与机遇，创新氛围浓厚。海滨城市的舒适气候，快节奏的工作环境，适合有梦想、敢拼搏的你。",
    detailedDescription: "你和深圳一样，年轻有为又敢于突破。深圳的创新精神、拼搏氛围、包容开放，都与你勇于挑战、追求梦想的性格相契合。作为奋斗型人格，你在科技园和CBD中挥洒汗水；作为创新型人格，你在这座\"创新之城\"找到志同道合的伙伴；作为野心型人格，你在这片热土上书写属于自己的传奇。这座\"年轻之城\"的活力与机遇，能让你在追梦路上永不止步。",
    scores: { lifePace: 95, modernTraditional: 95, vitalityTranquility: 95, urbanNature: 70, costTolerance: 90, climatePreference: 80 }
  }
];
