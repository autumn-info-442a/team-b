# Plan

## How will you coordinate your work?

### Who will coordinate the work?

Grady, the project manager, will coordinate the work overall, making sure that the team is on track to meet the timeline and ensuring that the requirements are met. The developer, Trey, will coordinate development-specific work, such as reviewing and approving all pull requests and consulting on development-related questions by other team members.

### What will their project management practices be?

We will use Agile methodologies; we will do 2 week sprints with 2 check-ins per week. For our twice weekly check-ins, we will have a stand-up style meeting led by the project manager. Each person will update what they&#39;re working on and their roadblocks. We will practice the &quot;parking lot&quot; style of problem solving -- putting the harder problem aside and coming back to it.

### Will you have meetings? How frequently? Who plans their agendas?

We will have meetings during class (twice a week, Monday and Wednesday 3:30-5:20pm). As needed, we may schedule additional meetings outside of class. On November 11, we will not meet due to the holiday, but we will check in via Discord. The project manager will prepare the agenda and post it in Discord prior to the meeting.

## What tools will you use to communicate?

- Discord: We will use our private discord server to communicate outside of class. The #general channel should be used for most communication, but specific development questions should go in the #dev channel. We will use this Discord if we need to meet outside of class. During class, we will use the class Discord server voice and text channels. We are using Discord because that is the primary communication method for the class, making it easier to reach the professor and TA and keeping consistency. Alternatives, such as Slack and Microsoft Teams, were not chosen, becuase it would require us using an additional platform.
- GitHub: Our code and homework will be stored in our autumn-info-442a/team-b repository on GitHub. All development work should be done in feature branches (prefixed with `feat-`) before starting a pull request to the main branch. We did not consider alternatives, because the use of GitHub is required for the class.

## Who will own components in your architecture?

- **Akoly:** ColorScale, Dialog/confirmation box, Jest testing, fixing layout
- **Grady:** CountyCard, Jest testing
- **Shareen:** USDashboard, fixing layout
- **Trey:** Location, SearchBar, UserStorage, HomePage, NavigationBar, CountyCardList, CountyDetail, UserController, riskLevel

## What is your timeline?

_EOD = end of day_

- 11/9 Homework 5: Plan
- 12/9 Homework 6: Release
    1. Sprint 1
        - EOD 11/6 HomePage, NavigationBar components
        - EOD 11/10 County Card component
        - EOD 11/10 US Dashboard component
        - EOD 11/14 Search Bar component
        - EOD 11/14 Location, CountyCardList, CountyDetail, saveLocation, unSaveLocation, fillDisplay components
        - EOD 11/14 Dialog/confirmation box
    2. Sprint 2
        - EOD 11/21 RiskLevel. ColorScale
        - EOD 11/30 Layout fixing
        - EOD 11/30Jest test
        - EOD 12/2 Perform final manual acceptance testing plan outlined below
        - EOD 12/7 Fix any and all outstanding issues that were observed during testing
- 12/14 Homework 7: Evaluate
- 12/16 Homework 8: Triage
- 12/18 Homework 9: Reflect

## How will you verify that you&#39;ve met your requirements?

Each team member will perform the acceptance tests for the components they develop. By December 2nd, each team member will complete all acceptance tests outlined below to ensure every test passes before our first release. For our first release, we will conduct most of our acceptance tests manually. Though after that, we will look for ways to automated our tests (e.g. using jest) after every build.

## Acceptance Testing Plan

