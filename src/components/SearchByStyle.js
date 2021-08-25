import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import AllInspo from './AllOutfits'


const SearchByStyle = () => {
  

  const [style, setStyle] = useState(null)

  return (
    <div>
        <div>
      <DropdownButton id="dropdown-basic-button" title="Search outfit by style">
      <Dropdown.Item title="Neutral" onClick={() => setStyle('neutral')}>Neutral</Dropdown.Item>
        <Dropdown.Item title="Vibrant" onClick={() => setStyle('vibrant')}>Vibrant</Dropdown.Item>
        <Dropdown.Item title="Monochromatic" onClick={() => setStyle('monochromatic')}>Monochromatic</Dropdown.Item>
        <Dropdown.Item title="Vintage" onClick={() => setStyle('vintage')}>Vintage</Dropdown.Item>
        <Dropdown.Item title="Casual" onClick={() => setStyle('casual')}>Casual</Dropdown.Item>
        <Dropdown.Item title="Sexy" onClick={() => setStyle('sexy')}>Sexy</Dropdown.Item>
        <Dropdown.Item title="Elegant" onClick={() => setStyle('elegant')}>Elegant</Dropdown.Item>
        <Dropdown.Item title="Comfy" onClick={() => setStyle('comfy')}>Comfy</Dropdown.Item>
      </DropdownButton>
      </div>
       {style != null ? <AllInspo style={style}/> : "" } 
    </div>
  )
}

export default SearchByStyle;
