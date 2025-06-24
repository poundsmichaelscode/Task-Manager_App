const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 border">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Card
