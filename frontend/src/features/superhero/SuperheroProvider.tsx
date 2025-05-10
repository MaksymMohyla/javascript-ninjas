import { useState } from 'react';
import { SuperheroContext } from './SuperheroContext';
import { Superhero } from '../../utils/types/superhero';

type Props = {
  children: React.ReactNode;
};

const dummyData: Superhero[] = [
  {
    id: '1',
    nickname: 'Superman',
    real_name: 'Clark Kent',
    origin_description:
      "He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    superpowers:
      'Solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...',
    catch_phrase:
      "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [
      'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
      'https://static.wikia.nocookie.net/marvel_dc/images/a/a5/Superman_Vol_5_1_Textless.jpg/revision/latest?cb=20180711061148',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwlgVSY0AlsqXmmN151kekIwTn1A5Dz8TpQ&s',
    ],
  },
  {
    id: '2',
    nickname: 'Batman',
    real_name: 'Bruce Wayne',
    origin_description:
      'After witnessing the murder of his parents as a child, Bruce Wayne swore vengeance on criminals, an oath tempered with a sense of justice...',
    superpowers:
      'Peak human physical and mental condition, master martial artist, detective skills, wealth and resources...',
    catch_phrase: 'I am vengeance, I am the night, I am Batman!',
    images: [
      'https://upload.wikimedia.org/wikipedia/uk/4/40/Batmanlee.png',
      'https://static.wikia.nocookie.net/batman/images/9/94/Batman-Bale.jpeg',
      'https://pbs.twimg.com/media/E9fM4DIXEAIS8Mb.jpg',
    ],
  },
  {
    id: '3',
    nickname: 'Wonder Woman',
    real_name: 'Diana Prince',
    origin_description:
      'Diana is the daughter of Hippolyta, Queen of the Amazons, and Zeus, the king of the Greek gods...',
    superpowers:
      'Superhuman strength, speed, durability, flight, combat skills, lasso of truth...',
    catch_phrase:
      'In the name of all that is good, your wrath upon this world is over.',
    images: [
      'https://m.media-amazon.com/images/M/MV5BMjEzYmZkNjktODBmYi00NzNkLWIzMjItMjhkMWZiZTZlN2MwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      'https://static.wikia.nocookie.net/marvel_dc/images/b/bd/Wonder_Woman_Justice_League.jpg',
      'https://hips.hearstapps.com/hmg-prod/images/wonder-woman-2-1623336737.jpg',
    ],
  },
  {
    id: '4',
    nickname: 'Spider-Man',
    real_name: 'Peter Parker',
    origin_description:
      'Bitten by a radioactive spider, Peter Parker gained the proportionate strength and agility of a spider...',
    superpowers:
      'Wall-crawling, spider-sense, superhuman strength and agility, web-shooting...',
    catch_phrase: 'With great power comes great responsibility.',
    images: [
      'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/97e9f5fa6e50c185d249956c6f198a2652a9217e69a59ecd.jpg',
      'https://static.wikia.nocookie.net/spiderman/images/a/a3/Spidey_MCU_Homecoming.png',
      'https://static.dc.com/sites/default/files/imce/2018/07-JUL/CharacterBio-SpiderMan_5b573129257810.68444635.jpg',
    ],
  },
  {
    id: '5',
    nickname: 'Iron Man',
    real_name: 'Tony Stark',
    origin_description:
      'A brilliant billionaire and inventor, Tony Stark created the Iron Man suit to save his own life and later became a global hero...',
    superpowers:
      'Genius-level intellect, powered armor suit, advanced weaponry, flight...',
    catch_phrase: 'I am Iron Man.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExHrVQYT5SWY4NodkOYSu0WxvwZ9E1QU0bw&s',
      'https://cdn.marvel.com/content/1x/ironman_lob_crd_01.jpg',
      'https://static.wikia.nocookie.net/marvelcinematic/images/9/9c/Iron_Man_Profile.jpg',
    ],
  },
  {
    id: '6',
    nickname: 'Thor',
    real_name: 'Thor Odinson',
    origin_description:
      'The Norse god of thunder, Thor wields the magical hammer Mjölnir and fights to protect the realms from evil...',
    superpowers:
      'Superhuman strength, lightning manipulation, flight, near-immortality...',
    catch_phrase: 'For Asgard!',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb0IdircuMhY6N0bbZQuqBv0pl6-2sc5Erg&s',
      'https://cdn.marvel.com/content/1x/thor_lob_crd_02.jpg',
      'https://static.wikia.nocookie.net/marvelcinematic/images/1/1e/Thor_Profile.jpg',
    ],
  },
  {
    id: '7',
    nickname: 'Hulk',
    real_name: 'Bruce Banner',
    origin_description:
      'Exposed to gamma radiation, scientist Bruce Banner transforms into the nearly unstoppable Hulk when enraged...',
    superpowers:
      'Superhuman strength, durability, regeneration, limitless rage-fueled power...',
    catch_phrase: 'HULK SMASH!',
    images: [
      'https://upload.wikimedia.org/wikipedia/uk/3/3e/Incredible-hulk-20060221015639117.jpg',
      'https://cdn.marvel.com/content/1x/hulk_lob_crd_01.jpg',
      'https://static.wikia.nocookie.net/marvelcinematic/images/e/ec/Hulk_Profile.jpg',
    ],
  },
  {
    id: '8',
    nickname: 'Black Panther',
    real_name: "T'Challa",
    origin_description:
      "King of Wakanda and protector of his people, T'Challa possesses enhanced abilities and advanced Wakandan technology...",
    superpowers:
      'Superhuman agility, strength, intelligence, vibranium suit, stealth...',
    catch_phrase: 'Wakanda Forever!',
    images: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Black_Panther_OS_Vol_1_2.png/250px-Black_Panther_OS_Vol_1_2.png',
      'https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01.jpg',
      'https://static.wikia.nocookie.net/marvelcinematic/images/1/19/Black_Panther_Profile.jpg',
    ],
  },
  {
    id: '9',
    nickname: 'Doctor Strange',
    real_name: 'Stephen Strange',
    origin_description:
      'A former neurosurgeon who became the Sorcerer Supreme, Doctor Strange uses mystical arts to protect reality...',
    superpowers:
      'Mastery of magic, spell-casting, dimensional manipulation, time alteration...',
    catch_phrase: 'By the Eye of Agamotto!',
    images: [
      'https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg',
      'https://cdn.marvel.com/content/1x/doctorstrange_lob_crd_01.jpg',
      'https://static.wikia.nocookie.net/marvelcinematic/images/0/02/Doctor_Strange_Profile.jpg',
    ],
  },
  {
    id: '10',
    nickname: 'Flash',
    real_name: 'Barry Allen',
    origin_description:
      'A forensic scientist struck by lightning and dosed with Speed Force energy, Barry Allen became the fastest man alive...',
    superpowers:
      'Super-speed, accelerated healing, time travel, enhanced reflexes...',
    catch_phrase: 'Run, Barry, run!',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9luPmLhqSbG27aRqd_qOtCQlLiBbt4o8aw&s',
      'https://static.dc.com/sites/default/files/TheFlash_0001_5800d00a43d4d3.65303085.jpg',
      'https://static.wikia.nocookie.net/dccinematic/images/2/27/Flash_Profile.jpg',
    ],
  },
  {
    id: '11',
    nickname: 'Green Lantern',
    real_name: 'Hal Jordan',
    origin_description:
      'A fearless test pilot, Hal Jordan was chosen by the dying alien Abin Sur to wield the power ring of the Green Lantern Corps...',
    superpowers:
      'Energy constructs, flight, force fields, interstellar travel, enhanced willpower...',
    catch_phrase:
      'In brightest day, in blackest night, no evil shall escape my sight!',
    images: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Green_Lantern_%28John_Stewart%29.png/250px-Green_Lantern_%28John_Stewart%29.png',
      'https://static.dc.com/sites/default/files/GLFPlanetBio_57dffb6b0b8e44.96290128.jpg',
      'https://static.wikia.nocookie.net/dccinematic/images/6/69/Green_Lantern_Profile.jpg',
    ],
  },
];

export const SuperheroProvider: React.FC<Props> = ({ children }) => {
  const [superheroList, setSuperheroList] = useState<Superhero[]>(dummyData);
  const [selectedSuperheroId, setSelectedSuperheroId] = useState('');

  return (
    <SuperheroContext.Provider
      value={{
        superheroList: superheroList,
        setSuperheroList: setSuperheroList,
        selectedSuperheroId: selectedSuperheroId,
        setSelectedSuperheroId: setSelectedSuperheroId,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};
