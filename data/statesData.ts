import { StateData } from '../types';

export const indianStatesData: StateData[] = [
  // --- NORTH INDIA ---
  {
    name: "Jammu & Kashmir",
    region: "Union Territory",
    description: "The 'Paradise on Earth', famous for its snow-capped mountains, scenic gardens, and Dal Lake.",
    imageUrl: "Dal Lake",
    cities: [
      {
        name: "Srinagar",
        description: "The summer capital, known for its houseboats and Mughal gardens.",
        spots: [
          { name: "Dal Lake", type: "Nature", description: "Iconic lake offering shikara rides and floating markets surrounded by mountains." },
          { name: "Shalimar Bagh", type: "Heritage", description: "A breathtaking Mughal garden built by Emperor Jahangir for his wife." },
          { name: "Shankaracharya Temple", type: "Spiritual", description: "An ancient temple dedicated to Lord Shiva, offering panoramic views of Srinagar." }
        ]
      },
      {
        name: "Gulmarg",
        description: "A premier hill station and skiing destination.",
        spots: [
          { name: "Gulmarg Gondola", type: "Adventure", description: "One of the highest cable cars in the world, offering stunning Himalayan views." },
          { name: "Golf Course", type: "Nature", description: "The world's highest 18-hole green golf course situated in a meadow." }
        ]
      }
    ]
  },
  {
    name: "Himachal Pradesh",
    region: "North",
    description: "A state of breathtaking Himalayan landscapes, hill stations, and spiritual retreats.",
    imageUrl: "Manali",
    cities: [
      {
        name: "Shimla",
        description: "The 'Queen of Hills' and former summer capital of British India.",
        spots: [
          { name: "The Ridge", type: "Heritage", description: "The heart of Shimla, a large open space offering views of the surrounding peaks." },
          { name: "Mall Road", type: "Culture", description: "The main shopping street, vehicle-free and lined with colonial buildings." },
          { name: "Jakhu Temple", type: "Spiritual", description: "A hilltop temple dedicated to Lord Hanuman, inhabited by many monkeys." }
        ]
      },
      {
        name: "Manali",
        description: "A high-altitude resort town known for backpacking and honeymooning.",
        spots: [
          { name: "Solang Valley", type: "Adventure", description: "Famous for adventure sports like paragliding, zorbing, and skiing." },
          { name: "Rohtang Pass", type: "Nature", description: "A high mountain pass connecting Kullu to Lahaul and Spiti, known for snow." }
        ]
      }
    ]
  },
  {
    name: "Punjab",
    region: "North",
    description: "The land of five rivers, known for its vibrant culture, food, and the Golden Temple.",
    imageUrl: "Golden Temple",
    cities: [
      {
        name: "Amritsar",
        description: "The spiritual and cultural center of the Sikh religion.",
        spots: [
          { name: "Golden Temple", type: "Spiritual", description: "The holiest Gurudwara of Sikhism, famous for its gold-plated dome and community kitchen." },
          { name: "Jallianwala Bagh", type: "Heritage", description: "A memorial garden preserving the memory of the 1919 massacre." },
          { name: "Wagah Border", type: "Heritage", description: "The border crossing famous for the daily beating retreat ceremony." }
        ]
      }
    ]
  },
  {
    name: "Uttarakhand",
    region: "North",
    description: "Known as 'Devbhoomi' (Land of Gods), famous for pilgrimage sites and yoga.",
    imageUrl: "Rishikesh",
    cities: [
      {
        name: "Rishikesh",
        description: "The Yoga Capital of the World situated on the banks of the Ganges.",
        spots: [
          { name: "Laxman Jhula", type: "Heritage", description: "An iconic suspension bridge across the river Ganges." },
          { name: "Triveni Ghat", type: "Spiritual", description: "A sacred ghat famous for the evening Ganga Aarti ceremony." }
        ]
      },
      {
        name: "Nainital",
        description: "A popular hill station set in a valley containing a pear-shaped lake.",
        spots: [
          { name: "Naini Lake", type: "Nature", description: "A beautiful lake surrounded by hills, perfect for boating." },
          { name: "Naina Devi Temple", type: "Spiritual", description: "A Shakti Peeth temple located on the northern shore of the lake." }
        ]
      }
    ]
  },
  {
    name: "Uttar Pradesh",
    region: "North",
    description: "The heart of India, home to the Taj Mahal and ancient spiritual cities.",
    imageUrl: "Taj Mahal",
    cities: [
      {
        name: "Agra",
        description: "Home to the iconic Taj Mahal.",
        spots: [
          { name: "Taj Mahal", type: "Heritage", description: "An ivory-white marble mausoleum and UNESCO World Heritage Site." },
          { name: "Agra Fort", type: "Heritage", description: "A massive red sandstone fort that served as the main residence of Mughal emperors." }
        ]
      },
      {
        name: "Varanasi",
        description: "One of the world's oldest living cities, the spiritual capital of India.",
        spots: [
          { name: "Kashi Vishwanath", type: "Spiritual", description: "One of the most famous Hindu temples dedicated to Lord Shiva." },
          { name: "Ganga Ghats", type: "Spiritual", description: "The riverfront steps used for bathing and religious ceremonies." }
        ]
      }
    ]
  },
  {
    name: "Delhi",
    region: "Union Territory",
    description: "The capital city, a blend of ancient history and modern chaos.",
    imageUrl: "India Gate",
    cities: [
      {
        name: "New Delhi",
        description: "The political and administrative capital.",
        spots: [
          { name: "India Gate", type: "Heritage", description: "A war memorial dedicated to the soldiers of the British Indian Army." },
          { name: "Red Fort", type: "Heritage", description: "A historic fort served as the main residence of the Mughal Emperors." },
          { name: "Lotus Temple", type: "Spiritual", description: "A Bahá'í House of Worship notable for its flower-like shape." }
        ]
      }
    ]
  },
  {
    name: "Haryana",
    region: "North",
    description: "A state of historic significance and modern industrial hubs.",
    imageUrl: "Gurgaon",
    cities: [
      {
        name: "Gurugram",
        description: "A leading financial and industrial hub.",
        spots: [
           { name: "Kingdom of Dreams", type: "Modern", description: "India's first live entertainment, theatre and leisure destination." },
           { name: "Sultanpur Bird Sanctuary", type: "Nature", description: "A popular national park for bird watchers and migratory birds." }
        ]
      }
    ]
  },

  // --- WEST INDIA ---
  {
    name: "Rajasthan",
    region: "West",
    description: "The 'Land of Kings', famous for its forts, palaces, deserts, and folk culture.",
    imageUrl: "Jaipur",
    cities: [
      {
        name: "Jaipur",
        description: "The Pink City, capital of Rajasthan.",
        spots: [
          { name: "Amber Fort", type: "Heritage", description: "A majestic fort located high on a hill, known for its artistic style elements." },
          { name: "Hawa Mahal", type: "Heritage", description: "The 'Palace of Winds', a high screen wall built so royal ladies could observe street festivals." }
        ]
      },
      {
        name: "Udaipur",
        description: "The City of Lakes, known for its lavish royal residences.",
        spots: [
          { name: "City Palace", type: "Heritage", description: "A complex of small palaces, museums and gardens overlooking Lake Pichola." },
          { name: "Lake Pichola", type: "Nature", description: "An artificial fresh water lake, created in the year 1362 AD." }
        ]
      }
    ]
  },
  {
    name: "Gujarat",
    region: "West",
    description: "Known for the Rann of Kutch, Asiatic Lions, and vibrant festivals.",
    imageUrl: "Rann of Kutch",
    cities: [
      {
        name: "Ahmedabad",
        description: "India's first UNESCO World Heritage City.",
        spots: [
          { name: "Sabarmati Ashram", type: "Heritage", description: "One of the residences of Mahatma Gandhi, now a museum." },
          { name: "Adalaj Stepwell", type: "Heritage", description: "A unique Hindu building 'water building' and intricate stepwell." }
        ]
      },
      {
        name: "Kutch",
        description: "Famous for the Great Rann of Kutch salt desert.",
        spots: [
          { name: "White Desert", type: "Nature", description: "A massive salt marsh that looks like a white blanket, especially during full moon." }
        ]
      }
    ]
  },
  {
    name: "Maharashtra",
    region: "West",
    description: "Home to Bollywood, cave temples, and the Western Ghats.",
    imageUrl: "Mumbai",
    cities: [
      {
        name: "Mumbai",
        description: "The financial capital and home of Bollywood.",
        spots: [
          { name: "Gateway of India", type: "Heritage", description: "An arch-monument built to commemorate the landing of King George V." },
          { name: "Marine Drive", type: "Nature", description: "A 3.6km boulevard along the coast, known as the Queen's Necklace." }
        ]
      },
      {
        name: "Pune",
        description: "The cultural capital of Maharashtra.",
        spots: [
          { name: "Shaniwar Wada", type: "Heritage", description: "A historical fortification in the city of Pune." },
          { name: "Aga Khan Palace", type: "Heritage", description: "A majestic building where Mahatma Gandhi was imprisoned." }
        ]
      }
    ]
  },
  {
    name: "Goa",
    region: "West",
    description: "Famous for its pristine beaches, Portuguese heritage, and nightlife.",
    imageUrl: "Goa Beach",
    cities: [
      {
        name: "North Goa",
        description: "Known for lively beaches and forts.",
        spots: [
          { name: "Baga Beach", type: "Nature", description: "One of the most popular beaches, famous for water sports and nightlife." },
          { name: "Fort Aguada", type: "Heritage", description: "A well-preserved seventeenth-century Portuguese fort." }
        ]
      },
      {
        name: "South Goa",
        description: "Known for calm, serene beaches.",
        spots: [
          { name: "Palolem Beach", type: "Nature", description: "A white sand beach facing a blue bay, known for its calmness." }
        ]
      }
    ]
  },

  // --- SOUTH INDIA ---
  {
    name: "Tamil Nadu",
    region: "South",
    description: "The land of temples, classical arts, and Carnatic music.",
    imageUrl: "Madurai Temple",
    cities: [
      {
        name: "Chennai",
        description: "The capital city, a gateway to the South.",
        spots: [
          { name: "Marina Beach", type: "Nature", description: "The second longest urban beach in the world." },
          { name: "Kapaleeshwarar Temple", type: "Spiritual", description: "A temple of Shiva located in Mylapore, built in Dravidian style." }
        ]
      },
      {
        name: "Coimbatore",
        description: "The 'Manchester of South India', an industrial hub near the Nilgiris.",
        spots: [
          { name: "Marudamalai Temple", type: "Spiritual", description: "A famous 12th-century hill temple dedicated to Lord Murugan." },
          { name: "Adiyogi Shiva", type: "Spiritual", description: "A 112-foot tall bust of Lord Shiva, recognized by Guinness World Records." },
          { name: "Siruvani Waterfalls", type: "Nature", description: "Located in the Western Ghats, known for having some of the sweetest water." },
          { name: "Gedee Car Museum", type: "Modern", description: "A unique museum displaying a private collection of vintage cars." }
        ]
      },
      {
        name: "Madurai",
        description: "One of the oldest continuously inhabited cities.",
        spots: [
          { name: "Meenakshi Amman Temple", type: "Spiritual", description: "A historic Hindu temple with towering gopurams covered in colorful figures." }
        ]
      },
      {
        name: "Ooty",
        description: "Popular hill station in the Nilgiri Hills.",
        spots: [
          { name: "Botanical Gardens", type: "Nature", description: "A government garden divided into several sections with exotic plants." },
          { name: "Ooty Lake", type: "Nature", description: "An artificial lake constructed in 1824, offering boating facilities." }
        ]
      }
    ]
  },
  {
    name: "Kerala",
    region: "South",
    description: "'God's Own Country', famous for backwaters, ayurveda, and greenery.",
    imageUrl: "Kerala Backwaters",
    cities: [
      {
        name: "Alleppey",
        description: "Known as the 'Venice of the East' for its canal network.",
        spots: [
          { name: "Backwaters", type: "Nature", description: "A network of brackish lagoons and lakes lying parallel to the Arabian Sea coast." },
          { name: "Alappuzha Beach", type: "Nature", description: "A beach known for its old pier which extends into the sea." }
        ]
      },
      {
        name: "Munnar",
        description: "A hill station famous for its tea estates.",
        spots: [
          { name: "Tea Museum", type: "Culture", description: "Showcases the growth of tea plantations in the region." },
          { name: "Eravikulam National Park", type: "Nature", description: "Home to the endangered Nilgiri Tahr." }
        ]
      }
    ]
  },
  {
    name: "Karnataka",
    region: "South",
    description: "A mix of royal heritage, ancient ruins, and modern IT hubs.",
    imageUrl: "Hampi",
    cities: [
      {
        name: "Bengaluru",
        description: "The Silicon Valley of India.",
        spots: [
          { name: "Bangalore Palace", type: "Heritage", description: "A Tudor-style palace modeled after Windsor Castle." },
          { name: "Lalbagh Botanical Garden", type: "Nature", description: "An old botanical garden known for its glass house." }
        ]
      },
      {
        name: "Mysuru",
        description: "The City of Palaces.",
        spots: [
          { name: "Mysore Palace", type: "Heritage", description: "An incredibly opulent palace that is illuminated on Sundays." }
        ]
      },
      {
        name: "Hampi",
        description: "A UNESCO World Heritage site with ruins of the Vijayanagara Empire.",
        spots: [
          { name: "Virupaksha Temple", type: "Spiritual", description: "The main center of pilgrimage at Hampi, dedicated to Shiva." },
          { name: "Stone Chariot", type: "Heritage", description: "An iconic stone structure located inside the Vittala Temple complex." }
        ]
      }
    ]
  },
  {
    name: "Andhra Pradesh",
    region: "South",
    description: "Known for the Tirupati temple and long coastline.",
    imageUrl: "Araku",
    cities: [
      {
        name: "Visakhapatnam",
        description: "A port city known for its beaches.",
        spots: [
          { name: "RK Beach", type: "Nature", description: "Popular beach known for the INS Kursura Submarine Museum." },
          { name: "Kailasagiri", type: "Nature", description: "A hilltop park offering panoramic views of the sea and city." }
        ]
      },
      {
        name: "Tirupati",
        description: "A major pilgrimage city.",
        spots: [
          { name: "Tirumala Venkateswara Temple", type: "Spiritual", description: "The richest and most visited temple in the world." }
        ]
      }
    ]
  },
  {
    name: "Telangana",
    region: "South",
    description: "Known for Hyderabad's rich history and IT industry.",
    imageUrl: "Charminar",
    cities: [
      {
        name: "Hyderabad",
        description: "The City of Pearls.",
        spots: [
          { name: "Charminar", type: "Heritage", description: "The iconic four-minaret mosque located in the heart of the old city." },
          { name: "Golconda Fort", type: "Heritage", description: "A massive citadel known for its acoustic system and diamond mines." },
          { name: "Ramoji Film City", type: "Modern", description: "The world's largest integrated film studio complex." }
        ]
      }
    ]
  },

  // --- EAST INDIA ---
  {
    name: "West Bengal",
    region: "East",
    description: "A cultural melting pot, from the Himalayas to the Bay of Bengal.",
    imageUrl: "Kolkata",
    cities: [
      {
        name: "Kolkata",
        description: "The City of Joy and cultural capital.",
        spots: [
          { name: "Victoria Memorial", type: "Heritage", description: "A large marble building built in memory of Queen Victoria." },
          { name: "Howrah Bridge", type: "Heritage", description: "An iconic cantilever bridge over the Hooghly River." }
        ]
      },
      {
        name: "Darjeeling",
        description: "Queen of the Himalayas, famous for tea.",
        spots: [
          { name: "Tiger Hill", type: "Nature", description: "Famous for the sunrise view over Kanchenjunga and Everest." },
          { name: "Batasia Loop", type: "Nature", description: "A spiral railway created to lower the gradient of ascent." }
        ]
      }
    ]
  },
  {
    name: "Odisha",
    region: "East",
    description: "Known for its tribal cultures and ancient Hindu temples.",
    imageUrl: "Konark",
    cities: [
      {
        name: "Puri",
        description: "A coastal city and spiritual center.",
        spots: [
          { name: "Jagannath Temple", type: "Spiritual", description: "One of the Char Dham pilgrimage sites." },
          { name: "Golden Beach", type: "Nature", description: "A clean, golden sand beach on the Bay of Bengal." }
        ]
      },
      {
        name: "Konark",
        description: "Famous for the Sun Temple.",
        spots: [
          { name: "Sun Temple", type: "Heritage", description: "A 13th-century temple designed as a chariot of the Sun God." }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    region: "East",
    description: "The land where Buddha attained enlightenment.",
    imageUrl: "Bodh Gaya",
    cities: [
      {
        name: "Bodh Gaya",
        description: "The most important Buddhist pilgrimage site.",
        spots: [
          { name: "Mahabodhi Temple", type: "Spiritual", description: "The location where the Buddha is said to have attained enlightenment." }
        ]
      },
      {
        name: "Nalanda",
        description: "Site of an ancient university.",
        spots: [
          { name: "Nalanda Ruins", type: "Heritage", description: "The archaeological remains of a monastic university." }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    region: "East",
    description: "The land of forests and waterfalls.",
    imageUrl: "Ranchi Falls",
    cities: [
      {
        name: "Ranchi",
        description: "The City of Waterfalls.",
        spots: [
          { name: "Hundru Falls", type: "Nature", description: "The 34th highest waterfall in India." },
          { name: "Jonha Falls", type: "Nature", description: "A hanging valley waterfall." }
        ]
      }
    ]
  },

  // --- CENTRAL INDIA ---
  {
    name: "Madhya Pradesh",
    region: "Central",
    description: "The 'Heart of India', famous for wildlife and Khajuraho.",
    imageUrl: "Khajuraho",
    cities: [
      {
        name: "Khajuraho",
        description: "Famous for ancient erotic temples.",
        spots: [
          { name: "Temple Group", type: "Heritage", description: "Famous for their nagara-style architectural symbolism and erotic sculptures." }
        ]
      },
      {
        name: "Bhopal",
        description: "City of Lakes.",
        spots: [
          { name: "Sanchi Stupa", type: "Heritage", description: "One of the oldest stone structures in India, built by Ashoka." }
        ]
      }
    ]
  },
  {
    name: "Chhattisgarh",
    region: "Central",
    description: "Known for its waterfalls, temples, and tribal culture.",
    imageUrl: "Chitrakote",
    cities: [
      {
        name: "Jagdalpur",
        description: "Tourism hub of Bastar.",
        spots: [
          { name: "Chitrakote Falls", type: "Nature", description: "Often called the Niagara Falls of India." }
        ]
      }
    ]
  },

  // --- NORTH EAST INDIA ---
  {
    name: "Sikkim",
    region: "North East",
    description: "A Himalayan state known for Kanchenjunga and monasteries.",
    imageUrl: "Sikkim",
    cities: [
      {
        name: "Gangtok",
        description: "The capital city.",
        spots: [
          { name: "MG Marg", type: "Culture", description: "A vehicle-free promenade and the town center." },
          { name: "Tsomgo Lake", type: "Nature", description: "A glacial lake that changes color with the seasons." }
        ]
      }
    ]
  },
  {
    name: "Assam",
    region: "North East",
    description: "Known for Assam tea and the one-horned rhinoceros.",
    imageUrl: "Kaziranga",
    cities: [
      {
        name: "Guwahati",
        description: "The largest city in the Northeast.",
        spots: [
          { name: "Kamakhya Temple", type: "Spiritual", description: "One of the 51 Shakti Peeths, located on Nilachal Hill." }
        ]
      },
      {
        name: "Kaziranga",
        description: "Home to the Rhino.",
        spots: [
          { name: "National Park", type: "Nature", description: "World heritage site hosting two-thirds of the world's one-horned rhinos." }
        ]
      }
    ]
  },
  {
    name: "Meghalaya",
    region: "North East",
    description: "The 'Abode of Clouds', famous for rainfall and root bridges.",
    imageUrl: "Living Root Bridge",
    cities: [
      {
        name: "Shillong",
        description: "Scotland of the East.",
        spots: [
          { name: "Elephant Falls", type: "Nature", description: "A three-tiered waterfall located near Shillong." }
        ]
      },
      {
        name: "Cherrapunji",
        description: "One of the wettest places on earth.",
        spots: [
          { name: "Living Root Bridges", type: "Nature", description: "Bridges made from the roots of rubber fig trees by the Khasi people." }
        ]
      }
    ]
  },
  {
    name: "Arunachal Pradesh",
    region: "North East",
    description: "The Land of Dawn-Lit Mountains.",
    imageUrl: "Tawang",
    cities: [
      {
        name: "Tawang",
        description: "Famous for its massive monastery.",
        spots: [
          { name: "Tawang Monastery", type: "Spiritual", description: "The largest monastery in India." },
          { name: "Sela Pass", type: "Nature", description: "A high-altitude mountain pass." }
        ]
      }
    ]
  },
  {
    name: "Nagaland",
    region: "North East",
    description: "Land of Festivals and warrior tribes.",
    imageUrl: "Nagaland",
    cities: [
      {
        name: "Kohima",
        description: "Hill capital famous for the Hornbill Festival.",
        spots: [
          { name: "War Cemetery", type: "Heritage", description: "Memorial dedicated to soldiers of the 2nd British Division." }
        ]
      }
    ]
  },
  {
    name: "Manipur",
    region: "North East",
    description: "The Jewel of India.",
    imageUrl: "Loktak",
    cities: [
      {
        name: "Imphal",
        description: "The capital city.",
        spots: [
          { name: "Loktak Lake", type: "Nature", description: "Famous for the phumdis (floating biomass) and Keibul Lamjao National Park." }
        ]
      }
    ]
  },
  {
    name: "Mizoram",
    region: "North East",
    description: "Land of the Highlanders.",
    imageUrl: "Mizoram",
    cities: [
      {
        name: "Aizawl",
        description: "A scenic capital set on a ridge.",
        spots: [
          { name: "Durtlang Hills", type: "Nature", description: "Offers a panoramic view of the city." }
        ]
      }
    ]
  },
  {
    name: "Tripura",
    region: "North East",
    description: "Known for its palaces and temples.",
    imageUrl: "Tripura Palace",
    cities: [
      {
        name: "Agartala",
        description: "The capital city.",
        spots: [
          { name: "Ujjayanta Palace", type: "Heritage", description: "A former royal palace situated in the heart of the city." }
        ]
      }
    ]
  },

  // --- UNION TERRITORIES ---
  {
    name: "Andaman & Nicobar",
    region: "Union Territory",
    description: "A group of islands known for pristine beaches and colonial history.",
    imageUrl: "Andaman",
    cities: [
      {
        name: "Port Blair",
        description: "The entry point to the islands.",
        spots: [
          { name: "Cellular Jail", type: "Heritage", description: "A colonial prison used to exile political prisoners." }
        ]
      },
      {
        name: "Havelock Island",
        description: "Famous for dive sites and beaches.",
        spots: [
          { name: "Radhanagar Beach", type: "Nature", description: "Consistently ranked as one of the best beaches in Asia." }
        ]
      }
    ]
  },
  {
    name: "Puducherry",
    region: "Union Territory",
    description: "A former French colony with a distinct Mediterranean vibe.",
    imageUrl: "Puducherry",
    cities: [
      {
        name: "Puducherry",
        description: "White Town and Promenade.",
        spots: [
          { name: "Auroville", type: "Spiritual", description: "An experimental township dedicated to human unity." },
          { name: "Promenade Beach", type: "Nature", description: "A popular stretch of beachfront in the city." }
        ]
      }
    ]
  },
  {
    name: "Ladakh",
    region: "Union Territory",
    description: "A high-altitude desert with stunning landscapes.",
    imageUrl: "Pangong Lake",
    cities: [
      {
        name: "Leh",
        description: "The largest town in Ladakh.",
        spots: [
          { name: "Pangong Lake", type: "Nature", description: "A high grassland lake that changes colors from blue to green." },
          { name: "Shanti Stupa", type: "Spiritual", description: "A Buddhist white-domed stupa on a hilltop." }
        ]
      }
    ]
  },
  {
    name: "Chandigarh",
    region: "Union Territory",
    description: "A planned city known for its urban design.",
    imageUrl: "Chandigarh",
    cities: [
      {
        name: "Chandigarh",
        description: "The City Beautiful.",
        spots: [
          { name: "Rock Garden", type: "Culture", description: "A sculpture garden made completely of industrial and home waste." },
          { name: "Sukhna Lake", type: "Nature", description: "A reservoir at the foothills of the Himalayas." }
        ]
      }
    ]
  },
  {
    name: "Lakshadweep",
    region: "Union Territory",
    description: "Tropical archipelago known for its coral reefs.",
    imageUrl: "Lakshadweep",
    cities: [
      {
        name: "Agatti",
        description: "Gateway to the islands.",
        spots: [
          { name: "Agatti Beach", type: "Nature", description: "Known for its sparkling coral reefs and turquoise blue lagoons." }
        ]
      }
    ]
  },
  {
    name: "Dadra & Nagar Haveli and Daman & Diu",
    region: "Union Territory",
    description: "Coastal enclaves with Portuguese history.",
    imageUrl: "Diu",
    cities: [
      {
        name: "Diu",
        description: "Island town.",
        spots: [
          { name: "Diu Fort", type: "Heritage", description: "A magnificent Portuguese fort offering sea views." }
        ]
      }
    ]
  }
];