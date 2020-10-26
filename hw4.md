# Architecture

- Models:
  - County
    - This component is a model that stores all the Covid related data associated with a specific county such as Covid Cases in the past day, past week, total deaths, etc found from the disease.sh API
    - Model resides only on the client
    - The county model will be used on the CountyDetail view as well as the HomePage view and CountyCard view to display Covid information associated with the county
  - UserStorage
    - This component is a model that stores all of the users information like saved location, current location, and unique user url.
    - This model resides only on the client.
    - The UserStorage model will be used on the CountyCardList view, HomePage County card view and will interact with the saveLocation controller and unsavedLocation controller.
  - UnitedStates
    - This component is a model that stores the Covid related data associated with the United States Covid Cases in the past day, past week, total deaths, etc.
    - Model resides only on the client
    - The UnitedStates model will be used on the USDashboard view to display information such as total cases, total deaths, and the cases in the last 7 days for the whole US
- View:
  - HomePage
    - This component is a view that contains a NavigationBar view, a SearchBar view, a CountyCardListView, and USDashboard view
    - View resides only on the client
  - SearchBar
    - This component is a view that contains a search input field and autocomplete function.
    - View resides only on the client
  - NavigationBar
    - This component is a view that contains links to navigate the user to different parts of the web application
    - View resides only on the client
  - CountyCardList
    - This component is a view that will contain 0 to many CountyCard views
    - This view also communicates with the UserStorage Model to populate saved locations when needed
    - View resides only on the client
  - USDashboard
    - This component is a view that will contain some Covid related information found in the UnitedStates Model
    - View resides only on the client
  - CountyCard
    - This component is a view that will contain a preview of Covid related information found in the County Model
    - View resides only on the client
  - CountyDetail
    - This component is a view that contains a NavigationBar view, a deeper level of county information and statistics from the County Model.
    - View resides only on the client
- Controllers:
  - Search
    - The search function is a controller that will handle user input for the search of a county that the user is looking for. Enabling the users to find search results.
    - Controller resides only on the client
    - Code Snippet:

    ```js
    /*
     * Accepts a String input representing a county name
     * Returns an array of county information based on the counties that match the search term
    */
    function search(searchTerm) {
      //TO-DO: return counties with name that match search term
      return counties;
    }
    ```

  - saveLocation
    - The saveLocation function is a controller that will save a location to a user&#39;s UserStorage Model
    - Controller resides only on the client
    - Code Snippet:
  - unsaveLocation
    - The unSaveLocation function is a controller that will unsave a location to a user&#39;s UserStorage Model
    - Controller resides only on the client
  - fillDisplay
    - The fillDisplay function is a controller that will fill the user&#39;s home page with their saved locations, or search results dependent on if the user has made a search using the SearchBar view
    - Controller resides only on the client
