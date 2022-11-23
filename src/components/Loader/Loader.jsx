import { ColorRing } from 'react-loader-spinner';

export const Loader = () => (
  <div>
    <ColorRing
      visible={true}
      height="160"
      width="160"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  </div>
);
