
function toogle(id){
    document.getElementById('all-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('interview-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('rejected-btn').classList.remove('bg-[#3B82F6]', 'text-white');

    document.getElementById('all-btn').classList.add('bg-white','text-gray-400');
    document.getElementById('interview-btn').classList.add('bg-white','text-gray-400');
    document.getElementById('rejected-btn').classList.add('bg-white','text-gray-400');

    document.getElementById(id).classList.remove('bg-white','text-gray-400');
    document.getElementById(id).classList.add('bg-[#3B82F6]', 'text-white');

    if(id=='all-btn')
    {
        lukuChuri('all-cards');
        pressAll();
    }
    else if(id=='interview-btn')
    {
        lukuChuri('interview-section');
        pressIntr();
    }
    else if(id=='rejected-btn')
    {
        lukuChuri('rejected-section');
        pressRjctd();
    }
};

function lukuChuri(id){
    document.getElementById('all-cards').classList.remove('hidden');
    document.getElementById('interview-section').classList.remove('hidden');
    document.getElementById('rejected-section').classList.remove('hidden');
    document.getElementById('no-data').classList.remove('hidden');

    document.getElementById('all-cards').classList.add('hidden');
    document.getElementById('interview-section').classList.add('hidden');
    document.getElementById('rejected-section').classList.add('hidden');
    document.getElementById('no-data').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
};


