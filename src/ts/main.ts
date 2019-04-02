import data from './newsData';

// const reveal = (): void => {
//     const menu = document.getElementById("menu");
//     menu.style.display == "none" ? menu.style.display = "block" : menu.style.display = "none";
// };

// const refinedReveal = () => {
//     const menu = document.getElementById("menu").classList.toggle("not_hidden");
// };

(<any>window).refinedReveal = (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById("menu").classList.toggle("not_hidden");
}
const getTime = (date:string):string => {
    let dateObject = new Date(date);
    return dateObject.toLocaleDateString();
};

interface INewsData {
    status: string;
    totalResults: number;
    articles: IArticleData[];
};

interface IArticleData {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

const newsData: INewsData = data;


const addToPage = (article:IArticleData) => {
    let html = `<article>
    <div class="image" style="background-image:url('${(article.urlToImage) ? article.urlToImage=article.urlToImage : article.urlToImage="../../placeholder-image.jpg"}')"></div>
    <header>${article.title}</header>
    <span>${getTime(article.publishedAt)}</span>
    <div class="description">${article.description}</div>
</article>`
    document.getElementById("container").innerHTML += html;   
}

// addToPage();

newsData.articles.forEach(element => {
    addToPage(element)
});
