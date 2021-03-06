# Requirements

| **Id** | **Page** | **Feature** | **Feature Requirements** |
| --- | --- | --- | --- |
| 1 | Global | Search Bar | There is a search bar that allows users to search counties in the US. All counties in the US that match the search input will be displayed in the results page once the users hit the search button. |
| 2 | Global | Search Bar - Autocompletion | There is auto completion within the search bar that shows a list of at most the top six counties that matches the user input. |
| 3 | Global | Navigation Bar | There is a navigation bar that allows users to navigate to their saved locations in one click. |
| 4 | Global | Navigation Bar | A navigation bar that allows users to navigate to the search for locations in one click. |
| 5 | Global | Saved locations | There is a favorite feature that allows users to add any county dashboard to their saved locations. |
| 6 | Global | Saved locations | Saved counties are saved in the user&#39;s browser using local storage. |
| 7 | Global | Saved locations | If a user has never visited the site or has never saved a location (no saved locations in local storage), 0 saved locations will be shown. |
| 8 | Global | Saved locations | If a user has saved locations on the browser, they will be retrieved from local storage upon the next visit. |
| 9 | Global | Unsaved locations | The favorite feature will allow users to remove any county from their favorite list. |
| 10 | Home Page | Statistics Dashboard | There is a static data dashboards that displays US Covid statistics which includes total cases, daily new cases, and when it was last updated (in hours). |
| 11 | Home Page | County Display | Counties are displayed as cards that display Covid Statistics dashboard. |
| 12 | Home Page | Include Favorited Counties | The counties displayed on the homepage only include what the user has favorited. |
| 13 | Home Page | Remove from Favorites | There is an option to remove unwanted counties from the homepage. |
| 14 | Home Page | Remove from Favorites | There is a confirmation dialog (&quot;yes&quot; or &quot;X&quot; to close) asking the user if they are sure they want to remove a county from their favorite list. |
| 15 | Home Page | Color scale visual indicator | The light to dark blue color scheme of each county visually represents the risk level (light blue is best, dark blue is worst). |
| 16 | Home Page | Color scale visual indicator - view | Color scale and accompanying text must meet color contrast guidelines, per WCAG 2.1 AA. |
| 17 | Home Page | Color scale visual indicator | A key of the color scale is displayed. |
| 18 | Search Results | Search Results Count Display | There is a display of the total number of search results near the top left of the page. |
| 19 | Search Results | County Display | There is a container that holds each search result that is displayed as a card that contains a summary level of information (which includes total cases, daily new cases, and when it was last updated (in hours)) about Covid statistics related to that search result. |
| 20 | Search Results | No results display | If no county matched the user input, there is a text display indicating when no search results are found. |
| 21 | More Info | External Source(s) | There is a link to the coronavirus website of the state that the county is located in will be displayed. |
| 22 | More Info | Location Details | The county and state is prominently displayed at the top of the dashboard. |
| 23 | More Info | Risk Level - controller | Risk level is calculated by the rate of increase or decrease in cases over a 7-day period. <br /> Increase (or decrease)= New total cases (in the last 7 days) - Original total of cases <br /> % increase (or decrease) = Increase ÷ Original total of cases × 100 |
| 24 | More Info | Risk Level | Risk level is displayed using the color scale visual indicator and a word (low, moderate, high). |
| 25 | More Info | Statistics | The data included should be new cases in the last 7 days, total cases, total deaths, rate of case increase/decrease over the past 7 days, and the date when the data was last updated. |
| 26 | More Info | Visualizations | A bar chart shows new cases in the last seven days, with one bar for each day. |