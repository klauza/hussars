import "./style.scss";
import { app } from "./js/app.js"; 



function loadImageAsync(url){
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', event => resolve(img));
    img.addEventListener('erorr', reason => reject(new Error('error')));

    img.src = url;
  })
}

const bgCss = 
 `background-image: linear-gradient(rgba(0, 0, 0, 0.25), 
  rgba(0, 0, 0, 0.25)),
  url("https://user-images.githubusercontent.com/43997053/61578935-fffd2380-aaf5-11e9-9839-a0fff0e2d490.jpg");`;


 window.addEventListener('DOMContentLoaded', () => {
  loadImageAsync("https://user-images.githubusercontent.com/43997053/61578935-fffd2380-aaf5-11e9-9839-a0fff0e2d490.jpg")
  .then(img => document.querySelector('.customHeader').style.cssText = bgCss)
  .then(
    app(),
    document.querySelector('.loader').classList.add('hidden')
    )
  .catch(reason => console.log(reason));
  
  
});
