const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const tiburonMartilloGigante = await prisma.species.upsert({
      where: { name: 'Giant Hammerhead Shark' },
      update: {},
      create: {
        name: 'Giant Hammerhead Shark',
        cientificName: 'Sphyrna mokarran',
		region: 'Golfo de México',
		minWeight: 230,
		maxWeight: 450,
		color: 'Gray',
		diet: 'Carnivore',
		lifeExpectancy: '20 to 30 years',
    url: "https://static.nationalgeographic.es/files/styles/image_3200/public/Tibur%C3%B3n%20martillo%2002.webp?w=768",
    description: "The most striking feature of all hammerhead shark species is the particular shape of the T-shaped head, with the eyes and nostrils located at the ends of the head, thanks to which the side-to-side head movement when swimming, it can see everything around it and even what is behind it. The pectoral fins are located behind the gills, and the caudal fin has a black tip. Almost the entire dorsal part is gray or brown, but turns white near the ventral part. Like most sharks, hammerheads have counter-coloration, i.e. a dark color on the back and a light color on the belly. Seen from below, the hammerhead blends in with the brightness of the surface waters; seen from above, it blends in with the dark seafloor. Counter-coloration is a type of mimicry that allows the shark to surprise its prey."
      },
    });
    const ballenaAzul = await prisma.species.upsert({
      where: { name: 'Blue Whale' },
      update: {},
      create: {
        name: 'Blue Whale',
        cientificName: 'Balaenoptera musculus',
		region: 'Baja California Sur',
		minWeight: 130000,
		maxWeight: 150000,
		color: 'Blue',
		diet: 'Krill',
		lifeExpectancy: '80 to 90 years',
    url: 'https://a-z-animals.com/media/2021/04/Biggest-Whale-header.jpg',
    description: 'The blue whale is an extremely large marine mammal, with a long, torpedo-shaped body. They have blue-gray colored skin, with a slightly lighter colored underside; they have two pectoral fins, a small dorsal fin on their backs, and a large fluke.',
      },
    });
    const delfinCabezaBlanca = await prisma.species.upsert({
      where: { name: 'White-headed dolphin' },
      update: {},
      create: {
        name: 'White-headed dolphin',
        cientificName: 'Cephalorhynchus hectori',
		region: 'Nueva Zelanda',
		minWeight: 40,
		maxWeight: 60,
		color: 'Gray and white',
		diet: 'Carnivore',
		lifeExpectancy: '20 years',
    url: "https://i.pinimg.com/originals/f9/53/a9/f953a96a525edacc35fb6f503edd3463.jpg",
    description: "The Hector's dolphin is the smallest member of the family Delphinidae. Adults range in length from 1.2 to 1.6 m and weigh 40 to 60 kg.3 The species has slight sexual dimorphism, with females being slightly larger and heavier than males. The body shape is robust with no distinguishable beak or snout. The Hector's dolphin has a rounded dorsal fin and concave edges. The overall color is a pale gray but closer inspection reveals a complex chromatic upholstery. The forehead is gray with black highlights and the tip of the snout is black. The chest and belly are white, and on them a dark gray line runs from the flippers to the eyes. Another band runs from the sides to the dorsal fin."
      },
    });
    const redTuna = await prisma.species.upsert({
      where: { name: 'Red tuna' },
      update: {},
      create: {
        name: 'Red tuna',
        cientificName: 'Thunnus thynnus',
      region: 'The Atlantic Ocean and adjacent seas.',
      minWeight: 220,
      maxWeight: 250,
      color: 'Gray',
      diet:'carnivore',
      lifeExpectancy: '15 years',
      url: 'https://www.iucn.org/sites/dev/files/styles/850x500_no_menu_article/public/import/img/atlantic_bluefin_tuna_thunnus_thynnus_oceana_keith_ellenbogen.jpg?itok=NzFmzQO9',
      description: 'fusiform and rounded body, very hydrodynamic. On each side of the caudal peduncle is a well-developed keel. The mouth is small, with small conical teeth and pointed snout. It has 35 - 41 gill plates. Two fairly close dorsal fins, the first with 12 - 15 spiny rays and the second with 1 or 2 spiny, 12 - 14 soft rays, with 8-10 pinnules before the caudal fin. The pectoral fins are much shorter than in bonito, not reaching beyond the second dorsal fin. Anal fin with 12-15 soft rays and 7-9 pinnules between it and the caudal fin, large and forked. The back is dark blue and the belly is silver. First dorsal fin is yellowish, second dorsal fin is reddish brown and the anal fin is blackish with yellowish tones. The pinnules are yellowish with a blackish line. ',
      },
      });
      const rocualComun = await prisma.species.upsert({
        where: { name: 'Fin Whale' },
        update: {},
        create: {
          name: 'Fin Whale',
          cientificName: 'Balaenoptera physalus',
      region: 'North Atlantic',
      minWeight: 88450,
      maxWeight: 99790,
      color: 'White',
      diet: 'Plankton',
      lifeExpectancy: '114 years',
      url: 'https://www.chiledesarrollosustentable.cl/wp-content/uploads/2018/12/ballena-rorcual-III.jpg',
      description: 'The fin whale (Balaenoptera physalus), also known as finback whale or common rorqual and formerly known as herring whale or razorback whale, is a cetacean belonging to the parvorder of baleen whales.',
        },
      });
      const tortugaCarey = await prisma.species.upsert({
        where: { name: 'Carey Turtle' },
        update: {},
        create: {
          name: 'Hawksbill Sea Turtle',
          cientificName: 'Eretmochelys',
      region: 'Veracruz',
      minWeight: 45,
      maxWeight: 90,
      color: 'Brown',
      diet: 'Plants or Other',
      lifeExpectancy: '30 and 50 years',
      url: 'https://img.freepik.com/foto-gratis/tortuga-carey-eretmochelys-imbricata-flota-agua-arrecife-coral-oceano-indico-maldivas_564276-3.jpg',
      description: 'The hawksbill sea turtle is a marine turtle which is distributed in tropical areas, as well as is subtropical waters of the Atlantic, Indian and Pacific oceans. It’s an animal which journeys far and wide that is capable of nesting in at least 70 countries in the world.',
        },
      });
      const manati = await prisma.species.upsert({
        where: { name: 'Manatí' },
        update: {},
        create: {
          name: 'Manatí',
          cientificName: 'Trichechus manatus',
        region: 'Lower wetlands',
        minWeight: 550,
        maxWeight: 450,
        color: 'Gray',
        diet:'Herbivore',
        lifeExpectancy: '60 years',
        url: 'https://images.app.goo.gl/cQSn9HSsemFkQsfHA',
        description: 'It is a corpulent animal that has a pisciform appearance with a rounded terminal fin in the shape of a spatula. Its skin is finely wrinkled, five centimeters thick, usually covered by algae and small mollusks. The head is broadened and joined without neck and shoulders. With no hind limbs, manatees have flexible, paddle-like forelimbs, or flippers, which are used to assist in moving along the bottom, scratching, touching and even hugging other manatees, to move food inward and to facilitate cleaning of the mouth. Like other manatees, it is a species completely adapted to aquatic life, having no limbs on the back of its body. The distribution of fur on its body is sparse, which prevents the accumulation of algae on the skin. It is approximately 3 meters long, and weighs between 400 and 600 kilograms, with females generally being larger than males. The largest manatees can weigh up to 1500 kilograms and measure up to 4.6 meters. Their skin color can vary from gray to brown. Their flippers have 3 or 4 claws, which serve to hold food when foraging.',
        },
        });
      const LeonMarinoDeSteller = await prisma.species.upsert({
        where: { name: 'León Marino de Steller' },
        update: {},
        create: {
          name: 'León Marino de Steller',
          cientificName: 'Eumetopias jubatus',
        region: 'Aleutian Islands and the Bering Sea to the west.',
        minWeight: 100,
        maxWeight: 350,
        color: 'Dark brown',
        diet:'Carnivore',
        lifeExpectancy: '30 years',
        url: 'http://pm1.narvii.com/7132/4fa7e876a59e0ab59a56d2d229a1ec1d8ee0dbbbr1-768-512v2_uhq.jpg',
        description: 'The Steller (or northern) sea lion is an impressive animal. Males reach full size at about eight years of age and, at that time, can weigh nearly 1300 pounds. What makes them most imposing is that they can move around on land, appearing to "walk," gliding on their giant flippers. Steller sea lions are not much smaller than the males, but they weigh much less. They are called "lions" because, like lions in Africa, their necks and shoulders are disproportionately larger than the rest of their bodies. Sea lions gather in huge groups in colonies during the summer. The colonies are uncovered rocky outcrops where the animals enjoy the sun and sometimes slide into the water to feed. Males are very competitive in mating with females, and while male sea lions can breed at around three years of age, many do not actually breed until they are several years older due to competition with older, larger males.',
        },
        });
        const tortugaCaguama = await prisma.species.upsert({
          where: { name: 'Loggerhead Turtle' },
          update: {},
          create: {
            name: 'Loggerhead Turtle',
            cientificName: 'Caretta caretta',
        region: 'Newfoundland to Argentina',
        minWeight: 80,
        maxWeight: 200,
        color: 'Brown',
        diet: 'Crab',
        lifeExpectancy: 'Up to 100 years',
        url: 'https://t1.ev.ltmcdn.com/es/posts/7/5/3/por_que_esta_en_peligro_de_extincion_la_tortuga_caguama_2357_orig.jpg',
        description: 'Loggerhead turtles have large heads with powerful jaws. The top shell (carapace) is slightly heart-shaped and reddish-brown in adults and sub-adults, while the bottom shell (plastron) is generally a pale yellowish color.',
          },
        });
        const totaba = await prisma.species.upsert({
          where: { name: 'Totoaba' },
          update: {},
          create: {
            name: 'Totoaba',
            cientificName: 'Totoaba macdonaldi',
        region: 'Alto Golfo de California',
        minWeight: 50,
        maxWeight: 100,
        color: 'Blue',
        diet: 'small crustaceans',
        lifeExpectancy: '25 years',
        url: 'https://t1.ev.ltmcdn.com/es/posts/7/5/3/por_que_esta_en_peligro_de_extincion_la_tortuga_caguama_2357_orig.jpg',
        description: 'The totoaba or totuava (Totoaba macdonaldi) is a species of marine fish, a very large member of the drum family Sciaenidae that is endemic to the Gulf of California in Mexico.[3] It is the only species in the genus Totoaba.',
          },
        });
        const vaquitaMarina = await prisma.species.upsert({
          where: { name: 'Dolphin Cow' },
          update: {},
          create: {
            name: 'Dolphin Cow',
            cientificName: 'Phocoena sinus',
        region: 'Gulf of California',
        minWeight: 43,
        maxWeight: 50,
        color: 'Dark Gray',
        diet: 'Carnivore',
        lifeExpectancy: '20 years',
        url: 'https://www.elsoldehermosillo.com.mx/doble-via/ecologia/t0wvxa-vaquita-marina/ALTERNATES/LANDSCAPE_1140/Vaquita%20marina',
        description: 'The Vaquita is the only marine mammal native to Mexico and the smallest of the cetaceans. It is robust, with long and concave pectoral fins; high, triangular and slightly falcate (curved backwards) dorsal fin. Its head is rounded and its snout is short.',
          },
        });
        
    console.log('Adding new data to the database...');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();