export const genres=[
    {id:"1",name:"Action"},
    {id:"2",name:"Comedy"},
    {id:"3",name:"Thriller"}
];

export function getGenre(){
    return genres.filter(g=>g);
}