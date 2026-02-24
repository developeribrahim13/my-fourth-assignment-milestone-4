
function khelaShuru(id){

document.getElementById(id).addEventListener('click',function(event){
   if(event.target.closest('.intrvw'))
    {
     const card = event.target.closest('.crd')
    
    const company = card.querySelector('.company-name').innerText;
    
    const position =card.querySelector('.position').innerText;
    const lts = card.querySelector('.lts').innerText;
    const description = card.querySelector('.description').innerText;
    let badge = card.querySelector('.bdg').innerText;
    if(badge=='INTERVIEW')
    {
    alert('this job already exist in interview');
    return;
    }

    success(company);
    rejectedPart = rejectedPart.filter(elmnt => elmnt.company !== company)
    count();
    rendering('rejected-section', rejectedPart);
    if(id!=='all-cards')
        pressRjctd();

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
        if(id==='interview-section')
            pressIntr();
        else if(id==='rejected-section')
            pressRjctd();
    }
}

   else if(event.target.closest('.rjctd'))
    {
     const card = event.target.closest('.crd')
    
    const company = card.querySelector('.company-name').innerText;
    
    const position =card.querySelector('.position').innerText;
    const lts = card.querySelector('.lts').innerText;
    const description = card.querySelector('.description').innerText;
    let badge = card.querySelector('.bdg').innerText;
    if(badge=='REJECTED')
    {
    alert('this job already exist in rejected');
    return;
    }

    error(company);
    interviewPart = interviewPart.filter(elmnt => elmnt.company !== company)
    rendering('interview-section', interviewPart);
    count();
    if(id!=='all-cards')
        pressIntr();
    
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
        if(id==='interview-section')
            pressIntr();
        else if(id==='rejected-section')
            pressRjctd();
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
        const clrClass = (el.badge === 'INTERVIEW')? 'badge-success': 'badge-error';
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
                <div class="badge badge-soft badge-outline ${clrClass} pt-5 pb-4 font-medium bdg">${el.badge}</div>

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


function alldelete(event){
    const card = event.target.closest('.crd');
    
    const company = card.querySelector('.company-name').innerText;
    notavailable(company);
    rejectedPart = rejectedPart.filter(elmnt => elmnt.company !== company)
    interviewPart = interviewPart.filter(elmnt => elmnt.company !== company)
    card.remove();
    rendering('interview-section', interviewPart);
    rendering('rejected-section', rejectedPart);
    count();
};

function notavailable(company){
    const mew = document.querySelectorAll('#all-cards .crd');
    mew.forEach(card =>{
    const cmpny = card.querySelector('.company-name').innerText;
        if(cmpny === company){
        const badge = card.querySelector('.bdg');
    badge.innerText = "NOT APPLIED";
    badge.classList.remove('badge-outline', 'badge-success');
    badge.classList.remove('badge-outline', 'badge-error');
    badge.classList.add('badge-primary', 'text-[#002c5c]');
        }
    });
};

function error(company){
    const mew = document.querySelectorAll('#all-cards .crd');
    mew.forEach(card =>{
    const cmpny = card.querySelector('.company-name').innerText;
        if(cmpny === company){
        const badge = card.querySelector('.bdg');
    badge.innerText = "REJECTED";
    badge.classList.remove('badge-outline', 'badge-success');
    badge.classList.remove('badge-primary', 'text-[#002c5c]');
    badge.classList.add('badge-outline', 'badge-error');
        }
    });
};

function success(company){
    const mew = document.querySelectorAll('#all-cards .crd');
    mew.forEach(card =>{
    const cmpny = card.querySelector('.company-name').innerText;
        if(cmpny === company){
        const badge = card.querySelector('.bdg');
    badge.innerText = "INTERVIEW";
    badge.classList.remove('badge-primary', 'text-[#002c5c]');
    badge.classList.remove('badge-outline', 'badge-error');
    badge.classList.add('badge-outline', 'badge-success');
        }
    });
};
