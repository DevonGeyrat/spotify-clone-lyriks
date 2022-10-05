import React, { useEffect, useState } from 'react';
import { useGetTopChartsQuery } from '../redux/services/shazamcore';

import { Loader, SongCard, ArtistCard } from '../components'


const TopArtists = () => {
    const { data, isFetching } = useGetTopChartsQuery();


    if (isFetching) return <Loader title="Loading top charts" />

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-white text-3xl text-left mt-4 mb-10'>Discover Top Artists</h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((track) => (
                    <ArtistCard
                        key={track.key}
                        track={track}
                    />
                ))}
            </div>

        </div>

    )
}

export default TopArtists;
