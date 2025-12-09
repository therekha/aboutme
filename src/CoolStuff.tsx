import {useEffect, useState } from "react";

export function CoolStuff() {
    type Article = {
        title: string;
        url: string;
        source: string; 
        description: string;
    }

    let [articles, setArticles] = useState<Article[]>([]);

    function getLinks(): Article[] {
        //will b api call later
        return [{
            title: "How confessions can keep language models honest",
            url: "https://openai.com/index/how-confessions-can-keep-language-models-honest/?utm_source=tldrai",
            source: "OpenAI Blog",
            description: "By asking the model to provide a \"confession report\" with an independent reward model that prioritizes honesty, researchers are able to identify reward-hacking behavior that emerges when multiple goals are present."
        }]
    }

    
    useEffect(() => {
        setArticles(getLinks());
    }, []); 

  return (
    <div>
      <h1><strong>cool stuff</strong></h1>
        {articles.map((article) => ( 
            <div key={article.url} className="mb-4">
                <h1>
                    <a href={article.url} className="text-rosepink-500 hover:underline">
                        {article.title}
                    </a>
                </h1>
                <p><em>{article.source}</em></p>
                <p>{article.description}</p>
            </div>
        ))}
    </div>
  );
}