let total =  document.getElementById('total');
let interview =  document.getElementById('interview');
let rejected = document.getElementById('rejected');
let availableJobs = document.getElementById('available-jobs');

function count(){
    total.innerText = document.getElementById('all-cards').children.length;
    availableJobs.innerText = document.getElementById('all-cards').children.length;
    interview.innerText = interviewPart.length;
    rejected.innerText = rejectedPart.length;
    if(document.getElementById('all-cards').children.length==0)
        lukuChuri('no-data');
};

let interviewPart = [];

let rejectedPart = [];

count();

function pressAll(){
    let availableJobIs = document.getElementById('all-cards').children.length;
    availableJobs.innerText = availableJobIs;
    if(availableJobIs==0)
        lukuChuri('no-data');
};

function pressIntr(){
    let availableJobIs = document.getElementById('all-cards').children.length;
    let interviewIs = interviewPart.length;
    availableJobs.innerText = `${interviewIs} of ${availableJobIs}`;
    if(interviewIs==0)
        lukuChuri('no-data');
};

function pressRjctd(){
    let availableJobIs = document.getElementById('all-cards').children.length;
    let rejectedIs = rejectedPart.length;
    availableJobs.innerText = `${rejectedIs} of ${availableJobIs}`;
    if(rejectedIs==0)
        lukuChuri('no-data');
};
