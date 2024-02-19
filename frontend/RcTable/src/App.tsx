
function App() {
  return (
    <div className="bg-black text-white h-screen flex justify-center items-center">
      <div className="bg-gray-800 w-[75%] h-[75%] overflow-hidden overflow-y-scroll">
        {Array.from({length:100},(_,i)=>(
          <div key={i}>what is this</div>
        ))}
      </div>
    </div>
  )
}

export default App
