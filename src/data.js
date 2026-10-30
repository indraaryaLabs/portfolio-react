// ---------------------------------------------------------------------------
// Situs ini memakai konten PLACEHOLDER — silakan ganti dengan data Anda sendiri.
// Semua teks di file ini adalah teks generik yang ditulis dari nol.
// ---------------------------------------------------------------------------

const img = (id) => `https://framerusercontent.com/images/${id}`

const IMG = {
  portrait: img('YZntridaSuh4p2a2ao83mCSmaw.png'),
  avatars: [
    img('vaGwxP5Q1rrfPrJWzUgQEKNI3d4.jpeg'),
    img('HXxqdOgeSyp0Pa6ApRv3XDvEZ4I.jpeg'),
    img('g2ytds0rbKSOU0uWIsl2tuVkyAc.jpeg'),
  ],
  aboutAvatar: img('eqdgLN4Xmuz8xCo2QQ4tl2zSs.png'),
  aboutWide: img('ljM8eWcOhVhTvZlGc4tCDt64.jpg'), // mockup ponsel gelap
  aboutSmoke: img('XAATaexdh4vD1T6i9MTnK26usrA.png'), // potret berasap
}

const projects = [
  {
    slug: 'vintage-motors',
    name: 'Vintage Motors',
    year: '2024',
    tags: ['Landing Page', 'Mobile App', 'Redesign'],
    thumb: img('EHSkKBS5f12yNXJu5VZ8VAMv4.png'),
    hero: img('La32y794CcZboMk8PScVdQ2O5Rk.png'),
    gallery: [
      img('dpH59tOrpjh2BbTx4bRKGTL4K3k.jpeg'),
      img('FnQEH6GWRIWArah0ZLeqmHEFg.jpeg'),
      img('iBbyMINjy5PJdzFxli5XyQJsh8.jpeg'),
      img('ZpMJgVUV6z3STjkTpTEcO6gb7o.jpeg'),
    ],
    blurb:
      'Brand refresh and landing experience for a classic-car marketplace. Heritage styling meets a modern, fast-loading layout built for collectors and first-time buyers alike.',
  },
  {
    slug: 'citrus-spray',
    name: 'Citrus Spray',
    year: '2024',
    tags: ['Website Design', 'Branding'],
    thumb: img('BUMWJfM7FAxHoEYXhMjW881wM.png'),
    hero: img('OS1vfDT4H5nB1zNJVbXEOlUPi7Q.png'),
    gallery: [img('PbYUosRgJqZLyjgxHzFEkfpoWG4.png'), img('og6oJurln4A0kIuKHsNduPbJ52w.png')],
    blurb:
      'A bold, playful brand system for a consumer beverage — leaving the usual clean aesthetic behind in favor of energy, color and personality on every surface.',
  },
  {
    slug: 'athlete-pro',
    name: 'Athlete Pro',
    year: '2020',
    tags: ['Desktop App', 'Mobile App'],
    thumb: img('VQY4WQ8E6fx261RhsoqM17bkt9E.png'),
    hero: img('QkbMtMzh5ogYUcujuw1cyGf9358.jpeg'),
    gallery: [
      img('TgCOD1g4P6yw0xSQEZhIozwxFM.png'),
      img('slcspMR1NaIfoLkOL2v9QNOYx1A.jpeg'),
      img('x5zSUyqafLvFikejlgiNcBkzPY.jpeg'),
    ],
    blurb:
      'Product design for a training platform focused on discipline and progress rather than results alone — a bold, empowering experience for people chasing excellence.',
  },
  {
    slug: 'modern-living',
    name: 'Modern Living',
    year: '2024',
    tags: ['Mobile App', 'Branding', 'Website Design'],
    thumb: img('Z1w2O7B5xsN3Y7XkKgBi9kFOgps.jpg'),
    hero: img('Z1w2O7B5xsN3Y7XkKgBi9kFOgps.jpg'),
    gallery: [
      img('ljM8eWcOhVhTvZlGc4tCDt64.jpg'),
      img('qABwqIx0xbg95cqrqAiOHmoqwE.jpg'),
      img('BFvN8RfAXGmenGL1h9PCWyfFH8.jpg'),
      img('7WfroAh6YAklX3g1ndBbqQiPU.jpg'),
    ],
    blurb:
      'Reimagining everyday residential spaces: a design that challenges convention and makes ordinary experiences feel considered, comfortable and unexpectedly fresh.',
  },
  {
    slug: 'sports-gallery',
    name: 'Sports Gallery',
    year: '2022',
    tags: ['Desktop App', 'Branding'],
    thumb: img('LkWwLYjfyz11kSnPpnkilkePu4.jpeg'),
    hero: img('MGFJwNkOZt6fFme13ZqrLSiOC4.jpeg'),
    gallery: [
      img('AyJZJN96bp8cjRQn94AIn7TKz8c.jpeg'),
      img('zgIEf2377LJEXQtTxAi8NrNAD3I.jpeg'),
      img('ABYyAHHzLX7jyzpGgnp6mzoutYU.jpeg'),
    ],
    blurb:
      'Campaign and app concept that flipped the usual sports ad formula — personality first, athleticism second — mixing humor with iconic on-court moments.',
  },
  {
    slug: 'sports-platform',
    name: 'Sports Platform',
    year: '2023',
    tags: ['Desktop App', 'Entertainment', 'Branding'],
    thumb: img('6Vn4QOj5mZBiplXelesm1fEO4U.jpeg'),
    hero: img('lXuUBBR4ashwqHsqbivrB7IFA.jpeg'),
    gallery: [
      img('uKhWUkULWXHPUnHDqG3AiL8bm48.jpeg'),
      img('1DeUMJp8FoRYfnMc8dGh6Y4sU.jpeg'),
      img('Khz5o0Pc0fzvjxuAs97hWflfE5c.jpeg'),
      img('f4slYubBF8Ds6C2XL8OcwApEM.jpeg'),
    ],
    blurb:
      'A streaming brand that shines a light on lesser-known sports, celebrating the quirks and unpredictability that make them worth watching.',
  },
  {
    slug: 'auction-app',
    name: 'Auction App',
    year: '2022',
    tags: ['Mobile App', 'Branding'],
    thumb: img('PaXzM5U2pqB5P6SmZCulCfb832k.png'),
    hero: img('k3UyXD0Em6P3nMKyhl8SR4bWg.png'),
    gallery: [img('KX0VXvtQAAUjeouuE2ZJZWQvVo.png'), img('sSUTYDWeBRkQsCJFh5Cekpbk7w.png')],
    blurb:
      'Identity for a live-auction product blending trust with excitement — the thrill of the bid, designed for collectors and casual buyers in one experience.',
  },
  {
    slug: 'racing-gear',
    name: 'Racing Gear',
    year: '2021',
    tags: ['Landing Page', 'Branding', 'Mobile App'],
    thumb: img('ytCsUJy7gHzpfZekSM0HGbWB9M.jpeg'),
    hero: img('ThUqZEbQpjFlkLhOtab6cmURaLc.jpeg'),
    gallery: [
      img('QonTuaUdP3O3Wi9PIHajbzZoY.jpeg'),
      img('s9EUqIyEtfeA8tr4zqKaME7iNII.jpeg'),
      img('aFpEYbmpxOQNG5nty23wug6I.jpeg'),
    ],
    blurb:
      'Design for a motorsport gear brand: raw racing energy balanced with precision craftsmanship — rugged aesthetics, protective performance in every detail.',
  },
]

