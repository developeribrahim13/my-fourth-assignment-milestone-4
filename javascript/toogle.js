
function toogle(id){
    document.getElementById('all-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('interview-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('rejected-btn').classList.remove('bg-[#3B82F6]', 'text-white');

    document.getElementById('all-btn').classList.add('bg-white','text-gray-400');
    document.getElementById('interview-btn').classList.add('bg-white','text-gray-400');
    document.getElementById('rejected-btn').classList.add('bg-white','text-gray-400');

    document.getElementById(id).classList.remove('bg-white','text-gray-400');
    document.getElementById(id).classList.add('bg-[#3B82F6]', 'text-white');
}

// document.getElementById('interview-btn').addEventListener('click',function(){
    
// })

// document.getElementById('rejected-btn').addEventListener('click',function(){
    
// })

// document.getElementById('rejected-btn').addEventListener('click',function(){
  
// })