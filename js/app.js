
const loadAllData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((file) => displayCard(file.data.tools))
    
    };

const displayCard = (tools) =>{
  //console.log(tools)
  const cardDisplay = document.getElementById('card6')
  cardDisplay.innerText ='';
 tools.forEach(tool => {
  //console.log(tool)
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('col');
  cardDiv.innerHTML +=`
  <div class=" block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 p-5">
          
            <img
              class="rounded-t-lg"
              src="${tool.image}"
              alt="" />
  
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Features
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            
              <ol class="list-decimal">
             ${tool.features.map ((fdata) => "<li>" + fdata +". </li>").join('') }
               </ol>
            </p>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            

            <div class="flex justify-between items-center">
           
          
                <div>
                    <h2 class="card-title">${tool.name}</h2>
                    <p class="flex">
                  
                        ${tool.published_in}</p>
                        
              
                                        
                  </div>
                  <div class="flex">
                  <label onclick="loadModalData('${tool.id}')" for="my-modal-5"><svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
                              </svg></label>
                  </div>

          </div>




        </div>
      </div>
        
  
  `
  cardDisplay.appendChild(cardDiv); 


 });
 progressBar(false)     
 
}


const loadModalData = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(res => res.json())
  .then(idata => showModalData(idata.data))
}

const showModalData = (id) => {
  console.log(id)
  document.getElementById('description').innerText = `${id.description}`
  document.getElementById('cost').innerHTML = `
  <div class="bg-stone-50 rounded-lg p-3 font-bold text-green-500">
      <p>${id.pricing? id.pricing[0].price : 'Free of Cost'}</p>
      <p>${id.pricing? id.pricing[0].plan : 'Basic'}</p>
  </div>
  <div class="bg-stone-50 rounded-lg p-3 font-bold text-orange-500">
      <p>${id.pricing? id.pricing[1].price : 'Free of Cost'}</p>
      <p>${id.pricing? id.pricing[1].plan : 'Pro'}</p>
  </div>
  <div class="bg-stone-50 rounded-lg p-3 font-bold text-red-500 mr-8">
      <p>${id.pricing? id.pricing[2].price : 'Free of Cost'}</p>
      <p>${id.pricing? id.pricing[2].plan : 'Enterprise'}</p>
  </div>
  `
  document.getElementById('features').innerHTML = `
  <div>
  <p class="text-2xl font-semibold pb-3">Features</p>
  <ul class="list-disc font-light pb-8">
  <li>${id.features[1].feature_name}</li>
  <li>${id.features[2].feature_name}</li>
  <li>${id.features[3].feature_name}</li>
  </ul>
</div>


<div>
<p class="text-2xl font-semibold">Integrations</p>
<ul class="list-disc font-light pb-8">
${id.integrations ? id.integrations.map(data => (`<li>${data}</li>`)).join("") : 'No data Found'}
</ul>
</div>
  `
  
  document.getElementById('right-modal-container').innerHTML = `
  <div>
  <img src="${id.image_link[0]}"></img>
  <button id="btn-accuracy" class="btn btn-xs absolute right-10 top-8">${ ("Accuracy "+ id.accuracy.score) || ""}</button>
  </div>
  <div class="text-center mt-4">
  <h2 class="text-2xl font-semibold mb-4">${id.input_output_examples? id.input_output_examples[0].input : 'Can You Give any Example?'}</h2>
  <p>${id.input_output_examples? id.input_output_examples[0].output : 'No! Not Yet! Take a Break!!!'}</p>
  </div>
  `

}


const sortData = () => {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(res => res.json())
  .then(data => {
      data.data.tools.sort((a, b) => {

      const dateA = new Date(a.published_in);
      const dateB = new Date(b.published_in);
      
      if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
        });
        
        console.log(data);
        displayCard(data.data.tools);
    
        // document.getElementById('s').classList.add('hidden');
})

}




loadAllData();

{/* <li>${tool.features[0]}</li>
<li>${tool.features[1]}</li>
<li>${tool.features[2]}</li>
<li>${tool?.features[3]}</li> 

 <h2 class="card-title">${tool.name}</h2>
     <p class="flex"> <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
  <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
</svg>
 ${tool.published_in}</p>
  <label  for="my-modal-5"><svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
        </svg></label>

  <div>
  <label  for="my-modal-5"><i class="fa-solid fa-arrow-right"></i></label>
  </div>
</div>
<div class="card-actions justify-start">
  
</div>
</div>


<label onclick="loadModalData('${tool.id}')" for="my-modal-5"><i class="fa-solid fa-arrow-right"></i></label>













*/}