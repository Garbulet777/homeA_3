        var currentImage = 0, count = 0;
        var click = 0, name = "0", prevName = "0";
        var path = new Array("./img/1.jpg", "./img/2.jpg", 
        "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/6.jpg");
        var img = new Array ();		
        // предзагрузка изображений галереи 
        for (var i=0; i < path.length; i++) {
            img[i] = new Image (320, 240);
            img[i].src = path[i];			
            img[i].onload = countImages;
        }
        // подсчет количества загруженных изображений и вывод информации 
        function countImages () {
            count++;
            if (count == path.length)
                info.innerText = "Готово!";
            else			
                info.innerText = "Загрузка изображений: " + count + " из " + path.length;			
        }
   
        function grow(){
            // currentImage = +name;
            document.images["pic"+currentImage].style.width="320px";
            document.images["pic"+currentImage].style.height="240px";  
            show();
            click++;
            if(click%2 == 0){
                document.images["pic"+currentImage].style.width="100px";
                document.images["pic"+currentImage].style.height="100px";  
                click = 0;
                pointers.style.display="none";
            }
           
        }
        function show(){
            pointers.style.display="block";
        }
        function hide(){
            pointers.style.display="none";
        }

        function getName(nameG){
            // if(click%2!=0){
            name = nameG;
            // prevName = name;
           // }
        }

        function nextImage() {
            if (count != path.length) {
                alert ("Дождитесь пожалуйста загрузки всех изображений!");
                return;
            }	
            
            document.images["pic"+currentImage].style.width="100px";
            document.images["pic"+currentImage].style.height="100px"; 	
            currentImage++;

            if (currentImage == path.length) 
                currentImage = 0;
            document.images["pic"+currentImage].src = img[currentImage].src;
            document.images["pic"+currentImage].style.width="320px";
            document.images["pic"+currentImage].style.height="240px";  
            return false;
        }
        function prevImage(){
            if (count != path.length) {
                alert ("Дождитесь пожалуйста загрузки всех изображений!");
                return;
            }	
            document.images["pic"+currentImage].style.width="100px";
            document.images["pic"+currentImage].style.height="100px"; 
            
            currentImage--;
            if(currentImage == -1)
                currentImage = path.length-1;
            document.images["pic"+currentImage].src = img[currentImage].src;
            document.images["pic"+currentImage].style.width="320px";
            document.images["pic"+currentImage].style.height="240px";  
            return false;
        }
