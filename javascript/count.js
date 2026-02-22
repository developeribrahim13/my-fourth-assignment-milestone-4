let total =  document.getElementById('total');
let interview =  document.getElementById('interview');
let rejected = document.getElementById('rejected');
let availableJobs = document.getElementById('available-jobs');

function count(){
    total.innerText = document.getElementById('all-cards').children.length;
    availableJobs.innerText = document.getElementById('all-cards').children.length;
    interview.innerText = interviewPart.length;
    rejected.innerText = rejectedPart.length;
}

let interviewPart = [];
let rejectedPart = [];

count();