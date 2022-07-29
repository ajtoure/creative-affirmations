//1. program takes user input
//will take input for their name, an adjective, and a noun and store them in an object
let userInput = (userName, adjective, noun) => {
    return {
        userName,
        adjective,
        noun
    }
}

let newAff = userInput('aj', 'divine', 'being')

console.log(newAff);

console.log(newAff.userName)
//2. program randomly selects quote from list
let quotes = [
    //array of empty quotes which will use template literals to plug in the user's input and generate new affirmations
    `Every day in every way I'm getting better and better`,
    `Everything I need is coming to me easily and effortlessly`,
    `I have everything I need to enjoy my here and now`,
    `I am the master of my life`,
    `Everything I need is already within me`,

    `Perfect ${noun} is in my heart`,
    `I am whole and complete in myself`,
    `I love and appreciate myself just as I am`,
    `I accept all my feelings as part of me`,
    `I love to love and be loved`,
    `The more I love myself, the more love I have to give others`,
    `I now give and receive ${noun} freely`,
    `I am attracting loving, satisfying relationships into my life`,
    `My relationship with my loved one is growing happier and more fulfilling every day`,
    `I now have a perfect, satisfying ${noun}`,
    `I love doing my work, and I am richly rewarded, creatively and financially`,
    `I am an open channel of creative energy`,
    `I am dynamically self-expressive`,
    `I enjoy relaxing and having fun`,
    `I have enough time, energy, wisdom, and abundance to accomplish all my desires`,
    `I am always in the right place at the right time, successfully engaged in the right activity`,
    `It's okay for me to have everything I want`,
    `This is a rich universe and there's plenty for all of us`,
    `Abundance is my natural state of being. I accept it now!`,
    `Infinite riches are now freely flowing into my life`,
    `Every day I am growing more financially prosperous`,
    `The more I have, the more I have to give`,
    `The more I give, the more I receive, and the happier I feel`,
    `I am relaxed and centered. I have plenty of time for everything`,
    `I am vibrantly healthy and radiantly beautiful`,
    `I am open to receiving all the blessings of this abundant universe!`,
    `_________ is coming to me, easily and effortlessly`,
    `The light within me is exacting miracles here and now`,
    `I give thanks for divine restoration in mind, body, soul and affairs of the heart`,
    `All things are now working together for good in my life`,
    `I am now attuned to the higher purpose in my life`,
    `I recognize, accept, and follow the divine plan of my life as it is revealed to me step by step`
]

let suggestNoun = [
    'wisdom', 'love',
]

//A function will randomly select the affirmation array from the quotes
//A function will plug in the data from the input object into the chosen array and store it in a variable called "affirmation"
//3. The affirmation variable will print in the visual console of the page
//4. a reset button will appear to put everything back to zero

//THURS
//1. hook up to git
//2. complete main functions
//FRIDAY
//3. push changes to git
//4. hook up the functions and initiate them
//5. push changes to git
//SATURDAY
//6. edit css
//7. push changes to git
//SUNDAY
//8. complete aesthetic site functions
//9. publish site to git pages
//NEXT WEEK
//10. test ux with friends
//NEXT FRIDAY
//11. make final changes
//NEXT SUNDAY
//12. Publish a final time