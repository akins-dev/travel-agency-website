// src/data/tours.ts

// 1. Define all your available images in a global pool for the gallery generator
const globalImagePool = [
  "/images/athens.png",
  "/images/1.jpg",
  "/images/Corinthos.png",
  "/images/Mycenae.png",
  "/images/Olympia.png",
  "/images/Delphi.png",
  "/images/WineOliveCheese.png",
  "/images/Sounion.png",
  "/images/AthensSounio.png",
];

// 2. Helper function to generate a unique-looking gallery for each tour
// It places the specific hero image first, then fills the rest from the pool
function generateGallery(heroImage: string, seed: number) {
  // Filter out the hero image so it doesn't appear twice
  const otherImages = globalImagePool.filter((img) => img !== heroImage);

  // Rotate the array based on the seed so every tour has a different order
  const rotated = [
    ...otherImages.slice(seed % otherImages.length),
    ...otherImages.slice(0, seed % otherImages.length),
  ];

  // Return Hero Image + 5 others
  return [heroImage, ...rotated.slice(0, 5)];
}

export const toursData = [
  {
    id: "1",
    title: "Athens: Top Sights",
    heroTitle: "Athens:<br/>Top Sights", // Custom break for visual impact
    image: "/images/athens.png",
    duration: "5-6 hours",
    accessible: true,
    price: 270,
    priceLabel: "For up to 4 people",
    description: "Explore Athens' ancient landmarks and vibrant city center.",
    longDescription: [
      "On a private excursion with your family, your friends, or even the company that you will create especially for this purpose, you will see the most important sights of the Greek capital. On your way you will visit the Acropolis to admire the wonders of the classical era and the Parthenon, the Odeon of Herodes Atticus and the new Acropolis Museum.",
      "Afterwards, you will see the Panathenaic Stadium where the 1st modern Olympic Games took place and will continue to Syntagma Square and a tour throughout the classical buildings-jewels of the city. Next stop is the Archaeological Museum, and the continuation will be in the historic center of Athens which is full of life, with many options for food and drink.",
    ],
    gallery: generateGallery("/images/athens.png", 1),
  },
  {
    id: "2",
    title: "Meteora & Thermopylae",
    heroTitle: "Meteora &<br/>Thermopylae",
    image: "/images/1.jpg",
    duration: "4-5 hours",
    accessible: false,
    price: 350,
    priceLabel: "For up to 4 people",
    description:
      "Discover breathtaking monasteries and ancient rock formations.",
    longDescription: [
      "Visit the UNESCO World Heritage site of Meteora, where monasteries sit atop massive rock pillars. A truly spiritual and geological marvel.",
      "On the way, we stop at Thermopylae, the site of the legendary battle of the 300 Spartans.",
    ],
    gallery: generateGallery("/images/1.jpg", 2),
  },
  {
    id: "3",
    title: "Corinthos Canal & Argolis",
    heroTitle: "Corinthos<br/>Canal",
    image: "/images/Corinthos.png",
    duration: "11 hours",
    accessible: true,
    price: 320,
    priceLabel: "For up to 4 people",
    description:
      "Travel back in time on this day tour to the Corinth Canal from Athens.",
    longDescription: [
      "Cross the impressive Corinth Canal and explore the rich history of the Argolis region.",
      "Visit Ancient Corinth, the kingdom of Agamemnon at Mycenae, and the acoustically perfect theater of Epidaurus.",
    ],
    gallery: generateGallery("/images/Corinthos.png", 3),
  },
  {
    id: "4",
    title: "Mycenae, Nafplion & Epidavros",
    heroTitle: "Mycenae &<br/>Epidaurus",
    image: "/images/Mycenae.png",
    duration: "10 hours",
    accessible: false,
    price: 300,
    priceLabel: "For up to 4 people",
    description: "Discover ancient sites and a charming medieval city.",
    longDescription: [
      "A journey through the myths of the Peloponnese. Walk under the Lion Gate at Mycenae and explore the Venetian fortress of Nafplion.",
    ],
    gallery: generateGallery("/images/Mycenae.png", 4),
  },
  {
    id: "5",
    title: "Olympia, Corinth Canal & Peristeria",
    heroTitle: "Olympia &<br/>Corinth",
    image: "/images/Olympia.png",
    duration: "5-6 hours",
    accessible: false,
    price: 380,
    priceLabel: "For up to 4 people",
    description: "Visit the birthplace of the Olympic Games.",
    longDescription: [
      "Stand on the original track where athletes competed in ancient times. Olympia is a sanctuary of ancient Greek religion and athletics.",
    ],
    gallery: generateGallery("/images/Olympia.png", 5),
  },
  {
    id: "6",
    title: "Delphi, the navel of the Earth",
    heroTitle: "Delphi:<br/>The Navel",
    image: "/images/Delphi.png",
    duration: "5-6 hours",
    accessible: true,
    price: 290,
    priceLabel: "For up to 4 people",
    description:
      "Discover the navel of the earth. UNESCO listed Delphi Archaeological Site.",
    longDescription: [
      "Visit the Oracle of Delphi, considered the center of the world in ancient times. Explore the Temple of Apollo and the museum housing the Charioteer.",
    ],
    gallery: generateGallery("/images/Delphi.png", 6),
  },
  {
    id: "7",
    title: "Wine, Olive Oil & Cheese",
    heroTitle: "Wine, Oil<br/>& Cheese",
    image: "/images/WineOliveCheese.png",
    duration: "11 hours",
    accessible: false,
    price: 250,
    priceLabel: "For up to 4 people",
    description:
      "Enjoy the authentic flavors of Greek cheese, olive oil and wine.",
    longDescription: [
      "A culinary journey through the Greek countryside. Taste award-winning wines, fresh extra virgin olive oil, and local cheeses.",
    ],
    gallery: generateGallery("/images/WineOliveCheese.png", 7),
  },
  {
    id: "8",
    title: "Sounion & Vouliagmeni Lake",
    heroTitle: "Sounion &<br/>Vouliagmeni",
    image: "/images/Sounion.png",
    duration: "10 hours",
    accessible: true,
    price: 220,
    priceLabel: "For up to 4 people",
    description:
      "Take a trip to the Athens Riviera and visit breathtaking Vouliagmeni Lake.",
    longDescription: [
      "Drive along the scenic coastal road to the Temple of Poseidon at Cape Sounion. Watch the sunset and relax at the thermal waters of Vouliagmeni Lake.",
    ],
    gallery: generateGallery("/images/Sounion.png", 8),
  },
  {
    id: "9",
    title: "Athens, Sounio & Vouliagmeni",
    heroTitle: "Athens &<br/>Sounio",
    image: "/images/AthensSounio.png",
    duration: "4-5 hours",
    accessible: true,
    price: 260,
    priceLabel: "For up to 4 people",
    description:
      "Experience Athens' top sights, including the Acropolis, Panathenaic Stadium and more.",
    longDescription: [
      "The ultimate combo tour. See the city center highlights and the coastal beauty of Sounion in one trip.",
    ],
    gallery: generateGallery("/images/AthensSounio.png", 9),
  },
];

// Export the type so other components can use it
export type Tour = (typeof toursData)[0];
