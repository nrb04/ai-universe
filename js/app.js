let fetchData = [];
const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((file) => displayCard(file.data.tools))
    
    };
const displayCard = tools =>{
  //console.log(tools)
  const cardDisplay = document.getElementById('card6')

 tools.forEach(tool => {
  console.log(tool)
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('col');
  cardDiv.innerHTML =`
  <div 
          class=" block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 p-5">
          
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
              ${(tool.features).map(fdata => "<li>" + fdata +"</li>" )}
               </ol>
            </p>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            

<div class="flex justify-between items-center">
<div>
    <h2 class="card-title">${tool.name}</h2>
     <p class="flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>  ${tool.published_in}</p>
</div>
<div>
          </div>
        </div>
      </div>
        
  
  `
  cardDisplay.appendChild(cardDiv); 
 });
 
}

loadData();

{/* <li>${tool.features[0]}</li>
<li>${tool.features[1]}</li>
<li>${tool.features[2]}</li>
<li>${tool?.features[3]}</li> */}
