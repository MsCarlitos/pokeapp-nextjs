import React, { FC } from 'react'
import { useRouter } from 'next/router';
import { Grid, Card } from '@nextui-org/react'

interface Props {
    id: number;
}

export const FavoritePokemonCard:FC<Props> = ({id}) => {
    const router = useRouter(); 
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
