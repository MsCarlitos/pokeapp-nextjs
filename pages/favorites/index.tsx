import React, { useState } from 'react';
import { NextPage } from 'next';
import { Container, Text, Grid, Card } from '@nextui-org/react';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/utils';
import { useEffect } from 'react';
import { localStorageFavorites } from '../../utils';
import { FavoritesPokemons } from '../../components/pokemon/FavoritesPokemons';

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localStorageFavorites.pokemons());
  }, [])

  return (
    <Layout title='Pokemons - favoritos'>
      {favoritePokemons.length === 0
        ? <NoFavorites />
        : <FavoritesPokemons favoritePokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export default FavoritesPage;
