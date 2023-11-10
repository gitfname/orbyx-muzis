
import { Routes, Route, useLocation } from "react-router-dom"
import ApplicationLayout from "./layouts/ApplicationLayout";
import { useTranslation } from "react-i18next";
import { useEffect, lazy, Suspense } from "react";
import { BaseLayout } from "./layouts";
import { ApplicationRoutes } from "./routes";
import { Playback, Sidebar, Storage } from "./pages/Preferences/pages";
// import { MyAccount } from "./pages/Preferences/pages";
// import { Dashboard, Me, Settings } from "./pages";
// import { ForgotPassword, Login, Signup, SingleSong, VerifyEmail } from "./pages";
// import {
//   Albums, Artists, LikedSongs, Songs, SongsLibrary__Albums, SongsLibrary__Featured,
//   SongsLibrary__Popular, SongsLibrary__Trending, Videos, VideosLibrary, VideosLibrary__Featured,
//   VideosLibrary__Latest, VideosLibrary__Popular, VideosLibrary__Trending
// } from "./pages";
// import SongsLibrary from "./pages/SongsLibrary";
// import DownloadApp from "./pages/DownloadApp";
// import { HomePage, Browse, Search } from "./pages";
const HomePage = lazy(() => import("./pages/Home"))
const Browse = lazy(() => import("./pages/Browse"))
const Search = lazy(() => import("./pages/Search"))
const Albums = lazy(() => import("./pages/Albums"))
const Artists = lazy(() => import("./pages/Artists"))
const LikedSongs = lazy(() => import("./pages/LikedSongs"))
const Songs = lazy(() => import("./pages/Songs"))
const SongsLibrary__Albums = lazy(() => import("./pages/SongsLibrary__Albums"))
const SongsLibrary__Featured = lazy(() => import("./pages/SongsLibrary__Featured"))
const SongsLibrary__Popular = lazy(() => import("./pages/SongsLibrary__Popular"))
const SongsLibrary__Trending = lazy(() => import("./pages/SongsLibrary__Trending"))
const Videos = lazy(() => import("./pages/Videos"))
const VideosLibrary = lazy(() => import("./pages/VideosLibrary"))
const VideosLibrary__Featured = lazy(() => import("./pages/VideosLibrary__Featured"))
const VideosLibrary__Latest = lazy(() => import("./pages/VideosLibrary__Latest"))
const VideosLibrary__Popular = lazy(() => import("./pages/VideosLibrary__Popular"))
const VideosLibrary__Trending = lazy(() => import("./pages/VideosLibrary__Trending"))
const SongsLibrary = lazy(() => import("./pages/SongsLibrary"))
const DownloadApp = lazy(() => import("./pages/DownloadApp"))
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"))
const Login = lazy(() => import("./pages/Login"))
const Signup = lazy(() => import("./pages/Signup"))
const SingleSong = lazy(() => import("./pages/SingleSong"))
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"))
const Me = lazy(() => import("./pages/Me"))
const Settings = lazy(() => import("./pages/Settings"))
const Dashboard = lazy(() => import("./pages/Admin/DashBorad"))
const Preferences = lazy(() => import("./pages/Preferences"))
const MyAccount = lazy(() => import("./pages/Preferences/pages/MyAccount"))


