import './App.scss';
import AllPost from './AllPost';

function App() {
  return (
    <AllPost posts={[
      'posts/1',
      'posts/2',
      'posts/3',
      'posts/4',
    ]} />

  );
}

export default App;
