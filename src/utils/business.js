import { getAlbum, GetMvDetail } from '@/api'
import { router } from "@/router"
import { isDef, notify } from "./common"

export function createSong(song){
    const {id, name, img, artists, duration, albumId, albumName, mvId, ...rest} = song

    return{
        id,
        name,
        img,
        artists,
        duration,
        albumName,
        url:getSongPlayUrl(song.id),
        artistsText: getArtistisText(artists),
        durationSecond: duration / 1000,
        albumId,
        mvId,
        ...rest
    }
}

export function genArtistisText(artists){
    return (artists || []).map(({ name }) => name).join('/')
}