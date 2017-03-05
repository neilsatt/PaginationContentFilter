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
        let innerLI = document.createElement('li');
        let anchorTag = document.createElement('a');
        anchorTag.addEventListener('click', doSomething, false);
        anchorTag.setAttribute('href',"#"); 
        anchorTag.innerHTML = i+1;
        innerLI.appendChild(anchorTag);
        

        paginationUL.appendChild(innerLI);
         
     }   
     //anchorTag[0].setAttribute('class',"active");
}

function doSomething(i) {
    alert(i);
}


addPaginationButtons(totalStudents);
   
    
// Add click event to the numbers and add the correct students to the page (1-10, 11-20, etc.), and make the button class active
// for()
        // {} anchorTag.setAttribute('class',"active");

