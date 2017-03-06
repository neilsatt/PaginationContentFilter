// variables
let innerLI;
let anchorTag;



// Find the total number of students using 'student-item cf' classes
let totalStudents = document.querySelectorAll('.student-item.cf').length;
let individualStudent = document.querySelectorAll('.student-item.cf');

// declare dynamic elements to be added

// When the page loads, hide all but the first 10 students in the list 
function maxStudentsTen() {
    console.log("total students: "+totalStudents);
     for(var i = 0; i < totalStudents; i++){
            if(i > 9){
                individualStudent[i].style.display = "none"; 
            }   
        }
    
}

maxStudentsTen();


// Add the pagination section to the pagination div, based on how many students there are
function addPaginationButtons (numOfStudents) {   
    let paginationUL = document.createElement('ul');
    document.getElementsByClassName('pagination')[0].appendChild(paginationUL);
    
  
    
    // Figure out how many buttons should be added
    let numOfButtons = Math.floor(numOfStudents/10);
    console.log('numBtns: '+numOfButtons); 

    // loop through num of buttons to be added, then add the li elements
     for(i = 0; i<numOfButtons;i++){  
        innerLI = document.createElement('li');
        anchorTag = document.createElement('a'); 
        anchorTag.addEventListener('click', filterStudents, false);
        anchorTag.setAttribute('id', i+1); 
        anchorTag.setAttribute('href',"#"); 
        anchorTag.innerHTML = i+1;
        innerLI.appendChild(anchorTag);
        if(anchorTag)
         
        paginationUL.appendChild(innerLI);
        // make the 1st button active when ititially loading 
         if(i===0){
             anchorTag.setAttribute('class',"active");
         }
         
     }   
     
}

// Add the correct students to the page (1-10, 11-20, etc.), and make the button class active
function filterStudents(e) {
        var clickedBtn = e.target.id;
        console.log("Item: "+clickedBtn);
        console.log(anchorTag);
        // remove the initial first highlight
        let firstAnchor = document.getElementById('1')
        firstAnchor.removeAttribute('class',"active");
    
        switch(clickedBtn){
            case "1":
                console.log(clickedBtn);
                this.setAttribute('class',"active");
                break; 
            case "2":
                console.log(clickedBtn);
                this.setAttribute('class',"active");
                break; 
            case "3":
                console.log(clickedBtn);
                this.setAttribute('class',"active");
                break; 
            default: 
                console.log('error');
        }
            
}


addPaginationButtons(totalStudents);
   
    
// 
// for()
        // {} anchorTag.setAttribute('class',"active");

