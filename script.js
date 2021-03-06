//an array of random hero's ability/powers
const heroPower = ["Sun Breathe Sword Style", "Lightning Breathe Sword Style", "Beast Breathe Sword Style", "One-hit Punch", "Cyborg Martial Artist", "Soul Reaper", "Ultra Instinct", "G.O.D.", "One-for-All Quirk", "Explosion Quirk", "Fire and Ice Quirk", "Spider-based power", "Super-human enhanced power", "Genius-level intellect/ expert detective skilled martial artist", "Ring based on imagination/courage", "Super Speed", "Gamma-radiation", "magical hammer", "mechanical suit", "magical sword", "master assassin", "master archer", "master wizard"];
//an array of random hero's names/role
const heroName = ["Tanjiro Kamado - DemonSlayer", "Zenitsu Agatsuma - DemonSlayer", "Inosuke Hashibira- DemonSlayer", "Saitama - One Punch Man", "Genos - Cyborg Hero", "Ichigo Kurosaki - Soul Reaper", "Goku - Saiyan from Earth", "Vegeta - Saiyan Prince", "Izuku Midoriya - Hero (Deku)", "Katsuki Bakugo - Hero (DynaMight)", "Shoto Todoroki - Hero (Shoto)", "SpiderMan", "Superman", "Batman", "Green Lantern", "The Flash", "The Hulk", "Thor Odinson", "Iron-Man", "Black Widow", "Hawkeye", "Dr. Strange"];
//an array of catchphrases
const heroPhrase = ["If You Can't Tell The Difference Between Good Demons And Bad Ones, Then You Don't Deserve To Be A Hashira!", "Don't ever give up. Even if it's painful, even if it's agonizing, don't try to take the easy way out.", "BOAR ASSAULT!", "100 pushups, 100 sit-ups, 100 squats, and a 10km run!", "Even the most powerful weapon would be meaningless if its wielder is weak", "Become strong not just for your own sake, but for your friends", "I am the hope of the universe...I am the answer to all living things that cry out for peace...I am the protector of the innocent...I am the light in the darkness...I am truth. Ally to good...Nightmare to you!", "There’s only one certainty in life. A strong man stands above and conquers all!", "At first, this quirk was something that held him back. But still, he made his power. He got as much experience as he could and learned how to predict people's actions", "I Only Look At Victory! That's All!", "Never forget who you want to become.", "With Great Power, Comes Great Responsibility.", "Up, up, and away", "This city needs me", "In brightest day, in blackest night, no evil shall escape my sight. Let those who worship evil's might, beware my power, Green Lantern's light!", "I am the fastest man alive", "HULK SMASH!!", "DO I LOOK TO BE IN A GAMING MOOD?", "I am Iron Man", "Pain only makes us stronger.", "None of this makes sense. But I'm going back out there because it's my job.", "We never lose our demons, Mordo. We only learn to live above them."];


//combine the data from arrays 
const combineHero = () => {

    //create random index that can be applied to each array
    const getRandomIndx = (arr) => {
        return Math.floor(Math.random() * arr.length);
    }

    let hName = heroName[getRandomIndx(heroName)];
    let hPower = heroPower[getRandomIndx(heroPower)];
    let hPhrase = heroPhrase[getRandomIndx(heroPhrase)];

    let combinedString = "Hey! Its " + hName + "! This is a " + hPower + " type of hero! Here's what he says: " + hPhrase + ". Wow, what a hero!"
    console.log(combinedString);

}

combineHero();