function App() {

  const [_, i18n] = useTranslation()

  useEffect(
    () => {
      if (i18n.dir(i18n.language) === "rtl") {
        document.body.setAttribute("dir", "rtl")
      }
      else {
        document.body.setAttribute("dir", "ltr")
      }
    },
    [i18n.language]
  )

  return (
    <div className="w-screen h-screen overflow-hidden">

      <Routes>

        <Route
          path={ApplicationRoutes.pages.preferences.root}
          element={<Suspense><Preferences /></Suspense>}
        >
          <Route
            path={ApplicationRoutes.pages.preferences.myAccount}
            element={<Suspense><MyAccount /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.preferences.sidebar}
            element={<Suspense><Sidebar /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.preferences.playback}
            element={<Suspense><Playback /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.preferences.storage}
            element={<Suspense><Storage /></Suspense>}
          />

          <Route
            path="*"
            element={<p>hello world</p>}
          />
        </Route>

        <Route
          path={ApplicationRoutes.pages.downloadApp}
          element={<Suspense><DownloadApp /></Suspense>}
        />

        <Route
          path={ApplicationRoutes.pages.login}
          element={<Suspense><Login /></Suspense>}
        />

        <Route
          path={ApplicationRoutes.pages.signup}
          element={<Suspense><Signup /></Suspense>}
        />

        <Route
          path={ApplicationRoutes.pages.forgotPassword}
          element={<Suspense><ForgotPassword /></Suspense>}
        />

        <Route
          path={ApplicationRoutes.pages.verifyEmail}
          element={<Suspense><VerifyEmail /></Suspense>}
        />

        <Route
          path={ApplicationRoutes.pages.home}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense>
                  <HomePage />
                </Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.browse}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense>
                  <Browse />
                </Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.search}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense>
                  <Search />
                </Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.songs}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense>
                  <Songs />
                </Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.library.songs.home}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><SongsLibrary /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        >
          <Route
            path={ApplicationRoutes.pages.library.songs.trending}
            element={<Suspense><SongsLibrary__Trending /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.library.songs.featured}
            element={<Suspense><SongsLibrary__Featured /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.library.songs.popular}
            element={<Suspense><SongsLibrary__Popular /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.library.songs.albums}
            element={<Suspense><SongsLibrary__Albums /></Suspense>}
          />
        </Route>

        <Route
          path={ApplicationRoutes.pages.likedSongs}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><LikedSongs /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.videos}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><Videos /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.library.videos.home}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><VideosLibrary /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        >
          <Route
            path={ApplicationRoutes.pages.library.videos.trending}
            element={<Suspense><VideosLibrary__Trending /></Suspense>}
          />
          <Route
            path={ApplicationRoutes.pages.library.videos.featured}
            element={<Suspense><VideosLibrary__Featured /></Suspense>}
          />
          <Route
            path={ApplicationRoutes.pages.library.videos.popular}
            element={<Suspense><VideosLibrary__Popular /></Suspense>}
          />
          <Route
            path={ApplicationRoutes.pages.library.videos.latest}
            element={<Suspense><VideosLibrary__Latest /></Suspense>}
          />
        </Route>

        <Route
          path={ApplicationRoutes.pages.artists}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><Artists /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.albums}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><Albums /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.singleSong}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><SingleSong /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.adminPanel.dashboard}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><Dashboard /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.settings}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><Settings /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

        <Route
          path={ApplicationRoutes.pages.me}
          element={
            <BaseLayout>
              <ApplicationLayout>
                <Suspense><Me /></Suspense>
              </ApplicationLayout>
            </BaseLayout>
          }
        />

      </Routes>

      {/* <BaseLayout>

        <ApplicationLayout>

          <Routes>

            <Route
              path={ApplicationRoutes.pages.home}
              element={
                <Suspense>
                  <HomePage />
                </Suspense>
              }
            />

            <Route
              path={ApplicationRoutes.pages.browse}
              element={
                <Suspense>
                  <Browse />
                </Suspense>
              }
            />

            <Route
              path={ApplicationRoutes.pages.search}
              element={
                <Suspense>
                  <Search />
                </Suspense>
              }
            />

            <Route
              path={ApplicationRoutes.pages.songs}
              element={
                <Suspense>
                  <Songs />
                </Suspense>
              }
            />

            <Route
              path={ApplicationRoutes.pages.library.songs.home}
              element={<Suspense><SongsLibrary /></Suspense>}
            >
              <Route
                path={ApplicationRoutes.pages.library.songs.trending}
                element={<Suspense><SongsLibrary__Trending /></Suspense>}
              />

              <Route
                path={ApplicationRoutes.pages.library.songs.featured}
                element={<Suspense><SongsLibrary__Featured /></Suspense>}
              />

              <Route
                path={ApplicationRoutes.pages.library.songs.popular}
                element={<Suspense><SongsLibrary__Popular /></Suspense>}
              />

              <Route
                path={ApplicationRoutes.pages.library.songs.albums}
                element={<Suspense><SongsLibrary__Albums /></Suspense>}
              />
            </Route>

            <Route
              path={ApplicationRoutes.pages.likedSongs}
              element={<Suspense><LikedSongs /></Suspense>}
            />

            <Route
              path={ApplicationRoutes.pages.videos}
              element={<Suspense><Videos /></Suspense>}
            />

            <Route
              path={ApplicationRoutes.pages.library.videos.home}
              element={<Suspense><VideosLibrary /></Suspense>}
            >
              <Route
                path={ApplicationRoutes.pages.library.videos.trending}
                element={<Suspense><VideosLibrary__Trending /></Suspense>}
              />
              <Route
                path={ApplicationRoutes.pages.library.videos.featured}
                element={<Suspense><VideosLibrary__Featured /></Suspense>}
              />
              <Route
                path={ApplicationRoutes.pages.library.videos.popular}
                element={<Suspense><VideosLibrary__Popular /></Suspense>}
              />
              <Route
                path={ApplicationRoutes.pages.library.videos.latest}
                element={<Suspense><VideosLibrary__Latest /></Suspense>}
              />
            </Route>

            <Route
              path={ApplicationRoutes.pages.artists}
              element={<Suspense><Artists /></Suspense>}
            />

            <Route
              path={ApplicationRoutes.pages.albums}
              element={<Suspense><Albums /></Suspense>}
            />

            <Route
              path={ApplicationRoutes.pages.singleSong}
              element={<Suspense><SingleSong /></Suspense>}
            />

            <Route
              path={ApplicationRoutes.pages.adminPanel.dashboard}
              element={<Suspense><Dashboard /></Suspense>}
            />

            <Route
              path={ApplicationRoutes.pages.settings}
              element={<Suspense><Settings /></Suspense>}
            />

            <Route
              path={ApplicationRoutes.pages.me}
              element={<Suspense><Me /></Suspense>}
            />

          </Routes>

        </ApplicationLayout>
      </BaseLayout> */}
    </div>
  )
}

export default App