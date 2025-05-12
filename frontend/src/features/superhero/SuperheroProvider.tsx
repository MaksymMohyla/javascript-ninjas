import { useState } from 'react';
import { SuperheroContext } from './SuperheroContext';
import { Superhero } from '../../utils/types/superhero';

type Props = {
  children: React.ReactNode;
};

// I use remote database(Neon) so just in case if it crashes - this will be used instead
export const dummyData: Superhero[] = [
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
];

const dummyHero = {
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
};

export const SuperheroProvider: React.FC<Props> = ({ children }) => {
  const [superheroList, setSuperheroList] = useState<Superhero[]>(dummyData);
  const [selectedSuperhero, setSelectedSuperhero] = useState<Superhero | null>(
    dummyHero
  );

  return (
    <SuperheroContext.Provider
      value={{
        superheroList: superheroList,
        setSuperheroList: setSuperheroList,
        selectedSuperhero: selectedSuperhero,
        setSelectedSuperhero: setSelectedSuperhero,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};
