import axios from 'axios';
import { useAsync } from './hooks';
import { Header } from './components';
import { Spinner } from './components';


const App = () => {
  const initialPost = useAsync(async () => {
    return await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data);
  }, []);

  return (
    <div>
      <Header>Posts</Header>
      <ul>
        {initialPost.isLoading ? ( 
          <Spinner />
        ) : (
          (initialPost.value || []).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
