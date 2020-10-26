# Requirements

| **Page** | **Feature** | **Feature Requirements** |
| --- | --- | --- |
| Global | Search Bar | There is a search bar that allows users to search counties in the US. All counties in the US that match the search input must be displayed. |
| Global | Search Bar - Autocompletion | There is auto completion within the search bar that shows a list of at most the top six counties that matches the user input. |
| Global | Navigation Bar | There is a navigation bar that allows users to navigate to their saved locations in one click. |
| Global | Navigation Bar | A navigation bar that allows users to navigate to the search for locations in one click. |
| Global | Saved locations | There is a favorite feature that allows users to add any county dashboard to their saved locations in one click. |
| Global | Saved locations | Saved counties are saved in the user&#39;s browser using local storage. |
| Global | Saved locations | If a user has never visited the site or has never saved a location (no saved locations in local storage), 0 saved locations will be shown. |
| Global | Saved locations | If a user has saved locations on the browser, they will be retrieved from local storage upon the next visit. |
| Global | Unsaved locations | The favorite feature will allow users to remove any county from their favorite list in one click. |
| Home Page | Statistics Dashboard | There is a static data dashboards that displays US Covid statistics which includes total cases, daily new cases, and when it was last updated (in hours). |
| Home Page | Statistics Dashboards | Next to the displayed static data, display a bar chart of new cases per day for the past 7 days. |
| Home Page | County Display | Counties are displayed as cards that display Covid Statistics dashboard. |
| Home Page | Include Favorited Counties | The counties displayed on the homepage only include what the user has favorited. |
| Home Page | Remove from Favorites | There is an option to remove unwanted counties from the homepage. |
| Home Page | Remove from Favorites | There is a confirmation dialog (&quot;yes&quot; or &quot;no&quot;) asking the user if they are sure they want to remove a county from their favorite list. |
| Home Page | Color scale visual indicator | The Red-Yellow-Green Color scheme of each county visually represents the risk level (red worst, green best). |
| Home Page | Color scale visual indicator | Color scale and accompanying text must meet color contrast guidelines, per WCAG 2.1 AA. |
| Home Page | Color scale visual indicator | A key of the color scale is displayed. |
| Search Results | Search Results Count Display | There is a display of the total number of search results near the top left of the page. |
| Search Results | County Display | There is a container that holds each search result that is displayed as a card that contains a summary level of information (which includes total cases, daily new cases, and when it was last updated (in hours)) about Covid statistics related to that search result. |
| Search Results | No results display | If no county matched the user input, there is a text display indicating when no search results are found. |
| More Info | External Source(s) | There is a link to the coronavirus website of the state that the county is located in will be displayed. |
| More Info | Location Details | The county and state is prominently displayed at the top of the dashboard. |
| More Info | Risk Level | Risk level is calculated by the rate of increase or decrease in cases over a 7-day period. <br /> Increase (or decrease) = New total cases (in the last 7 days) - Original total of cases <br /> % increase (or decrease) = Increase ÷ Original total of cases × 100 |
| More Info | Risk Level | Risk level is displayed using the color scale visual indicator and a word (low, medium, high). |
| More Info | Statistics | The data included should be new cases in the last 7 days, total cases, total deaths, rate of case increase/decrease over the past 7 days, and the date when the data was last updated. |
| More Info | Visualizations | A bar chart shows new cases in the last seven days, with one bar for each day. |
