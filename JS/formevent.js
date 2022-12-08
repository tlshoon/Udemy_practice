const tweetForm = document.querySelector('#tweetForm')
const tweetscontainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit',function(e){
    e.preventDefault();  // 이벤트 객체에 사용하면 기본 동작을 방지
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';

    // console.log("SUBMIT~!!!")
    
})

const addTweet = (username,tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(`-${tweet}`)
    console.log(newTweet)
    tweetscontainer.append(newTweet)   
}