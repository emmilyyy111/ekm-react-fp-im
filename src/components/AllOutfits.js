import { useState, useEffect } from 'react'


const AllInspo = () => {
    const [outfits, setOutfits] = useState ([])
console.log(outfits)
    useEffect(() => {
        fetch('http://localhost:5000/outfits')
        .then(response => response.json())
        .then(data => setOutfits(data))
        .catch(err => alert(err))
    }, [])
    

  return (
    <>
  {outfits.map(allOutfits => {
    const outfit = allOutfits
    return (
      <img style={{ width: 'auto', height: '300px'}} src={outfit.photo_url}/>
    )
   })
  }
  </>
  )       
}
export default AllInspo;
