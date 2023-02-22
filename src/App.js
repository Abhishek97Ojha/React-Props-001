import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="App" >
     <Card code="#FF6663" name="PINK"/>
     <Card code="#333333" name="GRAY"/>
     <Card code="#000000" name="BLACK"/>
     <Card code="#38BB14" name="GREEN"/>
     <Card code="#C90B0B" name="RED"/>
     <Card code="#FF8000" name="ORANGE"/>
     <Card code="#FFF500" name="YELLOW"/>
     <Card code="#CCCCCC" name="LIGHT GRAY"/>
     <Card code="#7E41A2" name="PURPLE"/>
     <Card code="#C14911" name="BROWN"/>
    </div>
  );
}

export default App;
