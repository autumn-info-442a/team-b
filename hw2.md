# Homework 2

## Problem Statement

While the COVID-19 pandemic spans across the globe, the situation varies from country to country, state to state, and even county by county. Total case and death numbers are widely reported in the news and on social media, but finding local/county case information like total cases, death, and risk factors can be challenging. People can use the COVID-19 tracker provided by the CDC, but if users want to know about the COVID status in their own specific county, since there is no search function, users have to manually scroll through a long list of counties in America or use the map functionality to slowly hover through each area to find a specific county. This can be daunting for users who live in a state with many counties for example Texas which has a total of 254 counties. The time it takes to find a location could lead to a user getting discouraged and giving up, or a user not being able to check as frequently. Without the search functionality users can end up spending more time looking for their specific county COVID-19 cases, death, and risk factors which are important information to concerned individuals, families, and essential workers who may be more at risk to exposure from their external environment, helping them to make informed decisions and understand the risks associated with leaving their homes. Being able to search for counties would allow users to quickly and more frequently check the COVID-19 statistics in their area or other areas they want to be informed about, so they can be informed about the risk for themselves and people they care about.

## Solution

This section must detail every design decision necessary for engineering your solution, including every screen, every error, every algorithmic functionality, and every detail about the textual and visual content of your design (aside from content created by users). If your solution is software, a software engineer should be able to read your specification and build your solution without asking you any questions. Embed mockups of screens throughout the text of this section to visually specify your design. Because of the short timeline, it's okay if these are hand-sketched.

We envision a website application that shows the risk levels of different counties as well as states in America. Users will be able to search for a specific county, view COVID related risk information, and choose to add that county to their dashboard. For each county, users will be able to see new cases in the last 7 days, total cases, and total death cases. Users would also have the choice to sign up for an account so that their saved locations appear on their dashboard.

The main screen prompts the user to search a county within America. Below the search bar, there is also a section that mentions the global COVID statistics that users can click into for more information.

![Search page with search box and global statistics](img/hw2/search.png)

The user can search for a county by typing in the search bar, the search bar has autocomplete so that related location with the words typed in will appear. The user can then choose a location from the dropdown list or hit the magnifying glass to search. If the user does not type in an existing location, the page will have no results.

![Search field with autocomplete suggestions for counties below](img/hw2/search-autocomplete.png)
![Search with no results message and an error icon](img/hw2/search-no-results.png)

After the user searches for a county, the website will pop up related results. Each box contains important COVID information such as new cases, total cases, and total death cases. The color in each box represents the risk levels associated with each county (we have not yet figured out the color scheme we want to use). If a user were to search for another location, the results on the screen will not disappear until the user hits enter or the magnifying glass.

![Search results, two counties, King County WA and King County MI. Shows new cases, total cases, and total deaths for each beside a chart](img/hw2/search-results.png)

If the user wants to add and save a location to their dashboard, the user clicks on the add button and a pop up will prompt the user to sign up for an account. The user can choose to continue as a guest; however, the location cannot be saved to a dashboard.

![Modal asking if you would like to save your location. Two buttons: Sign Up and Continue as Guest](img/hw2/signup.png)

If the user wishes to sign up for an account, it will prompt them to input their first name, email, and a password. If the user wishes to continue as a guest, they would only be able to view each county’s statistics and not save any locations to the home dashboard.

![Sign up form with fields for full name, email, and password](img/hw2/signup-page.png)

Once the user signs up for an account, the user will be able to see all added locations in their dashboard. The user can also click the “Home” icon to be taken to their dashboard. This allows the user to monitor COVID situations in each county without clicking to additional sources. There is also a close button on the top right corner of each location allowing the user to quickly delete any location they no longer wish to see. The profile icon on the top right corner, will allow the user to log out or edit their existing profile information.

![Dashboard showing saved locations/counties, with new cases, total cases, and total deaths](img/hw2/dashboard.png)

If the user wishes to see more information, the user can simply click into each box which will display detailed information as well as external links to guide the user to other additional information that we do not provide on our site.

![More info for a county, showing risk level, new cases in last 7 days, total cases, total deaths, last updated, two charts, and links to external sources](img/hw2/more-info.png)

The goal of our website is not to give all COVID related information, it is to provide simple and essential information for users to understand and assess their risk in each area.
