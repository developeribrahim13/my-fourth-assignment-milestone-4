
document.getElementById('all-cards').addEventListener('click',function(event){
   if(event.target.classList.contains('intrvw'))
    {
     const card = event.target.closest('.crd')
    
    const company = card.querySelector('.company-name').innerText;
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
    rendering();
    return;
    }
    card.querySelector('.bdg').innerText = 'INTERVIEW';
    card.querySelector('.bdg').classList.remove('badge-primary', 'text-[#002c5c]');
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
        rendering();
    }
}


});

function rendering(){
    document.getElementById('interview-section').innerHTML = '';
    for(let intr of interviewPart){
        const div = document.createElement('div');
        div.className = 'bg-white p-4 rounded-md space-y-3 crd';
        div.innerHTML = `
            <div class="flex justify-between">

                    <div>
                        <h3 class="company-name font-medium text-lg leading-9 text-[#002c5c]">${intr.company}</h3>
                        <p class="position text-gray-400">${intr.position}</p>
                    </div>

                    <button class="btn bg-white rounded-full p-3"><i class="fa-solid fa-trash"></i></button>
                </div>

                <p class="lts text-gray-400">${intr.lts}</p>
                <div class="badge badge-soft badge-primary text-[#002c5c] pt-5 pb-4 font-medium bdg">${intr.badge}</div>

                <p class="description text-gray-600">${intr.description}</p>
                <div class="space-x-1">
                    <button class="btn btn-outline btn-success intrvw">INTERVIEW</button>
                    <button class="btn btn-outline btn-error rjctd">REJECTED</button>
                </div>
        `;
        document.getElementById('interview-section').appendChild(div);
    }
};

