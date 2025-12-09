import {useEffect, useState } from "react";

export function Currently () {
    let [books, setBooks] = useState<string[]>([]);

    //dummy data for now
    useEffect(() => {
        setBooks(["wuthering heights", "playing to win"]);
    }, []);
    
    return (
        <div>
          <h1><strong>currently reading:</strong></h1>
          {books.map((book) => (
            <p key={book}>{book}</p>
          ))}   
        </div>
    );
}