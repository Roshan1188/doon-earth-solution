export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  keyword: string;
  publishedAt: string;
  excerpt: string;
  sections: { heading: string; body: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'termite-treatment-cost-in-dehradun',
    title: 'Termite Treatment Cost in Dehradun',
    metaDescription:
      'What decides termite treatment cost in Dehradun — property size, infestation stage, and treatment type. Get a free inspection and written quote.',
    keyword: 'termite treatment cost Dehradun',
    publishedAt: '2026-07-18',
    excerpt:
      'Termite treatment pricing varies a lot based on your property and the extent of infestation. Here is what actually drives the cost, so you can budget realistically before calling anyone.',
    sections: [
      {
        heading: 'Why there is no single "termite treatment price"',
        body: [
          'Every homeowner asks for a flat number, but honest pest control companies will tell you the same thing: cost depends on what is actually happening at your property. A 2 BHK apartment with an early-stage infestation costs very differently to treat than a 3,000 sq ft independent house with active termite mud tubes running through the foundation.',
          'The three biggest cost drivers are the built-up area being treated, whether this is a new construction (pre-construction soil treatment) or an existing structure (post-construction/curative treatment), and how far the infestation has already spread.',
        ],
      },
      {
        heading: 'Pre-construction vs. existing-building treatment',
        body: [
          'Pre-construction soil treatment (done during the foundation stage, following IS 6313 guidelines) is usually the more affordable option per square foot because it is preventive — the soil and foundation trenches are treated before walls and flooring go up, with no drilling involved.',
          'Existing buildings need curative treatment: drill-fill-seal along the plinth and walls, or anti-termite piping systems for taller structures. This is more labour-intensive since it works around finished flooring, furniture, and walls, which is why it typically costs more than pre-construction work of the same area.',
        ],
      },
      {
        heading: 'Other factors that affect your quote',
        body: [
          'Severity of infestation: a spot treatment for one room is very different from whole-property fumigation and piping.',
          'Chemical and warranty terms: treatments backed by a longer written warranty (we offer up to 10 years) usually involve higher-grade termiticide and more thorough application.',
          'Accessibility: basements, terraces, and tightly packed furniture can add labour time.',
          'Follow-up visits: a proper treatment plan includes at least one inspection after the initial job to confirm the colony is gone — factor this into what you are actually paying for, not just the first visit.',
        ],
      },
      {
        heading: 'How to get an accurate number for your property',
        body: [
          'The only reliable way to know your actual cost is a free, on-site inspection — a technician measures the treated area, checks for active infestation signs, and gives you a written quote with the warranty terms spelled out before any work starts. Avoid any company that quotes a price over the phone without seeing the property; it usually means change orders later.',
          'Doon Earth Solution offers a free inspection across Dehradun and nearby Uttarakhand areas, with a clear written quote and up to a 10-year warranty. Book a free inspection today and get a number you can actually plan around.',
        ],
      },
    ],
  },
];
