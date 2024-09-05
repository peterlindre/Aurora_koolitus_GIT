import { Link } from "react-router-dom";

function Navbar() {
  return (
   <div>
    <img className='main-picture' src="https://i.pinimg.com/originals/ea/fd/32/eafd327860e774cf4a2847b066da1310.jpg" alt="" />

    <p className='HELLO'> Hello, I am Peter Lindre and this website is made for Programming or Design to show my portfolio</p>
    <div className='rectangle'>
    <div className="navigation-pictures">

    <Link className='main-link' to="work">
      <img src="https://cdn.prod.website-files.com/64a6f67b79a80fd9ff31ca7a/651861925d86eb8b1c8d90b0_651189e081964b9002b1e6d1_64c2586cc3eccac8b6a2e3a9_tb.png" alt="" />
    <p>Tööde lehele</p>
    </Link>
    <Link className='main-link' to="hobbies">
      <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8959327/og_image/optimized/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" alt="" />
    <p>Hobide lehele</p>
    </Link> 
    <Link className='main-link' to="courses">
      <img src="https://knoow.net/wp-content/uploads/2016/04/presentation.design.jpg" alt="" />
    <p>Kursuste lehele</p>
    </Link>
     
    </div>
    </div>
    </div>
    
  )
}

export default Navbar