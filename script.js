var count=0;
function colorchanger(){
    var colors = [
        "linear-gradient(to bottom right, #ffbf00, #00ffff)",
        "linear-gradient(to bottom right, #8A2387, #E94057, #F27121)",
        "linear-gradient(to bottom right, #ff9966, #ff5e62)",
        "linear-gradient(to bottom right, #1A2980, #26D0CE)",
        "linear-gradient(to bottom right, #536976, #292E49)",
        "linear-gradient(to bottom right, #02aab0, #00cdac)",
        "linear-gradient(to bottom right, #4b6cb7, #182848)",
        "linear-gradient(to bottom right, #c31432, #240b36)",
        "linear-gradient(to bottom right, #20002c, #cbb4d4)",
        "linear-gradient(to bottom right, #7f00ff, #e100ff)",
        "linear-gradient(to bottom right, #654ea3, #eaafc8)",
        "linear-gradient(to bottom right, #eacda3, #d6ae7b, #cd8b6c, #c94c4c)",
        "linear-gradient(to bottom right, #FF6B6B, #556270)",
        "linear-gradient(to bottom right, #5f2c82, #49a09d)",
        "linear-gradient(to bottom right, #F3904F, #3B4371)",
        "linear-gradient(to bottom right, #DE6262, #FFB88C)",
        "linear-gradient(to bottom right, #3a1c71, #d76d77, #ffaf7b)",
        "linear-gradient(to bottom right, #1e3c72, #2a5298)",
        "linear-gradient(to bottom right, #4b6cb7, #182848)",
        "linear-gradient(20deg, #7b4397, #dc2430)"
      ];
      document.getElementsByTagName("body")[0].style.background=colors[count++];
      if(count>colors.length-1)
      count=0;
}