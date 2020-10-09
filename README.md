# Spaced Repetition: Spanish SRS
### by [John Bowser](https://github.com/jgbowser) and [Tiffany Summerford](https://github.com/breakfastatiffs)   
[Spanish SRS](https://language-spaced-repetition.vercel.app/register) ||
[Client GitHub](https://github.com/thinkful-ei-quail/SR-Client-johnb-tiff) ||
[Server GitHub](https://github.com/thinkful-ei-quail/SR-API-johnb-tiff)  
 
### About:  
Spaced repetition is an advanced learning technique that enhances ones learning through an algorithm based upon repetition. The learner is quizzed on a sequence of words and when the learner answers incorrectly, they will see the word within a shorter time period versus if they answer correctly, they will see the word in a longer time period. With the number of Spanish speakers on the rise and halloween right around the corner, Spanish SRS was built with amusement and utility in mind.  

### How to use:  
1. Create a username and login.<br>
<img src='/src/images/README_assets/signup.png' width='300' />  <img src='/src/images/README_assets/login.png' width='300' /><br>              
2. View the list of words to learn on the 'Dashboard page', then click the 'Start practicing' link to get started.<br>
<img src='/src/images/README_assets/dashboard.png' width='300' /><br>  
3. Once on the 'Learning Route', the user will be presented with a spanish word and will then need to type in what they believe the translation is. If they guess correct, the user will be congratulated and will gain a point towards 'correct guesses' and the first word will then be pushed further into the list. If they guess incorrect, the user will gain a point towards 'incorrect guesses' and the word will be pushed to the next, next item in the list. This process continues to loop until the user is ready to take a break and log off.<br>
<img src='/src/images/README_assets/learn.png' width='300' /><br>
<img src='/src/images/README_assets/correct.png' width='300' />  <img src='/src/images/README_assets/incorrect.png' width='300' /><br>
4. The user's score and correct/incorrect guesses will be saved in the database, so each time they log on they may begin where they left off.

### Tech Stack:  
Front End: React, JavaScript, Cypress, CSS3, HTML5, Vercel
 