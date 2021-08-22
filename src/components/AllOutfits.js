import { useState } from 'react'

const AllOutfits = () => {
    return (
        <div className="all-outfits">
            {outfits.map((outfit) => (
                <div className="outfit-view" key={outfit.id}>
                    <h4>{outfit.style}</h4>
                    <div> 
                        <img ....... >
                    </div>
                </div>
            ))}
        </div>
    )
}