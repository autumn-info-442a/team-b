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
- UserController:
  - The UserController will handler user input in regards to saving and unsaving locations.
  ```
    // Handles adding/removing saved locations for a user
    class UserController extends Component {
      // saves a location to the UserStorage Model
      function saveLocation(String county) {
        // TO-DO: replace with actual algorithm
        UserStorage.add(county);
      }
      
      function unSaveLocation(String county ) {
        // TO-DO: replace with actual algorithm
        UserStorage.remove(county);
      }
      
      function fillDisplay() {
        // TO-DO: replace with actual algorithm
        for county in UserStorage.counties {
          CountyList.add(CountyCard(county));
        }
      }
    }
  ```
