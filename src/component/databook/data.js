import music from "../Hayedeh - Roozaye Roshan.mp3"
const books =[
  {id: "1", name:"البوم هایده", author:"  نام خواننده هایده ", price:"قیمت محصول  100", music:music},
  {id: "2", name:"البوم امیر تتلو", author:"  نام خواننده امیر تتلو ", price:"قیمت محصول  200", music:music},
  {id: "3", name:"البوم مهستی", author:"  نام خواننده مهستی ", price:"قیمت محصول  300", music:music},
]



export const getbooks = () => {
    return books;
}
export const getbook = (id) => {
    return books.find(book => book.id === id);
}