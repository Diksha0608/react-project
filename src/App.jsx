const Card = ({ title }) => {
  return (
    <div>
      <h2  className="card">
        {title}
      </h2>

    </div>

  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Hello" />
    </div>
  )
}

export default App;