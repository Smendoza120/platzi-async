const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCLVz1B001PIbq9LliJenV2w&part=snippet%2Cid&order=date&maxResults=10";

const content = null || document.querySelector("#content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    "X-RapidAPI-Key": "6d365276cemsh831b77e089acd23p12a3f2jsn6a50f5e6cb75",
  },
};

async function fecthData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fecthData(API);
    let view = `
            ${videos.items
              .map(
                (video) =>
                  `
              <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img
                    src="${video.snippet.thumbnails.high.url}"
                    alt="${video.snippet.description}"
                    class="w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                  </h3>
                </div>
              </div>
              `
              )
              .slice(0, 10)
              .join("")}
        `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
