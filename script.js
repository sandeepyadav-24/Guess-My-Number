'use strict';

// Actual Number Generator
let actualNumber = Math.floor(Math.random() * 20);

//Score
let score = 20;
let highScore = 0;

//let score = document.querySelector('.score').textContent;

//High Score
//let highScore = document.querySelector('.highscore').textContent;

//Check Button Press
document.querySelector('.check').addEventListener('click', function () {
  //Guess Number
  const guessNumber = document.querySelector('.guess').value;
  // When Check Box Is Empty
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'NO Number';
  }

  // When Check Box Number MAtches With Actual Number
  else if (actualNumber == guessNumber) {
    //Changing the Message
    document.querySelector('.message').textContent = 'Correct Answer';

    //Changing the Background Colour
    document.querySelector('body').style.backgroundColor = '#60b347';

    //High Score and Low Score Comparison
    if (score > highScore) {
      //matching HighScore and score
      document.querySelector('.highscore').textContent = score;
    }
    //Giving HighScore
    highScore = score;

    //Setting Correct Number to ?
    document.querySelector('.number').textContent = guessNumber;

    //Enlarging the Display Box
    document.querySelector('.number').style.width = '25rem';
  }

  // Whne Guess Number is less than Actual NUmber
  else if (guessNumber < actualNumber) {
    //Checking Score iS +VE
    if (score > 0) {
      //Decreasing Score
      score--;
      document.querySelector('.score').textContent = score;

      //When Guess Number is Close TO Actual Number
      if (actualNumber - guessNumber <= 2) {
        document.querySelector('.message').textContent = ' Little low';
      }

      //When Guess Number Is Far from Actual Number
      else {
        document.querySelector('.message').textContent = 'Too low';
      }
    } else {
      document.querySelector('.message').textContent = 'You Loose';
    }
  }
  // When Guess Number is greater than Actual Number
  else if (guessNumber > actualNumber) {
    //Checking Score is -VE
    if (score > 0) {
      //Decreasing Score
      score--;
      document.querySelector('.score').textContent = score;

      //When Guess Number is Close TO Actual Number
      if (guessNumber - actualNumber <= 2) {
        document.querySelector('.message').textContent = ' Little high';
      }

      //When Guess Number Is Far from Actual Number
      else {
        document.querySelector('.message').textContent = 'Too high';
      }
    } else {
      document.querySelector('.message').textContent = 'You Loose';
    }
  }
});

//Again Button Functionality
document.querySelector('.again').addEventListener('click', function () {
  //Restoring the Score
  score = 20;

  //Reassigning the actual Number
  actualNumber = Math.floor(Math.random() * 20);

  //Restoring the background Color
  document.querySelector('body').style.backgroundColor = '#222';

  //Restoring the Score
  document.querySelector('.score').textContent = score;

  //Restoring the Message
  document.querySelector('.message').textContent = 'Start guessing...';

  //Restoring the guess value
  document.querySelector('.guess').value = '';

  //Restoring the Box
  document.querySelector('.number').textContent = '?';

  //Restoring the Size of the Box
  document.querySelector('.number').style.width = '15rem';
});
