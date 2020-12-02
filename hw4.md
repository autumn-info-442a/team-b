# Architecture
- Views:
  - HomePage
    - This component is a view that contains a NavigationBar view, a SearchBar view, a SavedCardListView, and USDashboard view
    - View resides only on the client
    ```jsx
    class HomePage extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
            <NavBar></NavBar>
            <SearchBar/>
            <USDashboard/>
            <SavedCardList/>
          )
      }
    }
    ```
  - SearchPage
    - This component is a view that contains a NavigationBar view, a SearchBar view, a CountyCardListView, and USDashboard view
    - View resides only on the client
    ```jsx
    class SearchPage extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
            <NavBar></NavBar>
            <SearchBar/>
            <USDashboard/>
            <CountyCardList/>
          )
      }
    }
    ```
  - SearchBar
    - This component is a view that contains a search input field and autocomplete function.
    - View resides only on the client
    ```jsx
    class SearchBar extends Component() {
      // TO-DO: Implement actual component
      render() {
          return (
            <input></input>
          )
      }
    }
    ```
  - CountyCardList
    - This component is a view that will contain 0 to many CountyCard views
    - This view also communicates with the UserStorage Model to populate saved locations when needed
    - View resides only on the client
    - Code Snippet:
    ```jsx
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
  - SavedCardList
    - This component is a view that will show and only appear if there are 1 or more saved locations.
    - This view also communicates with the UserStorage Model to populate saved locations when needed
    - View resides only on the client
    - Code Snippet:
    ```jsx
    class SavedCardList extends Component() {
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
    ```jsx
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
  - Card
    - This component is a view that will contain a preview of Covid related information found in the County Model
    - View resides only on the client
    - Code Snippet:
    ```jsx
    class Card extends Component() {
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
    ```jsx
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
    
Controllers:
  ```
    // saves a location to the UserStorage Model
    function saveLocation(String county) {
      // TO-DO: replace with actual algorithm
      localStorage.get(counties).add(county);
    }
      
    function unSaveLocation(String county ) {
      // TO-DO: replace with actual algorithm
      localStorage.get(counties).remove(county);
    }
  ```
