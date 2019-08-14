// Characters

const suspects = {
    mrGreen: {
        first_name: "Jacob",
        last_name: "Green",
        color: "green",
        description: "He has a lot of connections",
        age: 45,
        image:
            "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation: "Entrepreneur"
    },

    drOrchid: {
        first_name: "Doctor",
        last_name: "Orchid",
        color: "white",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age: 26,
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation: "Scientist"
    },
    profPlum: {
        first_name: "Victor",
        last_name: "Plum",
        color: "purple",
        description: "Billionare video game designer",
        age: 22,
        image:
            "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation: "Designer"
    },
    missScarlet: {
        first_name: "Kasandra",
        last_name: "Scarlet",
        color: "red",
        description: "She is an A-list movie star with a dark past",
        age: 31,
        image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation: "Actor"
    },
    mrsPeacock: {
        first_name: "Eleanor",
        last_name: "Peacock",
        color: "blue",
        description:
            "She is from a wealthy family and uses her status and money to earn popularity",
        age: 36,
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation: "Socialité"
    },

    mrMustard: {
        first_name: "Jack",
        last_name: "Mustard",
        color: "yellow",
        description:
            "He is a former football player who tries to get by on his former glory",
        age: 62,
        image:
            "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation: "Retired Football player"
    }
};
// Weapons

const weapons = {
    rope: 10,
    knife: 8,
    candlestick: 2,
    dumbbell: 30,
    poison: 2,
    axe: 15,
    bat: 13,
    trophy: 25,
    pistol: 20
};

// const keys = Object.keys(weapons);

// const weaponsArray = keys;
// const roomsArray = keys;

// console.log(weaponsArray);

// name: rope        ---   weight: 10
// name: knife       ---   weight: 8
// name: candlestick ---   weight: 2
// name: dumbbell    ---   weight: 30
// name: poison      ---   weight: 2
// name: axe         ---   weight: 15
// name: bat         ---   weight: 13
// name: trophy      ---   weight: 25
// name: pistol      ---   weight: 20

// Rooms
const rooms = {
    name1: "Dining Room",
    name2: "Conservatory",
    name3: "Kitchen",
    name4: "Study",
    name5: "Library",
    name6: "Billiard Room",
    name7: "Lounge",
    name8: "Ballroom",
    name9: "Hall",
    name10: "Spa",
    name11: "Living Room",
    name12: "Observatory",
    name13: "Theater",
    name14: "Guest House",
    name15: "Patio"
};

// Characters Collection
var charactersArray = [
    suspects.mrGreen,
    suspects.drOrchid,
    suspects.profPlum,
    suspects.missScarlet,
    suspects.mrsPeacock,
    suspects.mrMustard
];

// Rooms' Collection
var roomsArray = [
    rooms.name1,
    rooms.name2,
    rooms.name2,
    rooms.name4,
    rooms.name5,
    rooms.name6,
    rooms.name7,
    rooms.name8,
    rooms.name9,
    rooms.name10,
    rooms.name11,
    rooms.name12,
    rooms.name13,
    rooms.name14,
    rooms.name15
];

// Weapons Collection
var weaponsArray = [
    weapons.rope,
    weapons.knife,
    weapons.candlestick,
    weapons.dumbbell,
    weapons.poison,
    weapons.axe,
    weapons.bat,
    weapons.trophy,
    weapons.pistol
];

function randomSelector(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

console.log(randomSelector(roomsArray));

const misteryEnvelope =
    randomSelector(charactersArray.suspects.first_name) +
    randomSelector(charactersArray.suspects.last_name) +
    " killed Mr. Boddy using the " +
    randomSelector(weaponsArray.weapons) +
    " in the " +
    randomSelector(roomArray.rooms);

function pickMistery(misteryEnvelope) {
    const misteryEnvelope =
        randomSelector(charactersArray.suspects.first_name) +
        randomSelector(charactersArray.suspects.last_name) +
        " killed Mr. Boddy using the " +
        randomSelector(weaponsArray.weapons) +
        " in the " +
        randomSelector(roomArray.rooms);

    return misteryEnvelope;
}
console.log(pickMistery(misteryEnvelope));
