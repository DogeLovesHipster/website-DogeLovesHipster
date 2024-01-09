# CS333-lab1
## HTML CSS JavaScript review
Assignment deliverables: Clone repo, complete assignment, push repo back to GitHub, <b>create doc with 1)link to github repo 2)link to live site on webpages or your own site and submit to Moodle</b>

The purpose of this lab is to review/familiarize yourself with Github, create a simple javascript-enabled single page website with VS Code
The end result of the lab is an index.html page of a dice game for two players, when you refresh, each of the dice images displays with a random side showing. Below the two dice, is text that either displays: Player 1 wins! or Player 2 wins! or Draw!

[X] 1. Clone this repo: In VSCode terminal, make sure you are in your home directory. Get repo link and git clone <repo link>

[X] 2. View your html page in preview pane (extension you installed)

[X] 3. Review: Add your name to the footer, go into the CSS and change the font and background colors

[X] 4. Create an index.js file in your VSCode repo and link to it in your html page. Best place for the link to the index.js file is right above the `</body>` tag

[X] 5. if you have copilot, you can cmd-i and ask copilot to 'link to js file here' and it will generate the line of code

[X] 6. Add the 6 die images to each of the player one player two in the html file
The JS code in the index.js page:

[X] 7. Create a function in index.js that 'rolls the dice' by creating variables by getting references to two dice images (most likely using document.getElementbyId)

[X] 8. generate random numbers from 1 to 6 for the dice, and set the source attributes of the dice images based on the random numbers

[X] 9. In the index.html page a button will call the rollDice function and display the two dice side by side

[???] 10. Below the dice, some text will display whether player 1 (left die) or player 2 (right die) wins.

[X] 11. Check your work, make sure on refresh and clicking the button again, a new game plays. Make your dice an appropriate size and layout.

[X] 12. Look up any methods that you do not understand.

[ ] 13. <b> Save changes, stage changes, push code back to repo. Deploy code to a website. Send links to both in a document submitted to Moodle.</b>
`git add .`
`git commit -m "add message here"`
`git push origin main`

