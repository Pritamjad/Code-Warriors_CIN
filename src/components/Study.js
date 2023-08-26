import React from 'react'
import '../assets/css/study.css'

const Study = () => {
  return (
    <div>
        <div class="navbar navbar-expand-lg ">
            <div class="container">
              <a class="navbar-brand" href="#">StudyBuddies</a>
            </div>
          </div>
          <div class="choose">
        <div class="row ">
            <div class="col-lg-6 solo ">

                <div class="row py-4">
                    <div class="col-lg-6 m-auto text-center">
                      <img src="assets/solo.jpeg" alt="" width="400px"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 m-auto text-center">
                        <h1>Study Solo</h1>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-lg-6 m-auto text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque, optio est perspiciatis mollitia cupiditate provident ullam? Labore pariatur, corporis illum magni eaque vel placeat quae fuga dolore voluptas tempore.</p>
                    </div>
                </div>

                <div class="row pb-5">
                    <div class="col-lg-6 m-auto text-center">
                     <button class="btn1">Study Solo</button>
                    </div>
                </div>
              
            </div>
            
            <div class="col-lg-6 together">
                <div class="row py-4">
                    <div class="col-lg-6 m-auto text-center">
                       <img src="assets/together.jpeg" alt="" width="450px"/>
                    </div>
                </div>
                <div class="row">
                   
                    <div class="col-lg-6 m-auto text-center">
                        <h1>Study Together</h1>
                    </div>
                    
                </div>
                <div class="row ">
                    <div class="col-lg-6 m-auto text-center">
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quidem asperiores, quod, accusamus similique ex tempora aliquam dolorem </p>
                    </div>
                </div>

                <div class="row pb-lg-0 pb-5">
                <a href='/classes'>
                    <div class="col-lg-8 m-auto text-center">
                     <button class="btn2">Study Together</button>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Study;