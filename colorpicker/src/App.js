import './App.css';
import Actions from './components/actions';
import Footer from './components/footer';
import Report from './components/report';
import Textarea from './components/textarea';
import Header from './components/header';
function App() {
  return (
    <div className='h-screen bg-white-200 dark:bg-black'>
      {/* <Actions />
      <Footer />
      <Actions />
       */}
      <Header />
      <Textarea />
    </div>
  );
}

export default App;