const services = [
  {
    name: 'Branding & Marketing',
    desc: 'Branding that builds trust and loyalty through clear visuals and consistent messaging across every touchpoint.',
    items: [
      'Brand Strategy & Messaging',
      'Logo Design',
      'Visual Identity',
      'Brand Guidelines & Frameworks',
      'Marketing Materials',
      'Motion Design',
    ],
  },
  {
    name: 'Website Design',
    desc: 'Beyond aesthetics: logical, scalable design systems tailored precisely for the web.',
    items: ['Landing Pages', 'Corporate Websites', 'Blogs', 'E-commerce', 'Complex Websites'],
  },
  {
    name: 'Web Development',
    desc: 'Fast, maintainable builds — from custom code to visual website platforms.',
    items: ['Framer, Webflow, or WordPress Builds', 'CMS Integration', 'SEO Optimization', 'Site Migrations'],
  },
  {
    name: 'Application Design',
    desc: 'User-focused app design that maximizes usability and encourages retention.',
    items: ['Mobile Apps', 'Desktop Apps', 'Complex Systems', 'Design Systems Optimization'],
  },
]

const testimonials = [
  {
    quote:
      'His keen eye for detail and innovative approach impressed our team, turning challenges into creative solutions that set him apart.',
    name: 'Maya Lian',
    role: 'CEO, Fundwizz',
  },
  {
    quote: 'Every round of feedback came back clearer than we sent it. The system they left us with still holds up today.',
    name: 'Jonas Cray',
    role: 'Product Lead, Corely',
  },
  {
    quote: 'Fast, without ever feeling rushed. They understood the brand quicker than we could explain it.',
    name: 'Rob Maitland',
    role: 'CMO, Brightfold',
  },
].map((t, i) => ({ ...t, photo: IMG.avatars[i] }))

