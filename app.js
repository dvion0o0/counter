var btns = document.querySelectorAll(".btn");

var show = document.querySelector(".value");

let count = 0;



btns.forEach(btn => {
    btn.addEventListener("click", function(e){
            const styles = e.currentTarget.classList;
           if(styles.contains("decrease")){
               count--;
           }else if(styles.contains("increase")){
               count++;
           }else{
               count = 0;
           }
        
           if(count > 0){
               value.style.color = "Blue";
           }
        if(count < 0 ){
            value.style.color = "Red";
        }
        if(count === 0){
            value.style.color = "Silver";
        }
        value.textContent = count;
        });
});
