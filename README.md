# The Scheduler App

This web application is designed to give you a hand in scheduling out your daily activities. It's designed to show you the current date and then, below, it gives you a basic  hourly scheduler for a standard business day (0900 - 1700, if you use military time). You are able to input your hourly tasks or activities and then, using the blue save button, you can save that entry into the scheduler. If you reload the scheduler, your entries will persist, until you decide to delete them - and save out the deleted entry.

For future updates to this application, the page could include a "reset" button to erase out all entries for a new day of tasks.

In creating this application, there were 3 tricky pieces that inhibited functionality:

1. Coding the application such that it could take in the current time and highlight the corresponding hourly block in red, then highlight the past timeblocks in grey and the future timeblocks in green. Since there isn't an easy way to compare time values as greater than or less than, a series of `if`, `if else` and an `else` statements were used to style the timeblocks based on their past, current or future state.

2. Storing the saved information into localStorage. The goal was to save the data in a way that it could be stored in localStorage to be accessed for later. 

3. Accessing localStorage data and then displaying it on the page, after a page load. This persists in being a challenge because when you run a function to access localStorage right at page load, the function has to take into account an empty key in localStorage, if nothing has been saved already. If the code tries to pull from an empty localStorage key, it will return null and create bugs in your code

Helpful Resources used for this Application:

- [Managing Remote Repositories](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)

- [Moment.js](https://momentjs.com/)

- [Adding Classes in jquery](https://api.jquery.com/addclass/)

- [textarea tag in html](https://www.w3schools.com/tags/tag_textarea.asp)
        - P.S. I had no idea that there was a textarea tag. Something new for the books...

- [Accessing the id attribute](https://stackoverflow.com/questions/3239598/how-can-i-get-the-id-of-an-element-using-jquery)

- [Accessing text in element with jquery](https://api.jquery.com/text/)
        - Also important to note the difference between accessing text and accessing the value of a textarea element.

- [Save Button Icon](https://fontawesome.com/v5/icons/save?s=solid)

- [Event Target vs. currentTarget](https://www.carlrippon.com/event-target-v-current-target/#:~:text=target%20is%20the%20root%20element,the%20element%20handling%20the%20event.)
