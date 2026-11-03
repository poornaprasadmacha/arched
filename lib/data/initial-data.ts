export interface CompetitionItem {
  id: string;
  slug: string;
  title: string;
  brief: string;
  description: string;
  status: "active" | "upcoming" | "past";
  earlyBirdDeadline: string;
  standardDeadline: string;
  lateDeadline: string;
  submissionDeadline: string;
  juryRevealDate: string;
  resultDeclarationDate: string;
  earlyFeeInr: number;
  standardFeeInr: number;
  lateFeeInr: number;
  firstPrize: string;
  secondPrize: string;
  thirdPrize: string;
  honorableMentions: string;
  bannerImageUrl: string;
  submissionSpecs: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  durationMinutes: number;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  level: string;
  durationHours: number;
  category: string;
  description: string;
  thumbnailUrl: string;
  certificateAvailable: boolean;
  modules: {
    title: string;
    durationMinutes: number;
    lessons: string[];
  }[];
}

export interface GuestLectureItem {
  id: string;
  speakerName: string;
  speakerTitle: string;
  speakerBio: string;
  speakerAvatar: string;
  topic: string;
  scheduledAt: string;
  durationMinutes: number;
  isUpcoming: boolean;
  recordingUrl?: string;
}

export interface CommunityPostItem {
  id: string;
  authorName: string;
  authorInstitution: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
  comments: {
    author: string;
    text: string;
    timeAgo: string;
  }[];
}

// COMPETITIONS DATA
export const INITIAL_COMPETITIONS: CompetitionItem[] = [
  {
    id: "comp-1",
    slug: "public-toilets-for-the-public",
    title: "Public Toilets for the Public: Dignity, Hygiene & Urban Fabric",
    brief: "Reimagining public sanitation as an architectural, cultural, and environmental cornerstone of sustainable Indian cities.",
    description: "Answering nature's call is unavoidable. Yet public sanitation remains one of the greatest spatial dilemmas in urban development. This competition invites architectural students and emerging designers to rethink urban sanitation facilities through universal accessibility, sustainable water recycling, natural ventilation, and human dignity.",
    status: "active",
    earlyBirdDeadline: "2026-11-20",
    standardDeadline: "2026-12-10",
    lateDeadline: "2026-12-25",
    submissionDeadline: "2027-01-15",
    juryRevealDate: "2026-12-01",
    resultDeclarationDate: "2027-02-10",
    earlyFeeInr: 1200,
    standardFeeInr: 1800,
    lateFeeInr: 2500,
    firstPrize: "₹1,00,000",
    secondPrize: "₹50,000",
    thirdPrize: "₹30,000",
    honorableMentions: "10 Entries × ₹2,000",
    bannerImageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    submissionSpecs: "3 × A2 Landscape Sheets (Plans 1:50, Sections & Elevations 1:50, Construction Axonometric) + Consolidated High-Resolution PDF.",
  },
  {
    id: "comp-2",
    slug: "vernacular-monsoon-shelter",
    title: "Vernacular Monsoon Shelter: Climate Resilient Enclosures",
    brief: "Designing community typhoon and monsoon retreat structures using locally harvested renewable resources.",
    description: "How can contextual vernacular architecture address severe climate patterns? Participants must design an adaptable storm shelter utilizing bamboo, rammed earth, and passive water catchment systems for rural flood plains.",
    status: "upcoming",
    earlyBirdDeadline: "2027-01-05",
    standardDeadline: "2027-01-25",
    lateDeadline: "2027-02-15",
    submissionDeadline: "2027-03-01",
    juryRevealDate: "2027-01-15",
    resultDeclarationDate: "2027-03-25",
    earlyFeeInr: 1000,
    standardFeeInr: 1500,
    lateFeeInr: 2200,
    firstPrize: "₹80,000",
    secondPrize: "₹40,000",
    thirdPrize: "₹20,000",
    honorableMentions: "5 Entries × ₹2,000",
    bannerImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    submissionSpecs: "2 × A2 Landscape Sheets (Structural details + Bioclimatic diagram) + Consolidated PDF.",
  },
  {
    id: "comp-3",
    slug: "sacred-geometry-interventions",
    title: "Sacred Geometry: Spatial Thresholds & Light Studies",
    brief: "Historical analysis translated into contemporary meditative pavilions.",
    description: "Honoring the legacies of Louis Kahn and Raj Rewal, this past national competition explored tectonic expression through brick vaulted canopies and interstitial courtyards.",
    status: "past",
    earlyBirdDeadline: "2025-08-01",
    standardDeadline: "2025-08-25",
    lateDeadline: "2025-09-15",
    submissionDeadline: "2025-10-01",
    juryRevealDate: "2025-09-01",
    resultDeclarationDate: "2025-10-20",
    earlyFeeInr: 1000,
    standardFeeInr: 1500,
    lateFeeInr: 2000,
    firstPrize: "₹1,00,000",
    secondPrize: "₹50,000",
    thirdPrize: "₹30,000",
    honorableMentions: "10 Entries × ₹2,000",
    bannerImageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    submissionSpecs: "3 × A2 Landscape Sheets + 1 Presentation Booklet.",
  },
];

