type Props = {};
import { useState, useEffect } from "react";
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import InfoModal from './InfoModal';

export const Header = (props: Props) => {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);

  };

  const hideModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
      setModalVisible(true);
      localStorage.setItem('modalShown', 'true');
    }
  }, []);


  return (
    <header className='px-20 py-5 m-auto h-10 mt-5 md:h-16 flex justify-between items-center bg-[#dadce008]  rounded-3xl relative lg:w-[500px]'>
      <BsFillQuestionCircleFill className="absolute left-10 cursor-pointer text-[20px]" onClick={showModal} />
      <h1 className="uppercase tracking-widest  lg:mx-auto">Wordle</h1>
      {modalVisible && <InfoModal hideModal={hideModal} />}
    </header>
  );
};
