import Painting from "./components/Painting";
import paintings from './paintings.json';
export default function App() {
    
    return (
        <div>

            {paintings.map(painting => <Painting
     key={painting.id}
    url={painting.url}
    title={painting.title}
    price={painting.price}
    author={painting.author.tag}
    profileUrl={painting.author.url}
    quantity={painting.quantity}
     />)}
          

  </div>
    )
}