import React from "react";
// import test from '../../assets/images/01_exp curv shd.png';
// import test2 from '../../assets/images/03a_exp shd shrp.png';
// import test3 from '../../assets/images/06.jpg';
// import test4 from '../../assets/images/09.jpg';
// import test5 from '../../assets/images/13_crop.png';
// import test6 from '../../assets/images/32a_crop.png';
// import test7 from '../../assets/images/34_shd.png';
// import test8 from '../../assets/images/Grey Trunk clean.png';
// import test9 from '../../assets/images/14a_shd exp shrp.png';
import styled from "styled-components";


const Test = styled.div`
  box-sizing: border-box;

  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  
    justify-content: space-evenly;
  }

  .column {
  
    flex: 25%;
    max-width: 40%;
   
    padding: 10px;
  }

  .column img {
    margin-top: 14px;
    vertical-align: middle;
  }
`;

function Portfolio() {
  return (
    <>
      <Test>
        {/* <div className = 'row'>

          <div className= 'column'>
            <img alt='test' src={test3} style={{width:'100%'}}></img>
            <img alt='test' src={test} style={{width:'100%'}}></img>
            <img alt='test' src={test2} style={{width:'100%'}}></img>
          </div>
        
          <div className= 'column'>
            
            <img alt='test' src={test5} style={{width:'100%'}}></img>
            <img alt='test' src={test6} style={{width:'100%'}}></img>
            <img alt='test' src={test4} style={{width:'100%'}}></img>
          </div>

          <div className= 'column'>
            
            <img alt='test' src={test9} style={{width:'100%'}}></img>
            <img alt='test' src={test7} style={{width:'100%'}}></img>
            <img alt='test' src={test8} style={{width:'100%'}}></img>
          </div>
        

        </div> */}
        
        
      </Test>
    </>
  );
}

export default Portfolio;