const awards = [
  { name: 'Retrofit', award: 'Site of the Day', source: 'Awwwards' },
  { name: 'Cloudlane', award: 'Honorable Mention', source: 'Awwwards' },
  { name: 'Harborline', award: 'Weekly Pick', source: 'Dribbble' },
  { name: 'Fieldnote', award: 'Weekly Pick', source: 'Dribbble' },
  { name: 'Infogear', award: 'Site of the Day', source: 'Awwwards' },
  { name: 'No-Code Mate', award: 'Innovation Award', source: 'CSSDA' },
  { name: 'Gandy', award: 'Black Pencil', source: 'Awwwards' },
  { name: 'Tower', award: 'Webby Award', source: 'Webby Awards' },
]

const facts = [
  {
    title: 'Completed Projects',
    value: 90,
    desc: 'Across industries and sectors. A portfolio of diverse and impactful completed projects. A proven history of delivering impactful design solutions across a wide spectrum of industries and sectors. From startups to established brands, each project has added depth and adaptability to my skillset.',
  },
  {
    title: 'Years of Experience',
    value: 25,
    desc: 'Years of proven success and dedication in delivering exceptional results. Years of demonstrated success and commitment to creating impactful solutions that drive measurable results.',
  },
  {
    title: "Awards & Honor's",
    value: 40,
    desc: "Recognition for excellence with awards and honors celebrating outstanding achievements, including work with brands like Nike, Spotify, Airbnb, Adobe, and Samsung, among others. Featured in leading publications such as Wired, Fast Company, Design Milk, Creative Boom, and It's Nice That.",
  },
]

const brands = [
  { glyph: '@', text: 'amara' },
  { glyph: '✦', text: 'treva.' },
  { glyph: '', text: 'FOX HUB' },
  { glyph: '⌂', text: '' },
  { glyph: '◔', text: 'amara' },
  { glyph: '', text: 'LOREM IPSUM' },
  { glyph: '', text: 'kinetic' },
  { glyph: '⌀', text: 'massive®' },
]

const oldProjects = [
  ['Child of Vision', '2021', 'Branding'],
  ['Smooth', '2020', 'Branding'],
  ['Cole Tech', '2019', 'Branding'],
  ['Vans Project', '2019', 'Landing Page'],
  ['Sony Case', '2019', 'Landing Page'],
  ['Son and Father', '2018', 'Mobile App'],
  ['Von', '2017', 'Web App'],
]

// Footer contact – placeholder
const contact = {
  office: 'Jl. Your Street, Your City, Indonesia',
  mail: 'hello@yourname.com',
  phone: '+62 812 3456 7890',
  socials: [
    { name: 'Linkedin', href: 'https://linkedin.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
  ],
}

export { IMG, projects, services, testimonials, awards, facts, oldProjects, contact, brands }
