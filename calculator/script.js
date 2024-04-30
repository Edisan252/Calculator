let op=document.getElementById('op-screen');

        function display(num){
            op.value+=num;
        }

        function calculate(){
            try{
                op.value = eval(op.value);
            }
            catch{
                alert("Invalid");
            }
        }

        function Clear(){
            op.value="";
        }

        function del(){
            op.value=op.value.slice(0,-1);
        }