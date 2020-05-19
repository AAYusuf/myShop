import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <section className="w3l-market-footer">
              <footer className="footer-28">
                <div className="footer-bg-layer">
                  <div className="container py-lg-3">
                    <div className="row footer-top-28">
                      <div className="col-md-6 footer-list-28 mt-5">
                        <h6 className="footer-title-28">Contact information</h6>
                        <ul>
                          <li>
                            <p><strong>Address</strong> :Abuja Nigeria</p>
                          </li>
                           <li>
                            <p><strong>Phone</strong> : <a href="tel:+404-11-22-89">+234 80 3056 </a></p>
                          </li>
                           {/* <li>
                            <p><strong>Email</strong> : <a href="mailto:example@mail.com">example@mail.com</a></p>
                          </li> */}
                        </ul>
      
                        {/* <div className="main-social-footer-28 mt-3">
                          <ul className="social-icons">
                            <li className="facebook">
                              <a href="#" title="Facebook">
                                <span className="fa fa-facebook" aria-hidden="true"></span>
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="#" title="Twitter">
                                <span className="fa fa-twitter" aria-hidden="true"></span>
                              </a>
                            </li>
                            <li className="dribbble">
                              <a href="#" title="Dribbble">
                                <span className="fa fa-dribbble" aria-hidden="true"></span>
                              </a>
                            </li>
                            <li className="google">
                              <a href="#" title="Google">
                                <span className="fa fa-google" aria-hidden="true"></span>
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-4 footer-list-28 mt-5">
                            <h6 className="footer-title-28">Company</h6>
                            <ul>
                              <li><a href="#URL">About</a></li>
                              {/* <li><a href="#">Blog Posts</a></li> */}
                              {/* <li><a href="#pricing.html">FAQ</a></li> */}
                              <li><a href="#pricing.html">Pricing</a></li>
                            </ul>
                          </div>
                          <div className="col-md-4 footer-list-28 mt-5">
                            <h6 className="footer-title-28">Support</h6>
                            <ul>
                               {/* <li><a href="contact.html">Contact Us</a></li> */}
                              <li><a href="#signup.html">Create account</a></li>
                              {/* <li><a href="#learn.html">Learning Center</a></li> */}
                              {/* <li><a href="#career.html">Team</a></li> */}
                            </ul>
                          </div>
                          <div className="col-md-4 footer-list-28 mt-5">
                            <h6 className="footer-title-28">Product</h6>
                            <ul>
                              <li><a href="#URL">Shop</a></li>
                              {/* <li><a href="#URL">VIP</a></li> */}
                              {/* <li><a href="#URL">POS</a></li> */}
                              {/* <li><a href="#URL">Sale</a></li> */}
                              <li><a href="#URL">Admin UI</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
      
                  <div className="midd-footer-28 align-center py-lg-4 py-3 mt-5">
                    <div className="container">
                      <p className="copy-footer-28 text-center"> &copy; 2020 myShop. All Rights Reserved.  </p>
                    </div>
                  </div>
                </div>
              </footer>
      
            </section>
        )
    }
}
export default Footer