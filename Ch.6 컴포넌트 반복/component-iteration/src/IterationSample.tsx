import { useRef, useState } from 'react';
type Article = {
    id: number,
    text: string
}
const IterationSample = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [articles, setArticles] = useState<Article[]>([
        {id: 1, text: 'A'},
        {id: 2, text: 'B'},
        {id: 3, text: 'C'},
        {id: 4, text: 'D'}
    ]);

    const [inputText, setInputText] = useState<string>('');
    const [nextId, setNextId] = useState<number>(5);

    const onChange = (e: any) => {
        setInputText(e.target.value);
    }
    const onClick = (e: any) => {
        let newArticles = articles.concat({
            id: nextId,
            text: inputText
        });

        if(inputRef.current) {
            inputRef.current.focus();
        }
        
        setInputText('');
        setNextId(nextId + 1);
        setArticles(newArticles);
    }
    const onRemove = (id: number) => {
        let newArticles = articles.filter((article: Article) => (id !== article.id));
        setArticles(newArticles);
    }

    const articleList = articles.map(article => 
        <li 
            key={article.id}
            onDoubleClick={() => {onRemove(article.id)}}
        >
            {article.text}
        </li>
    );
    
    return (
        <>
            <input
                type='text'
                ref={inputRef}
                value={inputText}
                onChange={onChange}
            />
            <button onClick={onClick}>Add</button>
            <ul>{articleList}</ul>
        </>
    );
};

export default IterationSample;