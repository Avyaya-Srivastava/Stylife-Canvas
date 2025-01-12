import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: 'src/assets/b.png',
    fullDecal: 'src/assets/arc4.png',
});

export default state; 