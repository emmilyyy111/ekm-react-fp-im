const favoriteScreens = () => {

    // const handleFavClick = () => {
    //     const [userFav, setUserFav] = ('')
    //     console.log('Added to your favorite inspo!')
    // }

    return(
        <div className="user-favorites">
            {outfits.map((outfit) =>
            <div className="outfit-preview" key={outfit.id}></div>
            )}
            <Button onClick={handleFavClick} setUserFav={setUserFav}> Add inspo</Button> 
        </div>
    )
}
export default favoriteScreens;