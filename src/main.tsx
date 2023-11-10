
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./i18n.js"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { register } from "swiper/element/bundle"
import BottomSongController from './layout-components/BottomSongController/BottomSongController.tsx'
// import AudioVisualizer from './components/AudioVisualizer/AudioVisualizer.tsx'
// import { EditProfileModal } from './components/Modals/index.ts'
const AudioVisualizer = lazy(() => import("./components/AudioVisualizer/AudioVisualizer.tsx"))
const EditProfileModal = lazy(() => import("./components/Modals/index.ts").then(module => ({ default: module.EditProfileModal })))
register()

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider>
      <BottomSongController />

      <Suspense>
        <AudioVisualizer />
      </Suspense>

      <Suspense>
        <EditProfileModal />
      </Suspense>

      <App />
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
