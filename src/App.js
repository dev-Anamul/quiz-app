import Layout from './components/Layout';
import Result from './components/pages/Result';
// import Quiz from './components/pages/Quiz';
// import Login from './components/pages/Login';
// import Home from './components/pages/Home';
// import SignUp from './components/pages/SignUp';
import './styles/App.css';

function App() {
    return (
        <Layout>
            {
                // <Home />
                // <Login />
                // <SignUp />
                // <Quiz />
            }
            <Result />
        </Layout>
    );
}

export default App;
