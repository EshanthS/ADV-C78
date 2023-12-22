var images=["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var nameoffamily = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;

function update() {
   var numberOfFamilyMembers = 5 ;
   if (i > numberOfFamilyMembers){
    i = 0
   }
   var updatedImage = images[1];
   var updatednames = nameoffamily[i];
   document.getElementById("image").src = updatedImage;
   document.getElementById("names").innerHTML = updatednames; 

}