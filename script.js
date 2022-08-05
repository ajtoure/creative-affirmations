const app = {};

app.quotes = [
    `Every day in every way I'm getting better and better`,
    `Everything I need is coming to me easily and effortlessly`,
    `I have everything I need to enjoy my here and now`,
    `I am the master of my life`,
    `Everything I need is already within me`,
    `Perfect wisdom is in my heart`,
    `I am whole and complete in myself`,
    `I love and appreciate myself just as I am`,
    `I accept all my feelings as part of me`,
    `I love to love and be loved`,
    `The more I love myself, the more love I have to give others`,
    `I now give and receive love freely`,
    `I am attracting loving, satisfying relationships into my life`,
    `My relationship with my loved one is growing happier and more fulfilling every day`,
    `I now have a perfect, satisfying occupation`,
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

app.angelNumbers = [{number: 000, meaning: 'Take action now! If you do, it will soon come to an end.'}, {number: 0000, meaning: 'Take action now! If you do, it will soon come to an end.'}, {number: 1010, meaning: 'Hold up your head. Good times are on their way'}, {number: 111, meaning: 'An energetic gateway has opened for you that will manifest your dreams into reality.'}, {number: 1111, meaning: 'Assist the human race with your inherent powers.'}, {number: 1212, meaning: 'Have faith and trust in your divine life purpose.'}, {number: 1234, meaning: 'Your work is paying off, you will find personal fulfillment.'}, {number: 1313, meaning: 'You are surrounded by loving, positive energies. Express yourself with clarity and purpose. Be a positive light to others'}, {number: 1414, meaning: 'The things you require will manifest when needed in your life'}, {number: 144, meaning: 'You must forge straight ahead, and do not bow to any obstacle.'}, {number: 202, meaning: 'You need to maintain balance and equilibrium. Bring things to fruition both spiritually and materially'}, {number: 222, meaning: 'You must keep a strong faith and stand strong in your personal truths.'}, {number: 2222, meaning: 'Do not put your energies into negativity, be aware that all is being working out by spirit for the highest good of all involved. '}, {number: 333, meaning: 'You need to work on reconnecting with your inner purpose and the deeper needs of your soul.'}, {number: 3333, meaning: 'The soul is energy, and the main path to growth and meaning.'}, {number: 444, meaning: 'There are angels around you, watching over you, guiding your path, and protecting your thoughts.'}, {number: 4444, meaning: 'There are powerful forces around you, watching over you, guiding your path, and protecting you.'}, {number: 555, meaning: 'A profound change is on its way towards you.'}, {number: 5555, meaning: 'Something big is on the way, or in progress right now.'}, {number: 666, meaning: `You are about to experience dynamic energy that will call for an unforeseen transformation`}, {number: 6666, meaning: 'Good things are on the runway ahead.'}, {number: 717, meaning: 'You should trust your intuition when it comes to decision-making.'}, {number: 72, meaning: `Your social status will improve at work`}, {number: 727, meaning: `You must focus on yourself. Now is the time to think about what you want out of life, who you want to be, and what you want to do.`}, {number: 777, meaning: `Its time to get rewards for your efforts.`}, {number: 7777, meaning: `You are grown enough to make rational decisions and create positive changes in your life.`}, {number: 808, meaning: `The blessings the universe intends to give you are in balance or in the context of relationships.`}, {number: 848, meaning: `You should expect abundance and wealth to come soon because of your positive actions and attitude in the recent past.`}, {number: 888, meaning: `You must prepare in times of plenty so you do not lack in times of scarcity.`}, {number: 8888, meaning: `You must be grateful for all the blessings and share them with the ones who dont have as much as you.`}, {number: 911, meaning: `You're ready to shine your divine light into the world`}, {number: 944, meaning: `You must focus on being your highest and best self and speak and live your truths.`}, {number: 999, meaning: `One cycle of your life mission is coming to an end, as another important new phase is beginning.`}, {number: 9999, meaning: `You should be ready for a slew of fresh opportunities and blessings`}]

app.randomizeQuote = array => {
    return array[Math.floor(Math.random() * array.length)];
}
app.newQuote = app.randomizeQuote(app.quotes);
app.randomizeNumber = array => {
    return array[Math.floor(Math.random() * array.length)];
}
app.newNumb = app.randomizeNumber(app.angelNumbers);
app.createOutput = (angelNumb, affirmation) => {
    return {
        angelNumber: angelNumb.number,
        meaning: angelNumb.meaning,
        affirmation: affirmation
    }
}
app.finalOutput = app.createOutput(app.newNumb, app.newQuote);
app.logMsg = (finalMsg) => {
    return `Your angel number is: ${finalMsg.angelNumber}
            It means that ${finalMsg.meaning}
            Repeat this affirmation today: ${finalMsg.affirmation}`;
}
app.mainConsole = document.querySelector('.console');
app.form = document.querySelector('form')
app.form.addEventListener('submit', function(){
    alert('wow you clicked it wow!');
})
app.init = () => {
    
}