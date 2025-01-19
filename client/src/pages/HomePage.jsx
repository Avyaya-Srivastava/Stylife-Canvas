import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const HomePage = () => {
  const snap = useSnapshot(state);
  

  return (
   <AnimatePresence>
    {snap.intro &&(
      <motion.section className='HomePage' {...slideAnimation('left')}>
        <motion.header {...slideAnimation("down")}>
          <img
            src='/src/assets/logo.png'
            alt='logo'
            className='w-30 h-12 object-contain'
          />
        </motion.header>

        <motion.div className='HomePage-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br></br> <br className='x1:block hidden'/>STYLIFE.
              </h1>
            </motion.div>
        </motion.div>
        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
          <p className='max-w-md font-normal text-grey-600 text-base'>
            Put your Imagination on your Cloth, with our brand-new 3D customization tool.<strong>Unleash your Imagination</strong>{" "}and define your own Style.
          </p>

          <CustomButton
            type="filled"
            title= "Customize It"
            handleClick={() => state.intro = false}
            customeStyles="w-fit px-4 py-2.5 font-bold text-sm"
          />
        </motion.div>
      </motion.section>
    )}
   </AnimatePresence>
  )
}

export default HomePage;