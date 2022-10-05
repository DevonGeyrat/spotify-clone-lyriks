import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/shazamcore';

import { Loader, SongCard } from '../components'


const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching } = useGetTopChartsQuery();


    if (isFetching) return <Loader title="Loading top charts" />

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-white text-3xl text-left mt-4 mb-10'>Discover Top Charts </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                    />
                ))}
            </div>

        </div>

    )
}

export default TopCharts;
