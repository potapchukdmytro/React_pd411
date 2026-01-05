import './App.css'

function App() {
  const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";

  return (
    <>
      <h1 className='red-text'>Title</h1>
      <p>React intro</p>
      <div>
        <img width={200} height="200px" src={imgUrl}/>
      </div>
    </>
  )
}

export default App