// QUIZZES DATA
export const INITIAL_QUIZZES: QuizItem[] = [
  {
    id: "quiz-1",
    slug: "architectural-history-theorists",
    title: "Modern Architectural Theory & Masters",
    category: "History & Theory",
    difficulty: "Intermediate",
    durationMinutes: 15,
    passingScore: 70,
    questions: [
      {
        id: "q1-1",
        text: "Which architectural master formulated the famous Five Points of a New Architecture (Les 5 points d'une architecture nouvelle) in 1927?",
        options: ["Frank Lloyd Wright", "Le Corbusier", "Mies van der Rohe", "Walter Gropius"],
        correctIndex: 1,
        explanation: "Le Corbusier published the 5 Points in 'Vers une architecture': Pilotis, Free Plan, Free Facade, Horizontal Windows, and Roof Garden.",
      },
      {
        id: "q1-2",
        text: "The Indian Institute of Management (IIM) Bangalore campus, celebrated for its interlocking courtyards and pergola walkways, was designed by which Pritzker laureate?",
        options: ["Charles Correa", "Raj Rewal", "B.V. Doshi", "Achyut Kanvinde"],
        correctIndex: 2,
        explanation: "Balkrishna Doshi received the 2018 Pritzker Architecture Prize and designed IIM Bangalore, emphasizing gardens as extensions of classrooms.",
      },
      {
        id: "q1-3",
        text: "Which structural innovator pioneered the concept of 'Tensegrity' and the Geodesic Dome?",
        options: ["Buckminster Fuller", "Norman Foster", "Pier Luigi Nervi", "Frei Otto"],
        correctIndex: 0,
        explanation: "R. Buckminster Fuller patented the geodesic dome and developed tensegrity structural principles.",
      },
      {
        id: "q1-4",
        text: "Nari Gandhi, known for organic and highly contextual Indian architecture, was a direct apprentice of which international architect at Taliesin?",
        options: ["Louis Kahn", "Frank Lloyd Wright", "Alvar Aalto", "Eero Saarinen"],
        correctIndex: 1,
        explanation: "Nari Gandhi studied at Taliesin under Frank Lloyd Wright before returning to India to create idiosyncratic organic brick and stone masterpieces.",
      },
      {
        id: "q1-5",
        text: "The Asian Games Village in New Delhi (1982), renowned for its clustered pedestrian streets and high-density low-rise typology, was designed by:",
        options: ["Raj Rewal", "Joseph Allen Stein", "Uttam Jain", "Satish Gujral"],
        correctIndex: 0,
        explanation: "Raj Rewal designed the Asian Games Village housing by reinterpreting traditional Rajasthani urban geometries and mohallas.",
      },
    ],
  },
  {
    id: "quiz-2",
    slug: "sustainable-climatology-passive-design",
    title: "Bioclimatic Architecture & Solar Passive Strategies",
    category: "Sustainable Design",
    difficulty: "Advanced",
    durationMinutes: 20,
    passingScore: 75,
    questions: [
      {
        id: "q2-1",
        text: "In the Northern Hemisphere, which building facade orientation receives the highest cumulative solar radiation during winter months?",
        options: ["North", "South", "East", "West"],
        correctIndex: 1,
        explanation: "In the Northern Hemisphere, the solar path tilts south during winter, making south-facing glazing optimal for passive solar heat gain.",
      },
      {
        id: "q2-2",
        text: "A Trombe wall operates primarily on which thermodynamic principles?",
        options: [
          "Evaporative cooling and radiative chilling",
          "High thermal mass storage, conduction, and natural convection air looping",
          "Phase-change latent heat dissipation only",
          "Sub-surface geothermal conductivity"
        ],
        correctIndex: 1,
        explanation: "A Trombe wall absorbs solar radiation through heavy masonry (thermal mass) and circulates heated air via convective vents into living spaces.",
      },
      {
        id: "q2-3",
        text: "What does the 'Solar Heat Gain Coefficient' (SHGC) measure in fenestration systems?",
        options: [
          "The percentage of visible light passing through glass",
          "The fraction of incident solar radiation admitted through a window, directly transmitted or absorbed and released inward",
          "The U-value heat loss coefficient during nighttime",
          "The acoustic transmission loss rating of double glazed units"
        ],
        correctIndex: 1,
        explanation: "SHGC is a number between 0 and 1 indicating how much solar heat enters through a glazing assembly.",
      },
    ],
  },
];

