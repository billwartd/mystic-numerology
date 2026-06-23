// Number meanings 1-9 + master numbers
const NUMBER_MEANINGS = {
  1: {
    title: "The Leader",
    lifePath: "You are a natural-born leader with fierce independence and drive. Number 1 represents new beginnings and the pioneer spirit. You have the willpower to manifest your desires and the courage to walk your own path. Your challenge is to avoid being overly dominant or stubborn.",
    destiny: "Your destiny is to lead and innovate. You are meant to forge new paths and inspire others with your vision. Success comes through self-reliance and original thinking.",
    soulUrge: "Deep within, you crave independence and recognition. Your soul yearns to stand on your own, to be first, to be original. You find fulfillment when you're in charge of your own destiny.",
    personality: "Others see you as confident, ambitious, and self-assured. You project authority and initiative. People are drawn to your strength and decisiveness.",
    strengths: "Leadership, independence, originality, determination, courage",
    challenges: "Stubbornness, self-centeredness, aggression, impatience",
    careers: "Entrepreneur, CEO, inventor, freelancer, director",
    love: "In love, you need a partner who respects your independence. You're passionate and loyal but can be possessive. Best matches: 3, 5, 9"
  },
  2: {
    title: "The Peacemaker",
    lifePath: "You are the diplomat and harmonizer. Number 2 represents partnership, balance, and sensitivity. You have an extraordinary ability to understand others and bring people together. Your challenge is to avoid becoming too dependent or letting others take advantage of your kindness.",
    destiny: "Your destiny is to bring harmony and cooperation to the world. You are meant to be the bridge between people, the mediator who creates understanding. Success comes through partnerships and patience.",
    soulUrge: "Your soul craves love, harmony, and connection. You yearn for deep relationships and a peaceful environment. You find fulfillment in being needed and creating beauty through cooperation.",
    personality: "Others see you as gentle, kind, and supportive. You project warmth and receptivity. People feel safe opening up to you because of your empathetic nature.",
    strengths: "Diplomacy, sensitivity, cooperation, patience, intuition",
    challenges: "Over-sensitivity, dependency, indecisiveness, self-doubt",
    careers: "Counselor, diplomat, healer, artist, mediator",
    love: "You are a devoted partner who thrives in harmonious relationships. You need emotional security and mutual respect. Best matches: 2, 4, 8"
  },
  3: {
    title: "The Creative",
    lifePath: "You are the artist and communicator. Number 3 represents creativity, joy, and self-expression. You have a gift for inspiring others through words, art, or ideas. Your challenge is to avoid scattering your energy and to develop discipline alongside your talent.",
    destiny: "Your destiny is to create and communicate. You are meant to bring beauty, joy, and inspiration to the world. Success comes through expressing your unique creative vision and sharing it with others.",
    soulUrge: "Your soul craves creative expression and joyful connection. You yearn to create, to perform, to make others smile. You find fulfillment when your imagination flows freely.",
    personality: "Others see you as charming, witty, and magnetic. You project enthusiasm and optimism. People are drawn to your vibrant energy and sense of humor.",
    strengths: "Creativity, communication, optimism, imagination, charisma",
    challenges: "Scattered energy, superficiality, moodiness, criticism",
    careers: "Writer, actor, designer, musician, speaker, marketer",
    love: "You bring fun and romance to relationships. You need intellectual stimulation and creative freedom. Best matches: 1, 5, 9"
  },
  4: {
    title: "The Builder",
    lifePath: "You are the foundation and the worker. Number 4 represents stability, order, and discipline. You have an exceptional ability to build lasting structures and systems. Your challenge is to avoid rigidity and to remain open to change while maintaining your principles.",
    destiny: "Your destiny is to build and organize. You are meant to create lasting foundations that others can rely upon. Success comes through hard work, determination, and systematic effort.",
    soulUrge: "Your soul craves order, security, and tangible results. You yearn to build something lasting, to create stability in a chaotic world. You find fulfillment through productive achievement.",
    personality: "Others see you as reliable, practical, and grounded. You project stability and trustworthiness. People depend on you because you always follow through.",
    strengths: "Stability, discipline, loyalty, determination, organization",
    challenges: "Rigidity, stubbornness, workaholism, inflexibility",
    careers: "Engineer, architect, accountant, project manager, doctor",
    love: "You are a loyal and dependable partner who shows love through actions. You need stability and shared values. Best matches: 2, 4, 8"
  },
  5: {
    title: "The Adventurer",
    lifePath: "You are the freedom seeker and the explorer. Number 5 represents change, adventure, and versatility. You have a magnetic energy that draws experiences and people to you. Your challenge is to avoid excess and to develop commitment alongside your love of freedom.",
    destiny: "Your destiny is to experience and evolve. You are meant to embrace change and inspire others through your adaptability. Success comes through variety, travel, and embracing the unexpected.",
    soulUrge: "Your soul craves freedom, variety, and sensory experience. You yearn to travel, to taste, to feel everything life has to offer. You find fulfillment through adventure and new experiences.",
    personality: "Others see you as dynamic, exciting, and magnetic. You project confidence and versatility. People are drawn to your adventurous spirit and zest for life.",
    strengths: "Versatility, adaptability, courage, curiosity, charisma",
    challenges: "Restlessness, impulsiveness, inconsistency, excess",
    careers: "Travel writer, entrepreneur, sales, entertainer, coach",
    love: "You need excitement and freedom in relationships. You're passionate but may struggle with routine. Best matches: 1, 3, 7"
  },
  6: {
    title: "The Nurturer",
    lifePath: "You are the caregiver and the healer. Number 6 represents love, responsibility, and harmony. You have a deep need to care for others and create beauty in your environment. Your challenge is to avoid becoming a martyr and to care for yourself as deeply as you care for others.",
    destiny: "Your destiny is to nurture and heal. You are meant to bring love, comfort, and beauty to the world. Success comes through service, compassion, and creating harmonious environments.",
    soulUrge: "Your soul craves love, beauty, and meaningful connection. You yearn to care for others, to make things beautiful, to heal wounded hearts. You find fulfillment in loving and being loved.",
    personality: "Others see you as warm, loving, and responsible. You project nurturing energy and emotional depth. People turn to you for comfort and wise counsel.",
    strengths: "Responsibility, compassion, creativity, balance, wisdom",
    challenges: "Self-sacrifice, worry, perfectionism, control",
    careers: "Teacher, counselor, healthcare, interior design, chef",
    love: "You are the most loving and devoted partner. You create beautiful, harmonious homes and relationships. Best matches: 2, 6, 9"
  },
  7: {
    title: "The Seeker",
    lifePath: "You are the philosopher and the mystic. Number 7 represents wisdom, spirituality, and inner exploration. You have a brilliant analytical mind combined with deep intuition. Your challenge is to avoid isolation and to share your insights with the world.",
    destiny: "Your destiny is to seek truth and share wisdom. You are meant to explore the mysteries of existence and illuminate the path for others. Success comes through study, reflection, and trusting your intuition.",
    soulUrge: "Your soul craves understanding, solitude, and spiritual truth. You yearn to know the deepest mysteries of life, to find meaning beyond the material. You find fulfillment in contemplation and discovery.",
    personality: "Others see you as mysterious, intelligent, and contemplative. You project depth and sophistication. People are intrigued by your quiet intensity and unusual perspectives.",
    strengths: "Wisdom, intuition, analysis, spirituality, refinement",
    challenges: "Isolation, cynicism, secrecy, aloofness",
    careers: "Researcher, scientist, philosopher, spiritual teacher, analyst",
    love: "You need intellectual and spiritual connection in relationships. You are deeply loyal once committed. Best matches: 3, 5, 7"
  },
  8: {
    title: "The Powerhouse",
    lifePath: "You are the executive and the achiever. Number 8 represents power, abundance, and material mastery. You have a natural talent for business and financial matters. Your challenge is to balance material success with spiritual awareness and generosity.",
    destiny: "Your destiny is to achieve and empower. You are meant to master the material world and use your power to benefit others. Success comes through ambition, organization, and financial intelligence.",
    soulUrge: "Your soul craves achievement, recognition, and material mastery. You yearn to build empires, to prove yourself, to leave a lasting legacy. You find fulfillment through accomplishment and influence.",
    personality: "Others see you as powerful, confident, and successful. You project authority and competence. People respect your drive and business acumen.",
    strengths: "Ambition, organization, leadership, financial acumen, resilience",
    challenges: "Workaholism, materialism, domination, impatience",
    careers: "Business executive, finance, real estate, law, management",
    love: "You are a devoted provider who shows love through material care. You need a partner who shares your ambitions. Best matches: 2, 4, 8"
  },
  9: {
    title: "The Humanitarian",
    lifePath: "You are the philanthropist and the old soul. Number 9 represents compassion, wisdom, and universal love. You have experienced much and carry deep understanding of the human condition. Your challenge is to let go of the past and embrace your role as a compassionate leader.",
    destiny: "Your destiny is to serve and inspire humanity. You are meant to use your wisdom and compassion to make the world better. Success comes through selfless service and sharing your creative gifts broadly.",
    soulUrge: "Your soul craves meaning, compassion, and universal connection. You yearn to heal the world, to create beauty, to love unconditionally. You find fulfillment through service and artistic expression.",
    personality: "Others see you as wise, compassionate, and charismatic. You project warmth and broad-mindedness. People are inspired by your vision and generosity of spirit.",
    strengths: "Compassion, generosity, wisdom, creativity, charisma",
    challenges: "Self-sacrifice, detachment, mood swings, aloofness",
    careers: "Humanitarian work, healing arts, teaching, art, philanthropy",
    love: "You love deeply and unconditionally but may struggle with letting go. You need a partner who shares your ideals. Best matches: 3, 6, 9"
  },
  11: {
    title: "The Illuminator (Master Number)",
    lifePath: "You carry the vibration of the Master Intuitive. Number 11 represents spiritual insight, illumination, and inspiration. You are a channel for higher wisdom with the power to uplift humanity. Your challenge is to overcome self-doubt and trust your extraordinary gifts.",
    destiny: "Your destiny is to inspire and illuminate. You are meant to be a spiritual beacon, sharing your visions and insights to guide others toward higher understanding. Success comes through trusting your intuition and embracing your sensitivity.",
    soulUrge: "Your soul craves spiritual truth, inspiration, and service. You yearn to channel divine wisdom, to heal, to illuminate. You find fulfillment when living in alignment with your highest purpose.",
    personality: "Others see you as mystical, inspiring, and deeply intuitive. You project an otherworldly presence that both fascinates and comforts. People are drawn to your visionary nature.",
    strengths: "Intuition, inspiration, vision, healing, spiritual leadership",
    challenges: "Nervous energy, self-doubt, idealism, oversensitivity",
    careers: "Spiritual teacher, artist, healer, inventor, counselor",
    love: "You seek soul-deep connection. You need a partner who understands your spiritual nature. Best matches: 2, 6, 9"
  },
  22: {
    title: "The Master Builder (Master Number)",
    lifePath: "You carry the vibration of the Master Builder. Number 22 represents the power to turn the most ambitious dreams into reality. You have the vision of 11 combined with the practicality of 4, making you capable of extraordinary achievements. Your challenge is to believe in your immense potential and not limit yourself.",
    destiny: "Your destiny is to build something that serves humanity. You are meant to create lasting institutions, systems, or works that benefit many. Success comes through combining vision with disciplined action.",
    soulUrge: "Your soul craves to create lasting impact on a grand scale. You yearn to build, to organize, to leave a legacy that transforms the world. You find fulfillment when your work serves the greater good.",
    personality: "Others see you as powerful, visionary, and incredibly capable. You project an aura of immense competence and purpose. People are inspired by your ability to make the impossible real.",
    strengths: "Vision, discipline, leadership, practical genius, resilience",
    challenges: "Self-limitation, pressure, control, overambition",
    careers: "Architect, leader, visionary entrepreneur, diplomat, engineer",
    love: "You need a partner who shares your grand vision. Your relationships must support your mission. Best matches: 4, 8, 22"
  },
  33: {
    title: "The Master Teacher (Master Number)",
    lifePath: "You carry the highest vibration in numerology — the Master Teacher. Number 33 represents selfless love, spiritual upliftment, and healing on a mass scale. You have the compassion of 6 amplified to its highest expression. Your challenge is to serve without burning out and to maintain boundaries while giving so much.",
    destiny: "Your destiny is to teach through love and example. You are meant to be a living demonstration of compassion and wisdom, healing others simply through your presence. Success comes through surrendering to your calling of service.",
    soulUrge: "Your soul craves to heal and uplift all of humanity. You yearn to love unconditionally, to teach through compassion, to ease suffering. You find fulfillment when you are a channel for divine love.",
    personality: "Others see you as extraordinarily loving, wise, and inspiring. You project a rare combination of nurturing and spiritual depth. People feel healed simply by being in your presence.",
    strengths: "Compassion, healing, wisdom, selflessness, spiritual mastery",
    challenges: "Martyrdom, overwhelm, self-neglect, idealism",
    careers: "Spiritual leader, healer, teacher, humanitarian, counselor",
    love: "Your love is unconditional and healing. You need a partner who honors your calling. Best matches: 6, 9, 33"
  }
};

