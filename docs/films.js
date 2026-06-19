const FILMS_RAW = [
  [
    "Harakiri",
    1962,
    "Masaki Kobayashi"
  ],
  [
    "The Human Condition III: A Soldier's Prayer",
    1961,
    "Masaki Kobayashi"
  ],
  [
    "12 Angry Men",
    1957,
    "Sidney Lumet"
  ],
  [
    "Come and See",
    1985,
    "Elem Klimov"
  ],
  [
    "Seven Samurai",
    1954,
    "Akira Kurosawa"
  ],
  [
    "High and Low",
    1963,
    "Akira Kurosawa"
  ],
  [
    "The Shawshank Redemption",
    1994,
    "Frank Darabont"
  ],
  [
    "The Godfather Part II",
    1974,
    "Francis Ford Coppola"
  ],
  [
    "The Human Condition I: No Greater Love",
    1959,
    "Masaki Kobayashi"
  ],
  [
    "City of God",
    2002,
    "Fernando Meirelles, Kátia Lund"
  ],
  [
    "The Lord of the Rings: The Return of the King",
    2003,
    "Peter Jackson"
  ],
  [
    "Schindler's List",
    1993,
    "Steven Spielberg"
  ],
  [
    "Yi Yi",
    2000,
    "Edward Yang"
  ],
  [
    "Parasite",
    2019,
    "Bong Joon-ho"
  ],
  [
    "The Godfather",
    1972,
    "Francis Ford Coppola"
  ],
  [
    "Ikiru",
    1952,
    "Akira Kurosawa"
  ],
  [
    "Cinema Paradiso",
    1988,
    "Giuseppe Tornatore"
  ],
  [
    "Ran",
    1985,
    "Akira Kurosawa"
  ],
  [
    "Le Trou",
    1960,
    "Jacques Becker"
  ],
  [
    "The Good, the Bad and the Ugly",
    1966,
    "Sergio Leone"
  ],
  [
    "La Haine",
    1995,
    "Mathieu Kassovitz"
  ],
  [
    "A Brighter Summer Day",
    1991,
    "Edward Yang"
  ],
  [
    "Autumn Sonata",
    1978,
    "Ingmar Bergman"
  ],
  [
    "The Human Condition II: Road to Eternity",
    1959,
    "Masaki Kobayashi"
  ],
  [
    "The Dark Knight",
    2008,
    "Christopher Nolan"
  ],
  [
    "Grave of the Fireflies",
    1988,
    "Isao Takahata"
  ],
  [
    "Neon Genesis Evangelion: The End of Evangelion",
    1997,
    "Hideaki Anno, Kazuya Tsurumaki"
  ],
  [
    "Woman in the Dunes",
    1964,
    "Hiroshi Teshigahara"
  ],
  [
    "The Battle of Algiers",
    1966,
    "Gillo Pontecorvo"
  ],
  [
    "There Will Be Blood",
    2007,
    "Paul Thomas Anderson"
  ],
  [
    "I Am Cuba",
    1964,
    "Mikhail Kalatozov"
  ],
  [
    "The Cranes Are Flying",
    1957,
    "Mikhail Kalatozov"
  ],
  [
    "GoodFellas",
    1990,
    "Martin Scorsese"
  ],
  [
    "Interstellar",
    2014,
    "Christopher Nolan"
  ],
  [
    "Paths of Glory",
    1957,
    "Stanley Kubrick"
  ],
  [
    "Incendies",
    2010,
    "Denis Villeneuve"
  ],
  [
    "Spirited Away",
    2001,
    "Hayao Miyazaki"
  ],
  [
    "Andrei Rublev",
    1966,
    "Andrei Tarkovsky"
  ],
  [
    "It's a Wonderful Life",
    1946,
    "Frank Capra"
  ],
  [
    "The Ascent",
    1977,
    "Larisa Shepitko"
  ],
  [
    "Apocalypse Now",
    1979,
    "Francis Ford Coppola"
  ],
  [
    "The Apartment",
    1960,
    "Billy Wilder"
  ],
  [
    "Sunset Boulevard",
    1950,
    "Billy Wilder"
  ],
  [
    "The Lord of the Rings: The Two Towers",
    2002,
    "Peter Jackson"
  ],
  [
    "Tokyo Story",
    1953,
    "Yasujirō Ozu"
  ],
  [
    "Sansho the Bailiff",
    1954,
    "Kenji Mizoguchi"
  ],
  [
    "The Passion of Joan of Arc",
    1928,
    "Carl Theodor Dreyer"
  ],
  [
    "Whiplash",
    2014,
    "Damien Chazelle"
  ],
  [
    "Fanny and Alexander",
    1982,
    "Ingmar Bergman"
  ],
  [
    "Mishima: A Life in Four Chapters",
    1985,
    "Paul Schrader"
  ],
  [
    "Portrait of a Lady on Fire",
    2019,
    "Céline Sciamma"
  ],
  [
    "Memories of Murder",
    2003,
    "Bong Joon-ho"
  ],
  [
    "Red Beard",
    1965,
    "Akira Kurosawa"
  ],
  [
    "Close-Up",
    1990,
    "Abbas Kiarostami"
  ],
  [
    "Life Is Beautiful",
    1997,
    "Roberto Benigni"
  ],
  [
    "The Red Shoes",
    1948,
    "Michael Powell, Emeric Pressburger"
  ],
  [
    "Nobody Knows",
    2004,
    "Hirokazu Kore-eda"
  ],
  [
    "Witness for the Prosecution",
    1957,
    "Billy Wilder"
  ],
  [
    "Nights of Cabiria",
    1957,
    "Federico Fellini"
  ],
  [
    "Barry Lyndon",
    1975,
    "Stanley Kubrick"
  ],
  [
    "The Pianist",
    2002,
    "Roman Polanski"
  ],
  [
    "Lawrence of Arabia",
    1962,
    "David Lean"
  ],
  [
    "Farewell My Concubine",
    1993,
    "Chen Kaige"
  ],
  [
    "Spider-Man: Across the Spider-Verse",
    2023,
    "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson"
  ],
  [
    "The Empire Strikes Back",
    1980,
    "Irvin Kershner"
  ],
  [
    "A Woman Under the Influence",
    1974,
    "John Cassavetes"
  ],
  [
    "Do the Right Thing",
    1989,
    "Spike Lee"
  ],
  [
    "Eternity and a Day",
    1998,
    "Theo Angelopoulos"
  ],
  [
    "Stalker",
    1979,
    "Andrei Tarkovsky"
  ],
  [
    "Spider-Man: Into the Spider-Verse",
    2018,
    "Bob Persichetti, Peter Ramsey, Rodney Rothman"
  ],
  [
    "Satantango",
    1994,
    "Béla Tarr"
  ],
  [
    "Princess Mononoke",
    1997,
    "Hayao Miyazaki"
  ],
  [
    "Swing Girls",
    2004,
    "Shinobu Yaguchi"
  ],
  [
    "The Handmaiden",
    2016,
    "Park Chan-wook"
  ],
  [
    "The Voice of Hind Rajab",
    2025,
    "Kaouther Ben Hania"
  ],
  [
    "Love Exposure",
    2008,
    "Sion Sono"
  ],
  [
    "The Lord of the Rings: The Fellowship of the Ring",
    2001,
    "Peter Jackson"
  ],
  [
    "Once Upon a Time in the West",
    1968,
    "Sergio Leone"
  ],
  [
    "Paper Moon",
    1973,
    "Peter Bogdanovich"
  ],
  [
    "An Elephant Sitting Still",
    2018,
    "Hu Bo"
  ],
  [
    "Scenes from a Marriage",
    1974,
    "Ingmar Bergman"
  ],
  [
    "Persona",
    1966,
    "Ingmar Bergman"
  ],
  [
    "Perfect Blue",
    1997,
    "Satoshi Kon"
  ],
  [
    "Good Will Hunting",
    1997,
    "Gus Van Sant"
  ],
  [
    "Dune: Part Two",
    2024,
    "Denis Villeneuve"
  ],
  [
    "Where Is the Friend's House?",
    1987,
    "Abbas Kiarostami"
  ],
  [
    "In the Mood for Love",
    2000,
    "Wong Kar-wai"
  ],
  [
    "Apur Sansar",
    1959,
    "Satyajit Ray"
  ],
  [
    "A Separation",
    2011,
    "Asghar Farhadi"
  ],
  [
    "Se7en",
    1995,
    "David Fincher"
  ],
  [
    "Sherlock Jr.",
    1924,
    "Buster Keaton"
  ],
  [
    "Z",
    1969,
    "Costa-Gavras"
  ],
  [
    "One Flew Over the Cuckoo's Nest",
    1975,
    "Miloš Forman"
  ],
  [
    "Paris, Texas",
    1984,
    "Wim Wenders"
  ],
  [
    "Rear Window",
    1954,
    "Alfred Hitchcock"
  ],
  [
    "Inglourious Basterds",
    2009,
    "Quentin Tarantino"
  ],
  [
    "Oldboy",
    2003,
    "Park Chan-wook"
  ],
  [
    "All About Eve",
    1950,
    "Joseph L. Mankiewicz"
  ],
  [
    "The Wages of Fear",
    1953,
    "Henri-Georges Clouzot"
  ],
  [
    "Landscape in the Mist",
    1988,
    "Theo Angelopoulos"
  ],
  [
    "Army of Shadows",
    1969,
    "Jean-Pierre Melville"
  ],
  [
    "Judgment at Nuremberg",
    1961,
    "Stanley Kramer"
  ],
  [
    "Howl's Moving Castle",
    2004,
    "Hayao Miyazaki"
  ],
  [
    "Central Station",
    1998,
    "Walter Salles"
  ],
  [
    "Amadeus",
    1984,
    "Miloš Forman"
  ],
  [
    "It's Such a Beautiful Day",
    2012,
    "Don Hertzfeldt"
  ],
  [
    "Ordet",
    1955,
    "Carl Theodor Dreyer"
  ],
  [
    "Chainsaw Man – The Movie: Reze Arc",
    2025,
    "Tatsuya Yoshihara"
  ],
  [
    "The Thing",
    1982,
    "John Carpenter"
  ],
  [
    "How to Make Millions Before Grandma Dies",
    2024,
    "Pat Boonnitipat"
  ],
  [
    "A Man Escaped",
    1956,
    "Robert Bresson"
  ],
  [
    "Dead Poets Society",
    1989,
    "Peter Weir"
  ],
  [
    "Raise the Red Lantern",
    1991,
    "Zhang Yimou"
  ],
  [
    "Singin' in the Rain",
    1952,
    "Gene Kelly, Stanley Donen"
  ],
  [
    "A Special Day",
    1977,
    "Ettore Scola"
  ],
  [
    "All That Jazz",
    1979,
    "Bob Fosse"
  ],
  [
    "Still Walking",
    2008,
    "Hirokazu Kore-eda"
  ],
  [
    "The Departed",
    2006,
    "Martin Scorsese"
  ],
  [
    "I'm Still Here",
    2024,
    "Walter Salles"
  ],
  [
    "Monster",
    2023,
    "Hirokazu Kore-eda"
  ],
  [
    "To Be or Not to Be",
    1942,
    "Ernst Lubitsch"
  ],
  [
    "The Silence of the Lambs",
    1991,
    "Jonathan Demme"
  ],
  [
    "Three Colours: Red",
    1994,
    "Krzysztof Kieślowski"
  ],
  [
    "Twin Peaks: Fire Walk with Me",
    1992,
    "David Lynch"
  ],
  [
    "Late Spring",
    1949,
    "Yasujirō Ozu"
  ],
  [
    "Django Unchained",
    2012,
    "Quentin Tarantino"
  ],
  [
    "Prisoners",
    2013,
    "Denis Villeneuve"
  ],
  [
    "Das Boot",
    1981,
    "Wolfgang Petersen"
  ],
  [
    "Wild Strawberries",
    1957,
    "Ingmar Bergman"
  ],
  [
    "Rocco and His Brothers",
    1960,
    "Luchino Visconti"
  ],
  [
    "City Lights",
    1931,
    "Charlie Chaplin"
  ],
  [
    "Funeral Parade of Roses",
    1969,
    "Toshio Matsumoto"
  ],
  [
    "The Great Dictator",
    1940,
    "Charlie Chaplin"
  ],
  [
    "The Seventh Seal",
    1957,
    "Ingmar Bergman"
  ],
  [
    "Pather Panchali",
    1955,
    "Satyajit Ray"
  ],
  [
    "Underground",
    1995,
    "Emir Kusturica"
  ],
  [
    "Taste of Cherry",
    1997,
    "Abbas Kiarostami"
  ],
  [
    "The Celebration",
    1998,
    "Thomas Vinterberg"
  ],
  [
    "Brief Encounter",
    1945,
    "David Lean"
  ],
  [
    "The Young Girls of Rochefort",
    1967,
    "Jacques Demy"
  ],
  [
    "Mirror",
    1975,
    "Andrei Tarkovsky"
  ],
  [
    "Mommy",
    2014,
    "Xavier Dolan"
  ],
  [
    "Before Sunset",
    2004,
    "Richard Linklater"
  ],
  [
    "Project Hail Mary",
    2026,
    "Phil Lord, Christopher Miller"
  ],
  [
    "Perfect Days",
    2023,
    "Wim Wenders"
  ],
  [
    "Tampopo",
    1985,
    "Jūzō Itami"
  ],
  [
    "Psycho",
    1960,
    "Alfred Hitchcock"
  ],
  [
    "No Country for Old Men",
    2007,
    "Joel Coen, Ethan Coen"
  ],
  [
    "Werckmeister Harmonies",
    2000,
    "Béla Tarr, Ágnes Hranitzky"
  ],
  [
    "Heat",
    1995,
    "Michael Mann"
  ],
  [
    "Wings of Desire",
    1987,
    "Wim Wenders"
  ],
  [
    "Puella Magi Madoka Magica the Movie Part III: Rebellion",
    2013,
    "Akiyuki Shinbo, Yukihiro Miyamoto"
  ],
  [
    "Sing Sing",
    2023,
    "Greg Kwedar"
  ],
  [
    "Dog Day Afternoon",
    1975,
    "Sidney Lumet"
  ],
  [
    "Shoplifters",
    2018,
    "Hirokazu Kore-eda"
  ],
  [
    "The Elephant Man",
    1980,
    "David Lynch"
  ],
  [
    "The 400 Blows",
    1959,
    "François Truffaut"
  ],
  [
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    1964,
    "Stanley Kubrick"
  ],
  [
    "The Cremator",
    1969,
    "Juraj Herz"
  ],
  [
    "Chinatown",
    1974,
    "Roman Polanski"
  ],
  [
    "Dersu Uzala",
    1975,
    "Akira Kurosawa"
  ],
  [
    "Children of Men",
    2006,
    "Alfonso Cuarón"
  ],
  [
    "Fantastic Mr. Fox",
    2009,
    "Wes Anderson"
  ],
  [
    "Before Sunrise",
    1995,
    "Richard Linklater"
  ],
  [
    "Yojimbo",
    1961,
    "Akira Kurosawa"
  ],
  [
    "The Treasure of the Sierra Madre",
    1948,
    "John Huston"
  ],
  [
    "Children of Paradise",
    1945,
    "Marcel Carné"
  ],
  [
    "Opening Night",
    1977,
    "John Cassavetes"
  ],
  [
    "The Lives of Others",
    2006,
    "Florian Henckel von Donnersmarck"
  ],
  [
    "Malcolm X",
    1992,
    "Spike Lee"
  ],
  [
    "M",
    1931,
    "Fritz Lang"
  ],
  [
    "We All Loved Each Other So Much",
    1974,
    "Ettore Scola"
  ],
  [
    "The Sacrifice",
    1986,
    "Andrei Tarkovsky"
  ],
  [
    "The Father",
    2020,
    "Florian Zeller"
  ],
  [
    "Nirvanna the Band the Show the Movie",
    2025,
    "Matt Johnson"
  ],
  [
    "Terminator 2: Judgment Day",
    1991,
    "James Cameron"
  ],
  [
    "La Notte",
    1961,
    "Michelangelo Antonioni"
  ],
  [
    "Fail Safe",
    1964,
    "Sidney Lumet"
  ],
  [
    "Azur & Asmar: The Princes' Quest",
    2006,
    "Michel Ocelot"
  ],
  [
    "Secrets & Lies",
    1996,
    "Mike Leigh"
  ],
  [
    "The Man Who Shot Liberty Valance",
    1962,
    "John Ford"
  ],
  [
    "Bicycle Thieves",
    1948,
    "Vittorio De Sica"
  ],
  [
    "Evangelion: 3.0+1.0 Thrice Upon a Time",
    2021,
    "Hideaki Anno, Kazuya Tsurumaki, Katsuichi Nakayama, Mahiro Maeda"
  ],
  [
    "The Green Mile",
    1999,
    "Frank Darabont"
  ],
  [
    "The Prestige",
    2006,
    "Christopher Nolan"
  ],
  [
    "The Hunt",
    2012,
    "Thomas Vinterberg"
  ],
  [
    "Nostalgia",
    1983,
    "Andrei Tarkovsky"
  ],
  [
    "Life, and Nothing More…",
    1992,
    "Abbas Kiarostami"
  ],
  [
    "The Iron Giant",
    1999,
    "Brad Bird"
  ],
  [
    "Akira",
    1988,
    "Katsuhiro Otomo"
  ],
  [
    "Song of the Sea",
    2014,
    "Tomm Moore"
  ],
  [
    "Casablanca",
    1942,
    "Michael Curtiz"
  ],
  [
    "Ace in the Hole",
    1951,
    "Billy Wilder"
  ],
  [
    "Cure",
    1997,
    "Kiyoshi Kurosawa"
  ],
  [
    "Chungking Express",
    1994,
    "Wong Kar-wai"
  ],
  [
    "Some Like It Hot",
    1959,
    "Billy Wilder"
  ],
  [
    "Ritual",
    2000,
    "Hideaki Anno"
  ],
  [
    "Look Back",
    2024,
    "Kiyotaka Oshiyama"
  ],
  [
    "8½",
    1963,
    "Federico Fellini"
  ],
  [
    "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem",
    2003,
    "Kazuhisa Takenouchi"
  ],
  [
    "Fight Club",
    1999,
    "David Fincher"
  ],
  [
    "Throne of Blood",
    1957,
    "Akira Kurosawa"
  ],
  [
    "Who's Afraid of Virginia Woolf?",
    1966,
    "Mike Nichols"
  ],
  [
    "Sorcerer",
    1977,
    "William Friedkin"
  ],
  [
    "La Dolce Vita",
    1960,
    "Federico Fellini"
  ],
  [
    "Rififi",
    1955,
    "Jules Dassin"
  ],
  [
    "Aparajito",
    1956,
    "Satyajit Ray"
  ],
  [
    "Mary and Max",
    2009,
    "Adam Elliot"
  ],
  [
    "A Matter of Life and Death",
    1946,
    "Michael Powell, Emeric Pressburger"
  ],
  [
    "Jeanne Dielman, 23, quai du Commerce, 1080 Bruxelles",
    1975,
    "Chantal Akerman"
  ],
  [
    "Ugetsu",
    1953,
    "Kenji Mizoguchi"
  ],
  [
    "Network",
    1976,
    "Sidney Lumet"
  ],
  [
    "The Tale of The Princess Kaguya",
    2013,
    "Isao Takahata"
  ],
  [
    "Mulholland Drive",
    2001,
    "David Lynch"
  ],
  [
    "Il Sorpasso",
    1962,
    "Dino Risi"
  ],
  [
    "Umberto D.",
    1952,
    "Vittorio De Sica"
  ],
  [
    "Modern Times",
    1936,
    "Charlie Chaplin"
  ],
  [
    "The Night of the Hunter",
    1955,
    "Charles Laughton"
  ],
  [
    "The Face of Another",
    1966,
    "Hiroshi Teshigahara"
  ],
  [
    "The Fall",
    2006,
    "Tarsem Singh"
  ],
  [
    "Double Indemnity",
    1944,
    "Billy Wilder"
  ],
  [
    "Saving Private Ryan",
    1998,
    "Steven Spielberg"
  ],
  [
    "The Holdovers",
    2023,
    "Alexander Payne"
  ],
  [
    "I Swear",
    2025,
    "Kirk Jones"
  ],
  [
    "A Moment of Innocence",
    1996,
    "Mohsen Makhmalbaf"
  ],
  [
    "Kes",
    1969,
    "Ken Loach"
  ],
  [
    "Winter Light",
    1963,
    "Ingmar Bergman"
  ],
  [
    "The First Slam Dunk",
    2022,
    "Takehiko Inoue"
  ],
  [
    "Tokyo Godfathers",
    2003,
    "Satoshi Kon"
  ],
  [
    "4 Months, 3 Weeks and 2 Days",
    2007,
    "Cristian Mungiu"
  ],
  [
    "The Best Years of Our Lives",
    1946,
    "William Wyler"
  ],
  [
    "Alien",
    1979,
    "Ridley Scott"
  ],
  [
    "The Sound of Music",
    1965,
    "Robert Wise"
  ],
  [
    "Macario",
    1960,
    "Roberto Gavaldón"
  ],
  [
    "The Bridge on the River Kwai",
    1957,
    "David Lean"
  ],
  [
    "Quo Vadis, Aida?",
    2020,
    "Jasmila Žbanić"
  ],
  [
    "Son of the White Mare",
    1981,
    "Marcell Jankovics"
  ],
  [
    "2001: A Space Odyssey",
    1968,
    "Stanley Kubrick"
  ],
  [
    "Anatomy of a Murder",
    1959,
    "Otto Preminger"
  ],
  [
    "Everything Everywhere All at Once",
    2022,
    "Daniel Kwan, Daniel Scheinert"
  ],
  [
    "Metropolis",
    1927,
    "Fritz Lang"
  ],
  [
    "Marcel the Shell with Shoes On",
    2021,
    "Dean Fleischer Camp"
  ],
  [
    "The Secret in Their Eyes",
    2009,
    "Juan José Campanella"
  ],
  [
    "Kwaidan",
    1964,
    "Masaki Kobayashi"
  ],
  [
    "The Grand Budapest Hotel",
    2014,
    "Wes Anderson"
  ],
  [
    "Kamikaze Girls",
    2004,
    "Tetsuya Nakashima"
  ],
  [
    "Vada Chennai",
    2018,
    "Vetrimaaran"
  ],
  [
    "Eternal Sunshine of the Spotless Mind",
    2004,
    "Michel Gondry"
  ],
  [
    "WALL·E",
    2008,
    "Andrew Stanton"
  ],
  [
    "Sweet Smell of Success",
    1957,
    "Alexander Mackendrick"
  ],
  [
    "Time of the Gypsies",
    1988,
    "Emir Kusturica"
  ],
  [
    "For a Few Dollars More",
    1965,
    "Sergio Leone"
  ],
  [
    "Poetry",
    2010,
    "Lee Chang-dong"
  ],
  [
    "The Third Man",
    1949,
    "Carol Reed"
  ],
  [
    "An Autumn Afternoon",
    1962,
    "Yasujirō Ozu"
  ],
  [
    "Pulp Fiction",
    1994,
    "Quentin Tarantino"
  ],
  [
    "The Lovers on the Bridge",
    1991,
    "Leos Carax"
  ],
  [
    "Dreams",
    1990,
    "Akira Kurosawa"
  ],
  [
    "The Life and Death of Colonel Blimp",
    1943,
    "Michael Powell, Emeric Pressburger"
  ],
  [
    "The King of Comedy",
    1982,
    "Martin Scorsese"
  ],
  [
    "To Live",
    1994,
    "Zhang Yimou"
  ],
  [
    "Kagemusha",
    1980,
    "Akira Kurosawa"
  ],
  [
    "Millennium Actress",
    2001,
    "Satoshi Kon"
  ],
  [
    "Amour",
    2012,
    "Michael Haneke"
  ],
  [
    "Wolfwalkers",
    2020,
    "Tomm Moore, Ross Stewart"
  ],
  [
    "Inception",
    2010,
    "Christopher Nolan"
  ],
  [
    "Ratatouille",
    2007,
    "Brad Bird"
  ],
  [
    "The Devils",
    1971,
    "Ken Russell"
  ],
  [
    "Your Name.",
    2016,
    "Makoto Shinkai"
  ],
  [
    "Embrace of the Serpent",
    2015,
    "Ciro Guerra"
  ],
  [
    "The Turin Horse",
    2011,
    "Béla Tarr, Ágnes Hranitzky"
  ],
  [
    "Trainspotting",
    1996,
    "Danny Boyle"
  ],
  [
    "The Lion King",
    1994,
    "Roger Allers, Rob Minkoff"
  ],
  [
    "Once Upon a Time in America",
    1984,
    "Sergio Leone"
  ],
  [
    "Magnolia",
    1999,
    "Paul Thomas Anderson"
  ],
  [
    "The White Ribbon",
    2009,
    "Michael Haneke"
  ],
  [
    "Fireworks",
    1997,
    "Takeshi Kitano"
  ],
  [
    "Solaris",
    1972,
    "Andrei Tarkovsky"
  ],
  [
    "The Truman Show",
    1998,
    "Peter Weir"
  ],
  [
    "Dancer in the Dark",
    2000,
    "Lars von Trier"
  ],
  [
    "Shame",
    1968,
    "Ingmar Bergman"
  ],
  [
    "Vertigo",
    1958,
    "Alfred Hitchcock"
  ],
  [
    "Thelma & Louise",
    1991,
    "Ridley Scott"
  ],
  [
    "The Shining",
    1980,
    "Stanley Kubrick"
  ],
  [
    "The Young and the Damned",
    1950,
    "Luis Buñuel"
  ],
  [
    "They Shoot Horses, Don't They?",
    1969,
    "Sydney Pollack"
  ],
  [
    "Capernaum",
    2018,
    "Nadine Labaki"
  ],
  [
    "Joint Security Area",
    2000,
    "Park Chan-wook"
  ],
  [
    "Children of Heaven",
    1997,
    "Majid Majidi"
  ],
  [
    "Le Samouraï",
    1967,
    "Jean-Pierre Melville"
  ],
  [
    "The Man Who Sleeps",
    1974,
    "Bernard Queysanne"
  ],
  [
    "Cria!",
    1976,
    "Carlos Saura"
  ],
  [
    "Kill Bill: Vol. 1",
    2003,
    "Quentin Tarantino"
  ],
  [
    "Investigation of a Citizen Above Suspicion",
    1970,
    "Elio Petri"
  ],
  [
    "The Deer Hunter",
    1978,
    "Michael Cimino"
  ],
  [
    "Winter Sleep",
    2014,
    "Nuri Bilge Ceylan"
  ],
  [
    "Little Miss Sunshine",
    2006,
    "Jonathan Dayton, Valerie Faris"
  ],
  [
    "Hope",
    2013,
    "Lee Joon-ik"
  ],
  [
    "Y Tu Mamá También",
    2001,
    "Alfonso Cuarón"
  ],
  [
    "Mysterious Skin",
    2004,
    "Gregg Araki"
  ],
  [
    "Happy Together",
    1997,
    "Wong Kar-wai"
  ],
  [
    "Cries and Whispers",
    1972,
    "Ingmar Bergman"
  ],
  [
    "Meiyazhagan",
    2024,
    "C. Prem Kumar"
  ],
  [
    "Le Cercle Rouge",
    1970,
    "Jean-Pierre Melville"
  ],
  [
    "A Dog's Will",
    2000,
    "Guel Arraes"
  ],
  [
    "Casino",
    1995,
    "Martin Scorsese"
  ],
  [
    "Raging Bull",
    1980,
    "Martin Scorsese"
  ],
  [
    "Aftersun",
    2022,
    "Charlotte Wells"
  ],
  [
    "Rosemary's Baby",
    1968,
    "Roman Polanski"
  ],
  [
    "A Silent Voice: The Movie",
    2016,
    "Naoko Yamada"
  ],
  [
    "Sound of Metal",
    2019,
    "Darius Marder"
  ],
  [
    "Persepolis",
    2007,
    "Marjane Satrapi, Vincent Paronnaud"
  ],
  [
    "A Taxi Driver",
    2017,
    "Jang Hoon"
  ],
  [
    "The Last Picture Show",
    1971,
    "Peter Bogdanovich"
  ],
  [
    "Back to the Future",
    1985,
    "Robert Zemeckis"
  ],
  [
    "Au Revoir les Enfants",
    1987,
    "Louis Malle"
  ],
  [
    "Grand Illusion",
    1937,
    "Jean Renoir"
  ],
  [
    "The Wild Robot",
    2024,
    "Chris Sanders"
  ],
  [
    "The Kid",
    1921,
    "Charlie Chaplin"
  ],
  [
    "The Sting",
    1973,
    "George Roy Hill"
  ],
  [
    "Night Is Short, Walk On Girl",
    2017,
    "Masaaki Yuasa"
  ],
  [
    "Good Morning",
    1959,
    "Yasujirō Ozu"
  ],
  [
    "Comrades, Almost a Love Story",
    1996,
    "Peter Chan"
  ],
  [
    "HAIKYU!! The Dumpster Battle",
    2024,
    "Susumu Mitsunaka"
  ],
  [
    "Boogie Nights",
    1997,
    "Paul Thomas Anderson"
  ],
  [
    "In the Name of the Father",
    1993,
    "Jim Sheridan"
  ],
  [
    "Unforgiven",
    1992,
    "Clint Eastwood"
  ],
  [
    "Gangs of Wasseypur – Part 2",
    2012,
    "Anurag Kashyap"
  ],
  [
    "The Taste of Tea",
    2004,
    "Katsuhito Ishii"
  ],
  [
    "Better Days",
    2019,
    "Derek Tsang"
  ],
  [
    "Drive My Car",
    2021,
    "Ryusuke Hamaguchi"
  ],
  [
    "Love Streams",
    1984,
    "John Cassavetes"
  ],
  [
    "Linda Linda Linda",
    2005,
    "Nobuhiro Yamashita"
  ],
  [
    "RRR",
    2022,
    "S. S. Rajamouli"
  ],
  [
    "PlayTime",
    1967,
    "Jacques Tati"
  ],
  [
    "A Face in the Crowd",
    1957,
    "Elia Kazan"
  ],
  [
    "Moonlight",
    2016,
    "Barry Jenkins"
  ],
  [
    "The Conformist",
    1970,
    "Bernardo Bertolucci"
  ],
  [
    "Rashomon",
    1950,
    "Akira Kurosawa"
  ],
  [
    "Through the Olive Trees",
    1994,
    "Abbas Kiarostami"
  ],
  [
    "Mind Game",
    2004,
    "Masaaki Yuasa"
  ],
  [
    "Pixote",
    1980,
    "Héctor Babenco"
  ],
  [
    "Joyland",
    2022,
    "Saim Sadiq"
  ],
  [
    "Full Metal Jacket",
    1987,
    "Stanley Kubrick"
  ],
  [
    "Dogville",
    2003,
    "Lars von Trier"
  ],
  [
    "In a Lonely Place",
    1950,
    "Nicholas Ray"
  ],
  [
    "My Neighbor Totoro",
    1988,
    "Hayao Miyazaki"
  ],
  [
    "Amélie",
    2001,
    "Jean-Pierre Jeunet"
  ],
  [
    "The General",
    1926,
    "Buster Keaton, Clyde Bruckman"
  ],
  [
    "The Grapes of Wrath",
    1940,
    "John Ford"
  ],
  [
    "Nausicaä of the Valley of the Wind",
    1984,
    "Hayao Miyazaki"
  ],
  [
    "Ivan's Childhood",
    1962,
    "Andrei Tarkovsky"
  ],
  [
    "My Life as a Zucchini",
    2016,
    "Claude Barras"
  ],
  [
    "Kumbalangi Nights",
    2019,
    "Madhu C. Narayanan"
  ],
  [
    "The Return",
    2003,
    "Andrey Zvyagintsev"
  ],
  [
    "Coraline",
    2009,
    "Henry Selick"
  ],
  [
    "Hamnet",
    2025,
    "Chloé Zhao"
  ],
  [
    "A Prophet",
    2009,
    "Jacques Audiard"
  ],
  [
    "Roman Holiday",
    1953,
    "William Wyler"
  ],
  [
    "Klaus",
    2019,
    "Sergio Pablos"
  ],
  [
    "Diabolique",
    1955,
    "Henri-Georges Clouzot"
  ],
  [
    "North by Northwest",
    1959,
    "Alfred Hitchcock"
  ],
  [
    "Céline and Julie Go Boating",
    1974,
    "Jacques Rivette"
  ],
  [
    "The Cook, the Thief, His Wife & Her Lover",
    1989,
    "Peter Greenaway"
  ],
  [
    "Day for Night",
    1973,
    "François Truffaut"
  ],
  [
    "Hard Boiled",
    1992,
    "John Woo"
  ],
  [
    "All About My Mother",
    1999,
    "Pedro Almodóvar"
  ],
  [
    "The Straight Story",
    1999,
    "David Lynch"
  ],
  [
    "What Ever Happened to Baby Jane?",
    1962,
    "Robert Aldrich"
  ],
  [
    "The Long Goodbye",
    1973,
    "Robert Altman"
  ],
  [
    "Stand by Me",
    1986,
    "Rob Reiner"
  ],
  [
    "Princes and Princesses",
    2000,
    "Michel Ocelot"
  ],
  [
    "Rio Bravo",
    1959,
    "Howard Hawks"
  ],
  [
    "The Shop Around the Corner",
    1940,
    "Ernst Lubitsch"
  ],
  [
    "Who Killed Captain Alex?",
    2010,
    "Nabwana IGG"
  ],
  [
    "Whisper of the Heart",
    1995,
    "Yoshifumi Kondō"
  ],
  [
    "Amores Perros",
    2000,
    "Alejandro González Iñárritu"
  ],
  [
    "Threads",
    1984,
    "Mick Jackson"
  ],
  [
    "Shutter Island",
    2010,
    "Martin Scorsese"
  ],
  [
    "Like Father, Like Son",
    2013,
    "Hirokazu Kore-eda"
  ],
  [
    "Citizen Kane",
    1941,
    "Orson Welles"
  ],
  [
    "Gladiator",
    2000,
    "Ridley Scott"
  ],
  [
    "The Fire Within",
    1963,
    "Louis Malle"
  ],
  [
    "All the President's Men",
    1976,
    "Alan J. Pakula"
  ],
  [
    "Spring, Summer, Fall, Winter... and Spring",
    2003,
    "Kim Ki-duk"
  ],
  [
    "Little Women",
    2019,
    "Greta Gerwig"
  ],
  [
    "La Strada",
    1954,
    "Federico Fellini"
  ],
  [
    "Cléo from 5 to 7",
    1962,
    "Agnès Varda"
  ],
  [
    "The Children's Hour",
    1961,
    "William Wyler"
  ],
  [
    "Memento",
    2000,
    "Christopher Nolan"
  ],
  [
    "Ernest & Celestine",
    2012,
    "Stéphane Aubier, Vincent Patar, Benjamin Renner"
  ],
  [
    "All Quiet on the Western Front",
    1930,
    "Lewis Milestone"
  ],
  [
    "Tokyo Sonata",
    2008,
    "Kiyoshi Kurosawa"
  ],
  [
    "Sunrise: A Song of Two Humans",
    1927,
    "F. W. Murnau"
  ],
  [
    "The Matrix",
    1999,
    "Lana Wachowski, Lilly Wachowski"
  ],
  [
    "Güeros",
    2014,
    "Alonso Ruizpalacios"
  ],
  [
    "Cabaret",
    1972,
    "Bob Fosse"
  ],
  [
    "Forrest Gump",
    1994,
    "Robert Zemeckis"
  ],
  [
    "Rome, Open City",
    1945,
    "Roberto Rossellini"
  ],
  [
    "It Happened One Night",
    1934,
    "Frank Capra"
  ],
  [
    "Vampire Hunter D: Bloodlust",
    2000,
    "Yoshiaki Kawajiri"
  ],
  [
    "Once Upon a Time in Anatolia",
    2011,
    "Nuri Bilge Ceylan"
  ],
  [
    "Ali: Fear Eats the Soul",
    1974,
    "Rainer Werner Fassbinder"
  ],
  [
    "The Exterminating Angel",
    1962,
    "Luis Buñuel"
  ],
  [
    "The Second Mother",
    2015,
    "Anna Muylaert"
  ],
  [
    "Mother",
    2009,
    "Bong Joon-ho"
  ],
  [
    "Butch Cassidy and the Sundance Kid",
    1969,
    "George Roy Hill"
  ],
  [
    "Touch of Evil",
    1958,
    "Orson Welles"
  ],
  [
    "Black Swan",
    2010,
    "Darren Aronofsky"
  ],
  [
    "Memoir of a Snail",
    2024,
    "Adam Elliot"
  ],
  [
    "Obsession",
    2025,
    "Trey Edward Shults"
  ],
  [
    "Nashville",
    1975,
    "Robert Altman"
  ],
  [
    "Carandiru",
    2003,
    "Héctor Babenco"
  ],
  [
    "The Green Ray",
    1986,
    "Éric Rohmer"
  ],
  [
    "Phantom Thread",
    2017,
    "Paul Thomas Anderson"
  ],
  [
    "My Night at Maud's",
    1969,
    "Éric Rohmer"
  ],
  [
    "The Spirit of the Beehive",
    1973,
    "Víctor Erice"
  ],
  [
    "Blue Giant",
    2023,
    "Yuzuru Tachikawa"
  ],
  [
    "On the Waterfront",
    1954,
    "Elia Kazan"
  ],
  [
    "12 Years a Slave",
    2013,
    "Steve McQueen"
  ],
  [
    "Mad Max: Fury Road",
    2015,
    "George Miller"
  ],
  [
    "All About Lily Chou-Chou",
    2001,
    "Shunji Iwai"
  ],
  [
    "Lilya 4-ever",
    2002,
    "Lukas Moodysson"
  ],
  [
    "The Great Escape",
    1963,
    "John Sturges"
  ],
  [
    "After Life",
    1998,
    "Hirokazu Kore-eda"
  ],
  [
    "Silenced",
    2011,
    "Hwang Dong-hyuk"
  ],
  [
    "Short Term 12",
    2013,
    "Destin Daniel Cretton"
  ],
  [
    "Cool Hand Luke",
    1967,
    "Stuart Rosenberg"
  ],
  [
    "Alice in the Cities",
    1974,
    "Wim Wenders"
  ],
  [
    "Through a Glass Darkly",
    1961,
    "Ingmar Bergman"
  ],
  [
    "Fallen Angels",
    1995,
    "Wong Kar-wai"
  ],
  [
    "Mulan",
    1998,
    "Tony Bancroft, Barry Cook"
  ],
  [
    "Star Wars",
    1977,
    "George Lucas"
  ],
  [
    "The Killer",
    1989,
    "John Woo"
  ],
  [
    "Synecdoche, New York",
    2008,
    "Charlie Kaufman"
  ],
  [
    "Oppenheimer",
    2023,
    "Christopher Nolan"
  ],
  [
    "American History X",
    1998,
    "Tony Kaye"
  ],
  [
    "The Virgin Spring",
    1960,
    "Ingmar Bergman"
  ],
  [
    "Punishment Park",
    1971,
    "Peter Watkins"
  ],
  [
    "Hiroshima Mon Amour",
    1959,
    "Alain Resnais"
  ],
  [
    "Brokeback Mountain",
    2005,
    "Ang Lee"
  ],
  [
    "Past Lives",
    2023,
    "Celine Song"
  ],
  [
    "Pride",
    2014,
    "Matthew Warchus"
  ],
  [
    "Eat Drink Man Woman",
    1994,
    "Ang Lee"
  ],
  [
    "The Wolf House",
    2018,
    "Cristóbal León, Joaquín Cociña"
  ],
  [
    "The Great Silence",
    1968,
    "Sergio Corbucci"
  ],
  [
    "Society of the Snow",
    2023,
    "J. A. Bayona"
  ],
  [
    "Sentimental Value",
    2025,
    "Joachim Trier"
  ],
  [
    "The Intouchables",
    2011,
    "Olivier Nakache, Éric Toledano"
  ],
  [
    "The Gold Rush",
    1925,
    "Charlie Chaplin"
  ],
  [
    "Pan's Labyrinth",
    2006,
    "Guillermo del Toro"
  ],
  [
    "Raiders of the Lost Ark",
    1981,
    "Steven Spielberg"
  ],
  [
    "Dial M for Murder",
    1954,
    "Alfred Hitchcock"
  ],
  [
    "Mustang",
    2015,
    "Deniz Gamze Ergüven"
  ],
  [
    "Three Colours: Blue",
    1993,
    "Krzysztof Kieślowski"
  ],
  [
    "Midnight Cowboy",
    1969,
    "John Schlesinger"
  ],
  [
    "Sanjuro",
    1962,
    "Akira Kurosawa"
  ],
  [
    "3 Idiots",
    2009,
    "Rajkumar Hirani"
  ],
  [
    "The Leopard",
    1963,
    "Luchino Visconti"
  ],
  [
    "Nine Queens",
    2000,
    "Fabián Bielinsky"
  ],
  [
    "Seconds",
    1966,
    "John Frankenheimer"
  ],
  [
    "The Hidden Fortress",
    1958,
    "Akira Kurosawa"
  ],
  [
    "3 Women",
    1977,
    "Robert Altman"
  ],
  [
    "Pink Floyd: The Wall",
    1982,
    "Alan Parker"
  ],
  [
    "Terrorizers",
    1986,
    "Edward Yang"
  ],
  [
    "The Sword of Doom",
    1966,
    "Kihachi Okamoto"
  ],
  [
    "The Conversation",
    1974,
    "Francis Ford Coppola"
  ],
  [
    "Fargo",
    1996,
    "Joel Coen"
  ],
  [
    "Kiki's Delivery Service",
    1989,
    "Hayao Miyazaki"
  ],
  [
    "Scarface",
    1983,
    "Brian De Palma"
  ],
  [
    "I Dream in Another Language",
    2017,
    "Ernesto Contreras"
  ],
  [
    "Monty Python and the Holy Grail",
    1975,
    "Terry Gilliam, Terry Jones"
  ],
  [
    "There's Still Tomorrow",
    2023,
    "Paola Cortellesi"
  ],
  [
    "My Father's Shadow",
    2025,
    "Akinola Davies Jr."
  ],
  [
    "Breaking the Waves",
    1996,
    "Lars von Trier"
  ],
  [
    "One Battle After Another",
    2025,
    "Paul Thomas Anderson"
  ],
  [
    "How to Train Your Dragon",
    2010,
    "Dean DeBlois, Chris Sanders"
  ],
  [
    "One Sings, the Other Doesn't",
    1977,
    "Agnès Varda"
  ],
  [
    "Phantom of the Paradise",
    1974,
    "Brian De Palma"
  ],
  [
    "Harry Potter and the Prisoner of Azkaban",
    2004,
    "Alfonso Cuarón"
  ],
  [
    "Wild Tales",
    2014,
    "Damián Szifron"
  ],
  [
    "Pride & Prejudice",
    2005,
    "Joe Wright"
  ],
  [
    "Rope",
    1948,
    "Alfred Hitchcock"
  ],
  [
    "The Servant",
    1963,
    "Joseph Losey"
  ],
  [
    "McCabe & Mrs. Miller",
    1971,
    "Robert Altman"
  ],
  [
    "Faust",
    1926,
    "F. W. Murnau"
  ],
  [
    "Le Bonheur",
    1965,
    "Agnès Varda"
  ],
  [
    "The Umbrellas of Cherbourg",
    1964,
    "Jacques Demy"
  ],
  [
    "Arrival",
    2016,
    "Denis Villeneuve"
  ],
  [
    "Redline",
    2009,
    "Takeshi Koike"
  ],
  [
    "Reservoir Dogs",
    1992,
    "Quentin Tarantino"
  ],
  [
    "Souleymane's Story",
    2024,
    "Boris Lojkine"
  ],
  [
    "Mr. Smith Goes to Washington",
    1939,
    "Frank Capra"
  ],
  [
    "In Cold Blood",
    1967,
    "Richard Brooks"
  ],
  [
    "Get Out",
    2017,
    "Jordan Peele"
  ],
  [
    "12th Fail",
    2023,
    "Vidhu Vinod Chopra"
  ],
  [
    "About Elly",
    2009,
    "Asghar Farhadi"
  ],
  [
    "Short Cuts",
    1993,
    "Robert Altman"
  ],
  [
    "Fitzcarraldo",
    1982,
    "Werner Herzog"
  ],
  [
    "Love Letter",
    1995,
    "Shunji Iwai"
  ]
];
