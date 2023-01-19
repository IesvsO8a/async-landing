const API = 'https://instagram-profile1.p.rapidapi.com/getfeed/iesvs86';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e5ee10d52msh71c8161a50481ebp1e9491jsne83e973fb4bc',
		'X-RapidAPI-Host': 'instagram-profile1.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const igposts = await fetchData(API);
    let view = `
    ${igposts.media.map(igpost => `
    <div class="group relative">
      <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${igpost.thumbnail_variant.xxsmall.thumbnail_src}" alt="${igpost.caption}" class="w-full">
      </div>
      <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${igpost.accessibility_caption}
        </h3>
      </div>
    </div>
    `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();