import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header class="header hedinner fixed-header">    
  <div class="container">
    <div class="row ">
      <div class="col-md-3 col-sm-3"><a href="index.html">
        
        <img src="images/logowhite.png" alt="Logo" class="logo staticlogo"/></a>
        
      </div>
      <div class="col-md-9 col-sm-9 text-right d-flex align-items-center">
        <div class="collapse nav navbar-collapse" id="navbar-collapse">
          <ul class="mainmenu ">
            <li class=""><a href="#" class="">Services <i class="fa fa-angle-down" aria-hidden="true"></i></a>
              <div class="submenu">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="artificial-intelligence">  Artificial Intelligence</Link></li>
                        <li><Link to="application-services">  Application Services</Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="cloud-services"> Cloud Services</Link></li>
                        <li><Link to="devops">DevOps</Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="digital-transformation"> Digital Transformation</Link></li>
                        <li><Link to="data-analytics"> Data Analytics</Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="product-development">Product Development</Link></li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class=""><a href="#" class="">Industries <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
              <div class="submenu">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="finance"> Finance</Link></li>
                        <li><Link to="supply-chain-logistics"> Supply chain & Logistics</Link></li>
                        <li><Link to="automotive-industry"> Automobile</Link></li>
                       
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                      
                        <li><Link to="healthcare"> HealthCare </Link></li>
                        <li><Link to="ai-marketing"> Marketing </Link></li>
                         <li><Link to="insurance"> Insurance</Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                         
                        <li><Link to="retail">Retail</Link></li>
                        <li><Link to="telecom">Telecommunications</Link></li>
                      
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        
                        <li><Link to="education"> Education</Link></li>
                        <li><Link to="manufacturing"> Manufacturing</Link></li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </li>
            <li class="insightdrop"><a href="#" class="">Insights <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
              <div class="submenu">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="machine-learning">  Machine Learning </Link></li>
                        <li><Link to="full-stack-development">  Full Stack Development </Link></li>
                        <li><Link to="tableau">  Tableau </Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="power-bi"> Power BI</Link></li>
                        <li><Link to="devops-insight">  DevOps </Link></li>
                        <li><Link to="computer-vision"> Computer Vision </Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                     <ul>
                       <li><Link to="deep-learning"> Deep Learning</Link></li>
                       <li><Link to="aws">  AWS </Link></li>
                       <li><Link to="azure">  Azure </Link></li>
                     </ul>
                   </div>
                   <div class="col-md-3">
                     <ul>
                       <li><Link to="nlp"> Natural Language Processing</Link></li>
                       <li><Link to="artificial-intelligence-insights">  Artificial Intelligence </Link></li>
                     </ul>
                   </div>
                    
                  </div>
                </div>
              </div>
             </li>
            <li class=""><Link to="/careeres" class="">Careers</Link></li>
            <li class=""><Link to="/aboutus" class="">About C360 </Link></li>
            <li class="getlink"><a href="#" class="" data-toggle="modal" data-target="#get_trained">Get Started</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
</header>
        </div>
    )
}

export default Header
