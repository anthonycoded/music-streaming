import React from 'react'
import BeatGallery from "./BeatGallery"

const Beats = () => {
    const tracks = []
    return (
        <div>
            <BeatGallery tracks={tracks}></BeatGallery>
        </div>
    )
}

export default Beats
