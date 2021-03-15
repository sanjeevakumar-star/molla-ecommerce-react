import React from 'react'
// import {BsArrowDownShort} from 'react-icons/bs'
 import  Blogscss from '../componentecommerce/Blogs.css';

function Blogs(){

    return(<div className="container">
<h3 className="blogtitle"><b>From Our Blog</b></h3>
  
<div className="blogimage">
          
<div className="row">
   



<div className="col-md-4">       
<img className="blogimg"  src="https://d-themes.com/react/molla/demo-2/assets/images/home/posts/post-1.jpg" alt="our blogs"/>

<p><a className="bloglink1" href="">jan 28,2020,</a>0 Comments</p>
<a href="" className="bloglink"><h5>Sed Adipiscing Ornare</h5></a>
<p>Lorem ipsum dolor sit amet,consectetuer adipiscing alit.phasellus hendreit a;iquet nibh consectetuer adipiscing alit.phasellus hendreit </p>
<a href="" className="bloglinks">Read More</a>



</div>


<div className="col-md-4">       
<img className="blogimg"  src="https://d-themes.com/react/molla/demo-2/assets/images/home/posts/post-2.jpg" alt="our blogs"/>

<p><a className="bloglink1" href="">jan 28,2020,</a>0 Comments</p>
<a href="" className="bloglink"><h5>Fusce Lacinia arcuet nulla</h5></a>
<p>sed pretium,ligula sollicitudin laoreet viverra,tortor libero sodales leo,eget blandit nunc tortor en nibh nullam mollis justo</p>
<a href="" className="bloglinks">Read More</a>



</div>


<div className="col-md-4">
<img className="blogimg" src="https://d-themes.com/react/molla/demo-2/assets/images/home/posts/post-3.jpg" alt="our blogs"/>
<p><a className="bloglink1" href="">jan 28,2020,</a>0 Comments</p>
<a className="bloglink" href=""><h5>Quisque volutpatmattiseros </h5></a>
<p>Suspendisse potenti sed egestas ,antet vulputate volutpat, eros ede semper est,vitae luctus metus libero eu angue</p>
<a href=""className="bloglinks">Read More</a>




</div>
</div>
   
    </div>
   
    </div>
    );

}
export default Blogs;