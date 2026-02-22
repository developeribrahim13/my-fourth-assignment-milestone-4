
function khelaShuru(id){

document.getElementById(id).addEventListener('click',function(event){
   if(event.target.closest('.intrvw'))
    {
     const card = event.target.closest('.crd')
    
    const company = card.querySelector('.company-name').innerText;
    rejectedPart = rejectedPart.filter(elmnt => elmnt.company !== company)
    count();
    rendering('rejected-section', rejectedPart);
    const position =card.querySelector('.position').innerText;
    const lts = card.querySelector('.lts').innerText;
    const description = card.querySelector('.description').innerText;
    let badge = card.querySelector('.bdg').innerText;
    if(badge=='INTERVIEW')
    {
    card.querySelector('.bdg').classList.remove('badge-outline', 'badge-success');        
    card.querySelector('.bdg').classList.add('badge-primary', 'text-[#002c5c]');
    card.querySelector('.bdg').innerText = 'NOT APPLIED'; 
    interviewPart = interviewPart.filter(elmnt => elmnt.company !== company);
    count();
    rendering('interview-section',interviewPart);
    return;
    }
    card.querySelector('.bdg').innerText = 'INTERVIEW';
    card.querySelector('.bdg').classList.remove('badge-primary', 'text-[#002c5c]');
    card.querySelector('.bdg').classList.remove('badge-outline', 'badge-error');
    card.querySelector('.bdg').classList.add('badge-outline', 'badge-success');

    const cardElement = {
        company,
        position,
        lts,
        badge:'INTERVIEW',
        description
    };

    const exist = interviewPart.find(item => item.company == cardElement.company);

    if(!exist)
    {
        interviewPart.push(cardElement);
        count();
        rendering('interview-section',interviewPart);
    }
}

   else if(event.target.closest('.rjctd'))
    {
     const card = event.target.closest('.crd')
    
    const company = card.querySelector('.company-name').innerText;
    interviewPart = interviewPart.filter(elmnt => elmnt.company !== company)
    count();
    rendering('interview-section', interviewPart);
    const position =card.querySelector('.position').innerText;
    const lts = card.querySelector('.lts').innerText;
    const description = card.querySelector('.description').innerText;
    let badge = card.querySelector('.bdg').innerText;
    if(badge=='REJECTED')
    {
    card.querySelector('.bdg').classList.remove('badge-outline', 'badge-error');        
    card.querySelector('.bdg').classList.add('badge-primary', 'text-[#002c5c]');
    card.querySelector('.bdg').innerText = 'NOT APPLIED'; 
    rejectedPart = rejectedPart.filter(elmnt => elmnt.company !== company);
    count();
    rendering('rejected-section', rejectedPart);
    return;
    }
    card.querySelector('.bdg').innerText = 'REJECTED';
    card.querySelector('.bdg').classList.remove('badge-primary', 'text-[#002c5c]');
    card.querySelector('.bdg').classList.remove('badge-outline', 'badge-success');
    card.querySelector('.bdg').classList.add('badge-outline', 'badge-error');

    const cardElement = {
        company,
        position,
        lts,
        badge:'REJECTED',
        description
    };

    const exist = rejectedPart.find(item => item.company == cardElement.company);

    if(!exist)
    {
        rejectedPart.push(cardElement);
        count();
        rendering('rejected-section', rejectedPart);
    }
}

else if(event.target.closest('.trash')){
    alldelete(event);
     if(id=='interview-section')
        pressIntr();
     else if(id=='rejected-section')
        pressRjctd();
     else
        pressAll();
};

});

};


function rendering(id, arry){
    document.getElementById(id).innerHTML = '';
    for(let el of arry){
        const div = document.createElement('div');
        div.className = 'bg-white p-4 rounded-md space-y-3 crd';
        div.innerHTML = `
            <div class="flex justify-between">

                    <div>
                        <h3 class="company-name font-medium text-lg leading-9 text-[#002c5c]">${el.company}</h3>
                        <p class="position text-gray-400">${el.position}</p>
                    </div>

                    <button class="btn bg-white rounded-full p-3 trash"><i class="fa-solid fa-trash"></i></button>
                </div>

                <p class="lts text-gray-400">${el.lts}</p>
                <div class="badge badge-soft badge-primary text-[#002c5c] pt-5 pb-4 font-medium bdg">${el.badge}</div>

                <p class="description text-gray-600">${el.description}</p>
                <div class="space-x-1">
                    <button class="btn btn-outline btn-success intrvw">INTERVIEW</button>
                    <button class="btn btn-outline btn-error rjctd">REJECTED</button>
                </div>
        `;
        document.getElementById(id).appendChild(div);
    }
};


khelaShuru('all-cards');
khelaShuru('interview-section');
khelaShuru('rejected-section');


document.getElementById('rejected-section').addEventListener('click',function(event){
   if(event.target.closest('.trash'))
    {
     alldelete(event);
     pressRjctd();
    }
});

function alldelete(event){
    const card = event.target.closest('.crd');

    const company = card.querySelector('.company-name').innerText;
    rejectedPart = rejectedPart.filter(elmnt => elmnt.company !== company)
    interviewPart = interviewPart.filter(elmnt => elmnt.company !== company)
    card.remove();
    rendering('interview-section', interviewPart);
    rendering('rejected-section', rejectedPart);
    count();
};

