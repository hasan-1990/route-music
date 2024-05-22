
import {getbooks} from './databook/data';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Books = () => {
    let books = getbooks();
    return (
        <>
         <div className='bookes'>
            {
                books.map (book => (
                    <NavLink to={book.id} key={book.id} style={({isActive})=>({
                        color: isActive ? 'red' : ''
                    })}>
           
                        {book.name}
                    </NavLink>
                    
                ))
            }
         </div> 
         <Outlet/> 
        </>
    );
};

export default Books;