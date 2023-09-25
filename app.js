const votingForm = document.querySelector('.voting-form');
const voteOptions = document.querySelector('.vote-options');
const userName = document.querySelector('.user-name');
const userId = document.querySelector('.user-id');
const resultDiv = document.querySelector('.vote-results');

const validUserIds = new Map([
    ['Roman', '12345678'],
    ['Stasio', '11111111'],
    ['Barti', '12341234'],
    ['Justine', '00000001']
]);

const voteCounts = new Map();
voteCounts.set('Option 1', 0);
voteCounts.set('Option 2', 0);
voteCounts.set('Option 3', 0);

//users who already voted
const votedUsers = new Set();

//check,update results
const voting = (e) => {
    e.preventDefault();
    
    const user = userName.value;
    const password = userId.value;
    const select = voteOptions.value;

    if(validUserIds.get(user) === password) {
        //voted?
        if( votedUsers.has(user)){
            alert('You have already voted!');
        } else {
            //valid vote
            votedUsers.add(user);
            voteCounts.set(select, voteCounts.get(select)+1);
        }
    } else {
        alert('Incorrect data');
    }

    updateResults();
};

//display results
const updateResults = () => {
    let output = '<h1>Results:<br></h1>';
    for (const [option,count] of voteCounts){
       output += `<h2> ${option}: ${count} votes</h2>`;
    }
     resultDiv.innerHTML = output;
};

votingForm.addEventListener('submit', voting);