// COURSES DATA
export const INITIAL_COURSES: CourseItem[] = [
  {
    id: "course-1",
    slug: "parametric-computational-form-finding",
    title: "Computational Morphologies & Algorithmic Tectonics",
    instructor: "Ar. Vikramaditya Sharma, AA DRL Alum",
    level: "Advanced",
    durationHours: 32,
    category: "Digital Technology",
    description: "Explore algorithmic form generation, parametric structural optimization, and digital fabrication workflows using Grasshopper, visual scripting, and FEA simulation.",
    thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    certificateAvailable: true,
    modules: [
      {
        title: "Module 1: Vector Mathematics & Surface Curvature",
        durationMinutes: 180,
        lessons: ["Vectors & Coordinate Systems", "NURBS Geometry & Curvature Analysis", "Domain Remapping"],
      },
      {
        title: "Module 2: Structural Optimization & Panelization",
        durationMinutes: 240,
        lessons: ["Planar Quad Discretization", "Topology Optimization", "CNC Milling & Laser Prep"],
      },
    ],
  },
  {
    id: "course-2",
    slug: "bioclimatic-passive-cooling-systems",
    title: "Tropical Passive Cooling & Microclimatic Masterplanning",
    instructor: "Dr. Ananya Ray, PhD Tropical Climatology",
    level: "Intermediate",
    durationHours: 24,
    category: "Sustainable Architecture",
    description: "Master psychrometric charts, wind scoop design, thermal buoyancy shafts, and water courtyards for zero-carbon cooling in hot-dry and composite Indian climates.",
    thumbnailUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
    certificateAvailable: true,
    modules: [
      {
        title: "Module 1: Solar Path Analysis & Shading Masques",
        durationMinutes: 200,
        lessons: ["Stereographic Sun Charts", "Calculating Horizontal & Vertical Shadow Angles", "Louvre Optimization"],
      },
      {
        title: "Module 2: Natural Ventilation Dynamics",
        durationMinutes: 220,
        lessons: ["Stack Effect & Solar Chimneys", "Wind Catchers (Badgirs)", "Courtyard Microclimatic Modulation"],
      },
    ],
  },
  {
    id: "course-3",
    slug: "bim-working-drawings-statutory-compliance",
    title: "Professional Working Drawings & Indian NBC Compliance",
    instructor: "Ar. K. Ramanathan, Senior Principal Architect",
    level: "Foundational to Practice",
    durationHours: 28,
    category: "Professional Practice",
    description: "From concept sketch to municipal approval and tender dossiers: municipal bye-laws, NBC fire egress, FSI/FAR calculations, structural coordination, and MEP overlays.",
    thumbnailUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop",
    certificateAvailable: true,
    modules: [
      {
        title: "Module 1: National Building Code & Municipal Sanction",
        durationMinutes: 190,
        lessons: ["NBC Fire Egress Widths", "Setback & Ground Coverage Norms", "Universal Accessibility Compliance"],
      },
      {
        title: "Module 2: Tender Drawings & Schedule of Quantities",
        durationMinutes: 210,
        lessons: ["Toilet Detail Packages 1:20", "Staircase Tectonic Details", "Joinery Schedules & Specifications"],
      },
    ],
  },
];

