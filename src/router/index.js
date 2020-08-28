import React from 'react'
import { Redirect } from 'react-router-dom'

import SkyDiscover from '@/pages/discover'
import SkyRecommend from '@/pages/discover/c-pages/recommend'
import SkyRanking from '@/pages/discover/c-pages/ranking'
import SkySongs from '@/pages/discover/c-pages/songs'
import SkyArtist from '@/pages/discover/c-pages/artist'
import SkyDjradio from '@/pages/discover/c-pages/djradio'
import SkyAlbum from '@/pages/discover/c-pages/album'

import SkyMine from '@/pages/mine'
import SkyFriend from '@/pages/friend'

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: SkyDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: SkyRecommend
      },
      {
        path: "/discover/ranking",
        component: SkyRanking
      },
      {
        path: "/discover/songs",
        component: SkySongs
      },
      {
        path: "/discover/djradio",
        component: SkyDjradio
      },
      {
        path: "/discover/artist",
        component: SkyArtist
      },
      {
        path: "/discover/album",
        component: SkyAlbum
      },
    ]
  },
  {
    path: "/mine",
    component: SkyMine
  },
  {
    path: "/friend",
    component: SkyFriend
  }
]

export default routes