| **Id** | **Page** | **Feature** | **Feature Requirements** | **Acceptance Test** |
| --- | --- | --- | --- | --- |
| 1 | Global | Search Bar | There is a search bar that allows users to search counties in the US. All counties in the US that match the search input will be displayed in the results page once the users hit the search button. | Interaction design <br/> <ol><li>Navigate to the homepage</li><li>Type/search &quot;King&quot; in the search bar and hit enter, there should be a display of 15 counties in the results that starts with the word &quot;king&quot;</li><li>Type/search &quot;acbd vjd&quot; in the search bar and hit enter, it should display no results</li><li>Type/search &quot;123456&quot; in the search bar and hit enter, it should display no results.</li></ol> |
| 2 | Global | Search Bar - Autocomplete | There is auto completion within the search bar that shows a list of at most the top six counties that matches the user input. | Interaction design <br/> <ol><li>Navigate to the homepage</li><li>Type/search &quot;King&quot; in the search bar</li><li>Without hitting enter, you should see a drop down list that display only 6 recommended county that start with the word &quot;king&quot;</li><li>There is option to see more results that match &quot;king&quot; in the results page if there are more matches</li><li>Type/search &quot;123455&quot; in the search bar, there should be no drop down list of county recommendation</li><li>Type/search &quot;ab cd ef&quot; in the search bar, there should be no drop down list of count recommendation</li></ol> |
| 3 | Global | Navigation Bar | There is a navigation bar that allows users to navigate to their saved locations in one click. | Interaction design <br/> <ol><li>Navigate to the homepage</li><li>Search &quot;King&quot; in the search bar and hit enter to navigate to the results page</li><li>Find &quot;King County, Washington&quot; in the results page</li><li>Favorite &quot;King County, Washington&quot;</li><li>On the navigation bar on the result page, click on the BaseCheck logo to navigate to the homepage to see your saved locations.</li></ol> |
| 4 | Global | Navigation Bar | A navigation bar that allows users to navigate to the search for locations in one click. | Interaction design <br/> <ol><li>Navigate to the homepage by clicking the checkBase logo on the navigation bar</li><li>Search &quot;King&quot; in the search bar and hit enter to navigate to the results page.</li></ol> |
| 5 | Global | Saved locations | There is a favorite feature that allows users to add any county dashboard to their saved locations in one click. | Interaction design <br/> <ol><li>Navigate to the homepage</li><li>Search &quot;King&quot; in the search bar and hit enter to navigate to the results page</li><li>Find &quot;King County, Washington&quot; in the results page</li><li>Favorite &quot;King County, Washington&quot; by clicking on the star</li><li>The star should turn from grey to yellow once it is clicked.</li></ol> |
| 6 | Global | Saved locations | Saved counties are saved in the user&#39;s browser | Interaction design <br/> <ol><li>Repeat requirement 5 test</li><li>Exit / close the browser</li><li>Open and navigate to the homepage</li><li>&quot;King County, Washington&quot; dashboard should be listed on your homepage as your favorite.</li></ol> |
| 7 | Global | Saved locations | If a user has never visited the site or has never saved a location (no saved locations in local storage), 0 saved locations will be shown. | Inteaction design <br/> <ol><li>Turn on incognito mode in your browser</li><li>Navigate to the CheckBase homepage</li><li>No saved locations should be on your homepage</li><li>Using a new device (e.g. your phone vs. your laptop), navigate to the BaseCheck homepage</li><li>No saved location should be on the homepage on your new device</li></ol> |
| 8 | Global | Saved locations | If a user has saved locations on the browser, they will be retrieved upon the next visit. | Interaction design <br/> <ol><li>Perform requirement 5 test</li><li>After performing requirement 5 test, exist / close the browser</li><li>Open the browser and navigate to the homepage</li><li>&quot;King County, Washington&quot; dashboard should be listed on your homepage as your favorite.</li></ol> |
| 9 | Global | Unsaved locations | The favorite feature will allow users to remove any county from their favorite list in one click. | Interaction design <br/> <ol><li>Perform requirement 5 test</li><li>After performing requirement 5 test, type &quot;King&quot; in search bar</li><li>The results page should show your favorited &quot;King County&quot; as well as other results</li><li>Click on the star to unselect favorite &quot;King County&quot;</li><li>Confirm you want to remove &quot;King County, WA&quot; from your home page by clicking &quot;Yes&quot;</li><li>While on the search results page, &quot;King County&quot; should be unfavorited while still displayed with other results in the same order.</li></ol> |
| 10 | Home Page | Statistics Dashboard | There is a static data dashboards that displays US Covid statistics which includes total cases, daily new cases, and when it was last updated (in hours). | Interaction design <br/> <ol><li>Navigate to homepage by typing in website name</li><li>Below the search bar, you will see US COVID information and when it was last updated</li><li>Double clicking on the US COVID Statistics card will lead you to an external CDC website</li></ol> |
| 11 | Home Page | Statistics Dashboards | Next to the displayed static data, display a bar chart of new cases per day for the past 7 days. | Interaction design <br/> <ol><li>Navigate to homepage by typing in website name</li><li>In the static display, you should see a bar chart display that shows new cases per day for the past 7 days</li></ol> |
| 12 | Home Page | County Display | Counties are displayed as cards that display Covid Statistics dashboard. | Interaction design <br/> <ol><li>Navigate to homepage</li><li>Type in &quot;King County&quot; in search bar</li><li>The listed results should be as individual cards. King County&#39;s information should be in its own card.</li></ol> |
| 13 | Home Page | Include Favorited Counties | The counties displayed on the homepage only include what the user has favorited. | Interaction design <br/> <ol><li>After saving multiple locations by repeating requirement 5 and searching a new location each time</li><li>Close browser</li><li>Navigate back to homepage</li><li>The homepage should have a list of county cards with all the stars filled in yellow.</li><li>No county card with a gray filled in star should be displayed</li></ol> |
| 14 | Home Page | Remove from Favorites | There is an option to remove unwanted counties from the homepage. | Interaction design <br/> <ol><li>Ensure that a county has already been added to saved locations.</li><li>Click the star icon on the county card.</li><li>Click yes to confirm the removal of the saved location.</li><li>Look at the homepage and verify that the location is no longer displayed.</li><li>Look at the local storage in the browser developer tools to verify that the location has been removed.</li></ol> |
| 15 | Home Page | Remove from Favorites | There is a confirmation dialog (&quot;yes&quot; or &quot;no&quot;) asking the user if they are sure they want to remove a county from their favorite list. | Interaction design <br/> <ol><li>Ensure that a county has already been added to saved locations.</li><li>Click the star icon on the county card.</li><li>Click the X to cancel the removal of the saved location.</li>Look at the homepage and verify that the location is still displayed.<li></li>Look at the local storage in the browser developer tools to verify that the saved location is still saved.<li></li></ol> |
| 16 | Home Page | Color scale visual indicator | The light to dark blue color scheme of each county visually represents the risk level (light blue is best, dark blue is worst). | Interaction Design <br/> <ol><li>Navigate to the home page.</li><li>Click on a county card to see the word describing the risk level.</li>Ensure that the color of the county card and detail pages matches the word. (Low should be light blue, Moderate should be a medium blue, High should be a dark blue).<li></li></ol> |
| 17 | Home Page | Color scale visual indicator | Color scale and accompanying text must meet color contrast guidelines, per WCAG 2.1 AA. | Usability <br/> <ol><li>Navigate to the homepage.</li><li>Use the Colour Contrast Analyser software to check all color combinations (foregrounds and backgrounds).</li><li>Ensure that all color combinations pass WCAG 2.1 AA for normal text.</li></ol> |
| 18 | Home Page | Color scale visual indicator | A key of the color scale is displayed. | Usability <br/> <ol><li>Navigate to the home page.</li><li>A color scale key should be displayed.</li><li>It should show the light blue as low risk level, medium blue as medium risk level, and dark blue as high risk level.</li></ol> |
| 19 | Search Results | Search Results Count Display | There is a display of the total number of search results near the top left of the page. | Interaction Design <br/> <ol><li>Navigate to the home page.</li><li>Type &quot;King County&quot; in the search bar and hit enter.</li><li>Count the county cards listed search results.</li><li>Verify that the count of search results matches the text</li></ol> |
| 20 | Search Results | County Display | There is a container that holds each search result that is displayed as a card that contains a summary level of information (which includes total cases, daily new cases, and when it was last updated (in hours)) about Covid statistics related to that search result. | Interaction Design  <br/> <ol><li>Navigate to the home page</li><li>Search &quot;King&quot; in the search bar</li><li>You should see two search results representing the counties in the form of cards.</li></ol> |
| 21 | Search Results | No results display | If no county matched the user input, there is a text display indicating when no search results are found. | interaction design <br/> <ol><li>Navigate to the home page</li><li>Search &quot;aodmamf ks&quot; in the search bar</li><li>You should see a display indicating that there are no search results found</li></ol> |
| 22 | More Info | External Source(s) | There is a link to the coronavirus website of the state that the county is located in will be displayed. | interaction design <br/> <ol><li>Navigate to the home page</li><li>Search &quot;King&quot; in the search bar</li><li>Select one of the cards that appear in the search results</li><li>After being redirected to a new page, you should be able to see a link to an external page about that county.</li></ol> |
| 23 | More Info | Location Details | The county and state is prominently displayed at the top of the dashboard. | interaction design <br/> <ol><li>Navigate to the home page</li><li>Search &quot;King&quot; in the search bar</li><li>Select one of the cards that appear in the search results</li><li>After being redirected to a new page, you should be able to see a link to an external page about that county.</li></ol> |
| 24 | More Info | Risk Level | Risk level is calculated by the rate of increase or decrease in cases over a 7-day period. <br/><br/> Increase (or decrease)= New total cases (in the last day) - total of cases (last 7 days)<br/><br/> % increase (or decrease) = Increase ÷ Original total of cases × 100 | Computational Correctness <br/> <ol><li>Create a test function that accepts two integer inputs for the total number of cases over the past day and the number of cases in the last seven days</li><li>Rate of increase should match the expected output</li></ol> |
| 25 | More Info | Risk Level | Risk level is displayed using the color scale visual indicator and a word (low, medium, high). | Interaction Design <br/> <ol><li>Color output should match what the color scale represents</li></ol> |
| 26 | More Info | Statistics | The data included should be new cases in the last 7 days, total cases, total deaths, rate of case increase/decrease over the past 7 days, and the date when the data was last updated. | Maintainability <br/> <ol><li>Navigate to the home page</li><li>Search &quot;King&quot; in the search bar</li><li>Select one of the cards that appear in the search results</li><li>After being redirected to a new page, you should be able to see a &quot;last updated&quot; and a date. The date should be relatively recent (Within the past week)</li></ol> |
| 27 | More Info | Visualizations | A bar chart shows new cases in the last seven days, with one bar for each day. | Interaction Design <br/> <ol><li>Navigate to the homepage.</li><li>Search &quot;King&quot; in the search bar and hit enter to navigate to the results.</li><li>On the results page, select one of the cards that appear in the results.</li><li>After being redirected to a new page, you should be able to see a bar chart with dates. The dates should be relatively recent (Within the past week).</li></ol> |
