import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import {Switch,Route} from 'react-router-dom'
import Careeres from './pages/Careeres';
import Aboutus from './pages/Aboutus';
import ArtificialinteligenceService from './pages/ArtificialinteligenceService';
import Applicationservices from './pages/Applicationservices';
import Cloudservices from './pages/Cloudservices';
import Devops from './pages/Devops';
import Digitaltransformation from './pages/Digitaltransformation';
import Dataanalytics from './pages/Dataanalytics';
import ProductDevelopment from './pages/ProductDevelopment';
import Finance from './pages/Finance';
import SupplyChain from './pages/SupplyChain';
import Automotive from './pages/Automotive';
import Healthcare from './pages/Healthcare';
import Marketing from './pages/Marketing';
import Insurance from './pages/Insurance';
import Retail from './pages/Retail';
import Telicommunication from './pages/Telicommunication';
import Education from './pages/Education';
import Manufacturing from './pages/Manufacturing';
import Fullstackdevelopment from './pages/Fullstackdevelopment';
import Tableau from './pages/Tableau';
import PowerBi from './pages/PowerBi';
import Computervision from './pages/Computervision';
import DeepLearning from './pages/DeepLearning';
import Aws from './pages/Aws';
import NaturelLanguageProcesses from './pages/NaturelLanguageProcesses';
import Azure from './pages/Azure';
import Artificial from './pages/Artificial';

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/careeres'  component={Careeres}></Route>
        <Route path='/aboutus'  component={Aboutus}></Route>
        <Route path='/artificial-intelligence'  component={ArtificialinteligenceService}></Route>
        <Route path='/application-services'  component={Applicationservices}></Route>
        <Route path='/cloud-services'  component={Cloudservices}></Route>
        <Route path='/devops'  component={Devops}></Route>
        <Route path='/digital-transformation'  component={Digitaltransformation}></Route>
        <Route path='/data-analytics'  component={Dataanalytics}></Route>
        <Route path='/product-development'  component={ProductDevelopment}></Route>
        <Route path='/finance'  component={Finance}></Route>
        <Route path='/supply-chain-logistics'  component={SupplyChain}></Route>
        <Route path='/automotive-industry'  component={Automotive}></Route>
        <Route path='/healthcare'  component={Healthcare}></Route>
        <Route path='/ai-marketing'  component={Marketing}></Route>
        <Route path='/insurance'  component={Insurance}></Route>
        <Route path='/retail'  component={Retail}></Route>
        <Route path='/telecom'  component={Telicommunication}></Route>
        <Route path='/education'  component={Education}></Route>
        <Route path='/manufacturing'  component={Manufacturing}></Route>
        <Route path='/machine-learning'  component={Manufacturing}></Route>
        <Route path='/full-stack-development'  component={Fullstackdevelopment}></Route>
        <Route path='/tableau'  component={Tableau}></Route>
        <Route path='/power-bi'  component={PowerBi}></Route>
        <Route path='/devops-insight'  component={PowerBi}></Route>
        <Route path='/computer-vision'  component={Computervision}></Route>
        <Route path='/deep-learning'  component={DeepLearning}></Route>
        <Route path='/aws'  component={Aws}></Route>
        <Route path='/azure'  component={Azure}></Route>
        <Route path='/nlp'  component={NaturelLanguageProcesses}></Route>
        <Route path='/artificial-intelligence-insights'  component={Artificial}></Route>
      </Switch>
    </div>
  );
}

export default App;
