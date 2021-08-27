import { useState, useEffect, useContext } from 'react'
import { UserProfile } from '../App'

const AllInspo = ({style}) => {
  const {token} = useContext(UserProfile)
    const [outfits, setOutfits] = useState ([])
    console.log(style)
    
    style = !style ? "" : style

    useEffect(() => {
      console.log(style)
        fetch(`http://localhost:5000/outfits/${style}`)
        .then(response => response.json())
        .then(data => setOutfits(data))
        .catch(err => alert(err))
    }, [style])
    

  return (
    <div className="all-outfits">
  {outfits.map(allOutfits => {
    const outfit = allOutfits
    return (
      <img style={{ width: 'auto', height: '300px'}} src={outfit.photo_url}/>
    )
   })
  }
  </div>
  )       
}
export default AllInspo;
