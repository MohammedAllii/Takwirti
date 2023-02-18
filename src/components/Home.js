import axios from 'axios';


function Home() {

    return (
        <>
    <div className='component'>
    <h2 style={{margin:"10px"}}>Ben arous</h2>
    <img src={"./logo.jpg"} style={{width:"100px",height:"100px"}}/>
    <p>wiouuuuuuuuu</p>
    <p>Price: $20</p>
    <button className='btn btn-block' style={{marginBottom:"30px",backgroundColor:"red"}}>Delete Terrain</button>
    <button className='btn btn-block' style={{marginBottom:"30px"}}>Modify Terrain</button>

  </div>
  <br />
</>
);
    }
export default Home;