const LUCKY_DATA = {
  1: { color:"Red, Gold", gem:"Ruby", day:"Sunday", planet:"Sun" },
  2: { color:"White, Silver", gem:"Moonstone", day:"Monday", planet:"Moon" },
  3: { color:"Yellow, Purple", gem:"Amethyst", day:"Thursday", planet:"Jupiter" },
  4: { color:"Green, Brown", gem:"Emerald", day:"Saturday", planet:"Uranus" },
  5: { color:"Turquoise, Light Green", gem:"Aquamarine", day:"Wednesday", planet:"Mercury" },
  6: { color:"Blue, Pink", gem:"Sapphire", day:"Friday", planet:"Venus" },
  7: { color:"Violet, White", gem:"Lapis Lazuli", day:"Monday", planet:"Neptune" },
  8: { color:"Black, Dark Grey", gem:"Diamond", day:"Saturday", planet:"Saturn" },
  9: { color:"Red, Maroon", gem:"Garnet", day:"Tuesday", planet:"Mars" },
  11: { color:"Silver, Violet", gem:"Opal", day:"Monday", planet:"Pluto" },
  22: { color:"Gold, White", gem:"Alexandrite", day:"Saturday", planet:"Pluto" },
  33: { color:"Rose Gold, White", gem:"Moldavite", day:"Friday", planet:"Venus" }
};

// Question answer templates per number
const QUESTION_TEMPLATES = {
  love: [
    "The energy of {number} — \"{title}\" — suggests that {advice}. Your path in love is one of {theme}. The vibrations indicate {forecast}.",
    "With the essence of {number} ({title}), your love life is guided by {guidance}. {specific}. Trust the process — the numbers do not lie.",
  ],
  career: [
    "Number {number}, the energy of \"{title},\" speaks to your professional path. {advice}. Your natural {strength} makes you well-suited for {career}.",
    "The vibrations of {number} ({title}) in your career sector suggest {guidance}. {specific}. Now is a time for {action}.",
  ],
  general: [
    "The sacred number {number} — \"{title}\" — reveals that {advice}. In your current situation, {guidance}. {specific}. The energy of {title} reminds you that {reminder}.",
    "Numerology shows {number} ({title}) as your guiding force. {advice}. {guidance}. {specific}. Trust in the wisdom of numbers.",
  ]
};
