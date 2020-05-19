import React from 'react';

class Header extends React.Component {
 render(){
     return(
         <div>
            <div className="w3l-bootstrap-header fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light p-2">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><span className="fa fa-home" style={{color:'red'}}></span>myShop</a>
                        {/* if logo is image enable this    */}
                        {/* <a className="navbar-brand" href="#index.html">
                            <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                        </a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#URL">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li> */}
                            </ul>
                            {/* <div className="form-inline">
                            <a href="#login.html" className="login mr-4">Log in</a>
                                <a href="#signup.html" className="btn btn-primary btn-theme">Create Free Account</a>
                            </div> */}
                        </div>
                    </div>
                </nav>
             </div>

             <div className="w3l-index-block1">
             <div className="content py-5">
               <div className="container">
                 <div className="row align-items-center py-md-5 py-3">
                   <div className="col-md-5 content-left pt-md-0 pt-5">
                     <h1> Making an online business has never been easier </h1>
                     <p className="mt-3 mb-md-5 mb-4"> Make use of cutting edge tools to make build your online presence.</p>
                     <a href="#login.html" className="btn btn-primary btn-theme">Get Started</a>
                   </div>
                   <div className="col-md-7 content-photo mt-md-0 mt-5">
                     <img src="images/main.jpg" className="img-fluid" alt=""/>
                   </div>
                 </div>
                 <div className="clear"></div>
               </div>
             </div>
           </div>
        </div>
         )
 }   
}

export default Header;