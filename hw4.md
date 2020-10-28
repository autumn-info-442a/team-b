# Architecture

- Models:
  - Location
    - This component is a model that stores all the Covid related data associated with a specific location such as Covid Cases in the past day, past week, total deaths, etc found from the NovelCovid API
    - Model resides only on the client
    - The county model will be used on the CountyDetail view as well as the HomePage view and CountyCard view to display Covid information associated with the county as well as the USDashboard view
    - Code Snippet:
    ```
    class Location extends Component {
      //TO-DO: Implement actual component
      constructor(props) {
        super(props);
        this.state = {
          cases = 10323;
          deaths = 1312;
        }
      }
    }
    ```
  - UserStorage
    - This component is a model that stores all of the users information like saved location, current location, and unique user url.
    - This model resides only on the client.
    - The UserStorage model will be used on the CountyCardList view, HomePage County card view and will interact with the saveLocation controller and unsavedLocation controller.
    - Code Snippet:
    ```
    class UserStorage extends Component {
      //TO-DO: Implement actual component
      constructor(props) {
        super(props);
        this.state = {
          locations = [];
        }
      }
    }
- View:
  - HomePage
    - This component is a view that contains a NavigationBar view, a SearchBar view, a CountyCardListView, and USDashboard view
    - View resides only on the client
    ``` 
    class HomePage extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
            <NavBar></NavBar>
            <SearchBar/>
            <CountyCardList/>
            <USDashboard/>
          )
      }
    }
    ```
  - SearchBar
    - This component is a view that contains a search input field and autocomplete function.
    - View resides only on the client
    ``` 
    class SearchBar extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
            <input></input>
          )
      }
    }
    ```
  - NavigationBar
    - This component is a view that contains links to navigate the user to different parts of the web application
    - View resides only on the client
    - Code Snippet:
    ``` 
    class NavigationBar extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
            <NavBar>
               <div><Link>Home</Link></div>
               <div>BaseCheck</div>
            </NavBar>
          )
      }
    }
    ```
  - CountyCardList
    - This component is a view that will contain 0 to many CountyCard views
    - This view also communicates with the UserStorage Model to populate saved locations when needed
    - View resides only on the client
    - Code Snippet:
    ``` 
    class CountyCardList extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
            <div>
              counties.map(() => {
                list.add(county)
              })
            </div>
          )
      }
    }
    ```
  - USDashboard
    - This component is a view that will contain some Covid related information found in the UnitedStates Model
    - View resides only on the client
    - Code Snippet:
    ``` 
    class USDashboard extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
            <div>
              <div>
                <p>Total Cases:</p>
              </div>
              <div>
                <p>Total Cases (Last 7 Days):</p>
              </div>
              <div>
                <p>Total Deaths:</p>
              </div>
            </div>
          )
      }
    }
    ```
  - CountyCard
    - This component is a view that will contain a preview of Covid related information found in the County Model
    - View resides only on the client
    - Code Snippet:
    ``` 
    class CountyCard extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
              <p>
                Total Cases: CountyModel.getCases();
                Total Deaths: CountyMode.getDeaths();
              </p>
          )
      }
    }
    ```
  - CountyDetail
    - This component is a view that contains a NavigationBar view, a deeper level of county information and statistics from the County Model.
    - View resides only on the client
    - Code Snippet:
    ``` 
    class CountyDetail extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
              <NavigationBar/>
              <p>
                Total Cases: CountyModel.getCases();
                Total Deaths: CountyMode.getDeaths();
              </p>
          )
      }
    }
    ```
   - ColorScale
      - This component is a view that contains color scale and accompanying text must meet color contrast guidelines (WCAG 2.1 AA) per RiskLevel controller.
      - View resides only on the client
      - Code Snippet:
    ``` 
    class ColorScale extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
              <NavigationBar/>
              <div>
               // place holder
              </div>
          )
      }
    }
    ```
    
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
      
      function RiskLevel() {
        // TO-DO: replace with actual algorithm
        for county in UserStorage.counties {
          // Increase (or decrease)= New total cases (in the last 7 days) - Original total of cases 
          // % increase (or decrease) = Increase ÷ Original total of cases × 100
        }
      }
    }
  ```
