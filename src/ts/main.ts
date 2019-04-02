import data from './newsData';

const reveal = (): void => {
    const menu = document.getElementById("menu");
    menu.style.display == "none" ? menu.style.display = "block" : menu.style.display = "none";
};

// const refinedReveal = () => {
//     const menu = document.getElementById("menu").classList.toggle("not_hidden");
// };

// (<any>window).refinedReveal = (e: MouseEvent) => {
//     e.preventDefault();
//     document.getElementById("menu").classList.toggle("not_hidden");
// }
// const getTime = ():void => {
//     var date:string = new Date().toLocaleTimeString();
//     document.getElementById("time-stamp").innerHTML=date;
// };
// getTime();

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


const addToPage = () => {
    let html = `<article>
    <img src="http://www.placekitten.com/600/400" alt="a cat" />
    <header>Intoxicated cat steals JCB, ploughs into local town hall</header>
    <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.</div>
</article>`
    document.getElementById("container").innerHTML = html;   
}

addToPage();

// newsData.articles.forEach(element => {
//     addToPage(element;)
// });
