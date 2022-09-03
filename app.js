
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
}


