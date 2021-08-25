const SearchByStyleResults = () => {
// const [neutral, setNeutral] = useState(null)
// const [vibrant, setVibrant] = useState(null)
// const [monochromatic, setMonochromatic] = useState(null)
const [searchResults, setSearchResults] = useState(null)

    const [outfits, setOutfits] = useState ([])
console.log(outfits)

    useEffect(() => {
        fetch('http://localhost:5000/outfits')
        .then(response => response.json())
        .then(data => setOutfits(data))
        .catch(err => alert(err))
    }, [])

    return (  
        <div>
            {outfits.map(allOutfits => {
            const outfit = allOutfits
        return (
            <img style={{ width: 'auto', height: '300px'}} src={outfit.photo_url}/>
    )
   })
  }
        </div>
    );
}
 
export default SearchByStyleResults;