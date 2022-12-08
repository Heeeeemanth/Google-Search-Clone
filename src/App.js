import GoogleSearchPage from "./Components/GoogleSearchPage/GoogleSearchPage"

const searchDetailsList = [
  {id:1,suggestion:'ReactJs'},
  {id:2,suggestion:'Html and Css'},
  {id:3,suggestion:'JavaScript'},
  {id:4,suggestion:'Python'},
  {id:5,suggestion:'SQL'},
  {id:6,suggestion:'NextJs'},
  {id:7,suggestion:'NodeJs'}
]

const App = () => {
  return <GoogleSearchPage  searchDetailsList={searchDetailsList}/>
}

export default App
