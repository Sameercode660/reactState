import Check from "./Check";

function App() {

  
 
  
  const data = ['PHP', 'Python', 'R', 'C', 'C++', 'Ruby', 'Java', 'NodeJs', 'React', 'Angular']
  return (
    <>
    {data.map((d)=>{
      return <Check text={d}/>
    })}
    </>
  );
}

export default App;
