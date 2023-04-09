export default function Categories({handleState}) {
    
    const handleCategoryClick = (category) => {
        handleState(category);
    }
    
    return (
        <>
            <h1>Trivia</h1>
            <div className="category-container">
                <div className="category-row">
                    <div onClick={() => {handleCategoryClick("movie")}} className="category-box cine">Cine</div>
                    <div onClick={() => {handleCategoryClick("videogames")}} className="category-box videojuegos">Videojuegos</div>
                </div>
                <div className="category-row">
                    <div onClick={() => {handleCategoryClick("art")}} className="category-box arte">Arte</div>
                    <div onClick={() => {handleCategoryClick("science")}} className="category-box ciencia">Ciencia</div>
                </div>
            </div>
        </>
    )
}