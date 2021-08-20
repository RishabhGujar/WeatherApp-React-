import React from 'react';
import {bounce} from 'react-animations';
import { css, StyleSheet } from "aphrodite";
import { BiFootball } from "react-icons/bi";
import './loadingStyle.css'

/*
const styles = StyleSheet.create( {
    bounceOutDown:{
      animationName: bounceOutDown,
      animationDuration : "10s",
      animationIterationCount:"infinite"
    }
})
const styles1 = StyleSheet.create( {
    bounceOutLeft:{
      animationName: bounceOutLeft,
      animationDuration : "10s",
      animationIterationCount:"infinite"
    }
})
const styles2 = StyleSheet.create( {
    bounceOutRight:{
      animationName: bounceOutRight,
      animationDuration : "10s",
      animationIterationCount:"infinite"
    }
})
const styles3 = StyleSheet.create( {
    bounceOutUp :{
      animationName: bounceOutUp ,
      animationDuration : "10s",
      animationIterationCount:"infinite"
    
    }
})
*/
const styles4 = StyleSheet.create( {
    bounce :{
      animationName: bounce ,
      animationDuration : "3s",
      animationIterationCount:"infinite"
    
    }
})

const styles5 = StyleSheet.create( {
  bounce :{
    animationName: bounce ,
    animationDuration : "4s",
    animationIterationCount:"infinite"
  
  }
})
const styles6 = StyleSheet.create( {
  bounce :{
    animationName: bounce ,
    animationDuration : "5s",
    animationIterationCount:"infinite"
  
  }
})
const styles7 = StyleSheet.create( {
  bounce :{
    animationName: bounce ,
    animationDuration : "6s",
    animationIterationCount:"infinite"
  
  }
    
})
const styles8 = StyleSheet.create( {
  bounce :{
    animationName: bounce ,
    animationDuration : "2s",
    animationIterationCount:"infinite"
  
  }
    
})


function WindMillLoading(){
    return(
    <div className="center">
       
              <div className={css(styles4.bounce)}>
                    <BiFootball className="c1"/>
             </div>

              <div className={css(styles5.bounce)}>
                    <BiFootball className="c2"/>
             </div>

             <div className={css(styles6.bounce)}>
                    <BiFootball className="c3"/>
             </div>
             <div className={css(styles7.bounce)}>
                    <BiFootball className="c4"/>
             </div>
             <div className={css(styles8.bounce)}>
                    <BiFootball className="c5"/>
             </div>
            
       
          
   </div>)
}





export {WindMillLoading};
