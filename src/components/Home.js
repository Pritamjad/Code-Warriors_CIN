import React from 'react'
import Nav from './Nav';
import '../assets/css/styles.css';
import Login from './Login';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Nav/>
      <div className='main'>
        <div className="container py-5">
          
            <div className="row py-5">
                <div className="col-lg-7 pt-4 text-center">
                    <h1 className="pt-5">Discuss Discover & Develop</h1>
                    {isAuthenticated?<a href='/study' className='btn1'>Study Together</a>:<Login/>}
                </div>

                <div className="col-lg-3 pt-4 m-auto text-center">
                 <img src="images/" style={{borderRadius:5}} alt="" />
                </div>
            </div>
            
        </div>
        </div>
        <div className="features" id="features">
     <div className="container py-5">

        <div className="row">
            <div className="col-lg-9 m-auto text-center">
                <h1>About Us!!</h1>
            </div>
        </div>
        
       
        <div className="row">
            <div className="col-lg-6 py-5 m-auto text-center">
             <img src="assets/a1.jpeg" alt=""/>
            </div>
            <div className="col-lg-6 py-lg-5">
               <div className="row">
                 <div className="col-lg-6 m-auto text-center">
                    <h2>Find Your Community</h2>
                 </div>
               </div>
               <div className="row py-4">
                <div className="col-lg-6 m-auto text-center">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum corrupti possimus nisi, atque suscipit consectetur molestias animi quo ut error quidem maxime. Eligendi provident, perferendis deserunt eveniet error atque.</p>
                </div>
              </div>
            </div>
        </div>

        
        <div className="row">
            <div className="col-lg-6 py-5 m-auto text-center">
             <img src="assets/a2.jpeg" alt="" />
            </div>
            <div className="col-lg-6 py-lg-5">
               <div className="row">
                 <div className="col-lg-6 m-auto text-center">
                    <h2>Set Goals</h2>
                 </div>
               </div>
               <div className="row py-4">
                <div className="col-lg-6 m-auto text-center">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum corrupti possimus nisi, atque suscipit consectetur molestias animi quo ut error quidem maxime. Eligendi provident, perferendis deserunt eveniet error atque.</p>
                </div>
              </div>
            </div>
        </div>

        
        <div className="row">
            <div className="col-lg-6 py-5 m-auto text-center">
             <img src="assets/a3.jpeg" alt=""/>
            </div>
            <div className="col-lg-6 py-lg-5">
               <div className="row">
                 <div className="col-lg-6 m-auto text-center">
                    <h2>Progress Together</h2>
                 </div>
               </div>
               <div className="row py-4">
                <div className="col-lg-6 m-auto text-center">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum corrupti possimus nisi, atque suscipit consectetur molestias animi quo ut error quidem maxime. Eligendi provident, perferendis deserunt eveniet error atque.</p>
                </div>
              </div>
            </div>
        </div>
        
        

     </div>
    </div>

    <div className="about">
        <div className="row m-auto text-center">

            <div className="row py-5 ">
                <div className="col-lg-8 m-auto text-center">
                    <h1 className="headings">Not Just a ordinary Study room!!</h1>
                    <h6>Improve your skills with new friends all over the globe</h6>
                </div>
            </div>
    
            <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="assets/f1.jpeg" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="assets/f2.jpg" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="assets/f3.jpeg" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
            </div>
           
        </div>
    </div>
    <br/>
    <br/>
    <br/>

    <div className="study py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-9 m-auto text-center">
                    <h1>What are you waiting for!!</h1>
                </div>
            </div>
            <div className="row py-5 ">
                <div className="col-lg-5 m-auto text-center">
                    <button className="btn2"><a style={{textDecoration: 'none'}} href="study.html">Lets gooo!!</a></button>
                </div>
            </div>
            
        </div>

    </div>
    <div className="contact py-5">
      <div className="container py-5">
        <div className="row">
            <div className="col-lg-5 m-auto text-center">
                <h1>Contact Us</h1>
                <h6 style={{color:'red'}}>Always be in touch with us</h6>
            </div>
        </div>
        <div className="row py-5">
            <div className="col-lg-9 m-auto">
                <div className="row">
                    <div className="col-lg-4">
                        <h6>LOCATION</h6>
                        <p>New York 0911 First Street DC</p>
                   
                        <h6>PHONE</h6>
                        <p>03444-3243565</p>
               
                        <h6>EMAIL</h6>
                        <p>studybuddies123@gmail.com</p>
                  
                   </div>
                   <div className="col-lg-7">
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="form-control" placeholder="Second name"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 py-3">
                            <textarea name="" className="form-control" placeholder="Enter your message" id="" cols="10" rows="5"></textarea>
                        </div>
                    </div>
                    <button className="btn3">Submit</button>

                   </div>
               </div>
        </div>
      </div>
    </div>
    </div>
    <div className="newsletter py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-9 m-auto text-center">
                    <h1>Join Our Community</h1>
                    <input type="text" className="px-3" placeholder="Enter your mail"/>
                    <button className="btn">Submit</button>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-lg-11 m-auto">
                    <div className="row">
                        <div className="col-lg-3 py-3">
                            <h5 className=" pb-3 footerlogo">StudyBuddies</h5>
                            <p><a href="#">Home</a></p>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">Studyrooms</a></p>
                            <p><a href="#">Study together</a></p>
                        </div>

                        <div className="col-lg-3 py-3">
                            <h5 className="pb-3">Legal</h5>
                            <p><a href="#">Cookies</a></p>
                            <p><a href="#">Terms and conditions</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                          
                        </div>

                        <div className="col-lg-3 py-3">
                            <h5 className="pb-3">About</h5>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">Latest Features</a></p>
                            <p><a href="#">FAQ</a></p>
                            
                        </div>

                        <div className="col-lg-3 py-3">
                            <h5 className="pb-3">Social Media</h5>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                      
                    </div>

                    

                </div>
            </div>
        </div>

    </div>

      </div>
    
  )
}

export default Home;