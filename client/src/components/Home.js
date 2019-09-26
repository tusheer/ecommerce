import React, { Component } from 'react'
import Slider from "react-slick";
import Card from './card';
import MainContext from '../context/mainContext';


export default class Home extends Component {
    static contextType = MainContext;


   state = {
       data:[],
       show:true
   }

   

   componentDidMount(){
       this.setState({data:[...this.context.women]})
       window.scrollTo(0, 0);
   }


   onclick = ()=>{
       this.setState({data:[...this.state.data,...this.context.mens],show:false})
   }
    render() {
        const width = window.innerWidth
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:2000,
            autoplay: true,
            fade: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };


          var settings1 = {
            dots: true,
            infinite: true,
            slidesToShow: width > 781 ? 3 : 1,
            slidesToScroll: 1,
            speed:1000,
            autoplay: true,
            autoplaySpeed: 1000,
          
          };

         
        return (
            <MainContext.Consumer>
            {value => (<React.Fragment>
    
                <section class="hero-section">
                <Slider {...settings}>
                 <div className='set-bg' style={{zIndex:'10000000'}}>
                
                            <div class=" set-bg" style={{background:'url("img/bg.jpg")',backgroundSize:'cover',height:'auto',backgroundPosition:'center',zIndex:'10000000'}}>
                                <div class="row"  style={{padding:'100px 40px'}}>
                                    <div class="col-md-6" style={{zIndex:"234234234234234234"}}>
                                        <span className='text-white' style={{fontSize:'20px',textTransform:'uppercase'}}>New Arrivals</span>
                                        <h2 className='text-white' style={{fontSize:'60px',textTransform:'uppercase',padding:'15px 0px'}}>Red top jackets</h2>
                                        <p className='text-white' style={{lineHeight:'25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                        <a href="#" class="site-btn sb-line mr-3 mb-2">DISCOVER</a>

                                        <button className="site-btn white-btn"  onClick={()=> value.cartadd({name:'Red top jackets',price:29,img:'img/bg.jpg'})}  >ADD TO CART</button>
                                    </div>
                                    <div class="offer-card text-white col-sm-6 shorna">
                                    <div className='tusher'>
                                    
                                  
                                        <span>from</span>
                                        <h2>$29</h2>
                                        <p>SHOP NOW</p>
                                        </div>
                                     </div>
                                </div>
                                </div>
                                
                       
                        </div> 
                        <div className='set-bg' style={{zIndex:'10000'}}>
                
                            <div class=" set-bg"  style={{background:'url("img/bg-2.jpg")',backgroundSize:'cover',height:'auto',backgroundPosition:'center',zIndex:'100000'}}>
                                <div class="row"  style={{padding:'100px 40px'}}>
                                    <div class="col-md-6 " style={{zIndex:"2"}}>
                                        <span className='text-white' style={{fontSize:'20px',textTransform:'uppercase'}}>New Arrivals</span>
                                        <h2 className='text-white' style={{fontSize:'60px',textTransform:'uppercase',padding:'15px 0px'}}>denim jackets</h2>
                                        <p className='text-white'  style={{lineHeight:'25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                        <a href="#" class="site-btn sb-line mr-3 mb-2">DISCOVER</a>

                                        <button className='site-btn white-btn'    onClick={()=> value.cartadd({ name:'denim jackets', price: 29, img: 'img/bg-2.jpg' })}>ADD TO CART</button>
                                    </div>
                                    <div class="offer-card text-white col-sm-6 shorna" >
                                    <div className='tusher'>
                                    <span>from</span>
                                    <h2>$29</h2>
                                    <p>SHOP NOW</p>
                                    </div>
                                   
                                </div>
                                </div>
                               
                            </div>
                         
                       
                        </div>
                        </Slider>
                    <div class="container">
                        <div class="slide-num-holder" id="snh-1"></div>
                    </div>
                </section>
         
                <section class="features-section">
                    <div class="container-fluid">
                        <div class="row">
                       
                        
                            <div class="col-md-4 p-0 feature">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="img/icons/1.png" alt="#"/>>
                                    </div>
                                    <h2>Fast Secure Payments</h2>
                                </div>
                            </div>
                            <div class="col-md-4 p-0 feature">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="img/icons/2.png" alt="#"/>
                                    </div>
                                    <h2>Premium Products</h2>
                                </div>
                            </div>
                            <div class="col-md-4 p-0 feature">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="img/icons/3.png" alt="#"/>
                                    </div>
                                    <h2>Free & fast Delivery</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
             
                <section class="top-letest-product-section">
                    <div class="container">
                        <div class="section-title">
                            <h2>LATEST PRODUCTS</h2>
                        </div>
                        <div class="product-slider ">
                        <Slider {...settings1}>
                            {this.context.women.map(data=> <div className="p-2" key={data.name}><Card img={data.img}  name={data.name} price={data.price}/> </div>)}                        
                        </Slider>
                        </div>
                    </div>
                </section>
          
                <section class="product-filter-section">
                    <div class="container">
                        <div class="section-title">
                            <h2>BROWSE TOP SELLING PRODUCTS</h2>
                        </div>
                      
                        <div class="row">
                           
                            {this.state.data.map(data=>{
                                return( <div class="col-lg-3 col-sm-6" key={data.name}><Card img={data.img}  name={data.name} price={data.price}/> </div>)
                                
                            })}
                                
                           
                        </div>
                        {
                            this.state.show && (<div class="text-center pt-5">
                            <button class="site-btn sb-line sb-dark" onClick={this.onclick}>LOAD MORE</button>
                        </div>)
                        }
    
                        
                    </div>
                </section>
            
            
            
              
                <section class="banner-section">
                    <div class="container">
                        <div class="banner set-bg" style={{backgroundImage:"url('img/banner-bg.jpg')"}}>
                            <div class="tag-new">NEW</div>
                            <span>New Arrivals</span>
                            <h2>STRIPED SHIRTS</h2>
                            <button class="site-btn" onClick={()=> value.cartadd({name:'STRIPED SHIRTS',price:29,img:'img/product/8.jpg'})}>SHOP NOW</button>
                        </div>
                    </div>
                </section>
                </React.Fragment>)}
          </MainContext.Consumer>



            
        )
    }
}
