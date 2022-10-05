import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useGetSongsByCountryQuery } from '../redux/services/shazamcore';

import { Error, Loader, SongCard } from '../components'


const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);

    console.log(country)

    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_FM5oU4BPaB3v3fW5TNKABiZgu209G')
            .then((res) => setCountry(res?.data?.location.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [country])

    if (isFetching && loading) return <Loader title="Loading songs around you" />

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-white text-3xl text-left mt-4 mb-10'>Around You <span className='font-black'>{country}</span></h2>

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

export default AroundYou;
