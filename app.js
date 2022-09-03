
const loadCategory = async () => {
    try {
        const url = "https://openapi.programming-hero.com/api/news/categories";
        const res = await fetch(url);
        const data = await res.json();
        displayCategory(data.data.news_category)
    } catch (error) {
        console.log(error);
    }
}


const displayCategory = async (data) => {
    const categoryContainer = document.getElementById('displayCategory');
    data.foreach(category => {
        const { category_name, category_id } = category;
        const categoriesDiv = Document.createElement('li');
        categoriesDiv.classList.add("font-semibold")
        categoriesDiv.innerHtml = `<a onclick="loadCard(${category_id})">${category_name}</a>
        `;
        categoryContainer.appendChild(categoriesDiv);
    });
}

// card section

const loadCard = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayCard(data.data)


    } catch (error) {
        console.log(error);
    }
};

const displayCard = (cards) => {
    const cardSection = document.getElementById('card-section');
    cardSection.textContent = ""
    // founded msg 
    const foundedMessege = document.getElementById('founded-msg');
    foundedMessege.classList.remove('hidden')

    // founded-text
    const fountText = document.getElementById('founded-text');
    fountText.innerText = cards.length;


    // spneer

    const speenerContainer = document.getElementById('speener-container');
    speenerContainer.classList.remove('hidden');
    // console.log(speenerContainer);

    // sort 

    const sortFind = cards.sort((x, y) => {
        if (x.total_view < y.total_view) {
            return 1;
        }
        else {
            return -1;
        }
    })
    // console.log(sortFind);

}


