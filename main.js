function getPasswordStrength(password){
    let s = 0;
    if(wordlist.includes(password, 0)){
      s=-1;
      return s;
      }
    if(password.length > 6){
      s++;
    }
    if(password.length > 10){
      s++;
    }
    if(/[A-Z]/.test(password)){
      s++;
    }
    if(/[0-9]/.test(password)){
      s++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
      s++;
    }
    return s;
  }
  document.querySelector(".pw-meter #password").addEventListener("focus",function(){
    document.querySelector(".pw-meter .pw-strength").style.display = "block";
  });
  document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
    let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
    if(el.classList.contains("active")){
      document.querySelector(".pw-meter #password").setAttribute("type","password");
      el.classList.remove("active");
    } else {
      document.querySelector(".pw-meter #password").setAttribute("type","text");
      el.classList.add("active");
    }
  });
  
  document.querySelector(".pw-meter #password").addEventListener('keydown', function(e) {
    
    let password = e.target.value;
    var charAll = password.length; 
    document.getElementById("all").innerHTML = charAll;
    var charUpper = password.length - password.replace(/[A-Z]/g, '').length; 
    document.getElementById("upr").innerHTML = charUpper;
    var charLower = password.length - password.replace(/[a-z]/g, '').length; 
    document.getElementById("lwr").innerHTML = charLower;
    var charNum = password.length - password.replace(/[0-9]/g, '').length; 
    document.getElementById("nmb").innerHTML = charNum;
    var numSpl = password.match(/[@#$%^&*()_+!\-=\[\]{};':"\\|,.<>\/?]/g);
    document.getElementById("sym").innerHTML = numSpl.length;
          
          });
    
    
    document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
      let password = e.target.value;
      let strength = getPasswordStrength(password);
      let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
    
    var charAll = password.length; 
    document.getElementById("all").innerHTML = charAll;
    var charUpper = password.length - password.replace(/[A-Z]/g, '').length; 
    document.getElementById("upr").innerHTML = charUpper;
    var charLower = password.length - password.replace(/[a-z]/g, '').length; 
    document.getElementById("lwr").innerHTML = charLower;
    var charNum = password.length - password.replace(/[0-9]/g, '').length; 
    document.getElementById("nmb").innerHTML = charNum;
    var numSpl = password.match(/[@#$%^&*()_+!\-=\[\]{};':"\\|,.<>\/?]/g);
    document.getElementById("sym").innerHTML = numSpl.length;
    
      if(strength > 0){
    strength = Math.max(strength,1);
    }
      passwordStrengthSpans[1].style.width = strength*20 + "%";
      if(strength < 0){
      passwordStrengthSpans[0].innerText = "Use Strong password";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#fac579";
    } else if(strength < 7){
        passwordStrengthSpans[0].innerText = "Weak";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#d13636";
      } else if(strength >= 7 && strength <= 13){
        passwordStrengthSpans[0].innerText = "Medium";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#e6da44";
      } else {
        passwordStrengthSpans[0].innerText = "Strong";
        passwordStrengthSpans[0].style.color = "#fff";
        passwordStrengthSpans[1].style.background = "#20a820";
      }
    });
    
    const wordlist = ["123456", "12345", "password", "password1", "123456789",
  "12345678","1234567890","abc123","computer", "123abc","warrior","Friends",
  "qwerty","internet","canada","hello","goodluck","quebec","helloworld", 
  "princess", "password123", "testing"];