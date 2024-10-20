import {Header} from './components/header.jsx';
import {Footer} from './components/footer.jsx';
import {PageProvider} from './components/provider.jsx';
import {NavigationProvider} from './components/navigationContext.jsx';

function App() {
    return (
        <NavigationProvider>
            <Header/>
            <PageProvider/>
            <Footer/>
        </NavigationProvider>
    );
}

export default App;