// GUEST LECTURES
export const INITIAL_GUEST_LECTURES: GuestLectureItem[] = [
  {
    id: "lecture-1",
    speakerName: "Ar. Rahul Mehrotra",
    speakerTitle: "Professor of Urban Design and Planning, Harvard GSD; Founder RMA Architects",
    speakerBio: "Distinguished architect, urbanist and educator leading groundbreaking discourse on ephemeral urbanism and contextual Indian architecture.",
    speakerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    topic: "Architecture in Transition: Ephemeral Cities & Permanence",
    scheduledAt: "Coming Soon",
    durationMinutes: 60,
    isUpcoming: true,
  },
  {
    id: "lecture-2",
    speakerName: "Ar. Sheila Sri Prakash",
    speakerTitle: "Founder, Shilpa Architects; Chief Member, World Economic Forum Global Council",
    speakerBio: "First woman in India to have established her own independent architectural practice, pioneer in Spatiology and reciprocating heritage.",
    speakerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    topic: "Spatiology: The Socio-Psychological Impact of Built Enclosures",
    scheduledAt: "Coming Soon",
    durationMinutes: 75,
    isUpcoming: true,
  },
  {
    id: "lecture-3",
    speakerName: "Ar. Brinda Somaya",
    speakerTitle: "Principal Architect, SNK Consultants; Master of Conservation & Institutional Architecture",
    speakerBio: "Renowned conservation architect and architectural activist with four decades of seminal work across historic restorations and educational campuses.",
    speakerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    topic: "Bridging Eras: Tectonic Honesty in Historic Architecture",
    scheduledAt: "Coming Soon",
    durationMinutes: 90,
    isUpcoming: false,
    recordingUrl: "https://arched.in/lectures/brinda-somaya-historic-tectonics",
  },
];

// COMMUNITY POSTS
export const INITIAL_COMMUNITY_POSTS: CommunityPostItem[] = [
  {
    id: "post-1",
    authorName: "Aarav Chenna",
    authorInstitution: "School of Planning and Architecture (SPA), New Delhi",
    title: "Bamboo Reciprocating Canopy for a Coastal Mangrove Research Station",
    description: "Investigating hyperbolic paraboloid timber gridshells that flex with cyclonic wind loads. Modeled with physical balsa models followed by Grasshopper form-finding.",
    category: "Academic Thesis",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    likesCount: 42,
    commentsCount: 6,
    createdAt: "2026-11-01T14:20:00Z",
    comments: [
      {
        author: "Meera Patel (CEPT)",
        text: "The joint detail between the primary bamboo culms and concrete pile footing is exceptionally resolved! Did you check water capillary suction?",
        timeAgo: "1 day ago",
      },
      {
        author: "Prof. Narayanan",
        text: "Commendable structural honesty. Review the shear force redistribution during extreme storm surges.",
        timeAgo: "18 hours ago",
      },
    ],
  },
  {
    id: "post-2",
    authorName: "Divya Krishnan",
    authorInstitution: "Faculty of Architecture, CEPT University, Ahmedabad",
    title: "Light & Mass: Concrete Brutalism meets South Indian Mandapa Porosities",
    description: "A cultural repository in Madurai utilizing precast fluted board-marked concrete louvres to modulate harsh summer illuminance without artificial daylighting.",
    category: "Competition Entry",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    likesCount: 58,
    commentsCount: 9,
    createdAt: "2026-10-30T10:15:00Z",
    comments: [
      {
        author: "Kiran Joseph (IIT Kharagpur)",
        text: "Reminiscent of Le Corbusier's Mill Owners' Association Building in Ahmedabad, but with a distinctly Dravidian rhythm. Brilliant work.",
        timeAgo: "2 days ago",
      },
    ],
  },
];

// PARTICIPANT REGISTRATIONS (Zero dummy data — filled in real-time as users register)
export interface ParticipantRegistrationItem {
  id: string;
  fullName: string;
  dob: string;
  college: string;
  address: string;
  country: string;
  lat: number;
  lng: number;
  phone: string;
  email: string;
  competitionId: string;
  registrationCode: string;
  createdAt: string;
}

export const INITIAL_PARTICIPANTS: ParticipantRegistrationItem[] = [];
