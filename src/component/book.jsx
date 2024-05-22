
import { useParams} from "react-router-dom";
import { getbook } from "./databook/data";
import "./App.css";

   
const Book =()=> {
        const params = useParams();
        const book= getbook(params.id)
        console.log(params.id);
        if(book){
            return (
                <>
                <div className="allbook">

                    <p>{book.name}</p>
                    <p>{book.price}</p>
                    <p>{book.author}</p>
                    <a className="dl" href={book.music} download>دانلود اهنگ</a>
                </div>
                </>
            )
        }
   
};
export default Book;