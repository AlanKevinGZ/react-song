

export const addSongs = (song) =>{
    return {
        type:'ADD_SONG',
        payload:{
            name:song,
        }
    }
}



export const removeSong = (id) =>{
    return {
        type:'REMOVE_SONG',
        payload:id
    }
}