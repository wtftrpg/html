<html>
    <head>
        <title>サンプル</title>
        <script>
            function colorchange(i){

                var element = document.getElementById("aaa");

                if(i==1){

                    element.style.color="red";
                    element.style.fontSize ="20px";

                }else if(i==2){

                    element.style.color="blue";
                    element.style.fontSize="30px";
                
                }else{

                    element.style.color="yellow";
                    element.style.fontSize="40px";
                }
            }

            function setvalue(){
                var element
            }
        </script>
    </head>


    <body>
        <font id ="aaa">サンプル</font>
        <botton onclick="colorchange(1)">赤</botton>
        <botton onclick="colorchange(2)">青</botton>
        <botton onclick="colorchange(3)">黄</botton>
        <br>
        <input type="text" id="bbb">
        <button onclick="setvalue()">設定</button>
        </br>
        
    </body>


</html>